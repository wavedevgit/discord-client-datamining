package dn;

import cn.m;
import cn.z;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f22241e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22242f;

    /* renamed from: g  reason: collision with root package name */
    private final float f22243g;

    /* renamed from: h  reason: collision with root package name */
    private final float f22244h;

    /* renamed from: i  reason: collision with root package name */
    private final z f22245i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(m handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f22241e = handler.L();
        this.f22242f = handler.M();
        this.f22243g = handler.J();
        this.f22244h = handler.K();
        this.f22245i = handler.X0();
    }

    @Override // dn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f22241e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f22242f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f22243g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f22244h));
        if (this.f22245i.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f22245i.b());
    }
}
