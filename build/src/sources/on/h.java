package on;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import nn.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends b {

    /* renamed from: e  reason: collision with root package name */
    private final double f40657e;

    /* renamed from: f  reason: collision with root package name */
    private final float f40658f;

    /* renamed from: g  reason: collision with root package name */
    private final float f40659g;

    /* renamed from: h  reason: collision with root package name */
    private final double f40660h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(u handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f40657e = handler.b1();
        this.f40658f = handler.Z0();
        this.f40659g = handler.a1();
        this.f40660h = handler.c1();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("scale", this.f40657e);
        eventData.putDouble("focalX", PixelUtil.toDIPFromPixel(this.f40658f));
        eventData.putDouble("focalY", PixelUtil.toDIPFromPixel(this.f40659g));
        eventData.putDouble("velocity", this.f40660h);
    }
}
