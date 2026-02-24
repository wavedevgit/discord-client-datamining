/** chunk id: 224284, original params: e,t,n (module,exports,require) **/
n.d(t, {
    y: () => c
});
var r = n(627968),
    i = n(64700),
    s = n(397927),
    l = n(829219),
    a = n(405670),
    o = n(579473),
    u = n(221190);

function c(e) {
    let {
        quest: t,
        onClose: n
    } = e, c = (0, a.Kr)(e => e.transcript);
    i.useEffect(() => {
        let e = (0, o.tW)(t, o.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == c || c.questId !== t.id || c.fetchStatus === a.Lx.NONE || c.fetchStatus === a.Lx.SUCCESS && e?.url !== c.url) && (0, l.qY)(t)
    }, [c, t]);
    let d = c?.questId === t.id && c?.fetchStatus === a.Lx.SUCCESS ? c.text ?? "" : "",
        m = i.useMemo(() => d.split("\n").map(e => e.trim()).filter(e => e.length > 0), [d]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: u.Mm,
            children: [(0, r.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                color: "currentColor",
                children: "Transcript"
            }), (0, r.jsx)(s.DUT, {
                onClick: n,
                className: u.GI,
                children: (0, r.jsx)(s.PGe, {
                    color: "currentColor"
                })
            })]
        }), (0, r.jsx)(s.vN3, {
            children: (0, r.jsx)(s.ArX, {
                className: u.j5,
                fade: !0,
                children: (0, r.jsx)("div", {
                    className: u.FN,
                    children: c?.fetchStatus === a.Lx.FETCHING ? (0, r.jsx)("div", {
                        className: u.Cw,
                        children: (0, r.jsx)(s.y$y, {
                            type: s.y$y.Type.WANDERING_CUBES
                        })
                    }) : (0, r.jsx)(s.Heading, {
                        variant: "heading-md/normal",
                        color: "text-muted",
                        children: m.map((e, t) => (0, r.jsx)("p", {
                            children: e
                        }, t))
                    })
                })
            })
        })]
    })
}