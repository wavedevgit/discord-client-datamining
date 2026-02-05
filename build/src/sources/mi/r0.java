package mi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r0 extends u {

    /* renamed from: i  reason: collision with root package name */
    final transient Object f38674i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r0(Object obj) {
        this.f38674i = li.m.j(obj);
    }

    @Override // mi.u, mi.q
    public s b() {
        return s.t(this.f38674i);
    }

    @Override // mi.q
    int c(Object[] objArr, int i10) {
        objArr[i10] = this.f38674i;
        return i10 + 1;
    }

    @Override // mi.q, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public boolean contains(Object obj) {
        return this.f38674i.equals(obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mi.q
    public boolean g() {
        return false;
    }

    @Override // mi.u, java.util.Collection, java.util.Set
    public final int hashCode() {
        return this.f38674i.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    /* renamed from: r */
    public t0 iterator() {
        return w.p(this.f38674i);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public int size() {
        return 1;
    }

    @Override // java.util.AbstractCollection
    public String toString() {
        String obj = this.f38674i.toString();
        StringBuilder sb2 = new StringBuilder(String.valueOf(obj).length() + 2);
        sb2.append('[');
        sb2.append(obj);
        sb2.append(']');
        return sb2.toString();
    }
}
