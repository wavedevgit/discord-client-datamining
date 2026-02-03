package en;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import dn.b0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f22990e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22991f;

    /* renamed from: g  reason: collision with root package name */
    private final float f22992g;

    /* renamed from: h  reason: collision with root package name */
    private final float f22993h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(b0 handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f22990e = handler.L();
        this.f22991f = handler.M();
        this.f22992g = handler.J();
        this.f22993h = handler.K();
    }

    @Override // en.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f22990e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f22991f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f22992g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f22993h));
    }
}
