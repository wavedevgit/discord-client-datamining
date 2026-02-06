package ln;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kn.m;
import kn.z;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f36384e;

    /* renamed from: f  reason: collision with root package name */
    private final float f36385f;

    /* renamed from: g  reason: collision with root package name */
    private final float f36386g;

    /* renamed from: h  reason: collision with root package name */
    private final float f36387h;

    /* renamed from: i  reason: collision with root package name */
    private final z f36388i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(m handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f36384e = handler.L();
        this.f36385f = handler.M();
        this.f36386g = handler.J();
        this.f36387h = handler.K();
        this.f36388i = handler.X0();
    }

    @Override // ln.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f36384e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f36385f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f36386g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f36387h));
        if (this.f36388i.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f36388i.b());
    }
}
