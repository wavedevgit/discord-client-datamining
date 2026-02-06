package kotlin.time;

import kotlin.jvm.internal.Intrinsics;
import kotlin.time.a;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {
    @NotNull

    /* renamed from: a  reason: collision with root package name */
    public static final g f35014a = new g();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements kotlin.time.a {

        /* renamed from: d  reason: collision with root package name */
        private final long f35015d;

        private /* synthetic */ a(long j10) {
            this.f35015d = j10;
        }

        public static final /* synthetic */ a d(long j10) {
            return new a(j10);
        }

        public static long f(long j10) {
            return j10;
        }

        public static long g(long j10) {
            return f.f35012a.b(j10);
        }

        public static boolean h(long j10, Object obj) {
            return (obj instanceof a) && j10 == ((a) obj).n();
        }

        public static int i(long j10) {
            return Long.hashCode(j10);
        }

        public static final long j(long j10, long j11) {
            return f.f35012a.a(j10, j11);
        }

        public static long k(long j10, kotlin.time.a other) {
            Intrinsics.checkNotNullParameter(other, "other");
            if (other instanceof a) {
                return j(j10, ((a) other).n());
            }
            throw new IllegalArgumentException("Subtracting or comparing time marks from different time sources is not possible: " + ((Object) m(j10)) + " and " + other);
        }

        public static String m(long j10) {
            return "ValueTimeMark(reading=" + j10 + ')';
        }

        @Override // kotlin.time.TimeMark
        public long a() {
            return g(this.f35015d);
        }

        @Override // java.lang.Comparable
        /* renamed from: e */
        public int compareTo(kotlin.time.a aVar) {
            return a.C0466a.a(this, aVar);
        }

        public boolean equals(Object obj) {
            return h(this.f35015d, obj);
        }

        public int hashCode() {
            return i(this.f35015d);
        }

        @Override // kotlin.time.a
        public long l(kotlin.time.a other) {
            Intrinsics.checkNotNullParameter(other, "other");
            return k(this.f35015d, other);
        }

        public final /* synthetic */ long n() {
            return this.f35015d;
        }

        public String toString() {
            return m(this.f35015d);
        }
    }

    private g() {
    }

    public long a() {
        return f.f35012a.c();
    }

    public String toString() {
        return f.f35012a.toString();
    }
}
