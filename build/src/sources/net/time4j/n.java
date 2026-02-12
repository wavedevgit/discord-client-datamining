package net.time4j;

import bu.l0;
import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n extends bu.a implements Serializable {
    private static final bu.j0 A;
    private static final bu.j0 B;

    /* renamed from: i  reason: collision with root package name */
    private static final char f37629i;

    /* renamed from: o  reason: collision with root package name */
    private static final n f37630o;

    /* renamed from: p  reason: collision with root package name */
    private static final a f37631p;

    /* renamed from: q  reason: collision with root package name */
    private static final a f37632q;

    /* renamed from: r  reason: collision with root package name */
    private static final a f37633r;

    /* renamed from: s  reason: collision with root package name */
    private static final a f37634s;
    private static final long serialVersionUID = -6321211763598951499L;

    /* renamed from: t  reason: collision with root package name */
    private static final a f37635t;

    /* renamed from: u  reason: collision with root package name */
    private static final a f37636u;

    /* renamed from: v  reason: collision with root package name */
    private static final Comparator f37637v;

    /* renamed from: w  reason: collision with root package name */
    public static bu.d0 f37638w;

    /* renamed from: x  reason: collision with root package name */
    public static bu.d0 f37639x;

    /* renamed from: y  reason: collision with root package name */
    public static bu.d0 f37640y;

    /* renamed from: z  reason: collision with root package name */
    private static final bu.j0 f37641z;

    /* renamed from: d  reason: collision with root package name */
    private final transient List f37642d;

    /* renamed from: e  reason: collision with root package name */
    private final transient boolean f37643e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends cu.w {
        private a(Class cls, String str) {
            super(cls, str);
        }

        public static a k(Class cls, String str) {
            return new a(cls, str);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // cu.w
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
                                                        return f.f37427e;
                                                    case 'D':
                                                        return f.f37433s;
                                                    case 'E':
                                                        return f.f37428i;
                                                    default:
                                                        throw new IllegalArgumentException("Unsupported pattern symbol: " + c10);
                                                }
                                            }
                                            return g.f37468i;
                                        }
                                        return g.f37467e;
                                    }
                                    return g.f37466d;
                                }
                                return g.f37471q;
                            }
                            return f.f37429o;
                        }
                        return f.f37432r;
                    }
                    return f.f37430p;
                }
                return f.f37431q;
            }
            return f.f37426d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b extends bu.b {
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
        f37629i = c10;
        f37630o = new n();
        f37631p = e(true, false);
        f37632q = e(true, true);
        f37633r = e(false, false);
        f37634s = e(false, true);
        f37635t = f(true);
        f37636u = f(false);
        f37637v = p0.a();
        f37638w = p0.m();
        f37639x = p0.h();
        f37640y = p0.j();
        f fVar = f.f37429o;
        f fVar2 = f.f37431q;
        f fVar3 = f.f37433s;
        f37641z = g(fVar, fVar2, fVar3);
        A = g(g.f37466d, g.f37467e, g.f37468i, g.f37471q);
        B = g(f.f(), f.f37432r, fVar3);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(List list, boolean z10) {
        boolean isEmpty = list.isEmpty();
        if (isEmpty) {
            this.f37642d = Collections.EMPTY_LIST;
        } else {
            Collections.sort(list, f37637v);
            this.f37642d = Collections.unmodifiableList(list);
        }
        this.f37643e = !isEmpty && z10;
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

    public static bu.j0 g(w... wVarArr) {
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
        return f37630o;
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

    @Override // bu.l0
    public List a() {
        return this.f37642d;
    }

    public boolean c(w wVar) {
        if (wVar == null) {
            return false;
        }
        boolean h10 = h(wVar);
        int size = this.f37642d.size();
        for (int i10 = 0; i10 < size; i10++) {
            l0.a aVar = (l0.a) this.f37642d.get(i10);
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
            if (this.f37643e == nVar.f37643e && a().equals(nVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode = a().hashCode();
        if (this.f37643e) {
            return 0;
        }
        return hashCode;
    }

    public boolean i() {
        return this.f37643e;
    }

    public String toString() {
        return k(0);
    }

    private n() {
        this.f37642d = Collections.EMPTY_LIST;
        this.f37643e = false;
    }
}
