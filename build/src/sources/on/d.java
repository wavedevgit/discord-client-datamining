package on;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import nn.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f41211e;

    /* renamed from: f  reason: collision with root package name */
    private final float f41212f;

    /* renamed from: g  reason: collision with root package name */
    private final float f41213g;

    /* renamed from: h  reason: collision with root package name */
    private final float f41214h;

    /* renamed from: i  reason: collision with root package name */
    private final int f41215i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(o handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f41211e = handler.L();
        this.f41212f = handler.M();
        this.f41213g = handler.J();
        this.f41214h = handler.K();
        this.f41215i = handler.Y0();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f41211e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f41212f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f41213g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f41214h));
        eventData.putInt("duration", this.f41215i);
    }
}
