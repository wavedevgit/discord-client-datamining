package vd;

import android.util.SparseArray;
import ne.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s {

    /* renamed from: a  reason: collision with root package name */
    private final SparseArray f51180a = new SparseArray();

    public s0 a(int i10) {
        s0 s0Var = (s0) this.f51180a.get(i10);
        if (s0Var == null) {
            s0 s0Var2 = new s0(9223372036854775806L);
            this.f51180a.put(i10, s0Var2);
            return s0Var2;
        }
        return s0Var;
    }

    public void b() {
        this.f51180a.clear();
    }
}
