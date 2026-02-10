package net.time4j.calendar.service;

import java.text.ParsePosition;
import java.util.Locale;
import st.o;
import st.q;
import st.v;
import tt.l;
import tt.m;
import tt.s;
import tt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e extends d implements l, t {
    private static final long serialVersionUID = -2452569351302286113L;

    /* renamed from: o  reason: collision with root package name */
    private final transient Class f38410o;

    /* renamed from: p  reason: collision with root package name */
    private final transient String f38411p;

    /* renamed from: q  reason: collision with root package name */
    private final transient v f38412q;

    /* renamed from: r  reason: collision with root package name */
    private final transient v f38413r;

    public e(String str, Class cls, Class cls2, char c10) {
        super(str, cls, c10, N(c10));
        this.f38410o = cls2;
        this.f38411p = H(cls);
        this.f38412q = null;
        this.f38413r = null;
    }

    private static String H(Class cls) {
        tt.c cVar = (tt.c) cls.getAnnotation(tt.c.class);
        if (cVar == null) {
            return "iso8601";
        }
        return cVar.value();
    }

    private static boolean N(char c10) {
        return c10 == 'E';
    }

    protected s G(st.d dVar, m mVar, boolean z10) {
        tt.v vVar = (tt.v) dVar.b(tt.a.f51008g, tt.v.WIDE);
        tt.b c10 = tt.b.c(I(dVar), (Locale) dVar.b(tt.a.f51004c, Locale.ROOT));
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
            return c10.n(name(), this.f38410o, new String[0]);
        }
    }

    protected String I(st.d dVar) {
        if (!L() && !K()) {
            if (M()) {
                return "iso8601";
            }
            return this.f38411p;
        }
        return (String) dVar.b(tt.a.f51003b, this.f38411p);
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

    @Override // tt.t
    /* renamed from: P */
    public Enum l(CharSequence charSequence, ParsePosition parsePosition, st.d dVar) {
        int index = parsePosition.getIndex();
        st.c cVar = tt.a.f51009h;
        m mVar = m.FORMAT;
        m mVar2 = (m) dVar.b(cVar, mVar);
        Enum c10 = G(dVar, mVar2, false).c(charSequence, parsePosition, getType(), dVar);
        if (c10 == null && L()) {
            parsePosition.setErrorIndex(-1);
            parsePosition.setIndex(index);
            c10 = G(dVar, mVar2, true).c(charSequence, parsePosition, getType(), dVar);
        }
        if (c10 == null && ((Boolean) dVar.b(tt.a.f51012k, Boolean.TRUE)).booleanValue()) {
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

    @Override // tt.l
    /* renamed from: Q */
    public int x(Enum r12, o oVar, st.d dVar) {
        return O(r12);
    }

    @Override // st.p
    public Class getType() {
        return this.f38410o;
    }

    @Override // tt.t
    public void o(o oVar, Appendable appendable, st.d dVar) {
        appendable.append(G(dVar, (m) dVar.b(tt.a.f51009h, m.FORMAT), J(oVar)).f((Enum) oVar.t(this)));
    }

    @Override // tt.l
    public boolean u(q qVar, int i10) {
        Enum[] enumArr;
        for (Enum r42 : (Enum[]) getType().getEnumConstants()) {
            if (O(r42) == i10) {
                qVar.E(this, r42);
                return true;
            }
        }
        return false;
    }
}
