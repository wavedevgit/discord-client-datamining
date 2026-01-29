/** Chunk was on 1113 **/
/** chunk id: 969715, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
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
    h = n(65600);
let p = [];

function g(e) {
    let {
        searchContext: t
    } = e, n = s.m.useExperiment({
        location: "useMessageRenderedContent"
    }).enabled, g = (0, r.bG)([h.A, u.A, i.A], () => {
        var e;
        let r = (0, d.bS)(t),
            s = h.A.getSearchResultsQuery(r),
            c = u.A.getMessages(r);
        if (null == s || null == c || 0 === c.length) return p;
        let g = (0, l.wG)(null != (e = (0, d.dX)(s)) ? e : ""),
            f = [];
        return c.forEach(e => {
            let t = new o.Ay(e);
            t = (t = function(e, t) {
                let [n] = t, r = n.getMessage(e.id, e.channel_id);
                return null != r && (e = e.merge({
                    attachments: r.attachments,
                    embeds: r.embeds
                })), e
            }(t, [i.A])).set("customRenderedContent", (0, a.Ay)(t, {
                postProcessor: g,
                allowHeading: !0,
                allowList: !0,
                allowGameMentions: n
            })), f.push(t)
        }), f
    }, [n, t], r.My), {
        blockCount: f,
        ignoreCount: m
    } = (0, r.cf)([c.A], () => {
        let e = 0,
            t = 0;
        return g.forEach(n => {
            let r = c.A.isBlockedForMessage(n),
                l = c.A.isIgnoredForMessage(n);
            r ? e++ : l && t++
        }), {
            blockCount: e,
            ignoreCount: t
        }
    });
    return {
        renderedMessages: g,
        blockCount: f,
        ignoreCount: m
    }
}