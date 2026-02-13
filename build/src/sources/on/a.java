package on;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f41198e;

    /* renamed from: f  reason: collision with root package name */
    private final float f41199f;

    /* renamed from: g  reason: collision with root package name */
    private final float f41200g;

    /* renamed from: h  reason: collision with root package name */
    private final float f41201h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(nn.b handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f41198e = handler.L();
        this.f41199f = handler.M();
        this.f41200g = handler.J();
        this.f41201h = handler.K();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f41198e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f41199f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f41200g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f41201h));
    }
}
