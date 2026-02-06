package bu;

import java.nio.charset.Charset;
import kotlin.jvm.internal.Intrinsics;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    public static final g f7115a = new g();

    private g() {
    }

    public static final String a(String username, String password, Charset charset) {
        Intrinsics.checkNotNullParameter(username, "username");
        Intrinsics.checkNotNullParameter(password, "password");
        Intrinsics.checkNotNullParameter(charset, "charset");
        String d10 = ByteString.f43166o.f(username + ':' + password, charset).d();
        return "Basic " + d10;
    }
}
