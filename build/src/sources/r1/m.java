package r1;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Typeface;
import android.net.Uri;
import android.os.CancellationSignal;
import android.util.Log;
import androidx.collection.SimpleArrayMap;
import java.lang.reflect.Array;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.nio.ByteBuffer;
import java.util.List;
import q1.g;
import z1.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class m extends r {

    /* renamed from: b  reason: collision with root package name */
    private static final Class f48341b;

    /* renamed from: c  reason: collision with root package name */
    private static final Constructor f48342c;

    /* renamed from: d  reason: collision with root package name */
    private static final Method f48343d;

    /* renamed from: e  reason: collision with root package name */
    private static final Method f48344e;

    static {
        Class<?> cls;
        Method method;
        Method method2;
        Constructor<?> constructor = null;
        try {
            cls = Class.forName("android.graphics.FontFamily");
            Constructor<?> constructor2 = cls.getConstructor(null);
            Class cls2 = Integer.TYPE;
            method2 = cls.getMethod("addFontWeightStyle", ByteBuffer.class, cls2, List.class, cls2, Boolean.TYPE);
            method = Typeface.class.getMethod("createFromFamiliesWithDefault", Array.newInstance(cls, 1).getClass());
            constructor = constructor2;
        } catch (ClassNotFoundException | NoSuchMethodException e10) {
            Log.e("TypefaceCompatApi24Impl", e10.getClass().getName(), e10);
            cls = null;
            method = null;
            method2 = null;
        }
        f48342c = constructor;
        f48341b = cls;
        f48343d = method2;
        f48344e = method;
    }

    private static boolean i(Object obj, ByteBuffer byteBuffer, int i10, int i11, boolean z10) {
        try {
            return ((Boolean) f48343d.invoke(obj, byteBuffer, Integer.valueOf(i10), null, Integer.valueOf(i11), Boolean.valueOf(z10))).booleanValue();
        } catch (IllegalAccessException | InvocationTargetException unused) {
            return false;
        }
    }

    private static Typeface j(Object obj) {
        try {
            Object newInstance = Array.newInstance(f48341b, 1);
            Array.set(newInstance, 0, obj);
            return (Typeface) f48344e.invoke(null, newInstance);
        } catch (IllegalAccessException | InvocationTargetException unused) {
            return null;
        }
    }

    public static boolean k() {
        Method method = f48343d;
        if (method == null) {
            Log.w("TypefaceCompatApi24Impl", "Unable to collect necessary private methods.Fallback to legacy implementation.");
        }
        if (method != null) {
            return true;
        }
        return false;
    }

    private static Object l() {
        try {
            return f48342c.newInstance(null);
        } catch (IllegalAccessException | InstantiationException | InvocationTargetException unused) {
            return null;
        }
    }

    @Override // r1.r
    public Typeface a(Context context, g.c cVar, Resources resources, int i10) {
        g.d[] a10;
        Object l10 = l();
        if (l10 == null) {
            return null;
        }
        for (g.d dVar : cVar.a()) {
            ByteBuffer b10 = s.b(context, resources, dVar.b());
            if (b10 == null || !i(l10, b10, dVar.c(), dVar.e(), dVar.f())) {
                return null;
            }
        }
        return j(l10);
    }

    @Override // r1.r
    public Typeface b(Context context, CancellationSignal cancellationSignal, g.b[] bVarArr, int i10) {
        Object l10 = l();
        if (l10 == null) {
            return null;
        }
        SimpleArrayMap simpleArrayMap = new SimpleArrayMap();
        for (g.b bVar : bVarArr) {
            Uri e10 = bVar.e();
            ByteBuffer byteBuffer = (ByteBuffer) simpleArrayMap.get(e10);
            if (byteBuffer == null) {
                byteBuffer = s.f(context, cancellationSignal, e10);
                simpleArrayMap.put(e10, byteBuffer);
            }
            if (byteBuffer == null || !i(l10, byteBuffer, bVar.d(), bVar.g(), bVar.h())) {
                return null;
            }
        }
        Typeface j10 = j(l10);
        if (j10 == null) {
            return null;
        }
        return Typeface.create(j10, i10);
    }
}
