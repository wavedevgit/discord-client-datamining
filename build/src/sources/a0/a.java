package a0;

import a0.m2;
import android.util.Range;
import android.util.Size;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {
    public static a a(o2 o2Var, int i10, Size size, x.z zVar, List list, r0 r0Var, Range range) {
        return new b(o2Var, i10, size, zVar, list, r0Var, range);
    }

    public abstract List b();

    public abstract x.z c();

    public abstract int d();

    public abstract r0 e();

    public abstract Size f();

    public abstract o2 g();

    public abstract Range h();

    public m2 i(r0 r0Var) {
        m2.a d10 = m2.a(f()).b(c()).d(r0Var);
        if (h() != null) {
            d10.c(h());
        }
        return d10.a();
    }
}
