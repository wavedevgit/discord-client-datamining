package net.time4j;

import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class j0 implements kt.p {

    /* renamed from: o  reason: collision with root package name */
    static final kt.p f40593o = new j0(g.class, g.f40467d, g.f40472q);

    /* renamed from: p  reason: collision with root package name */
    static final kt.p f40594p = new j0(TimeUnit.class, TimeUnit.DAYS, TimeUnit.NANOSECONDS);

    /* renamed from: d  reason: collision with root package name */
    private final Class f40595d;

    /* renamed from: e  reason: collision with root package name */
    private final transient Comparable f40596e;

    /* renamed from: i  reason: collision with root package name */
    private final transient Comparable f40597i;

    private j0(Class cls, Comparable comparable, Comparable comparable2) {
        this.f40595d = cls;
        this.f40596e = comparable;
        this.f40597i = comparable2;
    }

    @Override // kt.p
    public boolean C() {
        return true;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(kt.o oVar, kt.o oVar2) {
        Comparable comparable = (Comparable) oVar.v(this);
        Comparable comparable2 = (Comparable) oVar2.v(this);
        if (this.f40595d == g.class) {
            return comparable.compareTo(comparable2);
        }
        return comparable2.compareTo(comparable);
    }

    @Override // kt.p
    /* renamed from: b */
    public Comparable e() {
        return this.f40597i;
    }

    @Override // kt.p
    /* renamed from: c */
    public Comparable A() {
        return this.f40596e;
    }

    @Override // kt.p
    public char d() {
        return (char) 0;
    }

    @Override // kt.p
    public boolean f() {
        return false;
    }

    @Override // kt.p
    public Class getType() {
        return this.f40595d;
    }

    @Override // kt.p
    public String name() {
        return "PRECISION";
    }

    @Override // kt.p
    public boolean y() {
        return false;
    }
}
