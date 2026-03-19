/** chunk id: 597676 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var a = n(64700),
    l = n(311907),
    i = n(843472),
    r = n(155718),
    s = n(731068),
    o = n(77350),
    c = n(383233),
    d = n(320501);
let u = /^#{1,3}\s+(.+)$/;

function m(e) {
    let t, n, a = (0, c._c)(e) ? e.components.filter(e => e.type === r.I5.TEXT_DISPLAY).map(e => e.content).join("\n") : e.content,
        l = function(e) {
            if ((0, c._c)(e)) {
                let t = e.components.find(e => e.type === r.I5.MEDIA_GALLERY),
                    n = t?.items[0]?.media;
                if (null != n) {
                    let e = (0, s.FE)(n);
                    if ("INVALID" === e) return;
                    return {
                        url: n.proxyUrl ?? n.url,
                        type: "VIDEO" === e ? "video" : "image"
                    }
                }
            }
            let t = e.attachments.find(e => (0, o.tT)(e.content_type));
            if (null != t) return {
                url: t.proxy_url,
                type: "image"
            };
            let n = e.attachments.find(e => (0, o.XB)(e.content_type));
            if (null != n) return {
                url: n.proxy_url,
                type: "video"
            };
            let a = e.embeds.find(e => null != e.video && null != e.thumbnail);
            if (a?.thumbnail != null) return {
                url: a.thumbnail.proxyURL ?? a.thumbnail.url,
                type: "image"
            }
        }(e),
        {
            title: i,
            body: d
        } = null != (n = (-1 === (t = a.indexOf("\n")) ? a : a.slice(0, t)).match(u)) ? {
            title: n[1].trim(),
            body: -1 === t ? "" : a.slice(t + 1).trimStart()
        } : {
            body: a
        };
    return {
        id: e.id,
        mediaUrl: l?.url,
        mediaType: l?.type,
        title: i,
        body: d,
        content: a
    }
}

function x(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++)
        if (e[n].id !== t[n].id) return !1;
    return !0
}

function _(e) {
    let t = a.useRef([]),
        n = (0, l.bG)([d.A], () => {
            let n = null != e ? d.A.getMessages(e) : void 0;
            return null != n && n.length > 0 && (t.current = n.toArray().reverse().map(m)), t.current
        }, [e], x),
        r = (0, l.bG)([d.A], () => {
            if (null == e || n.length > 0) return !1;
            let t = d.A.getMessages(e);
            return t?.error !== !0 && (null == t || !0 !== t.hasFetched)
        }, [e, n.length]),
        s = a.useRef(null);
    return a.useEffect(() => {
        null == e || s.current !== e && (s.current = e, i.A.fetchMessages({
            channelId: e,
            limit: 50
        }))
    }, [e]), {
        messages: n,
        loading: r
    }
}