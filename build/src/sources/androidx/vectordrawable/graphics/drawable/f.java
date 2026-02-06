package androidx.vectordrawable.graphics.drawable;

import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.ColorFilter;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PathMeasure;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffColorFilter;
import android.graphics.Rect;
import android.graphics.Region;
import android.graphics.Shader;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.VectorDrawable;
import android.util.AttributeSet;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayDeque;
import java.util.ArrayList;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
import q1.j;
import q1.m;
import r1.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f extends androidx.vectordrawable.graphics.drawable.e {

    /* renamed from: u  reason: collision with root package name */
    static final PorterDuff.Mode f5811u = PorterDuff.Mode.SRC_IN;

    /* renamed from: e  reason: collision with root package name */
    private h f5812e;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuffColorFilter f5813i;

    /* renamed from: o  reason: collision with root package name */
    private ColorFilter f5814o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f5815p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f5816q;

    /* renamed from: r  reason: collision with root package name */
    private final float[] f5817r;

    /* renamed from: s  reason: collision with root package name */
    private final Matrix f5818s;

    /* renamed from: t  reason: collision with root package name */
    private final Rect f5819t;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends AbstractC0073f {
        b() {
        }

        private void f(TypedArray typedArray, XmlPullParser xmlPullParser) {
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5846b = string;
            }
            String string2 = typedArray.getString(1);
            if (string2 != null) {
                this.f5845a = r1.e.d(string2);
            }
            this.f5847c = m.g(typedArray, xmlPullParser, "fillType", 2, 0);
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.AbstractC0073f
        public boolean c() {
            return true;
        }

        public void e(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            if (!m.h(xmlPullParser, "pathData")) {
                return;
            }
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5784d);
            f(i10, xmlPullParser);
            i10.recycle();
        }

        b(b bVar) {
            super(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class e {
        private e() {
        }

        public boolean a() {
            return false;
        }

        public boolean b(int[] iArr) {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class h extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        int f5866a;

        /* renamed from: b  reason: collision with root package name */
        g f5867b;

        /* renamed from: c  reason: collision with root package name */
        ColorStateList f5868c;

        /* renamed from: d  reason: collision with root package name */
        PorterDuff.Mode f5869d;

        /* renamed from: e  reason: collision with root package name */
        boolean f5870e;

        /* renamed from: f  reason: collision with root package name */
        Bitmap f5871f;

        /* renamed from: g  reason: collision with root package name */
        ColorStateList f5872g;

        /* renamed from: h  reason: collision with root package name */
        PorterDuff.Mode f5873h;

        /* renamed from: i  reason: collision with root package name */
        int f5874i;

        /* renamed from: j  reason: collision with root package name */
        boolean f5875j;

        /* renamed from: k  reason: collision with root package name */
        boolean f5876k;

        /* renamed from: l  reason: collision with root package name */
        Paint f5877l;

        h(h hVar) {
            this.f5868c = null;
            this.f5869d = f.f5811u;
            if (hVar != null) {
                this.f5866a = hVar.f5866a;
                g gVar = new g(hVar.f5867b);
                this.f5867b = gVar;
                if (hVar.f5867b.f5854e != null) {
                    gVar.f5854e = new Paint(hVar.f5867b.f5854e);
                }
                if (hVar.f5867b.f5853d != null) {
                    this.f5867b.f5853d = new Paint(hVar.f5867b.f5853d);
                }
                this.f5868c = hVar.f5868c;
                this.f5869d = hVar.f5869d;
                this.f5870e = hVar.f5870e;
            }
        }

        public boolean a(int i10, int i11) {
            if (i10 == this.f5871f.getWidth() && i11 == this.f5871f.getHeight()) {
                return true;
            }
            return false;
        }

        public boolean b() {
            if (!this.f5876k && this.f5872g == this.f5868c && this.f5873h == this.f5869d && this.f5875j == this.f5870e && this.f5874i == this.f5867b.getRootAlpha()) {
                return true;
            }
            return false;
        }

        public void c(int i10, int i11) {
            if (this.f5871f != null && a(i10, i11)) {
                return;
            }
            this.f5871f = Bitmap.createBitmap(i10, i11, Bitmap.Config.ARGB_8888);
            this.f5876k = true;
        }

        public void d(Canvas canvas, ColorFilter colorFilter, Rect rect) {
            canvas.drawBitmap(this.f5871f, (Rect) null, rect, e(colorFilter));
        }

        public Paint e(ColorFilter colorFilter) {
            if (!f() && colorFilter == null) {
                return null;
            }
            if (this.f5877l == null) {
                Paint paint = new Paint();
                this.f5877l = paint;
                paint.setFilterBitmap(true);
            }
            this.f5877l.setAlpha(this.f5867b.getRootAlpha());
            this.f5877l.setColorFilter(colorFilter);
            return this.f5877l;
        }

        public boolean f() {
            if (this.f5867b.getRootAlpha() < 255) {
                return true;
            }
            return false;
        }

        public boolean g() {
            return this.f5867b.f();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5866a;
        }

        public boolean h(int[] iArr) {
            boolean g10 = this.f5867b.g(iArr);
            this.f5876k |= g10;
            return g10;
        }

        public void i() {
            this.f5872g = this.f5868c;
            this.f5873h = this.f5869d;
            this.f5874i = this.f5867b.getRootAlpha();
            this.f5875j = this.f5870e;
            this.f5876k = false;
        }

        public void j(int i10, int i11) {
            this.f5871f.eraseColor(0);
            this.f5867b.b(new Canvas(this.f5871f), i10, i11, null);
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            return new f(this);
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources) {
            return new f(this);
        }

        h() {
            this.f5868c = null;
            this.f5869d = f.f5811u;
            this.f5867b = new g();
        }
    }

    f() {
        this.f5816q = true;
        this.f5817r = new float[9];
        this.f5818s = new Matrix();
        this.f5819t = new Rect();
        this.f5812e = new h();
    }

    static int a(int i10, float f10) {
        return (i10 & 16777215) | (((int) (Color.alpha(i10) * f10)) << 24);
    }

    public static f b(Resources resources, int i10, Resources.Theme theme) {
        f fVar = new f();
        fVar.f5810d = j.f(resources, i10, theme);
        return fVar;
    }

    private void d(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        h hVar = this.f5812e;
        g gVar = hVar.f5867b;
        ArrayDeque arrayDeque = new ArrayDeque();
        arrayDeque.push(gVar.f5857h);
        int eventType = xmlPullParser.getEventType();
        int depth = xmlPullParser.getDepth() + 1;
        boolean z10 = true;
        while (eventType != 1 && (xmlPullParser.getDepth() >= depth || eventType != 3)) {
            if (eventType == 2) {
                String name = xmlPullParser.getName();
                d dVar = (d) arrayDeque.peek();
                if (dVar != null) {
                    if ("path".equals(name)) {
                        c cVar = new c();
                        cVar.g(resources, attributeSet, theme, xmlPullParser);
                        dVar.f5833b.add(cVar);
                        if (cVar.getPathName() != null) {
                            gVar.f5865p.put(cVar.getPathName(), cVar);
                        }
                        hVar.f5866a = cVar.f5848d | hVar.f5866a;
                        z10 = false;
                    } else if ("clip-path".equals(name)) {
                        b bVar = new b();
                        bVar.e(resources, attributeSet, theme, xmlPullParser);
                        dVar.f5833b.add(bVar);
                        if (bVar.getPathName() != null) {
                            gVar.f5865p.put(bVar.getPathName(), bVar);
                        }
                        hVar.f5866a = bVar.f5848d | hVar.f5866a;
                    } else if ("group".equals(name)) {
                        d dVar2 = new d();
                        dVar2.c(resources, attributeSet, theme, xmlPullParser);
                        dVar.f5833b.add(dVar2);
                        arrayDeque.push(dVar2);
                        if (dVar2.getGroupName() != null) {
                            gVar.f5865p.put(dVar2.getGroupName(), dVar2);
                        }
                        hVar.f5866a = dVar2.f5842k | hVar.f5866a;
                    }
                }
            } else if (eventType == 3 && "group".equals(xmlPullParser.getName())) {
                arrayDeque.pop();
            }
            eventType = xmlPullParser.next();
        }
        if (!z10) {
            return;
        }
        throw new XmlPullParserException("no path defined");
    }

    private boolean e() {
        if (isAutoMirrored() && s1.a.f(this) == 1) {
            return true;
        }
        return false;
    }

    private static PorterDuff.Mode f(int i10, PorterDuff.Mode mode) {
        if (i10 != 3) {
            if (i10 != 5) {
                if (i10 != 9) {
                    switch (i10) {
                        case 14:
                            return PorterDuff.Mode.MULTIPLY;
                        case 15:
                            return PorterDuff.Mode.SCREEN;
                        case 16:
                            return PorterDuff.Mode.ADD;
                        default:
                            return mode;
                    }
                }
                return PorterDuff.Mode.SRC_ATOP;
            }
            return PorterDuff.Mode.SRC_IN;
        }
        return PorterDuff.Mode.SRC_OVER;
    }

    private void h(TypedArray typedArray, XmlPullParser xmlPullParser, Resources.Theme theme) {
        h hVar = this.f5812e;
        g gVar = hVar.f5867b;
        hVar.f5869d = f(m.g(typedArray, xmlPullParser, "tintMode", 6, -1), PorterDuff.Mode.SRC_IN);
        ColorStateList c10 = m.c(typedArray, xmlPullParser, theme, "tint", 1);
        if (c10 != null) {
            hVar.f5868c = c10;
        }
        hVar.f5870e = m.a(typedArray, xmlPullParser, "autoMirrored", 5, hVar.f5870e);
        gVar.f5860k = m.f(typedArray, xmlPullParser, "viewportWidth", 7, gVar.f5860k);
        float f10 = m.f(typedArray, xmlPullParser, "viewportHeight", 8, gVar.f5861l);
        gVar.f5861l = f10;
        if (gVar.f5860k > 0.0f) {
            if (f10 > 0.0f) {
                gVar.f5858i = typedArray.getDimension(3, gVar.f5858i);
                float dimension = typedArray.getDimension(2, gVar.f5859j);
                gVar.f5859j = dimension;
                if (gVar.f5858i > 0.0f) {
                    if (dimension > 0.0f) {
                        gVar.setAlpha(m.f(typedArray, xmlPullParser, "alpha", 4, gVar.getAlpha()));
                        String string = typedArray.getString(0);
                        if (string != null) {
                            gVar.f5863n = string;
                            gVar.f5865p.put(string, gVar);
                            return;
                        }
                        return;
                    }
                    throw new XmlPullParserException(typedArray.getPositionDescription() + "<vector> tag requires height > 0");
                }
                throw new XmlPullParserException(typedArray.getPositionDescription() + "<vector> tag requires width > 0");
            }
            throw new XmlPullParserException(typedArray.getPositionDescription() + "<vector> tag requires viewportHeight > 0");
        }
        throw new XmlPullParserException(typedArray.getPositionDescription() + "<vector> tag requires viewportWidth > 0");
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ void applyTheme(Resources.Theme theme) {
        super.applyTheme(theme);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Object c(String str) {
        return this.f5812e.f5867b.f5865p.get(str);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean canApplyTheme() {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            s1.a.b(drawable);
            return false;
        }
        return false;
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ void clearColorFilter() {
        super.clearColorFilter();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            drawable.draw(canvas);
            return;
        }
        copyBounds(this.f5819t);
        if (this.f5819t.width() > 0 && this.f5819t.height() > 0) {
            ColorFilter colorFilter = this.f5814o;
            if (colorFilter == null) {
                colorFilter = this.f5813i;
            }
            canvas.getMatrix(this.f5818s);
            this.f5818s.getValues(this.f5817r);
            float abs = Math.abs(this.f5817r[0]);
            float abs2 = Math.abs(this.f5817r[4]);
            float abs3 = Math.abs(this.f5817r[1]);
            float abs4 = Math.abs(this.f5817r[3]);
            if (abs3 != 0.0f || abs4 != 0.0f) {
                abs = 1.0f;
                abs2 = 1.0f;
            }
            int min = Math.min((int) RecyclerView.ItemAnimator.FLAG_MOVED, (int) (this.f5819t.width() * abs));
            int min2 = Math.min((int) RecyclerView.ItemAnimator.FLAG_MOVED, (int) (this.f5819t.height() * abs2));
            if (min > 0 && min2 > 0) {
                int save = canvas.save();
                Rect rect = this.f5819t;
                canvas.translate(rect.left, rect.top);
                if (e()) {
                    canvas.translate(this.f5819t.width(), 0.0f);
                    canvas.scale(-1.0f, 1.0f);
                }
                this.f5819t.offsetTo(0, 0);
                this.f5812e.c(min, min2);
                if (!this.f5816q) {
                    this.f5812e.j(min, min2);
                } else if (!this.f5812e.b()) {
                    this.f5812e.j(min, min2);
                    this.f5812e.i();
                }
                this.f5812e.d(canvas, colorFilter, this.f5819t);
                canvas.restoreToCount(save);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(boolean z10) {
        this.f5816q = z10;
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            return s1.a.d(drawable);
        }
        return this.f5812e.f5867b.getRootAlpha();
    }

    @Override // android.graphics.drawable.Drawable
    public int getChangingConfigurations() {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            return drawable.getChangingConfigurations();
        }
        return super.getChangingConfigurations() | this.f5812e.getChangingConfigurations();
    }

    @Override // android.graphics.drawable.Drawable
    public ColorFilter getColorFilter() {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            return s1.a.e(drawable);
        }
        return this.f5814o;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        if (this.f5810d != null) {
            return new i(this.f5810d.getConstantState());
        }
        this.f5812e.f5866a = getChangingConfigurations();
        return this.f5812e;
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ Drawable getCurrent() {
        return super.getCurrent();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            return drawable.getIntrinsicHeight();
        }
        return (int) this.f5812e.f5867b.f5859j;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            return drawable.getIntrinsicWidth();
        }
        return (int) this.f5812e.f5867b.f5858i;
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ int getMinimumHeight() {
        return super.getMinimumHeight();
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ int getMinimumWidth() {
        return super.getMinimumWidth();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            return drawable.getOpacity();
        }
        return -3;
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ boolean getPadding(Rect rect) {
        return super.getPadding(rect);
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ int[] getState() {
        return super.getState();
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ Region getTransparentRegion() {
        return super.getTransparentRegion();
    }

    PorterDuffColorFilter i(PorterDuffColorFilter porterDuffColorFilter, ColorStateList colorStateList, PorterDuff.Mode mode) {
        if (colorStateList != null && mode != null) {
            return new PorterDuffColorFilter(colorStateList.getColorForState(getState(), 0), mode);
        }
        return null;
    }

    @Override // android.graphics.drawable.Drawable
    public void inflate(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet) {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            drawable.inflate(resources, xmlPullParser, attributeSet);
        } else {
            inflate(resources, xmlPullParser, attributeSet, null);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            drawable.invalidateSelf();
        } else {
            super.invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isAutoMirrored() {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            return s1.a.h(drawable);
        }
        return this.f5812e.f5870e;
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            return drawable.isStateful();
        }
        if (!super.isStateful()) {
            h hVar = this.f5812e;
            if (hVar != null) {
                if (!hVar.g()) {
                    ColorStateList colorStateList = this.f5812e.f5868c;
                    if (colorStateList == null || !colorStateList.isStateful()) {
                        return false;
                    }
                    return true;
                }
                return true;
            }
            return false;
        }
        return true;
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ void jumpToCurrentState() {
        super.jumpToCurrentState();
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable mutate() {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            drawable.mutate();
            return this;
        }
        if (!this.f5815p && super.mutate() == this) {
            this.f5812e = new h(this.f5812e);
            this.f5815p = true;
        }
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            drawable.setBounds(rect);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        boolean z10;
        PorterDuff.Mode mode;
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            return drawable.setState(iArr);
        }
        h hVar = this.f5812e;
        ColorStateList colorStateList = hVar.f5868c;
        if (colorStateList != null && (mode = hVar.f5869d) != null) {
            this.f5813i = i(this.f5813i, colorStateList, mode);
            invalidateSelf();
            z10 = true;
        } else {
            z10 = false;
        }
        if (hVar.g() && hVar.h(iArr)) {
            invalidateSelf();
            return true;
        }
        return z10;
    }

    @Override // android.graphics.drawable.Drawable
    public void scheduleSelf(Runnable runnable, long j10) {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            drawable.scheduleSelf(runnable, j10);
        } else {
            super.scheduleSelf(runnable, j10);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            drawable.setAlpha(i10);
        } else if (this.f5812e.f5867b.getRootAlpha() != i10) {
            this.f5812e.f5867b.setRootAlpha(i10);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAutoMirrored(boolean z10) {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            s1.a.j(drawable, z10);
        } else {
            this.f5812e.f5870e = z10;
        }
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ void setChangingConfigurations(int i10) {
        super.setChangingConfigurations(i10);
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ void setColorFilter(int i10, PorterDuff.Mode mode) {
        super.setColorFilter(i10, mode);
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ void setFilterBitmap(boolean z10) {
        super.setFilterBitmap(z10);
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ void setHotspot(float f10, float f11) {
        super.setHotspot(f10, f11);
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ void setHotspotBounds(int i10, int i11, int i12, int i13) {
        super.setHotspotBounds(i10, i11, i12, i13);
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ boolean setState(int[] iArr) {
        return super.setState(iArr);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTint(int i10) {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            s1.a.n(drawable, i10);
        } else {
            setTintList(ColorStateList.valueOf(i10));
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            s1.a.o(drawable, colorStateList);
            return;
        }
        h hVar = this.f5812e;
        if (hVar.f5868c != colorStateList) {
            hVar.f5868c = colorStateList;
            this.f5813i = i(this.f5813i, colorStateList, hVar.f5869d);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            s1.a.p(drawable, mode);
            return;
        }
        h hVar = this.f5812e;
        if (hVar.f5869d != mode) {
            hVar.f5869d = mode;
            this.f5813i = i(this.f5813i, hVar.f5868c, mode);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            return drawable.setVisible(z10, z11);
        }
        return super.setVisible(z10, z11);
    }

    @Override // android.graphics.drawable.Drawable
    public void unscheduleSelf(Runnable runnable) {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            drawable.unscheduleSelf(runnable);
        } else {
            super.unscheduleSelf(runnable);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class i extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        private final Drawable.ConstantState f5878a;

        i(Drawable.ConstantState constantState) {
            this.f5878a = constantState;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public boolean canApplyTheme() {
            return this.f5878a.canApplyTheme();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5878a.getChangingConfigurations();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            f fVar = new f();
            fVar.f5810d = (VectorDrawable) this.f5878a.newDrawable();
            return fVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources) {
            f fVar = new f();
            fVar.f5810d = (VectorDrawable) this.f5878a.newDrawable(resources);
            return fVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources, Resources.Theme theme) {
            f fVar = new f();
            fVar.f5810d = (VectorDrawable) this.f5878a.newDrawable(resources, theme);
            return fVar;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            drawable.setColorFilter(colorFilter);
            return;
        }
        this.f5814o = colorFilter;
        invalidateSelf();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: androidx.vectordrawable.graphics.drawable.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class AbstractC0073f extends e {

        /* renamed from: a  reason: collision with root package name */
        protected e.b[] f5845a;

        /* renamed from: b  reason: collision with root package name */
        String f5846b;

        /* renamed from: c  reason: collision with root package name */
        int f5847c;

        /* renamed from: d  reason: collision with root package name */
        int f5848d;

        AbstractC0073f() {
            super();
            this.f5845a = null;
            this.f5847c = 0;
        }

        public boolean c() {
            return false;
        }

        public void d(Path path) {
            path.reset();
            e.b[] bVarArr = this.f5845a;
            if (bVarArr != null) {
                r1.e.j(bVarArr, path);
            }
        }

        public e.b[] getPathData() {
            return this.f5845a;
        }

        public String getPathName() {
            return this.f5846b;
        }

        public void setPathData(e.b[] bVarArr) {
            if (!r1.e.b(this.f5845a, bVarArr)) {
                this.f5845a = r1.e.f(bVarArr);
            } else {
                r1.e.k(this.f5845a, bVarArr);
            }
        }

        AbstractC0073f(AbstractC0073f abstractC0073f) {
            super();
            this.f5845a = null;
            this.f5847c = 0;
            this.f5846b = abstractC0073f.f5846b;
            this.f5848d = abstractC0073f.f5848d;
            this.f5845a = r1.e.f(abstractC0073f.f5845a);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void inflate(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        Drawable drawable = this.f5810d;
        if (drawable != null) {
            s1.a.g(drawable, resources, xmlPullParser, attributeSet, theme);
            return;
        }
        h hVar = this.f5812e;
        hVar.f5867b = new g();
        TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5781a);
        h(i10, xmlPullParser, theme);
        i10.recycle();
        hVar.f5866a = getChangingConfigurations();
        hVar.f5876k = true;
        d(resources, xmlPullParser, attributeSet, theme);
        this.f5813i = i(this.f5813i, hVar.f5868c, hVar.f5869d);
    }

    f(h hVar) {
        this.f5816q = true;
        this.f5817r = new float[9];
        this.f5818s = new Matrix();
        this.f5819t = new Rect();
        this.f5812e = hVar;
        this.f5813i = i(this.f5813i, hVar.f5868c, hVar.f5869d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends AbstractC0073f {

        /* renamed from: e  reason: collision with root package name */
        private int[] f5820e;

        /* renamed from: f  reason: collision with root package name */
        q1.d f5821f;

        /* renamed from: g  reason: collision with root package name */
        float f5822g;

        /* renamed from: h  reason: collision with root package name */
        q1.d f5823h;

        /* renamed from: i  reason: collision with root package name */
        float f5824i;

        /* renamed from: j  reason: collision with root package name */
        float f5825j;

        /* renamed from: k  reason: collision with root package name */
        float f5826k;

        /* renamed from: l  reason: collision with root package name */
        float f5827l;

        /* renamed from: m  reason: collision with root package name */
        float f5828m;

        /* renamed from: n  reason: collision with root package name */
        Paint.Cap f5829n;

        /* renamed from: o  reason: collision with root package name */
        Paint.Join f5830o;

        /* renamed from: p  reason: collision with root package name */
        float f5831p;

        c() {
            this.f5822g = 0.0f;
            this.f5824i = 1.0f;
            this.f5825j = 1.0f;
            this.f5826k = 0.0f;
            this.f5827l = 1.0f;
            this.f5828m = 0.0f;
            this.f5829n = Paint.Cap.BUTT;
            this.f5830o = Paint.Join.MITER;
            this.f5831p = 4.0f;
        }

        private Paint.Cap e(int i10, Paint.Cap cap) {
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        return cap;
                    }
                    return Paint.Cap.SQUARE;
                }
                return Paint.Cap.ROUND;
            }
            return Paint.Cap.BUTT;
        }

        private Paint.Join f(int i10, Paint.Join join) {
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        return join;
                    }
                    return Paint.Join.BEVEL;
                }
                return Paint.Join.ROUND;
            }
            return Paint.Join.MITER;
        }

        private void h(TypedArray typedArray, XmlPullParser xmlPullParser, Resources.Theme theme) {
            this.f5820e = null;
            if (!m.h(xmlPullParser, "pathData")) {
                return;
            }
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5846b = string;
            }
            String string2 = typedArray.getString(2);
            if (string2 != null) {
                this.f5845a = r1.e.d(string2);
            }
            this.f5823h = m.e(typedArray, xmlPullParser, theme, "fillColor", 1, 0);
            this.f5825j = m.f(typedArray, xmlPullParser, "fillAlpha", 12, this.f5825j);
            this.f5829n = e(m.g(typedArray, xmlPullParser, "strokeLineCap", 8, -1), this.f5829n);
            this.f5830o = f(m.g(typedArray, xmlPullParser, "strokeLineJoin", 9, -1), this.f5830o);
            this.f5831p = m.f(typedArray, xmlPullParser, "strokeMiterLimit", 10, this.f5831p);
            this.f5821f = m.e(typedArray, xmlPullParser, theme, "strokeColor", 3, 0);
            this.f5824i = m.f(typedArray, xmlPullParser, "strokeAlpha", 11, this.f5824i);
            this.f5822g = m.f(typedArray, xmlPullParser, "strokeWidth", 4, this.f5822g);
            this.f5827l = m.f(typedArray, xmlPullParser, "trimPathEnd", 6, this.f5827l);
            this.f5828m = m.f(typedArray, xmlPullParser, "trimPathOffset", 7, this.f5828m);
            this.f5826k = m.f(typedArray, xmlPullParser, "trimPathStart", 5, this.f5826k);
            this.f5847c = m.g(typedArray, xmlPullParser, "fillType", 13, this.f5847c);
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean a() {
            if (!this.f5823h.i() && !this.f5821f.i()) {
                return false;
            }
            return true;
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean b(int[] iArr) {
            return this.f5821f.j(iArr) | this.f5823h.j(iArr);
        }

        public void g(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5783c);
            h(i10, xmlPullParser, theme);
            i10.recycle();
        }

        float getFillAlpha() {
            return this.f5825j;
        }

        int getFillColor() {
            return this.f5823h.e();
        }

        float getStrokeAlpha() {
            return this.f5824i;
        }

        int getStrokeColor() {
            return this.f5821f.e();
        }

        float getStrokeWidth() {
            return this.f5822g;
        }

        float getTrimPathEnd() {
            return this.f5827l;
        }

        float getTrimPathOffset() {
            return this.f5828m;
        }

        float getTrimPathStart() {
            return this.f5826k;
        }

        void setFillAlpha(float f10) {
            this.f5825j = f10;
        }

        void setFillColor(int i10) {
            this.f5823h.k(i10);
        }

        void setStrokeAlpha(float f10) {
            this.f5824i = f10;
        }

        void setStrokeColor(int i10) {
            this.f5821f.k(i10);
        }

        void setStrokeWidth(float f10) {
            this.f5822g = f10;
        }

        void setTrimPathEnd(float f10) {
            this.f5827l = f10;
        }

        void setTrimPathOffset(float f10) {
            this.f5828m = f10;
        }

        void setTrimPathStart(float f10) {
            this.f5826k = f10;
        }

        c(c cVar) {
            super(cVar);
            this.f5822g = 0.0f;
            this.f5824i = 1.0f;
            this.f5825j = 1.0f;
            this.f5826k = 0.0f;
            this.f5827l = 1.0f;
            this.f5828m = 0.0f;
            this.f5829n = Paint.Cap.BUTT;
            this.f5830o = Paint.Join.MITER;
            this.f5831p = 4.0f;
            this.f5820e = cVar.f5820e;
            this.f5821f = cVar.f5821f;
            this.f5822g = cVar.f5822g;
            this.f5824i = cVar.f5824i;
            this.f5823h = cVar.f5823h;
            this.f5847c = cVar.f5847c;
            this.f5825j = cVar.f5825j;
            this.f5826k = cVar.f5826k;
            this.f5827l = cVar.f5827l;
            this.f5828m = cVar.f5828m;
            this.f5829n = cVar.f5829n;
            this.f5830o = cVar.f5830o;
            this.f5831p = cVar.f5831p;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g {

        /* renamed from: q  reason: collision with root package name */
        private static final Matrix f5849q = new Matrix();

        /* renamed from: a  reason: collision with root package name */
        private final Path f5850a;

        /* renamed from: b  reason: collision with root package name */
        private final Path f5851b;

        /* renamed from: c  reason: collision with root package name */
        private final Matrix f5852c;

        /* renamed from: d  reason: collision with root package name */
        Paint f5853d;

        /* renamed from: e  reason: collision with root package name */
        Paint f5854e;

        /* renamed from: f  reason: collision with root package name */
        private PathMeasure f5855f;

        /* renamed from: g  reason: collision with root package name */
        private int f5856g;

        /* renamed from: h  reason: collision with root package name */
        final d f5857h;

        /* renamed from: i  reason: collision with root package name */
        float f5858i;

        /* renamed from: j  reason: collision with root package name */
        float f5859j;

        /* renamed from: k  reason: collision with root package name */
        float f5860k;

        /* renamed from: l  reason: collision with root package name */
        float f5861l;

        /* renamed from: m  reason: collision with root package name */
        int f5862m;

        /* renamed from: n  reason: collision with root package name */
        String f5863n;

        /* renamed from: o  reason: collision with root package name */
        Boolean f5864o;

        /* renamed from: p  reason: collision with root package name */
        final u0.a f5865p;

        g() {
            this.f5852c = new Matrix();
            this.f5858i = 0.0f;
            this.f5859j = 0.0f;
            this.f5860k = 0.0f;
            this.f5861l = 0.0f;
            this.f5862m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f5863n = null;
            this.f5864o = null;
            this.f5865p = new u0.a();
            this.f5857h = new d();
            this.f5850a = new Path();
            this.f5851b = new Path();
        }

        private static float a(float f10, float f11, float f12, float f13) {
            return (f10 * f13) - (f11 * f12);
        }

        private void c(d dVar, Matrix matrix, Canvas canvas, int i10, int i11, ColorFilter colorFilter) {
            d dVar2 = dVar;
            dVar2.f5832a.set(matrix);
            dVar2.f5832a.preConcat(dVar2.f5841j);
            canvas.save();
            int i12 = 0;
            while (i12 < dVar2.f5833b.size()) {
                e eVar = (e) dVar2.f5833b.get(i12);
                if (eVar instanceof d) {
                    c((d) eVar, dVar2.f5832a, canvas, i10, i11, colorFilter);
                } else if (eVar instanceof AbstractC0073f) {
                    d(dVar2, (AbstractC0073f) eVar, canvas, i10, i11, colorFilter);
                }
                i12++;
                dVar2 = dVar;
            }
            canvas.restore();
        }

        private void d(d dVar, AbstractC0073f abstractC0073f, Canvas canvas, int i10, int i11, ColorFilter colorFilter) {
            Path.FillType fillType;
            Path.FillType fillType2;
            float f10 = i10 / this.f5860k;
            float f11 = i11 / this.f5861l;
            float min = Math.min(f10, f11);
            Matrix matrix = dVar.f5832a;
            this.f5852c.set(matrix);
            this.f5852c.postScale(f10, f11);
            float e10 = e(matrix);
            if (e10 != 0.0f) {
                abstractC0073f.d(this.f5850a);
                Path path = this.f5850a;
                this.f5851b.reset();
                if (abstractC0073f.c()) {
                    Path path2 = this.f5851b;
                    if (abstractC0073f.f5847c == 0) {
                        fillType2 = Path.FillType.WINDING;
                    } else {
                        fillType2 = Path.FillType.EVEN_ODD;
                    }
                    path2.setFillType(fillType2);
                    this.f5851b.addPath(path, this.f5852c);
                    canvas.clipPath(this.f5851b);
                    return;
                }
                c cVar = (c) abstractC0073f;
                float f12 = cVar.f5826k;
                if (f12 != 0.0f || cVar.f5827l != 1.0f) {
                    float f13 = cVar.f5828m;
                    float f14 = (f12 + f13) % 1.0f;
                    float f15 = (cVar.f5827l + f13) % 1.0f;
                    if (this.f5855f == null) {
                        this.f5855f = new PathMeasure();
                    }
                    this.f5855f.setPath(this.f5850a, false);
                    float length = this.f5855f.getLength();
                    float f16 = f14 * length;
                    float f17 = f15 * length;
                    path.reset();
                    if (f16 > f17) {
                        this.f5855f.getSegment(f16, length, path, true);
                        this.f5855f.getSegment(0.0f, f17, path, true);
                    } else {
                        this.f5855f.getSegment(f16, f17, path, true);
                    }
                    path.rLineTo(0.0f, 0.0f);
                }
                this.f5851b.addPath(path, this.f5852c);
                if (cVar.f5823h.l()) {
                    q1.d dVar2 = cVar.f5823h;
                    if (this.f5854e == null) {
                        Paint paint = new Paint(1);
                        this.f5854e = paint;
                        paint.setStyle(Paint.Style.FILL);
                    }
                    Paint paint2 = this.f5854e;
                    if (dVar2.h()) {
                        Shader f18 = dVar2.f();
                        f18.setLocalMatrix(this.f5852c);
                        paint2.setShader(f18);
                        paint2.setAlpha(Math.round(cVar.f5825j * 255.0f));
                    } else {
                        paint2.setShader(null);
                        paint2.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        paint2.setColor(f.a(dVar2.e(), cVar.f5825j));
                    }
                    paint2.setColorFilter(colorFilter);
                    Path path3 = this.f5851b;
                    if (cVar.f5847c == 0) {
                        fillType = Path.FillType.WINDING;
                    } else {
                        fillType = Path.FillType.EVEN_ODD;
                    }
                    path3.setFillType(fillType);
                    canvas.drawPath(this.f5851b, paint2);
                }
                if (cVar.f5821f.l()) {
                    q1.d dVar3 = cVar.f5821f;
                    if (this.f5853d == null) {
                        Paint paint3 = new Paint(1);
                        this.f5853d = paint3;
                        paint3.setStyle(Paint.Style.STROKE);
                    }
                    Paint paint4 = this.f5853d;
                    Paint.Join join = cVar.f5830o;
                    if (join != null) {
                        paint4.setStrokeJoin(join);
                    }
                    Paint.Cap cap = cVar.f5829n;
                    if (cap != null) {
                        paint4.setStrokeCap(cap);
                    }
                    paint4.setStrokeMiter(cVar.f5831p);
                    if (dVar3.h()) {
                        Shader f19 = dVar3.f();
                        f19.setLocalMatrix(this.f5852c);
                        paint4.setShader(f19);
                        paint4.setAlpha(Math.round(cVar.f5824i * 255.0f));
                    } else {
                        paint4.setShader(null);
                        paint4.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        paint4.setColor(f.a(dVar3.e(), cVar.f5824i));
                    }
                    paint4.setColorFilter(colorFilter);
                    paint4.setStrokeWidth(cVar.f5822g * min * e10);
                    canvas.drawPath(this.f5851b, paint4);
                }
            }
        }

        private float e(Matrix matrix) {
            float[] fArr = {0.0f, 1.0f, 1.0f, 0.0f};
            matrix.mapVectors(fArr);
            float a10 = a(fArr[0], fArr[1], fArr[2], fArr[3]);
            float max = Math.max((float) Math.hypot(fArr[0], fArr[1]), (float) Math.hypot(fArr[2], fArr[3]));
            if (max <= 0.0f) {
                return 0.0f;
            }
            return Math.abs(a10) / max;
        }

        public void b(Canvas canvas, int i10, int i11, ColorFilter colorFilter) {
            c(this.f5857h, f5849q, canvas, i10, i11, colorFilter);
        }

        public boolean f() {
            if (this.f5864o == null) {
                this.f5864o = Boolean.valueOf(this.f5857h.a());
            }
            return this.f5864o.booleanValue();
        }

        public boolean g(int[] iArr) {
            return this.f5857h.b(iArr);
        }

        public float getAlpha() {
            return getRootAlpha() / 255.0f;
        }

        public int getRootAlpha() {
            return this.f5862m;
        }

        public void setAlpha(float f10) {
            setRootAlpha((int) (f10 * 255.0f));
        }

        public void setRootAlpha(int i10) {
            this.f5862m = i10;
        }

        g(g gVar) {
            this.f5852c = new Matrix();
            this.f5858i = 0.0f;
            this.f5859j = 0.0f;
            this.f5860k = 0.0f;
            this.f5861l = 0.0f;
            this.f5862m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f5863n = null;
            this.f5864o = null;
            u0.a aVar = new u0.a();
            this.f5865p = aVar;
            this.f5857h = new d(gVar.f5857h, aVar);
            this.f5850a = new Path(gVar.f5850a);
            this.f5851b = new Path(gVar.f5851b);
            this.f5858i = gVar.f5858i;
            this.f5859j = gVar.f5859j;
            this.f5860k = gVar.f5860k;
            this.f5861l = gVar.f5861l;
            this.f5856g = gVar.f5856g;
            this.f5862m = gVar.f5862m;
            this.f5863n = gVar.f5863n;
            String str = gVar.f5863n;
            if (str != null) {
                aVar.put(str, this);
            }
            this.f5864o = gVar.f5864o;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends e {

        /* renamed from: a  reason: collision with root package name */
        final Matrix f5832a;

        /* renamed from: b  reason: collision with root package name */
        final ArrayList f5833b;

        /* renamed from: c  reason: collision with root package name */
        float f5834c;

        /* renamed from: d  reason: collision with root package name */
        private float f5835d;

        /* renamed from: e  reason: collision with root package name */
        private float f5836e;

        /* renamed from: f  reason: collision with root package name */
        private float f5837f;

        /* renamed from: g  reason: collision with root package name */
        private float f5838g;

        /* renamed from: h  reason: collision with root package name */
        private float f5839h;

        /* renamed from: i  reason: collision with root package name */
        private float f5840i;

        /* renamed from: j  reason: collision with root package name */
        final Matrix f5841j;

        /* renamed from: k  reason: collision with root package name */
        int f5842k;

        /* renamed from: l  reason: collision with root package name */
        private int[] f5843l;

        /* renamed from: m  reason: collision with root package name */
        private String f5844m;

        d(d dVar, u0.a aVar) {
            super();
            AbstractC0073f bVar;
            this.f5832a = new Matrix();
            this.f5833b = new ArrayList();
            this.f5834c = 0.0f;
            this.f5835d = 0.0f;
            this.f5836e = 0.0f;
            this.f5837f = 1.0f;
            this.f5838g = 1.0f;
            this.f5839h = 0.0f;
            this.f5840i = 0.0f;
            Matrix matrix = new Matrix();
            this.f5841j = matrix;
            this.f5844m = null;
            this.f5834c = dVar.f5834c;
            this.f5835d = dVar.f5835d;
            this.f5836e = dVar.f5836e;
            this.f5837f = dVar.f5837f;
            this.f5838g = dVar.f5838g;
            this.f5839h = dVar.f5839h;
            this.f5840i = dVar.f5840i;
            this.f5843l = dVar.f5843l;
            String str = dVar.f5844m;
            this.f5844m = str;
            this.f5842k = dVar.f5842k;
            if (str != null) {
                aVar.put(str, this);
            }
            matrix.set(dVar.f5841j);
            ArrayList arrayList = dVar.f5833b;
            for (int i10 = 0; i10 < arrayList.size(); i10++) {
                Object obj = arrayList.get(i10);
                if (obj instanceof d) {
                    this.f5833b.add(new d((d) obj, aVar));
                } else {
                    if (obj instanceof c) {
                        bVar = new c((c) obj);
                    } else if (obj instanceof b) {
                        bVar = new b((b) obj);
                    } else {
                        throw new IllegalStateException("Unknown object in the tree!");
                    }
                    this.f5833b.add(bVar);
                    Object obj2 = bVar.f5846b;
                    if (obj2 != null) {
                        aVar.put(obj2, bVar);
                    }
                }
            }
        }

        private void d() {
            this.f5841j.reset();
            this.f5841j.postTranslate(-this.f5835d, -this.f5836e);
            this.f5841j.postScale(this.f5837f, this.f5838g);
            this.f5841j.postRotate(this.f5834c, 0.0f, 0.0f);
            this.f5841j.postTranslate(this.f5839h + this.f5835d, this.f5840i + this.f5836e);
        }

        private void e(TypedArray typedArray, XmlPullParser xmlPullParser) {
            this.f5843l = null;
            this.f5834c = m.f(typedArray, xmlPullParser, ViewProps.ROTATION, 5, this.f5834c);
            this.f5835d = typedArray.getFloat(1, this.f5835d);
            this.f5836e = typedArray.getFloat(2, this.f5836e);
            this.f5837f = m.f(typedArray, xmlPullParser, ViewProps.SCALE_X, 3, this.f5837f);
            this.f5838g = m.f(typedArray, xmlPullParser, ViewProps.SCALE_Y, 4, this.f5838g);
            this.f5839h = m.f(typedArray, xmlPullParser, ViewProps.TRANSLATE_X, 6, this.f5839h);
            this.f5840i = m.f(typedArray, xmlPullParser, ViewProps.TRANSLATE_Y, 7, this.f5840i);
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5844m = string;
            }
            d();
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean a() {
            for (int i10 = 0; i10 < this.f5833b.size(); i10++) {
                if (((e) this.f5833b.get(i10)).a()) {
                    return true;
                }
            }
            return false;
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean b(int[] iArr) {
            boolean z10 = false;
            for (int i10 = 0; i10 < this.f5833b.size(); i10++) {
                z10 |= ((e) this.f5833b.get(i10)).b(iArr);
            }
            return z10;
        }

        public void c(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5782b);
            e(i10, xmlPullParser);
            i10.recycle();
        }

        public String getGroupName() {
            return this.f5844m;
        }

        public Matrix getLocalMatrix() {
            return this.f5841j;
        }

        public float getPivotX() {
            return this.f5835d;
        }

        public float getPivotY() {
            return this.f5836e;
        }

        public float getRotation() {
            return this.f5834c;
        }

        public float getScaleX() {
            return this.f5837f;
        }

        public float getScaleY() {
            return this.f5838g;
        }

        public float getTranslateX() {
            return this.f5839h;
        }

        public float getTranslateY() {
            return this.f5840i;
        }

        public void setPivotX(float f10) {
            if (f10 != this.f5835d) {
                this.f5835d = f10;
                d();
            }
        }

        public void setPivotY(float f10) {
            if (f10 != this.f5836e) {
                this.f5836e = f10;
                d();
            }
        }

        public void setRotation(float f10) {
            if (f10 != this.f5834c) {
                this.f5834c = f10;
                d();
            }
        }

        public void setScaleX(float f10) {
            if (f10 != this.f5837f) {
                this.f5837f = f10;
                d();
            }
        }

        public void setScaleY(float f10) {
            if (f10 != this.f5838g) {
                this.f5838g = f10;
                d();
            }
        }

        public void setTranslateX(float f10) {
            if (f10 != this.f5839h) {
                this.f5839h = f10;
                d();
            }
        }

        public void setTranslateY(float f10) {
            if (f10 != this.f5840i) {
                this.f5840i = f10;
                d();
            }
        }

        d() {
            super();
            this.f5832a = new Matrix();
            this.f5833b = new ArrayList();
            this.f5834c = 0.0f;
            this.f5835d = 0.0f;
            this.f5836e = 0.0f;
            this.f5837f = 1.0f;
            this.f5838g = 1.0f;
            this.f5839h = 0.0f;
            this.f5840i = 0.0f;
            this.f5841j = new Matrix();
            this.f5844m = null;
        }
    }
}
