package yj;

import gf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final f f54529a;

    /* renamed from: b  reason: collision with root package name */
    private final pj.d f54530b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(f fVar, pj.d dVar) {
        this.f54529a = fVar;
        this.f54530b = dVar;
    }

    public final a a(xj.e eVar) {
        q.m(eVar, "You must provide a valid FaceDetectorOptions.");
        return new a((i) this.f54529a.b(eVar), this.f54530b, eVar, null);
    }
}
