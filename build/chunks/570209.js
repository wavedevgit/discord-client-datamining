/** chunk id: 570209 params = (module,exports,require) **/
n.d(t, {
    wG: () => u
}), n(321073);
var a = n(735438),
    i = n.n(a);
n(309613);
var l = n(289732);
let r = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function s(e) {
    return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function o(e) {
    return e.toLowerCase()
}

function c(e) {
    return r.has(e)
}

function d(e) {
    return 0 === e.length
}

function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.length >= 3 && e.length <= 12 && t,
        a = new Set(i()(e.split(/\W+/)).map(s).reject(d).map(o).reject(c).map(l.U).value());
    return e => (function e(t, n, a) {
        if (Array.isArray(t)) t.forEach(t => e(t, n, a));
        else if ("list" === t.type) t.items.forEach(t => e(t, n, a));
        else if ("string" == typeof t.content && "codeBlock" !== t.type) {
            let e = [],
                i = "";
            t.content.split(/(\W+)/g).forEach(t => {
                ! function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (d(e = o(s(e))) || c(e)) return !1;
                    let a = (0, l.U)(e);
                    if (n) {
                        for (let e of t.values())
                            if (a.includes(e)) return !0;
                        return !1
                    }
                    return t.has(a)
                }(t, n, a) ? i += t: (i.length > 0 && e.push({
                    type: "text",
                    content: i
                }), e.push({
                    type: "highlight",
                    content: t
                }), i = "")
            }), e.length > 0 && (i.length > 0 && e.push({
                type: "text",
                content: i
            }), "text" === t.type ? t.content = e : t.content = [{
                type: "text",
                content: e
            }])
        } else null != t.content && e(t.content, n, a);
        return t
    })(e, a, n)
}