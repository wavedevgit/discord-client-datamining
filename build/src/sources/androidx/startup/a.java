package androidx.startup;

import a4.b;
import a4.c;
import android.content.ComponentName;
import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Bundle;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    private static volatile a f5111d;

    /* renamed from: e  reason: collision with root package name */
    private static final Object f5112e = new Object();

    /* renamed from: c  reason: collision with root package name */
    final Context f5115c;

    /* renamed from: b  reason: collision with root package name */
    final Set f5114b = new HashSet();

    /* renamed from: a  reason: collision with root package name */
    final Map f5113a = new HashMap();

    a(Context context) {
        this.f5115c = context.getApplicationContext();
    }

    private Object d(Class cls, Set set) {
        Object obj;
        if (c4.a.h()) {
            try {
                c4.a.c(cls.getSimpleName());
            } catch (Throwable th2) {
                c4.a.f();
                throw th2;
            }
        }
        if (!set.contains(cls)) {
            if (!this.f5113a.containsKey(cls)) {
                set.add(cls);
                a4.a aVar = (a4.a) cls.getDeclaredConstructor(null).newInstance(null);
                List<Class> dependencies = aVar.dependencies();
                if (!dependencies.isEmpty()) {
                    for (Class cls2 : dependencies) {
                        if (!this.f5113a.containsKey(cls2)) {
                            d(cls2, set);
                        }
                    }
                }
                obj = aVar.create(this.f5115c);
                set.remove(cls);
                this.f5113a.put(cls, obj);
            } else {
                obj = this.f5113a.get(cls);
            }
            c4.a.f();
            return obj;
        }
        throw new IllegalStateException(String.format("Cannot initialize %s. Cycle detected.", cls.getName()));
    }

    public static a e(Context context) {
        if (f5111d == null) {
            synchronized (f5112e) {
                try {
                    if (f5111d == null) {
                        f5111d = new a(context);
                    }
                } finally {
                }
            }
        }
        return f5111d;
    }

    void a(Bundle bundle) {
        String string = this.f5115c.getString(b.f383a);
        if (bundle != null) {
            try {
                HashSet hashSet = new HashSet();
                for (String str : bundle.keySet()) {
                    if (string.equals(bundle.getString(str, null))) {
                        Class<?> cls = Class.forName(str);
                        if (a4.a.class.isAssignableFrom(cls)) {
                            this.f5114b.add(cls);
                        }
                    }
                }
                for (Class cls2 : this.f5114b) {
                    d(cls2, hashSet);
                }
            } catch (ClassNotFoundException e10) {
                throw new c(e10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(Class cls) {
        try {
            try {
                c4.a.c("Startup");
                a(this.f5115c.getPackageManager().getProviderInfo(new ComponentName(this.f5115c, cls), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT).metaData);
            } catch (PackageManager.NameNotFoundException e10) {
                throw new c(e10);
            }
        } finally {
            c4.a.f();
        }
    }

    Object c(Class cls) {
        Object obj;
        synchronized (f5112e) {
            try {
                obj = this.f5113a.get(cls);
                if (obj == null) {
                    obj = d(cls, new HashSet());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return obj;
    }

    public Object f(Class cls) {
        return c(cls);
    }

    public boolean g(Class cls) {
        return this.f5114b.contains(cls);
    }
}
