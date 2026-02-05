package jn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import in.o;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f31053e;

    /* renamed from: f  reason: collision with root package name */
    private final float f31054f;

    /* renamed from: g  reason: collision with root package name */
    private final float f31055g;

    /* renamed from: h  reason: collision with root package name */
    private final float f31056h;

    /* renamed from: i  reason: collision with root package name */
    private final int f31057i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(o handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f31053e = handler.L();
        this.f31054f = handler.M();
        this.f31055g = handler.J();
        this.f31056h = handler.K();
        this.f31057i = handler.Y0();
    }

    @Override // jn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f31053e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f31054f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f31055g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f31056h));
        eventData.putInt("duration", this.f31057i);
    }
}
