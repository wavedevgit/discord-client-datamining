/** chunk id: 890060 params = (module,exports,require) **/
n.d(t, {
    V: () => u,
    p: () => d
});
var a = n(155718),
    i = n(731068),
    l = n(77350),
    r = n(141468),
    s = n(383233),
    o = n(998218);
let c = /^#{1,3}\s+(.+)$/;

function d(e) {
    return e.map(e => {
        let t, n, o = (0, r.rh)(e),
            d = (0, s._c)(o) ? o.components.filter(e => e.type === a.I5.TEXT_DISPLAY).map(e => e.content).join("\n") : o.content,
            u = function(e) {
                if ((0, s._c)(e)) {
                    let t = e.components.find(e => e.type === a.I5.MEDIA_GALLERY),
                        n = t?.items[0]?.media;
                    if (null != n) {
                        let t = (0, i.FE)(n);
                        if ("INVALID" !== t) return {
                            ...n,
                            type: t,
                            sourceMetadata: {
                                message: e
                            }
                        }
                    }
                }
                let t = e.attachments.find(e => (0, l.tT)(e.content_type));
                if (null != t) return (0, i.Rr)(t, e);
                let n = e.attachments.find(e => (0, l.XB)(e.content_type));
                if (null != n) return (0, i.Rr)(n, e);
                let r = e.embeds.find(e => null != e.video && null != e.thumbnail);
                if (r?.thumbnail != null) return (0, i.oU)(r.thumbnail, {
                    message: e,
                    identifier: {
                        type: "embed",
                        embedIndex: e.embeds.findIndex(e => e === r)
                    }
                }, "IMAGE")
            }(o),
            {
                title: m,
                body: f
            } = null != (n = (-1 === (t = d.indexOf("\n")) ? d : d.slice(0, t)).match(c)) ? {
                title: n[1].trim(),
                body: -1 === t ? "" : d.slice(t + 1).trimStart()
            } : {
                body: d
            },
            x = e.reactions?.reduce((e, t) => e + t.count, 0) ?? 0;
        return {
            id: o.id,
            media: u,
            title: m,
            body: f,
            content: d,
            timestamp: e.timestamp,
            reactionCount: x
        }
    })
}

function u(e) {
    let t = o.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString())
}