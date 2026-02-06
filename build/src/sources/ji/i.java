package ji;

import android.os.Build;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {
    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    public static h a() {
        switch (Build.VERSION.SDK_INT) {
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                return new r();
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                return new t();
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                return new w();
            case 27:
                if (Build.VERSION.PREVIEW_SDK_INT == 0) {
                    return new x();
                }
                break;
        }
        return new z();
    }
}
