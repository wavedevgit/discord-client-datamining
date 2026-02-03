package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r0 extends kt.e implements v0 {

    /* renamed from: d  reason: collision with root package name */
    static final r0 f40672d = new r0();
    private static final long serialVersionUID = -3712256393866098916L;

    private r0() {
        super("WALL_TIME");
    }

    private Object readResolve() {
        return f40672d;
    }

    @Override // kt.p
    public boolean C() {
        return true;
    }

    @Override // kt.e
    protected boolean E() {
        return true;
    }

    @Override // kt.p
    /* renamed from: F */
    public g0 e() {
        return g0.J0(23, 59, 59, 999999999);
    }

    @Override // kt.p
    /* renamed from: G */
    public g0 A() {
        return g0.f40483x;
    }

    @Override // kt.p
    public Class getType() {
        return g0.class;
    }

    @Override // kt.p
    public boolean y() {
        return false;
    }
}
