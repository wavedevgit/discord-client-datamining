package com.facebook.imagepipeline.nativecode;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.ColorSpace;
import android.graphics.Rect;
import android.os.Build;
import com.facebook.common.references.CloseableReference;
import com.facebook.soloader.g;
import java.util.Locale;
import o8.j;
import o8.n;
import r8.h;
import sa.k;
@o8.d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class DalvikPurgeableDecoder implements wa.d {

    /* renamed from: b  reason: collision with root package name */
    protected static final byte[] f10539b;

    /* renamed from: a  reason: collision with root package name */
    private final va.b f10540a = va.c.a();

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
        f10539b = new byte[]{-1, -39};
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

    @o8.d
    private static native void nativePinBitmap(Bitmap bitmap);

    @Override // wa.d
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

    @Override // wa.d
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
            if (this.f10540a.g(bitmap)) {
                return CloseableReference.O0(bitmap, this.f10540a.e());
            }
            int j10 = cb.d.j(bitmap);
            bitmap.recycle();
            throw new ma.c(String.format(Locale.US, "Attempted to pin a bitmap of size %d bytes. The current pool count is %d, the current pool size is %d bytes. The current pool max count is %d, the current pool max size is %d bytes.", Integer.valueOf(j10), Integer.valueOf(this.f10540a.b()), Long.valueOf(this.f10540a.f()), Integer.valueOf(this.f10540a.c()), Integer.valueOf(this.f10540a.d())));
        } catch (Exception e10) {
            bitmap.recycle();
            throw n.a(e10);
        }
    }
}
