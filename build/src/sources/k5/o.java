package k5;

import android.os.SystemClock;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class o {

    /* renamed from: a  reason: collision with root package name */
    public static final o f32789a = new o();

    /* renamed from: b  reason: collision with root package name */
    private static final File f32790b = new File("/proc/self/fd");

    /* renamed from: c  reason: collision with root package name */
    private static int f32791c = 30;

    /* renamed from: d  reason: collision with root package name */
    private static long f32792d = SystemClock.uptimeMillis();

    /* renamed from: e  reason: collision with root package name */
    private static boolean f32793e = true;

    private o() {
    }

    private final boolean a() {
        int i10 = f32791c;
        f32791c = i10 + 1;
        if (i10 < 30 && SystemClock.uptimeMillis() <= f32792d + 30000) {
            return false;
        }
        return true;
    }

    public final synchronized boolean b(t tVar) {
        try {
            if (a()) {
                boolean z10 = false;
                f32791c = 0;
                f32792d = SystemClock.uptimeMillis();
                String[] list = f32790b.list();
                if (list == null) {
                    list = new String[0];
                }
                int length = list.length;
                if (length < 800) {
                    z10 = true;
                }
                f32793e = z10;
                if (!z10 && tVar != null && tVar.m() <= 5) {
                    tVar.a("FileDescriptorCounter", 5, "Unable to allocate more hardware bitmaps. Number of used file descriptors: " + length, null);
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return f32793e;
    }
}
