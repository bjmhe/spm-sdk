/** 页面浏览（PV）上报参数 */
export interface SpmJDMPSDKPVOptions {
  /** SPM 埋点编码（平台申请的 spm 值） */
  spm: string;
  /** 业务类型 */
  biz_type?: string;
  /** 页面ID */
  pageId: string;
  /** 页面名称 */
  pageName: string;
  /** 页面参数，用于自定义页面维度信息 */
  pageParam?: string;
}

/** 点击（Click）事件上报参数 */
export interface SpmJDMPSDKCKOptions {
  /** SPM 埋点编码 */
  spm: string;
  /** 业务类型 */
  biz_type?: string;
  /** 事件ID（改造埋点必填） */
  eventId: string;
  /** 页面ID */
  pageId?: string;
  /** 页面参数，用于自定义页面维度信息 */
  pageParam?: string;
  /** 事件参数 */
  eventParam?: string;
  /** JSON 格式扩展参数 */
  jsonParam?: string;
  /** SCM 营销链路编码 */
  scm?: string;
}

/** 曝光（Exposure）事件上报参数 */
export interface SpmJDMPSDKEPOptions {
  /** SPM 埋点编码 */
  spm: string;
  /** 业务类型 */
  biz_type?: string;
  /** 事件ID（改造埋点必填） */
  eid: string;
  /** 页面ID */
  pageId?: string;
  /** JSON 格式扩展参数 */
  jsonParam?: string;
  /** 自定义键值对参数 */
  map?: string;
  /** SCM 营销链路编码 */
  scm?: string;
}

/**
 * 京东小程序端子午线 SPM 埋点 SDK
 *
 * 提供页面浏览、点击、曝光埋点上报能力
 */
export class SpmJDMPSDK {
  /**
   * 页面浏览（PV）上报
   *
   * @param options - PV 上报参数
   */
  static pv(options: SpmJDMPSDKPVOptions) {
    try {
      // 调用京东小程序 PV 上报接口
      jd.spmPV({ ...options });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * 点击事件上报
   *
   * @param options - 点击事件上报参数
   */
  static ck(options: SpmJDMPSDKCKOptions) {
    try {
      // 调用京东小程序点击上报接口
      jd.spmClick({ ...options });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * 曝光事件上报
   *
   * @param options - 曝光事件上报参数
   */
  static ep(options: SpmJDMPSDKEPOptions) {
    try {
      // 调用京东小程序曝光上报接口
      jd.spmExposure({ ...options });
    } catch (error) {
      console.error(error);
    }
  }
}
