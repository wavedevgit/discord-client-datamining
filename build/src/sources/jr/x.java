package jr;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements Comparable {
    @NotNull

    /* renamed from: e  reason: collision with root package name */
    public static final a f32197e = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final byte f32198d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    private /* synthetic */ x(byte b10) {
        this.f32198d = b10;
    }

    public static final /* synthetic */ x a(byte b10) {
        return new x(b10);
    }

    public static boolean e(byte b10, Object obj) {
        if (!(obj instanceof x) || b10 != ((x) obj).h()) {
            return false;
        }
        return true;
    }

    public static int f(byte b10) {
        return Byte.hashCode(b10);
    }

    public static String g(byte b10) {
        return String.valueOf(b10 & 255);
    }

    @Override // java.lang.Comparable
    public /* bridge */ /* synthetic */ int compareTo(Object obj) {
        return Intrinsics.compare(h() & 255, ((x) obj).h() & 255);
    }

    public boolean equals(Object obj) {
        return e(this.f32198d, obj);
    }

    public final /* synthetic */ byte h() {
        return this.f32198d;
    }

    public int hashCode() {
        return f(this.f32198d);
    }

    public String toString() {
        return g(this.f32198d);
    }

    public static byte d(byte b10) {
        return b10;
    }
}
