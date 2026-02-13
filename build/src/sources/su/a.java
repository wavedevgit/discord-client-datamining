package su;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a {

    /* renamed from: c  reason: collision with root package name */
    public static final C0655a f48952c = new C0655a(null);

    /* renamed from: a  reason: collision with root package name */
    private final BufferedSource f48953a;

    /* renamed from: b  reason: collision with root package name */
    private long f48954b;

    /* renamed from: su.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0655a {
        public /* synthetic */ C0655a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0655a() {
        }
    }

    public a(BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f48953a = source;
        this.f48954b = 262144L;
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
        String i02 = this.f48953a.i0(this.f48954b);
        this.f48954b -= i02.length();
        return i02;
    }
}
