package rk;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.discord.notifications.api.NotificationData;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j {

    /* renamed from: a  reason: collision with root package name */
    private final gk.a f48327a;

    /* renamed from: b  reason: collision with root package name */
    private final s f48328b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(gk.a aVar) {
        this.f48327a = aVar;
        this.f48328b = new s(aVar);
    }

    public static j a(gk.a aVar) {
        if (aVar.g(1)) {
            return new g(aVar);
        }
        if (!aVar.g(2)) {
            return new k(aVar);
        }
        int g10 = s.g(aVar, 1, 4);
        if (g10 != 4) {
            if (g10 != 5) {
                int g11 = s.g(aVar, 1, 5);
                if (g11 != 12) {
                    if (g11 != 13) {
                        switch (s.g(aVar, 1, 7)) {
                            case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                return new e(aVar, "310", "11");
                            case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                                return new e(aVar, "320", "11");
                            case 58:
                                return new e(aVar, "310", "13");
                            case 59:
                                return new e(aVar, "320", "13");
                            case 60:
                                return new e(aVar, "310", "15");
                            case 61:
                                return new e(aVar, "320", "15");
                            case 62:
                                return new e(aVar, "310", "17");
                            case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                                return new e(aVar, "320", "17");
                            default:
                                throw new IllegalStateException("unknown decoder: " + aVar);
                        }
                    }
                    return new d(aVar);
                }
                return new c(aVar);
            }
            return new b(aVar);
        }
        return new a(aVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final s b() {
        return this.f48328b;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final gk.a c() {
        return this.f48327a;
    }

    public abstract String d();
}
