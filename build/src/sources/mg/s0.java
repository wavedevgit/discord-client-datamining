package mg;

import java.util.AbstractSet;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s0 extends AbstractSet {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ y0 f38639d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(y0 y0Var) {
        this.f38639d = y0Var;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final void clear() {
        this.f38639d.clear();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        int z10;
        Map o10 = this.f38639d.o();
        if (o10 != null) {
            return o10.entrySet().contains(obj);
        }
        if (obj instanceof Map.Entry) {
            Map.Entry entry = (Map.Entry) obj;
            z10 = this.f38639d.z(entry.getKey());
            if (z10 != -1 && r.a(y0.m(this.f38639d, z10), entry.getValue())) {
                return true;
            }
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final Iterator iterator() {
        y0 y0Var = this.f38639d;
        Map o10 = y0Var.o();
        if (o10 != null) {
            return o10.entrySet().iterator();
        }
        return new q0(y0Var);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean remove(Object obj) {
        int y10;
        int[] a10;
        Object[] b10;
        Object[] c10;
        int i10;
        Map o10 = this.f38639d.o();
        if (o10 != null) {
            return o10.entrySet().remove(obj);
        }
        if (obj instanceof Map.Entry) {
            Map.Entry entry = (Map.Entry) obj;
            y0 y0Var = this.f38639d;
            if (!y0Var.u()) {
                y10 = y0Var.y();
                Object key = entry.getKey();
                Object value = entry.getValue();
                y0 y0Var2 = this.f38639d;
                Object l10 = y0.l(y0Var2);
                a10 = y0Var2.a();
                b10 = y0Var2.b();
                c10 = y0Var2.c();
                int b11 = z0.b(key, value, y10, l10, a10, b10, c10);
                if (b11 != -1) {
                    this.f38639d.t(b11, y10);
                    y0 y0Var3 = this.f38639d;
                    i10 = y0Var3.f38844q;
                    y0Var3.f38844q = i10 - 1;
                    this.f38639d.r();
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f38639d.size();
    }
}
