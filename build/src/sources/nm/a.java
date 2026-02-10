package nm;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends Event {

    /* renamed from: b  reason: collision with root package name */
    public static final C0534a f37963b = new C0534a(null);

    /* renamed from: a  reason: collision with root package name */
    private final b f37964a;

    /* renamed from: nm.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0534a {
        public /* synthetic */ C0534a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0534a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(int i10, int i11, b event) {
        super(i10, i11);
        Intrinsics.checkNotNullParameter(event, "event");
        this.f37964a = event;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        createMap.putInt("target", this.f37964a.e());
        createMap.putInt("parentScrollViewTarget", this.f37964a.d());
        WritableMap createMap2 = Arguments.createMap();
        createMap2.putDouble("x", this.f37964a.g());
        createMap2.putDouble("y", this.f37964a.h());
        createMap2.putDouble("width", this.f37964a.f());
        createMap2.putDouble("height", this.f37964a.c());
        createMap2.putDouble("absoluteX", this.f37964a.a());
        createMap2.putDouble("absoluteY", this.f37964a.b());
        Unit unit = Unit.f31987a;
        createMap.putMap("layout", createMap2);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return "topFocusedInputLayoutChanged";
    }
}
