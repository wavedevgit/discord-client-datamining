package io.sentry.cache;

import io.sentry.Hint;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.UncaughtExceptionHandlerIntegration;
import io.sentry.a1;
import io.sentry.b1;
import io.sentry.i5;
import io.sentry.k7;
import io.sentry.l5;
import io.sentry.l6;
import io.sentry.util.y;
import io.sentry.v6;
import io.sentry.x7;
import io.sentry.z7;
import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FilenameFilter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.Map;
import java.util.WeakHashMap;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f extends c implements g {

    /* renamed from: q  reason: collision with root package name */
    private final CountDownLatch f27989q;

    /* renamed from: r  reason: collision with root package name */
    private final Map f27990r;

    /* renamed from: s  reason: collision with root package name */
    protected final io.sentry.util.a f27991s;

    /* renamed from: t  reason: collision with root package name */
    protected final io.sentry.util.a f27992t;

    public f(k7 k7Var, String str, int i10) {
        super(k7Var, str, i10);
        this.f27990r = new WeakHashMap();
        this.f27991s = new io.sentry.util.a();
        this.f27992t = new io.sentry.util.a();
        this.f27989q = new CountDownLatch(1);
    }

    public static File A(String str) {
        return new File(str, "previous_session.json");
    }

    private boolean C(l5 l5Var, Hint hint) {
        y.c(l5Var, "Envelope is required.");
        p(t());
        File w10 = w(this.f27986i.getAbsolutePath());
        File A = A(this.f27986i.getAbsolutePath());
        if (io.sentry.util.n.h(hint, io.sentry.hints.l.class) && !w10.delete()) {
            this.f27984d.getLogger().c(SentryLevel.WARNING, "Current envelope doesn't exist.", new Object[0]);
        }
        if (io.sentry.util.n.h(hint, io.sentry.hints.a.class)) {
            D(hint);
        }
        if (io.sentry.util.n.h(hint, io.sentry.hints.n.class)) {
            B(w10, A);
            E(w10, l5Var);
            boolean exists = new File(this.f27984d.getCacheDirPath(), ".sentry-native/last_crash").exists();
            if (!exists) {
                File file = new File(this.f27984d.getCacheDirPath(), "last_crash");
                if (file.exists()) {
                    this.f27984d.getLogger().c(SentryLevel.INFO, "Crash marker file exists, crashedLastRun will return true.", new Object[0]);
                    if (!file.delete()) {
                        this.f27984d.getLogger().c(SentryLevel.ERROR, "Failed to delete the crash marker file. %s.", file.getAbsolutePath());
                    }
                    exists = true;
                }
            }
            i5.a().c(exists);
            v();
        }
        File x10 = x(l5Var);
        if (x10.exists()) {
            this.f27984d.getLogger().c(SentryLevel.WARNING, "Not adding Envelope to offline storage because it already exists: %s", x10.getAbsolutePath());
            return true;
        }
        this.f27984d.getLogger().c(SentryLevel.DEBUG, "Adding Envelope to offline storage: %s", x10.getAbsolutePath());
        boolean H = H(x10, l5Var);
        if (io.sentry.util.n.h(hint, UncaughtExceptionHandlerIntegration.a.class)) {
            G();
        }
        return H;
    }

    private void D(Hint hint) {
        Date date;
        Object g10 = io.sentry.util.n.g(hint);
        if (g10 instanceof io.sentry.hints.a) {
            File A = A(this.f27986i.getAbsolutePath());
            if (A.exists()) {
                ILogger logger = this.f27984d.getLogger();
                SentryLevel sentryLevel = SentryLevel.WARNING;
                logger.c(sentryLevel, "Previous session is not ended, we'd need to end it.", new Object[0]);
                try {
                    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream(A), c.f27983p));
                    z7 z7Var = (z7) ((b1) this.f27985e.a()).c(bufferedReader, z7.class);
                    if (z7Var != null) {
                        io.sentry.hints.a aVar = (io.sentry.hints.a) g10;
                        Long e10 = aVar.e();
                        if (e10 != null) {
                            date = io.sentry.k.e(e10.longValue());
                            Date k10 = z7Var.k();
                            if (k10 != null) {
                                if (date.before(k10)) {
                                }
                            }
                            this.f27984d.getLogger().c(sentryLevel, "Abnormal exit happened before previous session start, not ending the session.", new Object[0]);
                        } else {
                            date = null;
                        }
                        z7Var.q(z7.b.Abnormal, null, true, aVar.h());
                        z7Var.d(date);
                        K(A, z7Var);
                    }
                    bufferedReader.close();
                    return;
                } catch (Throwable th2) {
                    this.f27984d.getLogger().b(SentryLevel.ERROR, "Error processing previous session.", th2);
                    return;
                }
            }
            this.f27984d.getLogger().c(SentryLevel.DEBUG, "No previous session file to end.", new Object[0]);
        }
    }

    private void E(File file, l5 l5Var) {
        Iterable c10 = l5Var.c();
        if (c10.iterator().hasNext()) {
            l6 l6Var = (l6) c10.iterator().next();
            if (v6.Session.equals(l6Var.K().b())) {
                try {
                    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new ByteArrayInputStream(l6Var.I()), c.f27983p));
                    z7 z7Var = (z7) ((b1) this.f27985e.a()).c(bufferedReader, z7.class);
                    if (z7Var == null) {
                        this.f27984d.getLogger().c(SentryLevel.ERROR, "Item of type %s returned null by the parser.", l6Var.K().b());
                    } else {
                        K(file, z7Var);
                    }
                    bufferedReader.close();
                    return;
                } catch (Throwable th2) {
                    this.f27984d.getLogger().b(SentryLevel.ERROR, "Item failed to process.", th2);
                    return;
                }
            }
            this.f27984d.getLogger().c(SentryLevel.INFO, "Current envelope has a different envelope type %s", l6Var.K().b());
            return;
        }
        this.f27984d.getLogger().c(SentryLevel.INFO, "Current envelope %s is empty", file.getAbsolutePath());
    }

    private void G() {
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(new File(this.f27984d.getCacheDirPath(), "last_crash"));
            fileOutputStream.write(io.sentry.k.h(io.sentry.k.d()).getBytes(c.f27983p));
            fileOutputStream.flush();
            fileOutputStream.close();
        } catch (Throwable th2) {
            this.f27984d.getLogger().b(SentryLevel.ERROR, "Error writing the crash marker file to the disk", th2);
        }
    }

    private boolean H(File file, l5 l5Var) {
        if (file.exists()) {
            this.f27984d.getLogger().c(SentryLevel.DEBUG, "Overwriting envelope to offline storage: %s", file.getAbsolutePath());
            if (!file.delete()) {
                this.f27984d.getLogger().c(SentryLevel.ERROR, "Failed to delete: %s", file.getAbsolutePath());
            }
        }
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            ((b1) this.f27985e.a()).b(l5Var, fileOutputStream);
            fileOutputStream.close();
            return true;
        } catch (Throwable th2) {
            this.f27984d.getLogger().a(SentryLevel.ERROR, th2, "Error writing Envelope %s to offline storage", file.getAbsolutePath());
            return false;
        }
    }

    private void K(File file, z7 z7Var) {
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(fileOutputStream, c.f27983p));
            try {
                this.f27984d.getLogger().c(SentryLevel.DEBUG, "Overwriting session to offline storage: %s", z7Var.j());
                ((b1) this.f27985e.a()).a(z7Var, bufferedWriter);
                bufferedWriter.close();
                fileOutputStream.close();
            } catch (Throwable th2) {
                try {
                    bufferedWriter.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        } catch (Throwable th4) {
            this.f27984d.getLogger().a(SentryLevel.ERROR, th4, "Error writing Session to offline storage: %s", z7Var.j());
        }
    }

    private File[] t() {
        File[] listFiles;
        if (f() && (listFiles = this.f27986i.listFiles(new FilenameFilter() { // from class: io.sentry.cache.e
            @Override // java.io.FilenameFilter
            public final boolean accept(File file, String str) {
                boolean endsWith;
                endsWith = str.endsWith(".envelope");
                return endsWith;
            }
        })) != null) {
            return listFiles;
        }
        return new File[0];
    }

    public static g u(k7 k7Var) {
        String cacheDirPath = k7Var.getCacheDirPath();
        int maxCacheItems = k7Var.getMaxCacheItems();
        if (cacheDirPath == null) {
            k7Var.getLogger().c(SentryLevel.WARNING, "cacheDirPath is null, returning NoOpEnvelopeCache", new Object[0]);
            return io.sentry.transport.s.b();
        }
        return new f(k7Var, cacheDirPath, maxCacheItems);
    }

    public static File w(String str) {
        return new File(str, "session.json");
    }

    private File x(l5 l5Var) {
        String str;
        a1 a10 = this.f27991s.a();
        try {
            if (this.f27990r.containsKey(l5Var)) {
                str = (String) this.f27990r.get(l5Var);
            } else {
                String str2 = x7.a() + ".envelope";
                this.f27990r.put(l5Var, str2);
                str = str2;
            }
            File file = new File(this.f27986i.getAbsolutePath(), str);
            if (a10 != null) {
                a10.close();
            }
            return file;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public void B(File file, File file2) {
        a1 a10 = this.f27992t.a();
        try {
            if (file2.exists()) {
                this.f27984d.getLogger().c(SentryLevel.DEBUG, "Previous session file already exists, deleting it.", new Object[0]);
                if (!file2.delete()) {
                    this.f27984d.getLogger().c(SentryLevel.WARNING, "Unable to delete previous session file: %s", file2);
                }
            }
            if (file.exists()) {
                this.f27984d.getLogger().c(SentryLevel.INFO, "Moving current session to previous session.", new Object[0]);
                if (!file.renameTo(file2)) {
                    this.f27984d.getLogger().c(SentryLevel.WARNING, "Unable to move current session to previous session.", new Object[0]);
                }
            }
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public boolean F() {
        try {
            return this.f27989q.await(this.f27984d.getSessionFlushTimeoutMillis(), TimeUnit.MILLISECONDS);
        } catch (InterruptedException unused) {
            Thread.currentThread().interrupt();
            this.f27984d.getLogger().c(SentryLevel.DEBUG, "Timed out waiting for previous session to flush.", new Object[0]);
            return false;
        }
    }

    @Override // io.sentry.cache.g
    public void I(l5 l5Var) {
        y.c(l5Var, "Envelope is required.");
        File x10 = x(l5Var);
        if (x10.delete()) {
            this.f27984d.getLogger().c(SentryLevel.DEBUG, "Discarding envelope from cache: %s", x10.getAbsolutePath());
        } else {
            this.f27984d.getLogger().c(SentryLevel.DEBUG, "Envelope was not cached or could not be deleted: %s", x10.getAbsolutePath());
        }
    }

    public boolean K0(l5 l5Var, Hint hint) {
        return C(l5Var, hint);
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        File[] t10 = t();
        ArrayList arrayList = new ArrayList(t10.length);
        for (File file : t10) {
            try {
                BufferedInputStream bufferedInputStream = new BufferedInputStream(new FileInputStream(file));
                try {
                    arrayList.add(((b1) this.f27985e.a()).d(bufferedInputStream));
                    bufferedInputStream.close();
                } catch (Throwable th2) {
                    try {
                        bufferedInputStream.close();
                    } catch (Throwable th3) {
                        th2.addSuppressed(th3);
                    }
                    throw th2;
                    break;
                }
            } catch (FileNotFoundException unused) {
                this.f27984d.getLogger().c(SentryLevel.DEBUG, "Envelope file '%s' disappeared while converting all cached files to envelopes.", file.getAbsolutePath());
            } catch (IOException e10) {
                this.f27984d.getLogger().b(SentryLevel.ERROR, String.format("Error while reading cached envelope from file %s", file.getAbsolutePath()), e10);
            }
        }
        return arrayList.iterator();
    }

    public void v() {
        this.f27989q.countDown();
    }
}
