package com.facebook.imagepipeline.cache;

import android.net.Uri;
import com.facebook.cache.common.CacheKey;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.Postprocessor;
import i8.h;
import la.b;
import la.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DefaultCacheKeyFactory implements k {
    private static DefaultCacheKeyFactory sInstance = null;
    private static boolean sShouldRemoveCallerContextFromCacheKey = false;

    public static synchronized DefaultCacheKeyFactory getInstance() {
        DefaultCacheKeyFactory defaultCacheKeyFactory;
        synchronized (DefaultCacheKeyFactory.class) {
            try {
                if (sInstance == null) {
                    sInstance = new DefaultCacheKeyFactory();
                }
                defaultCacheKeyFactory = sInstance;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return defaultCacheKeyFactory;
    }

    public static void setShouldRemoveCallerContextFromCacheKey(boolean z10) {
        sShouldRemoveCallerContextFromCacheKey = z10;
    }

    @Override // la.k
    public CacheKey getBitmapCacheKey(ImageRequest imageRequest, Object obj) {
        b bVar = new b(getCacheKeySourceUri(imageRequest.getSourceUri()).toString(), imageRequest.getResizeOptions(), imageRequest.getRotationOptions(), imageRequest.getImageDecodeOptions(), null, null);
        if (sShouldRemoveCallerContextFromCacheKey) {
            bVar.d(null);
            return bVar;
        }
        bVar.d(obj);
        return bVar;
    }

    protected Uri getCacheKeySourceUri(Uri uri) {
        return uri;
    }

    @Override // la.k
    public CacheKey getEncodedCacheKey(ImageRequest imageRequest, Object obj) {
        return getEncodedCacheKey(imageRequest, imageRequest.getSourceUri(), obj);
    }

    @Override // la.k
    public CacheKey getPostprocessedBitmapCacheKey(ImageRequest imageRequest, Object obj) {
        CacheKey cacheKey;
        String str;
        Postprocessor postprocessor = imageRequest.getPostprocessor();
        if (postprocessor != null) {
            CacheKey postprocessorCacheKey = postprocessor.getPostprocessorCacheKey();
            str = postprocessor.getClass().getName();
            cacheKey = postprocessorCacheKey;
        } else {
            cacheKey = null;
            str = null;
        }
        b bVar = new b(getCacheKeySourceUri(imageRequest.getSourceUri()).toString(), imageRequest.getResizeOptions(), imageRequest.getRotationOptions(), imageRequest.getImageDecodeOptions(), cacheKey, str);
        if (sShouldRemoveCallerContextFromCacheKey) {
            bVar.d(null);
            return bVar;
        }
        bVar.d(obj);
        return bVar;
    }

    @Override // la.k
    public CacheKey getEncodedCacheKey(ImageRequest imageRequest, Uri uri, Object obj) {
        return new h(getCacheKeySourceUri(uri).toString());
    }
}
