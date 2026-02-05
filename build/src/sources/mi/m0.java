package mi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 extends u {

    /* renamed from: s  reason: collision with root package name */
    private static final Object[] f38655s;

    /* renamed from: t  reason: collision with root package name */
    static final m0 f38656t;

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f38657i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f38658o;

    /* renamed from: p  reason: collision with root package name */
    final transient Object[] f38659p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f38660q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f38661r;

    static {
        Object[] objArr = new Object[0];
        f38655s = objArr;
        f38656t = new m0(objArr, 0, objArr, 0, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(Object[] objArr, int i10, Object[] objArr2, int i11, int i12) {
        this.f38657i = objArr;
        this.f38658o = i10;
        this.f38659p = objArr2;
        this.f38660q = i11;
        this.f38661r = i12;
    }

    @Override // mi.q
    int c(Object[] objArr, int i10) {
        System.arraycopy(this.f38657i, 0, objArr, i10, this.f38661r);
        return i10 + this.f38661r;
    }

    @Override // mi.q, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public boolean contains(Object obj) {
        Object[] objArr = this.f38659p;
        if (obj == null || objArr.length == 0) {
            return false;
        }
        int c10 = p.c(obj);
        while (true) {
            int i10 = c10 & this.f38660q;
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
    @Override // mi.q
    public Object[] d() {
        return this.f38657i;
    }

    @Override // mi.q
    int e() {
        return this.f38661r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mi.q
    public int f() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mi.q
    public boolean g() {
        return false;
    }

    @Override // mi.u, java.util.Collection, java.util.Set
    public int hashCode() {
        return this.f38658o;
    }

    @Override // mi.u
    s p() {
        return s.i(this.f38657i, this.f38661r);
    }

    @Override // mi.u
    boolean q() {
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    /* renamed from: r */
    public t0 iterator() {
        return b().iterator();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public int size() {
        return this.f38661r;
    }
}
