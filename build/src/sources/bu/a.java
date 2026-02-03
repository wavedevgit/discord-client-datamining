package bu;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a {

    /* renamed from: c  reason: collision with root package name */
    public static final C0130a f7741c = new C0130a(null);

    /* renamed from: a  reason: collision with root package name */
    private final BufferedSource f7742a;

    /* renamed from: b  reason: collision with root package name */
    private long f7743b;

    /* renamed from: bu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0130a {
        public /* synthetic */ C0130a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0130a() {
        }
    }

    public a(BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f7742a = source;
        this.f7743b = 262144L;
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
        String f02 = this.f7742a.f0(this.f7743b);
        this.f7743b -= f02.length();
        return f02;
    }
}
