package on;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f44552a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f44553b;

    /* renamed from: c  reason: collision with root package name */
    private final tq.h f44554c;

    public h(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        this.f44552a = hVar;
        this.f44553b = hVar2;
        this.f44554c = hVar3;
    }

    public static h a(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        return new h(hVar, hVar2, hVar3);
    }

    public static g c(Context context, rn.a aVar, op.c cVar, m mVar, Camera2PreviewView camera2PreviewView, b bVar, sn.a aVar2, lq.a aVar3, boolean z10) {
        return new g(context, aVar, cVar, mVar, camera2PreviewView, bVar, aVar2, aVar3, z10);
    }

    public g b(m mVar, Camera2PreviewView camera2PreviewView, b bVar, sn.a aVar, lq.a aVar2, boolean z10) {
        return c((Context) this.f44552a.get(), (rn.a) this.f44553b.get(), (op.c) this.f44554c.get(), mVar, camera2PreviewView, bVar, aVar, aVar2, z10);
    }
}
