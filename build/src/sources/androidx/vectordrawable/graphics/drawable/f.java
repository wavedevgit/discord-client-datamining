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
    static final PorterDuff.Mode f5482u = PorterDuff.Mode.SRC_IN;

    /* renamed from: e  reason: collision with root package name */
    private h f5483e;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuffColorFilter f5484i;

    /* renamed from: o  reason: collision with root package name */
    private ColorFilter f5485o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f5486p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f5487q;

    /* renamed from: r  reason: collision with root package name */
    private final float[] f5488r;

    /* renamed from: s  reason: collision with root package name */
    private final Matrix f5489s;

    /* renamed from: t  reason: collision with root package name */
    private final Rect f5490t;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends AbstractC0075f {
        b() {
        }

        private void f(TypedArray typedArray, XmlPullParser xmlPullParser) {
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5517b = string;
            }
            String string2 = typedArray.getString(1);
            if (string2 != null) {
                this.f5516a = r1.e.d(string2);
            }
            this.f5518c = m.g(typedArray, xmlPullParser, "fillType", 2, 0);
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.AbstractC0075f
        public boolean c() {
            return true;
        }

        public void e(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            if (!m.h(xmlPullParser, "pathData")) {
                return;
            }
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5455d);
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
        int f5537a;

        /* renamed from: b  reason: collision with root package name */
        g f5538b;

        /* renamed from: c  reason: collision with root package name */
        ColorStateList f5539c;

        /* renamed from: d  reason: collision with root package name */
        PorterDuff.Mode f5540d;

        /* renamed from: e  reason: collision with root package name */
        boolean f5541e;

        /* renamed from: f  reason: collision with root package name */
        Bitmap f5542f;

        /* renamed from: g  reason: collision with root package name */
        ColorStateList f5543g;

        /* renamed from: h  reason: collision with root package name */
        PorterDuff.Mode f5544h;

        /* renamed from: i  reason: collision with root package name */
        int f5545i;

        /* renamed from: j  reason: collision with root package name */
        boolean f5546j;

        /* renamed from: k  reason: collision with root package name */
        boolean f5547k;

        /* renamed from: l  reason: collision with root package name */
        Paint f5548l;

        h(h hVar) {
            this.f5539c = null;
            this.f5540d = f.f5482u;
            if (hVar != null) {
                this.f5537a = hVar.f5537a;
                g gVar = new g(hVar.f5538b);
                this.f5538b = gVar;
                if (hVar.f5538b.f5525e != null) {
                    gVar.f5525e = new Paint(hVar.f5538b.f5525e);
                }
                if (hVar.f5538b.f5524d != null) {
                    this.f5538b.f5524d = new Paint(hVar.f5538b.f5524d);
                }
                this.f5539c = hVar.f5539c;
                this.f5540d = hVar.f5540d;
                this.f5541e = hVar.f5541e;
            }
        }

        public boolean a(int i10, int i11) {
            if (i10 == this.f5542f.getWidth() && i11 == this.f5542f.getHeight()) {
                return true;
            }
            return false;
        }

        public boolean b() {
            if (!this.f5547k && this.f5543g == this.f5539c && this.f5544h == this.f5540d && this.f5546j == this.f5541e && this.f5545i == this.f5538b.getRootAlpha()) {
                return true;
            }
            return false;
        }

        public void c(int i10, int i11) {
            if (this.f5542f != null && a(i10, i11)) {
                return;
            }
            this.f5542f = Bitmap.createBitmap(i10, i11, Bitmap.Config.ARGB_8888);
            this.f5547k = true;
        }

        public void d(Canvas canvas, ColorFilter colorFilter, Rect rect) {
            canvas.drawBitmap(this.f5542f, (Rect) null, rect, e(colorFilter));
        }

        public Paint e(ColorFilter colorFilter) {
            if (!f() && colorFilter == null) {
                return null;
            }
            if (this.f5548l == null) {
                Paint paint = new Paint();
                this.f5548l = paint;
                paint.setFilterBitmap(true);
            }
            this.f5548l.setAlpha(this.f5538b.getRootAlpha());
            this.f5548l.setColorFilter(colorFilter);
            return this.f5548l;
        }

        public boolean f() {
            if (this.f5538b.getRootAlpha() < 255) {
                return true;
            }
            return false;
        }

        public boolean g() {
            return this.f5538b.f();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5537a;
        }

        public boolean h(int[] iArr) {
            boolean g10 = this.f5538b.g(iArr);
            this.f5547k |= g10;
            return g10;
        }

        public void i() {
            this.f5543g = this.f5539c;
            this.f5544h = this.f5540d;
            this.f5545i = this.f5538b.getRootAlpha();
            this.f5546j = this.f5541e;
            this.f5547k = false;
        }

        public void j(int i10, int i11) {
            this.f5542f.eraseColor(0);
            this.f5538b.b(new Canvas(this.f5542f), i10, i11, null);
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
            this.f5539c = null;
            this.f5540d = f.f5482u;
            this.f5538b = new g();
        }
    }

    f() {
        this.f5487q = true;
        this.f5488r = new float[9];
        this.f5489s = new Matrix();
        this.f5490t = new Rect();
        this.f5483e = new h();
    }

    static int a(int i10, float f10) {
        return (i10 & 16777215) | (((int) (Color.alpha(i10) * f10)) << 24);
    }

    public static f b(Resources resources, int i10, Resources.Theme theme) {
        f fVar = new f();
        fVar.f5481d = j.f(resources, i10, theme);
        return fVar;
    }

    private void d(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        h hVar = this.f5483e;
        g gVar = hVar.f5538b;
        ArrayDeque arrayDeque = new ArrayDeque();
        arrayDeque.push(gVar.f5528h);
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
                        dVar.f5504b.add(cVar);
                        if (cVar.getPathName() != null) {
                            gVar.f5536p.put(cVar.getPathName(), cVar);
                        }
                        hVar.f5537a = cVar.f5519d | hVar.f5537a;
                        z10 = false;
                    } else if ("clip-path".equals(name)) {
                        b bVar = new b();
                        bVar.e(resources, attributeSet, theme, xmlPullParser);
                        dVar.f5504b.add(bVar);
                        if (bVar.getPathName() != null) {
                            gVar.f5536p.put(bVar.getPathName(), bVar);
                        }
                        hVar.f5537a = bVar.f5519d | hVar.f5537a;
                    } else if ("group".equals(name)) {
                        d dVar2 = new d();
                        dVar2.c(resources, attributeSet, theme, xmlPullParser);
                        dVar.f5504b.add(dVar2);
                        arrayDeque.push(dVar2);
                        if (dVar2.getGroupName() != null) {
                            gVar.f5536p.put(dVar2.getGroupName(), dVar2);
                        }
                        hVar.f5537a = dVar2.f5513k | hVar.f5537a;
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
        h hVar = this.f5483e;
        g gVar = hVar.f5538b;
        hVar.f5540d = f(m.g(typedArray, xmlPullParser, "tintMode", 6, -1), PorterDuff.Mode.SRC_IN);
        ColorStateList c10 = m.c(typedArray, xmlPullParser, theme, "tint", 1);
        if (c10 != null) {
            hVar.f5539c = c10;
        }
        hVar.f5541e = m.a(typedArray, xmlPullParser, "autoMirrored", 5, hVar.f5541e);
        gVar.f5531k = m.f(typedArray, xmlPullParser, "viewportWidth", 7, gVar.f5531k);
        float f10 = m.f(typedArray, xmlPullParser, "viewportHeight", 8, gVar.f5532l);
        gVar.f5532l = f10;
        if (gVar.f5531k > 0.0f) {
            if (f10 > 0.0f) {
                gVar.f5529i = typedArray.getDimension(3, gVar.f5529i);
                float dimension = typedArray.getDimension(2, gVar.f5530j);
                gVar.f5530j = dimension;
                if (gVar.f5529i > 0.0f) {
                    if (dimension > 0.0f) {
                        gVar.setAlpha(m.f(typedArray, xmlPullParser, "alpha", 4, gVar.getAlpha()));
                        String string = typedArray.getString(0);
                        if (string != null) {
                            gVar.f5534n = string;
                            gVar.f5536p.put(string, gVar);
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
        return this.f5483e.f5538b.f5536p.get(str);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean canApplyTheme() {
        Drawable drawable = this.f5481d;
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
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            drawable.draw(canvas);
            return;
        }
        copyBounds(this.f5490t);
        if (this.f5490t.width() > 0 && this.f5490t.height() > 0) {
            ColorFilter colorFilter = this.f5485o;
            if (colorFilter == null) {
                colorFilter = this.f5484i;
            }
            canvas.getMatrix(this.f5489s);
            this.f5489s.getValues(this.f5488r);
            float abs = Math.abs(this.f5488r[0]);
            float abs2 = Math.abs(this.f5488r[4]);
            float abs3 = Math.abs(this.f5488r[1]);
            float abs4 = Math.abs(this.f5488r[3]);
            if (abs3 != 0.0f || abs4 != 0.0f) {
                abs = 1.0f;
                abs2 = 1.0f;
            }
            int min = Math.min((int) RecyclerView.ItemAnimator.FLAG_MOVED, (int) (this.f5490t.width() * abs));
            int min2 = Math.min((int) RecyclerView.ItemAnimator.FLAG_MOVED, (int) (this.f5490t.height() * abs2));
            if (min > 0 && min2 > 0) {
                int save = canvas.save();
                Rect rect = this.f5490t;
                canvas.translate(rect.left, rect.top);
                if (e()) {
                    canvas.translate(this.f5490t.width(), 0.0f);
                    canvas.scale(-1.0f, 1.0f);
                }
                this.f5490t.offsetTo(0, 0);
                this.f5483e.c(min, min2);
                if (!this.f5487q) {
                    this.f5483e.j(min, min2);
                } else if (!this.f5483e.b()) {
                    this.f5483e.j(min, min2);
                    this.f5483e.i();
                }
                this.f5483e.d(canvas, colorFilter, this.f5490t);
                canvas.restoreToCount(save);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(boolean z10) {
        this.f5487q = z10;
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            return s1.a.d(drawable);
        }
        return this.f5483e.f5538b.getRootAlpha();
    }

    @Override // android.graphics.drawable.Drawable
    public int getChangingConfigurations() {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            return drawable.getChangingConfigurations();
        }
        return super.getChangingConfigurations() | this.f5483e.getChangingConfigurations();
    }

    @Override // android.graphics.drawable.Drawable
    public ColorFilter getColorFilter() {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            return s1.a.e(drawable);
        }
        return this.f5485o;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        if (this.f5481d != null) {
            return new i(this.f5481d.getConstantState());
        }
        this.f5483e.f5537a = getChangingConfigurations();
        return this.f5483e;
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ Drawable getCurrent() {
        return super.getCurrent();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            return drawable.getIntrinsicHeight();
        }
        return (int) this.f5483e.f5538b.f5530j;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            return drawable.getIntrinsicWidth();
        }
        return (int) this.f5483e.f5538b.f5529i;
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
        Drawable drawable = this.f5481d;
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
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            drawable.inflate(resources, xmlPullParser, attributeSet);
        } else {
            inflate(resources, xmlPullParser, attributeSet, null);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            drawable.invalidateSelf();
        } else {
            super.invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isAutoMirrored() {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            return s1.a.h(drawable);
        }
        return this.f5483e.f5541e;
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            return drawable.isStateful();
        }
        if (!super.isStateful()) {
            h hVar = this.f5483e;
            if (hVar != null) {
                if (!hVar.g()) {
                    ColorStateList colorStateList = this.f5483e.f5539c;
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
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            drawable.mutate();
            return this;
        }
        if (!this.f5486p && super.mutate() == this) {
            this.f5483e = new h(this.f5483e);
            this.f5486p = true;
        }
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            drawable.setBounds(rect);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        boolean z10;
        PorterDuff.Mode mode;
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            return drawable.setState(iArr);
        }
        h hVar = this.f5483e;
        ColorStateList colorStateList = hVar.f5539c;
        if (colorStateList != null && (mode = hVar.f5540d) != null) {
            this.f5484i = i(this.f5484i, colorStateList, mode);
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
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            drawable.scheduleSelf(runnable, j10);
        } else {
            super.scheduleSelf(runnable, j10);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            drawable.setAlpha(i10);
        } else if (this.f5483e.f5538b.getRootAlpha() != i10) {
            this.f5483e.f5538b.setRootAlpha(i10);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAutoMirrored(boolean z10) {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            s1.a.j(drawable, z10);
        } else {
            this.f5483e.f5541e = z10;
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
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            s1.a.n(drawable, i10);
        } else {
            setTintList(ColorStateList.valueOf(i10));
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            s1.a.o(drawable, colorStateList);
            return;
        }
        h hVar = this.f5483e;
        if (hVar.f5539c != colorStateList) {
            hVar.f5539c = colorStateList;
            this.f5484i = i(this.f5484i, colorStateList, hVar.f5540d);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            s1.a.p(drawable, mode);
            return;
        }
        h hVar = this.f5483e;
        if (hVar.f5540d != mode) {
            hVar.f5540d = mode;
            this.f5484i = i(this.f5484i, hVar.f5539c, mode);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            return drawable.setVisible(z10, z11);
        }
        return super.setVisible(z10, z11);
    }

    @Override // android.graphics.drawable.Drawable
    public void unscheduleSelf(Runnable runnable) {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            drawable.unscheduleSelf(runnable);
        } else {
            super.unscheduleSelf(runnable);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class i extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        private final Drawable.ConstantState f5549a;

        i(Drawable.ConstantState constantState) {
            this.f5549a = constantState;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public boolean canApplyTheme() {
            return this.f5549a.canApplyTheme();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5549a.getChangingConfigurations();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            f fVar = new f();
            fVar.f5481d = (VectorDrawable) this.f5549a.newDrawable();
            return fVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources) {
            f fVar = new f();
            fVar.f5481d = (VectorDrawable) this.f5549a.newDrawable(resources);
            return fVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources, Resources.Theme theme) {
            f fVar = new f();
            fVar.f5481d = (VectorDrawable) this.f5549a.newDrawable(resources, theme);
            return fVar;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            drawable.setColorFilter(colorFilter);
            return;
        }
        this.f5485o = colorFilter;
        invalidateSelf();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: androidx.vectordrawable.graphics.drawable.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class AbstractC0075f extends e {

        /* renamed from: a  reason: collision with root package name */
        protected e.b[] f5516a;

        /* renamed from: b  reason: collision with root package name */
        String f5517b;

        /* renamed from: c  reason: collision with root package name */
        int f5518c;

        /* renamed from: d  reason: collision with root package name */
        int f5519d;

        AbstractC0075f() {
            super();
            this.f5516a = null;
            this.f5518c = 0;
        }

        public boolean c() {
            return false;
        }

        public void d(Path path) {
            path.reset();
            e.b[] bVarArr = this.f5516a;
            if (bVarArr != null) {
                r1.e.j(bVarArr, path);
            }
        }

        public e.b[] getPathData() {
            return this.f5516a;
        }

        public String getPathName() {
            return this.f5517b;
        }

        public void setPathData(e.b[] bVarArr) {
            if (!r1.e.b(this.f5516a, bVarArr)) {
                this.f5516a = r1.e.f(bVarArr);
            } else {
                r1.e.k(this.f5516a, bVarArr);
            }
        }

        AbstractC0075f(AbstractC0075f abstractC0075f) {
            super();
            this.f5516a = null;
            this.f5518c = 0;
            this.f5517b = abstractC0075f.f5517b;
            this.f5519d = abstractC0075f.f5519d;
            this.f5516a = r1.e.f(abstractC0075f.f5516a);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void inflate(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        Drawable drawable = this.f5481d;
        if (drawable != null) {
            s1.a.g(drawable, resources, xmlPullParser, attributeSet, theme);
            return;
        }
        h hVar = this.f5483e;
        hVar.f5538b = new g();
        TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5452a);
        h(i10, xmlPullParser, theme);
        i10.recycle();
        hVar.f5537a = getChangingConfigurations();
        hVar.f5547k = true;
        d(resources, xmlPullParser, attributeSet, theme);
        this.f5484i = i(this.f5484i, hVar.f5539c, hVar.f5540d);
    }

    f(h hVar) {
        this.f5487q = true;
        this.f5488r = new float[9];
        this.f5489s = new Matrix();
        this.f5490t = new Rect();
        this.f5483e = hVar;
        this.f5484i = i(this.f5484i, hVar.f5539c, hVar.f5540d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends AbstractC0075f {

        /* renamed from: e  reason: collision with root package name */
        private int[] f5491e;

        /* renamed from: f  reason: collision with root package name */
        q1.d f5492f;

        /* renamed from: g  reason: collision with root package name */
        float f5493g;

        /* renamed from: h  reason: collision with root package name */
        q1.d f5494h;

        /* renamed from: i  reason: collision with root package name */
        float f5495i;

        /* renamed from: j  reason: collision with root package name */
        float f5496j;

        /* renamed from: k  reason: collision with root package name */
        float f5497k;

        /* renamed from: l  reason: collision with root package name */
        float f5498l;

        /* renamed from: m  reason: collision with root package name */
        float f5499m;

        /* renamed from: n  reason: collision with root package name */
        Paint.Cap f5500n;

        /* renamed from: o  reason: collision with root package name */
        Paint.Join f5501o;

        /* renamed from: p  reason: collision with root package name */
        float f5502p;

        c() {
            this.f5493g = 0.0f;
            this.f5495i = 1.0f;
            this.f5496j = 1.0f;
            this.f5497k = 0.0f;
            this.f5498l = 1.0f;
            this.f5499m = 0.0f;
            this.f5500n = Paint.Cap.BUTT;
            this.f5501o = Paint.Join.MITER;
            this.f5502p = 4.0f;
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
            this.f5491e = null;
            if (!m.h(xmlPullParser, "pathData")) {
                return;
            }
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5517b = string;
            }
            String string2 = typedArray.getString(2);
            if (string2 != null) {
                this.f5516a = r1.e.d(string2);
            }
            this.f5494h = m.e(typedArray, xmlPullParser, theme, "fillColor", 1, 0);
            this.f5496j = m.f(typedArray, xmlPullParser, "fillAlpha", 12, this.f5496j);
            this.f5500n = e(m.g(typedArray, xmlPullParser, "strokeLineCap", 8, -1), this.f5500n);
            this.f5501o = f(m.g(typedArray, xmlPullParser, "strokeLineJoin", 9, -1), this.f5501o);
            this.f5502p = m.f(typedArray, xmlPullParser, "strokeMiterLimit", 10, this.f5502p);
            this.f5492f = m.e(typedArray, xmlPullParser, theme, "strokeColor", 3, 0);
            this.f5495i = m.f(typedArray, xmlPullParser, "strokeAlpha", 11, this.f5495i);
            this.f5493g = m.f(typedArray, xmlPullParser, "strokeWidth", 4, this.f5493g);
            this.f5498l = m.f(typedArray, xmlPullParser, "trimPathEnd", 6, this.f5498l);
            this.f5499m = m.f(typedArray, xmlPullParser, "trimPathOffset", 7, this.f5499m);
            this.f5497k = m.f(typedArray, xmlPullParser, "trimPathStart", 5, this.f5497k);
            this.f5518c = m.g(typedArray, xmlPullParser, "fillType", 13, this.f5518c);
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean a() {
            if (!this.f5494h.i() && !this.f5492f.i()) {
                return false;
            }
            return true;
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean b(int[] iArr) {
            return this.f5492f.j(iArr) | this.f5494h.j(iArr);
        }

        public void g(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5454c);
            h(i10, xmlPullParser, theme);
            i10.recycle();
        }

        float getFillAlpha() {
            return this.f5496j;
        }

        int getFillColor() {
            return this.f5494h.e();
        }

        float getStrokeAlpha() {
            return this.f5495i;
        }

        int getStrokeColor() {
            return this.f5492f.e();
        }

        float getStrokeWidth() {
            return this.f5493g;
        }

        float getTrimPathEnd() {
            return this.f5498l;
        }

        float getTrimPathOffset() {
            return this.f5499m;
        }

        float getTrimPathStart() {
            return this.f5497k;
        }

        void setFillAlpha(float f10) {
            this.f5496j = f10;
        }

        void setFillColor(int i10) {
            this.f5494h.k(i10);
        }

        void setStrokeAlpha(float f10) {
            this.f5495i = f10;
        }

        void setStrokeColor(int i10) {
            this.f5492f.k(i10);
        }

        void setStrokeWidth(float f10) {
            this.f5493g = f10;
        }

        void setTrimPathEnd(float f10) {
            this.f5498l = f10;
        }

        void setTrimPathOffset(float f10) {
            this.f5499m = f10;
        }

        void setTrimPathStart(float f10) {
            this.f5497k = f10;
        }

        c(c cVar) {
            super(cVar);
            this.f5493g = 0.0f;
            this.f5495i = 1.0f;
            this.f5496j = 1.0f;
            this.f5497k = 0.0f;
            this.f5498l = 1.0f;
            this.f5499m = 0.0f;
            this.f5500n = Paint.Cap.BUTT;
            this.f5501o = Paint.Join.MITER;
            this.f5502p = 4.0f;
            this.f5491e = cVar.f5491e;
            this.f5492f = cVar.f5492f;
            this.f5493g = cVar.f5493g;
            this.f5495i = cVar.f5495i;
            this.f5494h = cVar.f5494h;
            this.f5518c = cVar.f5518c;
            this.f5496j = cVar.f5496j;
            this.f5497k = cVar.f5497k;
            this.f5498l = cVar.f5498l;
            this.f5499m = cVar.f5499m;
            this.f5500n = cVar.f5500n;
            this.f5501o = cVar.f5501o;
            this.f5502p = cVar.f5502p;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g {

        /* renamed from: q  reason: collision with root package name */
        private static final Matrix f5520q = new Matrix();

        /* renamed from: a  reason: collision with root package name */
        private final Path f5521a;

        /* renamed from: b  reason: collision with root package name */
        private final Path f5522b;

        /* renamed from: c  reason: collision with root package name */
        private final Matrix f5523c;

        /* renamed from: d  reason: collision with root package name */
        Paint f5524d;

        /* renamed from: e  reason: collision with root package name */
        Paint f5525e;

        /* renamed from: f  reason: collision with root package name */
        private PathMeasure f5526f;

        /* renamed from: g  reason: collision with root package name */
        private int f5527g;

        /* renamed from: h  reason: collision with root package name */
        final d f5528h;

        /* renamed from: i  reason: collision with root package name */
        float f5529i;

        /* renamed from: j  reason: collision with root package name */
        float f5530j;

        /* renamed from: k  reason: collision with root package name */
        float f5531k;

        /* renamed from: l  reason: collision with root package name */
        float f5532l;

        /* renamed from: m  reason: collision with root package name */
        int f5533m;

        /* renamed from: n  reason: collision with root package name */
        String f5534n;

        /* renamed from: o  reason: collision with root package name */
        Boolean f5535o;

        /* renamed from: p  reason: collision with root package name */
        final u0.a f5536p;

        g() {
            this.f5523c = new Matrix();
            this.f5529i = 0.0f;
            this.f5530j = 0.0f;
            this.f5531k = 0.0f;
            this.f5532l = 0.0f;
            this.f5533m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f5534n = null;
            this.f5535o = null;
            this.f5536p = new u0.a();
            this.f5528h = new d();
            this.f5521a = new Path();
            this.f5522b = new Path();
        }

        private static float a(float f10, float f11, float f12, float f13) {
            return (f10 * f13) - (f11 * f12);
        }

        private void c(d dVar, Matrix matrix, Canvas canvas, int i10, int i11, ColorFilter colorFilter) {
            d dVar2 = dVar;
            dVar2.f5503a.set(matrix);
            dVar2.f5503a.preConcat(dVar2.f5512j);
            canvas.save();
            int i12 = 0;
            while (i12 < dVar2.f5504b.size()) {
                e eVar = (e) dVar2.f5504b.get(i12);
                if (eVar instanceof d) {
                    c((d) eVar, dVar2.f5503a, canvas, i10, i11, colorFilter);
                } else if (eVar instanceof AbstractC0075f) {
                    d(dVar2, (AbstractC0075f) eVar, canvas, i10, i11, colorFilter);
                }
                i12++;
                dVar2 = dVar;
            }
            canvas.restore();
        }

        private void d(d dVar, AbstractC0075f abstractC0075f, Canvas canvas, int i10, int i11, ColorFilter colorFilter) {
            Path.FillType fillType;
            Path.FillType fillType2;
            float f10 = i10 / this.f5531k;
            float f11 = i11 / this.f5532l;
            float min = Math.min(f10, f11);
            Matrix matrix = dVar.f5503a;
            this.f5523c.set(matrix);
            this.f5523c.postScale(f10, f11);
            float e10 = e(matrix);
            if (e10 != 0.0f) {
                abstractC0075f.d(this.f5521a);
                Path path = this.f5521a;
                this.f5522b.reset();
                if (abstractC0075f.c()) {
                    Path path2 = this.f5522b;
                    if (abstractC0075f.f5518c == 0) {
                        fillType2 = Path.FillType.WINDING;
                    } else {
                        fillType2 = Path.FillType.EVEN_ODD;
                    }
                    path2.setFillType(fillType2);
                    this.f5522b.addPath(path, this.f5523c);
                    canvas.clipPath(this.f5522b);
                    return;
                }
                c cVar = (c) abstractC0075f;
                float f12 = cVar.f5497k;
                if (f12 != 0.0f || cVar.f5498l != 1.0f) {
                    float f13 = cVar.f5499m;
                    float f14 = (f12 + f13) % 1.0f;
                    float f15 = (cVar.f5498l + f13) % 1.0f;
                    if (this.f5526f == null) {
                        this.f5526f = new PathMeasure();
                    }
                    this.f5526f.setPath(this.f5521a, false);
                    float length = this.f5526f.getLength();
                    float f16 = f14 * length;
                    float f17 = f15 * length;
                    path.reset();
                    if (f16 > f17) {
                        this.f5526f.getSegment(f16, length, path, true);
                        this.f5526f.getSegment(0.0f, f17, path, true);
                    } else {
                        this.f5526f.getSegment(f16, f17, path, true);
                    }
                    path.rLineTo(0.0f, 0.0f);
                }
                this.f5522b.addPath(path, this.f5523c);
                if (cVar.f5494h.l()) {
                    q1.d dVar2 = cVar.f5494h;
                    if (this.f5525e == null) {
                        Paint paint = new Paint(1);
                        this.f5525e = paint;
                        paint.setStyle(Paint.Style.FILL);
                    }
                    Paint paint2 = this.f5525e;
                    if (dVar2.h()) {
                        Shader f18 = dVar2.f();
                        f18.setLocalMatrix(this.f5523c);
                        paint2.setShader(f18);
                        paint2.setAlpha(Math.round(cVar.f5496j * 255.0f));
                    } else {
                        paint2.setShader(null);
                        paint2.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        paint2.setColor(f.a(dVar2.e(), cVar.f5496j));
                    }
                    paint2.setColorFilter(colorFilter);
                    Path path3 = this.f5522b;
                    if (cVar.f5518c == 0) {
                        fillType = Path.FillType.WINDING;
                    } else {
                        fillType = Path.FillType.EVEN_ODD;
                    }
                    path3.setFillType(fillType);
                    canvas.drawPath(this.f5522b, paint2);
                }
                if (cVar.f5492f.l()) {
                    q1.d dVar3 = cVar.f5492f;
                    if (this.f5524d == null) {
                        Paint paint3 = new Paint(1);
                        this.f5524d = paint3;
                        paint3.setStyle(Paint.Style.STROKE);
                    }
                    Paint paint4 = this.f5524d;
                    Paint.Join join = cVar.f5501o;
                    if (join != null) {
                        paint4.setStrokeJoin(join);
                    }
                    Paint.Cap cap = cVar.f5500n;
                    if (cap != null) {
                        paint4.setStrokeCap(cap);
                    }
                    paint4.setStrokeMiter(cVar.f5502p);
                    if (dVar3.h()) {
                        Shader f19 = dVar3.f();
                        f19.setLocalMatrix(this.f5523c);
                        paint4.setShader(f19);
                        paint4.setAlpha(Math.round(cVar.f5495i * 255.0f));
                    } else {
                        paint4.setShader(null);
                        paint4.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        paint4.setColor(f.a(dVar3.e(), cVar.f5495i));
                    }
                    paint4.setColorFilter(colorFilter);
                    paint4.setStrokeWidth(cVar.f5493g * min * e10);
                    canvas.drawPath(this.f5522b, paint4);
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
            c(this.f5528h, f5520q, canvas, i10, i11, colorFilter);
        }

        public boolean f() {
            if (this.f5535o == null) {
                this.f5535o = Boolean.valueOf(this.f5528h.a());
            }
            return this.f5535o.booleanValue();
        }

        public boolean g(int[] iArr) {
            return this.f5528h.b(iArr);
        }

        public float getAlpha() {
            return getRootAlpha() / 255.0f;
        }

        public int getRootAlpha() {
            return this.f5533m;
        }

        public void setAlpha(float f10) {
            setRootAlpha((int) (f10 * 255.0f));
        }

        public void setRootAlpha(int i10) {
            this.f5533m = i10;
        }

        g(g gVar) {
            this.f5523c = new Matrix();
            this.f5529i = 0.0f;
            this.f5530j = 0.0f;
            this.f5531k = 0.0f;
            this.f5532l = 0.0f;
            this.f5533m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f5534n = null;
            this.f5535o = null;
            u0.a aVar = new u0.a();
            this.f5536p = aVar;
            this.f5528h = new d(gVar.f5528h, aVar);
            this.f5521a = new Path(gVar.f5521a);
            this.f5522b = new Path(gVar.f5522b);
            this.f5529i = gVar.f5529i;
            this.f5530j = gVar.f5530j;
            this.f5531k = gVar.f5531k;
            this.f5532l = gVar.f5532l;
            this.f5527g = gVar.f5527g;
            this.f5533m = gVar.f5533m;
            this.f5534n = gVar.f5534n;
            String str = gVar.f5534n;
            if (str != null) {
                aVar.put(str, this);
            }
            this.f5535o = gVar.f5535o;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends e {

        /* renamed from: a  reason: collision with root package name */
        final Matrix f5503a;

        /* renamed from: b  reason: collision with root package name */
        final ArrayList f5504b;

        /* renamed from: c  reason: collision with root package name */
        float f5505c;

        /* renamed from: d  reason: collision with root package name */
        private float f5506d;

        /* renamed from: e  reason: collision with root package name */
        private float f5507e;

        /* renamed from: f  reason: collision with root package name */
        private float f5508f;

        /* renamed from: g  reason: collision with root package name */
        private float f5509g;

        /* renamed from: h  reason: collision with root package name */
        private float f5510h;

        /* renamed from: i  reason: collision with root package name */
        private float f5511i;

        /* renamed from: j  reason: collision with root package name */
        final Matrix f5512j;

        /* renamed from: k  reason: collision with root package name */
        int f5513k;

        /* renamed from: l  reason: collision with root package name */
        private int[] f5514l;

        /* renamed from: m  reason: collision with root package name */
        private String f5515m;

        d(d dVar, u0.a aVar) {
            super();
            AbstractC0075f bVar;
            this.f5503a = new Matrix();
            this.f5504b = new ArrayList();
            this.f5505c = 0.0f;
            this.f5506d = 0.0f;
            this.f5507e = 0.0f;
            this.f5508f = 1.0f;
            this.f5509g = 1.0f;
            this.f5510h = 0.0f;
            this.f5511i = 0.0f;
            Matrix matrix = new Matrix();
            this.f5512j = matrix;
            this.f5515m = null;
            this.f5505c = dVar.f5505c;
            this.f5506d = dVar.f5506d;
            this.f5507e = dVar.f5507e;
            this.f5508f = dVar.f5508f;
            this.f5509g = dVar.f5509g;
            this.f5510h = dVar.f5510h;
            this.f5511i = dVar.f5511i;
            this.f5514l = dVar.f5514l;
            String str = dVar.f5515m;
            this.f5515m = str;
            this.f5513k = dVar.f5513k;
            if (str != null) {
                aVar.put(str, this);
            }
            matrix.set(dVar.f5512j);
            ArrayList arrayList = dVar.f5504b;
            for (int i10 = 0; i10 < arrayList.size(); i10++) {
                Object obj = arrayList.get(i10);
                if (obj instanceof d) {
                    this.f5504b.add(new d((d) obj, aVar));
                } else {
                    if (obj instanceof c) {
                        bVar = new c((c) obj);
                    } else if (obj instanceof b) {
                        bVar = new b((b) obj);
                    } else {
                        throw new IllegalStateException("Unknown object in the tree!");
                    }
                    this.f5504b.add(bVar);
                    Object obj2 = bVar.f5517b;
                    if (obj2 != null) {
                        aVar.put(obj2, bVar);
                    }
                }
            }
        }

        private void d() {
            this.f5512j.reset();
            this.f5512j.postTranslate(-this.f5506d, -this.f5507e);
            this.f5512j.postScale(this.f5508f, this.f5509g);
            this.f5512j.postRotate(this.f5505c, 0.0f, 0.0f);
            this.f5512j.postTranslate(this.f5510h + this.f5506d, this.f5511i + this.f5507e);
        }

        private void e(TypedArray typedArray, XmlPullParser xmlPullParser) {
            this.f5514l = null;
            this.f5505c = m.f(typedArray, xmlPullParser, ViewProps.ROTATION, 5, this.f5505c);
            this.f5506d = typedArray.getFloat(1, this.f5506d);
            this.f5507e = typedArray.getFloat(2, this.f5507e);
            this.f5508f = m.f(typedArray, xmlPullParser, ViewProps.SCALE_X, 3, this.f5508f);
            this.f5509g = m.f(typedArray, xmlPullParser, ViewProps.SCALE_Y, 4, this.f5509g);
            this.f5510h = m.f(typedArray, xmlPullParser, ViewProps.TRANSLATE_X, 6, this.f5510h);
            this.f5511i = m.f(typedArray, xmlPullParser, ViewProps.TRANSLATE_Y, 7, this.f5511i);
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5515m = string;
            }
            d();
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean a() {
            for (int i10 = 0; i10 < this.f5504b.size(); i10++) {
                if (((e) this.f5504b.get(i10)).a()) {
                    return true;
                }
            }
            return false;
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean b(int[] iArr) {
            boolean z10 = false;
            for (int i10 = 0; i10 < this.f5504b.size(); i10++) {
                z10 |= ((e) this.f5504b.get(i10)).b(iArr);
            }
            return z10;
        }

        public void c(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5453b);
            e(i10, xmlPullParser);
            i10.recycle();
        }

        public String getGroupName() {
            return this.f5515m;
        }

        public Matrix getLocalMatrix() {
            return this.f5512j;
        }

        public float getPivotX() {
            return this.f5506d;
        }

        public float getPivotY() {
            return this.f5507e;
        }

        public float getRotation() {
            return this.f5505c;
        }

        public float getScaleX() {
            return this.f5508f;
        }

        public float getScaleY() {
            return this.f5509g;
        }

        public float getTranslateX() {
            return this.f5510h;
        }

        public float getTranslateY() {
            return this.f5511i;
        }

        public void setPivotX(float f10) {
            if (f10 != this.f5506d) {
                this.f5506d = f10;
                d();
            }
        }

        public void setPivotY(float f10) {
            if (f10 != this.f5507e) {
                this.f5507e = f10;
                d();
            }
        }

        public void setRotation(float f10) {
            if (f10 != this.f5505c) {
                this.f5505c = f10;
                d();
            }
        }

        public void setScaleX(float f10) {
            if (f10 != this.f5508f) {
                this.f5508f = f10;
                d();
            }
        }

        public void setScaleY(float f10) {
            if (f10 != this.f5509g) {
                this.f5509g = f10;
                d();
            }
        }

        public void setTranslateX(float f10) {
            if (f10 != this.f5510h) {
                this.f5510h = f10;
                d();
            }
        }

        public void setTranslateY(float f10) {
            if (f10 != this.f5511i) {
                this.f5511i = f10;
                d();
            }
        }

        d() {
            super();
            this.f5503a = new Matrix();
            this.f5504b = new ArrayList();
            this.f5505c = 0.0f;
            this.f5506d = 0.0f;
            this.f5507e = 0.0f;
            this.f5508f = 1.0f;
            this.f5509g = 1.0f;
            this.f5510h = 0.0f;
            this.f5511i = 0.0f;
            this.f5512j = new Matrix();
            this.f5515m = null;
        }
    }
}
