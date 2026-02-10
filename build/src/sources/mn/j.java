package mn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import ln.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f37290e;

    /* renamed from: f  reason: collision with root package name */
    private final float f37291f;

    /* renamed from: g  reason: collision with root package name */
    private final float f37292g;

    /* renamed from: h  reason: collision with root package name */
    private final float f37293h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(b0 handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f37290e = handler.L();
        this.f37291f = handler.M();
        this.f37292g = handler.J();
        this.f37293h = handler.K();
    }

    @Override // mn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f37290e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f37291f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f37292g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f37293h));
    }
}
