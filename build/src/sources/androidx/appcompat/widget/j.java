package androidx.appcompat.widget;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffColorFilter;
import android.graphics.Shader;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import androidx.appcompat.widget.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class j {

    /* renamed from: b  reason: collision with root package name */
    private static final PorterDuff.Mode f1824b = PorterDuff.Mode.SRC_IN;

    /* renamed from: c  reason: collision with root package name */
    private static j f1825c;

    /* renamed from: a  reason: collision with root package name */
    private m0 f1826a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements m0.c {

        /* renamed from: a  reason: collision with root package name */
        private final int[] f1827a = {f.e.R, f.e.P, f.e.f21945a};

        /* renamed from: b  reason: collision with root package name */
        private final int[] f1828b = {f.e.f21959o, f.e.B, f.e.f21964t, f.e.f21960p, f.e.f21961q, f.e.f21963s, f.e.f21962r};

        /* renamed from: c  reason: collision with root package name */
        private final int[] f1829c = {f.e.O, f.e.Q, f.e.f21955k, f.e.K, f.e.L, f.e.M, f.e.N};

        /* renamed from: d  reason: collision with root package name */
        private final int[] f1830d = {f.e.f21967w, f.e.f21953i, f.e.f21966v};

        /* renamed from: e  reason: collision with root package name */
        private final int[] f1831e = {f.e.J, f.e.S};

        /* renamed from: f  reason: collision with root package name */
        private final int[] f1832f = {f.e.f21947c, f.e.f21951g, f.e.f21948d, f.e.f21952h};

        a() {
        }

        private boolean f(int[] iArr, int i10) {
            for (int i11 : iArr) {
                if (i11 == i10) {
                    return true;
                }
            }
            return false;
        }

        private ColorStateList g(Context context) {
            return h(context, 0);
        }

        private ColorStateList h(Context context, int i10) {
            int c10 = r0.c(context, f.a.f21916t);
            return new ColorStateList(new int[][]{r0.f1903b, r0.f1906e, r0.f1904c, r0.f1910i}, new int[]{r0.b(context, f.a.f21914r), r1.c.h(c10, i10), r1.c.h(c10, i10), i10});
        }

        private ColorStateList i(Context context) {
            return h(context, r0.c(context, f.a.f21913q));
        }

        private ColorStateList j(Context context) {
            return h(context, r0.c(context, f.a.f21914r));
        }

        private ColorStateList k(Context context) {
            int[][] iArr = new int[3];
            int[] iArr2 = new int[3];
            ColorStateList e10 = r0.e(context, f.a.f21919w);
            if (e10 != null && e10.isStateful()) {
                int[] iArr3 = r0.f1903b;
                iArr[0] = iArr3;
                iArr2[0] = e10.getColorForState(iArr3, 0);
                iArr[1] = r0.f1907f;
                iArr2[1] = r0.c(context, f.a.f21915s);
                iArr[2] = r0.f1910i;
                iArr2[2] = e10.getDefaultColor();
            } else {
                iArr[0] = r0.f1903b;
                iArr2[0] = r0.b(context, f.a.f21919w);
                iArr[1] = r0.f1907f;
                iArr2[1] = r0.c(context, f.a.f21915s);
                iArr[2] = r0.f1910i;
                iArr2[2] = r0.c(context, f.a.f21919w);
            }
            return new ColorStateList(iArr, iArr2);
        }

        private LayerDrawable l(m0 m0Var, Context context, int i10) {
            BitmapDrawable bitmapDrawable;
            BitmapDrawable bitmapDrawable2;
            BitmapDrawable bitmapDrawable3;
            int dimensionPixelSize = context.getResources().getDimensionPixelSize(i10);
            Drawable i11 = m0Var.i(context, f.e.F);
            Drawable i12 = m0Var.i(context, f.e.G);
            if ((i11 instanceof BitmapDrawable) && i11.getIntrinsicWidth() == dimensionPixelSize && i11.getIntrinsicHeight() == dimensionPixelSize) {
                bitmapDrawable = (BitmapDrawable) i11;
                bitmapDrawable2 = new BitmapDrawable(bitmapDrawable.getBitmap());
            } else {
                Bitmap createBitmap = Bitmap.createBitmap(dimensionPixelSize, dimensionPixelSize, Bitmap.Config.ARGB_8888);
                Canvas canvas = new Canvas(createBitmap);
                i11.setBounds(0, 0, dimensionPixelSize, dimensionPixelSize);
                i11.draw(canvas);
                bitmapDrawable = new BitmapDrawable(createBitmap);
                bitmapDrawable2 = new BitmapDrawable(createBitmap);
            }
            bitmapDrawable2.setTileModeX(Shader.TileMode.REPEAT);
            if ((i12 instanceof BitmapDrawable) && i12.getIntrinsicWidth() == dimensionPixelSize && i12.getIntrinsicHeight() == dimensionPixelSize) {
                bitmapDrawable3 = (BitmapDrawable) i12;
            } else {
                Bitmap createBitmap2 = Bitmap.createBitmap(dimensionPixelSize, dimensionPixelSize, Bitmap.Config.ARGB_8888);
                Canvas canvas2 = new Canvas(createBitmap2);
                i12.setBounds(0, 0, dimensionPixelSize, dimensionPixelSize);
                i12.draw(canvas2);
                bitmapDrawable3 = new BitmapDrawable(createBitmap2);
            }
            LayerDrawable layerDrawable = new LayerDrawable(new Drawable[]{bitmapDrawable, bitmapDrawable3, bitmapDrawable2});
            layerDrawable.setId(0, 16908288);
            layerDrawable.setId(1, 16908303);
            layerDrawable.setId(2, 16908301);
            return layerDrawable;
        }

        private void m(Drawable drawable, int i10, PorterDuff.Mode mode) {
            Drawable mutate = drawable.mutate();
            if (mode == null) {
                mode = j.f1824b;
            }
            mutate.setColorFilter(j.e(i10, mode));
        }

        @Override // androidx.appcompat.widget.m0.c
        public Drawable a(m0 m0Var, Context context, int i10) {
            if (i10 == f.e.f21954j) {
                return new LayerDrawable(new Drawable[]{m0Var.i(context, f.e.f21953i), m0Var.i(context, f.e.f21955k)});
            }
            if (i10 == f.e.f21969y) {
                return l(m0Var, context, f.d.f21938g);
            }
            if (i10 == f.e.f21968x) {
                return l(m0Var, context, f.d.f21939h);
            }
            if (i10 == f.e.f21970z) {
                return l(m0Var, context, f.d.f21940i);
            }
            return null;
        }

        @Override // androidx.appcompat.widget.m0.c
        public ColorStateList b(Context context, int i10) {
            if (i10 == f.e.f21957m) {
                return g.a.a(context, f.c.f21928e);
            }
            if (i10 == f.e.I) {
                return g.a.a(context, f.c.f21931h);
            }
            if (i10 == f.e.H) {
                return k(context);
            }
            if (i10 == f.e.f21950f) {
                return j(context);
            }
            if (i10 == f.e.f21946b) {
                return g(context);
            }
            if (i10 == f.e.f21949e) {
                return i(context);
            }
            if (i10 != f.e.D && i10 != f.e.E) {
                if (f(this.f1828b, i10)) {
                    return r0.e(context, f.a.f21917u);
                }
                if (f(this.f1831e, i10)) {
                    return g.a.a(context, f.c.f21927d);
                }
                if (f(this.f1832f, i10)) {
                    return g.a.a(context, f.c.f21926c);
                }
                if (i10 == f.e.A) {
                    return g.a.a(context, f.c.f21929f);
                }
                return null;
            }
            return g.a.a(context, f.c.f21930g);
        }

        /* JADX WARN: Removed duplicated region for block: B:23:0x0050  */
        /* JADX WARN: Removed duplicated region for block: B:27:0x0065 A[RETURN] */
        @Override // androidx.appcompat.widget.m0.c
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public boolean c(android.content.Context r7, int r8, android.graphics.drawable.Drawable r9) {
            /*
                r6 = this;
                android.graphics.PorterDuff$Mode r0 = androidx.appcompat.widget.j.a()
                int[] r1 = r6.f1827a
                boolean r1 = r6.f(r1, r8)
                r2 = 1
                r3 = 0
                r4 = -1
                if (r1 == 0) goto L15
                int r8 = f.a.f21917u
            L11:
                r1 = r0
                r5 = r2
            L13:
                r0 = r4
                goto L4e
            L15:
                int[] r1 = r6.f1829c
                boolean r1 = r6.f(r1, r8)
                if (r1 == 0) goto L20
                int r8 = f.a.f21915s
                goto L11
            L20:
                int[] r1 = r6.f1830d
                boolean r1 = r6.f(r1, r8)
                r5 = 16842801(0x1010031, float:2.3693695E-38)
                if (r1 == 0) goto L32
                android.graphics.PorterDuff$Mode r0 = android.graphics.PorterDuff.Mode.MULTIPLY
            L2d:
                r1 = r0
                r0 = r4
                r8 = r5
            L30:
                r5 = r2
                goto L4e
            L32:
                int r1 = f.e.f21965u
                if (r8 != r1) goto L45
                r8 = 1109603123(0x42233333, float:40.8)
                int r8 = java.lang.Math.round(r8)
                r1 = 16842800(0x1010030, float:2.3693693E-38)
                r5 = r0
                r0 = r8
                r8 = r1
                r1 = r5
                goto L30
            L45:
                int r1 = f.e.f21956l
                if (r8 != r1) goto L4a
                goto L2d
            L4a:
                r1 = r0
                r8 = r3
                r5 = r8
                goto L13
            L4e:
                if (r5 == 0) goto L65
                android.graphics.drawable.Drawable r9 = r9.mutate()
                int r7 = androidx.appcompat.widget.r0.c(r7, r8)
                android.graphics.PorterDuffColorFilter r7 = androidx.appcompat.widget.j.e(r7, r1)
                r9.setColorFilter(r7)
                if (r0 == r4) goto L64
                r9.setAlpha(r0)
            L64:
                return r2
            L65:
                return r3
            */
            throw new UnsupportedOperationException("Method not decompiled: androidx.appcompat.widget.j.a.c(android.content.Context, int, android.graphics.drawable.Drawable):boolean");
        }

        @Override // androidx.appcompat.widget.m0.c
        public PorterDuff.Mode d(int i10) {
            if (i10 == f.e.H) {
                return PorterDuff.Mode.MULTIPLY;
            }
            return null;
        }

        @Override // androidx.appcompat.widget.m0.c
        public boolean e(Context context, int i10, Drawable drawable) {
            if (i10 == f.e.C) {
                LayerDrawable layerDrawable = (LayerDrawable) drawable;
                m(layerDrawable.findDrawableByLayerId(16908288), r0.c(context, f.a.f21917u), j.f1824b);
                m(layerDrawable.findDrawableByLayerId(16908303), r0.c(context, f.a.f21917u), j.f1824b);
                m(layerDrawable.findDrawableByLayerId(16908301), r0.c(context, f.a.f21915s), j.f1824b);
                return true;
            } else if (i10 != f.e.f21969y && i10 != f.e.f21968x && i10 != f.e.f21970z) {
                return false;
            } else {
                LayerDrawable layerDrawable2 = (LayerDrawable) drawable;
                m(layerDrawable2.findDrawableByLayerId(16908288), r0.b(context, f.a.f21917u), j.f1824b);
                m(layerDrawable2.findDrawableByLayerId(16908303), r0.c(context, f.a.f21915s), j.f1824b);
                m(layerDrawable2.findDrawableByLayerId(16908301), r0.c(context, f.a.f21915s), j.f1824b);
                return true;
            }
        }
    }

    public static synchronized j b() {
        j jVar;
        synchronized (j.class) {
            try {
                if (f1825c == null) {
                    h();
                }
                jVar = f1825c;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return jVar;
    }

    public static synchronized PorterDuffColorFilter e(int i10, PorterDuff.Mode mode) {
        PorterDuffColorFilter k10;
        synchronized (j.class) {
            k10 = m0.k(i10, mode);
        }
        return k10;
    }

    public static synchronized void h() {
        synchronized (j.class) {
            if (f1825c == null) {
                j jVar = new j();
                f1825c = jVar;
                jVar.f1826a = m0.g();
                f1825c.f1826a.t(new a());
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void i(Drawable drawable, t0 t0Var, int[] iArr) {
        m0.v(drawable, t0Var, iArr);
    }

    public synchronized Drawable c(Context context, int i10) {
        return this.f1826a.i(context, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized Drawable d(Context context, int i10, boolean z10) {
        return this.f1826a.j(context, i10, z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized ColorStateList f(Context context, int i10) {
        return this.f1826a.l(context, i10);
    }

    public synchronized void g(Context context) {
        this.f1826a.r(context);
    }
}
