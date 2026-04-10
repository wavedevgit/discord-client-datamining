/** chunk id: 539754 params = (module,exports,require) **/
n.d(t, {
    I: () => d
});
var i = n(179771),
    l = n(859703),
    r = n(792620),
    a = n(636401),
    s = n(629471),
    o = n(652215);
let d = {
    [o.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE]: {
        scope: i.F.IDENTIFY,
        validation: e => (0, s.A)(e).required().keys({
            quest_id: e.string().required()
        }),
        handler: function(e) {
            let {
                args: {
                    quest_id: t
                },
                socket: n
            } = e, i = l.A.getQuest(t), s = (0, r.TP)(i);
            if (null == i || null == s || s !== n.application.id) throw new a.A({
                errorCode: o.Lw6.INVALID_COMMAND
            }, `Quest not found: ${t}`)
        }
    }
}