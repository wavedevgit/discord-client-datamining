package on;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import nn.m;
import nn.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f41206e;

    /* renamed from: f  reason: collision with root package name */
    private final float f41207f;

    /* renamed from: g  reason: collision with root package name */
    private final float f41208g;

    /* renamed from: h  reason: collision with root package name */
    private final float f41209h;

    /* renamed from: i  reason: collision with root package name */
    private final z f41210i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(m handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f41206e = handler.L();
        this.f41207f = handler.M();
        this.f41208g = handler.J();
        this.f41209h = handler.K();
        this.f41210i = handler.X0();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f41206e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f41207f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f41208g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f41209h));
        if (this.f41210i.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f41210i.b());
    }
}
