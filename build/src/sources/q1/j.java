package q1;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.graphics.Typeface;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.util.SparseArray;
import android.util.TypedValue;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.WeakHashMap;
import q1.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class j {

    /* renamed from: a  reason: collision with root package name */
    private static final ThreadLocal f46362a = new ThreadLocal();

    /* renamed from: b  reason: collision with root package name */
    private static final WeakHashMap f46363b = new WeakHashMap(0);

    /* renamed from: c  reason: collision with root package name */
    private static final Object f46364c = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static Drawable a(Resources resources, int i10, Resources.Theme theme) {
            return resources.getDrawable(i10, theme);
        }

        static Drawable b(Resources resources, int i10, int i11, Resources.Theme theme) {
            return resources.getDrawableForDensity(i10, i11, theme);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {
        static int a(Resources resources, int i10, Resources.Theme theme) {
            return resources.getColor(i10, theme);
        }

        static ColorStateList b(Resources resources, int i10, Resources.Theme theme) {
            return resources.getColorStateList(i10, theme);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class c {
        static float a(Resources resources, int i10) {
            return resources.getFloat(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        final ColorStateList f46365a;

        /* renamed from: b  reason: collision with root package name */
        final Configuration f46366b;

        /* renamed from: c  reason: collision with root package name */
        final int f46367c;

        d(ColorStateList colorStateList, Configuration configuration, Resources.Theme theme) {
            int hashCode;
            this.f46365a = colorStateList;
            this.f46366b = configuration;
            if (theme == null) {
                hashCode = 0;
            } else {
                hashCode = theme.hashCode();
            }
            this.f46367c = hashCode;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        final Resources f46368a;

        /* renamed from: b  reason: collision with root package name */
        final Resources.Theme f46369b;

        e(Resources resources, Resources.Theme theme) {
            this.f46368a = resources;
            this.f46369b = theme;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && e.class == obj.getClass()) {
                e eVar = (e) obj;
                if (this.f46368a.equals(eVar.f46368a) && b2.b.a(this.f46369b, eVar.f46369b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return b2.b.b(this.f46368a, this.f46369b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class f {
        public static Handler e(Handler handler) {
            if (handler == null) {
                return new Handler(Looper.getMainLooper());
            }
            return handler;
        }

        public final void c(final int i10, Handler handler) {
            e(handler).post(new Runnable() { // from class: q1.l
                @Override // java.lang.Runnable
                public final void run() {
                    j.f.this.f(i10);
                }
            });
        }

        public final void d(final Typeface typeface, Handler handler) {
            e(handler).post(new Runnable() { // from class: q1.k
                @Override // java.lang.Runnable
                public final void run() {
                    j.f.this.g(typeface);
                }
            });
        }

        public abstract void f(int i10);

        public abstract void g(Typeface typeface);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class g {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static class a {

            /* renamed from: a  reason: collision with root package name */
            private static final Object f46370a = new Object();

            /* renamed from: b  reason: collision with root package name */
            private static Method f46371b;

            /* renamed from: c  reason: collision with root package name */
            private static boolean f46372c;

            static void a(Resources.Theme theme) {
                synchronized (f46370a) {
                    if (!f46372c) {
                        try {
                            Method declaredMethod = Resources.Theme.class.getDeclaredMethod("rebase", null);
                            f46371b = declaredMethod;
                            declaredMethod.setAccessible(true);
                        } catch (NoSuchMethodException e10) {
                            Log.i("ResourcesCompat", "Failed to retrieve rebase() method", e10);
                        }
                        f46372c = true;
                    }
                    Method method = f46371b;
                    if (method != null) {
                        try {
                            method.invoke(theme, null);
                        } catch (IllegalAccessException | InvocationTargetException e11) {
                            Log.i("ResourcesCompat", "Failed to invoke rebase() method via reflection", e11);
                            f46371b = null;
                        }
                    }
                }
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static class b {
            static void a(Resources.Theme theme) {
                theme.rebase();
            }
        }

        public static void a(Resources.Theme theme) {
            if (Build.VERSION.SDK_INT >= 29) {
                b.a(theme);
            } else {
                a.a(theme);
            }
        }
    }

    private static void a(e eVar, int i10, ColorStateList colorStateList, Resources.Theme theme) {
        synchronized (f46364c) {
            try {
                WeakHashMap weakHashMap = f46363b;
                SparseArray sparseArray = (SparseArray) weakHashMap.get(eVar);
                if (sparseArray == null) {
                    sparseArray = new SparseArray();
                    weakHashMap.put(eVar, sparseArray);
                }
                sparseArray.append(i10, new d(colorStateList, eVar.f46368a.getConfiguration(), theme));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:21:0x003c, code lost:
        if (r2.f46367c == r5.hashCode()) goto L17;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static android.content.res.ColorStateList b(q1.j.e r5, int r6) {
        /*
            java.lang.Object r0 = q1.j.f46364c
            monitor-enter(r0)
            java.util.WeakHashMap r1 = q1.j.f46363b     // Catch: java.lang.Throwable -> L32
            java.lang.Object r1 = r1.get(r5)     // Catch: java.lang.Throwable -> L32
            android.util.SparseArray r1 = (android.util.SparseArray) r1     // Catch: java.lang.Throwable -> L32
            if (r1 == 0) goto L45
            int r2 = r1.size()     // Catch: java.lang.Throwable -> L32
            if (r2 <= 0) goto L45
            java.lang.Object r2 = r1.get(r6)     // Catch: java.lang.Throwable -> L32
            q1.j$d r2 = (q1.j.d) r2     // Catch: java.lang.Throwable -> L32
            if (r2 == 0) goto L45
            android.content.res.Configuration r3 = r2.f46366b     // Catch: java.lang.Throwable -> L32
            android.content.res.Resources r4 = r5.f46368a     // Catch: java.lang.Throwable -> L32
            android.content.res.Configuration r4 = r4.getConfiguration()     // Catch: java.lang.Throwable -> L32
            boolean r3 = r3.equals(r4)     // Catch: java.lang.Throwable -> L32
            if (r3 == 0) goto L42
            android.content.res.Resources$Theme r5 = r5.f46369b     // Catch: java.lang.Throwable -> L32
            if (r5 != 0) goto L34
            int r3 = r2.f46367c     // Catch: java.lang.Throwable -> L32
            if (r3 == 0) goto L3e
            goto L34
        L32:
            r5 = move-exception
            goto L48
        L34:
            if (r5 == 0) goto L42
            int r3 = r2.f46367c     // Catch: java.lang.Throwable -> L32
            int r5 = r5.hashCode()     // Catch: java.lang.Throwable -> L32
            if (r3 != r5) goto L42
        L3e:
            android.content.res.ColorStateList r5 = r2.f46365a     // Catch: java.lang.Throwable -> L32
            monitor-exit(r0)     // Catch: java.lang.Throwable -> L32
            return r5
        L42:
            r1.remove(r6)     // Catch: java.lang.Throwable -> L32
        L45:
            monitor-exit(r0)     // Catch: java.lang.Throwable -> L32
            r5 = 0
            return r5
        L48:
            monitor-exit(r0)     // Catch: java.lang.Throwable -> L32
            throw r5
        */
        throw new UnsupportedOperationException("Method not decompiled: q1.j.b(q1.j$e, int):android.content.res.ColorStateList");
    }

    public static Typeface c(Context context, int i10) {
        if (context.isRestricted()) {
            return null;
        }
        return o(context, i10, new TypedValue(), 0, null, null, false, true);
    }

    public static int d(Resources resources, int i10, Resources.Theme theme) {
        return b.a(resources, i10, theme);
    }

    public static ColorStateList e(Resources resources, int i10, Resources.Theme theme) {
        e eVar = new e(resources, theme);
        ColorStateList b10 = b(eVar, i10);
        if (b10 != null) {
            return b10;
        }
        ColorStateList m10 = m(resources, i10, theme);
        if (m10 != null) {
            a(eVar, i10, m10, theme);
            return m10;
        }
        return b.b(resources, i10, theme);
    }

    public static Drawable f(Resources resources, int i10, Resources.Theme theme) {
        return a.a(resources, i10, theme);
    }

    public static Drawable g(Resources resources, int i10, int i11, Resources.Theme theme) {
        return a.b(resources, i10, i11, theme);
    }

    public static float h(Resources resources, int i10) {
        if (Build.VERSION.SDK_INT >= 29) {
            return c.a(resources, i10);
        }
        TypedValue l10 = l();
        resources.getValue(i10, l10, true);
        if (l10.type == 4) {
            return l10.getFloat();
        }
        throw new Resources.NotFoundException("Resource ID #0x" + Integer.toHexString(i10) + " type #0x" + Integer.toHexString(l10.type) + " is not valid");
    }

    public static Typeface i(Context context, int i10) {
        if (context.isRestricted()) {
            return null;
        }
        return o(context, i10, new TypedValue(), 0, null, null, false, false);
    }

    public static Typeface j(Context context, int i10, TypedValue typedValue, int i11, f fVar) {
        if (context.isRestricted()) {
            return null;
        }
        return o(context, i10, typedValue, i11, fVar, null, true, false);
    }

    public static void k(Context context, int i10, f fVar, Handler handler) {
        b2.e.g(fVar);
        if (context.isRestricted()) {
            fVar.c(-4, handler);
        } else {
            o(context, i10, new TypedValue(), 0, fVar, handler, false, false);
        }
    }

    private static TypedValue l() {
        ThreadLocal threadLocal = f46362a;
        TypedValue typedValue = (TypedValue) threadLocal.get();
        if (typedValue == null) {
            TypedValue typedValue2 = new TypedValue();
            threadLocal.set(typedValue2);
            return typedValue2;
        }
        return typedValue;
    }

    private static ColorStateList m(Resources resources, int i10, Resources.Theme theme) {
        if (n(resources, i10)) {
            return null;
        }
        try {
            return q1.c.a(resources, resources.getXml(i10), theme);
        } catch (Exception e10) {
            Log.w("ResourcesCompat", "Failed to inflate ColorStateList, leaving it to the framework", e10);
            return null;
        }
    }

    private static boolean n(Resources resources, int i10) {
        TypedValue l10 = l();
        resources.getValue(i10, l10, true);
        int i11 = l10.type;
        if (i11 >= 28 && i11 <= 31) {
            return true;
        }
        return false;
    }

    private static Typeface o(Context context, int i10, TypedValue typedValue, int i11, f fVar, Handler handler, boolean z10, boolean z11) {
        Resources resources = context.getResources();
        resources.getValue(i10, typedValue, true);
        Typeface p10 = p(context, resources, typedValue, i10, i11, fVar, handler, z10, z11);
        if (p10 == null && fVar == null && !z11) {
            throw new Resources.NotFoundException("Font resource ID #0x" + Integer.toHexString(i10) + " could not be retrieved.");
        }
        return p10;
    }

    /* JADX WARN: Removed duplicated region for block: B:46:0x00b3  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static android.graphics.Typeface p(android.content.Context r13, android.content.res.Resources r14, android.util.TypedValue r15, int r16, int r17, q1.j.f r18, android.os.Handler r19, boolean r20, boolean r21) {
        /*
            Method dump skipped, instructions count: 230
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: q1.j.p(android.content.Context, android.content.res.Resources, android.util.TypedValue, int, int, q1.j$f, android.os.Handler, boolean, boolean):android.graphics.Typeface");
    }
}
