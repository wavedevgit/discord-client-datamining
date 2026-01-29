package dn;

import cn.b0;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f22269e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22270f;

    /* renamed from: g  reason: collision with root package name */
    private final float f22271g;

    /* renamed from: h  reason: collision with root package name */
    private final float f22272h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(b0 handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f22269e = handler.L();
        this.f22270f = handler.M();
        this.f22271g = handler.J();
        this.f22272h = handler.K();
    }

    @Override // dn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f22269e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f22270f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f22271g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f22272h));
    }
}
