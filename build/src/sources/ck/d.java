package ck;

import gf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final f f7474a;

    /* renamed from: b  reason: collision with root package name */
    private final tj.d f7475b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(f fVar, tj.d dVar) {
        this.f7474a = fVar;
        this.f7475b = dVar;
    }

    public final a a(bk.e eVar) {
        q.m(eVar, "You must provide a valid FaceDetectorOptions.");
        return new a((i) this.f7474a.b(eVar), this.f7475b, eVar, null);
    }
}
