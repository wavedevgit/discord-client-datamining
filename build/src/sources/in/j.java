package in;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends Event {

    /* renamed from: e  reason: collision with root package name */
    public static final a f28498e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final float f28499a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f28500b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f28501c;

    /* renamed from: d  reason: collision with root package name */
    private final short f28502d;

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
        this.f28499a = f10;
        this.f28500b = z10;
        this.f28501c = z11;
        this.f28502d = s10;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return this.f28502d;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble(ReactProgressBarViewManager.PROP_PROGRESS, this.f28499a);
        createMap.putInt("closing", this.f28500b ? 1 : 0);
        createMap.putInt("goingForward", this.f28501c ? 1 : 0);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return "topTransitionProgress";
    }
}
