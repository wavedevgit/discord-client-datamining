package ln;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kn.o;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f36389e;

    /* renamed from: f  reason: collision with root package name */
    private final float f36390f;

    /* renamed from: g  reason: collision with root package name */
    private final float f36391g;

    /* renamed from: h  reason: collision with root package name */
    private final float f36392h;

    /* renamed from: i  reason: collision with root package name */
    private final int f36393i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(o handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f36389e = handler.L();
        this.f36390f = handler.M();
        this.f36391g = handler.J();
        this.f36392h = handler.K();
        this.f36393i = handler.Y0();
    }

    @Override // ln.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f36389e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f36390f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f36391g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f36392h));
        eventData.putInt("duration", this.f36393i);
    }
}
