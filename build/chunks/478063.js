/** chunk id: 478063, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => N
});
var l = s(627968),
    i = s(64700),
    a = s(503698),
    n = s.n(a),
    r = s(97808),
    A = s(863610),
    u = s(397927),
    _ = s(573435);
s(883392);
var c = s(621569);
let h = {},
    d = 1 / 4;

function I(e) {
    let {
        height: t,
        fillColor: s
    } = e;
    return (0, l.jsx)("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: s,
            height: t,
            width: 2.5 * t
        },
        children: (0, l.jsx)(A.n, {
            className: c.r$,
            dotRadius: t * d
        })
    })
}

function o(e) {
    let {
        isTyping: t,
        statusCoords: s,
        status: i
    } = e, a = (0, u.S31)(u.clD.ONLINE);
    return t ? (0, l.jsx)("div", {
        style: {
            position: "absolute",
            top: s.y,
            left: s.x
        },
        children: (0, l.jsx)(I, {
            height: s.height,
            fillColor: a
        })
    }) : null != i ? (0, l.jsx)(u.nW6, {
        size: s.height,
        status: i,
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
    return (0, l.jsx)("img", {
        className: c.tM,
        src: t,
        alt: "",
        width: s,
        height: s
    })
}
let E = {
        [u._3J.SIZE_16]: {
            default: _.hW.DIAGONAL_FACEPILE_16,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_16,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_16,
            back: _.hW.DIAGONAL_FACEPILE_BACK_16
        },
        [u._3J.SIZE_20]: {
            default: _.hW.DIAGONAL_FACEPILE_20,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_20,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_20,
            back: _.hW.DIAGONAL_FACEPILE_BACK_20
        },
        [u._3J.SIZE_24]: {
            default: _.hW.DIAGONAL_FACEPILE_24,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_24,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_24,
            back: _.hW.DIAGONAL_FACEPILE_BACK_24
        },
        [u._3J.SIZE_32]: {
            default: _.hW.DIAGONAL_FACEPILE_32,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: _.hW.DIAGONAL_FACEPILE_BACK_32
        },
        [u._3J.SIZE_40]: {
            default: _.hW.DIAGONAL_FACEPILE_32,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: _.hW.DIAGONAL_FACEPILE_BACK_32
        },
        [u._3J.SIZE_48]: {
            default: _.hW.DIAGONAL_FACEPILE_40,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_40,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_40,
            back: _.hW.DIAGONAL_FACEPILE_BACK_40
        },
        [u._3J.SIZE_56]: {
            default: _.hW.DIAGONAL_FACEPILE_56,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_56,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_56,
            back: _.hW.DIAGONAL_FACEPILE_BACK_56
        },
        [u._3J.SIZE_72]: {
            default: _.hW.DIAGONAL_FACEPILE_72,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_72,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_72,
            back: _.hW.DIAGONAL_FACEPILE_BACK_72
        },
        [u._3J.SIZE_80]: {
            default: _.hW.DIAGONAL_FACEPILE_80,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_80,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_80,
            back: _.hW.DIAGONAL_FACEPILE_BACK_80
        },
        [u._3J.SIZE_96]: {
            default: _.hW.DIAGONAL_FACEPILE_96,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_96,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_96,
            back: _.hW.DIAGONAL_FACEPILE_BACK_96
        },
        [u._3J.SIZE_120]: {
            default: _.hW.DIAGONAL_FACEPILE_120,
            typing: _.hW.DIAGONAL_FACEPILE_TYPING_120,
            status: _.hW.DIAGONAL_FACEPILE_STATUS_120,
            back: _.hW.DIAGONAL_FACEPILE_BACK_120
        }
    },
    N = function(e) {
        var t;
        let {
            backSrc: s,
            frontSrc: a,
            size: A,
            isTyping: d,
            status: I,
            style: N,
            className: C,
            ...f
        } = e, {
            size: g
        } = u.vCh[A], {
            statusCoords: b,
            frontAvatarOffsetPx: P,
            frontAvatarSizePx: m,
            backAvatarSizePx: x
        } = i.useMemo(() => {
            let e, t, s, l, i, a = `${g}-${d}`;
            return h[a] ?? (s = +(t = (e = u.vCh[A]).size / 1.5), l = .5 * t, i = {
                statusCoords: (0, r.Rb)(e, u.clD.ONLINE, {
                    isTyping: d,
                    isMobile: !1,
                    isVR: !1
                }),
                frontAvatarSizePx: s,
                backAvatarSizePx: t,
                frontAvatarOffsetPx: l,
                frontAvatarCenter: l + s / 2
            }, h[a] = i, i)
        }, [g, d, A]), G = (t = null != I, d ? E[A].typing : t ? E[A].status : E[A].default), D = E[A].back;
        return (0, l.jsxs)("div", {
            style: {
                width: g,
                height: g,
                ...N
            },
            "aria-label": f["aria-label"],
            "aria-hidden": f["aria-hidden"],
            className: n()(c.kL, C),
            children: [(0, l.jsxs)(_.Ay, {
                mask: G,
                height: g,
                width: g,
                children: [(0, l.jsx)(_.Ay, {
                    mask: D,
                    height: g,
                    width: g,
                    children: (0, l.jsx)("img", {
                        src: s,
                        alt: "",
                        width: x,
                        height: x
                    })
                }), (0, l.jsx)("div", {
                    style: {
                        position: "absolute",
                        top: P,
                        left: P
                    },
                    children: (0, l.jsx)(L, {
                        src: a,
                        size: m,
                        isTyping: d,
                        status: I
                    })
                })]
            }), (0, l.jsx)(o, {
                statusCoords: b,
                status: I,
                isTyping: d
            })]
        })
    }