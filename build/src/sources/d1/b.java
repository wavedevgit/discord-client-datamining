package d1;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f20375a = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private static final long f20376b;

    /* renamed from: c  reason: collision with root package name */
    private static final long f20377c;

    /* renamed from: d  reason: collision with root package name */
    private static final long f20378d;

    /* renamed from: e  reason: collision with root package name */
    private static final long f20379e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final long a() {
            return b.f20378d;
        }

        public final long b() {
            return b.f20376b;
        }

        public final long c() {
            return b.f20377c;
        }

        private a() {
        }
    }

    static {
        long j10 = 3;
        long j11 = j10 << 32;
        f20376b = d((0 & 4294967295L) | j11);
        f20377c = d((1 & 4294967295L) | j11);
        f20378d = d(j11 | (2 & 4294967295L));
        f20379e = d((j10 & 4294967295L) | (4 << 32));
    }

    public static final boolean e(long j10, long j11) {
        if (j10 == j11) {
            return true;
        }
        return false;
    }

    public static final int f(long j10) {
        return (int) (j10 >> 32);
    }

    public static int g(long j10) {
        return Long.hashCode(j10);
    }

    public static String h(long j10) {
        if (e(j10, f20376b)) {
            return "Rgb";
        }
        if (e(j10, f20377c)) {
            return "Xyz";
        }
        if (e(j10, f20378d)) {
            return "Lab";
        }
        if (e(j10, f20379e)) {
            return "Cmyk";
        }
        return "Unknown";
    }

    public static long d(long j10) {
        return j10;
    }
}
