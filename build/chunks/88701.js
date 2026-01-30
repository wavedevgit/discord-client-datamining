/** chunk id: 88701, original params: e,t,n (module,exports,require) **/
let r = n(177335),
    i = n(601861),
    a = n(800670),
    o = n(569671),
    s = n(596641),
    l = n(738018);
e.exports = (e, t, n, c) => {
    switch (t) {
        case "===":
            return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e === n;
        case "!==":
            return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e !== n;
        case "":
        case "=":
        case "==":
            return r(e, n, c);
        case "!=":
            return i(e, n, c);
        case ">":
            return a(e, n, c);
        case ">=":
            return o(e, n, c);
        case "<":
            return s(e, n, c);
        case "<=":
            return l(e, n, c);
        default:
            throw TypeError(`Invalid operator: ${t}`)
    }
}