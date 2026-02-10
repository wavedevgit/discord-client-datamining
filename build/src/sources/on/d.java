package on;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import nn.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f40642e;

    /* renamed from: f  reason: collision with root package name */
    private final float f40643f;

    /* renamed from: g  reason: collision with root package name */
    private final float f40644g;

    /* renamed from: h  reason: collision with root package name */
    private final float f40645h;

    /* renamed from: i  reason: collision with root package name */
    private final int f40646i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(o handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f40642e = handler.L();
        this.f40643f = handler.M();
        this.f40644g = handler.J();
        this.f40645h = handler.K();
        this.f40646i = handler.Y0();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f40642e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f40643f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f40644g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f40645h));
        eventData.putInt("duration", this.f40646i);
    }
}
