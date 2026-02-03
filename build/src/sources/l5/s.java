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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class s {

    /* renamed from: a  reason: collision with root package name */
    private static final Map f36563a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private static final Set f36564b = new HashSet();

    /* renamed from: c  reason: collision with root package name */
    private static final byte[] f36565c = {80, 75, 3, 4};

    /* renamed from: d  reason: collision with root package name */
    private static final byte[] f36566d = {31, -117, 8};

    public static com.airbnb.lottie.o A(final Context context, final ZipInputStream zipInputStream, final String str) {
        return j(str, new Callable() { // from class: l5.n
            @Override // java.util.concurrent.Callable
            public final Object call() {
                b0 C;
                C = s.C(context, zipInputStream, str);
                return C;
            }
        }, new Runnable() { // from class: l5.o
            @Override // java.lang.Runnable
            public final void run() {
                x5.j.c(zipInputStream);
            }
        });
    }

    public static com.airbnb.lottie.o B(ZipInputStream zipInputStream, String str) {
        return A(null, zipInputStream, str);
    }

    public static b0 C(Context context, ZipInputStream zipInputStream, String str) {
        return D(context, zipInputStream, str, true);
    }

    public static b0 D(Context context, ZipInputStream zipInputStream, String str, boolean z10) {
        try {
            return E(context, zipInputStream, str);
        } finally {
            if (z10) {
                x5.j.c(zipInputStream);
            }
        }
    }

    private static b0 E(Context context, ZipInputStream zipInputStream, String str) {
        i a10;
        HashMap hashMap = new HashMap();
        HashMap hashMap2 = new HashMap();
        if (str == null) {
            a10 = null;
        } else {
            try {
                a10 = q5.g.b().a(str);
            } catch (IOException e10) {
                return new b0((Throwable) e10);
            }
        }
        if (a10 != null) {
            return new b0(a10);
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
                iVar = (i) t(w5.c.l(lu.x.d(lu.x.k(zipInputStream))), null, false).b();
            } else {
                if (!name.contains(".png") && !name.contains(".webp") && !name.contains(".jpg") && !name.contains(".jpeg")) {
                    if (!name.contains(".ttf") && !name.contains(".otf")) {
                        zipInputStream.closeEntry();
                    }
                    String[] split = name.split("/");
                    String str2 = split[split.length - 1];
                    String str3 = str2.split("\\.")[0];
                    File file = new File(context.getCacheDir(), str2);
                    new FileOutputStream(file);
                    FileOutputStream fileOutputStream = new FileOutputStream(file);
                    byte[] bArr = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
                    while (true) {
                        int read = zipInputStream.read(bArr);
                        if (read == -1) {
                            break;
                        }
                        fileOutputStream.write(bArr, 0, read);
                    }
                    fileOutputStream.flush();
                    fileOutputStream.close();
                    Typeface createFromFile = Typeface.createFromFile(file);
                    if (!file.delete()) {
                        x5.d.c("Failed to delete temp font file " + file.getAbsolutePath() + ".");
                    }
                    hashMap2.put(str3, createFromFile);
                }
                String[] split2 = name.split("/");
                hashMap.put(split2[split2.length - 1], BitmapFactory.decodeStream(zipInputStream));
            }
            nextEntry = zipInputStream.getNextEntry();
        }
        if (iVar == null) {
            return new b0((Throwable) new IllegalArgumentException("Unable to parse composition"));
        }
        for (Map.Entry entry : hashMap.entrySet()) {
            w k10 = k(iVar, (String) entry.getKey());
            if (k10 != null) {
                k10.g(x5.j.l((Bitmap) entry.getValue(), k10.f(), k10.d()));
            }
        }
        for (Map.Entry entry2 : hashMap2.entrySet()) {
            boolean z10 = false;
            for (q5.c cVar : iVar.g().values()) {
                if (cVar.a().equals(entry2.getKey())) {
                    cVar.e((Typeface) entry2.getValue());
                    z10 = true;
                }
            }
            if (!z10) {
                x5.d.c("Parsed font for " + ((String) entry2.getKey()) + " however it was not found in the animation.");
            }
        }
        if (hashMap.isEmpty()) {
            for (Map.Entry entry3 : iVar.j().entrySet()) {
                w wVar = (w) entry3.getValue();
                if (wVar == null) {
                    return null;
                }
                String c10 = wVar.c();
                BitmapFactory.Options options = new BitmapFactory.Options();
                options.inScaled = true;
                options.inDensity = 160;
                if (c10.startsWith("data:") && c10.indexOf("base64,") > 0) {
                    try {
                        byte[] decode = Base64.decode(c10.substring(c10.indexOf(44) + 1), 0);
                        wVar.g(BitmapFactory.decodeByteArray(decode, 0, decode.length, options));
                    } catch (IllegalArgumentException e11) {
                        x5.d.d("data URL did not have correct base64 format.", e11);
                        return null;
                    }
                }
            }
        }
        if (str != null) {
            q5.g.b().c(str, iVar);
        }
        return new b0(iVar);
    }

    private static Boolean F(BufferedSource bufferedSource) {
        return I(bufferedSource, f36566d);
    }

    private static boolean G(Context context) {
        if ((context.getResources().getConfiguration().uiMode & 48) == 32) {
            return true;
        }
        return false;
    }

    private static Boolean H(BufferedSource bufferedSource) {
        return I(bufferedSource, f36565c);
    }

    private static Boolean I(BufferedSource bufferedSource, byte[] bArr) {
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
            x5.d.b("Failed to check zip file header", e10);
            return Boolean.FALSE;
        } catch (NoSuchMethodError unused) {
            return Boolean.FALSE;
        }
    }

    private static void J(boolean z10) {
        ArrayList arrayList = new ArrayList(f36564b);
        if (arrayList.size() <= 0) {
            return;
        }
        android.support.v4.media.session.b.a(arrayList.get(0));
        throw null;
    }

    private static String K(Context context, int i10) {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("rawRes");
        if (G(context)) {
            str = "_night_";
        } else {
            str = "_day_";
        }
        sb2.append(str);
        sb2.append(i10);
        return sb2.toString();
    }

    public static /* synthetic */ b0 a(WeakReference weakReference, Context context, int i10, String str) {
        Context context2 = (Context) weakReference.get();
        if (context2 != null) {
            context = context2;
        }
        return x(context, i10, str);
    }

    public static /* synthetic */ b0 b(Context context, String str, String str2) {
        b0 c10 = e.h(context).c(context, str, str2);
        if (str2 != null && c10.b() != null) {
            q5.g.b().c(str2, (i) c10.b());
        }
        return c10;
    }

    public static /* synthetic */ void e(String str, AtomicBoolean atomicBoolean, i iVar) {
        Map map = f36563a;
        map.remove(str);
        atomicBoolean.set(true);
        if (map.size() == 0) {
            J(true);
        }
    }

    public static /* synthetic */ void f(String str, AtomicBoolean atomicBoolean, Throwable th2) {
        Map map = f36563a;
        map.remove(str);
        atomicBoolean.set(true);
        if (map.size() == 0) {
            J(true);
        }
    }

    private static com.airbnb.lottie.o j(final String str, Callable callable, Runnable runnable) {
        i a10;
        com.airbnb.lottie.o oVar = null;
        if (str == null) {
            a10 = null;
        } else {
            a10 = q5.g.b().a(str);
        }
        if (a10 != null) {
            oVar = new com.airbnb.lottie.o(a10);
        }
        if (str != null) {
            Map map = f36563a;
            if (map.containsKey(str)) {
                oVar = (com.airbnb.lottie.o) map.get(str);
            }
        }
        if (oVar != null) {
            if (runnable != null) {
                runnable.run();
            }
            return oVar;
        }
        com.airbnb.lottie.o oVar2 = new com.airbnb.lottie.o(callable);
        if (str != null) {
            final AtomicBoolean atomicBoolean = new AtomicBoolean(false);
            oVar2.d(new x() { // from class: l5.p
                @Override // l5.x
                public final void onResult(Object obj) {
                    s.e(str, atomicBoolean, (i) obj);
                }
            });
            oVar2.c(new x() { // from class: l5.q
                @Override // l5.x
                public final void onResult(Object obj) {
                    s.f(str, atomicBoolean, (Throwable) obj);
                }
            });
            if (!atomicBoolean.get()) {
                Map map2 = f36563a;
                map2.put(str, oVar2);
                if (map2.size() == 1) {
                    J(false);
                }
            }
        }
        return oVar2;
    }

    private static w k(i iVar, String str) {
        for (w wVar : iVar.j().values()) {
            if (wVar.c().equals(str)) {
                return wVar;
            }
        }
        return null;
    }

    public static com.airbnb.lottie.o l(Context context, String str) {
        return m(context, str, "asset_" + str);
    }

    public static com.airbnb.lottie.o m(Context context, final String str, final String str2) {
        final Context applicationContext = context.getApplicationContext();
        return j(str2, new Callable() { // from class: l5.m
            @Override // java.util.concurrent.Callable
            public final Object call() {
                b0 o10;
                o10 = s.o(applicationContext, str, str2);
                return o10;
            }
        }, null);
    }

    public static b0 n(Context context, String str) {
        return o(context, str, "asset_" + str);
    }

    public static b0 o(Context context, String str, String str2) {
        i a10;
        if (str2 == null) {
            a10 = null;
        } else {
            a10 = q5.g.b().a(str2);
        }
        if (a10 != null) {
            return new b0(a10);
        }
        try {
            BufferedSource d10 = lu.x.d(lu.x.k(context.getAssets().open(str)));
            if (H(d10).booleanValue()) {
                return C(context, new ZipInputStream(d10.n2()), str2);
            }
            if (F(d10).booleanValue()) {
                return q(new GZIPInputStream(d10.n2()), str2);
            }
            return q(d10.n2(), str2);
        } catch (IOException e10) {
            return new b0((Throwable) e10);
        }
    }

    public static com.airbnb.lottie.o p(final InputStream inputStream, final String str) {
        return j(str, new Callable() { // from class: l5.k
            @Override // java.util.concurrent.Callable
            public final Object call() {
                b0 q10;
                q10 = s.q(inputStream, str);
                return q10;
            }
        }, new Runnable() { // from class: l5.l
            @Override // java.lang.Runnable
            public final void run() {
                x5.j.c(inputStream);
            }
        });
    }

    public static b0 q(InputStream inputStream, String str) {
        return r(inputStream, str, true);
    }

    public static b0 r(InputStream inputStream, String str, boolean z10) {
        return s(w5.c.l(lu.x.d(lu.x.k(inputStream))), str, z10);
    }

    public static b0 s(w5.c cVar, String str, boolean z10) {
        return t(cVar, str, z10);
    }

    private static b0 t(w5.c cVar, String str, boolean z10) {
        i a10;
        try {
            if (str == null) {
                a10 = null;
            } else {
                try {
                    a10 = q5.g.b().a(str);
                } catch (Exception e10) {
                    b0 b0Var = new b0((Throwable) e10);
                    if (z10) {
                        x5.j.c(cVar);
                    }
                    return b0Var;
                }
            }
            if (a10 != null) {
                b0 b0Var2 = new b0(a10);
                if (z10) {
                    x5.j.c(cVar);
                }
                return b0Var2;
            }
            i a11 = v5.w.a(cVar);
            if (str != null) {
                q5.g.b().c(str, a11);
            }
            b0 b0Var3 = new b0(a11);
            if (z10) {
                x5.j.c(cVar);
            }
            return b0Var3;
        } catch (Throwable th2) {
            if (z10) {
                x5.j.c(cVar);
            }
            throw th2;
        }
    }

    public static com.airbnb.lottie.o u(Context context, int i10) {
        return v(context, i10, K(context, i10));
    }

    public static com.airbnb.lottie.o v(Context context, final int i10, final String str) {
        final WeakReference weakReference = new WeakReference(context);
        final Context applicationContext = context.getApplicationContext();
        return j(str, new Callable() { // from class: l5.r
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return s.a(weakReference, applicationContext, i10, str);
            }
        }, null);
    }

    public static b0 w(Context context, int i10) {
        return x(context, i10, K(context, i10));
    }

    public static b0 x(Context context, int i10, String str) {
        i a10;
        if (str == null) {
            a10 = null;
        } else {
            a10 = q5.g.b().a(str);
        }
        if (a10 != null) {
            return new b0(a10);
        }
        try {
            BufferedSource d10 = lu.x.d(lu.x.k(context.getResources().openRawResource(i10)));
            if (H(d10).booleanValue()) {
                return C(context, new ZipInputStream(d10.n2()), str);
            }
            if (F(d10).booleanValue()) {
                try {
                    return q(new GZIPInputStream(d10.n2()), str);
                } catch (IOException e10) {
                    return new b0((Throwable) e10);
                }
            }
            return q(d10.n2(), str);
        } catch (Resources.NotFoundException e11) {
            return new b0((Throwable) e11);
        }
    }

    public static com.airbnb.lottie.o y(Context context, String str) {
        return z(context, str, "url_" + str);
    }

    public static com.airbnb.lottie.o z(final Context context, final String str, final String str2) {
        return j(str2, new Callable() { // from class: l5.j
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return s.b(context, str, str2);
            }
        }, null);
    }
}
