package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import mt.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n extends mt.a implements Serializable {
    private static final mt.j0 A;
    private static final mt.j0 B;

    /* renamed from: i  reason: collision with root package name */
    private static final char f40669i;

    /* renamed from: o  reason: collision with root package name */
    private static final n f40670o;

    /* renamed from: p  reason: collision with root package name */
    private static final a f40671p;

    /* renamed from: q  reason: collision with root package name */
    private static final a f40672q;

    /* renamed from: r  reason: collision with root package name */
    private static final a f40673r;

    /* renamed from: s  reason: collision with root package name */
    private static final a f40674s;
    private static final long serialVersionUID = -6321211763598951499L;

    /* renamed from: t  reason: collision with root package name */
    private static final a f40675t;

    /* renamed from: u  reason: collision with root package name */
    private static final a f40676u;

    /* renamed from: v  reason: collision with root package name */
    private static final Comparator f40677v;

    /* renamed from: w  reason: collision with root package name */
    public static mt.d0 f40678w;

    /* renamed from: x  reason: collision with root package name */
    public static mt.d0 f40679x;

    /* renamed from: y  reason: collision with root package name */
    public static mt.d0 f40680y;

    /* renamed from: z  reason: collision with root package name */
    private static final mt.j0 f40681z;

    /* renamed from: d  reason: collision with root package name */
    private final transient List f40682d;

    /* renamed from: e  reason: collision with root package name */
    private final transient boolean f40683e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends nt.w {
        private a(Class cls, String str) {
            super(cls, str);
        }

        public static a k(Class cls, String str) {
            return new a(cls, str);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // nt.w
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
                                                        return f.f40467e;
                                                    case 'D':
                                                        return f.f40473s;
                                                    case 'E':
                                                        return f.f40468i;
                                                    default:
                                                        throw new IllegalArgumentException("Unsupported pattern symbol: " + c10);
                                                }
                                            }
                                            return g.f40508i;
                                        }
                                        return g.f40507e;
                                    }
                                    return g.f40506d;
                                }
                                return g.f40511q;
                            }
                            return f.f40469o;
                        }
                        return f.f40472r;
                    }
                    return f.f40470p;
                }
                return f.f40471q;
            }
            return f.f40466d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b extends mt.b {
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
        f40669i = c10;
        f40670o = new n();
        f40671p = e(true, false);
        f40672q = e(true, true);
        f40673r = e(false, false);
        f40674s = e(false, true);
        f40675t = f(true);
        f40676u = f(false);
        f40677v = p0.a();
        f40678w = p0.m();
        f40679x = p0.h();
        f40680y = p0.l();
        f fVar = f.f40469o;
        f fVar2 = f.f40471q;
        f fVar3 = f.f40473s;
        f40681z = g(fVar, fVar2, fVar3);
        A = g(g.f40506d, g.f40507e, g.f40508i, g.f40511q);
        B = g(f.f(), f.f40472r, fVar3);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(List list, boolean z10) {
        boolean isEmpty = list.isEmpty();
        if (isEmpty) {
            this.f40682d = Collections.EMPTY_LIST;
        } else {
            Collections.sort(list, f40677v);
            this.f40682d = Collections.unmodifiableList(list);
        }
        this.f40683e = !isEmpty && z10;
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

    public static mt.j0 g(w... wVarArr) {
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
        return f40670o;
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

    @Override // mt.l0
    public List a() {
        return this.f40682d;
    }

    public boolean c(w wVar) {
        if (wVar == null) {
            return false;
        }
        boolean h10 = h(wVar);
        int size = this.f40682d.size();
        for (int i10 = 0; i10 < size; i10++) {
            l0.a aVar = (l0.a) this.f40682d.get(i10);
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
            if (this.f40683e == nVar.f40683e && a().equals(nVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode = a().hashCode();
        if (this.f40683e) {
            return 0;
        }
        return hashCode;
    }

    public boolean i() {
        return this.f40683e;
    }

    public String toString() {
        return k(0);
    }

    private n() {
        this.f40682d = Collections.EMPTY_LIST;
        this.f40683e = false;
    }
}
