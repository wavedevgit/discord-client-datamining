package av;

import dv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    public final w f6965a;

    /* renamed from: b  reason: collision with root package name */
    public final int f6966b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f6967c;

    /* renamed from: d  reason: collision with root package name */
    public final e f6968d;

    /* renamed from: e  reason: collision with root package name */
    public final f f6969e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f6970f = true;

    /* renamed from: g  reason: collision with root package name */
    public boolean f6971g = false;

    private e(w wVar, int i10, e eVar, f fVar, boolean z10) {
        this.f6965a = wVar;
        this.f6966b = i10;
        this.f6967c = z10;
        this.f6968d = eVar;
        this.f6969e = fVar;
    }

    public static e a(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, true);
    }

    public static e b(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, false);
    }
}
