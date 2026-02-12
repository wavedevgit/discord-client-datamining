package on;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import nn.m;
import nn.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f40638e;

    /* renamed from: f  reason: collision with root package name */
    private final float f40639f;

    /* renamed from: g  reason: collision with root package name */
    private final float f40640g;

    /* renamed from: h  reason: collision with root package name */
    private final float f40641h;

    /* renamed from: i  reason: collision with root package name */
    private final z f40642i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(m handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f40638e = handler.L();
        this.f40639f = handler.M();
        this.f40640g = handler.J();
        this.f40641h = handler.K();
        this.f40642i = handler.X0();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f40638e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f40639f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f40640g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f40641h));
        if (this.f40642i.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f40642i.b());
    }
}
