package on;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import nn.m;
import nn.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f40637e;

    /* renamed from: f  reason: collision with root package name */
    private final float f40638f;

    /* renamed from: g  reason: collision with root package name */
    private final float f40639g;

    /* renamed from: h  reason: collision with root package name */
    private final float f40640h;

    /* renamed from: i  reason: collision with root package name */
    private final z f40641i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(m handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f40637e = handler.L();
        this.f40638f = handler.M();
        this.f40639g = handler.J();
        this.f40640h = handler.K();
        this.f40641i = handler.X0();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f40637e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f40638f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f40639g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f40640h));
        if (this.f40641i.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f40641i.b());
    }
}
