package lg;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a0 extends z {

    /* renamed from: p  reason: collision with root package name */
    static final z f36201p = new a0(new Object[0], 0);

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f36202i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f36203o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(Object[] objArr, int i10) {
        this.f36202i = objArr;
        this.f36203o = i10;
    }

    @Override // lg.w
    final Object[] b() {
        return this.f36202i;
    }

    @Override // lg.w
    final int c() {
        return 0;
    }

    @Override // lg.w
    final int d() {
        return this.f36203o;
    }

    @Override // lg.w
    final boolean f() {
        return false;
    }

    @Override // lg.z, lg.w
    final int g(Object[] objArr, int i10) {
        System.arraycopy(this.f36202i, 0, objArr, 0, this.f36203o);
        return this.f36203o;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f36203o, "index");
        Object obj = this.f36202i[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f36203o;
    }
}
