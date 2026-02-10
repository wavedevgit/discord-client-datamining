package oi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 extends u {

    /* renamed from: s  reason: collision with root package name */
    private static final Object[] f41891s;

    /* renamed from: t  reason: collision with root package name */
    static final m0 f41892t;

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f41893i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f41894o;

    /* renamed from: p  reason: collision with root package name */
    final transient Object[] f41895p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f41896q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f41897r;

    static {
        Object[] objArr = new Object[0];
        f41891s = objArr;
        f41892t = new m0(objArr, 0, objArr, 0, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(Object[] objArr, int i10, Object[] objArr2, int i11, int i12) {
        this.f41893i = objArr;
        this.f41894o = i10;
        this.f41895p = objArr2;
        this.f41896q = i11;
        this.f41897r = i12;
    }

    @Override // oi.q
    int c(Object[] objArr, int i10) {
        System.arraycopy(this.f41893i, 0, objArr, i10, this.f41897r);
        return i10 + this.f41897r;
    }

    @Override // oi.q, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public boolean contains(Object obj) {
        Object[] objArr = this.f41895p;
        if (obj == null || objArr.length == 0) {
            return false;
        }
        int c10 = p.c(obj);
        while (true) {
            int i10 = c10 & this.f41896q;
            Object obj2 = objArr[i10];
            if (obj2 == null) {
                return false;
            }
            if (obj2.equals(obj)) {
                return true;
            }
            c10 = i10 + 1;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // oi.q
    public Object[] d() {
        return this.f41893i;
    }

    @Override // oi.q
    int e() {
        return this.f41897r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // oi.q
    public int f() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // oi.q
    public boolean g() {
        return false;
    }

    @Override // oi.u, java.util.Collection, java.util.Set
    public int hashCode() {
        return this.f41894o;
    }

    @Override // oi.u
    s q() {
        return s.i(this.f41893i, this.f41897r);
    }

    @Override // oi.u
    boolean r() {
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    /* renamed from: s */
    public t0 iterator() {
        return b().iterator();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public int size() {
        return this.f41897r;
    }
}
