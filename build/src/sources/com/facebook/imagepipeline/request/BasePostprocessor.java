package com.facebook.imagepipeline.request;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import com.facebook.cache.common.CacheKey;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import com.facebook.imagepipeline.nativecode.Bitmaps;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import na.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class BasePostprocessor implements Postprocessor {
    public static final Bitmap.Config FALLBACK_BITMAP_CONFIGURATION = Bitmap.Config.ARGB_8888;
    private static Method sCopyBitmap;

    private static void a(Bitmap bitmap, Bitmap bitmap2) {
        if (u.a() && bitmap.getConfig() == bitmap2.getConfig()) {
            try {
                if (sCopyBitmap == null) {
                    int i10 = Bitmaps.f10254a;
                    sCopyBitmap = Bitmaps.class.getDeclaredMethod("copyBitmap", Bitmap.class, Bitmap.class);
                }
                sCopyBitmap.invoke(null, bitmap, bitmap2);
                return;
            } catch (ClassNotFoundException e10) {
                throw new RuntimeException("Wrong Native code setup, reflection failed.", e10);
            } catch (IllegalAccessException e11) {
                throw new RuntimeException("Wrong Native code setup, reflection failed.", e11);
            } catch (NoSuchMethodException e12) {
                throw new RuntimeException("Wrong Native code setup, reflection failed.", e12);
            } catch (InvocationTargetException e13) {
                throw new RuntimeException("Wrong Native code setup, reflection failed.", e13);
            }
        }
        new Canvas(bitmap).drawBitmap(bitmap2, 0.0f, 0.0f, (Paint) null);
    }

    @Override // com.facebook.imagepipeline.request.Postprocessor
    public String getName() {
        return "Unknown postprocessor";
    }

    @Override // com.facebook.imagepipeline.request.Postprocessor
    public CacheKey getPostprocessorCacheKey() {
        return null;
    }

    public void process(Bitmap bitmap) {
    }

    @Override // com.facebook.imagepipeline.request.Postprocessor
    public CloseableReference process(Bitmap bitmap, PlatformBitmapFactory platformBitmapFactory) {
        Bitmap.Config config = bitmap.getConfig();
        int width = bitmap.getWidth();
        int height = bitmap.getHeight();
        if (config == null) {
            config = FALLBACK_BITMAP_CONFIGURATION;
        }
        CloseableReference d10 = platformBitmapFactory.d(width, height, config);
        try {
            process((Bitmap) d10.C0(), bitmap);
            return d10.clone();
        } finally {
            CloseableReference.N(d10);
        }
    }

    public void process(Bitmap bitmap, Bitmap bitmap2) {
        a(bitmap, bitmap2);
        process(bitmap);
    }
}
