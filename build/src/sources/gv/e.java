package gv;

import jv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    public final w f25419a;

    /* renamed from: b  reason: collision with root package name */
    public final int f25420b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f25421c;

    /* renamed from: d  reason: collision with root package name */
    public final e f25422d;

    /* renamed from: e  reason: collision with root package name */
    public final f f25423e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f25424f = true;

    /* renamed from: g  reason: collision with root package name */
    public boolean f25425g = false;

    private e(w wVar, int i10, e eVar, f fVar, boolean z10) {
        this.f25419a = wVar;
        this.f25420b = i10;
        this.f25421c = z10;
        this.f25422d = eVar;
        this.f25423e = fVar;
    }

    public static e a(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, true);
    }

    public static e b(w wVar, int i10, e eVar, f fVar) {
        return new e(wVar, i10, eVar, fVar, false);
    }
}
