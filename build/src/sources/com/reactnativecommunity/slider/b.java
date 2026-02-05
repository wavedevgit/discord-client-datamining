package com.reactnativecommunity.slider;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.views.textinput.ReactTextChangedEvent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends Event {

    /* renamed from: a  reason: collision with root package name */
    private final double f17436a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f17437b;

    public b(int i10, double d10, boolean z10) {
        super(i10);
        this.f17436a = d10;
        this.f17437b = z10;
    }

    private WritableMap c() {
        WritableMap createMap = Arguments.createMap();
        createMap.putInt("target", getViewTag());
        createMap.putDouble("value", a());
        createMap.putBoolean("fromUser", b());
        return createMap;
    }

    public double a() {
        return this.f17436a;
    }

    public boolean b() {
        return this.f17437b;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        return c();
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return ReactTextChangedEvent.EVENT_NAME;
    }
}
