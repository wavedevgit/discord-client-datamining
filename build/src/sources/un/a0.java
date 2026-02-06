package un;

import androidx.camera.view.PreviewView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f51658a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f51659b;

    public a0(br.h hVar, br.h hVar2) {
        this.f51658a = hVar;
        this.f51659b = hVar2;
    }

    public static a0 a(br.h hVar, br.h hVar2) {
        return new a0(hVar, hVar2);
    }

    public static z c(zn.a aVar, wp.c cVar, t tVar, PreviewView previewView, y yVar) {
        return new z(aVar, cVar, tVar, previewView, yVar);
    }

    public z b(t tVar, PreviewView previewView, y yVar) {
        return c((zn.a) this.f51658a.get(), (wp.c) this.f51659b.get(), tVar, previewView, yVar);
    }
}
