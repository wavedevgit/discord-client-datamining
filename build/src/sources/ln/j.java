package ln;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kn.b0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f36460e;

    /* renamed from: f  reason: collision with root package name */
    private final float f36461f;

    /* renamed from: g  reason: collision with root package name */
    private final float f36462g;

    /* renamed from: h  reason: collision with root package name */
    private final float f36463h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(b0 handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f36460e = handler.L();
        this.f36461f = handler.M();
        this.f36462g = handler.J();
        this.f36463h = handler.K();
    }

    @Override // ln.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f36460e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f36461f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f36462g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f36463h));
    }
}
