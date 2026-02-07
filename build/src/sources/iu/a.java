package iu;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a {

    /* renamed from: c  reason: collision with root package name */
    public static final C0410a f29385c = new C0410a(null);

    /* renamed from: a  reason: collision with root package name */
    private final BufferedSource f29386a;

    /* renamed from: b  reason: collision with root package name */
    private long f29387b;

    /* renamed from: iu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0410a {
        public /* synthetic */ C0410a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0410a() {
        }
    }

    public a(BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f29386a = source;
        this.f29387b = 262144L;
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
        String h02 = this.f29386a.h0(this.f29387b);
        this.f29387b -= h02.length();
        return h02;
    }
}
