package net.time4j.calendar.service;

import jt.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f extends d {
    private static final long serialVersionUID = -4975173343610190782L;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f40557o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f40558p;

    /* renamed from: q  reason: collision with root package name */
    private final transient v f40559q;

    /* renamed from: r  reason: collision with root package name */
    private final transient v f40560r;

    public f(String str, Class cls, int i10, int i11, char c10) {
        super(str, cls, c10, str.startsWith("DAY_OF_"));
        this.f40557o = i10;
        this.f40558p = i11;
        this.f40559q = null;
        this.f40560r = null;
    }

    @Override // jt.p
    /* renamed from: G */
    public Integer e() {
        return Integer.valueOf(this.f40558p);
    }

    @Override // jt.p
    /* renamed from: H */
    public Integer A() {
        return Integer.valueOf(this.f40557o);
    }

    @Override // jt.p
    public Class getType() {
        return Integer.class;
    }

    public f(String str, Class cls, int i10, int i11, char c10, v vVar, v vVar2) {
        super(str, cls, c10, false);
        this.f40557o = i10;
        this.f40558p = i11;
        this.f40559q = vVar;
        this.f40560r = vVar2;
    }
}
