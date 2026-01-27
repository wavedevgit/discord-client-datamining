/** Chunk was on web.js **/
/** chunk id: 692744, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    el: () => c,
    xf: () => l
});
var r = n(572808),
    i = n(588703),
    a = n(985018);

function o(e) {
    return {
        userId: e.user_id,
        position: e.position,
        avatar: e.avatar
    }
}

function s(e) {
    return {
        id: e.id,
        claimedBy: e.claimed_by
    }
}

function l(e) {
    return {
        roomId: e.room_id,
        participants: e.participants.map(o),
        seats: e.seats.map(s)
    }
}

function c(e) {
    switch (e) {
        case r.wS.RADIO:
            return a.intl.string(i.default.AjiGKB);
        case r.wS.ENVIRONMENT:
            return a.intl.string(i.default.YEYIbI);
        case r.wS.CAMPFIRE:
            return a.intl.string(i.default["Vk9+Ez"]);
        default:
            return ""
    }
}