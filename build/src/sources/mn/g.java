package mn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import ln.t;
import ln.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f37273e;

    /* renamed from: f  reason: collision with root package name */
    private final float f37274f;

    /* renamed from: g  reason: collision with root package name */
    private final float f37275g;

    /* renamed from: h  reason: collision with root package name */
    private final float f37276h;

    /* renamed from: i  reason: collision with root package name */
    private final float f37277i;

    /* renamed from: j  reason: collision with root package name */
    private final float f37278j;

    /* renamed from: k  reason: collision with root package name */
    private final float f37279k;

    /* renamed from: l  reason: collision with root package name */
    private final float f37280l;

    /* renamed from: m  reason: collision with root package name */
    private final z f37281m;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(t handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f37273e = handler.L();
        this.f37274f = handler.M();
        this.f37275g = handler.J();
        this.f37276h = handler.K();
        this.f37277i = handler.n1();
        this.f37278j = handler.o1();
        this.f37279k = handler.p1();
        this.f37280l = handler.q1();
        this.f37281m = handler.m1();
    }

    @Override // mn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f37273e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f37274f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f37275g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f37276h));
        eventData.putDouble("translationX", PixelUtil.toDIPFromPixel(this.f37277i));
        eventData.putDouble("translationY", PixelUtil.toDIPFromPixel(this.f37278j));
        eventData.putDouble("velocityX", PixelUtil.toDIPFromPixel(this.f37279k));
        eventData.putDouble("velocityY", PixelUtil.toDIPFromPixel(this.f37280l));
        if (this.f37281m.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f37281m.b());
    }
}
