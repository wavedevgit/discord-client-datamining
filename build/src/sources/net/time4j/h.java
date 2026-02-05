package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h extends pt.e implements e {

    /* renamed from: d  reason: collision with root package name */
    static final h f40000d = new h();
    private static final long serialVersionUID = -6519899440006935829L;

    private h() {
        super("CALENDAR_DATE");
    }

    private Object readResolve() {
        return f40000d;
    }

    @Override // pt.p
    public boolean B() {
        return false;
    }

    @Override // pt.e
    protected boolean E() {
        return true;
    }

    @Override // pt.p
    /* renamed from: F */
    public f0 e() {
        return f0.f39941p;
    }

    @Override // pt.p
    /* renamed from: G */
    public f0 A() {
        return f0.f39940o;
    }

    @Override // pt.p
    public Class getType() {
        return f0.class;
    }

    @Override // pt.p
    public boolean z() {
        return true;
    }
}
