package jm;

import android.util.Log;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f32237a = new a();

    /* renamed from: b  reason: collision with root package name */
    private static final boolean f32238b = true;

    /* renamed from: c  reason: collision with root package name */
    private static ReactApplicationContext f32239c;

    private a() {
    }

    public static /* synthetic */ void b(a aVar, String str, String str2, Throwable th2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            th2 = null;
        }
        aVar.a(str, str2, th2);
    }

    public static /* synthetic */ void e(a aVar, String str, String str2, Throwable th2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            th2 = null;
        }
        aVar.d(str, str2, th2);
    }

    public final void a(String str, String message, Throwable th2) {
        Intrinsics.checkNotNullParameter(message, "message");
        if (f32238b) {
            Log.i(str, message, th2);
            ReactApplicationContext reactApplicationContext = f32239c;
            if (reactApplicationContext != null) {
                String str2 = (th2 == null || (str2 = th2.toString()) == null) ? "" : "";
                reactApplicationContext.emitDeviceEvent("KeyboardStateDebugging", message + ", " + str2);
            }
        }
    }

    public final void c(ReactApplicationContext reactApplicationContext) {
        f32239c = reactApplicationContext;
    }

    public final void d(String str, String message, Throwable th2) {
        Intrinsics.checkNotNullParameter(message, "message");
        if (f32238b) {
            Log.w(str, message, th2);
            ReactApplicationContext reactApplicationContext = f32239c;
            if (reactApplicationContext != null) {
                String str2 = (th2 == null || (str2 = th2.toString()) == null) ? "" : "";
                reactApplicationContext.emitDeviceEvent("KeyboardStateDebugging", message + ", " + str2);
            }
        }
    }
}
