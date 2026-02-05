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
    public static final a f18118d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static final Pools$SynchronizedPool f18119e = new Pools$SynchronizedPool(7);

    /* renamed from: a  reason: collision with root package name */
    private jn.b f18120a;

    /* renamed from: b  reason: collision with root package name */
    private int f18121b;

    /* renamed from: c  reason: collision with root package name */
    private int f18122c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final WritableMap a(jn.b dataBuilder, int i10, int i11) {
            Intrinsics.checkNotNullParameter(dataBuilder, "dataBuilder");
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            dataBuilder.a(createMap);
            createMap.putInt("state", i10);
            createMap.putInt("oldState", i11);
            return createMap;
        }

        public final k b(in.d handler, int i10, int i11, jn.b dataBuilder) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(dataBuilder, "dataBuilder");
            k kVar = (k) k.f18119e.acquire();
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
    public final void b(in.d dVar, int i10, int i11, jn.b bVar) {
        View W = dVar.W();
        Intrinsics.checkNotNull(W);
        super.init(UIManagerHelper.getSurfaceId(W), W.getId());
        this.f18120a = bVar;
        this.f18121b = i10;
        this.f18122c = i11;
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
        a aVar = f18118d;
        jn.b bVar = this.f18120a;
        Intrinsics.checkNotNull(bVar);
        return aVar.a(bVar, this.f18121b, this.f18122c);
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return "onGestureHandlerStateChange";
    }

    @Override // com.facebook.react.uimanager.events.Event
    public void onDispose() {
        this.f18120a = null;
        this.f18121b = 0;
        this.f18122c = 0;
        f18119e.release(this);
    }

    private k() {
    }
}
