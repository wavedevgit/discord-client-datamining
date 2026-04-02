/** chunk id: 82005 params = (module,exports,require) **/
n.d(t, {
    C: () => d
}), n(64700);
var i = n(311907);
n(63995), n(113783), n(69407);
var a = n(446600),
    l = n(624265);
n(616356);
var r = n(734057);
n(576705), n(607567);
var s = n(473019);
n(539446);
var o = n(508654);

function d(e) {
    let t = (0, l.Ay)(e),
        n = r.A.getChannel(t[0]?.id),
        d = (0, i.bG)([a.A], () => a.A.getStageInstanceByChannel(n?.id), [n]),
        c = (0, o.BP)(e),
        {
            isStageNoticeHidden: u,
            isEventNoticeHidden: A
        } = (0, i.cf)([s.A], () => ({
            isStageNoticeHidden: s.A.isLiveChannelNoticeHidden({
                stageId: d?.id
            }),
            isEventNoticeHidden: s.A.isLiveChannelNoticeHidden({
                eventId: c?.id
            })
        }), [d, c]);
    if (null != c)
        if (null != d) return !u;
        else return !A;
    return null != d && !u
}
n(988794), n(818348)