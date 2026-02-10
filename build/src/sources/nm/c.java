package nm;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.Event;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends Event {

    /* renamed from: b  reason: collision with root package name */
    public static final a f37973b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final d f37974a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(int i10, int i11, d event) {
        super(i10, i11);
        Intrinsics.checkNotNullParameter(event, "event");
        this.f37974a = event;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        createMap.putInt("target", this.f37974a.g());
        WritableMap createMap2 = Arguments.createMap();
        WritableMap createMap3 = Arguments.createMap();
        createMap3.putDouble("x", this.f37974a.e());
        createMap3.putDouble("y", this.f37974a.f());
        createMap3.putInt(ViewProps.POSITION, this.f37974a.d());
        Unit unit = Unit.f31987a;
        createMap2.putMap(ViewProps.START, createMap3);
        WritableMap createMap4 = Arguments.createMap();
        createMap4.putDouble("x", this.f37974a.b());
        createMap4.putDouble("y", this.f37974a.c());
        createMap4.putInt(ViewProps.POSITION, this.f37974a.a());
        createMap2.putMap(ViewProps.END, createMap4);
        createMap.putMap("selection", createMap2);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return "topFocusedInputSelectionChanged";
    }
}
