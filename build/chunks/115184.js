/** Chunk was on 47260 **/
/** chunk id: 115184, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => g
}), n(65821);
var l = n(627968);
n(64700);
var i = n(397927),
    r = n(803316),
    o = n(207133),
    a = n(954571),
    c = n(723702),
    s = n(728458),
    u = n(837921),
    d = n(179581),
    p = n(652215),
    y = n(985018);

function v(t) {
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
    (0, i.showToast)((0, i.createToast)(t, i.ToastType.FAILURE)), s.A.captureException(e)
}

function g(t, e, n) {
    if ((0, o.A)(null == e ? void 0 : e.getChannelId()) || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !c.isPlatformEmbedded || null == t || !(0, r.e7)(t, null == n ? void 0 : n.contentType, null == n ? void 0 : n.originalContentType)) return null;
    let s = (0, r.XW)(t, null == n ? void 0 : n.contentType, null == n ? void 0 : n.originalContentType, r.N7),
        g = async () => {
            try {
                let t = await u.Ay.saveImage(s, null == n ? void 0 : n.contentType, r.N7);
                if (t === u._0.ERRORED) throw Error("NativeUtils.saveImage errored for ".concat(s));
                t === u._0.SAVED && (a.default.track(p.HAw.CONTEXT_MENU_IMAGE_SAVED, v({}, (0, d.N)())), (0, i.showToast)((0, i.createToast)(y.intl.string(y.t.cqpdJW), i.ToastType.SUCCESS)))
            } catch (t) {
                a.default.track(p.HAw.CONTEXT_MENU_IMAGE_SAVE_FAILED, v({}, (0, d.N)())), f(y.intl.string(y.t["8Ve/S0"]), t)
            }
        }, E = async () => {
            try {
                await u.Ay.copyImage(s, null == n ? void 0 : n.contentType), a.default.track(p.HAw.CONTEXT_MENU_IMAGE_COPIED, v({}, (0, d.N)())), (0, i.showToast)((0, i.createToast)(y.intl.string(y.t.bhUpvC), i.ToastType.SUCCESS))
            } catch (t) {
                f(y.intl.string(y.t.PTPbjx), t), a.default.track(p.HAw.CONTEXT_MENU_IMAGE_COPY_FAILED, v({}, (0, d.N)()))
            }
        };
    return [(0, r.PK)(t, null == n ? void 0 : n.contentType, null == n ? void 0 : n.originalContentType) ? (0, l.jsx)(i.Drp, {
        id: "copy-image",
        label: y.intl.string(y.t.tvUqWn),
        leadingAccessory: {
            type: "icon",
            icon: i.xfq
        },
        action: E
    }, "copy-image") : null, (0, l.jsx)(i.Drp, {
        id: "save-image",
        label: y.intl.string(y.t.PeXhgO),
        leadingAccessory: {
            type: "icon",
            icon: i.xfq
        },
        action: g
    }, "save-image")]
}