package ka;

import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import kotlin.jvm.internal.Intrinsics;
import va.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    public static final d f31529a = new d();

    private d() {
    }

    public static final PlatformBitmapFactory a(y poolFactory, wa.d platformDecoder, na.a closeableReferenceFactory) {
        Intrinsics.checkNotNullParameter(poolFactory, "poolFactory");
        Intrinsics.checkNotNullParameter(platformDecoder, "platformDecoder");
        Intrinsics.checkNotNullParameter(closeableReferenceFactory, "closeableReferenceFactory");
        va.d b10 = poolFactory.b();
        Intrinsics.checkNotNullExpressionValue(b10, "getBitmapPool(...)");
        return new a(b10, closeableReferenceFactory);
    }
}
