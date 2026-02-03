package f6;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.ColorMatrix;
import android.graphics.ColorMatrixColorFilter;
import android.graphics.DashPathEffect;
import android.graphics.LinearGradient;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PathMeasure;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.RadialGradient;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Shader;
import android.graphics.Typeface;
import android.util.Base64;
import android.util.Log;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import f6.b;
import f6.e;
import f6.g;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.Stack;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: i  reason: collision with root package name */
    private static HashSet f23501i;

    /* renamed from: a  reason: collision with root package name */
    private Canvas f23502a;

    /* renamed from: b  reason: collision with root package name */
    private float f23503b;

    /* renamed from: c  reason: collision with root package name */
    private f6.g f23504c;

    /* renamed from: d  reason: collision with root package name */
    private C0312h f23505d;

    /* renamed from: e  reason: collision with root package name */
    private Stack f23506e;

    /* renamed from: f  reason: collision with root package name */
    private Stack f23507f;

    /* renamed from: g  reason: collision with root package name */
    private Stack f23508g;

    /* renamed from: h  reason: collision with root package name */
    private b.q f23509h = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f23510a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f23511b;

        /* renamed from: c  reason: collision with root package name */
        static final /* synthetic */ int[] f23512c;

        static {
            int[] iArr = new int[g.e0.d.values().length];
            f23512c = iArr;
            try {
                iArr[g.e0.d.Miter.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f23512c[g.e0.d.Round.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f23512c[g.e0.d.Bevel.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[g.e0.c.values().length];
            f23511b = iArr2;
            try {
                iArr2[g.e0.c.Butt.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f23511b[g.e0.c.Round.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f23511b[g.e0.c.Square.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            int[] iArr3 = new int[e.a.values().length];
            f23510a = iArr3;
            try {
                iArr3[e.a.xMidYMin.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f23510a[e.a.xMidYMid.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f23510a[e.a.xMidYMax.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f23510a[e.a.xMaxYMin.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f23510a[e.a.xMaxYMid.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f23510a[e.a.xMaxYMax.ordinal()] = 6;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f23510a[e.a.xMinYMid.ordinal()] = 7;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f23510a[e.a.xMinYMax.ordinal()] = 8;
            } catch (NoSuchFieldError unused14) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements g.x {

        /* renamed from: b  reason: collision with root package name */
        private float f23514b;

        /* renamed from: c  reason: collision with root package name */
        private float f23515c;

        /* renamed from: h  reason: collision with root package name */
        private boolean f23520h;

        /* renamed from: a  reason: collision with root package name */
        private List f23513a = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private c f23516d = null;

        /* renamed from: e  reason: collision with root package name */
        private boolean f23517e = false;

        /* renamed from: f  reason: collision with root package name */
        private boolean f23518f = true;

        /* renamed from: g  reason: collision with root package name */
        private int f23519g = -1;

        b(g.w wVar) {
            if (wVar != null) {
                wVar.h(this);
                if (this.f23520h) {
                    this.f23516d.b((c) this.f23513a.get(this.f23519g));
                    this.f23513a.set(this.f23519g, this.f23516d);
                    this.f23520h = false;
                }
                c cVar = this.f23516d;
                if (cVar != null) {
                    this.f23513a.add(cVar);
                }
            }
        }

        @Override // f6.g.x
        public void a(float f10, float f11, float f12, float f13) {
            this.f23516d.a(f10, f11);
            this.f23513a.add(this.f23516d);
            this.f23516d = new c(f12, f13, f12 - f10, f13 - f11);
            this.f23520h = false;
        }

        @Override // f6.g.x
        public void b(float f10, float f11) {
            if (this.f23520h) {
                this.f23516d.b((c) this.f23513a.get(this.f23519g));
                this.f23513a.set(this.f23519g, this.f23516d);
                this.f23520h = false;
            }
            c cVar = this.f23516d;
            if (cVar != null) {
                this.f23513a.add(cVar);
            }
            this.f23514b = f10;
            this.f23515c = f11;
            this.f23516d = new c(f10, f11, 0.0f, 0.0f);
            this.f23519g = this.f23513a.size();
        }

        @Override // f6.g.x
        public void c(float f10, float f11, float f12, float f13, float f14, float f15) {
            if (this.f23518f || this.f23517e) {
                this.f23516d.a(f10, f11);
                this.f23513a.add(this.f23516d);
                this.f23517e = false;
            }
            this.f23516d = new c(f14, f15, f14 - f12, f15 - f13);
            this.f23520h = false;
        }

        @Override // f6.g.x
        public void close() {
            this.f23513a.add(this.f23516d);
            e(this.f23514b, this.f23515c);
            this.f23520h = true;
        }

        @Override // f6.g.x
        public void d(float f10, float f11, float f12, boolean z10, boolean z11, float f13, float f14) {
            this.f23517e = true;
            this.f23518f = false;
            c cVar = this.f23516d;
            h.h(cVar.f23522a, cVar.f23523b, f10, f11, f12, z10, z11, f13, f14, this);
            this.f23518f = true;
            this.f23520h = false;
        }

        @Override // f6.g.x
        public void e(float f10, float f11) {
            this.f23516d.a(f10, f11);
            this.f23513a.add(this.f23516d);
            h hVar = h.this;
            c cVar = this.f23516d;
            this.f23516d = new c(f10, f11, f10 - cVar.f23522a, f11 - cVar.f23523b);
            this.f23520h = false;
        }

        List f() {
            return this.f23513a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class c {

        /* renamed from: a  reason: collision with root package name */
        float f23522a;

        /* renamed from: b  reason: collision with root package name */
        float f23523b;

        /* renamed from: c  reason: collision with root package name */
        float f23524c;

        /* renamed from: d  reason: collision with root package name */
        float f23525d;

        /* renamed from: e  reason: collision with root package name */
        boolean f23526e = false;

        c(float f10, float f11, float f12, float f13) {
            this.f23524c = 0.0f;
            this.f23525d = 0.0f;
            this.f23522a = f10;
            this.f23523b = f11;
            double sqrt = Math.sqrt((f12 * f12) + (f13 * f13));
            if (sqrt != 0.0d) {
                this.f23524c = (float) (f12 / sqrt);
                this.f23525d = (float) (f13 / sqrt);
            }
        }

        void a(float f10, float f11) {
            float f12 = f10 - this.f23522a;
            float f13 = f11 - this.f23523b;
            double sqrt = Math.sqrt((f12 * f12) + (f13 * f13));
            if (sqrt != 0.0d) {
                f12 = (float) (f12 / sqrt);
                f13 = (float) (f13 / sqrt);
            }
            float f14 = this.f23524c;
            if (f12 == (-f14) && f13 == (-this.f23525d)) {
                this.f23526e = true;
                this.f23524c = -f13;
                this.f23525d = f12;
                return;
            }
            this.f23524c = f14 + f12;
            this.f23525d += f13;
        }

        void b(c cVar) {
            float f10 = cVar.f23524c;
            float f11 = this.f23524c;
            if (f10 == (-f11)) {
                float f12 = cVar.f23525d;
                if (f12 == (-this.f23525d)) {
                    this.f23526e = true;
                    this.f23524c = -f12;
                    this.f23525d = cVar.f23524c;
                    return;
                }
            }
            this.f23524c = f11 + f10;
            this.f23525d += cVar.f23525d;
        }

        public String toString() {
            return "(" + this.f23522a + "," + this.f23523b + " " + this.f23524c + "," + this.f23525d + ")";
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d implements g.x {

        /* renamed from: a  reason: collision with root package name */
        Path f23528a = new Path();

        /* renamed from: b  reason: collision with root package name */
        float f23529b;

        /* renamed from: c  reason: collision with root package name */
        float f23530c;

        d(g.w wVar) {
            if (wVar == null) {
                return;
            }
            wVar.h(this);
        }

        @Override // f6.g.x
        public void a(float f10, float f11, float f12, float f13) {
            this.f23528a.quadTo(f10, f11, f12, f13);
            this.f23529b = f12;
            this.f23530c = f13;
        }

        @Override // f6.g.x
        public void b(float f10, float f11) {
            this.f23528a.moveTo(f10, f11);
            this.f23529b = f10;
            this.f23530c = f11;
        }

        @Override // f6.g.x
        public void c(float f10, float f11, float f12, float f13, float f14, float f15) {
            this.f23528a.cubicTo(f10, f11, f12, f13, f14, f15);
            this.f23529b = f14;
            this.f23530c = f15;
        }

        @Override // f6.g.x
        public void close() {
            this.f23528a.close();
        }

        @Override // f6.g.x
        public void d(float f10, float f11, float f12, boolean z10, boolean z11, float f13, float f14) {
            h.h(this.f23529b, this.f23530c, f10, f11, f12, z10, z11, f13, f14, this);
            this.f23529b = f13;
            this.f23530c = f14;
        }

        @Override // f6.g.x
        public void e(float f10, float f11) {
            this.f23528a.lineTo(f10, f11);
            this.f23529b = f10;
            this.f23530c = f11;
        }

        Path f() {
            return this.f23528a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class e extends f {

        /* renamed from: e  reason: collision with root package name */
        private Path f23532e;

        e(Path path, float f10, float f11) {
            super(f10, f11);
            this.f23532e = path;
        }

        @Override // f6.h.f, f6.h.j
        public void b(String str) {
            String str2;
            if (h.this.Y0()) {
                if (h.this.f23505d.f23542b) {
                    str2 = str;
                    h.this.f23502a.drawTextOnPath(str2, this.f23532e, this.f23534b, this.f23535c, h.this.f23505d.f23544d);
                } else {
                    str2 = str;
                }
                if (h.this.f23505d.f23543c) {
                    h.this.f23502a.drawTextOnPath(str2, this.f23532e, this.f23534b, this.f23535c, h.this.f23505d.f23545e);
                }
            } else {
                str2 = str;
            }
            this.f23534b += h.this.f23505d.f23544d.measureText(str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class f extends j {

        /* renamed from: b  reason: collision with root package name */
        float f23534b;

        /* renamed from: c  reason: collision with root package name */
        float f23535c;

        f(float f10, float f11) {
            super(h.this, null);
            this.f23534b = f10;
            this.f23535c = f11;
        }

        @Override // f6.h.j
        public void b(String str) {
            h.y("TextSequence render", new Object[0]);
            if (h.this.Y0()) {
                if (h.this.f23505d.f23542b) {
                    h.this.f23502a.drawText(str, this.f23534b, this.f23535c, h.this.f23505d.f23544d);
                }
                if (h.this.f23505d.f23543c) {
                    h.this.f23502a.drawText(str, this.f23534b, this.f23535c, h.this.f23505d.f23545e);
                }
            }
            this.f23534b += h.this.f23505d.f23544d.measureText(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class g extends j {

        /* renamed from: b  reason: collision with root package name */
        float f23537b;

        /* renamed from: c  reason: collision with root package name */
        float f23538c;

        /* renamed from: d  reason: collision with root package name */
        Path f23539d;

        g(float f10, float f11, Path path) {
            super(h.this, null);
            this.f23537b = f10;
            this.f23538c = f11;
            this.f23539d = path;
        }

        @Override // f6.h.j
        public boolean a(g.y0 y0Var) {
            if (y0Var instanceof g.z0) {
                h.Z0("Using <textPath> elements in a clip path is not supported.", new Object[0]);
                return false;
            }
            return true;
        }

        @Override // f6.h.j
        public void b(String str) {
            String str2;
            if (h.this.Y0()) {
                Path path = new Path();
                str2 = str;
                h.this.f23505d.f23544d.getTextPath(str2, 0, str.length(), this.f23537b, this.f23538c, path);
                this.f23539d.addPath(path);
            } else {
                str2 = str;
            }
            this.f23537b += h.this.f23505d.f23544d.measureText(str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class i extends j {

        /* renamed from: b  reason: collision with root package name */
        float f23550b;

        /* renamed from: c  reason: collision with root package name */
        float f23551c;

        /* renamed from: d  reason: collision with root package name */
        RectF f23552d;

        i(float f10, float f11) {
            super(h.this, null);
            this.f23552d = new RectF();
            this.f23550b = f10;
            this.f23551c = f11;
        }

        @Override // f6.h.j
        public boolean a(g.y0 y0Var) {
            if (!(y0Var instanceof g.z0)) {
                return true;
            }
            g.z0 z0Var = (g.z0) y0Var;
            g.n0 p10 = y0Var.f23444a.p(z0Var.f23498o);
            if (p10 == null) {
                h.F("TextPath path reference '%s' not found", z0Var.f23498o);
                return false;
            }
            g.v vVar = (g.v) p10;
            Path f10 = new d(vVar.f23481o).f();
            Matrix matrix = vVar.f23433n;
            if (matrix != null) {
                f10.transform(matrix);
            }
            RectF rectF = new RectF();
            f10.computeBounds(rectF, true);
            this.f23552d.union(rectF);
            return false;
        }

        @Override // f6.h.j
        public void b(String str) {
            if (h.this.Y0()) {
                Rect rect = new Rect();
                h.this.f23505d.f23544d.getTextBounds(str, 0, str.length(), rect);
                RectF rectF = new RectF(rect);
                rectF.offset(this.f23550b, this.f23551c);
                this.f23552d.union(rectF);
            }
            this.f23550b += h.this.f23505d.f23544d.measureText(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public abstract class j {
        private j() {
        }

        public boolean a(g.y0 y0Var) {
            return true;
        }

        public abstract void b(String str);

        /* synthetic */ j(h hVar, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(Canvas canvas, float f10) {
        this.f23502a = canvas;
        this.f23503b = f10;
    }

    private boolean A() {
        Boolean bool = this.f23505d.f23541a.L;
        if (bool != null) {
            return bool.booleanValue();
        }
        return true;
    }

    private void A0(g.n0 n0Var) {
        if (n0Var instanceof g.t) {
            return;
        }
        S0();
        u(n0Var);
        if (n0Var instanceof g.f0) {
            x0((g.f0) n0Var);
        } else if (n0Var instanceof g.e1) {
            E0((g.e1) n0Var);
        } else if (n0Var instanceof g.s0) {
            B0((g.s0) n0Var);
        } else if (n0Var instanceof g.m) {
            q0((g.m) n0Var);
        } else if (n0Var instanceof g.o) {
            r0((g.o) n0Var);
        } else if (n0Var instanceof g.v) {
            t0((g.v) n0Var);
        } else if (n0Var instanceof g.b0) {
            w0((g.b0) n0Var);
        } else if (n0Var instanceof g.d) {
            o0((g.d) n0Var);
        } else if (n0Var instanceof g.i) {
            p0((g.i) n0Var);
        } else if (n0Var instanceof g.q) {
            s0((g.q) n0Var);
        } else if (n0Var instanceof g.a0) {
            v0((g.a0) n0Var);
        } else if (n0Var instanceof g.z) {
            u0((g.z) n0Var);
        } else if (n0Var instanceof g.w0) {
            D0((g.w0) n0Var);
        }
        R0();
    }

    private void B(g.k0 k0Var, Path path) {
        g.o0 o0Var = this.f23505d.f23541a.f23345e;
        if (o0Var instanceof g.u) {
            g.n0 p10 = this.f23504c.p(((g.u) o0Var).f23477d);
            if (p10 instanceof g.y) {
                L(k0Var, path, (g.y) p10);
                return;
            }
        }
        this.f23502a.drawPath(path, this.f23505d.f23544d);
    }

    private void B0(g.s0 s0Var) {
        y("Switch render", new Object[0]);
        W0(this.f23505d, s0Var);
        if (!A()) {
            return;
        }
        Matrix matrix = s0Var.f23439o;
        if (matrix != null) {
            this.f23502a.concat(matrix);
        }
        p(s0Var);
        boolean m02 = m0();
        K0(s0Var);
        if (m02) {
            j0(s0Var);
        }
        U0(s0Var);
    }

    private void C(Path path) {
        C0312h c0312h = this.f23505d;
        if (c0312h.f23541a.W == g.e0.i.NonScalingStroke) {
            Matrix matrix = this.f23502a.getMatrix();
            Path path2 = new Path();
            path.transform(matrix, path2);
            this.f23502a.setMatrix(new Matrix());
            Shader shader = this.f23505d.f23545e.getShader();
            Matrix matrix2 = new Matrix();
            if (shader != null) {
                shader.getLocalMatrix(matrix2);
                Matrix matrix3 = new Matrix(matrix2);
                matrix3.postConcat(matrix);
                shader.setLocalMatrix(matrix3);
            }
            this.f23502a.drawPath(path2, this.f23505d.f23545e);
            this.f23502a.setMatrix(matrix);
            if (shader != null) {
                shader.setLocalMatrix(matrix2);
                return;
            }
            return;
        }
        this.f23502a.drawPath(path, c0312h.f23545e);
    }

    private void C0(g.t0 t0Var, g.b bVar) {
        y("Symbol render", new Object[0]);
        if (bVar.f23315c != 0.0f && bVar.f23316d != 0.0f) {
            f6.e eVar = t0Var.f23454o;
            if (eVar == null) {
                eVar = f6.e.f23272e;
            }
            W0(this.f23505d, t0Var);
            C0312h c0312h = this.f23505d;
            c0312h.f23546f = bVar;
            if (!c0312h.f23541a.G.booleanValue()) {
                g.b bVar2 = this.f23505d.f23546f;
                O0(bVar2.f23313a, bVar2.f23314b, bVar2.f23315c, bVar2.f23316d);
            }
            g.b bVar3 = t0Var.f23470p;
            if (bVar3 != null) {
                this.f23502a.concat(o(this.f23505d.f23546f, bVar3, eVar));
                this.f23505d.f23547g = t0Var.f23470p;
            } else {
                Canvas canvas = this.f23502a;
                g.b bVar4 = this.f23505d.f23546f;
                canvas.translate(bVar4.f23313a, bVar4.f23314b);
            }
            boolean m02 = m0();
            F0(t0Var, true);
            if (m02) {
                j0(t0Var);
            }
            U0(t0Var);
        }
    }

    private float D(float f10, float f11, float f12, float f13) {
        return (f10 * f12) + (f11 * f13);
    }

    private void D0(g.w0 w0Var) {
        float f10;
        float f11;
        float f12;
        y("Text render", new Object[0]);
        W0(this.f23505d, w0Var);
        if (A()) {
            Matrix matrix = w0Var.f23488s;
            if (matrix != null) {
                this.f23502a.concat(matrix);
            }
            List list = w0Var.f23309o;
            float f13 = 0.0f;
            if (list != null && list.size() != 0) {
                f10 = ((g.p) w0Var.f23309o.get(0)).e(this);
            } else {
                f10 = 0.0f;
            }
            List list2 = w0Var.f23310p;
            if (list2 != null && list2.size() != 0) {
                f11 = ((g.p) w0Var.f23310p.get(0)).f(this);
            } else {
                f11 = 0.0f;
            }
            List list3 = w0Var.f23311q;
            if (list3 != null && list3.size() != 0) {
                f12 = ((g.p) w0Var.f23311q.get(0)).e(this);
            } else {
                f12 = 0.0f;
            }
            List list4 = w0Var.f23312r;
            if (list4 != null && list4.size() != 0) {
                f13 = ((g.p) w0Var.f23312r.get(0)).f(this);
            }
            g.e0.f O = O();
            if (O != g.e0.f.Start) {
                float n10 = n(w0Var);
                if (O == g.e0.f.Middle) {
                    n10 /= 2.0f;
                }
                f10 -= n10;
            }
            if (w0Var.f23432h == null) {
                i iVar = new i(f10, f11);
                E(w0Var, iVar);
                RectF rectF = iVar.f23552d;
                w0Var.f23432h = new g.b(rectF.left, rectF.top, rectF.width(), iVar.f23552d.height());
            }
            U0(w0Var);
            r(w0Var);
            p(w0Var);
            boolean m02 = m0();
            E(w0Var, new f(f10 + f12, f11 + f13));
            if (m02) {
                j0(w0Var);
            }
        }
    }

    private void E(g.y0 y0Var, j jVar) {
        if (A()) {
            Iterator it = y0Var.f23408i.iterator();
            boolean z10 = true;
            while (it.hasNext()) {
                g.n0 n0Var = (g.n0) it.next();
                if (n0Var instanceof g.c1) {
                    jVar.b(T0(((g.c1) n0Var).f23327c, z10, !it.hasNext()));
                } else {
                    l0(n0Var, jVar);
                }
                z10 = false;
            }
        }
    }

    private void E0(g.e1 e1Var) {
        float f10;
        y("Use render", new Object[0]);
        g.p pVar = e1Var.f23397s;
        if (pVar == null || !pVar.i()) {
            g.p pVar2 = e1Var.f23398t;
            if (pVar2 == null || !pVar2.i()) {
                W0(this.f23505d, e1Var);
                if (!A()) {
                    return;
                }
                g.n0 p10 = e1Var.f23444a.p(e1Var.f23394p);
                if (p10 == null) {
                    F("Use reference '%s' not found", e1Var.f23394p);
                    return;
                }
                Matrix matrix = e1Var.f23439o;
                if (matrix != null) {
                    this.f23502a.concat(matrix);
                }
                g.p pVar3 = e1Var.f23395q;
                float f11 = 0.0f;
                if (pVar3 != null) {
                    f10 = pVar3.e(this);
                } else {
                    f10 = 0.0f;
                }
                g.p pVar4 = e1Var.f23396r;
                if (pVar4 != null) {
                    f11 = pVar4.f(this);
                }
                this.f23502a.translate(f10, f11);
                p(e1Var);
                boolean m02 = m0();
                i0(e1Var);
                if (p10 instanceof g.f0) {
                    g.b f02 = f0(null, null, e1Var.f23397s, e1Var.f23398t);
                    S0();
                    y0((g.f0) p10, f02);
                    R0();
                } else if (p10 instanceof g.t0) {
                    g.p pVar5 = e1Var.f23397s;
                    if (pVar5 == null) {
                        pVar5 = new g.p(100.0f, g.d1.percent);
                    }
                    g.p pVar6 = e1Var.f23398t;
                    if (pVar6 == null) {
                        pVar6 = new g.p(100.0f, g.d1.percent);
                    }
                    g.b f03 = f0(null, null, pVar5, pVar6);
                    S0();
                    C0((g.t0) p10, f03);
                    R0();
                } else {
                    A0(p10);
                }
                h0();
                if (m02) {
                    j0(e1Var);
                }
                U0(e1Var);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void F(String str, Object... objArr) {
        Log.e("SVGAndroidRenderer", String.format(str, objArr));
    }

    private void F0(g.j0 j0Var, boolean z10) {
        if (z10) {
            i0(j0Var);
        }
        for (g.n0 n0Var : j0Var.getChildren()) {
            A0(n0Var);
        }
        if (z10) {
            h0();
        }
    }

    private void G(g.y0 y0Var, StringBuilder sb2) {
        Iterator it = y0Var.f23408i.iterator();
        boolean z10 = true;
        while (it.hasNext()) {
            g.n0 n0Var = (g.n0) it.next();
            if (n0Var instanceof g.y0) {
                G((g.y0) n0Var, sb2);
            } else if (n0Var instanceof g.c1) {
                sb2.append(T0(((g.c1) n0Var).f23327c, z10, !it.hasNext()));
            }
            z10 = false;
        }
    }

    private void H(g.j jVar, String str) {
        g.n0 p10 = jVar.f23444a.p(str);
        if (p10 == null) {
            Z0("Gradient reference '%s' not found", str);
        } else if (!(p10 instanceof g.j)) {
            F("Gradient href attributes must point to other gradient elements", new Object[0]);
        } else if (p10 == jVar) {
            F("Circular reference in gradient href attribute '%s'", str);
        } else {
            g.j jVar2 = (g.j) p10;
            if (jVar.f23424i == null) {
                jVar.f23424i = jVar2.f23424i;
            }
            if (jVar.f23425j == null) {
                jVar.f23425j = jVar2.f23425j;
            }
            if (jVar.f23426k == null) {
                jVar.f23426k = jVar2.f23426k;
            }
            if (jVar.f23423h.isEmpty()) {
                jVar.f23423h = jVar2.f23423h;
            }
            try {
                if (jVar instanceof g.m0) {
                    I((g.m0) jVar, (g.m0) p10);
                } else {
                    J((g.q0) jVar, (g.q0) p10);
                }
            } catch (ClassCastException unused) {
            }
            String str2 = jVar2.f23427l;
            if (str2 != null) {
                H(jVar, str2);
            }
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:63:0x0101, code lost:
        if (r7 != 8) goto L53;
     */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0038  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x003b  */
    /* JADX WARN: Removed duplicated region for block: B:19:0x0063  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0068  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x006d  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x0072  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0079  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x007e  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x0083  */
    /* JADX WARN: Removed duplicated region for block: B:34:0x008b  */
    /* JADX WARN: Removed duplicated region for block: B:70:0x0118  */
    /* JADX WARN: Removed duplicated region for block: B:72:0x0127  */
    /* JADX WARN: Removed duplicated region for block: B:77:0x014a  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void H0(f6.g.r r12, f6.h.c r13) {
        /*
            Method dump skipped, instructions count: 354
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: f6.h.H0(f6.g$r, f6.h$c):void");
    }

    private void I(g.m0 m0Var, g.m0 m0Var2) {
        if (m0Var.f23440m == null) {
            m0Var.f23440m = m0Var2.f23440m;
        }
        if (m0Var.f23441n == null) {
            m0Var.f23441n = m0Var2.f23441n;
        }
        if (m0Var.f23442o == null) {
            m0Var.f23442o = m0Var2.f23442o;
        }
        if (m0Var.f23443p == null) {
            m0Var.f23443p = m0Var2.f23443p;
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:18:0x0038  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x0059  */
    /* JADX WARN: Removed duplicated region for block: B:32:0x0076  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x0084  */
    /* JADX WARN: Removed duplicated region for block: B:39:0x0098  */
    /* JADX WARN: Removed duplicated region for block: B:44:0x00ac  */
    /* JADX WARN: Removed duplicated region for block: B:52:0x00d0  */
    /* JADX WARN: Removed duplicated region for block: B:58:0x00e9  */
    /* JADX WARN: Removed duplicated region for block: B:63:? A[RETURN, SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:65:? A[ADDED_TO_REGION, RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void I0(f6.g.l r10) {
        /*
            Method dump skipped, instructions count: 244
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: f6.h.I0(f6.g$l):void");
    }

    private void J(g.q0 q0Var, g.q0 q0Var2) {
        if (q0Var.f23459m == null) {
            q0Var.f23459m = q0Var2.f23459m;
        }
        if (q0Var.f23460n == null) {
            q0Var.f23460n = q0Var2.f23460n;
        }
        if (q0Var.f23461o == null) {
            q0Var.f23461o = q0Var2.f23461o;
        }
        if (q0Var.f23462p == null) {
            q0Var.f23462p = q0Var2.f23462p;
        }
        if (q0Var.f23463q == null) {
            q0Var.f23463q = q0Var2.f23463q;
        }
    }

    private void J0(g.s sVar, g.k0 k0Var, g.b bVar) {
        float f10;
        float f11;
        float f12;
        y("Mask render", new Object[0]);
        Boolean bool = sVar.f23471o;
        if (bool != null && bool.booleanValue()) {
            g.p pVar = sVar.f23475s;
            if (pVar != null) {
                f11 = pVar.e(this);
            } else {
                f11 = bVar.f23315c;
            }
            g.p pVar2 = sVar.f23476t;
            if (pVar2 != null) {
                f12 = pVar2.f(this);
            } else {
                f12 = bVar.f23316d;
            }
        } else {
            g.p pVar3 = sVar.f23475s;
            float f13 = 1.2f;
            if (pVar3 != null) {
                f10 = pVar3.d(this, 1.0f);
            } else {
                f10 = 1.2f;
            }
            g.p pVar4 = sVar.f23476t;
            if (pVar4 != null) {
                f13 = pVar4.d(this, 1.0f);
            }
            f11 = f10 * bVar.f23315c;
            f12 = f13 * bVar.f23316d;
        }
        if (f11 != 0.0f && f12 != 0.0f) {
            S0();
            C0312h M = M(sVar);
            this.f23505d = M;
            M.f23541a.f23356x = Float.valueOf(1.0f);
            boolean m02 = m0();
            this.f23502a.save();
            Boolean bool2 = sVar.f23472p;
            if (bool2 != null && !bool2.booleanValue()) {
                this.f23502a.translate(bVar.f23313a, bVar.f23314b);
                this.f23502a.scale(bVar.f23315c, bVar.f23316d);
            }
            F0(sVar, false);
            this.f23502a.restore();
            if (m02) {
                k0(k0Var, bVar);
            }
            R0();
        }
    }

    private void K(g.y yVar, String str) {
        g.n0 p10 = yVar.f23444a.p(str);
        if (p10 == null) {
            Z0("Pattern reference '%s' not found", str);
        } else if (!(p10 instanceof g.y)) {
            F("Pattern href attributes must point to other pattern elements", new Object[0]);
        } else if (p10 == yVar) {
            F("Circular reference in pattern href attribute '%s'", str);
        } else {
            g.y yVar2 = (g.y) p10;
            if (yVar.f23489q == null) {
                yVar.f23489q = yVar2.f23489q;
            }
            if (yVar.f23490r == null) {
                yVar.f23490r = yVar2.f23490r;
            }
            if (yVar.f23491s == null) {
                yVar.f23491s = yVar2.f23491s;
            }
            if (yVar.f23492t == null) {
                yVar.f23492t = yVar2.f23492t;
            }
            if (yVar.f23493u == null) {
                yVar.f23493u = yVar2.f23493u;
            }
            if (yVar.f23494v == null) {
                yVar.f23494v = yVar2.f23494v;
            }
            if (yVar.f23495w == null) {
                yVar.f23495w = yVar2.f23495w;
            }
            if (yVar.f23408i.isEmpty()) {
                yVar.f23408i = yVar2.f23408i;
            }
            if (yVar.f23470p == null) {
                yVar.f23470p = yVar2.f23470p;
            }
            if (yVar.f23454o == null) {
                yVar.f23454o = yVar2.f23454o;
            }
            String str2 = yVar2.f23496x;
            if (str2 != null) {
                K(yVar, str2);
            }
        }
    }

    private void K0(g.s0 s0Var) {
        Set a10;
        String language = Locale.getDefault().getLanguage();
        f6.g.k();
        for (g.n0 n0Var : s0Var.getChildren()) {
            if (n0Var instanceof g.g0) {
                g.g0 g0Var = (g.g0) n0Var;
                if (g0Var.b() == null && ((a10 = g0Var.a()) == null || (!a10.isEmpty() && a10.contains(language)))) {
                    Set f10 = g0Var.f();
                    if (f10 != null) {
                        if (f23501i == null) {
                            V();
                        }
                        if (!f10.isEmpty() && f23501i.containsAll(f10)) {
                        }
                    }
                    Set l10 = g0Var.l();
                    if (l10 != null) {
                        l10.isEmpty();
                    } else {
                        Set m10 = g0Var.m();
                        if (m10 != null) {
                            m10.isEmpty();
                        } else {
                            A0(n0Var);
                            return;
                        }
                    }
                }
            }
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:106:0x020b  */
    /* JADX WARN: Removed duplicated region for block: B:79:0x0190  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void L(f6.g.k0 r21, android.graphics.Path r22, f6.g.y r23) {
        /*
            Method dump skipped, instructions count: 530
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: f6.h.L(f6.g$k0, android.graphics.Path, f6.g$y):void");
    }

    private void L0(g.z0 z0Var) {
        float f10;
        y("TextPath render", new Object[0]);
        W0(this.f23505d, z0Var);
        if (A() && Y0()) {
            g.n0 p10 = z0Var.f23444a.p(z0Var.f23498o);
            if (p10 == null) {
                F("TextPath reference '%s' not found", z0Var.f23498o);
                return;
            }
            g.v vVar = (g.v) p10;
            Path f11 = new d(vVar.f23481o).f();
            Matrix matrix = vVar.f23433n;
            if (matrix != null) {
                f11.transform(matrix);
            }
            PathMeasure pathMeasure = new PathMeasure(f11, false);
            g.p pVar = z0Var.f23499p;
            if (pVar != null) {
                f10 = pVar.d(this, pathMeasure.getLength());
            } else {
                f10 = 0.0f;
            }
            g.e0.f O = O();
            if (O != g.e0.f.Start) {
                float n10 = n(z0Var);
                if (O == g.e0.f.Middle) {
                    n10 /= 2.0f;
                }
                f10 -= n10;
            }
            r((g.k0) z0Var.d());
            boolean m02 = m0();
            E(z0Var, new e(f11, f10, 0.0f));
            if (m02) {
                j0(z0Var);
            }
        }
    }

    private C0312h M(g.n0 n0Var) {
        C0312h c0312h = new C0312h();
        V0(c0312h, g.e0.a());
        return N(n0Var, c0312h);
    }

    private boolean M0() {
        if (this.f23505d.f23541a.f23356x.floatValue() >= 1.0f && this.f23505d.f23541a.R == null) {
            return false;
        }
        return true;
    }

    private C0312h N(g.n0 n0Var, C0312h c0312h) {
        ArrayList<g.l0> arrayList = new ArrayList();
        while (true) {
            if (n0Var instanceof g.l0) {
                arrayList.add(0, (g.l0) n0Var);
            }
            g.j0 j0Var = n0Var.f23445b;
            if (j0Var == null) {
                break;
            }
            n0Var = (g.n0) j0Var;
        }
        for (g.l0 l0Var : arrayList) {
            W0(c0312h, l0Var);
        }
        C0312h c0312h2 = this.f23505d;
        c0312h.f23547g = c0312h2.f23547g;
        c0312h.f23546f = c0312h2.f23546f;
        return c0312h;
    }

    private void N0() {
        this.f23505d = new C0312h();
        this.f23506e = new Stack();
        V0(this.f23505d, g.e0.a());
        C0312h c0312h = this.f23505d;
        c0312h.f23546f = null;
        c0312h.f23548h = false;
        this.f23506e.push(new C0312h(c0312h));
        this.f23508g = new Stack();
        this.f23507f = new Stack();
    }

    private g.e0.f O() {
        g.e0.f fVar;
        g.e0 e0Var = this.f23505d.f23541a;
        if (e0Var.E != g.e0.h.LTR && (fVar = e0Var.F) != g.e0.f.Middle) {
            g.e0.f fVar2 = g.e0.f.Start;
            if (fVar == fVar2) {
                return g.e0.f.End;
            }
            return fVar2;
        }
        return e0Var.F;
    }

    private void O0(float f10, float f11, float f12, float f13) {
        float f14 = f12 + f10;
        float f15 = f13 + f11;
        g.c cVar = this.f23505d.f23541a.H;
        if (cVar != null) {
            f10 += cVar.f23326d.e(this);
            f11 += this.f23505d.f23541a.H.f23323a.f(this);
            f14 -= this.f23505d.f23541a.H.f23324b.e(this);
            f15 -= this.f23505d.f23541a.H.f23325c.f(this);
        }
        this.f23502a.clipRect(f10, f11, f14, f15);
    }

    private Path.FillType P() {
        g.e0.a aVar = this.f23505d.f23541a.Q;
        if (aVar != null && aVar == g.e0.a.EvenOdd) {
            return Path.FillType.EVEN_ODD;
        }
        return Path.FillType.WINDING;
    }

    private void P0(C0312h c0312h, boolean z10, g.o0 o0Var) {
        Float f10;
        int i10;
        g.e0 e0Var = c0312h.f23541a;
        if (z10) {
            f10 = e0Var.f23347o;
        } else {
            f10 = e0Var.f23349q;
        }
        float floatValue = f10.floatValue();
        if (o0Var instanceof g.f) {
            i10 = ((g.f) o0Var).f23401d;
        } else if (o0Var instanceof g.C0311g) {
            i10 = c0312h.f23541a.f23357y.f23401d;
        } else {
            return;
        }
        int x10 = x(i10, floatValue);
        if (z10) {
            c0312h.f23544d.setColor(x10);
        } else {
            c0312h.f23545e.setColor(x10);
        }
    }

    private void Q0(boolean z10, g.c0 c0Var) {
        boolean z11 = false;
        if (z10) {
            if (W(c0Var.f23436e, 2147483648L)) {
                C0312h c0312h = this.f23505d;
                g.e0 e0Var = c0312h.f23541a;
                g.o0 o0Var = c0Var.f23436e.S;
                e0Var.f23345e = o0Var;
                if (o0Var != null) {
                    z11 = true;
                }
                c0312h.f23542b = z11;
            }
            if (W(c0Var.f23436e, 4294967296L)) {
                this.f23505d.f23541a.f23347o = c0Var.f23436e.T;
            }
            if (W(c0Var.f23436e, 6442450944L)) {
                C0312h c0312h2 = this.f23505d;
                P0(c0312h2, z10, c0312h2.f23541a.f23345e);
                return;
            }
            return;
        }
        if (W(c0Var.f23436e, 2147483648L)) {
            C0312h c0312h3 = this.f23505d;
            g.e0 e0Var2 = c0312h3.f23541a;
            g.o0 o0Var2 = c0Var.f23436e.S;
            e0Var2.f23348p = o0Var2;
            if (o0Var2 != null) {
                z11 = true;
            }
            c0312h3.f23543c = z11;
        }
        if (W(c0Var.f23436e, 4294967296L)) {
            this.f23505d.f23541a.f23349q = c0Var.f23436e.T;
        }
        if (W(c0Var.f23436e, 6442450944L)) {
            C0312h c0312h4 = this.f23505d;
            P0(c0312h4, z10, c0312h4.f23541a.f23348p);
        }
    }

    private void R0() {
        this.f23502a.restore();
        this.f23505d = (C0312h) this.f23506e.pop();
    }

    private void S0() {
        this.f23502a.save();
        this.f23506e.push(this.f23505d);
        this.f23505d = new C0312h(this.f23505d);
    }

    private String T0(String str, boolean z10, boolean z11) {
        if (this.f23505d.f23548h) {
            return str.replaceAll("[\\n\\t]", " ");
        }
        String replaceAll = str.replaceAll("\\n", "").replaceAll("\\t", " ");
        if (z10) {
            replaceAll = replaceAll.replaceAll("^\\s+", "");
        }
        if (z11) {
            replaceAll = replaceAll.replaceAll("\\s+$", "");
        }
        return replaceAll.replaceAll("\\s{2,}", " ");
    }

    private Path.FillType U() {
        g.e0.a aVar = this.f23505d.f23541a.f23346i;
        if (aVar != null && aVar == g.e0.a.EvenOdd) {
            return Path.FillType.EVEN_ODD;
        }
        return Path.FillType.WINDING;
    }

    private void U0(g.k0 k0Var) {
        if (k0Var.f23445b != null && k0Var.f23432h != null) {
            Matrix matrix = new Matrix();
            if (((Matrix) this.f23508g.peek()).invert(matrix)) {
                g.b bVar = k0Var.f23432h;
                float f10 = bVar.f23313a;
                float f11 = bVar.f23314b;
                float b10 = bVar.b();
                g.b bVar2 = k0Var.f23432h;
                float f12 = bVar2.f23314b;
                float b11 = bVar2.b();
                float c10 = k0Var.f23432h.c();
                g.b bVar3 = k0Var.f23432h;
                float[] fArr = {f10, f11, b10, f12, b11, c10, bVar3.f23313a, bVar3.c()};
                matrix.preConcat(this.f23502a.getMatrix());
                matrix.mapPoints(fArr);
                float f13 = fArr[0];
                float f14 = fArr[1];
                RectF rectF = new RectF(f13, f14, f13, f14);
                for (int i10 = 2; i10 <= 6; i10 += 2) {
                    float f15 = fArr[i10];
                    if (f15 < rectF.left) {
                        rectF.left = f15;
                    }
                    if (f15 > rectF.right) {
                        rectF.right = f15;
                    }
                    float f16 = fArr[i10 + 1];
                    if (f16 < rectF.top) {
                        rectF.top = f16;
                    }
                    if (f16 > rectF.bottom) {
                        rectF.bottom = f16;
                    }
                }
                g.k0 k0Var2 = (g.k0) this.f23507f.peek();
                g.b bVar4 = k0Var2.f23432h;
                if (bVar4 == null) {
                    k0Var2.f23432h = g.b.a(rectF.left, rectF.top, rectF.right, rectF.bottom);
                } else {
                    bVar4.e(g.b.a(rectF.left, rectF.top, rectF.right, rectF.bottom));
                }
            }
        }
    }

    private static synchronized void V() {
        synchronized (h.class) {
            HashSet hashSet = new HashSet();
            f23501i = hashSet;
            hashSet.add("Structure");
            f23501i.add("BasicStructure");
            f23501i.add("ConditionalProcessing");
            f23501i.add("Image");
            f23501i.add("Style");
            f23501i.add("ViewportAttribute");
            f23501i.add("Shape");
            f23501i.add("BasicText");
            f23501i.add("PaintAttribute");
            f23501i.add("BasicPaintAttribute");
            f23501i.add("OpacityAttribute");
            f23501i.add("BasicGraphicsAttribute");
            f23501i.add("Marker");
            f23501i.add("Gradient");
            f23501i.add("Pattern");
            f23501i.add("Clip");
            f23501i.add("BasicClip");
            f23501i.add("Mask");
            f23501i.add("View");
        }
    }

    private void V0(C0312h c0312h, g.e0 e0Var) {
        boolean z10;
        boolean z11;
        boolean z12;
        int i10;
        boolean z13;
        boolean z14;
        if (W(e0Var, 4096L)) {
            c0312h.f23541a.f23357y = e0Var.f23357y;
        }
        if (W(e0Var, 2048L)) {
            c0312h.f23541a.f23356x = e0Var.f23356x;
        }
        boolean z15 = false;
        if (W(e0Var, 1L)) {
            c0312h.f23541a.f23345e = e0Var.f23345e;
            g.o0 o0Var = e0Var.f23345e;
            if (o0Var != null && o0Var != g.f.f23400i) {
                z14 = true;
            } else {
                z14 = false;
            }
            c0312h.f23542b = z14;
        }
        if (W(e0Var, 4L)) {
            c0312h.f23541a.f23347o = e0Var.f23347o;
        }
        if (W(e0Var, 6149L)) {
            P0(c0312h, true, c0312h.f23541a.f23345e);
        }
        if (W(e0Var, 2L)) {
            c0312h.f23541a.f23346i = e0Var.f23346i;
        }
        if (W(e0Var, 8L)) {
            c0312h.f23541a.f23348p = e0Var.f23348p;
            g.o0 o0Var2 = e0Var.f23348p;
            if (o0Var2 != null && o0Var2 != g.f.f23400i) {
                z13 = true;
            } else {
                z13 = false;
            }
            c0312h.f23543c = z13;
        }
        if (W(e0Var, 16L)) {
            c0312h.f23541a.f23349q = e0Var.f23349q;
        }
        if (W(e0Var, 6168L)) {
            P0(c0312h, false, c0312h.f23541a.f23348p);
        }
        if (W(e0Var, 34359738368L)) {
            c0312h.f23541a.W = e0Var.W;
        }
        if (W(e0Var, 32L)) {
            g.e0 e0Var2 = c0312h.f23541a;
            g.p pVar = e0Var.f23350r;
            e0Var2.f23350r = pVar;
            c0312h.f23545e.setStrokeWidth(pVar.c(this));
        }
        if (W(e0Var, 64L)) {
            c0312h.f23541a.f23351s = e0Var.f23351s;
            int i11 = a.f23511b[e0Var.f23351s.ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 == 3) {
                        c0312h.f23545e.setStrokeCap(Paint.Cap.SQUARE);
                    }
                } else {
                    c0312h.f23545e.setStrokeCap(Paint.Cap.ROUND);
                }
            } else {
                c0312h.f23545e.setStrokeCap(Paint.Cap.BUTT);
            }
        }
        if (W(e0Var, 128L)) {
            c0312h.f23541a.f23352t = e0Var.f23352t;
            int i12 = a.f23512c[e0Var.f23352t.ordinal()];
            if (i12 != 1) {
                if (i12 != 2) {
                    if (i12 == 3) {
                        c0312h.f23545e.setStrokeJoin(Paint.Join.BEVEL);
                    }
                } else {
                    c0312h.f23545e.setStrokeJoin(Paint.Join.ROUND);
                }
            } else {
                c0312h.f23545e.setStrokeJoin(Paint.Join.MITER);
            }
        }
        if (W(e0Var, 256L)) {
            c0312h.f23541a.f23353u = e0Var.f23353u;
            c0312h.f23545e.setStrokeMiter(e0Var.f23353u.floatValue());
        }
        if (W(e0Var, 512L)) {
            c0312h.f23541a.f23354v = e0Var.f23354v;
        }
        if (W(e0Var, 1024L)) {
            c0312h.f23541a.f23355w = e0Var.f23355w;
        }
        Typeface typeface = null;
        if (W(e0Var, 1536L)) {
            g.p[] pVarArr = c0312h.f23541a.f23354v;
            if (pVarArr == null) {
                c0312h.f23545e.setPathEffect(null);
            } else {
                int length = pVarArr.length;
                if (length % 2 == 0) {
                    i10 = length;
                } else {
                    i10 = length * 2;
                }
                float[] fArr = new float[i10];
                float f10 = 0.0f;
                for (int i13 = 0; i13 < i10; i13++) {
                    float c10 = c0312h.f23541a.f23354v[i13 % length].c(this);
                    fArr[i13] = c10;
                    f10 += c10;
                }
                if (f10 == 0.0f) {
                    c0312h.f23545e.setPathEffect(null);
                } else {
                    float c11 = c0312h.f23541a.f23355w.c(this);
                    if (c11 < 0.0f) {
                        c11 = (c11 % f10) + f10;
                    }
                    c0312h.f23545e.setPathEffect(new DashPathEffect(fArr, c11));
                }
            }
        }
        if (W(e0Var, 16384L)) {
            float Q = Q();
            c0312h.f23541a.A = e0Var.A;
            c0312h.f23544d.setTextSize(e0Var.A.d(this, Q));
            c0312h.f23545e.setTextSize(e0Var.A.d(this, Q));
        }
        if (W(e0Var, 8192L)) {
            c0312h.f23541a.f23358z = e0Var.f23358z;
        }
        if (W(e0Var, 32768L)) {
            if (e0Var.B.intValue() == -1 && c0312h.f23541a.B.intValue() > 100) {
                g.e0 e0Var3 = c0312h.f23541a;
                e0Var3.B = Integer.valueOf(e0Var3.B.intValue() - 100);
            } else if (e0Var.B.intValue() == 1 && c0312h.f23541a.B.intValue() < 900) {
                g.e0 e0Var4 = c0312h.f23541a;
                e0Var4.B = Integer.valueOf(e0Var4.B.intValue() + 100);
            } else {
                c0312h.f23541a.B = e0Var.B;
            }
        }
        if (W(e0Var, 65536L)) {
            c0312h.f23541a.C = e0Var.C;
        }
        if (W(e0Var, 106496L)) {
            if (c0312h.f23541a.f23358z != null && this.f23504c != null) {
                f6.g.k();
                for (String str : c0312h.f23541a.f23358z) {
                    g.e0 e0Var5 = c0312h.f23541a;
                    typeface = t(str, e0Var5.B, e0Var5.C);
                    if (typeface != null) {
                        break;
                    }
                }
            }
            if (typeface == null) {
                g.e0 e0Var6 = c0312h.f23541a;
                typeface = t("serif", e0Var6.B, e0Var6.C);
            }
            c0312h.f23544d.setTypeface(typeface);
            c0312h.f23545e.setTypeface(typeface);
        }
        if (W(e0Var, 131072L)) {
            c0312h.f23541a.D = e0Var.D;
            Paint paint = c0312h.f23544d;
            g.e0.EnumC0310g enumC0310g = e0Var.D;
            g.e0.EnumC0310g enumC0310g2 = g.e0.EnumC0310g.LineThrough;
            if (enumC0310g == enumC0310g2) {
                z10 = true;
            } else {
                z10 = false;
            }
            paint.setStrikeThruText(z10);
            Paint paint2 = c0312h.f23544d;
            g.e0.EnumC0310g enumC0310g3 = e0Var.D;
            g.e0.EnumC0310g enumC0310g4 = g.e0.EnumC0310g.Underline;
            if (enumC0310g3 == enumC0310g4) {
                z11 = true;
            } else {
                z11 = false;
            }
            paint2.setUnderlineText(z11);
            Paint paint3 = c0312h.f23545e;
            if (e0Var.D == enumC0310g2) {
                z12 = true;
            } else {
                z12 = false;
            }
            paint3.setStrikeThruText(z12);
            Paint paint4 = c0312h.f23545e;
            if (e0Var.D == enumC0310g4) {
                z15 = true;
            }
            paint4.setUnderlineText(z15);
        }
        if (W(e0Var, 68719476736L)) {
            c0312h.f23541a.E = e0Var.E;
        }
        if (W(e0Var, 262144L)) {
            c0312h.f23541a.F = e0Var.F;
        }
        if (W(e0Var, 524288L)) {
            c0312h.f23541a.G = e0Var.G;
        }
        if (W(e0Var, 2097152L)) {
            c0312h.f23541a.I = e0Var.I;
        }
        if (W(e0Var, 4194304L)) {
            c0312h.f23541a.J = e0Var.J;
        }
        if (W(e0Var, 8388608L)) {
            c0312h.f23541a.K = e0Var.K;
        }
        if (W(e0Var, 16777216L)) {
            c0312h.f23541a.L = e0Var.L;
        }
        if (W(e0Var, 33554432L)) {
            c0312h.f23541a.M = e0Var.M;
        }
        if (W(e0Var, 1048576L)) {
            c0312h.f23541a.H = e0Var.H;
        }
        if (W(e0Var, 268435456L)) {
            c0312h.f23541a.P = e0Var.P;
        }
        if (W(e0Var, 536870912L)) {
            c0312h.f23541a.Q = e0Var.Q;
        }
        if (W(e0Var, 1073741824L)) {
            c0312h.f23541a.R = e0Var.R;
        }
        if (W(e0Var, 67108864L)) {
            c0312h.f23541a.N = e0Var.N;
        }
        if (W(e0Var, 134217728L)) {
            c0312h.f23541a.O = e0Var.O;
        }
        if (W(e0Var, 8589934592L)) {
            c0312h.f23541a.U = e0Var.U;
        }
        if (W(e0Var, 17179869184L)) {
            c0312h.f23541a.V = e0Var.V;
        }
        if (W(e0Var, 137438953472L)) {
            c0312h.f23541a.X = e0Var.X;
        }
    }

    private boolean W(g.e0 e0Var, long j10) {
        if ((e0Var.f23344d & j10) != 0) {
            return true;
        }
        return false;
    }

    private void W0(C0312h c0312h, g.l0 l0Var) {
        boolean z10;
        if (l0Var.f23445b == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c0312h.f23541a.b(z10);
        g.e0 e0Var = l0Var.f23436e;
        if (e0Var != null) {
            V0(c0312h, e0Var);
        }
        if (this.f23504c.n()) {
            for (b.p pVar : this.f23504c.d()) {
                if (f6.b.l(this.f23509h, pVar.f23251a, l0Var)) {
                    V0(c0312h, pVar.f23252b);
                }
            }
        }
        g.e0 e0Var2 = l0Var.f23437f;
        if (e0Var2 != null) {
            V0(c0312h, e0Var2);
        }
    }

    private void X(boolean z10, g.b bVar, g.m0 m0Var) {
        boolean z11;
        Paint paint;
        float f10;
        float f11;
        float f12;
        float f13;
        float f14;
        float f15;
        float f16;
        float f17;
        float f18;
        float f19;
        float f20;
        String str = m0Var.f23427l;
        if (str != null) {
            H(m0Var, str);
        }
        Boolean bool = m0Var.f23424i;
        int i10 = 0;
        if (bool != null && bool.booleanValue()) {
            z11 = true;
        } else {
            z11 = false;
        }
        C0312h c0312h = this.f23505d;
        if (z10) {
            paint = c0312h.f23544d;
        } else {
            paint = c0312h.f23545e;
        }
        if (z11) {
            g.b S = S();
            g.p pVar = m0Var.f23440m;
            if (pVar != null) {
                f18 = pVar.e(this);
            } else {
                f18 = 0.0f;
            }
            g.p pVar2 = m0Var.f23441n;
            if (pVar2 != null) {
                f11 = pVar2.f(this);
            } else {
                f11 = 0.0f;
            }
            g.p pVar3 = m0Var.f23442o;
            if (pVar3 != null) {
                f19 = pVar3.e(this);
            } else {
                f19 = S.f23315c;
            }
            g.p pVar4 = m0Var.f23443p;
            if (pVar4 != null) {
                f20 = pVar4.f(this);
            } else {
                f20 = 0.0f;
            }
            f16 = f19;
            f14 = f18;
            f15 = f20;
        } else {
            g.p pVar5 = m0Var.f23440m;
            if (pVar5 != null) {
                f10 = pVar5.d(this, 1.0f);
            } else {
                f10 = 0.0f;
            }
            g.p pVar6 = m0Var.f23441n;
            if (pVar6 != null) {
                f11 = pVar6.d(this, 1.0f);
            } else {
                f11 = 0.0f;
            }
            g.p pVar7 = m0Var.f23442o;
            if (pVar7 != null) {
                f12 = pVar7.d(this, 1.0f);
            } else {
                f12 = 1.0f;
            }
            g.p pVar8 = m0Var.f23443p;
            if (pVar8 != null) {
                f13 = pVar8.d(this, 1.0f);
            } else {
                f13 = 0.0f;
            }
            f14 = f10;
            f15 = f13;
            f16 = f12;
        }
        float f21 = f11;
        S0();
        this.f23505d = M(m0Var);
        Matrix matrix = new Matrix();
        if (!z11) {
            matrix.preTranslate(bVar.f23313a, bVar.f23314b);
            matrix.preScale(bVar.f23315c, bVar.f23316d);
        }
        Matrix matrix2 = m0Var.f23425j;
        if (matrix2 != null) {
            matrix.preConcat(matrix2);
        }
        int size = m0Var.f23423h.size();
        if (size == 0) {
            R0();
            if (z10) {
                this.f23505d.f23542b = false;
                return;
            } else {
                this.f23505d.f23543c = false;
                return;
            }
        }
        int[] iArr = new int[size];
        float[] fArr = new float[size];
        float f22 = -1.0f;
        for (g.n0 n0Var : m0Var.f23423h) {
            g.d0 d0Var = (g.d0) n0Var;
            Float f23 = d0Var.f23332h;
            if (f23 != null) {
                f17 = f23.floatValue();
            } else {
                f17 = 0.0f;
            }
            if (i10 != 0 && f17 < f22) {
                fArr[i10] = f22;
            } else {
                fArr[i10] = f17;
                f22 = f17;
            }
            S0();
            W0(this.f23505d, d0Var);
            g.e0 e0Var = this.f23505d.f23541a;
            g.f fVar = (g.f) e0Var.N;
            if (fVar == null) {
                fVar = g.f.f23399e;
            }
            iArr[i10] = x(fVar.f23401d, e0Var.O.floatValue());
            i10++;
            R0();
        }
        if ((f14 == f16 && f21 == f15) || size == 1) {
            R0();
            paint.setColor(iArr[size - 1]);
            return;
        }
        Shader.TileMode tileMode = Shader.TileMode.CLAMP;
        g.k kVar = m0Var.f23426k;
        if (kVar != null) {
            if (kVar == g.k.reflect) {
                tileMode = Shader.TileMode.MIRROR;
            } else if (kVar == g.k.repeat) {
                tileMode = Shader.TileMode.REPEAT;
            }
        }
        Shader.TileMode tileMode2 = tileMode;
        R0();
        LinearGradient linearGradient = new LinearGradient(f14, f21, f16, f15, iArr, fArr, tileMode2);
        linearGradient.setLocalMatrix(matrix);
        paint.setShader(linearGradient);
        paint.setAlpha(w(this.f23505d.f23541a.f23347o.floatValue()));
    }

    private void X0() {
        int i10;
        g.e0 e0Var = this.f23505d.f23541a;
        g.o0 o0Var = e0Var.U;
        if (o0Var instanceof g.f) {
            i10 = ((g.f) o0Var).f23401d;
        } else if (o0Var instanceof g.C0311g) {
            i10 = e0Var.f23357y.f23401d;
        } else {
            return;
        }
        Float f10 = e0Var.V;
        if (f10 != null) {
            i10 = x(i10, f10.floatValue());
        }
        this.f23502a.drawColor(i10);
    }

    private Path Y(g.d dVar) {
        float f10;
        g.p pVar = dVar.f23329o;
        float f11 = 0.0f;
        if (pVar != null) {
            f10 = pVar.e(this);
        } else {
            f10 = 0.0f;
        }
        g.p pVar2 = dVar.f23330p;
        if (pVar2 != null) {
            f11 = pVar2.f(this);
        }
        float f12 = f11;
        float c10 = dVar.f23331q.c(this);
        float f13 = f10 - c10;
        float f14 = f12 - c10;
        float f15 = f10 + c10;
        float f16 = f12 + c10;
        if (dVar.f23432h == null) {
            float f17 = 2.0f * c10;
            dVar.f23432h = new g.b(f13, f14, f17, f17);
        }
        float f18 = c10 * 0.5522848f;
        Path path = new Path();
        path.moveTo(f10, f14);
        float f19 = f10 + f18;
        float f20 = f12 - f18;
        path.cubicTo(f19, f14, f15, f20, f15, f12);
        float f21 = f12 + f18;
        path.cubicTo(f15, f21, f19, f16, f10, f16);
        float f22 = f10 - f18;
        path.cubicTo(f22, f16, f13, f21, f13, f12);
        path.cubicTo(f13, f20, f22, f14, f10, f14);
        path.close();
        return path;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean Y0() {
        Boolean bool = this.f23505d.f23541a.M;
        if (bool != null) {
            return bool.booleanValue();
        }
        return true;
    }

    private Path Z(g.i iVar) {
        float f10;
        g.p pVar = iVar.f23414o;
        float f11 = 0.0f;
        if (pVar != null) {
            f10 = pVar.e(this);
        } else {
            f10 = 0.0f;
        }
        g.p pVar2 = iVar.f23415p;
        if (pVar2 != null) {
            f11 = pVar2.f(this);
        }
        float f12 = f11;
        float e10 = iVar.f23416q.e(this);
        float f13 = iVar.f23417r.f(this);
        float f14 = f10 - e10;
        float f15 = f12 - f13;
        float f16 = f10 + e10;
        float f17 = f12 + f13;
        if (iVar.f23432h == null) {
            iVar.f23432h = new g.b(f14, f15, e10 * 2.0f, 2.0f * f13);
        }
        float f18 = e10 * 0.5522848f;
        float f19 = f13 * 0.5522848f;
        Path path = new Path();
        path.moveTo(f10, f15);
        float f20 = f10 + f18;
        float f21 = f12 - f19;
        path.cubicTo(f20, f15, f16, f21, f16, f12);
        float f22 = f12 + f19;
        path.cubicTo(f16, f22, f20, f17, f10, f17);
        float f23 = f10 - f18;
        path.cubicTo(f23, f17, f14, f22, f14, f12);
        path.cubicTo(f14, f21, f23, f15, f10, f15);
        path.close();
        return path;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void Z0(String str, Object... objArr) {
        Log.w("SVGAndroidRenderer", String.format(str, objArr));
    }

    private Path a0(g.q qVar) {
        float e10;
        float f10;
        float e11;
        g.p pVar = qVar.f23455o;
        float f11 = 0.0f;
        if (pVar == null) {
            e10 = 0.0f;
        } else {
            e10 = pVar.e(this);
        }
        g.p pVar2 = qVar.f23456p;
        if (pVar2 == null) {
            f10 = 0.0f;
        } else {
            f10 = pVar2.f(this);
        }
        g.p pVar3 = qVar.f23457q;
        if (pVar3 == null) {
            e11 = 0.0f;
        } else {
            e11 = pVar3.e(this);
        }
        g.p pVar4 = qVar.f23458r;
        if (pVar4 != null) {
            f11 = pVar4.f(this);
        }
        if (qVar.f23432h == null) {
            qVar.f23432h = new g.b(Math.min(e10, e11), Math.min(f10, f11), Math.abs(e11 - e10), Math.abs(f11 - f10));
        }
        Path path = new Path();
        path.moveTo(e10, f10);
        path.lineTo(e11, f11);
        return path;
    }

    private Path b0(g.z zVar) {
        Path path = new Path();
        float[] fArr = zVar.f23497o;
        path.moveTo(fArr[0], fArr[1]);
        int i10 = 2;
        while (true) {
            float[] fArr2 = zVar.f23497o;
            if (i10 >= fArr2.length) {
                break;
            }
            path.lineTo(fArr2[i10], fArr2[i10 + 1]);
            i10 += 2;
        }
        if (zVar instanceof g.a0) {
            path.close();
        }
        if (zVar.f23432h == null) {
            zVar.f23432h = m(path);
        }
        return path;
    }

    /* JADX WARN: Removed duplicated region for block: B:16:0x0048  */
    /* JADX WARN: Removed duplicated region for block: B:17:0x004e  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0053  */
    /* JADX WARN: Removed duplicated region for block: B:21:0x0059  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x006a  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private android.graphics.Path c0(f6.g.b0 r20) {
        /*
            Method dump skipped, instructions count: 224
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: f6.h.c0(f6.g$b0):android.graphics.Path");
    }

    private Path d0(g.w0 w0Var) {
        float f10;
        float f11;
        float f12;
        List list = w0Var.f23309o;
        float f13 = 0.0f;
        if (list != null && list.size() != 0) {
            f10 = ((g.p) w0Var.f23309o.get(0)).e(this);
        } else {
            f10 = 0.0f;
        }
        List list2 = w0Var.f23310p;
        if (list2 != null && list2.size() != 0) {
            f11 = ((g.p) w0Var.f23310p.get(0)).f(this);
        } else {
            f11 = 0.0f;
        }
        List list3 = w0Var.f23311q;
        if (list3 != null && list3.size() != 0) {
            f12 = ((g.p) w0Var.f23311q.get(0)).e(this);
        } else {
            f12 = 0.0f;
        }
        List list4 = w0Var.f23312r;
        if (list4 != null && list4.size() != 0) {
            f13 = ((g.p) w0Var.f23312r.get(0)).f(this);
        }
        if (this.f23505d.f23541a.F != g.e0.f.Start) {
            float n10 = n(w0Var);
            if (this.f23505d.f23541a.F == g.e0.f.Middle) {
                n10 /= 2.0f;
            }
            f10 -= n10;
        }
        if (w0Var.f23432h == null) {
            i iVar = new i(f10, f11);
            E(w0Var, iVar);
            RectF rectF = iVar.f23552d;
            w0Var.f23432h = new g.b(rectF.left, rectF.top, rectF.width(), iVar.f23552d.height());
        }
        Path path = new Path();
        E(w0Var, new g(f10 + f12, f11 + f13, path));
        return path;
    }

    private void e0(boolean z10, g.b bVar, g.q0 q0Var) {
        boolean z11;
        Paint paint;
        float f10;
        float f11;
        float f12;
        float f13;
        float f14;
        float f15;
        float e10;
        float f16;
        float c10;
        String str = q0Var.f23427l;
        if (str != null) {
            H(q0Var, str);
        }
        Boolean bool = q0Var.f23424i;
        int i10 = 0;
        if (bool != null && bool.booleanValue()) {
            z11 = true;
        } else {
            z11 = false;
        }
        C0312h c0312h = this.f23505d;
        if (z10) {
            paint = c0312h.f23544d;
        } else {
            paint = c0312h.f23545e;
        }
        if (z11) {
            g.p pVar = new g.p(50.0f, g.d1.percent);
            g.p pVar2 = q0Var.f23459m;
            if (pVar2 != null) {
                e10 = pVar2.e(this);
            } else {
                e10 = pVar.e(this);
            }
            g.p pVar3 = q0Var.f23460n;
            if (pVar3 != null) {
                f16 = pVar3.f(this);
            } else {
                f16 = pVar.f(this);
            }
            g.p pVar4 = q0Var.f23461o;
            if (pVar4 != null) {
                c10 = pVar4.c(this);
            } else {
                c10 = pVar.c(this);
            }
            f13 = c10;
            f12 = e10;
            f14 = f16;
        } else {
            g.p pVar5 = q0Var.f23459m;
            float f17 = 0.5f;
            if (pVar5 != null) {
                f10 = pVar5.d(this, 1.0f);
            } else {
                f10 = 0.5f;
            }
            g.p pVar6 = q0Var.f23460n;
            if (pVar6 != null) {
                f11 = pVar6.d(this, 1.0f);
            } else {
                f11 = 0.5f;
            }
            g.p pVar7 = q0Var.f23461o;
            if (pVar7 != null) {
                f17 = pVar7.d(this, 1.0f);
            }
            f12 = f10;
            f13 = f17;
            f14 = f11;
        }
        S0();
        this.f23505d = M(q0Var);
        Matrix matrix = new Matrix();
        if (!z11) {
            matrix.preTranslate(bVar.f23313a, bVar.f23314b);
            matrix.preScale(bVar.f23315c, bVar.f23316d);
        }
        Matrix matrix2 = q0Var.f23425j;
        if (matrix2 != null) {
            matrix.preConcat(matrix2);
        }
        int size = q0Var.f23423h.size();
        if (size == 0) {
            R0();
            if (z10) {
                this.f23505d.f23542b = false;
                return;
            } else {
                this.f23505d.f23543c = false;
                return;
            }
        }
        int[] iArr = new int[size];
        float[] fArr = new float[size];
        float f18 = -1.0f;
        for (g.n0 n0Var : q0Var.f23423h) {
            g.d0 d0Var = (g.d0) n0Var;
            Float f19 = d0Var.f23332h;
            if (f19 != null) {
                f15 = f19.floatValue();
            } else {
                f15 = 0.0f;
            }
            if (i10 != 0 && f15 < f18) {
                fArr[i10] = f18;
            } else {
                fArr[i10] = f15;
                f18 = f15;
            }
            S0();
            W0(this.f23505d, d0Var);
            g.e0 e0Var = this.f23505d.f23541a;
            g.f fVar = (g.f) e0Var.N;
            if (fVar == null) {
                fVar = g.f.f23399e;
            }
            iArr[i10] = x(fVar.f23401d, e0Var.O.floatValue());
            i10++;
            R0();
        }
        if (f13 != 0.0f && size != 1) {
            Shader.TileMode tileMode = Shader.TileMode.CLAMP;
            g.k kVar = q0Var.f23426k;
            if (kVar != null) {
                if (kVar == g.k.reflect) {
                    tileMode = Shader.TileMode.MIRROR;
                } else if (kVar == g.k.repeat) {
                    tileMode = Shader.TileMode.REPEAT;
                }
            }
            Shader.TileMode tileMode2 = tileMode;
            R0();
            RadialGradient radialGradient = new RadialGradient(f12, f14, f13, iArr, fArr, tileMode2);
            radialGradient.setLocalMatrix(matrix);
            paint.setShader(radialGradient);
            paint.setAlpha(w(this.f23505d.f23541a.f23347o.floatValue()));
            return;
        }
        R0();
        paint.setColor(iArr[size - 1]);
    }

    private g.b f0(g.p pVar, g.p pVar2, g.p pVar3, g.p pVar4) {
        float f10;
        float f11;
        float f12;
        float f13 = 0.0f;
        if (pVar != null) {
            f10 = pVar.e(this);
        } else {
            f10 = 0.0f;
        }
        if (pVar2 != null) {
            f13 = pVar2.f(this);
        }
        g.b S = S();
        if (pVar3 != null) {
            f11 = pVar3.e(this);
        } else {
            f11 = S.f23315c;
        }
        if (pVar4 != null) {
            f12 = pVar4.f(this);
        } else {
            f12 = S.f23316d;
        }
        return new g.b(f10, f13, f11, f12);
    }

    private Path g0(g.k0 k0Var, boolean z10) {
        Path d02;
        Path j10;
        this.f23506e.push(this.f23505d);
        C0312h c0312h = new C0312h(this.f23505d);
        this.f23505d = c0312h;
        W0(c0312h, k0Var);
        if (A() && Y0()) {
            if (k0Var instanceof g.e1) {
                if (!z10) {
                    F("<use> elements inside a <clipPath> cannot reference another <use>", new Object[0]);
                }
                g.e1 e1Var = (g.e1) k0Var;
                g.n0 p10 = k0Var.f23444a.p(e1Var.f23394p);
                if (p10 == null) {
                    F("Use reference '%s' not found", e1Var.f23394p);
                    this.f23505d = (C0312h) this.f23506e.pop();
                    return null;
                } else if (!(p10 instanceof g.k0)) {
                    this.f23505d = (C0312h) this.f23506e.pop();
                    return null;
                } else {
                    d02 = g0((g.k0) p10, false);
                    if (d02 == null) {
                        return null;
                    }
                    if (e1Var.f23432h == null) {
                        e1Var.f23432h = m(d02);
                    }
                    Matrix matrix = e1Var.f23439o;
                    if (matrix != null) {
                        d02.transform(matrix);
                    }
                }
            } else if (k0Var instanceof g.l) {
                g.l lVar = (g.l) k0Var;
                if (k0Var instanceof g.v) {
                    d02 = new d(((g.v) k0Var).f23481o).f();
                    if (k0Var.f23432h == null) {
                        k0Var.f23432h = m(d02);
                    }
                } else {
                    d02 = k0Var instanceof g.b0 ? c0((g.b0) k0Var) : k0Var instanceof g.d ? Y((g.d) k0Var) : k0Var instanceof g.i ? Z((g.i) k0Var) : k0Var instanceof g.z ? b0((g.z) k0Var) : null;
                }
                if (d02 == null) {
                    return null;
                }
                if (lVar.f23432h == null) {
                    lVar.f23432h = m(d02);
                }
                Matrix matrix2 = lVar.f23433n;
                if (matrix2 != null) {
                    d02.transform(matrix2);
                }
                d02.setFillType(P());
            } else if (k0Var instanceof g.w0) {
                g.w0 w0Var = (g.w0) k0Var;
                d02 = d0(w0Var);
                if (d02 == null) {
                    return null;
                }
                Matrix matrix3 = w0Var.f23488s;
                if (matrix3 != null) {
                    d02.transform(matrix3);
                }
                d02.setFillType(P());
            } else {
                F("Invalid %s element found in clipPath definition", k0Var.n());
                return null;
            }
            if (this.f23505d.f23541a.P != null && (j10 = j(k0Var, k0Var.f23432h)) != null) {
                d02.op(j10, Path.Op.INTERSECT);
            }
            this.f23505d = (C0312h) this.f23506e.pop();
            return d02;
        }
        this.f23505d = (C0312h) this.f23506e.pop();
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void h(float f10, float f11, float f12, float f13, float f14, boolean z10, boolean z11, float f15, float f16, g.x xVar) {
        double d10;
        double d11;
        if (f10 != f15 || f11 != f16) {
            if (f12 != 0.0f && f13 != 0.0f) {
                float abs = Math.abs(f12);
                float abs2 = Math.abs(f13);
                double radians = Math.toRadians(f14 % 360.0d);
                double cos = Math.cos(radians);
                double sin = Math.sin(radians);
                double d12 = (f10 - f15) / 2.0d;
                double d13 = (f11 - f16) / 2.0d;
                double d14 = (cos * d12) + (sin * d13);
                double d15 = ((-sin) * d12) + (cos * d13);
                double d16 = abs * abs;
                double d17 = abs2 * abs2;
                double d18 = d14 * d14;
                double d19 = d15 * d15;
                double d20 = (d18 / d16) + (d19 / d17);
                if (d20 > 0.99999d) {
                    double sqrt = Math.sqrt(d20) * 1.00001d;
                    abs = (float) (abs * sqrt);
                    abs2 = (float) (sqrt * abs2);
                    d16 = abs * abs;
                    d17 = abs2 * abs2;
                }
                double d21 = 1.0d;
                if (z10 == z11) {
                    d10 = -1.0d;
                } else {
                    d10 = 1.0d;
                }
                double d22 = d16 * d17;
                double d23 = d16 * d19;
                double d24 = d17 * d18;
                double d25 = ((d22 - d23) - d24) / (d23 + d24);
                if (d25 < 0.0d) {
                    d25 = 0.0d;
                }
                double sqrt2 = d10 * Math.sqrt(d25);
                double d26 = abs;
                double d27 = abs2;
                double d28 = ((d26 * d15) / d27) * sqrt2;
                double d29 = (-((d27 * d14) / d26)) * sqrt2;
                double d30 = ((f10 + f15) / 2.0d) + ((cos * d28) - (sin * d29));
                double d31 = ((f11 + f16) / 2.0d) + (sin * d28) + (cos * d29);
                double d32 = (d14 - d28) / d26;
                double d33 = (d15 - d29) / d27;
                double d34 = ((-d14) - d28) / d26;
                double d35 = ((-d15) - d29) / d27;
                double d36 = (d32 * d32) + (d33 * d33);
                double sqrt3 = Math.sqrt(d36);
                if (d33 < 0.0d) {
                    d11 = -1.0d;
                } else {
                    d11 = 1.0d;
                }
                double acos = d11 * Math.acos(d32 / sqrt3);
                double sqrt4 = Math.sqrt(d36 * ((d34 * d34) + (d35 * d35)));
                double d37 = (d32 * d34) + (d33 * d35);
                if ((d32 * d35) - (d33 * d34) < 0.0d) {
                    d21 = -1.0d;
                }
                double v10 = d21 * v(d37 / sqrt4);
                if (!z11 && v10 > 0.0d) {
                    v10 -= 6.283185307179586d;
                } else if (z11 && v10 < 0.0d) {
                    v10 += 6.283185307179586d;
                }
                float[] i10 = i(acos % 6.283185307179586d, v10 % 6.283185307179586d);
                Matrix matrix = new Matrix();
                matrix.postScale(abs, abs2);
                matrix.postRotate(f14);
                matrix.postTranslate((float) d30, (float) d31);
                matrix.mapPoints(i10);
                i10[i10.length - 2] = f15;
                i10[i10.length - 1] = f16;
                for (int i11 = 0; i11 < i10.length; i11 += 6) {
                    xVar.c(i10[i11], i10[i11 + 1], i10[i11 + 2], i10[i11 + 3], i10[i11 + 4], i10[i11 + 5]);
                }
                return;
            }
            xVar.e(f15, f16);
        }
    }

    private void h0() {
        this.f23507f.pop();
        this.f23508g.pop();
    }

    private static float[] i(double d10, double d11) {
        int ceil = (int) Math.ceil((Math.abs(d11) * 2.0d) / 3.141592653589793d);
        double d12 = d11 / ceil;
        double d13 = d12 / 2.0d;
        double sin = (Math.sin(d13) * 1.3333333333333333d) / (Math.cos(d13) + 1.0d);
        float[] fArr = new float[ceil * 6];
        int i10 = 0;
        int i11 = 0;
        while (i10 < ceil) {
            double d14 = d10 + (i10 * d12);
            double cos = Math.cos(d14);
            double sin2 = Math.sin(d14);
            float[] fArr2 = fArr;
            fArr2[i11] = (float) (cos - (sin * sin2));
            fArr2[i11 + 1] = (float) (sin2 + (cos * sin));
            double d15 = d14 + d12;
            double cos2 = Math.cos(d15);
            double sin3 = Math.sin(d15);
            fArr2[i11 + 2] = (float) ((sin * sin3) + cos2);
            fArr2[i11 + 3] = (float) (sin3 - (sin * cos2));
            int i12 = i11 + 5;
            fArr2[i11 + 4] = (float) cos2;
            i11 += 6;
            fArr2[i12] = (float) sin3;
            i10++;
            fArr = fArr2;
            ceil = ceil;
        }
        return fArr;
    }

    private void i0(g.j0 j0Var) {
        this.f23507f.push(j0Var);
        this.f23508g.push(this.f23502a.getMatrix());
    }

    private Path j(g.k0 k0Var, g.b bVar) {
        boolean z10;
        Path g02;
        g.n0 p10 = k0Var.f23444a.p(this.f23505d.f23541a.P);
        if (p10 == null) {
            F("ClipPath reference '%s' not found", this.f23505d.f23541a.P);
            return null;
        }
        g.e eVar = (g.e) p10;
        this.f23506e.push(this.f23505d);
        this.f23505d = M(eVar);
        Boolean bool = eVar.f23343p;
        if (bool != null && !bool.booleanValue()) {
            z10 = false;
        } else {
            z10 = true;
        }
        Matrix matrix = new Matrix();
        if (!z10) {
            matrix.preTranslate(bVar.f23313a, bVar.f23314b);
            matrix.preScale(bVar.f23315c, bVar.f23316d);
        }
        Matrix matrix2 = eVar.f23439o;
        if (matrix2 != null) {
            matrix.preConcat(matrix2);
        }
        Path path = new Path();
        for (g.n0 n0Var : eVar.f23408i) {
            if ((n0Var instanceof g.k0) && (g02 = g0((g.k0) n0Var, true)) != null) {
                path.op(g02, Path.Op.UNION);
            }
        }
        if (this.f23505d.f23541a.P != null) {
            if (eVar.f23432h == null) {
                eVar.f23432h = m(path);
            }
            Path j10 = j(eVar, eVar.f23432h);
            if (j10 != null) {
                path.op(j10, Path.Op.INTERSECT);
            }
        }
        path.transform(matrix);
        this.f23505d = (C0312h) this.f23506e.pop();
        return path;
    }

    private void j0(g.k0 k0Var) {
        k0(k0Var, k0Var.f23432h);
    }

    private List k(g.q qVar) {
        float f10;
        float f11;
        float f12;
        g.p pVar = qVar.f23455o;
        float f13 = 0.0f;
        if (pVar != null) {
            f10 = pVar.e(this);
        } else {
            f10 = 0.0f;
        }
        g.p pVar2 = qVar.f23456p;
        if (pVar2 != null) {
            f11 = pVar2.f(this);
        } else {
            f11 = 0.0f;
        }
        g.p pVar3 = qVar.f23457q;
        if (pVar3 != null) {
            f12 = pVar3.e(this);
        } else {
            f12 = 0.0f;
        }
        g.p pVar4 = qVar.f23458r;
        if (pVar4 != null) {
            f13 = pVar4.f(this);
        }
        float f14 = f13;
        ArrayList arrayList = new ArrayList(2);
        float f15 = f12 - f10;
        float f16 = f14 - f11;
        arrayList.add(new c(f10, f11, f15, f16));
        arrayList.add(new c(f12, f14, f15, f16));
        return arrayList;
    }

    private void k0(g.k0 k0Var, g.b bVar) {
        if (this.f23505d.f23541a.R != null) {
            Paint paint = new Paint();
            PorterDuff.Mode mode = PorterDuff.Mode.DST_IN;
            paint.setXfermode(new PorterDuffXfermode(mode));
            this.f23502a.saveLayer(null, paint, 31);
            Paint paint2 = new Paint();
            paint2.setColorFilter(new ColorMatrixColorFilter(new ColorMatrix(new float[]{0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.2127f, 0.7151f, 0.0722f, 0.0f, 0.0f})));
            this.f23502a.saveLayer(null, paint2, 31);
            g.s sVar = (g.s) this.f23504c.p(this.f23505d.f23541a.R);
            J0(sVar, k0Var, bVar);
            this.f23502a.restore();
            Paint paint3 = new Paint();
            paint3.setXfermode(new PorterDuffXfermode(mode));
            this.f23502a.saveLayer(null, paint3, 31);
            J0(sVar, k0Var, bVar);
            this.f23502a.restore();
            this.f23502a.restore();
        }
        R0();
    }

    private List l(g.z zVar) {
        int length = zVar.f23497o.length;
        int i10 = 2;
        if (length < 2) {
            return null;
        }
        ArrayList arrayList = new ArrayList();
        float[] fArr = zVar.f23497o;
        c cVar = new c(fArr[0], fArr[1], 0.0f, 0.0f);
        float f10 = 0.0f;
        float f11 = 0.0f;
        while (i10 < length) {
            float[] fArr2 = zVar.f23497o;
            float f12 = fArr2[i10];
            float f13 = fArr2[i10 + 1];
            cVar.a(f12, f13);
            arrayList.add(cVar);
            i10 += 2;
            cVar = new c(f12, f13, f12 - cVar.f23522a, f13 - cVar.f23523b);
            f10 = f12;
            f11 = f13;
        }
        if (zVar instanceof g.a0) {
            float[] fArr3 = zVar.f23497o;
            float f14 = fArr3[0];
            if (f10 != f14) {
                float f15 = fArr3[1];
                if (f11 != f15) {
                    cVar.a(f14, f15);
                    arrayList.add(cVar);
                    c cVar2 = new c(f14, f15, f14 - cVar.f23522a, f15 - cVar.f23523b);
                    cVar2.b((c) arrayList.get(0));
                    arrayList.add(cVar2);
                    arrayList.set(0, cVar2);
                }
            }
            return arrayList;
        }
        arrayList.add(cVar);
        return arrayList;
    }

    private void l0(g.n0 n0Var, j jVar) {
        boolean z10;
        float f10;
        float f11;
        float f12;
        g.e0.f O;
        float e10;
        if (jVar.a((g.y0) n0Var)) {
            if (n0Var instanceof g.z0) {
                S0();
                L0((g.z0) n0Var);
                R0();
            } else if (n0Var instanceof g.v0) {
                y("TSpan render", new Object[0]);
                S0();
                g.v0 v0Var = (g.v0) n0Var;
                W0(this.f23505d, v0Var);
                if (A()) {
                    List list = v0Var.f23309o;
                    if (list != null && list.size() > 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    boolean z11 = jVar instanceof f;
                    float f13 = 0.0f;
                    if (z11) {
                        if (!z10) {
                            e10 = ((f) jVar).f23534b;
                        } else {
                            e10 = ((g.p) v0Var.f23309o.get(0)).e(this);
                        }
                        List list2 = v0Var.f23310p;
                        if (list2 != null && list2.size() != 0) {
                            f11 = ((g.p) v0Var.f23310p.get(0)).f(this);
                        } else {
                            f11 = ((f) jVar).f23535c;
                        }
                        List list3 = v0Var.f23311q;
                        if (list3 != null && list3.size() != 0) {
                            f12 = ((g.p) v0Var.f23311q.get(0)).e(this);
                        } else {
                            f12 = 0.0f;
                        }
                        List list4 = v0Var.f23312r;
                        if (list4 != null && list4.size() != 0) {
                            f13 = ((g.p) v0Var.f23312r.get(0)).f(this);
                        }
                        f10 = f13;
                        f13 = e10;
                    } else {
                        f10 = 0.0f;
                        f11 = 0.0f;
                        f12 = 0.0f;
                    }
                    if (z10 && (O = O()) != g.e0.f.Start) {
                        float n10 = n(v0Var);
                        if (O == g.e0.f.Middle) {
                            n10 /= 2.0f;
                        }
                        f13 -= n10;
                    }
                    r((g.k0) v0Var.d());
                    if (z11) {
                        f fVar = (f) jVar;
                        fVar.f23534b = f13 + f12;
                        fVar.f23535c = f11 + f10;
                    }
                    boolean m02 = m0();
                    E(v0Var, jVar);
                    if (m02) {
                        j0(v0Var);
                    }
                }
                R0();
            } else if (n0Var instanceof g.u0) {
                S0();
                g.u0 u0Var = (g.u0) n0Var;
                W0(this.f23505d, u0Var);
                if (A()) {
                    r((g.k0) u0Var.d());
                    g.n0 p10 = n0Var.f23444a.p(u0Var.f23479o);
                    if (p10 != null && (p10 instanceof g.y0)) {
                        StringBuilder sb2 = new StringBuilder();
                        G((g.y0) p10, sb2);
                        if (sb2.length() > 0) {
                            jVar.b(sb2.toString());
                        }
                    } else {
                        F("Tref reference '%s' not found", u0Var.f23479o);
                    }
                }
                R0();
            }
        }
    }

    private g.b m(Path path) {
        RectF rectF = new RectF();
        path.computeBounds(rectF, true);
        return new g.b(rectF.left, rectF.top, rectF.width(), rectF.height());
    }

    private boolean m0() {
        g.n0 p10;
        if (!M0()) {
            return false;
        }
        this.f23502a.saveLayerAlpha(null, w(this.f23505d.f23541a.f23356x.floatValue()), 31);
        this.f23506e.push(this.f23505d);
        C0312h c0312h = new C0312h(this.f23505d);
        this.f23505d = c0312h;
        String str = c0312h.f23541a.R;
        if (str != null && ((p10 = this.f23504c.p(str)) == null || !(p10 instanceof g.s))) {
            F("Mask reference '%s' not found", this.f23505d.f23541a.R);
            this.f23505d.f23541a.R = null;
        }
        return true;
    }

    private float n(g.y0 y0Var) {
        k kVar = new k(this, null);
        E(y0Var, kVar);
        return kVar.f23555b;
    }

    private c n0(c cVar, c cVar2, c cVar3) {
        float D = D(cVar2.f23524c, cVar2.f23525d, cVar2.f23522a - cVar.f23522a, cVar2.f23523b - cVar.f23523b);
        if (D == 0.0f) {
            D = D(cVar2.f23524c, cVar2.f23525d, cVar3.f23522a - cVar2.f23522a, cVar3.f23523b - cVar2.f23523b);
        }
        int i10 = (D > 0.0f ? 1 : (D == 0.0f ? 0 : -1));
        if (i10 > 0 || (i10 == 0 && (cVar2.f23524c > 0.0f || cVar2.f23525d >= 0.0f))) {
            return cVar2;
        }
        cVar2.f23524c = -cVar2.f23524c;
        cVar2.f23525d = -cVar2.f23525d;
        return cVar2;
    }

    /* JADX WARN: Code restructure failed: missing block: B:32:0x0083, code lost:
        if (r12 != 8) goto L30;
     */
    /* JADX WARN: Removed duplicated region for block: B:23:0x0075  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private android.graphics.Matrix o(f6.g.b r10, f6.g.b r11, f6.e r12) {
        /*
            r9 = this;
            android.graphics.Matrix r0 = new android.graphics.Matrix
            r0.<init>()
            if (r12 == 0) goto L9d
            f6.e$a r1 = r12.a()
            if (r1 != 0) goto Lf
            goto L9d
        Lf:
            float r1 = r10.f23315c
            float r2 = r11.f23315c
            float r1 = r1 / r2
            float r2 = r10.f23316d
            float r3 = r11.f23316d
            float r2 = r2 / r3
            float r3 = r11.f23313a
            float r3 = -r3
            float r4 = r11.f23314b
            float r4 = -r4
            f6.e r5 = f6.e.f23271d
            boolean r5 = r12.equals(r5)
            if (r5 == 0) goto L35
            float r11 = r10.f23313a
            float r10 = r10.f23314b
            r0.preTranslate(r11, r10)
            r0.preScale(r1, r2)
            r0.preTranslate(r3, r4)
            return r0
        L35:
            f6.e$b r5 = r12.b()
            f6.e$b r6 = f6.e.b.slice
            if (r5 != r6) goto L42
            float r1 = java.lang.Math.max(r1, r2)
            goto L46
        L42:
            float r1 = java.lang.Math.min(r1, r2)
        L46:
            float r2 = r10.f23315c
            float r2 = r2 / r1
            float r5 = r10.f23316d
            float r5 = r5 / r1
            int[] r6 = f6.h.a.f23510a
            f6.e$a r7 = r12.a()
            int r7 = r7.ordinal()
            r7 = r6[r7]
            r8 = 1073741824(0x40000000, float:2.0)
            switch(r7) {
                case 1: goto L63;
                case 2: goto L63;
                case 3: goto L63;
                case 4: goto L5e;
                case 5: goto L5e;
                case 6: goto L5e;
                default: goto L5d;
            }
        L5d:
            goto L68
        L5e:
            float r7 = r11.f23315c
            float r7 = r7 - r2
        L61:
            float r3 = r3 - r7
            goto L68
        L63:
            float r7 = r11.f23315c
            float r7 = r7 - r2
            float r7 = r7 / r8
            goto L61
        L68:
            f6.e$a r12 = r12.a()
            int r12 = r12.ordinal()
            r12 = r6[r12]
            r2 = 2
            if (r12 == r2) goto L8b
            r2 = 3
            if (r12 == r2) goto L86
            r2 = 5
            if (r12 == r2) goto L8b
            r2 = 6
            if (r12 == r2) goto L86
            r2 = 7
            if (r12 == r2) goto L8b
            r2 = 8
            if (r12 == r2) goto L86
            goto L90
        L86:
            float r11 = r11.f23316d
            float r11 = r11 - r5
        L89:
            float r4 = r4 - r11
            goto L90
        L8b:
            float r11 = r11.f23316d
            float r11 = r11 - r5
            float r11 = r11 / r8
            goto L89
        L90:
            float r11 = r10.f23313a
            float r10 = r10.f23314b
            r0.preTranslate(r11, r10)
            r0.preScale(r1, r1)
            r0.preTranslate(r3, r4)
        L9d:
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: f6.h.o(f6.g$b, f6.g$b, f6.e):android.graphics.Matrix");
    }

    private void o0(g.d dVar) {
        y("Circle render", new Object[0]);
        g.p pVar = dVar.f23331q;
        if (pVar != null && !pVar.i()) {
            W0(this.f23505d, dVar);
            if (A() && Y0()) {
                Matrix matrix = dVar.f23433n;
                if (matrix != null) {
                    this.f23502a.concat(matrix);
                }
                Path Y = Y(dVar);
                U0(dVar);
                r(dVar);
                p(dVar);
                boolean m02 = m0();
                if (this.f23505d.f23542b) {
                    B(dVar, Y);
                }
                if (this.f23505d.f23543c) {
                    C(Y);
                }
                if (m02) {
                    j0(dVar);
                }
            }
        }
    }

    private void p(g.k0 k0Var) {
        q(k0Var, k0Var.f23432h);
    }

    private void p0(g.i iVar) {
        y("Ellipse render", new Object[0]);
        g.p pVar = iVar.f23416q;
        if (pVar != null && iVar.f23417r != null && !pVar.i() && !iVar.f23417r.i()) {
            W0(this.f23505d, iVar);
            if (A() && Y0()) {
                Matrix matrix = iVar.f23433n;
                if (matrix != null) {
                    this.f23502a.concat(matrix);
                }
                Path Z = Z(iVar);
                U0(iVar);
                r(iVar);
                p(iVar);
                boolean m02 = m0();
                if (this.f23505d.f23542b) {
                    B(iVar, Z);
                }
                if (this.f23505d.f23543c) {
                    C(Z);
                }
                if (m02) {
                    j0(iVar);
                }
            }
        }
    }

    private void q(g.k0 k0Var, g.b bVar) {
        Path j10;
        if (this.f23505d.f23541a.P != null && (j10 = j(k0Var, bVar)) != null) {
            this.f23502a.clipPath(j10);
        }
    }

    private void q0(g.m mVar) {
        y("Group render", new Object[0]);
        W0(this.f23505d, mVar);
        if (!A()) {
            return;
        }
        Matrix matrix = mVar.f23439o;
        if (matrix != null) {
            this.f23502a.concat(matrix);
        }
        p(mVar);
        boolean m02 = m0();
        F0(mVar, true);
        if (m02) {
            j0(mVar);
        }
        U0(mVar);
    }

    private void r(g.k0 k0Var) {
        g.o0 o0Var = this.f23505d.f23541a.f23345e;
        if (o0Var instanceof g.u) {
            z(true, k0Var.f23432h, (g.u) o0Var);
        }
        g.o0 o0Var2 = this.f23505d.f23541a.f23348p;
        if (o0Var2 instanceof g.u) {
            z(false, k0Var.f23432h, (g.u) o0Var2);
        }
    }

    private void r0(g.o oVar) {
        g.p pVar;
        String str;
        float f10;
        float f11;
        int i10 = 0;
        y("Image render", new Object[0]);
        g.p pVar2 = oVar.f23449s;
        if (pVar2 != null && !pVar2.i() && (pVar = oVar.f23450t) != null && !pVar.i() && (str = oVar.f23446p) != null) {
            f6.e eVar = oVar.f23454o;
            if (eVar == null) {
                eVar = f6.e.f23272e;
            }
            Bitmap s10 = s(str);
            if (s10 == null) {
                f6.g.k();
                return;
            }
            g.b bVar = new g.b(0.0f, 0.0f, s10.getWidth(), s10.getHeight());
            W0(this.f23505d, oVar);
            if (A() && Y0()) {
                Matrix matrix = oVar.f23451u;
                if (matrix != null) {
                    this.f23502a.concat(matrix);
                }
                g.p pVar3 = oVar.f23447q;
                if (pVar3 != null) {
                    f10 = pVar3.e(this);
                } else {
                    f10 = 0.0f;
                }
                g.p pVar4 = oVar.f23448r;
                if (pVar4 != null) {
                    f11 = pVar4.f(this);
                } else {
                    f11 = 0.0f;
                }
                this.f23505d.f23546f = new g.b(f10, f11, oVar.f23449s.e(this), oVar.f23450t.e(this));
                if (!this.f23505d.f23541a.G.booleanValue()) {
                    g.b bVar2 = this.f23505d.f23546f;
                    O0(bVar2.f23313a, bVar2.f23314b, bVar2.f23315c, bVar2.f23316d);
                }
                oVar.f23432h = this.f23505d.f23546f;
                U0(oVar);
                p(oVar);
                boolean m02 = m0();
                X0();
                this.f23502a.save();
                this.f23502a.concat(o(this.f23505d.f23546f, bVar, eVar));
                if (this.f23505d.f23541a.X != g.e0.e.optimizeSpeed) {
                    i10 = 2;
                }
                this.f23502a.drawBitmap(s10, 0.0f, 0.0f, new Paint(i10));
                this.f23502a.restore();
                if (m02) {
                    j0(oVar);
                }
            }
        }
    }

    private Bitmap s(String str) {
        int indexOf;
        if (!str.startsWith("data:") || str.length() < 14 || (indexOf = str.indexOf(44)) < 12 || !";base64".equals(str.substring(indexOf - 7, indexOf))) {
            return null;
        }
        try {
            byte[] decode = Base64.decode(str.substring(indexOf + 1), 0);
            return BitmapFactory.decodeByteArray(decode, 0, decode.length);
        } catch (Exception e10) {
            Log.e("SVGAndroidRenderer", "Could not decode bad Data URL", e10);
            return null;
        }
    }

    private void s0(g.q qVar) {
        y("Line render", new Object[0]);
        W0(this.f23505d, qVar);
        if (A() && Y0() && this.f23505d.f23543c) {
            Matrix matrix = qVar.f23433n;
            if (matrix != null) {
                this.f23502a.concat(matrix);
            }
            Path a02 = a0(qVar);
            U0(qVar);
            r(qVar);
            p(qVar);
            boolean m02 = m0();
            C(a02);
            I0(qVar);
            if (m02) {
                j0(qVar);
            }
        }
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Code restructure failed: missing block: B:34:0x005d, code lost:
        if (r6.equals("sans-serif") == false) goto L10;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private android.graphics.Typeface t(java.lang.String r6, java.lang.Integer r7, f6.g.e0.b r8) {
        /*
            r5 = this;
            f6.g$e0$b r0 = f6.g.e0.b.Italic
            r1 = 0
            r2 = 1
            if (r8 != r0) goto L8
            r8 = r2
            goto L9
        L8:
            r8 = r1
        L9:
            int r7 = r7.intValue()
            r0 = 500(0x1f4, float:7.0E-43)
            r3 = 2
            r4 = 3
            if (r7 <= r0) goto L19
            if (r8 == 0) goto L17
            r7 = r4
            goto L1e
        L17:
            r7 = r2
            goto L1e
        L19:
            if (r8 == 0) goto L1d
            r7 = r3
            goto L1e
        L1d:
            r7 = r1
        L1e:
            r6.getClass()
            int r8 = r6.hashCode()
            r0 = -1
            switch(r8) {
                case -1536685117: goto L57;
                case -1431958525: goto L4c;
                case -1081737434: goto L41;
                case 109326717: goto L36;
                case 1126973893: goto L2b;
                default: goto L29;
            }
        L29:
            r1 = r0
            goto L60
        L2b:
            java.lang.String r8 = "cursive"
            boolean r6 = r6.equals(r8)
            if (r6 != 0) goto L34
            goto L29
        L34:
            r1 = 4
            goto L60
        L36:
            java.lang.String r8 = "serif"
            boolean r6 = r6.equals(r8)
            if (r6 != 0) goto L3f
            goto L29
        L3f:
            r1 = r4
            goto L60
        L41:
            java.lang.String r8 = "fantasy"
            boolean r6 = r6.equals(r8)
            if (r6 != 0) goto L4a
            goto L29
        L4a:
            r1 = r3
            goto L60
        L4c:
            java.lang.String r8 = "monospace"
            boolean r6 = r6.equals(r8)
            if (r6 != 0) goto L55
            goto L29
        L55:
            r1 = r2
            goto L60
        L57:
            java.lang.String r8 = "sans-serif"
            boolean r6 = r6.equals(r8)
            if (r6 != 0) goto L60
            goto L29
        L60:
            switch(r1) {
                case 0: goto L81;
                case 1: goto L7a;
                case 2: goto L73;
                case 3: goto L6c;
                case 4: goto L65;
                default: goto L63;
            }
        L63:
            r6 = 0
            return r6
        L65:
            android.graphics.Typeface r6 = android.graphics.Typeface.SANS_SERIF
            android.graphics.Typeface r6 = android.graphics.Typeface.create(r6, r7)
            return r6
        L6c:
            android.graphics.Typeface r6 = android.graphics.Typeface.SERIF
            android.graphics.Typeface r6 = android.graphics.Typeface.create(r6, r7)
            return r6
        L73:
            android.graphics.Typeface r6 = android.graphics.Typeface.SANS_SERIF
            android.graphics.Typeface r6 = android.graphics.Typeface.create(r6, r7)
            return r6
        L7a:
            android.graphics.Typeface r6 = android.graphics.Typeface.MONOSPACE
            android.graphics.Typeface r6 = android.graphics.Typeface.create(r6, r7)
            return r6
        L81:
            android.graphics.Typeface r6 = android.graphics.Typeface.SANS_SERIF
            android.graphics.Typeface r6 = android.graphics.Typeface.create(r6, r7)
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: f6.h.t(java.lang.String, java.lang.Integer, f6.g$e0$b):android.graphics.Typeface");
    }

    private void t0(g.v vVar) {
        y("Path render", new Object[0]);
        if (vVar.f23481o != null) {
            W0(this.f23505d, vVar);
            if (A() && Y0()) {
                C0312h c0312h = this.f23505d;
                if (c0312h.f23543c || c0312h.f23542b) {
                    Matrix matrix = vVar.f23433n;
                    if (matrix != null) {
                        this.f23502a.concat(matrix);
                    }
                    Path f10 = new d(vVar.f23481o).f();
                    if (vVar.f23432h == null) {
                        vVar.f23432h = m(f10);
                    }
                    U0(vVar);
                    r(vVar);
                    p(vVar);
                    boolean m02 = m0();
                    if (this.f23505d.f23542b) {
                        f10.setFillType(U());
                        B(vVar, f10);
                    }
                    if (this.f23505d.f23543c) {
                        C(f10);
                    }
                    I0(vVar);
                    if (m02) {
                        j0(vVar);
                    }
                }
            }
        }
    }

    private void u(g.n0 n0Var) {
        Boolean bool;
        if ((n0Var instanceof g.l0) && (bool = ((g.l0) n0Var).f23435d) != null) {
            this.f23505d.f23548h = bool.booleanValue();
        }
    }

    private void u0(g.z zVar) {
        y("PolyLine render", new Object[0]);
        W0(this.f23505d, zVar);
        if (A() && Y0()) {
            C0312h c0312h = this.f23505d;
            if (c0312h.f23543c || c0312h.f23542b) {
                Matrix matrix = zVar.f23433n;
                if (matrix != null) {
                    this.f23502a.concat(matrix);
                }
                if (zVar.f23497o.length >= 2) {
                    Path b02 = b0(zVar);
                    U0(zVar);
                    b02.setFillType(U());
                    r(zVar);
                    p(zVar);
                    boolean m02 = m0();
                    if (this.f23505d.f23542b) {
                        B(zVar, b02);
                    }
                    if (this.f23505d.f23543c) {
                        C(b02);
                    }
                    I0(zVar);
                    if (m02) {
                        j0(zVar);
                    }
                }
            }
        }
    }

    private static double v(double d10) {
        if (d10 < -1.0d) {
            return 3.141592653589793d;
        }
        if (d10 > 1.0d) {
            return 0.0d;
        }
        return Math.acos(d10);
    }

    private void v0(g.a0 a0Var) {
        y("Polygon render", new Object[0]);
        W0(this.f23505d, a0Var);
        if (A() && Y0()) {
            C0312h c0312h = this.f23505d;
            if (c0312h.f23543c || c0312h.f23542b) {
                Matrix matrix = a0Var.f23433n;
                if (matrix != null) {
                    this.f23502a.concat(matrix);
                }
                if (a0Var.f23497o.length >= 2) {
                    Path b02 = b0(a0Var);
                    U0(a0Var);
                    r(a0Var);
                    p(a0Var);
                    boolean m02 = m0();
                    if (this.f23505d.f23542b) {
                        B(a0Var, b02);
                    }
                    if (this.f23505d.f23543c) {
                        C(b02);
                    }
                    I0(a0Var);
                    if (m02) {
                        j0(a0Var);
                    }
                }
            }
        }
    }

    private static int w(float f10) {
        int i10 = (int) (f10 * 256.0f);
        if (i10 < 0) {
            return 0;
        }
        if (i10 > 255) {
            return SetSpanOperation.SPAN_MAX_PRIORITY;
        }
        return i10;
    }

    private void w0(g.b0 b0Var) {
        y("Rect render", new Object[0]);
        g.p pVar = b0Var.f23319q;
        if (pVar != null && b0Var.f23320r != null && !pVar.i() && !b0Var.f23320r.i()) {
            W0(this.f23505d, b0Var);
            if (A() && Y0()) {
                Matrix matrix = b0Var.f23433n;
                if (matrix != null) {
                    this.f23502a.concat(matrix);
                }
                Path c02 = c0(b0Var);
                U0(b0Var);
                r(b0Var);
                p(b0Var);
                boolean m02 = m0();
                if (this.f23505d.f23542b) {
                    B(b0Var, c02);
                }
                if (this.f23505d.f23543c) {
                    C(c02);
                }
                if (m02) {
                    j0(b0Var);
                }
            }
        }
    }

    private static int x(int i10, float f10) {
        int i11 = SetSpanOperation.SPAN_MAX_PRIORITY;
        int round = Math.round(((i10 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY) * f10);
        if (round < 0) {
            i11 = 0;
        } else if (round <= 255) {
            i11 = round;
        }
        return (i10 & 16777215) | (i11 << 24);
    }

    private void x0(g.f0 f0Var) {
        z0(f0Var, f0(f0Var.f23402q, f0Var.f23403r, f0Var.f23404s, f0Var.f23405t), f0Var.f23470p, f0Var.f23454o);
    }

    private void y0(g.f0 f0Var, g.b bVar) {
        z0(f0Var, bVar, f0Var.f23470p, f0Var.f23454o);
    }

    private void z(boolean z10, g.b bVar, g.u uVar) {
        String str;
        g.n0 p10 = this.f23504c.p(uVar.f23477d);
        if (p10 == null) {
            if (z10) {
                str = "Fill";
            } else {
                str = "Stroke";
            }
            F("%s reference '%s' not found", str, uVar.f23477d);
            g.o0 o0Var = uVar.f23478e;
            if (o0Var != null) {
                P0(this.f23505d, z10, o0Var);
            } else if (z10) {
                this.f23505d.f23542b = false;
            } else {
                this.f23505d.f23543c = false;
            }
        } else if (p10 instanceof g.m0) {
            X(z10, bVar, (g.m0) p10);
        } else if (p10 instanceof g.q0) {
            e0(z10, bVar, (g.q0) p10);
        } else if (p10 instanceof g.c0) {
            Q0(z10, (g.c0) p10);
        }
    }

    private void z0(g.f0 f0Var, g.b bVar, g.b bVar2, f6.e eVar) {
        y("Svg render", new Object[0]);
        if (bVar.f23315c != 0.0f && bVar.f23316d != 0.0f) {
            if (eVar == null && (eVar = f0Var.f23454o) == null) {
                eVar = f6.e.f23272e;
            }
            W0(this.f23505d, f0Var);
            if (A()) {
                C0312h c0312h = this.f23505d;
                c0312h.f23546f = bVar;
                if (!c0312h.f23541a.G.booleanValue()) {
                    g.b bVar3 = this.f23505d.f23546f;
                    O0(bVar3.f23313a, bVar3.f23314b, bVar3.f23315c, bVar3.f23316d);
                }
                q(f0Var, this.f23505d.f23546f);
                if (bVar2 != null) {
                    this.f23502a.concat(o(this.f23505d.f23546f, bVar2, eVar));
                    this.f23505d.f23547g = f0Var.f23470p;
                } else {
                    Canvas canvas = this.f23502a;
                    g.b bVar4 = this.f23505d.f23546f;
                    canvas.translate(bVar4.f23313a, bVar4.f23314b);
                }
                boolean m02 = m0();
                X0();
                F0(f0Var, true);
                if (m02) {
                    j0(f0Var);
                }
                U0(f0Var);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G0(f6.g gVar, f6.f fVar) {
        g.b bVar;
        g.b bVar2;
        f6.e eVar;
        if (fVar != null) {
            this.f23504c = gVar;
            g.f0 m10 = gVar.m();
            if (m10 == null) {
                Z0("Nothing to render. Document is empty.", new Object[0]);
                return;
            }
            if (fVar.e()) {
                g.l0 j10 = this.f23504c.j(fVar.f23299e);
                if (j10 != null && (j10 instanceof g.f1)) {
                    g.f1 f1Var = (g.f1) j10;
                    bVar2 = f1Var.f23470p;
                    if (bVar2 == null) {
                        Log.w("SVGAndroidRenderer", String.format("View element with id \"%s\" is missing a viewBox attribute.", fVar.f23299e));
                        return;
                    }
                    eVar = f1Var.f23454o;
                } else {
                    Log.w("SVGAndroidRenderer", String.format("View element with id \"%s\" not found.", fVar.f23299e));
                    return;
                }
            } else {
                if (fVar.f()) {
                    bVar = fVar.f23298d;
                } else {
                    bVar = m10.f23470p;
                }
                bVar2 = bVar;
                if (fVar.c()) {
                    eVar = fVar.f23296b;
                } else {
                    eVar = m10.f23454o;
                }
            }
            if (fVar.b()) {
                gVar.a(fVar.f23295a);
            }
            if (fVar.d()) {
                b.q qVar = new b.q();
                this.f23509h = qVar;
                qVar.f23254a = gVar.j(fVar.f23297c);
            }
            N0();
            u(m10);
            S0();
            g.b bVar3 = new g.b(fVar.f23300f);
            g.p pVar = m10.f23404s;
            if (pVar != null) {
                bVar3.f23315c = pVar.d(this, bVar3.f23315c);
            }
            g.p pVar2 = m10.f23405t;
            if (pVar2 != null) {
                bVar3.f23316d = pVar2.d(this, bVar3.f23316d);
            }
            z0(m10, bVar3, bVar2, eVar);
            R0();
            if (fVar.b()) {
                gVar.b();
                return;
            }
            return;
        }
        throw new NullPointerException("renderOptions shouldn't be null");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float Q() {
        return this.f23505d.f23544d.getTextSize();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float R() {
        return this.f23505d.f23544d.getTextSize() / 2.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g.b S() {
        C0312h c0312h = this.f23505d;
        g.b bVar = c0312h.f23547g;
        if (bVar != null) {
            return bVar;
        }
        return c0312h.f23546f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float T() {
        return this.f23503b;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class k extends j {

        /* renamed from: b  reason: collision with root package name */
        float f23555b;

        private k() {
            super(h.this, null);
            this.f23555b = 0.0f;
        }

        @Override // f6.h.j
        public void b(String str) {
            this.f23555b += h.this.f23505d.f23544d.measureText(str);
        }

        /* synthetic */ k(h hVar, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: f6.h$h  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class C0312h {

        /* renamed from: a  reason: collision with root package name */
        g.e0 f23541a;

        /* renamed from: b  reason: collision with root package name */
        boolean f23542b;

        /* renamed from: c  reason: collision with root package name */
        boolean f23543c;

        /* renamed from: d  reason: collision with root package name */
        Paint f23544d;

        /* renamed from: e  reason: collision with root package name */
        Paint f23545e;

        /* renamed from: f  reason: collision with root package name */
        g.b f23546f;

        /* renamed from: g  reason: collision with root package name */
        g.b f23547g;

        /* renamed from: h  reason: collision with root package name */
        boolean f23548h;

        C0312h() {
            Paint paint = new Paint();
            this.f23544d = paint;
            paint.setFlags(193);
            this.f23544d.setHinting(0);
            this.f23544d.setStyle(Paint.Style.FILL);
            Paint paint2 = this.f23544d;
            Typeface typeface = Typeface.DEFAULT;
            paint2.setTypeface(typeface);
            Paint paint3 = new Paint();
            this.f23545e = paint3;
            paint3.setFlags(193);
            this.f23545e.setHinting(0);
            this.f23545e.setStyle(Paint.Style.STROKE);
            this.f23545e.setTypeface(typeface);
            this.f23541a = g.e0.a();
        }

        C0312h(C0312h c0312h) {
            this.f23542b = c0312h.f23542b;
            this.f23543c = c0312h.f23543c;
            this.f23544d = new Paint(c0312h.f23544d);
            this.f23545e = new Paint(c0312h.f23545e);
            g.b bVar = c0312h.f23546f;
            if (bVar != null) {
                this.f23546f = new g.b(bVar);
            }
            g.b bVar2 = c0312h.f23547g;
            if (bVar2 != null) {
                this.f23547g = new g.b(bVar2);
            }
            this.f23548h = c0312h.f23548h;
            try {
                this.f23541a = (g.e0) c0312h.f23541a.clone();
            } catch (CloneNotSupportedException e10) {
                Log.e("SVGAndroidRenderer", "Unexpected clone error", e10);
                this.f23541a = g.e0.a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void y(String str, Object... objArr) {
    }
}
