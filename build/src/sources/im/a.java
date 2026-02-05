package im;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends Event {

    /* renamed from: b  reason: collision with root package name */
    public static final C0383a f27435b = new C0383a(null);

    /* renamed from: a  reason: collision with root package name */
    private final b f27436a;

    /* renamed from: im.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0383a {
        public /* synthetic */ C0383a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0383a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(int i10, int i11, b event) {
        super(i10, i11);
        Intrinsics.checkNotNullParameter(event, "event");
        this.f27436a = event;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        createMap.putInt("target", this.f27436a.e());
        createMap.putInt("parentScrollViewTarget", this.f27436a.d());
        WritableMap createMap2 = Arguments.createMap();
        createMap2.putDouble("x", this.f27436a.g());
        createMap2.putDouble("y", this.f27436a.h());
        createMap2.putDouble("width", this.f27436a.f());
        createMap2.putDouble("height", this.f27436a.c());
        createMap2.putDouble("absoluteX", this.f27436a.a());
        createMap2.putDouble("absoluteY", this.f27436a.b());
        Unit unit = Unit.f31988a;
        createMap.putMap("layout", createMap2);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return "topFocusedInputLayoutChanged";
    }
}
