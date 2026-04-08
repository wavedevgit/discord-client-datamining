/** chunk id: 115184 params = (module,exports,require) **/
n.d(e, {
    A: () => y
});
var a = n(627968);
n(64700);
var i = n(397927),
    r = n(803316),
    l = n(207133),
    o = n(954571),
    s = n(723702),
    c = n(728458),
    d = n(837921),
    p = n(179581),
    u = n(652215),
    g = n(985018);

function h(t, e) {
    (0, i.showToast)((0, i.createToast)(t, i.ToastType.FAILURE)), c.A.captureException(e)
}

function y(t, e, n) {
    if ((0, l.A)(e?.getChannelId()) || n?.shouldHideMediaOptions === !0 || !s.isPlatformEmbedded || null == t || !(0, r.e7)(t, n?.contentType, n?.originalContentType)) return null;
    let c = (0, r.XW)(t, n?.contentType, n?.originalContentType, r.N7),
        y = async () => {
            try {
                let t = await d.Ay.saveImage(c, n?.contentType, r.N7);
                if (t === d._0.ERRORED) throw Error(`NativeUtils.saveImage errored for ${c}`);
                t === d._0.SAVED && (o.default.track(u.HAw.CONTEXT_MENU_IMAGE_SAVED, {
                    ...(0, p.N)()
                }), (0, i.showToast)((0, i.createToast)(g.intl.string(g.t.cqpdJW), i.ToastType.SUCCESS)))
            } catch (t) {
                o.default.track(u.HAw.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                    ...(0, p.N)()
                }), h(g.intl.string(g.t["8Ve/S0"]), t)
            }
        }, E = async () => {
            try {
                await d.Ay.copyImage(c, n?.contentType), o.default.track(u.HAw.CONTEXT_MENU_IMAGE_COPIED, {
                    ...(0, p.N)()
                }), (0, i.showToast)((0, i.createToast)(g.intl.string(g.t.bhUpvC), i.ToastType.SUCCESS))
            } catch (t) {
                h(g.intl.string(g.t.PTPbjx), t), o.default.track(u.HAw.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                    ...(0, p.N)()
                })
            }
        };
    return [(0, r.PK)(t, n?.contentType, n?.originalContentType) ? (0, a.jsx)(i.Drp, {
        id: "copy-image",
        label: g.intl.string(g.t.tvUqWn),
        leadingAccessory: {
            type: "icon",
            icon: i.xfq
        },
        action: E
    }, "copy-image") : null, (0, a.jsx)(i.Drp, {
        id: "save-image",
        label: g.intl.string(g.t.PeXhgO),
        leadingAccessory: {
            type: "icon",
            icon: i.xfq
        },
        action: y
    }, "save-image")]
}