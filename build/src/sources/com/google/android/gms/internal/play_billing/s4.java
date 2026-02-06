package com.google.android.gms.internal.play_billing;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s4 implements u1 {

    /* renamed from: a  reason: collision with root package name */
    static final u1 f14335a = new s4();

    private s4() {
    }

    @Override // com.google.android.gms.internal.play_billing.u1
    public final boolean a(int i10) {
        switch (i10) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                return true;
            default:
                switch (i10) {
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    case 23:
                    case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                        return true;
                    default:
                        return false;
                }
        }
    }
}
