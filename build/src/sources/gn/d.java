package gn;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import fn.o;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends b {

    /* renamed from: e  reason: collision with root package name */
    private final float f26370e;

    /* renamed from: f  reason: collision with root package name */
    private final float f26371f;

    /* renamed from: g  reason: collision with root package name */
    private final float f26372g;

    /* renamed from: h  reason: collision with root package name */
    private final float f26373h;

    /* renamed from: i  reason: collision with root package name */
    private final int f26374i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(o handler) {
        super(handler);
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f26370e = handler.L();
        this.f26371f = handler.M();
        this.f26372g = handler.J();
        this.f26373h = handler.K();
        this.f26374i = handler.Y0();
    }

    @Override // gn.b
    public void a(WritableMap eventData) {
        Intrinsics.checkNotNullParameter(eventData, "eventData");
        super.a(eventData);
        eventData.putDouble("x", PixelUtil.toDIPFromPixel(this.f26370e));
        eventData.putDouble("y", PixelUtil.toDIPFromPixel(this.f26371f));
        eventData.putDouble("absoluteX", PixelUtil.toDIPFromPixel(this.f26372g));
        eventData.putDouble("absoluteY", PixelUtil.toDIPFromPixel(this.f26373h));
        eventData.putInt("duration", this.f26374i);
    }
}
