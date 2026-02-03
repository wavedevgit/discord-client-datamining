package bv;

import ev.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    public final w f7779a;

    /* renamed from: b  reason: collision with root package name */
    public final int f7780b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f7781c;

    /* renamed from: d  reason: collision with root package name */
    public final e f7782d;

    /* renamed from: e  reason: collision with root package name */
    public final f f7783e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f7784f = true;

    /* renamed from: g  reason: collision with root package name */
    public boolean f7785g = false;

    private e(w wVar, int i10, e eVar, f fVar, boolean z10) {
        this.f7779a = wVar;
        this.f7780b = i10;
        this.f7781c = z10;
        this.f7782d = eVar;
        this.f7783e = fVar;
    }

    public static e a(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, true);
    }

    public static e b(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, false);
    }
}
