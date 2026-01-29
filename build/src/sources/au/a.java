package au;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a {

    /* renamed from: c  reason: collision with root package name */
    public static final C0101a f6927c = new C0101a(null);

    /* renamed from: a  reason: collision with root package name */
    private final BufferedSource f6928a;

    /* renamed from: b  reason: collision with root package name */
    private long f6929b;

    /* renamed from: au.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0101a {
        public /* synthetic */ C0101a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0101a() {
        }
    }

    public a(BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f6928a = source;
        this.f6929b = 262144L;
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
        String e02 = this.f6928a.e0(this.f6929b);
        this.f6929b -= e02.length();
        return e02;
    }
}
