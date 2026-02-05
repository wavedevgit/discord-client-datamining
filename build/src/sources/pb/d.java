package pb;

import com.facebook.soloader.c0;
import com.facebook.soloader.e0;
import com.facebook.soloader.g0;
import com.facebook.soloader.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d implements h {
    @Override // pb.h
    public boolean a(UnsatisfiedLinkError unsatisfiedLinkError, e0[] e0VarArr) {
        g0.c cVar;
        if (!(unsatisfiedLinkError instanceof c0)) {
            return false;
        }
        p.b("SoLoader", "Checking /data/data missing libraries.");
        boolean z10 = false;
        for (e0 e0Var : e0VarArr) {
            if ((e0Var instanceof g0) && !(e0Var instanceof com.facebook.soloader.c)) {
                g0 g0Var = (g0) e0Var;
                try {
                    g0.c[] o10 = g0Var.o();
                    int length = o10.length;
                    int i10 = 0;
                    while (true) {
                        if (i10 < length) {
                            if (g0Var.f(o10[i10].f11436d) == null) {
                                p.b("SoLoader", "Missing " + cVar.f11436d + " from " + g0Var.c() + ", will force prepare.");
                                g0Var.e(2);
                                z10 = true;
                                break;
                            }
                            i10++;
                        }
                    }
                } catch (Exception e10) {
                    p.c("SoLoader", "Encountered an exception while recovering from /data/data failure ", e10);
                    return false;
                }
            }
        }
        if (z10) {
            p.b("SoLoader", "Successfully recovered from /data/data disk failure.");
            return true;
        }
        p.b("SoLoader", "No libraries missing from unpacking so paths while recovering /data/data failure");
        return false;
    }
}
