package net.time4j.calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class m extends st.e {

    /* renamed from: d  reason: collision with root package name */
    static final m f38337d = new m();
    private static final long serialVersionUID = -1117064522468823402L;

    private m() {
        super("RELATED_GREGORIAN_YEAR");
    }

    @Override // st.p
    public boolean A() {
        return true;
    }

    @Override // st.p
    public boolean D() {
        return false;
    }

    @Override // st.e
    protected boolean E() {
        return true;
    }

    @Override // st.p
    /* renamed from: F */
    public Integer e() {
        return 999999999;
    }

    @Override // st.p
    /* renamed from: G */
    public Integer B() {
        return -999999999;
    }

    @Override // st.e, st.p
    public char d() {
        return 'r';
    }

    @Override // st.p
    public Class getType() {
        return Integer.class;
    }

    protected Object readResolve() {
        return f38337d;
    }
}
