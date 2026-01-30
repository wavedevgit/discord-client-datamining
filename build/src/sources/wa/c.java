package wa;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends b {

    /* renamed from: h  reason: collision with root package name */
    private final f f52288h;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(va.d bitmapPool, b2.d decodeBuffers, f platformDecoderOptions) {
        super(bitmapPool, decodeBuffers, platformDecoderOptions);
        Intrinsics.checkNotNullParameter(bitmapPool, "bitmapPool");
        Intrinsics.checkNotNullParameter(decodeBuffers, "decodeBuffers");
        Intrinsics.checkNotNullParameter(platformDecoderOptions, "platformDecoderOptions");
        this.f52288h = platformDecoderOptions;
    }

    @Override // wa.b
    public int d(int i10, int i11, BitmapFactory.Options options) {
        Bitmap.Config config;
        Intrinsics.checkNotNullParameter(options, "options");
        config = options.outConfig;
        if (config == null) {
            config = Bitmap.Config.ARGB_8888;
        }
        return cb.d.i(i10, i11, config);
    }
}
