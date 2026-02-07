package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import rt.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n extends rt.a implements Serializable {
    private static final rt.j0 A;
    private static final rt.j0 B;

    /* renamed from: i  reason: collision with root package name */
    private static final char f39532i;

    /* renamed from: o  reason: collision with root package name */
    private static final n f39533o;

    /* renamed from: p  reason: collision with root package name */
    private static final a f39534p;

    /* renamed from: q  reason: collision with root package name */
    private static final a f39535q;

    /* renamed from: r  reason: collision with root package name */
    private static final a f39536r;

    /* renamed from: s  reason: collision with root package name */
    private static final a f39537s;
    private static final long serialVersionUID = -6321211763598951499L;

    /* renamed from: t  reason: collision with root package name */
    private static final a f39538t;

    /* renamed from: u  reason: collision with root package name */
    private static final a f39539u;

    /* renamed from: v  reason: collision with root package name */
    private static final Comparator f39540v;

    /* renamed from: w  reason: collision with root package name */
    public static rt.d0 f39541w;

    /* renamed from: x  reason: collision with root package name */
    public static rt.d0 f39542x;

    /* renamed from: y  reason: collision with root package name */
    public static rt.d0 f39543y;

    /* renamed from: z  reason: collision with root package name */
    private static final rt.j0 f39544z;

    /* renamed from: d  reason: collision with root package name */
    private final transient List f39545d;

    /* renamed from: e  reason: collision with root package name */
    private final transient boolean f39546e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends st.w {
        private a(Class cls, String str) {
            super(cls, str);
        }

        public static a k(Class cls, String str) {
            return new a(cls, str);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // st.w
        /* renamed from: j */
        public w f(char c10) {
            if (c10 != 'I') {
                if (c10 != 'M') {
                    if (c10 != 'Q') {
                        if (c10 != 'W') {
                            if (c10 != 'Y') {
                                if (c10 != 'f') {
                                    if (c10 != 'h') {
                                        if (c10 != 'm') {
                                            if (c10 != 's') {
                                                switch (c10) {
                                                    case 'C':
                                                        return f.f39330e;
                                                    case 'D':
                                                        return f.f39336s;
                                                    case 'E':
                                                        return f.f39331i;
                                                    default:
                                                        throw new IllegalArgumentException("Unsupported pattern symbol: " + c10);
                                                }
                                            }
                                            return g.f39371i;
                                        }
                                        return g.f39370e;
                                    }
                                    return g.f39369d;
                                }
                                return g.f39374q;
                            }
                            return f.f39332o;
                        }
                        return f.f39335r;
                    }
                    return f.f39333p;
                }
                return f.f39334q;
            }
            return f.f39329d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b extends rt.b {
        /* synthetic */ b(w[] wVarArr, m mVar) {
            this(wVarArr);
        }

        private b(w... wVarArr) {
            super(wVarArr.length > 1, wVarArr);
        }
    }

    static {
        char c10;
        if (Boolean.getBoolean("net.time4j.format.iso.decimal.dot")) {
            c10 = '.';
        } else {
            c10 = ',';
        }
        f39532i = c10;
        f39533o = new n();
        f39534p = e(true, false);
        f39535q = e(true, true);
        f39536r = e(false, false);
        f39537s = e(false, true);
        f39538t = f(true);
        f39539u = f(false);
        f39540v = p0.a();
        f39541w = p0.l();
        f39542x = p0.g();
        f39543y = p0.k();
        f fVar = f.f39332o;
        f fVar2 = f.f39334q;
        f fVar3 = f.f39336s;
        f39544z = g(fVar, fVar2, fVar3);
        A = g(g.f39369d, g.f39370e, g.f39371i, g.f39374q);
        B = g(f.f(), f.f39335r, fVar3);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(List list, boolean z10) {
        boolean isEmpty = list.isEmpty();
        if (isEmpty) {
            this.f39545d = Collections.EMPTY_LIST;
        } else {
            Collections.sort(list, f39540v);
            this.f39545d = Collections.unmodifiableList(list);
        }
        this.f39546e = !isEmpty && z10;
    }

    private int d() {
        return a().size();
    }

    private static a e(boolean z10, boolean z11) {
        String str;
        if (z10) {
            if (z11) {
                str = "YYYY-DDD";
            } else {
                str = "YYYY-MM-DD";
            }
        } else if (z11) {
            str = "YYYYDDD";
        } else {
            str = "YYYYMMDD";
        }
        return a.k(f.class, str);
    }

    private static a f(boolean z10) {
        String str;
        if (z10) {
            str = "hh[:mm[:ss[,fffffffff]]]";
        } else {
            str = "hh[mm[ss[,fffffffff]]]";
        }
        return a.k(g.class, str);
    }

    public static rt.j0 g(w... wVarArr) {
        return new b(wVarArr, null);
    }

    private boolean h(w wVar) {
        char d10 = wVar.d();
        if (d10 >= '1' && d10 <= '9') {
            return true;
        }
        return false;
    }

    public static n j() {
        return f39533o;
    }

    /* JADX WARN: Removed duplicated region for block: B:113:0x01e1  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private java.lang.String k(int r23) {
        /*
            Method dump skipped, instructions count: 510
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: net.time4j.n.k(int):java.lang.String");
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private Object writeReplace() {
        return new SPX(this, 6);
    }

    @Override // rt.l0
    public List a() {
        return this.f39545d;
    }

    public boolean c(w wVar) {
        if (wVar == null) {
            return false;
        }
        boolean h10 = h(wVar);
        int size = this.f39545d.size();
        for (int i10 = 0; i10 < size; i10++) {
            l0.a aVar = (l0.a) this.f39545d.get(i10);
            w wVar2 = (w) aVar.b();
            if (wVar2.equals(wVar) || (h10 && h(wVar2))) {
                if (aVar.a() <= 0) {
                    return false;
                } else {
                    return true;
                }
            }
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) n.class.cast(obj);
            if (this.f39546e == nVar.f39546e && a().equals(nVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode = a().hashCode();
        if (this.f39546e) {
            return 0;
        }
        return hashCode;
    }

    public boolean i() {
        return this.f39546e;
    }

    public String toString() {
        return k(0);
    }

    private n() {
        this.f39545d = Collections.EMPTY_LIST;
        this.f39546e = false;
    }
}
