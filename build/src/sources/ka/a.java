package ka;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends PlatformBitmapFactory {

    /* renamed from: a  reason: collision with root package name */
    private final va.d f31677a;

    /* renamed from: b  reason: collision with root package name */
    private final na.a f31678b;

    public a(va.d bitmapPool, na.a closeableReferenceFactory) {
        Intrinsics.checkNotNullParameter(bitmapPool, "bitmapPool");
        Intrinsics.checkNotNullParameter(closeableReferenceFactory, "closeableReferenceFactory");
        this.f31677a = bitmapPool;
        this.f31678b = closeableReferenceFactory;
    }

    @Override // com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory
    public CloseableReference d(int i10, int i11, Bitmap.Config bitmapConfig) {
        Intrinsics.checkNotNullParameter(bitmapConfig, "bitmapConfig");
        Bitmap bitmap = (Bitmap) this.f31677a.get(cb.d.i(i10, i11, bitmapConfig));
        if (bitmap.getAllocationByteCount() >= i10 * i11 * cb.d.h(bitmapConfig)) {
            bitmap.reconfigure(i10, i11, bitmapConfig);
            CloseableReference c10 = this.f31678b.c(bitmap, this.f31677a);
            Intrinsics.checkNotNullExpressionValue(c10, "create(...)");
            return c10;
        }
        throw new IllegalStateException("Check failed.");
    }
}
