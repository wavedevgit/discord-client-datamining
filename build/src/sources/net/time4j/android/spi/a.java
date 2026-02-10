package net.time4j.android.spi;

import android.os.SystemClock;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import qt.c;
import zt.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class a implements e {

    /* renamed from: a  reason: collision with root package name */
    private static final Class[] f38249a;

    /* renamed from: b  reason: collision with root package name */
    private static final Object[] f38250b;

    /* renamed from: c  reason: collision with root package name */
    private static final Method f38251c;

    static {
        Class[] clsArr = new Class[0];
        f38249a = clsArr;
        Object[] objArr = new Object[0];
        f38250b = objArr;
        Method method = null;
        try {
            Method method2 = SystemClock.class.getMethod("elapsedRealtimeNanos", clsArr);
            method2.invoke(null, objArr);
            method = method2;
        } catch (IllegalAccessException | NoSuchMethodException | RuntimeException | InvocationTargetException unused) {
        }
        f38251c = method;
    }

    @Override // zt.e
    public long a() {
        Method method = f38251c;
        if (method != null) {
            try {
                return ((Long) method.invoke(null, f38250b)).longValue();
            } catch (IllegalAccessException e10) {
                e10.printStackTrace(System.err);
            } catch (InvocationTargetException e11) {
                e11.printStackTrace(System.err);
            }
        }
        return c.i(SystemClock.elapsedRealtime(), 1000000L);
    }

    @Override // zt.e
    public String b() {
        return "Dalvik";
    }
}
