package ln;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import kn.x;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends b {

    /* renamed from: e  reason: collision with root package name */
    private final double f36456e;

    /* renamed from: f  reason: collision with root package name */
    private final float f36457f;

    /* renamed from: g  reason: collision with root package name */
    private final float f36458g;

    /* renamed from: h  reason: collision with root package name */
    private final double f36459h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(x handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f36456e = handler.Y0();
        this.f36457f = handler.W0();
        this.f36458g = handler.X0();
        this.f36459h = handler.Z0();
    }

    @Override // ln.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble(ViewProps.ROTATION, this.f36456e);
        eventData.putDouble("anchorX", PixelUtil.toDIPFromPixel(this.f36457f));
        eventData.putDouble("anchorY", PixelUtil.toDIPFromPixel(this.f36458g));
        eventData.putDouble("velocity", this.f36459h);
    }
}
