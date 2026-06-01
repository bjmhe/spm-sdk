class MPing {
  static inputs;
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
