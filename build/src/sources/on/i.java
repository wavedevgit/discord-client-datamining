package on;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import kotlin.jvm.internal.Intrinsics;
import nn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends b {

    /* renamed from: e  reason: collision with root package name */
    private final double f40661e;

    /* renamed from: f  reason: collision with root package name */
    private final float f40662f;

    /* renamed from: g  reason: collision with root package name */
    private final float f40663g;

    /* renamed from: h  reason: collision with root package name */
    private final double f40664h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(x handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f40661e = handler.Y0();
        this.f40662f = handler.W0();
        this.f40663g = handler.X0();
        this.f40664h = handler.Z0();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble(ViewProps.ROTATION, this.f40661e);
        eventData.putDouble("anchorX", PixelUtil.toDIPFromPixel(this.f40662f));
        eventData.putDouble("anchorY", PixelUtil.toDIPFromPixel(this.f40663g));
        eventData.putDouble("velocity", this.f40664h);
    }
}
