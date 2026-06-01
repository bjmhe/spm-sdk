/** 微信小程序 SDK 初始化配置 */
export interface SpmWXMPSDKInstallOptions {
  /** EasyAnalytics 申请的站点编号 */
  siteId: string;
  /** 微信提供的 appid */
  appid: string;
  /** 用户登录京东的账号 */
  account: string;
  /** 微信提供的 openid */
  openid: string;
  /** 微信提供的 unionid */
  unionid: string;
  /** 纬度 */
  latitude?: string;
  /** 经度 */
  longitude?: string;
  [key: string]: string | boolean | undefined;
}

/** 页面浏览（PV）上报参数 */
export interface SpmWXMPSDKPVOptions {
  /** SPM 埋点编码 */
  spm: string;
  /** 页面ID */
  page_id?: string;
  /** 页面参数，用于自定义页面维度信息 */
  pparam?: string;
}

/** 点击（Click）事件上报参数 */
export interface SpmWXMPSDKCKOptions {
  /** SPM 埋点编码 */
  spm: string;
  /** 业务类型 */
  biz_type: string;
  /** 事件ID */
  event_id?: string;
  /** 页面ID */
  page_id?: string;
  /** 事件参数 */
  eparam?: string;
  /** 页面参数，用于自定义页面维度信息 */
  pparam?: string;
}

/** 曝光（Exposure）事件上报参数 */
export interface SpmWXMPSDKEPOptions {
  /** SPM 埋点编码 */
  spm: string;
  /** 业务类型 */
  biz_type: string;
  /** 事件ID */
  event_id?: string;
  /** 页面ID */
  page_id?: string;
  /** 事件参数 */
  eparam?: string;
  /** 页面参数，用于自定义页面维度信息 */
  pparam?: string;
}

/**
 * 微信小程序端子午线 SPM 埋点 SDK
 *
 * 提供页面浏览、点击、曝光埋点上报能力
 */
export class SpmWXMPSDK {
  /** 埋点上报工具实例 */
  private static log: any;

  /**
   * 初始化 SDK，加载微信小程序埋点脚本
   *
   * @param options - 初始化配置项
   */
  static install(options: SpmWXMPSDKInstallOptions) {
    try {
      // 加载微信小程序埋点工具并初始化
      const logUtil = require("./weixinAppReport.js");
      SpmWXMPSDK.log = logUtil.init();
      // 设置站点、账号等配置信息
      SpmWXMPSDK.log.set({
        ...options,
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * 页面浏览（PV）上报
   *
   * @param options - PV 上报参数
   */
  static pv(options: SpmWXMPSDKPVOptions) {
    try {
      // 调用微信小程序 PV 上报接口
      SpmWXMPSDK.log.spmPV({
        ...options,
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * 点击事件上报
   *
   * @param options - 点击事件上报参数
   */
  static ck(options: SpmWXMPSDKCKOptions) {
    try {
      // 调用微信小程序点击上报接口
      SpmWXMPSDK.log.spmClick({
        ...options,
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * 曝光事件上报
   *
   * @param options - 曝光事件上报参数
   */
  static ep(options: SpmWXMPSDKEPOptions) {
    try {
      // 调用微信小程序曝光上报接口
      SpmWXMPSDK.log.spmExposure({
        ...options,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
