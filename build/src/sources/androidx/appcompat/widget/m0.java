package androidx.appcompat.widget;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.content.res.XmlResourceParser;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffColorFilter;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.util.AttributeSet;
import android.util.Log;
import android.util.TypedValue;
import android.util.Xml;
import androidx.collection.LruCache;
import androidx.collection.SimpleArrayMap;
import androidx.collection.SparseArrayCompat;
import java.lang.ref.WeakReference;
import java.util.WeakHashMap;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m0 {

    /* renamed from: i  reason: collision with root package name */
    private static m0 f2190i;

    /* renamed from: a  reason: collision with root package name */
    private WeakHashMap f2192a;

    /* renamed from: b  reason: collision with root package name */
    private SimpleArrayMap f2193b;

    /* renamed from: c  reason: collision with root package name */
    private SparseArrayCompat f2194c;

    /* renamed from: d  reason: collision with root package name */
    private final WeakHashMap f2195d = new WeakHashMap(0);

    /* renamed from: e  reason: collision with root package name */
    private TypedValue f2196e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f2197f;

    /* renamed from: g  reason: collision with root package name */
    private c f2198g;

    /* renamed from: h  reason: collision with root package name */
    private static final PorterDuff.Mode f2189h = PorterDuff.Mode.SRC_IN;

    /* renamed from: j  reason: collision with root package name */
    private static final a f2191j = new a(6);

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends LruCache {
        public a(int i10) {
            super(i10);
        }

        private static int l(int i10, PorterDuff.Mode mode) {
            return ((i10 + 31) * 31) + mode.hashCode();
        }

        PorterDuffColorFilter m(int i10, PorterDuff.Mode mode) {
            return (PorterDuffColorFilter) d(Integer.valueOf(l(i10, mode)));
        }

        PorterDuffColorFilter n(int i10, PorterDuff.Mode mode, PorterDuffColorFilter porterDuffColorFilter) {
            return (PorterDuffColorFilter) f(Integer.valueOf(l(i10, mode)), porterDuffColorFilter);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        Drawable a(Context context, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface c {
        Drawable a(m0 m0Var, Context context, int i10);

        ColorStateList b(Context context, int i10);

        boolean c(Context context, int i10, Drawable drawable);

        PorterDuff.Mode d(int i10);

        boolean e(Context context, int i10, Drawable drawable);
    }

    private synchronized boolean a(Context context, long j10, Drawable drawable) {
        try {
            Drawable.ConstantState constantState = drawable.getConstantState();
            if (constantState != null) {
                u0.j jVar = (u0.j) this.f2195d.get(context);
                if (jVar == null) {
                    jVar = new u0.j();
                    this.f2195d.put(context, jVar);
                }
                jVar.h(j10, new WeakReference(constantState));
                return true;
            }
            return false;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private void b(Context context, int i10, ColorStateList colorStateList) {
        if (this.f2192a == null) {
            this.f2192a = new WeakHashMap();
        }
        SparseArrayCompat sparseArrayCompat = (SparseArrayCompat) this.f2192a.get(context);
        if (sparseArrayCompat == null) {
            sparseArrayCompat = new SparseArrayCompat();
            this.f2192a.put(context, sparseArrayCompat);
        }
        sparseArrayCompat.a(i10, colorStateList);
    }

    private void c(Context context) {
        if (!this.f2197f) {
            this.f2197f = true;
            Drawable i10 = i(context, i.a.f26523a);
            if (i10 != null && p(i10)) {
                return;
            }
            this.f2197f = false;
            throw new IllegalStateException("This app has been built with an incorrect configuration. Please configure your build for VectorDrawableCompat.");
        }
    }

    private static long d(TypedValue typedValue) {
        return (typedValue.assetCookie << 32) | typedValue.data;
    }

    private Drawable e(Context context, int i10) {
        Drawable a10;
        if (this.f2196e == null) {
            this.f2196e = new TypedValue();
        }
        TypedValue typedValue = this.f2196e;
        context.getResources().getValue(i10, typedValue, true);
        long d10 = d(typedValue);
        Drawable h10 = h(context, d10);
        if (h10 != null) {
            return h10;
        }
        c cVar = this.f2198g;
        if (cVar == null) {
            a10 = null;
        } else {
            a10 = cVar.a(this, context, i10);
        }
        if (a10 != null) {
            a10.setChangingConfigurations(typedValue.changingConfigurations);
            a(context, d10, a10);
        }
        return a10;
    }

    private static PorterDuffColorFilter f(ColorStateList colorStateList, PorterDuff.Mode mode, int[] iArr) {
        if (colorStateList != null && mode != null) {
            return k(colorStateList.getColorForState(iArr, 0), mode);
        }
        return null;
    }

    public static synchronized m0 g() {
        m0 m0Var;
        synchronized (m0.class) {
            try {
                if (f2190i == null) {
                    m0 m0Var2 = new m0();
                    f2190i = m0Var2;
                    o(m0Var2);
                }
                m0Var = f2190i;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return m0Var;
    }

    private synchronized Drawable h(Context context, long j10) {
        u0.j jVar = (u0.j) this.f2195d.get(context);
        if (jVar == null) {
            return null;
        }
        WeakReference weakReference = (WeakReference) jVar.d(j10);
        if (weakReference != null) {
            Drawable.ConstantState constantState = (Drawable.ConstantState) weakReference.get();
            if (constantState != null) {
                return constantState.newDrawable(context.getResources());
            }
            jVar.i(j10);
        }
        return null;
    }

    public static synchronized PorterDuffColorFilter k(int i10, PorterDuff.Mode mode) {
        PorterDuffColorFilter m10;
        synchronized (m0.class) {
            a aVar = f2191j;
            m10 = aVar.m(i10, mode);
            if (m10 == null) {
                m10 = new PorterDuffColorFilter(i10, mode);
                aVar.n(i10, mode, m10);
            }
        }
        return m10;
    }

    private ColorStateList m(Context context, int i10) {
        SparseArrayCompat sparseArrayCompat;
        WeakHashMap weakHashMap = this.f2192a;
        if (weakHashMap == null || (sparseArrayCompat = (SparseArrayCompat) weakHashMap.get(context)) == null) {
            return null;
        }
        return (ColorStateList) sparseArrayCompat.e(i10);
    }

    private static void o(m0 m0Var) {
    }

    private static boolean p(Drawable drawable) {
        if (!(drawable instanceof androidx.vectordrawable.graphics.drawable.f) && !"android.graphics.drawable.VectorDrawable".equals(drawable.getClass().getName())) {
            return false;
        }
        return true;
    }

    private Drawable q(Context context, int i10) {
        int next;
        SimpleArrayMap simpleArrayMap = this.f2193b;
        if (simpleArrayMap == null || simpleArrayMap.isEmpty()) {
            return null;
        }
        SparseArrayCompat sparseArrayCompat = this.f2194c;
        if (sparseArrayCompat != null) {
            String str = (String) sparseArrayCompat.e(i10);
            if ("appcompat_skip_skip".equals(str) || (str != null && this.f2193b.get(str) == null)) {
                return null;
            }
        } else {
            this.f2194c = new SparseArrayCompat();
        }
        if (this.f2196e == null) {
            this.f2196e = new TypedValue();
        }
        TypedValue typedValue = this.f2196e;
        Resources resources = context.getResources();
        resources.getValue(i10, typedValue, true);
        long d10 = d(typedValue);
        Drawable h10 = h(context, d10);
        if (h10 != null) {
            return h10;
        }
        CharSequence charSequence = typedValue.string;
        if (charSequence != null && charSequence.toString().endsWith(".xml")) {
            try {
                XmlResourceParser xml = resources.getXml(i10);
                AttributeSet asAttributeSet = Xml.asAttributeSet(xml);
                while (true) {
                    next = xml.next();
                    if (next == 2 || next == 1) {
                        break;
                    }
                }
                if (next == 2) {
                    String name = xml.getName();
                    this.f2194c.a(i10, name);
                    b bVar = (b) this.f2193b.get(name);
                    if (bVar != null) {
                        h10 = bVar.a(context, xml, asAttributeSet, context.getTheme());
                    }
                    if (h10 != null) {
                        h10.setChangingConfigurations(typedValue.changingConfigurations);
                        a(context, d10, h10);
                    }
                } else {
                    throw new XmlPullParserException("No start tag found");
                }
            } catch (Exception e10) {
                Log.e("ResourceManagerInternal", "Exception while inflating drawable", e10);
            }
        }
        if (h10 == null) {
            this.f2194c.a(i10, "appcompat_skip_skip");
        }
        return h10;
    }

    private Drawable u(Context context, int i10, boolean z10, Drawable drawable) {
        ColorStateList l10 = l(context, i10);
        if (l10 != null) {
            Drawable r10 = s1.a.r(drawable.mutate());
            s1.a.o(r10, l10);
            PorterDuff.Mode n10 = n(i10);
            if (n10 != null) {
                s1.a.p(r10, n10);
            }
            return r10;
        }
        c cVar = this.f2198g;
        if ((cVar == null || !cVar.e(context, i10, drawable)) && !w(context, i10, drawable) && z10) {
            return null;
        }
        return drawable;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void v(Drawable drawable, t0 t0Var, int[] iArr) {
        ColorStateList colorStateList;
        PorterDuff.Mode mode;
        int[] state = drawable.getState();
        if (drawable.mutate() == drawable) {
            if ((drawable instanceof LayerDrawable) && drawable.isStateful()) {
                drawable.setState(new int[0]);
                drawable.setState(state);
            }
            boolean z10 = t0Var.f2249d;
            if (!z10 && !t0Var.f2248c) {
                drawable.clearColorFilter();
                return;
            }
            if (z10) {
                colorStateList = t0Var.f2246a;
            } else {
                colorStateList = null;
            }
            if (t0Var.f2248c) {
                mode = t0Var.f2247b;
            } else {
                mode = f2189h;
            }
            drawable.setColorFilter(f(colorStateList, mode, iArr));
            return;
        }
        Log.d("ResourceManagerInternal", "Mutated drawable is not the same instance as the input.");
    }

    public synchronized Drawable i(Context context, int i10) {
        return j(context, i10, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized Drawable j(Context context, int i10, boolean z10) {
        Drawable q10;
        try {
            c(context);
            q10 = q(context, i10);
            if (q10 == null) {
                q10 = e(context, i10);
            }
            if (q10 == null) {
                q10 = androidx.core.content.a.e(context, i10);
            }
            if (q10 != null) {
                q10 = u(context, i10, z10, q10);
            }
            if (q10 != null) {
                e0.b(q10);
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return q10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized ColorStateList l(Context context, int i10) {
        ColorStateList m10;
        m10 = m(context, i10);
        if (m10 == null) {
            c cVar = this.f2198g;
            if (cVar == null) {
                m10 = null;
            } else {
                m10 = cVar.b(context, i10);
            }
            if (m10 != null) {
                b(context, i10, m10);
            }
        }
        return m10;
    }

    PorterDuff.Mode n(int i10) {
        c cVar = this.f2198g;
        if (cVar == null) {
            return null;
        }
        return cVar.d(i10);
    }

    public synchronized void r(Context context) {
        u0.j jVar = (u0.j) this.f2195d.get(context);
        if (jVar != null) {
            jVar.a();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized Drawable s(Context context, f1 f1Var, int i10) {
        try {
            Drawable q10 = q(context, i10);
            if (q10 == null) {
                q10 = f1Var.a(i10);
            }
            if (q10 != null) {
                return u(context, i10, false, q10);
            }
            return null;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized void t(c cVar) {
        this.f2198g = cVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean w(Context context, int i10, Drawable drawable) {
        c cVar = this.f2198g;
        if (cVar != null && cVar.c(context, i10, drawable)) {
            return true;
        }
        return false;
    }
}
