package qi;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k0 extends s {

    /* renamed from: p  reason: collision with root package name */
    static final s f45357p = new k0(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f45358i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f45359o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(Object[] objArr, int i10) {
        this.f45358i = objArr;
        this.f45359o = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qi.s, qi.q
    public int c(Object[] objArr, int i10) {
        System.arraycopy(this.f45358i, 0, objArr, i10, this.f45359o);
        return i10 + this.f45359o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qi.q
    public Object[] d() {
        return this.f45358i;
    }

    @Override // qi.q
    int e() {
        return this.f45359o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qi.q
    public int f() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qi.q
    public boolean g() {
        return false;
    }

    @Override // java.util.List
    public Object get(int i10) {
        pi.m.h(i10, this.f45359o);
        Object obj = this.f45358i[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public int size() {
        return this.f45359o;
    }
}
