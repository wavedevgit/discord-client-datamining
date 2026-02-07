package li;

import android.graphics.Bitmap;
import com.google.android.renderscript.Range2d;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: li.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0484a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f36298a;

        static {
            int[] iArr = new int[Bitmap.Config.values().length];
            try {
                iArr[Bitmap.Config.ARGB_8888.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Bitmap.Config.ALPHA_8.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f36298a = iArr;
        }
    }

    public static final Bitmap a(Bitmap inputBitmap) {
        Intrinsics.checkNotNullParameter(inputBitmap, "inputBitmap");
        int width = inputBitmap.getWidth();
        int height = inputBitmap.getHeight();
        Bitmap.Config config = inputBitmap.getConfig();
        if (config == null) {
            config = Bitmap.Config.ARGB_8888;
        }
        Bitmap createBitmap = Bitmap.createBitmap(width, height, config);
        Intrinsics.checkNotNullExpressionValue(createBitmap, "createBitmap(...)");
        return createBitmap;
    }

    public static final void b(String function, Bitmap inputBitmap, boolean z10) {
        Intrinsics.checkNotNullParameter(function, "function");
        Intrinsics.checkNotNullParameter(inputBitmap, "inputBitmap");
        if (z10) {
            if (inputBitmap.getConfig() != Bitmap.Config.ARGB_8888 && inputBitmap.getConfig() != Bitmap.Config.ALPHA_8) {
                Bitmap.Config config = inputBitmap.getConfig();
                throw new IllegalArgumentException(("RenderScript Toolkit. " + function + " supports only ARGB_8888 and ALPHA_8 bitmaps. " + config + " provided.").toString());
            }
        } else if (inputBitmap.getConfig() != Bitmap.Config.ARGB_8888) {
            Bitmap.Config config2 = inputBitmap.getConfig();
            throw new IllegalArgumentException(("RenderScript Toolkit. " + function + " supports only ARGB_8888. " + config2 + " provided.").toString());
        }
        if (inputBitmap.getWidth() * f(inputBitmap) == inputBitmap.getRowBytes()) {
            return;
        }
        int rowBytes = inputBitmap.getRowBytes();
        int width = inputBitmap.getWidth();
        int f10 = f(inputBitmap);
        throw new IllegalArgumentException(("RenderScript Toolkit " + function + ". Only bitmaps with rowSize equal to the width * vectorSize are currently supported. Provided were rowBytes=" + rowBytes + ", width={" + width + ", and vectorSize=" + f10 + ".").toString());
    }

    public static /* synthetic */ void c(String str, Bitmap bitmap, boolean z10, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z10 = true;
        }
        b(str, bitmap, z10);
    }

    public static final void d(String tag, int i10, int i11, Range2d range2d) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        if (range2d == null) {
            return;
        }
        if (range2d.c() < i10 && range2d.a() <= i10) {
            if (range2d.d() < i11 && range2d.b() <= i11) {
                if (range2d.c() < range2d.a()) {
                    if (range2d.d() < range2d.b()) {
                        return;
                    }
                    int d10 = range2d.d();
                    int b10 = range2d.b();
                    throw new IllegalArgumentException(("RenderScript Toolkit " + tag + ". Restriction startY should be less than endY. " + d10 + " and " + b10 + " were provided respectively.").toString());
                }
                int c10 = range2d.c();
                int a10 = range2d.a();
                throw new IllegalArgumentException(("RenderScript Toolkit " + tag + ". Restriction startX should be less than endX. " + c10 + " and " + a10 + " were provided respectively.").toString());
            }
            int d11 = range2d.d();
            int b11 = range2d.b();
            throw new IllegalArgumentException(("RenderScript Toolkit " + tag + ". sizeY should be greater than restriction.startY and greater or equal to restriction.endY. " + i11 + ", " + d11 + ", and " + b11 + " were provided respectively.").toString());
        }
        int c11 = range2d.c();
        int a11 = range2d.a();
        throw new IllegalArgumentException(("RenderScript Toolkit " + tag + ". sizeX should be greater than restriction.startX and greater or equal to restriction.endX. " + i10 + ", " + c11 + ", and " + a11 + " were provided respectively.").toString());
    }

    public static final void e(String tag, Bitmap bitmap, Range2d range2d) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        d(tag, bitmap.getWidth(), bitmap.getHeight(), range2d);
    }

    public static final int f(Bitmap bitmap) {
        int i10;
        Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        Bitmap.Config config = bitmap.getConfig();
        if (config == null) {
            i10 = -1;
        } else {
            i10 = C0484a.f36298a[config.ordinal()];
        }
        if (i10 != 1) {
            if (i10 == 2) {
                return 1;
            }
            throw new IllegalArgumentException("RenderScript Toolkit. Only ARGB_8888 and ALPHA_8 Bitmap are supported.");
        }
        return 4;
    }
}
