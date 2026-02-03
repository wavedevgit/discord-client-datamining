package du;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a {

    /* renamed from: c  reason: collision with root package name */
    public static final C0272a f21057c = new C0272a(null);

    /* renamed from: a  reason: collision with root package name */
    private final BufferedSource f21058a;

    /* renamed from: b  reason: collision with root package name */
    private long f21059b;

    /* renamed from: du.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0272a {
        public /* synthetic */ C0272a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0272a() {
        }
    }

    public a(BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f21058a = source;
        this.f21059b = 262144L;
    }

    public final Headers a() {
        Headers.a aVar = new Headers.a();
        while (true) {
            String b10 = b();
            if (b10.length() == 0) {
                return aVar.f();
            }
            aVar.c(b10);
        }
    }

    public final String b() {
        String e02 = this.f21058a.e0(this.f21059b);
        this.f21059b -= e02.length();
        return e02;
    }
}
