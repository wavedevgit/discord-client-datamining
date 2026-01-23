/** Chunk was on 46875 **/
/** chunk id: 302487, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S,
    h: () => w
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(108531),
    o = n(311907),
    c = n(397927),
    d = n(817363),
    u = n(775602),
    m = n(355622),
    h = n(349688),
    g = n(914905),
    x = n(734057),
    f = n(31717),
    p = n(522602),
    b = n(203982),
    j = n(518960),
    v = n(853742),
    _ = n(652215),
    y = n(149707);
let A = {
        scale: .95,
        opacity: 0
    },
    C = {
        scale: 1,
        opacity: 1
    },
    T = {
        scale: 1,
        opacity: 1
    },
    O = {
        tension: 2400,
        friction: 52
    };

function S(e) {
    let {
        channelId: t,
        onClick: n,
        onClose: i,
        onMouseEnter: s
    } = e, u = r.useRef(null), m = (0, o.bG)([x.A], () => x.A.getChannel(t), [t]);
    return a()(null != m, "Forum Channel is null"), (0, l.jsxs)(c.DUT, {
        className: y.EJ,
        onMouseEnter: s,
        onClick: () => {
            (0, v.ri)({
                isMobile: !1
            }), null == n || n()
        },
        onKeyPress: e => {
            if ("Enter" === e.key) {
                var t;
                null == (t = u.current) || t.activateUploadDialogue(), (0, v.ri)({
                    isMobile: !1
                })
            }
        },
        children: [(0, l.jsx)(d.A, {
            className: y.Fg,
            ref: u,
            onChange: e => {
                null == i || i(), (0, j.R)(e.currentTarget.files, m, f.C.FirstThreadMessage, {
                    requireConfirm: !0,
                    origin: "file_picker"
                }), b._.dispatch(_.jej.TEXTAREA_FOCUS), e.currentTarget.value = null
            },
            multiple: m.rateLimitPerUser <= 0,
            tabIndex: -1,
            "aria-hidden": !0
        }), (0, l.jsx)(c.XGR, {
            size: "custom",
            color: "currentColor",
            width: 28,
            height: 28,
            className: y.T3
        })]
    })
}

function N(e) {
    let {
        channelId: t,
        closePopout: n
    } = e, [i, a] = r.useState(!1), {
        reducedMotion: d
    } = r.useContext(c.CZY), x = (0, c.zhh)({
        from: d.enabled ? C : A,
        to: T,
        config: O
    }, "animate-always"), f = (0, o.bG)([u.A], () => u.A.keyboardModeEnabled), b = (0, o.bG)([p.A], () => p.A.getUploads(t, m.oU.CREATE_FORUM_POST.drafts.type));
    return (0, l.jsx)(s.animated.div, {
        className: y.jC,
        onMouseLeave: () => {
            i || n()
        },
        style: x,
        children: (0, l.jsxs)(c.IpV, {
            orientation: "horizontal",
            className: y.SW,
            paddingFix: !1,
            fade: !0,
            children: [(0, l.jsx)(S, {
                channelId: t,
                onClick: () => {
                    a(!0)
                },
                onClose: () => {
                    a(!1), n()
                }
            }), (0, l.jsx)("div", {
                className: y.p8,
                children: b.map(e => (0, l.jsx)(g.A, {
                    channelId: t,
                    draftType: m.oU.CREATE_FORUM_POST.drafts.type,
                    upload: e,
                    keyboardModeEnabled: f,
                    hideFileName: !0,
                    size: h.L.SMALL
                }, e.id))
            })]
        })
    })
}

function w(e) {
    let {
        channelId: t
    } = e, [n, i] = r.useState(!1), a = (0, o.bG)([p.A], () => p.A.getUploads(t, m.oU.CREATE_FORUM_POST.drafts.type)), s = a.length, c = s > 0;
    r.useEffect(() => {
        n && !c && i(!1)
    }, [n, c]);
    let d = () => {
        c && i(!0)
    };
    return (0, l.jsxs)("div", {
        className: y.kL,
        children: [c ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(g.J, {
                upload: a[0],
                size: h.L.SMALL,
                onMouseEnter: d
            }), !n && (0, l.jsx)("div", {
                className: y.qS,
                children: s
            })]
        }) : (0, l.jsx)(S, {
            onMouseEnter: d,
            channelId: t
        }), n && (0, l.jsx)(N, {
            channelId: t,
            closePopout: () => {
                i(!1)
            }
        })]
    })
}