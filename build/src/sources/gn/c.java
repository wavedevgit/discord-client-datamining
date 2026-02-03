package gn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import fn.m;
import fn.z;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f26365e;

    /* renamed from: f  reason: collision with root package name */
    private final float f26366f;

    /* renamed from: g  reason: collision with root package name */
    private final float f26367g;

    /* renamed from: h  reason: collision with root package name */
    private final float f26368h;

    /* renamed from: i  reason: collision with root package name */
    private final z f26369i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(m handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f26365e = handler.L();
        this.f26366f = handler.M();
        this.f26367g = handler.J();
        this.f26368h = handler.K();
        this.f26369i = handler.X0();
    }

    @Override // gn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f26365e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f26366f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f26367g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f26368h));
        if (this.f26369i.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f26369i.b());
    }
}
