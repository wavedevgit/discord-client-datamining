package ji;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r0 extends u {

    /* renamed from: i  reason: collision with root package name */
    final transient Object f32178i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r0(Object obj) {
        this.f32178i = ii.m.j(obj);
    }

    @Override // ji.u, ji.q
    public s b() {
        return s.s(this.f32178i);
    }

    @Override // ji.q
    int c(Object[] objArr, int i10) {
        objArr[i10] = this.f32178i;
        return i10 + 1;
    }

    @Override // ji.q, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public boolean contains(Object obj) {
        return this.f32178i.equals(obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ji.q
    public boolean g() {
        return false;
    }

    @Override // ji.u, java.util.Collection, java.util.Set
    public final int hashCode() {
        return this.f32178i.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    /* renamed from: q */
    public t0 iterator() {
        return w.p(this.f32178i);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public int size() {
        return 1;
    }

    @Override // java.util.AbstractCollection
    public String toString() {
        String obj = this.f32178i.toString();
        StringBuilder sb2 = new StringBuilder(String.valueOf(obj).length() + 2);
        sb2.append('[');
        sb2.append(obj);
        sb2.append(']');
        return sb2.toString();
    }
}
