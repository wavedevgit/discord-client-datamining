/** Chunk was on 44900 **/
/** chunk id: 589877, original params: e,t,s (module,exports,require) **/
s.r(t), s.d(t, {
    default: () => E
}), s(896048), s(747238), s(680155), s(323874), s(14289), s(35956);
var a = s(627968),
    r = s(64700),
    i = s(607399),
    l = s(311907),
    n = s(397927),
    c = s(416298),
    d = s(854378),
    m = s(197111),
    g = s(10088),
    h = s(976860),
    x = s(829219),
    o = s(890687),
    u = s(545986),
    _ = s(654487),
    N = s(652215),
    j = s(613057),
    p = s(985018),
    v = s(667426),
    f = s(604880),
    k = s(318808);
l.Ay.initialize();
let A = i.Fr || i.v1;

function E(e) {
    let {
        match: t
    } = e, s = (0, l.bG)([g.A], () => g.A.getState("quest-preview")), i = t.params.questId, E = function(e) {
        let [t, s] = r.useState(null);
        return r.useEffect(() => {
            (0, x.xB)(e).then(e => s({
                status: "ok",
                value: e
            })).catch(() => s({
                status: "error"
            }))
        }, [s, e]), t
    }(i);
    r.useEffect(() => {
        if (!A) {
            if (null == s) m.A.openNativeAppModal("quest-preview", N.e$_.DEEP_LINK, {
                type: j.XK.QUEST_PREVIEW_TOOL,
                params: {
                    questId: i
                }
            });
            else if (s === N.fAW.OPEN_FAIL) {
                let e = new URLSearchParams;
                e.set(o.L1.TAB, o.NC.PREVIEW_TOOL), e.set(o.L1.QUEST_ID, i), (0, h.bG)({
                    pathname: N.BVt.QUEST_HOME_V2,
                    search: "?".concat(e.toString())
                })
            }
        }
    }, [s, i]);
    let T = r.useCallback(() => (0, u.q$)(i), [i]);
    if (A) return (0, a.jsxs)("div", {
        className: v.MY,
        children: [(0, a.jsx)("img", {
            className: v.Bg,
            src: k.Ay,
            alt: ""
        }), (0, a.jsx)("div", {
            className: v.r$,
            children: (0, a.jsx)("img", {
                src: f,
                alt: ""
            })
        }), null != E && (0, a.jsx)("div", {
            className: v.Nr,
            children: "ok" === E.status ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("div", {
                    className: v.rC,
                    children: (0, a.jsx)("img", {
                        src: "".concat(_.CI).concat(i, "/dark/").concat(E.value.assets.gameTile),
                        alt: "",
                        className: v.o4
                    })
                }), (0, a.jsx)(n.Heading, {
                    variant: "heading-lg/semibold",
                    color: "text-default",
                    className: v.ky,
                    children: E.value.messages.questName
                }), (0, a.jsx)(n.Text, {
                    variant: "text-md/normal",
                    className: v.G3,
                    children: p.intl.string(p.t.bWuKqh)
                }), (0, a.jsx)(n.Button, {
                    variant: "primary",
                    text: p.intl.string(p.t.UQvCf7),
                    fullWidth: !0,
                    onClick: T
                })]
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(n.Heading, {
                    variant: "heading-lg/semibold",
                    color: "text-default",
                    className: v.ky,
                    children: p.intl.string(p.t.k4z4er)
                }), (0, a.jsx)(n.Text, {
                    variant: "text-md/normal",
                    className: v.G3,
                    children: p.intl.string(p.t.gtZK09)
                })]
            })
        })]
    });
    let C = null == s || s === N.fAW.OPENING || s === N.fAW.OPEN_FAIL;
    return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.A, {
            className: v.Lq,
            preserveAspectRatio: "xMinYMin slice"
        }), (0, a.jsx)("div", {
            className: v.kL,
            children: (0, a.jsx)(d.Ay, {
                children: C ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(d.hE, {
                        children: p.intl.string(p.t["Z+hCVU"])
                    }), (0, a.jsx)(d.CK, {})]
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(d.hE, {
                        className: v.Ns,
                        children: p.intl.string(p.t.csrAMJ)
                    }), (0, a.jsx)(d.tK, {
                        children: p.intl.string(p.t.ghBJz9)
                    })]
                })
            })
        })]
    })
}