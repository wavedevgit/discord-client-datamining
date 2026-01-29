package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class z0 extends a implements d0 {

    /* renamed from: o  reason: collision with root package name */
    static final z0 f40939o = new z0();
    private static final long serialVersionUID = -2378018589067147278L;

    private z0() {
        super("WEEKDAY_IN_MONTH");
    }

    private Object readResolve() {
        return f40939o;
    }

    @Override // jt.p
    public boolean C() {
        return false;
    }

    @Override // jt.e
    protected boolean E() {
        return true;
    }

    @Override // jt.p
    /* renamed from: G */
    public Integer e() {
        return 5;
    }

    @Override // jt.p
    /* renamed from: H */
    public Integer A() {
        return 1;
    }

    @Override // jt.e, jt.p
    public char d() {
        return 'F';
    }

    @Override // jt.p
    public Class getType() {
        return Integer.class;
    }

    @Override // jt.p
    public boolean y() {
        return true;
    }
}
