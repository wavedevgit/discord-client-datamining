package a0;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
import java.util.LinkedHashSet;
import x.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class n0 {

    /* renamed from: a  reason: collision with root package name */
    private static final x.p f174a = new p.a().b(2).a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a {
        static int a(Context context) {
            return context.getDeviceId();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends Exception {

        /* renamed from: d  reason: collision with root package name */
        private int f175d;

        public b(String str, int i10, Throwable th2) {
            super(str, th2);
            this.f175d = i10;
        }

        public int a() {
            return this.f175d;
        }
    }

    public static void a(Context context, i0 i0Var, x.p pVar) {
        Integer d10;
        LinkedHashSet a10;
        int i10 = 0;
        IllegalArgumentException illegalArgumentException = null;
        if (Build.VERSION.SDK_INT >= 34 && a.a(context) != 0) {
            if (!i0Var.a().isEmpty()) {
                x.y0.a("CameraValidator", "Virtual device with ID: " + a.a(context) + " has " + a10.size() + " cameras. Skipping validation.");
                return;
            }
            throw new b("No cameras available", 0, null);
        }
        if (pVar != null) {
            try {
                d10 = pVar.d();
                if (d10 == null) {
                    x.y0.l("CameraValidator", "No lens facing info in the availableCamerasSelector, don't verify the camera lens facing.");
                    return;
                }
            } catch (IllegalStateException e10) {
                x.y0.d("CameraValidator", "Cannot get lens facing from the availableCamerasSelector don't verify the camera lens facing.", e10);
                return;
            }
        } else {
            d10 = null;
        }
        x.y0.a("CameraValidator", "Verifying camera lens facing on " + Build.DEVICE + ", lensFacingInteger: " + d10);
        PackageManager packageManager = context.getPackageManager();
        try {
            if (packageManager.hasSystemFeature("android.hardware.camera")) {
                if (pVar != null) {
                    if (d10.intValue() == 1) {
                    }
                }
                x.p.f54264d.e(i0Var.a());
                i10 = 1;
            }
        } catch (IllegalArgumentException e11) {
            illegalArgumentException = e11;
            x.y0.m("CameraValidator", "Camera LENS_FACING_BACK verification failed", illegalArgumentException);
        }
        try {
            if (packageManager.hasSystemFeature("android.hardware.camera.front")) {
                if (pVar != null) {
                    if (d10.intValue() == 0) {
                    }
                }
                x.p.f54263c.e(i0Var.a());
                i10++;
            }
        } catch (IllegalArgumentException e12) {
            illegalArgumentException = e12;
            x.y0.m("CameraValidator", "Camera LENS_FACING_FRONT verification failed", illegalArgumentException);
        }
        try {
            f174a.e(i0Var.a());
            x.y0.a("CameraValidator", "Found a LENS_FACING_EXTERNAL camera");
            i10++;
        } catch (IllegalArgumentException unused) {
        }
        if (illegalArgumentException == null) {
            return;
        }
        x.y0.c("CameraValidator", "Camera LensFacing verification failed, existing cameras: " + i0Var.a());
        throw new b("Expected camera missing from device.", i10, illegalArgumentException);
    }
}
