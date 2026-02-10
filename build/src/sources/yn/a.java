package yn;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewProps;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: e  reason: collision with root package name */
    public static final C0778a f55666e = new C0778a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final a f55667f = new a(false, false, false, false);

    /* renamed from: a  reason: collision with root package name */
    private final boolean f55668a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f55669b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f55670c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f55671d;

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
        this.f55668a = z10;
        this.f55669b = z11;
        this.f55670c = z12;
        this.f55671d = z13;
    }

    public final boolean a() {
        return this.f55671d;
    }

    public final boolean b() {
        return this.f55668a;
    }

    public final boolean c() {
        return this.f55670c;
    }

    public final boolean d() {
        return this.f55669b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f55668a == aVar.f55668a && this.f55669b == aVar.f55669b && this.f55670c == aVar.f55670c && this.f55671d == aVar.f55671d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Boolean.hashCode(this.f55668a) * 31) + Boolean.hashCode(this.f55669b)) * 31) + Boolean.hashCode(this.f55670c)) * 31) + Boolean.hashCode(this.f55671d);
    }

    public String toString() {
        boolean z10 = this.f55668a;
        boolean z11 = this.f55669b;
        boolean z12 = this.f55670c;
        boolean z13 = this.f55671d;
        return "SafeAreaViewEdges(left=" + z10 + ", top=" + z11 + ", right=" + z12 + ", bottom=" + z13 + ")";
    }
}
