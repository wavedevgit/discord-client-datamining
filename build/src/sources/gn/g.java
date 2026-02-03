package gn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import fn.t;
import fn.z;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f26376e;

    /* renamed from: f  reason: collision with root package name */
    private final float f26377f;

    /* renamed from: g  reason: collision with root package name */
    private final float f26378g;

    /* renamed from: h  reason: collision with root package name */
    private final float f26379h;

    /* renamed from: i  reason: collision with root package name */
    private final float f26380i;

    /* renamed from: j  reason: collision with root package name */
    private final float f26381j;

    /* renamed from: k  reason: collision with root package name */
    private final float f26382k;

    /* renamed from: l  reason: collision with root package name */
    private final float f26383l;

    /* renamed from: m  reason: collision with root package name */
    private final z f26384m;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(t handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f26376e = handler.L();
        this.f26377f = handler.M();
        this.f26378g = handler.J();
        this.f26379h = handler.K();
        this.f26380i = handler.n1();
        this.f26381j = handler.o1();
        this.f26382k = handler.p1();
        this.f26383l = handler.q1();
        this.f26384m = handler.m1();
    }

    @Override // gn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f26376e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f26377f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f26378g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f26379h));
        eventData.putDouble("translationX", PixelUtil.toDIPFromPixel(this.f26380i));
        eventData.putDouble("translationY", PixelUtil.toDIPFromPixel(this.f26381j));
        eventData.putDouble("velocityX", PixelUtil.toDIPFromPixel(this.f26382k));
        eventData.putDouble("velocityY", PixelUtil.toDIPFromPixel(this.f26383l));
        if (this.f26384m.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f26384m.b());
    }
}
