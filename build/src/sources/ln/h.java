package ln;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kn.u;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends b {

    /* renamed from: e  reason: collision with root package name */
    private final double f36404e;

    /* renamed from: f  reason: collision with root package name */
    private final float f36405f;

    /* renamed from: g  reason: collision with root package name */
    private final float f36406g;

    /* renamed from: h  reason: collision with root package name */
    private final double f36407h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(u handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f36404e = handler.b1();
        this.f36405f = handler.Z0();
        this.f36406g = handler.a1();
        this.f36407h = handler.c1();
    }

    @Override // ln.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("scale", this.f36404e);
        eventData.putDouble("focalX", PixelUtil.toDIPFromPixel(this.f36405f));
        eventData.putDouble("focalY", PixelUtil.toDIPFromPixel(this.f36406g));
        eventData.putDouble("velocity", this.f36407h);
    }
}
