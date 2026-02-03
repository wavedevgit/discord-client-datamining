package en;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import dn.u;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends b {

    /* renamed from: e  reason: collision with root package name */
    private final double f22982e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22983f;

    /* renamed from: g  reason: collision with root package name */
    private final float f22984g;

    /* renamed from: h  reason: collision with root package name */
    private final double f22985h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(u handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f22982e = handler.b1();
        this.f22983f = handler.Z0();
        this.f22984g = handler.a1();
        this.f22985h = handler.c1();
    }

    @Override // en.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("scale", this.f22982e);
        eventData.putDouble("focalX", PixelUtil.toDIPFromPixel(this.f22983f));
        eventData.putDouble("focalY", PixelUtil.toDIPFromPixel(this.f22984g));
        eventData.putDouble("velocity", this.f22985h);
    }
}
