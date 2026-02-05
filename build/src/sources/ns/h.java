package ns;

import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.view.Choreographer;
import kotlin.Result;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    public static final g f41971a;
    private static volatile Choreographer choreographer;

    static {
        Object b10;
        g gVar = null;
        try {
            Result.a aVar = Result.f31985e;
            b10 = Result.b(new f(a(Looper.getMainLooper(), true), null, 2, null));
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f31985e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        if (!Result.g(b10)) {
            gVar = b10;
        }
        f41971a = gVar;
    }

    public static final Handler a(Looper looper, boolean z10) {
        if (z10) {
            if (Build.VERSION.SDK_INT >= 28) {
                Object invoke = Handler.class.getDeclaredMethod("createAsync", Looper.class).invoke(null, looper);
                Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type android.os.Handler");
                return (Handler) invoke;
            }
            try {
                return (Handler) Handler.class.getDeclaredConstructor(Looper.class, Handler.Callback.class, Boolean.TYPE).newInstance(looper, null, Boolean.TRUE);
            } catch (NoSuchMethodException unused) {
                return new Handler(looper);
            }
        }
        return new Handler(looper);
    }
}
