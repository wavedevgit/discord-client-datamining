package ni;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k0 extends s {

    /* renamed from: p  reason: collision with root package name */
    static final s f40844p = new k0(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f40845i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f40846o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(Object[] objArr, int i10) {
        this.f40845i = objArr;
        this.f40846o = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ni.s, ni.q
    public int c(Object[] objArr, int i10) {
        System.arraycopy(this.f40845i, 0, objArr, i10, this.f40846o);
        return i10 + this.f40846o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ni.q
    public Object[] d() {
        return this.f40845i;
    }

    @Override // ni.q
    int e() {
        return this.f40846o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ni.q
    public int f() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ni.q
    public boolean g() {
        return false;
    }

    @Override // java.util.List
    public Object get(int i10) {
        mi.m.h(i10, this.f40846o);
        Object obj = this.f40845i[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public int size() {
        return this.f40846o;
    }
}
