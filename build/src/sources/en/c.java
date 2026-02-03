package en;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import dn.m;
import dn.z;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f22962e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22963f;

    /* renamed from: g  reason: collision with root package name */
    private final float f22964g;

    /* renamed from: h  reason: collision with root package name */
    private final float f22965h;

    /* renamed from: i  reason: collision with root package name */
    private final z f22966i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(m handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f22962e = handler.L();
        this.f22963f = handler.M();
        this.f22964g = handler.J();
        this.f22965h = handler.K();
        this.f22966i = handler.X0();
    }

    @Override // en.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f22962e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f22963f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f22964g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f22965h));
        if (this.f22966i.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f22966i.b());
    }
}
