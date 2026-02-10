package yl;

import android.util.Log;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static boolean f55698a = false;

    public static synchronized void a() {
        synchronized (a.class) {
            if (f55698a) {
                return;
            }
            Log.i("NitroModules", "Loading NitroModules C++ library...");
            System.loadLibrary("NitroModules");
            Log.i("NitroModules", "Successfully loaded NitroModules C++ library!");
            f55698a = true;
        }
    }
}
