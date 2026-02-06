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
    protected static final Charset f27935p = Charset.forName("UTF-8");

    /* renamed from: d  reason: collision with root package name */
    protected k7 f27936d;

    /* renamed from: e  reason: collision with root package name */
    protected final io.sentry.util.r f27937e = new io.sentry.util.r(new r.a() { // from class: io.sentry.cache.a
        @Override // io.sentry.util.r.a
        public final Object a() {
            b1 serializer;
            serializer = c.this.f27936d.getSerializer();
            return serializer;
        }
    });

    /* renamed from: i  reason: collision with root package name */
    protected final File f27938i;

    /* renamed from: o  reason: collision with root package name */
    private final int f27939o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(k7 k7Var, String str, int i10) {
        y.c(str, "Directory is required.");
        this.f27936d = (k7) y.c(k7Var, "SentryOptions is required.");
        this.f27938i = new File(str);
        this.f27939o = i10;
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
                return o(l6Var);
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
        l5 l10;
        l6 l6Var;
        z7 o10;
        l5 l11 = l(file);
        if (l11 != null && h(l11)) {
            this.f27936d.getClientReportRecorder().b(io.sentry.clientreport.f.CACHE_OVERFLOW, l11);
            z7 e10 = e(l11);
            if (e10 != null && i(e10) && (g10 = e10.g()) != null && g10.booleanValue()) {
                int length = fileArr.length;
                for (i10 = 0; i10 < length; i10++) {
                    file2 = fileArr[i10];
                    l10 = l(file2);
                    if (l10 != null && h(l10)) {
                        Iterator it = l10.c().iterator();
                        while (true) {
                            l6Var = null;
                            if (!it.hasNext()) {
                                break;
                            }
                            l6 l6Var2 = (l6) it.next();
                            if (g(l6Var2) && (o10 = o(l6Var2)) != null && i(o10)) {
                                Boolean g11 = o10.g();
                                if (g11 != null && g11.booleanValue()) {
                                    this.f27936d.getLogger().c(SentryLevel.ERROR, "Session %s has 2 times the init flag.", e10.j());
                                    return;
                                } else if (e10.j() != null && e10.j().equals(o10.j())) {
                                    o10.n();
                                    try {
                                        l6Var = l6.G((b1) this.f27937e.a(), o10);
                                        it.remove();
                                        break;
                                    } catch (IOException e11) {
                                        this.f27936d.getLogger().a(SentryLevel.ERROR, e11, "Failed to create new envelope item for the session %s", e10.j());
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
            l5 d10 = d(l10, l6Var);
            long lastModified = file2.lastModified();
            if (!file2.delete()) {
                this.f27936d.getLogger().c(SentryLevel.WARNING, "File can't be deleted: %s", file2.getAbsolutePath());
            }
            q(d10, file2, lastModified);
            return;
        }
    }

    private l5 l(File file) {
        try {
            BufferedInputStream bufferedInputStream = new BufferedInputStream(new FileInputStream(file));
            l5 d10 = ((b1) this.f27937e.a()).d(bufferedInputStream);
            bufferedInputStream.close();
            return d10;
        } catch (IOException e10) {
            this.f27936d.getLogger().b(SentryLevel.ERROR, "Failed to deserialize the envelope.", e10);
            return null;
        }
    }

    private z7 o(l6 l6Var) {
        try {
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new ByteArrayInputStream(l6Var.I()), f27935p));
            z7 z7Var = (z7) ((b1) this.f27937e.a()).c(bufferedReader, z7.class);
            bufferedReader.close();
            return z7Var;
        } catch (Throwable th2) {
            this.f27936d.getLogger().b(SentryLevel.ERROR, "Failed to deserialize the session.", th2);
            return null;
        }
    }

    private void q(l5 l5Var, File file, long j10) {
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            ((b1) this.f27937e.a()).b(l5Var, fileOutputStream);
            file.setLastModified(j10);
            fileOutputStream.close();
        } catch (Throwable th2) {
            this.f27936d.getLogger().b(SentryLevel.ERROR, "Failed to serialize the new envelope to the disk.", th2);
        }
    }

    private void r(File[] fileArr) {
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
        if (this.f27938i.isDirectory() && this.f27938i.canWrite() && this.f27938i.canRead()) {
            return true;
        }
        this.f27936d.getLogger().c(SentryLevel.ERROR, "The directory for caching files is inaccessible.: %s", this.f27938i.getAbsolutePath());
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void p(File[] fileArr) {
        int length = fileArr.length;
        if (length >= this.f27939o) {
            this.f27936d.getLogger().c(SentryLevel.WARNING, "Cache folder if full (respecting maxSize). Rotating files", new Object[0]);
            int i10 = (length - this.f27939o) + 1;
            r(fileArr);
            File[] fileArr2 = (File[]) Arrays.copyOfRange(fileArr, i10, length);
            for (int i11 = 0; i11 < i10; i11++) {
                File file = fileArr[i11];
                j(file, fileArr2);
                if (!file.delete()) {
                    this.f27936d.getLogger().c(SentryLevel.WARNING, "File can't be deleted: %s", file.getAbsolutePath());
                }
            }
        }
    }
}
