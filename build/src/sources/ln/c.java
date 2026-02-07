package ln;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kn.m;
import kn.z;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f36432e;

    /* renamed from: f  reason: collision with root package name */
    private final float f36433f;

    /* renamed from: g  reason: collision with root package name */
    private final float f36434g;

    /* renamed from: h  reason: collision with root package name */
    private final float f36435h;

    /* renamed from: i  reason: collision with root package name */
    private final z f36436i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(m handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f36432e = handler.L();
        this.f36433f = handler.M();
        this.f36434g = handler.J();
        this.f36435h = handler.K();
        this.f36436i = handler.X0();
    }

    @Override // ln.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f36432e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f36433f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f36434g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f36435h));
        if (this.f36436i.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f36436i.b());
    }
}
