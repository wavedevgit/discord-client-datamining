package nn;

import androidx.camera.view.PreviewView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f41904a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f41905b;

    public a0(uq.h hVar, uq.h hVar2) {
        this.f41904a = hVar;
        this.f41905b = hVar2;
    }

    public static a0 a(uq.h hVar, uq.h hVar2) {
        return new a0(hVar, hVar2);
    }

    public static z c(sn.a aVar, pp.c cVar, t tVar, PreviewView previewView, y yVar) {
        return new z(aVar, cVar, tVar, previewView, yVar);
    }

    public z b(t tVar, PreviewView previewView, y yVar) {
        return c((sn.a) this.f41904a.get(), (pp.c) this.f41905b.get(), tVar, previewView, yVar);
    }
}
