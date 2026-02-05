package com.swmansion.gesturehandler.react;

import android.view.View;
import androidx.core.util.Pools$SynchronizedPool;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.Event;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l extends Event {

    /* renamed from: c  reason: collision with root package name */
    public static final a f18123c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private static final Pools$SynchronizedPool f18124d = new Pools$SynchronizedPool(7);

    /* renamed from: a  reason: collision with root package name */
    private WritableMap f18125a;

    /* renamed from: b  reason: collision with root package name */
    private short f18126b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final WritableMap a(in.d handler) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            createMap.putInt("handlerTag", handler.T());
            createMap.putInt("state", handler.S());
            createMap.putInt("numberOfTouches", handler.V());
            createMap.putInt("eventType", handler.U());
            createMap.putInt("pointerType", handler.Q());
            WritableArray t10 = handler.t();
            if (t10 != null) {
                createMap.putArray("changedTouches", t10);
            }
            WritableArray s10 = handler.s();
            if (s10 != null) {
                createMap.putArray("allTouches", s10);
            }
            if (handler.a0() && handler.S() == 4) {
                createMap.putInt("state", 2);
            }
            return createMap;
        }

        public final l b(in.d handler) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            l lVar = (l) l.f18124d.acquire();
            if (lVar == null) {
                lVar = new l(null);
            }
            lVar.b(handler);
            return lVar;
        }

        private a() {
        }
    }

    public /* synthetic */ l(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void b(in.d dVar) {
        View W = dVar.W();
        Intrinsics.checkNotNull(W);
        super.init(UIManagerHelper.getSurfaceId(W), W.getId());
        this.f18125a = f18123c.a(dVar);
        this.f18126b = dVar.I();
    }

    @Override // com.facebook.react.uimanager.events.Event
    public boolean canCoalesce() {
        return true;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return this.f18126b;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        return this.f18125a;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return "onGestureHandlerEvent";
    }

    @Override // com.facebook.react.uimanager.events.Event
    public void onDispose() {
        this.f18125a = null;
        f18124d.release(this);
    }

    private l() {
    }
}
