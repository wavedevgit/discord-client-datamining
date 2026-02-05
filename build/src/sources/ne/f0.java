package ne;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Handler;
import android.os.Looper;
import android.telephony.TelephonyCallback;
import android.telephony.TelephonyDisplayInfo;
import android.telephony.TelephonyManager;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import java.lang.ref.WeakReference;
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f0 {

    /* renamed from: e  reason: collision with root package name */
    private static f0 f39555e;

    /* renamed from: a  reason: collision with root package name */
    private final Handler f39556a = new Handler(Looper.getMainLooper());

    /* renamed from: b  reason: collision with root package name */
    private final CopyOnWriteArrayList f39557b = new CopyOnWriteArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final Object f39558c = new Object();

    /* renamed from: d  reason: collision with root package name */
    private int f39559d = 0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a extends TelephonyCallback implements TelephonyCallback.DisplayInfoListener {

            /* renamed from: a  reason: collision with root package name */
            private final f0 f39560a;

            public a(f0 f0Var) {
                this.f39560a = f0Var;
            }

            public void onDisplayInfoChanged(TelephonyDisplayInfo telephonyDisplayInfo) {
                boolean z10;
                int overrideNetworkType = telephonyDisplayInfo.getOverrideNetworkType();
                int i10 = 5;
                if (overrideNetworkType != 3 && overrideNetworkType != 4 && overrideNetworkType != 5) {
                    z10 = false;
                } else {
                    z10 = true;
                }
                f0 f0Var = this.f39560a;
                if (z10) {
                    i10 = 10;
                }
                f0Var.j(i10);
            }
        }

        public static void a(Context context, f0 f0Var) {
            try {
                TelephonyManager telephonyManager = (TelephonyManager) ne.a.e((TelephonyManager) context.getSystemService("phone"));
                a aVar = new a(f0Var);
                telephonyManager.registerTelephonyCallback(context.getMainExecutor(), aVar);
                telephonyManager.unregisterTelephonyCallback(aVar);
            } catch (RuntimeException unused) {
                f0Var.j(5);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface c {
        void a(int i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class d extends BroadcastReceiver {
        private d() {
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            int g10 = f0.g(context);
            if (w0.f39657a < 31 || g10 != 5) {
                f0.this.j(g10);
            } else {
                b.a(context, f0.this);
            }
        }
    }

    private f0(Context context) {
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction("android.net.conn.CONNECTIVITY_CHANGE");
        context.registerReceiver(new d(), intentFilter);
    }

    public static synchronized f0 d(Context context) {
        f0 f0Var;
        synchronized (f0.class) {
            try {
                if (f39555e == null) {
                    f39555e = new f0(context);
                }
                f0Var = f39555e;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f0Var;
    }

    private static int e(NetworkInfo networkInfo) {
        switch (networkInfo.getSubtype()) {
            case 1:
            case 2:
                return 3;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 14:
            case 15:
            case 17:
                return 4;
            case 13:
                return 5;
            case 16:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            default:
                return 6;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                return 2;
            case 20:
                if (w0.f39657a >= 29) {
                    return 9;
                }
                return 0;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int g(Context context) {
        ConnectivityManager connectivityManager = (ConnectivityManager) context.getSystemService("connectivity");
        int i10 = 0;
        if (connectivityManager == null) {
            return 0;
        }
        try {
            NetworkInfo activeNetworkInfo = connectivityManager.getActiveNetworkInfo();
            i10 = 1;
            if (activeNetworkInfo != null && activeNetworkInfo.isConnected()) {
                int type = activeNetworkInfo.getType();
                if (type != 0) {
                    if (type != 1) {
                        if (type != 4 && type != 5) {
                            if (type == 6) {
                                return 5;
                            }
                            if (type != 9) {
                                return 8;
                            }
                            return 7;
                        }
                    } else {
                        return 2;
                    }
                }
                return e(activeNetworkInfo);
            }
        } catch (SecurityException unused) {
        }
        return i10;
    }

    private void i() {
        Iterator it = this.f39557b.iterator();
        while (it.hasNext()) {
            WeakReference weakReference = (WeakReference) it.next();
            if (weakReference.get() == null) {
                this.f39557b.remove(weakReference);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void j(int i10) {
        synchronized (this.f39558c) {
            try {
                if (this.f39559d == i10) {
                    return;
                }
                this.f39559d = i10;
                Iterator it = this.f39557b.iterator();
                while (it.hasNext()) {
                    WeakReference weakReference = (WeakReference) it.next();
                    c cVar = (c) weakReference.get();
                    if (cVar != null) {
                        cVar.a(i10);
                    } else {
                        this.f39557b.remove(weakReference);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public int f() {
        int i10;
        synchronized (this.f39558c) {
            i10 = this.f39559d;
        }
        return i10;
    }

    public void h(final c cVar) {
        i();
        this.f39557b.add(new WeakReference(cVar));
        this.f39556a.post(new Runnable() { // from class: ne.e0
            @Override // java.lang.Runnable
            public final void run() {
                cVar.a(f0.this.f());
            }
        });
    }
}
