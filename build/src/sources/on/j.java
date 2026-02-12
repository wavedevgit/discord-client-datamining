package on;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import nn.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f40666e;

    /* renamed from: f  reason: collision with root package name */
    private final float f40667f;

    /* renamed from: g  reason: collision with root package name */
    private final float f40668g;

    /* renamed from: h  reason: collision with root package name */
    private final float f40669h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(b0 handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f40666e = handler.L();
        this.f40667f = handler.M();
        this.f40668g = handler.J();
        this.f40669h = handler.K();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f40666e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f40667f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f40668g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f40669h));
    }
}
