package r1;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Typeface;
import android.os.CancellationSignal;
import android.os.ParcelFileDescriptor;
import android.system.ErrnoException;
import android.system.Os;
import android.system.OsConstants;
import android.util.Log;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.lang.reflect.Array;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import q1.g;
import z1.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class l extends r {

    /* renamed from: b  reason: collision with root package name */
    private static Class f48468b = null;

    /* renamed from: c  reason: collision with root package name */
    private static Constructor f48469c = null;

    /* renamed from: d  reason: collision with root package name */
    private static Method f48470d = null;

    /* renamed from: e  reason: collision with root package name */
    private static Method f48471e = null;

    /* renamed from: f  reason: collision with root package name */
    private static boolean f48472f = false;

    private static boolean i(Object obj, String str, int i10, boolean z10) {
        l();
        try {
            return ((Boolean) f48470d.invoke(obj, str, Integer.valueOf(i10), Boolean.valueOf(z10))).booleanValue();
        } catch (IllegalAccessException | InvocationTargetException e10) {
            throw new RuntimeException(e10);
        }
    }

    private static Typeface j(Object obj) {
        l();
        try {
            Object newInstance = Array.newInstance(f48468b, 1);
            Array.set(newInstance, 0, obj);
            return (Typeface) f48471e.invoke(null, newInstance);
        } catch (IllegalAccessException | InvocationTargetException e10) {
            throw new RuntimeException(e10);
        }
    }

    private File k(ParcelFileDescriptor parcelFileDescriptor) {
        try {
            String readlink = Os.readlink("/proc/self/fd/" + parcelFileDescriptor.getFd());
            if (OsConstants.S_ISREG(Os.stat(readlink).st_mode)) {
                return new File(readlink);
            }
        } catch (ErrnoException unused) {
        }
        return null;
    }

    private static void l() {
        Method method;
        Class<?> cls;
        Method method2;
        if (f48472f) {
            return;
        }
        f48472f = true;
        Constructor<?> constructor = null;
        try {
            cls = Class.forName("android.graphics.FontFamily");
            Constructor<?> constructor2 = cls.getConstructor(null);
            method2 = cls.getMethod("addFontWeightStyle", String.class, Integer.TYPE, Boolean.TYPE);
            method = Typeface.class.getMethod("createFromFamiliesWithDefault", Array.newInstance(cls, 1).getClass());
            constructor = constructor2;
        } catch (ClassNotFoundException | NoSuchMethodException e10) {
            Log.e("TypefaceCompatApi21Impl", e10.getClass().getName(), e10);
            method = null;
            cls = null;
            method2 = null;
        }
        f48469c = constructor;
        f48468b = cls;
        f48470d = method2;
        f48471e = method;
    }

    private static Object m() {
        l();
        try {
            return f48469c.newInstance(null);
        } catch (IllegalAccessException | InstantiationException | InvocationTargetException e10) {
            throw new RuntimeException(e10);
        }
    }

    @Override // r1.r
    public Typeface a(Context context, g.c cVar, Resources resources, int i10) {
        g.d[] a10;
        Object m10 = m();
        for (g.d dVar : cVar.a()) {
            File e10 = s.e(context);
            if (e10 == null) {
                return null;
            }
            try {
                if (!s.c(e10, resources, dVar.b())) {
                    return null;
                }
                if (!i(m10, e10.getPath(), dVar.e(), dVar.f())) {
                    return null;
                }
                e10.delete();
            } catch (RuntimeException unused) {
                return null;
            } finally {
                e10.delete();
            }
        }
        return j(m10);
    }

    @Override // r1.r
    public Typeface b(Context context, CancellationSignal cancellationSignal, g.b[] bVarArr, int i10) {
        Typeface d10;
        if (bVarArr.length < 1) {
            return null;
        }
        g.b h10 = h(bVarArr, i10);
        try {
            ParcelFileDescriptor openFileDescriptor = context.getContentResolver().openFileDescriptor(h10.e(), "r", cancellationSignal);
            if (openFileDescriptor == null) {
                if (openFileDescriptor != null) {
                    openFileDescriptor.close();
                }
                return null;
            }
            File k10 = k(openFileDescriptor);
            if (k10 != null && k10.canRead()) {
                d10 = Typeface.createFromFile(k10);
                openFileDescriptor.close();
                return d10;
            }
            FileInputStream fileInputStream = new FileInputStream(openFileDescriptor.getFileDescriptor());
            d10 = super.d(context, fileInputStream);
            fileInputStream.close();
            openFileDescriptor.close();
            return d10;
        } catch (IOException unused) {
            return null;
        }
    }
}
