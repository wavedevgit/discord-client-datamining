package fd;

import android.graphics.Point;
import android.media.MediaCodecInfo;
import android.util.Pair;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.decoder.DecoderReuseEvaluation;
import java.util.List;
import ne.c0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    public final String f23786a;

    /* renamed from: b  reason: collision with root package name */
    public final String f23787b;

    /* renamed from: c  reason: collision with root package name */
    public final String f23788c;

    /* renamed from: d  reason: collision with root package name */
    public final MediaCodecInfo.CodecCapabilities f23789d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f23790e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f23791f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f23792g;

    /* renamed from: h  reason: collision with root package name */
    public final boolean f23793h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f23794i;

    /* renamed from: j  reason: collision with root package name */
    public final boolean f23795j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f23796k;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public static int a(MediaCodecInfo.VideoCapabilities videoCapabilities, int i10, int i11, double d10) {
            List<MediaCodecInfo.VideoCapabilities.PerformancePoint> supportedPerformancePoints = videoCapabilities.getSupportedPerformancePoints();
            if (supportedPerformancePoints == null || supportedPerformancePoints.isEmpty() || q.a()) {
                return 0;
            }
            o.a();
            MediaCodecInfo.VideoCapabilities.PerformancePoint a10 = n.a(i10, i11, (int) d10);
            for (int i12 = 0; i12 < supportedPerformancePoints.size(); i12++) {
                if (p.a(supportedPerformancePoints.get(i12)).covers(a10)) {
                    return 2;
                }
            }
            return 1;
        }
    }

    q(String str, String str2, String str3, MediaCodecInfo.CodecCapabilities codecCapabilities, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15) {
        this.f23786a = (String) ne.a.e(str);
        this.f23787b = str2;
        this.f23788c = str3;
        this.f23789d = codecCapabilities;
        this.f23793h = z10;
        this.f23794i = z11;
        this.f23795j = z12;
        this.f23790e = z13;
        this.f23791f = z14;
        this.f23792g = z15;
        this.f23796k = c0.s(str2);
    }

    private static boolean A(String str) {
        if (w0.f40200d.startsWith("SM-T230") && "OMX.MARVELL.VIDEO.HW.CODA7542DECODER".equals(str)) {
            return true;
        }
        return false;
    }

    private static boolean B(String str) {
        if (w0.f40197a <= 22) {
            String str2 = w0.f40200d;
            if ("ODROID-XU3".equals(str2) || "Nexus 10".equals(str2)) {
                if ("OMX.Exynos.AVC.Decoder".equals(str) || "OMX.Exynos.AVC.Decoder.secure".equals(str)) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    private static boolean C() {
        String str = w0.f40198b;
        if (!str.equals("sabrina") && !str.equals("boreal")) {
            String str2 = w0.f40200d;
            if (!str2.startsWith("Lenovo TB-X605") && !str2.startsWith("Lenovo TB-X606") && !str2.startsWith("Lenovo TB-X616")) {
                return false;
            }
            return true;
        }
        return true;
    }

    private static boolean D(String str, int i10) {
        if ("video/hevc".equals(str) && 2 == i10) {
            String str2 = w0.f40198b;
            if ("sailfish".equals(str2) || "marlin".equals(str2)) {
                return true;
            }
            return false;
        }
        return false;
    }

    private static boolean E(String str) {
        if ("OMX.MTK.VIDEO.DECODER.HEVC".equals(str) && "mcv5a".equals(w0.f40198b)) {
            return false;
        }
        return true;
    }

    public static q F(String str, String str2, String str3, MediaCodecInfo.CodecCapabilities codecCapabilities, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14) {
        boolean z15;
        boolean z16;
        boolean z17;
        String str4;
        String str5;
        MediaCodecInfo.CodecCapabilities codecCapabilities2;
        boolean z18;
        boolean z19;
        boolean z20;
        String str6;
        if (!z13 && codecCapabilities != null && i(codecCapabilities) && !B(str)) {
            z15 = true;
        } else {
            z15 = false;
        }
        if (codecCapabilities != null && u(codecCapabilities)) {
            z16 = true;
        } else {
            z16 = false;
        }
        if (!z14 && (codecCapabilities == null || !s(codecCapabilities))) {
            z17 = false;
            str6 = str2;
            str5 = str3;
            codecCapabilities2 = codecCapabilities;
            z18 = z10;
            z19 = z11;
            z20 = z12;
            str4 = str;
        } else {
            z17 = true;
            str4 = str;
            str5 = str3;
            codecCapabilities2 = codecCapabilities;
            z18 = z10;
            z19 = z11;
            z20 = z12;
            str6 = str2;
        }
        return new q(str4, str6, str5, codecCapabilities2, z18, z19, z20, z15, z16, z17);
    }

    static /* synthetic */ boolean a() {
        return C();
    }

    private static int b(String str, String str2, int i10) {
        int i11;
        if (i10 <= 1 && ((w0.f40197a < 26 || i10 <= 0) && !"audio/mpeg".equals(str2) && !"audio/3gpp".equals(str2) && !"audio/amr-wb".equals(str2) && !"audio/mp4a-latm".equals(str2) && !"audio/vorbis".equals(str2) && !"audio/opus".equals(str2) && !"audio/raw".equals(str2) && !"audio/flac".equals(str2) && !"audio/g711-alaw".equals(str2) && !"audio/g711-mlaw".equals(str2) && !"audio/gsm".equals(str2))) {
            if ("audio/ac3".equals(str2)) {
                i11 = 6;
            } else if ("audio/eac3".equals(str2)) {
                i11 = 16;
            } else {
                i11 = 30;
            }
            ne.y.i("MediaCodecInfo", "AssumedMaxChannelAdjustment: " + str + ", [" + i10 + " to " + i11 + "]");
            return i11;
        }
        return i10;
    }

    private static Point d(MediaCodecInfo.VideoCapabilities videoCapabilities, int i10, int i11) {
        int widthAlignment = videoCapabilities.getWidthAlignment();
        int heightAlignment = videoCapabilities.getHeightAlignment();
        return new Point(w0.l(i10, widthAlignment) * widthAlignment, w0.l(i11, heightAlignment) * heightAlignment);
    }

    private static boolean e(MediaCodecInfo.VideoCapabilities videoCapabilities, int i10, int i11, double d10) {
        Point d11 = d(videoCapabilities, i10, i11);
        int i12 = d11.x;
        int i13 = d11.y;
        if (d10 != -1.0d && d10 >= 1.0d) {
            return videoCapabilities.areSizeAndRateSupported(i12, i13, Math.floor(d10));
        }
        return videoCapabilities.isSizeSupported(i12, i13);
    }

    private static MediaCodecInfo.CodecProfileLevel[] g(MediaCodecInfo.CodecCapabilities codecCapabilities) {
        int i10;
        int i11;
        MediaCodecInfo.VideoCapabilities videoCapabilities;
        if (codecCapabilities != null && (videoCapabilities = codecCapabilities.getVideoCapabilities()) != null) {
            i10 = videoCapabilities.getBitrateRange().getUpper().intValue();
        } else {
            i10 = 0;
        }
        if (i10 >= 180000000) {
            i11 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
        } else if (i10 >= 120000000) {
            i11 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
        } else if (i10 >= 60000000) {
            i11 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
        } else if (i10 >= 30000000) {
            i11 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        } else if (i10 >= 18000000) {
            i11 = 64;
        } else if (i10 >= 12000000) {
            i11 = 32;
        } else if (i10 >= 7200000) {
            i11 = 16;
        } else if (i10 >= 3600000) {
            i11 = 8;
        } else if (i10 >= 1800000) {
            i11 = 4;
        } else if (i10 >= 800000) {
            i11 = 2;
        } else {
            i11 = 1;
        }
        MediaCodecInfo.CodecProfileLevel codecProfileLevel = new MediaCodecInfo.CodecProfileLevel();
        codecProfileLevel.profile = 1;
        codecProfileLevel.level = i11;
        return new MediaCodecInfo.CodecProfileLevel[]{codecProfileLevel};
    }

    private static boolean i(MediaCodecInfo.CodecCapabilities codecCapabilities) {
        if (w0.f40197a >= 19 && j(codecCapabilities)) {
            return true;
        }
        return false;
    }

    private static boolean j(MediaCodecInfo.CodecCapabilities codecCapabilities) {
        return codecCapabilities.isFeatureSupported("adaptive-playback");
    }

    private boolean m(Format format, boolean z10) {
        Pair r10 = y.r(format);
        if (r10 == null) {
            return true;
        }
        int intValue = ((Integer) r10.first).intValue();
        int intValue2 = ((Integer) r10.second).intValue();
        if ("video/dolby-vision".equals(format.f11303w)) {
            if ("video/avc".equals(this.f23787b)) {
                intValue = 8;
            } else {
                intValue = "video/hevc".equals(this.f23787b) ? 2 : 2;
            }
            intValue2 = 0;
        }
        if (!this.f23796k && intValue != 42) {
            return true;
        }
        MediaCodecInfo.CodecProfileLevel[] h10 = h();
        if (w0.f40197a <= 23 && "video/x-vnd.on2.vp9".equals(this.f23787b) && h10.length == 0) {
            h10 = g(this.f23789d);
        }
        for (MediaCodecInfo.CodecProfileLevel codecProfileLevel : h10) {
            if (codecProfileLevel.profile == intValue && ((codecProfileLevel.level >= intValue2 || !z10) && !D(this.f23787b, intValue))) {
                return true;
            }
        }
        y("codec.profileLevel, " + format.f11300t + ", " + this.f23788c);
        return false;
    }

    private boolean q(Format format) {
        if (!this.f23787b.equals(format.f11303w) && !this.f23787b.equals(y.m(format))) {
            return false;
        }
        return true;
    }

    private static boolean s(MediaCodecInfo.CodecCapabilities codecCapabilities) {
        if (w0.f40197a >= 21 && t(codecCapabilities)) {
            return true;
        }
        return false;
    }

    private static boolean t(MediaCodecInfo.CodecCapabilities codecCapabilities) {
        return codecCapabilities.isFeatureSupported("secure-playback");
    }

    private static boolean u(MediaCodecInfo.CodecCapabilities codecCapabilities) {
        if (w0.f40197a >= 21 && v(codecCapabilities)) {
            return true;
        }
        return false;
    }

    private static boolean v(MediaCodecInfo.CodecCapabilities codecCapabilities) {
        return codecCapabilities.isFeatureSupported("tunneled-playback");
    }

    private void x(String str) {
        ne.y.b("MediaCodecInfo", "AssumedSupport [" + str + "] [" + this.f23786a + ", " + this.f23787b + "] [" + w0.f40201e + "]");
    }

    private void y(String str) {
        ne.y.b("MediaCodecInfo", "NoSupport [" + str + "] [" + this.f23786a + ", " + this.f23787b + "] [" + w0.f40201e + "]");
    }

    private static boolean z(String str) {
        return "audio/opus".equals(str);
    }

    public Point c(int i10, int i11) {
        MediaCodecInfo.VideoCapabilities videoCapabilities;
        MediaCodecInfo.CodecCapabilities codecCapabilities = this.f23789d;
        if (codecCapabilities == null || (videoCapabilities = codecCapabilities.getVideoCapabilities()) == null) {
            return null;
        }
        return d(videoCapabilities, i10, i11);
    }

    public DecoderReuseEvaluation f(Format format, Format format2) {
        int i10;
        Format format3;
        Format format4;
        int i11;
        if (!w0.c(format.f11303w, format2.f11303w)) {
            i10 = 8;
        } else {
            i10 = 0;
        }
        if (this.f23796k) {
            if (format.E != format2.E) {
                i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
            }
            if (!this.f23790e && (format.B != format2.B || format.C != format2.C)) {
                i10 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
            }
            if (!w0.c(format.I, format2.I)) {
                i10 |= RecyclerView.ItemAnimator.FLAG_MOVED;
            }
            if (A(this.f23786a) && !format.g(format2)) {
                i10 |= 2;
            }
            if (i10 == 0) {
                String str = this.f23786a;
                if (format.g(format2)) {
                    i11 = 3;
                } else {
                    i11 = 2;
                }
                return new DecoderReuseEvaluation(str, format, format2, i11, 0);
            }
            format3 = format;
            format4 = format2;
        } else {
            format3 = format;
            format4 = format2;
            if (format3.J != format4.J) {
                i10 |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
            }
            if (format3.K != format4.K) {
                i10 |= 8192;
            }
            if (format3.L != format4.L) {
                i10 |= 16384;
            }
            if (i10 == 0 && "audio/mp4a-latm".equals(this.f23787b)) {
                Pair r10 = y.r(format3);
                Pair r11 = y.r(format4);
                if (r10 != null && r11 != null) {
                    int intValue = ((Integer) r10.first).intValue();
                    int intValue2 = ((Integer) r11.first).intValue();
                    if (intValue == 42 && intValue2 == 42) {
                        return new DecoderReuseEvaluation(this.f23786a, format3, format4, 3, 0);
                    }
                }
            }
            if (!format3.g(format4)) {
                i10 |= 32;
            }
            if (z(this.f23787b)) {
                i10 |= 2;
            }
            if (i10 == 0) {
                return new DecoderReuseEvaluation(this.f23786a, format3, format4, 1, 0);
            }
        }
        return new DecoderReuseEvaluation(this.f23786a, format3, format4, 0, i10);
    }

    public MediaCodecInfo.CodecProfileLevel[] h() {
        MediaCodecInfo.CodecProfileLevel[] codecProfileLevelArr;
        MediaCodecInfo.CodecCapabilities codecCapabilities = this.f23789d;
        if (codecCapabilities != null && (codecProfileLevelArr = codecCapabilities.profileLevels) != null) {
            return codecProfileLevelArr;
        }
        return new MediaCodecInfo.CodecProfileLevel[0];
    }

    public boolean k(int i10) {
        MediaCodecInfo.CodecCapabilities codecCapabilities = this.f23789d;
        if (codecCapabilities == null) {
            y("channelCount.caps");
            return false;
        }
        MediaCodecInfo.AudioCapabilities audioCapabilities = codecCapabilities.getAudioCapabilities();
        if (audioCapabilities == null) {
            y("channelCount.aCaps");
            return false;
        } else if (b(this.f23786a, this.f23787b, audioCapabilities.getMaxInputChannelCount()) < i10) {
            y("channelCount.support, " + i10);
            return false;
        } else {
            return true;
        }
    }

    public boolean l(int i10) {
        MediaCodecInfo.CodecCapabilities codecCapabilities = this.f23789d;
        if (codecCapabilities == null) {
            y("sampleRate.caps");
            return false;
        }
        MediaCodecInfo.AudioCapabilities audioCapabilities = codecCapabilities.getAudioCapabilities();
        if (audioCapabilities == null) {
            y("sampleRate.aCaps");
            return false;
        } else if (!audioCapabilities.isSampleRateSupported(i10)) {
            y("sampleRate.support, " + i10);
            return false;
        } else {
            return true;
        }
    }

    public boolean n(Format format) {
        if (!q(format) || !m(format, false)) {
            return false;
        }
        return true;
    }

    public boolean o(Format format) {
        int i10;
        int i11;
        int i12;
        boolean z10 = false;
        if (!q(format) || !m(format, true)) {
            return false;
        }
        if (this.f23796k) {
            int i13 = format.B;
            if (i13 <= 0 || (i12 = format.C) <= 0) {
                return true;
            }
            if (w0.f40197a >= 21) {
                return w(i13, i12, format.D);
            }
            if (i13 * i12 <= y.L()) {
                z10 = true;
            }
            if (!z10) {
                y("legacyFrameSize, " + format.B + "x" + format.C);
            }
            return z10;
        } else if (w0.f40197a >= 21 && (((i10 = format.K) != -1 && !l(i10)) || ((i11 = format.J) != -1 && !k(i11)))) {
            return false;
        } else {
            return true;
        }
    }

    public boolean p() {
        if (w0.f40197a >= 29 && "video/x-vnd.on2.vp9".equals(this.f23787b)) {
            for (MediaCodecInfo.CodecProfileLevel codecProfileLevel : h()) {
                if (codecProfileLevel.profile == 16384) {
                    return true;
                }
            }
        }
        return false;
    }

    public boolean r(Format format) {
        if (this.f23796k) {
            return this.f23790e;
        }
        Pair r10 = y.r(format);
        if (r10 != null && ((Integer) r10.first).intValue() == 42) {
            return true;
        }
        return false;
    }

    public String toString() {
        return this.f23786a;
    }

    public boolean w(int i10, int i11, double d10) {
        MediaCodecInfo.CodecCapabilities codecCapabilities = this.f23789d;
        if (codecCapabilities == null) {
            y("sizeAndRate.caps");
            return false;
        }
        MediaCodecInfo.VideoCapabilities videoCapabilities = codecCapabilities.getVideoCapabilities();
        if (videoCapabilities == null) {
            y("sizeAndRate.vCaps");
            return false;
        }
        if (w0.f40197a >= 29) {
            int a10 = a.a(videoCapabilities, i10, i11, d10);
            if (a10 == 2) {
                return true;
            }
            if (a10 == 1) {
                y("sizeAndRate.cover, " + i10 + "x" + i11 + "@" + d10);
                return false;
            }
        }
        if (!e(videoCapabilities, i10, i11, d10)) {
            if (i10 < i11 && E(this.f23786a) && e(videoCapabilities, i11, i10, d10)) {
                x("sizeAndRate.rotated, " + i10 + "x" + i11 + "@" + d10);
            } else {
                y("sizeAndRate.support, " + i10 + "x" + i11 + "@" + d10);
                return false;
            }
        }
        return true;
    }
}
