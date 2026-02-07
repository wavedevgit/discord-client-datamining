package u5;

import android.content.Context;
import android.util.Pair;
import java.io.Closeable;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.zip.GZIPInputStream;
import java.util.zip.ZipInputStream;
import l5.b0;
import l5.i;
import l5.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final g f51292a;

    /* renamed from: b  reason: collision with root package name */
    private final f f51293b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f51294a;

        static {
            int[] iArr = new int[c.values().length];
            f51294a = iArr;
            try {
                iArr[c.ZIP.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f51294a[c.GZIP.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    public h(g gVar, f fVar) {
        this.f51292a = gVar;
        this.f51293b = fVar;
    }

    private i a(Context context, String str, String str2) {
        g gVar;
        Pair a10;
        b0 C;
        if (str2 == null || (gVar = this.f51292a) == null || (a10 = gVar.a(str)) == null) {
            return null;
        }
        InputStream inputStream = (InputStream) a10.second;
        int i10 = a.f51294a[((c) a10.first).ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                C = s.q(inputStream, str2);
            } else {
                try {
                    C = s.q(new GZIPInputStream(inputStream), str2);
                } catch (IOException e10) {
                    C = new b0((Throwable) e10);
                }
            }
        } else {
            C = s.C(context, new ZipInputStream(inputStream), str2);
        }
        if (C.b() != null) {
            return (i) C.b();
        }
        return null;
    }

    private b0 b(Context context, String str, String str2) {
        b0 b0Var;
        boolean z10;
        x5.d.a("Fetching " + str);
        Closeable closeable = null;
        try {
            try {
                d a10 = this.f51293b.a(str);
                if (a10.isSuccessful()) {
                    b0Var = e(context, str, a10.x0(), a10.p0(), str2);
                    StringBuilder sb2 = new StringBuilder();
                    sb2.append("Completed fetch from network. Success: ");
                    if (b0Var.b() != null) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    sb2.append(z10);
                    x5.d.a(sb2.toString());
                } else {
                    b0Var = new b0((Throwable) new IllegalArgumentException(a10.F1()));
                }
                try {
                    a10.close();
                    return b0Var;
                } catch (IOException e10) {
                    x5.d.d("LottieFetchResult close failed ", e10);
                    return b0Var;
                }
            } catch (Exception e11) {
                b0 b0Var2 = new b0((Throwable) e11);
                if (0 != 0) {
                    try {
                        closeable.close();
                    } catch (IOException e12) {
                        x5.d.d("LottieFetchResult close failed ", e12);
                    }
                }
                return b0Var2;
            }
        } catch (Throwable th2) {
            if (0 != 0) {
                try {
                    closeable.close();
                } catch (IOException e13) {
                    x5.d.d("LottieFetchResult close failed ", e13);
                }
            }
            throw th2;
        }
    }

    private b0 d(String str, InputStream inputStream, String str2) {
        g gVar;
        if (str2 != null && (gVar = this.f51292a) != null) {
            return s.q(new GZIPInputStream(new FileInputStream(gVar.g(str, inputStream, c.GZIP))), str);
        }
        return s.q(new GZIPInputStream(inputStream), null);
    }

    private b0 e(Context context, String str, InputStream inputStream, String str2, String str3) {
        b0 g10;
        c cVar;
        g gVar;
        if (str2 == null) {
            str2 = "application/json";
        }
        if (!str2.contains("application/zip") && !str2.contains("application/x-zip") && !str2.contains("application/x-zip-compressed") && !str.split("\\?")[0].endsWith(".lottie")) {
            if (!str2.contains("application/gzip") && !str2.contains("application/x-gzip") && !str.split("\\?")[0].endsWith(".tgs")) {
                x5.d.a("Received json response.");
                cVar = c.JSON;
                g10 = f(str, inputStream, str3);
            } else {
                x5.d.a("Handling gzip response.");
                cVar = c.GZIP;
                g10 = d(str, inputStream, str3);
            }
        } else {
            x5.d.a("Handling zip response.");
            c cVar2 = c.ZIP;
            g10 = g(context, str, inputStream, str3);
            cVar = cVar2;
        }
        if (str3 != null && g10.b() != null && (gVar = this.f51292a) != null) {
            gVar.f(str, cVar);
        }
        return g10;
    }

    private b0 f(String str, InputStream inputStream, String str2) {
        g gVar;
        if (str2 != null && (gVar = this.f51292a) != null) {
            return s.q(new FileInputStream(gVar.g(str, inputStream, c.JSON).getAbsolutePath()), str);
        }
        return s.q(inputStream, null);
    }

    private b0 g(Context context, String str, InputStream inputStream, String str2) {
        g gVar;
        if (str2 != null && (gVar = this.f51292a) != null) {
            return s.C(context, new ZipInputStream(new FileInputStream(gVar.g(str, inputStream, c.ZIP))), str);
        }
        return s.C(context, new ZipInputStream(inputStream), null);
    }

    public b0 c(Context context, String str, String str2) {
        i a10 = a(context, str, str2);
        if (a10 != null) {
            return new b0(a10);
        }
        x5.d.a("Animation for " + str + " not found in cache. Fetching from network.");
        return b(context, str, str2);
    }
}
