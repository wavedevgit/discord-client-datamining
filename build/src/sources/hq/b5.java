package hq;

import hq.z4;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b5 implements z4.a {

    /* renamed from: a  reason: collision with root package name */
    private final a5 f27684a;

    b5(a5 a5Var) {
        this.f27684a = a5Var;
    }

    public static tq.h b(a5 a5Var) {
        return tq.e.a(new b5(a5Var));
    }

    @Override // hq.z4.a
    public z4 a(String str, String str2, String str3, String str4, Map map) {
        return this.f27684a.b(str, str2, str3, str4, map);
    }
}
