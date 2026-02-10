package v5;

import android.content.Context;
import android.util.Pair;
import java.io.Closeable;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.zip.GZIPInputStream;
import java.util.zip.ZipInputStream;
import l5.c0;
import l5.i;
import l5.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final g f52152a;

    /* renamed from: b  reason: collision with root package name */
    private final f f52153b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f52154a;

        static {
            int[] iArr = new int[c.values().length];
            f52154a = iArr;
            try {
                iArr[c.ZIP.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f52154a[c.GZIP.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    public h(g gVar, f fVar) {
        this.f52152a = gVar;
        this.f52153b = fVar;
    }

    private i a(Context context, String str, String str2) {
        g gVar;
        Pair a10;
        c0 E;
        if (str2 == null || (gVar = this.f52152a) == null || (a10 = gVar.a(str)) == null) {
            return null;
        }
        InputStream inputStream = (InputStream) a10.second;
        int i10 = a.f52154a[((c) a10.first).ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                E = s.q(inputStream, str2);
            } else {
                try {
                    E = s.q(new GZIPInputStream(inputStream), str2);
                } catch (IOException e10) {
                    E = new c0((Throwable) e10);
                }
            }
        } else {
            E = s.E(context, new ZipInputStream(inputStream), str2);
        }
        if (E.b() != null) {
            return (i) E.b();
        }
        return null;
    }

    private c0 b(Context context, String str, String str2) {
        c0 c0Var;
        boolean z10;
        y5.d.a("Fetching " + str);
        Closeable closeable = null;
        try {
            try {
                d a10 = this.f52153b.a(str);
                if (a10.isSuccessful()) {
                    c0Var = e(context, str, a10.v0(), a10.p0(), str2);
                    StringBuilder sb2 = new StringBuilder();
                    sb2.append("Completed fetch from network. Success: ");
                    if (c0Var.b() != null) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    sb2.append(z10);
                    y5.d.a(sb2.toString());
                } else {
                    c0Var = new c0((Throwable) new IllegalArgumentException(a10.B1()));
                }
                try {
                    a10.close();
                    return c0Var;
                } catch (IOException e10) {
                    y5.d.d("LottieFetchResult close failed ", e10);
                    return c0Var;
                }
            } catch (Exception e11) {
                c0 c0Var2 = new c0((Throwable) e11);
                if (0 != 0) {
                    try {
                        closeable.close();
                    } catch (IOException e12) {
                        y5.d.d("LottieFetchResult close failed ", e12);
                    }
                }
                return c0Var2;
            }
        } catch (Throwable th2) {
            if (0 != 0) {
                try {
                    closeable.close();
                } catch (IOException e13) {
                    y5.d.d("LottieFetchResult close failed ", e13);
                }
            }
            throw th2;
        }
    }

    private c0 d(String str, InputStream inputStream, String str2) {
        g gVar;
        if (str2 != null && (gVar = this.f52152a) != null) {
            return s.q(new GZIPInputStream(new FileInputStream(gVar.g(str, inputStream, c.GZIP))), str);
        }
        return s.q(new GZIPInputStream(inputStream), null);
    }

    private c0 e(Context context, String str, InputStream inputStream, String str2, String str3) {
        c0 g10;
        c cVar;
        g gVar;
        if (str2 == null) {
            str2 = "application/json";
        }
        if (!str2.contains("application/zip") && !str2.contains("application/x-zip") && !str2.contains("application/x-zip-compressed") && !str.split("\\?")[0].endsWith(".lottie")) {
            if (!str2.contains("application/gzip") && !str2.contains("application/x-gzip") && !str.split("\\?")[0].endsWith(".tgs")) {
                y5.d.a("Received json response.");
                cVar = c.JSON;
                g10 = f(str, inputStream, str3);
            } else {
                y5.d.a("Handling gzip response.");
                cVar = c.GZIP;
                g10 = d(str, inputStream, str3);
            }
        } else {
            y5.d.a("Handling zip response.");
            c cVar2 = c.ZIP;
            g10 = g(context, str, inputStream, str3);
            cVar = cVar2;
        }
        if (str3 != null && g10.b() != null && (gVar = this.f52152a) != null) {
            gVar.f(str, cVar);
        }
        return g10;
    }

    private c0 f(String str, InputStream inputStream, String str2) {
        g gVar;
        if (str2 != null && (gVar = this.f52152a) != null) {
            return s.q(new FileInputStream(gVar.g(str, inputStream, c.JSON).getAbsolutePath()), str);
        }
        return s.q(inputStream, null);
    }

    private c0 g(Context context, String str, InputStream inputStream, String str2) {
        g gVar;
        if (str2 != null && (gVar = this.f52152a) != null) {
            return s.E(context, new ZipInputStream(new FileInputStream(gVar.g(str, inputStream, c.ZIP))), str);
        }
        return s.E(context, new ZipInputStream(inputStream), null);
    }

    public c0 c(Context context, String str, String str2) {
        i a10 = a(context, str, str2);
        if (a10 != null) {
            return new c0(a10);
        }
        y5.d.a("Animation for " + str + " not found in cache. Fetching from network.");
        return b(context, str, str2);
    }
}
