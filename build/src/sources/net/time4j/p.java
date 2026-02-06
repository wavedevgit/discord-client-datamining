package net.time4j;

import java.io.InvalidObjectException;
import java.text.ParsePosition;
import java.util.Locale;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class p extends a implements c0, st.l, ut.e {
    private static final long serialVersionUID = 2055272540517425102L;

    /* renamed from: o  reason: collision with root package name */
    private final transient Class f39510o;

    /* renamed from: p  reason: collision with root package name */
    private final transient Enum f39511p;

    /* renamed from: q  reason: collision with root package name */
    private final transient Enum f39512q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f39513r;

    /* renamed from: s  reason: collision with root package name */
    private final transient char f39514s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(String str, Class cls, Enum r32, Enum r42, int i10, char c10) {
        super(str);
        this.f39510o = cls;
        this.f39511p = r32;
        this.f39512q = r42;
        this.f39513r = i10;
        this.f39514s = c10;
    }

    private st.s G(Locale locale, st.v vVar, st.m mVar) {
        switch (this.f39513r) {
            case 101:
                return st.b.d(locale).l(vVar, mVar);
            case 102:
                return st.b.d(locale).p(vVar, mVar);
            case 103:
                return st.b.d(locale).k(vVar, mVar);
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
    /* renamed from: H */
    public Enum e() {
        return this.f39512q;
    }

    @Override // rt.p
    /* renamed from: I */
    public Enum B() {
        return this.f39511p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int J() {
        return this.f39513r;
    }

    public int K(Enum r12) {
        return r12.ordinal() + 1;
    }

    @Override // ut.e
    /* renamed from: L */
    public Enum q(CharSequence charSequence, ParsePosition parsePosition, Locale locale, st.v vVar, st.m mVar, st.g gVar) {
        int index = parsePosition.getIndex();
        Enum d10 = G(locale, vVar, mVar).d(charSequence, parsePosition, getType(), gVar);
        if (d10 == null && !gVar.e()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            st.m mVar2 = st.m.FORMAT;
            if (mVar == mVar2) {
                mVar2 = st.m.STANDALONE;
            }
            return G(locale, vVar, mVar2).d(charSequence, parsePosition, getType(), gVar);
        }
        return d10;
    }

    @Override // st.t
    /* renamed from: M */
    public Enum r(CharSequence charSequence, ParsePosition parsePosition, rt.d dVar) {
        int index = parsePosition.getIndex();
        Locale locale = (Locale) dVar.b(st.a.f50112c, Locale.ROOT);
        st.v vVar = (st.v) dVar.b(st.a.f50116g, st.v.WIDE);
        rt.c cVar = st.a.f50117h;
        st.m mVar = st.m.FORMAT;
        st.m mVar2 = (st.m) dVar.b(cVar, mVar);
        Enum c10 = G(locale, vVar, mVar2).c(charSequence, parsePosition, getType(), dVar);
        if (c10 == null && ((Boolean) dVar.b(st.a.f50120k, Boolean.TRUE)).booleanValue()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            if (mVar2 == mVar) {
                mVar = st.m.STANDALONE;
            }
            return G(locale, vVar, mVar).c(charSequence, parsePosition, getType(), dVar);
        }
        return c10;
    }

    @Override // st.l
    /* renamed from: N */
    public int j(Enum r12, rt.o oVar, rt.d dVar) {
        return r12.ordinal() + 1;
    }

    @Override // rt.e, rt.p
    public char d() {
        return this.f39514s;
    }

    @Override // st.l
    public boolean f(rt.q qVar, int i10) {
        Enum[] enumArr;
        for (Enum r42 : (Enum[]) getType().getEnumConstants()) {
            if (K(r42) == i10) {
                qVar.E(this, r42);
                return true;
            }
        }
        return false;
    }

    @Override // rt.p
    public Class getType() {
        return this.f39510o;
    }

    @Override // ut.e
    public void h(rt.o oVar, Appendable appendable, Locale locale, st.v vVar, st.m mVar) {
        appendable.append(G(locale, vVar, mVar).f((Enum) oVar.s(this)));
    }

    @Override // st.t
    public void v(rt.o oVar, Appendable appendable, rt.d dVar) {
        appendable.append(G((Locale) dVar.b(st.a.f50112c, Locale.ROOT), (st.v) dVar.b(st.a.f50116g, st.v.WIDE), (st.m) dVar.b(st.a.f50117h, st.m.FORMAT)).f((Enum) oVar.s(this)));
    }
}
