package com.facebook.imagepipeline.nativecode;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.ColorSpace;
import android.graphics.Rect;
import android.os.Build;
import com.facebook.common.references.CloseableReference;
import com.facebook.soloader.g;
import java.util.Locale;
import p8.j;
import p8.n;
import s8.h;
import ta.k;
@p8.d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class DalvikPurgeableDecoder implements xa.d {

    /* renamed from: b  reason: collision with root package name */
    protected static final byte[] f10679b;

    /* renamed from: a  reason: collision with root package name */
    private final wa.b f10680a = wa.c.a();

    @g
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class OreoUtils {
        private OreoUtils() {
        }

        static void a(BitmapFactory.Options options, ColorSpace colorSpace) {
            ColorSpace.Named named;
            if (colorSpace == null) {
                named = ColorSpace.Named.SRGB;
                colorSpace = ColorSpace.get(named);
            }
            options.inPreferredColorSpace = colorSpace;
        }
    }

    static {
        b.a();
        f10679b = new byte[]{-1, -39};
    }

    public static boolean e(CloseableReference closeableReference, int i10) {
        h hVar = (h) closeableReference.J();
        if (i10 >= 2 && hVar.B(i10 - 2) == -1 && hVar.B(i10 - 1) == -39) {
            return true;
        }
        return false;
    }

    public static BitmapFactory.Options f(int i10, Bitmap.Config config) {
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inDither = true;
        options.inPreferredConfig = config;
        options.inPurgeable = true;
        options.inInputShareable = true;
        options.inSampleSize = i10;
        options.inMutable = true;
        return options;
    }

    @p8.d
    private static native void nativePinBitmap(Bitmap bitmap);

    @Override // xa.d
    public CloseableReference a(k kVar, Bitmap.Config config, Rect rect, ColorSpace colorSpace) {
        BitmapFactory.Options f10 = f(kVar.J(), config);
        if (Build.VERSION.SDK_INT >= 26) {
            OreoUtils.a(f10, colorSpace);
        }
        CloseableReference n10 = kVar.n();
        j.g(n10);
        try {
            return g(c(n10, f10));
        } finally {
            CloseableReference.z(n10);
        }
    }

    @Override // xa.d
    public CloseableReference b(k kVar, Bitmap.Config config, Rect rect, int i10, ColorSpace colorSpace) {
        BitmapFactory.Options f10 = f(kVar.J(), config);
        if (Build.VERSION.SDK_INT >= 26) {
            OreoUtils.a(f10, colorSpace);
        }
        CloseableReference n10 = kVar.n();
        j.g(n10);
        try {
            return g(d(n10, i10, f10));
        } finally {
            CloseableReference.z(n10);
        }
    }

    protected abstract Bitmap c(CloseableReference closeableReference, BitmapFactory.Options options);

    protected abstract Bitmap d(CloseableReference closeableReference, int i10, BitmapFactory.Options options);

    public CloseableReference g(Bitmap bitmap) {
        j.g(bitmap);
        try {
            nativePinBitmap(bitmap);
            if (this.f10680a.g(bitmap)) {
                return CloseableReference.R0(bitmap, this.f10680a.e());
            }
            int j10 = db.d.j(bitmap);
            bitmap.recycle();
            throw new na.c(String.format(Locale.US, "Attempted to pin a bitmap of size %d bytes. The current pool count is %d, the current pool size is %d bytes. The current pool max count is %d, the current pool max size is %d bytes.", Integer.valueOf(j10), Integer.valueOf(this.f10680a.b()), Long.valueOf(this.f10680a.f()), Integer.valueOf(this.f10680a.c()), Integer.valueOf(this.f10680a.d())));
        } catch (Exception e10) {
            bitmap.recycle();
            throw n.a(e10);
        }
    }
}
