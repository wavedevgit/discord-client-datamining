package ji;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 extends u {

    /* renamed from: s  reason: collision with root package name */
    private static final Object[] f32143s;

    /* renamed from: t  reason: collision with root package name */
    static final m0 f32144t;

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f32145i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f32146o;

    /* renamed from: p  reason: collision with root package name */
    final transient Object[] f32147p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f32148q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f32149r;

    static {
        Object[] objArr = new Object[0];
        f32143s = objArr;
        f32144t = new m0(objArr, 0, objArr, 0, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(Object[] objArr, int i10, Object[] objArr2, int i11, int i12) {
        this.f32145i = objArr;
        this.f32146o = i10;
        this.f32147p = objArr2;
        this.f32148q = i11;
        this.f32149r = i12;
    }

    @Override // ji.q
    int c(Object[] objArr, int i10) {
        System.arraycopy(this.f32145i, 0, objArr, i10, this.f32149r);
        return i10 + this.f32149r;
    }

    @Override // ji.q, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public boolean contains(Object obj) {
        Object[] objArr = this.f32147p;
        if (obj == null || objArr.length == 0) {
            return false;
        }
        int c10 = p.c(obj);
        while (true) {
            int i10 = c10 & this.f32148q;
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
        return this.f32145i;
    }

    @Override // ji.q
    int e() {
        return this.f32149r;
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
        return this.f32146o;
    }

    @Override // ji.u
    s o() {
        return s.i(this.f32145i, this.f32149r);
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
        return this.f32149r;
    }
}
