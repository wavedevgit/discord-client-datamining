package og;

import java.util.AbstractSet;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z extends AbstractSet {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ f0 f43804d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(f0 f0Var) {
        this.f43804d = f0Var;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final void clear() {
        this.f43804d.clear();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        int x10;
        Map n10 = this.f43804d.n();
        if (n10 != null) {
            return n10.entrySet().contains(obj);
        }
        if (obj instanceof Map.Entry) {
            Map.Entry entry = (Map.Entry) obj;
            x10 = this.f43804d.x(entry.getKey());
            if (x10 != -1 && ze.a(f0.l(this.f43804d, x10), entry.getValue())) {
                return true;
            }
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final Iterator iterator() {
        f0 f0Var = this.f43804d;
        Map n10 = f0Var.n();
        if (n10 != null) {
            return n10.entrySet().iterator();
        }
        return new x(f0Var);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean remove(Object obj) {
        int w10;
        int[] B;
        Object[] a10;
        Object[] b10;
        Map n10 = this.f43804d.n();
        if (n10 != null) {
            return n10.entrySet().remove(obj);
        }
        if (!(obj instanceof Map.Entry)) {
            return false;
        }
        Map.Entry entry = (Map.Entry) obj;
        f0 f0Var = this.f43804d;
        if (!f0Var.s()) {
            w10 = f0Var.w();
            Object key = entry.getKey();
            Object value = entry.getValue();
            Object m10 = f0.m(this.f43804d);
            B = this.f43804d.B();
            a10 = this.f43804d.a();
            b10 = this.f43804d.b();
            int b11 = g0.b(key, value, w10, m10, B, a10, b10);
            if (b11 == -1) {
                return false;
            }
            this.f43804d.r(b11, w10);
            f0.d(this.f43804d);
            this.f43804d.p();
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f43804d.size();
    }
}
