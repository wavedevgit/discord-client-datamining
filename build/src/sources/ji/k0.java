package ji;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k0 extends s {

    /* renamed from: p  reason: collision with root package name */
    static final s f32137p = new k0(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f32138i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f32139o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(Object[] objArr, int i10) {
        this.f32138i = objArr;
        this.f32139o = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ji.s, ji.q
    public int c(Object[] objArr, int i10) {
        System.arraycopy(this.f32138i, 0, objArr, i10, this.f32139o);
        return i10 + this.f32139o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ji.q
    public Object[] d() {
        return this.f32138i;
    }

    @Override // ji.q
    int e() {
        return this.f32139o;
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
        ii.m.h(i10, this.f32139o);
        Object obj = this.f32138i[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public int size() {
        return this.f32139o;
    }
}
