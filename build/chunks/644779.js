/** chunk id: 644779 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(73153),
    l = n(636401),
    r = n(629471),
    a = n(613057),
    s = n(652215);
let o = {
    [s.e$_.SET_CONFIG]: {
        scope: a.VH,
        validation: e => (0, r.A)(e).required().keys({
            use_interactive_pip: e.boolean()
        }),
        handler(e) {
            let {
                socket: t,
                args: {
                    use_interactive_pip: n
                }
            } = e;
            if (t.transport !== a.z4.POST_MESSAGE) throw new l.A({
                errorCode: s.Lw6.INVALID_COMMAND
            }, `command not available from "${t.transport} transport`);
            if (null == t.application.id) throw new l.A({
                errorCode: s.Lw6.INVALID_COMMAND
            }, "invalid application");
            return i.h.dispatch({
                type: "EMBEDDED_ACTIVITY_SET_CONFIG",
                applicationId: t.application.id,
                config: {
                    useInteractivePIP: n
                }
            }), Promise.resolve({
                use_interactive_pip: n
            })
        }
    }
}