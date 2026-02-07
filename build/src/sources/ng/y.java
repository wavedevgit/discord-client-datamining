package ng;

import java.util.Iterator;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y extends p1 {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ a0 f40487d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(a0 a0Var) {
        this.f40487d = a0Var;
    }

    @Override // ng.p1
    final Map b() {
        return this.f40487d;
    }

    @Override // ng.p1, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        Set entrySet = this.f40487d.f39726i.entrySet();
        entrySet.getClass();
        try {
            return entrySet.contains(obj);
        } catch (ClassCastException | NullPointerException unused) {
            return false;
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final Iterator iterator() {
        return new z(this.f40487d);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean remove(Object obj) {
        if (!contains(obj)) {
            return false;
        }
        Map.Entry entry = (Map.Entry) obj;
        Objects.requireNonNull(entry);
        a0 a0Var = this.f40487d;
        i0.n(a0Var.f39727o, entry.getKey());
        return true;
    }
}
