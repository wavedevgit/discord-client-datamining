package net.time4j;

import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class j0 implements pt.p {

    /* renamed from: o  reason: collision with root package name */
    static final pt.p f40092o = new j0(g.class, g.f39966d, g.f39971q);

    /* renamed from: p  reason: collision with root package name */
    static final pt.p f40093p = new j0(TimeUnit.class, TimeUnit.DAYS, TimeUnit.NANOSECONDS);

    /* renamed from: d  reason: collision with root package name */
    private final Class f40094d;

    /* renamed from: e  reason: collision with root package name */
    private final transient Comparable f40095e;

    /* renamed from: i  reason: collision with root package name */
    private final transient Comparable f40096i;

    private j0(Class cls, Comparable comparable, Comparable comparable2) {
        this.f40094d = cls;
        this.f40095e = comparable;
        this.f40096i = comparable2;
    }

    @Override // pt.p
    public boolean B() {
        return true;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(pt.o oVar, pt.o oVar2) {
        Comparable comparable = (Comparable) oVar.v(this);
        Comparable comparable2 = (Comparable) oVar2.v(this);
        if (this.f40094d == g.class) {
            return comparable.compareTo(comparable2);
        }
        return comparable2.compareTo(comparable);
    }

    @Override // pt.p
    /* renamed from: b */
    public Comparable e() {
        return this.f40096i;
    }

    @Override // pt.p
    /* renamed from: c */
    public Comparable A() {
        return this.f40095e;
    }

    @Override // pt.p
    public char d() {
        return (char) 0;
    }

    @Override // pt.p
    public Class getType() {
        return this.f40094d;
    }

    @Override // pt.p
    public boolean l() {
        return false;
    }

    @Override // pt.p
    public String name() {
        return "PRECISION";
    }

    @Override // pt.p
    public boolean z() {
        return false;
    }
}
