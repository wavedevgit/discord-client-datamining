package ln;

import com.facebook.react.bridge.WritableMap;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f36380a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36381b;

    /* renamed from: c  reason: collision with root package name */
    private final int f36382c;

    /* renamed from: d  reason: collision with root package name */
    private final int f36383d;

    public b(kn.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f36380a = handler.O();
        this.f36381b = handler.T();
        this.f36382c = handler.S();
        this.f36383d = handler.Q();
    }

    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        eventData.putInt("numberOfPointers", this.f36380a);
        eventData.putInt("handlerTag", this.f36381b);
        eventData.putInt("state", this.f36382c);
        eventData.putInt("pointerType", this.f36383d);
    }
}
