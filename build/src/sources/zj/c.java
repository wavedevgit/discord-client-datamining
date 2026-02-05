package zj;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.YuvImage;
import android.media.Image;
import android.os.Build;
import android.util.Log;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import gf.q;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private static final c f55994a = new c();

    private c() {
    }

    public static ByteBuffer a(ByteBuffer byteBuffer) {
        if (byteBuffer.hasArray()) {
            return byteBuffer;
        }
        byteBuffer.rewind();
        byte[] bArr = new byte[byteBuffer.limit()];
        byteBuffer.get(bArr);
        return ByteBuffer.wrap(bArr);
    }

    public static c f() {
        return f55994a;
    }

    public static Bitmap i(ByteBuffer byteBuffer, int i10, int i11, int i12) {
        byte[] l10 = l(j(byteBuffer, true).array(), i10, i11);
        Bitmap decodeByteArray = BitmapFactory.decodeByteArray(l10, 0, l10.length);
        return k(decodeByteArray, i12, decodeByteArray.getWidth(), decodeByteArray.getHeight());
    }

    public static ByteBuffer j(ByteBuffer byteBuffer, boolean z10) {
        ByteBuffer allocateDirect;
        int i10;
        byteBuffer.rewind();
        int limit = byteBuffer.limit();
        int i11 = limit / 6;
        if (z10) {
            allocateDirect = ByteBuffer.allocate(limit);
        } else {
            allocateDirect = ByteBuffer.allocateDirect(limit);
        }
        int i12 = 0;
        while (true) {
            i10 = i11 * 4;
            if (i12 >= i10) {
                break;
            }
            allocateDirect.put(i12, byteBuffer.get(i12));
            i12++;
        }
        for (int i13 = 0; i13 < i11 + i11; i13++) {
            allocateDirect.put(i10 + i13, byteBuffer.get(((i13 % 2) * i11) + i10 + (i13 / 2)));
        }
        return allocateDirect;
    }

    public static Bitmap k(Bitmap bitmap, int i10, int i11, int i12) {
        if (i10 == 0) {
            return Bitmap.createBitmap(bitmap, 0, 0, i11, i12);
        }
        Matrix matrix = new Matrix();
        matrix.postRotate(i10);
        return Bitmap.createBitmap(bitmap, 0, 0, i11, i12, matrix, true);
    }

    private static byte[] l(byte[] bArr, int i10, int i11) {
        YuvImage yuvImage = new YuvImage(bArr, 17, i10, i11, null);
        try {
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            yuvImage.compressToJpeg(new Rect(0, 0, i10, i11), 100, byteArrayOutputStream);
            byte[] byteArray = byteArrayOutputStream.toByteArray();
            byteArrayOutputStream.close();
            return byteArray;
        } catch (IOException e10) {
            Log.w("ImageConvertUtils", "Error closing ByteArrayOutputStream");
            throw new oj.a("Image conversion error from NV21 format", 13, e10);
        }
    }

    private static final void m(Image.Plane plane, int i10, int i11, byte[] bArr, int i12, int i13) {
        ByteBuffer buffer = plane.getBuffer();
        buffer.rewind();
        int limit = ((buffer.limit() + plane.getRowStride()) - 1) / plane.getRowStride();
        if (limit != 0) {
            int i14 = i10 / (i11 / limit);
            int i15 = 0;
            for (int i16 = 0; i16 < limit; i16++) {
                int i17 = i15;
                for (int i18 = 0; i18 < i14; i18++) {
                    bArr[i12] = buffer.get(i17);
                    i12 += i13;
                    i17 += plane.getPixelStride();
                }
                i15 += plane.getRowStride();
            }
        }
    }

    public byte[] b(ByteBuffer byteBuffer) {
        if (byteBuffer.hasArray() && byteBuffer.arrayOffset() == 0) {
            return byteBuffer.array();
        }
        byteBuffer.rewind();
        int limit = byteBuffer.limit();
        byte[] bArr = new byte[limit];
        byteBuffer.get(bArr, 0, limit);
        return bArr;
    }

    public Bitmap c(Image image, int i10) {
        boolean z10;
        if (image.getFormat() == 256) {
            z10 = true;
        } else {
            z10 = false;
        }
        q.b(z10, "Only JPEG is supported now");
        Image.Plane[] planes = image.getPlanes();
        if (planes != null && planes.length == 1) {
            ByteBuffer buffer = planes[0].getBuffer();
            buffer.rewind();
            int remaining = buffer.remaining();
            byte[] bArr = new byte[remaining];
            buffer.get(bArr);
            Bitmap decodeByteArray = BitmapFactory.decodeByteArray(bArr, 0, remaining);
            return k(decodeByteArray, i10, decodeByteArray.getWidth(), decodeByteArray.getHeight());
        }
        throw new IllegalArgumentException("Unexpected image format, JPEG should have exactly 1 image plane");
    }

    public ByteBuffer d(yj.a aVar, boolean z10) {
        ByteBuffer allocateDirect;
        Bitmap.Config config;
        int g10 = aVar.g();
        if (g10 != -1) {
            if (g10 != 17) {
                if (g10 != 35) {
                    if (g10 == 842094169) {
                        return j((ByteBuffer) q.l(aVar.e()), z10);
                    }
                    throw new oj.a("Unsupported image format", 13);
                }
                return h((Image.Plane[]) q.l(aVar.j()), aVar.l(), aVar.h());
            } else if (z10) {
                return a((ByteBuffer) q.l(aVar.e()));
            } else {
                return (ByteBuffer) q.l(aVar.e());
            }
        }
        Bitmap bitmap = (Bitmap) q.l(aVar.d());
        if (Build.VERSION.SDK_INT >= 26) {
            Bitmap.Config config2 = bitmap.getConfig();
            config = Bitmap.Config.HARDWARE;
            if (config2 == config) {
                bitmap = bitmap.copy(Bitmap.Config.ARGB_8888, bitmap.isMutable());
            }
        }
        Bitmap bitmap2 = bitmap;
        int width = bitmap2.getWidth();
        int height = bitmap2.getHeight();
        int i10 = width * height;
        int[] iArr = new int[i10];
        bitmap2.getPixels(iArr, 0, width, 0, 0, width, height);
        int ceil = (int) Math.ceil(height / 2.0d);
        int ceil2 = ((ceil + ceil) * ((int) Math.ceil(width / 2.0d))) + i10;
        if (z10) {
            allocateDirect = ByteBuffer.allocate(ceil2);
        } else {
            allocateDirect = ByteBuffer.allocateDirect(ceil2);
        }
        int i11 = 0;
        int i12 = 0;
        for (int i13 = 0; i13 < height; i13++) {
            int i14 = 0;
            while (i14 < width) {
                int i15 = iArr[i12];
                int i16 = i15 >> 16;
                int i17 = i15 >> 8;
                int i18 = i15 & SetSpanOperation.SPAN_MAX_PRIORITY;
                int i19 = i11 + 1;
                int i20 = i16 & SetSpanOperation.SPAN_MAX_PRIORITY;
                int i21 = i17 & SetSpanOperation.SPAN_MAX_PRIORITY;
                allocateDirect.put(i11, (byte) Math.min((int) SetSpanOperation.SPAN_MAX_PRIORITY, (((((i20 * 66) + (i21 * 129)) + (i18 * 25)) + IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) >> 8) + 16));
                if (i13 % 2 == 0 && i12 % 2 == 0) {
                    int i22 = i20 * 112;
                    int i23 = ((((i22 - (i21 * 94)) - (i18 * 18)) + IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) >> 8) + IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    int i24 = (((((i20 * (-38)) - (i21 * 74)) + (i18 * 112)) + IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) >> 8) + IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    int i25 = i10 + 1;
                    allocateDirect.put(i10, (byte) Math.min((int) SetSpanOperation.SPAN_MAX_PRIORITY, i23));
                    i10 += 2;
                    allocateDirect.put(i25, (byte) Math.min((int) SetSpanOperation.SPAN_MAX_PRIORITY, i24));
                }
                i12++;
                i14++;
                i11 = i19;
            }
        }
        return allocateDirect;
    }

    public Bitmap e(yj.a aVar) {
        int g10 = aVar.g();
        if (g10 != -1) {
            if (g10 != 17) {
                if (g10 != 35) {
                    if (g10 == 842094169) {
                        return i((ByteBuffer) q.l(aVar.e()), aVar.l(), aVar.h(), aVar.k());
                    }
                    throw new oj.a("Unsupported image format", 13);
                }
                return g(h((Image.Plane[]) q.l(aVar.j()), aVar.l(), aVar.h()), aVar.l(), aVar.h(), aVar.k());
            }
            return g((ByteBuffer) q.l(aVar.e()), aVar.l(), aVar.h(), aVar.k());
        }
        return k((Bitmap) q.l(aVar.d()), aVar.k(), aVar.l(), aVar.h());
    }

    public Bitmap g(ByteBuffer byteBuffer, int i10, int i11, int i12) {
        byte[] l10 = l(b(byteBuffer), i10, i11);
        Bitmap decodeByteArray = BitmapFactory.decodeByteArray(l10, 0, l10.length);
        return k(decodeByteArray, i12, decodeByteArray.getWidth(), decodeByteArray.getHeight());
    }

    public ByteBuffer h(Image.Plane[] planeArr, int i10, int i11) {
        boolean z10;
        int i12 = i10 * i11;
        int i13 = i12 / 4;
        byte[] bArr = new byte[i13 + i13 + i12];
        ByteBuffer buffer = planeArr[1].getBuffer();
        ByteBuffer buffer2 = planeArr[2].getBuffer();
        int position = buffer2.position();
        int limit = buffer.limit();
        buffer2.position(position + 1);
        buffer.limit(limit - 1);
        int i14 = (i12 + i12) / 4;
        if (buffer2.remaining() == i14 - 2 && buffer2.compareTo(buffer) == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        buffer2.position(position);
        buffer.limit(limit);
        if (z10) {
            planeArr[0].getBuffer().get(bArr, 0, i12);
            ByteBuffer buffer3 = planeArr[1].getBuffer();
            planeArr[2].getBuffer().get(bArr, i12, 1);
            buffer3.get(bArr, i12 + 1, i14 - 1);
        } else {
            m(planeArr[0], i10, i11, bArr, 0, 1);
            m(planeArr[1], i10, i11, bArr, i12 + 1, 2);
            m(planeArr[2], i10, i11, bArr, i12, 2);
        }
        return ByteBuffer.wrap(bArr);
    }
}
