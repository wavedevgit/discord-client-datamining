package ne;

import android.app.UiModeManager;
import android.content.Context;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.database.DatabaseUtils;
import android.database.sqlite.SQLiteDatabase;
import android.graphics.Point;
import android.graphics.drawable.Drawable;
import android.hardware.display.DisplayManager;
import android.media.AudioManager;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.os.Parcel;
import android.os.SystemClock;
import android.telephony.TelephonyManager;
import android.text.TextUtils;
import android.view.Display;
import android.view.WindowManager;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.presentation.message.view.MediaImageViewKt;
import com.discord.media.engine.MediaEngine;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.Player;
import j$.util.DesugarTimeZone;
import java.io.ByteArrayOutputStream;
import java.io.Closeable;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.Arrays;
import java.util.Collections;
import java.util.Formatter;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.MissingResourceException;
import java.util.UUID;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.zip.DataFormatException;
import java.util.zip.Inflater;
import org.webrtc.MediaStreamTrack;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class w0 {

    /* renamed from: a  reason: collision with root package name */
    public static final int f40279a;

    /* renamed from: b  reason: collision with root package name */
    public static final String f40280b;

    /* renamed from: c  reason: collision with root package name */
    public static final String f40281c;

    /* renamed from: d  reason: collision with root package name */
    public static final String f40282d;

    /* renamed from: e  reason: collision with root package name */
    public static final String f40283e;

    /* renamed from: f  reason: collision with root package name */
    public static final byte[] f40284f;

    /* renamed from: g  reason: collision with root package name */
    private static final Pattern f40285g;

    /* renamed from: h  reason: collision with root package name */
    private static final Pattern f40286h;

    /* renamed from: i  reason: collision with root package name */
    private static final Pattern f40287i;

    /* renamed from: j  reason: collision with root package name */
    private static final Pattern f40288j;

    /* renamed from: k  reason: collision with root package name */
    private static HashMap f40289k;

    /* renamed from: l  reason: collision with root package name */
    private static final String[] f40290l;

    /* renamed from: m  reason: collision with root package name */
    private static final String[] f40291m;

    /* renamed from: n  reason: collision with root package name */
    private static final int[] f40292n;

    /* renamed from: o  reason: collision with root package name */
    private static final int[] f40293o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {
        public static Drawable a(Context context, Resources resources, int i10) {
            return resources.getDrawable(i10, context.getTheme());
        }
    }

    static {
        int i10 = Build.VERSION.SDK_INT;
        f40279a = i10;
        String str = Build.DEVICE;
        f40280b = str;
        String str2 = Build.MANUFACTURER;
        f40281c = str2;
        String str3 = Build.MODEL;
        f40282d = str3;
        f40283e = str + ", " + str3 + ", " + str2 + ", " + i10;
        f40284f = new byte[0];
        f40285g = Pattern.compile("(\\d\\d\\d\\d)\\-(\\d\\d)\\-(\\d\\d)[Tt](\\d\\d):(\\d\\d):(\\d\\d)([\\.,](\\d+))?([Zz]|((\\+|\\-)(\\d?\\d):?(\\d\\d)))?");
        f40286h = Pattern.compile("^(-)?P(([0-9]*)Y)?(([0-9]*)M)?(([0-9]*)D)?(T(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?)?$");
        f40287i = Pattern.compile("%([A-Fa-f0-9]{2})");
        f40288j = Pattern.compile("(?:.*\\.)?isml?(?:/(manifest(.*))?)?", 2);
        f40290l = new String[]{"alb", "sq", "arm", "hy", "baq", "eu", "bur", "my", "tib", "bo", "chi", "zh", "cze", "cs", "dut", "nl", "ger", "de", "gre", "el", "fre", "fr", "geo", "ka", "ice", "is", "mac", "mk", "mao", "mi", "may", "ms", "per", "fa", "rum", "ro", "scc", "hbs-srp", "slo", "sk", "wel", "cy", StackTraceHelper.ID_KEY, "ms-ind", "iw", "he", "heb", "he", "ji", "yi", "arb", "ar-arb", "in", "ms-ind", "ind", "ms-ind", "nb", "no-nob", "nob", "no-nob", "nn", "no-nno", "nno", "no-nno", "tw", "ak-twi", "twi", "ak-twi", "bs", "hbs-bos", "bos", "hbs-bos", "hr", "hbs-hrv", "hrv", "hbs-hrv", "sr", "hbs-srp", "srp", "hbs-srp", "cmn", "zh-cmn", "hak", "zh-hak", "nan", "zh-nan", "hsn", "zh-hsn"};
        f40291m = new String[]{"i-lux", "lb", "i-hak", "zh-hak", "i-navajo", "nv", "no-bok", "no-nob", "no-nyn", "no-nno", "zh-guoyu", "zh-cmn", "zh-hakka", "zh-hak", "zh-min-nan", "zh-nan", "zh-xiang", "zh-hsn"};
        f40292n = new int[]{0, 79764919, 159529838, 222504665, 319059676, 398814059, 445009330, 507990021, 638119352, 583659535, 797628118, 726387553, 890018660, 835552979, 1015980042, 944750013, 1276238704, 1221641927, 1167319070, 1095957929, 1595256236, 1540665371, 1452775106, 1381403509, 1780037320, 1859660671, 1671105958, 1733955601, 2031960084, 2111593891, 1889500026, 1952343757, -1742489888, -1662866601, -1851683442, -1788833735, -1960329156, -1880695413, -2103051438, -2040207643, -1104454824, -1159051537, -1213636554, -1284997759, -1389417084, -1444007885, -1532160278, -1603531939, -734892656, -789352409, -575645954, -646886583, -952755380, -1007220997, -827056094, -898286187, -231047128, -151282273, -71779514, -8804623, -515967244, -436212925, -390279782, -327299027, 881225847, 809987520, 1023691545, 969234094, 662832811, 591600412, 771767749, 717299826, 311336399, 374308984, 453813921, 533576470, 25881363, 88864420, 134795389, 214552010, 2023205639, 2086057648, 1897238633, 1976864222, 1804852699, 1867694188, 1645340341, 1724971778, 1587496639, 1516133128, 1461550545, 1406951526, 1302016099, 1230646740, 1142491917, 1087903418, -1398421865, -1469785312, -1524105735, -1578704818, -1079922613, -1151291908, -1239184603, -1293773166, -1968362705, -1905510760, -2094067647, -2014441994, -1716953613, -1654112188, -1876203875, -1796572374, -525066777, -462094256, -382327159, -302564546, -206542021, -143559028, -97365931, -17609246, -960696225, -1031934488, -817968335, -872425850, -709327229, -780559564, -600130067, -654598054, 1762451694, 1842216281, 1619975040, 1682949687, 2047383090, 2127137669, 1938468188, 2001449195, 1325665622, 1271206113, 1183200824, 1111960463, 1543535498, 1489069629, 1434599652, 1363369299, 622672798, 568075817, 748617968, 677256519, 907627842, 853037301, 1067152940, 995781531, 51762726, 131386257, 177728840, 240578815, 269590778, 349224269, 429104020, 491947555, -248556018, -168932423, -122852000, -60002089, -500490030, -420856475, -341238852, -278395381, -685261898, -739858943, -559578920, -630940305, -1004286614, -1058877219, -845023740, -916395085, -1119974018, -1174433591, -1262701040, -1333941337, -1371866206, -1426332139, -1481064244, -1552294533, -1690935098, -1611170447, -1833673816, -1770699233, -2009983462, -1930228819, -2119160460, -2056179517, 1569362073, 1498123566, 1409854455, 1355396672, 1317987909, 1246755826, 1192025387, 1137557660, 2072149281, 2135122070, 1912620623, 1992383480, 1753615357, 1816598090, 1627664531, 1707420964, 295390185, 358241886, 404320391, 483945776, 43990325, 106832002, 186451547, 266083308, 932423249, 861060070, 1041341759, 986742920, 613929101, 542559546, 756411363, 701822548, -978770311, -1050133554, -869589737, -924188512, -693284699, -764654318, -550540341, -605129092, -475935807, -413084042, -366743377, -287118056, -257573603, -194731862, -114850189, -35218492, -1984365303, -1921392450, -2143631769, -2063868976, -1698919467, -1635936670, -1824608069, -1744851700, -1347415887, -1418654458, -1506661409, -1561119128, -1129027987, -1200260134, -1254728445, -1309196108};
        f40293o = new int[]{0, 7, 14, 9, 28, 27, 18, 21, 56, 63, 54, 49, 36, 35, 42, 45, 112, 119, 126, 121, 108, 107, 98, 101, 72, 79, 70, 65, 84, 83, 90, 93, 224, 231, 238, 233, 252, 251, 242, 245, 216, 223, 214, 209, 196, 195, 202, 205, 144, 151, 158, 153, 140, 139, 130, 133, 168, 175, 166, 161, 180, 179, 186, 189, 199, 192, 201, 206, 219, 220, 213, 210, SetSpanOperation.SPAN_MAX_PRIORITY, 248, 241, 246, 227, 228, 237, 234, 183, 176, 185, 190, 171, 172, 165, 162, 143, 136, 129, 134, 147, 148, 157, 154, 39, 32, 41, 46, 59, 60, 53, 50, 31, 24, 17, 22, 3, 4, 13, 10, 87, 80, 89, 94, 75, 76, 69, 66, 111, 104, 97, 102, 115, 116, 125, 122, 137, 142, 135, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, 149, MediaImageViewKt.OBSCURED_IMAGE_MIN_WIDTH, 155, 156, 177, 182, 191, 184, 173, 170, 163, 164, 249, 254, 247, 240, 229, 226, 235, 236, 193, 198, 207, androidx.recyclerview.widget.h.DEFAULT_DRAG_ANIMATION_DURATION, 221, 218, 211, MediaImageViewKt.OBSCURED_IMAGE_MIN_HEIGHT, 105, 110, 103, 96, 117, MediaEngine.MAX_SUPPORTED_PROTOCOL_VERSION, 123, 124, 81, 86, 95, 88, 77, 74, 67, 68, 25, 30, 23, 16, 5, 2, 11, 12, 33, 38, 47, 40, 61, 58, 51, 52, 78, 73, 64, 71, 82, 85, 92, 91, 118, 113, 120, 127, 106, 109, 100, 99, 62, 57, 48, 55, 34, 37, 44, 43, 6, 1, 8, 15, 26, 29, 20, 19, 174, 169, 160, 167, 178, 181, 188, 187, 150, 145, 152, 159, 138, 141, 132, 131, 222, 217, 208, 215, 194, 197, 204, 203, 230, 225, 232, 239, androidx.recyclerview.widget.h.DEFAULT_SWIPE_ANIMATION_DURATION, 253, 244, 243};
    }

    private static HashMap A() {
        String[] iSOLanguages = Locale.getISOLanguages();
        HashMap hashMap = new HashMap(iSOLanguages.length + f40290l.length);
        int i10 = 0;
        for (String str : iSOLanguages) {
            try {
                String iSO3Language = new Locale(str).getISO3Language();
                if (!TextUtils.isEmpty(iSO3Language)) {
                    hashMap.put(iSO3Language, str);
                }
            } catch (MissingResourceException unused) {
            }
        }
        while (true) {
            String[] strArr = f40290l;
            if (i10 < strArr.length) {
                hashMap.put(strArr[i10], strArr[i10 + 1]);
                i10 += 2;
            } else {
                return hashMap;
            }
        }
    }

    public static boolean A0(h0 h0Var, h0 h0Var2, Inflater inflater) {
        if (h0Var.a() <= 0) {
            return false;
        }
        if (h0Var2.b() < h0Var.a()) {
            h0Var2.c(h0Var.a() * 2);
        }
        if (inflater == null) {
            inflater = new Inflater();
        }
        inflater.setInput(h0Var.e(), h0Var.f(), h0Var.a());
        int i10 = 0;
        while (true) {
            try {
                i10 += inflater.inflate(h0Var2.e(), i10, h0Var2.b() - i10);
                if (inflater.finished()) {
                    h0Var2.T(i10);
                    inflater.reset();
                    return true;
                } else if (inflater.needsDictionary() || inflater.needsInput()) {
                    break;
                } else if (i10 == h0Var2.b()) {
                    h0Var2.c(h0Var2.b() * 2);
                }
            } catch (DataFormatException unused) {
                return false;
            } finally {
                inflater.reset();
            }
        }
        return false;
    }

    public static long B(long j10, int i10) {
        return m(j10 * i10, 1000000L);
    }

    public static String B0(int i10) {
        return Integer.toString(i10, 36);
    }

    public static Uri C(Uri uri) {
        String path = uri.getPath();
        if (path != null) {
            Matcher matcher = f40288j.matcher(path);
            if (matcher.matches() && matcher.group(1) == null) {
                return Uri.withAppendedPath(uri, "Manifest");
            }
            return uri;
        }
        return uri;
    }

    public static boolean C0(Context context) {
        if (f40279a >= 23 && context.getPackageManager().hasSystemFeature("android.hardware.type.automotive")) {
            return true;
        }
        return false;
    }

    public static String D(String str, Object... objArr) {
        return String.format(Locale.US, str, objArr);
    }

    public static boolean D0(int i10) {
        if (i10 != 536870912 && i10 != 805306368 && i10 != 4) {
            return false;
        }
        return true;
    }

    public static String E(byte[] bArr) {
        return new String(bArr, ii.d.f28521c);
    }

    public static boolean E0(int i10) {
        if (i10 != 3 && i10 != 2 && i10 != 268435456 && i10 != 536870912 && i10 != 805306368 && i10 != 4) {
            return false;
        }
        return true;
    }

    public static String F(byte[] bArr, int i10, int i11) {
        return new String(bArr, i10, i11, ii.d.f28521c);
    }

    public static boolean F0(int i10) {
        if (i10 != 10 && i10 != 13) {
            return false;
        }
        return true;
    }

    public static int G(Context context) {
        AudioManager audioManager = (AudioManager) context.getSystemService(MediaStreamTrack.AUDIO_TRACK_KIND);
        if (audioManager == null) {
            return -1;
        }
        return audioManager.generateAudioSessionId();
    }

    public static boolean G0(Uri uri) {
        String scheme = uri.getScheme();
        if (!TextUtils.isEmpty(scheme) && !"file".equals(scheme)) {
            return false;
        }
        return true;
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    public static int H(int i10) {
        switch (i10) {
            case 1:
                return 4;
            case 2:
                return 12;
            case 3:
                return 28;
            case 4:
                return 204;
            case 5:
                return 220;
            case 6:
                return 252;
            case 7:
                return 1276;
            case 8:
                break;
            case 9:
            case 11:
            default:
                return 0;
            case 10:
                if (f40279a >= 32) {
                    return 737532;
                }
                break;
            case 12:
                return 743676;
        }
        return 6396;
    }

    public static boolean H0(Context context) {
        UiModeManager uiModeManager = (UiModeManager) context.getApplicationContext().getSystemService("uimode");
        if (uiModeManager != null && uiModeManager.getCurrentModeType() == 4) {
            return true;
        }
        return false;
    }

    public static Player.Commands I(Player player, Player.Commands commands) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        boolean z15;
        boolean f10 = player.f();
        boolean N = player.N();
        boolean H = player.H();
        boolean p10 = player.p();
        boolean b02 = player.b0();
        boolean t10 = player.t();
        boolean u10 = player.v().u();
        Player.Commands.a d10 = new Player.Commands.a().b(commands).d(4, !f10);
        boolean z16 = false;
        if (N && !f10) {
            z10 = true;
        } else {
            z10 = false;
        }
        Player.Commands.a d11 = d10.d(5, z10);
        if (H && !f10) {
            z11 = true;
        } else {
            z11 = false;
        }
        Player.Commands.a d12 = d11.d(6, z11);
        if (!u10 && ((H || !b02 || N) && !f10)) {
            z12 = true;
        } else {
            z12 = false;
        }
        Player.Commands.a d13 = d12.d(7, z12);
        if (p10 && !f10) {
            z13 = true;
        } else {
            z13 = false;
        }
        Player.Commands.a d14 = d13.d(8, z13);
        if (!u10 && ((p10 || (b02 && t10)) && !f10)) {
            z14 = true;
        } else {
            z14 = false;
        }
        Player.Commands.a d15 = d14.d(9, z14).d(10, !f10);
        if (N && !f10) {
            z15 = true;
        } else {
            z15 = false;
        }
        Player.Commands.a d16 = d15.d(11, z15);
        if (N && !f10) {
            z16 = true;
        }
        return d16.d(12, z16).e();
    }

    public static int I0(int[] iArr, int i10) {
        for (int i11 = 0; i11 < iArr.length; i11++) {
            if (iArr[i11] == i10) {
                return i11;
            }
        }
        return -1;
    }

    public static int J(ByteBuffer byteBuffer, int i10) {
        int i11 = byteBuffer.getInt(i10);
        if (byteBuffer.order() == ByteOrder.BIG_ENDIAN) {
            return i11;
        }
        return Integer.reverseBytes(i11);
    }

    private static String J0(String str) {
        int i10 = 0;
        while (true) {
            String[] strArr = f40291m;
            if (i10 < strArr.length) {
                if (str.startsWith(strArr[i10])) {
                    return strArr[i10 + 1] + str.substring(strArr[i10].length());
                }
                i10 += 2;
            } else {
                return str;
            }
        }
    }

    public static byte[] K(String str) {
        int length = str.length() / 2;
        byte[] bArr = new byte[length];
        for (int i10 = 0; i10 < length; i10++) {
            int i11 = i10 * 2;
            bArr[i10] = (byte) ((Character.digit(str.charAt(i11), 16) << 4) + Character.digit(str.charAt(i11 + 1), 16));
        }
        return bArr;
    }

    public static long K0(long j10) {
        if (j10 != -9223372036854775807L && j10 != Long.MIN_VALUE) {
            return j10 * 1000;
        }
        return j10;
    }

    public static int L(String str, int i10) {
        int i11 = 0;
        for (String str2 : f1(str)) {
            if (i10 == c0.m(str2)) {
                i11++;
            }
        }
        return i11;
    }

    public static ExecutorService L0(final String str) {
        return Executors.newSingleThreadExecutor(new ThreadFactory() { // from class: ne.v0
            @Override // java.util.concurrent.ThreadFactory
            public final Thread newThread(Runnable runnable) {
                return w0.a(str, runnable);
            }
        });
    }

    public static String M(String str, int i10) {
        String[] f12 = f1(str);
        if (f12.length == 0) {
            return null;
        }
        StringBuilder sb2 = new StringBuilder();
        for (String str2 : f12) {
            if (i10 == c0.m(str2)) {
                if (sb2.length() > 0) {
                    sb2.append(",");
                }
                sb2.append(str2);
            }
        }
        if (sb2.length() <= 0) {
            return null;
        }
        return sb2.toString();
    }

    public static String M0(String str) {
        if (str == null) {
            return null;
        }
        String replace = str.replace('_', '-');
        if (!replace.isEmpty() && !replace.equals("und")) {
            str = replace;
        }
        String e10 = ii.b.e(str);
        String str2 = e1(e10, "-")[0];
        if (f40289k == null) {
            f40289k = A();
        }
        String str3 = (String) f40289k.get(str2);
        if (str3 != null) {
            e10 = str3 + e10.substring(str2.length());
            str2 = str3;
        }
        if (!"no".equals(str2) && !"i".equals(str2) && !"zh".equals(str2)) {
            return e10;
        }
        return J0(e10);
    }

    public static String N(Object[] objArr) {
        StringBuilder sb2 = new StringBuilder();
        for (int i10 = 0; i10 < objArr.length; i10++) {
            sb2.append(objArr[i10].getClass().getSimpleName());
            if (i10 < objArr.length - 1) {
                sb2.append(", ");
            }
        }
        return sb2.toString();
    }

    public static Object[] N0(Object[] objArr, Object obj) {
        Object[] copyOf = Arrays.copyOf(objArr, objArr.length + 1);
        copyOf[objArr.length] = obj;
        return k(copyOf);
    }

    public static String O(Context context) {
        TelephonyManager telephonyManager;
        if (context != null && (telephonyManager = (TelephonyManager) context.getSystemService("phone")) != null) {
            String networkCountryIso = telephonyManager.getNetworkCountryIso();
            if (!TextUtils.isEmpty(networkCountryIso)) {
                return ii.b.f(networkCountryIso);
            }
        }
        return ii.b.f(Locale.getDefault().getCountry());
    }

    public static Object[] O0(Object[] objArr, Object[] objArr2) {
        Object[] copyOf = Arrays.copyOf(objArr, objArr.length + objArr2.length);
        System.arraycopy(objArr2, 0, copyOf, objArr.length, objArr2.length);
        return copyOf;
    }

    public static Point P(Context context) {
        Display display;
        DisplayManager displayManager;
        if (f40279a >= 17 && (displayManager = (DisplayManager) context.getSystemService(ViewProps.DISPLAY)) != null) {
            display = displayManager.getDisplay(0);
        } else {
            display = null;
        }
        if (display == null) {
            display = ((WindowManager) ne.a.e((WindowManager) context.getSystemService("window"))).getDefaultDisplay();
        }
        return Q(context, display);
    }

    public static Object[] P0(Object[] objArr, int i10) {
        boolean z10;
        if (i10 <= objArr.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        return Arrays.copyOf(objArr, i10);
    }

    public static Point Q(Context context, Display display) {
        String p02;
        if (display.getDisplayId() == 0 && H0(context)) {
            if (f40279a < 28) {
                p02 = p0("sys.display-size");
            } else {
                p02 = p0("vendor.display-size");
            }
            if (!TextUtils.isEmpty(p02)) {
                try {
                    String[] d12 = d1(p02.trim(), "x");
                    if (d12.length == 2) {
                        int parseInt = Integer.parseInt(d12[0]);
                        int parseInt2 = Integer.parseInt(d12[1]);
                        if (parseInt > 0 && parseInt2 > 0) {
                            return new Point(parseInt, parseInt2);
                        }
                    }
                } catch (NumberFormatException unused) {
                }
                y.c("Util", "Invalid display size: " + p02);
            }
            if ("Sony".equals(f40281c) && f40282d.startsWith("BRAVIA") && context.getPackageManager().hasSystemFeature("com.sony.dtv.hardware.panel.qfhd")) {
                return new Point(3840, 2160);
            }
        }
        Point point = new Point();
        int i10 = f40279a;
        if (i10 >= 23) {
            V(display, point);
        } else if (i10 >= 17) {
            U(display, point);
        } else {
            T(display, point);
        }
        return point;
    }

    public static Object[] Q0(Object[] objArr, int i10, int i11) {
        boolean z10;
        boolean z11 = false;
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        if (i11 <= objArr.length) {
            z11 = true;
        }
        ne.a.a(z11);
        return Arrays.copyOfRange(objArr, i10, i11);
    }

    public static Looper R() {
        Looper myLooper = Looper.myLooper();
        if (myLooper != null) {
            return myLooper;
        }
        return Looper.getMainLooper();
    }

    public static long R0(String str) {
        Matcher matcher = f40285g.matcher(str);
        if (matcher.matches()) {
            int i10 = 0;
            if (matcher.group(9) != null && !matcher.group(9).equalsIgnoreCase("Z")) {
                i10 = (Integer.parseInt(matcher.group(12)) * 60) + Integer.parseInt(matcher.group(13));
                if ("-".equals(matcher.group(11))) {
                    i10 *= -1;
                }
            }
            GregorianCalendar gregorianCalendar = new GregorianCalendar(DesugarTimeZone.getTimeZone("GMT"));
            gregorianCalendar.clear();
            gregorianCalendar.set(Integer.parseInt(matcher.group(1)), Integer.parseInt(matcher.group(2)) - 1, Integer.parseInt(matcher.group(3)), Integer.parseInt(matcher.group(4)), Integer.parseInt(matcher.group(5)), Integer.parseInt(matcher.group(6)));
            if (!TextUtils.isEmpty(matcher.group(8))) {
                gregorianCalendar.set(14, new BigDecimal("0." + matcher.group(8)).movePointRight(3).intValue());
            }
            long timeInMillis = gregorianCalendar.getTimeInMillis();
            if (i10 != 0) {
                return timeInMillis - (i10 * LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE);
            }
            return timeInMillis;
        }
        throw lc.l0.a("Invalid date/time format: " + str, null);
    }

    public static Locale S() {
        if (f40279a >= 24) {
            return Locale.getDefault(Locale.Category.DISPLAY);
        }
        return Locale.getDefault();
    }

    public static long S0(String str) {
        double d10;
        double d11;
        double d12;
        double d13;
        double d14;
        Matcher matcher = f40286h.matcher(str);
        if (matcher.matches()) {
            boolean isEmpty = TextUtils.isEmpty(matcher.group(1));
            String group = matcher.group(3);
            double d15 = 0.0d;
            if (group != null) {
                d10 = Double.parseDouble(group) * 3.1556908E7d;
            } else {
                d10 = 0.0d;
            }
            String group2 = matcher.group(5);
            if (group2 != null) {
                d11 = Double.parseDouble(group2) * 2629739.0d;
            } else {
                d11 = 0.0d;
            }
            double d16 = d10 + d11;
            String group3 = matcher.group(7);
            if (group3 != null) {
                d12 = Double.parseDouble(group3) * 86400.0d;
            } else {
                d12 = 0.0d;
            }
            double d17 = d16 + d12;
            String group4 = matcher.group(10);
            if (group4 != null) {
                d13 = Double.parseDouble(group4) * 3600.0d;
            } else {
                d13 = 0.0d;
            }
            double d18 = d17 + d13;
            String group5 = matcher.group(12);
            if (group5 != null) {
                d14 = Double.parseDouble(group5) * 60.0d;
            } else {
                d14 = 0.0d;
            }
            double d19 = d18 + d14;
            String group6 = matcher.group(14);
            if (group6 != null) {
                d15 = Double.parseDouble(group6);
            }
            long j10 = (long) ((d19 + d15) * 1000.0d);
            if (!isEmpty) {
                return -j10;
            }
            return j10;
        }
        return (long) (Double.parseDouble(str) * 3600.0d * 1000.0d);
    }

    private static void T(Display display, Point point) {
        display.getSize(point);
    }

    public static boolean T0(Handler handler, Runnable runnable) {
        if (!handler.getLooper().getThread().isAlive()) {
            return false;
        }
        if (handler.getLooper() == Looper.myLooper()) {
            runnable.run();
            return true;
        }
        return handler.post(runnable);
    }

    private static void U(Display display, Point point) {
        display.getRealSize(point);
    }

    public static boolean U0(Parcel parcel) {
        if (parcel.readInt() != 0) {
            return true;
        }
        return false;
    }

    private static void V(Display display, Point point) {
        Display.Mode mode = display.getMode();
        point.x = mode.getPhysicalWidth();
        point.y = mode.getPhysicalHeight();
    }

    public static void V0(List list, int i10, int i11) {
        if (i10 >= 0 && i11 <= list.size() && i10 <= i11) {
            if (i10 != i11) {
                list.subList(i10, i11).clear();
                return;
            }
            return;
        }
        throw new IllegalArgumentException();
    }

    public static Drawable W(Context context, Resources resources, int i10) {
        if (f40279a >= 21) {
            return a.a(context, resources, i10);
        }
        return resources.getDrawable(i10);
    }

    public static long W0(long j10, int i10) {
        return (j10 * 1000000) / i10;
    }

    public static UUID X(String str) {
        String e10 = ii.b.e(str);
        e10.getClass();
        char c10 = 65535;
        switch (e10.hashCode()) {
            case -1860423953:
                if (e10.equals("playready")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1400551171:
                if (e10.equals("widevine")) {
                    c10 = 1;
                    break;
                }
                break;
            case 790309106:
                if (e10.equals("clearkey")) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return lc.d.f37057e;
            case 1:
                return lc.d.f37056d;
            case 2:
                return lc.d.f37055c;
            default:
                try {
                    return UUID.fromString(str);
                } catch (RuntimeException unused) {
                    return null;
                }
        }
    }

    public static long X0(long j10, long j11, long j12) {
        int i10 = (j12 > j11 ? 1 : (j12 == j11 ? 0 : -1));
        if (i10 >= 0 && j12 % j11 == 0) {
            return j10 / (j12 / j11);
        }
        if (i10 < 0 && j11 % j12 == 0) {
            return j10 * (j11 / j12);
        }
        return (long) (j10 * (j11 / j12));
    }

    public static int Y(int i10) {
        if (i10 != 2 && i10 != 4) {
            if (i10 != 10) {
                if (i10 != 7) {
                    if (i10 != 8) {
                        switch (i10) {
                            case 15:
                                return 6003;
                            case 16:
                            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                                return 6005;
                            case 17:
                            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                            case 20:
                            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                                return 6004;
                            default:
                                switch (i10) {
                                    case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                                    case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                                    case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                                    case 27:
                                    case 28:
                                        return 6002;
                                    default:
                                        return 6006;
                                }
                        }
                    }
                    return 6003;
                }
                return 6005;
            }
            return 6004;
        }
        return 6005;
    }

    public static long[] Y0(List list, long j10, long j11) {
        int size = list.size();
        long[] jArr = new long[size];
        int i10 = (j11 > j10 ? 1 : (j11 == j10 ? 0 : -1));
        int i11 = 0;
        if (i10 >= 0 && j11 % j10 == 0) {
            long j12 = j11 / j10;
            while (i11 < size) {
                jArr[i11] = ((Long) list.get(i11)).longValue() / j12;
                i11++;
            }
        } else if (i10 < 0 && j10 % j11 == 0) {
            long j13 = j10 / j11;
            while (i11 < size) {
                jArr[i11] = ((Long) list.get(i11)).longValue() * j13;
                i11++;
            }
        } else {
            double d10 = j10 / j11;
            while (i11 < size) {
                jArr[i11] = (long) (((Long) list.get(i11)).longValue() * d10);
                i11++;
            }
        }
        return jArr;
    }

    public static int Z(String str) {
        String[] d12;
        int length;
        boolean z10;
        int i10 = 0;
        if (str == null || (length = (d12 = d1(str, "_")).length) < 2) {
            return 0;
        }
        String str2 = d12[length - 1];
        if (length >= 3 && "neg".equals(d12[length - 2])) {
            z10 = true;
        } else {
            z10 = false;
        }
        try {
            i10 = Integer.parseInt((String) ne.a.e(str2));
            if (z10) {
                return -i10;
            }
        } catch (NumberFormatException unused) {
        }
        return i10;
    }

    public static void Z0(long[] jArr, long j10, long j11) {
        int i10 = (j11 > j10 ? 1 : (j11 == j10 ? 0 : -1));
        int i11 = 0;
        if (i10 >= 0 && j11 % j10 == 0) {
            long j12 = j11 / j10;
            while (i11 < jArr.length) {
                jArr[i11] = jArr[i11] / j12;
                i11++;
            }
        } else if (i10 < 0 && j10 % j11 == 0) {
            long j13 = j10 / j11;
            while (i11 < jArr.length) {
                jArr[i11] = jArr[i11] * j13;
                i11++;
            }
        } else {
            double d10 = j10 / j11;
            while (i11 < jArr.length) {
                jArr[i11] = (long) (jArr[i11] * d10);
                i11++;
            }
        }
    }

    public static /* synthetic */ Thread a(String str, Runnable runnable) {
        return new Thread(runnable, str);
    }

    public static String a0(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return "YES";
                        }
                        throw new IllegalStateException();
                    }
                    return "NO_EXCEEDS_CAPABILITIES";
                }
                return "NO_UNSUPPORTED_DRM";
            }
            return "NO_UNSUPPORTED_TYPE";
        }
        return "NO";
    }

    public static boolean a1(Player player) {
        if (player == null || !player.B() || player.O() == 1 || player.O() == 4) {
            return true;
        }
        return false;
    }

    public static long b(long j10, long j11, long j12) {
        long j13 = j10 + j11;
        if (((j10 ^ j13) & (j11 ^ j13)) < 0) {
            return j12;
        }
        return j13;
    }

    public static String b0(Locale locale) {
        if (f40279a >= 21) {
            return c0(locale);
        }
        return locale.toString();
    }

    public static void b1(Throwable th2) {
        c1(th2);
    }

    public static boolean c(Object obj, Object obj2) {
        if (obj == null) {
            if (obj2 == null) {
                return true;
            }
            return false;
        }
        return obj.equals(obj2);
    }

    private static String c0(Locale locale) {
        return locale.toLanguageTag();
    }

    public static int d(List list, Comparable comparable, boolean z10, boolean z11) {
        int i10;
        int i11;
        int binarySearch = Collections.binarySearch(list, comparable);
        if (binarySearch < 0) {
            i11 = ~binarySearch;
        } else {
            int size = list.size();
            while (true) {
                i10 = binarySearch + 1;
                if (i10 >= size || ((Comparable) list.get(i10)).compareTo(comparable) != 0) {
                    break;
                }
                binarySearch = i10;
            }
            if (z10) {
                i11 = binarySearch;
            } else {
                i11 = i10;
            }
        }
        if (z11) {
            return Math.min(list.size() - 1, i11);
        }
        return i11;
    }

    public static int d0(Context context, String str, boolean z10) {
        if (f40279a >= 29 && context.getApplicationContext().getApplicationInfo().targetSdkVersion >= 29) {
            return 5;
        }
        return 1;
    }

    public static String[] d1(String str, String str2) {
        return str.split(str2, -1);
    }

    public static int e(long[] jArr, long j10, boolean z10, boolean z11) {
        int i10;
        int i11;
        int binarySearch = Arrays.binarySearch(jArr, j10);
        if (binarySearch < 0) {
            i11 = ~binarySearch;
        } else {
            while (true) {
                i10 = binarySearch + 1;
                if (i10 >= jArr.length || jArr[i10] != j10) {
                    break;
                }
                binarySearch = i10;
            }
            if (z10) {
                i11 = binarySearch;
            } else {
                i11 = i10;
            }
        }
        if (z11) {
            return Math.min(jArr.length - 1, i11);
        }
        return i11;
    }

    public static long e0(long j10, float f10) {
        if (f10 == 1.0f) {
            return j10;
        }
        return Math.round(j10 * f10);
    }

    public static String[] e1(String str, String str2) {
        return str.split(str2, 2);
    }

    public static int f(List list, Comparable comparable, boolean z10, boolean z11) {
        int i10;
        int i11;
        int binarySearch = Collections.binarySearch(list, comparable);
        if (binarySearch < 0) {
            i11 = -(binarySearch + 2);
        } else {
            while (true) {
                i10 = binarySearch - 1;
                if (i10 < 0 || ((Comparable) list.get(i10)).compareTo(comparable) != 0) {
                    break;
                }
                binarySearch = i10;
            }
            if (z10) {
                i11 = binarySearch;
            } else {
                i11 = i10;
            }
        }
        if (z11) {
            return Math.max(0, i11);
        }
        return i11;
    }

    public static long f0(long j10) {
        if (j10 == -9223372036854775807L) {
            return System.currentTimeMillis();
        }
        return SystemClock.elapsedRealtime() + j10;
    }

    public static String[] f1(String str) {
        if (TextUtils.isEmpty(str)) {
            return new String[0];
        }
        return d1(str.trim(), "(\\s*,\\s*)");
    }

    public static int g(z zVar, long j10, boolean z10, boolean z11) {
        int i10;
        int c10 = zVar.c() - 1;
        int i11 = 0;
        while (i11 <= c10) {
            int i12 = (i11 + c10) >>> 1;
            if (zVar.b(i12) < j10) {
                i11 = i12 + 1;
            } else {
                c10 = i12 - 1;
            }
        }
        if (z10 && (i10 = c10 + 1) < zVar.c() && zVar.b(i10) == j10) {
            return i10;
        }
        if (z11 && c10 == -1) {
            return 0;
        }
        return c10;
    }

    public static int g0(int i10) {
        if (i10 != 8) {
            if (i10 != 16) {
                if (i10 != 24) {
                    if (i10 != 32) {
                        return 0;
                    }
                    return 805306368;
                }
                return 536870912;
            }
            return 2;
        }
        return 3;
    }

    public static long g1(long j10, long j11, long j12) {
        long j13 = j10 - j11;
        if (((j10 ^ j13) & (j11 ^ j10)) < 0) {
            return j12;
        }
        return j13;
    }

    public static int h(int[] iArr, int i10, boolean z10, boolean z11) {
        int i11;
        int i12;
        int binarySearch = Arrays.binarySearch(iArr, i10);
        if (binarySearch < 0) {
            i12 = -(binarySearch + 2);
        } else {
            while (true) {
                i11 = binarySearch - 1;
                if (i11 < 0 || iArr[i11] != i10) {
                    break;
                }
                binarySearch = i11;
            }
            if (z10) {
                i12 = binarySearch;
            } else {
                i12 = i11;
            }
        }
        if (z11) {
            return Math.max(0, i12);
        }
        return i12;
    }

    public static Format h0(int i10, int i11, int i12) {
        return new Format.b().g0("audio/raw").J(i11).h0(i12).a0(i10).G();
    }

    public static boolean h1(SQLiteDatabase sQLiteDatabase, String str) {
        if (DatabaseUtils.queryNumEntries(sQLiteDatabase, "sqlite_master", "tbl_name = ?", new String[]{str}) > 0) {
            return true;
        }
        return false;
    }

    public static int i(long[] jArr, long j10, boolean z10, boolean z11) {
        int i10;
        int i11;
        int binarySearch = Arrays.binarySearch(jArr, j10);
        if (binarySearch < 0) {
            i11 = -(binarySearch + 2);
        } else {
            while (true) {
                i10 = binarySearch - 1;
                if (i10 < 0 || jArr[i10] != j10) {
                    break;
                }
                binarySearch = i10;
            }
            if (z10) {
                i11 = binarySearch;
            } else {
                i11 = i10;
            }
        }
        if (z11) {
            return Math.max(0, i11);
        }
        return i11;
    }

    public static int i0(int i10, int i11) {
        if (i10 != 2) {
            if (i10 != 3) {
                if (i10 != 4) {
                    if (i10 != 268435456) {
                        if (i10 != 536870912) {
                            if (i10 != 805306368) {
                                throw new IllegalArgumentException();
                            }
                        } else {
                            return i11 * 3;
                        }
                    }
                }
                return i11 * 4;
            }
            return i11;
        }
        return i11 * 2;
    }

    public static byte[] i1(InputStream inputStream) {
        byte[] bArr = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        while (true) {
            int read = inputStream.read(bArr);
            if (read != -1) {
                byteArrayOutputStream.write(bArr, 0, read);
            } else {
                return byteArrayOutputStream.toByteArray();
            }
        }
    }

    public static long j0(long j10, float f10) {
        if (f10 == 1.0f) {
            return j10;
        }
        return Math.round(j10 / f10);
    }

    public static float j1(byte[] bArr) {
        boolean z10;
        if (bArr.length == 4) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        return Float.intBitsToFloat((bArr[3] & 255) | (bArr[0] << 24) | ((bArr[1] & 255) << 16) | ((bArr[2] & 255) << 8));
    }

    public static int k0(int i10) {
        if (i10 != 13) {
            switch (i10) {
                case 2:
                    return 0;
                case 3:
                    return 8;
                case 4:
                    return 4;
                case 5:
                case 7:
                case 8:
                case 9:
                case 10:
                    return 5;
                case 6:
                    return 2;
                default:
                    return 3;
            }
        }
        return 1;
    }

    public static String k1(byte[] bArr) {
        StringBuilder sb2 = new StringBuilder(bArr.length * 2);
        for (int i10 = 0; i10 < bArr.length; i10++) {
            sb2.append(Character.forDigit((bArr[i10] >> 4) & 15, 16));
            sb2.append(Character.forDigit(bArr[i10] & 15, 16));
        }
        return sb2.toString();
    }

    public static int l(int i10, int i11) {
        return ((i10 + i11) - 1) / i11;
    }

    public static String l0(StringBuilder sb2, Formatter formatter, long j10) {
        String str;
        if (j10 == -9223372036854775807L) {
            j10 = 0;
        }
        if (j10 < 0) {
            str = "-";
        } else {
            str = "";
        }
        long abs = (Math.abs(j10) + 500) / 1000;
        long j11 = abs % 60;
        long j12 = (abs / 60) % 60;
        long j13 = abs / 3600;
        sb2.setLength(0);
        if (j13 > 0) {
            return formatter.format("%s%d:%02d:%02d", str, Long.valueOf(j13), Long.valueOf(j12), Long.valueOf(j11)).toString();
        }
        return formatter.format("%s%02d:%02d", str, Long.valueOf(j12), Long.valueOf(j11)).toString();
    }

    public static int l1(byte[] bArr) {
        boolean z10;
        if (bArr.length == 4) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        return bArr[3] | (bArr[0] << 24) | (bArr[1] << 16) | (bArr[2] << 8);
    }

    public static long m(long j10, long j11) {
        return ((j10 + j11) - 1) / j11;
    }

    public static String[] m0() {
        String[] n02 = n0();
        for (int i10 = 0; i10 < n02.length; i10++) {
            n02[i10] = M0(n02[i10]);
        }
        return n02;
    }

    public static long m1(int i10, int i11) {
        return n1(i11) | (n1(i10) << 32);
    }

    public static void n(Closeable closeable) {
        if (closeable != null) {
            try {
                closeable.close();
            } catch (IOException unused) {
            }
        }
    }

    private static String[] n0() {
        Configuration configuration = Resources.getSystem().getConfiguration();
        return f40279a >= 24 ? o0(configuration) : new String[]{b0(configuration.locale)};
    }

    public static long n1(int i10) {
        return i10 & 4294967295L;
    }

    public static int o(long j10, long j11) {
        int i10 = (j10 > j11 ? 1 : (j10 == j11 ? 0 : -1));
        if (i10 < 0) {
            return -1;
        }
        if (i10 == 0) {
            return 0;
        }
        return 1;
    }

    private static String[] o0(Configuration configuration) {
        return d1(configuration.getLocales().toLanguageTags(), ",");
    }

    public static String o1(String str) {
        int length = str.length();
        int i10 = 0;
        int i11 = 0;
        for (int i12 = 0; i12 < length; i12++) {
            if (str.charAt(i12) == '%') {
                i11++;
            }
        }
        if (i11 == 0) {
            return str;
        }
        int i13 = length - (i11 * 2);
        StringBuilder sb2 = new StringBuilder(i13);
        Matcher matcher = f40287i.matcher(str);
        while (i11 > 0 && matcher.find()) {
            sb2.append((CharSequence) str, i10, matcher.start());
            sb2.append((char) Integer.parseInt((String) ne.a.e(matcher.group(1)), 16));
            i10 = matcher.end();
            i11--;
        }
        if (i10 < length) {
            sb2.append((CharSequence) str, i10, length);
        }
        if (sb2.length() != i13) {
            return null;
        }
        return sb2.toString();
    }

    public static float p(float f10, float f11, float f12) {
        return Math.max(f11, Math.min(f10, f12));
    }

    private static String p0(String str) {
        try {
            Class<?> cls = Class.forName("android.os.SystemProperties");
            return (String) cls.getMethod("get", String.class).invoke(cls, str);
        } catch (Exception e10) {
            y.d("Util", "Failed to read system property " + str, e10);
            return null;
        }
    }

    public static long p1(long j10) {
        if (j10 != -9223372036854775807L && j10 != Long.MIN_VALUE) {
            return j10 / 1000;
        }
        return j10;
    }

    public static int q(int i10, int i11, int i12) {
        return Math.max(i11, Math.min(i10, i12));
    }

    public static String q0(int i10) {
        switch (i10) {
            case -2:
                return ViewProps.NONE;
            case -1:
                return "unknown";
            case 0:
                return "default";
            case 1:
                return MediaStreamTrack.AUDIO_TRACK_KIND;
            case 2:
                return MediaStreamTrack.VIDEO_TRACK_KIND;
            case 3:
                return "text";
            case 4:
                return "image";
            case 5:
                return "metadata";
            case 6:
                return "camera motion";
            default:
                if (i10 >= 10000) {
                    return "custom (" + i10 + ")";
                }
                return "?";
        }
    }

    public static void q1(Parcel parcel, boolean z10) {
        parcel.writeInt(z10 ? 1 : 0);
    }

    public static long r(long j10, long j11, long j12) {
        return Math.max(j11, Math.min(j10, j12));
    }

    public static String r0(Context context, String str) {
        String str2;
        try {
            str2 = context.getPackageManager().getPackageInfo(context.getPackageName(), 0).versionName;
        } catch (PackageManager.NameNotFoundException unused) {
            str2 = "?";
        }
        return str + "/" + str2 + " (Linux;Android " + Build.VERSION.RELEASE + ") ExoPlayerLib/2.19.1";
    }

    public static boolean s(Object[] objArr, Object obj) {
        for (Object obj2 : objArr) {
            if (c(obj2, obj)) {
                return true;
            }
        }
        return false;
    }

    public static byte[] s0(String str) {
        return str.getBytes(ii.d.f28521c);
    }

    public static int t(byte[] bArr, int i10, int i11, int i12) {
        while (i10 < i11) {
            i12 = f40292n[((i12 >>> 24) ^ (bArr[i10] & SetSpanOperation.SPAN_MAX_PRIORITY)) & SetSpanOperation.SPAN_MAX_PRIORITY] ^ (i12 << 8);
            i10++;
        }
        return i12;
    }

    public static boolean t0(Player player) {
        if (player != null && player.s(1)) {
            player.b();
            return true;
        }
        return false;
    }

    public static int u(byte[] bArr, int i10, int i11, int i12) {
        while (i10 < i11) {
            i12 = f40293o[i12 ^ (bArr[i10] & SetSpanOperation.SPAN_MAX_PRIORITY)];
            i10++;
        }
        return i12;
    }

    /* JADX WARN: Removed duplicated region for block: B:18:0x002a  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x002e A[RETURN] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static boolean u0(com.google.android.exoplayer2.Player r4) {
        /*
            r0 = 0
            if (r4 != 0) goto L4
            return r0
        L4:
            int r1 = r4.O()
            r2 = 1
            if (r1 != r2) goto L17
            r3 = 2
            boolean r3 = r4.s(r3)
            if (r3 == 0) goto L17
            r4.d()
        L15:
            r0 = r2
            goto L24
        L17:
            r3 = 4
            if (r1 != r3) goto L24
            boolean r1 = r4.s(r3)
            if (r1 == 0) goto L24
            r4.i()
            goto L15
        L24:
            boolean r1 = r4.s(r2)
            if (r1 == 0) goto L2e
            r4.e()
            return r2
        L2e:
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: ne.w0.u0(com.google.android.exoplayer2.Player):boolean");
    }

    public static Handler v(Looper looper, Handler.Callback callback) {
        return new Handler(looper, callback);
    }

    public static boolean v0(Player player) {
        if (a1(player)) {
            return u0(player);
        }
        return t0(player);
    }

    public static Handler w() {
        return x(null);
    }

    public static int w0(Uri uri) {
        int y02;
        String scheme = uri.getScheme();
        if (scheme != null && ii.b.a("rtsp", scheme)) {
            return 3;
        }
        String lastPathSegment = uri.getLastPathSegment();
        if (lastPathSegment == null) {
            return 4;
        }
        int lastIndexOf = lastPathSegment.lastIndexOf(46);
        if (lastIndexOf >= 0 && (y02 = y0(lastPathSegment.substring(lastIndexOf + 1))) != 4) {
            return y02;
        }
        Matcher matcher = f40288j.matcher((CharSequence) ne.a.e(uri.getPath()));
        if (!matcher.matches()) {
            return 4;
        }
        String group = matcher.group(2);
        if (group != null) {
            if (group.contains("format=mpd-time-csf")) {
                return 0;
            }
            if (group.contains("format=m3u8-aapl")) {
                return 2;
            }
        }
        return 1;
    }

    public static Handler x(Handler.Callback callback) {
        return v((Looper) ne.a.i(Looper.myLooper()), callback);
    }

    public static int x0(String str) {
        return w0(Uri.parse("file:///" + str));
    }

    public static Handler y() {
        return z(null);
    }

    public static int y0(String str) {
        String e10 = ii.b.e(str);
        e10.getClass();
        char c10 = 65535;
        switch (e10.hashCode()) {
            case 104579:
                if (e10.equals("ism")) {
                    c10 = 0;
                    break;
                }
                break;
            case 108321:
                if (e10.equals("mpd")) {
                    c10 = 1;
                    break;
                }
                break;
            case 3242057:
                if (e10.equals("isml")) {
                    c10 = 2;
                    break;
                }
                break;
            case 3299913:
                if (e10.equals("m3u8")) {
                    c10 = 3;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
            case 2:
                return 1;
            case 1:
                return 0;
            case 3:
                return 2;
            default:
                return 4;
        }
    }

    public static Handler z(Handler.Callback callback) {
        return v(R(), callback);
    }

    public static int z0(Uri uri, String str) {
        if (str == null) {
            return w0(uri);
        }
        char c10 = 65535;
        switch (str.hashCode()) {
            case -979127466:
                if (str.equals("application/x-mpegURL")) {
                    c10 = 0;
                    break;
                }
                break;
            case -156749520:
                if (str.equals("application/vnd.ms-sstr+xml")) {
                    c10 = 1;
                    break;
                }
                break;
            case 64194685:
                if (str.equals("application/dash+xml")) {
                    c10 = 2;
                    break;
                }
                break;
            case 1154777587:
                if (str.equals("application/x-rtsp")) {
                    c10 = 3;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return 2;
            case 1:
                return 1;
            case 2:
                return 0;
            case 3:
                return 3;
            default:
                return 4;
        }
    }

    private static void c1(Throwable th2) {
        throw th2;
    }

    public static Object j(Object obj) {
        return obj;
    }

    public static Object[] k(Object[] objArr) {
        return objArr;
    }
}
