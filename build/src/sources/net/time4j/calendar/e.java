package net.time4j.calendar;

import cu.t;
import java.io.Serializable;
import java.text.ParsePosition;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class e implements t, Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final e f37319d = new e();
    private static final long serialVersionUID = -4211396220263977858L;

    e() {
    }

    @Override // bu.p
    public boolean A() {
        return true;
    }

    @Override // bu.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(bu.o oVar, bu.o oVar2) {
        return ((c) oVar.k(this)).compareTo((o) oVar2.k(this));
    }

    @Override // bu.p
    /* renamed from: b */
    public c f() {
        return c.r(60);
    }

    @Override // bu.p
    /* renamed from: c */
    public c B() {
        return c.r(1);
    }

    @Override // bu.p
    public char d() {
        return 'U';
    }

    @Override // bu.p
    public Class getType() {
        return c.class;
    }

    @Override // cu.t
    /* renamed from: h */
    public c l(CharSequence charSequence, ParsePosition parsePosition, bu.d dVar) {
        return c.s(charSequence, parsePosition, (Locale) dVar.b(cu.a.f21111c, Locale.ROOT), !((cu.g) dVar.b(cu.a.f21114f, cu.g.SMART)).e());
    }

    @Override // bu.p
    public boolean k() {
        return false;
    }

    @Override // bu.p
    public String name() {
        return "CYCLIC_YEAR";
    }

    protected Object readResolve() {
        return f37319d;
    }

    @Override // cu.t
    public void w(bu.o oVar, Appendable appendable, bu.d dVar) {
        appendable.append(((c) oVar.k(this)).i((Locale) dVar.b(cu.a.f21111c, Locale.ROOT)));
    }
}
