package on;

import com.facebook.react.bridge.WritableMap;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f40634a;

    /* renamed from: b  reason: collision with root package name */
    private final int f40635b;

    /* renamed from: c  reason: collision with root package name */
    private final int f40636c;

    /* renamed from: d  reason: collision with root package name */
    private final int f40637d;

    public b(nn.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f40634a = handler.O();
        this.f40635b = handler.T();
        this.f40636c = handler.S();
        this.f40637d = handler.Q();
    }

    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        eventData.putInt("numberOfPointers", this.f40634a);
        eventData.putInt("handlerTag", this.f40635b);
        eventData.putInt("state", this.f40636c);
        eventData.putInt("pointerType", this.f40637d);
    }
}
