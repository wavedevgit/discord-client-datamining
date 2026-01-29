package d1;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f21536a = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private static final long f21537b;

    /* renamed from: c  reason: collision with root package name */
    private static final long f21538c;

    /* renamed from: d  reason: collision with root package name */
    private static final long f21539d;

    /* renamed from: e  reason: collision with root package name */
    private static final long f21540e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final long a() {
            return b.f21539d;
        }

        public final long b() {
            return b.f21537b;
        }

        public final long c() {
            return b.f21538c;
        }

        private a() {
        }
    }

    static {
        long j10 = 3;
        long j11 = j10 << 32;
        f21537b = d((0 & 4294967295L) | j11);
        f21538c = d((1 & 4294967295L) | j11);
        f21539d = d(j11 | (2 & 4294967295L));
        f21540e = d((j10 & 4294967295L) | (4 << 32));
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
        if (e(j10, f21537b)) {
            return "Rgb";
        }
        if (e(j10, f21538c)) {
            return "Xyz";
        }
        if (e(j10, f21539d)) {
            return "Lab";
        }
        if (e(j10, f21540e)) {
            return "Cmyk";
        }
        return "Unknown";
    }

    public static long d(long j10) {
        return j10;
    }
}
