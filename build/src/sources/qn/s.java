package qn;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s extends Event {

    /* renamed from: c  reason: collision with root package name */
    public static final a f45505c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f45506a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f45507b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public s(int i10, int i11, int i12, boolean z10) {
        super(i10, i11);
        this.f45506a = i12;
        this.f45507b = z10;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        createMap.putInt("index", this.f45506a);
        createMap.putBoolean("isStable", this.f45507b);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return "topSheetDetentChanged";
    }
}
