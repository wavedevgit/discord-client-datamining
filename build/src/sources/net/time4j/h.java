package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class h extends kt.e implements e {

    /* renamed from: d  reason: collision with root package name */
    static final h f40501d = new h();
    private static final long serialVersionUID = -6519899440006935829L;

    private h() {
        super("CALENDAR_DATE");
    }

    private Object readResolve() {
        return f40501d;
    }

    @Override // kt.p
    public boolean C() {
        return false;
    }

    @Override // kt.e
    protected boolean E() {
        return true;
    }

    @Override // kt.p
    /* renamed from: F */
    public f0 e() {
        return f0.f40442p;
    }

    @Override // kt.p
    /* renamed from: G */
    public f0 A() {
        return f0.f40441o;
    }

    @Override // kt.p
    public Class getType() {
        return f0.class;
    }

    @Override // kt.p
    public boolean y() {
        return true;
    }
}
