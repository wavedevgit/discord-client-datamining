package dv;

import gv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    public final w f21095a;

    /* renamed from: b  reason: collision with root package name */
    public final int f21096b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f21097c;

    /* renamed from: d  reason: collision with root package name */
    public final e f21098d;

    /* renamed from: e  reason: collision with root package name */
    public final f f21099e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f21100f = true;

    /* renamed from: g  reason: collision with root package name */
    public boolean f21101g = false;

    private e(w wVar, int i10, e eVar, f fVar, boolean z10) {
        this.f21095a = wVar;
        this.f21096b = i10;
        this.f21097c = z10;
        this.f21098d = eVar;
        this.f21099e = fVar;
    }

    public static e a(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, true);
    }

    public static e b(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, false);
    }
}
