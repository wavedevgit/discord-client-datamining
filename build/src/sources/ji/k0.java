package ji;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k0 extends s {

    /* renamed from: p  reason: collision with root package name */
    static final s f31875p = new k0(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f31876i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f31877o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(Object[] objArr, int i10) {
        this.f31876i = objArr;
        this.f31877o = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ji.s, ji.q
    public int c(Object[] objArr, int i10) {
        System.arraycopy(this.f31876i, 0, objArr, i10, this.f31877o);
        return i10 + this.f31877o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ji.q
    public Object[] d() {
        return this.f31876i;
    }

    @Override // ji.q
    int e() {
        return this.f31877o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ji.q
    public int f() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ji.q
    public boolean g() {
        return false;
    }

    @Override // java.util.List
    public Object get(int i10) {
        ii.m.h(i10, this.f31877o);
        Object obj = this.f31876i[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public int size() {
        return this.f31877o;
    }
}
