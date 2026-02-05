package bk;

import gf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final f f6471a;

    /* renamed from: b  reason: collision with root package name */
    private final sj.d f6472b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(f fVar, sj.d dVar) {
        this.f6471a = fVar;
        this.f6472b = dVar;
    }

    public final a a(ak.e eVar) {
        q.m(eVar, "You must provide a valid FaceDetectorOptions.");
        return new a((i) this.f6471a.b(eVar), this.f6472b, eVar, null);
    }
}
