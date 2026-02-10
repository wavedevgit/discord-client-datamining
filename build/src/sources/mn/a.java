package mn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f37254e;

    /* renamed from: f  reason: collision with root package name */
    private final float f37255f;

    /* renamed from: g  reason: collision with root package name */
    private final float f37256g;

    /* renamed from: h  reason: collision with root package name */
    private final float f37257h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(ln.b handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f37254e = handler.L();
        this.f37255f = handler.M();
        this.f37256g = handler.J();
        this.f37257h = handler.K();
    }

    @Override // mn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f37254e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f37255f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f37256g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f37257h));
    }
}
