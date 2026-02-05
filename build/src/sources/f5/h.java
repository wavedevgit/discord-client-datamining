package f5;

import android.content.Context;
import android.net.ConnectivityManager;
import f5.g;
import k5.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class h {
    public static final g a(Context context, g.a aVar, t tVar) {
        ConnectivityManager connectivityManager = (ConnectivityManager) androidx.core.content.a.j(context, ConnectivityManager.class);
        if (connectivityManager != null && k5.d.e(context, "android.permission.ACCESS_NETWORK_STATE")) {
            try {
                return new i(connectivityManager, aVar);
            } catch (Exception e10) {
                if (tVar != null) {
                    k5.h.a(tVar, "NetworkObserver", new RuntimeException("Failed to register network observer.", e10));
                }
                return new e();
            }
        }
        if (tVar != null && tVar.o() <= 5) {
            tVar.a("NetworkObserver", 5, "Unable to register network observer.", null);
        }
        return new e();
    }
}
