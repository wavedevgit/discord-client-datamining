package jn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import in.u;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends b {

    /* renamed from: e  reason: collision with root package name */
    private final double f31068e;

    /* renamed from: f  reason: collision with root package name */
    private final float f31069f;

    /* renamed from: g  reason: collision with root package name */
    private final float f31070g;

    /* renamed from: h  reason: collision with root package name */
    private final double f31071h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(u handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f31068e = handler.b1();
        this.f31069f = handler.Z0();
        this.f31070g = handler.a1();
        this.f31071h = handler.c1();
    }

    @Override // jn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("scale", this.f31068e);
        eventData.putDouble("focalX", PixelUtil.toDIPFromPixel(this.f31069f));
        eventData.putDouble("focalY", PixelUtil.toDIPFromPixel(this.f31070g));
        eventData.putDouble("velocity", this.f31071h);
    }
}
