/** Chunk was on 47260 **/
/** chunk id: 115184, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => E
}), n(65821);
var l = n(627968);
n(64700);
var r = n(397927),
    a = n(803316),
    i = n(207133),
    o = n(954571),
    c = n(723702),
    s = n(728458),
    u = n(837921),
    d = n(179581),
    p = n(652215),
    v = n(985018);

function y(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), l.forEach(function(e) {
            var l;
            l = n[e], e in t ? Object.defineProperty(t, e, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = l
        })
    }
    return t
}

function f(t, e) {
    (0, r.showToast)((0, r.createToast)(t, r.ToastType.FAILURE)), s.A.captureException(e)
}

function E(t, e, n) {
    if ((0, i.A)(null == e ? void 0 : e.getChannelId()) || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !c.isPlatformEmbedded || null == t || !(0, a.e7)(t, null == n ? void 0 : n.contentType, null == n ? void 0 : n.originalContentType)) return null;
    let s = (0, a.XW)(t, null == n ? void 0 : n.contentType, null == n ? void 0 : n.originalContentType, a.N7),
        E = async () => {
            try {
                let t = await u.Ay.saveImage(s, null == n ? void 0 : n.contentType, a.N7);
                if (t === u._0.ERRORED) throw Error("NativeUtils.saveImage errored for ".concat(s));
                t === u._0.SAVED && (o.default.track(p.HAw.CONTEXT_MENU_IMAGE_SAVED, y({}, (0, d.N)())), (0, r.showToast)((0, r.createToast)(v.intl.string(v.t.cqpdJW), r.ToastType.SUCCESS)))
            } catch (t) {
                o.default.track(p.HAw.CONTEXT_MENU_IMAGE_SAVE_FAILED, y({}, (0, d.N)())), f(v.intl.string(v.t["8Ve/S0"]), t)
            }
        }, g = async () => {
            try {
                await u.Ay.copyImage(s, null == n ? void 0 : n.contentType), o.default.track(p.HAw.CONTEXT_MENU_IMAGE_COPIED, y({}, (0, d.N)())), (0, r.showToast)((0, r.createToast)(v.intl.string(v.t.bhUpvC), r.ToastType.SUCCESS))
            } catch (t) {
                f(v.intl.string(v.t.PTPbjx), t), o.default.track(p.HAw.CONTEXT_MENU_IMAGE_COPY_FAILED, y({}, (0, d.N)()))
            }
        };
    return [(0, a.PK)(t, null == n ? void 0 : n.contentType, null == n ? void 0 : n.originalContentType) ? (0, l.jsx)(r.Drp, {
        id: "copy-image",
        label: v.intl.string(v.t.tvUqWn),
        action: g
    }, "copy-image") : null, (0, l.jsx)(r.Drp, {
        id: "save-image",
        label: v.intl.string(v.t.PeXhgO),
        action: E
    }, "save-image")]
}