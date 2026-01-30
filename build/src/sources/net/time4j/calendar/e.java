package net.time4j.calendar;

import java.io.Serializable;
import java.text.ParsePosition;
import java.util.Locale;
import kt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class e implements t, Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final e f40457d = new e();
    private static final long serialVersionUID = -4211396220263977858L;

    e() {
    }

    @Override // jt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(jt.o oVar, jt.o oVar2) {
        return ((c) oVar.p(this)).compareTo((o) oVar2.p(this));
    }

    @Override // jt.p
    /* renamed from: b */
    public c e() {
        return c.r(60);
    }

    @Override // jt.p
    /* renamed from: c */
    public c A() {
        return c.r(1);
    }

    @Override // jt.p
    public char d() {
        return 'U';
    }

    @Override // jt.p
    public Class getType() {
        return c.class;
    }

    @Override // kt.t
    /* renamed from: h */
    public c z(CharSequence charSequence, ParsePosition parsePosition, jt.d dVar) {
        return c.s(charSequence, parsePosition, (Locale) dVar.b(kt.a.f36546c, Locale.ROOT), !((kt.g) dVar.b(kt.a.f36549f, kt.g.SMART)).e());
    }

    @Override // jt.p
    public boolean i() {
        return false;
    }

    @Override // jt.p
    public String name() {
        return "CYCLIC_YEAR";
    }

    protected Object readResolve() {
        return f40457d;
    }

    @Override // kt.t
    public void u(jt.o oVar, Appendable appendable, jt.d dVar) {
        appendable.append(((c) oVar.p(this)).i((Locale) dVar.b(kt.a.f36546c, Locale.ROOT)));
    }

    @Override // jt.p
    public boolean y() {
        return true;
    }
}
