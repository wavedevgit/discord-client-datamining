package ln;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kn.b0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f36412e;

    /* renamed from: f  reason: collision with root package name */
    private final float f36413f;

    /* renamed from: g  reason: collision with root package name */
    private final float f36414g;

    /* renamed from: h  reason: collision with root package name */
    private final float f36415h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(b0 handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f36412e = handler.L();
        this.f36413f = handler.M();
        this.f36414g = handler.J();
        this.f36415h = handler.K();
    }

    @Override // ln.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f36412e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f36413f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f36414g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f36415h));
    }
}
