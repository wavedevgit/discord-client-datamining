package en;

import com.facebook.react.bridge.WritableMap;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f22958a;

    /* renamed from: b  reason: collision with root package name */
    private final int f22959b;

    /* renamed from: c  reason: collision with root package name */
    private final int f22960c;

    /* renamed from: d  reason: collision with root package name */
    private final int f22961d;

    public b(dn.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f22958a = handler.O();
        this.f22959b = handler.T();
        this.f22960c = handler.S();
        this.f22961d = handler.Q();
    }

    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        eventData.putInt("numberOfPointers", this.f22958a);
        eventData.putInt("handlerTag", this.f22959b);
        eventData.putInt("state", this.f22960c);
        eventData.putInt("pointerType", this.f22961d);
    }
}
