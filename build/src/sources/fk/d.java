package fk;

import hf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final f f23770a;

    /* renamed from: b  reason: collision with root package name */
    private final wj.d f23771b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(f fVar, wj.d dVar) {
        this.f23770a = fVar;
        this.f23771b = dVar;
    }

    public final a a(ek.e eVar) {
        q.m(eVar, "You must provide a valid FaceDetectorOptions.");
        return new a((i) this.f23770a.b(eVar), this.f23771b, eVar, null);
    }
}
