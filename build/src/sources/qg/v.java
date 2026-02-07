package qg;

import java.util.AbstractSet;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v extends AbstractSet {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ c0 f47628d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(c0 c0Var) {
        this.f47628d = c0Var;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final void clear() {
        this.f47628d.clear();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        int z10;
        Map o10 = this.f47628d.o();
        if (o10 != null) {
            return o10.entrySet().contains(obj);
        }
        if (obj instanceof Map.Entry) {
            Map.Entry entry = (Map.Entry) obj;
            z10 = this.f47628d.z(entry.getKey());
            if (z10 != -1 && dl.a(c0.m(this.f47628d, z10), entry.getValue())) {
                return true;
            }
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final Iterator iterator() {
        c0 c0Var = this.f47628d;
        Map o10 = c0Var.o();
        if (o10 != null) {
            return o10.entrySet().iterator();
        }
        return new t(c0Var);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean remove(Object obj) {
        int y10;
        int[] a10;
        Object[] b10;
        Object[] c10;
        int i10;
        Map o10 = this.f47628d.o();
        if (o10 != null) {
            return o10.entrySet().remove(obj);
        }
        if (obj instanceof Map.Entry) {
            Map.Entry entry = (Map.Entry) obj;
            c0 c0Var = this.f47628d;
            if (!c0Var.u()) {
                y10 = c0Var.y();
                Object key = entry.getKey();
                Object value = entry.getValue();
                c0 c0Var2 = this.f47628d;
                Object l10 = c0.l(c0Var2);
                a10 = c0Var2.a();
                b10 = c0Var2.b();
                c10 = c0Var2.c();
                int b11 = d0.b(key, value, y10, l10, a10, b10, c10);
                if (b11 != -1) {
                    this.f47628d.t(b11, y10);
                    c0 c0Var3 = this.f47628d;
                    i10 = c0Var3.f47023q;
                    c0Var3.f47023q = i10 - 1;
                    this.f47628d.r();
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
        return this.f47628d.size();
    }
}
