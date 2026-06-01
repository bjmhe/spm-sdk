/** H5 SDK 初始化配置 */
export interface SpmH5SDKInstallOptions {
    /** 站点编号 */
    siteId: string;
    /** 登录账号 */
    account?: string;
    /** 应用ID */
    ma_app_id?: string;
    /** 自动上报点击 */
    autoClickTag?: string;
    /** 自动上报曝光 */
    autoExpTag?: string;
    [key: string]: string | boolean | undefined;
  }
  
  /** 页面浏览（PV）上报参数 */
  export interface SpmH5SDKPVOptions {
    /** SPM 埋点编码 */
    spm: string;
    /** 页面ID */
    page_id?: string;
    /** 页面参数，用于自定义页面维度信息 */
    page_param?: string;
    /** 流量地图相关参数，通天塔页一般需要传 */
    trafficmap_aid?: string;
  }
  
  /** 点击（Click）事件上报参数 */
  export interface SpmH5SDKCKOptions {
    /** 事件 e.target */
    target: HTMLElement;
    /** SPM 埋点编码 */
    spm: string;
    /** SCM 营销链路编码 */
    scm: string;
    /** 业务类型 */
    biz_type: string;
    /** 事件参数 */
    event_id?: string;
    /** JSON 格式扩展参数 */
    json_param?: string;
  }
  
  /** 曝光（Exposure）事件上报参数 */
  export interface SpmH5SDKEPOptions {
    /** 事件 e.target */
    target: HTMLElement;
    /** SPM 埋点编码 */
    spm: string;
    /** SCM 营销链路编码 */
    scm: string;
    /** 业务类型 */
    biz_type: string;
    /** 事件参数 */
    event_id?: string;
    /** JSON 格式扩展参数 */
    json_param?: string;
  }
  
  /**
   * H5 端子午线 SPM 埋点 SDK
   *
   * 提供页面浏览、点击、曝光埋点上报能力
   */
  export class SpmH5SDK {
    /**
     * 初始化 SDK，注入子午线埋点脚本
     * @param options - 初始化配置项
     */
    static install(options: SpmH5SDKInstallOptions) {
      try {
        // 初始化全局埋点配置对象
        window.jaq = window.jaq || {};
        window.jaq = {
          ...window.jaq,
          ...options,
        };
        // 动态创建 script 标签并异步加载子午线 H5 脚本
        const ja = document.createElement("script");
        ja.async = true;
        ja.src = "//wl.jd.com/unify.min.js";
        ja.setAttribute("ignore", "true");
        const s = document.getElementsByTagName("script");
        if (s && s.length > 0 && s[0] && s[0].parentNode) {
          s[0].parentNode.insertBefore(ja, s[0]);
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    /**
     * 页面浏览（PV）上报
     * @param options - PV 上报参数
     */
    static pv(options: SpmH5SDKPVOptions) {
      try {
        // 构造 PV 上报对象并发送
        const spmPv = new MPing.inputs.SpmPV(options);
        new MPing().send(spmPv);
      } catch (error) {
        console.error(error);
      }
    }
  
    /**
     * 点击事件上报
     * @param options - 点击事件上报参数
     */
    static ck(options: SpmH5SDKCKOptions) {
      try {
        // 构造点击上报对象并发送
        const click = new MPing.inputs.SpmClick({ ...options });
        new MPing().send(click);
      } catch (error) {
        console.error(error);
      }
    }
  
    /**
     * 曝光事件上报
     * @param options - 曝光事件上报参数
     */
    static ep(options: SpmH5SDKEPOptions) {
      try {
        // 构造曝光上报对象并发送
        const exposure = new MPing.inputs.SpmExposure({ ...options });
        new MPing().send(exposure);
      } catch (error) {
        console.error(error);
      }
    }
  }
  