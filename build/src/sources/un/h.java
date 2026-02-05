package un;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f51577a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f51578b;

    /* renamed from: c  reason: collision with root package name */
    private final zq.h f51579c;

    public h(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        this.f51577a = hVar;
        this.f51578b = hVar2;
        this.f51579c = hVar3;
    }

    public static h a(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        return new h(hVar, hVar2, hVar3);
    }

    public static g c(Context context, xn.a aVar, up.c cVar, m mVar, Camera2PreviewView camera2PreviewView, b bVar, yn.a aVar2, rq.a aVar3, boolean z10) {
        return new g(context, aVar, cVar, mVar, camera2PreviewView, bVar, aVar2, aVar3, z10);
    }

    public g b(m mVar, Camera2PreviewView camera2PreviewView, b bVar, yn.a aVar, rq.a aVar2, boolean z10) {
        return c((Context) this.f51577a.get(), (xn.a) this.f51578b.get(), (up.c) this.f51579c.get(), mVar, camera2PreviewView, bVar, aVar, aVar2, z10);
    }
}
