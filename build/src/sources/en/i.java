package en;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import dn.x;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends b {

    /* renamed from: e  reason: collision with root package name */
    private final double f22986e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22987f;

    /* renamed from: g  reason: collision with root package name */
    private final float f22988g;

    /* renamed from: h  reason: collision with root package name */
    private final double f22989h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(x handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f22986e = handler.Y0();
        this.f22987f = handler.W0();
        this.f22988g = handler.X0();
        this.f22989h = handler.Z0();
    }

    @Override // en.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble(ViewProps.ROTATION, this.f22986e);
        eventData.putDouble("anchorX", PixelUtil.toDIPFromPixel(this.f22987f));
        eventData.putDouble("anchorY", PixelUtil.toDIPFromPixel(this.f22988g));
        eventData.putDouble("velocity", this.f22989h);
    }
}
