/** chunk id: 372598 params = (module,exports,require) **/
n.d(t, {
    XO: () => a,
    dL: () => l
});
var i = n(411335);

function l(e) {
    let t = a();
    return Array.from(e.defaultActionTypes).map(e => t[e])
}

function a() {
    return {
        [i.AH.BLOCK_MESSAGE]: {
            type: i.AH.BLOCK_MESSAGE,
            metadata: {
                customMessage: void 0
            }
        },
        [i.AH.FLAG_TO_CHANNEL]: {
            type: i.AH.FLAG_TO_CHANNEL,
            metadata: {
                channelId: void 0
            }
        },
        [i.AH.USER_COMMUNICATION_DISABLED]: {
            type: i.AH.USER_COMMUNICATION_DISABLED,
            metadata: {
                durationSeconds: 60
            }
        },
        [i.AH.QUARANTINE_USER]: {
            type: i.AH.QUARANTINE_USER,
            metadata: {}
        }
    }
}