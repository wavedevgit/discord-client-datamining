/** chunk id: 591487, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(257943),
    i = n(860511),
    a = n(410323),
    o = n(521351),
    s = n(486724),
    l = n(706938),
    c = n(482779),
    u = n(855835).f,
    d = n(524152),
    f = n(432663),
    p = n(304880),
    _ = n(565079),
    h = n(603526),
    m = n(878765),
    g = n(693655),
    E = n(503628),
    y = n(210140),
    b = n(883972).enforce,
    O = n(274574),
    v = n(380744),
    A = n(614886),
    I = n(919971),
    S = v("match"),
    T = i.RegExp,
    C = T.prototype,
    N = i.SyntaxError,
    w = a(C.exec),
    R = a("".charAt),
    P = a("".replace),
    D = a("".indexOf),
    L = a("".slice),
    x = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
    M = /a/g,
    j = /a/g,
    k = new T(M) !== M,
    U = h.MISSED_STICKY,
    G = h.UNSUPPORTED_Y,
    F = r && (!k || U || A || I || E(function() {
        return j[S] = !1, T(M) !== M || T(j) === j || "/a/i" !== String(T(M, "i"))
    })),
    V = function(e) {
        for (var t, n = e.length, r = 0, i = "", a = !1; r <= n; r++) {
            if ("\\" === (t = R(e, r))) {
                i += t + R(e, ++r);
                continue
            }
            a || "." !== t ? ("[" === t ? a = !0 : "]" === t && (a = !1), i += t) : i += "[\\s\\S]"
        }
        return i
    },
    B = function(e) {
        for (var t, n = e.length, r = 0, i = "", a = [], o = c(null), s = !1, l = !1, u = 0, d = ""; r <= n; r++) {
            if ("\\" === (t = R(e, r))) t += R(e, ++r);
            else if ("]" === t) s = !1;
            else if (!s) switch (!0) {
                case "[" === t:
                    s = !0;
                    break;
                case "(" === t:
                    if (i += t, "?:" === L(e, r + 1, r + 3)) continue;
                    w(x, L(e, r + 1)) && (r += 2, l = !0), u++;
                    continue;
                case ">" === t && l:
                    if ("" === d || y(o, d)) throw new N("Invalid capture group name");
                    o[d] = !0, a[a.length] = [d, u], l = !1, d = "";
                    continue
            }
            l ? d += t : i += t
        }
        return [i, a]
    };
if (o("RegExp", F)) {
    for (var H = function(e, t) {
            var n, r, i, a, o, c, u = d(C, this),
                h = f(e),
                m = void 0 === t,
                g = [],
                E = e;
            if (!u && h && m && e.constructor === H) return e;
            if ((h || d(C, e)) && (e = e.source, m && (t = _(E))), e = void 0 === e ? "" : p(e), t = void 0 === t ? "" : p(t), E = e, A && "dotAll" in M && (r = !!t && D(t, "s") > -1) && (t = P(t, /s/g, "")), n = t, U && "sticky" in M && (i = !!t && D(t, "y") > -1) && G && (t = P(t, /y/g, "")), I && (e = (a = B(e))[0], g = a[1]), o = s(T(e, t), u ? this : C, H), (r || i || g.length) && (c = b(o), r && (c.dotAll = !0, c.raw = H(V(e), n)), i && (c.sticky = !0), g.length && (c.groups = g)), e !== E) try {
                l(o, "source", "" === E ? "(?:)" : E)
            } catch (e) {}
            return o
        }, Y = u(T), W = 0; Y.length > W;) m(H, T, Y[W++]);
    C.constructor = H, H.prototype = C, g(i, "RegExp", H, {
        constructor: !0
    })
}
O("RegExp")