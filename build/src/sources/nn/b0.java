package nn;

import androidx.camera.view.PreviewView;
import nn.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 implements z.a {

    /* renamed from: a  reason: collision with root package name */
    private final a0 f41928a;

    b0(a0 a0Var) {
        this.f41928a = a0Var;
    }

    public static uq.h b(a0 a0Var) {
        return uq.e.a(new b0(a0Var));
    }

    @Override // nn.z.a
    public z a(t tVar, PreviewView previewView, y yVar) {
        return this.f41928a.b(tVar, previewView, yVar);
    }
}
