package vn;

import androidx.camera.view.PreviewView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f52566a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f52567b;

    public a0(cr.h hVar, cr.h hVar2) {
        this.f52566a = hVar;
        this.f52567b = hVar2;
    }

    public static a0 a(cr.h hVar, cr.h hVar2) {
        return new a0(hVar, hVar2);
    }

    public static z c(ao.a aVar, xp.c cVar, t tVar, PreviewView previewView, y yVar) {
        return new z(aVar, cVar, tVar, previewView, yVar);
    }

    public z b(t tVar, PreviewView previewView, y yVar) {
        return c((ao.a) this.f52566a.get(), (xp.c) this.f52567b.get(), tVar, previewView, yVar);
    }
}
