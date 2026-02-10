package on;

import com.facebook.react.bridge.WritableMap;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f40633a;

    /* renamed from: b  reason: collision with root package name */
    private final int f40634b;

    /* renamed from: c  reason: collision with root package name */
    private final int f40635c;

    /* renamed from: d  reason: collision with root package name */
    private final int f40636d;

    public b(nn.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f40633a = handler.O();
        this.f40634b = handler.T();
        this.f40635c = handler.S();
        this.f40636d = handler.Q();
    }

    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        eventData.putInt("numberOfPointers", this.f40633a);
        eventData.putInt("handlerTag", this.f40634b);
        eventData.putInt("state", this.f40635c);
        eventData.putInt("pointerType", this.f40636d);
    }
}
