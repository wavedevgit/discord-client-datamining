package ln;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kn.t;
import kn.z;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f36395e;

    /* renamed from: f  reason: collision with root package name */
    private final float f36396f;

    /* renamed from: g  reason: collision with root package name */
    private final float f36397g;

    /* renamed from: h  reason: collision with root package name */
    private final float f36398h;

    /* renamed from: i  reason: collision with root package name */
    private final float f36399i;

    /* renamed from: j  reason: collision with root package name */
    private final float f36400j;

    /* renamed from: k  reason: collision with root package name */
    private final float f36401k;

    /* renamed from: l  reason: collision with root package name */
    private final float f36402l;

    /* renamed from: m  reason: collision with root package name */
    private final z f36403m;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(t handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f36395e = handler.L();
        this.f36396f = handler.M();
        this.f36397g = handler.J();
        this.f36398h = handler.K();
        this.f36399i = handler.n1();
        this.f36400j = handler.o1();
        this.f36401k = handler.p1();
        this.f36402l = handler.q1();
        this.f36403m = handler.m1();
    }

    @Override // ln.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f36395e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f36396f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f36397g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f36398h));
        eventData.putDouble("translationX", PixelUtil.toDIPFromPixel(this.f36399i));
        eventData.putDouble("translationY", PixelUtil.toDIPFromPixel(this.f36400j));
        eventData.putDouble("velocityX", PixelUtil.toDIPFromPixel(this.f36401k));
        eventData.putDouble("velocityY", PixelUtil.toDIPFromPixel(this.f36402l));
        if (this.f36403m.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f36403m.b());
    }
}
