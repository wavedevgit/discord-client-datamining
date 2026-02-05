package com.shopify.reactnative.flash_list;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends Event {

    /* renamed from: c  reason: collision with root package name */
    public static final a f17869c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final double f17870a;

    /* renamed from: b  reason: collision with root package name */
    private final double f17871b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public c(int i10, int i11, double d10, double d11) {
        super(i10, i11);
        this.f17870a = d10;
        this.f17871b = d11;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public void dispatch(RCTEventEmitter rctEventEmitter) {
        Intrinsics.checkNotNullParameter(rctEventEmitter, "rctEventEmitter");
        rctEventEmitter.receiveEvent(getViewTag(), internal_getEventNameCompat(), getEventData());
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putDouble("offsetStart", this.f17870a);
        createMap.putDouble("offsetEnd", this.f17871b);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return "onBlankAreaEvent";
    }
}
