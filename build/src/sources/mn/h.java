package mn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import ln.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends b {

    /* renamed from: e  reason: collision with root package name */
    private final double f37282e;

    /* renamed from: f  reason: collision with root package name */
    private final float f37283f;

    /* renamed from: g  reason: collision with root package name */
    private final float f37284g;

    /* renamed from: h  reason: collision with root package name */
    private final double f37285h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(u handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f37282e = handler.b1();
        this.f37283f = handler.Z0();
        this.f37284g = handler.a1();
        this.f37285h = handler.c1();
    }

    @Override // mn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("scale", this.f37282e);
        eventData.putDouble("focalX", PixelUtil.toDIPFromPixel(this.f37283f));
        eventData.putDouble("focalY", PixelUtil.toDIPFromPixel(this.f37284g));
        eventData.putDouble("velocity", this.f37285h);
    }
}
