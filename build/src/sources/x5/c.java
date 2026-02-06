package x5;

import android.util.Log;
import java.util.HashSet;
import java.util.Set;
import l5.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c implements y {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f54524a = new HashSet();

    @Override // l5.y
    public void a(String str) {
        d(str, null);
    }

    @Override // l5.y
    public void b(String str, Throwable th2) {
        if (l5.e.f35800a) {
            Log.d("LOTTIE", str, th2);
        }
    }

    @Override // l5.y
    public void c(String str) {
        e(str, null);
    }

    @Override // l5.y
    public void d(String str, Throwable th2) {
        Set set = f54524a;
        if (set.contains(str)) {
            return;
        }
        Log.w("LOTTIE", str, th2);
        set.add(str);
    }

    public void e(String str, Throwable th2) {
        if (l5.e.f35800a) {
            Log.d("LOTTIE", str, th2);
        }
    }
}
