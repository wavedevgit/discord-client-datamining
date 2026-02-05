package jn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import in.t;
import in.z;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f31059e;

    /* renamed from: f  reason: collision with root package name */
    private final float f31060f;

    /* renamed from: g  reason: collision with root package name */
    private final float f31061g;

    /* renamed from: h  reason: collision with root package name */
    private final float f31062h;

    /* renamed from: i  reason: collision with root package name */
    private final float f31063i;

    /* renamed from: j  reason: collision with root package name */
    private final float f31064j;

    /* renamed from: k  reason: collision with root package name */
    private final float f31065k;

    /* renamed from: l  reason: collision with root package name */
    private final float f31066l;

    /* renamed from: m  reason: collision with root package name */
    private final z f31067m;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(t handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f31059e = handler.L();
        this.f31060f = handler.M();
        this.f31061g = handler.J();
        this.f31062h = handler.K();
        this.f31063i = handler.n1();
        this.f31064j = handler.o1();
        this.f31065k = handler.p1();
        this.f31066l = handler.q1();
        this.f31067m = handler.m1();
    }

    @Override // jn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f31059e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f31060f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f31061g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f31062h));
        eventData.putDouble("translationX", PixelUtil.toDIPFromPixel(this.f31063i));
        eventData.putDouble("translationY", PixelUtil.toDIPFromPixel(this.f31064j));
        eventData.putDouble("velocityX", PixelUtil.toDIPFromPixel(this.f31065k));
        eventData.putDouble("velocityY", PixelUtil.toDIPFromPixel(this.f31066l));
        if (this.f31067m.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f31067m.b());
    }
}
