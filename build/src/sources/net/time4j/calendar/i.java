package net.time4j.calendar;

import bu.z;
import cu.t;
import java.io.Serializable;
import java.text.ParsePosition;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class i implements t, z, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private static final i f37904d = new i();
    private static final long serialVersionUID = 4572549754637955194L;

    i() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static i D() {
        return f37904d;
    }

    @Override // bu.p
    public boolean A() {
        return true;
    }

    @Override // bu.p
    public boolean C() {
        return false;
    }

    @Override // bu.z
    /* renamed from: E */
    public p m(f fVar) {
        d U = fVar.U();
        return p.k(U.n(U.q(fVar.V(), fVar.f0().getNumber()) + fVar.lengthOfYear()));
    }

    @Override // bu.z
    /* renamed from: F */
    public p q(f fVar) {
        d U = fVar.U();
        return p.k(U.n(U.q(fVar.V(), fVar.f0().getNumber()) + 1));
    }

    @Override // bu.z
    /* renamed from: G */
    public p y(f fVar) {
        return p.k(fVar.U().n(fVar.i() + 1));
    }

    @Override // bu.z
    /* renamed from: H */
    public boolean o(f fVar, p pVar) {
        return pVar != null;
    }

    @Override // cu.t
    /* renamed from: I */
    public p l(CharSequence charSequence, ParsePosition parsePosition, bu.d dVar) {
        Locale locale = (Locale) dVar.b(cu.a.f21111c, Locale.ROOT);
        int length = charSequence.length();
        if (parsePosition.getIndex() >= length) {
            parsePosition.setErrorIndex(length);
            return null;
        }
        return p.m(charSequence, locale, parsePosition);
    }

    @Override // bu.z
    /* renamed from: J */
    public f x(f fVar, p pVar, boolean z10) {
        if (pVar != null) {
            return (f) fVar.F(pVar.n());
        }
        throw new IllegalArgumentException("Missing solar term.");
    }

    @Override // java.util.Comparator
    /* renamed from: b */
    public int compare(bu.o oVar, bu.o oVar2) {
        return ((p) oVar.k(this)).compareTo((p) oVar2.k(this));
    }

    @Override // bu.z
    /* renamed from: c */
    public bu.p a(f fVar) {
        throw new AbstractMethodError();
    }

    @Override // bu.p
    public char d() {
        return (char) 0;
    }

    @Override // bu.p
    public Class getType() {
        return p.class;
    }

    @Override // bu.z
    /* renamed from: j */
    public bu.p h(f fVar) {
        throw new AbstractMethodError();
    }

    @Override // bu.p
    public boolean k() {
        return false;
    }

    @Override // bu.p
    public String name() {
        return "SOLAR_TERM";
    }

    @Override // bu.p
    /* renamed from: p */
    public p f() {
        return p.MAJOR_12_DAHAN_300;
    }

    protected Object readResolve() {
        return f37904d;
    }

    @Override // cu.t
    public void w(bu.o oVar, Appendable appendable, bu.d dVar) {
        appendable.append(((p) oVar.k(this)).e((Locale) dVar.b(cu.a.f21111c, Locale.ROOT)));
    }

    @Override // bu.p
    /* renamed from: z */
    public p B() {
        return p.MINOR_01_LICHUN_315;
    }
}
