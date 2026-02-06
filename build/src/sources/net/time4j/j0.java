package net.time4j;

import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class j0 implements rt.p {

    /* renamed from: o  reason: collision with root package name */
    static final rt.p f39447o = new j0(g.class, g.f39321d, g.f39326q);

    /* renamed from: p  reason: collision with root package name */
    static final rt.p f39448p = new j0(TimeUnit.class, TimeUnit.DAYS, TimeUnit.NANOSECONDS);

    /* renamed from: d  reason: collision with root package name */
    private final Class f39449d;

    /* renamed from: e  reason: collision with root package name */
    private final transient Comparable f39450e;

    /* renamed from: i  reason: collision with root package name */
    private final transient Comparable f39451i;

    private j0(Class cls, Comparable comparable, Comparable comparable2) {
        this.f39449d = cls;
        this.f39450e = comparable;
        this.f39451i = comparable2;
    }

    @Override // rt.p
    public boolean A() {
        return false;
    }

    @Override // rt.p
    public boolean D() {
        return true;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(rt.o oVar, rt.o oVar2) {
        Comparable comparable = (Comparable) oVar.s(this);
        Comparable comparable2 = (Comparable) oVar2.s(this);
        if (this.f39449d == g.class) {
            return comparable.compareTo(comparable2);
        }
        return comparable2.compareTo(comparable);
    }

    @Override // rt.p
    /* renamed from: b */
    public Comparable e() {
        return this.f39451i;
    }

    @Override // rt.p
    /* renamed from: c */
    public Comparable B() {
        return this.f39450e;
    }

    @Override // rt.p
    public char d() {
        return (char) 0;
    }

    @Override // rt.p
    public Class getType() {
        return this.f39449d;
    }

    @Override // rt.p
    public boolean i() {
        return false;
    }

    @Override // rt.p
    public String name() {
        return "PRECISION";
    }
}
