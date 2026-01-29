package gi;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u extends s {

    /* renamed from: p  reason: collision with root package name */
    static final s f26938p = new u(new Object[0], 0);

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f26939o;

    u(Object[] objArr, int i10) {
        this.f26939o = objArr;
    }

    @Override // gi.s, gi.p
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f26939o, 0, objArr, 0, 0);
        return 0;
    }

    @Override // gi.p
    final int c() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // gi.p
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // gi.p
    public final Object[] e() {
        return this.f26939o;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        m.a(i10, 0, "index");
        Object obj = this.f26939o[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return 0;
    }
}
