package df;

import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Parcelable;
import android.text.TextUtils;
import android.util.Log;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import df.y;
import java.lang.ref.SoftReference;
import java.util.Objects;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import wg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a extends BroadcastReceiver {

    /* renamed from: a  reason: collision with root package name */
    private static SoftReference f20543a;

    /* renamed from: b  reason: collision with root package name */
    private static SoftReference f20544b;

    private final int e(Context context, Intent intent) {
        PendingIntent pendingIntent = (PendingIntent) intent.getParcelableExtra("pending_intent");
        if (pendingIntent != null) {
            try {
                pendingIntent.send();
            } catch (PendingIntent.CanceledException unused) {
                Log.e("CloudMessagingReceiver", "Notification pending intent canceled");
            }
        }
        Bundle extras = intent.getExtras();
        if (extras != null) {
            extras.remove("pending_intent");
        } else {
            extras = new Bundle();
        }
        if (Objects.equals(intent.getAction(), "com.google.firebase.messaging.NOTIFICATION_DISMISS")) {
            c(context, extras);
            return -1;
        }
        Log.e("CloudMessagingReceiver", "Unknown notification action");
        return 500;
    }

    protected Executor a() {
        ExecutorService executorService;
        synchronized (a.class) {
            try {
                SoftReference softReference = f20543a;
                if (softReference != null) {
                    executorService = (ExecutorService) softReference.get();
                } else {
                    executorService = null;
                }
                if (executorService == null) {
                    gg.e.a();
                    executorService = Executors.unconfigurableExecutorService(Executors.newCachedThreadPool(new of.a("firebase-iid-executor")));
                    f20543a = new SoftReference(executorService);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return executorService;
    }

    protected abstract int b(Context context, com.google.android.gms.cloudmessaging.a aVar);

    protected abstract void c(Context context, Bundle bundle);

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void d(Intent intent, final Context context, boolean z10, BroadcastReceiver.PendingResult pendingResult) {
        Intent intent2;
        int i10;
        try {
            Parcelable parcelableExtra = intent.getParcelableExtra("wrapped_intent");
            Executor executor = null;
            if (parcelableExtra instanceof Intent) {
                intent2 = (Intent) parcelableExtra;
            } else {
                intent2 = null;
            }
            if (intent2 != null) {
                i10 = e(context, intent2);
            } else if (intent.getExtras() == null) {
                i10 = 500;
            } else {
                final com.google.android.gms.cloudmessaging.a aVar = new com.google.android.gms.cloudmessaging.a(intent);
                final CountDownLatch countDownLatch = new CountDownLatch(1);
                synchronized (a.class) {
                    SoftReference softReference = f20544b;
                    if (softReference != null) {
                        executor = (Executor) softReference.get();
                    }
                    if (executor == null) {
                        gg.e.a();
                        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(1, 1, 60L, TimeUnit.SECONDS, new LinkedBlockingQueue(), new of.a("pscm-ack-executor"));
                        threadPoolExecutor.allowCoreThreadTimeOut(true);
                        executor = Executors.unconfigurableExecutorService(threadPoolExecutor);
                        f20544b = new SoftReference(executor);
                    }
                }
                executor.execute(new Runnable() { // from class: com.google.android.gms.cloudmessaging.d
                    @Override // java.lang.Runnable
                    public final void run() {
                        Task c10;
                        a aVar2 = aVar;
                        if (TextUtils.isEmpty(aVar2.c())) {
                            c10 = m.f(null);
                        } else {
                            Bundle bundle = new Bundle();
                            bundle.putString("google.message_id", aVar2.c());
                            Integer d10 = aVar2.d();
                            if (d10 != null) {
                                bundle.putInt("google.product_id", d10.intValue());
                            }
                            Context context2 = context;
                            bundle.putBoolean("supports_message_handled", true);
                            c10 = y.b(context2).c(2, bundle);
                        }
                        final CountDownLatch countDownLatch2 = countDownLatch;
                        c10.c(new Executor() { // from class: df.i
                            @Override // java.util.concurrent.Executor
                            public final void execute(Runnable runnable) {
                                runnable.run();
                            }
                        }, new OnCompleteListener() { // from class: df.j
                            @Override // com.google.android.gms.tasks.OnCompleteListener
                            public final void onComplete(Task task) {
                                countDownLatch2.countDown();
                            }
                        });
                    }
                });
                int b10 = b(context, aVar);
                try {
                    if (!countDownLatch.await(TimeUnit.SECONDS.toMillis(1L), TimeUnit.MILLISECONDS)) {
                        Log.w("CloudMessagingReceiver", "Message ack timed out");
                    }
                } catch (InterruptedException e10) {
                    Log.w("CloudMessagingReceiver", "Message ack failed: ".concat(e10.toString()));
                }
                i10 = b10;
            }
            if (z10 && pendingResult != null) {
                pendingResult.setResultCode(i10);
            }
            if (pendingResult != null) {
                pendingResult.finish();
            }
        } catch (Throwable th2) {
            if (pendingResult != null) {
                pendingResult.finish();
            }
            throw th2;
        }
    }

    @Override // android.content.BroadcastReceiver
    public final void onReceive(final Context context, final Intent intent) {
        if (intent == null) {
            return;
        }
        final boolean isOrderedBroadcast = isOrderedBroadcast();
        final BroadcastReceiver.PendingResult goAsync = goAsync();
        a().execute(new Runnable() { // from class: df.k
            @Override // java.lang.Runnable
            public final void run() {
                a.this.d(intent, context, isOrderedBroadcast, goAsync);
            }
        });
    }
}
