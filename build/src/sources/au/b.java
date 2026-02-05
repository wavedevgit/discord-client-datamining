package au;

import kotlin.jvm.internal.Intrinsics;
import okhttp3.Cookie;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {
    public static final String a(Cookie cookie, boolean z10) {
        Intrinsics.checkNotNullParameter(cookie, "cookie");
        return cookie.h(z10);
    }
}
