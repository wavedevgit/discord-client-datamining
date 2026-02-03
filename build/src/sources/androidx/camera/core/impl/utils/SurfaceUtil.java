package androidx.camera.core.impl.utils;

import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class SurfaceUtil {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public int f2006a = 0;

        /* renamed from: b  reason: collision with root package name */
        public int f2007b = 0;

        /* renamed from: c  reason: collision with root package name */
        public int f2008c = 0;
    }

    static {
        System.loadLibrary("surface_util_jni");
    }

    public static a a(Surface surface) {
        int[] nativeGetSurfaceInfo = nativeGetSurfaceInfo(surface);
        a aVar = new a();
        aVar.f2006a = nativeGetSurfaceInfo[0];
        aVar.f2007b = nativeGetSurfaceInfo[1];
        aVar.f2008c = nativeGetSurfaceInfo[2];
        return aVar;
    }

    private static native int[] nativeGetSurfaceInfo(Surface surface);
}
