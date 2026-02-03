package net.time4j;

import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class j0 implements mt.p {

    /* renamed from: o  reason: collision with root package name */
    static final mt.p f40632o = new j0(g.class, g.f40506d, g.f40511q);

    /* renamed from: p  reason: collision with root package name */
    static final mt.p f40633p = new j0(TimeUnit.class, TimeUnit.DAYS, TimeUnit.NANOSECONDS);

    /* renamed from: d  reason: collision with root package name */
    private final Class f40634d;

    /* renamed from: e  reason: collision with root package name */
    private final transient Comparable f40635e;

    /* renamed from: i  reason: collision with root package name */
    private final transient Comparable f40636i;

    private j0(Class cls, Comparable comparable, Comparable comparable2) {
        this.f40634d = cls;
        this.f40635e = comparable;
        this.f40636i = comparable2;
    }

    @Override // mt.p
    public boolean C() {
        return true;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(mt.o oVar, mt.o oVar2) {
        Comparable comparable = (Comparable) oVar.o(this);
        Comparable comparable2 = (Comparable) oVar2.o(this);
        if (this.f40634d == g.class) {
            return comparable.compareTo(comparable2);
        }
        return comparable2.compareTo(comparable);
    }

    @Override // mt.p
    /* renamed from: b */
    public Comparable f() {
        return this.f40636i;
    }

    @Override // mt.p
    /* renamed from: c */
    public Comparable A() {
        return this.f40635e;
    }

    @Override // mt.p
    public char d() {
        return (char) 0;
    }

    @Override // mt.p
    public Class getType() {
        return this.f40634d;
    }

    @Override // mt.p
    public boolean k() {
        return false;
    }

    @Override // mt.p
    public String name() {
        return "PRECISION";
    }

    @Override // mt.p
    public boolean y() {
        return false;
    }
}
