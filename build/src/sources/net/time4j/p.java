package net.time4j;

import java.io.InvalidObjectException;
import java.text.ParsePosition;
import java.util.Locale;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class p extends a implements c0, qt.l, st.e {
    private static final long serialVersionUID = 2055272540517425102L;

    /* renamed from: o  reason: collision with root package name */
    private final transient Class f40155o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Enum f40156p;

    /* renamed from: q  reason: collision with root package name */
    private final transient Enum f40157q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f40158r;

    /* renamed from: s  reason: collision with root package name */
    private final transient char f40159s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(String str, Class cls, Enum r32, Enum r42, int i10, char c10) {
        super(str);
        this.f40155o = cls;
        this.f40156p = r32;
        this.f40157q = r42;
        this.f40158r = i10;
        this.f40159s = c10;
    }

    private qt.s G(Locale locale, qt.v vVar, qt.m mVar) {
        switch (this.f40158r) {
            case 101:
                return qt.b.d(locale).l(vVar, mVar);
            case 102:
                return qt.b.d(locale).p(vVar, mVar);
            case 103:
                return qt.b.d(locale).k(vVar, mVar);
            default:
                throw new UnsupportedOperationException(name());
        }
    }

    private Object readResolve() {
        Object F0 = f0.F0(name());
        if (F0 != null) {
            return F0;
        }
        throw new InvalidObjectException(name());
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
    /* renamed from: H */
    public Enum e() {
        return this.f40157q;
    }

    @Override // pt.p
    /* renamed from: I */
    public Enum A() {
        return this.f40156p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int J() {
        return this.f40158r;
    }

    public int K(Enum r12) {
        return r12.ordinal() + 1;
    }

    @Override // st.e
    /* renamed from: L */
    public Enum i(CharSequence charSequence, ParsePosition parsePosition, Locale locale, qt.v vVar, qt.m mVar, qt.g gVar) {
        int index = parsePosition.getIndex();
        Enum d10 = G(locale, vVar, mVar).d(charSequence, parsePosition, getType(), gVar);
        if (d10 == null && !gVar.e()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            qt.m mVar2 = qt.m.FORMAT;
            if (mVar == mVar2) {
                mVar2 = qt.m.STANDALONE;
            }
            return G(locale, vVar, mVar2).d(charSequence, parsePosition, getType(), gVar);
        }
        return d10;
    }

    @Override // qt.t
    /* renamed from: M */
    public Enum t(CharSequence charSequence, ParsePosition parsePosition, pt.d dVar) {
        int index = parsePosition.getIndex();
        Locale locale = (Locale) dVar.a(qt.a.f48088c, Locale.ROOT);
        qt.v vVar = (qt.v) dVar.a(qt.a.f48092g, qt.v.WIDE);
        pt.c cVar = qt.a.f48093h;
        qt.m mVar = qt.m.FORMAT;
        qt.m mVar2 = (qt.m) dVar.a(cVar, mVar);
        Enum c10 = G(locale, vVar, mVar2).c(charSequence, parsePosition, getType(), dVar);
        if (c10 == null && ((Boolean) dVar.a(qt.a.f48096k, Boolean.TRUE)).booleanValue()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            if (mVar2 == mVar) {
                mVar = qt.m.STANDALONE;
            }
            return G(locale, vVar, mVar).c(charSequence, parsePosition, getType(), dVar);
        }
        return c10;
    }

    @Override // qt.l
    /* renamed from: N */
    public int g(Enum r12, pt.o oVar, pt.d dVar) {
        return r12.ordinal() + 1;
    }

    @Override // pt.e, pt.p
    public char d() {
        return this.f40159s;
    }

    @Override // st.e
    public void f(pt.o oVar, Appendable appendable, Locale locale, qt.v vVar, qt.m mVar) {
        appendable.append(G(locale, vVar, mVar).f((Enum) oVar.v(this)));
    }

    @Override // pt.p
    public Class getType() {
        return this.f40155o;
    }

    @Override // qt.l
    public boolean q(pt.q qVar, int i10) {
        Enum[] enumArr;
        for (Enum r42 : (Enum[]) getType().getEnumConstants()) {
            if (K(r42) == i10) {
                qVar.E(this, r42);
                return true;
            }
        }
        return false;
    }

    @Override // qt.t
    public void s(pt.o oVar, Appendable appendable, pt.d dVar) {
        appendable.append(G((Locale) dVar.a(qt.a.f48088c, Locale.ROOT), (qt.v) dVar.a(qt.a.f48092g, qt.v.WIDE), (qt.m) dVar.a(qt.a.f48093h, qt.m.FORMAT)).f((Enum) oVar.v(this)));
    }

    @Override // pt.p
    public boolean z() {
        return true;
    }
}
