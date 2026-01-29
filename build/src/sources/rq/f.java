package rq;

import android.text.TextUtils;
import android.util.Log;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.io.IOException;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f {

    /* renamed from: b  reason: collision with root package name */
    private static final byte[] f48450b = "Exif\u0000\u0000".getBytes(Charset.forName("UTF-8"));

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f48451c = {0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8};

    /* renamed from: a  reason: collision with root package name */
    private final b f48452a;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final ByteBuffer f48453a;

        public a(byte[] bArr, int i10) {
            this.f48453a = (ByteBuffer) ByteBuffer.wrap(bArr).order(ByteOrder.BIG_ENDIAN).limit(i10);
        }

        public short a(int i10) {
            return this.f48453a.getShort(i10);
        }

        public int b(int i10) {
            return this.f48453a.getInt(i10);
        }

        public int c() {
            return this.f48453a.remaining();
        }

        public void d(ByteOrder byteOrder) {
            this.f48453a.order(byteOrder);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        int a();

        int b(byte[] bArr, int i10);

        short c();

        long skip(long j10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class c implements b {

        /* renamed from: a  reason: collision with root package name */
        private final InputStream f48454a;

        public c(InputStream inputStream) {
            this.f48454a = inputStream;
        }

        @Override // rq.f.b
        public int a() {
            return ((this.f48454a.read() << 8) & 65280) | (this.f48454a.read() & SetSpanOperation.SPAN_MAX_PRIORITY);
        }

        @Override // rq.f.b
        public int b(byte[] bArr, int i10) {
            int i11 = i10;
            while (i11 > 0) {
                int read = this.f48454a.read(bArr, i10 - i11, i11);
                if (read == -1) {
                    break;
                }
                i11 -= read;
            }
            return i10 - i11;
        }

        @Override // rq.f.b
        public short c() {
            return (short) (this.f48454a.read() & SetSpanOperation.SPAN_MAX_PRIORITY);
        }

        @Override // rq.f.b
        public long skip(long j10) {
            if (j10 < 0) {
                return 0L;
            }
            long j11 = j10;
            while (j11 > 0) {
                long skip = this.f48454a.skip(j11);
                if (skip <= 0) {
                    if (this.f48454a.read() == -1) {
                        break;
                    }
                    skip = 1;
                }
                j11 -= skip;
            }
            return j10 - j11;
        }
    }

    public f(InputStream inputStream) {
        this.f48452a = new c(inputStream);
    }

    private static int a(int i10, int i11) {
        return i10 + 2 + (i11 * 12);
    }

    public static void b(e3.a aVar, int i10, int i11, String str) {
        String[] strArr = {"FNumber", "DateTime", "DateTimeDigitized", "ExposureTime", "Flash", "FocalLength", "GPSAltitude", "GPSAltitudeRef", "GPSDateStamp", "GPSLatitude", "GPSLatitudeRef", "GPSLongitude", "GPSLongitudeRef", "GPSProcessingMethod", "GPSTimeStamp", "PhotographicSensitivity", "Make", "Model", "SubSecTime", "SubSecTimeDigitized", "SubSecTimeOriginal", "WhiteBalance"};
        try {
            e3.a aVar2 = new e3.a(str);
            for (int i12 = 0; i12 < 22; i12++) {
                String str2 = strArr[i12];
                String k10 = aVar.k(str2);
                if (!TextUtils.isEmpty(k10)) {
                    aVar2.h0(str2, k10);
                }
            }
            aVar2.h0("ImageWidth", String.valueOf(i10));
            aVar2.h0("ImageLength", String.valueOf(i11));
            aVar2.h0("Orientation", "0");
            aVar2.c0();
        } catch (IOException e10) {
            Log.d("ImageHeaderParser", e10.getMessage());
        }
    }

    private static boolean d(int i10) {
        if ((i10 & 65496) != 65496 && i10 != 19789 && i10 != 18761) {
            return false;
        }
        return true;
    }

    private boolean e(byte[] bArr, int i10) {
        boolean z10;
        if (bArr != null && i10 > f48450b.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            int i11 = 0;
            while (true) {
                byte[] bArr2 = f48450b;
                if (i11 >= bArr2.length) {
                    break;
                } else if (bArr[i11] != bArr2[i11]) {
                    return false;
                } else {
                    i11++;
                }
            }
        }
        return z10;
    }

    private int f() {
        short c10;
        short c11;
        int a10;
        long j10;
        long skip;
        do {
            if (this.f48452a.c() != 255) {
                if (Log.isLoggable("ImageHeaderParser", 3)) {
                    Log.d("ImageHeaderParser", "Unknown segmentId=" + ((int) c10));
                }
                return -1;
            }
            c11 = this.f48452a.c();
            if (c11 == 218) {
                return -1;
            }
            if (c11 == 217) {
                if (Log.isLoggable("ImageHeaderParser", 3)) {
                    Log.d("ImageHeaderParser", "Found MARKER_EOI in exif segment");
                }
                return -1;
            }
            a10 = this.f48452a.a() - 2;
            if (c11 != 225) {
                j10 = a10;
                skip = this.f48452a.skip(j10);
            } else {
                return a10;
            }
        } while (skip == j10);
        if (Log.isLoggable("ImageHeaderParser", 3)) {
            Log.d("ImageHeaderParser", "Unable to skip enough data, type: " + ((int) c11) + ", wanted to skip: " + a10 + ", but actually skipped: " + skip);
        }
        return -1;
    }

    private static int g(a aVar) {
        ByteOrder byteOrder;
        short a10 = aVar.a(6);
        if (a10 == 19789) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else if (a10 == 18761) {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        } else {
            if (Log.isLoggable("ImageHeaderParser", 3)) {
                Log.d("ImageHeaderParser", "Unknown endianness = " + ((int) a10));
            }
            byteOrder = ByteOrder.BIG_ENDIAN;
        }
        aVar.d(byteOrder);
        int b10 = aVar.b(10) + 6;
        short a11 = aVar.a(b10);
        for (int i10 = 0; i10 < a11; i10++) {
            int a12 = a(b10, i10);
            short a13 = aVar.a(a12);
            if (a13 == 274) {
                short a14 = aVar.a(a12 + 2);
                if (a14 >= 1 && a14 <= 12) {
                    int b11 = aVar.b(a12 + 4);
                    if (b11 < 0) {
                        if (Log.isLoggable("ImageHeaderParser", 3)) {
                            Log.d("ImageHeaderParser", "Negative tiff component count");
                        }
                    } else {
                        if (Log.isLoggable("ImageHeaderParser", 3)) {
                            Log.d("ImageHeaderParser", "Got tagIndex=" + i10 + " tagType=" + ((int) a13) + " formatCode=" + ((int) a14) + " componentCount=" + b11);
                        }
                        int i11 = b11 + f48451c[a14];
                        if (i11 > 4) {
                            if (Log.isLoggable("ImageHeaderParser", 3)) {
                                Log.d("ImageHeaderParser", "Got byte count > 4, not orientation, continuing, formatCode=" + ((int) a14));
                            }
                        } else {
                            int i12 = a12 + 8;
                            if (i12 >= 0 && i12 <= aVar.c()) {
                                if (i11 >= 0 && i11 + i12 <= aVar.c()) {
                                    return aVar.a(i12);
                                }
                                if (Log.isLoggable("ImageHeaderParser", 3)) {
                                    Log.d("ImageHeaderParser", "Illegal number of bytes for TI tag data tagType=" + ((int) a13));
                                }
                            } else if (Log.isLoggable("ImageHeaderParser", 3)) {
                                Log.d("ImageHeaderParser", "Illegal tagValueOffset=" + i12 + " tagType=" + ((int) a13));
                            }
                        }
                    }
                } else if (Log.isLoggable("ImageHeaderParser", 3)) {
                    Log.d("ImageHeaderParser", "Got invalid format code = " + ((int) a14));
                }
            }
        }
        return -1;
    }

    private int h(byte[] bArr, int i10) {
        int b10 = this.f48452a.b(bArr, i10);
        if (b10 != i10) {
            if (Log.isLoggable("ImageHeaderParser", 3)) {
                Log.d("ImageHeaderParser", "Unable to read exif segment data, length: " + i10 + ", actually read: " + b10);
            }
            return -1;
        } else if (e(bArr, i10)) {
            return g(new a(bArr, i10));
        } else {
            if (Log.isLoggable("ImageHeaderParser", 3)) {
                Log.d("ImageHeaderParser", "Missing jpeg exif preamble");
            }
            return -1;
        }
    }

    public int c() {
        int a10 = this.f48452a.a();
        if (!d(a10)) {
            if (Log.isLoggable("ImageHeaderParser", 3)) {
                Log.d("ImageHeaderParser", "Parser doesn't handle magic number: " + a10);
            }
            return -1;
        }
        int f10 = f();
        if (f10 == -1) {
            if (Log.isLoggable("ImageHeaderParser", 3)) {
                Log.d("ImageHeaderParser", "Failed to parse exif segment length, or exif segment not found");
            }
            return -1;
        }
        return h(new byte[f10], f10);
    }
}
