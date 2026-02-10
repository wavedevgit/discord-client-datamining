package gf;

import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class r {
    public static void a(Status status, Object obj, zg.k kVar) {
        if (status.h()) {
            kVar.c(obj);
        } else {
            kVar.b(hf.b.a(status));
        }
    }

    public static void b(Status status, zg.k kVar) {
        a(status, null, kVar);
    }

    public static boolean c(Status status, Object obj, zg.k kVar) {
        if (status.h()) {
            return kVar.e(obj);
        }
        return kVar.d(hf.b.a(status));
    }
}
