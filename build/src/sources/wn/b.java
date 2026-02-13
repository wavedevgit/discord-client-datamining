package wn;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends Event implements tn.b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f53507a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements tn.b {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // tn.b
        public String a() {
            return "onDidDisappear";
        }

        @Override // tn.b
        public String getEventName() {
            return "topDidDisappear";
        }

        private a() {
        }
    }

    public b(int i10, int i11) {
        super(i10, i11);
    }

    @Override // tn.b
    public String a() {
        return "onDidDisappear";
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
        return "topDidDisappear";
    }
}
