package q;

import android.content.Context;
import android.media.CamcorderProfile;
import android.util.Pair;
import android.util.Size;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e2 implements a0.b0 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f46309a;

    /* renamed from: b  reason: collision with root package name */
    private final f f46310b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements f {
        a() {
        }

        @Override // q.f
        public CamcorderProfile a(int i10, int i11) {
            return CamcorderProfile.get(i10, i11);
        }

        @Override // q.f
        public boolean b(int i10, int i11) {
            return CamcorderProfile.hasProfile(i10, i11);
        }
    }

    public e2(Context context, Object obj, Set set) {
        this(context, new a(), obj, set);
    }

    private void c(Context context, r.n0 n0Var, Set set) {
        b2.e.g(context);
        Iterator it = set.iterator();
        while (it.hasNext()) {
            String str = (String) it.next();
            this.f46309a.put(str, new f4(context, str, n0Var, this.f46310b));
        }
    }

    @Override // a0.b0
    public Pair a(int i10, String str, List list, Map map, boolean z10, boolean z11) {
        b2.e.b(!map.isEmpty(), "No new use cases to be bound.");
        f4 f4Var = (f4) this.f46309a.get(str);
        if (f4Var != null) {
            return f4Var.A(i10, list, map, z10, z11);
        }
        throw new IllegalArgumentException("No such camera id in supported combination list: " + str);
    }

    @Override // a0.b0
    public a0.o2 b(int i10, String str, int i11, Size size) {
        f4 f4Var = (f4) this.f46309a.get(str);
        if (f4Var != null) {
            return f4Var.M(i10, i11, size);
        }
        return null;
    }

    e2(Context context, f fVar, Object obj, Set set) {
        r.n0 a10;
        this.f46309a = new HashMap();
        b2.e.g(fVar);
        this.f46310b = fVar;
        if (obj instanceof r.n0) {
            a10 = (r.n0) obj;
        } else {
            a10 = r.n0.a(context);
        }
        c(context, a10, set);
    }
}
