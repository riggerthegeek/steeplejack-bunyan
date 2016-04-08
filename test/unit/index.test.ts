/**
 * index.test
 */

"use strict";


/* Node modules */


/* Third-party modules */


/* Files */
import {expect, proxyquire, sinon} from "../helper";


describe("bunyan test", function () {

    beforeEach(function () {

        this.inst = {
            level: sinon.stub(),
            fatal: sinon.stub(),
            error: sinon.stub(),
            warn: sinon.stub(),
            info: sinon.stub(),
            debug: sinon.stub(),
            trace: sinon.stub()
        };

        this.bunyanStub = {
            createLogger: sinon.stub()
        };

        this.bunyanStub.createLogger
            .returns(this.inst);

        this.Bunyan = proxyquire("../index", {
            bunyan: this.bunyanStub
        }).Bunyan;

    });

    describe("methods", function () {

        beforeEach(function () {

            this.obj = new this.Bunyan({
                name: "test"
            });

            expect(this.bunyanStub.createLogger).to.have.been.calledOnce
                .to.be.calledWith({
                name: "test"
            });

            expect(this.obj).to.be.instanceof(this.Bunyan);

        });

        describe("#level", function () {

            it("should call the bunyan level method", function () {

                this.inst.level.returns("level");

                expect(this.obj.level("myLevel", "arg2")).to.be.equal("level");

                expect(this.inst.level).to.be.calledOnce
                    .calledWithExactly("myLevel", "arg2");

            });

        });

        describe("#fatal", function () {

            it("should call the bunyan fatal method", function () {

                this.inst.fatal.returns(true);

                expect(this.obj.fatal("message", "arg2", "arg3", {}, [])).to.be.true;

                expect(this.inst.fatal).to.have.been.calledOnce
                    .to.have.been.calledWith("message", "arg2", "arg3", {}, []);

            });

        });

        describe("#error", function () {

            it("should call the bunyan error method", function () {

                this.inst.error.returns(true);

                expect(this.obj.error("message", "arg2", "arg3", {}, [])).to.be.true;

                expect(this.inst.error).to.have.been.calledOnce
                    .to.have.been.calledWith("message", "arg2", "arg3", {}, []);

            });

        });

        describe("#warn", function () {

            it("should call the bunyan warn method", function () {

                this.inst.warn.returns(true);

                expect(this.obj.warn("message", "arg2", "arg3", {}, [])).to.be.true;

                expect(this.inst.warn).to.have.been.calledOnce
                    .to.have.been.calledWith("message", "arg2", "arg3", {}, []);

            });

        });

        describe("#info", function () {

            it("should call the bunyan info method", function () {

                this.inst.info.returns(true);

                expect(this.obj.info("message", "arg2", "arg3", {}, [])).to.be.true;

                expect(this.inst.info).to.have.been.calledOnce
                    .to.have.been.calledWith("message", "arg2", "arg3", {}, []);

            });

        });

        describe("#debug", function () {

            it("should call the bunyan debug method", function () {

                this.inst.debug.returns(true);

                expect(this.obj.debug("message", "arg2", "arg3", {}, [])).to.be.true;

                expect(this.inst.debug).to.have.been.calledOnce
                    .to.have.been.calledWith("message", "arg2", "arg3", {}, []);

            });

        });

        describe("#trace", function () {

            it("should call the bunyan trace method", function () {

                this.inst.trace.returns(true);

                expect(this.obj.trace("message", "arg2", "arg3", {}, [])).to.be.true;

                expect(this.inst.trace).to.have.been.calledOnce
                    .to.have.been.calledWith("message", "arg2", "arg3", {}, []);

            });

        });

    });

});
