package net.time4j.calendar.service;

import mt.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f extends d {
    private static final long serialVersionUID = -4975173343610190782L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f40459o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f40460p;

    /* renamed from: q  reason: collision with root package name */
    private final transient v f40461q;

    /* renamed from: r  reason: collision with root package name */
    private final transient v f40462r;

    public f(String str, Class cls, int i10, int i11, char c10) {
        super(str, cls, c10, str.startsWith("DAY_OF_"));
        this.f40459o = i10;
        this.f40460p = i11;
        this.f40461q = null;
        this.f40462r = null;
    }

    @Override // mt.p
    /* renamed from: G */
    public Integer f() {
        return Integer.valueOf(this.f40460p);
    }

    @Override // mt.p
    /* renamed from: H */
    public Integer A() {
        return Integer.valueOf(this.f40459o);
    }

    @Override // mt.p
    public Class getType() {
        return Integer.class;
    }

    public f(String str, Class cls, int i10, int i11, char c10, v vVar, v vVar2) {
        super(str, cls, c10, false);
        this.f40459o = i10;
        this.f40460p = i11;
        this.f40461q = vVar;
        this.f40462r = vVar2;
    }
}
