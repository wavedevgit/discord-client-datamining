package dn;

import cn.o;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f22246e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22247f;

    /* renamed from: g  reason: collision with root package name */
    private final float f22248g;

    /* renamed from: h  reason: collision with root package name */
    private final float f22249h;

    /* renamed from: i  reason: collision with root package name */
    private final int f22250i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(o handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f22246e = handler.L();
        this.f22247f = handler.M();
        this.f22248g = handler.J();
        this.f22249h = handler.K();
        this.f22250i = handler.Y0();
    }

    @Override // dn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f22246e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f22247f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f22248g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f22249h));
        eventData.putInt("duration", this.f22250i);
    }
}
