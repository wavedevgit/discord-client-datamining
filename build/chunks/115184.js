/** chunk id: 115184, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => y
});
var a = n(627968);
n(64700);
var i = n(397927),
    l = n(803316),
    o = n(207133),
    r = n(954571),
    s = n(723702),
    c = n(728458),
    d = n(837921),
    p = n(179581),
    u = n(652215),
    E = n(985018);

function T(t, e) {
    (0, i.showToast)((0, i.createToast)(t, i.ToastType.FAILURE)), c.A.captureException(e)
}

function y(t, e, n) {
    if ((0, o.A)(e?.getChannelId()) || n?.shouldHideMediaOptions === !0 || !s.isPlatformEmbedded || null == t || !(0, l.e7)(t, n?.contentType, n?.originalContentType)) return null;
    let c = (0, l.XW)(t, n?.contentType, n?.originalContentType, l.N7),
        y = async () => {
            try {
                let t = await d.Ay.saveImage(c, n?.contentType, l.N7);
                if (t === d._0.ERRORED) throw Error(`NativeUtils.saveImage errored for ${c}`);
                t === d._0.SAVED && (r.default.track(u.HAw.CONTEXT_MENU_IMAGE_SAVED, {
                    ...(0, p.N)()
                }), (0, i.showToast)((0, i.createToast)(E.intl.string(E.t.cqpdJW), i.ToastType.SUCCESS)))
            } catch (t) {
                r.default.track(u.HAw.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                    ...(0, p.N)()
                }), T(E.intl.string(E.t["8Ve/S0"]), t)
            }
        }, A = async () => {
            try {
                await d.Ay.copyImage(c, n?.contentType), r.default.track(u.HAw.CONTEXT_MENU_IMAGE_COPIED, {
                    ...(0, p.N)()
                }), (0, i.showToast)((0, i.createToast)(E.intl.string(E.t.bhUpvC), i.ToastType.SUCCESS))
            } catch (t) {
                T(E.intl.string(E.t.PTPbjx), t), r.default.track(u.HAw.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                    ...(0, p.N)()
                })
            }
        };
    return [(0, l.PK)(t, n?.contentType, n?.originalContentType) ? (0, a.jsx)(i.Drp, {
        id: "copy-image",
        label: E.intl.string(E.t.tvUqWn),
        leadingAccessory: {
            type: "icon",
            icon: i.xfq
        },
        action: A
    }, "copy-image") : null, (0, a.jsx)(i.Drp, {
        id: "save-image",
        label: E.intl.string(E.t.PeXhgO),
        leadingAccessory: {
            type: "icon",
            icon: i.xfq
        },
        action: y
    }, "save-image")]
}