package com.reactnativecommunity.slider;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.views.textinput.ReactTextChangedEvent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends Event {

    /* renamed from: a  reason: collision with root package name */
    private final double f18305a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f18306b;

    public b(int i10, double d10, boolean z10) {
        super(i10);
        this.f18305a = d10;
        this.f18306b = z10;
    }

    private WritableMap d() {
        WritableMap createMap = Arguments.createMap();
        createMap.putInt("target", getViewTag());
        createMap.putDouble("value", b());
        createMap.putBoolean("fromUser", c());
        return createMap;
    }

    public double b() {
        return this.f18305a;
    }

    public boolean c() {
        return this.f18306b;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        return d();
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return ReactTextChangedEvent.EVENT_NAME;
    }
}
