package qi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 extends u {

    /* renamed from: s  reason: collision with root package name */
    private static final Object[] f45379s;

    /* renamed from: t  reason: collision with root package name */
    static final m0 f45380t;

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f45381i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f45382o;

    /* renamed from: p  reason: collision with root package name */
    final transient Object[] f45383p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f45384q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f45385r;

    static {
        Object[] objArr = new Object[0];
        f45379s = objArr;
        f45380t = new m0(objArr, 0, objArr, 0, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(Object[] objArr, int i10, Object[] objArr2, int i11, int i12) {
        this.f45381i = objArr;
        this.f45382o = i10;
        this.f45383p = objArr2;
        this.f45384q = i11;
        this.f45385r = i12;
    }

    @Override // qi.q
    int c(Object[] objArr, int i10) {
        System.arraycopy(this.f45381i, 0, objArr, i10, this.f45385r);
        return i10 + this.f45385r;
    }

    @Override // qi.q, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public boolean contains(Object obj) {
        Object[] objArr = this.f45383p;
        if (obj == null || objArr.length == 0) {
            return false;
        }
        int c10 = p.c(obj);
        while (true) {
            int i10 = c10 & this.f45384q;
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
    @Override // qi.q
    public Object[] d() {
        return this.f45381i;
    }

    @Override // qi.q
    int e() {
        return this.f45385r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qi.q
    public int f() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qi.q
    public boolean g() {
        return false;
    }

    @Override // qi.u, java.util.Collection, java.util.Set
    public int hashCode() {
        return this.f45382o;
    }

    @Override // qi.u
    s q() {
        return s.j(this.f45381i, this.f45385r);
    }

    @Override // qi.u
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
        return this.f45385r;
    }
}
