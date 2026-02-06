package net.time4j.calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class m extends rt.e {

    /* renamed from: d  reason: collision with root package name */
    static final m f39197d = new m();
    private static final long serialVersionUID = -1117064522468823402L;

    private m() {
        super("RELATED_GREGORIAN_YEAR");
    }

    @Override // rt.p
    public boolean A() {
        return true;
    }

    @Override // rt.p
    public boolean D() {
        return false;
    }

    @Override // rt.e
    protected boolean E() {
        return true;
    }

    @Override // rt.p
    /* renamed from: F */
    public Integer e() {
        return 999999999;
    }

    @Override // rt.p
    /* renamed from: G */
    public Integer B() {
        return -999999999;
    }

    @Override // rt.e, rt.p
    public char d() {
        return 'r';
    }

    @Override // rt.p
    public Class getType() {
        return Integer.class;
    }

    protected Object readResolve() {
        return f39197d;
    }
}
