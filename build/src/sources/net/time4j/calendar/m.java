package net.time4j.calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class m extends bu.e {

    /* renamed from: d  reason: collision with root package name */
    static final m f37342d = new m();
    private static final long serialVersionUID = -1117064522468823402L;

    private m() {
        super("RELATED_GREGORIAN_YEAR");
    }

    @Override // bu.p
    public boolean A() {
        return true;
    }

    @Override // bu.p
    public boolean C() {
        return false;
    }

    @Override // bu.e
    protected boolean E() {
        return true;
    }

    @Override // bu.p
    /* renamed from: F */
    public Integer f() {
        return 999999999;
    }

    @Override // bu.p
    /* renamed from: G */
    public Integer B() {
        return -999999999;
    }

    @Override // bu.e, bu.p
    public char d() {
        return 'r';
    }

    @Override // bu.p
    public Class getType() {
        return Integer.class;
    }

    protected Object readResolve() {
        return f37342d;
    }
}
