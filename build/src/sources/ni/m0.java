package ni;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 extends u {

    /* renamed from: s  reason: collision with root package name */
    private static final Object[] f40866s;

    /* renamed from: t  reason: collision with root package name */
    static final m0 f40867t;

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f40868i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f40869o;

    /* renamed from: p  reason: collision with root package name */
    final transient Object[] f40870p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f40871q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f40872r;

    static {
        Object[] objArr = new Object[0];
        f40866s = objArr;
        f40867t = new m0(objArr, 0, objArr, 0, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(Object[] objArr, int i10, Object[] objArr2, int i11, int i12) {
        this.f40868i = objArr;
        this.f40869o = i10;
        this.f40870p = objArr2;
        this.f40871q = i11;
        this.f40872r = i12;
    }

    @Override // ni.q
    int c(Object[] objArr, int i10) {
        System.arraycopy(this.f40868i, 0, objArr, i10, this.f40872r);
        return i10 + this.f40872r;
    }

    @Override // ni.q, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public boolean contains(Object obj) {
        Object[] objArr = this.f40870p;
        if (obj == null || objArr.length == 0) {
            return false;
        }
        int c10 = p.c(obj);
        while (true) {
            int i10 = c10 & this.f40871q;
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
    @Override // ni.q
    public Object[] d() {
        return this.f40868i;
    }

    @Override // ni.q
    int e() {
        return this.f40872r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ni.q
    public int f() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ni.q
    public boolean g() {
        return false;
    }

    @Override // ni.u, java.util.Collection, java.util.Set
    public int hashCode() {
        return this.f40869o;
    }

    @Override // ni.u
    s q() {
        return s.i(this.f40868i, this.f40872r);
    }

    @Override // ni.u
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
        return this.f40872r;
    }
}
