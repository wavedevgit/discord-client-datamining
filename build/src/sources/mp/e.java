package mp;

import java.util.List;
import kp.d2;
import mp.c;
import sn.v;
import zq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements c.a {

    /* renamed from: a  reason: collision with root package name */
    private final d f38845a;

    e(d dVar) {
        this.f38845a = dVar;
    }

    public static h b(d dVar) {
        return zq.e.a(new e(dVar));
    }

    @Override // mp.c.a
    public c a(String str, String str2, String str3, String str4, d2 d2Var, String str5, List list, String str6, v vVar, long j10) {
        return this.f38845a.b(str, str2, d2Var, list, str4, str3, str5, str6, vVar, j10);
    }
}
