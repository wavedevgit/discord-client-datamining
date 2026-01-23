/** Chunk was on 91798 **/
/** chunk id: 570209, original params: e,t,a (module,exports,require) **/
a.d(t, {
    wG: () => d
}), a(896048), a(747238), a(812715), a(321073);
var n = a(735438),
    l = a.n(n);
a(309613);
var r = a(289732);
let i = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function o(e) {
    return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function s(e) {
    return e.toLowerCase()
}

function c(e) {
    return i.has(e)
}

function u(e) {
    return 0 === e.length
}

function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        a = e.length >= 3 && e.length <= 12 && t,
        n = new Set(l()(e.split(/\W+/)).map(o).reject(u).map(s).reject(c).map(r.U).value());
    return e => (function e(t, a, n) {
        if (Array.isArray(t)) t.forEach(t => e(t, a, n));
        else if ("list" === t.type) t.items.forEach(t => e(t, a, n));
        else if ("string" == typeof t.content && "codeBlock" !== t.type) {
            let e = [],
                l = "";
            t.content.split(/(\W+)/g).forEach(t => {
                ! function(e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (u(e = s(o(e))) || c(e)) return !1;
                    let n = (0, r.U)(e);
                    if (a) {
                        for (let e of t.values())
                            if (n.includes(e)) return !0;
                        return !1
                    }
                    return t.has(n)
                }(t, a, n) ? l += t: (l.length > 0 && e.push({
                    type: "text",
                    content: l
                }), e.push({
                    type: "highlight",
                    content: t
                }), l = "")
            }), e.length > 0 && (l.length > 0 && e.push({
                type: "text",
                content: l
            }), "text" === t.type ? t.content = e : t.content = [{
                type: "text",
                content: e
            }])
        } else null != t.content && e(t.content, a, n);
        return t
    })(e, n, a)
}