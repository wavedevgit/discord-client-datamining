package androidx.camera.camera2.internal.compat.quirk;

import a0.o2;
import a0.y1;
import android.os.Build;
import android.util.Range;
import android.util.Size;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ExtraCroppingQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    private static final Map f1911a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f1912a;

        static {
            int[] iArr = new int[o2.b.values().length];
            f1912a = iArr;
            try {
                iArr[o2.b.PRIV.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f1912a[o2.b.YUV.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f1912a[o2.b.JPEG.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    static {
        HashMap hashMap = new HashMap();
        f1911a = hashMap;
        hashMap.put("SM-T580", null);
        hashMap.put("SM-J710MN", new Range(21, 26));
        hashMap.put("SM-A320FL", null);
        hashMap.put("SM-G570M", null);
        hashMap.put("SM-G610F", null);
        hashMap.put("SM-G610M", new Range(21, 26));
    }

    private static boolean d() {
        if ("samsung".equalsIgnoreCase(Build.BRAND)) {
            Map map = f1911a;
            String str = Build.MODEL;
            Locale locale = Locale.US;
            if (map.containsKey(str.toUpperCase(locale))) {
                Range range = (Range) map.get(str.toUpperCase(locale));
                if (range == null) {
                    return true;
                }
                return range.contains((Range) Integer.valueOf(Build.VERSION.SDK_INT));
            }
            return false;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean e() {
        return d();
    }

    public Size c(o2.b bVar) {
        if (!d()) {
            return null;
        }
        int i10 = a.f1912a[bVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return null;
                }
                return new Size(3264, 1836);
            }
            return new Size(1280, 720);
        }
        return new Size(1920, 1080);
    }
}
