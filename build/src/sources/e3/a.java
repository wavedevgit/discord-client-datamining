package e3;

import android.content.res.AssetManager;
import android.location.Location;
import android.media.MediaDataSource;
import android.media.MediaMetadataRetriever;
import android.os.Build;
import android.system.Os;
import android.system.OsConstants;
import android.util.Log;
import android.util.Pair;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.ReactFontManager;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import e3.b;
import j$.util.DesugarTimeZone;
import java.io.BufferedInputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataInput;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.EOFException;
import java.io.File;
import java.io.FileDescriptor;
import java.io.FileInputStream;
import java.io.FilterOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.zip.CRC32;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {
    private static final SimpleDateFormat V;
    private static final SimpleDateFormat W;

    /* renamed from: a0  reason: collision with root package name */
    private static final e[] f21266a0;

    /* renamed from: b0  reason: collision with root package name */
    private static final e[] f21267b0;

    /* renamed from: c0  reason: collision with root package name */
    private static final e[] f21268c0;

    /* renamed from: d0  reason: collision with root package name */
    private static final e[] f21269d0;

    /* renamed from: e0  reason: collision with root package name */
    private static final e[] f21270e0;

    /* renamed from: f0  reason: collision with root package name */
    private static final e f21271f0;

    /* renamed from: g0  reason: collision with root package name */
    private static final e[] f21272g0;

    /* renamed from: h0  reason: collision with root package name */
    private static final e[] f21273h0;

    /* renamed from: i0  reason: collision with root package name */
    private static final e[] f21274i0;

    /* renamed from: j0  reason: collision with root package name */
    private static final e[] f21275j0;

    /* renamed from: k0  reason: collision with root package name */
    static final e[][] f21276k0;

    /* renamed from: l0  reason: collision with root package name */
    private static final e[] f21277l0;

    /* renamed from: m0  reason: collision with root package name */
    private static final HashMap[] f21278m0;

    /* renamed from: n0  reason: collision with root package name */
    private static final HashMap[] f21279n0;

    /* renamed from: o0  reason: collision with root package name */
    private static final Set f21280o0;

    /* renamed from: p0  reason: collision with root package name */
    private static final HashMap f21281p0;

    /* renamed from: q0  reason: collision with root package name */
    private static final Charset f21282q0;

    /* renamed from: r0  reason: collision with root package name */
    static final byte[] f21283r0;

    /* renamed from: s0  reason: collision with root package name */
    private static final byte[] f21284s0;

    /* renamed from: t0  reason: collision with root package name */
    private static final Pattern f21285t0;

    /* renamed from: u0  reason: collision with root package name */
    private static final Pattern f21286u0;

    /* renamed from: v0  reason: collision with root package name */
    private static final Pattern f21287v0;

    /* renamed from: w0  reason: collision with root package name */
    private static final Pattern f21289w0;

    /* renamed from: a  reason: collision with root package name */
    private String f21293a;

    /* renamed from: b  reason: collision with root package name */
    private FileDescriptor f21294b;

    /* renamed from: c  reason: collision with root package name */
    private AssetManager.AssetInputStream f21295c;

    /* renamed from: d  reason: collision with root package name */
    private int f21296d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f21297e;

    /* renamed from: f  reason: collision with root package name */
    private final HashMap[] f21298f;

    /* renamed from: g  reason: collision with root package name */
    private Set f21299g;

    /* renamed from: h  reason: collision with root package name */
    private ByteOrder f21300h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f21301i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f21302j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f21303k;

    /* renamed from: l  reason: collision with root package name */
    private int f21304l;

    /* renamed from: m  reason: collision with root package name */
    private int f21305m;

    /* renamed from: n  reason: collision with root package name */
    private byte[] f21306n;

    /* renamed from: o  reason: collision with root package name */
    private int f21307o;

    /* renamed from: p  reason: collision with root package name */
    private int f21308p;

    /* renamed from: q  reason: collision with root package name */
    private int f21309q;

    /* renamed from: r  reason: collision with root package name */
    private int f21310r;

    /* renamed from: s  reason: collision with root package name */
    private int f21311s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f21312t;

    /* renamed from: u  reason: collision with root package name */
    private d f21313u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f21314v;

    /* renamed from: w  reason: collision with root package name */
    private static final boolean f21288w = Log.isLoggable("ExifInterface", 3);

    /* renamed from: x  reason: collision with root package name */
    private static final List f21290x = Arrays.asList(1, 6, 3, 8);

    /* renamed from: y  reason: collision with root package name */
    private static final List f21291y = Arrays.asList(2, 7, 4, 5);

    /* renamed from: z  reason: collision with root package name */
    public static final int[] f21292z = {8, 8, 8};
    public static final int[] A = {4};
    public static final int[] B = {8};
    static final byte[] C = {-1, -40, -1};
    private static final byte[] D = {102, 116, 121, 112};
    private static final byte[] E = {109, 105, 102, 49};
    private static final byte[] F = {104, 101, 105, 99};
    private static final byte[] G = {97, 118, 105, 102};
    private static final byte[] H = {97, 118, 105, 115};
    private static final byte[] I = {79, 76, 89, 77, 80, 0};
    private static final byte[] J = {79, 76, 89, 77, 80, 85, 83, 0, 73, 73};
    private static final byte[] K = {-119, 80, 78, 71, 13, 10, 26, 10};
    static final byte[] L = "XML:com.adobe.xmp\u0000\u0000\u0000\u0000\u0000".getBytes(StandardCharsets.UTF_8);
    private static final byte[] M = {82, 73, 70, 70};
    private static final byte[] N = {87, 69, 66, 80};
    private static final byte[] O = {69, 88, 73, 70};
    private static final byte[] P = {-99, 1, 42};
    private static final byte[] Q = "VP8X".getBytes(Charset.defaultCharset());
    private static final byte[] R = "VP8L".getBytes(Charset.defaultCharset());
    private static final byte[] S = "VP8 ".getBytes(Charset.defaultCharset());
    private static final byte[] T = "ANIM".getBytes(Charset.defaultCharset());
    private static final byte[] U = "ANMF".getBytes(Charset.defaultCharset());
    private static final String[] X = {"", "BYTE", "STRING", "USHORT", "ULONG", "URATIONAL", "SBYTE", "UNDEFINED", "SSHORT", "SLONG", "SRATIONAL", "SINGLE", "DOUBLE", "IFD"};
    private static final int[] Y = {0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 1};
    private static final byte[] Z = {65, 83, 67, 73, 73, 0, 0, 0};

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends FilterOutputStream {

        /* renamed from: d  reason: collision with root package name */
        final DataOutputStream f21323d;

        /* renamed from: e  reason: collision with root package name */
        private ByteOrder f21324e;

        public c(OutputStream outputStream, ByteOrder byteOrder) {
            super(outputStream);
            this.f21323d = new DataOutputStream(outputStream);
            this.f21324e = byteOrder;
        }

        public void B(int i10) {
            if (i10 <= 65535) {
                n((short) i10);
                return;
            }
            throw new IllegalArgumentException("val is larger than the maximum value of a 16-bit unsigned integer");
        }

        public void a(ByteOrder byteOrder) {
            this.f21324e = byteOrder;
        }

        public void h(int i10) {
            this.f21323d.write(i10);
        }

        public void l(int i10) {
            ByteOrder byteOrder = this.f21324e;
            if (byteOrder == ByteOrder.LITTLE_ENDIAN) {
                this.f21323d.write(i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f21323d.write((i10 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f21323d.write((i10 >>> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f21323d.write((i10 >>> 24) & SetSpanOperation.SPAN_MAX_PRIORITY);
            } else if (byteOrder == ByteOrder.BIG_ENDIAN) {
                this.f21323d.write((i10 >>> 24) & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f21323d.write((i10 >>> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f21323d.write((i10 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f21323d.write(i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
            }
        }

        public void n(short s10) {
            ByteOrder byteOrder = this.f21324e;
            if (byteOrder == ByteOrder.LITTLE_ENDIAN) {
                this.f21323d.write(s10 & 255);
                this.f21323d.write((s10 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
            } else if (byteOrder == ByteOrder.BIG_ENDIAN) {
                this.f21323d.write((s10 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f21323d.write(s10 & 255);
            }
        }

        @Override // java.io.FilterOutputStream, java.io.OutputStream
        public void write(byte[] bArr) {
            this.f21323d.write(bArr);
        }

        public void x(long j10) {
            if (j10 <= 4294967295L) {
                l((int) j10);
                return;
            }
            throw new IllegalArgumentException("val is larger than the maximum value of a 32-bit unsigned integer");
        }

        @Override // java.io.FilterOutputStream, java.io.OutputStream
        public void write(byte[] bArr, int i10, int i11) {
            this.f21323d.write(bArr, i10, i11);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        public final int f21325a;

        /* renamed from: b  reason: collision with root package name */
        public final int f21326b;

        /* renamed from: c  reason: collision with root package name */
        public final long f21327c;

        /* renamed from: d  reason: collision with root package name */
        public final byte[] f21328d;

        d(int i10, int i11, byte[] bArr) {
            this(i10, i11, -1L, bArr);
        }

        public static d a(String str) {
            if (str.length() == 1 && str.charAt(0) >= '0' && str.charAt(0) <= '1') {
                return new d(1, 1, new byte[]{(byte) (str.charAt(0) - '0')});
            }
            byte[] bytes = str.getBytes(a.f21282q0);
            return new d(1, bytes.length, bytes);
        }

        public static d b(double[] dArr, ByteOrder byteOrder) {
            ByteBuffer wrap = ByteBuffer.wrap(new byte[a.Y[12] * dArr.length]);
            wrap.order(byteOrder);
            for (double d10 : dArr) {
                wrap.putDouble(d10);
            }
            return new d(12, dArr.length, wrap.array());
        }

        public static d c(int[] iArr, ByteOrder byteOrder) {
            ByteBuffer wrap = ByteBuffer.wrap(new byte[a.Y[9] * iArr.length]);
            wrap.order(byteOrder);
            for (int i10 : iArr) {
                wrap.putInt(i10);
            }
            return new d(9, iArr.length, wrap.array());
        }

        public static d d(f[] fVarArr, ByteOrder byteOrder) {
            ByteBuffer wrap = ByteBuffer.wrap(new byte[a.Y[10] * fVarArr.length]);
            wrap.order(byteOrder);
            for (f fVar : fVarArr) {
                wrap.putInt((int) fVar.f21333a);
                wrap.putInt((int) fVar.f21334b);
            }
            return new d(10, fVarArr.length, wrap.array());
        }

        public static d e(String str) {
            byte[] bytes = (str + (char) 0).getBytes(a.f21282q0);
            return new d(2, bytes.length, bytes);
        }

        public static d f(long j10, ByteOrder byteOrder) {
            return g(new long[]{j10}, byteOrder);
        }

        public static d g(long[] jArr, ByteOrder byteOrder) {
            ByteBuffer wrap = ByteBuffer.wrap(new byte[a.Y[4] * jArr.length]);
            wrap.order(byteOrder);
            for (long j10 : jArr) {
                wrap.putInt((int) j10);
            }
            return new d(4, jArr.length, wrap.array());
        }

        public static d h(f fVar, ByteOrder byteOrder) {
            return i(new f[]{fVar}, byteOrder);
        }

        public static d i(f[] fVarArr, ByteOrder byteOrder) {
            ByteBuffer wrap = ByteBuffer.wrap(new byte[a.Y[5] * fVarArr.length]);
            wrap.order(byteOrder);
            for (f fVar : fVarArr) {
                wrap.putInt((int) fVar.f21333a);
                wrap.putInt((int) fVar.f21334b);
            }
            return new d(5, fVarArr.length, wrap.array());
        }

        public static d j(int i10, ByteOrder byteOrder) {
            return k(new int[]{i10}, byteOrder);
        }

        public static d k(int[] iArr, ByteOrder byteOrder) {
            ByteBuffer wrap = ByteBuffer.wrap(new byte[a.Y[3] * iArr.length]);
            wrap.order(byteOrder);
            for (int i10 : iArr) {
                wrap.putShort((short) i10);
            }
            return new d(3, iArr.length, wrap.array());
        }

        public double l(ByteOrder byteOrder) {
            Object o10 = o(byteOrder);
            if (o10 != null) {
                if (o10 instanceof String) {
                    return Double.parseDouble((String) o10);
                }
                if (o10 instanceof long[]) {
                    long[] jArr = (long[]) o10;
                    if (jArr.length == 1) {
                        return jArr[0];
                    }
                    throw new NumberFormatException("There are more than one component");
                } else if (o10 instanceof int[]) {
                    int[] iArr = (int[]) o10;
                    if (iArr.length == 1) {
                        return iArr[0];
                    }
                    throw new NumberFormatException("There are more than one component");
                } else if (o10 instanceof double[]) {
                    double[] dArr = (double[]) o10;
                    if (dArr.length == 1) {
                        return dArr[0];
                    }
                    throw new NumberFormatException("There are more than one component");
                } else if (o10 instanceof f[]) {
                    f[] fVarArr = (f[]) o10;
                    if (fVarArr.length == 1) {
                        return fVarArr[0].a();
                    }
                    throw new NumberFormatException("There are more than one component");
                } else {
                    throw new NumberFormatException("Couldn't find a double value");
                }
            }
            throw new NumberFormatException("NULL can't be converted to a double value");
        }

        public int m(ByteOrder byteOrder) {
            Object o10 = o(byteOrder);
            if (o10 != null) {
                if (o10 instanceof String) {
                    return Integer.parseInt((String) o10);
                }
                if (o10 instanceof long[]) {
                    long[] jArr = (long[]) o10;
                    if (jArr.length == 1) {
                        return (int) jArr[0];
                    }
                    throw new NumberFormatException("There are more than one component");
                } else if (o10 instanceof int[]) {
                    int[] iArr = (int[]) o10;
                    if (iArr.length == 1) {
                        return iArr[0];
                    }
                    throw new NumberFormatException("There are more than one component");
                } else {
                    throw new NumberFormatException("Couldn't find a integer value");
                }
            }
            throw new NumberFormatException("NULL can't be converted to a integer value");
        }

        public String n(ByteOrder byteOrder) {
            Object o10 = o(byteOrder);
            if (o10 == null) {
                return null;
            }
            if (o10 instanceof String) {
                return (String) o10;
            }
            StringBuilder sb2 = new StringBuilder();
            int i10 = 0;
            if (o10 instanceof long[]) {
                long[] jArr = (long[]) o10;
                while (i10 < jArr.length) {
                    sb2.append(jArr[i10]);
                    i10++;
                    if (i10 != jArr.length) {
                        sb2.append(",");
                    }
                }
                return sb2.toString();
            } else if (o10 instanceof int[]) {
                int[] iArr = (int[]) o10;
                while (i10 < iArr.length) {
                    sb2.append(iArr[i10]);
                    i10++;
                    if (i10 != iArr.length) {
                        sb2.append(",");
                    }
                }
                return sb2.toString();
            } else if (o10 instanceof double[]) {
                double[] dArr = (double[]) o10;
                while (i10 < dArr.length) {
                    sb2.append(dArr[i10]);
                    i10++;
                    if (i10 != dArr.length) {
                        sb2.append(",");
                    }
                }
                return sb2.toString();
            } else if (!(o10 instanceof f[])) {
                return null;
            } else {
                f[] fVarArr = (f[]) o10;
                while (i10 < fVarArr.length) {
                    sb2.append(fVarArr[i10].f21333a);
                    sb2.append('/');
                    sb2.append(fVarArr[i10].f21334b);
                    i10++;
                    if (i10 != fVarArr.length) {
                        sb2.append(",");
                    }
                }
                return sb2.toString();
            }
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Not initialized variable reg: 4, insn: 0x0032: MOVE  (r3 I:??[OBJECT, ARRAY]) = (r4 I:??[OBJECT, ARRAY]), block:B:18:0x0031 */
        /* JADX WARN: Removed duplicated region for block: B:108:0x0163 A[EXC_TOP_SPLITTER, SYNTHETIC] */
        /* JADX WARN: Type inference failed for: r13v21, types: [int[]] */
        /* JADX WARN: Type inference failed for: r13v23, types: [long[]] */
        /* JADX WARN: Type inference failed for: r13v25, types: [e3.a$f[]] */
        /* JADX WARN: Type inference failed for: r13v27, types: [int[]] */
        /* JADX WARN: Type inference failed for: r13v29, types: [int[]] */
        /* JADX WARN: Type inference failed for: r13v31, types: [e3.a$f[]] */
        /* JADX WARN: Type inference failed for: r13v33, types: [double[]] */
        /* JADX WARN: Type inference failed for: r13v36, types: [double[]] */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        java.lang.Object o(java.nio.ByteOrder r13) {
            /*
                Method dump skipped, instructions count: 392
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: e3.a.d.o(java.nio.ByteOrder):java.lang.Object");
        }

        public int p() {
            return a.Y[this.f21325a] * this.f21326b;
        }

        public String toString() {
            return "(" + a.X[this.f21325a] + ", data length:" + this.f21328d.length + ")";
        }

        d(int i10, int i11, long j10, byte[] bArr) {
            this.f21325a = i10;
            this.f21326b = i11;
            this.f21327c = j10;
            this.f21328d = bArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class f {

        /* renamed from: a  reason: collision with root package name */
        public final long f21333a;

        /* renamed from: b  reason: collision with root package name */
        public final long f21334b;

        /* synthetic */ f(long j10, long j11, C0275a c0275a) {
            this(j10, j11);
        }

        public static f b(double d10) {
            long j10;
            long j11;
            long j12;
            long j13 = 1;
            if (d10 < 9.223372036854776E18d && d10 > -9.223372036854776E18d) {
                double abs = Math.abs(d10);
                long j14 = 0;
                long j15 = 1;
                double d11 = abs;
                long j16 = 0;
                while (true) {
                    double d12 = d11 % 1.0d;
                    long j17 = (long) (d11 - d12);
                    j11 = j16 + (j17 * j13);
                    j12 = (j17 * j14) + j15;
                    d11 = 1.0d / d12;
                    long j18 = j13;
                    if (Math.abs(abs - (j11 / j12)) <= 1.0E-8d * abs) {
                        break;
                    }
                    j15 = j14;
                    j13 = j11;
                    j16 = j18;
                    j14 = j12;
                }
                if (d10 < 0.0d) {
                    j11 = -j11;
                }
                return new f(j11, j12);
            }
            if (d10 > 0.0d) {
                j10 = LongCompanionObject.MAX_VALUE;
            } else {
                j10 = Long.MIN_VALUE;
            }
            return new f(j10, 1L);
        }

        public double a() {
            return this.f21333a / this.f21334b;
        }

        public String toString() {
            return this.f21333a + "/" + this.f21334b;
        }

        private f(long j10, long j11) {
            if (j11 == 0) {
                this.f21333a = 0L;
                this.f21334b = 1L;
                return;
            }
            this.f21333a = j10;
            this.f21334b = j11;
        }
    }

    static {
        e[] eVarArr;
        e[] eVarArr2 = {new e("NewSubfileType", 254, 4), new e("SubfileType", SetSpanOperation.SPAN_MAX_PRIORITY, 4), new e("ImageWidth", IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, 3, 4), new e("ImageLength", 257, 3, 4), new e("BitsPerSample", 258, 3), new e("Compression", 259, 3), new e("PhotometricInterpretation", 262, 3), new e("ImageDescription", 270, 2), new e("Make", 271, 2), new e("Model", 272, 2), new e("StripOffsets", 273, 3, 4), new e("Orientation", 274, 3), new e("SamplesPerPixel", 277, 3), new e("RowsPerStrip", 278, 3, 4), new e("StripByteCounts", 279, 3, 4), new e("XResolution", 282, 5), new e("YResolution", 283, 5), new e("PlanarConfiguration", 284, 3), new e("ResolutionUnit", 296, 3), new e("TransferFunction", 301, 3), new e("Software", 305, 2), new e("DateTime", 306, 2), new e("Artist", 315, 2), new e("WhitePoint", 318, 5), new e("PrimaryChromaticities", 319, 5), new e("SubIFDPointer", 330, 4), new e("JPEGInterchangeFormat", 513, 4), new e("JPEGInterchangeFormatLength", 514, 4), new e("YCbCrCoefficients", 529, 5), new e("YCbCrSubSampling", 530, 3), new e("YCbCrPositioning", 531, 3), new e("ReferenceBlackWhite", 532, 5), new e("Copyright", 33432, 2), new e("ExifIFDPointer", 34665, 4), new e("GPSInfoIFDPointer", 34853, 4), new e("SensorTopBorder", 4, 4), new e("SensorLeftBorder", 5, 4), new e("SensorBottomBorder", 6, 4), new e("SensorRightBorder", 7, 4), new e("ISO", 23, 3), new e("JpgFromRaw", 46, 7), new e("Xmp", ReactFontManager.TypefaceStyle.BOLD, 1)};
        f21266a0 = eVarArr2;
        e[] eVarArr3 = {new e("ExposureTime", 33434, 5), new e("FNumber", 33437, 5), new e("ExposureProgram", 34850, 3), new e("SpectralSensitivity", 34852, 2), new e("PhotographicSensitivity", 34855, 3), new e("OECF", 34856, 7), new e("SensitivityType", 34864, 3), new e("StandardOutputSensitivity", 34865, 4), new e("RecommendedExposureIndex", 34866, 4), new e("ISOSpeed", 34867, 4), new e("ISOSpeedLatitudeyyy", 34868, 4), new e("ISOSpeedLatitudezzz", 34869, 4), new e("ExifVersion", 36864, 2), new e("DateTimeOriginal", 36867, 2), new e("DateTimeDigitized", 36868, 2), new e("OffsetTime", 36880, 2), new e("OffsetTimeOriginal", 36881, 2), new e("OffsetTimeDigitized", 36882, 2), new e("ComponentsConfiguration", 37121, 7), new e("CompressedBitsPerPixel", 37122, 5), new e("ShutterSpeedValue", 37377, 10), new e("ApertureValue", 37378, 5), new e("BrightnessValue", 37379, 10), new e("ExposureBiasValue", 37380, 10), new e("MaxApertureValue", 37381, 5), new e("SubjectDistance", 37382, 5), new e("MeteringMode", 37383, 3), new e("LightSource", 37384, 3), new e("Flash", 37385, 3), new e("FocalLength", 37386, 5), new e("SubjectArea", 37396, 3), new e("MakerNote", 37500, 7), new e("UserComment", 37510, 7), new e("SubSecTime", 37520, 2), new e("SubSecTimeOriginal", 37521, 2), new e("SubSecTimeDigitized", 37522, 2), new e("FlashpixVersion", 40960, 7), new e("ColorSpace", 40961, 3), new e("PixelXDimension", 40962, 3, 4), new e("PixelYDimension", 40963, 3, 4), new e("RelatedSoundFile", 40964, 2), new e("InteroperabilityIFDPointer", 40965, 4), new e("FlashEnergy", 41483, 5), new e("SpatialFrequencyResponse", 41484, 7), new e("FocalPlaneXResolution", 41486, 5), new e("FocalPlaneYResolution", 41487, 5), new e("FocalPlaneResolutionUnit", 41488, 3), new e("SubjectLocation", 41492, 3), new e("ExposureIndex", 41493, 5), new e("SensingMethod", 41495, 3), new e("FileSource", 41728, 7), new e("SceneType", 41729, 7), new e("CFAPattern", 41730, 7), new e("CustomRendered", 41985, 3), new e("ExposureMode", 41986, 3), new e("WhiteBalance", 41987, 3), new e("DigitalZoomRatio", 41988, 5), new e("FocalLengthIn35mmFilm", 41989, 3), new e("SceneCaptureType", 41990, 3), new e("GainControl", 41991, 3), new e("Contrast", 41992, 3), new e("Saturation", 41993, 3), new e("Sharpness", 41994, 3), new e("DeviceSettingDescription", 41995, 7), new e("SubjectDistanceRange", 41996, 3), new e("ImageUniqueID", 42016, 2), new e("CameraOwnerName", 42032, 2), new e("BodySerialNumber", 42033, 2), new e("LensSpecification", 42034, 5), new e("LensMake", 42035, 2), new e("LensModel", 42036, 2), new e("Gamma", 42240, 5), new e("DNGVersion", 50706, 1), new e("DefaultCropSize", 50720, 3, 4)};
        f21267b0 = eVarArr3;
        e[] eVarArr4 = {new e("GPSVersionID", 0, 1), new e("GPSLatitudeRef", 1, 2), new e("GPSLatitude", 2, 5, 10), new e("GPSLongitudeRef", 3, 2), new e("GPSLongitude", 4, 5, 10), new e("GPSAltitudeRef", 5, 1), new e("GPSAltitude", 6, 5), new e("GPSTimeStamp", 7, 5), new e("GPSSatellites", 8, 2), new e("GPSStatus", 9, 2), new e("GPSMeasureMode", 10, 2), new e("GPSDOP", 11, 5), new e("GPSSpeedRef", 12, 2), new e("GPSSpeed", 13, 5), new e("GPSTrackRef", 14, 2), new e("GPSTrack", 15, 5), new e("GPSImgDirectionRef", 16, 2), new e("GPSImgDirection", 17, 5), new e("GPSMapDatum", 18, 2), new e("GPSDestLatitudeRef", 19, 2), new e("GPSDestLatitude", 20, 5), new e("GPSDestLongitudeRef", 21, 2), new e("GPSDestLongitude", 22, 5), new e("GPSDestBearingRef", 23, 2), new e("GPSDestBearing", 24, 5), new e("GPSDestDistanceRef", 25, 2), new e("GPSDestDistance", 26, 5), new e("GPSProcessingMethod", 27, 7), new e("GPSAreaInformation", 28, 7), new e("GPSDateStamp", 29, 2), new e("GPSDifferential", 30, 3), new e("GPSHPositioningError", 31, 5)};
        f21268c0 = eVarArr4;
        e[] eVarArr5 = {new e("InteroperabilityIndex", 1, 2)};
        f21269d0 = eVarArr5;
        e[] eVarArr6 = {new e("NewSubfileType", 254, 4), new e("SubfileType", SetSpanOperation.SPAN_MAX_PRIORITY, 4), new e("ThumbnailImageWidth", IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, 3, 4), new e("ThumbnailImageLength", 257, 3, 4), new e("BitsPerSample", 258, 3), new e("Compression", 259, 3), new e("PhotometricInterpretation", 262, 3), new e("ImageDescription", 270, 2), new e("Make", 271, 2), new e("Model", 272, 2), new e("StripOffsets", 273, 3, 4), new e("ThumbnailOrientation", 274, 3), new e("SamplesPerPixel", 277, 3), new e("RowsPerStrip", 278, 3, 4), new e("StripByteCounts", 279, 3, 4), new e("XResolution", 282, 5), new e("YResolution", 283, 5), new e("PlanarConfiguration", 284, 3), new e("ResolutionUnit", 296, 3), new e("TransferFunction", 301, 3), new e("Software", 305, 2), new e("DateTime", 306, 2), new e("Artist", 315, 2), new e("WhitePoint", 318, 5), new e("PrimaryChromaticities", 319, 5), new e("SubIFDPointer", 330, 4), new e("JPEGInterchangeFormat", 513, 4), new e("JPEGInterchangeFormatLength", 514, 4), new e("YCbCrCoefficients", 529, 5), new e("YCbCrSubSampling", 530, 3), new e("YCbCrPositioning", 531, 3), new e("ReferenceBlackWhite", 532, 5), new e("Copyright", 33432, 2), new e("ExifIFDPointer", 34665, 4), new e("GPSInfoIFDPointer", 34853, 4), new e("DNGVersion", 50706, 1), new e("DefaultCropSize", 50720, 3, 4)};
        f21270e0 = eVarArr6;
        f21271f0 = new e("StripOffsets", 273, 3);
        e[] eVarArr7 = {new e("ThumbnailImage", IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, 7), new e("CameraSettingsIFDPointer", 8224, 4), new e("ImageProcessingIFDPointer", 8256, 4)};
        f21272g0 = eVarArr7;
        e[] eVarArr8 = {new e("PreviewImageStart", 257, 4), new e("PreviewImageLength", 258, 4)};
        f21273h0 = eVarArr8;
        e[] eVarArr9 = {new e("AspectFrame", 4371, 3)};
        f21274i0 = eVarArr9;
        e[] eVarArr10 = {new e("ColorSpace", 55, 3)};
        f21275j0 = eVarArr10;
        e[][] eVarArr11 = {eVarArr2, eVarArr3, eVarArr4, eVarArr5, eVarArr6, eVarArr2, eVarArr7, eVarArr8, eVarArr9, eVarArr10};
        f21276k0 = eVarArr11;
        f21277l0 = new e[]{new e("SubIFDPointer", 330, 4), new e("ExifIFDPointer", 34665, 4), new e("GPSInfoIFDPointer", 34853, 4), new e("InteroperabilityIFDPointer", 40965, 4), new e("CameraSettingsIFDPointer", 8224, 1), new e("ImageProcessingIFDPointer", 8256, 1)};
        f21278m0 = new HashMap[eVarArr11.length];
        f21279n0 = new HashMap[eVarArr11.length];
        f21280o0 = Collections.unmodifiableSet(new HashSet(Arrays.asList("FNumber", "DigitalZoomRatio", "ExposureTime", "SubjectDistance")));
        f21281p0 = new HashMap();
        Charset forName = Charset.forName("US-ASCII");
        f21282q0 = forName;
        f21283r0 = "Exif\u0000\u0000".getBytes(forName);
        f21284s0 = "http://ns.adobe.com/xap/1.0/\u0000".getBytes(forName);
        Locale locale = Locale.US;
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy:MM:dd HH:mm:ss", locale);
        V = simpleDateFormat;
        simpleDateFormat.setTimeZone(DesugarTimeZone.getTimeZone("UTC"));
        SimpleDateFormat simpleDateFormat2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", locale);
        W = simpleDateFormat2;
        simpleDateFormat2.setTimeZone(DesugarTimeZone.getTimeZone("UTC"));
        int i10 = 0;
        while (true) {
            e[][] eVarArr12 = f21276k0;
            if (i10 < eVarArr12.length) {
                f21278m0[i10] = new HashMap();
                f21279n0[i10] = new HashMap();
                for (e eVar : eVarArr12[i10]) {
                    f21278m0[i10].put(Integer.valueOf(eVar.f21329a), eVar);
                    f21279n0[i10].put(eVar.f21330b, eVar);
                }
                i10++;
            } else {
                HashMap hashMap = f21281p0;
                e[] eVarArr13 = f21277l0;
                hashMap.put(Integer.valueOf(eVarArr13[0].f21329a), 5);
                hashMap.put(Integer.valueOf(eVarArr13[1].f21329a), 1);
                hashMap.put(Integer.valueOf(eVarArr13[2].f21329a), 2);
                hashMap.put(Integer.valueOf(eVarArr13[3].f21329a), 3);
                hashMap.put(Integer.valueOf(eVarArr13[4].f21329a), 7);
                hashMap.put(Integer.valueOf(eVarArr13[5].f21329a), 8);
                f21285t0 = Pattern.compile(".*[1-9].*");
                f21286u0 = Pattern.compile("^(\\d{2}):(\\d{2}):(\\d{2})$");
                f21287v0 = Pattern.compile("^(\\d{4}):(\\d{2}):(\\d{2})\\s(\\d{2}):(\\d{2}):(\\d{2})$");
                f21289w0 = Pattern.compile("^(\\d{4})-(\\d{2})-(\\d{2})\\s(\\d{2}):(\\d{2}):(\\d{2})$");
                return;
            }
        }
    }

    public a(File file) {
        e[][] eVarArr = f21276k0;
        this.f21298f = new HashMap[eVarArr.length];
        this.f21299g = new HashSet(eVarArr.length);
        this.f21300h = ByteOrder.BIG_ENDIAN;
        if (file != null) {
            G(file.getAbsolutePath());
            return;
        }
        throw new NullPointerException("file cannot be null");
    }

    private void B(b bVar) {
        if (f21288w) {
            Log.d("ExifInterface", "getWebpAttributes starting with: " + bVar);
        }
        bVar.x(ByteOrder.LITTLE_ENDIAN);
        bVar.B(M.length);
        int readInt = bVar.readInt() + 8;
        byte[] bArr = N;
        bVar.B(bArr.length);
        int length = bArr.length + 8;
        while (true) {
            try {
                byte[] bArr2 = new byte[4];
                bVar.readFully(bArr2);
                int readInt2 = bVar.readInt();
                int i10 = length + 8;
                if (Arrays.equals(O, bArr2)) {
                    byte[] bArr3 = new byte[readInt2];
                    bVar.readFully(bArr3);
                    byte[] bArr4 = f21283r0;
                    if (e3.b.f(bArr3, bArr4)) {
                        bArr3 = Arrays.copyOfRange(bArr3, bArr4.length, readInt2);
                    }
                    this.f21308p = i10;
                    X(bArr3, 0);
                    k0(new b(bArr3));
                    return;
                }
                if (readInt2 % 2 == 1) {
                    readInt2++;
                }
                length = i10 + readInt2;
                if (length == readInt) {
                    return;
                }
                if (length <= readInt) {
                    bVar.B(readInt2);
                } else {
                    throw new IOException("Encountered WebP file with invalid chunk size");
                }
            } catch (EOFException e10) {
                throw new IOException("Encountered corrupt WebP file.", e10);
            }
        }
    }

    private static int C(int i10) {
        if (i10 != 4) {
            if (i10 != 9 && i10 != 15 && i10 != 12 && i10 != 13) {
                return 1;
            }
            return 2;
        }
        return 3;
    }

    private static Pair D(String str) {
        int intValue;
        int i10;
        if (str.contains(",")) {
            String[] split = str.split(",", -1);
            Pair D2 = D(split[0]);
            if (((Integer) D2.first).intValue() == 2) {
                return D2;
            }
            for (int i11 = 1; i11 < split.length; i11++) {
                Pair D3 = D(split[i11]);
                if (!((Integer) D3.first).equals(D2.first) && !((Integer) D3.second).equals(D2.first)) {
                    intValue = -1;
                } else {
                    intValue = ((Integer) D2.first).intValue();
                }
                if (((Integer) D2.second).intValue() != -1 && (((Integer) D3.first).equals(D2.second) || ((Integer) D3.second).equals(D2.second))) {
                    i10 = ((Integer) D2.second).intValue();
                } else {
                    i10 = -1;
                }
                if (intValue == -1 && i10 == -1) {
                    return new Pair(2, -1);
                }
                if (intValue == -1) {
                    D2 = new Pair(Integer.valueOf(i10), -1);
                } else if (i10 == -1) {
                    D2 = new Pair(Integer.valueOf(intValue), -1);
                }
            }
            return D2;
        } else if (str.contains("/")) {
            String[] split2 = str.split("/", -1);
            if (split2.length == 2) {
                try {
                    long parseDouble = (long) Double.parseDouble(split2[0]);
                    long parseDouble2 = (long) Double.parseDouble(split2[1]);
                    if (parseDouble >= 0 && parseDouble2 >= 0) {
                        if (parseDouble <= 2147483647L && parseDouble2 <= 2147483647L) {
                            return new Pair(10, 5);
                        }
                        return new Pair(5, -1);
                    }
                    return new Pair(10, -1);
                } catch (NumberFormatException unused) {
                }
            }
            return new Pair(2, -1);
        } else {
            try {
                try {
                    long parseLong = Long.parseLong(str);
                    int i12 = (parseLong > 0L ? 1 : (parseLong == 0L ? 0 : -1));
                    if (i12 >= 0 && parseLong <= 65535) {
                        return new Pair(3, 4);
                    }
                    if (i12 < 0) {
                        return new Pair(9, -1);
                    }
                    return new Pair(4, -1);
                } catch (NumberFormatException unused2) {
                    return new Pair(2, -1);
                }
            } catch (NumberFormatException unused3) {
                Double.parseDouble(str);
                return new Pair(12, -1);
            }
        }
    }

    private void E(b bVar, HashMap hashMap) {
        d dVar = (d) hashMap.get("JPEGInterchangeFormat");
        d dVar2 = (d) hashMap.get("JPEGInterchangeFormatLength");
        if (dVar != null && dVar2 != null) {
            int m10 = dVar.m(this.f21300h);
            int m11 = dVar2.m(this.f21300h);
            if (this.f21296d == 7) {
                m10 += this.f21309q;
            }
            if (m10 > 0 && m11 > 0) {
                this.f21301i = true;
                if (this.f21293a == null && this.f21295c == null && this.f21294b == null) {
                    byte[] bArr = new byte[m11];
                    bVar.B(m10);
                    bVar.readFully(bArr);
                    this.f21306n = bArr;
                }
                this.f21304l = m10;
                this.f21305m = m11;
            }
            if (f21288w) {
                Log.d("ExifInterface", "Setting thumbnail attributes with offset: " + m10 + ", length: " + m11);
            }
        }
    }

    private void F(b bVar, HashMap hashMap) {
        int i10;
        d dVar = (d) hashMap.get("StripOffsets");
        d dVar2 = (d) hashMap.get("StripByteCounts");
        if (dVar != null && dVar2 != null) {
            long[] c10 = e3.b.c(dVar.o(this.f21300h));
            long[] c11 = e3.b.c(dVar2.o(this.f21300h));
            if (c10 != null && c10.length != 0) {
                if (c11 != null && c11.length != 0) {
                    if (c10.length != c11.length) {
                        Log.w("ExifInterface", "stripOffsets and stripByteCounts should have same length.");
                        return;
                    }
                    long j10 = 0;
                    for (long j11 : c11) {
                        j10 += j11;
                    }
                    int i11 = (int) j10;
                    byte[] bArr = new byte[i11];
                    int i12 = 1;
                    this.f21303k = true;
                    this.f21302j = true;
                    this.f21301i = true;
                    int i13 = 0;
                    int i14 = 0;
                    int i15 = 0;
                    while (i13 < c10.length) {
                        int i16 = (int) c10[i13];
                        int i17 = (int) c11[i13];
                        if (i13 < c10.length - i12) {
                            i10 = i13;
                            if (i16 + i17 != c10[i10 + 1]) {
                                this.f21303k = false;
                            }
                        } else {
                            i10 = i13;
                        }
                        int i18 = i16 - i14;
                        if (i18 < 0) {
                            Log.d("ExifInterface", "Invalid strip offset value");
                            return;
                        }
                        try {
                            bVar.B(i18);
                            int i19 = i14 + i18;
                            byte[] bArr2 = new byte[i17];
                            try {
                                bVar.readFully(bArr2);
                                i14 = i19 + i17;
                                System.arraycopy(bArr2, 0, bArr, i15, i17);
                                i15 += i17;
                                i13 = i10 + 1;
                                i12 = 1;
                            } catch (EOFException unused) {
                                Log.d("ExifInterface", "Failed to read " + i17 + " bytes.");
                                return;
                            }
                        } catch (EOFException unused2) {
                            Log.d("ExifInterface", "Failed to skip " + i18 + " bytes.");
                            return;
                        }
                    }
                    this.f21306n = bArr;
                    if (this.f21303k) {
                        this.f21304l = (int) c10[0];
                        this.f21305m = i11;
                        return;
                    }
                    return;
                }
                Log.w("ExifInterface", "stripByteCounts should not be null or have zero length.");
                return;
            }
            Log.w("ExifInterface", "stripOffsets should not be null or have zero length.");
        }
    }

    private void G(String str) {
        FileInputStream fileInputStream;
        if (str != null) {
            FileInputStream fileInputStream2 = null;
            this.f21295c = null;
            this.f21293a = str;
            try {
                fileInputStream = new FileInputStream(str);
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                if (O(fileInputStream.getFD())) {
                    this.f21294b = fileInputStream.getFD();
                } else {
                    this.f21294b = null;
                }
                T(fileInputStream);
                e3.b.b(fileInputStream);
                return;
            } catch (Throwable th3) {
                th = th3;
                fileInputStream2 = fileInputStream;
                e3.b.b(fileInputStream2);
                throw th;
            }
        }
        throw new NullPointerException("filename cannot be null");
    }

    private int I(byte[] bArr) {
        b bVar;
        long readInt;
        byte[] bArr2;
        long j10;
        b bVar2 = null;
        try {
            try {
                bVar = new b(bArr);
            } catch (Exception e10) {
                e = e10;
            }
        } catch (Throwable th2) {
            th = th2;
        }
        try {
            readInt = bVar.readInt();
            bArr2 = new byte[4];
            bVar.readFully(bArr2);
        } catch (Exception e11) {
            e = e11;
            bVar2 = bVar;
            if (f21288w) {
                Log.d("ExifInterface", "Exception parsing HEIF file type box.", e);
            }
            if (bVar2 != null) {
                bVar2.close();
            }
            return 0;
        } catch (Throwable th3) {
            th = th3;
            bVar2 = bVar;
            if (bVar2 != null) {
                bVar2.close();
            }
            throw th;
        }
        if (!Arrays.equals(bArr2, D)) {
            bVar.close();
            return 0;
        }
        if (readInt == 1) {
            readInt = bVar.readLong();
            j10 = 16;
            if (readInt < 16) {
                bVar.close();
                return 0;
            }
        } else {
            j10 = 8;
        }
        if (readInt > bArr.length) {
            readInt = bArr.length;
        }
        long j11 = readInt - j10;
        if (j11 < 8) {
            bVar.close();
            return 0;
        }
        byte[] bArr3 = new byte[4];
        boolean z10 = false;
        boolean z11 = false;
        boolean z12 = false;
        for (long j12 = 0; j12 < j11 / 4; j12++) {
            try {
                bVar.readFully(bArr3);
                if (j12 != 1) {
                    if (Arrays.equals(bArr3, E)) {
                        z10 = true;
                    } else if (Arrays.equals(bArr3, F)) {
                        z11 = true;
                    } else if (Arrays.equals(bArr3, G) || Arrays.equals(bArr3, H)) {
                        z12 = true;
                    }
                    if (!z10) {
                        continue;
                    } else if (z11) {
                        bVar.close();
                        return 12;
                    } else if (z12) {
                        bVar.close();
                        return 15;
                    }
                }
            } catch (EOFException unused) {
                bVar.close();
                return 0;
            }
        }
        bVar.close();
        return 0;
    }

    private static boolean J(byte[] bArr) {
        int i10 = 0;
        while (true) {
            byte[] bArr2 = C;
            if (i10 < bArr2.length) {
                if (bArr[i10] != bArr2[i10]) {
                    return false;
                }
                i10++;
            } else {
                return true;
            }
        }
    }

    private boolean K(byte[] bArr) {
        boolean z10 = false;
        b bVar = null;
        try {
            b bVar2 = new b(bArr);
            try {
                ByteOrder W2 = W(bVar2);
                this.f21300h = W2;
                bVar2.x(W2);
                short readShort = bVar2.readShort();
                z10 = (readShort == 20306 || readShort == 21330) ? true : true;
                bVar2.close();
                return z10;
            } catch (Exception unused) {
                bVar = bVar2;
                if (bVar != null) {
                    bVar.close();
                }
                return false;
            } catch (Throwable th2) {
                th = th2;
                bVar = bVar2;
                if (bVar != null) {
                    bVar.close();
                }
                throw th;
            }
        } catch (Exception unused2) {
        } catch (Throwable th3) {
            th = th3;
        }
    }

    private boolean L(byte[] bArr) {
        int i10 = 0;
        while (true) {
            byte[] bArr2 = K;
            if (i10 < bArr2.length) {
                if (bArr[i10] != bArr2[i10]) {
                    return false;
                }
                i10++;
            } else {
                return true;
            }
        }
    }

    private boolean M(byte[] bArr) {
        byte[] bytes = "FUJIFILMCCD-RAW".getBytes(Charset.defaultCharset());
        for (int i10 = 0; i10 < bytes.length; i10++) {
            if (bArr[i10] != bytes[i10]) {
                return false;
            }
        }
        return true;
    }

    private boolean N(byte[] bArr) {
        boolean z10 = false;
        b bVar = null;
        try {
            b bVar2 = new b(bArr);
            try {
                ByteOrder W2 = W(bVar2);
                this.f21300h = W2;
                bVar2.x(W2);
                if (bVar2.readShort() == 85) {
                    z10 = true;
                }
                bVar2.close();
                return z10;
            } catch (Exception unused) {
                bVar = bVar2;
                if (bVar != null) {
                    bVar.close();
                }
                return false;
            } catch (Throwable th2) {
                th = th2;
                bVar = bVar2;
                if (bVar != null) {
                    bVar.close();
                }
                throw th;
            }
        } catch (Exception unused2) {
        } catch (Throwable th3) {
            th = th3;
        }
    }

    private static boolean O(FileDescriptor fileDescriptor) {
        try {
            Os.lseek(fileDescriptor, 0L, OsConstants.SEEK_CUR);
            return true;
        } catch (Exception unused) {
            if (f21288w) {
                Log.d("ExifInterface", "The file descriptor for the given input is not seekable");
                return false;
            }
            return false;
        }
    }

    private boolean P(HashMap hashMap) {
        d dVar;
        int m10;
        d dVar2 = (d) hashMap.get("BitsPerSample");
        if (dVar2 != null) {
            int[] iArr = (int[]) dVar2.o(this.f21300h);
            int[] iArr2 = f21292z;
            if (Arrays.equals(iArr2, iArr)) {
                return true;
            }
            if (this.f21296d == 3 && (dVar = (d) hashMap.get("PhotometricInterpretation")) != null && (((m10 = dVar.m(this.f21300h)) == 1 && Arrays.equals(iArr, B)) || (m10 == 6 && Arrays.equals(iArr, iArr2)))) {
                return true;
            }
        }
        if (f21288w) {
            Log.d("ExifInterface", "Unsupported data type value");
            return false;
        }
        return false;
    }

    private static boolean Q(int i10) {
        if (i10 != 4 && i10 != 13 && i10 != 14) {
            return false;
        }
        return true;
    }

    private boolean R(HashMap hashMap) {
        d dVar = (d) hashMap.get("ImageLength");
        d dVar2 = (d) hashMap.get("ImageWidth");
        if (dVar != null && dVar2 != null) {
            int m10 = dVar.m(this.f21300h);
            int m11 = dVar2.m(this.f21300h);
            if (m10 <= 512 && m11 <= 512) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean S(byte[] bArr) {
        int i10 = 0;
        while (true) {
            byte[] bArr2 = M;
            if (i10 < bArr2.length) {
                if (bArr[i10] != bArr2[i10]) {
                    return false;
                }
                i10++;
            } else {
                int i11 = 0;
                while (true) {
                    byte[] bArr3 = N;
                    if (i11 < bArr3.length) {
                        if (bArr[M.length + i11 + 4] != bArr3[i11]) {
                            return false;
                        }
                        i11++;
                    } else {
                        return true;
                    }
                }
            }
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:57:0x00af A[Catch: all -> 0x0013, TRY_LEAVE, TryCatch #2 {all -> 0x0013, blocks: (B:3:0x0002, B:5:0x0007, B:12:0x001c, B:14:0x0020, B:15:0x002e, B:17:0x0036, B:19:0x003f, B:38:0x0071, B:25:0x0050, B:32:0x005e, B:35:0x0066, B:36:0x006a, B:37:0x006e, B:39:0x007b, B:41:0x0085, B:44:0x008d, B:47:0x0095, B:50:0x009d, B:55:0x00ab, B:57:0x00af), top: B:66:0x0002 }] */
    /* JADX WARN: Removed duplicated region for block: B:60:0x00bb  */
    /* JADX WARN: Removed duplicated region for block: B:70:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void T(java.io.InputStream r5) {
        /*
            r4 = this;
            r0 = 0
            r1 = r0
        L2:
            e3.a$e[][] r2 = e3.a.f21276k0     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            int r2 = r2.length     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            if (r1 >= r2) goto L1c
            java.util.HashMap[] r2 = r4.f21298f     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            java.util.HashMap r3 = new java.util.HashMap     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            r3.<init>()     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            r2[r1] = r3     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            int r1 = r1 + 1
            goto L2
        L13:
            r5 = move-exception
            goto Lbf
        L16:
            r5 = move-exception
            goto Lab
        L19:
            r5 = move-exception
            goto Lab
        L1c:
            boolean r1 = r4.f21297e     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            if (r1 != 0) goto L2e
            java.io.BufferedInputStream r1 = new java.io.BufferedInputStream     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            r2 = 5000(0x1388, float:7.006E-42)
            r1.<init>(r5, r2)     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            int r5 = r4.r(r1)     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            r4.f21296d = r5     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            r5 = r1
        L2e:
            int r1 = r4.f21296d     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            boolean r1 = l0(r1)     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            if (r1 == 0) goto L7b
            e3.a$g r0 = new e3.a$g     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            r0.<init>(r5)     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            boolean r5 = r4.f21297e     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            if (r5 == 0) goto L50
            boolean r5 = r4.y(r0)     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            if (r5 != 0) goto L71
            r4.e()
            boolean r5 = e3.a.f21288w
            if (r5 == 0) goto Lbe
            r4.V()
            return
        L50:
            int r5 = r4.f21296d     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            r1 = 12
            if (r5 == r1) goto L6e
            r1 = 15
            if (r5 != r1) goto L5b
            goto L6e
        L5b:
            r1 = 7
            if (r5 != r1) goto L62
            r4.s(r0)     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            goto L71
        L62:
            r1 = 10
            if (r5 != r1) goto L6a
            r4.x(r0)     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            goto L71
        L6a:
            r4.v(r0)     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            goto L71
        L6e:
            r4.o(r0, r5)     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
        L71:
            int r5 = r4.f21308p     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            long r1 = (long) r5     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            r0.E(r1)     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            r4.k0(r0)     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            goto La0
        L7b:
            e3.a$b r1 = new e3.a$b     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            r1.<init>(r5)     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            int r5 = r4.f21296d     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            r2 = 4
            if (r5 != r2) goto L89
            r4.p(r1, r0, r0)     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            goto La0
        L89:
            r0 = 13
            if (r5 != r0) goto L91
            r4.t(r1)     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            goto La0
        L91:
            r0 = 9
            if (r5 != r0) goto L99
            r4.u(r1)     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
            goto La0
        L99:
            r0 = 14
            if (r5 != r0) goto La0
            r4.B(r1)     // Catch: java.lang.Throwable -> L13 java.lang.UnsupportedOperationException -> L16 java.io.IOException -> L19
        La0:
            r4.e()
            boolean r5 = e3.a.f21288w
            if (r5 == 0) goto Lbe
            r4.V()
            return
        Lab:
            boolean r0 = e3.a.f21288w     // Catch: java.lang.Throwable -> L13
            if (r0 == 0) goto Lb6
            java.lang.String r1 = "ExifInterface"
            java.lang.String r2 = "Invalid image: ExifInterface got an unsupported image format file (ExifInterface supports JPEG and some RAW image formats only) or a corrupted JPEG file to ExifInterface."
            android.util.Log.w(r1, r2, r5)     // Catch: java.lang.Throwable -> L13
        Lb6:
            r4.e()
            if (r0 == 0) goto Lbe
            r4.V()
        Lbe:
            return
        Lbf:
            r4.e()
            boolean r0 = e3.a.f21288w
            if (r0 == 0) goto Lc9
            r4.V()
        Lc9:
            throw r5
        */
        throw new UnsupportedOperationException("Method not decompiled: e3.a.T(java.io.InputStream):void");
    }

    private void U(b bVar) {
        ByteOrder W2 = W(bVar);
        this.f21300h = W2;
        bVar.x(W2);
        int readUnsignedShort = bVar.readUnsignedShort();
        int i10 = this.f21296d;
        if (i10 != 7 && i10 != 10 && readUnsignedShort != 42) {
            throw new IOException("Invalid start code: " + Integer.toHexString(readUnsignedShort));
        }
        int readInt = bVar.readInt();
        if (readInt >= 8) {
            int i11 = readInt - 8;
            if (i11 > 0) {
                bVar.B(i11);
                return;
            }
            return;
        }
        throw new IOException("Invalid first Ifd offset: " + readInt);
    }

    private void V() {
        for (int i10 = 0; i10 < this.f21298f.length; i10++) {
            Log.d("ExifInterface", "The size of tag group[" + i10 + "]: " + this.f21298f[i10].size());
            for (Map.Entry entry : this.f21298f[i10].entrySet()) {
                d dVar = (d) entry.getValue();
                Log.d("ExifInterface", "tagName: " + ((String) entry.getKey()) + ", tagType: " + dVar.toString() + ", tagValue: '" + dVar.n(this.f21300h) + "'");
            }
        }
    }

    private ByteOrder W(b bVar) {
        short readShort = bVar.readShort();
        if (readShort != 18761) {
            if (readShort == 19789) {
                if (f21288w) {
                    Log.d("ExifInterface", "readExifSegment: Byte Align MM");
                }
                return ByteOrder.BIG_ENDIAN;
            }
            throw new IOException("Invalid byte order: " + Integer.toHexString(readShort));
        }
        if (f21288w) {
            Log.d("ExifInterface", "readExifSegment: Byte Align II");
        }
        return ByteOrder.LITTLE_ENDIAN;
    }

    private void X(byte[] bArr, int i10) {
        g gVar = new g(bArr);
        U(gVar);
        Y(gVar, i10);
    }

    /* JADX WARN: Removed duplicated region for block: B:100:0x0287  */
    /* JADX WARN: Removed duplicated region for block: B:46:0x0133  */
    /* JADX WARN: Removed duplicated region for block: B:47:0x0138  */
    /* JADX WARN: Removed duplicated region for block: B:86:0x0220  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void Y(e3.a.g r26, int r27) {
        /*
            Method dump skipped, instructions count: 954
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: e3.a.Y(e3.a$g, int):void");
    }

    private void Z(String str) {
        for (int i10 = 0; i10 < f21276k0.length; i10++) {
            this.f21298f[i10].remove(str);
        }
    }

    private void a0(int i10, String str, String str2) {
        if (!this.f21298f[i10].isEmpty() && this.f21298f[i10].get(str) != null) {
            HashMap hashMap = this.f21298f[i10];
            hashMap.put(str2, (d) hashMap.get(str));
            this.f21298f[i10].remove(str);
        }
    }

    private void b0(g gVar, int i10) {
        d dVar = (d) this.f21298f[i10].get("ImageLength");
        d dVar2 = (d) this.f21298f[i10].get("ImageWidth");
        if (dVar == null || dVar2 == null) {
            d dVar3 = (d) this.f21298f[i10].get("JPEGInterchangeFormat");
            d dVar4 = (d) this.f21298f[i10].get("JPEGInterchangeFormatLength");
            if (dVar3 != null && dVar4 != null) {
                int m10 = dVar3.m(this.f21300h);
                int m11 = dVar3.m(this.f21300h);
                gVar.E(m10);
                byte[] bArr = new byte[m11];
                gVar.readFully(bArr);
                p(new b(bArr), m10, i10);
            }
        }
    }

    private void d0(InputStream inputStream, OutputStream outputStream) {
        byte[] bArr;
        if (f21288w) {
            Log.d("ExifInterface", "saveJpegAttributes starting with (inputStream: " + inputStream + ", outputStream: " + outputStream + ")");
        }
        b bVar = new b(inputStream);
        c cVar = new c(outputStream, ByteOrder.BIG_ENDIAN);
        if (bVar.readByte() == -1) {
            cVar.h(-1);
            if (bVar.readByte() == -40) {
                cVar.h(-40);
                cVar.h(-1);
                cVar.h(-31);
                this.f21308p = q0(cVar);
                if (this.f21313u != null) {
                    cVar.write(-1);
                    cVar.h(-31);
                    byte[] bArr2 = f21284s0;
                    cVar.B(bArr2.length + 2 + this.f21313u.f21328d.length);
                    cVar.write(bArr2);
                    cVar.write(this.f21313u.f21328d);
                    this.f21314v = true;
                }
                byte[] bArr3 = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
                while (bVar.readByte() == -1) {
                    byte readByte = bVar.readByte();
                    if (readByte != -39 && readByte != -38) {
                        if (readByte != -31) {
                            cVar.h(-1);
                            cVar.h(readByte);
                            int readUnsignedShort = bVar.readUnsignedShort();
                            cVar.B(readUnsignedShort);
                            int i10 = readUnsignedShort - 2;
                            if (i10 >= 0) {
                                while (i10 > 0) {
                                    int read = bVar.read(bArr3, 0, Math.min(i10, (int) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT));
                                    if (read >= 0) {
                                        cVar.write(bArr3, 0, read);
                                        i10 -= read;
                                    }
                                }
                            } else {
                                throw new IOException("Invalid length");
                            }
                        } else {
                            int readUnsignedShort2 = bVar.readUnsignedShort();
                            int i11 = readUnsignedShort2 - 2;
                            if (i11 >= 0) {
                                byte[] bArr4 = f21284s0;
                                if (i11 >= bArr4.length) {
                                    bArr = new byte[bArr4.length];
                                } else {
                                    byte[] bArr5 = f21283r0;
                                    if (i11 >= bArr5.length) {
                                        bArr = new byte[bArr5.length];
                                    } else {
                                        bArr = null;
                                    }
                                }
                                if (bArr != null) {
                                    bVar.readFully(bArr);
                                    if (e3.b.f(bArr, f21283r0) || e3.b.f(bArr, bArr4)) {
                                        bVar.B(i11 - bArr.length);
                                    }
                                }
                                cVar.h(-1);
                                cVar.h(readByte);
                                cVar.B(readUnsignedShort2);
                                if (bArr != null) {
                                    i11 -= bArr.length;
                                    cVar.write(bArr);
                                }
                                while (i11 > 0) {
                                    int read2 = bVar.read(bArr3, 0, Math.min(i11, (int) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT));
                                    if (read2 >= 0) {
                                        cVar.write(bArr3, 0, read2);
                                        i11 -= read2;
                                    }
                                }
                            } else {
                                throw new IOException("Invalid length");
                            }
                        }
                    } else {
                        cVar.h(-1);
                        cVar.h(readByte);
                        e3.b.d(bVar, cVar);
                        return;
                    }
                }
                throw new IOException("Invalid marker");
            }
            throw new IOException("Invalid marker");
        }
        throw new IOException("Invalid marker");
    }

    private void e() {
        String k10 = k("DateTimeOriginal");
        if (k10 != null && k("DateTime") == null) {
            this.f21298f[0].put("DateTime", d.e(k10));
        }
        if (k("ImageWidth") == null) {
            this.f21298f[0].put("ImageWidth", d.f(0L, this.f21300h));
        }
        if (k("ImageLength") == null) {
            this.f21298f[0].put("ImageLength", d.f(0L, this.f21300h));
        }
        if (k("Orientation") == null) {
            this.f21298f[0].put("Orientation", d.f(0L, this.f21300h));
        }
        if (k("LightSource") == null) {
            this.f21298f[1].put("LightSource", d.f(0L, this.f21300h));
        }
    }

    /*  JADX ERROR: JadxOverflowException in pass: RegionMakerVisitor
        jadx.core.utils.exceptions.JadxOverflowException: Regions count limit reached
        	at jadx.core.utils.ErrorsCounter.addError(ErrorsCounter.java:56)
        	at jadx.core.utils.ErrorsCounter.error(ErrorsCounter.java:30)
        	at jadx.core.dex.attributes.nodes.NotificationAttrNode.addError(NotificationAttrNode.java:18)
        */
    /* JADX WARN: Removed duplicated region for block: B:11:0x0046 A[ADDED_TO_REGION] */
    /* JADX WARN: Removed duplicated region for block: B:43:0x007a A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:46:0x005a A[SYNTHETIC] */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:25:0x0078 -> B:10:0x0044). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void e0(java.io.InputStream r9, java.io.OutputStream r10) {
        /*
            r8 = this;
            boolean r0 = e3.a.f21288w
            if (r0 == 0) goto L27
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r0.<init>()
            java.lang.String r1 = "savePngAttributes starting with (inputStream: "
            r0.append(r1)
            r0.append(r9)
            java.lang.String r1 = ", outputStream: "
            r0.append(r1)
            r0.append(r10)
            java.lang.String r1 = ")"
            r0.append(r1)
            java.lang.String r0 = r0.toString()
            java.lang.String r1 = "ExifInterface"
            android.util.Log.d(r1, r0)
        L27:
            e3.a$b r0 = new e3.a$b
            r0.<init>(r9)
            e3.a$c r9 = new e3.a$c
            java.nio.ByteOrder r1 = java.nio.ByteOrder.BIG_ENDIAN
            r9.<init>(r10, r1)
            byte[] r10 = e3.a.K
            int r10 = r10.length
            e3.b.e(r0, r9, r10)
            e3.a$d r10 = r8.f21313u
            r1 = 1
            r2 = 0
            if (r10 != 0) goto L43
            boolean r10 = r8.f21314v
            if (r10 == 0) goto L78
        L43:
            r10 = r1
        L44:
            if (r1 != 0) goto L4d
            if (r10 == 0) goto L49
            goto L4d
        L49:
            e3.b.d(r0, r9)
            return
        L4d:
            int r3 = r0.readInt()
            int r4 = r0.readInt()
            r5 = 1229472850(0x49484452, float:820293.1)
            if (r4 != r5) goto L7a
            r9.l(r3)
            r9.l(r4)
            int r3 = r3 + 4
            e3.b.e(r0, r9, r3)
            int r3 = r8.f21308p
            if (r3 != 0) goto L6d
            r8.r0(r9)
            r1 = r2
        L6d:
            e3.a$d r3 = r8.f21313u
            if (r3 == 0) goto L44
            boolean r3 = r8.f21314v
            if (r3 != 0) goto L44
            r8.s0(r9)
        L78:
            r10 = r2
            goto L44
        L7a:
            r5 = 1700284774(0x65584966, float:6.383657E22)
            if (r4 != r5) goto L8b
            if (r1 == 0) goto L8b
            r8.r0(r9)
            int r3 = r3 + 4
            r0.B(r3)
            r1 = r2
            goto L44
        L8b:
            r5 = 1767135348(0x69545874, float:1.6044374E25)
            if (r4 != r5) goto Lbd
            byte[] r5 = e3.a.L
            int r6 = r5.length
            if (r3 < r6) goto Lbd
            int r6 = r5.length
            byte[] r7 = new byte[r6]
            r0.readFully(r7)
            int r6 = r3 - r6
            int r6 = r6 + 4
            boolean r5 = java.util.Arrays.equals(r7, r5)
            if (r5 == 0) goto Lb0
            e3.a$d r10 = r8.f21313u
            if (r10 == 0) goto Lac
            r8.s0(r9)
        Lac:
            r0.B(r6)
            goto L78
        Lb0:
            r9.l(r3)
            r9.l(r4)
            r9.write(r7)
            e3.b.e(r0, r9, r6)
            goto L44
        Lbd:
            r9.l(r3)
            r9.l(r4)
            int r3 = r3 + 4
            e3.b.e(r0, r9, r3)
            goto L44
        */
        throw new UnsupportedOperationException("Method not decompiled: e3.a.e0(java.io.InputStream, java.io.OutputStream):void");
    }

    private String f(double d10) {
        long j10 = (long) d10;
        double d11 = d10 - j10;
        long j11 = (long) (d11 * 60.0d);
        long round = Math.round((d11 - (j11 / 60.0d)) * 3600.0d * 1.0E7d);
        return j10 + "/1," + j11 + "/1," + round + "/10000000";
    }

    /* JADX WARN: Removed duplicated region for block: B:82:0x0213 A[Catch: all -> 0x007e, Exception -> 0x0082, TryCatch #5 {Exception -> 0x0082, all -> 0x007e, blocks: (B:7:0x004f, B:9:0x005b, B:11:0x006f, B:12:0x0071, B:80:0x01f7, B:82:0x0213, B:83:0x021c, B:19:0x0086, B:21:0x0095, B:23:0x009d, B:25:0x00a1, B:28:0x00b1, B:30:0x00bc, B:31:0x00c1, B:32:0x00c3, B:36:0x00d1, B:37:0x00d6, B:38:0x00da, B:39:0x00e6, B:41:0x00ee, B:45:0x00fc, B:47:0x0104, B:50:0x010b, B:52:0x011a, B:54:0x012a, B:69:0x0186, B:71:0x0192, B:72:0x0199, B:74:0x01d3, B:79:0x01f0, B:76:0x01e1, B:78:0x01e9, B:55:0x013e, B:56:0x0145, B:57:0x0146, B:59:0x0150, B:61:0x0156, B:65:0x016f, B:66:0x0177, B:67:0x017e), top: B:97:0x004f }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void f0(java.io.InputStream r22, java.io.OutputStream r23) {
        /*
            Method dump skipped, instructions count: 565
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: e3.a.f0(java.io.InputStream, java.io.OutputStream):void");
    }

    private static double g(String str, String str2) {
        try {
            String[] split = str.split(",", -1);
            String[] split2 = split[0].split("/", -1);
            String[] split3 = split[1].split("/", -1);
            String[] split4 = split[2].split("/", -1);
            double parseDouble = (Double.parseDouble(split2[0].trim()) / Double.parseDouble(split2[1].trim())) + ((Double.parseDouble(split3[0].trim()) / Double.parseDouble(split3[1].trim())) / 60.0d) + ((Double.parseDouble(split4[0].trim()) / Double.parseDouble(split4[1].trim())) / 3600.0d);
            if (!str2.equals("S") && !str2.equals("W")) {
                if (!str2.equals("N") && !str2.equals("E")) {
                    throw new IllegalArgumentException();
                }
                return parseDouble;
            }
            return -parseDouble;
        } catch (ArrayIndexOutOfBoundsException | NumberFormatException e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    private void h(b bVar, c cVar, byte[] bArr, byte[] bArr2) {
        while (true) {
            byte[] bArr3 = new byte[4];
            bVar.readFully(bArr3);
            i(bVar, cVar, bArr3);
            if (!Arrays.equals(bArr3, bArr)) {
                if (bArr2 != null && Arrays.equals(bArr3, bArr2)) {
                    return;
                }
            } else {
                return;
            }
        }
    }

    private void i(b bVar, c cVar, byte[] bArr) {
        int readInt = bVar.readInt();
        cVar.write(bArr);
        cVar.l(readInt);
        if (readInt % 2 == 1) {
            readInt++;
        }
        e3.b.e(bVar, cVar, readInt);
    }

    private void k0(b bVar) {
        HashMap hashMap = this.f21298f[4];
        d dVar = (d) hashMap.get("Compression");
        if (dVar != null) {
            int m10 = dVar.m(this.f21300h);
            this.f21307o = m10;
            if (m10 != 1) {
                if (m10 != 6) {
                    if (m10 != 7) {
                        return;
                    }
                } else {
                    E(bVar, hashMap);
                    return;
                }
            }
            if (P(hashMap)) {
                F(bVar, hashMap);
                return;
            }
            return;
        }
        this.f21307o = 6;
        E(bVar, hashMap);
    }

    private static boolean l0(int i10) {
        if (i10 != 4 && i10 != 9 && i10 != 13 && i10 != 14) {
            return true;
        }
        return false;
    }

    private void m0(int i10, int i11) {
        if (!this.f21298f[i10].isEmpty() && !this.f21298f[i11].isEmpty()) {
            d dVar = (d) this.f21298f[i10].get("ImageLength");
            d dVar2 = (d) this.f21298f[i10].get("ImageWidth");
            d dVar3 = (d) this.f21298f[i11].get("ImageLength");
            d dVar4 = (d) this.f21298f[i11].get("ImageWidth");
            if (dVar != null && dVar2 != null) {
                if (dVar3 != null && dVar4 != null) {
                    int m10 = dVar.m(this.f21300h);
                    int m11 = dVar2.m(this.f21300h);
                    int m12 = dVar3.m(this.f21300h);
                    int m13 = dVar4.m(this.f21300h);
                    if (m10 < m12 && m11 < m13) {
                        HashMap[] hashMapArr = this.f21298f;
                        HashMap hashMap = hashMapArr[i10];
                        hashMapArr[i10] = hashMapArr[i11];
                        hashMapArr[i11] = hashMap;
                    }
                } else if (f21288w) {
                    Log.d("ExifInterface", "Second image does not contain valid size information");
                }
            } else if (f21288w) {
                Log.d("ExifInterface", "First image does not contain valid size information");
            }
        } else if (f21288w) {
            Log.d("ExifInterface", "Cannot perform swap since only one image data exists");
        }
    }

    private d n(String str) {
        d dVar;
        d dVar2;
        if (str != null) {
            if ("ISOSpeedRatings".equals(str)) {
                if (f21288w) {
                    Log.d("ExifInterface", "getExifAttribute: Replacing TAG_ISO_SPEED_RATINGS with TAG_PHOTOGRAPHIC_SENSITIVITY.");
                }
                str = "PhotographicSensitivity";
            }
            if ("Xmp".equals(str) && C(this.f21296d) == 2 && (dVar2 = this.f21313u) != null) {
                return dVar2;
            }
            for (int i10 = 0; i10 < f21276k0.length; i10++) {
                d dVar3 = (d) this.f21298f[i10].get(str);
                if (dVar3 != null) {
                    return dVar3;
                }
            }
            if ("Xmp".equals(str) && (dVar = this.f21313u) != null) {
                return dVar;
            }
            return null;
        }
        throw new NullPointerException("tag shouldn't be null");
    }

    private static void n0(CRC32 crc32, int i10) {
        crc32.update(i10 >>> 24);
        crc32.update(i10 >>> 16);
        crc32.update(i10 >>> 8);
        crc32.update(i10);
    }

    private void o(g gVar, int i10) {
        String str;
        String str2;
        String str3;
        int i11;
        int i12 = Build.VERSION.SDK_INT;
        if (i12 >= 28) {
            if (i10 == 15 && i12 < 31) {
                throw new UnsupportedOperationException("Reading EXIF from AVIF files is supported from SDK 31 and above");
            }
            MediaMetadataRetriever mediaMetadataRetriever = new MediaMetadataRetriever();
            try {
                try {
                    b.a.a(mediaMetadataRetriever, new C0275a(gVar));
                    String extractMetadata = mediaMetadataRetriever.extractMetadata(33);
                    String extractMetadata2 = mediaMetadataRetriever.extractMetadata(34);
                    String extractMetadata3 = mediaMetadataRetriever.extractMetadata(26);
                    String extractMetadata4 = mediaMetadataRetriever.extractMetadata(17);
                    if ("yes".equals(extractMetadata3)) {
                        str = mediaMetadataRetriever.extractMetadata(29);
                        str3 = mediaMetadataRetriever.extractMetadata(30);
                        str2 = mediaMetadataRetriever.extractMetadata(31);
                    } else if ("yes".equals(extractMetadata4)) {
                        str = mediaMetadataRetriever.extractMetadata(18);
                        str3 = mediaMetadataRetriever.extractMetadata(19);
                        str2 = mediaMetadataRetriever.extractMetadata(24);
                    } else {
                        str = null;
                        str2 = null;
                        str3 = null;
                    }
                    if (str != null) {
                        this.f21298f[0].put("ImageWidth", d.j(Integer.parseInt(str), this.f21300h));
                    }
                    if (str3 != null) {
                        this.f21298f[0].put("ImageLength", d.j(Integer.parseInt(str3), this.f21300h));
                    }
                    if (str2 != null) {
                        int parseInt = Integer.parseInt(str2);
                        if (parseInt != 90) {
                            if (parseInt != 180) {
                                if (parseInt != 270) {
                                    i11 = 1;
                                } else {
                                    i11 = 8;
                                }
                            } else {
                                i11 = 3;
                            }
                        } else {
                            i11 = 6;
                        }
                        this.f21298f[0].put("Orientation", d.j(i11, this.f21300h));
                    }
                    if (extractMetadata != null && extractMetadata2 != null) {
                        int parseInt2 = Integer.parseInt(extractMetadata);
                        int parseInt3 = Integer.parseInt(extractMetadata2);
                        if (parseInt3 > 6) {
                            gVar.E(parseInt2);
                            byte[] bArr = new byte[6];
                            gVar.readFully(bArr);
                            int i13 = parseInt2 + 6;
                            int i14 = parseInt3 - 6;
                            if (Arrays.equals(bArr, f21283r0)) {
                                byte[] bArr2 = new byte[i14];
                                gVar.readFully(bArr2);
                                this.f21308p = i13;
                                X(bArr2, 0);
                            } else {
                                throw new IOException("Invalid identifier");
                            }
                        } else {
                            throw new IOException("Invalid exif length");
                        }
                    }
                    String extractMetadata5 = mediaMetadataRetriever.extractMetadata(41);
                    String extractMetadata6 = mediaMetadataRetriever.extractMetadata(42);
                    if (extractMetadata5 != null && extractMetadata6 != null) {
                        int parseInt4 = Integer.parseInt(extractMetadata5);
                        int parseInt5 = Integer.parseInt(extractMetadata6);
                        long j10 = parseInt4;
                        gVar.E(j10);
                        byte[] bArr3 = new byte[parseInt5];
                        gVar.readFully(bArr3);
                        this.f21313u = new d(1, parseInt5, j10, bArr3);
                        this.f21314v = true;
                    }
                    if (f21288w) {
                        Log.d("ExifInterface", "Heif meta: " + str + "x" + str3 + ", rotation " + str2);
                    }
                    try {
                        mediaMetadataRetriever.release();
                        return;
                    } catch (IOException unused) {
                        return;
                    }
                } catch (Throwable th2) {
                    try {
                        mediaMetadataRetriever.release();
                    } catch (IOException unused2) {
                    }
                    throw th2;
                }
            } catch (RuntimeException e10) {
                throw new UnsupportedOperationException("Failed to read EXIF from HEIF file. Given stream is either malformed or unsupported.", e10);
            }
        }
        throw new UnsupportedOperationException("Reading EXIF from HEIC files is supported from SDK 28 and above");
    }

    private void o0(g gVar, int i10) {
        d j10;
        d j11;
        d dVar = (d) this.f21298f[i10].get("DefaultCropSize");
        d dVar2 = (d) this.f21298f[i10].get("SensorTopBorder");
        d dVar3 = (d) this.f21298f[i10].get("SensorLeftBorder");
        d dVar4 = (d) this.f21298f[i10].get("SensorBottomBorder");
        d dVar5 = (d) this.f21298f[i10].get("SensorRightBorder");
        if (dVar != null) {
            if (dVar.f21325a == 5) {
                f[] fVarArr = (f[]) dVar.o(this.f21300h);
                if (fVarArr != null && fVarArr.length == 2) {
                    j10 = d.h(fVarArr[0], this.f21300h);
                    j11 = d.h(fVarArr[1], this.f21300h);
                } else {
                    Log.w("ExifInterface", "Invalid crop size values. cropSize=" + Arrays.toString(fVarArr));
                    return;
                }
            } else {
                int[] iArr = (int[]) dVar.o(this.f21300h);
                if (iArr != null && iArr.length == 2) {
                    j10 = d.j(iArr[0], this.f21300h);
                    j11 = d.j(iArr[1], this.f21300h);
                } else {
                    Log.w("ExifInterface", "Invalid crop size values. cropSize=" + Arrays.toString(iArr));
                    return;
                }
            }
            this.f21298f[i10].put("ImageWidth", j10);
            this.f21298f[i10].put("ImageLength", j11);
        } else if (dVar2 != null && dVar3 != null && dVar4 != null && dVar5 != null) {
            int m10 = dVar2.m(this.f21300h);
            int m11 = dVar4.m(this.f21300h);
            int m12 = dVar5.m(this.f21300h);
            int m13 = dVar3.m(this.f21300h);
            if (m11 > m10 && m12 > m13) {
                d j12 = d.j(m11 - m10, this.f21300h);
                d j13 = d.j(m12 - m13, this.f21300h);
                this.f21298f[i10].put("ImageLength", j12);
                this.f21298f[i10].put("ImageWidth", j13);
            }
        } else {
            b0(gVar, i10);
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:60:0x016b, code lost:
        r21.x(r20.f21300h);
     */
    /* JADX WARN: Code restructure failed: missing block: B:61:0x0170, code lost:
        return;
     */
    /* JADX WARN: Removed duplicated region for block: B:34:0x00b5 A[FALL_THROUGH] */
    /* JADX WARN: Removed duplicated region for block: B:55:0x0159 A[LOOP:0: B:10:0x0037->B:55:0x0159, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:68:0x015f A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void p(e3.a.b r21, int r22, int r23) {
        /*
            Method dump skipped, instructions count: 494
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: e3.a.p(e3.a$b, int, int):void");
    }

    private void p0() {
        m0(0, 5);
        m0(0, 4);
        m0(5, 4);
        d dVar = (d) this.f21298f[1].get("PixelXDimension");
        d dVar2 = (d) this.f21298f[1].get("PixelYDimension");
        if (dVar != null && dVar2 != null) {
            this.f21298f[0].put("ImageWidth", dVar);
            this.f21298f[0].put("ImageLength", dVar2);
        }
        if (this.f21298f[4].isEmpty() && R(this.f21298f[5])) {
            HashMap[] hashMapArr = this.f21298f;
            hashMapArr[4] = hashMapArr[5];
            hashMapArr[5] = new HashMap();
        }
        if (!R(this.f21298f[4])) {
            Log.d("ExifInterface", "No image meets the size requirements of a thumbnail image.");
        }
        a0(0, "ThumbnailOrientation", "Orientation");
        a0(0, "ThumbnailImageLength", "ImageLength");
        a0(0, "ThumbnailImageWidth", "ImageWidth");
        a0(5, "ThumbnailOrientation", "Orientation");
        a0(5, "ThumbnailImageLength", "ImageLength");
        a0(5, "ThumbnailImageWidth", "ImageWidth");
        a0(4, "Orientation", "ThumbnailOrientation");
        a0(4, "ImageLength", "ThumbnailImageLength");
        a0(4, "ImageWidth", "ThumbnailImageWidth");
    }

    /* JADX WARN: Removed duplicated region for block: B:126:0x0356  */
    /* JADX WARN: Removed duplicated region for block: B:41:0x0113  */
    /* JADX WARN: Removed duplicated region for block: B:51:0x014a  */
    /* JADX WARN: Removed duplicated region for block: B:57:0x016d  */
    /* JADX WARN: Removed duplicated region for block: B:64:0x0196  */
    /* JADX WARN: Removed duplicated region for block: B:67:0x019c  */
    /* JADX WARN: Removed duplicated region for block: B:73:0x01de  */
    /* JADX WARN: Removed duplicated region for block: B:76:0x01fe  */
    /* JADX WARN: Removed duplicated region for block: B:79:0x021e  */
    /* JADX WARN: Removed duplicated region for block: B:82:0x023a  */
    /* JADX WARN: Removed duplicated region for block: B:88:0x0254  */
    /* JADX WARN: Removed duplicated region for block: B:93:0x026d  */
    /* JADX WARN: Removed duplicated region for block: B:94:0x0270  */
    /* JADX WARN: Removed duplicated region for block: B:98:0x028a  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private int q0(e3.a.c r19) {
        /*
            Method dump skipped, instructions count: 907
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: e3.a.q0(e3.a$c):int");
    }

    private int r(BufferedInputStream bufferedInputStream) {
        bufferedInputStream.mark(5000);
        byte[] bArr = new byte[5000];
        bufferedInputStream.read(bArr);
        bufferedInputStream.reset();
        if (J(bArr)) {
            return 4;
        }
        if (M(bArr)) {
            return 9;
        }
        int I2 = I(bArr);
        if (I2 != 0) {
            return I2;
        }
        if (K(bArr)) {
            return 7;
        }
        if (N(bArr)) {
            return 10;
        }
        if (L(bArr)) {
            return 13;
        }
        if (S(bArr)) {
            return 14;
        }
        return 0;
    }

    private void r0(c cVar) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        this.f21308p = cVar.f21323d.size() + q0(new c(byteArrayOutputStream, ByteOrder.BIG_ENDIAN));
        byte[] byteArray = byteArrayOutputStream.toByteArray();
        cVar.write(byteArray);
        CRC32 crc32 = new CRC32();
        crc32.update(byteArray, 4, byteArray.length - 4);
        cVar.l((int) crc32.getValue());
    }

    private void s(g gVar) {
        int i10;
        int i11;
        v(gVar);
        d dVar = (d) this.f21298f[1].get("MakerNote");
        if (dVar != null) {
            g gVar2 = new g(dVar.f21328d);
            gVar2.x(this.f21300h);
            byte[] bArr = I;
            byte[] bArr2 = new byte[bArr.length];
            gVar2.readFully(bArr2);
            gVar2.E(0L);
            byte[] bArr3 = J;
            byte[] bArr4 = new byte[bArr3.length];
            gVar2.readFully(bArr4);
            if (Arrays.equals(bArr2, bArr)) {
                gVar2.E(8L);
            } else if (Arrays.equals(bArr4, bArr3)) {
                gVar2.E(12L);
            }
            Y(gVar2, 6);
            d dVar2 = (d) this.f21298f[7].get("PreviewImageStart");
            d dVar3 = (d) this.f21298f[7].get("PreviewImageLength");
            if (dVar2 != null && dVar3 != null) {
                this.f21298f[5].put("JPEGInterchangeFormat", dVar2);
                this.f21298f[5].put("JPEGInterchangeFormatLength", dVar3);
            }
            d dVar4 = (d) this.f21298f[8].get("AspectFrame");
            if (dVar4 != null) {
                int[] iArr = (int[]) dVar4.o(this.f21300h);
                if (iArr != null && iArr.length == 4) {
                    int i12 = iArr[2];
                    int i13 = iArr[0];
                    if (i12 > i13 && (i10 = iArr[3]) > (i11 = iArr[1])) {
                        int i14 = (i12 - i13) + 1;
                        int i15 = (i10 - i11) + 1;
                        if (i14 < i15) {
                            int i16 = i14 + i15;
                            i15 = i16 - i15;
                            i14 = i16 - i15;
                        }
                        d j10 = d.j(i14, this.f21300h);
                        d j11 = d.j(i15, this.f21300h);
                        this.f21298f[0].put("ImageWidth", j10);
                        this.f21298f[0].put("ImageLength", j11);
                        return;
                    }
                    return;
                }
                Log.w("ExifInterface", "Invalid aspect frame values. frame=" + Arrays.toString(iArr));
            }
        }
    }

    private void s0(c cVar) {
        cVar.l(this.f21313u.f21328d.length + 22);
        CRC32 crc32 = new CRC32();
        cVar.l(1767135348);
        n0(crc32, 1767135348);
        byte[] bArr = L;
        cVar.write(bArr);
        crc32.update(bArr);
        cVar.write(this.f21313u.f21328d);
        crc32.update(this.f21313u.f21328d);
        cVar.l((int) crc32.getValue());
        this.f21314v = true;
    }

    private void t(b bVar) {
        if (f21288w) {
            Log.d("ExifInterface", "getPngAttributes starting with: " + bVar);
        }
        bVar.x(ByteOrder.BIG_ENDIAN);
        int h10 = bVar.h();
        bVar.B(K.length);
        boolean z10 = false;
        boolean z11 = false;
        while (true) {
            if (z10 && z11) {
                break;
            }
            try {
                int readInt = bVar.readInt();
                int readInt2 = bVar.readInt();
                int h11 = bVar.h() + readInt + 4;
                if (bVar.h() - h10 == 16 && readInt2 != 1229472850) {
                    throw new IOException("Encountered invalid PNG file--IHDR chunk should appear as the first chunk");
                }
                if (readInt2 == 1229278788) {
                    break;
                }
                if (readInt2 == 1700284774 && !z10) {
                    this.f21308p = bVar.h() - h10;
                    byte[] bArr = new byte[readInt];
                    bVar.readFully(bArr);
                    int readInt3 = bVar.readInt();
                    CRC32 crc32 = new CRC32();
                    n0(crc32, readInt2);
                    crc32.update(bArr);
                    if (((int) crc32.getValue()) == readInt3) {
                        X(bArr, 0);
                        p0();
                        k0(new b(bArr));
                        z10 = true;
                    } else {
                        throw new IOException("Encountered invalid CRC value for PNG-EXIF chunk.\n recorded CRC value: " + readInt3 + ", calculated CRC value: " + crc32.getValue());
                    }
                } else if (readInt2 == 1767135348 && !z11) {
                    byte[] bArr2 = L;
                    if (readInt >= bArr2.length) {
                        int length = bArr2.length;
                        byte[] bArr3 = new byte[length];
                        bVar.readFully(bArr3);
                        if (Arrays.equals(bArr3, bArr2)) {
                            int i10 = readInt - length;
                            byte[] bArr4 = new byte[i10];
                            bVar.readFully(bArr4);
                            this.f21313u = new d(1, i10, bVar.h() - h10, bArr4);
                            z11 = true;
                        }
                    }
                }
                bVar.B(h11 - bVar.h());
            } catch (EOFException e10) {
                throw new IOException("Encountered corrupt PNG file.", e10);
            }
        }
        this.f21314v = z11;
    }

    private void u(b bVar) {
        boolean z10 = f21288w;
        if (z10) {
            Log.d("ExifInterface", "getRafAttributes starting with: " + bVar);
        }
        bVar.B(84);
        byte[] bArr = new byte[4];
        byte[] bArr2 = new byte[4];
        byte[] bArr3 = new byte[4];
        bVar.readFully(bArr);
        bVar.readFully(bArr2);
        bVar.readFully(bArr3);
        int i10 = ByteBuffer.wrap(bArr).getInt();
        int i11 = ByteBuffer.wrap(bArr2).getInt();
        int i12 = ByteBuffer.wrap(bArr3).getInt();
        byte[] bArr4 = new byte[i11];
        bVar.B(i10 - bVar.h());
        bVar.readFully(bArr4);
        p(new b(bArr4), i10, 5);
        bVar.B(i12 - bVar.h());
        bVar.x(ByteOrder.BIG_ENDIAN);
        int readInt = bVar.readInt();
        if (z10) {
            Log.d("ExifInterface", "numberOfDirectoryEntry: " + readInt);
        }
        for (int i13 = 0; i13 < readInt; i13++) {
            int readUnsignedShort = bVar.readUnsignedShort();
            int readUnsignedShort2 = bVar.readUnsignedShort();
            if (readUnsignedShort == f21271f0.f21329a) {
                short readShort = bVar.readShort();
                short readShort2 = bVar.readShort();
                d j10 = d.j(readShort, this.f21300h);
                d j11 = d.j(readShort2, this.f21300h);
                this.f21298f[0].put("ImageLength", j10);
                this.f21298f[0].put("ImageWidth", j11);
                if (f21288w) {
                    Log.d("ExifInterface", "Updated to length: " + ((int) readShort) + ", width: " + ((int) readShort2));
                    return;
                }
                return;
            }
            bVar.B(readUnsignedShort2);
        }
    }

    private void v(g gVar) {
        d dVar;
        U(gVar);
        Y(gVar, 0);
        o0(gVar, 0);
        o0(gVar, 5);
        o0(gVar, 4);
        p0();
        if (this.f21296d == 8 && (dVar = (d) this.f21298f[1].get("MakerNote")) != null) {
            g gVar2 = new g(dVar.f21328d);
            gVar2.x(this.f21300h);
            gVar2.B(6);
            Y(gVar2, 9);
            d dVar2 = (d) this.f21298f[9].get("ColorSpace");
            if (dVar2 != null) {
                this.f21298f[1].put("ColorSpace", dVar2);
            }
        }
    }

    private void x(g gVar) {
        if (f21288w) {
            Log.d("ExifInterface", "getRw2Attributes starting with: " + gVar);
        }
        v(gVar);
        d dVar = (d) this.f21298f[0].get("JpgFromRaw");
        if (dVar != null) {
            p(new b(dVar.f21328d), (int) dVar.f21327c, 5);
        }
        d dVar2 = (d) this.f21298f[0].get("ISO");
        d dVar3 = (d) this.f21298f[1].get("PhotographicSensitivity");
        if (dVar2 != null && dVar3 == null) {
            this.f21298f[1].put("PhotographicSensitivity", dVar2);
        }
    }

    private boolean y(g gVar) {
        byte[] bArr = f21283r0;
        byte[] bArr2 = new byte[bArr.length];
        gVar.readFully(bArr2);
        if (!Arrays.equals(bArr2, bArr)) {
            Log.w("ExifInterface", "Given data is not EXIF-only.");
            return false;
        }
        byte[] l10 = gVar.l();
        this.f21308p = bArr.length;
        X(l10, 0);
        return true;
    }

    /* JADX WARN: Removed duplicated region for block: B:35:0x0073  */
    /* JADX WARN: Removed duplicated region for block: B:48:0x008c  */
    /* JADX WARN: Removed duplicated region for block: B:52:0x0095  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public byte[] A() {
        /*
            r8 = this;
            java.lang.String r0 = "ExifInterface"
            boolean r1 = r8.f21301i
            r2 = 0
            if (r1 != 0) goto L8
            return r2
        L8:
            byte[] r1 = r8.f21306n
            if (r1 == 0) goto Ld
            return r1
        Ld:
            android.content.res.AssetManager$AssetInputStream r1 = r8.f21295c     // Catch: java.lang.Throwable -> L3b java.lang.Exception -> L3e
            if (r1 == 0) goto L2f
            boolean r3 = r1.markSupported()     // Catch: java.lang.Throwable -> L1c java.lang.Exception -> L21
            if (r3 == 0) goto L26
            r1.reset()     // Catch: java.lang.Throwable -> L1c java.lang.Exception -> L21
        L1a:
            r3 = r2
            goto L58
        L1c:
            r0 = move-exception
            r3 = r2
        L1e:
            r2 = r1
            goto L90
        L21:
            r3 = move-exception
            r4 = r3
            r3 = r2
            goto L82
        L26:
            java.lang.String r3 = "Cannot read thumbnail from inputstream without mark/reset support"
            android.util.Log.d(r0, r3)     // Catch: java.lang.Throwable -> L1c java.lang.Exception -> L21
            e3.b.b(r1)
            return r2
        L2f:
            java.lang.String r1 = r8.f21293a     // Catch: java.lang.Throwable -> L3b java.lang.Exception -> L3e
            if (r1 == 0) goto L43
            java.io.FileInputStream r1 = new java.io.FileInputStream     // Catch: java.lang.Throwable -> L3b java.lang.Exception -> L3e
            java.lang.String r3 = r8.f21293a     // Catch: java.lang.Throwable -> L3b java.lang.Exception -> L3e
            r1.<init>(r3)     // Catch: java.lang.Throwable -> L3b java.lang.Exception -> L3e
            goto L1a
        L3b:
            r0 = move-exception
            r3 = r2
            goto L90
        L3e:
            r3 = move-exception
            r1 = r2
            r4 = r3
            r3 = r1
            goto L82
        L43:
            java.io.FileDescriptor r1 = r8.f21294b     // Catch: java.lang.Throwable -> L3b java.lang.Exception -> L3e
            java.io.FileDescriptor r1 = android.system.Os.dup(r1)     // Catch: java.lang.Throwable -> L3b java.lang.Exception -> L3e
            int r3 = android.system.OsConstants.SEEK_SET     // Catch: java.lang.Throwable -> L7b java.lang.Exception -> L7e
            r4 = 0
            android.system.Os.lseek(r1, r4, r3)     // Catch: java.lang.Throwable -> L7b java.lang.Exception -> L7e
            java.io.FileInputStream r3 = new java.io.FileInputStream     // Catch: java.lang.Throwable -> L7b java.lang.Exception -> L7e
            r3.<init>(r1)     // Catch: java.lang.Throwable -> L7b java.lang.Exception -> L7e
            r7 = r3
            r3 = r1
            r1 = r7
        L58:
            e3.a$b r4 = new e3.a$b     // Catch: java.lang.Throwable -> L77 java.lang.Exception -> L79
            r4.<init>(r1)     // Catch: java.lang.Throwable -> L77 java.lang.Exception -> L79
            int r5 = r8.f21304l     // Catch: java.lang.Throwable -> L77 java.lang.Exception -> L79
            int r6 = r8.f21308p     // Catch: java.lang.Throwable -> L77 java.lang.Exception -> L79
            int r5 = r5 + r6
            r4.B(r5)     // Catch: java.lang.Throwable -> L77 java.lang.Exception -> L79
            int r5 = r8.f21305m     // Catch: java.lang.Throwable -> L77 java.lang.Exception -> L79
            byte[] r5 = new byte[r5]     // Catch: java.lang.Throwable -> L77 java.lang.Exception -> L79
            r4.readFully(r5)     // Catch: java.lang.Throwable -> L77 java.lang.Exception -> L79
            r8.f21306n = r5     // Catch: java.lang.Throwable -> L77 java.lang.Exception -> L79
            e3.b.b(r1)
            if (r3 == 0) goto L76
            e3.b.a(r3)
        L76:
            return r5
        L77:
            r0 = move-exception
            goto L1e
        L79:
            r4 = move-exception
            goto L82
        L7b:
            r0 = move-exception
            r3 = r1
            goto L90
        L7e:
            r3 = move-exception
            r4 = r3
            r3 = r1
            r1 = r2
        L82:
            java.lang.String r5 = "Encountered exception while getting thumbnail"
            android.util.Log.d(r0, r5, r4)     // Catch: java.lang.Throwable -> L77
            e3.b.b(r1)
            if (r3 == 0) goto L8f
            e3.b.a(r3)
        L8f:
            return r2
        L90:
            e3.b.b(r2)
            if (r3 == 0) goto L98
            e3.b.a(r3)
        L98:
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: e3.a.A():byte[]");
    }

    public boolean H() {
        int m10 = m("Orientation", 1);
        if (m10 == 2 || m10 == 7 || m10 == 4 || m10 == 5) {
            return true;
        }
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:70:0x00f1 A[Catch: all -> 0x00fa, Exception -> 0x00fd, TryCatch #17 {Exception -> 0x00fd, all -> 0x00fa, blocks: (B:68:0x00ed, B:70:0x00f1, B:77:0x010e, B:76:0x00ff), top: B:125:0x00ed }] */
    /* JADX WARN: Removed duplicated region for block: B:76:0x00ff A[Catch: all -> 0x00fa, Exception -> 0x00fd, TryCatch #17 {Exception -> 0x00fd, all -> 0x00fa, blocks: (B:68:0x00ed, B:70:0x00f1, B:77:0x010e, B:76:0x00ff), top: B:125:0x00ed }] */
    /* JADX WARN: Removed duplicated region for block: B:92:0x0152  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void c0() {
        /*
            Method dump skipped, instructions count: 378
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: e3.a.c0():void");
    }

    public void g0(double d10) {
        String str;
        if (d10 >= 0.0d) {
            str = "0";
        } else {
            str = "1";
        }
        h0("GPSAltitude", f.b(Math.abs(d10)).toString());
        h0("GPSAltitudeRef", str);
    }

    public void h0(String str, String str2) {
        e eVar;
        int i10;
        String str3;
        int i11;
        int i12;
        String str4;
        boolean z10;
        d dVar;
        Matcher matcher;
        String str5 = str;
        String str6 = str2;
        if (str5 != null) {
            if ("ISOSpeedRatings".equals(str5)) {
                if (f21288w) {
                    Log.d("ExifInterface", "setAttribute: Replacing TAG_ISO_SPEED_RATINGS with TAG_PHOTOGRAPHIC_SENSITIVITY.");
                }
                str5 = "PhotographicSensitivity";
            }
            int i13 = 2;
            String str7 = "/";
            int i14 = 1;
            if (str6 != null) {
                if (f21280o0.contains(str5) && !str6.contains("/")) {
                    try {
                        str6 = f.b(Double.parseDouble(str6)).toString();
                    } catch (NumberFormatException unused) {
                        Log.w("ExifInterface", "Invalid value for " + str5 + " : " + str6);
                        return;
                    }
                } else if (str5.equals("GPSTimeStamp")) {
                    if (!f21286u0.matcher(str6).find()) {
                        Log.w("ExifInterface", "Invalid value for " + str5 + " : " + str6);
                        return;
                    }
                    str6 = Integer.parseInt(matcher.group(1)) + "/1," + Integer.parseInt(matcher.group(2)) + "/1," + Integer.parseInt(matcher.group(3)) + "/1";
                } else if ("DateTime".equals(str5) || "DateTimeOriginal".equals(str5) || "DateTimeDigitized".equals(str5)) {
                    boolean find = f21287v0.matcher(str6).find();
                    boolean find2 = f21289w0.matcher(str6).find();
                    if (str6.length() == 19 && (find || find2)) {
                        if (find2) {
                            str6 = str6.replaceAll("-", ":");
                        }
                    } else {
                        Log.w("ExifInterface", "Invalid value for " + str5 + " : " + str6);
                        return;
                    }
                }
            }
            int i15 = 0;
            if ("Xmp".equals(str5)) {
                if (!this.f21298f[0].containsKey("Xmp") && !this.f21298f[5].containsKey("Xmp")) {
                    z10 = false;
                } else {
                    z10 = true;
                }
                int C2 = C(this.f21296d);
                if ((C2 == 2 && (this.f21313u != null || !z10)) || (C2 == 3 && !z10)) {
                    if (str6 != null) {
                        dVar = d.a(str6);
                    } else {
                        dVar = null;
                    }
                    this.f21313u = dVar;
                    return;
                }
            }
            int i16 = 0;
            while (i16 < f21276k0.length) {
                if ((i16 != 4 || this.f21301i) && (eVar = (e) f21279n0[i16].get(str5)) != null) {
                    if (str6 == null) {
                        this.f21298f[i16].remove(str5);
                    } else {
                        Pair D2 = D(str6);
                        if (eVar.f21331c != ((Integer) D2.first).intValue() && eVar.f21331c != ((Integer) D2.second).intValue()) {
                            int i17 = eVar.f21332d;
                            if (i17 != -1 && (i17 == ((Integer) D2.first).intValue() || eVar.f21332d == ((Integer) D2.second).intValue())) {
                                i10 = eVar.f21332d;
                            } else {
                                int i18 = eVar.f21331c;
                                if (i18 != i14 && i18 != 7 && i18 != i13) {
                                    if (f21288w) {
                                        StringBuilder sb2 = new StringBuilder();
                                        sb2.append("Given tag (");
                                        sb2.append(str5);
                                        sb2.append(") value didn't match with one of expected formats: ");
                                        String[] strArr = X;
                                        sb2.append(strArr[eVar.f21331c]);
                                        String str8 = "";
                                        if (eVar.f21332d == -1) {
                                            str4 = "";
                                        } else {
                                            str4 = ", " + strArr[eVar.f21332d];
                                        }
                                        sb2.append(str4);
                                        sb2.append(" (guess: ");
                                        sb2.append(strArr[((Integer) D2.first).intValue()]);
                                        if (((Integer) D2.second).intValue() != -1) {
                                            str8 = ", " + strArr[((Integer) D2.second).intValue()];
                                        }
                                        sb2.append(str8);
                                        sb2.append(")");
                                        Log.d("ExifInterface", sb2.toString());
                                    }
                                } else {
                                    i10 = i18;
                                }
                            }
                        } else {
                            i10 = eVar.f21331c;
                        }
                        switch (i10) {
                            case 1:
                                str3 = str7;
                                i11 = i14;
                                i12 = i15;
                                this.f21298f[i16].put(str5, d.a(str6));
                                break;
                            case 2:
                            case 7:
                                str3 = str7;
                                i11 = i14;
                                i12 = i15;
                                this.f21298f[i16].put(str5, d.e(str6));
                                break;
                            case 3:
                                str3 = str7;
                                i11 = i14;
                                i12 = i15;
                                String[] split = str6.split(",", -1);
                                int[] iArr = new int[split.length];
                                for (int i19 = i12; i19 < split.length; i19++) {
                                    iArr[i19] = Integer.parseInt(split[i19]);
                                }
                                this.f21298f[i16].put(str5, d.k(iArr, this.f21300h));
                                break;
                            case 4:
                                str3 = str7;
                                i11 = i14;
                                i12 = i15;
                                String[] split2 = str6.split(",", -1);
                                long[] jArr = new long[split2.length];
                                for (int i20 = i12; i20 < split2.length; i20++) {
                                    jArr[i20] = Long.parseLong(split2[i20]);
                                }
                                this.f21298f[i16].put(str5, d.g(jArr, this.f21300h));
                                break;
                            case 5:
                                i11 = i14;
                                i12 = i15;
                                String[] split3 = str6.split(",", -1);
                                f[] fVarArr = new f[split3.length];
                                int i21 = i12;
                                while (i21 < split3.length) {
                                    String[] split4 = split3[i21].split(str7, -1);
                                    fVarArr[i21] = new f((long) Double.parseDouble(split4[i12]), (long) Double.parseDouble(split4[i11]), null);
                                    i21++;
                                    str7 = str7;
                                }
                                str3 = str7;
                                this.f21298f[i16].put(str5, d.i(fVarArr, this.f21300h));
                                break;
                            case 6:
                            case 8:
                            case 11:
                            default:
                                if (f21288w) {
                                    Log.d("ExifInterface", "Data format isn't one of expected formats: " + i10);
                                    break;
                                }
                                break;
                            case 9:
                                i11 = i14;
                                i12 = i15;
                                String[] split5 = str6.split(",", -1);
                                int[] iArr2 = new int[split5.length];
                                for (int i22 = i12; i22 < split5.length; i22++) {
                                    iArr2[i22] = Integer.parseInt(split5[i22]);
                                }
                                this.f21298f[i16].put(str5, d.c(iArr2, this.f21300h));
                                str3 = str7;
                                break;
                            case 10:
                                String[] split6 = str6.split(",", -1);
                                f[] fVarArr2 = new f[split6.length];
                                int i23 = i15;
                                while (i23 < split6.length) {
                                    String[] split7 = split6[i23].split(str7, -1);
                                    int i24 = i14;
                                    int i25 = i23;
                                    fVarArr2[i25] = new f((long) Double.parseDouble(split7[i15]), (long) Double.parseDouble(split7[i24]), null);
                                    i23 = i25 + 1;
                                    i14 = i24;
                                    split6 = split6;
                                    i15 = i15;
                                }
                                i11 = i14;
                                i12 = i15;
                                this.f21298f[i16].put(str5, d.d(fVarArr2, this.f21300h));
                                str3 = str7;
                                break;
                            case 12:
                                String[] split8 = str6.split(",", -1);
                                double[] dArr = new double[split8.length];
                                for (int i26 = i15; i26 < split8.length; i26++) {
                                    dArr[i26] = Double.parseDouble(split8[i26]);
                                }
                                this.f21298f[i16].put(str5, d.b(dArr, this.f21300h));
                                break;
                        }
                        i16++;
                        i14 = i11;
                        i15 = i12;
                        str7 = str3;
                        i13 = 2;
                    }
                }
                str3 = str7;
                i11 = i14;
                i12 = i15;
                i16++;
                i14 = i11;
                i15 = i12;
                str7 = str3;
                i13 = 2;
            }
            return;
        }
        throw new NullPointerException("tag shouldn't be null");
    }

    public void i0(Location location) {
        if (location == null) {
            return;
        }
        h0("GPSProcessingMethod", location.getProvider());
        j0(location.getLatitude(), location.getLongitude());
        g0(location.getAltitude());
        h0("GPSSpeedRef", "K");
        h0("GPSSpeed", f.b((location.getSpeed() * ((float) TimeUnit.HOURS.toSeconds(1L))) / 1000.0f).toString());
        String[] split = V.format(new Date(location.getTime())).split("\\s+", -1);
        h0("GPSDateStamp", split[0]);
        h0("GPSTimeStamp", split[1]);
    }

    public double j(double d10) {
        double l10 = l("GPSAltitude", -1.0d);
        int i10 = -1;
        int m10 = m("GPSAltitudeRef", -1);
        if (l10 >= 0.0d && m10 >= 0) {
            if (m10 != 1) {
                i10 = 1;
            }
            return l10 * i10;
        }
        return d10;
    }

    public void j0(double d10, double d11) {
        String str;
        String str2;
        if (d10 >= -90.0d && d10 <= 90.0d && !Double.isNaN(d10)) {
            if (d11 >= -180.0d && d11 <= 180.0d && !Double.isNaN(d11)) {
                if (d10 >= 0.0d) {
                    str = "N";
                } else {
                    str = "S";
                }
                h0("GPSLatitudeRef", str);
                h0("GPSLatitude", f(Math.abs(d10)));
                if (d11 >= 0.0d) {
                    str2 = "E";
                } else {
                    str2 = "W";
                }
                h0("GPSLongitudeRef", str2);
                h0("GPSLongitude", f(Math.abs(d11)));
                return;
            }
            throw new IllegalArgumentException("Longitude value " + d11 + " is not valid.");
        }
        throw new IllegalArgumentException("Latitude value " + d10 + " is not valid.");
    }

    public String k(String str) {
        if (str != null) {
            d n10 = n(str);
            if (n10 == null) {
                return null;
            }
            if (str.equals("GPSTimeStamp")) {
                int i10 = n10.f21325a;
                if (i10 != 5 && i10 != 10) {
                    Log.w("ExifInterface", "GPS Timestamp format is not rational. format=" + n10.f21325a);
                    return null;
                }
                f[] fVarArr = (f[]) n10.o(this.f21300h);
                if (fVarArr != null && fVarArr.length == 3) {
                    f fVar = fVarArr[0];
                    Integer valueOf = Integer.valueOf((int) (((float) fVar.f21333a) / ((float) fVar.f21334b)));
                    f fVar2 = fVarArr[1];
                    Integer valueOf2 = Integer.valueOf((int) (((float) fVar2.f21333a) / ((float) fVar2.f21334b)));
                    f fVar3 = fVarArr[2];
                    return String.format("%02d:%02d:%02d", valueOf, valueOf2, Integer.valueOf((int) (((float) fVar3.f21333a) / ((float) fVar3.f21334b))));
                }
                Log.w("ExifInterface", "Invalid GPS Timestamp array. array=" + Arrays.toString(fVarArr));
                return null;
            } else if (f21280o0.contains(str)) {
                try {
                    return Double.toString(n10.l(this.f21300h));
                } catch (NumberFormatException unused) {
                    return null;
                }
            } else {
                return n10.n(this.f21300h);
            }
        }
        throw new NullPointerException("tag shouldn't be null");
    }

    public double l(String str, double d10) {
        if (str != null) {
            d n10 = n(str);
            if (n10 != null) {
                try {
                    return n10.l(this.f21300h);
                } catch (NumberFormatException unused) {
                    return d10;
                }
            }
            return d10;
        }
        throw new NullPointerException("tag shouldn't be null");
    }

    public int m(String str, int i10) {
        if (str != null) {
            d n10 = n(str);
            if (n10 != null) {
                try {
                    return n10.m(this.f21300h);
                } catch (NumberFormatException unused) {
                    return i10;
                }
            }
            return i10;
        }
        throw new NullPointerException("tag shouldn't be null");
    }

    public double[] q() {
        String k10 = k("GPSLatitude");
        String k11 = k("GPSLatitudeRef");
        String k12 = k("GPSLongitude");
        String k13 = k("GPSLongitudeRef");
        if (k10 != null && k11 != null && k12 != null && k13 != null) {
            try {
                return new double[]{g(k10, k11), g(k12, k13)};
            } catch (IllegalArgumentException unused) {
                Log.w("ExifInterface", "Latitude/longitude values are not parsable. " + String.format("latValue=%s, latRef=%s, lngValue=%s, lngRef=%s", k10, k11, k12, k13));
                return null;
            }
        }
        return null;
    }

    public int w() {
        switch (m("Orientation", 1)) {
            case 3:
            case 4:
                return 180;
            case 5:
            case 8:
                return 270;
            case 6:
            case 7:
                return 90;
            default:
                return 0;
        }
    }

    public byte[] z() {
        int i10 = this.f21307o;
        if (i10 != 6 && i10 != 7) {
            return null;
        }
        return A();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends InputStream implements DataInput {

        /* renamed from: d  reason: collision with root package name */
        protected final DataInputStream f21318d;

        /* renamed from: e  reason: collision with root package name */
        protected int f21319e;

        /* renamed from: i  reason: collision with root package name */
        private ByteOrder f21320i;

        /* renamed from: o  reason: collision with root package name */
        private byte[] f21321o;

        /* renamed from: p  reason: collision with root package name */
        private int f21322p;

        b(byte[] bArr) {
            this(new ByteArrayInputStream(bArr), ByteOrder.BIG_ENDIAN);
            this.f21322p = bArr.length;
        }

        public void B(int i10) {
            int i11 = 0;
            while (i11 < i10) {
                int i12 = i10 - i11;
                int skip = (int) this.f21318d.skip(i12);
                if (skip <= 0) {
                    if (this.f21321o == null) {
                        this.f21321o = new byte[8192];
                    }
                    skip = this.f21318d.read(this.f21321o, 0, Math.min(8192, i12));
                    if (skip == -1) {
                        throw new EOFException("Reached EOF while skipping " + i10 + " bytes.");
                    }
                }
                i11 += skip;
            }
            this.f21319e += i11;
        }

        public int a() {
            return this.f21322p;
        }

        @Override // java.io.InputStream
        public int available() {
            return this.f21318d.available();
        }

        public int h() {
            return this.f21319e;
        }

        public byte[] l() {
            byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
            int i10 = 0;
            while (true) {
                if (i10 == bArr.length) {
                    bArr = Arrays.copyOf(bArr, bArr.length * 2);
                }
                int read = this.f21318d.read(bArr, i10, bArr.length - i10);
                if (read != -1) {
                    i10 += read;
                    this.f21319e += read;
                } else {
                    return Arrays.copyOf(bArr, i10);
                }
            }
        }

        @Override // java.io.InputStream
        public void mark(int i10) {
            throw new UnsupportedOperationException("Mark is currently unsupported");
        }

        public long n() {
            return readInt() & 4294967295L;
        }

        @Override // java.io.InputStream
        public int read() {
            this.f21319e++;
            return this.f21318d.read();
        }

        @Override // java.io.DataInput
        public boolean readBoolean() {
            this.f21319e++;
            return this.f21318d.readBoolean();
        }

        @Override // java.io.DataInput
        public byte readByte() {
            this.f21319e++;
            int read = this.f21318d.read();
            if (read >= 0) {
                return (byte) read;
            }
            throw new EOFException();
        }

        @Override // java.io.DataInput
        public char readChar() {
            this.f21319e += 2;
            return this.f21318d.readChar();
        }

        @Override // java.io.DataInput
        public double readDouble() {
            return Double.longBitsToDouble(readLong());
        }

        @Override // java.io.DataInput
        public float readFloat() {
            return Float.intBitsToFloat(readInt());
        }

        @Override // java.io.DataInput
        public void readFully(byte[] bArr, int i10, int i11) {
            this.f21319e += i11;
            this.f21318d.readFully(bArr, i10, i11);
        }

        @Override // java.io.DataInput
        public int readInt() {
            this.f21319e += 4;
            int read = this.f21318d.read();
            int read2 = this.f21318d.read();
            int read3 = this.f21318d.read();
            int read4 = this.f21318d.read();
            if ((read | read2 | read3 | read4) >= 0) {
                ByteOrder byteOrder = this.f21320i;
                if (byteOrder == ByteOrder.LITTLE_ENDIAN) {
                    return (read4 << 24) + (read3 << 16) + (read2 << 8) + read;
                }
                if (byteOrder == ByteOrder.BIG_ENDIAN) {
                    return (read << 24) + (read2 << 16) + (read3 << 8) + read4;
                }
                throw new IOException("Invalid byte order: " + this.f21320i);
            }
            throw new EOFException();
        }

        @Override // java.io.DataInput
        public String readLine() {
            Log.d("ExifInterface", "Currently unsupported");
            return null;
        }

        @Override // java.io.DataInput
        public long readLong() {
            this.f21319e += 8;
            int read = this.f21318d.read();
            int read2 = this.f21318d.read();
            int read3 = this.f21318d.read();
            int read4 = this.f21318d.read();
            int read5 = this.f21318d.read();
            int read6 = this.f21318d.read();
            int read7 = this.f21318d.read();
            int read8 = this.f21318d.read();
            if ((read | read2 | read3 | read4 | read5 | read6 | read7 | read8) >= 0) {
                ByteOrder byteOrder = this.f21320i;
                if (byteOrder == ByteOrder.LITTLE_ENDIAN) {
                    return (read8 << 56) + (read7 << 48) + (read6 << 40) + (read5 << 32) + (read4 << 24) + (read3 << 16) + (read2 << 8) + read;
                }
                if (byteOrder == ByteOrder.BIG_ENDIAN) {
                    return (read << 56) + (read2 << 48) + (read3 << 40) + (read4 << 32) + (read5 << 24) + (read6 << 16) + (read7 << 8) + read8;
                }
                throw new IOException("Invalid byte order: " + this.f21320i);
            }
            throw new EOFException();
        }

        @Override // java.io.DataInput
        public short readShort() {
            this.f21319e += 2;
            int read = this.f21318d.read();
            int read2 = this.f21318d.read();
            if ((read | read2) >= 0) {
                ByteOrder byteOrder = this.f21320i;
                if (byteOrder == ByteOrder.LITTLE_ENDIAN) {
                    return (short) ((read2 << 8) + read);
                }
                if (byteOrder == ByteOrder.BIG_ENDIAN) {
                    return (short) ((read << 8) + read2);
                }
                throw new IOException("Invalid byte order: " + this.f21320i);
            }
            throw new EOFException();
        }

        @Override // java.io.DataInput
        public String readUTF() {
            this.f21319e += 2;
            return this.f21318d.readUTF();
        }

        @Override // java.io.DataInput
        public int readUnsignedByte() {
            this.f21319e++;
            return this.f21318d.readUnsignedByte();
        }

        @Override // java.io.DataInput
        public int readUnsignedShort() {
            this.f21319e += 2;
            int read = this.f21318d.read();
            int read2 = this.f21318d.read();
            if ((read | read2) >= 0) {
                ByteOrder byteOrder = this.f21320i;
                if (byteOrder == ByteOrder.LITTLE_ENDIAN) {
                    return (read2 << 8) + read;
                }
                if (byteOrder == ByteOrder.BIG_ENDIAN) {
                    return (read << 8) + read2;
                }
                throw new IOException("Invalid byte order: " + this.f21320i);
            }
            throw new EOFException();
        }

        @Override // java.io.InputStream
        public void reset() {
            throw new UnsupportedOperationException("Reset is currently unsupported");
        }

        @Override // java.io.DataInput
        public int skipBytes(int i10) {
            throw new UnsupportedOperationException("skipBytes is currently unsupported");
        }

        public void x(ByteOrder byteOrder) {
            this.f21320i = byteOrder;
        }

        b(InputStream inputStream) {
            this(inputStream, ByteOrder.BIG_ENDIAN);
        }

        @Override // java.io.InputStream
        public int read(byte[] bArr, int i10, int i11) {
            int read = this.f21318d.read(bArr, i10, i11);
            this.f21319e += read;
            return read;
        }

        @Override // java.io.DataInput
        public void readFully(byte[] bArr) {
            this.f21319e += bArr.length;
            this.f21318d.readFully(bArr);
        }

        b(InputStream inputStream, ByteOrder byteOrder) {
            DataInputStream dataInputStream = new DataInputStream(inputStream);
            this.f21318d = dataInputStream;
            dataInputStream.mark(0);
            this.f21319e = 0;
            this.f21320i = byteOrder;
            this.f21322p = inputStream instanceof b ? ((b) inputStream).a() : -1;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g extends b {
        g(byte[] bArr) {
            super(bArr);
            this.f21318d.mark(Integer.MAX_VALUE);
        }

        public void E(long j10) {
            int i10 = this.f21319e;
            if (i10 > j10) {
                this.f21319e = 0;
                this.f21318d.reset();
            } else {
                j10 -= i10;
            }
            B((int) j10);
        }

        g(InputStream inputStream) {
            super(inputStream);
            if (inputStream.markSupported()) {
                this.f21318d.mark(Integer.MAX_VALUE);
                return;
            }
            throw new IllegalArgumentException("Cannot create SeekableByteOrderedDataInputStream with stream that does not support mark/reset");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e {

        /* renamed from: a  reason: collision with root package name */
        public final int f21329a;

        /* renamed from: b  reason: collision with root package name */
        public final String f21330b;

        /* renamed from: c  reason: collision with root package name */
        public final int f21331c;

        /* renamed from: d  reason: collision with root package name */
        public final int f21332d;

        e(String str, int i10, int i11) {
            this.f21330b = str;
            this.f21329a = i10;
            this.f21331c = i11;
            this.f21332d = -1;
        }

        boolean a(int i10) {
            int i11;
            int i12 = this.f21331c;
            if (i12 == 7 || i10 == 7 || i12 == i10 || (i11 = this.f21332d) == i10) {
                return true;
            }
            if ((i12 == 4 || i11 == 4) && i10 == 3) {
                return true;
            }
            if ((i12 == 9 || i11 == 9) && i10 == 8) {
                return true;
            }
            if ((i12 == 12 || i11 == 12) && i10 == 11) {
                return true;
            }
            return false;
        }

        e(String str, int i10, int i11, int i12) {
            this.f21330b = str;
            this.f21329a = i10;
            this.f21331c = i11;
            this.f21332d = i12;
        }
    }

    public a(String str) {
        e[][] eVarArr = f21276k0;
        this.f21298f = new HashMap[eVarArr.length];
        this.f21299g = new HashSet(eVarArr.length);
        this.f21300h = ByteOrder.BIG_ENDIAN;
        if (str != null) {
            G(str);
            return;
        }
        throw new NullPointerException("filename cannot be null");
    }

    public a(InputStream inputStream) {
        this(inputStream, 0);
    }

    public a(InputStream inputStream, int i10) {
        e[][] eVarArr = f21276k0;
        this.f21298f = new HashMap[eVarArr.length];
        this.f21299g = new HashSet(eVarArr.length);
        this.f21300h = ByteOrder.BIG_ENDIAN;
        if (inputStream != null) {
            this.f21293a = null;
            boolean z10 = i10 == 1;
            this.f21297e = z10;
            if (z10) {
                this.f21295c = null;
                this.f21294b = null;
            } else if (inputStream instanceof AssetManager.AssetInputStream) {
                this.f21295c = (AssetManager.AssetInputStream) inputStream;
                this.f21294b = null;
            } else {
                if (inputStream instanceof FileInputStream) {
                    FileInputStream fileInputStream = (FileInputStream) inputStream;
                    if (O(fileInputStream.getFD())) {
                        this.f21295c = null;
                        this.f21294b = fileInputStream.getFD();
                    }
                }
                this.f21295c = null;
                this.f21294b = null;
            }
            T(inputStream);
            return;
        }
        throw new NullPointerException("inputStream cannot be null");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: e3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class C0275a extends MediaDataSource {

        /* renamed from: d  reason: collision with root package name */
        long f21315d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ g f21316e;

        C0275a(g gVar) {
            this.f21316e = gVar;
        }

        @Override // android.media.MediaDataSource
        public long getSize() {
            return -1L;
        }

        @Override // android.media.MediaDataSource
        public int readAt(long j10, byte[] bArr, int i10, int i11) {
            if (i11 == 0) {
                return 0;
            }
            if (j10 < 0) {
                return -1;
            }
            try {
                long j11 = this.f21315d;
                if (j11 != j10) {
                    if (j11 >= 0 && j10 >= j11 + this.f21316e.available()) {
                        return -1;
                    }
                    this.f21316e.E(j10);
                    this.f21315d = j10;
                }
                if (i11 > this.f21316e.available()) {
                    i11 = this.f21316e.available();
                }
                int read = this.f21316e.read(bArr, i10, i11);
                if (read >= 0) {
                    this.f21315d += read;
                    return read;
                }
            } catch (IOException unused) {
            }
            this.f21315d = -1L;
            return -1;
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
        }
    }
}
