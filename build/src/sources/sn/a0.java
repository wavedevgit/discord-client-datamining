package sn;

import androidx.camera.view.PreviewView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f49812a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f49813b;

    public a0(zq.h hVar, zq.h hVar2) {
        this.f49812a = hVar;
        this.f49813b = hVar2;
    }

    public static a0 a(zq.h hVar, zq.h hVar2) {
        return new a0(hVar, hVar2);
    }

    public static z c(xn.a aVar, up.c cVar, t tVar, PreviewView previewView, y yVar) {
        return new z(aVar, cVar, tVar, previewView, yVar);
    }

    public z b(t tVar, PreviewView previewView, y yVar) {
        return c((xn.a) this.f49812a.get(), (up.c) this.f49813b.get(), tVar, previewView, yVar);
    }
}
