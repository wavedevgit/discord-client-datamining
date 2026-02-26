/** chunk id: 210714, original params: e,t,n (module,exports,require) **/
n.d(t, {
    D: () => A,
    d: () => u
});
var i = n(835245),
    r = n(77729),
    a = n(954571),
    s = n(837921),
    l = n(614792),
    o = n(652215);

function d() {
    return window.GLOBAL_ENV.HTML_TIMESTAMP
}
class _ {
    loadId = (0, i.A)();
    appUIViewed = !1;
    trackEvent(e) {
        let t = Date.now();
        requestIdleCallback(() => {
            let n, i;
            a.default.track(o.HAw.APP_UI_VIEWED, {
                ... function() {
                    let e = "--campaign-id=";
                    for (let t of r.A?.processUtils?.getMainArgvSync?.() ?? [])
                        if (t.startsWith(e)) return {
                            referrer: t.substr(e.length)
                        };
                    return {}
                }(),
                ...(n = !1, i = {
                    total_compressed_byte_size: 0,
                    total_uncompressed_byte_size: 0,
                    total_transfer_byte_size: 0,
                    js_compressed_byte_size: 0,
                    js_uncompressed_byte_size: 0,
                    js_transfer_byte_size: 0,
                    css_compressed_byte_size: 0,
                    css_uncompressed_byte_size: 0,
                    css_transfer_byte_size: 0
                }, null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(e => {
                    let t = null != e.encodedBodySize ? e.encodedBodySize : e.decodedBodySize,
                        r = null != e.decodedBodySize ? e.decodedBodySize : e.encodedBodySize,
                        a = e.transferSize;
                    null != r && null != t && (n = !0, i.total_compressed_byte_size += t, i.total_uncompressed_byte_size += r, null != a && (i.total_uncompressed_byte_size += a), "resource" === e.entryType && ("script" === e.initiatorType && null != e.name && null != e.name.match(/\.js/) && (i.js_compressed_byte_size += t, i.js_uncompressed_byte_size += r, null != a && (i.js_uncompressed_byte_size += a)), "link" === e.initiatorType && null != e.name && null != e.name.match(/\.css/) && (i.css_compressed_byte_size += t, i.css_uncompressed_byte_size += r, null != a && (i.css_uncompressed_byte_size += a))))
                }), n ? i : {}),
                load_id: this.loadId,
                screen_name: e,
                duration_ms_since_app_opened: t - d(),
                app_hardware_acceleration_enabled: s.Ay.getEnableHardwareAcceleration()
            })
        })
    }
    trackTTI() {
        if (window.__TTI_COMPLETED) return;
        window.__TTI_COMPLETED = !0;
        let e = window.location?.pathname?.split("/")?.[1];
        requestIdleCallback(() => {
            let t = d();
            l.A.firstRenderAfterReadyPayload.record();
            let n = l.A.serializeWebPerfStartupMetrics(t);
            a.default.track(o.HAw.APP_WEB_PERF_STARTUP_METRICS, {
                load_id: this.loadId,
                url_root_path: e,
                ...n
            });
            try {
                s.Ay.appFirstRenderAfterReadyPayload()
            } catch (e) {}
        })
    }
    trackAppUIViewed(e) {
        if (!this.appUIViewed) {
            this.trackEvent(e);
            try {
                s.Ay.appViewed()
            } catch (e) {}
            this.appUIViewed = !0
        }
    }
}
let c = new _;

function u(e) {
    c.trackAppUIViewed(e)
}

function A() {
    c.trackTTI()
}