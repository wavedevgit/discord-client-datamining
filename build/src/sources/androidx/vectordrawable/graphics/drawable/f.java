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
    static final PorterDuff.Mode f5357u = PorterDuff.Mode.SRC_IN;

    /* renamed from: e  reason: collision with root package name */
    private h f5358e;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuffColorFilter f5359i;

    /* renamed from: o  reason: collision with root package name */
    private ColorFilter f5360o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f5361p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f5362q;

    /* renamed from: r  reason: collision with root package name */
    private final float[] f5363r;

    /* renamed from: s  reason: collision with root package name */
    private final Matrix f5364s;

    /* renamed from: t  reason: collision with root package name */
    private final Rect f5365t;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends AbstractC0072f {
        b() {
        }

        private void f(TypedArray typedArray, XmlPullParser xmlPullParser) {
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5392b = string;
            }
            String string2 = typedArray.getString(1);
            if (string2 != null) {
                this.f5391a = r1.e.d(string2);
            }
            this.f5393c = m.g(typedArray, xmlPullParser, "fillType", 2, 0);
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.AbstractC0072f
        public boolean c() {
            return true;
        }

        public void e(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            if (!m.h(xmlPullParser, "pathData")) {
                return;
            }
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5330d);
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
        int f5412a;

        /* renamed from: b  reason: collision with root package name */
        g f5413b;

        /* renamed from: c  reason: collision with root package name */
        ColorStateList f5414c;

        /* renamed from: d  reason: collision with root package name */
        PorterDuff.Mode f5415d;

        /* renamed from: e  reason: collision with root package name */
        boolean f5416e;

        /* renamed from: f  reason: collision with root package name */
        Bitmap f5417f;

        /* renamed from: g  reason: collision with root package name */
        ColorStateList f5418g;

        /* renamed from: h  reason: collision with root package name */
        PorterDuff.Mode f5419h;

        /* renamed from: i  reason: collision with root package name */
        int f5420i;

        /* renamed from: j  reason: collision with root package name */
        boolean f5421j;

        /* renamed from: k  reason: collision with root package name */
        boolean f5422k;

        /* renamed from: l  reason: collision with root package name */
        Paint f5423l;

        h(h hVar) {
            this.f5414c = null;
            this.f5415d = f.f5357u;
            if (hVar != null) {
                this.f5412a = hVar.f5412a;
                g gVar = new g(hVar.f5413b);
                this.f5413b = gVar;
                if (hVar.f5413b.f5400e != null) {
                    gVar.f5400e = new Paint(hVar.f5413b.f5400e);
                }
                if (hVar.f5413b.f5399d != null) {
                    this.f5413b.f5399d = new Paint(hVar.f5413b.f5399d);
                }
                this.f5414c = hVar.f5414c;
                this.f5415d = hVar.f5415d;
                this.f5416e = hVar.f5416e;
            }
        }

        public boolean a(int i10, int i11) {
            if (i10 == this.f5417f.getWidth() && i11 == this.f5417f.getHeight()) {
                return true;
            }
            return false;
        }

        public boolean b() {
            if (!this.f5422k && this.f5418g == this.f5414c && this.f5419h == this.f5415d && this.f5421j == this.f5416e && this.f5420i == this.f5413b.getRootAlpha()) {
                return true;
            }
            return false;
        }

        public void c(int i10, int i11) {
            if (this.f5417f != null && a(i10, i11)) {
                return;
            }
            this.f5417f = Bitmap.createBitmap(i10, i11, Bitmap.Config.ARGB_8888);
            this.f5422k = true;
        }

        public void d(Canvas canvas, ColorFilter colorFilter, Rect rect) {
            canvas.drawBitmap(this.f5417f, (Rect) null, rect, e(colorFilter));
        }

        public Paint e(ColorFilter colorFilter) {
            if (!f() && colorFilter == null) {
                return null;
            }
            if (this.f5423l == null) {
                Paint paint = new Paint();
                this.f5423l = paint;
                paint.setFilterBitmap(true);
            }
            this.f5423l.setAlpha(this.f5413b.getRootAlpha());
            this.f5423l.setColorFilter(colorFilter);
            return this.f5423l;
        }

        public boolean f() {
            if (this.f5413b.getRootAlpha() < 255) {
                return true;
            }
            return false;
        }

        public boolean g() {
            return this.f5413b.f();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5412a;
        }

        public boolean h(int[] iArr) {
            boolean g10 = this.f5413b.g(iArr);
            this.f5422k |= g10;
            return g10;
        }

        public void i() {
            this.f5418g = this.f5414c;
            this.f5419h = this.f5415d;
            this.f5420i = this.f5413b.getRootAlpha();
            this.f5421j = this.f5416e;
            this.f5422k = false;
        }

        public void j(int i10, int i11) {
            this.f5417f.eraseColor(0);
            this.f5413b.b(new Canvas(this.f5417f), i10, i11, null);
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
            this.f5414c = null;
            this.f5415d = f.f5357u;
            this.f5413b = new g();
        }
    }

    f() {
        this.f5362q = true;
        this.f5363r = new float[9];
        this.f5364s = new Matrix();
        this.f5365t = new Rect();
        this.f5358e = new h();
    }

    static int a(int i10, float f10) {
        return (i10 & 16777215) | (((int) (Color.alpha(i10) * f10)) << 24);
    }

    public static f b(Resources resources, int i10, Resources.Theme theme) {
        f fVar = new f();
        fVar.f5356d = j.f(resources, i10, theme);
        return fVar;
    }

    private void d(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        h hVar = this.f5358e;
        g gVar = hVar.f5413b;
        ArrayDeque arrayDeque = new ArrayDeque();
        arrayDeque.push(gVar.f5403h);
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
                        dVar.f5379b.add(cVar);
                        if (cVar.getPathName() != null) {
                            gVar.f5411p.put(cVar.getPathName(), cVar);
                        }
                        hVar.f5412a = cVar.f5394d | hVar.f5412a;
                        z10 = false;
                    } else if ("clip-path".equals(name)) {
                        b bVar = new b();
                        bVar.e(resources, attributeSet, theme, xmlPullParser);
                        dVar.f5379b.add(bVar);
                        if (bVar.getPathName() != null) {
                            gVar.f5411p.put(bVar.getPathName(), bVar);
                        }
                        hVar.f5412a = bVar.f5394d | hVar.f5412a;
                    } else if ("group".equals(name)) {
                        d dVar2 = new d();
                        dVar2.c(resources, attributeSet, theme, xmlPullParser);
                        dVar.f5379b.add(dVar2);
                        arrayDeque.push(dVar2);
                        if (dVar2.getGroupName() != null) {
                            gVar.f5411p.put(dVar2.getGroupName(), dVar2);
                        }
                        hVar.f5412a = dVar2.f5388k | hVar.f5412a;
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
        h hVar = this.f5358e;
        g gVar = hVar.f5413b;
        hVar.f5415d = f(m.g(typedArray, xmlPullParser, "tintMode", 6, -1), PorterDuff.Mode.SRC_IN);
        ColorStateList c10 = m.c(typedArray, xmlPullParser, theme, "tint", 1);
        if (c10 != null) {
            hVar.f5414c = c10;
        }
        hVar.f5416e = m.a(typedArray, xmlPullParser, "autoMirrored", 5, hVar.f5416e);
        gVar.f5406k = m.f(typedArray, xmlPullParser, "viewportWidth", 7, gVar.f5406k);
        float f10 = m.f(typedArray, xmlPullParser, "viewportHeight", 8, gVar.f5407l);
        gVar.f5407l = f10;
        if (gVar.f5406k > 0.0f) {
            if (f10 > 0.0f) {
                gVar.f5404i = typedArray.getDimension(3, gVar.f5404i);
                float dimension = typedArray.getDimension(2, gVar.f5405j);
                gVar.f5405j = dimension;
                if (gVar.f5404i > 0.0f) {
                    if (dimension > 0.0f) {
                        gVar.setAlpha(m.f(typedArray, xmlPullParser, "alpha", 4, gVar.getAlpha()));
                        String string = typedArray.getString(0);
                        if (string != null) {
                            gVar.f5409n = string;
                            gVar.f5411p.put(string, gVar);
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
        return this.f5358e.f5413b.f5411p.get(str);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean canApplyTheme() {
        Drawable drawable = this.f5356d;
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
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            drawable.draw(canvas);
            return;
        }
        copyBounds(this.f5365t);
        if (this.f5365t.width() > 0 && this.f5365t.height() > 0) {
            ColorFilter colorFilter = this.f5360o;
            if (colorFilter == null) {
                colorFilter = this.f5359i;
            }
            canvas.getMatrix(this.f5364s);
            this.f5364s.getValues(this.f5363r);
            float abs = Math.abs(this.f5363r[0]);
            float abs2 = Math.abs(this.f5363r[4]);
            float abs3 = Math.abs(this.f5363r[1]);
            float abs4 = Math.abs(this.f5363r[3]);
            if (abs3 != 0.0f || abs4 != 0.0f) {
                abs = 1.0f;
                abs2 = 1.0f;
            }
            int min = Math.min((int) RecyclerView.ItemAnimator.FLAG_MOVED, (int) (this.f5365t.width() * abs));
            int min2 = Math.min((int) RecyclerView.ItemAnimator.FLAG_MOVED, (int) (this.f5365t.height() * abs2));
            if (min > 0 && min2 > 0) {
                int save = canvas.save();
                Rect rect = this.f5365t;
                canvas.translate(rect.left, rect.top);
                if (e()) {
                    canvas.translate(this.f5365t.width(), 0.0f);
                    canvas.scale(-1.0f, 1.0f);
                }
                this.f5365t.offsetTo(0, 0);
                this.f5358e.c(min, min2);
                if (!this.f5362q) {
                    this.f5358e.j(min, min2);
                } else if (!this.f5358e.b()) {
                    this.f5358e.j(min, min2);
                    this.f5358e.i();
                }
                this.f5358e.d(canvas, colorFilter, this.f5365t);
                canvas.restoreToCount(save);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(boolean z10) {
        this.f5362q = z10;
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return s1.a.d(drawable);
        }
        return this.f5358e.f5413b.getRootAlpha();
    }

    @Override // android.graphics.drawable.Drawable
    public int getChangingConfigurations() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return drawable.getChangingConfigurations();
        }
        return super.getChangingConfigurations() | this.f5358e.getChangingConfigurations();
    }

    @Override // android.graphics.drawable.Drawable
    public ColorFilter getColorFilter() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return s1.a.e(drawable);
        }
        return this.f5360o;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        if (this.f5356d != null) {
            return new i(this.f5356d.getConstantState());
        }
        this.f5358e.f5412a = getChangingConfigurations();
        return this.f5358e;
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ Drawable getCurrent() {
        return super.getCurrent();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return drawable.getIntrinsicHeight();
        }
        return (int) this.f5358e.f5413b.f5405j;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return drawable.getIntrinsicWidth();
        }
        return (int) this.f5358e.f5413b.f5404i;
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
        Drawable drawable = this.f5356d;
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
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            drawable.inflate(resources, xmlPullParser, attributeSet);
        } else {
            inflate(resources, xmlPullParser, attributeSet, null);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            drawable.invalidateSelf();
        } else {
            super.invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isAutoMirrored() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return s1.a.h(drawable);
        }
        return this.f5358e.f5416e;
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return drawable.isStateful();
        }
        if (!super.isStateful()) {
            h hVar = this.f5358e;
            if (hVar != null) {
                if (!hVar.g()) {
                    ColorStateList colorStateList = this.f5358e.f5414c;
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
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            drawable.mutate();
            return this;
        }
        if (!this.f5361p && super.mutate() == this) {
            this.f5358e = new h(this.f5358e);
            this.f5361p = true;
        }
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            drawable.setBounds(rect);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        boolean z10;
        PorterDuff.Mode mode;
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return drawable.setState(iArr);
        }
        h hVar = this.f5358e;
        ColorStateList colorStateList = hVar.f5414c;
        if (colorStateList != null && (mode = hVar.f5415d) != null) {
            this.f5359i = i(this.f5359i, colorStateList, mode);
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
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            drawable.scheduleSelf(runnable, j10);
        } else {
            super.scheduleSelf(runnable, j10);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            drawable.setAlpha(i10);
        } else if (this.f5358e.f5413b.getRootAlpha() != i10) {
            this.f5358e.f5413b.setRootAlpha(i10);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAutoMirrored(boolean z10) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            s1.a.j(drawable, z10);
        } else {
            this.f5358e.f5416e = z10;
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
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            s1.a.n(drawable, i10);
        } else {
            setTintList(ColorStateList.valueOf(i10));
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            s1.a.o(drawable, colorStateList);
            return;
        }
        h hVar = this.f5358e;
        if (hVar.f5414c != colorStateList) {
            hVar.f5414c = colorStateList;
            this.f5359i = i(this.f5359i, colorStateList, hVar.f5415d);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            s1.a.p(drawable, mode);
            return;
        }
        h hVar = this.f5358e;
        if (hVar.f5415d != mode) {
            hVar.f5415d = mode;
            this.f5359i = i(this.f5359i, hVar.f5414c, mode);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return drawable.setVisible(z10, z11);
        }
        return super.setVisible(z10, z11);
    }

    @Override // android.graphics.drawable.Drawable
    public void unscheduleSelf(Runnable runnable) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            drawable.unscheduleSelf(runnable);
        } else {
            super.unscheduleSelf(runnable);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class i extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        private final Drawable.ConstantState f5424a;

        i(Drawable.ConstantState constantState) {
            this.f5424a = constantState;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public boolean canApplyTheme() {
            return this.f5424a.canApplyTheme();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5424a.getChangingConfigurations();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            f fVar = new f();
            fVar.f5356d = (VectorDrawable) this.f5424a.newDrawable();
            return fVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources) {
            f fVar = new f();
            fVar.f5356d = (VectorDrawable) this.f5424a.newDrawable(resources);
            return fVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources, Resources.Theme theme) {
            f fVar = new f();
            fVar.f5356d = (VectorDrawable) this.f5424a.newDrawable(resources, theme);
            return fVar;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            drawable.setColorFilter(colorFilter);
            return;
        }
        this.f5360o = colorFilter;
        invalidateSelf();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: androidx.vectordrawable.graphics.drawable.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class AbstractC0072f extends e {

        /* renamed from: a  reason: collision with root package name */
        protected e.b[] f5391a;

        /* renamed from: b  reason: collision with root package name */
        String f5392b;

        /* renamed from: c  reason: collision with root package name */
        int f5393c;

        /* renamed from: d  reason: collision with root package name */
        int f5394d;

        AbstractC0072f() {
            super();
            this.f5391a = null;
            this.f5393c = 0;
        }

        public boolean c() {
            return false;
        }

        public void d(Path path) {
            path.reset();
            e.b[] bVarArr = this.f5391a;
            if (bVarArr != null) {
                r1.e.j(bVarArr, path);
            }
        }

        public e.b[] getPathData() {
            return this.f5391a;
        }

        public String getPathName() {
            return this.f5392b;
        }

        public void setPathData(e.b[] bVarArr) {
            if (!r1.e.b(this.f5391a, bVarArr)) {
                this.f5391a = r1.e.f(bVarArr);
            } else {
                r1.e.k(this.f5391a, bVarArr);
            }
        }

        AbstractC0072f(AbstractC0072f abstractC0072f) {
            super();
            this.f5391a = null;
            this.f5393c = 0;
            this.f5392b = abstractC0072f.f5392b;
            this.f5394d = abstractC0072f.f5394d;
            this.f5391a = r1.e.f(abstractC0072f.f5391a);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void inflate(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            s1.a.g(drawable, resources, xmlPullParser, attributeSet, theme);
            return;
        }
        h hVar = this.f5358e;
        hVar.f5413b = new g();
        TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5327a);
        h(i10, xmlPullParser, theme);
        i10.recycle();
        hVar.f5412a = getChangingConfigurations();
        hVar.f5422k = true;
        d(resources, xmlPullParser, attributeSet, theme);
        this.f5359i = i(this.f5359i, hVar.f5414c, hVar.f5415d);
    }

    f(h hVar) {
        this.f5362q = true;
        this.f5363r = new float[9];
        this.f5364s = new Matrix();
        this.f5365t = new Rect();
        this.f5358e = hVar;
        this.f5359i = i(this.f5359i, hVar.f5414c, hVar.f5415d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends AbstractC0072f {

        /* renamed from: e  reason: collision with root package name */
        private int[] f5366e;

        /* renamed from: f  reason: collision with root package name */
        q1.d f5367f;

        /* renamed from: g  reason: collision with root package name */
        float f5368g;

        /* renamed from: h  reason: collision with root package name */
        q1.d f5369h;

        /* renamed from: i  reason: collision with root package name */
        float f5370i;

        /* renamed from: j  reason: collision with root package name */
        float f5371j;

        /* renamed from: k  reason: collision with root package name */
        float f5372k;

        /* renamed from: l  reason: collision with root package name */
        float f5373l;

        /* renamed from: m  reason: collision with root package name */
        float f5374m;

        /* renamed from: n  reason: collision with root package name */
        Paint.Cap f5375n;

        /* renamed from: o  reason: collision with root package name */
        Paint.Join f5376o;

        /* renamed from: p  reason: collision with root package name */
        float f5377p;

        c() {
            this.f5368g = 0.0f;
            this.f5370i = 1.0f;
            this.f5371j = 1.0f;
            this.f5372k = 0.0f;
            this.f5373l = 1.0f;
            this.f5374m = 0.0f;
            this.f5375n = Paint.Cap.BUTT;
            this.f5376o = Paint.Join.MITER;
            this.f5377p = 4.0f;
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
            this.f5366e = null;
            if (!m.h(xmlPullParser, "pathData")) {
                return;
            }
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5392b = string;
            }
            String string2 = typedArray.getString(2);
            if (string2 != null) {
                this.f5391a = r1.e.d(string2);
            }
            this.f5369h = m.e(typedArray, xmlPullParser, theme, "fillColor", 1, 0);
            this.f5371j = m.f(typedArray, xmlPullParser, "fillAlpha", 12, this.f5371j);
            this.f5375n = e(m.g(typedArray, xmlPullParser, "strokeLineCap", 8, -1), this.f5375n);
            this.f5376o = f(m.g(typedArray, xmlPullParser, "strokeLineJoin", 9, -1), this.f5376o);
            this.f5377p = m.f(typedArray, xmlPullParser, "strokeMiterLimit", 10, this.f5377p);
            this.f5367f = m.e(typedArray, xmlPullParser, theme, "strokeColor", 3, 0);
            this.f5370i = m.f(typedArray, xmlPullParser, "strokeAlpha", 11, this.f5370i);
            this.f5368g = m.f(typedArray, xmlPullParser, "strokeWidth", 4, this.f5368g);
            this.f5373l = m.f(typedArray, xmlPullParser, "trimPathEnd", 6, this.f5373l);
            this.f5374m = m.f(typedArray, xmlPullParser, "trimPathOffset", 7, this.f5374m);
            this.f5372k = m.f(typedArray, xmlPullParser, "trimPathStart", 5, this.f5372k);
            this.f5393c = m.g(typedArray, xmlPullParser, "fillType", 13, this.f5393c);
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean a() {
            if (!this.f5369h.i() && !this.f5367f.i()) {
                return false;
            }
            return true;
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean b(int[] iArr) {
            return this.f5367f.j(iArr) | this.f5369h.j(iArr);
        }

        public void g(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5329c);
            h(i10, xmlPullParser, theme);
            i10.recycle();
        }

        float getFillAlpha() {
            return this.f5371j;
        }

        int getFillColor() {
            return this.f5369h.e();
        }

        float getStrokeAlpha() {
            return this.f5370i;
        }

        int getStrokeColor() {
            return this.f5367f.e();
        }

        float getStrokeWidth() {
            return this.f5368g;
        }

        float getTrimPathEnd() {
            return this.f5373l;
        }

        float getTrimPathOffset() {
            return this.f5374m;
        }

        float getTrimPathStart() {
            return this.f5372k;
        }

        void setFillAlpha(float f10) {
            this.f5371j = f10;
        }

        void setFillColor(int i10) {
            this.f5369h.k(i10);
        }

        void setStrokeAlpha(float f10) {
            this.f5370i = f10;
        }

        void setStrokeColor(int i10) {
            this.f5367f.k(i10);
        }

        void setStrokeWidth(float f10) {
            this.f5368g = f10;
        }

        void setTrimPathEnd(float f10) {
            this.f5373l = f10;
        }

        void setTrimPathOffset(float f10) {
            this.f5374m = f10;
        }

        void setTrimPathStart(float f10) {
            this.f5372k = f10;
        }

        c(c cVar) {
            super(cVar);
            this.f5368g = 0.0f;
            this.f5370i = 1.0f;
            this.f5371j = 1.0f;
            this.f5372k = 0.0f;
            this.f5373l = 1.0f;
            this.f5374m = 0.0f;
            this.f5375n = Paint.Cap.BUTT;
            this.f5376o = Paint.Join.MITER;
            this.f5377p = 4.0f;
            this.f5366e = cVar.f5366e;
            this.f5367f = cVar.f5367f;
            this.f5368g = cVar.f5368g;
            this.f5370i = cVar.f5370i;
            this.f5369h = cVar.f5369h;
            this.f5393c = cVar.f5393c;
            this.f5371j = cVar.f5371j;
            this.f5372k = cVar.f5372k;
            this.f5373l = cVar.f5373l;
            this.f5374m = cVar.f5374m;
            this.f5375n = cVar.f5375n;
            this.f5376o = cVar.f5376o;
            this.f5377p = cVar.f5377p;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g {

        /* renamed from: q  reason: collision with root package name */
        private static final Matrix f5395q = new Matrix();

        /* renamed from: a  reason: collision with root package name */
        private final Path f5396a;

        /* renamed from: b  reason: collision with root package name */
        private final Path f5397b;

        /* renamed from: c  reason: collision with root package name */
        private final Matrix f5398c;

        /* renamed from: d  reason: collision with root package name */
        Paint f5399d;

        /* renamed from: e  reason: collision with root package name */
        Paint f5400e;

        /* renamed from: f  reason: collision with root package name */
        private PathMeasure f5401f;

        /* renamed from: g  reason: collision with root package name */
        private int f5402g;

        /* renamed from: h  reason: collision with root package name */
        final d f5403h;

        /* renamed from: i  reason: collision with root package name */
        float f5404i;

        /* renamed from: j  reason: collision with root package name */
        float f5405j;

        /* renamed from: k  reason: collision with root package name */
        float f5406k;

        /* renamed from: l  reason: collision with root package name */
        float f5407l;

        /* renamed from: m  reason: collision with root package name */
        int f5408m;

        /* renamed from: n  reason: collision with root package name */
        String f5409n;

        /* renamed from: o  reason: collision with root package name */
        Boolean f5410o;

        /* renamed from: p  reason: collision with root package name */
        final u0.a f5411p;

        g() {
            this.f5398c = new Matrix();
            this.f5404i = 0.0f;
            this.f5405j = 0.0f;
            this.f5406k = 0.0f;
            this.f5407l = 0.0f;
            this.f5408m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f5409n = null;
            this.f5410o = null;
            this.f5411p = new u0.a();
            this.f5403h = new d();
            this.f5396a = new Path();
            this.f5397b = new Path();
        }

        private static float a(float f10, float f11, float f12, float f13) {
            return (f10 * f13) - (f11 * f12);
        }

        private void c(d dVar, Matrix matrix, Canvas canvas, int i10, int i11, ColorFilter colorFilter) {
            d dVar2 = dVar;
            dVar2.f5378a.set(matrix);
            dVar2.f5378a.preConcat(dVar2.f5387j);
            canvas.save();
            int i12 = 0;
            while (i12 < dVar2.f5379b.size()) {
                e eVar = (e) dVar2.f5379b.get(i12);
                if (eVar instanceof d) {
                    c((d) eVar, dVar2.f5378a, canvas, i10, i11, colorFilter);
                } else if (eVar instanceof AbstractC0072f) {
                    d(dVar2, (AbstractC0072f) eVar, canvas, i10, i11, colorFilter);
                }
                i12++;
                dVar2 = dVar;
            }
            canvas.restore();
        }

        private void d(d dVar, AbstractC0072f abstractC0072f, Canvas canvas, int i10, int i11, ColorFilter colorFilter) {
            Path.FillType fillType;
            Path.FillType fillType2;
            float f10 = i10 / this.f5406k;
            float f11 = i11 / this.f5407l;
            float min = Math.min(f10, f11);
            Matrix matrix = dVar.f5378a;
            this.f5398c.set(matrix);
            this.f5398c.postScale(f10, f11);
            float e10 = e(matrix);
            if (e10 != 0.0f) {
                abstractC0072f.d(this.f5396a);
                Path path = this.f5396a;
                this.f5397b.reset();
                if (abstractC0072f.c()) {
                    Path path2 = this.f5397b;
                    if (abstractC0072f.f5393c == 0) {
                        fillType2 = Path.FillType.WINDING;
                    } else {
                        fillType2 = Path.FillType.EVEN_ODD;
                    }
                    path2.setFillType(fillType2);
                    this.f5397b.addPath(path, this.f5398c);
                    canvas.clipPath(this.f5397b);
                    return;
                }
                c cVar = (c) abstractC0072f;
                float f12 = cVar.f5372k;
                if (f12 != 0.0f || cVar.f5373l != 1.0f) {
                    float f13 = cVar.f5374m;
                    float f14 = (f12 + f13) % 1.0f;
                    float f15 = (cVar.f5373l + f13) % 1.0f;
                    if (this.f5401f == null) {
                        this.f5401f = new PathMeasure();
                    }
                    this.f5401f.setPath(this.f5396a, false);
                    float length = this.f5401f.getLength();
                    float f16 = f14 * length;
                    float f17 = f15 * length;
                    path.reset();
                    if (f16 > f17) {
                        this.f5401f.getSegment(f16, length, path, true);
                        this.f5401f.getSegment(0.0f, f17, path, true);
                    } else {
                        this.f5401f.getSegment(f16, f17, path, true);
                    }
                    path.rLineTo(0.0f, 0.0f);
                }
                this.f5397b.addPath(path, this.f5398c);
                if (cVar.f5369h.l()) {
                    q1.d dVar2 = cVar.f5369h;
                    if (this.f5400e == null) {
                        Paint paint = new Paint(1);
                        this.f5400e = paint;
                        paint.setStyle(Paint.Style.FILL);
                    }
                    Paint paint2 = this.f5400e;
                    if (dVar2.h()) {
                        Shader f18 = dVar2.f();
                        f18.setLocalMatrix(this.f5398c);
                        paint2.setShader(f18);
                        paint2.setAlpha(Math.round(cVar.f5371j * 255.0f));
                    } else {
                        paint2.setShader(null);
                        paint2.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        paint2.setColor(f.a(dVar2.e(), cVar.f5371j));
                    }
                    paint2.setColorFilter(colorFilter);
                    Path path3 = this.f5397b;
                    if (cVar.f5393c == 0) {
                        fillType = Path.FillType.WINDING;
                    } else {
                        fillType = Path.FillType.EVEN_ODD;
                    }
                    path3.setFillType(fillType);
                    canvas.drawPath(this.f5397b, paint2);
                }
                if (cVar.f5367f.l()) {
                    q1.d dVar3 = cVar.f5367f;
                    if (this.f5399d == null) {
                        Paint paint3 = new Paint(1);
                        this.f5399d = paint3;
                        paint3.setStyle(Paint.Style.STROKE);
                    }
                    Paint paint4 = this.f5399d;
                    Paint.Join join = cVar.f5376o;
                    if (join != null) {
                        paint4.setStrokeJoin(join);
                    }
                    Paint.Cap cap = cVar.f5375n;
                    if (cap != null) {
                        paint4.setStrokeCap(cap);
                    }
                    paint4.setStrokeMiter(cVar.f5377p);
                    if (dVar3.h()) {
                        Shader f19 = dVar3.f();
                        f19.setLocalMatrix(this.f5398c);
                        paint4.setShader(f19);
                        paint4.setAlpha(Math.round(cVar.f5370i * 255.0f));
                    } else {
                        paint4.setShader(null);
                        paint4.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        paint4.setColor(f.a(dVar3.e(), cVar.f5370i));
                    }
                    paint4.setColorFilter(colorFilter);
                    paint4.setStrokeWidth(cVar.f5368g * min * e10);
                    canvas.drawPath(this.f5397b, paint4);
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
            c(this.f5403h, f5395q, canvas, i10, i11, colorFilter);
        }

        public boolean f() {
            if (this.f5410o == null) {
                this.f5410o = Boolean.valueOf(this.f5403h.a());
            }
            return this.f5410o.booleanValue();
        }

        public boolean g(int[] iArr) {
            return this.f5403h.b(iArr);
        }

        public float getAlpha() {
            return getRootAlpha() / 255.0f;
        }

        public int getRootAlpha() {
            return this.f5408m;
        }

        public void setAlpha(float f10) {
            setRootAlpha((int) (f10 * 255.0f));
        }

        public void setRootAlpha(int i10) {
            this.f5408m = i10;
        }

        g(g gVar) {
            this.f5398c = new Matrix();
            this.f5404i = 0.0f;
            this.f5405j = 0.0f;
            this.f5406k = 0.0f;
            this.f5407l = 0.0f;
            this.f5408m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f5409n = null;
            this.f5410o = null;
            u0.a aVar = new u0.a();
            this.f5411p = aVar;
            this.f5403h = new d(gVar.f5403h, aVar);
            this.f5396a = new Path(gVar.f5396a);
            this.f5397b = new Path(gVar.f5397b);
            this.f5404i = gVar.f5404i;
            this.f5405j = gVar.f5405j;
            this.f5406k = gVar.f5406k;
            this.f5407l = gVar.f5407l;
            this.f5402g = gVar.f5402g;
            this.f5408m = gVar.f5408m;
            this.f5409n = gVar.f5409n;
            String str = gVar.f5409n;
            if (str != null) {
                aVar.put(str, this);
            }
            this.f5410o = gVar.f5410o;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends e {

        /* renamed from: a  reason: collision with root package name */
        final Matrix f5378a;

        /* renamed from: b  reason: collision with root package name */
        final ArrayList f5379b;

        /* renamed from: c  reason: collision with root package name */
        float f5380c;

        /* renamed from: d  reason: collision with root package name */
        private float f5381d;

        /* renamed from: e  reason: collision with root package name */
        private float f5382e;

        /* renamed from: f  reason: collision with root package name */
        private float f5383f;

        /* renamed from: g  reason: collision with root package name */
        private float f5384g;

        /* renamed from: h  reason: collision with root package name */
        private float f5385h;

        /* renamed from: i  reason: collision with root package name */
        private float f5386i;

        /* renamed from: j  reason: collision with root package name */
        final Matrix f5387j;

        /* renamed from: k  reason: collision with root package name */
        int f5388k;

        /* renamed from: l  reason: collision with root package name */
        private int[] f5389l;

        /* renamed from: m  reason: collision with root package name */
        private String f5390m;

        d(d dVar, u0.a aVar) {
            super();
            AbstractC0072f bVar;
            this.f5378a = new Matrix();
            this.f5379b = new ArrayList();
            this.f5380c = 0.0f;
            this.f5381d = 0.0f;
            this.f5382e = 0.0f;
            this.f5383f = 1.0f;
            this.f5384g = 1.0f;
            this.f5385h = 0.0f;
            this.f5386i = 0.0f;
            Matrix matrix = new Matrix();
            this.f5387j = matrix;
            this.f5390m = null;
            this.f5380c = dVar.f5380c;
            this.f5381d = dVar.f5381d;
            this.f5382e = dVar.f5382e;
            this.f5383f = dVar.f5383f;
            this.f5384g = dVar.f5384g;
            this.f5385h = dVar.f5385h;
            this.f5386i = dVar.f5386i;
            this.f5389l = dVar.f5389l;
            String str = dVar.f5390m;
            this.f5390m = str;
            this.f5388k = dVar.f5388k;
            if (str != null) {
                aVar.put(str, this);
            }
            matrix.set(dVar.f5387j);
            ArrayList arrayList = dVar.f5379b;
            for (int i10 = 0; i10 < arrayList.size(); i10++) {
                Object obj = arrayList.get(i10);
                if (obj instanceof d) {
                    this.f5379b.add(new d((d) obj, aVar));
                } else {
                    if (obj instanceof c) {
                        bVar = new c((c) obj);
                    } else if (obj instanceof b) {
                        bVar = new b((b) obj);
                    } else {
                        throw new IllegalStateException("Unknown object in the tree!");
                    }
                    this.f5379b.add(bVar);
                    Object obj2 = bVar.f5392b;
                    if (obj2 != null) {
                        aVar.put(obj2, bVar);
                    }
                }
            }
        }

        private void d() {
            this.f5387j.reset();
            this.f5387j.postTranslate(-this.f5381d, -this.f5382e);
            this.f5387j.postScale(this.f5383f, this.f5384g);
            this.f5387j.postRotate(this.f5380c, 0.0f, 0.0f);
            this.f5387j.postTranslate(this.f5385h + this.f5381d, this.f5386i + this.f5382e);
        }

        private void e(TypedArray typedArray, XmlPullParser xmlPullParser) {
            this.f5389l = null;
            this.f5380c = m.f(typedArray, xmlPullParser, ViewProps.ROTATION, 5, this.f5380c);
            this.f5381d = typedArray.getFloat(1, this.f5381d);
            this.f5382e = typedArray.getFloat(2, this.f5382e);
            this.f5383f = m.f(typedArray, xmlPullParser, ViewProps.SCALE_X, 3, this.f5383f);
            this.f5384g = m.f(typedArray, xmlPullParser, ViewProps.SCALE_Y, 4, this.f5384g);
            this.f5385h = m.f(typedArray, xmlPullParser, ViewProps.TRANSLATE_X, 6, this.f5385h);
            this.f5386i = m.f(typedArray, xmlPullParser, ViewProps.TRANSLATE_Y, 7, this.f5386i);
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5390m = string;
            }
            d();
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean a() {
            for (int i10 = 0; i10 < this.f5379b.size(); i10++) {
                if (((e) this.f5379b.get(i10)).a()) {
                    return true;
                }
            }
            return false;
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean b(int[] iArr) {
            boolean z10 = false;
            for (int i10 = 0; i10 < this.f5379b.size(); i10++) {
                z10 |= ((e) this.f5379b.get(i10)).b(iArr);
            }
            return z10;
        }

        public void c(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5328b);
            e(i10, xmlPullParser);
            i10.recycle();
        }

        public String getGroupName() {
            return this.f5390m;
        }

        public Matrix getLocalMatrix() {
            return this.f5387j;
        }

        public float getPivotX() {
            return this.f5381d;
        }

        public float getPivotY() {
            return this.f5382e;
        }

        public float getRotation() {
            return this.f5380c;
        }

        public float getScaleX() {
            return this.f5383f;
        }

        public float getScaleY() {
            return this.f5384g;
        }

        public float getTranslateX() {
            return this.f5385h;
        }

        public float getTranslateY() {
            return this.f5386i;
        }

        public void setPivotX(float f10) {
            if (f10 != this.f5381d) {
                this.f5381d = f10;
                d();
            }
        }

        public void setPivotY(float f10) {
            if (f10 != this.f5382e) {
                this.f5382e = f10;
                d();
            }
        }

        public void setRotation(float f10) {
            if (f10 != this.f5380c) {
                this.f5380c = f10;
                d();
            }
        }

        public void setScaleX(float f10) {
            if (f10 != this.f5383f) {
                this.f5383f = f10;
                d();
            }
        }

        public void setScaleY(float f10) {
            if (f10 != this.f5384g) {
                this.f5384g = f10;
                d();
            }
        }

        public void setTranslateX(float f10) {
            if (f10 != this.f5385h) {
                this.f5385h = f10;
                d();
            }
        }

        public void setTranslateY(float f10) {
            if (f10 != this.f5386i) {
                this.f5386i = f10;
                d();
            }
        }

        d() {
            super();
            this.f5378a = new Matrix();
            this.f5379b = new ArrayList();
            this.f5380c = 0.0f;
            this.f5381d = 0.0f;
            this.f5382e = 0.0f;
            this.f5383f = 1.0f;
            this.f5384g = 1.0f;
            this.f5385h = 0.0f;
            this.f5386i = 0.0f;
            this.f5387j = new Matrix();
            this.f5390m = null;
        }
    }
}
