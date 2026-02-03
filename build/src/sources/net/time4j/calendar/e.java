package net.time4j.calendar;

import java.io.Serializable;
import java.text.ParsePosition;
import java.util.Locale;
import nt.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class e implements t, Serializable {

    /* renamed from: d  reason: collision with root package name */
    static final e f40359d = new e();
    private static final long serialVersionUID = -4211396220263977858L;

    e() {
    }

    @Override // mt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(mt.o oVar, mt.o oVar2) {
        return ((c) oVar.o(this)).compareTo((o) oVar2.o(this));
    }

    @Override // mt.p
    /* renamed from: b */
    public c f() {
        return c.r(60);
    }

    @Override // mt.p
    /* renamed from: c */
    public c A() {
        return c.r(1);
    }

    @Override // mt.p
    public char d() {
        return 'U';
    }

    @Override // mt.p
    public Class getType() {
        return c.class;
    }

    @Override // nt.t
    /* renamed from: h */
    public c j(CharSequence charSequence, ParsePosition parsePosition, mt.d dVar) {
        return c.s(charSequence, parsePosition, (Locale) dVar.b(nt.a.f42028c, Locale.ROOT), !((nt.g) dVar.b(nt.a.f42031f, nt.g.SMART)).e());
    }

    @Override // mt.p
    public boolean k() {
        return false;
    }

    @Override // mt.p
    public String name() {
        return "CYCLIC_YEAR";
    }

    protected Object readResolve() {
        return f40359d;
    }

    @Override // nt.t
    public void s(mt.o oVar, Appendable appendable, mt.d dVar) {
        appendable.append(((c) oVar.o(this)).i((Locale) dVar.b(nt.a.f42028c, Locale.ROOT)));
    }

    @Override // mt.p
    public boolean y() {
        return true;
    }
}
