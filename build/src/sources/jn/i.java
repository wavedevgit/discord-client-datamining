package jn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import in.x;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends b {

    /* renamed from: e  reason: collision with root package name */
    private final double f31072e;

    /* renamed from: f  reason: collision with root package name */
    private final float f31073f;

    /* renamed from: g  reason: collision with root package name */
    private final float f31074g;

    /* renamed from: h  reason: collision with root package name */
    private final double f31075h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(x handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f31072e = handler.Y0();
        this.f31073f = handler.W0();
        this.f31074g = handler.X0();
        this.f31075h = handler.Z0();
    }

    @Override // jn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble(ViewProps.ROTATION, this.f31072e);
        eventData.putDouble("anchorX", PixelUtil.toDIPFromPixel(this.f31073f));
        eventData.putDouble("anchorY", PixelUtil.toDIPFromPixel(this.f31074g));
        eventData.putDouble("velocity", this.f31075h);
    }
}
