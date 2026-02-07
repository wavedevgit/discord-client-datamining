package nv;

import qv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    public final w f41226a;

    /* renamed from: b  reason: collision with root package name */
    public final int f41227b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f41228c;

    /* renamed from: d  reason: collision with root package name */
    public final e f41229d;

    /* renamed from: e  reason: collision with root package name */
    public final f f41230e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f41231f = true;

    /* renamed from: g  reason: collision with root package name */
    public boolean f41232g = false;

    private e(w wVar, int i10, e eVar, f fVar, boolean z10) {
        this.f41226a = wVar;
        this.f41227b = i10;
        this.f41228c = z10;
        this.f41229d = eVar;
        this.f41230e = fVar;
    }

    public static e a(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, true);
    }

    public static e b(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, false);
    }
}
