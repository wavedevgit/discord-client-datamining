package dk;

import hf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final f f20753a;

    /* renamed from: b  reason: collision with root package name */
    private final uj.d f20754b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(f fVar, uj.d dVar) {
        this.f20753a = fVar;
        this.f20754b = dVar;
    }

    public final a a(ck.e eVar) {
        q.m(eVar, "You must provide a valid FaceDetectorOptions.");
        return new a((i) this.f20753a.b(eVar), this.f20754b, eVar, null);
    }
}
