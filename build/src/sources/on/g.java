package on;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import nn.t;
import nn.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f40649e;

    /* renamed from: f  reason: collision with root package name */
    private final float f40650f;

    /* renamed from: g  reason: collision with root package name */
    private final float f40651g;

    /* renamed from: h  reason: collision with root package name */
    private final float f40652h;

    /* renamed from: i  reason: collision with root package name */
    private final float f40653i;

    /* renamed from: j  reason: collision with root package name */
    private final float f40654j;

    /* renamed from: k  reason: collision with root package name */
    private final float f40655k;

    /* renamed from: l  reason: collision with root package name */
    private final float f40656l;

    /* renamed from: m  reason: collision with root package name */
    private final z f40657m;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(t handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f40649e = handler.L();
        this.f40650f = handler.M();
        this.f40651g = handler.J();
        this.f40652h = handler.K();
        this.f40653i = handler.n1();
        this.f40654j = handler.o1();
        this.f40655k = handler.p1();
        this.f40656l = handler.q1();
        this.f40657m = handler.m1();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f40649e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f40650f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f40651g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f40652h));
        eventData.putDouble("translationX", PixelUtil.toDIPFromPixel(this.f40653i));
        eventData.putDouble("translationY", PixelUtil.toDIPFromPixel(this.f40654j));
        eventData.putDouble("velocityX", PixelUtil.toDIPFromPixel(this.f40655k));
        eventData.putDouble("velocityY", PixelUtil.toDIPFromPixel(this.f40656l));
        if (this.f40657m.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f40657m.b());
    }
}
