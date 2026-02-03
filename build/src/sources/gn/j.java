package gn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import fn.b0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f26393e;

    /* renamed from: f  reason: collision with root package name */
    private final float f26394f;

    /* renamed from: g  reason: collision with root package name */
    private final float f26395g;

    /* renamed from: h  reason: collision with root package name */
    private final float f26396h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(b0 handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f26393e = handler.L();
        this.f26394f = handler.M();
        this.f26395g = handler.J();
        this.f26396h = handler.K();
    }

    @Override // gn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f26393e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f26394f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f26395g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f26396h));
    }
}
