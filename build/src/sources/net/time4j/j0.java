package net.time4j;

import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class j0 implements bu.p {

    /* renamed from: o  reason: collision with root package name */
    static final bu.p f38160o = new j0(g.class, g.f38034d, g.f38039q);

    /* renamed from: p  reason: collision with root package name */
    static final bu.p f38161p = new j0(TimeUnit.class, TimeUnit.DAYS, TimeUnit.NANOSECONDS);

    /* renamed from: d  reason: collision with root package name */
    private final Class f38162d;

    /* renamed from: e  reason: collision with root package name */
    private final transient Comparable f38163e;

    /* renamed from: i  reason: collision with root package name */
    private final transient Comparable f38164i;

    private j0(Class cls, Comparable comparable, Comparable comparable2) {
        this.f38162d = cls;
        this.f38163e = comparable;
        this.f38164i = comparable2;
    }

    @Override // bu.p
    public boolean A() {
        return false;
    }

    @Override // bu.p
    public boolean C() {
        return true;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(bu.o oVar, bu.o oVar2) {
        Comparable comparable = (Comparable) oVar.k(this);
        Comparable comparable2 = (Comparable) oVar2.k(this);
        if (this.f38162d == g.class) {
            return comparable.compareTo(comparable2);
        }
        return comparable2.compareTo(comparable);
    }

    @Override // bu.p
    /* renamed from: b */
    public Comparable f() {
        return this.f38164i;
    }

    @Override // bu.p
    /* renamed from: c */
    public Comparable B() {
        return this.f38163e;
    }

    @Override // bu.p
    public char d() {
        return (char) 0;
    }

    @Override // bu.p
    public Class getType() {
        return this.f38162d;
    }

    @Override // bu.p
    public boolean k() {
        return false;
    }

    @Override // bu.p
    public String name() {
        return "PRECISION";
    }
}
