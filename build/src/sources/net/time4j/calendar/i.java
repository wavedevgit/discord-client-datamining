package net.time4j.calendar;

import java.io.Serializable;
import java.text.ParsePosition;
import java.util.Locale;
import st.z;
import tt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class i implements t, z, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private static final i f38331d = new i();
    private static final long serialVersionUID = 4572549754637955194L;

    i() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static i C() {
        return f38331d;
    }

    @Override // st.p
    public boolean A() {
        return true;
    }

    @Override // st.p
    public boolean D() {
        return false;
    }

    @Override // st.z
    /* renamed from: E */
    public p h(f fVar) {
        d U = fVar.U();
        return p.k(U.n(U.q(fVar.V(), fVar.f0().getNumber()) + fVar.lengthOfYear()));
    }

    @Override // st.z
    /* renamed from: F */
    public p m(f fVar) {
        d U = fVar.U();
        return p.k(U.n(U.q(fVar.V(), fVar.f0().getNumber()) + 1));
    }

    @Override // st.z
    /* renamed from: G */
    public p y(f fVar) {
        return p.k(fVar.U().n(fVar.i() + 1));
    }

    @Override // st.z
    /* renamed from: H */
    public boolean k(f fVar, p pVar) {
        return pVar != null;
    }

    @Override // tt.t
    /* renamed from: I */
    public p l(CharSequence charSequence, ParsePosition parsePosition, st.d dVar) {
        Locale locale = (Locale) dVar.b(tt.a.f51004c, Locale.ROOT);
        int length = charSequence.length();
        if (parsePosition.getIndex() >= length) {
            parsePosition.setErrorIndex(length);
            return null;
        }
        return p.m(charSequence, locale, parsePosition);
    }

    @Override // st.z
    /* renamed from: J */
    public f s(f fVar, p pVar, boolean z10) {
        if (pVar != null) {
            return (f) fVar.F(pVar.n());
        }
        throw new IllegalArgumentException("Missing solar term.");
    }

    @Override // java.util.Comparator
    /* renamed from: b */
    public int compare(st.o oVar, st.o oVar2) {
        return ((p) oVar.t(this)).compareTo((p) oVar2.t(this));
    }

    @Override // st.z
    /* renamed from: c */
    public st.p a(f fVar) {
        throw new AbstractMethodError();
    }

    @Override // st.p
    public char d() {
        return (char) 0;
    }

    @Override // st.p
    public boolean f() {
        return false;
    }

    @Override // st.p
    public Class getType() {
        return p.class;
    }

    @Override // st.z
    /* renamed from: j */
    public st.p g(f fVar) {
        throw new AbstractMethodError();
    }

    @Override // st.p
    public String name() {
        return "SOLAR_TERM";
    }

    @Override // tt.t
    public void o(st.o oVar, Appendable appendable, st.d dVar) {
        appendable.append(((p) oVar.t(this)).e((Locale) dVar.b(tt.a.f51004c, Locale.ROOT)));
    }

    @Override // st.p
    /* renamed from: p */
    public p e() {
        return p.MAJOR_12_DAHAN_300;
    }

    protected Object readResolve() {
        return f38331d;
    }

    @Override // st.p
    /* renamed from: z */
    public p B() {
        return p.MINOR_01_LICHUN_315;
    }
}
