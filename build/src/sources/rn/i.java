package rn;

import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import rn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements g.a {

    /* renamed from: a  reason: collision with root package name */
    private final h f48978a;

    i(h hVar) {
        this.f48978a = hVar;
    }

    public static wq.h b(h hVar) {
        return wq.e.a(new i(hVar));
    }

    @Override // rn.g.a
    public g a(m mVar, Camera2PreviewView camera2PreviewView, b bVar, vn.a aVar, oq.a aVar2, boolean z10) {
        return this.f48978a.b(mVar, camera2PreviewView, bVar, aVar, aVar2, z10);
    }
}
