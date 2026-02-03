package net.time4j.android.spi;

import android.os.SystemClock;
import ht.c;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import rt.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class a implements e {

    /* renamed from: a  reason: collision with root package name */
    private static final Class[] f40255a;

    /* renamed from: b  reason: collision with root package name */
    private static final Object[] f40256b;

    /* renamed from: c  reason: collision with root package name */
    private static final Method f40257c;

    static {
        Class[] clsArr = new Class[0];
        f40255a = clsArr;
        Object[] objArr = new Object[0];
        f40256b = objArr;
        Method method = null;
        try {
            Method method2 = SystemClock.class.getMethod("elapsedRealtimeNanos", clsArr);
            method2.invoke(null, objArr);
            method = method2;
        } catch (IllegalAccessException | NoSuchMethodException | RuntimeException | InvocationTargetException unused) {
        }
        f40257c = method;
    }

    @Override // rt.e
    public long a() {
        Method method = f40257c;
        if (method != null) {
            try {
                return ((Long) method.invoke(null, f40256b)).longValue();
            } catch (IllegalAccessException e10) {
                e10.printStackTrace(System.err);
            } catch (InvocationTargetException e11) {
                e11.printStackTrace(System.err);
            }
        }
        return c.i(SystemClock.elapsedRealtime(), 1000000L);
    }

    @Override // rt.e
    public String b() {
        return "Dalvik";
    }
}
