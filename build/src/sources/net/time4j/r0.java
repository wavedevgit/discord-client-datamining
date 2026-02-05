package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r0 extends pt.e implements v0 {

    /* renamed from: d  reason: collision with root package name */
    static final r0 f40171d = new r0();
    private static final long serialVersionUID = -3712256393866098916L;

    private r0() {
        super("WALL_TIME");
    }

    private Object readResolve() {
        return f40171d;
    }

    @Override // pt.p
    public boolean B() {
        return true;
    }

    @Override // pt.e
    protected boolean E() {
        return true;
    }

    @Override // pt.p
    /* renamed from: F */
    public g0 e() {
        return g0.J0(23, 59, 59, 999999999);
    }

    @Override // pt.p
    /* renamed from: G */
    public g0 A() {
        return g0.f39982x;
    }

    @Override // pt.p
    public Class getType() {
        return g0.class;
    }

    @Override // pt.p
    public boolean z() {
        return false;
    }
}
