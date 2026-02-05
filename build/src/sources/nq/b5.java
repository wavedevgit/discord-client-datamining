package nq;

import java.util.Map;
import nq.z4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b5 implements z4.a {

    /* renamed from: a  reason: collision with root package name */
    private final a5 f41450a;

    b5(a5 a5Var) {
        this.f41450a = a5Var;
    }

    public static zq.h b(a5 a5Var) {
        return zq.e.a(new b5(a5Var));
    }

    @Override // nq.z4.a
    public z4 a(String str, String str2, String str3, String str4, Map map) {
        return this.f41450a.b(str, str2, str3, str4, map);
    }
}
