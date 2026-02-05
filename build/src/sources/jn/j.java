package jn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import in.b0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f31076e;

    /* renamed from: f  reason: collision with root package name */
    private final float f31077f;

    /* renamed from: g  reason: collision with root package name */
    private final float f31078g;

    /* renamed from: h  reason: collision with root package name */
    private final float f31079h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(b0 handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f31076e = handler.L();
        this.f31077f = handler.M();
        this.f31078g = handler.J();
        this.f31079h = handler.K();
    }

    @Override // jn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f31076e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f31077f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f31078g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f31079h));
    }
}
