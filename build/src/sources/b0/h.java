package b0;

import a0.t;
import android.os.Build;
import android.util.Pair;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.nio.ByteOrder;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: c  reason: collision with root package name */
    static final String[] f6043c = {"", "BYTE", "STRING", "USHORT", "ULONG", "URATIONAL", "SBYTE", "UNDEFINED", "SSHORT", "SLONG", "SRATIONAL", "SINGLE", "DOUBLE", "IFD"};

    /* renamed from: d  reason: collision with root package name */
    private static final j[] f6044d;

    /* renamed from: e  reason: collision with root package name */
    private static final j[] f6045e;

    /* renamed from: f  reason: collision with root package name */
    private static final j[] f6046f;

    /* renamed from: g  reason: collision with root package name */
    static final j[] f6047g;

    /* renamed from: h  reason: collision with root package name */
    private static final j[] f6048h;

    /* renamed from: i  reason: collision with root package name */
    static final j[][] f6049i;

    /* renamed from: j  reason: collision with root package name */
    static final HashSet f6050j;

    /* renamed from: a  reason: collision with root package name */
    private final List f6051a;

    /* renamed from: b  reason: collision with root package name */
    private final ByteOrder f6052b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f6053a;

        static {
            int[] iArr = new int[t.values().length];
            f6053a = iArr;
            try {
                iArr[t.READY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f6053a[t.NONE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f6053a[t.FIRED.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: c  reason: collision with root package name */
        private static final Pattern f6054c = Pattern.compile("^(\\d{2}):(\\d{2}):(\\d{2})$");

        /* renamed from: d  reason: collision with root package name */
        private static final Pattern f6055d = Pattern.compile("^(\\d{4}):(\\d{2}):(\\d{2})\\s(\\d{2}):(\\d{2}):(\\d{2})$");

        /* renamed from: e  reason: collision with root package name */
        private static final Pattern f6056e = Pattern.compile("^(\\d{4})-(\\d{2})-(\\d{2})\\s(\\d{2}):(\\d{2}):(\\d{2})$");

        /* renamed from: f  reason: collision with root package name */
        static final List f6057f = Collections.list(new a());

        /* renamed from: a  reason: collision with root package name */
        final List f6058a = Collections.list(new C0093b());

        /* renamed from: b  reason: collision with root package name */
        private final ByteOrder f6059b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Enumeration {

            /* renamed from: a  reason: collision with root package name */
            int f6060a = 0;

            a() {
            }

            @Override // java.util.Enumeration
            /* renamed from: a */
            public HashMap nextElement() {
                j[] jVarArr;
                HashMap hashMap = new HashMap();
                for (j jVar : h.f6049i[this.f6060a]) {
                    hashMap.put(jVar.f6076b, jVar);
                }
                this.f6060a++;
                return hashMap;
            }

            @Override // java.util.Enumeration
            public boolean hasMoreElements() {
                if (this.f6060a < h.f6049i.length) {
                    return true;
                }
                return false;
            }
        }

        /* renamed from: b0.h$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class C0093b implements Enumeration {

            /* renamed from: a  reason: collision with root package name */
            int f6061a = 0;

            C0093b() {
            }

            @Override // java.util.Enumeration
            /* renamed from: a */
            public Map nextElement() {
                this.f6061a++;
                return new HashMap();
            }

            @Override // java.util.Enumeration
            public boolean hasMoreElements() {
                if (this.f6061a < h.f6049i.length) {
                    return true;
                }
                return false;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public class c implements Enumeration {

            /* renamed from: a  reason: collision with root package name */
            final Enumeration f6063a;

            c() {
                this.f6063a = Collections.enumeration(b.this.f6058a);
            }

            @Override // java.util.Enumeration
            /* renamed from: a */
            public Map nextElement() {
                return new HashMap((Map) this.f6063a.nextElement());
            }

            @Override // java.util.Enumeration
            public boolean hasMoreElements() {
                return this.f6063a.hasMoreElements();
            }
        }

        b(ByteOrder byteOrder) {
            this.f6059b = byteOrder;
        }

        private static Pair b(String str) {
            int intValue;
            int i10;
            if (str.contains(",")) {
                String[] split = str.split(",", -1);
                Pair b10 = b(split[0]);
                if (((Integer) b10.first).intValue() == 2) {
                    return b10;
                }
                for (int i11 = 1; i11 < split.length; i11++) {
                    Pair b11 = b(split[i11]);
                    if (!((Integer) b11.first).equals(b10.first) && !((Integer) b11.second).equals(b10.first)) {
                        intValue = -1;
                    } else {
                        intValue = ((Integer) b10.first).intValue();
                    }
                    if (((Integer) b10.second).intValue() != -1 && (((Integer) b11.first).equals(b10.second) || ((Integer) b11.second).equals(b10.second))) {
                        i10 = ((Integer) b10.second).intValue();
                    } else {
                        i10 = -1;
                    }
                    if (intValue == -1 && i10 == -1) {
                        return new Pair(2, -1);
                    }
                    if (intValue == -1) {
                        b10 = new Pair(Integer.valueOf(i10), -1);
                    } else if (i10 == -1) {
                        b10 = new Pair(Integer.valueOf(intValue), -1);
                    }
                }
                return b10;
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

        private void d(String str, String str2, List list) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                if (((Map) it.next()).containsKey(str)) {
                    return;
                }
            }
            e(str, str2, list);
        }

        /* JADX WARN: Code restructure failed: missing block: B:61:0x018c, code lost:
            if (r7 != r0) goto L100;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private void e(java.lang.String r17, java.lang.String r18, java.util.List r19) {
            /*
                Method dump skipped, instructions count: 778
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: b0.h.b.e(java.lang.String, java.lang.String, java.util.List):void");
        }

        public h a() {
            ArrayList list = Collections.list(new c());
            if (!((Map) list.get(1)).isEmpty()) {
                d("ExposureProgram", String.valueOf(0), list);
                d("ExifVersion", "0230", list);
                d("ComponentsConfiguration", "1,2,3,0", list);
                d("MeteringMode", String.valueOf(0), list);
                d("LightSource", String.valueOf(0), list);
                d("FlashpixVersion", "0100", list);
                d("FocalPlaneResolutionUnit", String.valueOf(2), list);
                d("FileSource", String.valueOf(3), list);
                d("SceneType", String.valueOf(1), list);
                d("CustomRendered", String.valueOf(0), list);
                d("SceneCaptureType", String.valueOf(0), list);
                d("Contrast", String.valueOf(0), list);
                d("Saturation", String.valueOf(0), list);
                d("Sharpness", String.valueOf(0), list);
            }
            if (!((Map) list.get(2)).isEmpty()) {
                d("GPSVersionID", "2300", list);
                d("GPSSpeedRef", "K", list);
                d("GPSTrackRef", "T", list);
                d("GPSImgDirectionRef", "T", list);
                d("GPSDestBearingRef", "T", list);
                d("GPSDestDistanceRef", "K", list);
            }
            return new h(this.f6059b, list);
        }

        public b c(String str, String str2) {
            e(str, str2, this.f6058a);
            return this;
        }

        public b f(long j10) {
            return c("ExposureTime", String.valueOf(j10 / TimeUnit.SECONDS.toNanos(1L)));
        }

        public b g(t tVar) {
            int i10;
            if (tVar == t.UNKNOWN) {
                return this;
            }
            int i11 = a.f6053a[tVar.ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3) {
                        y0.l("ExifData", "Unknown flash state: " + tVar);
                        return this;
                    }
                    i10 = 1;
                } else {
                    i10 = 32;
                }
            } else {
                i10 = 0;
            }
            if ((i10 & 1) == 1) {
                c("LightSource", String.valueOf(4));
            }
            return c("Flash", String.valueOf(i10));
        }

        public b h(float f10) {
            return c("FocalLength", new k(f10 * 1000.0f, 1000L).toString());
        }

        public b i(int i10) {
            return c("ImageLength", String.valueOf(i10));
        }

        public b j(int i10) {
            return c("ImageWidth", String.valueOf(i10));
        }

        public b k(int i10) {
            return c("SensitivityType", String.valueOf(3)).c("PhotographicSensitivity", String.valueOf(Math.min(65535, i10)));
        }

        public b l(float f10) {
            return c("FNumber", String.valueOf(f10));
        }

        public b m(int i10) {
            int i11;
            if (i10 != 0) {
                if (i10 != 90) {
                    if (i10 != 180) {
                        if (i10 != 270) {
                            y0.l("ExifData", "Unexpected orientation value: " + i10 + ". Must be one of 0, 90, 180, 270.");
                            i11 = 0;
                        } else {
                            i11 = 8;
                        }
                    } else {
                        i11 = 3;
                    }
                } else {
                    i11 = 6;
                }
            } else {
                i11 = 1;
            }
            return c("Orientation", String.valueOf(i11));
        }

        public b n(c cVar) {
            String valueOf;
            int ordinal = cVar.ordinal();
            if (ordinal != 0) {
                if (ordinal != 1) {
                    valueOf = null;
                } else {
                    valueOf = String.valueOf(1);
                }
            } else {
                valueOf = String.valueOf(0);
            }
            return c("WhiteBalance", valueOf);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum c {
        AUTO,
        MANUAL
    }

    static {
        j[] jVarArr = {new j("ImageWidth", IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, 3, 4), new j("ImageLength", 257, 3, 4), new j("Make", 271, 2), new j("Model", 272, 2), new j("Orientation", 274, 3), new j("XResolution", 282, 5), new j("YResolution", 283, 5), new j("ResolutionUnit", 296, 3), new j("Software", 305, 2), new j("DateTime", 306, 2), new j("YCbCrPositioning", 531, 3), new j("SubIFDPointer", 330, 4), new j("ExifIFDPointer", 34665, 4), new j("GPSInfoIFDPointer", 34853, 4)};
        f6044d = jVarArr;
        j[] jVarArr2 = {new j("ExposureTime", 33434, 5), new j("FNumber", 33437, 5), new j("ExposureProgram", 34850, 3), new j("PhotographicSensitivity", 34855, 3), new j("SensitivityType", 34864, 3), new j("ExifVersion", 36864, 2), new j("DateTimeOriginal", 36867, 2), new j("DateTimeDigitized", 36868, 2), new j("ComponentsConfiguration", 37121, 7), new j("ShutterSpeedValue", 37377, 10), new j("ApertureValue", 37378, 5), new j("BrightnessValue", 37379, 10), new j("ExposureBiasValue", 37380, 10), new j("MaxApertureValue", 37381, 5), new j("MeteringMode", 37383, 3), new j("LightSource", 37384, 3), new j("Flash", 37385, 3), new j("FocalLength", 37386, 5), new j("SubSecTime", 37520, 2), new j("SubSecTimeOriginal", 37521, 2), new j("SubSecTimeDigitized", 37522, 2), new j("FlashpixVersion", 40960, 7), new j("ColorSpace", 40961, 3), new j("PixelXDimension", 40962, 3, 4), new j("PixelYDimension", 40963, 3, 4), new j("InteroperabilityIFDPointer", 40965, 4), new j("FocalPlaneResolutionUnit", 41488, 3), new j("SensingMethod", 41495, 3), new j("FileSource", 41728, 7), new j("SceneType", 41729, 7), new j("CustomRendered", 41985, 3), new j("ExposureMode", 41986, 3), new j("WhiteBalance", 41987, 3), new j("SceneCaptureType", 41990, 3), new j("Contrast", 41992, 3), new j("Saturation", 41993, 3), new j("Sharpness", 41994, 3)};
        f6045e = jVarArr2;
        j[] jVarArr3 = {new j("GPSVersionID", 0, 1), new j("GPSLatitudeRef", 1, 2), new j("GPSLatitude", 2, 5, 10), new j("GPSLongitudeRef", 3, 2), new j("GPSLongitude", 4, 5, 10), new j("GPSAltitudeRef", 5, 1), new j("GPSAltitude", 6, 5), new j("GPSTimeStamp", 7, 5), new j("GPSSpeedRef", 12, 2), new j("GPSTrackRef", 14, 2), new j("GPSImgDirectionRef", 16, 2), new j("GPSDestBearingRef", 23, 2), new j("GPSDestDistanceRef", 25, 2)};
        f6046f = jVarArr3;
        f6047g = new j[]{new j("SubIFDPointer", 330, 4), new j("ExifIFDPointer", 34665, 4), new j("GPSInfoIFDPointer", 34853, 4), new j("InteroperabilityIFDPointer", 40965, 4)};
        j[] jVarArr4 = {new j("InteroperabilityIndex", 1, 2)};
        f6048h = jVarArr4;
        f6049i = new j[][]{jVarArr, jVarArr2, jVarArr3, jVarArr4};
        f6050j = new HashSet(Arrays.asList("FNumber", "ExposureTime", "GPSTimeStamp"));
    }

    h(ByteOrder byteOrder, List list) {
        boolean z10;
        if (list.size() == f6049i.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.j(z10, "Malformed attributes list. Number of IFDs mismatch.");
        this.f6052b = byteOrder;
        this.f6051a = list;
    }

    public static b a() {
        return new b(ByteOrder.BIG_ENDIAN).c("Orientation", String.valueOf(1)).c("XResolution", "72/1").c("YResolution", "72/1").c("ResolutionUnit", String.valueOf(2)).c("YCbCrPositioning", String.valueOf(1)).c("Make", Build.MANUFACTURER).c("Model", Build.MODEL);
    }

    public static h b(androidx.camera.core.n nVar, int i10) {
        b a10 = a();
        if (nVar.A() != null) {
            nVar.A().b(a10);
        }
        a10.m(i10);
        return a10.j(nVar.getWidth()).i(nVar.getHeight()).a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Map c(int i10) {
        int length = f6049i.length;
        b2.e.c(i10, 0, length, "Invalid IFD index: " + i10 + ". Index should be between [0, EXIF_TAGS.length] ");
        return (Map) this.f6051a.get(i10);
    }

    public ByteOrder d() {
        return this.f6052b;
    }
}
