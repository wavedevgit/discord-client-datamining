package wn;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f53977a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f53978b;

    /* renamed from: c  reason: collision with root package name */
    private final br.h f53979c;

    public h(br.h hVar, br.h hVar2, br.h hVar3) {
        this.f53977a = hVar;
        this.f53978b = hVar2;
        this.f53979c = hVar3;
    }

    public static h a(br.h hVar, br.h hVar2, br.h hVar3) {
        return new h(hVar, hVar2, hVar3);
    }

    public static g c(Context context, zn.a aVar, wp.c cVar, m mVar, Camera2PreviewView camera2PreviewView, b bVar, ao.a aVar2, tq.a aVar3, boolean z10) {
        return new g(context, aVar, cVar, mVar, camera2PreviewView, bVar, aVar2, aVar3, z10);
    }

    public g b(m mVar, Camera2PreviewView camera2PreviewView, b bVar, ao.a aVar, tq.a aVar2, boolean z10) {
        return c((Context) this.f53977a.get(), (zn.a) this.f53978b.get(), (wp.c) this.f53979c.get(), mVar, camera2PreviewView, bVar, aVar, aVar2, z10);
    }
}
