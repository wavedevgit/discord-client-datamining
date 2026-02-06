package ff;

import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class r {
    public static void a(Status status, Object obj, yg.k kVar) {
        if (status.h()) {
            kVar.c(obj);
        } else {
            kVar.b(gf.b.a(status));
        }
    }

    public static void b(Status status, yg.k kVar) {
        a(status, null, kVar);
    }

    public static boolean c(Status status, Object obj, yg.k kVar) {
        if (status.h()) {
            return kVar.e(obj);
        }
        return kVar.d(gf.b.a(status));
    }
}
