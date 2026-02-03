package com.google.android.gms.common.api.internal;

import android.os.Looper;
import android.os.Message;
import android.util.Log;
import android.util.Pair;
import androidx.annotation.NonNull;
import com.google.android.gms.common.annotation.KeepName;
import com.google.android.gms.common.api.Status;
import com.google.errorprone.annotations.ResultIgnorabilityUnspecified;
import ef.e;
import ef.g;
import ef.k;
import fg.h;
import gf.q;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;
@KeepName
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class BasePendingResult<R extends k> extends g {
    static final ThreadLocal zaa = new b();
    @NonNull
    protected final a zab;
    @NonNull
    protected final WeakReference zac;
    private k zaj;
    private Status zak;
    private volatile boolean zal;
    private boolean zam;
    private boolean zan;
    private final Object zae = new Object();
    private final CountDownLatch zaf = new CountDownLatch(1);
    private final ArrayList zag = new ArrayList();
    private final AtomicReference zai = new AtomicReference();
    private boolean zaq = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends h {
        public a(Looper looper) {
            super(looper);
        }

        @Override // android.os.Handler
        public final void handleMessage(Message message) {
            int i10 = message.what;
            if (i10 != 1) {
                if (i10 != 2) {
                    Log.wtf("BasePendingResult", "Don't know how to handle message: " + i10, new Exception());
                    return;
                }
                ((BasePendingResult) message.obj).forceFailureUnlessReady(Status.f13389t);
                return;
            }
            Pair pair = (Pair) message.obj;
            android.support.v4.media.session.b.a(pair.first);
            k kVar = (k) pair.second;
            try {
                throw null;
            } catch (RuntimeException e10) {
                BasePendingResult.zal(kVar);
                throw e10;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public BasePendingResult(e eVar) {
        Looper mainLooper;
        if (eVar != null) {
            mainLooper = eVar.c();
        } else {
            mainLooper = Looper.getMainLooper();
        }
        this.zab = new a(mainLooper);
        this.zac = new WeakReference(eVar);
    }

    private final k b() {
        k kVar;
        synchronized (this.zae) {
            q.o(!this.zal, "Result has already been consumed.");
            q.o(isReady(), "Result is not ready.");
            kVar = this.zaj;
            this.zaj = null;
            this.zal = true;
        }
        android.support.v4.media.session.b.a(this.zai.getAndSet(null));
        return (k) q.l(kVar);
    }

    private final void c(k kVar) {
        this.zaj = kVar;
        this.zak = kVar.a();
        this.zaf.countDown();
        ArrayList arrayList = this.zag;
        int size = arrayList.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((g.a) arrayList.get(i10)).a(this.zak);
        }
        this.zag.clear();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract k a(Status status);

    @Override // ef.g
    public final void addStatusListener(@NonNull g.a aVar) {
        boolean z10;
        if (aVar != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        q.b(z10, "Callback cannot be null.");
        synchronized (this.zae) {
            try {
                if (isReady()) {
                    aVar.a(this.zak);
                } else {
                    this.zag.add(aVar);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // ef.g
    @NonNull
    @ResultIgnorabilityUnspecified
    public final R await(long j10, @NonNull TimeUnit timeUnit) {
        if (j10 > 0) {
            q.k("await must not be called on the UI thread when time is greater than zero.");
        }
        q.o(!this.zal, "Result has already been consumed.");
        q.o(true, "Cannot await if then() has been called.");
        try {
            if (!this.zaf.await(j10, timeUnit)) {
                forceFailureUnlessReady(Status.f13389t);
            }
        } catch (InterruptedException unused) {
            forceFailureUnlessReady(Status.f13387r);
        }
        q.o(isReady(), "Result is not ready.");
        return (R) b();
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Deprecated
    public final void forceFailureUnlessReady(@NonNull Status status) {
        synchronized (this.zae) {
            try {
                if (!isReady()) {
                    setResult(a(status));
                    this.zan = true;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean isReady() {
        if (this.zaf.getCount() == 0) {
            return true;
        }
        return false;
    }

    public final void setResult(@NonNull R r10) {
        synchronized (this.zae) {
            try {
                if (!this.zan && !this.zam) {
                    isReady();
                    q.o(!isReady(), "Results have already been set");
                    q.o(!this.zal, "Result has already been consumed");
                    c(r10);
                    return;
                }
                zal(r10);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void zak() {
        boolean z10 = true;
        if (!this.zaq && !((Boolean) zaa.get()).booleanValue()) {
            z10 = false;
        }
        this.zaq = z10;
    }

    public static void zal(k kVar) {
    }
}
