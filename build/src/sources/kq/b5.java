package kq;

import java.util.Map;
import kq.z4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b5 implements z4.a {

    /* renamed from: a  reason: collision with root package name */
    private final a5 f35645a;

    b5(a5 a5Var) {
        this.f35645a = a5Var;
    }

    public static wq.h b(a5 a5Var) {
        return wq.e.a(new b5(a5Var));
    }

    @Override // kq.z4.a
    public z4 a(String str, String str2, String str3, String str4, Map map) {
        return this.f35645a.b(str, str2, str3, str4, map);
    }
}
