package mn;

import com.facebook.react.bridge.WritableMap;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f37258a;

    /* renamed from: b  reason: collision with root package name */
    private final int f37259b;

    /* renamed from: c  reason: collision with root package name */
    private final int f37260c;

    /* renamed from: d  reason: collision with root package name */
    private final int f37261d;

    public b(ln.d handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f37258a = handler.O();
        this.f37259b = handler.T();
        this.f37260c = handler.S();
        this.f37261d = handler.Q();
    }

    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        eventData.putInt("numberOfPointers", this.f37258a);
        eventData.putInt("handlerTag", this.f37259b);
        eventData.putInt("state", this.f37260c);
        eventData.putInt("pointerType", this.f37261d);
    }
}
