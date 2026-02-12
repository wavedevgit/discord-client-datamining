package ho;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f27577a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f27578b;

    /* renamed from: c  reason: collision with root package name */
    private final lr.h f27579c;

    public h(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        this.f27577a = hVar;
        this.f27578b = hVar2;
        this.f27579c = hVar3;
    }

    public static h a(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        return new h(hVar, hVar2, hVar3);
    }

    public static g c(Context context, ko.a aVar, gq.c cVar, m mVar, Camera2PreviewView camera2PreviewView, b bVar, lo.a aVar2, dr.a aVar3, boolean z10) {
        return new g(context, aVar, cVar, mVar, camera2PreviewView, bVar, aVar2, aVar3, z10);
    }

    public g b(m mVar, Camera2PreviewView camera2PreviewView, b bVar, lo.a aVar, dr.a aVar2, boolean z10) {
        return c((Context) this.f27577a.get(), (ko.a) this.f27578b.get(), (gq.c) this.f27579c.get(), mVar, camera2PreviewView, bVar, aVar, aVar2, z10);
    }
}
