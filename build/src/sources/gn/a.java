package gn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f26357e;

    /* renamed from: f  reason: collision with root package name */
    private final float f26358f;

    /* renamed from: g  reason: collision with root package name */
    private final float f26359g;

    /* renamed from: h  reason: collision with root package name */
    private final float f26360h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(fn.b handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f26357e = handler.L();
        this.f26358f = handler.M();
        this.f26359g = handler.J();
        this.f26360h = handler.K();
    }

    @Override // gn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f26357e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f26358f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f26359g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f26360h));
    }
}
