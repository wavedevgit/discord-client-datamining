package af;

import android.content.Context;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class o {

    /* renamed from: a  reason: collision with root package name */
    private static final lf.a f767a = new lf.a("GoogleSignInCommon", new String[0]);

    public static ff.g a(ff.e eVar, Context context, boolean z10) {
        f767a.a("Revoking access", new Object[0]);
        String e10 = c.b(context).e();
        c(context);
        if (z10) {
            return f.a(e10);
        }
        return eVar.a(new m(eVar));
    }

    public static ff.g b(ff.e eVar, Context context, boolean z10) {
        f767a.a("Signing out", new Object[0]);
        c(context);
        if (z10) {
            return ff.h.b(Status.f13874q, eVar);
        }
        return eVar.a(new k(eVar));
    }

    private static void c(Context context) {
        p.a(context).b();
        for (ff.e eVar : ff.e.b()) {
            eVar.e();
        }
        gf.e.a();
    }
}
