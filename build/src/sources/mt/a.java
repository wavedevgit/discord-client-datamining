package mt;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.util.Log;
import java.util.Locale;
import java.util.TimeZone;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicBoolean;
import net.time4j.a0;
import net.time4j.android.spi.AndroidResourceLoader;
import net.time4j.f0;
import net.time4j.g0;
import net.time4j.i0;
import net.time4j.q0;
import net.time4j.tz.k;
import net.time4j.tz.l;
import net.time4j.tz.p;
import nt.d;
import qt.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final AtomicBoolean f38965a = new AtomicBoolean(false);

    /* renamed from: b  reason: collision with root package name */
    private static final AtomicBoolean f38966b = new AtomicBoolean(false);

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements Runnable {
        private b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            long nanoTime = System.nanoTime();
            k t10 = p.t(TimeZone.getDefault().getOffset(System.currentTimeMillis()) / 1000);
            Locale locale = Locale.getDefault();
            try {
                a0 b10 = q0.b();
                t10 = l.O().z();
                Log.i("TIME4A", "System time zone at start: [" + t10.a() + "]");
                Log.i("TIME4A", "System locale at start: [" + locale.toString() + "]");
                e eVar = e.FULL;
                Log.i("TIME4A", rt.c.B(eVar, eVar, locale, t10).l(b10));
                Log.i("TIME4A", "Prefetch thread consumed (in ms): " + ((System.nanoTime() - nanoTime) / 1000000));
            } catch (Throwable th2) {
                Log.e("TIME4A", "Error on prefetch thread with: time zone=" + t10.a() + ", locale=" + locale + "!", th2);
                throw new IllegalStateException(th2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c extends BroadcastReceiver {
        private c() {
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            l.b.a();
            Log.i("TIME4A", "Event ACTION_TIMEZONE_CHANGED received, system timezone changed to: [" + l.O().z().a() + "]. Original tz-id reported by Android: [" + intent.getStringExtra("time-zone") + "]");
        }
    }

    public static void a(Context context, Runnable runnable) {
        long nanoTime = System.nanoTime();
        c(context, null);
        d(context.getApplicationContext());
        i0 o02 = f0.H0(2021, 3, 27).o0(g0.F0());
        Log.i("TIME4A", "Starting Time4A (v4.8-2021a published on " + o02.f0() + ")");
        if (runnable != null) {
            Executors.defaultThreadFactory().newThread(runnable).start();
        }
        Log.i("TIME4A", "Main-Thread consumed in ms: " + ((System.nanoTime() - nanoTime) / 1000000));
    }

    public static void b(Context context, boolean z10) {
        b bVar = null;
        if (z10) {
            bVar = new b();
        }
        a(context, bVar);
    }

    public static void c(Context context, mt.b bVar) {
        if (!f38965a.getAndSet(true)) {
            System.setProperty("net.time4j.base.ResourceLoader", "net.time4j.android.spi.AndroidResourceLoader");
            ((AndroidResourceLoader) d.c()).j(context, bVar);
        }
    }

    public static void d(Context context) {
        if (context != null && !f38966b.getAndSet(true)) {
            System.setProperty("net.time4j.allow.system.tz.override", "true");
            context.registerReceiver(new c(), new IntentFilter("android.intent.action.TIMEZONE_CHANGED"));
        }
    }
}
