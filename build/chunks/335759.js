/** chunk id: 335759 params = (module,exports,require) **/
n.d(t, {
    Q: () => a,
    w: () => r
});
var i = n(562465),
    l = n(198982),
    s = n(652215);
async function a(e) {
    let {
        channelId: t,
        messageId: n,
        answerIds: a
    } = e;
    try {
        await i.Bo.put({
            url: s.Rsh.POLL_ANSWERS(t, n),
            body: {
                answer_ids: a
            },
            rejectWithError: !1
        })
    } catch (e) {
        throw new l.LG(e)
    }
}
async function r(e) {
    let {
        channelId: t,
        messageId: n
    } = e;
    try {
        await i.Bo.post({
            url: s.Rsh.POLL_EXPIRE(t, n),
            rejectWithError: !1
        })
    } catch (e) {
        throw new l.LG(e)
    }
}