package h0;

import a0.i2;
import a0.w0;
import android.media.MediaCodec;
import androidx.camera.core.internal.compat.quirk.SurfaceOrderQuirk;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import x.g1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f27213a;

    public f() {
        boolean z10;
        if (androidx.camera.core.internal.compat.quirk.a.b(SurfaceOrderQuirk.class) != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f27213a = z10;
    }

    public static /* synthetic */ int a(f fVar, i2.f fVar2, i2.f fVar3) {
        fVar.getClass();
        return fVar.b(fVar2.f()) - fVar.b(fVar3.f());
    }

    private int b(w0 w0Var) {
        if (w0Var.g() == MediaCodec.class) {
            return 2;
        }
        if (w0Var.g() == g1.class) {
            return 0;
        }
        return 1;
    }

    public void c(List list) {
        if (!this.f27213a) {
            return;
        }
        Collections.sort(list, new Comparator() { // from class: h0.e
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return f.a(f.this, (i2.f) obj, (i2.f) obj2);
            }
        });
    }
}
