package dn;

import com.facebook.react.bridge.WritableMap;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f22237a;

    /* renamed from: b  reason: collision with root package name */
    private final int f22238b;

    /* renamed from: c  reason: collision with root package name */
    private final int f22239c;

    /* renamed from: d  reason: collision with root package name */
    private final int f22240d;

    public b(cn.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f22237a = handler.O();
        this.f22238b = handler.T();
        this.f22239c = handler.S();
        this.f22240d = handler.Q();
    }

    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        eventData.putInt("numberOfPointers", this.f22237a);
        eventData.putInt("handlerTag", this.f22238b);
        eventData.putInt("state", this.f22239c);
        eventData.putInt("pointerType", this.f22240d);
    }
}
