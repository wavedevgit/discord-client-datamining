package gd;

import gd.a0;
import gd.b;
import gd.l;
import oe.c0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements l.b {

    /* renamed from: a  reason: collision with root package name */
    private int f25482a = 0;

    /* renamed from: b  reason: collision with root package name */
    private boolean f25483b;

    @Override // gd.l.b
    public l a(l.a aVar) {
        int i10;
        int i11 = w0.f39037a;
        if (i11 >= 23 && ((i10 = this.f25482a) == 1 || (i10 == 0 && i11 >= 31))) {
            int k10 = c0.k(aVar.f25491c.f12304w);
            oe.y.f("DMCodecAdapterFactory", "Creating an asynchronous MediaCodec adapter for track type " + w0.q0(k10));
            return new b.C0345b(k10, this.f25483b).a(aVar);
        }
        return new a0.b().a(aVar);
    }

    public j b() {
        this.f25482a = 1;
        return this;
    }
}
