package oi;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k0 extends s {

    /* renamed from: p  reason: collision with root package name */
    static final s f41869p = new k0(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f41870i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f41871o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(Object[] objArr, int i10) {
        this.f41870i = objArr;
        this.f41871o = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // oi.s, oi.q
    public int c(Object[] objArr, int i10) {
        System.arraycopy(this.f41870i, 0, objArr, i10, this.f41871o);
        return i10 + this.f41871o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // oi.q
    public Object[] d() {
        return this.f41870i;
    }

    @Override // oi.q
    int e() {
        return this.f41871o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // oi.q
    public int f() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // oi.q
    public boolean g() {
        return false;
    }

    @Override // java.util.List
    public Object get(int i10) {
        ni.m.h(i10, this.f41871o);
        Object obj = this.f41870i[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public int size() {
        return this.f41871o;
    }
}
