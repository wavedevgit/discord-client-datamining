package xn;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f55188a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f55189b;

    /* renamed from: c  reason: collision with root package name */
    private final cr.h f55190c;

    public h(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        this.f55188a = hVar;
        this.f55189b = hVar2;
        this.f55190c = hVar3;
    }

    public static h a(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        return new h(hVar, hVar2, hVar3);
    }

    public static g c(Context context, ao.a aVar, xp.c cVar, m mVar, Camera2PreviewView camera2PreviewView, b bVar, bo.a aVar2, uq.a aVar3, boolean z10) {
        return new g(context, aVar, cVar, mVar, camera2PreviewView, bVar, aVar2, aVar3, z10);
    }

    public g b(m mVar, Camera2PreviewView camera2PreviewView, b bVar, bo.a aVar, uq.a aVar2, boolean z10) {
        return c((Context) this.f55188a.get(), (ao.a) this.f55189b.get(), (xp.c) this.f55190c.get(), mVar, camera2PreviewView, bVar, aVar, aVar2, z10);
    }
}
