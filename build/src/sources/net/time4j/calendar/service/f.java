package net.time4j.calendar.service;

import rt.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f extends d {
    private static final long serialVersionUID = -4975173343610190782L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f39322o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f39323p;

    /* renamed from: q  reason: collision with root package name */
    private final transient v f39324q;

    /* renamed from: r  reason: collision with root package name */
    private final transient v f39325r;

    public f(String str, Class cls, int i10, int i11, char c10) {
        super(str, cls, c10, str.startsWith("DAY_OF_"));
        this.f39322o = i10;
        this.f39323p = i11;
        this.f39324q = null;
        this.f39325r = null;
    }

    @Override // rt.p
    /* renamed from: G */
    public Integer e() {
        return Integer.valueOf(this.f39323p);
    }

    @Override // rt.p
    /* renamed from: H */
    public Integer B() {
        return Integer.valueOf(this.f39322o);
    }

    @Override // rt.p
    public Class getType() {
        return Integer.class;
    }

    public f(String str, Class cls, int i10, int i11, char c10, v vVar, v vVar2) {
        super(str, cls, c10, false);
        this.f39322o = i10;
        this.f39323p = i11;
        this.f39324q = vVar;
        this.f39325r = vVar2;
    }
}
