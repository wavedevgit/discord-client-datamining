package en;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import dn.o;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f22967e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22968f;

    /* renamed from: g  reason: collision with root package name */
    private final float f22969g;

    /* renamed from: h  reason: collision with root package name */
    private final float f22970h;

    /* renamed from: i  reason: collision with root package name */
    private final int f22971i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(o handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f22967e = handler.L();
        this.f22968f = handler.M();
        this.f22969g = handler.J();
        this.f22970h = handler.K();
        this.f22971i = handler.Y0();
    }

    @Override // en.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f22967e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f22968f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f22969g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f22970h));
        eventData.putInt("duration", this.f22971i);
    }
}
