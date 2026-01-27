/** Chunk was on 39289 **/
/** chunk id: 570209, original params: e,t,n (module,exports,require) **/
n.d(t, {
    wG: () => b
}), n(896048), n(747238), n(812715), n(321073);
var a = n(735438),
    o = n.n(a);
n(309613);
var i = n(289732);
let r = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function c(e) {
    return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function l(e) {
    return e.toLowerCase()
}

function s(e) {
    return r.has(e)
}

function _(e) {
    return 0 === e.length
}

function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.length >= 3 && e.length <= 12 && t,
        a = new Set(o()(e.split(/\W+/)).map(c).reject(_).map(l).reject(s).map(i.U).value());
    return e => (function e(t, n, a) {
        if (Array.isArray(t)) t.forEach(t => e(t, n, a));
        else if ("list" === t.type) t.items.forEach(t => e(t, n, a));
        else if ("string" == typeof t.content && "codeBlock" !== t.type) {
            let e = [],
                o = "";
            t.content.split(/(\W+)/g).forEach(t => {
                ! function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (_(e = l(c(e))) || s(e)) return !1;
                    let a = (0, i.U)(e);
                    if (n) {
                        for (let e of t.values())
                            if (a.includes(e)) return !0;
                        return !1
                    }
                    return t.has(a)
                }(t, n, a) ? o += t: (o.length > 0 && e.push({
                    type: "text",
                    content: o
                }), e.push({
                    type: "highlight",
                    content: t
                }), o = "")
            }), e.length > 0 && (o.length > 0 && e.push({
                type: "text",
                content: o
            }), "text" === t.type ? t.content = e : t.content = [{
                type: "text",
                content: e
            }])
        } else null != t.content && e(t.content, n, a);
        return t
    })(e, a, n)
}