package mn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import kotlin.jvm.internal.Intrinsics;
import ln.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends b {

    /* renamed from: e  reason: collision with root package name */
    private final double f37286e;

    /* renamed from: f  reason: collision with root package name */
    private final float f37287f;

    /* renamed from: g  reason: collision with root package name */
    private final float f37288g;

    /* renamed from: h  reason: collision with root package name */
    private final double f37289h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(x handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f37286e = handler.Y0();
        this.f37287f = handler.W0();
        this.f37288g = handler.X0();
        this.f37289h = handler.Z0();
    }

    @Override // mn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble(ViewProps.ROTATION, this.f37286e);
        eventData.putDouble("anchorX", PixelUtil.toDIPFromPixel(this.f37287f));
        eventData.putDouble("anchorY", PixelUtil.toDIPFromPixel(this.f37288g));
        eventData.putDouble("velocity", this.f37289h);
    }
}
