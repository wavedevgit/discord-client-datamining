/** chunk id: 93151 params = (module,exports,require) **/
n.d(t, {
    u: () => r
});
var i = n(562465),
    l = n(652215);
async function r(e, t) {
    if (void 0 === e) return !1;
    try {
        let {
            body: n
        } = await i.Bo.get({
            url: l.Rsh.ACTIVITIES_TRUSTED_LINKS(e),
            rejectWithError: !1,
            query: {
                url: t
            },
            timeout: 500
        });
        return !!n.trusted
    } catch {
        return !1
    }
}