package pb;

import com.facebook.soloader.b0;
import com.facebook.soloader.c0;
import com.facebook.soloader.e0;
import com.facebook.soloader.g0;
import com.facebook.soloader.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements h {
    @Override // pb.h
    public boolean a(UnsatisfiedLinkError unsatisfiedLinkError, e0[] e0VarArr) {
        String str;
        if (!(unsatisfiedLinkError instanceof c0) || (unsatisfiedLinkError instanceof b0)) {
            return false;
        }
        String a10 = ((c0) unsatisfiedLinkError).a();
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Reunpacking NonApk UnpackingSoSources due to ");
        sb2.append(unsatisfiedLinkError);
        if (a10 == null) {
            str = "";
        } else {
            str = ", retrying for specific library " + a10;
        }
        sb2.append(str);
        p.b("SoLoader", sb2.toString());
        for (e0 e0Var : e0VarArr) {
            if (e0Var instanceof g0) {
                g0 g0Var = (g0) e0Var;
                if (g0Var instanceof com.facebook.soloader.c) {
                    continue;
                } else {
                    try {
                        p.b("SoLoader", "Runpacking " + g0Var.c());
                        g0Var.e(2);
                    } catch (Exception e10) {
                        p.c("SoLoader", "Encountered an exception while reunpacking " + g0Var.c() + " for library " + a10 + ": ", e10);
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
