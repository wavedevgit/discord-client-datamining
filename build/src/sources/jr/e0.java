package jr;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 implements Comparable {
    @NotNull

    /* renamed from: e  reason: collision with root package name */
    public static final a f32165e = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final short f32166d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    private /* synthetic */ e0(short s10) {
        this.f32166d = s10;
    }

    public static final /* synthetic */ e0 a(short s10) {
        return new e0(s10);
    }

    public static boolean e(short s10, Object obj) {
        if (!(obj instanceof e0) || s10 != ((e0) obj).h()) {
            return false;
        }
        return true;
    }

    public static int f(short s10) {
        return Short.hashCode(s10);
    }

    public static String g(short s10) {
        return String.valueOf(s10 & 65535);
    }

    @Override // java.lang.Comparable
    public /* bridge */ /* synthetic */ int compareTo(Object obj) {
        return Intrinsics.compare(h() & 65535, ((e0) obj).h() & 65535);
    }

    public boolean equals(Object obj) {
        return e(this.f32166d, obj);
    }

    public final /* synthetic */ short h() {
        return this.f32166d;
    }

    public int hashCode() {
        return f(this.f32166d);
    }

    public String toString() {
        return g(this.f32166d);
    }

    public static short d(short s10) {
        return s10;
    }
}
