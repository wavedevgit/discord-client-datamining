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
    static final PorterDuff.Mode f5370u = PorterDuff.Mode.SRC_IN;

    /* renamed from: e  reason: collision with root package name */
    private h f5371e;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuffColorFilter f5372i;

    /* renamed from: o  reason: collision with root package name */
    private ColorFilter f5373o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f5374p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f5375q;

    /* renamed from: r  reason: collision with root package name */
    private final float[] f5376r;

    /* renamed from: s  reason: collision with root package name */
    private final Matrix f5377s;

    /* renamed from: t  reason: collision with root package name */
    private final Rect f5378t;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends AbstractC0074f {
        b() {
        }

        private void f(TypedArray typedArray, XmlPullParser xmlPullParser) {
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5405b = string;
            }
            String string2 = typedArray.getString(1);
            if (string2 != null) {
                this.f5404a = r1.e.d(string2);
            }
            this.f5406c = m.g(typedArray, xmlPullParser, "fillType", 2, 0);
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.AbstractC0074f
        public boolean c() {
            return true;
        }

        public void e(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            if (!m.h(xmlPullParser, "pathData")) {
                return;
            }
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5343d);
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
        int f5425a;

        /* renamed from: b  reason: collision with root package name */
        g f5426b;

        /* renamed from: c  reason: collision with root package name */
        ColorStateList f5427c;

        /* renamed from: d  reason: collision with root package name */
        PorterDuff.Mode f5428d;

        /* renamed from: e  reason: collision with root package name */
        boolean f5429e;

        /* renamed from: f  reason: collision with root package name */
        Bitmap f5430f;

        /* renamed from: g  reason: collision with root package name */
        ColorStateList f5431g;

        /* renamed from: h  reason: collision with root package name */
        PorterDuff.Mode f5432h;

        /* renamed from: i  reason: collision with root package name */
        int f5433i;

        /* renamed from: j  reason: collision with root package name */
        boolean f5434j;

        /* renamed from: k  reason: collision with root package name */
        boolean f5435k;

        /* renamed from: l  reason: collision with root package name */
        Paint f5436l;

        h(h hVar) {
            this.f5427c = null;
            this.f5428d = f.f5370u;
            if (hVar != null) {
                this.f5425a = hVar.f5425a;
                g gVar = new g(hVar.f5426b);
                this.f5426b = gVar;
                if (hVar.f5426b.f5413e != null) {
                    gVar.f5413e = new Paint(hVar.f5426b.f5413e);
                }
                if (hVar.f5426b.f5412d != null) {
                    this.f5426b.f5412d = new Paint(hVar.f5426b.f5412d);
                }
                this.f5427c = hVar.f5427c;
                this.f5428d = hVar.f5428d;
                this.f5429e = hVar.f5429e;
            }
        }

        public boolean a(int i10, int i11) {
            if (i10 == this.f5430f.getWidth() && i11 == this.f5430f.getHeight()) {
                return true;
            }
            return false;
        }

        public boolean b() {
            if (!this.f5435k && this.f5431g == this.f5427c && this.f5432h == this.f5428d && this.f5434j == this.f5429e && this.f5433i == this.f5426b.getRootAlpha()) {
                return true;
            }
            return false;
        }

        public void c(int i10, int i11) {
            if (this.f5430f != null && a(i10, i11)) {
                return;
            }
            this.f5430f = Bitmap.createBitmap(i10, i11, Bitmap.Config.ARGB_8888);
            this.f5435k = true;
        }

        public void d(Canvas canvas, ColorFilter colorFilter, Rect rect) {
            canvas.drawBitmap(this.f5430f, (Rect) null, rect, e(colorFilter));
        }

        public Paint e(ColorFilter colorFilter) {
            if (!f() && colorFilter == null) {
                return null;
            }
            if (this.f5436l == null) {
                Paint paint = new Paint();
                this.f5436l = paint;
                paint.setFilterBitmap(true);
            }
            this.f5436l.setAlpha(this.f5426b.getRootAlpha());
            this.f5436l.setColorFilter(colorFilter);
            return this.f5436l;
        }

        public boolean f() {
            if (this.f5426b.getRootAlpha() < 255) {
                return true;
            }
            return false;
        }

        public boolean g() {
            return this.f5426b.f();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5425a;
        }

        public boolean h(int[] iArr) {
            boolean g10 = this.f5426b.g(iArr);
            this.f5435k |= g10;
            return g10;
        }

        public void i() {
            this.f5431g = this.f5427c;
            this.f5432h = this.f5428d;
            this.f5433i = this.f5426b.getRootAlpha();
            this.f5434j = this.f5429e;
            this.f5435k = false;
        }

        public void j(int i10, int i11) {
            this.f5430f.eraseColor(0);
            this.f5426b.b(new Canvas(this.f5430f), i10, i11, null);
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
            this.f5427c = null;
            this.f5428d = f.f5370u;
            this.f5426b = new g();
        }
    }

    f() {
        this.f5375q = true;
        this.f5376r = new float[9];
        this.f5377s = new Matrix();
        this.f5378t = new Rect();
        this.f5371e = new h();
    }

    static int a(int i10, float f10) {
        return (i10 & 16777215) | (((int) (Color.alpha(i10) * f10)) << 24);
    }

    public static f b(Resources resources, int i10, Resources.Theme theme) {
        f fVar = new f();
        fVar.f5369d = j.f(resources, i10, theme);
        return fVar;
    }

    private void d(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        h hVar = this.f5371e;
        g gVar = hVar.f5426b;
        ArrayDeque arrayDeque = new ArrayDeque();
        arrayDeque.push(gVar.f5416h);
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
                        dVar.f5392b.add(cVar);
                        if (cVar.getPathName() != null) {
                            gVar.f5424p.put(cVar.getPathName(), cVar);
                        }
                        hVar.f5425a = cVar.f5407d | hVar.f5425a;
                        z10 = false;
                    } else if ("clip-path".equals(name)) {
                        b bVar = new b();
                        bVar.e(resources, attributeSet, theme, xmlPullParser);
                        dVar.f5392b.add(bVar);
                        if (bVar.getPathName() != null) {
                            gVar.f5424p.put(bVar.getPathName(), bVar);
                        }
                        hVar.f5425a = bVar.f5407d | hVar.f5425a;
                    } else if ("group".equals(name)) {
                        d dVar2 = new d();
                        dVar2.c(resources, attributeSet, theme, xmlPullParser);
                        dVar.f5392b.add(dVar2);
                        arrayDeque.push(dVar2);
                        if (dVar2.getGroupName() != null) {
                            gVar.f5424p.put(dVar2.getGroupName(), dVar2);
                        }
                        hVar.f5425a = dVar2.f5401k | hVar.f5425a;
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
        h hVar = this.f5371e;
        g gVar = hVar.f5426b;
        hVar.f5428d = f(m.g(typedArray, xmlPullParser, "tintMode", 6, -1), PorterDuff.Mode.SRC_IN);
        ColorStateList c10 = m.c(typedArray, xmlPullParser, theme, "tint", 1);
        if (c10 != null) {
            hVar.f5427c = c10;
        }
        hVar.f5429e = m.a(typedArray, xmlPullParser, "autoMirrored", 5, hVar.f5429e);
        gVar.f5419k = m.f(typedArray, xmlPullParser, "viewportWidth", 7, gVar.f5419k);
        float f10 = m.f(typedArray, xmlPullParser, "viewportHeight", 8, gVar.f5420l);
        gVar.f5420l = f10;
        if (gVar.f5419k > 0.0f) {
            if (f10 > 0.0f) {
                gVar.f5417i = typedArray.getDimension(3, gVar.f5417i);
                float dimension = typedArray.getDimension(2, gVar.f5418j);
                gVar.f5418j = dimension;
                if (gVar.f5417i > 0.0f) {
                    if (dimension > 0.0f) {
                        gVar.setAlpha(m.f(typedArray, xmlPullParser, "alpha", 4, gVar.getAlpha()));
                        String string = typedArray.getString(0);
                        if (string != null) {
                            gVar.f5422n = string;
                            gVar.f5424p.put(string, gVar);
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
        return this.f5371e.f5426b.f5424p.get(str);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean canApplyTheme() {
        Drawable drawable = this.f5369d;
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
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            drawable.draw(canvas);
            return;
        }
        copyBounds(this.f5378t);
        if (this.f5378t.width() > 0 && this.f5378t.height() > 0) {
            ColorFilter colorFilter = this.f5373o;
            if (colorFilter == null) {
                colorFilter = this.f5372i;
            }
            canvas.getMatrix(this.f5377s);
            this.f5377s.getValues(this.f5376r);
            float abs = Math.abs(this.f5376r[0]);
            float abs2 = Math.abs(this.f5376r[4]);
            float abs3 = Math.abs(this.f5376r[1]);
            float abs4 = Math.abs(this.f5376r[3]);
            if (abs3 != 0.0f || abs4 != 0.0f) {
                abs = 1.0f;
                abs2 = 1.0f;
            }
            int min = Math.min((int) RecyclerView.ItemAnimator.FLAG_MOVED, (int) (this.f5378t.width() * abs));
            int min2 = Math.min((int) RecyclerView.ItemAnimator.FLAG_MOVED, (int) (this.f5378t.height() * abs2));
            if (min > 0 && min2 > 0) {
                int save = canvas.save();
                Rect rect = this.f5378t;
                canvas.translate(rect.left, rect.top);
                if (e()) {
                    canvas.translate(this.f5378t.width(), 0.0f);
                    canvas.scale(-1.0f, 1.0f);
                }
                this.f5378t.offsetTo(0, 0);
                this.f5371e.c(min, min2);
                if (!this.f5375q) {
                    this.f5371e.j(min, min2);
                } else if (!this.f5371e.b()) {
                    this.f5371e.j(min, min2);
                    this.f5371e.i();
                }
                this.f5371e.d(canvas, colorFilter, this.f5378t);
                canvas.restoreToCount(save);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(boolean z10) {
        this.f5375q = z10;
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return s1.a.d(drawable);
        }
        return this.f5371e.f5426b.getRootAlpha();
    }

    @Override // android.graphics.drawable.Drawable
    public int getChangingConfigurations() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return drawable.getChangingConfigurations();
        }
        return super.getChangingConfigurations() | this.f5371e.getChangingConfigurations();
    }

    @Override // android.graphics.drawable.Drawable
    public ColorFilter getColorFilter() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return s1.a.e(drawable);
        }
        return this.f5373o;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        if (this.f5369d != null) {
            return new i(this.f5369d.getConstantState());
        }
        this.f5371e.f5425a = getChangingConfigurations();
        return this.f5371e;
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ Drawable getCurrent() {
        return super.getCurrent();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return drawable.getIntrinsicHeight();
        }
        return (int) this.f5371e.f5426b.f5418j;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return drawable.getIntrinsicWidth();
        }
        return (int) this.f5371e.f5426b.f5417i;
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
        Drawable drawable = this.f5369d;
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
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            drawable.inflate(resources, xmlPullParser, attributeSet);
        } else {
            inflate(resources, xmlPullParser, attributeSet, null);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            drawable.invalidateSelf();
        } else {
            super.invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isAutoMirrored() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return s1.a.h(drawable);
        }
        return this.f5371e.f5429e;
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return drawable.isStateful();
        }
        if (!super.isStateful()) {
            h hVar = this.f5371e;
            if (hVar != null) {
                if (!hVar.g()) {
                    ColorStateList colorStateList = this.f5371e.f5427c;
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
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            drawable.mutate();
            return this;
        }
        if (!this.f5374p && super.mutate() == this) {
            this.f5371e = new h(this.f5371e);
            this.f5374p = true;
        }
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            drawable.setBounds(rect);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        boolean z10;
        PorterDuff.Mode mode;
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return drawable.setState(iArr);
        }
        h hVar = this.f5371e;
        ColorStateList colorStateList = hVar.f5427c;
        if (colorStateList != null && (mode = hVar.f5428d) != null) {
            this.f5372i = i(this.f5372i, colorStateList, mode);
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
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            drawable.scheduleSelf(runnable, j10);
        } else {
            super.scheduleSelf(runnable, j10);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            drawable.setAlpha(i10);
        } else if (this.f5371e.f5426b.getRootAlpha() != i10) {
            this.f5371e.f5426b.setRootAlpha(i10);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAutoMirrored(boolean z10) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            s1.a.j(drawable, z10);
        } else {
            this.f5371e.f5429e = z10;
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
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            s1.a.n(drawable, i10);
        } else {
            setTintList(ColorStateList.valueOf(i10));
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            s1.a.o(drawable, colorStateList);
            return;
        }
        h hVar = this.f5371e;
        if (hVar.f5427c != colorStateList) {
            hVar.f5427c = colorStateList;
            this.f5372i = i(this.f5372i, colorStateList, hVar.f5428d);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            s1.a.p(drawable, mode);
            return;
        }
        h hVar = this.f5371e;
        if (hVar.f5428d != mode) {
            hVar.f5428d = mode;
            this.f5372i = i(this.f5372i, hVar.f5427c, mode);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return drawable.setVisible(z10, z11);
        }
        return super.setVisible(z10, z11);
    }

    @Override // android.graphics.drawable.Drawable
    public void unscheduleSelf(Runnable runnable) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            drawable.unscheduleSelf(runnable);
        } else {
            super.unscheduleSelf(runnable);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class i extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        private final Drawable.ConstantState f5437a;

        i(Drawable.ConstantState constantState) {
            this.f5437a = constantState;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public boolean canApplyTheme() {
            return this.f5437a.canApplyTheme();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5437a.getChangingConfigurations();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            f fVar = new f();
            fVar.f5369d = (VectorDrawable) this.f5437a.newDrawable();
            return fVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources) {
            f fVar = new f();
            fVar.f5369d = (VectorDrawable) this.f5437a.newDrawable(resources);
            return fVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources, Resources.Theme theme) {
            f fVar = new f();
            fVar.f5369d = (VectorDrawable) this.f5437a.newDrawable(resources, theme);
            return fVar;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            drawable.setColorFilter(colorFilter);
            return;
        }
        this.f5373o = colorFilter;
        invalidateSelf();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: androidx.vectordrawable.graphics.drawable.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class AbstractC0074f extends e {

        /* renamed from: a  reason: collision with root package name */
        protected e.b[] f5404a;

        /* renamed from: b  reason: collision with root package name */
        String f5405b;

        /* renamed from: c  reason: collision with root package name */
        int f5406c;

        /* renamed from: d  reason: collision with root package name */
        int f5407d;

        AbstractC0074f() {
            super();
            this.f5404a = null;
            this.f5406c = 0;
        }

        public boolean c() {
            return false;
        }

        public void d(Path path) {
            path.reset();
            e.b[] bVarArr = this.f5404a;
            if (bVarArr != null) {
                r1.e.j(bVarArr, path);
            }
        }

        public e.b[] getPathData() {
            return this.f5404a;
        }

        public String getPathName() {
            return this.f5405b;
        }

        public void setPathData(e.b[] bVarArr) {
            if (!r1.e.b(this.f5404a, bVarArr)) {
                this.f5404a = r1.e.f(bVarArr);
            } else {
                r1.e.k(this.f5404a, bVarArr);
            }
        }

        AbstractC0074f(AbstractC0074f abstractC0074f) {
            super();
            this.f5404a = null;
            this.f5406c = 0;
            this.f5405b = abstractC0074f.f5405b;
            this.f5407d = abstractC0074f.f5407d;
            this.f5404a = r1.e.f(abstractC0074f.f5404a);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void inflate(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            s1.a.g(drawable, resources, xmlPullParser, attributeSet, theme);
            return;
        }
        h hVar = this.f5371e;
        hVar.f5426b = new g();
        TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5340a);
        h(i10, xmlPullParser, theme);
        i10.recycle();
        hVar.f5425a = getChangingConfigurations();
        hVar.f5435k = true;
        d(resources, xmlPullParser, attributeSet, theme);
        this.f5372i = i(this.f5372i, hVar.f5427c, hVar.f5428d);
    }

    f(h hVar) {
        this.f5375q = true;
        this.f5376r = new float[9];
        this.f5377s = new Matrix();
        this.f5378t = new Rect();
        this.f5371e = hVar;
        this.f5372i = i(this.f5372i, hVar.f5427c, hVar.f5428d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends AbstractC0074f {

        /* renamed from: e  reason: collision with root package name */
        private int[] f5379e;

        /* renamed from: f  reason: collision with root package name */
        q1.d f5380f;

        /* renamed from: g  reason: collision with root package name */
        float f5381g;

        /* renamed from: h  reason: collision with root package name */
        q1.d f5382h;

        /* renamed from: i  reason: collision with root package name */
        float f5383i;

        /* renamed from: j  reason: collision with root package name */
        float f5384j;

        /* renamed from: k  reason: collision with root package name */
        float f5385k;

        /* renamed from: l  reason: collision with root package name */
        float f5386l;

        /* renamed from: m  reason: collision with root package name */
        float f5387m;

        /* renamed from: n  reason: collision with root package name */
        Paint.Cap f5388n;

        /* renamed from: o  reason: collision with root package name */
        Paint.Join f5389o;

        /* renamed from: p  reason: collision with root package name */
        float f5390p;

        c() {
            this.f5381g = 0.0f;
            this.f5383i = 1.0f;
            this.f5384j = 1.0f;
            this.f5385k = 0.0f;
            this.f5386l = 1.0f;
            this.f5387m = 0.0f;
            this.f5388n = Paint.Cap.BUTT;
            this.f5389o = Paint.Join.MITER;
            this.f5390p = 4.0f;
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
            this.f5379e = null;
            if (!m.h(xmlPullParser, "pathData")) {
                return;
            }
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5405b = string;
            }
            String string2 = typedArray.getString(2);
            if (string2 != null) {
                this.f5404a = r1.e.d(string2);
            }
            this.f5382h = m.e(typedArray, xmlPullParser, theme, "fillColor", 1, 0);
            this.f5384j = m.f(typedArray, xmlPullParser, "fillAlpha", 12, this.f5384j);
            this.f5388n = e(m.g(typedArray, xmlPullParser, "strokeLineCap", 8, -1), this.f5388n);
            this.f5389o = f(m.g(typedArray, xmlPullParser, "strokeLineJoin", 9, -1), this.f5389o);
            this.f5390p = m.f(typedArray, xmlPullParser, "strokeMiterLimit", 10, this.f5390p);
            this.f5380f = m.e(typedArray, xmlPullParser, theme, "strokeColor", 3, 0);
            this.f5383i = m.f(typedArray, xmlPullParser, "strokeAlpha", 11, this.f5383i);
            this.f5381g = m.f(typedArray, xmlPullParser, "strokeWidth", 4, this.f5381g);
            this.f5386l = m.f(typedArray, xmlPullParser, "trimPathEnd", 6, this.f5386l);
            this.f5387m = m.f(typedArray, xmlPullParser, "trimPathOffset", 7, this.f5387m);
            this.f5385k = m.f(typedArray, xmlPullParser, "trimPathStart", 5, this.f5385k);
            this.f5406c = m.g(typedArray, xmlPullParser, "fillType", 13, this.f5406c);
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean a() {
            if (!this.f5382h.i() && !this.f5380f.i()) {
                return false;
            }
            return true;
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean b(int[] iArr) {
            return this.f5380f.j(iArr) | this.f5382h.j(iArr);
        }

        public void g(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5342c);
            h(i10, xmlPullParser, theme);
            i10.recycle();
        }

        float getFillAlpha() {
            return this.f5384j;
        }

        int getFillColor() {
            return this.f5382h.e();
        }

        float getStrokeAlpha() {
            return this.f5383i;
        }

        int getStrokeColor() {
            return this.f5380f.e();
        }

        float getStrokeWidth() {
            return this.f5381g;
        }

        float getTrimPathEnd() {
            return this.f5386l;
        }

        float getTrimPathOffset() {
            return this.f5387m;
        }

        float getTrimPathStart() {
            return this.f5385k;
        }

        void setFillAlpha(float f10) {
            this.f5384j = f10;
        }

        void setFillColor(int i10) {
            this.f5382h.k(i10);
        }

        void setStrokeAlpha(float f10) {
            this.f5383i = f10;
        }

        void setStrokeColor(int i10) {
            this.f5380f.k(i10);
        }

        void setStrokeWidth(float f10) {
            this.f5381g = f10;
        }

        void setTrimPathEnd(float f10) {
            this.f5386l = f10;
        }

        void setTrimPathOffset(float f10) {
            this.f5387m = f10;
        }

        void setTrimPathStart(float f10) {
            this.f5385k = f10;
        }

        c(c cVar) {
            super(cVar);
            this.f5381g = 0.0f;
            this.f5383i = 1.0f;
            this.f5384j = 1.0f;
            this.f5385k = 0.0f;
            this.f5386l = 1.0f;
            this.f5387m = 0.0f;
            this.f5388n = Paint.Cap.BUTT;
            this.f5389o = Paint.Join.MITER;
            this.f5390p = 4.0f;
            this.f5379e = cVar.f5379e;
            this.f5380f = cVar.f5380f;
            this.f5381g = cVar.f5381g;
            this.f5383i = cVar.f5383i;
            this.f5382h = cVar.f5382h;
            this.f5406c = cVar.f5406c;
            this.f5384j = cVar.f5384j;
            this.f5385k = cVar.f5385k;
            this.f5386l = cVar.f5386l;
            this.f5387m = cVar.f5387m;
            this.f5388n = cVar.f5388n;
            this.f5389o = cVar.f5389o;
            this.f5390p = cVar.f5390p;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g {

        /* renamed from: q  reason: collision with root package name */
        private static final Matrix f5408q = new Matrix();

        /* renamed from: a  reason: collision with root package name */
        private final Path f5409a;

        /* renamed from: b  reason: collision with root package name */
        private final Path f5410b;

        /* renamed from: c  reason: collision with root package name */
        private final Matrix f5411c;

        /* renamed from: d  reason: collision with root package name */
        Paint f5412d;

        /* renamed from: e  reason: collision with root package name */
        Paint f5413e;

        /* renamed from: f  reason: collision with root package name */
        private PathMeasure f5414f;

        /* renamed from: g  reason: collision with root package name */
        private int f5415g;

        /* renamed from: h  reason: collision with root package name */
        final d f5416h;

        /* renamed from: i  reason: collision with root package name */
        float f5417i;

        /* renamed from: j  reason: collision with root package name */
        float f5418j;

        /* renamed from: k  reason: collision with root package name */
        float f5419k;

        /* renamed from: l  reason: collision with root package name */
        float f5420l;

        /* renamed from: m  reason: collision with root package name */
        int f5421m;

        /* renamed from: n  reason: collision with root package name */
        String f5422n;

        /* renamed from: o  reason: collision with root package name */
        Boolean f5423o;

        /* renamed from: p  reason: collision with root package name */
        final u0.a f5424p;

        g() {
            this.f5411c = new Matrix();
            this.f5417i = 0.0f;
            this.f5418j = 0.0f;
            this.f5419k = 0.0f;
            this.f5420l = 0.0f;
            this.f5421m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f5422n = null;
            this.f5423o = null;
            this.f5424p = new u0.a();
            this.f5416h = new d();
            this.f5409a = new Path();
            this.f5410b = new Path();
        }

        private static float a(float f10, float f11, float f12, float f13) {
            return (f10 * f13) - (f11 * f12);
        }

        private void c(d dVar, Matrix matrix, Canvas canvas, int i10, int i11, ColorFilter colorFilter) {
            d dVar2 = dVar;
            dVar2.f5391a.set(matrix);
            dVar2.f5391a.preConcat(dVar2.f5400j);
            canvas.save();
            int i12 = 0;
            while (i12 < dVar2.f5392b.size()) {
                e eVar = (e) dVar2.f5392b.get(i12);
                if (eVar instanceof d) {
                    c((d) eVar, dVar2.f5391a, canvas, i10, i11, colorFilter);
                } else if (eVar instanceof AbstractC0074f) {
                    d(dVar2, (AbstractC0074f) eVar, canvas, i10, i11, colorFilter);
                }
                i12++;
                dVar2 = dVar;
            }
            canvas.restore();
        }

        private void d(d dVar, AbstractC0074f abstractC0074f, Canvas canvas, int i10, int i11, ColorFilter colorFilter) {
            Path.FillType fillType;
            Path.FillType fillType2;
            float f10 = i10 / this.f5419k;
            float f11 = i11 / this.f5420l;
            float min = Math.min(f10, f11);
            Matrix matrix = dVar.f5391a;
            this.f5411c.set(matrix);
            this.f5411c.postScale(f10, f11);
            float e10 = e(matrix);
            if (e10 != 0.0f) {
                abstractC0074f.d(this.f5409a);
                Path path = this.f5409a;
                this.f5410b.reset();
                if (abstractC0074f.c()) {
                    Path path2 = this.f5410b;
                    if (abstractC0074f.f5406c == 0) {
                        fillType2 = Path.FillType.WINDING;
                    } else {
                        fillType2 = Path.FillType.EVEN_ODD;
                    }
                    path2.setFillType(fillType2);
                    this.f5410b.addPath(path, this.f5411c);
                    canvas.clipPath(this.f5410b);
                    return;
                }
                c cVar = (c) abstractC0074f;
                float f12 = cVar.f5385k;
                if (f12 != 0.0f || cVar.f5386l != 1.0f) {
                    float f13 = cVar.f5387m;
                    float f14 = (f12 + f13) % 1.0f;
                    float f15 = (cVar.f5386l + f13) % 1.0f;
                    if (this.f5414f == null) {
                        this.f5414f = new PathMeasure();
                    }
                    this.f5414f.setPath(this.f5409a, false);
                    float length = this.f5414f.getLength();
                    float f16 = f14 * length;
                    float f17 = f15 * length;
                    path.reset();
                    if (f16 > f17) {
                        this.f5414f.getSegment(f16, length, path, true);
                        this.f5414f.getSegment(0.0f, f17, path, true);
                    } else {
                        this.f5414f.getSegment(f16, f17, path, true);
                    }
                    path.rLineTo(0.0f, 0.0f);
                }
                this.f5410b.addPath(path, this.f5411c);
                if (cVar.f5382h.l()) {
                    q1.d dVar2 = cVar.f5382h;
                    if (this.f5413e == null) {
                        Paint paint = new Paint(1);
                        this.f5413e = paint;
                        paint.setStyle(Paint.Style.FILL);
                    }
                    Paint paint2 = this.f5413e;
                    if (dVar2.h()) {
                        Shader f18 = dVar2.f();
                        f18.setLocalMatrix(this.f5411c);
                        paint2.setShader(f18);
                        paint2.setAlpha(Math.round(cVar.f5384j * 255.0f));
                    } else {
                        paint2.setShader(null);
                        paint2.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        paint2.setColor(f.a(dVar2.e(), cVar.f5384j));
                    }
                    paint2.setColorFilter(colorFilter);
                    Path path3 = this.f5410b;
                    if (cVar.f5406c == 0) {
                        fillType = Path.FillType.WINDING;
                    } else {
                        fillType = Path.FillType.EVEN_ODD;
                    }
                    path3.setFillType(fillType);
                    canvas.drawPath(this.f5410b, paint2);
                }
                if (cVar.f5380f.l()) {
                    q1.d dVar3 = cVar.f5380f;
                    if (this.f5412d == null) {
                        Paint paint3 = new Paint(1);
                        this.f5412d = paint3;
                        paint3.setStyle(Paint.Style.STROKE);
                    }
                    Paint paint4 = this.f5412d;
                    Paint.Join join = cVar.f5389o;
                    if (join != null) {
                        paint4.setStrokeJoin(join);
                    }
                    Paint.Cap cap = cVar.f5388n;
                    if (cap != null) {
                        paint4.setStrokeCap(cap);
                    }
                    paint4.setStrokeMiter(cVar.f5390p);
                    if (dVar3.h()) {
                        Shader f19 = dVar3.f();
                        f19.setLocalMatrix(this.f5411c);
                        paint4.setShader(f19);
                        paint4.setAlpha(Math.round(cVar.f5383i * 255.0f));
                    } else {
                        paint4.setShader(null);
                        paint4.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        paint4.setColor(f.a(dVar3.e(), cVar.f5383i));
                    }
                    paint4.setColorFilter(colorFilter);
                    paint4.setStrokeWidth(cVar.f5381g * min * e10);
                    canvas.drawPath(this.f5410b, paint4);
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
            c(this.f5416h, f5408q, canvas, i10, i11, colorFilter);
        }

        public boolean f() {
            if (this.f5423o == null) {
                this.f5423o = Boolean.valueOf(this.f5416h.a());
            }
            return this.f5423o.booleanValue();
        }

        public boolean g(int[] iArr) {
            return this.f5416h.b(iArr);
        }

        public float getAlpha() {
            return getRootAlpha() / 255.0f;
        }

        public int getRootAlpha() {
            return this.f5421m;
        }

        public void setAlpha(float f10) {
            setRootAlpha((int) (f10 * 255.0f));
        }

        public void setRootAlpha(int i10) {
            this.f5421m = i10;
        }

        g(g gVar) {
            this.f5411c = new Matrix();
            this.f5417i = 0.0f;
            this.f5418j = 0.0f;
            this.f5419k = 0.0f;
            this.f5420l = 0.0f;
            this.f5421m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f5422n = null;
            this.f5423o = null;
            u0.a aVar = new u0.a();
            this.f5424p = aVar;
            this.f5416h = new d(gVar.f5416h, aVar);
            this.f5409a = new Path(gVar.f5409a);
            this.f5410b = new Path(gVar.f5410b);
            this.f5417i = gVar.f5417i;
            this.f5418j = gVar.f5418j;
            this.f5419k = gVar.f5419k;
            this.f5420l = gVar.f5420l;
            this.f5415g = gVar.f5415g;
            this.f5421m = gVar.f5421m;
            this.f5422n = gVar.f5422n;
            String str = gVar.f5422n;
            if (str != null) {
                aVar.put(str, this);
            }
            this.f5423o = gVar.f5423o;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends e {

        /* renamed from: a  reason: collision with root package name */
        final Matrix f5391a;

        /* renamed from: b  reason: collision with root package name */
        final ArrayList f5392b;

        /* renamed from: c  reason: collision with root package name */
        float f5393c;

        /* renamed from: d  reason: collision with root package name */
        private float f5394d;

        /* renamed from: e  reason: collision with root package name */
        private float f5395e;

        /* renamed from: f  reason: collision with root package name */
        private float f5396f;

        /* renamed from: g  reason: collision with root package name */
        private float f5397g;

        /* renamed from: h  reason: collision with root package name */
        private float f5398h;

        /* renamed from: i  reason: collision with root package name */
        private float f5399i;

        /* renamed from: j  reason: collision with root package name */
        final Matrix f5400j;

        /* renamed from: k  reason: collision with root package name */
        int f5401k;

        /* renamed from: l  reason: collision with root package name */
        private int[] f5402l;

        /* renamed from: m  reason: collision with root package name */
        private String f5403m;

        d(d dVar, u0.a aVar) {
            super();
            AbstractC0074f bVar;
            this.f5391a = new Matrix();
            this.f5392b = new ArrayList();
            this.f5393c = 0.0f;
            this.f5394d = 0.0f;
            this.f5395e = 0.0f;
            this.f5396f = 1.0f;
            this.f5397g = 1.0f;
            this.f5398h = 0.0f;
            this.f5399i = 0.0f;
            Matrix matrix = new Matrix();
            this.f5400j = matrix;
            this.f5403m = null;
            this.f5393c = dVar.f5393c;
            this.f5394d = dVar.f5394d;
            this.f5395e = dVar.f5395e;
            this.f5396f = dVar.f5396f;
            this.f5397g = dVar.f5397g;
            this.f5398h = dVar.f5398h;
            this.f5399i = dVar.f5399i;
            this.f5402l = dVar.f5402l;
            String str = dVar.f5403m;
            this.f5403m = str;
            this.f5401k = dVar.f5401k;
            if (str != null) {
                aVar.put(str, this);
            }
            matrix.set(dVar.f5400j);
            ArrayList arrayList = dVar.f5392b;
            for (int i10 = 0; i10 < arrayList.size(); i10++) {
                Object obj = arrayList.get(i10);
                if (obj instanceof d) {
                    this.f5392b.add(new d((d) obj, aVar));
                } else {
                    if (obj instanceof c) {
                        bVar = new c((c) obj);
                    } else if (obj instanceof b) {
                        bVar = new b((b) obj);
                    } else {
                        throw new IllegalStateException("Unknown object in the tree!");
                    }
                    this.f5392b.add(bVar);
                    Object obj2 = bVar.f5405b;
                    if (obj2 != null) {
                        aVar.put(obj2, bVar);
                    }
                }
            }
        }

        private void d() {
            this.f5400j.reset();
            this.f5400j.postTranslate(-this.f5394d, -this.f5395e);
            this.f5400j.postScale(this.f5396f, this.f5397g);
            this.f5400j.postRotate(this.f5393c, 0.0f, 0.0f);
            this.f5400j.postTranslate(this.f5398h + this.f5394d, this.f5399i + this.f5395e);
        }

        private void e(TypedArray typedArray, XmlPullParser xmlPullParser) {
            this.f5402l = null;
            this.f5393c = m.f(typedArray, xmlPullParser, ViewProps.ROTATION, 5, this.f5393c);
            this.f5394d = typedArray.getFloat(1, this.f5394d);
            this.f5395e = typedArray.getFloat(2, this.f5395e);
            this.f5396f = m.f(typedArray, xmlPullParser, ViewProps.SCALE_X, 3, this.f5396f);
            this.f5397g = m.f(typedArray, xmlPullParser, ViewProps.SCALE_Y, 4, this.f5397g);
            this.f5398h = m.f(typedArray, xmlPullParser, ViewProps.TRANSLATE_X, 6, this.f5398h);
            this.f5399i = m.f(typedArray, xmlPullParser, ViewProps.TRANSLATE_Y, 7, this.f5399i);
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5403m = string;
            }
            d();
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean a() {
            for (int i10 = 0; i10 < this.f5392b.size(); i10++) {
                if (((e) this.f5392b.get(i10)).a()) {
                    return true;
                }
            }
            return false;
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean b(int[] iArr) {
            boolean z10 = false;
            for (int i10 = 0; i10 < this.f5392b.size(); i10++) {
                z10 |= ((e) this.f5392b.get(i10)).b(iArr);
            }
            return z10;
        }

        public void c(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5341b);
            e(i10, xmlPullParser);
            i10.recycle();
        }

        public String getGroupName() {
            return this.f5403m;
        }

        public Matrix getLocalMatrix() {
            return this.f5400j;
        }

        public float getPivotX() {
            return this.f5394d;
        }

        public float getPivotY() {
            return this.f5395e;
        }

        public float getRotation() {
            return this.f5393c;
        }

        public float getScaleX() {
            return this.f5396f;
        }

        public float getScaleY() {
            return this.f5397g;
        }

        public float getTranslateX() {
            return this.f5398h;
        }

        public float getTranslateY() {
            return this.f5399i;
        }

        public void setPivotX(float f10) {
            if (f10 != this.f5394d) {
                this.f5394d = f10;
                d();
            }
        }

        public void setPivotY(float f10) {
            if (f10 != this.f5395e) {
                this.f5395e = f10;
                d();
            }
        }

        public void setRotation(float f10) {
            if (f10 != this.f5393c) {
                this.f5393c = f10;
                d();
            }
        }

        public void setScaleX(float f10) {
            if (f10 != this.f5396f) {
                this.f5396f = f10;
                d();
            }
        }

        public void setScaleY(float f10) {
            if (f10 != this.f5397g) {
                this.f5397g = f10;
                d();
            }
        }

        public void setTranslateX(float f10) {
            if (f10 != this.f5398h) {
                this.f5398h = f10;
                d();
            }
        }

        public void setTranslateY(float f10) {
            if (f10 != this.f5399i) {
                this.f5399i = f10;
                d();
            }
        }

        d() {
            super();
            this.f5391a = new Matrix();
            this.f5392b = new ArrayList();
            this.f5393c = 0.0f;
            this.f5394d = 0.0f;
            this.f5395e = 0.0f;
            this.f5396f = 1.0f;
            this.f5397g = 1.0f;
            this.f5398h = 0.0f;
            this.f5399i = 0.0f;
            this.f5400j = new Matrix();
            this.f5403m = null;
        }
    }
}
