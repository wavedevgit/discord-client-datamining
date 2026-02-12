package xv;

import aw.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    public final w f55177a;

    /* renamed from: b  reason: collision with root package name */
    public final int f55178b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f55179c;

    /* renamed from: d  reason: collision with root package name */
    public final e f55180d;

    /* renamed from: e  reason: collision with root package name */
    public final f f55181e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f55182f = true;

    /* renamed from: g  reason: collision with root package name */
    public boolean f55183g = false;

    private e(w wVar, int i10, e eVar, f fVar, boolean z10) {
        this.f55177a = wVar;
        this.f55178b = i10;
        this.f55179c = z10;
        this.f55180d = eVar;
        this.f55181e = fVar;
    }

    public static e a(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, true);
    }

    public static e b(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, false);
    }
}
