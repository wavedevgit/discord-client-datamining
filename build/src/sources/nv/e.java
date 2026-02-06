package nv;

import qv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    public final w f41178a;

    /* renamed from: b  reason: collision with root package name */
    public final int f41179b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f41180c;

    /* renamed from: d  reason: collision with root package name */
    public final e f41181d;

    /* renamed from: e  reason: collision with root package name */
    public final f f41182e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f41183f = true;

    /* renamed from: g  reason: collision with root package name */
    public boolean f41184g = false;

    private e(w wVar, int i10, e eVar, f fVar, boolean z10) {
        this.f41178a = wVar;
        this.f41179b = i10;
        this.f41180c = z10;
        this.f41181d = eVar;
        this.f41182e = fVar;
    }

    public static e a(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, true);
    }

    public static e b(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, false);
    }
}
