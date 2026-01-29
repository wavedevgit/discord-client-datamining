package dn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f22233e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22234f;

    /* renamed from: g  reason: collision with root package name */
    private final float f22235g;

    /* renamed from: h  reason: collision with root package name */
    private final float f22236h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(cn.b handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f22233e = handler.L();
        this.f22234f = handler.M();
        this.f22235g = handler.J();
        this.f22236h = handler.K();
    }

    @Override // dn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f22233e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f22234f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f22235g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f22236h));
    }
}
