package yn;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewProps;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: e  reason: collision with root package name */
    public static final C0778a f56235e = new C0778a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final a f56236f = new a(false, false, false, false);

    /* renamed from: a  reason: collision with root package name */
    private final boolean f56237a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f56238b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f56239c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f56240d;

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
        this.f56237a = z10;
        this.f56238b = z11;
        this.f56239c = z12;
        this.f56240d = z13;
    }

    public final boolean a() {
        return this.f56240d;
    }

    public final boolean b() {
        return this.f56237a;
    }

    public final boolean c() {
        return this.f56239c;
    }

    public final boolean d() {
        return this.f56238b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f56237a == aVar.f56237a && this.f56238b == aVar.f56238b && this.f56239c == aVar.f56239c && this.f56240d == aVar.f56240d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Boolean.hashCode(this.f56237a) * 31) + Boolean.hashCode(this.f56238b)) * 31) + Boolean.hashCode(this.f56239c)) * 31) + Boolean.hashCode(this.f56240d);
    }

    public String toString() {
        boolean z10 = this.f56237a;
        boolean z11 = this.f56238b;
        boolean z12 = this.f56239c;
        boolean z13 = this.f56240d;
        return "SafeAreaViewEdges(left=" + z10 + ", top=" + z11 + ", right=" + z12 + ", bottom=" + z13 + ")";
    }
}
