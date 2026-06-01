/** 页面浏览（PV）上报参数 */
export interface SpmJDRNSDKPVOptions {
  /** SPM 埋点编码（平台申请的 spm 值，必填） */
  spm: string;
  /** 业务类型 */
  biz_type?: string;
  /** 页面 */
  page?: string;
  /** 页面参数，用于自定义页面维度信息 */
  page_param?: string;
  /** 页面ID */
  page_id?: string;
  /** 店铺ID */
  shop_id?: string;
  /** 扩展参数 */
  ext?: Record<string, unknown>;
}

/** 点击（Click）事件上报参数 */
export interface SpmJDRNSDKCKOptions {
  /** SPM 埋点编码（必填） */
  spm: string;
  /** 业务类型 */
  biz_type?: string;
  /** 事件ID */
  event_id?: string;
  /** 事件参数 */
  event_param?: string;
  /** 事件功能标识 */
  event_func?: string;
  /** 页面 */
  page?: string;
  /** 页面参数，用于自定义页面维度信息 */
  page_param?: string;
  /** 下一页页面参数 */
  next_page_param?: string;
  /** 页面ID */
  page_id?: string;
  /** 店铺ID */
  shop_id?: string;
  /** JSON 格式扩展参数 */
  json_param?: string;
  /** 订单ID */
  order_id?: string;
  /** SKU */
  sku?: string;
  /** SKU 标签 */
  sku_tag?: string;
  /** 延迟上报时间（毫秒） */
  webDelayTime?: number;
  /** 扩展参数 */
  ext?: Record<string, unknown>;
}

/** 曝光（Exposure）事件上报参数 */
export interface SpmJDRNSDKEPOptions {
  /** SPM 埋点编码（必填） */
  spm: string;
  /** 业务类型 */
  biz_type?: string;
  /** 页面 */
  page?: string;
  /** 页面ID */
  page_id?: string;
  /** 页面参数，用于自定义页面维度信息 */
  page_param?: string;
  /** 事件ID */
  event_id?: string;
  /** 事件参数 */
  event_param?: string;
  /** 店铺ID */
  shop_id?: string;
  /** 订单ID */
  order_id?: string;
  /** SKU 标签 */
  sku_tag?: string;
  /** 事件功能标识 */
  event_func?: string;
  /** 下一页页面参数 */
  next_page_param?: string;
  /** JSON 格式扩展参数 */
  json_param?: string;
  /** 曝光层级 */
  level?: string;
  /** 延迟上报时间（毫秒） */
  webDelayTime?: number;
  /** 扩展参数 */
  ext?: Record<string, unknown>;
}

/**
 * JDRN 端子午线 SPM 埋点 SDK
 *
 * 提供页面浏览、点击、曝光埋点上报能力
 */
export class SpmJDRNSDK {
  /** 初始化 SDK */
  static install() {
    console.warn(
      "JDRN 安卓/iOS 平台依赖 @jdreact/jdreact-jsbundle-commonpack>=2.1.50，请确保已安装",
    );
    console.warn("JDRN 鸿蒙 平台依赖 @jdreact/jdreact-jsbundle-commonpack>=3.0.5，请确保已安装");
    console.warn("版本控制：京东app-15.1.60（发布时间约：2025.06.25）");
  }

  /**
   * 页面浏览（PV）上报
   *
   * @param options - PV 上报参数
   */
  static pv(options: SpmJDRNSDKPVOptions) {
    try {
      JDMta.sendSpmPvData({ ...options });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * 点击事件上报
   *
   * @param options - 点击事件上报参数
   */
  static ck(options: SpmJDRNSDKCKOptions) {
    try {
      JDMta.sendSpmClickData({ ...options });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * 曝光事件上报
   *
   * @param options - 曝光事件上报参数
   */
  static ep(options: SpmJDRNSDKEPOptions) {
    try {
      JDMta.sendSpmExposureData({ ...options });
    } catch (error) {
      console.error(error);
    }
  }
}
