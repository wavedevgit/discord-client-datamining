package nn;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends Event {

    /* renamed from: e  reason: collision with root package name */
    public static final a f40977e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final float f40978a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f40979b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f40980c;

    /* renamed from: d  reason: collision with root package name */
    private final short f40981d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public j(int i10, int i11, float f10, boolean z10, boolean z11, short s10) {
        super(i10, i11);
        this.f40978a = f10;
        this.f40979b = z10;
        this.f40980c = z11;
        this.f40981d = s10;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return this.f40981d;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble(ReactProgressBarViewManager.PROP_PROGRESS, this.f40978a);
        createMap.putInt("closing", this.f40979b ? 1 : 0);
        createMap.putInt("goingForward", this.f40980c ? 1 : 0);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return "topTransitionProgress";
    }
}
