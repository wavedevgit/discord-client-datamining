package ef;

import com.google.android.gms.common.api.Status;
import ff.p;
import gf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {
    public static g a(k kVar, e eVar) {
        q.m(kVar, "Result must not be null");
        q.b(!kVar.a().h(), "Status code must not be SUCCESS");
        o oVar = new o(eVar, kVar);
        oVar.setResult(kVar);
        return oVar;
    }

    public static g b(Status status, e eVar) {
        q.m(status, "Result must not be null");
        p pVar = new p(eVar);
        pVar.setResult(status);
        return pVar;
    }
}
