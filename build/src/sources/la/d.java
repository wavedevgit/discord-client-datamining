package la;

import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import kotlin.jvm.internal.Intrinsics;
import wa.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    public static final d f35797a = new d();

    private d() {
    }

    public static final PlatformBitmapFactory a(y poolFactory, xa.d platformDecoder, oa.a closeableReferenceFactory) {
        Intrinsics.checkNotNullParameter(poolFactory, "poolFactory");
        Intrinsics.checkNotNullParameter(platformDecoder, "platformDecoder");
        Intrinsics.checkNotNullParameter(closeableReferenceFactory, "closeableReferenceFactory");
        wa.d b10 = poolFactory.b();
        Intrinsics.checkNotNullExpressionValue(b10, "getBitmapPool(...)");
        return new a(b10, closeableReferenceFactory);
    }
}
