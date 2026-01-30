package i0;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.YuvImage;
import android.util.Rational;
import android.util.Size;
import androidx.camera.core.ImageProcessingUtil;
import androidx.camera.core.n;
import b0.h;
import b0.i;
import java.io.ByteArrayOutputStream;
import java.nio.ByteBuffer;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends Exception {

        /* renamed from: d  reason: collision with root package name */
        private final EnumC0368a f28332d;

        /* renamed from: i0.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public enum EnumC0368a {
            ENCODE_FAILED,
            DECODE_FAILED,
            UNKNOWN
        }

        a(String str, EnumC0368a enumC0368a) {
            super(str);
            this.f28332d = enumC0368a;
        }
    }

    public static Rect a(Size size, Rational rational) {
        int i10;
        if (!h(rational)) {
            y0.l("ImageUtil", "Invalid view ratio.");
            return null;
        }
        int width = size.getWidth();
        int height = size.getHeight();
        float f10 = width;
        float f11 = height;
        int numerator = rational.getNumerator();
        int denominator = rational.getDenominator();
        int i11 = 0;
        if (rational.floatValue() > f10 / f11) {
            int round = Math.round((f10 / numerator) * denominator);
            i10 = (height - round) / 2;
            height = round;
        } else {
            int round2 = Math.round((f11 / denominator) * numerator);
            int i12 = (width - round2) / 2;
            width = round2;
            i10 = 0;
            i11 = i12;
        }
        return new Rect(i11, i10, width + i11, height + i10);
    }

    public static Bitmap b(n nVar) {
        int format = nVar.getFormat();
        if (format != 1) {
            if (format != 35) {
                if (format != 256 && format != 4101) {
                    throw new IllegalArgumentException("Incorrect image format of the input image proxy: " + nVar.getFormat() + ", only ImageFormat.YUV_420_888 and PixelFormat.RGBA_8888 are supported");
                }
                return c(nVar);
            }
            return ImageProcessingUtil.f(nVar);
        }
        return d(nVar);
    }

    private static Bitmap c(n nVar) {
        byte[] j10 = j(nVar);
        Bitmap decodeByteArray = BitmapFactory.decodeByteArray(j10, 0, j10.length, null);
        if (decodeByteArray != null) {
            return decodeByteArray;
        }
        throw new UnsupportedOperationException("Decode jpeg byte array failed");
    }

    private static Bitmap d(n nVar) {
        Bitmap createBitmap = Bitmap.createBitmap(nVar.getWidth(), nVar.getHeight(), Bitmap.Config.ARGB_8888);
        nVar.c1()[0].e().rewind();
        ImageProcessingUtil.j(createBitmap, nVar.c1()[0].e(), nVar.c1()[0].f());
        return createBitmap;
    }

    public static ByteBuffer e(Bitmap bitmap) {
        boolean z10;
        if (bitmap.getConfig() == Bitmap.Config.ARGB_8888) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.b(z10, "Only accept Bitmap with ARGB_8888 format for now.");
        ByteBuffer allocateDirect = ByteBuffer.allocateDirect(bitmap.getAllocationByteCount());
        ImageProcessingUtil.i(bitmap, allocateDirect, bitmap.getRowBytes());
        allocateDirect.rewind();
        return allocateDirect;
    }

    public static Rational f(int i10, Rational rational) {
        if (i10 != 90 && i10 != 270) {
            return new Rational(rational.getNumerator(), rational.getDenominator());
        }
        return g(rational);
    }

    private static Rational g(Rational rational) {
        if (rational == null) {
            return rational;
        }
        return new Rational(rational.getDenominator(), rational.getNumerator());
    }

    public static boolean h(Rational rational) {
        if (rational != null && rational.floatValue() > 0.0f && !rational.isNaN()) {
            return true;
        }
        return false;
    }

    public static boolean i(int i10) {
        if (i10 != 256 && i10 != 4101) {
            return false;
        }
        return true;
    }

    public static byte[] j(n nVar) {
        if (i(nVar.getFormat())) {
            ByteBuffer e10 = nVar.c1()[0].e();
            byte[] bArr = new byte[e10.capacity()];
            e10.rewind();
            e10.get(bArr);
            return bArr;
        }
        throw new IllegalArgumentException("Incorrect image format of the input image proxy: " + nVar.getFormat());
    }

    public static Bitmap k(Bitmap bitmap, int i10) {
        Matrix matrix = new Matrix();
        matrix.postRotate(i10);
        return Bitmap.createBitmap(bitmap, 0, 0, bitmap.getWidth(), bitmap.getHeight(), matrix, true);
    }

    public static byte[] l(n nVar, Rect rect, int i10, int i11) {
        if (nVar.getFormat() == 35) {
            YuvImage yuvImage = new YuvImage(m(nVar), 17, nVar.getWidth(), nVar.getHeight(), null);
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            i iVar = new i(byteArrayOutputStream, h.b(nVar, i11));
            if (rect == null) {
                rect = new Rect(0, 0, nVar.getWidth(), nVar.getHeight());
            }
            if (yuvImage.compressToJpeg(rect, i10, iVar)) {
                return byteArrayOutputStream.toByteArray();
            }
            throw new a("YuvImage failed to encode jpeg.", a.EnumC0368a.ENCODE_FAILED);
        }
        throw new IllegalArgumentException("Incorrect image format of the input image proxy: " + nVar.getFormat());
    }

    public static byte[] m(n nVar) {
        n.a aVar = nVar.c1()[0];
        n.a aVar2 = nVar.c1()[1];
        n.a aVar3 = nVar.c1()[2];
        ByteBuffer e10 = aVar.e();
        ByteBuffer e11 = aVar2.e();
        ByteBuffer e12 = aVar3.e();
        e10.rewind();
        e11.rewind();
        e12.rewind();
        int remaining = e10.remaining();
        byte[] bArr = new byte[((nVar.getWidth() * nVar.getHeight()) / 2) + remaining];
        int i10 = 0;
        for (int i11 = 0; i11 < nVar.getHeight(); i11++) {
            e10.get(bArr, i10, nVar.getWidth());
            i10 += nVar.getWidth();
            e10.position(Math.min(remaining, (e10.position() - nVar.getWidth()) + aVar.f()));
        }
        int height = nVar.getHeight() / 2;
        int width = nVar.getWidth() / 2;
        int f10 = aVar3.f();
        int f11 = aVar2.f();
        int g10 = aVar3.g();
        int g11 = aVar2.g();
        byte[] bArr2 = new byte[f10];
        byte[] bArr3 = new byte[f11];
        for (int i12 = 0; i12 < height; i12++) {
            e12.get(bArr2, 0, Math.min(f10, e12.remaining()));
            e11.get(bArr3, 0, Math.min(f11, e11.remaining()));
            int i13 = 0;
            int i14 = 0;
            for (int i15 = 0; i15 < width; i15++) {
                int i16 = i10 + 1;
                bArr[i10] = bArr2[i13];
                i10 += 2;
                bArr[i16] = bArr3[i14];
                i13 += g10;
                i14 += g11;
            }
        }
        return bArr;
    }
}
