package pn;

import androidx.camera.view.PreviewView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f46196a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f46197b;

    public a0(wq.h hVar, wq.h hVar2) {
        this.f46196a = hVar;
        this.f46197b = hVar2;
    }

    public static a0 a(wq.h hVar, wq.h hVar2) {
        return new a0(hVar, hVar2);
    }

    public static z c(un.a aVar, rp.c cVar, t tVar, PreviewView previewView, y yVar) {
        return new z(aVar, cVar, tVar, previewView, yVar);
    }

    public z b(t tVar, PreviewView previewView, y yVar) {
        return c((un.a) this.f46196a.get(), (rp.c) this.f46197b.get(), tVar, previewView, yVar);
    }
}
