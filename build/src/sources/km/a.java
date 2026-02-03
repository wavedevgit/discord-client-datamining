package km;

import android.util.Log;
import com.facebook.react.bridge.ReactApplicationContext;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f32427a = new a();

    /* renamed from: b  reason: collision with root package name */
    private static final boolean f32428b = true;

    /* renamed from: c  reason: collision with root package name */
    private static final List f32429c = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    private static final long f32430d = System.currentTimeMillis();

    /* renamed from: e  reason: collision with root package name */
    private static ReactApplicationContext f32431e;

    private a() {
    }

    private final void a(String str) {
        if (f32431e != null && System.currentTimeMillis() - f32430d > 10000) {
            for (String str2 : f32429c) {
                ReactApplicationContext reactApplicationContext = f32431e;
                if (reactApplicationContext != null) {
                    reactApplicationContext.emitDeviceEvent("KeyboardStateDebugging", "Startup flushed: " + str2);
                }
            }
            f32429c.clear();
            ReactApplicationContext reactApplicationContext2 = f32431e;
            if (reactApplicationContext2 != null) {
                reactApplicationContext2.emitDeviceEvent("KeyboardStateDebugging", str);
                return;
            }
            return;
        }
        f32429c.add(str);
    }

    public static /* synthetic */ void c(a aVar, String str, String str2, Throwable th2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            th2 = null;
        }
        aVar.b(str, str2, th2);
    }

    public static /* synthetic */ void f(a aVar, String str, String str2, Throwable th2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            th2 = null;
        }
        aVar.e(str, str2, th2);
    }

    public final void b(String str, String message, Throwable th2) {
        Intrinsics.checkNotNullParameter(message, "message");
        if (f32428b) {
            Log.i(str, message, th2);
            String str2 = (th2 == null || (str2 = th2.toString()) == null) ? "" : "";
            a(message + ", " + str2);
        }
    }

    public final void d(ReactApplicationContext reactApplicationContext) {
        f32431e = reactApplicationContext;
    }

    public final void e(String str, String message, Throwable th2) {
        Intrinsics.checkNotNullParameter(message, "message");
        if (f32428b) {
            Log.w(str, message, th2);
            String str2 = (th2 == null || (str2 = th2.toString()) == null) ? "" : "";
            a(message + ", " + str2);
        }
    }
}
