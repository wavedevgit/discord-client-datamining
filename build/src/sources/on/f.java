package on;

import com.facebook.react.bridge.WritableMap;
import kotlin.jvm.internal.Intrinsics;
import nn.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends b {

    /* renamed from: e  reason: collision with root package name */
    private final boolean f40647e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(q handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f40647e = handler.f0();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putBoolean("pointerInside", this.f40647e);
    }
}
