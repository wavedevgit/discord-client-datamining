package r1;

import android.content.Context;
import android.content.res.AssetManager;
import android.content.res.Resources;
import android.graphics.Typeface;
import android.graphics.fonts.FontVariationAxis;
import android.os.CancellationSignal;
import android.os.ParcelFileDescriptor;
import android.util.Log;
import java.io.IOException;
import java.lang.reflect.Array;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.nio.ByteBuffer;
import java.util.List;
import java.util.Map;
import q1.g;
import z1.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends l {

    /* renamed from: g  reason: collision with root package name */
    protected final Class f48335g;

    /* renamed from: h  reason: collision with root package name */
    protected final Constructor f48336h;

    /* renamed from: i  reason: collision with root package name */
    protected final Method f48337i;

    /* renamed from: j  reason: collision with root package name */
    protected final Method f48338j;

    /* renamed from: k  reason: collision with root package name */
    protected final Method f48339k;

    /* renamed from: l  reason: collision with root package name */
    protected final Method f48340l;

    /* renamed from: m  reason: collision with root package name */
    protected final Method f48341m;

    public n() {
        Class cls;
        Constructor constructor;
        Method method;
        Method method2;
        Method method3;
        Method method4;
        Method method5;
        try {
            cls = w();
            constructor = x(cls);
            method = t(cls);
            method2 = u(cls);
            method3 = y(cls);
            method4 = s(cls);
            method5 = v(cls);
        } catch (ClassNotFoundException | NoSuchMethodException e10) {
            Log.e("TypefaceCompatApi26Impl", "Unable to collect necessary methods for class " + e10.getClass().getName(), e10);
            cls = null;
            constructor = null;
            method = null;
            method2 = null;
            method3 = null;
            method4 = null;
            method5 = null;
        }
        this.f48335g = cls;
        this.f48336h = constructor;
        this.f48337i = method;
        this.f48338j = method2;
        this.f48339k = method3;
        this.f48340l = method4;
        this.f48341m = method5;
    }

    private Object m() {
        try {
            return this.f48336h.newInstance(null);
        } catch (IllegalAccessException | InstantiationException | InvocationTargetException unused) {
            return null;
        }
    }

    private void n(Object obj) {
        try {
            this.f48340l.invoke(obj, null);
        } catch (IllegalAccessException | InvocationTargetException unused) {
        }
    }

    private boolean o(Context context, Object obj, String str, int i10, int i11, int i12, FontVariationAxis[] fontVariationAxisArr) {
        try {
            return ((Boolean) this.f48337i.invoke(obj, context.getAssets(), str, 0, Boolean.FALSE, Integer.valueOf(i10), Integer.valueOf(i11), Integer.valueOf(i12), fontVariationAxisArr)).booleanValue();
        } catch (IllegalAccessException | InvocationTargetException unused) {
            return false;
        }
    }

    private boolean p(Object obj, ByteBuffer byteBuffer, int i10, int i11, int i12) {
        try {
            return ((Boolean) this.f48338j.invoke(obj, byteBuffer, Integer.valueOf(i10), null, Integer.valueOf(i11), Integer.valueOf(i12))).booleanValue();
        } catch (IllegalAccessException | InvocationTargetException unused) {
            return false;
        }
    }

    private boolean q(Object obj) {
        try {
            return ((Boolean) this.f48339k.invoke(obj, null)).booleanValue();
        } catch (IllegalAccessException | InvocationTargetException unused) {
            return false;
        }
    }

    private boolean r() {
        if (this.f48337i == null) {
            Log.w("TypefaceCompatApi26Impl", "Unable to collect necessary private methods. Fallback to legacy implementation.");
        }
        if (this.f48337i != null) {
            return true;
        }
        return false;
    }

    @Override // r1.l, r1.r
    public Typeface a(Context context, g.c cVar, Resources resources, int i10) {
        if (!r()) {
            return super.a(context, cVar, resources, i10);
        }
        Object m10 = m();
        if (m10 == null) {
            return null;
        }
        g.d[] a10 = cVar.a();
        int length = a10.length;
        int i11 = 0;
        while (i11 < length) {
            g.d dVar = a10[i11];
            Context context2 = context;
            if (!o(context2, m10, dVar.a(), dVar.c(), dVar.e(), dVar.f() ? 1 : 0, FontVariationAxis.fromFontVariationSettings(dVar.d()))) {
                n(m10);
                return null;
            }
            i11++;
            context = context2;
        }
        if (!q(m10)) {
            return null;
        }
        return j(m10);
    }

    @Override // r1.l, r1.r
    public Typeface b(Context context, CancellationSignal cancellationSignal, g.b[] bVarArr, int i10) {
        Typeface j10;
        Object obj;
        if (bVarArr.length < 1) {
            return null;
        }
        if (!r()) {
            g.b h10 = h(bVarArr, i10);
            try {
                ParcelFileDescriptor openFileDescriptor = context.getContentResolver().openFileDescriptor(h10.e(), "r", cancellationSignal);
                if (openFileDescriptor == null) {
                    if (openFileDescriptor != null) {
                        openFileDescriptor.close();
                    }
                    return null;
                }
                Typeface build = new Typeface.Builder(openFileDescriptor.getFileDescriptor()).setWeight(h10.g()).setItalic(h10.h()).build();
                openFileDescriptor.close();
                return build;
            } catch (IOException unused) {
                return null;
            }
        }
        Map h11 = s.h(context, bVarArr, cancellationSignal);
        Object m10 = m();
        if (m10 == null) {
            return null;
        }
        int length = bVarArr.length;
        int i11 = 0;
        boolean z10 = false;
        while (i11 < length) {
            g.b bVar = bVarArr[i11];
            ByteBuffer byteBuffer = (ByteBuffer) h11.get(bVar.e());
            if (byteBuffer == null) {
                obj = m10;
            } else {
                boolean p10 = p(m10, byteBuffer, bVar.d(), bVar.g(), bVar.h() ? 1 : 0);
                obj = m10;
                if (!p10) {
                    n(obj);
                    return null;
                }
                z10 = true;
            }
            i11++;
            m10 = obj;
            z10 = z10;
        }
        Object obj2 = m10;
        if (!z10) {
            n(obj2);
            return null;
        } else if (!q(obj2) || (j10 = j(obj2)) == null) {
            return null;
        } else {
            return Typeface.create(j10, i10);
        }
    }

    @Override // r1.r
    public /* bridge */ /* synthetic */ Typeface c(Context context, CancellationSignal cancellationSignal, List list, int i10) {
        return super.c(context, cancellationSignal, list, i10);
    }

    @Override // r1.r
    public Typeface e(Context context, Resources resources, int i10, String str, int i11) {
        if (!r()) {
            return super.e(context, resources, i10, str, i11);
        }
        Object m10 = m();
        if (m10 == null) {
            return null;
        }
        if (!o(context, m10, str, 0, -1, -1, null)) {
            n(m10);
            return null;
        } else if (!q(m10)) {
            return null;
        } else {
            return j(m10);
        }
    }

    protected Typeface j(Object obj) {
        try {
            Object newInstance = Array.newInstance(this.f48335g, 1);
            Array.set(newInstance, 0, obj);
            return (Typeface) this.f48341m.invoke(null, newInstance, -1, -1);
        } catch (IllegalAccessException | InvocationTargetException unused) {
            return null;
        }
    }

    protected Method s(Class cls) {
        return cls.getMethod("abortCreation", null);
    }

    protected Method t(Class cls) {
        Class cls2 = Boolean.TYPE;
        Class cls3 = Integer.TYPE;
        return cls.getMethod("addFontFromAssetManager", AssetManager.class, String.class, cls3, cls2, cls3, cls3, cls3, FontVariationAxis[].class);
    }

    protected Method u(Class cls) {
        Class cls2 = Integer.TYPE;
        return cls.getMethod("addFontFromBuffer", ByteBuffer.class, cls2, FontVariationAxis[].class, cls2, cls2);
    }

    protected Method v(Class cls) {
        Class<?> cls2 = Array.newInstance(cls, 1).getClass();
        Class cls3 = Integer.TYPE;
        Method declaredMethod = Typeface.class.getDeclaredMethod("createFromFamiliesWithDefault", cls2, cls3, cls3);
        declaredMethod.setAccessible(true);
        return declaredMethod;
    }

    protected Class w() {
        return Class.forName("android.graphics.FontFamily");
    }

    protected Constructor x(Class cls) {
        return cls.getConstructor(null);
    }

    protected Method y(Class cls) {
        return cls.getMethod("freeze", null);
    }
}
