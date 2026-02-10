package net.time4j;

import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class j0 implements st.p {

    /* renamed from: o  reason: collision with root package name */
    static final st.p f38587o = new j0(g.class, g.f38461d, g.f38466q);

    /* renamed from: p  reason: collision with root package name */
    static final st.p f38588p = new j0(TimeUnit.class, TimeUnit.DAYS, TimeUnit.NANOSECONDS);

    /* renamed from: d  reason: collision with root package name */
    private final Class f38589d;

    /* renamed from: e  reason: collision with root package name */
    private final transient Comparable f38590e;

    /* renamed from: i  reason: collision with root package name */
    private final transient Comparable f38591i;

    private j0(Class cls, Comparable comparable, Comparable comparable2) {
        this.f38589d = cls;
        this.f38590e = comparable;
        this.f38591i = comparable2;
    }

    @Override // st.p
    public boolean A() {
        return false;
    }

    @Override // st.p
    public boolean D() {
        return true;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(st.o oVar, st.o oVar2) {
        Comparable comparable = (Comparable) oVar.t(this);
        Comparable comparable2 = (Comparable) oVar2.t(this);
        if (this.f38589d == g.class) {
            return comparable.compareTo(comparable2);
        }
        return comparable2.compareTo(comparable);
    }

    @Override // st.p
    /* renamed from: b */
    public Comparable e() {
        return this.f38591i;
    }

    @Override // st.p
    /* renamed from: c */
    public Comparable B() {
        return this.f38590e;
    }

    @Override // st.p
    public char d() {
        return (char) 0;
    }

    @Override // st.p
    public boolean f() {
        return false;
    }

    @Override // st.p
    public Class getType() {
        return this.f38589d;
    }

    @Override // st.p
    public String name() {
        return "PRECISION";
    }
}
