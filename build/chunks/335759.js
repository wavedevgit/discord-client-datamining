/** chunk id: 335759 params = (module,exports,require) **/
n.d(t, {
    Q: () => a,
    w: () => s
});
var i = n(562465),
    l = n(198982),
    r = n(652215);
async function a(e) {
    let {
        channelId: t,
        messageId: n,
        answerIds: a
    } = e;
    try {
        await i.Bo.put({
            url: r.Rsh.POLL_ANSWERS(t, n),
            body: {
                answer_ids: a
            },
            rejectWithError: !1
        })
    } catch (e) {
        throw new l.LG(e)
    }
}
async function s(e) {
    let {
        channelId: t,
        messageId: n
    } = e;
    try {
        await i.Bo.post({
            url: r.Rsh.POLL_EXPIRE(t, n),
            rejectWithError: !1
        })
    } catch (e) {
        throw new l.LG(e)
    }
}