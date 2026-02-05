package io.sentry.android.core;

import android.annotation.SuppressLint;
import android.app.ActivityManager;
import android.app.ApplicationExitInfo;
import android.content.Context;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import io.sentry.Hint;
import io.sentry.ILogger;
import io.sentry.SentryEvent;
import io.sentry.SentryLevel;
import io.sentry.k7;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.Closeable;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.TimeUnit;
@SuppressLint({"NewApi"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class AnrV2Integration implements io.sentry.k1, Closeable {

    /* renamed from: o  reason: collision with root package name */
    static final long f27764o = TimeUnit.DAYS.toMillis(91);

    /* renamed from: d  reason: collision with root package name */
    private final Context f27765d;

    /* renamed from: e  reason: collision with root package name */
    private final io.sentry.transport.p f27766e;

    /* renamed from: i  reason: collision with root package name */
    private SentryAndroidOptions f27767i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final Context f27768d;

        /* renamed from: e  reason: collision with root package name */
        private final io.sentry.w0 f27769e;

        /* renamed from: i  reason: collision with root package name */
        private final SentryAndroidOptions f27770i;

        /* renamed from: o  reason: collision with root package name */
        private final long f27771o;

        a(Context context, io.sentry.w0 w0Var, SentryAndroidOptions sentryAndroidOptions, io.sentry.transport.p pVar) {
            this.f27768d = context;
            this.f27769e = w0Var;
            this.f27770i = sentryAndroidOptions;
            this.f27771o = pVar.a() - AnrV2Integration.f27764o;
        }

        private byte[] a(InputStream inputStream) {
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            try {
                byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                while (true) {
                    int read = inputStream.read(bArr, 0, IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
                    if (read != -1) {
                        byteArrayOutputStream.write(bArr, 0, read);
                    } else {
                        byte[] byteArray = byteArrayOutputStream.toByteArray();
                        byteArrayOutputStream.close();
                        return byteArray;
                    }
                }
            } catch (Throwable th2) {
                try {
                    byteArrayOutputStream.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        }

        private c b(ApplicationExitInfo applicationExitInfo, boolean z10) {
            try {
                InputStream traceInputStream = applicationExitInfo.getTraceInputStream();
                if (traceInputStream == null) {
                    c cVar = new c(c.a.NO_DUMP);
                    if (traceInputStream != null) {
                        traceInputStream.close();
                        return cVar;
                    }
                    return cVar;
                }
                byte[] a10 = a(traceInputStream);
                traceInputStream.close();
                try {
                    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new ByteArrayInputStream(a10)));
                    io.sentry.android.core.internal.threaddump.b c10 = io.sentry.android.core.internal.threaddump.b.c(bufferedReader);
                    io.sentry.android.core.internal.threaddump.c cVar2 = new io.sentry.android.core.internal.threaddump.c(this.f27770i, z10);
                    cVar2.i(c10);
                    List f10 = cVar2.f();
                    List c11 = cVar2.c();
                    if (f10.isEmpty()) {
                        c cVar3 = new c(c.a.NO_DUMP);
                        bufferedReader.close();
                        return cVar3;
                    }
                    c cVar4 = new c(c.a.DUMP, a10, f10, c11);
                    bufferedReader.close();
                    return cVar4;
                } catch (Throwable th2) {
                    this.f27770i.getLogger().b(SentryLevel.WARNING, "Failed to parse ANR thread dump", th2);
                    return new c(c.a.ERROR, a10);
                }
            } catch (Throwable th3) {
                this.f27770i.getLogger().b(SentryLevel.WARNING, "Failed to read ANR thread dump", th3);
                return new c(c.a.NO_DUMP);
            }
        }

        private void c(ApplicationExitInfo applicationExitInfo, boolean z10) {
            boolean z11;
            byte[] bArr;
            long timestamp = applicationExitInfo.getTimestamp();
            if (applicationExitInfo.getImportance() != 100) {
                z11 = true;
            } else {
                z11 = false;
            }
            boolean z12 = z11;
            c b10 = b(applicationExitInfo, z12);
            if (b10.f27775a == c.a.NO_DUMP) {
                this.f27770i.getLogger().c(SentryLevel.WARNING, "Not reporting ANR event as there was no thread dump for the ANR %s", applicationExitInfo.toString());
                return;
            }
            b bVar = new b(this.f27770i.getFlushTimeoutMillis(), this.f27770i.getLogger(), timestamp, z10, z12);
            Hint e10 = io.sentry.util.n.e(bVar);
            SentryEvent sentryEvent = new SentryEvent();
            c.a aVar = b10.f27775a;
            if (aVar == c.a.ERROR) {
                io.sentry.protocol.m mVar = new io.sentry.protocol.m();
                mVar.f("Sentry Android SDK failed to parse system thread dump for this ANR. We recommend enabling [SentryOptions.isAttachAnrThreadDump] option to attach the thread dump as plain text and report this issue on GitHub.");
                sentryEvent.F0(mVar);
            } else if (aVar == c.a.DUMP) {
                sentryEvent.H0(b10.f27777c);
                if (b10.f27778d != null) {
                    io.sentry.protocol.d dVar = new io.sentry.protocol.d();
                    dVar.e(b10.f27778d);
                    sentryEvent.U(dVar);
                }
            }
            sentryEvent.E0(SentryLevel.FATAL);
            sentryEvent.I0(io.sentry.k.e(timestamp));
            if (this.f27770i.isAttachAnrThreadDump() && (bArr = b10.f27776b) != null) {
                e10.n(io.sentry.b.b(bArr));
            }
            if (!this.f27769e.y(sentryEvent, e10).equals(io.sentry.protocol.x.f29471e) && !bVar.g()) {
                this.f27770i.getLogger().c(SentryLevel.WARNING, "Timed out waiting to flush ANR event to disk. Event: %s", sentryEvent.G());
            }
        }

        private void d(List list, Long l10) {
            Collections.reverse(list);
            for (Object obj : list) {
                ApplicationExitInfo a10 = q4.e.a(obj);
                if (a10.getReason() == 6) {
                    if (a10.getTimestamp() < this.f27771o) {
                        this.f27770i.getLogger().c(SentryLevel.DEBUG, "ANR happened too long ago %s.", a10);
                    } else if (l10 != null && a10.getTimestamp() <= l10.longValue()) {
                        this.f27770i.getLogger().c(SentryLevel.DEBUG, "ANR has already been reported %s.", a10);
                    } else {
                        c(a10, false);
                    }
                }
            }
        }

        @Override // java.lang.Runnable
        public void run() {
            ApplicationExitInfo applicationExitInfo = null;
            List<ApplicationExitInfo> historicalProcessExitReasons = ((ActivityManager) this.f27768d.getSystemService("activity")).getHistoricalProcessExitReasons(null, 0, 0);
            if (historicalProcessExitReasons.size() == 0) {
                this.f27770i.getLogger().c(SentryLevel.DEBUG, "No records in historical exit reasons.", new Object[0]);
                return;
            }
            io.sentry.cache.g envelopeDiskCache = this.f27770i.getEnvelopeDiskCache();
            if ((envelopeDiskCache instanceof io.sentry.cache.f) && this.f27770i.isEnableAutoSessionTracking()) {
                io.sentry.cache.f fVar = (io.sentry.cache.f) envelopeDiskCache;
                if (!fVar.C()) {
                    this.f27770i.getLogger().c(SentryLevel.WARNING, "Timed out waiting to flush previous session to its own file.", new Object[0]);
                    fVar.u();
                }
            }
            List arrayList = new ArrayList(historicalProcessExitReasons);
            Long M = io.sentry.android.core.cache.d.M(this.f27770i);
            Iterator it = arrayList.iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                }
                ApplicationExitInfo a10 = q4.e.a(it.next());
                if (a10.getReason() == 6) {
                    arrayList.remove(a10);
                    applicationExitInfo = a10;
                    break;
                }
            }
            if (applicationExitInfo == null) {
                this.f27770i.getLogger().c(SentryLevel.DEBUG, "No ANRs have been found in the historical exit reasons list.", new Object[0]);
            } else if (applicationExitInfo.getTimestamp() < this.f27771o) {
                this.f27770i.getLogger().c(SentryLevel.DEBUG, "Latest ANR happened too long ago, returning early.", new Object[0]);
            } else if (M != null && applicationExitInfo.getTimestamp() <= M.longValue()) {
                this.f27770i.getLogger().c(SentryLevel.DEBUG, "Latest ANR has already been reported, returning early.", new Object[0]);
            } else {
                if (this.f27770i.isReportHistoricalAnrs()) {
                    d(arrayList, M);
                }
                c(applicationExitInfo, true);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends io.sentry.hints.d implements io.sentry.hints.c, io.sentry.hints.a {

        /* renamed from: d  reason: collision with root package name */
        private final long f27772d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f27773e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f27774f;

        public b(long j10, ILogger iLogger, long j11, boolean z10, boolean z11) {
            super(j10, iLogger);
            this.f27772d = j11;
            this.f27773e = z10;
            this.f27774f = z11;
        }

        @Override // io.sentry.hints.c
        public boolean a() {
            return this.f27773e;
        }

        @Override // io.sentry.hints.f
        public boolean b(io.sentry.protocol.x xVar) {
            return true;
        }

        @Override // io.sentry.hints.f
        public void c(io.sentry.protocol.x xVar) {
        }

        @Override // io.sentry.hints.a
        public Long e() {
            return Long.valueOf(this.f27772d);
        }

        @Override // io.sentry.hints.a
        public boolean f() {
            return false;
        }

        @Override // io.sentry.hints.a
        public String h() {
            if (this.f27774f) {
                return "anr_background";
            }
            return "anr_foreground";
        }
    }

    public AnrV2Integration(Context context) {
        this(context, io.sentry.transport.n.b());
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        SentryAndroidOptions sentryAndroidOptions = this.f27767i;
        if (sentryAndroidOptions != null) {
            sentryAndroidOptions.getLogger().c(SentryLevel.DEBUG, "AnrV2Integration removed.", new Object[0]);
        }
    }

    @Override // io.sentry.k1
    public void h(io.sentry.w0 w0Var, k7 k7Var) {
        SentryAndroidOptions sentryAndroidOptions;
        if (k7Var instanceof SentryAndroidOptions) {
            sentryAndroidOptions = (SentryAndroidOptions) k7Var;
        } else {
            sentryAndroidOptions = null;
        }
        SentryAndroidOptions sentryAndroidOptions2 = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required");
        this.f27767i = sentryAndroidOptions2;
        sentryAndroidOptions2.getLogger().c(SentryLevel.DEBUG, "AnrIntegration enabled: %s", Boolean.valueOf(this.f27767i.isAnrEnabled()));
        if (this.f27767i.getCacheDirPath() == null) {
            this.f27767i.getLogger().c(SentryLevel.INFO, "Cache dir is not set, unable to process ANRs", new Object[0]);
        } else if (this.f27767i.isAnrEnabled()) {
            try {
                k7Var.getExecutorService().submit(new a(this.f27765d, w0Var, this.f27767i, this.f27766e));
            } catch (Throwable th2) {
                k7Var.getLogger().b(SentryLevel.DEBUG, "Failed to start AnrProcessor.", th2);
            }
            k7Var.getLogger().c(SentryLevel.DEBUG, "AnrV2Integration installed.", new Object[0]);
            io.sentry.util.p.a("AnrV2");
        }
    }

    AnrV2Integration(Context context, io.sentry.transport.p pVar) {
        this.f27765d = e1.g(context);
        this.f27766e = pVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        final a f27775a;

        /* renamed from: b  reason: collision with root package name */
        final byte[] f27776b;

        /* renamed from: c  reason: collision with root package name */
        final List f27777c;

        /* renamed from: d  reason: collision with root package name */
        final List f27778d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public enum a {
            DUMP,
            NO_DUMP,
            ERROR
        }

        c(a aVar) {
            this.f27775a = aVar;
            this.f27776b = null;
            this.f27777c = null;
            this.f27778d = null;
        }

        c(a aVar, byte[] bArr) {
            this.f27775a = aVar;
            this.f27776b = bArr;
            this.f27777c = null;
            this.f27778d = null;
        }

        c(a aVar, byte[] bArr, List list, List list2) {
            this.f27775a = aVar;
            this.f27776b = bArr;
            this.f27777c = list;
            this.f27778d = list2;
        }
    }
}
