/** Chunk was on 13530 **/
/** chunk id: 94836, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(397927),
    a = n(256905),
    s = n(409626),
    o = n(985018),
    c = n(851822),
    u = n(351886);

function d(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, d = r.useRef(null), m = r.useMemo(() => {
        let e = t.artwork.map(e => ({
            url: e,
            type: "IMAGE"
        }));
        return [...t.screenshots.map(e => ({
            url: e,
            type: "IMAGE"
        })), ...e]
    }, [t.artwork, t.screenshots]), f = m.length > 2;

    function g(e) {
        if (null == d.current) return;
        let t = d.current.getScrollerState().scrollLeft;
        d.current.scrollTo({
            to: t + 280 * e,
            animate: !0
        })
    }
    return 0 === m.length ? null : (0, l.jsxs)("div", {
        children: [(0, l.jsx)(i.Heading, {
            className: c.bV,
            variant: "text-md/semibold",
            color: "text-strong",
            children: o.intl.string(o.t.bNdK5x)
        }), (0, l.jsxs)("div", {
            className: f ? u.DA : u.pZ,
            children: [(0, l.jsx)(i.zCo, {
                ref: d,
                className: u.ec,
                orientation: "horizontal",
                children: m.map((e, t) => (0, l.jsx)(i.DUT, {
                    className: u.gw,
                    focusProps: {
                        offset: 4,
                        ringClassName: u.jR
                    },
                    onClick: () => {
                        n(s.Ws.ClickImage), (0, a.R)({
                            items: m,
                            startingIndex: t,
                            shouldHideMediaOptions: !0,
                            location: "GameProfileMedia"
                        })
                    },
                    children: (0, l.jsx)("img", {
                        src: e.url,
                        className: u.Zm,
                        alt: o.intl.formatToPlainString(o.t.COYYrn, {
                            game: name
                        })
                    })
                }, t))
            }), f && (0, l.jsxs)("div", {
                className: u.NA,
                children: [(0, l.jsx)("div", {
                    className: u.EJ
                }), (0, l.jsx)(i.DUT, {
                    className: u.G9,
                    onClick: () => g(-1),
                    children: (0, l.jsx)(i.rJJ, {
                        className: u.UE,
                        color: "currentColor"
                    })
                }), (0, l.jsx)("div", {
                    className: u.Pj
                }), (0, l.jsx)(i.DUT, {
                    className: u.G9,
                    onClick: () => g(1),
                    children: (0, l.jsx)(i.EdP, {
                        className: u.UE,
                        color: "currentColor"
                    })
                })]
            })]
        })]
    })
}