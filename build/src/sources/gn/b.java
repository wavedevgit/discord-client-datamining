package gn;

import com.facebook.react.bridge.WritableMap;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f26361a;

    /* renamed from: b  reason: collision with root package name */
    private final int f26362b;

    /* renamed from: c  reason: collision with root package name */
    private final int f26363c;

    /* renamed from: d  reason: collision with root package name */
    private final int f26364d;

    public b(fn.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f26361a = handler.O();
        this.f26362b = handler.T();
        this.f26363c = handler.S();
        this.f26364d = handler.Q();
    }

    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        eventData.putInt("numberOfPointers", this.f26361a);
        eventData.putInt("handlerTag", this.f26362b);
        eventData.putInt("state", this.f26363c);
        eventData.putInt("pointerType", this.f26364d);
    }
}
