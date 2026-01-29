package dn;

import cn.u;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends b {

    /* renamed from: e  reason: collision with root package name */
    private final double f22261e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22262f;

    /* renamed from: g  reason: collision with root package name */
    private final float f22263g;

    /* renamed from: h  reason: collision with root package name */
    private final double f22264h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(u handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f22261e = handler.b1();
        this.f22262f = handler.Z0();
        this.f22263g = handler.a1();
        this.f22264h = handler.c1();
    }

    @Override // dn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("scale", this.f22261e);
        eventData.putDouble("focalX", PixelUtil.toDIPFromPixel(this.f22262f));
        eventData.putDouble("focalY", PixelUtil.toDIPFromPixel(this.f22263g));
        eventData.putDouble("velocity", this.f22264h);
    }
}
