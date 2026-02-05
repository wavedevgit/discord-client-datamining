package net.time4j.calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class m extends pt.e {

    /* renamed from: d  reason: collision with root package name */
    static final m f39842d = new m();
    private static final long serialVersionUID = -1117064522468823402L;

    private m() {
        super("RELATED_GREGORIAN_YEAR");
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
    public Integer e() {
        return 999999999;
    }

    @Override // pt.p
    /* renamed from: G */
    public Integer A() {
        return -999999999;
    }

    @Override // pt.e, pt.p
    public char d() {
        return 'r';
    }

    @Override // pt.p
    public Class getType() {
        return Integer.class;
    }

    protected Object readResolve() {
        return f39842d;
    }

    @Override // pt.p
    public boolean z() {
        return true;
    }
}
