/** chunk id: 335759 params = (module,exports,require) **/
n.d(t, {
    Q: () => l,
    w: () => s
});
var i = n(562465),
    a = n(198982),
    r = n(652215);
async function l(e) {
    let {
        channelId: t,
        messageId: n,
        answerIds: l
    } = e;
    try {
        await i.Bo.put({
            url: r.Rsh.POLL_ANSWERS(t, n),
            body: {
                answer_ids: l
            },
            rejectWithError: !1
        })
    } catch (e) {
        throw new a.LG(e)
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
        throw new a.LG(e)
    }
}