/**
 * Bunyan
 */

"use strict";


/* Node modules */
var steeplejack = require("steeplejack");

var Base = steeplejack.Base;


/* Third-party modules */
var chai = require("chai");
var sinon = require("sinon");
var proxyquire = require("proxyquire");

var Logger = steeplejack.Logger;


/* Files */


chai.use(require("sinon-chai"));
var expect = chai.expect;


describe("Bunyan test", function () {

    var inst,
        Bunyan,
        bunyanStub;
    beforeEach(function () {
        inst = {
            level: sinon.stub(),
            fatal: sinon.stub(),
            error: sinon.stub(),
            warn: sinon.stub(),
            info: sinon.stub(),
            debug: sinon.stub(),
            trace: sinon.stub()
        };

        bunyanStub = {
            createLogger: sinon.stub()
        };
        bunyanStub.createLogger
            .withArgs({
                name: undefined
            })
            .throws(new TypeError("options.name (string) is required"));
        bunyanStub.createLogger
            .returns(inst);
        Bunyan = proxyquire("../../src/Bunyan", {
            bunyan: bunyanStub
        });
    });

    describe("Instantiation tests", function () {

        it("should throw an error when created with no options", function () {

            var obj;
            var fail = false;

            try {
                obj = new Bunyan();
            } catch (err) {

                fail = true;

                expect(err).to.be.instanceof(TypeError);
                expect(err.message).to.be.equal("options.name (string) is required");

            } finally {

                expect(obj).to.be.undefined;

                expect(fail).to.be.true;

            }

        });

        it("should return an instance when name provided and default to error level", function () {

            var obj = new Bunyan({
                name: "test"
            });

            expect(bunyanStub.createLogger).to.have.been.calledOnce
                .to.be.calledWith({
                    name: "test"
                });

            expect(obj).to.be.instanceof(Bunyan)
                .to.be.instanceof(Logger)
                .to.be.instanceof(Base);

            expect(inst.level).to.have.been.calledOnce
                .calledWith("error");

            expect(obj.fatal).to.be.a("function");
            expect(obj.error).to.be.a("function");
            expect(obj.warn).to.be.a("function");
            expect(obj.info).to.be.a("function");
            expect(obj.debug).to.be.a("function");
            expect(obj.trace).to.be.a("function");

        });

        it("should return an instance when name provided and set the error level", function () {

            var obj = new Bunyan({
                logLevel: "debug",
                name: "test"
            });

            expect(bunyanStub.createLogger).to.have.been.calledOnce
                .to.be.calledWith({
                    name: "test"
                });

            expect(inst.level).to.have.been.calledOnce
                .calledWith("debug");

            expect(obj.fatal).to.be.a("function");
            expect(obj.error).to.be.a("function");
            expect(obj.warn).to.be.a("function");
            expect(obj.info).to.be.a("function");
            expect(obj.debug).to.be.a("function");
            expect(obj.trace).to.be.a("function");

        });

        it("should not set streams when empty array given", function () {

            var obj = new Bunyan({
                logLevel: "debug",
                name: "test",
                streams: []
            });

            expect(bunyanStub.createLogger).to.have.been.calledOnce
                .to.be.calledWith({
                    name: "test"
                });

            expect(inst.level).to.have.been.calledOnce
                .calledWith("debug");

            expect(obj.fatal).to.be.a("function");
            expect(obj.error).to.be.a("function");
            expect(obj.warn).to.be.a("function");
            expect(obj.info).to.be.a("function");
            expect(obj.debug).to.be.a("function");
            expect(obj.trace).to.be.a("function");

        });

        it("should set streams when array given", function () {

            var streams = [{
                stream: process.stderr
            }];

            var obj = new Bunyan({
                logLevel: "debug",
                name: "test",
                streams: streams
            });

            expect(bunyanStub.createLogger).to.have.been.calledOnce
                .calledWith({
                    name: "test",
                    streams: streams
                });

            expect(inst.level).to.have.been.calledOnce
                .calledWith("debug");

            expect(obj.fatal).to.be.a("function");
            expect(obj.error).to.be.a("function");
            expect(obj.warn).to.be.a("function");
            expect(obj.info).to.be.a("function");
            expect(obj.debug).to.be.a("function");
            expect(obj.trace).to.be.a("function");

        });

    });

    describe("Methods", function () {

        var obj;
        beforeEach(function () {
            obj = new Bunyan({
                name: "test"
            });
        });

        describe("#fatal", function () {

            it("should call the bunyan fatal method", function () {

                inst.fatal.returns(true);

                expect(obj.fatal("message")).to.be.true;

                expect(inst.fatal).to.have.been.calledOnce
                    .to.have.been.calledWith("message");

            });

        });

        describe("#error", function () {

            it("should call the bunyan error method", function () {

                inst.error.returns(true);

                expect(obj.error("message")).to.be.true;

                expect(inst.error).to.have.been.calledOnce
                    .to.have.been.calledWith("message");

            });

        });

        describe("#warn", function () {

            it("should call the bunyan warn method", function () {

                inst.warn.returns(true);

                expect(obj.warn("message")).to.be.true;

                expect(inst.warn).to.have.been.calledOnce
                    .to.have.been.calledWith("message");

            });

        });

        describe("#info", function () {

            it("should call the bunyan info method", function () {

                inst.info.returns(true);

                expect(obj.info("message")).to.be.true;

                expect(inst.info).to.have.been.calledOnce
                    .to.have.been.calledWith("message");

            });

        });

        describe("#debug", function () {

            it("should call the bunyan debug method", function () {

                inst.debug.returns(true);

                expect(obj.debug("message")).to.be.true;

                expect(inst.debug).to.have.been.calledOnce
                    .to.have.been.calledWith("message");

            });

        });

        describe("#trace", function () {

            it("should call the bunyan trace method", function () {

                inst.trace.returns(true);

                expect(obj.trace("message")).to.be.true;

                expect(inst.trace).to.have.been.calledOnce
                    .to.have.been.calledWith("message");

            });

        });

    });

});


