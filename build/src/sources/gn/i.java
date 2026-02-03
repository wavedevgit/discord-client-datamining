package gn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import fn.x;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends b {

    /* renamed from: e  reason: collision with root package name */
    private final double f26389e;

    /* renamed from: f  reason: collision with root package name */
    private final float f26390f;

    /* renamed from: g  reason: collision with root package name */
    private final float f26391g;

    /* renamed from: h  reason: collision with root package name */
    private final double f26392h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(x handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f26389e = handler.Y0();
        this.f26390f = handler.W0();
        this.f26391g = handler.X0();
        this.f26392h = handler.Z0();
    }

    @Override // gn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble(ViewProps.ROTATION, this.f26389e);
        eventData.putDouble("anchorX", PixelUtil.toDIPFromPixel(this.f26390f));
        eventData.putDouble("anchorY", PixelUtil.toDIPFromPixel(this.f26391g));
        eventData.putDouble("velocity", this.f26392h);
    }
}
