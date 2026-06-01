export class SpmJDRNSDK {
    static install() {}

    static pv() {
        try {
            JDMta.sendSpmPvData({
                spm: String,   //平台申请的spm值，必填
                biz_type: String,
                page: String,
                page_param: String,
                page_id: String,
                shop_id: String,
                ext: Object
            });
        } catch (error) {
            console.error(error);
        }
    }

    static ck() {
        try {
            JDMta.sendSpmClickData({
                spm: String,   //必填
                biz_type: String,
                event_id: String,  
                event_param: String,
                event_func: String,
                page: String,
                page_param: String,
                next_page_param: String,
                page_id: String,
                shop_id: String,
                json_param: String,
                order_id: String,
                sku: String,
                sku_tag: String,
                webDelayTime: Number,
                ext: Object
            });
        } catch (error) {
            console.error(error);
        }
    }

    static ep() {
        try {
            JDMta.sendSpmExposureData({
                spm: String,  //必填
                biz_type: String,
                page: String,
                page_id: String,
                page_param: String,
                event_id: String,
                event_param: String,
                shop_id: String,
                order_id: String,
                sku_tag: String,
                event_func: String,
                next_page_param: String,
                json_param: String,
                level: String,
                webDelayTime: Number,
                ext: Object
           });
        } catch (error) {
            console.error(error);
        }
    }
}
