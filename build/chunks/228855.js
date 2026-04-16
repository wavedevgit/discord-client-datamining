/** chunk id: 228855 params = (module,exports,require) **/
i.d(t, {
    default: () => g
});
var n = i(627968),
    s = i(64700),
    a = i(731738),
    r = i(158954),
    l = i(311907),
    d = i(397927),
    u = i(263063),
    c = i(831062),
    o = i(253932),
    S = i(71393),
    h = i(115063),
    _ = i(360966),
    A = i(386936),
    T = i(985018),
    E = i(759656);

function g(e) {
    let {
        transitionState: t,
        guildId: i,
        onClose: g
    } = e, m = (0, l.bG)([S.A], () => S.A.getGuild(i));
    if (s.useEffect(() => {
            (0, _.Q)(i), (0, A.$)(A.s.MODAL_VIEWED, i), c.A.increment({
                name: a.K.DM_SETTINGS_UPSELL_VIEW
            })
        }, [i]), null == m) return null;
    let f = e => {
        e.preventDefault();
        let t = (0, h.Tb)();
        t.add(i), o.$s.updateSetting(Array.from(t)).then(() => (0, d.showToast)((0, d.createToast)(T.intl.string(T.t.rlYD1W), d.ToastType.SUCCESS))), g(), (0, A.$)(A.s.MODAL_DISABLED_DMS, i)
    };
    return (0, n.jsx)("form", {
        onSubmit: f,
        children: (0, n.jsx)(r.Modal, {
            transitionState: t,
            onClose: g,
            title: T.intl.string(T.t.w2BvnL),
            subtitle: T.intl.format(T.t.Depjkv, {
                guild_name: m.name
            }),
            actions: [{
                text: T.intl.string(T.t.PsWbcp),
                onClick: () => {
                    g(), (0, A.$)(A.s.MODAL_DISMISSED, i)
                },
                variant: "secondary"
            }, {
                text: T.intl.string(T.t.TD7iUx),
                onClick: f
            }],
            children: (0, n.jsxs)(d.BJc, {
                direction: "vertical",
                gap: 8,
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: T.intl.string(T.t.KPB2iw)
                }), (0, n.jsx)("div", {
                    className: E.bo,
                    children: (0, n.jsxs)("div", {
                        className: E.OA,
                        children: [(0, n.jsx)(u.Ay, {
                            guild: m,
                            size: u.Ay.Sizes.SMALL
                        }), (0, n.jsx)(d.Text, {
                            className: E.J5,
                            variant: "text-md/semibold",
                            children: m.name
                        })]
                    })
                })]
            })
        })
    })
}