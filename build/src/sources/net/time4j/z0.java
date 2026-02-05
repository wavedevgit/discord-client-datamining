package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class z0 extends a implements d0 {

    /* renamed from: o  reason: collision with root package name */
    static final z0 f40317o = new z0();
    private static final long serialVersionUID = -2378018589067147278L;

    private z0() {
        super("WEEKDAY_IN_MONTH");
    }

    private Object readResolve() {
        return f40317o;
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
    /* renamed from: G */
    public Integer e() {
        return 5;
    }

    @Override // pt.p
    /* renamed from: H */
    public Integer A() {
        return 1;
    }

    @Override // pt.e, pt.p
    public char d() {
        return 'F';
    }

    @Override // pt.p
    public Class getType() {
        return Integer.class;
    }

    @Override // pt.p
    public boolean z() {
        return true;
    }
}
