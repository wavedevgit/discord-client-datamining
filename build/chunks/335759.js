/** chunk id: 335759 params = (module,exports,require) **/
n.d(t, {
    Q: () => s,
    w: () => r
});
var i = n(562465),
    a = n(198982),
    l = n(652215);
async function s(e) {
    let {
        channelId: t,
        messageId: n,
        answerIds: s
    } = e;
    try {
        await i.Bo.put({
            url: l.Rsh.POLL_ANSWERS(t, n),
            body: {
                answer_ids: s
            },
            rejectWithError: !1
        })
    } catch (e) {
        throw new a.LG(e)
    }
}
async function r(e) {
    let {
        channelId: t,
        messageId: n
    } = e;
    try {
        await i.Bo.post({
            url: l.Rsh.POLL_EXPIRE(t, n),
            rejectWithError: !1
        })
    } catch (e) {
        throw new a.LG(e)
    }
}