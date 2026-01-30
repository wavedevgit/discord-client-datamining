package hs;

import android.os.Build;
import gs.z;
import java.lang.Thread;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends kotlin.coroutines.a implements z {
    private volatile Object _preHandler;

    public b() {
        super(z.f27213f);
        this._preHandler = this;
    }

    private final Method E1() {
        Object obj = this._preHandler;
        if (obj != this) {
            return (Method) obj;
        }
        Method method = null;
        try {
            Method declaredMethod = Thread.class.getDeclaredMethod("getUncaughtExceptionPreHandler", null);
            if (Modifier.isPublic(declaredMethod.getModifiers())) {
                if (Modifier.isStatic(declaredMethod.getModifiers())) {
                    method = declaredMethod;
                }
            }
        } catch (Throwable unused) {
        }
        this._preHandler = method;
        return method;
    }

    @Override // gs.z
    public void R0(CoroutineContext coroutineContext, Throwable th2) {
        Object obj;
        int i10 = Build.VERSION.SDK_INT;
        if (26 <= i10 && i10 < 28) {
            Method E1 = E1();
            Thread.UncaughtExceptionHandler uncaughtExceptionHandler = null;
            if (E1 != null) {
                obj = E1.invoke(null, null);
            } else {
                obj = null;
            }
            if (obj instanceof Thread.UncaughtExceptionHandler) {
                uncaughtExceptionHandler = (Thread.UncaughtExceptionHandler) obj;
            }
            if (uncaughtExceptionHandler != null) {
                uncaughtExceptionHandler.uncaughtException(Thread.currentThread(), th2);
            }
        }
    }
}
