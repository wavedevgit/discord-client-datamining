package wn;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends Event implements tn.b {

    /* renamed from: d  reason: collision with root package name */
    public static final a f53510d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f53511a;

    /* renamed from: b  reason: collision with root package name */
    private final int f53512b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f53513c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements tn.b {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // tn.b
        public String a() {
            return "onNativeFocusChange";
        }

        @Override // tn.b
        public String getEventName() {
            return "topNativeFocusChange";
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(int i10, int i11, String tabKey, int i12, boolean z10) {
        super(i10, i11);
        Intrinsics.checkNotNullParameter(tabKey, "tabKey");
        this.f53511a = tabKey;
        this.f53512b = i12;
        this.f53513c = z10;
    }

    @Override // tn.b
    public String a() {
        return "onNativeFocusChange";
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) ((this.f53512b * 10) + (this.f53513c ? 1 : 0));
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        createMap.putString("tabKey", this.f53511a);
        createMap.putBoolean("repeatedSelectionHandledBySpecialEffect", this.f53513c);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return "topNativeFocusChange";
    }
}
