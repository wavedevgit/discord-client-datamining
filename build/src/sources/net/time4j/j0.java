package net.time4j;

import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class j0 implements jt.p {

    /* renamed from: o  reason: collision with root package name */
    static final jt.p f40714o = new j0(g.class, g.f40588d, g.f40593q);

    /* renamed from: p  reason: collision with root package name */
    static final jt.p f40715p = new j0(TimeUnit.class, TimeUnit.DAYS, TimeUnit.NANOSECONDS);

    /* renamed from: d  reason: collision with root package name */
    private final Class f40716d;

    /* renamed from: e  reason: collision with root package name */
    private final transient Comparable f40717e;

    /* renamed from: i  reason: collision with root package name */
    private final transient Comparable f40718i;

    private j0(Class cls, Comparable comparable, Comparable comparable2) {
        this.f40716d = cls;
        this.f40717e = comparable;
        this.f40718i = comparable2;
    }

    @Override // jt.p
    public boolean C() {
        return true;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(jt.o oVar, jt.o oVar2) {
        Comparable comparable = (Comparable) oVar.p(this);
        Comparable comparable2 = (Comparable) oVar2.p(this);
        if (this.f40716d == g.class) {
            return comparable.compareTo(comparable2);
        }
        return comparable2.compareTo(comparable);
    }

    @Override // jt.p
    /* renamed from: b */
    public Comparable e() {
        return this.f40718i;
    }

    @Override // jt.p
    /* renamed from: c */
    public Comparable A() {
        return this.f40717e;
    }

    @Override // jt.p
    public char d() {
        return (char) 0;
    }

    @Override // jt.p
    public Class getType() {
        return this.f40716d;
    }

    @Override // jt.p
    public boolean i() {
        return false;
    }

    @Override // jt.p
    public String name() {
        return "PRECISION";
    }

    @Override // jt.p
    public boolean y() {
        return false;
    }
}
