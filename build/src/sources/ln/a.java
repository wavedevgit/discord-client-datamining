package ln;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f36424e;

    /* renamed from: f  reason: collision with root package name */
    private final float f36425f;

    /* renamed from: g  reason: collision with root package name */
    private final float f36426g;

    /* renamed from: h  reason: collision with root package name */
    private final float f36427h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(kn.b handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f36424e = handler.L();
        this.f36425f = handler.M();
        this.f36426g = handler.J();
        this.f36427h = handler.K();
    }

    @Override // ln.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f36424e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f36425f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f36426g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f36427h));
    }
}
