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
public final class c extends Event {

    /* renamed from: d  reason: collision with root package name */
    public static final a f18968d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static final Pools$SynchronizedPool f18969e = new Pools$SynchronizedPool(7);

    /* renamed from: a  reason: collision with root package name */
    private on.b f18970a;

    /* renamed from: b  reason: collision with root package name */
    private short f18971b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f18972c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ c c(a aVar, nn.d dVar, on.b bVar, boolean z10, int i10, Object obj) {
            if ((i10 & 4) != 0) {
                z10 = false;
            }
            return aVar.b(dVar, bVar, z10);
        }

        public final WritableMap a(on.b dataBuilder) {
            Intrinsics.checkNotNullParameter(dataBuilder, "dataBuilder");
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            dataBuilder.a(createMap);
            return createMap;
        }

        public final c b(nn.d handler, on.b dataBuilder, boolean z10) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(dataBuilder, "dataBuilder");
            c cVar = (c) c.f18969e.acquire();
            if (cVar == null) {
                cVar = new c(null);
            }
            cVar.c(handler, dataBuilder, z10);
            return cVar;
        }

        private a() {
        }
    }

    public /* synthetic */ c(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void c(nn.d dVar, on.b bVar, boolean z10) {
        View W = dVar.W();
        Intrinsics.checkNotNull(W);
        super.init(UIManagerHelper.getSurfaceId(W), W.getId());
        this.f18970a = bVar;
        this.f18972c = z10;
        this.f18971b = dVar.I();
    }

    @Override // com.facebook.react.uimanager.events.Event
    public boolean canCoalesce() {
        return true;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return this.f18971b;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        a aVar = f18968d;
        on.b bVar = this.f18970a;
        Intrinsics.checkNotNull(bVar);
        return aVar.a(bVar);
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        if (this.f18972c) {
            return "topGestureHandlerEvent";
        }
        return "onGestureHandlerEvent";
    }

    @Override // com.facebook.react.uimanager.events.Event
    public void onDispose() {
        this.f18970a = null;
        f18969e.release(this);
    }

    private c() {
    }
}
