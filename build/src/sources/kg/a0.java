package kg;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a0 extends z {

    /* renamed from: p  reason: collision with root package name */
    static final z f32947p = new a0(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f32948i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f32949o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(Object[] objArr, int i10) {
        this.f32948i = objArr;
        this.f32949o = i10;
    }

    @Override // kg.w
    final Object[] b() {
        return this.f32948i;
    }

    @Override // kg.w
    final int c() {
        return 0;
    }

    @Override // kg.w
    final int d() {
        return this.f32949o;
    }

    @Override // kg.w
    final boolean f() {
        return false;
    }

    @Override // kg.z, kg.w
    final int g(Object[] objArr, int i10) {
        System.arraycopy(this.f32948i, 0, objArr, 0, this.f32949o);
        return this.f32949o;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f32949o, "index");
        Object obj = this.f32948i[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f32949o;
    }
}
