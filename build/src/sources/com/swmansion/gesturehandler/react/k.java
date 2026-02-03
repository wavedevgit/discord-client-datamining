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
    public static final a f17712d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static final Pools$SynchronizedPool f17713e = new Pools$SynchronizedPool(7);

    /* renamed from: a  reason: collision with root package name */
    private gn.b f17714a;

    /* renamed from: b  reason: collision with root package name */
    private int f17715b;

    /* renamed from: c  reason: collision with root package name */
    private int f17716c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final WritableMap a(gn.b dataBuilder, int i10, int i11) {
            Intrinsics.checkNotNullParameter(dataBuilder, "dataBuilder");
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            dataBuilder.a(createMap);
            createMap.putInt("state", i10);
            createMap.putInt("oldState", i11);
            return createMap;
        }

        public final k b(fn.d handler, int i10, int i11, gn.b dataBuilder) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(dataBuilder, "dataBuilder");
            k kVar = (k) k.f17713e.acquire();
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
    public final void b(fn.d dVar, int i10, int i11, gn.b bVar) {
        View W = dVar.W();
        Intrinsics.checkNotNull(W);
        super.init(UIManagerHelper.getSurfaceId(W), W.getId());
        this.f17714a = bVar;
        this.f17715b = i10;
        this.f17716c = i11;
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
        a aVar = f17712d;
        gn.b bVar = this.f17714a;
        Intrinsics.checkNotNull(bVar);
        return aVar.a(bVar, this.f17715b, this.f17716c);
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return "onGestureHandlerStateChange";
    }

    @Override // com.facebook.react.uimanager.events.Event
    public void onDispose() {
        this.f17714a = null;
        this.f17715b = 0;
        this.f17716c = 0;
        f17713e.release(this);
    }

    private k() {
    }
}
