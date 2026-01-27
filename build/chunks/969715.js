/** Chunk was on 41727 **/
/** chunk id: 969715, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048), n(321073);
var r = n(311907),
    l = n(570209),
    i = n(457699),
    s = n(352505),
    a = n(465364),
    o = n(383233),
    c = n(994500),
    u = n(517381),
    d = n(822382),
    p = n(65600);
let h = [];

function f(e) {
    let {
        searchContext: t
    } = e, n = s.m.useExperiment({
        location: "useMessageRenderedContent"
    }).enabled, f = (0, r.bG)([p.A, u.A, i.A], () => {
        var e;
        let r = (0, d.bS)(t),
            s = p.A.getSearchResultsQuery(r),
            c = u.A.getMessages(r);
        if (null == s || null == c || 0 === c.length) return h;
        let f = (0, l.wG)(null != (e = (0, d.dX)(s)) ? e : ""),
            g = [];
        return c.forEach(e => {
            let t = new o.Ay(e);
            t = (t = function(e, t) {
                let [n] = t, r = n.getMessage(e.id, e.channel_id);
                return null != r && (e = e.merge({
                    attachments: r.attachments,
                    embeds: r.embeds
                })), e
            }(t, [i.A])).set("customRenderedContent", (0, a.Ay)(t, {
                postProcessor: f,
                allowHeading: !0,
                allowList: !0,
                allowGameMentions: n
            })), g.push(t)
        }), g
    }, [n, t], r.My), {
        blockCount: g,
        ignoreCount: m
    } = (0, r.cf)([c.A], () => {
        let e = 0,
            t = 0;
        return f.forEach(n => {
            let r = c.A.isBlockedForMessage(n),
                l = c.A.isIgnoredForMessage(n);
            r ? e++ : l && t++
        }), {
            blockCount: e,
            ignoreCount: t
        }
    });
    return {
        renderedMessages: f,
        blockCount: g,
        ignoreCount: m
    }
}