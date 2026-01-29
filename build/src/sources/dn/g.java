package dn;

import cn.t;
import cn.z;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f22252e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22253f;

    /* renamed from: g  reason: collision with root package name */
    private final float f22254g;

    /* renamed from: h  reason: collision with root package name */
    private final float f22255h;

    /* renamed from: i  reason: collision with root package name */
    private final float f22256i;

    /* renamed from: j  reason: collision with root package name */
    private final float f22257j;

    /* renamed from: k  reason: collision with root package name */
    private final float f22258k;

    /* renamed from: l  reason: collision with root package name */
    private final float f22259l;

    /* renamed from: m  reason: collision with root package name */
    private final z f22260m;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(t handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f22252e = handler.L();
        this.f22253f = handler.M();
        this.f22254g = handler.J();
        this.f22255h = handler.K();
        this.f22256i = handler.n1();
        this.f22257j = handler.o1();
        this.f22258k = handler.p1();
        this.f22259l = handler.q1();
        this.f22260m = handler.m1();
    }

    @Override // dn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f22252e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f22253f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f22254g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f22255h));
        eventData.putDouble("translationX", PixelUtil.toDIPFromPixel(this.f22256i));
        eventData.putDouble("translationY", PixelUtil.toDIPFromPixel(this.f22257j));
        eventData.putDouble("velocityX", PixelUtil.toDIPFromPixel(this.f22258k));
        eventData.putDouble("velocityY", PixelUtil.toDIPFromPixel(this.f22259l));
        if (this.f22260m.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f22260m.b());
    }
}
