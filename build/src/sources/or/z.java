package or;

import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z implements Comparable {
    @NotNull

    /* renamed from: e  reason: collision with root package name */
    public static final a f44252e = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final int f44253d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    private /* synthetic */ z(int i10) {
        this.f44253d = i10;
    }

    public static final /* synthetic */ z a(int i10) {
        return new z(i10);
    }

    public static boolean e(int i10, Object obj) {
        if (!(obj instanceof z) || i10 != ((z) obj).h()) {
            return false;
        }
        return true;
    }

    public static int f(int i10) {
        return Integer.hashCode(i10);
    }

    public static String g(int i10) {
        return String.valueOf(i10 & 4294967295L);
    }

    @Override // java.lang.Comparable
    public /* bridge */ /* synthetic */ int compareTo(Object obj) {
        return i0.a(h(), ((z) obj).h());
    }

    public boolean equals(Object obj) {
        return e(this.f44253d, obj);
    }

    public final /* synthetic */ int h() {
        return this.f44253d;
    }

    public int hashCode() {
        return f(this.f44253d);
    }

    public String toString() {
        return g(this.f44253d);
    }

    public static int d(int i10) {
        return i10;
    }
}
