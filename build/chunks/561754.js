/** Chunk was on web.js **/
/** chunk id: 561754, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => P
}), n(114821), n(339614), n(896048), n(321073), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(59892),
    o = n(114088),
    s = n(743923),
    l = n(864642),
    c = n(274361),
    u = n(816694),
    d = n(418522),
    f = n(150239),
    p = n(464602),
    _ = n(623819),
    h = n(342470),
    m = n(554067),
    g = n(471767),
    E = n(989349),
    y = n.n(E),
    b = n(580424),
    O = n(379418),
    v = n(773669),
    A = n(634788),
    I = n(374803),
    S = n(985018);
let T = ["YYYYMMDD", "YYYY-MM-DD", "LL", "L", "MMMM Do YYYY", "MMMM Do YY", "MMMM Do, YYYY", "MMMM Do, YY", "MMMM D YYYY", "MMMM D YY", "MMMM D, YYYY", "MMMM D, YY", "MMMM Do YYYY", "MMMM Do YY", "MMMM Do, YYYY", "MMMM Do, YY", "MMM D YYYY", "MMM D YY", "MMM D, YYYY", "MMM D, YY", "MMM Do YYYY", "MMM Do YY", "MMM Do, YYYY", "MMM Do, YY", "MMMM D", "MMMM Do", "MMM D", "MMM Do", "D MMMM", "Do MMMM", "D MMM", "Do MMM", "dddd", "ddd"],
    C = ["h:mm:ssa", "h:mm:ss a", "H:mm:ss", "h:mma", "h:mm a", "H:mm", "HHmm", "ha", "h a", "H", "LT", "LTS"],
    N = [y().ISO_8601, ...T.flatMap(e => [...C.map(t => "".concat(e, " ").concat(t)), ...C])];

function w() {
    let e = v.default.locale;
    if ("en-US" === e) return a;
    if ("en-GB" === e) return a.GB;
    if ("de" === e) return o;
    if ("fr" === e) return s;
    if ("ja" === e) return l;
    else if ("nl" === e) return c;
    else if ("ru" === e) return u;
    else if ("it" === e) return d;
    else if ("uk" === e) return f;
    else if ("zh-CN" === e) return p;
    else if ("zh-TW" === e) return _;
    else if (e.startsWith("sv-")) return h;
    else if (e.startsWith("pt-")) return m;
    else if (e.startsWith("es-")) return g;
    else return null
}

function R(e, t, n) {
    let r, i, a;
    if (null == n) return {};
    let o = e.clone();
    o.subtract(1, n.periodType);
    let s = t.clone();
    return s.add(1, n.periodType), t.isSame(e, n.periodType) ? (a = S.intl.string(n.currentName), t.isSameOrBefore(e) && (i = S.intl.string(n.nextName))) : t.isSame(o, n.periodType) && (a = S.intl.string(n.previousName), i = S.intl.string(n.currentName)), null != i && (r = s.unix().toString()), {
        adjustedTimestamp: r,
        adjustedDescription: i,
        unadjustedDescription: a
    }
}
let P = {
    autocompleteInputElementType: "timestampMentionInput",
    matches: (e, t, n, r, i) => n.length > 1,
    queryResults(e, t, n) {
        var r;
        let i = y()(),
            a = w(),
            [o] = null != (r = null == a ? void 0 : a.parse(n, i.toDate())) ? r : [void 0],
            s = (null == o ? void 0 : o.start) != null && (null == o ? void 0 : o.end) == null && o.text === n,
            l = s ? y()(o.start.date()) : y()(n, N, !0),
            c = [],
            {
                format: u
            } = l.creationData();
        if ("string" != typeof u && (u = void 0), "" !== n || l.isValid() || (l = i, u = "YYYYMMDDHHmmss"), l.isValid() && (s || null != u)) {
            let e;
            if (s && !o.start.isCertain("hour")) {
                let e = 9e5,
                    t = Math.round(l.valueOf() / e) * e;
                l = y()(t)
            }
            let t = s ? o.start.isCertain("weekday") : null == u ? void 0 : u.includes("d"),
                n = s ? o.start.isCertain("day") || o.start.isCertain("month") || o.start.isCertain("year") : null == u ? void 0 : u.includes("D"),
                r = s ? o.start.isCertain("year") : null == u ? void 0 : u.includes("Y"),
                a = s ? o.start.isCertain("second") : null == u ? void 0 : u.includes("s"),
                d = l.unix().toString(),
                f = a ? "S" : "s";
            n || t ? t && !n ? e = {
                periodType: "week",
                previousName: S.t["4uTwgO"],
                currentName: S.t["6YiNaP"],
                nextName: S.t.HE4jqH
            } : r || (e = {
                periodType: "year",
                previousName: S.t.R7VMEE,
                currentName: S.t["U8lK/J"],
                nextName: S.t.OppVVE
            }) : (c.push({
                mention: {
                    timestamp: d,
                    format: a ? "T" : "t"
                },
                description: S.intl.string(S.t.yHv4oJ)
            }), c.push({}), e = {
                periodType: "day",
                previousName: S.t.ZdDLO0,
                currentName: S.t.mbs4NX,
                nextName: S.t["EqnX/z"]
            });
            let {
                adjustedTimestamp: p,
                adjustedDescription: _,
                unadjustedDescription: h
            } = R(i, l, e);
            null != p && (c.push({
                mention: {
                    timestamp: p,
                    format: f
                },
                description: _
            }), c.push({
                mention: {
                    timestamp: p,
                    format: "f"
                }
            }), c.push({
                mention: {
                    timestamp: p,
                    format: "F"
                }
            }), c.push({
                mention: {
                    timestamp: p,
                    format: "R"
                }
            }), c.push({})), c.push({
                mention: {
                    timestamp: d,
                    format: f
                },
                description: h
            }), c.push({
                mention: {
                    timestamp: d,
                    format: "f"
                }
            }), c.push({
                mention: {
                    timestamp: d,
                    format: "F"
                }
            }), c.push({
                mention: {
                    timestamp: d,
                    format: "R"
                }
            })
        }
        return {
            results: {
                mentions: c
            }
        }
    },
    renderResults(e) {
        let {
            results: {
                mentions: t
            },
            selectedIndex: n,
            query: a,
            onHover: o,
            onClick: s
        } = e, l = t.map((e, t) => {
            let {
                mention: i,
                description: a
            } = e;
            if (void 0 === i) return (0, r.jsx)(b.Ay.Divider, {}, "divider-".concat(t));
            let l = (0, O.WA)(i);
            return null == l ? null : (0, r.jsx)(b.Ay.Timestamp, {
                onClick: s,
                onHover: o,
                selected: n === t,
                index: t,
                timestamp: l,
                description: a
            }, "timestamp-".concat(t))
        }), c = S.t.I4nJDb, u = S.intl.string(S.t.pUP8UM);
        return (0, r.jsxs)(i.Fragment, {
            children: [(0, A.wZ)({
                titleWithQuery: c,
                titleWithoutQuery: u,
                query: a,
                getQuery: e => "".concat(e)
            }), l]
        }, "timestamp_formats")
    },
    onSelect(e) {
        var t, n;
        let {
            results: {
                mentions: r
            },
            index: i,
            options: a
        } = e, {
            mention: o
        } = null != (t = r[i]) ? t : {};
        if (null == o) return null;
        let s = (0, O.tf)(o.timestamp, o.format),
            l = null == (n = (0, O.WA)(o)) ? void 0 : n.formatted;
        return null == l ? null : (a.replaceInlineInput("timestampMentionInput", l, s), {
            type: I.kc.TIMESTAMP
        })
    }
}