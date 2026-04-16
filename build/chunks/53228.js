/** chunk id: 53228 params = (module,exports,require) **/
n.d(t, {
    A: () => i
});
var l = n(311907),
    a = n(576705),
    s = n(659674);

function i(e) {
    let {
        message: t,
        channel: n,
        forwardOptions: i
    } = e, r = i?.onlyAttachmentIds, u = i?.onlyEmbedIndices, o = t.messageSnapshots[0]?.message ?? t, c = o.attachments;
    null != r ? c = o.attachments.filter(e => r.includes(e.id)) : null != u && (c = []);
    let A = [];
    return (0, l.bG)([a.A], () => null != n && !(0, s.fS)(n, a.A) && (0, s.ax)(t)) || (A = o.embeds, null != u ? A = o.embeds.filter((e, t) => u.includes(t)) : null != r && (A = [])), (null != u || "" === o.content && A.length > 0) && (o = o.set("content", A.map(e => e.url).join("\n"))), "" === o.content && o.embeds[0]?.rawDescription != null && (o = o.set("content", o.embeds[0].rawDescription)), {
        attachments: c,
        embeds: A,
        hasContent: "" !== o.content && null == r,
        contentMessage: o
    }
}