package jn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f31040e;

    /* renamed from: f  reason: collision with root package name */
    private final float f31041f;

    /* renamed from: g  reason: collision with root package name */
    private final float f31042g;

    /* renamed from: h  reason: collision with root package name */
    private final float f31043h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(in.b handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f31040e = handler.L();
        this.f31041f = handler.M();
        this.f31042g = handler.J();
        this.f31043h = handler.K();
    }

    @Override // jn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f31040e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f31041f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f31042g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f31043h));
    }
}
