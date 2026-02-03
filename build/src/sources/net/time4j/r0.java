package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r0 extends mt.e implements v0 {

    /* renamed from: d  reason: collision with root package name */
    static final r0 f40711d = new r0();
    private static final long serialVersionUID = -3712256393866098916L;

    private r0() {
        super("WALL_TIME");
    }

    private Object readResolve() {
        return f40711d;
    }

    @Override // mt.p
    public boolean C() {
        return true;
    }

    @Override // mt.e
    protected boolean E() {
        return true;
    }

    @Override // mt.p
    /* renamed from: F */
    public g0 f() {
        return g0.J0(23, 59, 59, 999999999);
    }

    @Override // mt.p
    /* renamed from: G */
    public g0 A() {
        return g0.f40522x;
    }

    @Override // mt.p
    public Class getType() {
        return g0.class;
    }

    @Override // mt.p
    public boolean y() {
        return false;
    }
}
