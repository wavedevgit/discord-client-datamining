package jn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import in.m;
import in.z;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f31048e;

    /* renamed from: f  reason: collision with root package name */
    private final float f31049f;

    /* renamed from: g  reason: collision with root package name */
    private final float f31050g;

    /* renamed from: h  reason: collision with root package name */
    private final float f31051h;

    /* renamed from: i  reason: collision with root package name */
    private final z f31052i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(m handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f31048e = handler.L();
        this.f31049f = handler.M();
        this.f31050g = handler.J();
        this.f31051h = handler.K();
        this.f31052i = handler.X0();
    }

    @Override // jn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f31048e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f31049f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f31050g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f31051h));
        if (this.f31052i.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f31052i.b());
    }
}
