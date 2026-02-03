package io.sentry.cache;

import io.sentry.SentryLevel;
import io.sentry.b1;
import io.sentry.k7;
import io.sentry.l5;
import io.sentry.l6;
import io.sentry.util.r;
import io.sentry.util.y;
import io.sentry.v6;
import io.sentry.z7;
import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Iterator;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: p  reason: collision with root package name */
    protected static final Charset f29372p = Charset.forName("UTF-8");

    /* renamed from: d  reason: collision with root package name */
    protected k7 f29373d;

    /* renamed from: e  reason: collision with root package name */
    protected final io.sentry.util.r f29374e = new io.sentry.util.r(new r.a() { // from class: io.sentry.cache.a
        @Override // io.sentry.util.r.a
        public final Object a() {
            b1 serializer;
            serializer = c.this.f29373d.getSerializer();
            return serializer;
        }
    });

    /* renamed from: i  reason: collision with root package name */
    protected final File f29375i;

    /* renamed from: o  reason: collision with root package name */
    private final int f29376o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(k7 k7Var, String str, int i10) {
        y.c(str, "Directory is required.");
        this.f29373d = (k7) y.c(k7Var, "SentryOptions is required.");
        this.f29375i = new File(str);
        this.f29376o = i10;
    }

    private l5 d(l5 l5Var, l6 l6Var) {
        ArrayList arrayList = new ArrayList();
        for (l6 l6Var2 : l5Var.c()) {
            arrayList.add(l6Var2);
        }
        arrayList.add(l6Var);
        return new l5(l5Var.b(), arrayList);
    }

    private z7 e(l5 l5Var) {
        for (l6 l6Var : l5Var.c()) {
            if (g(l6Var)) {
                return m(l6Var);
            }
        }
        return null;
    }

    private boolean g(l6 l6Var) {
        if (l6Var == null) {
            return false;
        }
        return l6Var.K().b().equals(v6.Session);
    }

    private boolean h(l5 l5Var) {
        if (!l5Var.c().iterator().hasNext()) {
            return false;
        }
        return true;
    }

    private boolean i(z7 z7Var) {
        if (!z7Var.l().equals(z7.b.Ok) || z7Var.j() == null) {
            return false;
        }
        return true;
    }

    private void j(File file, File[] fileArr) {
        Boolean g10;
        int i10;
        File file2;
        l5 k10;
        l6 l6Var;
        z7 m10;
        l5 k11 = k(file);
        if (k11 != null && h(k11)) {
            this.f29373d.getClientReportRecorder().b(io.sentry.clientreport.f.CACHE_OVERFLOW, k11);
            z7 e10 = e(k11);
            if (e10 != null && i(e10) && (g10 = e10.g()) != null && g10.booleanValue()) {
                int length = fileArr.length;
                for (i10 = 0; i10 < length; i10++) {
                    file2 = fileArr[i10];
                    k10 = k(file2);
                    if (k10 != null && h(k10)) {
                        Iterator it = k10.c().iterator();
                        while (true) {
                            l6Var = null;
                            if (!it.hasNext()) {
                                break;
                            }
                            l6 l6Var2 = (l6) it.next();
                            if (g(l6Var2) && (m10 = m(l6Var2)) != null && i(m10)) {
                                Boolean g11 = m10.g();
                                if (g11 != null && g11.booleanValue()) {
                                    this.f29373d.getLogger().c(SentryLevel.ERROR, "Session %s has 2 times the init flag.", e10.j());
                                    return;
                                } else if (e10.j() != null && e10.j().equals(m10.j())) {
                                    m10.n();
                                    try {
                                        l6Var = l6.G((b1) this.f29374e.a(), m10);
                                        it.remove();
                                        break;
                                    } catch (IOException e11) {
                                        this.f29373d.getLogger().a(SentryLevel.ERROR, e11, "Failed to create new envelope item for the session %s", e10.j());
                                    }
                                }
                            }
                        }
                    }
                }
                return;
            }
            return;
        }
        return;
        if (l6Var != null) {
            l5 d10 = d(k10, l6Var);
            long lastModified = file2.lastModified();
            if (!file2.delete()) {
                this.f29373d.getLogger().c(SentryLevel.WARNING, "File can't be deleted: %s", file2.getAbsolutePath());
            }
            o(d10, file2, lastModified);
            return;
        }
    }

    private l5 k(File file) {
        try {
            BufferedInputStream bufferedInputStream = new BufferedInputStream(new FileInputStream(file));
            l5 d10 = ((b1) this.f29374e.a()).d(bufferedInputStream);
            bufferedInputStream.close();
            return d10;
        } catch (IOException e10) {
            this.f29373d.getLogger().b(SentryLevel.ERROR, "Failed to deserialize the envelope.", e10);
            return null;
        }
    }

    private z7 m(l6 l6Var) {
        try {
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new ByteArrayInputStream(l6Var.I()), f29372p));
            z7 z7Var = (z7) ((b1) this.f29374e.a()).c(bufferedReader, z7.class);
            bufferedReader.close();
            return z7Var;
        } catch (Throwable th2) {
            this.f29373d.getLogger().b(SentryLevel.ERROR, "Failed to deserialize the session.", th2);
            return null;
        }
    }

    private void o(l5 l5Var, File file, long j10) {
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            ((b1) this.f29374e.a()).b(l5Var, fileOutputStream);
            file.setLastModified(j10);
            fileOutputStream.close();
        } catch (Throwable th2) {
            this.f29373d.getLogger().b(SentryLevel.ERROR, "Failed to serialize the new envelope to the disk.", th2);
        }
    }

    private void p(File[] fileArr) {
        if (fileArr.length > 1) {
            Arrays.sort(fileArr, new Comparator() { // from class: io.sentry.cache.b
                @Override // java.util.Comparator
                public final int compare(Object obj, Object obj2) {
                    int compare;
                    compare = Long.compare(((File) obj).lastModified(), ((File) obj2).lastModified());
                    return compare;
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean f() {
        if (this.f29375i.isDirectory() && this.f29375i.canWrite() && this.f29375i.canRead()) {
            return true;
        }
        this.f29373d.getLogger().c(SentryLevel.ERROR, "The directory for caching files is inaccessible.: %s", this.f29375i.getAbsolutePath());
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void n(File[] fileArr) {
        int length = fileArr.length;
        if (length >= this.f29376o) {
            this.f29373d.getLogger().c(SentryLevel.WARNING, "Cache folder if full (respecting maxSize). Rotating files", new Object[0]);
            int i10 = (length - this.f29376o) + 1;
            p(fileArr);
            File[] fileArr2 = (File[]) Arrays.copyOfRange(fileArr, i10, length);
            for (int i11 = 0; i11 < i10; i11++) {
                File file = fileArr[i11];
                j(file, fileArr2);
                if (!file.delete()) {
                    this.f29373d.getLogger().c(SentryLevel.WARNING, "File can't be deleted: %s", file.getAbsolutePath());
                }
            }
        }
    }
}
