/** chunk id: 478063 params = (module,exports,require) **/
s.d(t, {
    A: () => N
});
var i = s(627968),
    a = s(64700),
    l = s(503698),
    n = s.n(l),
    r = s(97808),
    A = s(863610),
    u = s(397927),
    d = s(573435);
s(883392);
var _ = s(221585);
let c = {},
    o = 1 / 4;

function h(e) {
    let {
        height: t,
        fillColor: s
    } = e;
    return (0, i.jsx)("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: s,
            height: t,
            width: 2.5 * t
        },
        children: (0, i.jsx)(A.n, {
            className: _.r$,
            dotRadius: t * o
        })
    })
}

function I(e) {
    let {
        isTyping: t,
        statusCoords: s,
        status: a
    } = e, l = (0, u.S31)(u.clD.ONLINE);
    return t ? (0, i.jsx)("div", {
        style: {
            position: "absolute",
            top: s.y,
            left: s.x
        },
        children: (0, i.jsx)(h, {
            height: s.height,
            fillColor: l
        })
    }) : null != a ? (0, i.jsx)(u.nW6, {
        size: s.height,
        status: a,
        style: {
            position: "absolute",
            top: s.y,
            left: s.x
        }
    }) : null
}

function L(e) {
    let {
        src: t,
        size: s
    } = e;
    return (0, i.jsx)("img", {
        className: _.tM,
        src: t,
        alt: "",
        width: s,
        height: s
    })
}
let E = {
        [u._3J.SIZE_16]: {
            default: d.hW.DIAGONAL_FACEPILE_16,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_16,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_16,
            back: d.hW.DIAGONAL_FACEPILE_BACK_16
        },
        [u._3J.SIZE_20]: {
            default: d.hW.DIAGONAL_FACEPILE_20,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_20,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_20,
            back: d.hW.DIAGONAL_FACEPILE_BACK_20
        },
        [u._3J.SIZE_24]: {
            default: d.hW.DIAGONAL_FACEPILE_24,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_24,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_24,
            back: d.hW.DIAGONAL_FACEPILE_BACK_24
        },
        [u._3J.SIZE_32]: {
            default: d.hW.DIAGONAL_FACEPILE_32,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: d.hW.DIAGONAL_FACEPILE_BACK_32
        },
        [u._3J.SIZE_40]: {
            default: d.hW.DIAGONAL_FACEPILE_32,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: d.hW.DIAGONAL_FACEPILE_BACK_32
        },
        [u._3J.SIZE_48]: {
            default: d.hW.DIAGONAL_FACEPILE_40,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_40,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_40,
            back: d.hW.DIAGONAL_FACEPILE_BACK_40
        },
        [u._3J.SIZE_56]: {
            default: d.hW.DIAGONAL_FACEPILE_56,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_56,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_56,
            back: d.hW.DIAGONAL_FACEPILE_BACK_56
        },
        [u._3J.SIZE_72]: {
            default: d.hW.DIAGONAL_FACEPILE_72,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_72,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_72,
            back: d.hW.DIAGONAL_FACEPILE_BACK_72
        },
        [u._3J.SIZE_80]: {
            default: d.hW.DIAGONAL_FACEPILE_80,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_80,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_80,
            back: d.hW.DIAGONAL_FACEPILE_BACK_80
        },
        [u._3J.SIZE_96]: {
            default: d.hW.DIAGONAL_FACEPILE_96,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_96,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_96,
            back: d.hW.DIAGONAL_FACEPILE_BACK_96
        },
        [u._3J.SIZE_120]: {
            default: d.hW.DIAGONAL_FACEPILE_120,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_120,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_120,
            back: d.hW.DIAGONAL_FACEPILE_BACK_120
        }
    },
    N = function(e) {
        var t;
        let {
            backSrc: s,
            frontSrc: l,
            size: A,
            isTyping: o,
            status: h,
            style: N,
            className: C,
            ...P
        } = e, {
            size: m
        } = u.vCh[A], {
            statusCoords: b,
            frontAvatarOffsetPx: f,
            frontAvatarSizePx: g,
            backAvatarSizePx: x
        } = a.useMemo(() => {
            let e, t, s, i, a, l = `${m}-${o}`;
            return c[l] ?? (s = +(t = (e = u.vCh[A]).size / 1.5), i = .5 * t, a = {
                statusCoords: (0, r.Rb)(e, u.clD.ONLINE, {
                    isTyping: o,
                    isMobile: !1,
                    isVR: !1
                }),
                frontAvatarSizePx: s,
                backAvatarSizePx: t,
                frontAvatarOffsetPx: i,
                frontAvatarCenter: i + s / 2
            }, c[l] = a, a)
        }, [m, o, A]), D = (t = null != h, o ? E[A].typing : t ? E[A].status : E[A].default), G = E[A].back;
        return (0, i.jsxs)("div", {
            style: {
                width: m,
                height: m,
                ...N
            },
            "aria-label": P["aria-label"],
            "aria-hidden": P["aria-hidden"],
            className: n()(_.kL, C),
            children: [(0, i.jsxs)(d.Ay, {
                mask: D,
                height: m,
                width: m,
                children: [(0, i.jsx)(d.Ay, {
                    mask: G,
                    height: m,
                    width: m,
                    children: (0, i.jsx)("img", {
                        src: s,
                        alt: "",
                        width: x,
                        height: x
                    })
                }), (0, i.jsx)("div", {
                    style: {
                        position: "absolute",
                        top: f,
                        left: f
                    },
                    children: (0, i.jsx)(L, {
                        src: l,
                        size: g,
                        isTyping: o,
                        status: h
                    })
                })]
            }), (0, i.jsx)(I, {
                statusCoords: b,
                status: h,
                isTyping: o
            })]
        })
    }