package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r0 extends bu.e implements v0 {

    /* renamed from: d  reason: collision with root package name */
    static final r0 f37671d = new r0();
    private static final long serialVersionUID = -3712256393866098916L;

    private r0() {
        super("WALL_TIME");
    }

    private Object readResolve() {
        return f37671d;
    }

    @Override // bu.p
    public boolean A() {
        return false;
    }

    @Override // bu.p
    public boolean C() {
        return true;
    }

    @Override // bu.e
    protected boolean E() {
        return true;
    }

    @Override // bu.p
    /* renamed from: F */
    public g0 f() {
        return g0.J0(23, 59, 59, 999999999);
    }

    @Override // bu.p
    /* renamed from: G */
    public g0 B() {
        return g0.f37482x;
    }

    @Override // bu.p
    public Class getType() {
        return g0.class;
    }
}
