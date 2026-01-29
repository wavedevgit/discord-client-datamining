package androidx.camera.core;

import a0.j1;
import android.graphics.Bitmap;
import android.media.Image;
import android.media.ImageWriter;
import android.util.Log;
import android.view.Surface;
import androidx.annotation.NonNull;
import androidx.camera.core.ImageProcessingUtil;
import androidx.camera.core.e;
import java.nio.ByteBuffer;
import java.util.Locale;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class ImageProcessingUtil {

    /* renamed from: a  reason: collision with root package name */
    private static int f1927a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        UNKNOWN,
        SUCCESS,
        ERROR_CONVERSION
    }

    static {
        System.loadLibrary("image_processing_util_jni");
    }

    public static /* synthetic */ void a(n nVar, n nVar2, n nVar3) {
        if (nVar != null && nVar2 != null) {
            nVar2.close();
        }
    }

    public static /* synthetic */ void b(n nVar, n nVar2, n nVar3) {
        if (nVar != null && nVar2 != null) {
            nVar2.close();
        }
    }

    public static boolean c(n nVar) {
        if (!l(nVar)) {
            y0.c("ImageProcessingUtil", "Unsupported format for YUV to RGB");
            return false;
        } else if (d(nVar) == a.ERROR_CONVERSION) {
            y0.c("ImageProcessingUtil", "One pixel shift for YUV failure");
            return false;
        } else {
            return true;
        }
    }

    private static a d(n nVar) {
        int width = nVar.getWidth();
        int height = nVar.getHeight();
        int f10 = nVar.c1()[0].f();
        int f11 = nVar.c1()[1].f();
        int f12 = nVar.c1()[2].f();
        int g10 = nVar.c1()[0].g();
        int g11 = nVar.c1()[1].g();
        if (nativeShiftPixel(nVar.c1()[0].e(), f10, nVar.c1()[1].e(), f11, nVar.c1()[2].e(), f12, g10, g11, width, height, g10, g11, g11) != 0) {
            return a.ERROR_CONVERSION;
        }
        return a.SUCCESS;
    }

    public static n e(j1 j1Var, byte[] bArr) {
        boolean z10;
        if (j1Var.c() == 256) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.a(z10);
        b2.e.g(bArr);
        Surface surface = j1Var.getSurface();
        b2.e.g(surface);
        if (nativeWriteJpegToSurface(bArr, surface) != 0) {
            y0.c("ImageProcessingUtil", "Failed to enqueue JPEG image.");
            return null;
        }
        n b10 = j1Var.b();
        if (b10 == null) {
            y0.c("ImageProcessingUtil", "Failed to get acquire JPEG image.");
        }
        return b10;
    }

    public static Bitmap f(n nVar) {
        if (nVar.getFormat() == 35) {
            int width = nVar.getWidth();
            int height = nVar.getHeight();
            int f10 = nVar.c1()[0].f();
            int f11 = nVar.c1()[1].f();
            int f12 = nVar.c1()[2].f();
            int g10 = nVar.c1()[0].g();
            int g11 = nVar.c1()[1].g();
            Bitmap createBitmap = Bitmap.createBitmap(nVar.getWidth(), nVar.getHeight(), Bitmap.Config.ARGB_8888);
            if (nativeConvertAndroid420ToBitmap(nVar.c1()[0].e(), f10, nVar.c1()[1].e(), f11, nVar.c1()[2].e(), f12, g10, g11, createBitmap, createBitmap.getRowBytes(), width, height) == 0) {
                return createBitmap;
            }
            throw new UnsupportedOperationException("YUV to RGB conversion failed");
        }
        throw new IllegalArgumentException("Input image format must be YUV_420_888");
    }

    public static n g(final n nVar, j1 j1Var, ByteBuffer byteBuffer, int i10, boolean z10) {
        if (!l(nVar)) {
            y0.c("ImageProcessingUtil", "Unsupported format for YUV to RGB");
            return null;
        }
        long currentTimeMillis = System.currentTimeMillis();
        if (!k(i10)) {
            y0.c("ImageProcessingUtil", "Unsupported rotation degrees for rotate RGB");
            return null;
        } else if (h(nVar, j1Var.getSurface(), byteBuffer, i10, z10) == a.ERROR_CONVERSION) {
            y0.c("ImageProcessingUtil", "YUV to RGB conversion failure");
            return null;
        } else {
            if (Log.isLoggable("MH", 3)) {
                y0.a("ImageProcessingUtil", String.format(Locale.US, "Image processing performance profiling, duration: [%d], image count: %d", Long.valueOf(System.currentTimeMillis() - currentTimeMillis), Integer.valueOf(f1927a)));
                f1927a++;
            }
            final n b10 = j1Var.b();
            if (b10 == null) {
                y0.c("ImageProcessingUtil", "YUV to RGB acquireLatestImage failure");
                return null;
            }
            s sVar = new s(b10);
            sVar.a(new e.a() { // from class: x.q0
                @Override // androidx.camera.core.e.a
                public final void a(androidx.camera.core.n nVar2) {
                    ImageProcessingUtil.b(androidx.camera.core.n.this, nVar, nVar2);
                }
            });
            return sVar;
        }
    }

    private static a h(n nVar, Surface surface, ByteBuffer byteBuffer, int i10, boolean z10) {
        int i11;
        int i12;
        int i13;
        int width = nVar.getWidth();
        int height = nVar.getHeight();
        int f10 = nVar.c1()[0].f();
        int f11 = nVar.c1()[1].f();
        int f12 = nVar.c1()[2].f();
        int g10 = nVar.c1()[0].g();
        int g11 = nVar.c1()[1].g();
        if (z10) {
            i11 = g10;
        } else {
            i11 = 0;
        }
        if (z10) {
            i12 = g11;
        } else {
            i12 = 0;
        }
        if (z10) {
            i13 = g11;
        } else {
            i13 = 0;
        }
        if (nativeConvertAndroid420ToABGR(nVar.c1()[0].e(), f10, nVar.c1()[1].e(), f11, nVar.c1()[2].e(), f12, g10, g11, surface, byteBuffer, width, height, i11, i12, i13, i10) != 0) {
            return a.ERROR_CONVERSION;
        }
        return a.SUCCESS;
    }

    public static void i(Bitmap bitmap, ByteBuffer byteBuffer, int i10) {
        nativeCopyBetweenByteBufferAndBitmap(bitmap, byteBuffer, bitmap.getRowBytes(), i10, bitmap.getWidth(), bitmap.getHeight(), false);
    }

    public static void j(Bitmap bitmap, ByteBuffer byteBuffer, int i10) {
        nativeCopyBetweenByteBufferAndBitmap(bitmap, byteBuffer, i10, bitmap.getRowBytes(), bitmap.getWidth(), bitmap.getHeight(), true);
    }

    private static boolean k(int i10) {
        return i10 == 0 || i10 == 90 || i10 == 180 || i10 == 270;
    }

    private static boolean l(n nVar) {
        if (nVar.getFormat() == 35 && nVar.c1().length == 3) {
            return true;
        }
        return false;
    }

    public static n m(n nVar, j1 j1Var, ImageWriter imageWriter, ByteBuffer byteBuffer, ByteBuffer byteBuffer2, ByteBuffer byteBuffer3, int i10) {
        final n nVar2;
        a aVar;
        if (!l(nVar)) {
            y0.c("ImageProcessingUtil", "Unsupported format for rotate YUV");
            return null;
        } else if (!k(i10)) {
            y0.c("ImageProcessingUtil", "Unsupported rotation degrees for rotate YUV");
            return null;
        } else {
            a aVar2 = a.ERROR_CONVERSION;
            if (i10 > 0) {
                nVar2 = nVar;
                aVar = n(nVar2, imageWriter, byteBuffer, byteBuffer2, byteBuffer3, i10);
            } else {
                nVar2 = nVar;
                aVar = aVar2;
            }
            if (aVar == aVar2) {
                y0.c("ImageProcessingUtil", "rotate YUV failure");
                return null;
            }
            final n b10 = j1Var.b();
            if (b10 == null) {
                y0.c("ImageProcessingUtil", "YUV rotation acquireLatestImage failure");
                return null;
            }
            s sVar = new s(b10);
            sVar.a(new e.a() { // from class: x.r0
                @Override // androidx.camera.core.e.a
                public final void a(androidx.camera.core.n nVar3) {
                    ImageProcessingUtil.a(androidx.camera.core.n.this, nVar2, nVar3);
                }
            });
            return sVar;
        }
    }

    private static a n(n nVar, ImageWriter imageWriter, ByteBuffer byteBuffer, ByteBuffer byteBuffer2, ByteBuffer byteBuffer3, int i10) {
        int width = nVar.getWidth();
        int height = nVar.getHeight();
        int f10 = nVar.c1()[0].f();
        int f11 = nVar.c1()[1].f();
        int f12 = nVar.c1()[2].f();
        int g10 = nVar.c1()[1].g();
        Image b10 = f0.a.b(imageWriter);
        if (b10 == null) {
            return a.ERROR_CONVERSION;
        }
        if (nativeRotateYUV(nVar.c1()[0].e(), f10, nVar.c1()[1].e(), f11, nVar.c1()[2].e(), f12, g10, b10.getPlanes()[0].getBuffer(), b10.getPlanes()[0].getRowStride(), b10.getPlanes()[0].getPixelStride(), b10.getPlanes()[1].getBuffer(), b10.getPlanes()[1].getRowStride(), b10.getPlanes()[1].getPixelStride(), b10.getPlanes()[2].getBuffer(), b10.getPlanes()[2].getRowStride(), b10.getPlanes()[2].getPixelStride(), byteBuffer, byteBuffer2, byteBuffer3, width, height, i10) != 0) {
            return a.ERROR_CONVERSION;
        }
        f0.a.d(imageWriter, b10);
        return a.SUCCESS;
    }

    private static native int nativeConvertAndroid420ToABGR(@NonNull ByteBuffer byteBuffer, int i10, @NonNull ByteBuffer byteBuffer2, int i11, @NonNull ByteBuffer byteBuffer3, int i12, int i13, int i14, Surface surface, ByteBuffer byteBuffer4, int i15, int i16, int i17, int i18, int i19, int i20);

    private static native int nativeConvertAndroid420ToBitmap(@NonNull ByteBuffer byteBuffer, int i10, @NonNull ByteBuffer byteBuffer2, int i11, @NonNull ByteBuffer byteBuffer3, int i12, int i13, int i14, @NonNull Bitmap bitmap, int i15, int i16, int i17);

    private static native int nativeCopyBetweenByteBufferAndBitmap(Bitmap bitmap, ByteBuffer byteBuffer, int i10, int i11, int i12, int i13, boolean z10);

    private static native int nativeRotateYUV(@NonNull ByteBuffer byteBuffer, int i10, @NonNull ByteBuffer byteBuffer2, int i11, @NonNull ByteBuffer byteBuffer3, int i12, int i13, @NonNull ByteBuffer byteBuffer4, int i14, int i15, @NonNull ByteBuffer byteBuffer5, int i16, int i17, @NonNull ByteBuffer byteBuffer6, int i18, int i19, @NonNull ByteBuffer byteBuffer7, @NonNull ByteBuffer byteBuffer8, @NonNull ByteBuffer byteBuffer9, int i20, int i21, int i22);

    private static native int nativeShiftPixel(@NonNull ByteBuffer byteBuffer, int i10, @NonNull ByteBuffer byteBuffer2, int i11, @NonNull ByteBuffer byteBuffer3, int i12, int i13, int i14, int i15, int i16, int i17, int i18, int i19);

    private static native int nativeWriteJpegToSurface(@NonNull byte[] bArr, @NonNull Surface surface);

    public static boolean o(Surface surface, byte[] bArr) {
        b2.e.g(bArr);
        b2.e.g(surface);
        if (nativeWriteJpegToSurface(bArr, surface) != 0) {
            y0.c("ImageProcessingUtil", "Failed to enqueue JPEG image.");
            return false;
        }
        return true;
    }
}
