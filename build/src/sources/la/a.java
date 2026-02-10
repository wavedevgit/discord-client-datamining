package la;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends PlatformBitmapFactory {

    /* renamed from: a  reason: collision with root package name */
    private final wa.d f35686a;

    /* renamed from: b  reason: collision with root package name */
    private final oa.a f35687b;

    public a(wa.d bitmapPool, oa.a closeableReferenceFactory) {
        Intrinsics.checkNotNullParameter(bitmapPool, "bitmapPool");
        Intrinsics.checkNotNullParameter(closeableReferenceFactory, "closeableReferenceFactory");
        this.f35686a = bitmapPool;
        this.f35687b = closeableReferenceFactory;
    }

    @Override // com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory
    public CloseableReference d(int i10, int i11, Bitmap.Config bitmapConfig) {
        Intrinsics.checkNotNullParameter(bitmapConfig, "bitmapConfig");
        Bitmap bitmap = (Bitmap) this.f35686a.get(db.d.i(i10, i11, bitmapConfig));
        if (bitmap.getAllocationByteCount() >= i10 * i11 * db.d.h(bitmapConfig)) {
            bitmap.reconfigure(i10, i11, bitmapConfig);
            CloseableReference c10 = this.f35687b.c(bitmap, this.f35686a);
            Intrinsics.checkNotNullExpressionValue(c10, "create(...)");
            return c10;
        }
        throw new IllegalStateException("Check failed.");
    }
}
