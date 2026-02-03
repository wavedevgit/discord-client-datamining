package kg;

import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import java.text.SimpleDateFormat;
import java.util.Locale;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q {

    /* renamed from: a  reason: collision with root package name */
    private static final SimpleDateFormat f32361a;

    /* renamed from: b  reason: collision with root package name */
    private static final SimpleDateFormat f32362b;

    /* renamed from: c  reason: collision with root package name */
    private static final StringBuilder f32363c;

    static {
        Locale locale = Locale.ROOT;
        f32361a = new SimpleDateFormat("MM-dd HH:mm:ss.SSS", locale);
        f32362b = new SimpleDateFormat("MM-dd HH:mm:ss", locale);
        f32363c = new StringBuilder(33);
    }

    public static String a(long j10) {
        String sb2;
        StringBuilder sb3 = f32363c;
        synchronized (sb3) {
            sb3.setLength(0);
            b(j10, sb3);
            sb2 = sb3.toString();
        }
        return sb2;
    }

    public static StringBuilder b(long j10, StringBuilder sb2) {
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 == 0) {
            sb2.append("0s");
            return sb2;
        }
        sb2.ensureCapacity(sb2.length() + 27);
        boolean z10 = false;
        if (i10 < 0) {
            sb2.append("-");
            if (j10 != Long.MIN_VALUE) {
                j10 = -j10;
            } else {
                j10 = LongCompanionObject.MAX_VALUE;
                z10 = true;
            }
        }
        if (j10 >= 86400000) {
            sb2.append(j10 / 86400000);
            sb2.append("d");
            j10 %= 86400000;
        }
        if (true == z10) {
            j10 = 25975808;
        }
        if (j10 >= LogThrottleSingleton.RATE_LIMIT_ONE_HOUR) {
            sb2.append(j10 / LogThrottleSingleton.RATE_LIMIT_ONE_HOUR);
            sb2.append("h");
            j10 %= LogThrottleSingleton.RATE_LIMIT_ONE_HOUR;
        }
        if (j10 >= LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE) {
            sb2.append(j10 / LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE);
            sb2.append("m");
            j10 %= LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE;
        }
        if (j10 >= 1000) {
            sb2.append(j10 / 1000);
            sb2.append("s");
            j10 %= 1000;
        }
        if (j10 > 0) {
            sb2.append(j10);
            sb2.append("ms");
        }
        return sb2;
    }
}
