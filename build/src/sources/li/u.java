package li;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u extends s {

    /* renamed from: p  reason: collision with root package name */
    static final s f35961p = new u(new Object[0], 0);

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f35962o;

    u(Object[] objArr, int i10) {
        this.f35962o = objArr;
    }

    @Override // li.s, li.p
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f35962o, 0, objArr, 0, 0);
        return 0;
    }

    @Override // li.p
    final int c() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // li.p
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // li.p
    public final Object[] e() {
        return this.f35962o;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        m.a(i10, 0, "index");
        Object obj = this.f35962o[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return 0;
    }
}
