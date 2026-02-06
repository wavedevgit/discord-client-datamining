package nf;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.content.pm.PackageManager;
import android.util.Log;
import com.google.android.gms.common.util.k;
import gf.l1;
import gf.q;
import java.util.NoSuchElementException;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executor;
import pf.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: b  reason: collision with root package name */
    private static final Object f39673b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static volatile a f39674c;

    /* renamed from: a  reason: collision with root package name */
    public final ConcurrentHashMap f39675a = new ConcurrentHashMap();

    private a() {
    }

    public static a b() {
        if (f39674c == null) {
            synchronized (f39673b) {
                try {
                    if (f39674c == null) {
                        f39674c = new a();
                    }
                } finally {
                }
            }
        }
        a aVar = f39674c;
        q.l(aVar);
        return aVar;
    }

    private final boolean e(Context context, String str, Intent intent, ServiceConnection serviceConnection, int i10, boolean z10, Executor executor) {
        ComponentName component = intent.getComponent();
        if (component != null) {
            String packageName = component.getPackageName();
            "com.google.android.gms".equals(packageName);
            try {
                if ((c.a(context).c(packageName, 0).flags & 2097152) != 0) {
                    Log.w("ConnectionTracker", "Attempted to bind to a service in a STOPPED package.");
                    return false;
                }
            } catch (PackageManager.NameNotFoundException unused) {
            }
        }
        if (f(serviceConnection)) {
            ServiceConnection serviceConnection2 = (ServiceConnection) this.f39675a.putIfAbsent(serviceConnection, serviceConnection);
            if (serviceConnection2 != null && serviceConnection != serviceConnection2) {
                Log.w("ConnectionTracker", String.format("Duplicate binding with the same ServiceConnection: %s, %s, %s.", serviceConnection, str, intent.getAction()));
            }
            try {
                boolean h10 = h(context, intent, serviceConnection, i10, executor);
                if (!h10) {
                    return false;
                }
                return h10;
            } finally {
                this.f39675a.remove(serviceConnection, serviceConnection);
            }
        }
        return h(context, intent, serviceConnection, i10, executor);
    }

    private static boolean f(ServiceConnection serviceConnection) {
        if (!(serviceConnection instanceof l1)) {
            return true;
        }
        return false;
    }

    private static void g(Context context, ServiceConnection serviceConnection) {
        try {
            context.unbindService(serviceConnection);
        } catch (IllegalArgumentException | IllegalStateException | NoSuchElementException unused) {
        }
    }

    private static final boolean h(Context context, Intent intent, ServiceConnection serviceConnection, int i10, Executor executor) {
        if (executor == null) {
            executor = null;
        }
        if (k.g() && executor != null) {
            return context.bindService(intent, i10, executor, serviceConnection);
        }
        return context.bindService(intent, serviceConnection, i10);
    }

    public boolean a(Context context, Intent intent, ServiceConnection serviceConnection, int i10) {
        return e(context, context.getClass().getName(), intent, serviceConnection, i10, true, null);
    }

    public void c(Context context, ServiceConnection serviceConnection) {
        if (f(serviceConnection)) {
            ConcurrentHashMap concurrentHashMap = this.f39675a;
            if (concurrentHashMap.containsKey(serviceConnection)) {
                try {
                    g(context, (ServiceConnection) concurrentHashMap.get(serviceConnection));
                    return;
                } finally {
                    this.f39675a.remove(serviceConnection);
                }
            }
        }
        g(context, serviceConnection);
    }

    public final boolean d(Context context, String str, Intent intent, ServiceConnection serviceConnection, int i10, Executor executor) {
        return e(context, str, intent, serviceConnection, 4225, true, executor);
    }
}
