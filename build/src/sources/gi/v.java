package gi;

import java.util.Iterator;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v extends t {

    /* renamed from: p  reason: collision with root package name */
    private static final Object[] f26265p;

    /* renamed from: q  reason: collision with root package name */
    static final v f26266q;

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f26267i;

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f26268o;

    static {
        Object[] objArr = new Object[0];
        f26265p = objArr;
        f26266q = new v(objArr, 0, objArr, 0, 0);
    }

    v(Object[] objArr, int i10, Object[] objArr2, int i11, int i12) {
        this.f26267i = objArr;
        this.f26268o = objArr2;
    }

    @Override // gi.p
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f26267i, 0, objArr, 0, 0);
        return 0;
    }

    @Override // gi.p
    final int c() {
        return 0;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        if (obj != null) {
            int length = this.f26268o.length;
            return false;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // gi.p
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // gi.p
    public final Object[] e() {
        return this.f26267i;
    }

    @Override // gi.t
    final s g() {
        int i10 = s.f26259i;
        return u.f26262p;
    }

    @Override // java.util.Collection, java.util.Set
    public final int hashCode() {
        return 0;
    }

    @Override // gi.t
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
