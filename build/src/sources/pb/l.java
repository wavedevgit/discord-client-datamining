package pb;

import com.facebook.soloader.e0;
import com.facebook.soloader.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class l implements h {
    @Override // pb.h
    public boolean a(UnsatisfiedLinkError unsatisfiedLinkError, e0[] e0VarArr) {
        for (e0 e0Var : e0VarArr) {
            if (e0Var instanceof com.facebook.soloader.b) {
                p.b("SoLoader", "Waiting on SoSource " + e0Var.c());
                ((com.facebook.soloader.b) e0Var).a();
            }
        }
        return true;
    }
}
