package net.time4j.calendar;

import java.io.Serializable;
import java.text.ParsePosition;
import java.util.Locale;
import rt.z;
import st.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class i implements t, z, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private static final i f39239d = new i();
    private static final long serialVersionUID = 4572549754637955194L;

    i() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static i C() {
        return f39239d;
    }

    @Override // rt.p
    public boolean A() {
        return true;
    }

    @Override // rt.p
    public boolean D() {
        return false;
    }

    @Override // rt.z
    /* renamed from: E */
    public p k(f fVar) {
        d U = fVar.U();
        return p.j(U.n(U.q(fVar.V(), fVar.f0().getNumber()) + fVar.lengthOfYear()));
    }

    @Override // rt.z
    /* renamed from: F */
    public p o(f fVar) {
        d U = fVar.U();
        return p.j(U.n(U.q(fVar.V(), fVar.f0().getNumber()) + 1));
    }

    @Override // rt.z
    /* renamed from: G */
    public p y(f fVar) {
        return p.j(fVar.U().n(fVar.i() + 1));
    }

    @Override // rt.z
    /* renamed from: H */
    public boolean n(f fVar, p pVar) {
        return pVar != null;
    }

    @Override // st.t
    /* renamed from: I */
    public p r(CharSequence charSequence, ParsePosition parsePosition, rt.d dVar) {
        Locale locale = (Locale) dVar.b(st.a.f50160c, Locale.ROOT);
        int length = charSequence.length();
        if (parsePosition.getIndex() >= length) {
            parsePosition.setErrorIndex(length);
            return null;
        }
        return p.m(charSequence, locale, parsePosition);
    }

    @Override // rt.z
    /* renamed from: J */
    public f u(f fVar, p pVar, boolean z10) {
        if (pVar != null) {
            return (f) fVar.F(pVar.n());
        }
        throw new IllegalArgumentException("Missing solar term.");
    }

    @Override // java.util.Comparator
    /* renamed from: b */
    public int compare(rt.o oVar, rt.o oVar2) {
        return ((p) oVar.s(this)).compareTo((p) oVar2.s(this));
    }

    @Override // rt.z
    /* renamed from: c */
    public rt.p a(f fVar) {
        throw new AbstractMethodError();
    }

    @Override // rt.p
    public char d() {
        return (char) 0;
    }

    @Override // rt.p
    public Class getType() {
        return p.class;
    }

    @Override // rt.p
    public boolean i() {
        return false;
    }

    @Override // rt.z
    /* renamed from: l */
    public rt.p g(f fVar) {
        throw new AbstractMethodError();
    }

    @Override // rt.p
    public String name() {
        return "SOLAR_TERM";
    }

    @Override // rt.p
    /* renamed from: p */
    public p e() {
        return p.MAJOR_12_DAHAN_300;
    }

    protected Object readResolve() {
        return f39239d;
    }

    @Override // st.t
    public void v(rt.o oVar, Appendable appendable, rt.d dVar) {
        appendable.append(((p) oVar.s(this)).e((Locale) dVar.b(st.a.f50160c, Locale.ROOT)));
    }

    @Override // rt.p
    /* renamed from: z */
    public p B() {
        return p.MINOR_01_LICHUN_315;
    }
}
