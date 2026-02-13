package xv;

import aw.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    public final w f55745a;

    /* renamed from: b  reason: collision with root package name */
    public final int f55746b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f55747c;

    /* renamed from: d  reason: collision with root package name */
    public final e f55748d;

    /* renamed from: e  reason: collision with root package name */
    public final f f55749e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f55750f = true;

    /* renamed from: g  reason: collision with root package name */
    public boolean f55751g = false;

    private e(w wVar, int i10, e eVar, f fVar, boolean z10) {
        this.f55745a = wVar;
        this.f55746b = i10;
        this.f55747c = z10;
        this.f55748d = eVar;
        this.f55749e = fVar;
    }

    public static e a(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, true);
    }

    public static e b(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, false);
    }
}
