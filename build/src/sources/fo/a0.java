package fo;

import androidx.camera.view.PreviewView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f23961a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f23962b;

    public a0(lr.h hVar, lr.h hVar2) {
        this.f23961a = hVar;
        this.f23962b = hVar2;
    }

    public static a0 a(lr.h hVar, lr.h hVar2) {
        return new a0(hVar, hVar2);
    }

    public static z c(ko.a aVar, gq.c cVar, t tVar, PreviewView previewView, y yVar) {
        return new z(aVar, cVar, tVar, previewView, yVar);
    }

    public z b(t tVar, PreviewView previewView, y yVar) {
        return c((ko.a) this.f23961a.get(), (gq.c) this.f23962b.get(), tVar, previewView, yVar);
    }
}
