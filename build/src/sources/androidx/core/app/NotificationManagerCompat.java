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
    private static String f3023d;

    /* renamed from: g  reason: collision with root package name */
    private static f f3026g;

    /* renamed from: a  reason: collision with root package name */
    private final Context f3027a;

    /* renamed from: b  reason: collision with root package name */
    private final NotificationManager f3028b;

    /* renamed from: c  reason: collision with root package name */
    private static final Object f3022c = new Object();

    /* renamed from: e  reason: collision with root package name */
    private static Set f3024e = new HashSet();

    /* renamed from: f  reason: collision with root package name */
    private static final Object f3025f = new Object();

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
        final String f3029a;

        /* renamed from: b  reason: collision with root package name */
        final int f3030b;

        /* renamed from: c  reason: collision with root package name */
        final String f3031c;

        /* renamed from: d  reason: collision with root package name */
        final Notification f3032d;

        d(String str, int i10, String str2, Notification notification) {
            this.f3029a = str;
            this.f3030b = i10;
            this.f3031c = str2;
            this.f3032d = notification;
        }

        @Override // androidx.core.app.NotificationManagerCompat.g
        public void a(b.a aVar) {
            aVar.P0(this.f3029a, this.f3030b, this.f3031c, this.f3032d);
        }

        public String toString() {
            return "NotifyTask[packageName:" + this.f3029a + ", id:" + this.f3030b + ", tag:" + this.f3031c + "]";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class e {

        /* renamed from: a  reason: collision with root package name */
        final ComponentName f3033a;

        /* renamed from: b  reason: collision with root package name */
        final IBinder f3034b;

        e(ComponentName componentName, IBinder iBinder) {
            this.f3033a = componentName;
            this.f3034b = iBinder;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class f implements Handler.Callback, ServiceConnection {

        /* renamed from: d  reason: collision with root package name */
        private final Context f3035d;

        /* renamed from: e  reason: collision with root package name */
        private final HandlerThread f3036e;

        /* renamed from: i  reason: collision with root package name */
        private final Handler f3037i;

        /* renamed from: o  reason: collision with root package name */
        private final Map f3038o = new HashMap();

        /* renamed from: p  reason: collision with root package name */
        private Set f3039p = new HashSet();

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            final ComponentName f3040a;

            /* renamed from: c  reason: collision with root package name */
            b.a f3042c;

            /* renamed from: b  reason: collision with root package name */
            boolean f3041b = false;

            /* renamed from: d  reason: collision with root package name */
            ArrayDeque f3043d = new ArrayDeque();

            /* renamed from: e  reason: collision with root package name */
            int f3044e = 0;

            a(ComponentName componentName) {
                this.f3040a = componentName;
            }
        }

        f(Context context) {
            this.f3035d = context;
            HandlerThread handlerThread = new HandlerThread("NotificationManagerCompat");
            this.f3036e = handlerThread;
            handlerThread.start();
            this.f3037i = new Handler(handlerThread.getLooper(), this);
        }

        private boolean a(a aVar) {
            if (aVar.f3041b) {
                return true;
            }
            boolean bindService = this.f3035d.bindService(new Intent("android.support.BIND_NOTIFICATION_SIDE_CHANNEL").setComponent(aVar.f3040a), this, 33);
            aVar.f3041b = bindService;
            if (bindService) {
                aVar.f3044e = 0;
            } else {
                Log.w("NotifManCompat", "Unable to bind to listener " + aVar.f3040a);
                this.f3035d.unbindService(this);
            }
            return aVar.f3041b;
        }

        private void b(a aVar) {
            if (aVar.f3041b) {
                this.f3035d.unbindService(this);
                aVar.f3041b = false;
            }
            aVar.f3042c = null;
        }

        private void c(g gVar) {
            j();
            for (a aVar : this.f3038o.values()) {
                aVar.f3043d.add(gVar);
                g(aVar);
            }
        }

        private void d(ComponentName componentName) {
            a aVar = (a) this.f3038o.get(componentName);
            if (aVar != null) {
                g(aVar);
            }
        }

        private void e(ComponentName componentName, IBinder iBinder) {
            a aVar = (a) this.f3038o.get(componentName);
            if (aVar != null) {
                aVar.f3042c = a.AbstractBinderC0093a.e(iBinder);
                aVar.f3044e = 0;
                g(aVar);
            }
        }

        private void f(ComponentName componentName) {
            a aVar = (a) this.f3038o.get(componentName);
            if (aVar != null) {
                b(aVar);
            }
        }

        private void g(a aVar) {
            if (Log.isLoggable("NotifManCompat", 3)) {
                Log.d("NotifManCompat", "Processing component " + aVar.f3040a + ", " + aVar.f3043d.size() + " queued tasks");
            }
            if (!aVar.f3043d.isEmpty()) {
                if (a(aVar) && aVar.f3042c != null) {
                    while (true) {
                        g gVar = (g) aVar.f3043d.peek();
                        if (gVar == null) {
                            break;
                        }
                        try {
                            if (Log.isLoggable("NotifManCompat", 3)) {
                                Log.d("NotifManCompat", "Sending task " + gVar);
                            }
                            gVar.a(aVar.f3042c);
                            aVar.f3043d.remove();
                        } catch (DeadObjectException unused) {
                            if (Log.isLoggable("NotifManCompat", 3)) {
                                Log.d("NotifManCompat", "Remote service has died: " + aVar.f3040a);
                            }
                        } catch (RemoteException e10) {
                            Log.w("NotifManCompat", "RemoteException communicating with " + aVar.f3040a, e10);
                        }
                    }
                    if (!aVar.f3043d.isEmpty()) {
                        i(aVar);
                        return;
                    }
                    return;
                }
                i(aVar);
            }
        }

        private void i(a aVar) {
            if (this.f3037i.hasMessages(3, aVar.f3040a)) {
                return;
            }
            int i10 = aVar.f3044e;
            int i11 = i10 + 1;
            aVar.f3044e = i11;
            if (i11 > 6) {
                Log.w("NotifManCompat", "Giving up on delivering " + aVar.f3043d.size() + " tasks to " + aVar.f3040a + " after " + aVar.f3044e + " retries");
                aVar.f3043d.clear();
                return;
            }
            int i12 = (1 << i10) * 1000;
            if (Log.isLoggable("NotifManCompat", 3)) {
                Log.d("NotifManCompat", "Scheduling retry for " + i12 + " ms");
            }
            this.f3037i.sendMessageDelayed(this.f3037i.obtainMessage(3, aVar.f3040a), i12);
        }

        private void j() {
            Set h10 = NotificationManagerCompat.h(this.f3035d);
            if (!h10.equals(this.f3039p)) {
                this.f3039p = h10;
                List<ResolveInfo> queryIntentServices = this.f3035d.getPackageManager().queryIntentServices(new Intent().setAction("android.support.BIND_NOTIFICATION_SIDE_CHANNEL"), 0);
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
                    if (!this.f3038o.containsKey(componentName2)) {
                        if (Log.isLoggable("NotifManCompat", 3)) {
                            Log.d("NotifManCompat", "Adding listener record for " + componentName2);
                        }
                        this.f3038o.put(componentName2, new a(componentName2));
                    }
                }
                Iterator it = this.f3038o.entrySet().iterator();
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
            this.f3037i.obtainMessage(0, gVar).sendToTarget();
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
                e(eVar.f3033a, eVar.f3034b);
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
            this.f3037i.obtainMessage(1, new e(componentName, iBinder)).sendToTarget();
        }

        @Override // android.content.ServiceConnection
        public void onServiceDisconnected(ComponentName componentName) {
            if (Log.isLoggable("NotifManCompat", 3)) {
                Log.d("NotifManCompat", "Disconnected from service " + componentName);
            }
            this.f3037i.obtainMessage(2, componentName).sendToTarget();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface g {
        void a(b.a aVar);
    }

    private NotificationManagerCompat(Context context) {
        this.f3027a = context;
        this.f3028b = (NotificationManager) context.getSystemService("notification");
    }

    public static NotificationManagerCompat g(Context context) {
        return new NotificationManagerCompat(context);
    }

    public static Set h(Context context) {
        Set set;
        String string = Settings.Secure.getString(context.getContentResolver(), "enabled_notification_listeners");
        synchronized (f3022c) {
            if (string != null) {
                try {
                    if (!string.equals(f3023d)) {
                        String[] split = string.split(":", -1);
                        HashSet hashSet = new HashSet(split.length);
                        for (String str : split) {
                            ComponentName unflattenFromString = ComponentName.unflattenFromString(str);
                            if (unflattenFromString != null) {
                                hashSet.add(unflattenFromString.getPackageName());
                            }
                        }
                        f3024e = hashSet;
                        f3023d = string;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            set = f3024e;
        }
        return set;
    }

    private void q(g gVar) {
        synchronized (f3025f) {
            try {
                if (f3026g == null) {
                    f3026g = new f(this.f3027a.getApplicationContext());
                }
                f3026g.h(gVar);
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
        return a.a(this.f3028b);
    }

    public void b(String str, int i10) {
        this.f3028b.cancel(str, i10);
    }

    public void c() {
        this.f3028b.cancelAll();
    }

    public void d(List list) {
        if (Build.VERSION.SDK_INT >= 26 && !list.isEmpty()) {
            ArrayList arrayList = new ArrayList(list.size());
            Iterator it = list.iterator();
            while (it.hasNext()) {
                arrayList.add(((k) it.next()).c());
            }
            b.a(this.f3028b, arrayList);
        }
    }

    public void e(List list) {
        if (Build.VERSION.SDK_INT >= 26 && !list.isEmpty()) {
            ArrayList arrayList = new ArrayList(list.size());
            Iterator it = list.iterator();
            while (it.hasNext()) {
                arrayList.add(((NotificationChannelCompat) it.next()).e());
            }
            b.b(this.f3028b, arrayList);
        }
    }

    public void f(String str) {
        if (Build.VERSION.SDK_INT >= 26) {
            b.c(this.f3028b, str);
        }
    }

    public NotificationChannel i(String str) {
        if (Build.VERSION.SDK_INT >= 26) {
            return b.e(this.f3028b, str);
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
            return c.a(this.f3028b, str);
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
            return b.f(this.f3028b);
        }
        return Collections.EMPTY_LIST;
    }

    public List m() {
        if (Build.VERSION.SDK_INT >= 26) {
            return b.g(this.f3028b);
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
            q(new d(this.f3027a.getPackageName(), i10, str, notification));
            this.f3028b.cancel(str, i10);
            return;
        }
        this.f3028b.notify(str, i10, notification);
    }
}
