package sl;

import android.util.Log;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static boolean f49550a = false;

    public static synchronized void a() {
        synchronized (a.class) {
            if (f49550a) {
                return;
            }
            Log.i("NitroModules", "Loading NitroModules C++ library...");
            System.loadLibrary("NitroModules");
            Log.i("NitroModules", "Successfully loaded NitroModules C++ library!");
            f49550a = true;
        }
    }
}
