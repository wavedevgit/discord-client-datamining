package ov;

import rv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    public final w f42754a;

    /* renamed from: b  reason: collision with root package name */
    public final int f42755b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f42756c;

    /* renamed from: d  reason: collision with root package name */
    public final e f42757d;

    /* renamed from: e  reason: collision with root package name */
    public final f f42758e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f42759f = true;

    /* renamed from: g  reason: collision with root package name */
    public boolean f42760g = false;

    private e(w wVar, int i10, e eVar, f fVar, boolean z10) {
        this.f42754a = wVar;
        this.f42755b = i10;
        this.f42756c = z10;
        this.f42757d = eVar;
        this.f42758e = fVar;
    }

    public static e a(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, true);
    }

    public static e b(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, false);
    }
}
