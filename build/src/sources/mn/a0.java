package mn;

import androidx.camera.view.PreviewView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f39161a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f39162b;

    public a0(tq.h hVar, tq.h hVar2) {
        this.f39161a = hVar;
        this.f39162b = hVar2;
    }

    public static a0 a(tq.h hVar, tq.h hVar2) {
        return new a0(hVar, hVar2);
    }

    public static z c(rn.a aVar, op.c cVar, t tVar, PreviewView previewView, y yVar) {
        return new z(aVar, cVar, tVar, previewView, yVar);
    }

    public z b(t tVar, PreviewView previewView, y yVar) {
        return c((rn.a) this.f39161a.get(), (op.c) this.f39162b.get(), tVar, previewView, yVar);
    }
}
