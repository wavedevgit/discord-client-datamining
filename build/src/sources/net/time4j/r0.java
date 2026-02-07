package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r0 extends rt.e implements v0 {

    /* renamed from: d  reason: collision with root package name */
    static final r0 f39574d = new r0();
    private static final long serialVersionUID = -3712256393866098916L;

    private r0() {
        super("WALL_TIME");
    }

    private Object readResolve() {
        return f39574d;
    }

    @Override // rt.p
    public boolean A() {
        return false;
    }

    @Override // rt.p
    public boolean D() {
        return true;
    }

    @Override // rt.e
    protected boolean E() {
        return true;
    }

    @Override // rt.p
    /* renamed from: F */
    public g0 e() {
        return g0.J0(23, 59, 59, 999999999);
    }

    @Override // rt.p
    /* renamed from: G */
    public g0 B() {
        return g0.f39385x;
    }

    @Override // rt.p
    public Class getType() {
        return g0.class;
    }
}
