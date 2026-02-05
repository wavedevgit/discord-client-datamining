package jn;

import com.facebook.react.bridge.WritableMap;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f31044a;

    /* renamed from: b  reason: collision with root package name */
    private final int f31045b;

    /* renamed from: c  reason: collision with root package name */
    private final int f31046c;

    /* renamed from: d  reason: collision with root package name */
    private final int f31047d;

    public b(in.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f31044a = handler.O();
        this.f31045b = handler.T();
        this.f31046c = handler.S();
        this.f31047d = handler.Q();
    }

    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        eventData.putInt("numberOfPointers", this.f31044a);
        eventData.putInt("handlerTag", this.f31045b);
        eventData.putInt("state", this.f31046c);
        eventData.putInt("pointerType", this.f31047d);
    }
}
