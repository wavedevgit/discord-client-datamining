package qi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 extends u {

    /* renamed from: s  reason: collision with root package name */
    private static final Object[] f45948s;

    /* renamed from: t  reason: collision with root package name */
    static final m0 f45949t;

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f45950i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f45951o;

    /* renamed from: p  reason: collision with root package name */
    final transient Object[] f45952p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f45953q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f45954r;

    static {
        Object[] objArr = new Object[0];
        f45948s = objArr;
        f45949t = new m0(objArr, 0, objArr, 0, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(Object[] objArr, int i10, Object[] objArr2, int i11, int i12) {
        this.f45950i = objArr;
        this.f45951o = i10;
        this.f45952p = objArr2;
        this.f45953q = i11;
        this.f45954r = i12;
    }

    @Override // qi.q
    int c(Object[] objArr, int i10) {
        System.arraycopy(this.f45950i, 0, objArr, i10, this.f45954r);
        return i10 + this.f45954r;
    }

    @Override // qi.q, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public boolean contains(Object obj) {
        Object[] objArr = this.f45952p;
        if (obj == null || objArr.length == 0) {
            return false;
        }
        int c10 = p.c(obj);
        while (true) {
            int i10 = c10 & this.f45953q;
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
        return this.f45950i;
    }

    @Override // qi.q
    int e() {
        return this.f45954r;
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
        return this.f45951o;
    }

    @Override // qi.u
    s q() {
        return s.j(this.f45950i, this.f45954r);
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
        return this.f45954r;
    }
}
