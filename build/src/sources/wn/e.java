package wn;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends Event implements tn.b {

    /* renamed from: d  reason: collision with root package name */
    public static final a f52942d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f52943a;

    /* renamed from: b  reason: collision with root package name */
    private final int f52944b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f52945c;

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
        this.f52943a = tabKey;
        this.f52944b = i12;
        this.f52945c = z10;
    }

    @Override // tn.b
    public String a() {
        return "onNativeFocusChange";
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) ((this.f52944b * 10) + (this.f52945c ? 1 : 0));
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        createMap.putString("tabKey", this.f52943a);
        createMap.putBoolean("repeatedSelectionHandledBySpecialEffect", this.f52945c);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return "topNativeFocusChange";
    }
}
