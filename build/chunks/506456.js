/** chunk id: 506456 params = (module,exports,require) **/
r.d(t, {
    A: () => p,
    c: () => i
}), r(323874), r(14289), r(35956), r(321073);
var l = r(64700),
    n = r(735438),
    a = r(736653);
let s = {
        gif: "image/gif",
        webp: "image/webp",
        apng: "image/apng",
        png: "image/png",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        svg: "image/svg+xml",
        mp4: "video/mp4",
        webm: "video/webm",
        mov: "video/quicktime"
    },
    c = new Set(["video/mp4", "video/webm", "video/quicktime"]),
    i = e => null != e && c.has(e),
    d = [],
    o = new Map,
    u = new Map,
    m = (e, t) => {
        if (null != e) return (0, n.isString)(e) ? e : "light" === t ? e.light : e.dark
    },
    h = e => {
        try {
            let t = new URL(e).pathname;
            return s[t.split(".").pop()?.toLowerCase() ?? ""]
        } catch {
            return s[e.split("?")[0].split(".").pop()?.toLowerCase() ?? ""]
        }
    },
    p = e => {
        let t = (0, a.Ay)(),
            r = l.useMemo(() => {
                let r;
                return null == e ? d : (r = Array.isArray(e) ? e : [e], r.flatMap(e => {
                    if (null == e) return [];
                    if ("object" == typeof e && "src" in e) {
                        let r = m(e.src, t);
                        return null == r ? [] : [{
                            src: r,
                            alt: e.alt,
                            mimeType: h(r)
                        }]
                    }
                    let r = m(e, t);
                    return null != r ? [{
                        src: r,
                        mimeType: h(r)
                    }] : []
                }))
            }, [e, t]),
            [n, s] = l.useState({}),
            [c, i] = l.useState(new Set);
        return l.useEffect(() => {
            if (0 === r.length) return;
            let e = {},
                t = [];
            for (let {
                    src: l,
                    mimeType: n
                }
                of r) null == n && (o.has(l) ? e[l] = o.get(l) : t.push(l));
            if (0 === Object.keys(e).length && 0 === t.length) return;
            let l = !1;
            return (async () => {
                let r = t.length > 0 ? await Promise.all(t.map(async e => [e, await (e => {
                    if (o.has(e)) return Promise.resolve({
                        mimeType: o.get(e),
                        status: void 0
                    });
                    let t = u.get(e);
                    if (null != t) return t;
                    let r = fetch(e, {
                        method: "HEAD"
                    }).then(t => {
                        if (!t.ok) return {
                            mimeType: void 0,
                            status: t.status
                        };
                        let r = (t.headers.get("Content-Type") ?? "").split(";")[0].trim(),
                            l = "" !== r ? r : void 0;
                        return o.set(e, l), {
                            mimeType: l,
                            status: t.status
                        }
                    }).catch(() => ({
                        mimeType: void 0,
                        status: void 0
                    })).finally(() => u.delete(e));
                    return u.set(e, r), r
                })(e)])) : [];
                if (!l) {
                    let t = {},
                        l = [];
                    for (let [e, n] of r) null != n.status && n.status >= 400 ? l.push(e) : t[e] = n.mimeType;
                    s(r => ({
                        ...r,
                        ...e,
                        ...t
                    })), l.length > 0 && i(e => new Set([...e, ...l]))
                }
            })(), () => {
                l = !0
            }
        }, [r]), l.useMemo(() => {
            if (0 === r.length) return null;
            let e = r.map(e => ({
                ...e,
                mimeType: e.mimeType ?? n[e.src]
            }));
            return e.find(e => !c.has(e.src)) ?? e[0]
        }, [r, n, c])
    }