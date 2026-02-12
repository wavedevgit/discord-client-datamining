package net.time4j;

import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class j0 implements bu.p {

    /* renamed from: o  reason: collision with root package name */
    static final bu.p f37592o = new j0(g.class, g.f37466d, g.f37471q);

    /* renamed from: p  reason: collision with root package name */
    static final bu.p f37593p = new j0(TimeUnit.class, TimeUnit.DAYS, TimeUnit.NANOSECONDS);

    /* renamed from: d  reason: collision with root package name */
    private final Class f37594d;

    /* renamed from: e  reason: collision with root package name */
    private final transient Comparable f37595e;

    /* renamed from: i  reason: collision with root package name */
    private final transient Comparable f37596i;

    private j0(Class cls, Comparable comparable, Comparable comparable2) {
        this.f37594d = cls;
        this.f37595e = comparable;
        this.f37596i = comparable2;
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
        if (this.f37594d == g.class) {
            return comparable.compareTo(comparable2);
        }
        return comparable2.compareTo(comparable);
    }

    @Override // bu.p
    /* renamed from: b */
    public Comparable f() {
        return this.f37596i;
    }

    @Override // bu.p
    /* renamed from: c */
    public Comparable B() {
        return this.f37595e;
    }

    @Override // bu.p
    public char d() {
        return (char) 0;
    }

    @Override // bu.p
    public Class getType() {
        return this.f37594d;
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
