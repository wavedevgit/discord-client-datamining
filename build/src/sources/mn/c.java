package mn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
import ln.m;
import ln.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f37262e;

    /* renamed from: f  reason: collision with root package name */
    private final float f37263f;

    /* renamed from: g  reason: collision with root package name */
    private final float f37264g;

    /* renamed from: h  reason: collision with root package name */
    private final float f37265h;

    /* renamed from: i  reason: collision with root package name */
    private final z f37266i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(m handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f37262e = handler.L();
        this.f37263f = handler.M();
        this.f37264g = handler.J();
        this.f37265h = handler.K();
        this.f37266i = handler.X0();
    }

    @Override // mn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f37262e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f37263f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f37264g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f37265h));
        if (this.f37266i.a() == -1.0d) {
            return;
        }
        eventData.putMap("stylusData", this.f37266i.b());
    }
}
