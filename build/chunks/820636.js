/** chunk id: 820636 params = (module,exports,require) **/
n.d(t, {
    y: () => c
});
var r = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(829219),
    i = n(405670),
    u = n(579473),
    o = n(834926);

function c(e) {
    let {
        quest: t,
        onClose: n
    } = e, c = (0, i.Kr)(e => e.transcript);
    s.useEffect(() => {
        let e = (0, u.tW)(t, u.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == c || c.questId !== t.id || c.fetchStatus === i.Lx.NONE || c.fetchStatus === i.Lx.SUCCESS && e?.url !== c.url) && (0, l.qY)(t)
    }, [c, t]);
    let d = c?.questId === t.id && c?.fetchStatus === i.Lx.SUCCESS ? c.text ?? "" : "",
        E = s.useMemo(() => d.split("\n").map(e => e.trim()).filter(e => e.length > 0), [d]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: o.Mm,
            children: [(0, r.jsx)(a.Heading, {
                variant: "heading-md/semibold",
                color: "currentColor",
                children: "Transcript"
            }), (0, r.jsx)(a.DUT, {
                onClick: n,
                className: o.GI,
                children: (0, r.jsx)(a.PGe, {
                    color: "currentColor"
                })
            })]
        }), (0, r.jsx)(a.vN3, {
            children: (0, r.jsx)(a.ArX, {
                className: o.j5,
                fade: !0,
                children: (0, r.jsx)("div", {
                    className: o.FN,
                    children: c?.fetchStatus === i.Lx.FETCHING ? (0, r.jsx)("div", {
                        className: o.Cw,
                        children: (0, r.jsx)(a.y$y, {
                            type: a.y$y.Type.WANDERING_CUBES
                        })
                    }) : (0, r.jsx)(a.Heading, {
                        variant: "heading-md/normal",
                        color: "text-muted",
                        children: E.map((e, t) => (0, r.jsx)("p", {
                            children: e
                        }, t))
                    })
                })
            })
        })]
    })
}