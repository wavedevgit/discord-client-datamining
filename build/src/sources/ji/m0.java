package ji;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 extends u {

    /* renamed from: s  reason: collision with root package name */
    private static final Object[] f31897s;

    /* renamed from: t  reason: collision with root package name */
    static final m0 f31898t;

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f31899i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f31900o;

    /* renamed from: p  reason: collision with root package name */
    final transient Object[] f31901p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f31902q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f31903r;

    static {
        Object[] objArr = new Object[0];
        f31897s = objArr;
        f31898t = new m0(objArr, 0, objArr, 0, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(Object[] objArr, int i10, Object[] objArr2, int i11, int i12) {
        this.f31899i = objArr;
        this.f31900o = i10;
        this.f31901p = objArr2;
        this.f31902q = i11;
        this.f31903r = i12;
    }

    @Override // ji.q
    int c(Object[] objArr, int i10) {
        System.arraycopy(this.f31899i, 0, objArr, i10, this.f31903r);
        return i10 + this.f31903r;
    }

    @Override // ji.q, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public boolean contains(Object obj) {
        Object[] objArr = this.f31901p;
        if (obj == null || objArr.length == 0) {
            return false;
        }
        int c10 = p.c(obj);
        while (true) {
            int i10 = c10 & this.f31902q;
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
    @Override // ji.q
    public Object[] d() {
        return this.f31899i;
    }

    @Override // ji.q
    int e() {
        return this.f31903r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ji.q
    public int f() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ji.q
    public boolean g() {
        return false;
    }

    @Override // ji.u, java.util.Collection, java.util.Set
    public int hashCode() {
        return this.f31900o;
    }

    @Override // ji.u
    s o() {
        return s.i(this.f31899i, this.f31903r);
    }

    @Override // ji.u
    boolean p() {
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    /* renamed from: q */
    public t0 iterator() {
        return b().iterator();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public int size() {
        return this.f31903r;
    }
}
