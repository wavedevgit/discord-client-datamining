/** chunk id: 228855, original params: t,e,i (module,exports,require) **/
i.d(e, {
    default: () => D
});
var n = i(627968),
    l = i(64700),
    a = i(731738),
    r = i(158954),
    s = i(311907),
    u = i(397927),
    d = i(263063),
    o = i(831062),
    c = i(253932),
    S = i(71393),
    A = i(115063),
    g = i(360966),
    _ = i(386936),
    f = i(985018),
    m = i(818639);

function D(t) {
    let {
        transitionState: e,
        guildId: i,
        onClose: D
    } = t, p = (0, s.bG)([S.A], () => S.A.getGuild(i));
    if (l.useEffect(() => {
            (0, g.Q)(i), (0, _.$)(_.s.MODAL_VIEWED, i), o.A.increment({
                name: a.K.DM_SETTINGS_UPSELL_VIEW
            })
        }, [i]), null == p) return null;
    let T = t => {
        t.preventDefault();
        let e = (0, A.Tb)();
        e.add(i), c.$s.updateSetting(Array.from(e)).then(() => (0, u.showToast)((0, u.createToast)(f.intl.string(f.t.rlYD1W), u.ToastType.SUCCESS))), D(), (0, _.$)(_.s.MODAL_DISABLED_DMS, i)
    };
    return (0, n.jsx)("form", {
        onSubmit: T,
        children: (0, n.jsx)(r.Modal, {
            transitionState: e,
            onClose: D,
            title: f.intl.string(f.t.w2BvnL),
            subtitle: f.intl.format(f.t.Depjkv, {
                guild_name: p.name
            }),
            actions: [{
                text: f.intl.string(f.t.PsWbcp),
                onClick: () => {
                    D(), (0, _.$)(_.s.MODAL_DISMISSED, i)
                },
                variant: "secondary"
            }, {
                text: f.intl.string(f.t.TD7iUx),
                onClick: T
            }],
            children: (0, n.jsxs)(u.BJc, {
                direction: "vertical",
                gap: 8,
                children: [(0, n.jsx)(u.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: f.intl.string(f.t.KPB2iw)
                }), (0, n.jsx)("div", {
                    className: m.bo,
                    children: (0, n.jsxs)("div", {
                        className: m.OA,
                        children: [(0, n.jsx)(d.A, {
                            guild: p,
                            size: d.A.Sizes.SMALL
                        }), (0, n.jsx)(u.Text, {
                            className: m.J5,
                            variant: "text-md/semibold",
                            children: p.name
                        })]
                    })
                })]
            })
        })
    })
}