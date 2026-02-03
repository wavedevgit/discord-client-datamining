package gn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import fn.u;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends b {

    /* renamed from: e  reason: collision with root package name */
    private final double f26385e;

    /* renamed from: f  reason: collision with root package name */
    private final float f26386f;

    /* renamed from: g  reason: collision with root package name */
    private final float f26387g;

    /* renamed from: h  reason: collision with root package name */
    private final double f26388h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(u handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f26385e = handler.b1();
        this.f26386f = handler.Z0();
        this.f26387g = handler.a1();
        this.f26388h = handler.c1();
    }

    @Override // gn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("scale", this.f26385e);
        eventData.putDouble("focalX", PixelUtil.toDIPFromPixel(this.f26386f));
        eventData.putDouble("focalY", PixelUtil.toDIPFromPixel(this.f26387g));
        eventData.putDouble("velocity", this.f26388h);
    }
}
