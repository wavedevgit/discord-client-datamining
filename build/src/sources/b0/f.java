package b0;

import android.location.Location;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: c  reason: collision with root package name */
    private static final String f6319c = "f";

    /* renamed from: d  reason: collision with root package name */
    private static final ThreadLocal f6320d = new a();

    /* renamed from: e  reason: collision with root package name */
    private static final ThreadLocal f6321e = new b();

    /* renamed from: f  reason: collision with root package name */
    private static final ThreadLocal f6322f = new c();

    /* renamed from: g  reason: collision with root package name */
    private static final List f6323g = n();

    /* renamed from: h  reason: collision with root package name */
    private static final List f6324h = Arrays.asList("ImageWidth", "ImageLength", "PixelXDimension", "PixelYDimension", "Compression", "JPEGInterchangeFormat", "JPEGInterchangeFormatLength", "ThumbnailImageLength", "ThumbnailImageWidth", "ThumbnailOrientation");

    /* renamed from: a  reason: collision with root package name */
    private final e3.a f6325a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f6326b = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends ThreadLocal {
        a() {
        }

        @Override // java.lang.ThreadLocal
        /* renamed from: a */
        public SimpleDateFormat initialValue() {
            return new SimpleDateFormat("yyyy:MM:dd", Locale.US);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends ThreadLocal {
        b() {
        }

        @Override // java.lang.ThreadLocal
        /* renamed from: a */
        public SimpleDateFormat initialValue() {
            return new SimpleDateFormat("HH:mm:ss", Locale.US);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c extends ThreadLocal {
        c() {
        }

        @Override // java.lang.ThreadLocal
        /* renamed from: a */
        public SimpleDateFormat initialValue() {
            return new SimpleDateFormat("yyyy:MM:dd HH:mm:ss", Locale.US);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            final double f6327a;

            a(double d10) {
                this.f6327a = d10;
            }

            double a() {
                return this.f6327a / 2.23694d;
            }
        }

        static a a(double d10) {
            return new a(d10 * 0.621371d);
        }

        static a b(double d10) {
            return new a(d10 * 1.15078d);
        }

        static a c(double d10) {
            return new a(d10);
        }
    }

    private f(e3.a aVar) {
        this.f6325a = aVar;
    }

    private void a() {
        long currentTimeMillis = System.currentTimeMillis();
        String f10 = f(currentTimeMillis);
        this.f6325a.h0("DateTime", f10);
        try {
            this.f6325a.h0("SubSecTime", Long.toString(currentTimeMillis - d(f10).getTime()));
        } catch (ParseException unused) {
        }
    }

    private static Date c(String str) {
        return ((SimpleDateFormat) f6320d.get()).parse(str);
    }

    private static Date d(String str) {
        return ((SimpleDateFormat) f6322f.get()).parse(str);
    }

    private static Date e(String str) {
        return ((SimpleDateFormat) f6321e.get()).parse(str);
    }

    private static String f(long j10) {
        return ((SimpleDateFormat) f6322f.get()).format(new Date(j10));
    }

    public static f h(File file) {
        return i(file.toString());
    }

    public static f i(String str) {
        return new f(new e3.a(str));
    }

    public static f j(androidx.camera.core.n nVar) {
        ByteBuffer e10 = nVar.c1()[0].e();
        e10.rewind();
        byte[] bArr = new byte[e10.capacity()];
        e10.get(bArr);
        return k(new ByteArrayInputStream(bArr));
    }

    public static f k(InputStream inputStream) {
        return new f(new e3.a(inputStream));
    }

    public static List n() {
        return Arrays.asList("ImageWidth", "ImageLength", "BitsPerSample", "Compression", "PhotometricInterpretation", "Orientation", "SamplesPerPixel", "PlanarConfiguration", "YCbCrSubSampling", "YCbCrPositioning", "XResolution", "YResolution", "ResolutionUnit", "StripOffsets", "RowsPerStrip", "StripByteCounts", "JPEGInterchangeFormat", "JPEGInterchangeFormatLength", "TransferFunction", "WhitePoint", "PrimaryChromaticities", "YCbCrCoefficients", "ReferenceBlackWhite", "DateTime", "ImageDescription", "Make", "Model", "Software", "Artist", "Copyright", "ExifVersion", "FlashpixVersion", "ColorSpace", "Gamma", "PixelXDimension", "PixelYDimension", "ComponentsConfiguration", "CompressedBitsPerPixel", "MakerNote", "UserComment", "RelatedSoundFile", "DateTimeOriginal", "DateTimeDigitized", "OffsetTime", "OffsetTimeOriginal", "OffsetTimeDigitized", "SubSecTime", "SubSecTimeOriginal", "SubSecTimeDigitized", "ExposureTime", "FNumber", "ExposureProgram", "SpectralSensitivity", "PhotographicSensitivity", "OECF", "SensitivityType", "StandardOutputSensitivity", "RecommendedExposureIndex", "ISOSpeed", "ISOSpeedLatitudeyyy", "ISOSpeedLatitudezzz", "ShutterSpeedValue", "ApertureValue", "BrightnessValue", "ExposureBiasValue", "MaxApertureValue", "SubjectDistance", "MeteringMode", "LightSource", "Flash", "SubjectArea", "FocalLength", "FlashEnergy", "SpatialFrequencyResponse", "FocalPlaneXResolution", "FocalPlaneYResolution", "FocalPlaneResolutionUnit", "SubjectLocation", "ExposureIndex", "SensingMethod", "FileSource", "SceneType", "CFAPattern", "CustomRendered", "ExposureMode", "WhiteBalance", "DigitalZoomRatio", "FocalLengthIn35mmFilm", "SceneCaptureType", "GainControl", "Contrast", "Saturation", "Sharpness", "DeviceSettingDescription", "SubjectDistanceRange", "ImageUniqueID", "CameraOwnerName", "BodySerialNumber", "LensSpecification", "LensMake", "LensModel", "LensSerialNumber", "GPSVersionID", "GPSLatitudeRef", "GPSLatitude", "GPSLongitudeRef", "GPSLongitude", "GPSAltitudeRef", "GPSAltitude", "GPSTimeStamp", "GPSSatellites", "GPSStatus", "GPSMeasureMode", "GPSDOP", "GPSSpeedRef", "GPSSpeed", "GPSTrackRef", "GPSTrack", "GPSImgDirectionRef", "GPSImgDirection", "GPSMapDatum", "GPSDestLatitudeRef", "GPSDestLatitude", "GPSDestLongitudeRef", "GPSDestLongitude", "GPSDestBearingRef", "GPSDestBearing", "GPSDestDistanceRef", "GPSDestDistance", "GPSProcessingMethod", "GPSAreaInformation", "GPSDateStamp", "GPSDifferential", "GPSHPositioningError", "InteroperabilityIndex", "ThumbnailImageLength", "ThumbnailImageWidth", "ThumbnailOrientation", "DNGVersion", "DefaultCropSize", "ThumbnailImage", "PreviewImageStart", "PreviewImageLength", "AspectFrame", "SensorBottomBorder", "SensorLeftBorder", "SensorRightBorder", "SensorTopBorder", "ISO", "JpgFromRaw", "Xmp", "NewSubfileType", "SubfileType");
    }

    private long x(String str) {
        if (str == null) {
            return -1L;
        }
        try {
            return d(str).getTime();
        } catch (ParseException unused) {
            return -1L;
        }
    }

    private long y(String str, String str2) {
        if (str == null && str2 == null) {
            return -1L;
        }
        if (str2 == null) {
            try {
                return c(str).getTime();
            } catch (ParseException unused) {
                return -1L;
            }
        } else if (str == null) {
            try {
                return e(str2).getTime();
            } catch (ParseException unused2) {
                return -1L;
            }
        } else {
            return x(str + " " + str2);
        }
    }

    public void A() {
        if (!this.f6326b) {
            a();
        }
        this.f6325a.c0();
    }

    public void b(Location location) {
        this.f6325a.i0(location);
    }

    public void g(f fVar) {
        ArrayList<String> arrayList = new ArrayList(f6323g);
        arrayList.removeAll(f6324h);
        for (String str : arrayList) {
            String k10 = this.f6325a.k(str);
            String k11 = fVar.f6325a.k(str);
            if (k10 != null && !k10.equals(k11)) {
                fVar.f6325a.h0(str, k10);
            }
        }
    }

    public void l() {
        int i10;
        switch (r()) {
            case 2:
                i10 = 1;
                break;
            case 3:
                i10 = 4;
                break;
            case 4:
                i10 = 3;
                break;
            case 5:
                i10 = 6;
                break;
            case 6:
                i10 = 5;
                break;
            case 7:
                i10 = 8;
                break;
            case 8:
                i10 = 7;
                break;
            default:
                i10 = 2;
                break;
        }
        this.f6325a.h0("Orientation", String.valueOf(i10));
    }

    public void m() {
        int i10;
        switch (r()) {
            case 2:
                i10 = 3;
                break;
            case 3:
                i10 = 2;
                break;
            case 4:
                i10 = 1;
                break;
            case 5:
                i10 = 8;
                break;
            case 6:
                i10 = 7;
                break;
            case 7:
                i10 = 6;
                break;
            case 8:
                i10 = 5;
                break;
            default:
                i10 = 4;
                break;
        }
        this.f6325a.h0("Orientation", String.valueOf(i10));
    }

    public String o() {
        return this.f6325a.k("ImageDescription");
    }

    public int p() {
        return this.f6325a.m("ImageLength", 0);
    }

    public Location q() {
        double a10;
        String k10 = this.f6325a.k("GPSProcessingMethod");
        double[] q10 = this.f6325a.q();
        double j10 = this.f6325a.j(0.0d);
        double l10 = this.f6325a.l("GPSSpeed", 0.0d);
        String k11 = this.f6325a.k("GPSSpeedRef");
        if (k11 == null) {
            k11 = "K";
        }
        long y10 = y(this.f6325a.k("GPSDateStamp"), this.f6325a.k("GPSTimeStamp"));
        if (q10 == null) {
            return null;
        }
        if (k10 == null) {
            k10 = f6319c;
        }
        Location location = new Location(k10);
        location.setLatitude(q10[0]);
        location.setLongitude(q10[1]);
        if (j10 != 0.0d) {
            location.setAltitude(j10);
        }
        if (l10 != 0.0d) {
            int hashCode = k11.hashCode();
            if (hashCode != 75) {
                if (hashCode != 77) {
                    if (hashCode == 78 && k11.equals("N")) {
                        a10 = d.b(l10).a();
                        location.setSpeed((float) a10);
                    }
                } else if (k11.equals("M")) {
                    a10 = d.c(l10).a();
                    location.setSpeed((float) a10);
                }
            } else {
                k11.equals("K");
            }
            a10 = d.a(l10).a();
            location.setSpeed((float) a10);
        }
        if (y10 != -1) {
            location.setTime(y10);
        }
        return location;
    }

    public int r() {
        return this.f6325a.m("Orientation", 0);
    }

    public int s() {
        switch (r()) {
            case 3:
            case 4:
                return 180;
            case 5:
                return 270;
            case 6:
            case 7:
                return 90;
            case 8:
                return 270;
            default:
                return 0;
        }
    }

    public long t() {
        long x10 = x(this.f6325a.k("DateTimeOriginal"));
        if (x10 == -1) {
            return -1L;
        }
        String k10 = this.f6325a.k("SubSecTimeOriginal");
        if (k10 != null) {
            try {
                long parseLong = Long.parseLong(k10);
                while (parseLong > 1000) {
                    parseLong /= 10;
                }
                return x10 + parseLong;
            } catch (NumberFormatException unused) {
                return x10;
            }
        }
        return x10;
    }

    public String toString() {
        return String.format(Locale.ENGLISH, "Exif{width=%s, height=%s, rotation=%d, isFlippedVertically=%s, isFlippedHorizontally=%s, location=%s, timestamp=%s, description=%s}", Integer.valueOf(u()), Integer.valueOf(p()), Integer.valueOf(s()), Boolean.valueOf(w()), Boolean.valueOf(v()), q(), Long.valueOf(t()), o());
    }

    public int u() {
        return this.f6325a.m("ImageWidth", 0);
    }

    public boolean v() {
        if (r() != 2) {
            return false;
        }
        return true;
    }

    public boolean w() {
        int r10 = r();
        if (r10 == 4 || r10 == 5 || r10 == 7) {
            return true;
        }
        return false;
    }

    public void z(int i10) {
        if (i10 % 90 != 0) {
            y0.l(f6319c, String.format(Locale.US, "Can only rotate in right angles (eg. 0, 90, 180, 270). %d is unsupported.", Integer.valueOf(i10)));
            this.f6325a.h0("Orientation", String.valueOf(0));
            return;
        }
        int i11 = i10 % 360;
        int r10 = r();
        while (i11 < 0) {
            i11 += 90;
            switch (r10) {
                case 2:
                    r10 = 5;
                    break;
                case 3:
                case 8:
                    r10 = 6;
                    break;
                case 4:
                    r10 = 7;
                    break;
                case 5:
                    r10 = 4;
                    break;
                case 6:
                    r10 = 1;
                    break;
                case 7:
                    r10 = 2;
                    break;
                default:
                    r10 = 8;
                    break;
            }
        }
        while (i11 > 0) {
            i11 -= 90;
            switch (r10) {
                case 2:
                    r10 = 7;
                    break;
                case 3:
                    r10 = 8;
                    break;
                case 4:
                    r10 = 5;
                    break;
                case 5:
                    r10 = 2;
                    break;
                case 6:
                    r10 = 3;
                    break;
                case 7:
                    r10 = 4;
                    break;
                case 8:
                    r10 = 1;
                    break;
                default:
                    r10 = 6;
                    break;
            }
        }
        this.f6325a.h0("Orientation", String.valueOf(r10));
    }
}
