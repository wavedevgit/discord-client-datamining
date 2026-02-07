package ki;

import java.util.Iterator;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v extends t {

    /* renamed from: p  reason: collision with root package name */
    private static final Object[] f31744p;

    /* renamed from: q  reason: collision with root package name */
    static final v f31745q;

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f31746i;

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f31747o;

    static {
        Object[] objArr = new Object[0];
        f31744p = objArr;
        f31745q = new v(objArr, 0, objArr, 0, 0);
    }

    v(Object[] objArr, int i10, Object[] objArr2, int i11, int i12) {
        this.f31746i = objArr;
        this.f31747o = objArr2;
    }

    @Override // ki.p
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f31746i, 0, objArr, 0, 0);
        return 0;
    }

    @Override // ki.p
    final int c() {
        return 0;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        if (obj != null) {
            int length = this.f31747o.length;
            return false;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ki.p
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ki.p
    public final Object[] e() {
        return this.f31746i;
    }

    @Override // ki.t
    final s g() {
        int i10 = s.f31738i;
        return u.f31741p;
    }

    @Override // java.util.Collection, java.util.Set
    public final int hashCode() {
        return 0;
    }

    @Override // ki.t
    final boolean i() {
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return f().listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return 0;
    }
}
