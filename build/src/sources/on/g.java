package on;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import nn.t;
import nn.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f40648e;

    /* renamed from: f  reason: collision with root package name */
    private final float f40649f;

    /* renamed from: g  reason: collision with root package name */
    private final float f40650g;

    /* renamed from: h  reason: collision with root package name */
    private final float f40651h;

    /* renamed from: i  reason: collision with root package name */
    private final float f40652i;

    /* renamed from: j  reason: collision with root package name */
    private final float f40653j;

    /* renamed from: k  reason: collision with root package name */
    private final float f40654k;

    /* renamed from: l  reason: collision with root package name */
    private final float f40655l;

    /* renamed from: m  reason: collision with root package name */
    private final z f40656m;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(t handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f40648e = handler.L();
        this.f40649f = handler.M();
        this.f40650g = handler.J();
        this.f40651h = handler.K();
        this.f40652i = handler.n1();
        this.f40653j = handler.o1();
        this.f40654k = handler.p1();
        this.f40655l = handler.q1();
        this.f40656m = handler.m1();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f40648e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f40649f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f40650g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f40651h));
        eventData.putDouble("translationX", PixelUtil.toDIPFromPixel(this.f40652i));
        eventData.putDouble("translationY", PixelUtil.toDIPFromPixel(this.f40653j));
        eventData.putDouble("velocityX", PixelUtil.toDIPFromPixel(this.f40654k));
        eventData.putDouble("velocityY", PixelUtil.toDIPFromPixel(this.f40655l));
        if (this.f40656m.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f40656m.b());
    }
}
