package c1;

import d1.d;
import d1.g;
import jr.b0;
import jr.i0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public static final C0137a f7935a = new C0137a(null);

    /* renamed from: b  reason: collision with root package name */
    private static final long f7936b = b.c(4278190080L);

    /* renamed from: c  reason: collision with root package name */
    private static final long f7937c = b.c(4282664004L);

    /* renamed from: d  reason: collision with root package name */
    private static final long f7938d = b.c(4287137928L);

    /* renamed from: e  reason: collision with root package name */
    private static final long f7939e = b.c(4291611852L);

    /* renamed from: f  reason: collision with root package name */
    private static final long f7940f = b.c(4294967295L);

    /* renamed from: g  reason: collision with root package name */
    private static final long f7941g = b.c(4294901760L);

    /* renamed from: h  reason: collision with root package name */
    private static final long f7942h = b.c(4278255360L);

    /* renamed from: i  reason: collision with root package name */
    private static final long f7943i = b.c(4278190335L);

    /* renamed from: j  reason: collision with root package name */
    private static final long f7944j = b.c(4294967040L);

    /* renamed from: k  reason: collision with root package name */
    private static final long f7945k = b.c(4278255615L);

    /* renamed from: l  reason: collision with root package name */
    private static final long f7946l = b.c(4294902015L);

    /* renamed from: m  reason: collision with root package name */
    private static final long f7947m = b.b(0);

    /* renamed from: n  reason: collision with root package name */
    private static final long f7948n = b.a(0.0f, 0.0f, 0.0f, 0.0f, g.f21121a.j());

    /* renamed from: c1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0137a {
        public /* synthetic */ C0137a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final long a() {
            return a.f7947m;
        }

        private C0137a() {
        }
    }

    public static final long c(long j10, d1.c colorSpace) {
        Intrinsics.checkNotNullParameter(colorSpace, "colorSpace");
        d1.c f10 = f(j10);
        if (Intrinsics.areEqual(colorSpace, f10)) {
            return j10;
        }
        return d.i(f10, colorSpace, 0, 2, null).e(h(j10), g(j10), e(j10), d(j10));
    }

    public static final float d(long j10) {
        float c10;
        float f10;
        if (b0.d(63 & j10) == 0) {
            c10 = (float) i0.c(b0.d(b0.d(j10 >>> 56) & 255));
            f10 = 255.0f;
        } else {
            c10 = (float) i0.c(b0.d(b0.d(j10 >>> 6) & 1023));
            f10 = 1023.0f;
        }
        return c10 / f10;
    }

    public static final float e(long j10) {
        if (b0.d(63 & j10) == 0) {
            return ((float) i0.c(b0.d(b0.d(j10 >>> 32) & 255))) / 255.0f;
        }
        return c.e(c.d((short) b0.d(b0.d(j10 >>> 16) & 65535)));
    }

    public static final d1.c f(long j10) {
        return g.f21121a.e()[(int) b0.d(j10 & 63)];
    }

    public static final float g(long j10) {
        if (b0.d(63 & j10) == 0) {
            return ((float) i0.c(b0.d(b0.d(j10 >>> 40) & 255))) / 255.0f;
        }
        return c.e(c.d((short) b0.d(b0.d(j10 >>> 32) & 65535)));
    }

    public static final float h(long j10) {
        if (b0.d(63 & j10) == 0) {
            return ((float) i0.c(b0.d(b0.d(j10 >>> 48) & 255))) / 255.0f;
        }
        return c.e(c.d((short) b0.d(b0.d(j10 >>> 48) & 65535)));
    }

    public static long b(long j10) {
        return j10;
    }
}
