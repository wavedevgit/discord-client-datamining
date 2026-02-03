package net.time4j.calendar.service;

import java.text.ParsePosition;
import java.util.Locale;
import kt.o;
import kt.q;
import kt.v;
import lt.l;
import lt.m;
import lt.s;
import lt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e extends d implements l, t {
    private static final long serialVersionUID = -2452569351302286113L;

    /* renamed from: o  reason: collision with root package name */
    private final transient Class f40416o;

    /* renamed from: p  reason: collision with root package name */
    private final transient String f40417p;

    /* renamed from: q  reason: collision with root package name */
    private final transient v f40418q;

    /* renamed from: r  reason: collision with root package name */
    private final transient v f40419r;

    public e(String str, Class cls, Class cls2, char c10) {
        super(str, cls, c10, N(c10));
        this.f40416o = cls2;
        this.f40417p = H(cls);
        this.f40418q = null;
        this.f40419r = null;
    }

    private static String H(Class cls) {
        lt.c cVar = (lt.c) cls.getAnnotation(lt.c.class);
        if (cVar == null) {
            return "iso8601";
        }
        return cVar.value();
    }

    private static boolean N(char c10) {
        return c10 == 'E';
    }

    protected s G(kt.d dVar, m mVar, boolean z10) {
        lt.v vVar = (lt.v) dVar.a(lt.a.f37632g, lt.v.WIDE);
        lt.b c10 = lt.b.c(I(dVar), (Locale) dVar.a(lt.a.f37628c, Locale.ROOT));
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
            return c10.n(name(), this.f40416o, new String[0]);
        }
    }

    protected String I(kt.d dVar) {
        if (!L() && !K()) {
            if (M()) {
                return "iso8601";
            }
            return this.f40417p;
        }
        return (String) dVar.a(lt.a.f37627b, this.f40417p);
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

    @Override // lt.t
    /* renamed from: P */
    public Enum k(CharSequence charSequence, ParsePosition parsePosition, kt.d dVar) {
        int index = parsePosition.getIndex();
        kt.c cVar = lt.a.f37633h;
        m mVar = m.FORMAT;
        m mVar2 = (m) dVar.a(cVar, mVar);
        Enum c10 = G(dVar, mVar2, false).c(charSequence, parsePosition, getType(), dVar);
        if (c10 == null && L()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            c10 = G(dVar, mVar2, true).c(charSequence, parsePosition, getType(), dVar);
        }
        if (c10 == null && ((Boolean) dVar.a(lt.a.f37636k, Boolean.TRUE)).booleanValue()) {
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

    @Override // lt.l
    /* renamed from: Q */
    public int u(Enum r12, o oVar, kt.d dVar) {
        return O(r12);
    }

    @Override // kt.p
    public Class getType() {
        return this.f40416o;
    }

    @Override // lt.l
    public boolean m(q qVar, int i10) {
        Enum[] enumArr;
        for (Enum r42 : (Enum[]) getType().getEnumConstants()) {
            if (O(r42) == i10) {
                qVar.E(this, r42);
                return true;
            }
        }
        return false;
    }

    @Override // lt.t
    public void s(o oVar, Appendable appendable, kt.d dVar) {
        appendable.append(G(dVar, (m) dVar.a(lt.a.f37633h, m.FORMAT), J(oVar)).f((Enum) oVar.v(this)));
    }
}
