package ka;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends PlatformBitmapFactory {

    /* renamed from: a  reason: collision with root package name */
    private final va.d f32214a;

    /* renamed from: b  reason: collision with root package name */
    private final na.a f32215b;

    public a(va.d bitmapPool, na.a closeableReferenceFactory) {
        Intrinsics.checkNotNullParameter(bitmapPool, "bitmapPool");
        Intrinsics.checkNotNullParameter(closeableReferenceFactory, "closeableReferenceFactory");
        this.f32214a = bitmapPool;
        this.f32215b = closeableReferenceFactory;
    }

    @Override // com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory
    public CloseableReference d(int i10, int i11, Bitmap.Config bitmapConfig) {
        Intrinsics.checkNotNullParameter(bitmapConfig, "bitmapConfig");
        Bitmap bitmap = (Bitmap) this.f32214a.get(cb.d.i(i10, i11, bitmapConfig));
        if (bitmap.getAllocationByteCount() >= i10 * i11 * cb.d.h(bitmapConfig)) {
            bitmap.reconfigure(i10, i11, bitmapConfig);
            CloseableReference c10 = this.f32215b.c(bitmap, this.f32214a);
            Intrinsics.checkNotNullExpressionValue(c10, "create(...)");
            return c10;
        }
        throw new IllegalStateException("Check failed.");
    }
}
