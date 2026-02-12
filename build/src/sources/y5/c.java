package y5;

import android.util.Log;
import java.util.HashSet;
import java.util.Set;
import l5.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c implements z {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f55439a = new HashSet();

    @Override // l5.z
    public void a(String str) {
        d(str, null);
    }

    @Override // l5.z
    public void b(String str, Throwable th2) {
        if (l5.e.f35576a) {
            Log.d("LOTTIE", str, th2);
        }
    }

    @Override // l5.z
    public void c(String str) {
        e(str, null);
    }

    @Override // l5.z
    public void d(String str, Throwable th2) {
        Set set = f55439a;
        if (set.contains(str)) {
            return;
        }
        Log.w("LOTTIE", str, th2);
        set.add(str);
    }

    public void e(String str, Throwable th2) {
        if (l5.e.f35576a) {
            Log.d("LOTTIE", str, th2);
        }
    }
}
