package com.facebook.imagepipeline.request;

import android.graphics.Bitmap;
import com.facebook.cache.common.CacheKey;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface Postprocessor {
    String getName();

    CacheKey getPostprocessorCacheKey();

    CloseableReference process(Bitmap bitmap, PlatformBitmapFactory platformBitmapFactory);
}
