package fm;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends Event {

    /* renamed from: b  reason: collision with root package name */
    public static final C0313a f23135b = new C0313a(null);

    /* renamed from: a  reason: collision with root package name */
    private final WritableMap f23136a;

    /* renamed from: fm.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0313a {
        public /* synthetic */ C0313a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0313a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(int i10, WritableMap mEventData) {
        super(i10);
        Intrinsics.checkNotNullParameter(mEventData, "mEventData");
        this.f23136a = mEventData;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public boolean canCoalesce() {
        return false;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public void dispatch(RCTEventEmitter rctEventEmitter) {
        Intrinsics.checkNotNullParameter(rctEventEmitter, "rctEventEmitter");
        rctEventEmitter.receiveEvent(getViewTag(), internal_getEventNameCompat(), this.f23136a);
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return "topHttpError";
    }
}
