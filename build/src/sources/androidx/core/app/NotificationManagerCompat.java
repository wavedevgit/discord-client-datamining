package androidx.core.app;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationChannelGroup;
import android.app.NotificationManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.content.pm.ResolveInfo;
import android.content.pm.ServiceInfo;
import android.os.Build;
import android.os.Bundle;
import android.os.DeadObjectException;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.IBinder;
import android.os.Message;
import android.os.RemoteException;
import android.provider.Settings;
import android.util.Log;
import b.a;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class NotificationManagerCompat {

    /* renamed from: d  reason: collision with root package name */
    private static String f3164d;

    /* renamed from: g  reason: collision with root package name */
    private static f f3167g;

    /* renamed from: a  reason: collision with root package name */
    private final Context f3168a;

    /* renamed from: b  reason: collision with root package name */
    private final NotificationManager f3169b;

    /* renamed from: c  reason: collision with root package name */
    private static final Object f3163c = new Object();

    /* renamed from: e  reason: collision with root package name */
    private static Set f3165e = new HashSet();

    /* renamed from: f  reason: collision with root package name */
    private static final Object f3166f = new Object();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        static boolean a(NotificationManager notificationManager) {
            return notificationManager.areNotificationsEnabled();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {
        static void a(NotificationManager notificationManager, List list) {
            notificationManager.createNotificationChannelGroups(list);
        }

        static void b(NotificationManager notificationManager, List list) {
            notificationManager.createNotificationChannels(list);
        }

        static void c(NotificationManager notificationManager, String str) {
            notificationManager.deleteNotificationChannel(str);
        }

        static String d(NotificationChannelGroup notificationChannelGroup) {
            return notificationChannelGroup.getId();
        }

        static NotificationChannel e(NotificationManager notificationManager, String str) {
            return notificationManager.getNotificationChannel(str);
        }

        static List f(NotificationManager notificationManager) {
            return notificationManager.getNotificationChannelGroups();
        }

        static List g(NotificationManager notificationManager) {
            return notificationManager.getNotificationChannels();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class c {
        static NotificationChannelGroup a(NotificationManager notificationManager, String str) {
            return notificationManager.getNotificationChannelGroup(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d implements g {

        /* renamed from: a  reason: collision with root package name */
        final String f3170a;

        /* renamed from: b  reason: collision with root package name */
        final int f3171b;

        /* renamed from: c  reason: collision with root package name */
        final String f3172c;

        /* renamed from: d  reason: collision with root package name */
        final Notification f3173d;

        d(String str, int i10, String str2, Notification notification) {
            this.f3170a = str;
            this.f3171b = i10;
            this.f3172c = str2;
            this.f3173d = notification;
        }

        @Override // androidx.core.app.NotificationManagerCompat.g
        public void a(b.a aVar) {
            aVar.T0(this.f3170a, this.f3171b, this.f3172c, this.f3173d);
        }

        public String toString() {
            return "NotifyTask[packageName:" + this.f3170a + ", id:" + this.f3171b + ", tag:" + this.f3172c + "]";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class e {

        /* renamed from: a  reason: collision with root package name */
        final ComponentName f3174a;

        /* renamed from: b  reason: collision with root package name */
        final IBinder f3175b;

        e(ComponentName componentName, IBinder iBinder) {
            this.f3174a = componentName;
            this.f3175b = iBinder;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class f implements Handler.Callback, ServiceConnection {

        /* renamed from: d  reason: collision with root package name */
        private final Context f3176d;

        /* renamed from: e  reason: collision with root package name */
        private final HandlerThread f3177e;

        /* renamed from: i  reason: collision with root package name */
        private final Handler f3178i;

        /* renamed from: o  reason: collision with root package name */
        private final Map f3179o = new HashMap();

        /* renamed from: p  reason: collision with root package name */
        private Set f3180p = new HashSet();

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            final ComponentName f3181a;

            /* renamed from: c  reason: collision with root package name */
            b.a f3183c;

            /* renamed from: b  reason: collision with root package name */
            boolean f3182b = false;

            /* renamed from: d  reason: collision with root package name */
            ArrayDeque f3184d = new ArrayDeque();

            /* renamed from: e  reason: collision with root package name */
            int f3185e = 0;

            a(ComponentName componentName) {
                this.f3181a = componentName;
            }
        }

        f(Context context) {
            this.f3176d = context;
            HandlerThread handlerThread = new HandlerThread("NotificationManagerCompat");
            this.f3177e = handlerThread;
            handlerThread.start();
            this.f3178i = new Handler(handlerThread.getLooper(), this);
        }

        private boolean a(a aVar) {
            if (aVar.f3182b) {
                return true;
            }
            boolean bindService = this.f3176d.bindService(new Intent("android.support.BIND_NOTIFICATION_SIDE_CHANNEL").setComponent(aVar.f3181a), this, 33);
            aVar.f3182b = bindService;
            if (bindService) {
                aVar.f3185e = 0;
            } else {
                Log.w("NotifManCompat", "Unable to bind to listener " + aVar.f3181a);
                this.f3176d.unbindService(this);
            }
            return aVar.f3182b;
        }

        private void b(a aVar) {
            if (aVar.f3182b) {
                this.f3176d.unbindService(this);
                aVar.f3182b = false;
            }
            aVar.f3183c = null;
        }

        private void c(g gVar) {
            j();
            for (a aVar : this.f3179o.values()) {
                aVar.f3184d.add(gVar);
                g(aVar);
            }
        }

        private void d(ComponentName componentName) {
            a aVar = (a) this.f3179o.get(componentName);
            if (aVar != null) {
                g(aVar);
            }
        }

        private void e(ComponentName componentName, IBinder iBinder) {
            a aVar = (a) this.f3179o.get(componentName);
            if (aVar != null) {
                aVar.f3183c = a.AbstractBinderC0088a.e(iBinder);
                aVar.f3185e = 0;
                g(aVar);
            }
        }

        private void f(ComponentName componentName) {
            a aVar = (a) this.f3179o.get(componentName);
            if (aVar != null) {
                b(aVar);
            }
        }

        private void g(a aVar) {
            if (Log.isLoggable("NotifManCompat", 3)) {
                Log.d("NotifManCompat", "Processing component " + aVar.f3181a + ", " + aVar.f3184d.size() + " queued tasks");
            }
            if (!aVar.f3184d.isEmpty()) {
                if (a(aVar) && aVar.f3183c != null) {
                    while (true) {
                        g gVar = (g) aVar.f3184d.peek();
                        if (gVar == null) {
                            break;
                        }
                        try {
                            if (Log.isLoggable("NotifManCompat", 3)) {
                                Log.d("NotifManCompat", "Sending task " + gVar);
                            }
                            gVar.a(aVar.f3183c);
                            aVar.f3184d.remove();
                        } catch (DeadObjectException unused) {
                            if (Log.isLoggable("NotifManCompat", 3)) {
                                Log.d("NotifManCompat", "Remote service has died: " + aVar.f3181a);
                            }
                        } catch (RemoteException e10) {
                            Log.w("NotifManCompat", "RemoteException communicating with " + aVar.f3181a, e10);
                        }
                    }
                    if (!aVar.f3184d.isEmpty()) {
                        i(aVar);
                        return;
                    }
                    return;
                }
                i(aVar);
            }
        }

        private void i(a aVar) {
            if (this.f3178i.hasMessages(3, aVar.f3181a)) {
                return;
            }
            int i10 = aVar.f3185e;
            int i11 = i10 + 1;
            aVar.f3185e = i11;
            if (i11 > 6) {
                Log.w("NotifManCompat", "Giving up on delivering " + aVar.f3184d.size() + " tasks to " + aVar.f3181a + " after " + aVar.f3185e + " retries");
                aVar.f3184d.clear();
                return;
            }
            int i12 = (1 << i10) * 1000;
            if (Log.isLoggable("NotifManCompat", 3)) {
                Log.d("NotifManCompat", "Scheduling retry for " + i12 + " ms");
            }
            this.f3178i.sendMessageDelayed(this.f3178i.obtainMessage(3, aVar.f3181a), i12);
        }

        private void j() {
            Set h10 = NotificationManagerCompat.h(this.f3176d);
            if (!h10.equals(this.f3180p)) {
                this.f3180p = h10;
                List<ResolveInfo> queryIntentServices = this.f3176d.getPackageManager().queryIntentServices(new Intent().setAction("android.support.BIND_NOTIFICATION_SIDE_CHANNEL"), 0);
                HashSet<ComponentName> hashSet = new HashSet();
                for (ResolveInfo resolveInfo : queryIntentServices) {
                    if (h10.contains(resolveInfo.serviceInfo.packageName)) {
                        ServiceInfo serviceInfo = resolveInfo.serviceInfo;
                        ComponentName componentName = new ComponentName(serviceInfo.packageName, serviceInfo.name);
                        if (resolveInfo.serviceInfo.permission != null) {
                            Log.w("NotifManCompat", "Permission present on component " + componentName + ", not adding listener record.");
                        } else {
                            hashSet.add(componentName);
                        }
                    }
                }
                for (ComponentName componentName2 : hashSet) {
                    if (!this.f3179o.containsKey(componentName2)) {
                        if (Log.isLoggable("NotifManCompat", 3)) {
                            Log.d("NotifManCompat", "Adding listener record for " + componentName2);
                        }
                        this.f3179o.put(componentName2, new a(componentName2));
                    }
                }
                Iterator it = this.f3179o.entrySet().iterator();
                while (it.hasNext()) {
                    Map.Entry entry = (Map.Entry) it.next();
                    if (!hashSet.contains(entry.getKey())) {
                        if (Log.isLoggable("NotifManCompat", 3)) {
                            Log.d("NotifManCompat", "Removing listener record for " + entry.getKey());
                        }
                        b((a) entry.getValue());
                        it.remove();
                    }
                }
            }
        }

        public void h(g gVar) {
            this.f3178i.obtainMessage(0, gVar).sendToTarget();
        }

        @Override // android.os.Handler.Callback
        public boolean handleMessage(Message message) {
            int i10 = message.what;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            return false;
                        }
                        d((ComponentName) message.obj);
                        return true;
                    }
                    f((ComponentName) message.obj);
                    return true;
                }
                e eVar = (e) message.obj;
                e(eVar.f3174a, eVar.f3175b);
                return true;
            }
            c((g) message.obj);
            return true;
        }

        @Override // android.content.ServiceConnection
        public void onServiceConnected(ComponentName componentName, IBinder iBinder) {
            if (Log.isLoggable("NotifManCompat", 3)) {
                Log.d("NotifManCompat", "Connected to service " + componentName);
            }
            this.f3178i.obtainMessage(1, new e(componentName, iBinder)).sendToTarget();
        }

        @Override // android.content.ServiceConnection
        public void onServiceDisconnected(ComponentName componentName) {
            if (Log.isLoggable("NotifManCompat", 3)) {
                Log.d("NotifManCompat", "Disconnected from service " + componentName);
            }
            this.f3178i.obtainMessage(2, componentName).sendToTarget();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface g {
        void a(b.a aVar);
    }

    private NotificationManagerCompat(Context context) {
        this.f3168a = context;
        this.f3169b = (NotificationManager) context.getSystemService("notification");
    }

    public static NotificationManagerCompat g(Context context) {
        return new NotificationManagerCompat(context);
    }

    public static Set h(Context context) {
        Set set;
        String string = Settings.Secure.getString(context.getContentResolver(), "enabled_notification_listeners");
        synchronized (f3163c) {
            if (string != null) {
                try {
                    if (!string.equals(f3164d)) {
                        String[] split = string.split(":", -1);
                        HashSet hashSet = new HashSet(split.length);
                        for (String str : split) {
                            ComponentName unflattenFromString = ComponentName.unflattenFromString(str);
                            if (unflattenFromString != null) {
                                hashSet.add(unflattenFromString.getPackageName());
                            }
                        }
                        f3165e = hashSet;
                        f3164d = string;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            set = f3165e;
        }
        return set;
    }

    private void q(g gVar) {
        synchronized (f3166f) {
            try {
                if (f3167g == null) {
                    f3167g = new f(this.f3168a.getApplicationContext());
                }
                f3167g.h(gVar);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private static boolean r(Notification notification) {
        Bundle k10 = NotificationCompat.k(notification);
        if (k10 != null && k10.getBoolean("android.support.useSideChannel")) {
            return true;
        }
        return false;
    }

    public boolean a() {
        return a.a(this.f3169b);
    }

    public void b(String str, int i10) {
        this.f3169b.cancel(str, i10);
    }

    public void c() {
        this.f3169b.cancelAll();
    }

    public void d(List list) {
        if (Build.VERSION.SDK_INT >= 26 && !list.isEmpty()) {
            ArrayList arrayList = new ArrayList(list.size());
            Iterator it = list.iterator();
            while (it.hasNext()) {
                arrayList.add(((k) it.next()).c());
            }
            b.a(this.f3169b, arrayList);
        }
    }

    public void e(List list) {
        if (Build.VERSION.SDK_INT >= 26 && !list.isEmpty()) {
            ArrayList arrayList = new ArrayList(list.size());
            Iterator it = list.iterator();
            while (it.hasNext()) {
                arrayList.add(((NotificationChannelCompat) it.next()).e());
            }
            b.b(this.f3169b, arrayList);
        }
    }

    public void f(String str) {
        if (Build.VERSION.SDK_INT >= 26) {
            b.c(this.f3169b, str);
        }
    }

    public NotificationChannel i(String str) {
        if (Build.VERSION.SDK_INT >= 26) {
            return b.e(this.f3169b, str);
        }
        return null;
    }

    public NotificationChannelCompat j(String str) {
        NotificationChannel i10;
        if (Build.VERSION.SDK_INT >= 26 && (i10 = i(str)) != null) {
            return new NotificationChannelCompat(i10);
        }
        return null;
    }

    public NotificationChannelGroup k(String str) {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 28) {
            return c.a(this.f3169b, str);
        }
        if (i10 >= 26) {
            for (Object obj : l()) {
                NotificationChannelGroup a10 = q.a(obj);
                if (b.d(a10).equals(str)) {
                    return a10;
                }
            }
        }
        return null;
    }

    public List l() {
        if (Build.VERSION.SDK_INT >= 26) {
            return b.f(this.f3169b);
        }
        return Collections.EMPTY_LIST;
    }

    public List m() {
        if (Build.VERSION.SDK_INT >= 26) {
            return b.g(this.f3169b);
        }
        return Collections.EMPTY_LIST;
    }

    public List n() {
        if (Build.VERSION.SDK_INT >= 26) {
            List<Object> m10 = m();
            if (!m10.isEmpty()) {
                ArrayList arrayList = new ArrayList(m10.size());
                for (Object obj : m10) {
                    arrayList.add(new NotificationChannelCompat(r.a(obj)));
                }
                return arrayList;
            }
        }
        return Collections.EMPTY_LIST;
    }

    public void o(int i10, Notification notification) {
        p(null, i10, notification);
    }

    public void p(String str, int i10, Notification notification) {
        if (r(notification)) {
            q(new d(this.f3168a.getPackageName(), i10, str, notification));
            this.f3169b.cancel(str, i10);
            return;
        }
        this.f3169b.notify(str, i10, notification);
    }
}
