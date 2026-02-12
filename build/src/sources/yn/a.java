package yn;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewProps;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: e  reason: collision with root package name */
    public static final C0778a f55667e = new C0778a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final a f55668f = new a(false, false, false, false);

    /* renamed from: a  reason: collision with root package name */
    private final boolean f55669a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f55670b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f55671c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f55672d;

    /* renamed from: yn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0778a {
        public /* synthetic */ C0778a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a a(ReadableMap readableMap) {
            if (readableMap != null) {
                return new a(readableMap.getBoolean(ViewProps.LEFT), readableMap.getBoolean(ViewProps.TOP), readableMap.getBoolean(ViewProps.RIGHT), readableMap.getBoolean(ViewProps.BOTTOM));
            }
            return null;
        }

        private C0778a() {
        }
    }

    public a(boolean z10, boolean z11, boolean z12, boolean z13) {
        this.f55669a = z10;
        this.f55670b = z11;
        this.f55671c = z12;
        this.f55672d = z13;
    }

    public final boolean a() {
        return this.f55672d;
    }

    public final boolean b() {
        return this.f55669a;
    }

    public final boolean c() {
        return this.f55671c;
    }

    public final boolean d() {
        return this.f55670b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f55669a == aVar.f55669a && this.f55670b == aVar.f55670b && this.f55671c == aVar.f55671c && this.f55672d == aVar.f55672d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Boolean.hashCode(this.f55669a) * 31) + Boolean.hashCode(this.f55670b)) * 31) + Boolean.hashCode(this.f55671c)) * 31) + Boolean.hashCode(this.f55672d);
    }

    public String toString() {
        boolean z10 = this.f55669a;
        boolean z11 = this.f55670b;
        boolean z12 = this.f55671c;
        boolean z13 = this.f55672d;
        return "SafeAreaViewEdges(left=" + z10 + ", top=" + z11 + ", right=" + z12 + ", bottom=" + z13 + ")";
    }
}
