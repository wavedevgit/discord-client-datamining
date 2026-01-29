package ze;

import android.content.Context;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class o {

    /* renamed from: a  reason: collision with root package name */
    private static final kf.a f55648a = new kf.a("GoogleSignInCommon", new String[0]);

    public static ef.g a(ef.e eVar, Context context, boolean z10) {
        f55648a.a("Revoking access", new Object[0]);
        String e10 = c.b(context).e();
        c(context);
        if (z10) {
            return f.a(e10);
        }
        return eVar.a(new m(eVar));
    }

    public static ef.g b(ef.e eVar, Context context, boolean z10) {
        f55648a.a("Signing out", new Object[0]);
        c(context);
        if (z10) {
            return ef.h.b(Status.f14789q, eVar);
        }
        return eVar.a(new k(eVar));
    }

    private static void c(Context context) {
        p.a(context).b();
        for (ef.e eVar : ef.e.b()) {
            eVar.e();
        }
        ff.e.a();
    }
}
