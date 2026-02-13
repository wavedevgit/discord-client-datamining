package on;

import com.facebook.react.bridge.WritableMap;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f41202a;

    /* renamed from: b  reason: collision with root package name */
    private final int f41203b;

    /* renamed from: c  reason: collision with root package name */
    private final int f41204c;

    /* renamed from: d  reason: collision with root package name */
    private final int f41205d;

    public b(nn.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f41202a = handler.O();
        this.f41203b = handler.T();
        this.f41204c = handler.S();
        this.f41205d = handler.Q();
    }

    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        eventData.putInt("numberOfPointers", this.f41202a);
        eventData.putInt("handlerTag", this.f41203b);
        eventData.putInt("state", this.f41204c);
        eventData.putInt("pointerType", this.f41205d);
    }
}
