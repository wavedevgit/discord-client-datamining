package q;

import android.content.Context;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w implements a0.c0 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f46663a;

    /* renamed from: b  reason: collision with root package name */
    private final y.a f46664b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.m0 f46665c;

    /* renamed from: d  reason: collision with root package name */
    private final a0.l0 f46666d;

    /* renamed from: e  reason: collision with root package name */
    private final r.n0 f46667e;

    /* renamed from: f  reason: collision with root package name */
    private final List f46668f;

    /* renamed from: g  reason: collision with root package name */
    private final e3 f46669g;

    /* renamed from: h  reason: collision with root package name */
    private final long f46670h;

    /* renamed from: i  reason: collision with root package name */
    private final Map f46671i = new HashMap();

    public w(Context context, a0.m0 m0Var, x.p pVar, long j10) {
        this.f46663a = context;
        this.f46665c = m0Var;
        r.n0 b10 = r.n0.b(context, m0Var.c());
        this.f46667e = b10;
        this.f46669g = e3.c(context);
        this.f46668f = e(m2.b(this, pVar));
        v.a aVar = new v.a(b10);
        this.f46664b = aVar;
        a0.l0 l0Var = new a0.l0(aVar, 1);
        this.f46666d = l0Var;
        aVar.a(l0Var);
        this.f46670h = j10;
    }

    private List e(List list) {
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            String str = (String) it.next();
            if (!str.equals("0") && !str.equals("1")) {
                if (l2.a(this.f46667e, str)) {
                    arrayList.add(str);
                } else {
                    x.y0.a("Camera2CameraFactory", "Camera " + str + " is filtered out because its capabilities do not contain REQUEST_AVAILABLE_CAPABILITIES_BACKWARD_COMPATIBLE.");
                }
            } else {
                arrayList.add(str);
            }
        }
        return arrayList;
    }

    @Override // a0.c0
    public a0.e0 a(String str) {
        if (this.f46668f.contains(str)) {
            return new m0(this.f46663a, this.f46667e, str, f(str), this.f46664b, this.f46666d, this.f46665c.b(), this.f46665c.c(), this.f46669g, this.f46670h);
        }
        throw new IllegalArgumentException("The given camera id is not on the available camera id list.");
    }

    @Override // a0.c0
    public Set b() {
        return new LinkedHashSet(this.f46668f);
    }

    @Override // a0.c0
    public y.a d() {
        return this.f46664b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0 f(String str) {
        try {
            s0 s0Var = (s0) this.f46671i.get(str);
            if (s0Var == null) {
                s0 s0Var2 = new s0(str, this.f46667e);
                this.f46671i.put(str, s0Var2);
                return s0Var2;
            }
            return s0Var;
        } catch (r.f e10) {
            throw o2.a(e10);
        }
    }

    @Override // a0.c0
    /* renamed from: g */
    public r.n0 c() {
        return this.f46667e;
    }
}
