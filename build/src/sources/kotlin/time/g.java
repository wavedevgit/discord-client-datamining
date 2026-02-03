package kotlin.time;

import kotlin.jvm.internal.Intrinsics;
import kotlin.time.a;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {
    @NotNull

    /* renamed from: a  reason: collision with root package name */
    public static final g f36080a = new g();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements kotlin.time.a {

        /* renamed from: d  reason: collision with root package name */
        private final long f36081d;

        private /* synthetic */ a(long j10) {
            this.f36081d = j10;
        }

        public static final /* synthetic */ a d(long j10) {
            return new a(j10);
        }

        public static long f(long j10) {
            return j10;
        }

        public static long g(long j10) {
            return f.f36078a.b(j10);
        }

        public static boolean h(long j10, Object obj) {
            return (obj instanceof a) && j10 == ((a) obj).o();
        }

        public static int i(long j10) {
            return Long.hashCode(j10);
        }

        public static final long k(long j10, long j11) {
            return f.f36078a.a(j10, j11);
        }

        public static long l(long j10, kotlin.time.a other) {
            Intrinsics.checkNotNullParameter(other, "other");
            if (other instanceof a) {
                return k(j10, ((a) other).o());
            }
            throw new IllegalArgumentException("Subtracting or comparing time marks from different time sources is not possible: " + ((Object) m(j10)) + " and " + other);
        }

        public static String m(long j10) {
            return "ValueTimeMark(reading=" + j10 + ')';
        }

        @Override // kotlin.time.TimeMark
        public long a() {
            return g(this.f36081d);
        }

        @Override // java.lang.Comparable
        /* renamed from: e */
        public int compareTo(kotlin.time.a aVar) {
            return a.C0453a.a(this, aVar);
        }

        public boolean equals(Object obj) {
            return h(this.f36081d, obj);
        }

        public int hashCode() {
            return i(this.f36081d);
        }

        @Override // kotlin.time.a
        public long j(kotlin.time.a other) {
            Intrinsics.checkNotNullParameter(other, "other");
            return l(this.f36081d, other);
        }

        public final /* synthetic */ long o() {
            return this.f36081d;
        }

        public String toString() {
            return m(this.f36081d);
        }
    }

    private g() {
    }

    public long a() {
        return f.f36078a.c();
    }

    public String toString() {
        return f.f36078a.toString();
    }
}
