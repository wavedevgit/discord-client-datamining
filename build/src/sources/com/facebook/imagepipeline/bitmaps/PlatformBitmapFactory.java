package com.facebook.imagepipeline.bitmaps;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class PlatformBitmapFactory {
    public CloseableReference a(int i10, int i11) {
        return b(i10, i11, Bitmap.Config.ARGB_8888);
    }

    public CloseableReference b(int i10, int i11, Bitmap.Config config) {
        return c(i10, i11, config, null);
    }

    public CloseableReference c(int i10, int i11, Bitmap.Config config, Object obj) {
        return d(i10, i11, config);
    }

    public abstract CloseableReference d(int i10, int i11, Bitmap.Config config);
}
