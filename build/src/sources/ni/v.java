package ni;

import java.util.Iterator;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v extends t {

    /* renamed from: p  reason: collision with root package name */
    private static final Object[] f38503p;

    /* renamed from: q  reason: collision with root package name */
    static final v f38504q;

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f38505i;

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f38506o;

    static {
        Object[] objArr = new Object[0];
        f38503p = objArr;
        f38504q = new v(objArr, 0, objArr, 0, 0);
    }

    v(Object[] objArr, int i10, Object[] objArr2, int i11, int i12) {
        this.f38505i = objArr;
        this.f38506o = objArr2;
    }

    @Override // ni.p
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f38505i, 0, objArr, 0, 0);
        return 0;
    }

    @Override // ni.p
    final int c() {
        return 0;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        if (obj != null) {
            int length = this.f38506o.length;
            return false;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ni.p
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ni.p
    public final Object[] e() {
        return this.f38505i;
    }

    @Override // ni.t
    final s g() {
        int i10 = s.f38497i;
        return u.f38500p;
    }

    @Override // java.util.Collection, java.util.Set
    public final int hashCode() {
        return 0;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return f().listIterator(0);
    }

    @Override // ni.t
    final boolean j() {
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return 0;
    }
}
