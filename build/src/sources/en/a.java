package en;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f22954e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22955f;

    /* renamed from: g  reason: collision with root package name */
    private final float f22956g;

    /* renamed from: h  reason: collision with root package name */
    private final float f22957h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(dn.b handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f22954e = handler.L();
        this.f22955f = handler.M();
        this.f22956g = handler.J();
        this.f22957h = handler.K();
    }

    @Override // en.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f22954e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f22955f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f22956g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f22957h));
    }
}
