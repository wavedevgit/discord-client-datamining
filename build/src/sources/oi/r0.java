package oi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r0 extends u {

    /* renamed from: i  reason: collision with root package name */
    final transient Object f41910i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r0(Object obj) {
        this.f41910i = ni.m.j(obj);
    }

    @Override // oi.u, oi.q
    public s b() {
        return s.u(this.f41910i);
    }

    @Override // oi.q
    int c(Object[] objArr, int i10) {
        objArr[i10] = this.f41910i;
        return i10 + 1;
    }

    @Override // oi.q, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public boolean contains(Object obj) {
        return this.f41910i.equals(obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // oi.q
    public boolean g() {
        return false;
    }

    @Override // oi.u, java.util.Collection, java.util.Set
    public final int hashCode() {
        return this.f41910i.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    /* renamed from: s */
    public t0 iterator() {
        return w.p(this.f41910i);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public int size() {
        return 1;
    }

    @Override // java.util.AbstractCollection
    public String toString() {
        String obj = this.f41910i.toString();
        StringBuilder sb2 = new StringBuilder(String.valueOf(obj).length() + 2);
        sb2.append('[');
        sb2.append(obj);
        sb2.append(']');
        return sb2.toString();
    }
}
