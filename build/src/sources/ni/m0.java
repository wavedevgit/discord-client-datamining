package ni;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 extends u {

    /* renamed from: s  reason: collision with root package name */
    private static final Object[] f40818s;

    /* renamed from: t  reason: collision with root package name */
    static final m0 f40819t;

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f40820i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f40821o;

    /* renamed from: p  reason: collision with root package name */
    final transient Object[] f40822p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f40823q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f40824r;

    static {
        Object[] objArr = new Object[0];
        f40818s = objArr;
        f40819t = new m0(objArr, 0, objArr, 0, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(Object[] objArr, int i10, Object[] objArr2, int i11, int i12) {
        this.f40820i = objArr;
        this.f40821o = i10;
        this.f40822p = objArr2;
        this.f40823q = i11;
        this.f40824r = i12;
    }

    @Override // ni.q
    int c(Object[] objArr, int i10) {
        System.arraycopy(this.f40820i, 0, objArr, i10, this.f40824r);
        return i10 + this.f40824r;
    }

    @Override // ni.q, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public boolean contains(Object obj) {
        Object[] objArr = this.f40822p;
        if (obj == null || objArr.length == 0) {
            return false;
        }
        int c10 = p.c(obj);
        while (true) {
            int i10 = c10 & this.f40823q;
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
        return this.f40820i;
    }

    @Override // ni.q
    int e() {
        return this.f40824r;
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
        return this.f40821o;
    }

    @Override // ni.u
    s q() {
        return s.i(this.f40820i, this.f40824r);
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
        return this.f40824r;
    }
}
