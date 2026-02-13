package on;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import nn.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends b {

    /* renamed from: e  reason: collision with root package name */
    private final double f41226e;

    /* renamed from: f  reason: collision with root package name */
    private final float f41227f;

    /* renamed from: g  reason: collision with root package name */
    private final float f41228g;

    /* renamed from: h  reason: collision with root package name */
    private final double f41229h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(u handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f41226e = handler.b1();
        this.f41227f = handler.Z0();
        this.f41228g = handler.a1();
        this.f41229h = handler.c1();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("scale", this.f41226e);
        eventData.putDouble("focalX", PixelUtil.toDIPFromPixel(this.f41227f));
        eventData.putDouble("focalY", PixelUtil.toDIPFromPixel(this.f41228g));
        eventData.putDouble("velocity", this.f41229h);
    }
}
