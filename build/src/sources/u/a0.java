package u;

import a0.p0;
import a0.w0;
import android.hardware.camera2.CaptureRequest;
import androidx.camera.camera2.internal.compat.quirk.TorchIsClosedAfterImageCapturingQuirk;
import java.util.Iterator;
import java.util.List;
import p.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a0 {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f50015a;

    public a0() {
        boolean z10;
        if (androidx.camera.camera2.internal.compat.quirk.b.b(TorchIsClosedAfterImageCapturingQuirk.class) != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f50015a = z10;
    }

    public p0 a(p0 p0Var) {
        p0.a aVar = new p0.a();
        aVar.t(p0Var.k());
        for (w0 w0Var : p0Var.i()) {
            aVar.f(w0Var);
        }
        aVar.e(p0Var.g());
        a.C0558a c0558a = new a.C0558a();
        c0558a.f(CaptureRequest.FLASH_MODE, 0);
        aVar.e(c0558a.c());
        return aVar.h();
    }

    public boolean b(List list, boolean z10) {
        if (this.f50015a && z10) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                Integer num = (Integer) ((CaptureRequest) it.next()).get(CaptureRequest.FLASH_MODE);
                if (num != null && num.intValue() == 2) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }
}
