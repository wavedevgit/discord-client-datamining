package on;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f40629e;

    /* renamed from: f  reason: collision with root package name */
    private final float f40630f;

    /* renamed from: g  reason: collision with root package name */
    private final float f40631g;

    /* renamed from: h  reason: collision with root package name */
    private final float f40632h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(nn.b handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f40629e = handler.L();
        this.f40630f = handler.M();
        this.f40631g = handler.J();
        this.f40632h = handler.K();
    }

    @Override // on.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f40629e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f40630f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f40631g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f40632h));
    }
}
