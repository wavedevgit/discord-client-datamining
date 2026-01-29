package dn;

import cn.x;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends b {

    /* renamed from: e  reason: collision with root package name */
    private final double f22265e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22266f;

    /* renamed from: g  reason: collision with root package name */
    private final float f22267g;

    /* renamed from: h  reason: collision with root package name */
    private final double f22268h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(x handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f22265e = handler.Y0();
        this.f22266f = handler.W0();
        this.f22267g = handler.X0();
        this.f22268h = handler.Z0();
    }

    @Override // dn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble(ViewProps.ROTATION, this.f22265e);
        eventData.putDouble("anchorX", PixelUtil.toDIPFromPixel(this.f22266f));
        eventData.putDouble("anchorY", PixelUtil.toDIPFromPixel(this.f22267g));
        eventData.putDouble("velocity", this.f22268h);
    }
}
