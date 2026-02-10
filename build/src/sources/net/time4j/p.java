package net.time4j;

import java.io.InvalidObjectException;
import java.text.ParsePosition;
import java.util.Locale;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class p extends a implements c0, tt.l, vt.e {
    private static final long serialVersionUID = 2055272540517425102L;

    /* renamed from: o  reason: collision with root package name */
    private final transient Class f38650o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Enum f38651p;

    /* renamed from: q  reason: collision with root package name */
    private final transient Enum f38652q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f38653r;

    /* renamed from: s  reason: collision with root package name */
    private final transient char f38654s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(String str, Class cls, Enum r32, Enum r42, int i10, char c10) {
        super(str);
        this.f38650o = cls;
        this.f38651p = r32;
        this.f38652q = r42;
        this.f38653r = i10;
        this.f38654s = c10;
    }

    private tt.s G(Locale locale, tt.v vVar, tt.m mVar) {
        switch (this.f38653r) {
            case 101:
                return tt.b.d(locale).l(vVar, mVar);
            case 102:
                return tt.b.d(locale).p(vVar, mVar);
            case 103:
                return tt.b.d(locale).k(vVar, mVar);
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
    /* renamed from: H */
    public Enum e() {
        return this.f38652q;
    }

    @Override // st.p
    /* renamed from: I */
    public Enum B() {
        return this.f38651p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int J() {
        return this.f38653r;
    }

    public int K(Enum r12) {
        return r12.ordinal() + 1;
    }

    @Override // vt.e
    /* renamed from: L */
    public Enum w(CharSequence charSequence, ParsePosition parsePosition, Locale locale, tt.v vVar, tt.m mVar, tt.g gVar) {
        int index = parsePosition.getIndex();
        Enum d10 = G(locale, vVar, mVar).d(charSequence, parsePosition, getType(), gVar);
        if (d10 == null && !gVar.e()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            tt.m mVar2 = tt.m.FORMAT;
            if (mVar == mVar2) {
                mVar2 = tt.m.STANDALONE;
            }
            return G(locale, vVar, mVar2).d(charSequence, parsePosition, getType(), gVar);
        }
        return d10;
    }

    @Override // tt.t
    /* renamed from: M */
    public Enum l(CharSequence charSequence, ParsePosition parsePosition, st.d dVar) {
        int index = parsePosition.getIndex();
        Locale locale = (Locale) dVar.b(tt.a.f51004c, Locale.ROOT);
        tt.v vVar = (tt.v) dVar.b(tt.a.f51008g, tt.v.WIDE);
        st.c cVar = tt.a.f51009h;
        tt.m mVar = tt.m.FORMAT;
        tt.m mVar2 = (tt.m) dVar.b(cVar, mVar);
        Enum c10 = G(locale, vVar, mVar2).c(charSequence, parsePosition, getType(), dVar);
        if (c10 == null && ((Boolean) dVar.b(tt.a.f51012k, Boolean.TRUE)).booleanValue()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            if (mVar2 == mVar) {
                mVar = tt.m.STANDALONE;
            }
            return G(locale, vVar, mVar).c(charSequence, parsePosition, getType(), dVar);
        }
        return c10;
    }

    @Override // tt.l
    /* renamed from: N */
    public int x(Enum r12, st.o oVar, st.d dVar) {
        return r12.ordinal() + 1;
    }

    @Override // st.e, st.p
    public char d() {
        return this.f38654s;
    }

    @Override // st.p
    public Class getType() {
        return this.f38650o;
    }

    @Override // tt.t
    public void o(st.o oVar, Appendable appendable, st.d dVar) {
        appendable.append(G((Locale) dVar.b(tt.a.f51004c, Locale.ROOT), (tt.v) dVar.b(tt.a.f51008g, tt.v.WIDE), (tt.m) dVar.b(tt.a.f51009h, tt.m.FORMAT)).f((Enum) oVar.t(this)));
    }

    @Override // vt.e
    public void q(st.o oVar, Appendable appendable, Locale locale, tt.v vVar, tt.m mVar) {
        appendable.append(G(locale, vVar, mVar).f((Enum) oVar.t(this)));
    }

    @Override // tt.l
    public boolean u(st.q qVar, int i10) {
        Enum[] enumArr;
        for (Enum r42 : (Enum[]) getType().getEnumConstants()) {
            if (K(r42) == i10) {
                qVar.E(this, r42);
                return true;
            }
        }
        return false;
    }
}
