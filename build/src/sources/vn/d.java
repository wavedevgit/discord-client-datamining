package vn;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d extends Event implements tn.b {

    /* renamed from: a  reason: collision with root package name */
    private final String f51651a;

    /* renamed from: b  reason: collision with root package name */
    private final String f51652b;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(int i10, int i11, String name, String registrationName) {
        super(i10, i11);
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(registrationName, "registrationName");
        this.f51651a = name;
        this.f51652b = registrationName;
    }

    @Override // tn.b
    public String a() {
        return this.f51652b;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        return Arguments.createMap();
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return this.f51651a;
    }
}
