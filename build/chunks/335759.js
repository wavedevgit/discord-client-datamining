/** chunk id: 335759 params = (module,exports,require) **/
n.d(t, {
    Q: () => l,
    w: () => s
});
var i = n(562465),
    r = n(198982),
    a = n(652215);
async function l(e) {
    let {
        channelId: t,
        messageId: n,
        answerIds: l
    } = e;
    try {
        await i.Bo.put({
            url: a.Rsh.POLL_ANSWERS(t, n),
            body: {
                answer_ids: l
            },
            rejectWithError: !1
        })
    } catch (e) {
        throw new r.LG(e)
    }
}
async function s(e) {
    let {
        channelId: t,
        messageId: n
    } = e;
    try {
        await i.Bo.post({
            url: a.Rsh.POLL_EXPIRE(t, n),
            rejectWithError: !1
        })
    } catch (e) {
        throw new r.LG(e)
    }
}