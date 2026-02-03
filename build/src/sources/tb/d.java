package tb;

import android.content.Context;
import android.util.Log;
import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import tb.c;
import ub.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    protected final Set f49863a;

    /* renamed from: b  reason: collision with root package name */
    protected final c.b f49864b;

    /* renamed from: c  reason: collision with root package name */
    protected final c.a f49865c;

    /* renamed from: d  reason: collision with root package name */
    protected boolean f49866d;

    /* renamed from: e  reason: collision with root package name */
    protected boolean f49867e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Context f49868d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f49869e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f49870i;

        a(Context context, String str, String str2, c.InterfaceC0620c interfaceC0620c) {
            this.f49868d = context;
            this.f49869e = str;
            this.f49870i = str2;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                d.this.g(this.f49868d, this.f49869e, this.f49870i);
                throw null;
            } catch (UnsatisfiedLinkError unused) {
                throw null;
            } catch (tb.b unused2) {
                throw null;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements FilenameFilter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ String f49872a;

        b(String str) {
            this.f49872a = str;
        }

        @Override // java.io.FilenameFilter
        public boolean accept(File file, String str) {
            return str.startsWith(this.f49872a);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public d() {
        this(new e(), new tb.a());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void g(Context context, String str, String str2) {
        d dVar;
        Context context2;
        i iVar;
        if (this.f49863a.contains(str) && !this.f49866d) {
            i("%s already loaded previously!", str);
            return;
        }
        try {
            this.f49864b.a(str);
            this.f49863a.add(str);
            i("%s (%s) was loaded normally!", str, str2);
        } catch (UnsatisfiedLinkError e10) {
            i("Loading the library normally failed: %s", Log.getStackTraceString(e10));
            i("%s (%s) was not loaded normally, re-linking...", str, str2);
            File d10 = d(context, str, str2);
            if (d10.exists() && !this.f49866d) {
                dVar = this;
                context2 = context;
            } else {
                if (this.f49866d) {
                    i("Forcing a re-link of %s (%s)...", str, str2);
                }
                b(context, str, str2);
                dVar = this;
                context2 = context;
                this.f49865c.a(context2, this.f49864b.d(), this.f49864b.b(str), d10, dVar);
            }
            try {
                if (dVar.f49867e) {
                    try {
                        iVar = new i(d10);
                        try {
                            List<String> l10 = iVar.l();
                            iVar.close();
                            for (String str3 : l10) {
                                e(context2, dVar.f49864b.c(str3));
                            }
                        } catch (Throwable th2) {
                            th = th2;
                            Throwable th3 = th;
                            if (iVar != null) {
                                iVar.close();
                            }
                            throw th3;
                        }
                    } catch (Throwable th4) {
                        th = th4;
                        iVar = null;
                    }
                }
            } catch (IOException unused) {
            }
            dVar.f49864b.e(d10.getAbsolutePath());
            dVar.f49863a.add(str);
            i("%s (%s) was re-linked!", str, str2);
        }
    }

    protected void b(Context context, String str, String str2) {
        File c10 = c(context);
        File d10 = d(context, str, str2);
        File[] listFiles = c10.listFiles(new b(this.f49864b.b(str)));
        if (listFiles != null) {
            for (File file : listFiles) {
                if (this.f49866d || !file.getAbsolutePath().equals(d10.getAbsolutePath())) {
                    file.delete();
                }
            }
        }
    }

    protected File c(Context context) {
        return context.getDir("lib", 0);
    }

    protected File d(Context context, String str, String str2) {
        String b10 = this.f49864b.b(str);
        if (f.a(str2)) {
            return new File(c(context), b10);
        }
        File c10 = c(context);
        return new File(c10, b10 + "." + str2);
    }

    public void e(Context context, String str) {
        f(context, str, null, null);
    }

    public void f(Context context, String str, String str2, c.InterfaceC0620c interfaceC0620c) {
        if (context != null) {
            if (!f.a(str)) {
                i("Beginning load of %s...", str);
                if (interfaceC0620c == null) {
                    g(context, str, str2);
                    return;
                } else {
                    new Thread(new a(context, str, str2, interfaceC0620c)).start();
                    return;
                }
            }
            throw new IllegalArgumentException("Given library is either null or empty");
        }
        throw new IllegalArgumentException("Given context is null");
    }

    public void i(String str, Object... objArr) {
        h(String.format(Locale.US, str, objArr));
    }

    public d j() {
        this.f49867e = true;
        return this;
    }

    protected d(c.b bVar, c.a aVar) {
        this.f49863a = new HashSet();
        if (bVar == null) {
            throw new IllegalArgumentException("Cannot pass null library loader");
        }
        if (aVar != null) {
            this.f49864b = bVar;
            this.f49865c = aVar;
            return;
        }
        throw new IllegalArgumentException("Cannot pass null library installer");
    }

    public void h(String str) {
    }
}
