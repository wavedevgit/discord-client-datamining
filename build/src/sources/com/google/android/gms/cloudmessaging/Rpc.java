package com.google.android.gms.cloudmessaging;

import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Looper;
import android.os.Message;
import android.os.Messenger;
import android.os.Parcelable;
import android.os.RemoteException;
import android.util.Log;
import androidx.collection.SimpleArrayMap;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import ef.g;
import ef.h;
import ef.y;
import ef.z;
import java.io.IOException;
import java.util.Objects;
import java.util.concurrent.Executor;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import zg.j;
import zg.k;
import zg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class Rpc {

    /* renamed from: h  reason: collision with root package name */
    private static int f14421h;

    /* renamed from: i  reason: collision with root package name */
    private static PendingIntent f14422i;

    /* renamed from: j  reason: collision with root package name */
    private static final Executor f14423j = new Executor() { // from class: ef.a0
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            runnable.run();
        }
    };

    /* renamed from: k  reason: collision with root package name */
    private static final Pattern f14424k = Pattern.compile("\\|ID\\|([^|]+)\\|:?+(.*)");

    /* renamed from: b  reason: collision with root package name */
    private final Context f14426b;

    /* renamed from: c  reason: collision with root package name */
    private final z f14427c;

    /* renamed from: d  reason: collision with root package name */
    private final ScheduledExecutorService f14428d;

    /* renamed from: f  reason: collision with root package name */
    private Messenger f14430f;

    /* renamed from: g  reason: collision with root package name */
    private h f14431g;

    /* renamed from: a  reason: collision with root package name */
    private final SimpleArrayMap f14425a = new SimpleArrayMap();

    /* renamed from: e  reason: collision with root package name */
    private final Messenger f14429e = new Messenger(new c(this, Looper.getMainLooper()));

    public Rpc(Context context) {
        this.f14426b = context;
        this.f14427c = new z(context);
        ScheduledThreadPoolExecutor scheduledThreadPoolExecutor = new ScheduledThreadPoolExecutor(1);
        scheduledThreadPoolExecutor.setKeepAliveTime(60L, TimeUnit.SECONDS);
        scheduledThreadPoolExecutor.allowCoreThreadTimeOut(true);
        this.f14428d = scheduledThreadPoolExecutor;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ Task e(Bundle bundle) {
        if (m(bundle)) {
            return m.f(null);
        }
        return m.f(bundle);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ void g(Rpc rpc, Message message) {
        if (message != null) {
            Object obj = message.obj;
            if (obj instanceof Intent) {
                Intent intent = (Intent) obj;
                intent.setExtrasClassLoader(new g());
                if (intent.hasExtra("google.messenger")) {
                    Parcelable parcelableExtra = intent.getParcelableExtra("google.messenger");
                    if (parcelableExtra instanceof h) {
                        rpc.f14431g = (h) parcelableExtra;
                    }
                    if (parcelableExtra instanceof Messenger) {
                        rpc.f14430f = (Messenger) parcelableExtra;
                    }
                }
                Intent intent2 = (Intent) message.obj;
                String action = intent2.getAction();
                if (!Objects.equals(action, "com.google.android.c2dm.intent.REGISTRATION")) {
                    if (Log.isLoggable("Rpc", 3)) {
                        Log.d("Rpc", "Unexpected response action: ".concat(String.valueOf(action)));
                        return;
                    }
                    return;
                }
                String stringExtra = intent2.getStringExtra("registration_id");
                if (stringExtra == null) {
                    stringExtra = intent2.getStringExtra("unregistered");
                }
                if (stringExtra == null) {
                    String stringExtra2 = intent2.getStringExtra("error");
                    if (stringExtra2 == null) {
                        Log.w("Rpc", "Unexpected response, no error or registration id ".concat(String.valueOf(intent2.getExtras())));
                        return;
                    }
                    if (Log.isLoggable("Rpc", 3)) {
                        Log.d("Rpc", "Received InstanceID error ".concat(stringExtra2));
                    }
                    if (stringExtra2.startsWith("|")) {
                        String[] split = stringExtra2.split("\\|");
                        if (split.length > 2 && Objects.equals(split[1], "ID")) {
                            String str = split[2];
                            String str2 = split[3];
                            if (str2.startsWith(":")) {
                                str2 = str2.substring(1);
                            }
                            rpc.l(str, intent2.putExtra("error", str2).getExtras());
                            return;
                        }
                        Log.w("Rpc", "Unexpected structured response ".concat(stringExtra2));
                        return;
                    }
                    synchronized (rpc.f14425a) {
                        for (int i10 = 0; i10 < rpc.f14425a.size(); i10++) {
                            try {
                                rpc.l((String) rpc.f14425a.f(i10), intent2.getExtras());
                            } catch (Throwable th2) {
                                throw th2;
                            }
                        }
                    }
                    return;
                }
                Matcher matcher = f14424k.matcher(stringExtra);
                if (!matcher.matches()) {
                    if (Log.isLoggable("Rpc", 3)) {
                        Log.d("Rpc", "Unexpected response string: ".concat(stringExtra));
                        return;
                    }
                    return;
                }
                String group = matcher.group(1);
                String group2 = matcher.group(2);
                if (group != null) {
                    Bundle extras = intent2.getExtras();
                    extras.putString("registration_id", group2);
                    rpc.l(group, extras);
                    return;
                }
                return;
            }
        }
        Log.w("Rpc", "Dropping invalid message");
    }

    private final Task i(Bundle bundle) {
        final String j10 = j();
        final k kVar = new k();
        synchronized (this.f14425a) {
            this.f14425a.put(j10, kVar);
        }
        Intent intent = new Intent();
        intent.setPackage("com.google.android.gms");
        if (this.f14427c.b() == 2) {
            intent.setAction("com.google.iid.TOKEN_REQUEST");
        } else {
            intent.setAction("com.google.android.c2dm.intent.REGISTER");
        }
        intent.putExtras(bundle);
        k(this.f14426b, intent);
        intent.putExtra("kid", "|ID|" + j10 + "|");
        if (Log.isLoggable("Rpc", 3)) {
            Log.d("Rpc", "Sending ".concat(String.valueOf(intent.getExtras())));
        }
        intent.putExtra("google.messenger", this.f14429e);
        if (this.f14430f != null || this.f14431g != null) {
            Message obtain = Message.obtain();
            obtain.obj = intent;
            try {
                Messenger messenger = this.f14430f;
                if (messenger != null) {
                    messenger.send(obtain);
                } else {
                    this.f14431g.b(obtain);
                }
            } catch (RemoteException unused) {
                if (Log.isLoggable("Rpc", 3)) {
                    Log.d("Rpc", "Messenger failed, fallback to startService");
                }
            }
            final ScheduledFuture<?> schedule = this.f14428d.schedule(new Runnable() { // from class: ef.e
                @Override // java.lang.Runnable
                public final void run() {
                    if (zg.k.this.d(new IOException("TIMEOUT"))) {
                        Log.w("Rpc", "No response");
                    }
                }
            }, 30L, TimeUnit.SECONDS);
            kVar.a().c(f14423j, new OnCompleteListener() { // from class: com.google.android.gms.cloudmessaging.b
                @Override // com.google.android.gms.tasks.OnCompleteListener
                public final void onComplete(Task task) {
                    Rpc.this.h(j10, schedule, task);
                }
            });
            return kVar.a();
        }
        if (this.f14427c.b() == 2) {
            this.f14426b.sendBroadcast(intent);
        } else {
            this.f14426b.startService(intent);
        }
        final ScheduledFuture schedule2 = this.f14428d.schedule(new Runnable() { // from class: ef.e
            @Override // java.lang.Runnable
            public final void run() {
                if (zg.k.this.d(new IOException("TIMEOUT"))) {
                    Log.w("Rpc", "No response");
                }
            }
        }, 30L, TimeUnit.SECONDS);
        kVar.a().c(f14423j, new OnCompleteListener() { // from class: com.google.android.gms.cloudmessaging.b
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                Rpc.this.h(j10, schedule2, task);
            }
        });
        return kVar.a();
    }

    private static synchronized String j() {
        String num;
        synchronized (Rpc.class) {
            int i10 = f14421h;
            f14421h = i10 + 1;
            num = Integer.toString(i10);
        }
        return num;
    }

    private static synchronized void k(Context context, Intent intent) {
        synchronized (Rpc.class) {
            try {
                if (f14422i == null) {
                    Intent intent2 = new Intent();
                    intent2.setPackage("com.google.example.invalidpackage");
                    f14422i = PendingIntent.getBroadcast(context, 0, intent2, hg.a.f27911a);
                }
                intent.putExtra("app", f14422i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final void l(String str, Bundle bundle) {
        synchronized (this.f14425a) {
            try {
                k kVar = (k) this.f14425a.remove(str);
                if (kVar == null) {
                    Log.w("Rpc", "Missing callback for " + str);
                    return;
                }
                kVar.c(bundle);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private static boolean m(Bundle bundle) {
        if (bundle != null && bundle.containsKey("google.messenger")) {
            return true;
        }
        return false;
    }

    public Task a() {
        if (this.f14427c.a() >= 241100000) {
            return y.b(this.f14426b).d(5, Bundle.EMPTY).h(f14423j, new zg.c() { // from class: ef.d
                @Override // zg.c
                public final Object a(Task task) {
                    Intent intent = (Intent) ((Bundle) task.l()).getParcelable("notification_data");
                    if (intent != null) {
                        return new com.google.android.gms.cloudmessaging.a(intent);
                    }
                    return null;
                }
            });
        }
        return m.e(new IOException("SERVICE_NOT_AVAILABLE"));
    }

    public Task b(a aVar) {
        if (this.f14427c.a() >= 233700000) {
            Bundle bundle = new Bundle();
            bundle.putString("google.message_id", aVar.c());
            Integer d10 = aVar.d();
            if (d10 != null) {
                bundle.putInt("google.product_id", d10.intValue());
            }
            return y.b(this.f14426b).c(3, bundle);
        }
        return m.e(new IOException("SERVICE_NOT_AVAILABLE"));
    }

    public Task c(final Bundle bundle) {
        if (this.f14427c.a() < 12000000) {
            if (this.f14427c.b() != 0) {
                return i(bundle).i(f14423j, new zg.c() { // from class: com.google.android.gms.cloudmessaging.f
                    @Override // zg.c
                    public final Object a(Task task) {
                        return Rpc.this.f(bundle, task);
                    }
                });
            }
            return m.e(new IOException("MISSING_INSTANCEID_SERVICE"));
        }
        return y.b(this.f14426b).d(1, bundle).h(f14423j, new zg.c() { // from class: ef.c
            @Override // zg.c
            public final Object a(Task task) {
                if (task.p()) {
                    return (Bundle) task.l();
                }
                if (Log.isLoggable("Rpc", 3)) {
                    Log.d("Rpc", "Error making request: ".concat(String.valueOf(task.k())));
                }
                throw new IOException("SERVICE_NOT_AVAILABLE", task.k());
            }
        });
    }

    public Task d(boolean z10) {
        if (this.f14427c.a() >= 241100000) {
            Bundle bundle = new Bundle();
            bundle.putBoolean("proxy_retention", z10);
            return y.b(this.f14426b).c(4, bundle);
        }
        return m.e(new IOException("SERVICE_NOT_AVAILABLE"));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Task f(Bundle bundle, Task task) {
        if (task.p() && m((Bundle) task.l())) {
            return i(bundle).q(f14423j, new j() { // from class: com.google.android.gms.cloudmessaging.e
                @Override // zg.j
                public final Task a(Object obj) {
                    return Rpc.e((Bundle) obj);
                }
            });
        }
        return task;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void h(String str, ScheduledFuture scheduledFuture, Task task) {
        synchronized (this.f14425a) {
            this.f14425a.remove(str);
        }
        scheduledFuture.cancel(false);
    }
}
