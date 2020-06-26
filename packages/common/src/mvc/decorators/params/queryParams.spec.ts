import {expect} from "chai";
import {ParamRegistry, ParamTypes, QueryParams, RawQueryParams} from "../../../../src/mvc";

describe("@QueryParams", () => {
  it("should call ParamFilter.useParam method with the correct parameters", () => {
    class Test {}

    class Ctrl {
      test(@QueryParams("expression", Test) header: Test) {}
    }

    const param = ParamRegistry.get(Ctrl, "test", 0);
    expect(param.expression).to.eq("expression");
    expect(param.paramType).to.eq(ParamTypes.QUERY);
    expect(param.type).to.eq(Test);
  });

  it("should call ParamFilter.useParam method with the correct parameters (rawQueryParams)", () => {
    class Ctrl {
      test(@RawQueryParams("expression") header: string) {}
    }

    const param = ParamRegistry.get(Ctrl, "test", 0);
    expect(param.expression).to.eq("expression");
    expect(param.paramType).to.eq(ParamTypes.QUERY);
  });
});
