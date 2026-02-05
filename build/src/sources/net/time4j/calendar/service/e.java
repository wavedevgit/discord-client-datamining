package net.time4j.calendar.service;

import java.text.ParsePosition;
import java.util.Locale;
import pt.o;
import pt.q;
import pt.v;
import qt.l;
import qt.m;
import qt.s;
import qt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e extends d implements l, t {
    private static final long serialVersionUID = -2452569351302286113L;

    /* renamed from: o  reason: collision with root package name */
    private final transient Class f39915o;

    /* renamed from: p  reason: collision with root package name */
    private final transient String f39916p;

    /* renamed from: q  reason: collision with root package name */
    private final transient v f39917q;

    /* renamed from: r  reason: collision with root package name */
    private final transient v f39918r;

    public e(String str, Class cls, Class cls2, char c10) {
        super(str, cls, c10, N(c10));
        this.f39915o = cls2;
        this.f39916p = H(cls);
        this.f39917q = null;
        this.f39918r = null;
    }

    private static String H(Class cls) {
        qt.c cVar = (qt.c) cls.getAnnotation(qt.c.class);
        if (cVar == null) {
            return "iso8601";
        }
        return cVar.value();
    }

    private static boolean N(char c10) {
        return c10 == 'E';
    }

    protected s G(pt.d dVar, m mVar, boolean z10) {
        qt.v vVar = (qt.v) dVar.a(qt.a.f48092g, qt.v.WIDE);
        qt.b c10 = qt.b.c(I(dVar), (Locale) dVar.a(qt.a.f48088c, Locale.ROOT));
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
            return c10.n(name(), this.f39915o, new String[0]);
        }
    }

    protected String I(pt.d dVar) {
        if (!L() && !K()) {
            if (M()) {
                return "iso8601";
            }
            return this.f39916p;
        }
        return (String) dVar.a(qt.a.f48087b, this.f39916p);
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

    @Override // qt.t
    /* renamed from: P */
    public Enum t(CharSequence charSequence, ParsePosition parsePosition, pt.d dVar) {
        int index = parsePosition.getIndex();
        pt.c cVar = qt.a.f48093h;
        m mVar = m.FORMAT;
        m mVar2 = (m) dVar.a(cVar, mVar);
        Enum c10 = G(dVar, mVar2, false).c(charSequence, parsePosition, getType(), dVar);
        if (c10 == null && L()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            c10 = G(dVar, mVar2, true).c(charSequence, parsePosition, getType(), dVar);
        }
        if (c10 == null && ((Boolean) dVar.a(qt.a.f48096k, Boolean.TRUE)).booleanValue()) {
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

    @Override // qt.l
    /* renamed from: Q */
    public int g(Enum r12, o oVar, pt.d dVar) {
        return O(r12);
    }

    @Override // pt.p
    public Class getType() {
        return this.f39915o;
    }

    @Override // qt.l
    public boolean q(q qVar, int i10) {
        Enum[] enumArr;
        for (Enum r42 : (Enum[]) getType().getEnumConstants()) {
            if (O(r42) == i10) {
                qVar.E(this, r42);
                return true;
            }
        }
        return false;
    }

    @Override // qt.t
    public void s(o oVar, Appendable appendable, pt.d dVar) {
        appendable.append(G(dVar, (m) dVar.a(qt.a.f48093h, m.FORMAT), J(oVar)).f((Enum) oVar.v(this)));
    }
}
