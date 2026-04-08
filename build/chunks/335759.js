/** chunk id: 335759 params = (module,exports,require) **/
n.d(t, {
    Q: () => r,
    w: () => a
});
var i = n(562465),
    l = n(198982),
    s = n(652215);
async function r(e) {
    let {
        channelId: t,
        messageId: n,
        answerIds: r
    } = e;
    try {
        await i.Bo.put({
            url: s.Rsh.POLL_ANSWERS(t, n),
            body: {
                answer_ids: r
            },
            rejectWithError: !1
        })
    } catch (e) {
        throw new l.LG(e)
    }
}
async function a(e) {
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