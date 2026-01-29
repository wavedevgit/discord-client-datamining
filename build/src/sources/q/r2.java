package q;

import a0.l;
import android.hardware.camera2.CameraCaptureSession;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class r2 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static CameraCaptureSession.CaptureCallback a(a0.k kVar) {
        if (kVar == null) {
            return null;
        }
        ArrayList arrayList = new ArrayList();
        b(kVar, arrayList);
        if (arrayList.size() == 1) {
            return (CameraCaptureSession.CaptureCallback) arrayList.get(0);
        }
        return t0.a(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void b(a0.k kVar, List list) {
        if (kVar instanceof l.a) {
            for (a0.k kVar2 : ((l.a) kVar).e()) {
                b(kVar2, list);
            }
        } else if (kVar instanceof q2) {
            list.add(((q2) kVar).f());
        } else {
            list.add(new p2(kVar));
        }
    }
}
