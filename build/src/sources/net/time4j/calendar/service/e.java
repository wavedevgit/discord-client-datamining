package net.time4j.calendar.service;

import java.text.ParsePosition;
import java.util.Locale;
import mt.o;
import mt.q;
import mt.v;
import nt.l;
import nt.m;
import nt.s;
import nt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e extends d implements l, t {
    private static final long serialVersionUID = -2452569351302286113L;

    /* renamed from: o  reason: collision with root package name */
    private final transient Class f40455o;

    /* renamed from: p  reason: collision with root package name */
    private final transient String f40456p;

    /* renamed from: q  reason: collision with root package name */
    private final transient v f40457q;

    /* renamed from: r  reason: collision with root package name */
    private final transient v f40458r;

    public e(String str, Class cls, Class cls2, char c10) {
        super(str, cls, c10, N(c10));
        this.f40455o = cls2;
        this.f40456p = H(cls);
        this.f40457q = null;
        this.f40458r = null;
    }

    private static String H(Class cls) {
        nt.c cVar = (nt.c) cls.getAnnotation(nt.c.class);
        if (cVar == null) {
            return "iso8601";
        }
        return cVar.value();
    }

    private static boolean N(char c10) {
        return c10 == 'E';
    }

    protected s G(mt.d dVar, m mVar, boolean z10) {
        nt.v vVar = (nt.v) dVar.b(nt.a.f42032g, nt.v.WIDE);
        nt.b c10 = nt.b.c(I(dVar), (Locale) dVar.b(nt.a.f42028c, Locale.ROOT));
        if (L()) {
            if (z10) {
                return c10.g(vVar, mVar);
            }
            return c10.l(vVar, mVar);
        } else if (M()) {
            return c10.p(vVar, mVar);
        } else {
            if (K()) {
                return c10.b(vVar);
            }
            return c10.n(name(), this.f40455o, new String[0]);
        }
    }

    protected String I(mt.d dVar) {
        if (!L() && !K()) {
            if (M()) {
                return "iso8601";
            }
            return this.f40456p;
        }
        return (String) dVar.b(nt.a.f42027b, this.f40456p);
    }

    protected boolean J(o oVar) {
        return false;
    }

    protected boolean K() {
        if (d() == 'G') {
            return true;
        }
        return false;
    }

    protected boolean L() {
        if (d() == 'M') {
            return true;
        }
        return false;
    }

    protected boolean M() {
        return N(d());
    }

    public abstract int O(Enum r12);

    @Override // nt.t
    /* renamed from: P */
    public Enum j(CharSequence charSequence, ParsePosition parsePosition, mt.d dVar) {
        int index = parsePosition.getIndex();
        mt.c cVar = nt.a.f42033h;
        m mVar = m.FORMAT;
        m mVar2 = (m) dVar.b(cVar, mVar);
        Enum c10 = G(dVar, mVar2, false).c(charSequence, parsePosition, getType(), dVar);
        if (c10 == null && L()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            c10 = G(dVar, mVar2, true).c(charSequence, parsePosition, getType(), dVar);
        }
        if (c10 == null && ((Boolean) dVar.b(nt.a.f42036k, Boolean.TRUE)).booleanValue()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            if (mVar2 == mVar) {
                mVar = m.STANDALONE;
            }
            Enum c11 = G(dVar, mVar, false).c(charSequence, parsePosition, getType(), dVar);
            if (c11 == null && L()) {
                parsePosition.setErrorIndex(-1);
                parsePosition.setIndex(index);
                return G(dVar, mVar, true).c(charSequence, parsePosition, getType(), dVar);
            }
            return c11;
        }
        return c10;
    }

    @Override // nt.l
    /* renamed from: Q */
    public int e(Enum r12, o oVar, mt.d dVar) {
        return O(r12);
    }

    @Override // mt.p
    public Class getType() {
        return this.f40455o;
    }

    @Override // nt.l
    public boolean p(q qVar, int i10) {
        Enum[] enumArr;
        for (Enum r42 : (Enum[]) getType().getEnumConstants()) {
            if (O(r42) == i10) {
                qVar.E(this, r42);
                return true;
            }
        }
        return false;
    }

    @Override // nt.t
    public void s(o oVar, Appendable appendable, mt.d dVar) {
        appendable.append(G(dVar, (m) dVar.b(nt.a.f42033h, m.FORMAT), J(oVar)).f((Enum) oVar.o(this)));
    }
}
