package androidx.core.app;

import android.app.Activity;
import android.app.Application;
import android.content.res.Configuration;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.util.Log;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    protected static final Class f3525a;

    /* renamed from: b  reason: collision with root package name */
    protected static final Field f3526b;

    /* renamed from: c  reason: collision with root package name */
    protected static final Field f3527c;

    /* renamed from: d  reason: collision with root package name */
    protected static final Method f3528d;

    /* renamed from: e  reason: collision with root package name */
    protected static final Method f3529e;

    /* renamed from: f  reason: collision with root package name */
    protected static final Method f3530f;

    /* renamed from: g  reason: collision with root package name */
    private static final Handler f3531g = new Handler(Looper.getMainLooper());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ d f3532d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Object f3533e;

        a(d dVar, Object obj) {
            this.f3532d = dVar;
            this.f3533e = obj;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f3532d.f3538d = this.f3533e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Application f3534d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f3535e;

        b(Application application, d dVar) {
            this.f3534d = application;
            this.f3535e = dVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f3534d.unregisterActivityLifecycleCallbacks(this.f3535e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f3536d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Object f3537e;

        c(Object obj, Object obj2) {
            this.f3536d = obj;
            this.f3537e = obj2;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                Method method = e.f3528d;
                if (method != null) {
                    method.invoke(this.f3536d, this.f3537e, Boolean.FALSE, "AppCompat recreation");
                } else {
                    e.f3529e.invoke(this.f3536d, this.f3537e, Boolean.FALSE);
                }
            } catch (RuntimeException e10) {
                if (e10.getClass() == RuntimeException.class && e10.getMessage() != null && e10.getMessage().startsWith("Unable to stop")) {
                    throw e10;
                }
            } catch (Throwable th2) {
                Log.e("ActivityRecreator", "Exception while invoking performStopActivity", th2);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class d implements Application.ActivityLifecycleCallbacks {

        /* renamed from: d  reason: collision with root package name */
        Object f3538d;

        /* renamed from: e  reason: collision with root package name */
        private Activity f3539e;

        /* renamed from: i  reason: collision with root package name */
        private final int f3540i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f3541o = false;

        /* renamed from: p  reason: collision with root package name */
        private boolean f3542p = false;

        /* renamed from: q  reason: collision with root package name */
        private boolean f3543q = false;

        d(Activity activity) {
            this.f3539e = activity;
            this.f3540i = activity.hashCode();
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityCreated(Activity activity, Bundle bundle) {
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityDestroyed(Activity activity) {
            if (this.f3539e == activity) {
                this.f3539e = null;
                this.f3542p = true;
            }
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityPaused(Activity activity) {
            if (this.f3542p && !this.f3543q && !this.f3541o && e.h(this.f3538d, this.f3540i, activity)) {
                this.f3543q = true;
                this.f3538d = null;
            }
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityResumed(Activity activity) {
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivitySaveInstanceState(Activity activity, Bundle bundle) {
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityStarted(Activity activity) {
            if (this.f3539e == activity) {
                this.f3541o = true;
            }
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityStopped(Activity activity) {
        }
    }

    static {
        Class a10 = a();
        f3525a = a10;
        f3526b = b();
        f3527c = f();
        f3528d = d(a10);
        f3529e = c(a10);
        f3530f = e(a10);
    }

    private static Class a() {
        try {
            return Class.forName("android.app.ActivityThread");
        } catch (Throwable unused) {
            return null;
        }
    }

    private static Field b() {
        try {
            Field declaredField = Activity.class.getDeclaredField("mMainThread");
            declaredField.setAccessible(true);
            return declaredField;
        } catch (Throwable unused) {
            return null;
        }
    }

    private static Method c(Class cls) {
        if (cls == null) {
            return null;
        }
        try {
            Method declaredMethod = cls.getDeclaredMethod("performStopActivity", IBinder.class, Boolean.TYPE);
            declaredMethod.setAccessible(true);
            return declaredMethod;
        } catch (Throwable unused) {
            return null;
        }
    }

    private static Method d(Class cls) {
        if (cls == null) {
            return null;
        }
        try {
            Method declaredMethod = cls.getDeclaredMethod("performStopActivity", IBinder.class, Boolean.TYPE, String.class);
            declaredMethod.setAccessible(true);
            return declaredMethod;
        } catch (Throwable unused) {
            return null;
        }
    }

    private static Method e(Class cls) {
        if (g() && cls != null) {
            try {
                Class cls2 = Integer.TYPE;
                Class cls3 = Boolean.TYPE;
                Method declaredMethod = cls.getDeclaredMethod("requestRelaunchActivity", IBinder.class, List.class, List.class, cls2, cls3, Configuration.class, Configuration.class, cls3, cls3);
                declaredMethod.setAccessible(true);
                return declaredMethod;
            } catch (Throwable unused) {
            }
        }
        return null;
    }

    private static Field f() {
        try {
            Field declaredField = Activity.class.getDeclaredField("mToken");
            declaredField.setAccessible(true);
            return declaredField;
        } catch (Throwable unused) {
            return null;
        }
    }

    private static boolean g() {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 != 26 && i10 != 27) {
            return false;
        }
        return true;
    }

    protected static boolean h(Object obj, int i10, Activity activity) {
        try {
            Object obj2 = f3527c.get(activity);
            if (obj2 == obj && activity.hashCode() == i10) {
                f3531g.postAtFrontOfQueue(new c(f3526b.get(activity), obj2));
                return true;
            }
            return false;
        } catch (Throwable th2) {
            Log.e("ActivityRecreator", "Exception while fetching field values", th2);
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean i(Activity activity) {
        Object obj;
        if (Build.VERSION.SDK_INT >= 28) {
            activity.recreate();
            return true;
        } else if (g() && f3530f == null) {
            return false;
        } else {
            if (f3529e == null && f3528d == null) {
                return false;
            }
            try {
                Object obj2 = f3527c.get(activity);
                if (obj2 == null || (obj = f3526b.get(activity)) == null) {
                    return false;
                }
                Application application = activity.getApplication();
                d dVar = new d(activity);
                application.registerActivityLifecycleCallbacks(dVar);
                Handler handler = f3531g;
                handler.post(new a(dVar, obj2));
                if (g()) {
                    Method method = f3530f;
                    Boolean bool = Boolean.FALSE;
                    method.invoke(obj, obj2, null, null, 0, bool, null, null, bool, bool);
                } else {
                    activity.recreate();
                }
                handler.post(new b(application, dVar));
                return true;
            } catch (Throwable unused) {
                return false;
            }
        }
    }
}
