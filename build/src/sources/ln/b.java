package ln;

import com.facebook.react.bridge.WritableMap;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f36428a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36429b;

    /* renamed from: c  reason: collision with root package name */
    private final int f36430c;

    /* renamed from: d  reason: collision with root package name */
    private final int f36431d;

    public b(kn.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f36428a = handler.O();
        this.f36429b = handler.T();
        this.f36430c = handler.S();
        this.f36431d = handler.Q();
    }

    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        eventData.putInt("numberOfPointers", this.f36428a);
        eventData.putInt("handlerTag", this.f36429b);
        eventData.putInt("state", this.f36430c);
        eventData.putInt("pointerType", this.f36431d);
    }
}
