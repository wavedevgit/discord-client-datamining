package ln;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kn.t;
import kn.z;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f36443e;

    /* renamed from: f  reason: collision with root package name */
    private final float f36444f;

    /* renamed from: g  reason: collision with root package name */
    private final float f36445g;

    /* renamed from: h  reason: collision with root package name */
    private final float f36446h;

    /* renamed from: i  reason: collision with root package name */
    private final float f36447i;

    /* renamed from: j  reason: collision with root package name */
    private final float f36448j;

    /* renamed from: k  reason: collision with root package name */
    private final float f36449k;

    /* renamed from: l  reason: collision with root package name */
    private final float f36450l;

    /* renamed from: m  reason: collision with root package name */
    private final z f36451m;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(t handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f36443e = handler.L();
        this.f36444f = handler.M();
        this.f36445g = handler.J();
        this.f36446h = handler.K();
        this.f36447i = handler.n1();
        this.f36448j = handler.o1();
        this.f36449k = handler.p1();
        this.f36450l = handler.q1();
        this.f36451m = handler.m1();
    }

    @Override // ln.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f36443e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f36444f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f36445g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f36446h));
        eventData.putDouble("translationX", PixelUtil.toDIPFromPixel(this.f36447i));
        eventData.putDouble("translationY", PixelUtil.toDIPFromPixel(this.f36448j));
        eventData.putDouble("velocityX", PixelUtil.toDIPFromPixel(this.f36449k));
        eventData.putDouble("velocityY", PixelUtil.toDIPFromPixel(this.f36450l));
        if (this.f36451m.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f36451m.b());
    }
}
