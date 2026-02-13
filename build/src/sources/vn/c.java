package vn;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends d {

    /* renamed from: d  reason: collision with root package name */
    public static final a f52217d = new a(null);

    /* renamed from: c  reason: collision with root package name */
    private final boolean f52218c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements tn.b {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // tn.b
        public String a() {
            return "onDismiss";
        }

        @Override // tn.b
        public String getEventName() {
            return "topDismiss";
        }

        private a() {
        }
    }

    public c(int i10, int i11, boolean z10) {
        super(i10, i11, "topDismiss", "onDismiss");
        this.f52218c = z10;
    }

    @Override // vn.d, com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putBoolean("isNativeDismiss", this.f52218c);
        return createMap;
    }
}
