package net.time4j.calendar.service;

import rt.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f extends d {
    private static final long serialVersionUID = -4975173343610190782L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f39274o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f39275p;

    /* renamed from: q  reason: collision with root package name */
    private final transient v f39276q;

    /* renamed from: r  reason: collision with root package name */
    private final transient v f39277r;

    public f(String str, Class cls, int i10, int i11, char c10) {
        super(str, cls, c10, str.startsWith("DAY_OF_"));
        this.f39274o = i10;
        this.f39275p = i11;
        this.f39276q = null;
        this.f39277r = null;
    }

    @Override // rt.p
    /* renamed from: G */
    public Integer e() {
        return Integer.valueOf(this.f39275p);
    }

    @Override // rt.p
    /* renamed from: H */
    public Integer B() {
        return Integer.valueOf(this.f39274o);
    }

    @Override // rt.p
    public Class getType() {
        return Integer.class;
    }

    public f(String str, Class cls, int i10, int i11, char c10, v vVar, v vVar2) {
        super(str, cls, c10, false);
        this.f39274o = i10;
        this.f39275p = i11;
        this.f39276q = vVar;
        this.f39277r = vVar2;
    }
}
