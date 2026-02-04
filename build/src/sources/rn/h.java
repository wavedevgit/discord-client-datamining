package rn;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f48975a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f48976b;

    /* renamed from: c  reason: collision with root package name */
    private final wq.h f48977c;

    public h(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        this.f48975a = hVar;
        this.f48976b = hVar2;
        this.f48977c = hVar3;
    }

    public static h a(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        return new h(hVar, hVar2, hVar3);
    }

    public static g c(Context context, un.a aVar, rp.c cVar, m mVar, Camera2PreviewView camera2PreviewView, b bVar, vn.a aVar2, oq.a aVar3, boolean z10) {
        return new g(context, aVar, cVar, mVar, camera2PreviewView, bVar, aVar2, aVar3, z10);
    }

    public g b(m mVar, Camera2PreviewView camera2PreviewView, b bVar, vn.a aVar, oq.a aVar2, boolean z10) {
        return c((Context) this.f48975a.get(), (un.a) this.f48976b.get(), (rp.c) this.f48977c.get(), mVar, camera2PreviewView, bVar, aVar, aVar2, z10);
    }
}
