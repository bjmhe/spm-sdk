/** 子午线 H5 MPing 上报实例（由外部脚本提供） */
declare class SpmPV {}
declare class SpmClick {}
declare class SpmExposure {}

class MPing {
  static inputs: {
    SpmPV: new (options?: object) => SpmPV;
    SpmClick: new (options?: object) => SpmClick;
    SpmExposure: new (options?: object) => SpmExposure;
  };
  send(options: SpmPV | SpmClick | SpmExposure): void;
}

const jd: {
  spmPV: Function;
  spmClick: Function;
  spmExposure: Function;
};

interface Window {
  jaq: any;
  spmPV: Function;
  spmLog: Function;
  spmExposure: Function;
  spmSystem: Function;
  MPing: MPing;
}
