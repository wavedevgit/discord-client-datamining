package en;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import dn.t;
import dn.z;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f22973e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22974f;

    /* renamed from: g  reason: collision with root package name */
    private final float f22975g;

    /* renamed from: h  reason: collision with root package name */
    private final float f22976h;

    /* renamed from: i  reason: collision with root package name */
    private final float f22977i;

    /* renamed from: j  reason: collision with root package name */
    private final float f22978j;

    /* renamed from: k  reason: collision with root package name */
    private final float f22979k;

    /* renamed from: l  reason: collision with root package name */
    private final float f22980l;

    /* renamed from: m  reason: collision with root package name */
    private final z f22981m;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(t handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f22973e = handler.L();
        this.f22974f = handler.M();
        this.f22975g = handler.J();
        this.f22976h = handler.K();
        this.f22977i = handler.n1();
        this.f22978j = handler.o1();
        this.f22979k = handler.p1();
        this.f22980l = handler.q1();
        this.f22981m = handler.m1();
    }

    @Override // en.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f22973e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f22974f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f22975g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f22976h));
        eventData.putDouble("translationX", PixelUtil.toDIPFromPixel(this.f22977i));
        eventData.putDouble("translationY", PixelUtil.toDIPFromPixel(this.f22978j));
        eventData.putDouble("velocityX", PixelUtil.toDIPFromPixel(this.f22979k));
        eventData.putDouble("velocityY", PixelUtil.toDIPFromPixel(this.f22980l));
        if (this.f22981m.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f22981m.b());
    }
}
