/** chunk id: 98919, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    a: () => A
}), n(457529);
var r = n(562465),
    i = n(306173),
    a = n(198982),
    o = n(790107),
    s = n(709710),
    l = n(146503),
    c = n(734057),
    u = n(53943),
    d = n(626584),
    f = n(551602),
    p = n(642506),
    _ = n(576798),
    h = n(731843),
    m = n(652215);
let g = 9437184,
    E = 0xe00000,
    y = new d.A("DebugUploadManager"),
    b = null,
    O = null;

function v(e) {
    switch (e.code) {
        case a.ct.GENERAL:
            return s.B6.UploadErrorGeneral;
        case a.ct.NO_FILE:
            return s.B6.UploadErrorNoFile;
        case a.ct.PROGRESS:
            return s.B6.UploadErrorProgress;
        case a.ct.UPLOAD:
            return s.B6.UploadErrorUpload;
        case a.ct.READ:
            return s.B6.UploadErrorRead;
        default:
            return
    }
}
async function A(e, t) {
    try {
        await I(e), await (0, o.c)(E, t)
    } catch (t) {
        let e;
        throw t instanceof a._ && (e = v(t)), (0, s.QW)({
            type: s.iy.DEBUG_LOG_UPLOAD_FAILED,
            underlyingError: e,
            errorMessage: t.message
        }), t
    }
}
async function I(e) {
    try {
        let n, a, o, s;
        try {
            n = u.As()
        } catch (e) {
            n = "Logs failed: ".concat(e)
        }
        try {
            a = (null == b ? void 0 : b.getSystemLog) != null ? await new Promise(e => b.getSystemLog(e)) : ""
        } catch (e) {
            a = "System Logs failed ".concat(e)
        }
        try {
            o = await (0, p.A)().then(e => (0, h.A)(e, !0))
        } catch (e) {
            o = "Push logs failed: ".concat(e)
        }
        try {
            var t;
            s = null != (t = (0, i.G1)()) ? t : ""
        } catch (e) {
            s = "LibDiscore logs failed: ".concat(e)
        }
        let d = n.length + a.length + o.length + s.length;
        if (d > g) {
            let e = 1 - g / d;
            n = n.slice(n.length - Math.floor(n.length * e)), a = a.slice(a.length - Math.floor(a.length * e)), o = o.slice(o.length - Math.floor(o.length * e)), s = s.slice(s.length - Math.floor(s.length * e))
        }
        let E = (null == O ? void 0 : O.AppOpenedTimestamp) != null ? O.AppOpenedTimestamp : null,
            y = "\n    ".concat((0, _.A)(E), "\n\n    ").concat((0, l.CI)(), "\n\n    Metadata:\n    ").concat(JSON.stringify((0, f.A)(), void 0, 2), "\n\n    ChannelStore:\n    ").concat(JSON.stringify(c.A.getDebugInfo(), void 0, 2), "\n\n    Logs:\n    ").concat(n, "\n\n    System logs:\n    ").concat(a, "\n\n    LibDiscore logs:\n    ").concat(s, "\n\n    Push Notifications:\n    ").concat(o, "\n    ");
        u.IU();
        let v = m.Rsh.DEBUG_LOG(e, "discord_app_logs");
        await r.Bo.post({
            url: v,
            body: y,
            retries: 3,
            headers: {
                "Content-Type": "text/plain"
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    } catch (e) {
        y.error("uploadAppLogFiles: upload app log files error ".concat(e.message))
    }
}