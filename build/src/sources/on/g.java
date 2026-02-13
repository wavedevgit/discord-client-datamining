package on;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import nn.t;
import nn.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f41217e;

    /* renamed from: f  reason: collision with root package name */
    private final float f41218f;

    /* renamed from: g  reason: collision with root package name */
    private final float f41219g;

    /* renamed from: h  reason: collision with root package name */
    private final float f41220h;

    /* renamed from: i  reason: collision with root package name */
    private final float f41221i;

    /* renamed from: j  reason: collision with root package name */
    private final float f41222j;

    /* renamed from: k  reason: collision with root package name */
    private final float f41223k;

    /* renamed from: l  reason: collision with root package name */
    private final float f41224l;

    /* renamed from: m  reason: collision with root package name */
    private final z f41225m;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(t handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f41217e = handler.L();
        this.f41218f = handler.M();
        this.f41219g = handler.J();
        this.f41220h = handler.K();
        this.f41221i = handler.n1();
        this.f41222j = handler.o1();
        this.f41223k = handler.p1();
        this.f41224l = handler.q1();
        this.f41225m = handler.m1();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f41217e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f41218f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f41219g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f41220h));
        eventData.putDouble("translationX", PixelUtil.toDIPFromPixel(this.f41221i));
        eventData.putDouble("translationY", PixelUtil.toDIPFromPixel(this.f41222j));
        eventData.putDouble("velocityX", PixelUtil.toDIPFromPixel(this.f41223k));
        eventData.putDouble("velocityY", PixelUtil.toDIPFromPixel(this.f41224l));
        if (this.f41225m.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f41225m.b());
    }
}
