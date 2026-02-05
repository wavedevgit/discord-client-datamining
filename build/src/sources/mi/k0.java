package mi;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k0 extends s {

    /* renamed from: p  reason: collision with root package name */
    static final s f38633p = new k0(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f38634i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f38635o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(Object[] objArr, int i10) {
        this.f38634i = objArr;
        this.f38635o = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mi.s, mi.q
    public int c(Object[] objArr, int i10) {
        System.arraycopy(this.f38634i, 0, objArr, i10, this.f38635o);
        return i10 + this.f38635o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mi.q
    public Object[] d() {
        return this.f38634i;
    }

    @Override // mi.q
    int e() {
        return this.f38635o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mi.q
    public int f() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mi.q
    public boolean g() {
        return false;
    }

    @Override // java.util.List
    public Object get(int i10) {
        li.m.h(i10, this.f38635o);
        Object obj = this.f38634i[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public int size() {
        return this.f38635o;
    }
}
