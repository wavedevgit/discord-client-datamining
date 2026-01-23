/** Chunk was on 16864 **/
/** chunk id: 60883, original params: e,t,r (module,exports,require) **/
"use strict";
r.r(t), r.d(t, {
    default: () => E
}), r(896048), r(747238);
var n = r(627968),
    a = r(64700),
    s = r(492462),
    i = r(960488),
    l = r(417597),
    o = r(830215),
    c = r(269815),
    d = r(114716),
    u = r(942156),
    p = r(49463),
    f = r(976860),
    h = r(961350),
    x = r(398378),
    m = r(372726),
    g = r(459485),
    _ = r(810669),
    b = r(698894),
    v = r(621846),
    y = r(652215),
    C = r(136267);
let w = r(843020);

function j() {
    let e, t = (0, i.zy)(),
        [r, d] = a.useState(() => {
            if (t.pathname === y.BVt.ACTIVATE_HANDOFF) {
                let {
                    user_code: e
                } = s.parse(window.location.search);
                return {
                    type: "handoff",
                    code: e
                }
            }
            return {
                type: "user-code-input",
                usePrefilledCode: !0
            }
        }),
        j = (0, l.bG)([p.A], () => p.A.hasLoadedExperiments);
    a.useEffect(() => {
        h.default.isAuthenticated() && !j && o.A.getExperiments()
    }, [j]), (0, c.A)(), (0, x.K)(r);
    let N = a.useCallback(() => {
            d({
                type: "user-code-input"
            })
        }, [d]),
        E = a.useCallback(e => {
            d({
                type: "authorization",
                userCodeData: e
            })
        }, [d]),
        O = a.useCallback(e => {
            d({
                type: "success",
                userCodeData: e
            })
        }, [d]),
        A = a.useCallback(e => {
            d({
                type: "error",
                userCodeData: e
            })
        }, [d]),
        I = !0;
    switch (r.type) {
        case "handoff":
            e = (0, n.jsx)(_.e, {
                code: r.code
            }), I = !1;
            break;
        case "user-code-input":
            e = (0, n.jsx)(v.H, {
                usePrefilledCode: r.usePrefilledCode || !1,
                onUserCodeAccepted: E
            });
            break;
        case "authorization":
            e = (0, n.jsx)(m.F, {
                data: r.userCodeData,
                onDenied: N,
                onError: A,
                onSuccess: O
            }), I = !1;
            break;
        case "success":
            e = (0, n.jsx)(b.r, {
                onComplete: () => (0, f.pX)(y.BVt.ME),
                data: r.userCodeData
            });
            break;
        case "error":
            e = (0, n.jsx)(g.S, {
                onTryAgain: N
            });
            break;
        default:
            e = null
    }
    return (0, n.jsxs)("div", {
        className: C.fY,
        children: [(0, n.jsx)("img", {
            className: C.xX,
            src: w,
            alt: ""
        }), (0, n.jsx)(u.A, {
            show: !0,
            className: C.wm
        }), I ? (0, n.jsx)("div", {
            className: C.Qs,
            children: e
        }) : e]
    })
}
let N = (0, d.C)(j),
    E = function() {
        return (0, i.zy)().pathname !== y.BVt.ACTIVATE_HANDOFF ? (0, n.jsx)(N, {}) : (0, n.jsx)(j, {})
    }