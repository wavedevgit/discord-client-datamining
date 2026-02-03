package fd;

import fd.a0;
import fd.b;
import fd.l;
import ne.c0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements l.b {

    /* renamed from: a  reason: collision with root package name */
    private int f24179a = 0;

    /* renamed from: b  reason: collision with root package name */
    private boolean f24180b;

    @Override // fd.l.b
    public l a(l.a aVar) {
        int i10;
        int i11 = w0.f40158a;
        if (i11 >= 23 && ((i10 = this.f24179a) == 1 || (i10 == 0 && i11 >= 31))) {
            int k10 = c0.k(aVar.f24188c.f12335w);
            ne.y.f("DMCodecAdapterFactory", "Creating an asynchronous MediaCodec adapter for track type " + w0.q0(k10));
            return new b.C0318b(k10, this.f24180b).a(aVar);
        }
        return new a0.b().a(aVar);
    }

    public j b() {
        this.f24179a = 1;
        return this;
    }
}
