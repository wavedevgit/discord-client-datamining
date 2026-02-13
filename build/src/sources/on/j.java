package on;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import nn.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f41234e;

    /* renamed from: f  reason: collision with root package name */
    private final float f41235f;

    /* renamed from: g  reason: collision with root package name */
    private final float f41236g;

    /* renamed from: h  reason: collision with root package name */
    private final float f41237h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(b0 handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f41234e = handler.L();
        this.f41235f = handler.M();
        this.f41236g = handler.J();
        this.f41237h = handler.K();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f41234e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f41235f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f41236g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f41237h));
    }
}
