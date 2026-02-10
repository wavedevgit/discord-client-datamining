package ju;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a {

    /* renamed from: c  reason: collision with root package name */
    public static final C0457a f30499c = new C0457a(null);

    /* renamed from: a  reason: collision with root package name */
    private final BufferedSource f30500a;

    /* renamed from: b  reason: collision with root package name */
    private long f30501b;

    /* renamed from: ju.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0457a {
        public /* synthetic */ C0457a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0457a() {
        }
    }

    public a(BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f30500a = source;
        this.f30501b = 262144L;
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
        String i02 = this.f30500a.i0(this.f30501b);
        this.f30501b -= i02.length();
        return i02;
    }
}
