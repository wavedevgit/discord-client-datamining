package r1;

import android.graphics.BlendMode;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.os.Build;
import r1.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final ThreadLocal f48327a = new ThreadLocal();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static boolean a(Paint paint, String str) {
            return paint.hasGlyph(str);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b {
        static void a(Paint paint, Object obj) {
            paint.setBlendMode((BlendMode) obj);
        }
    }

    public static boolean a(Paint paint, String str) {
        return a.a(paint, str);
    }

    public static boolean b(Paint paint, r1.a aVar) {
        PorterDuffXfermode porterDuffXfermode = null;
        Object obj = null;
        if (Build.VERSION.SDK_INT >= 29) {
            if (aVar != null) {
                obj = b.C0611b.a(aVar);
            }
            b.a(paint, obj);
            return true;
        } else if (aVar != null) {
            PorterDuff.Mode a10 = r1.b.a(aVar);
            if (a10 != null) {
                porterDuffXfermode = new PorterDuffXfermode(a10);
            }
            paint.setXfermode(porterDuffXfermode);
            if (a10 != null) {
                return true;
            }
            return false;
        } else {
            paint.setXfermode(null);
            return true;
        }
    }
}
