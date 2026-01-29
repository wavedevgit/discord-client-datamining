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
    protected static final Class f3071a;

    /* renamed from: b  reason: collision with root package name */
    protected static final Field f3072b;

    /* renamed from: c  reason: collision with root package name */
    protected static final Field f3073c;

    /* renamed from: d  reason: collision with root package name */
    protected static final Method f3074d;

    /* renamed from: e  reason: collision with root package name */
    protected static final Method f3075e;

    /* renamed from: f  reason: collision with root package name */
    protected static final Method f3076f;

    /* renamed from: g  reason: collision with root package name */
    private static final Handler f3077g = new Handler(Looper.getMainLooper());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ d f3078d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Object f3079e;

        a(d dVar, Object obj) {
            this.f3078d = dVar;
            this.f3079e = obj;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f3078d.f3084d = this.f3079e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Application f3080d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f3081e;

        b(Application application, d dVar) {
            this.f3080d = application;
            this.f3081e = dVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f3080d.unregisterActivityLifecycleCallbacks(this.f3081e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f3082d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Object f3083e;

        c(Object obj, Object obj2) {
            this.f3082d = obj;
            this.f3083e = obj2;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                Method method = e.f3074d;
                if (method != null) {
                    method.invoke(this.f3082d, this.f3083e, Boolean.FALSE, "AppCompat recreation");
                } else {
                    e.f3075e.invoke(this.f3082d, this.f3083e, Boolean.FALSE);
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
        Object f3084d;

        /* renamed from: e  reason: collision with root package name */
        private Activity f3085e;

        /* renamed from: i  reason: collision with root package name */
        private final int f3086i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f3087o = false;

        /* renamed from: p  reason: collision with root package name */
        private boolean f3088p = false;

        /* renamed from: q  reason: collision with root package name */
        private boolean f3089q = false;

        d(Activity activity) {
            this.f3085e = activity;
            this.f3086i = activity.hashCode();
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityCreated(Activity activity, Bundle bundle) {
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityDestroyed(Activity activity) {
            if (this.f3085e == activity) {
                this.f3085e = null;
                this.f3088p = true;
            }
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityPaused(Activity activity) {
            if (this.f3088p && !this.f3089q && !this.f3087o && e.h(this.f3084d, this.f3086i, activity)) {
                this.f3089q = true;
                this.f3084d = null;
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
            if (this.f3085e == activity) {
                this.f3087o = true;
            }
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityStopped(Activity activity) {
        }
    }

    static {
        Class a10 = a();
        f3071a = a10;
        f3072b = b();
        f3073c = f();
        f3074d = d(a10);
        f3075e = c(a10);
        f3076f = e(a10);
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
            Object obj2 = f3073c.get(activity);
            if (obj2 == obj && activity.hashCode() == i10) {
                f3077g.postAtFrontOfQueue(new c(f3072b.get(activity), obj2));
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
        } else if (g() && f3076f == null) {
            return false;
        } else {
            if (f3075e == null && f3074d == null) {
                return false;
            }
            try {
                Object obj2 = f3073c.get(activity);
                if (obj2 == null || (obj = f3072b.get(activity)) == null) {
                    return false;
                }
                Application application = activity.getApplication();
                d dVar = new d(activity);
                application.registerActivityLifecycleCallbacks(dVar);
                Handler handler = f3077g;
                handler.post(new a(dVar, obj2));
                if (g()) {
                    Method method = f3076f;
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
