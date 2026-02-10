package net.time4j.calendar.service;

import st.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f extends d {
    private static final long serialVersionUID = -4975173343610190782L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f38414o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f38415p;

    /* renamed from: q  reason: collision with root package name */
    private final transient v f38416q;

    /* renamed from: r  reason: collision with root package name */
    private final transient v f38417r;

    public f(String str, Class cls, int i10, int i11, char c10) {
        super(str, cls, c10, str.startsWith("DAY_OF_"));
        this.f38414o = i10;
        this.f38415p = i11;
        this.f38416q = null;
        this.f38417r = null;
    }

    @Override // st.p
    /* renamed from: G */
    public Integer e() {
        return Integer.valueOf(this.f38415p);
    }

    @Override // st.p
    /* renamed from: H */
    public Integer B() {
        return Integer.valueOf(this.f38414o);
    }

    @Override // st.p
    public Class getType() {
        return Integer.class;
    }

    public f(String str, Class cls, int i10, int i11, char c10, v vVar, v vVar2) {
        super(str, cls, c10, false);
        this.f38414o = i10;
        this.f38415p = i11;
        this.f38416q = vVar;
        this.f38417r = vVar2;
    }
}
