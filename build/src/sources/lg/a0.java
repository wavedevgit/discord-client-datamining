package lg;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a0 extends z {

    /* renamed from: p  reason: collision with root package name */
    static final z f36249p = new a0(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f36250i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f36251o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(Object[] objArr, int i10) {
        this.f36250i = objArr;
        this.f36251o = i10;
    }

    @Override // lg.w
    final Object[] b() {
        return this.f36250i;
    }

    @Override // lg.w
    final int c() {
        return 0;
    }

    @Override // lg.w
    final int d() {
        return this.f36251o;
    }

    @Override // lg.w
    final boolean f() {
        return false;
    }

    @Override // lg.z, lg.w
    final int g(Object[] objArr, int i10) {
        System.arraycopy(this.f36250i, 0, objArr, 0, this.f36251o);
        return this.f36251o;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f36251o, "index");
        Object obj = this.f36250i[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f36251o;
    }
}
