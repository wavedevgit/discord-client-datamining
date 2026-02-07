package ki;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u extends s {

    /* renamed from: p  reason: collision with root package name */
    static final s f31741p = new u(new Object[0], 0);

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f31742o;

    u(Object[] objArr, int i10) {
        this.f31742o = objArr;
    }

    @Override // ki.s, ki.p
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f31742o, 0, objArr, 0, 0);
        return 0;
    }

    @Override // ki.p
    final int c() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ki.p
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ki.p
    public final Object[] e() {
        return this.f31742o;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        m.a(i10, 0, "index");
        Object obj = this.f31742o[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return 0;
    }
}
