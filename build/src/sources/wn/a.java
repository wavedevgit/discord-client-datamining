package wn;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends Event implements tn.b {

    /* renamed from: a  reason: collision with root package name */
    public static final C0738a f52938a = new C0738a(null);

    /* renamed from: wn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0738a implements tn.b {
        public /* synthetic */ C0738a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // tn.b
        public String a() {
            return "onDidAppear";
        }

        @Override // tn.b
        public String getEventName() {
            return "topDidAppear";
        }

        private C0738a() {
        }
    }

    public a(int i10, int i11) {
        super(i10, i11);
    }

    @Override // tn.b
    public String a() {
        return "onDidAppear";
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        return Arguments.createMap();
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return "topDidAppear";
    }
}
