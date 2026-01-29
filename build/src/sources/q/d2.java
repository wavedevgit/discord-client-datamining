package q;

import a0.r0;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.TotalCaptureResult;
import android.view.Surface;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import w.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class d2 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static CaptureRequest.Builder a(CameraDevice cameraDevice, TotalCaptureResult totalCaptureResult) {
            return cameraDevice.createReprocessCaptureRequest(totalCaptureResult);
        }
    }

    private static void a(a0.p0 p0Var, CaptureRequest.Builder builder) {
        if (!p0Var.e().equals(a0.m2.f165a)) {
            builder.set(CaptureRequest.CONTROL_AE_TARGET_FPS_RANGE, p0Var.e());
        }
    }

    private static void b(CaptureRequest.Builder builder, a0.r0 r0Var) {
        w.j d10 = j.a.e(r0Var).d();
        for (r0.a aVar : d10.b()) {
            CaptureRequest.Key key = (CaptureRequest.Key) aVar.d();
            try {
                builder.set(key, d10.a(aVar));
            } catch (IllegalArgumentException unused) {
                x.y0.c("Camera2CaptureRequestBuilder", "CaptureRequest.Key is not supported: " + key);
            }
        }
    }

    private static void c(CaptureRequest.Builder builder, int i10, u.z zVar) {
        for (Map.Entry entry : zVar.a(i10).entrySet()) {
            builder.set((CaptureRequest.Key) entry.getKey(), entry.getValue());
        }
    }

    static void d(a0.p0 p0Var, CaptureRequest.Builder builder) {
        if (p0Var.h() != 1 && p0Var.l() != 1) {
            if (p0Var.h() == 2) {
                builder.set(CaptureRequest.CONTROL_VIDEO_STABILIZATION_MODE, 2);
                return;
            } else if (p0Var.l() == 2) {
                builder.set(CaptureRequest.CONTROL_VIDEO_STABILIZATION_MODE, 1);
                return;
            } else {
                return;
            }
        }
        builder.set(CaptureRequest.CONTROL_VIDEO_STABILIZATION_MODE, 0);
    }

    public static CaptureRequest e(a0.p0 p0Var, CameraDevice cameraDevice, Map map, boolean z10, u.z zVar) {
        CaptureRequest.Builder createCaptureRequest;
        int i10;
        if (cameraDevice == null) {
            return null;
        }
        List<Surface> g10 = g(p0Var.i(), map);
        if (g10.isEmpty()) {
            return null;
        }
        a0.u d10 = p0Var.d();
        if (p0Var.k() == 5 && d10 != null && (d10.f() instanceof TotalCaptureResult)) {
            x.y0.a("Camera2CaptureRequestBuilder", "createReprocessCaptureRequest");
            createCaptureRequest = a.a(cameraDevice, (TotalCaptureResult) d10.f());
        } else {
            x.y0.a("Camera2CaptureRequestBuilder", "createCaptureRequest");
            if (p0Var.k() == 5) {
                if (z10) {
                    i10 = 1;
                } else {
                    i10 = 2;
                }
                createCaptureRequest = cameraDevice.createCaptureRequest(i10);
            } else {
                createCaptureRequest = cameraDevice.createCaptureRequest(p0Var.k());
            }
        }
        c(createCaptureRequest, p0Var.k(), zVar);
        a(p0Var, createCaptureRequest);
        d(p0Var, createCaptureRequest);
        a0.r0 g11 = p0Var.g();
        r0.a aVar = a0.p0.f209i;
        if (g11.h(aVar)) {
            createCaptureRequest.set(CaptureRequest.JPEG_ORIENTATION, (Integer) p0Var.g().a(aVar));
        }
        a0.r0 g12 = p0Var.g();
        r0.a aVar2 = a0.p0.f210j;
        if (g12.h(aVar2)) {
            createCaptureRequest.set(CaptureRequest.JPEG_QUALITY, Byte.valueOf(((Integer) p0Var.g().a(aVar2)).byteValue()));
        }
        b(createCaptureRequest, p0Var.g());
        for (Surface surface : g10) {
            createCaptureRequest.addTarget(surface);
        }
        createCaptureRequest.setTag(p0Var.j());
        return createCaptureRequest.build();
    }

    public static CaptureRequest f(a0.p0 p0Var, CameraDevice cameraDevice, u.z zVar) {
        if (cameraDevice == null) {
            return null;
        }
        x.y0.a("Camera2CaptureRequestBuilder", "template type = " + p0Var.k());
        CaptureRequest.Builder createCaptureRequest = cameraDevice.createCaptureRequest(p0Var.k());
        c(createCaptureRequest, p0Var.k(), zVar);
        b(createCaptureRequest, p0Var.g());
        return createCaptureRequest.build();
    }

    private static List g(List list, Map map) {
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            Surface surface = (Surface) map.get((a0.w0) it.next());
            if (surface != null) {
                arrayList.add(surface);
            } else {
                throw new IllegalArgumentException("DeferrableSurface not in configuredSurfaceMap");
            }
        }
        return arrayList;
    }
}
