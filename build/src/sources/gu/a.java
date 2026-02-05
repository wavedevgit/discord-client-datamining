package gu;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a {

    /* renamed from: c  reason: collision with root package name */
    public static final C0344a f25381c = new C0344a(null);

    /* renamed from: a  reason: collision with root package name */
    private final BufferedSource f25382a;

    /* renamed from: b  reason: collision with root package name */
    private long f25383b;

    /* renamed from: gu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0344a {
        public /* synthetic */ C0344a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0344a() {
        }
    }

    public a(BufferedSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f25382a = source;
        this.f25383b = 262144L;
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
        String f02 = this.f25382a.f0(this.f25383b);
        this.f25383b -= f02.length();
        return f02;
    }
}
