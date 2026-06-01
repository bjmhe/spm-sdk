/** SDK 初始化配置 */
export interface SpmPCSDKInstallOptions {
    /** 站点编号 */
    account: string;
    /** 站点域 */
    domain?: string;
    /** 应用ID */
    maAppId?: string;
    /** 全埋点采集 */
    auto_fullclick?: boolean;
    [key: string]: string | boolean | undefined;
  }
  
  /** 页面浏览（PV）上报参数 */
  export interface SpmPCSDKPVOptions {
    /** SPM 埋点编码 */
    spm: string;
    /** 页面ID */
    page_id?: string;
    /** 页面参数，用于自定义页面维度信息 */
    page_param?: string;
  }
  
  /** 点击（Click）事件上报参数 */
  export interface SpmPCSDKCKOptions {
    /** SPM 埋点编码 */
    spm: string;
    /** 业务类型 */
    biz_type?: string;
    /** 页面ID */
    page_id?: string;
    /** 事件参数 */
    event_param?: string;
    /** JSON 格式扩展参数 */
    json_param?: string;
  }
  
  /** 曝光（Exposure）事件上报参数 */
  export interface SpmPCSDKEPOptions {
    /** SPM 埋点编码 */
    spm: string;
    /** 业务类型 */
    biz_type?: string;
    /** 页面ID */
    page_id?: string;
    /** 事件参数 */
    event_param?: string;
    /** JSON 格式扩展参数 */
    json_param?: string;
    /** 自定义站点编号，用于跨站上报 */
    customAccount?: string;
  }
  
  /**
   * PC 端子午线 SPM 埋点 SDK
   *
   * 提供页面浏览、点击、曝光、系统级埋点上报能力
   */
  export class SpmPCSDK {
    /**
     * 初始化 SDK，注入子午线埋点脚本
     * @param options - 初始化配置项
     */
    static install(options: SpmPCSDKInstallOptions) {
      try {
        // 初始化全局埋点队列
        window.jaq = window.jaq || [];
        // 将配置项逐一推入队列，供脚本加载后消费
        Object.entries(options).forEach(([key, value]) => {
          if (value) window.jaq.push([key, value]);
        });
        // 动态创建 script 标签并异步加载子午线脚本
        const ja = document.createElement("script");
        ja.async = true;
        ja.src = "//wl.jd.com/joya.js";
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
    static pv(options: SpmPCSDKPVOptions) {
      try {
        window.spmPV({ ...options });
      } catch (error) {
        console.error(error);
      }
    }
  
    /**
     * 点击事件上报
     * @param options - 点击事件上报参数
     */
    static ck(options: SpmPCSDKCKOptions) {
      try {
        window.spmLog({ ...options });
      } catch (error) {
        console.error(error);
      }
    }
  
    /**
     * 曝光事件上报
     * @param options - 曝光事件上报参数
     */
    static ep(options: SpmPCSDKEPOptions) {
      try {
        window.spmExposure({ ...options });
      } catch (error) {
        console.error(error);
      }
    }
  
    /** 系统级埋点上报 */
    static sys() {
      try {
        window.spmSystem();
      } catch (error) {
        console.error(error);
      }
    }
  }
  