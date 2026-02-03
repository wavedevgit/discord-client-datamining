package jr;

import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 implements Comparable {
    @NotNull

    /* renamed from: e  reason: collision with root package name */
    public static final a f32154e = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final long f32155d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    private /* synthetic */ b0(long j10) {
        this.f32155d = j10;
    }

    public static final /* synthetic */ b0 a(long j10) {
        return new b0(j10);
    }

    public static boolean e(long j10, Object obj) {
        if (!(obj instanceof b0) || j10 != ((b0) obj).h()) {
            return false;
        }
        return true;
    }

    public static int f(long j10) {
        return Long.hashCode(j10);
    }

    public static String g(long j10) {
        return i0.d(j10, 10);
    }

    @Override // java.lang.Comparable
    public /* bridge */ /* synthetic */ int compareTo(Object obj) {
        return i0.b(h(), ((b0) obj).h());
    }

    public boolean equals(Object obj) {
        return e(this.f32155d, obj);
    }

    public final /* synthetic */ long h() {
        return this.f32155d;
    }

    public int hashCode() {
        return f(this.f32155d);
    }

    public String toString() {
        return g(this.f32155d);
    }

    public static long d(long j10) {
        return j10;
    }
}
