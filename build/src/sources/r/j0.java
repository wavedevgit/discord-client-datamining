package r;

import android.hardware.camera2.CameraDevice;
import android.os.Handler;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import r.b0;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class j0 implements b0.a {

    /* renamed from: a  reason: collision with root package name */
    final CameraDevice f48251a;

    /* renamed from: b  reason: collision with root package name */
    final Object f48252b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final Handler f48253a;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(Handler handler) {
            this.f48253a = handler;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j0(CameraDevice cameraDevice, Object obj) {
        this.f48251a = (CameraDevice) b2.e.g(cameraDevice);
        this.f48252b = obj;
    }

    private static void b(CameraDevice cameraDevice, List list) {
        String id2 = cameraDevice.getId();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            String c10 = ((s.j) it.next()).c();
            if (c10 != null && !c10.isEmpty()) {
                y0.l("CameraDeviceCompat", "Camera " + id2 + ": Camera doesn't support physicalCameraId " + c10 + ". Ignoring.");
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c(CameraDevice cameraDevice, s.p pVar) {
        b2.e.g(cameraDevice);
        b2.e.g(pVar);
        b2.e.g(pVar.e());
        List c10 = pVar.c();
        if (c10 != null) {
            if (pVar.a() != null) {
                b(cameraDevice, c10);
                return;
            }
            throw new IllegalArgumentException("Invalid executor");
        }
        throw new IllegalArgumentException("Invalid output configurations");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static List d(List list) {
        ArrayList arrayList = new ArrayList(list.size());
        Iterator it = list.iterator();
        while (it.hasNext()) {
            arrayList.add(((s.j) it.next()).d());
        }
        return arrayList;
    }
}
