package gi;

import java.util.Iterator;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v extends t {

    /* renamed from: p  reason: collision with root package name */
    private static final Object[] f27052p;

    /* renamed from: q  reason: collision with root package name */
    static final v f27053q;

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f27054i;

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f27055o;

    static {
        Object[] objArr = new Object[0];
        f27052p = objArr;
        f27053q = new v(objArr, 0, objArr, 0, 0);
    }

    v(Object[] objArr, int i10, Object[] objArr2, int i11, int i12) {
        this.f27054i = objArr;
        this.f27055o = objArr2;
    }

    @Override // gi.p
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f27054i, 0, objArr, 0, 0);
        return 0;
    }

    @Override // gi.p
    final int c() {
        return 0;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        if (obj != null) {
            int length = this.f27055o.length;
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
        return this.f27054i;
    }

    @Override // gi.t
    final s g() {
        int i10 = s.f27046i;
        return u.f27049p;
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
