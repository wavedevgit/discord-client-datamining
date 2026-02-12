package on;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import nn.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f40643e;

    /* renamed from: f  reason: collision with root package name */
    private final float f40644f;

    /* renamed from: g  reason: collision with root package name */
    private final float f40645g;

    /* renamed from: h  reason: collision with root package name */
    private final float f40646h;

    /* renamed from: i  reason: collision with root package name */
    private final int f40647i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(o handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f40643e = handler.L();
        this.f40644f = handler.M();
        this.f40645g = handler.J();
        this.f40646h = handler.K();
        this.f40647i = handler.Y0();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f40643e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f40644f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f40645g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f40646h));
        eventData.putInt("duration", this.f40647i);
    }
}
