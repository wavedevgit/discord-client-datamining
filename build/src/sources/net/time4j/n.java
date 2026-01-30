package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import jt.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n extends jt.a implements Serializable {
    private static final jt.j0 A;
    private static final jt.j0 B;

    /* renamed from: i  reason: collision with root package name */
    private static final char f40767i;

    /* renamed from: o  reason: collision with root package name */
    private static final n f40768o;

    /* renamed from: p  reason: collision with root package name */
    private static final a f40769p;

    /* renamed from: q  reason: collision with root package name */
    private static final a f40770q;

    /* renamed from: r  reason: collision with root package name */
    private static final a f40771r;

    /* renamed from: s  reason: collision with root package name */
    private static final a f40772s;
    private static final long serialVersionUID = -6321211763598951499L;

    /* renamed from: t  reason: collision with root package name */
    private static final a f40773t;

    /* renamed from: u  reason: collision with root package name */
    private static final a f40774u;

    /* renamed from: v  reason: collision with root package name */
    private static final Comparator f40775v;

    /* renamed from: w  reason: collision with root package name */
    public static jt.d0 f40776w;

    /* renamed from: x  reason: collision with root package name */
    public static jt.d0 f40777x;

    /* renamed from: y  reason: collision with root package name */
    public static jt.d0 f40778y;

    /* renamed from: z  reason: collision with root package name */
    private static final jt.j0 f40779z;

    /* renamed from: d  reason: collision with root package name */
    private final transient List f40780d;

    /* renamed from: e  reason: collision with root package name */
    private final transient boolean f40781e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kt.w {
        private a(Class cls, String str) {
            super(cls, str);
        }

        public static a k(Class cls, String str) {
            return new a(cls, str);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // kt.w
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
                                                        return f.f40565e;
                                                    case 'D':
                                                        return f.f40571s;
                                                    case 'E':
                                                        return f.f40566i;
                                                    default:
                                                        throw new IllegalArgumentException("Unsupported pattern symbol: " + c10);
                                                }
                                            }
                                            return g.f40606i;
                                        }
                                        return g.f40605e;
                                    }
                                    return g.f40604d;
                                }
                                return g.f40609q;
                            }
                            return f.f40567o;
                        }
                        return f.f40570r;
                    }
                    return f.f40568p;
                }
                return f.f40569q;
            }
            return f.f40564d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b extends jt.b {
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
        f40767i = c10;
        f40768o = new n();
        f40769p = e(true, false);
        f40770q = e(true, true);
        f40771r = e(false, false);
        f40772s = e(false, true);
        f40773t = f(true);
        f40774u = f(false);
        f40775v = p0.a();
        f40776w = p0.k();
        f40777x = p0.h();
        f40778y = p0.j();
        f fVar = f.f40567o;
        f fVar2 = f.f40569q;
        f fVar3 = f.f40571s;
        f40779z = g(fVar, fVar2, fVar3);
        A = g(g.f40604d, g.f40605e, g.f40606i, g.f40609q);
        B = g(f.f(), f.f40570r, fVar3);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(List list, boolean z10) {
        boolean isEmpty = list.isEmpty();
        if (isEmpty) {
            this.f40780d = Collections.EMPTY_LIST;
        } else {
            Collections.sort(list, f40775v);
            this.f40780d = Collections.unmodifiableList(list);
        }
        this.f40781e = !isEmpty && z10;
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

    public static jt.j0 g(w... wVarArr) {
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
        return f40768o;
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

    @Override // jt.l0
    public List a() {
        return this.f40780d;
    }

    public boolean c(w wVar) {
        if (wVar == null) {
            return false;
        }
        boolean h10 = h(wVar);
        int size = this.f40780d.size();
        for (int i10 = 0; i10 < size; i10++) {
            l0.a aVar = (l0.a) this.f40780d.get(i10);
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
            if (this.f40781e == nVar.f40781e && a().equals(nVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode = a().hashCode();
        if (this.f40781e) {
            return 0;
        }
        return hashCode;
    }

    public boolean i() {
        return this.f40781e;
    }

    public String toString() {
        return k(0);
    }

    private n() {
        this.f40780d = Collections.EMPTY_LIST;
        this.f40781e = false;
    }
}
