package fk;

import hf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final f f23769a;

    /* renamed from: b  reason: collision with root package name */
    private final wj.d f23770b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(f fVar, wj.d dVar) {
        this.f23769a = fVar;
        this.f23770b = dVar;
    }

    public final a a(ek.e eVar) {
        q.m(eVar, "You must provide a valid FaceDetectorOptions.");
        return new a((i) this.f23769a.b(eVar), this.f23770b, eVar, null);
    }
}
