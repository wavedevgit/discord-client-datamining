package l5;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Typeface;
import android.util.Base64;
import androidx.recyclerview.widget.RecyclerView;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.zip.GZIPInputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import okio.BufferedSource;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class s {

    /* renamed from: a  reason: collision with root package name */
    private static final Map f35666a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private static final Set f35667b = new HashSet();

    /* renamed from: c  reason: collision with root package name */
    private static final byte[] f35668c = {80, 75, 3, 4};

    /* renamed from: d  reason: collision with root package name */
    private static final byte[] f35669d = {31, -117, 8};

    public static com.airbnb.lottie.p A(Context context, String str) {
        return B(context, str, "url_" + str);
    }

    public static com.airbnb.lottie.p B(final Context context, final String str, final String str2) {
        return j(str2, new Callable() { // from class: l5.j
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return s.b(context, str, str2);
            }
        }, null);
    }

    public static com.airbnb.lottie.p C(final Context context, final ZipInputStream zipInputStream, final String str) {
        return j(str, new Callable() { // from class: l5.n
            @Override // java.util.concurrent.Callable
            public final Object call() {
                c0 E;
                E = s.E(context, zipInputStream, str);
                return E;
            }
        }, new Runnable() { // from class: l5.o
            @Override // java.lang.Runnable
            public final void run() {
                y5.j.c(zipInputStream);
            }
        });
    }

    public static com.airbnb.lottie.p D(ZipInputStream zipInputStream, String str) {
        return C(null, zipInputStream, str);
    }

    public static c0 E(Context context, ZipInputStream zipInputStream, String str) {
        return F(context, zipInputStream, str, true);
    }

    public static c0 F(Context context, ZipInputStream zipInputStream, String str, boolean z10) {
        try {
            return G(context, zipInputStream, str);
        } finally {
            if (z10) {
                y5.j.c(zipInputStream);
            }
        }
    }

    private static c0 G(Context context, ZipInputStream zipInputStream, String str) {
        i a10;
        HashMap hashMap = new HashMap();
        HashMap hashMap2 = new HashMap();
        if (str == null) {
            a10 = null;
        } else {
            try {
                a10 = r5.g.b().a(str);
            } catch (IOException e10) {
                return new c0((Throwable) e10);
            }
        }
        if (a10 != null) {
            return new c0(a10);
        }
        ZipEntry nextEntry = zipInputStream.getNextEntry();
        i iVar = null;
        while (nextEntry != null) {
            String name = nextEntry.getName();
            if (name.contains("__MACOSX")) {
                zipInputStream.closeEntry();
            } else if (nextEntry.getName().equalsIgnoreCase("manifest.json")) {
                zipInputStream.closeEntry();
            } else if (nextEntry.getName().contains(".json")) {
                iVar = (i) u(x5.c.i(av.x.d(av.x.k(zipInputStream))), null, false).b();
            } else {
                if (!name.contains(".png") && !name.contains(".webp") && !name.contains(".jpg") && !name.contains(".jpeg")) {
                    if (!name.contains(".ttf") && !name.contains(".otf")) {
                        zipInputStream.closeEntry();
                    }
                    String[] split = name.split("/");
                    String str2 = split[split.length - 1];
                    String str3 = str2.split("\\.")[0];
                    if (context == null) {
                        return new c0((Throwable) new IllegalStateException("Unable to extract font " + str3 + " please pass a non-null Context parameter"));
                    }
                    File file = new File(context.getCacheDir(), str2);
                    FileOutputStream fileOutputStream = new FileOutputStream(file);
                    FileOutputStream fileOutputStream2 = new FileOutputStream(file);
                    try {
                        byte[] bArr = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
                        while (true) {
                            int read = zipInputStream.read(bArr);
                            if (read == -1) {
                                break;
                            }
                            fileOutputStream2.write(bArr, 0, read);
                        }
                        fileOutputStream2.flush();
                        fileOutputStream2.close();
                        fileOutputStream.close();
                        Typeface createFromFile = Typeface.createFromFile(file);
                        if (!file.delete()) {
                            y5.d.c("Failed to delete temp font file " + file.getAbsolutePath() + ".");
                        }
                        hashMap2.put(str3, createFromFile);
                    } finally {
                        try {
                            fileOutputStream2.close();
                        } catch (Throwable th2) {
                            th.addSuppressed(th2);
                        }
                    }
                }
                String[] split2 = name.split("/");
                hashMap.put(split2[split2.length - 1], BitmapFactory.decodeStream(zipInputStream));
            }
            nextEntry = zipInputStream.getNextEntry();
        }
        if (iVar == null) {
            return new c0((Throwable) new IllegalArgumentException("Unable to parse composition"));
        }
        for (Map.Entry entry : hashMap.entrySet()) {
            x k10 = k(iVar, (String) entry.getKey());
            if (k10 != null) {
                k10.g(y5.j.m((Bitmap) entry.getValue(), k10.f(), k10.d()));
            }
        }
        for (Map.Entry entry2 : hashMap2.entrySet()) {
            boolean z10 = false;
            for (r5.c cVar : iVar.g().values()) {
                if (cVar.a().equals(entry2.getKey())) {
                    cVar.e((Typeface) entry2.getValue());
                    z10 = true;
                }
            }
            if (!z10) {
                y5.d.c("Parsed font for " + ((String) entry2.getKey()) + " however it was not found in the animation.");
            }
        }
        if (hashMap.isEmpty()) {
            for (Map.Entry entry3 : iVar.j().entrySet()) {
                x xVar = (x) entry3.getValue();
                if (xVar == null) {
                    return null;
                }
                String c10 = xVar.c();
                BitmapFactory.Options options = new BitmapFactory.Options();
                options.inScaled = true;
                options.inDensity = 160;
                if (c10.startsWith("data:") && c10.indexOf("base64,") > 0) {
                    try {
                        byte[] decode = Base64.decode(c10.substring(c10.indexOf(44) + 1), 0);
                        xVar.g(y5.j.m(BitmapFactory.decodeByteArray(decode, 0, decode.length, options), xVar.f(), xVar.d()));
                    } catch (IllegalArgumentException e11) {
                        y5.d.d("data URL did not have correct base64 format.", e11);
                        return null;
                    }
                }
            }
        }
        if (str != null) {
            r5.g.b().c(str, iVar);
        }
        return new c0(iVar);
    }

    private static Boolean H(BufferedSource bufferedSource) {
        return K(bufferedSource, f35669d);
    }

    private static boolean I(Context context) {
        if ((context.getResources().getConfiguration().uiMode & 48) == 32) {
            return true;
        }
        return false;
    }

    private static Boolean J(BufferedSource bufferedSource) {
        return K(bufferedSource, f35668c);
    }

    private static Boolean K(BufferedSource bufferedSource, byte[] bArr) {
        try {
            BufferedSource peek = bufferedSource.peek();
            for (byte b10 : bArr) {
                if (peek.readByte() != b10) {
                    return Boolean.FALSE;
                }
            }
            peek.close();
            return Boolean.TRUE;
        } catch (Exception e10) {
            y5.d.b("Failed to check zip file header", e10);
            return Boolean.FALSE;
        } catch (NoSuchMethodError unused) {
            return Boolean.FALSE;
        }
    }

    private static void L(boolean z10) {
        ArrayList arrayList = new ArrayList(f35667b);
        if (arrayList.size() <= 0) {
            return;
        }
        android.support.v4.media.session.b.a(arrayList.get(0));
        throw null;
    }

    private static String M(Context context, int i10) {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("rawRes");
        if (I(context)) {
            str = "_night_";
        } else {
            str = "_day_";
        }
        sb2.append(str);
        sb2.append(i10);
        return sb2.toString();
    }

    public static /* synthetic */ c0 a(WeakReference weakReference, Context context, int i10, String str) {
        Context context2 = (Context) weakReference.get();
        if (context2 != null) {
            context = context2;
        }
        return z(context, i10, str);
    }

    public static /* synthetic */ c0 b(Context context, String str, String str2) {
        c0 c10 = e.j(context).c(context, str, str2);
        if (str2 != null && c10.b() != null) {
            r5.g.b().c(str2, (i) c10.b());
        }
        return c10;
    }

    public static /* synthetic */ void c(String str, AtomicBoolean atomicBoolean, i iVar) {
        Map map = f35666a;
        map.remove(str);
        atomicBoolean.set(true);
        if (map.size() == 0) {
            L(true);
        }
    }

    public static /* synthetic */ void e(String str, AtomicBoolean atomicBoolean, Throwable th2) {
        Map map = f35666a;
        map.remove(str);
        atomicBoolean.set(true);
        if (map.size() == 0) {
            L(true);
        }
    }

    private static com.airbnb.lottie.p j(final String str, Callable callable, Runnable runnable) {
        i a10;
        com.airbnb.lottie.p pVar = null;
        if (str == null) {
            a10 = null;
        } else {
            a10 = r5.g.b().a(str);
        }
        if (a10 != null) {
            pVar = new com.airbnb.lottie.p(a10);
        }
        if (str != null) {
            Map map = f35666a;
            if (map.containsKey(str)) {
                pVar = (com.airbnb.lottie.p) map.get(str);
            }
        }
        if (pVar != null) {
            if (runnable != null) {
                runnable.run();
            }
            return pVar;
        }
        com.airbnb.lottie.p pVar2 = new com.airbnb.lottie.p(callable);
        if (str != null) {
            final AtomicBoolean atomicBoolean = new AtomicBoolean(false);
            pVar2.d(new y() { // from class: l5.p
                @Override // l5.y
                public final void onResult(Object obj) {
                    s.c(str, atomicBoolean, (i) obj);
                }
            });
            pVar2.c(new y() { // from class: l5.q
                @Override // l5.y
                public final void onResult(Object obj) {
                    s.e(str, atomicBoolean, (Throwable) obj);
                }
            });
            if (!atomicBoolean.get()) {
                Map map2 = f35666a;
                map2.put(str, pVar2);
                if (map2.size() == 1) {
                    L(false);
                }
            }
        }
        return pVar2;
    }

    private static x k(i iVar, String str) {
        for (x xVar : iVar.j().values()) {
            if (xVar.c().equals(str)) {
                return xVar;
            }
        }
        return null;
    }

    public static com.airbnb.lottie.p l(Context context, String str) {
        return m(context, str, "asset_" + str);
    }

    public static com.airbnb.lottie.p m(Context context, final String str, final String str2) {
        final Context applicationContext = context.getApplicationContext();
        return j(str2, new Callable() { // from class: l5.m
            @Override // java.util.concurrent.Callable
            public final Object call() {
                c0 o10;
                o10 = s.o(applicationContext, str, str2);
                return o10;
            }
        }, null);
    }

    public static c0 n(Context context, String str) {
        return o(context, str, "asset_" + str);
    }

    public static c0 o(Context context, String str, String str2) {
        i a10;
        if (str2 == null) {
            a10 = null;
        } else {
            a10 = r5.g.b().a(str2);
        }
        if (a10 != null) {
            return new c0(a10);
        }
        try {
            BufferedSource d10 = av.x.d(av.x.k(context.getAssets().open(str)));
            if (J(d10).booleanValue()) {
                return E(context, new ZipInputStream(d10.s2()), str2);
            }
            if (H(d10).booleanValue()) {
                return q(new GZIPInputStream(d10.s2()), str2);
            }
            return s(x5.c.i(d10), str2);
        } catch (IOException e10) {
            return new c0((Throwable) e10);
        }
    }

    public static com.airbnb.lottie.p p(final InputStream inputStream, final String str) {
        return j(str, new Callable() { // from class: l5.k
            @Override // java.util.concurrent.Callable
            public final Object call() {
                c0 q10;
                q10 = s.q(inputStream, str);
                return q10;
            }
        }, new Runnable() { // from class: l5.l
            @Override // java.lang.Runnable
            public final void run() {
                y5.j.c(inputStream);
            }
        });
    }

    public static c0 q(InputStream inputStream, String str) {
        return r(inputStream, str, true);
    }

    public static c0 r(InputStream inputStream, String str, boolean z10) {
        return v(av.x.k(inputStream), str, z10);
    }

    public static c0 s(x5.c cVar, String str) {
        return t(cVar, str, true);
    }

    public static c0 t(x5.c cVar, String str, boolean z10) {
        return u(cVar, str, z10);
    }

    private static c0 u(x5.c cVar, String str, boolean z10) {
        i a10;
        try {
            if (str == null) {
                a10 = null;
            } else {
                try {
                    a10 = r5.g.b().a(str);
                } catch (Exception e10) {
                    c0 c0Var = new c0((Throwable) e10);
                    if (z10) {
                        y5.j.c(cVar);
                    }
                    return c0Var;
                }
            }
            if (a10 != null) {
                c0 c0Var2 = new c0(a10);
                if (z10) {
                    y5.j.c(cVar);
                }
                return c0Var2;
            }
            i a11 = w5.w.a(cVar);
            if (str != null) {
                r5.g.b().c(str, a11);
            }
            c0 c0Var3 = new c0(a11);
            if (z10) {
                y5.j.c(cVar);
            }
            return c0Var3;
        } catch (Throwable th2) {
            if (z10) {
                y5.j.c(cVar);
            }
            throw th2;
        }
    }

    public static c0 v(Source source, String str, boolean z10) {
        return u(x5.c.i(av.x.d(source)), str, z10);
    }

    public static com.airbnb.lottie.p w(Context context, int i10) {
        return x(context, i10, M(context, i10));
    }

    public static com.airbnb.lottie.p x(Context context, final int i10, final String str) {
        final WeakReference weakReference = new WeakReference(context);
        final Context applicationContext = context.getApplicationContext();
        return j(str, new Callable() { // from class: l5.r
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return s.a(weakReference, applicationContext, i10, str);
            }
        }, null);
    }

    public static c0 y(Context context, int i10) {
        return z(context, i10, M(context, i10));
    }

    public static c0 z(Context context, int i10, String str) {
        i a10;
        if (str == null) {
            a10 = null;
        } else {
            a10 = r5.g.b().a(str);
        }
        if (a10 != null) {
            return new c0(a10);
        }
        try {
            BufferedSource d10 = av.x.d(av.x.k(context.getResources().openRawResource(i10)));
            if (J(d10).booleanValue()) {
                return E(context, new ZipInputStream(d10.s2()), str);
            }
            if (H(d10).booleanValue()) {
                try {
                    return q(new GZIPInputStream(d10.s2()), str);
                } catch (IOException e10) {
                    return new c0((Throwable) e10);
                }
            }
            return s(x5.c.i(d10), str);
        } catch (Resources.NotFoundException e11) {
            return new c0((Throwable) e11);
        }
    }
}
