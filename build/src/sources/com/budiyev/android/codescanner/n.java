package com.budiyev.android.codescanner;

import android.content.Context;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.hardware.Camera;
import android.view.WindowManager;
import com.google.zxing.Result;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class n {

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements Comparator {
        private b() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(Camera.Size size, Camera.Size size2) {
            return Integer.compare(size2.height * size2.width, size.height * size.width);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c implements Comparator {
        private c() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(int[] iArr, int[] iArr2) {
            int compare = Integer.compare(iArr2[1], iArr[1]);
            if (compare == 0) {
                return Integer.compare(iArr2[0], iArr[0]);
            }
            return compare;
        }
    }

    public static void a(Camera.Parameters parameters, g gVar, l lVar) {
        i d10 = gVar.d();
        b(parameters, lVar, gVar.e(), gVar.f(), d10.a(), d10.b(), gVar.c());
    }

    public static void b(Camera.Parameters parameters, l lVar, i iVar, i iVar2, int i10, int i11, int i12) {
        int i13;
        boolean o10 = o(i12);
        if (o10) {
            i13 = i11;
        } else {
            i13 = i10;
        }
        if (!o10) {
            i10 = i11;
        }
        c(parameters, m(i13, i10, lVar, iVar, iVar2), i13, i10, i12);
    }

    public static void c(Camera.Parameters parameters, l lVar, int i10, int i11, int i12) {
        ArrayList arrayList = new ArrayList(1);
        l a10 = lVar.j(-i12, i10 / 2.0f, i11 / 2.0f).a(0, 0, i10, i11);
        arrayList.add(new Camera.Area(new Rect(p(a10.e(), i10), p(a10.g(), i11), p(a10.f(), i10), p(a10.c(), i11)), 1000));
        if (parameters.getMaxNumFocusAreas() > 0) {
            parameters.setFocusAreas(arrayList);
        }
        if (parameters.getMaxNumMeteringAreas() > 0) {
            parameters.setMeteringAreas(arrayList);
        }
    }

    public static void d(Camera.Parameters parameters) {
        List<String> supportedFocusModes;
        if (!"auto".equals(parameters.getFocusMode()) && (supportedFocusModes = parameters.getSupportedFocusModes()) != null && supportedFocusModes.contains("auto")) {
            parameters.setFocusMode("auto");
        }
    }

    public static void e(Camera.Parameters parameters) {
        int i10;
        List<int[]> supportedPreviewFpsRange = parameters.getSupportedPreviewFpsRange();
        if (supportedPreviewFpsRange != null && !supportedPreviewFpsRange.isEmpty()) {
            Collections.sort(supportedPreviewFpsRange, new c());
            for (int[] iArr : supportedPreviewFpsRange) {
                int i11 = iArr[0];
                if (i11 >= 10000 && (i10 = iArr[1]) <= 30000) {
                    parameters.setPreviewFpsRange(i11, i10);
                    return;
                }
            }
        }
    }

    public static void f(Camera.Parameters parameters) {
        List<String> supportedSceneModes;
        if (!"barcode".equals(parameters.getSceneMode()) && (supportedSceneModes = parameters.getSupportedSceneModes()) != null && supportedSceneModes.contains("barcode")) {
            parameters.setSceneMode("barcode");
        }
    }

    public static void g(Camera.Parameters parameters) {
        if (parameters.isVideoStabilizationSupported() && !parameters.getVideoStabilization()) {
            parameters.setVideoStabilization(true);
        }
    }

    public static Result h(hk.j jVar, hk.i iVar) {
        try {
            return jVar.c(new hk.c(new lk.l(iVar)));
        } catch (hk.k unused) {
            return jVar.c(new hk.c(new lk.l(iVar.e())));
        } finally {
            jVar.reset();
        }
    }

    public static void i(Camera.Parameters parameters) {
        List<String> supportedFocusModes = parameters.getSupportedFocusModes();
        if (supportedFocusModes != null && !supportedFocusModes.isEmpty()) {
            String focusMode = parameters.getFocusMode();
            if (supportedFocusModes.contains("fixed")) {
                if (!"fixed".equals(focusMode)) {
                    parameters.setFocusMode("fixed");
                }
            } else if (supportedFocusModes.contains("auto") && !"auto".equals(focusMode)) {
                parameters.setFocusMode("auto");
            }
        }
    }

    public static i j(Camera.Parameters parameters, int i10, int i11) {
        List<Camera.Size> supportedPreviewSizes = parameters.getSupportedPreviewSizes();
        if (supportedPreviewSizes != null && !supportedPreviewSizes.isEmpty()) {
            Collections.sort(supportedPreviewSizes, new b());
            float f10 = i10 / i11;
            for (float f11 = 0.3f; f11 <= 3.0f; f11 += 0.1f) {
                for (Camera.Size size : supportedPreviewSizes) {
                    int i12 = size.width;
                    int i13 = size.height;
                    if (i12 * i13 >= 589824 && Math.abs(f10 - (i12 / i13)) <= f11) {
                        return new i(i12, i13);
                    }
                }
            }
        }
        Camera.Size previewSize = parameters.getPreviewSize();
        if (previewSize != null) {
            return new i(previewSize.width, previewSize.height);
        }
        throw new com.budiyev.android.codescanner.c("Unable to configure camera preview size");
    }

    public static int k(Context context, Camera.CameraInfo cameraInfo) {
        int i10;
        WindowManager windowManager = (WindowManager) context.getSystemService("window");
        if (windowManager != null) {
            int rotation = windowManager.getDefaultDisplay().getRotation();
            int i11 = 180;
            if (rotation != 0) {
                if (rotation != 1) {
                    if (rotation != 2) {
                        if (rotation != 3) {
                            if (rotation % 90 == 0) {
                                i10 = (rotation + 360) % 360;
                            } else {
                                throw new com.budiyev.android.codescanner.c("Invalid display rotation");
                            }
                        } else {
                            i10 = 270;
                        }
                    } else {
                        i10 = 180;
                    }
                } else {
                    i10 = 90;
                }
            } else {
                i10 = 0;
            }
            if (cameraInfo.facing != 1) {
                i11 = 360;
            }
            return ((i11 + cameraInfo.orientation) - i10) % 360;
        }
        throw new com.budiyev.android.codescanner.c("Unable to access window manager");
    }

    public static Drawable l(Context context, int i10) {
        return context.getDrawable(i10);
    }

    public static l m(int i10, int i11, l lVar, i iVar, i iVar2) {
        int a10 = iVar.a();
        int b10 = iVar.b();
        int a11 = (a10 - iVar2.a()) / 2;
        int b11 = (b10 - iVar2.b()) / 2;
        float f10 = i10 / a10;
        float f11 = i11 / b10;
        return new l(Math.max(Math.round((lVar.e() + a11) * f10), 0), Math.max(Math.round((lVar.g() + b11) * f11), 0), Math.min(Math.round((lVar.f() + a11) * f10), i10), Math.min(Math.round((lVar.c() + b11) * f11), i11));
    }

    public static i n(int i10, int i11, int i12, int i13) {
        if (i10 == i12 && i11 == i13) {
            return new i(i12, i13);
        }
        int i14 = (i10 * i13) / i11;
        if (i14 < i12) {
            return new i(i12, (i11 * i12) / i10);
        }
        return new i(i14, i13);
    }

    public static boolean o(int i10) {
        return i10 == 90 || i10 == 270;
    }

    private static int p(int i10, int i11) {
        return ((i10 * 2000) / i11) - 1000;
    }

    public static byte[] q(byte[] bArr, int i10, int i11, int i12) {
        boolean z10;
        boolean z11;
        boolean z12;
        int i13;
        int i14;
        int i15;
        int i16;
        if (i12 == 0 || i12 == 360) {
            return bArr;
        }
        if (i12 % 90 == 0 && i12 >= 0 && i12 <= 270) {
            byte[] bArr2 = new byte[bArr.length];
            int i17 = i10 * i11;
            if (i12 % 180 != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (i12 % 270 != 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (i12 >= 180) {
                z12 = true;
            } else {
                z12 = false;
            }
            for (int i18 = 0; i18 < i11; i18++) {
                for (int i19 = 0; i19 < i10; i19++) {
                    int i20 = (i18 * i10) + i19;
                    int i21 = ((i18 >> 1) * i10) + i17 + (i19 & (-2));
                    int i22 = i21 + 1;
                    if (z10) {
                        i13 = i11;
                    } else {
                        i13 = i10;
                    }
                    if (z10) {
                        i14 = i10;
                    } else {
                        i14 = i11;
                    }
                    if (z10) {
                        i15 = i18;
                    } else {
                        i15 = i19;
                    }
                    if (z10) {
                        i16 = i19;
                    } else {
                        i16 = i18;
                    }
                    if (z11) {
                        i15 = (i13 - i15) - 1;
                    }
                    if (z12) {
                        i16 = (i14 - i16) - 1;
                    }
                    int i23 = i17 + ((i16 >> 1) * i13) + (i15 & (-2));
                    bArr2[(i16 * i13) + i15] = (byte) (bArr[i20] & 255);
                    bArr2[i23] = (byte) (bArr[i21] & 255);
                    bArr2[i23 + 1] = (byte) (bArr[i22] & 255);
                }
            }
            return bArr2;
        }
        throw new IllegalArgumentException("Invalid rotation (valid: 0, 90, 180, 270)");
    }

    public static void r(Camera.Parameters parameters, com.budiyev.android.codescanner.a aVar) {
        List<String> supportedFocusModes = parameters.getSupportedFocusModes();
        if (supportedFocusModes != null && !supportedFocusModes.isEmpty()) {
            if (aVar == com.budiyev.android.codescanner.a.CONTINUOUS) {
                if (!"continuous-picture".equals(parameters.getFocusMode())) {
                    if (supportedFocusModes.contains("continuous-picture")) {
                        parameters.setFocusMode("continuous-picture");
                        return;
                    }
                } else {
                    return;
                }
            }
            if (!"auto".equals(parameters.getFocusMode()) && supportedFocusModes.contains("auto")) {
                parameters.setFocusMode("auto");
            }
        }
    }

    public static void s(Camera.Parameters parameters, String str) {
        List<String> supportedFlashModes;
        if (!str.equals(parameters.getFlashMode()) && (supportedFlashModes = parameters.getSupportedFlashModes()) != null && supportedFlashModes.contains(str)) {
            parameters.setFlashMode(str);
        }
    }

    public static void t(Camera.Parameters parameters, int i10) {
        if (parameters.isZoomSupported() && parameters.getZoom() != i10) {
            parameters.setZoom(Math.min(i10, parameters.getMaxZoom()));
        }
    }
}
