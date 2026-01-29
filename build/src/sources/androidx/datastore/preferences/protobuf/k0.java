package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.h0;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class k0 implements j0 {
    private static int i(int i10, Object obj, Object obj2) {
        i0 i0Var = (i0) obj;
        h0 h0Var = (h0) obj2;
        int i11 = 0;
        if (i0Var.isEmpty()) {
            return 0;
        }
        for (Map.Entry entry : i0Var.entrySet()) {
            i11 += h0Var.a(i10, entry.getKey(), entry.getValue());
        }
        return i11;
    }

    private static i0 j(Object obj, Object obj2) {
        i0 i0Var = (i0) obj;
        i0 i0Var2 = (i0) obj2;
        if (!i0Var2.isEmpty()) {
            if (!i0Var.i()) {
                i0Var = i0Var.l();
            }
            i0Var.k(i0Var2);
        }
        return i0Var;
    }

    @Override // androidx.datastore.preferences.protobuf.j0
    public Object a(Object obj, Object obj2) {
        return j(obj, obj2);
    }

    @Override // androidx.datastore.preferences.protobuf.j0
    public h0.a b(Object obj) {
        return ((h0) obj).c();
    }

    @Override // androidx.datastore.preferences.protobuf.j0
    public Map c(Object obj) {
        return (i0) obj;
    }

    @Override // androidx.datastore.preferences.protobuf.j0
    public Object d(Object obj) {
        return i0.d().l();
    }

    @Override // androidx.datastore.preferences.protobuf.j0
    public Map e(Object obj) {
        return (i0) obj;
    }

    @Override // androidx.datastore.preferences.protobuf.j0
    public Object f(Object obj) {
        ((i0) obj).j();
        return obj;
    }

    @Override // androidx.datastore.preferences.protobuf.j0
    public int g(int i10, Object obj, Object obj2) {
        return i(i10, obj, obj2);
    }

    @Override // androidx.datastore.preferences.protobuf.j0
    public boolean h(Object obj) {
        return !((i0) obj).i();
    }
}
