package pn;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f46342a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f46343b;

    /* renamed from: c  reason: collision with root package name */
    private final uq.h f46344c;

    public h(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        this.f46342a = hVar;
        this.f46343b = hVar2;
        this.f46344c = hVar3;
    }

    public static h a(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        return new h(hVar, hVar2, hVar3);
    }

    public static g c(Context context, sn.a aVar, pp.c cVar, m mVar, Camera2PreviewView camera2PreviewView, b bVar, tn.a aVar2, mq.a aVar3, boolean z10) {
        return new g(context, aVar, cVar, mVar, camera2PreviewView, bVar, aVar2, aVar3, z10);
    }

    public g b(m mVar, Camera2PreviewView camera2PreviewView, b bVar, tn.a aVar, mq.a aVar2, boolean z10) {
        return c((Context) this.f46342a.get(), (sn.a) this.f46343b.get(), (pp.c) this.f46344c.get(), mVar, camera2PreviewView, bVar, aVar, aVar2, z10);
    }
}
