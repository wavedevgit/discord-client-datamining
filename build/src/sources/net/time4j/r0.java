package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r0 extends jt.e implements v0 {

    /* renamed from: d  reason: collision with root package name */
    static final r0 f40793d = new r0();
    private static final long serialVersionUID = -3712256393866098916L;

    private r0() {
        super("WALL_TIME");
    }

    private Object readResolve() {
        return f40793d;
    }

    @Override // jt.p
    public boolean C() {
        return true;
    }

    @Override // jt.e
    protected boolean E() {
        return true;
    }

    @Override // jt.p
    /* renamed from: F */
    public g0 e() {
        return g0.J0(23, 59, 59, 999999999);
    }

    @Override // jt.p
    /* renamed from: G */
    public g0 A() {
        return g0.f40604x;
    }

    @Override // jt.p
    public Class getType() {
        return g0.class;
    }

    @Override // jt.p
    public boolean y() {
        return false;
    }
}
