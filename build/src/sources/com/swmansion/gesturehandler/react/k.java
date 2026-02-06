package com.swmansion.gesturehandler.react;

import android.view.View;
import androidx.core.util.Pools$SynchronizedPool;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.Event;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends Event {

    /* renamed from: d  reason: collision with root package name */
    public static final a f18098d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static final Pools$SynchronizedPool f18099e = new Pools$SynchronizedPool(7);

    /* renamed from: a  reason: collision with root package name */
    private ln.b f18100a;

    /* renamed from: b  reason: collision with root package name */
    private int f18101b;

    /* renamed from: c  reason: collision with root package name */
    private int f18102c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final WritableMap a(ln.b dataBuilder, int i10, int i11) {
            Intrinsics.checkNotNullParameter(dataBuilder, "dataBuilder");
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            dataBuilder.a(createMap);
            createMap.putInt("state", i10);
            createMap.putInt("oldState", i11);
            return createMap;
        }

        public final k b(kn.d handler, int i10, int i11, ln.b dataBuilder) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(dataBuilder, "dataBuilder");
            k kVar = (k) k.f18099e.acquire();
            if (kVar == null) {
                kVar = new k(null);
            }
            kVar.b(handler, i10, i11, dataBuilder);
            return kVar;
        }

        private a() {
        }
    }

    public /* synthetic */ k(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void b(kn.d dVar, int i10, int i11, ln.b bVar) {
        View W = dVar.W();
        Intrinsics.checkNotNull(W);
        super.init(UIManagerHelper.getSurfaceId(W), W.getId());
        this.f18100a = bVar;
        this.f18101b = i10;
        this.f18102c = i11;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public boolean canCoalesce() {
        return false;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        a aVar = f18098d;
        ln.b bVar = this.f18100a;
        Intrinsics.checkNotNull(bVar);
        return aVar.a(bVar, this.f18101b, this.f18102c);
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return "onGestureHandlerStateChange";
    }

    @Override // com.facebook.react.uimanager.events.Event
    public void onDispose() {
        this.f18100a = null;
        this.f18101b = 0;
        this.f18102c = 0;
        f18099e.release(this);
    }

    private k() {
    }
}
