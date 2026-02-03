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
    static final PorterDuff.Mode f5401u = PorterDuff.Mode.SRC_IN;

    /* renamed from: e  reason: collision with root package name */
    private h f5402e;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuffColorFilter f5403i;

    /* renamed from: o  reason: collision with root package name */
    private ColorFilter f5404o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f5405p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f5406q;

    /* renamed from: r  reason: collision with root package name */
    private final float[] f5407r;

    /* renamed from: s  reason: collision with root package name */
    private final Matrix f5408s;

    /* renamed from: t  reason: collision with root package name */
    private final Rect f5409t;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends AbstractC0076f {
        b() {
        }

        private void f(TypedArray typedArray, XmlPullParser xmlPullParser) {
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5436b = string;
            }
            String string2 = typedArray.getString(1);
            if (string2 != null) {
                this.f5435a = r1.e.d(string2);
            }
            this.f5437c = m.g(typedArray, xmlPullParser, "fillType", 2, 0);
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.AbstractC0076f
        public boolean c() {
            return true;
        }

        public void e(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            if (!m.h(xmlPullParser, "pathData")) {
                return;
            }
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5374d);
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
        int f5456a;

        /* renamed from: b  reason: collision with root package name */
        g f5457b;

        /* renamed from: c  reason: collision with root package name */
        ColorStateList f5458c;

        /* renamed from: d  reason: collision with root package name */
        PorterDuff.Mode f5459d;

        /* renamed from: e  reason: collision with root package name */
        boolean f5460e;

        /* renamed from: f  reason: collision with root package name */
        Bitmap f5461f;

        /* renamed from: g  reason: collision with root package name */
        ColorStateList f5462g;

        /* renamed from: h  reason: collision with root package name */
        PorterDuff.Mode f5463h;

        /* renamed from: i  reason: collision with root package name */
        int f5464i;

        /* renamed from: j  reason: collision with root package name */
        boolean f5465j;

        /* renamed from: k  reason: collision with root package name */
        boolean f5466k;

        /* renamed from: l  reason: collision with root package name */
        Paint f5467l;

        h(h hVar) {
            this.f5458c = null;
            this.f5459d = f.f5401u;
            if (hVar != null) {
                this.f5456a = hVar.f5456a;
                g gVar = new g(hVar.f5457b);
                this.f5457b = gVar;
                if (hVar.f5457b.f5444e != null) {
                    gVar.f5444e = new Paint(hVar.f5457b.f5444e);
                }
                if (hVar.f5457b.f5443d != null) {
                    this.f5457b.f5443d = new Paint(hVar.f5457b.f5443d);
                }
                this.f5458c = hVar.f5458c;
                this.f5459d = hVar.f5459d;
                this.f5460e = hVar.f5460e;
            }
        }

        public boolean a(int i10, int i11) {
            if (i10 == this.f5461f.getWidth() && i11 == this.f5461f.getHeight()) {
                return true;
            }
            return false;
        }

        public boolean b() {
            if (!this.f5466k && this.f5462g == this.f5458c && this.f5463h == this.f5459d && this.f5465j == this.f5460e && this.f5464i == this.f5457b.getRootAlpha()) {
                return true;
            }
            return false;
        }

        public void c(int i10, int i11) {
            if (this.f5461f != null && a(i10, i11)) {
                return;
            }
            this.f5461f = Bitmap.createBitmap(i10, i11, Bitmap.Config.ARGB_8888);
            this.f5466k = true;
        }

        public void d(Canvas canvas, ColorFilter colorFilter, Rect rect) {
            canvas.drawBitmap(this.f5461f, (Rect) null, rect, e(colorFilter));
        }

        public Paint e(ColorFilter colorFilter) {
            if (!f() && colorFilter == null) {
                return null;
            }
            if (this.f5467l == null) {
                Paint paint = new Paint();
                this.f5467l = paint;
                paint.setFilterBitmap(true);
            }
            this.f5467l.setAlpha(this.f5457b.getRootAlpha());
            this.f5467l.setColorFilter(colorFilter);
            return this.f5467l;
        }

        public boolean f() {
            if (this.f5457b.getRootAlpha() < 255) {
                return true;
            }
            return false;
        }

        public boolean g() {
            return this.f5457b.f();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5456a;
        }

        public boolean h(int[] iArr) {
            boolean g10 = this.f5457b.g(iArr);
            this.f5466k |= g10;
            return g10;
        }

        public void i() {
            this.f5462g = this.f5458c;
            this.f5463h = this.f5459d;
            this.f5464i = this.f5457b.getRootAlpha();
            this.f5465j = this.f5460e;
            this.f5466k = false;
        }

        public void j(int i10, int i11) {
            this.f5461f.eraseColor(0);
            this.f5457b.b(new Canvas(this.f5461f), i10, i11, null);
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
            this.f5458c = null;
            this.f5459d = f.f5401u;
            this.f5457b = new g();
        }
    }

    f() {
        this.f5406q = true;
        this.f5407r = new float[9];
        this.f5408s = new Matrix();
        this.f5409t = new Rect();
        this.f5402e = new h();
    }

    static int a(int i10, float f10) {
        return (i10 & 16777215) | (((int) (Color.alpha(i10) * f10)) << 24);
    }

    public static f b(Resources resources, int i10, Resources.Theme theme) {
        f fVar = new f();
        fVar.f5400d = j.f(resources, i10, theme);
        return fVar;
    }

    private void d(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        h hVar = this.f5402e;
        g gVar = hVar.f5457b;
        ArrayDeque arrayDeque = new ArrayDeque();
        arrayDeque.push(gVar.f5447h);
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
                        dVar.f5423b.add(cVar);
                        if (cVar.getPathName() != null) {
                            gVar.f5455p.put(cVar.getPathName(), cVar);
                        }
                        hVar.f5456a = cVar.f5438d | hVar.f5456a;
                        z10 = false;
                    } else if ("clip-path".equals(name)) {
                        b bVar = new b();
                        bVar.e(resources, attributeSet, theme, xmlPullParser);
                        dVar.f5423b.add(bVar);
                        if (bVar.getPathName() != null) {
                            gVar.f5455p.put(bVar.getPathName(), bVar);
                        }
                        hVar.f5456a = bVar.f5438d | hVar.f5456a;
                    } else if ("group".equals(name)) {
                        d dVar2 = new d();
                        dVar2.c(resources, attributeSet, theme, xmlPullParser);
                        dVar.f5423b.add(dVar2);
                        arrayDeque.push(dVar2);
                        if (dVar2.getGroupName() != null) {
                            gVar.f5455p.put(dVar2.getGroupName(), dVar2);
                        }
                        hVar.f5456a = dVar2.f5432k | hVar.f5456a;
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
        h hVar = this.f5402e;
        g gVar = hVar.f5457b;
        hVar.f5459d = f(m.g(typedArray, xmlPullParser, "tintMode", 6, -1), PorterDuff.Mode.SRC_IN);
        ColorStateList c10 = m.c(typedArray, xmlPullParser, theme, "tint", 1);
        if (c10 != null) {
            hVar.f5458c = c10;
        }
        hVar.f5460e = m.a(typedArray, xmlPullParser, "autoMirrored", 5, hVar.f5460e);
        gVar.f5450k = m.f(typedArray, xmlPullParser, "viewportWidth", 7, gVar.f5450k);
        float f10 = m.f(typedArray, xmlPullParser, "viewportHeight", 8, gVar.f5451l);
        gVar.f5451l = f10;
        if (gVar.f5450k > 0.0f) {
            if (f10 > 0.0f) {
                gVar.f5448i = typedArray.getDimension(3, gVar.f5448i);
                float dimension = typedArray.getDimension(2, gVar.f5449j);
                gVar.f5449j = dimension;
                if (gVar.f5448i > 0.0f) {
                    if (dimension > 0.0f) {
                        gVar.setAlpha(m.f(typedArray, xmlPullParser, "alpha", 4, gVar.getAlpha()));
                        String string = typedArray.getString(0);
                        if (string != null) {
                            gVar.f5453n = string;
                            gVar.f5455p.put(string, gVar);
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
        return this.f5402e.f5457b.f5455p.get(str);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean canApplyTheme() {
        Drawable drawable = this.f5400d;
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
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            drawable.draw(canvas);
            return;
        }
        copyBounds(this.f5409t);
        if (this.f5409t.width() > 0 && this.f5409t.height() > 0) {
            ColorFilter colorFilter = this.f5404o;
            if (colorFilter == null) {
                colorFilter = this.f5403i;
            }
            canvas.getMatrix(this.f5408s);
            this.f5408s.getValues(this.f5407r);
            float abs = Math.abs(this.f5407r[0]);
            float abs2 = Math.abs(this.f5407r[4]);
            float abs3 = Math.abs(this.f5407r[1]);
            float abs4 = Math.abs(this.f5407r[3]);
            if (abs3 != 0.0f || abs4 != 0.0f) {
                abs = 1.0f;
                abs2 = 1.0f;
            }
            int min = Math.min((int) RecyclerView.ItemAnimator.FLAG_MOVED, (int) (this.f5409t.width() * abs));
            int min2 = Math.min((int) RecyclerView.ItemAnimator.FLAG_MOVED, (int) (this.f5409t.height() * abs2));
            if (min > 0 && min2 > 0) {
                int save = canvas.save();
                Rect rect = this.f5409t;
                canvas.translate(rect.left, rect.top);
                if (e()) {
                    canvas.translate(this.f5409t.width(), 0.0f);
                    canvas.scale(-1.0f, 1.0f);
                }
                this.f5409t.offsetTo(0, 0);
                this.f5402e.c(min, min2);
                if (!this.f5406q) {
                    this.f5402e.j(min, min2);
                } else if (!this.f5402e.b()) {
                    this.f5402e.j(min, min2);
                    this.f5402e.i();
                }
                this.f5402e.d(canvas, colorFilter, this.f5409t);
                canvas.restoreToCount(save);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(boolean z10) {
        this.f5406q = z10;
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            return s1.a.d(drawable);
        }
        return this.f5402e.f5457b.getRootAlpha();
    }

    @Override // android.graphics.drawable.Drawable
    public int getChangingConfigurations() {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            return drawable.getChangingConfigurations();
        }
        return super.getChangingConfigurations() | this.f5402e.getChangingConfigurations();
    }

    @Override // android.graphics.drawable.Drawable
    public ColorFilter getColorFilter() {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            return s1.a.e(drawable);
        }
        return this.f5404o;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        if (this.f5400d != null) {
            return new i(this.f5400d.getConstantState());
        }
        this.f5402e.f5456a = getChangingConfigurations();
        return this.f5402e;
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ Drawable getCurrent() {
        return super.getCurrent();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            return drawable.getIntrinsicHeight();
        }
        return (int) this.f5402e.f5457b.f5449j;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            return drawable.getIntrinsicWidth();
        }
        return (int) this.f5402e.f5457b.f5448i;
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
        Drawable drawable = this.f5400d;
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
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            drawable.inflate(resources, xmlPullParser, attributeSet);
        } else {
            inflate(resources, xmlPullParser, attributeSet, null);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            drawable.invalidateSelf();
        } else {
            super.invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isAutoMirrored() {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            return s1.a.h(drawable);
        }
        return this.f5402e.f5460e;
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            return drawable.isStateful();
        }
        if (!super.isStateful()) {
            h hVar = this.f5402e;
            if (hVar != null) {
                if (!hVar.g()) {
                    ColorStateList colorStateList = this.f5402e.f5458c;
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
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            drawable.mutate();
            return this;
        }
        if (!this.f5405p && super.mutate() == this) {
            this.f5402e = new h(this.f5402e);
            this.f5405p = true;
        }
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            drawable.setBounds(rect);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        boolean z10;
        PorterDuff.Mode mode;
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            return drawable.setState(iArr);
        }
        h hVar = this.f5402e;
        ColorStateList colorStateList = hVar.f5458c;
        if (colorStateList != null && (mode = hVar.f5459d) != null) {
            this.f5403i = i(this.f5403i, colorStateList, mode);
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
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            drawable.scheduleSelf(runnable, j10);
        } else {
            super.scheduleSelf(runnable, j10);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            drawable.setAlpha(i10);
        } else if (this.f5402e.f5457b.getRootAlpha() != i10) {
            this.f5402e.f5457b.setRootAlpha(i10);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAutoMirrored(boolean z10) {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            s1.a.j(drawable, z10);
        } else {
            this.f5402e.f5460e = z10;
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
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            s1.a.n(drawable, i10);
        } else {
            setTintList(ColorStateList.valueOf(i10));
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            s1.a.o(drawable, colorStateList);
            return;
        }
        h hVar = this.f5402e;
        if (hVar.f5458c != colorStateList) {
            hVar.f5458c = colorStateList;
            this.f5403i = i(this.f5403i, colorStateList, hVar.f5459d);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            s1.a.p(drawable, mode);
            return;
        }
        h hVar = this.f5402e;
        if (hVar.f5459d != mode) {
            hVar.f5459d = mode;
            this.f5403i = i(this.f5403i, hVar.f5458c, mode);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            return drawable.setVisible(z10, z11);
        }
        return super.setVisible(z10, z11);
    }

    @Override // android.graphics.drawable.Drawable
    public void unscheduleSelf(Runnable runnable) {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            drawable.unscheduleSelf(runnable);
        } else {
            super.unscheduleSelf(runnable);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class i extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        private final Drawable.ConstantState f5468a;

        i(Drawable.ConstantState constantState) {
            this.f5468a = constantState;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public boolean canApplyTheme() {
            return this.f5468a.canApplyTheme();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5468a.getChangingConfigurations();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            f fVar = new f();
            fVar.f5400d = (VectorDrawable) this.f5468a.newDrawable();
            return fVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources) {
            f fVar = new f();
            fVar.f5400d = (VectorDrawable) this.f5468a.newDrawable(resources);
            return fVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources, Resources.Theme theme) {
            f fVar = new f();
            fVar.f5400d = (VectorDrawable) this.f5468a.newDrawable(resources, theme);
            return fVar;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            drawable.setColorFilter(colorFilter);
            return;
        }
        this.f5404o = colorFilter;
        invalidateSelf();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: androidx.vectordrawable.graphics.drawable.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class AbstractC0076f extends e {

        /* renamed from: a  reason: collision with root package name */
        protected e.b[] f5435a;

        /* renamed from: b  reason: collision with root package name */
        String f5436b;

        /* renamed from: c  reason: collision with root package name */
        int f5437c;

        /* renamed from: d  reason: collision with root package name */
        int f5438d;

        AbstractC0076f() {
            super();
            this.f5435a = null;
            this.f5437c = 0;
        }

        public boolean c() {
            return false;
        }

        public void d(Path path) {
            path.reset();
            e.b[] bVarArr = this.f5435a;
            if (bVarArr != null) {
                r1.e.j(bVarArr, path);
            }
        }

        public e.b[] getPathData() {
            return this.f5435a;
        }

        public String getPathName() {
            return this.f5436b;
        }

        public void setPathData(e.b[] bVarArr) {
            if (!r1.e.b(this.f5435a, bVarArr)) {
                this.f5435a = r1.e.f(bVarArr);
            } else {
                r1.e.k(this.f5435a, bVarArr);
            }
        }

        AbstractC0076f(AbstractC0076f abstractC0076f) {
            super();
            this.f5435a = null;
            this.f5437c = 0;
            this.f5436b = abstractC0076f.f5436b;
            this.f5438d = abstractC0076f.f5438d;
            this.f5435a = r1.e.f(abstractC0076f.f5435a);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void inflate(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        Drawable drawable = this.f5400d;
        if (drawable != null) {
            s1.a.g(drawable, resources, xmlPullParser, attributeSet, theme);
            return;
        }
        h hVar = this.f5402e;
        hVar.f5457b = new g();
        TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5371a);
        h(i10, xmlPullParser, theme);
        i10.recycle();
        hVar.f5456a = getChangingConfigurations();
        hVar.f5466k = true;
        d(resources, xmlPullParser, attributeSet, theme);
        this.f5403i = i(this.f5403i, hVar.f5458c, hVar.f5459d);
    }

    f(h hVar) {
        this.f5406q = true;
        this.f5407r = new float[9];
        this.f5408s = new Matrix();
        this.f5409t = new Rect();
        this.f5402e = hVar;
        this.f5403i = i(this.f5403i, hVar.f5458c, hVar.f5459d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends AbstractC0076f {

        /* renamed from: e  reason: collision with root package name */
        private int[] f5410e;

        /* renamed from: f  reason: collision with root package name */
        q1.d f5411f;

        /* renamed from: g  reason: collision with root package name */
        float f5412g;

        /* renamed from: h  reason: collision with root package name */
        q1.d f5413h;

        /* renamed from: i  reason: collision with root package name */
        float f5414i;

        /* renamed from: j  reason: collision with root package name */
        float f5415j;

        /* renamed from: k  reason: collision with root package name */
        float f5416k;

        /* renamed from: l  reason: collision with root package name */
        float f5417l;

        /* renamed from: m  reason: collision with root package name */
        float f5418m;

        /* renamed from: n  reason: collision with root package name */
        Paint.Cap f5419n;

        /* renamed from: o  reason: collision with root package name */
        Paint.Join f5420o;

        /* renamed from: p  reason: collision with root package name */
        float f5421p;

        c() {
            this.f5412g = 0.0f;
            this.f5414i = 1.0f;
            this.f5415j = 1.0f;
            this.f5416k = 0.0f;
            this.f5417l = 1.0f;
            this.f5418m = 0.0f;
            this.f5419n = Paint.Cap.BUTT;
            this.f5420o = Paint.Join.MITER;
            this.f5421p = 4.0f;
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
            this.f5410e = null;
            if (!m.h(xmlPullParser, "pathData")) {
                return;
            }
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5436b = string;
            }
            String string2 = typedArray.getString(2);
            if (string2 != null) {
                this.f5435a = r1.e.d(string2);
            }
            this.f5413h = m.e(typedArray, xmlPullParser, theme, "fillColor", 1, 0);
            this.f5415j = m.f(typedArray, xmlPullParser, "fillAlpha", 12, this.f5415j);
            this.f5419n = e(m.g(typedArray, xmlPullParser, "strokeLineCap", 8, -1), this.f5419n);
            this.f5420o = f(m.g(typedArray, xmlPullParser, "strokeLineJoin", 9, -1), this.f5420o);
            this.f5421p = m.f(typedArray, xmlPullParser, "strokeMiterLimit", 10, this.f5421p);
            this.f5411f = m.e(typedArray, xmlPullParser, theme, "strokeColor", 3, 0);
            this.f5414i = m.f(typedArray, xmlPullParser, "strokeAlpha", 11, this.f5414i);
            this.f5412g = m.f(typedArray, xmlPullParser, "strokeWidth", 4, this.f5412g);
            this.f5417l = m.f(typedArray, xmlPullParser, "trimPathEnd", 6, this.f5417l);
            this.f5418m = m.f(typedArray, xmlPullParser, "trimPathOffset", 7, this.f5418m);
            this.f5416k = m.f(typedArray, xmlPullParser, "trimPathStart", 5, this.f5416k);
            this.f5437c = m.g(typedArray, xmlPullParser, "fillType", 13, this.f5437c);
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean a() {
            if (!this.f5413h.i() && !this.f5411f.i()) {
                return false;
            }
            return true;
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean b(int[] iArr) {
            return this.f5411f.j(iArr) | this.f5413h.j(iArr);
        }

        public void g(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5373c);
            h(i10, xmlPullParser, theme);
            i10.recycle();
        }

        float getFillAlpha() {
            return this.f5415j;
        }

        int getFillColor() {
            return this.f5413h.e();
        }

        float getStrokeAlpha() {
            return this.f5414i;
        }

        int getStrokeColor() {
            return this.f5411f.e();
        }

        float getStrokeWidth() {
            return this.f5412g;
        }

        float getTrimPathEnd() {
            return this.f5417l;
        }

        float getTrimPathOffset() {
            return this.f5418m;
        }

        float getTrimPathStart() {
            return this.f5416k;
        }

        void setFillAlpha(float f10) {
            this.f5415j = f10;
        }

        void setFillColor(int i10) {
            this.f5413h.k(i10);
        }

        void setStrokeAlpha(float f10) {
            this.f5414i = f10;
        }

        void setStrokeColor(int i10) {
            this.f5411f.k(i10);
        }

        void setStrokeWidth(float f10) {
            this.f5412g = f10;
        }

        void setTrimPathEnd(float f10) {
            this.f5417l = f10;
        }

        void setTrimPathOffset(float f10) {
            this.f5418m = f10;
        }

        void setTrimPathStart(float f10) {
            this.f5416k = f10;
        }

        c(c cVar) {
            super(cVar);
            this.f5412g = 0.0f;
            this.f5414i = 1.0f;
            this.f5415j = 1.0f;
            this.f5416k = 0.0f;
            this.f5417l = 1.0f;
            this.f5418m = 0.0f;
            this.f5419n = Paint.Cap.BUTT;
            this.f5420o = Paint.Join.MITER;
            this.f5421p = 4.0f;
            this.f5410e = cVar.f5410e;
            this.f5411f = cVar.f5411f;
            this.f5412g = cVar.f5412g;
            this.f5414i = cVar.f5414i;
            this.f5413h = cVar.f5413h;
            this.f5437c = cVar.f5437c;
            this.f5415j = cVar.f5415j;
            this.f5416k = cVar.f5416k;
            this.f5417l = cVar.f5417l;
            this.f5418m = cVar.f5418m;
            this.f5419n = cVar.f5419n;
            this.f5420o = cVar.f5420o;
            this.f5421p = cVar.f5421p;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g {

        /* renamed from: q  reason: collision with root package name */
        private static final Matrix f5439q = new Matrix();

        /* renamed from: a  reason: collision with root package name */
        private final Path f5440a;

        /* renamed from: b  reason: collision with root package name */
        private final Path f5441b;

        /* renamed from: c  reason: collision with root package name */
        private final Matrix f5442c;

        /* renamed from: d  reason: collision with root package name */
        Paint f5443d;

        /* renamed from: e  reason: collision with root package name */
        Paint f5444e;

        /* renamed from: f  reason: collision with root package name */
        private PathMeasure f5445f;

        /* renamed from: g  reason: collision with root package name */
        private int f5446g;

        /* renamed from: h  reason: collision with root package name */
        final d f5447h;

        /* renamed from: i  reason: collision with root package name */
        float f5448i;

        /* renamed from: j  reason: collision with root package name */
        float f5449j;

        /* renamed from: k  reason: collision with root package name */
        float f5450k;

        /* renamed from: l  reason: collision with root package name */
        float f5451l;

        /* renamed from: m  reason: collision with root package name */
        int f5452m;

        /* renamed from: n  reason: collision with root package name */
        String f5453n;

        /* renamed from: o  reason: collision with root package name */
        Boolean f5454o;

        /* renamed from: p  reason: collision with root package name */
        final u0.a f5455p;

        g() {
            this.f5442c = new Matrix();
            this.f5448i = 0.0f;
            this.f5449j = 0.0f;
            this.f5450k = 0.0f;
            this.f5451l = 0.0f;
            this.f5452m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f5453n = null;
            this.f5454o = null;
            this.f5455p = new u0.a();
            this.f5447h = new d();
            this.f5440a = new Path();
            this.f5441b = new Path();
        }

        private static float a(float f10, float f11, float f12, float f13) {
            return (f10 * f13) - (f11 * f12);
        }

        private void c(d dVar, Matrix matrix, Canvas canvas, int i10, int i11, ColorFilter colorFilter) {
            d dVar2 = dVar;
            dVar2.f5422a.set(matrix);
            dVar2.f5422a.preConcat(dVar2.f5431j);
            canvas.save();
            int i12 = 0;
            while (i12 < dVar2.f5423b.size()) {
                e eVar = (e) dVar2.f5423b.get(i12);
                if (eVar instanceof d) {
                    c((d) eVar, dVar2.f5422a, canvas, i10, i11, colorFilter);
                } else if (eVar instanceof AbstractC0076f) {
                    d(dVar2, (AbstractC0076f) eVar, canvas, i10, i11, colorFilter);
                }
                i12++;
                dVar2 = dVar;
            }
            canvas.restore();
        }

        private void d(d dVar, AbstractC0076f abstractC0076f, Canvas canvas, int i10, int i11, ColorFilter colorFilter) {
            Path.FillType fillType;
            Path.FillType fillType2;
            float f10 = i10 / this.f5450k;
            float f11 = i11 / this.f5451l;
            float min = Math.min(f10, f11);
            Matrix matrix = dVar.f5422a;
            this.f5442c.set(matrix);
            this.f5442c.postScale(f10, f11);
            float e10 = e(matrix);
            if (e10 != 0.0f) {
                abstractC0076f.d(this.f5440a);
                Path path = this.f5440a;
                this.f5441b.reset();
                if (abstractC0076f.c()) {
                    Path path2 = this.f5441b;
                    if (abstractC0076f.f5437c == 0) {
                        fillType2 = Path.FillType.WINDING;
                    } else {
                        fillType2 = Path.FillType.EVEN_ODD;
                    }
                    path2.setFillType(fillType2);
                    this.f5441b.addPath(path, this.f5442c);
                    canvas.clipPath(this.f5441b);
                    return;
                }
                c cVar = (c) abstractC0076f;
                float f12 = cVar.f5416k;
                if (f12 != 0.0f || cVar.f5417l != 1.0f) {
                    float f13 = cVar.f5418m;
                    float f14 = (f12 + f13) % 1.0f;
                    float f15 = (cVar.f5417l + f13) % 1.0f;
                    if (this.f5445f == null) {
                        this.f5445f = new PathMeasure();
                    }
                    this.f5445f.setPath(this.f5440a, false);
                    float length = this.f5445f.getLength();
                    float f16 = f14 * length;
                    float f17 = f15 * length;
                    path.reset();
                    if (f16 > f17) {
                        this.f5445f.getSegment(f16, length, path, true);
                        this.f5445f.getSegment(0.0f, f17, path, true);
                    } else {
                        this.f5445f.getSegment(f16, f17, path, true);
                    }
                    path.rLineTo(0.0f, 0.0f);
                }
                this.f5441b.addPath(path, this.f5442c);
                if (cVar.f5413h.l()) {
                    q1.d dVar2 = cVar.f5413h;
                    if (this.f5444e == null) {
                        Paint paint = new Paint(1);
                        this.f5444e = paint;
                        paint.setStyle(Paint.Style.FILL);
                    }
                    Paint paint2 = this.f5444e;
                    if (dVar2.h()) {
                        Shader f18 = dVar2.f();
                        f18.setLocalMatrix(this.f5442c);
                        paint2.setShader(f18);
                        paint2.setAlpha(Math.round(cVar.f5415j * 255.0f));
                    } else {
                        paint2.setShader(null);
                        paint2.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        paint2.setColor(f.a(dVar2.e(), cVar.f5415j));
                    }
                    paint2.setColorFilter(colorFilter);
                    Path path3 = this.f5441b;
                    if (cVar.f5437c == 0) {
                        fillType = Path.FillType.WINDING;
                    } else {
                        fillType = Path.FillType.EVEN_ODD;
                    }
                    path3.setFillType(fillType);
                    canvas.drawPath(this.f5441b, paint2);
                }
                if (cVar.f5411f.l()) {
                    q1.d dVar3 = cVar.f5411f;
                    if (this.f5443d == null) {
                        Paint paint3 = new Paint(1);
                        this.f5443d = paint3;
                        paint3.setStyle(Paint.Style.STROKE);
                    }
                    Paint paint4 = this.f5443d;
                    Paint.Join join = cVar.f5420o;
                    if (join != null) {
                        paint4.setStrokeJoin(join);
                    }
                    Paint.Cap cap = cVar.f5419n;
                    if (cap != null) {
                        paint4.setStrokeCap(cap);
                    }
                    paint4.setStrokeMiter(cVar.f5421p);
                    if (dVar3.h()) {
                        Shader f19 = dVar3.f();
                        f19.setLocalMatrix(this.f5442c);
                        paint4.setShader(f19);
                        paint4.setAlpha(Math.round(cVar.f5414i * 255.0f));
                    } else {
                        paint4.setShader(null);
                        paint4.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        paint4.setColor(f.a(dVar3.e(), cVar.f5414i));
                    }
                    paint4.setColorFilter(colorFilter);
                    paint4.setStrokeWidth(cVar.f5412g * min * e10);
                    canvas.drawPath(this.f5441b, paint4);
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
            c(this.f5447h, f5439q, canvas, i10, i11, colorFilter);
        }

        public boolean f() {
            if (this.f5454o == null) {
                this.f5454o = Boolean.valueOf(this.f5447h.a());
            }
            return this.f5454o.booleanValue();
        }

        public boolean g(int[] iArr) {
            return this.f5447h.b(iArr);
        }

        public float getAlpha() {
            return getRootAlpha() / 255.0f;
        }

        public int getRootAlpha() {
            return this.f5452m;
        }

        public void setAlpha(float f10) {
            setRootAlpha((int) (f10 * 255.0f));
        }

        public void setRootAlpha(int i10) {
            this.f5452m = i10;
        }

        g(g gVar) {
            this.f5442c = new Matrix();
            this.f5448i = 0.0f;
            this.f5449j = 0.0f;
            this.f5450k = 0.0f;
            this.f5451l = 0.0f;
            this.f5452m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f5453n = null;
            this.f5454o = null;
            u0.a aVar = new u0.a();
            this.f5455p = aVar;
            this.f5447h = new d(gVar.f5447h, aVar);
            this.f5440a = new Path(gVar.f5440a);
            this.f5441b = new Path(gVar.f5441b);
            this.f5448i = gVar.f5448i;
            this.f5449j = gVar.f5449j;
            this.f5450k = gVar.f5450k;
            this.f5451l = gVar.f5451l;
            this.f5446g = gVar.f5446g;
            this.f5452m = gVar.f5452m;
            this.f5453n = gVar.f5453n;
            String str = gVar.f5453n;
            if (str != null) {
                aVar.put(str, this);
            }
            this.f5454o = gVar.f5454o;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends e {

        /* renamed from: a  reason: collision with root package name */
        final Matrix f5422a;

        /* renamed from: b  reason: collision with root package name */
        final ArrayList f5423b;

        /* renamed from: c  reason: collision with root package name */
        float f5424c;

        /* renamed from: d  reason: collision with root package name */
        private float f5425d;

        /* renamed from: e  reason: collision with root package name */
        private float f5426e;

        /* renamed from: f  reason: collision with root package name */
        private float f5427f;

        /* renamed from: g  reason: collision with root package name */
        private float f5428g;

        /* renamed from: h  reason: collision with root package name */
        private float f5429h;

        /* renamed from: i  reason: collision with root package name */
        private float f5430i;

        /* renamed from: j  reason: collision with root package name */
        final Matrix f5431j;

        /* renamed from: k  reason: collision with root package name */
        int f5432k;

        /* renamed from: l  reason: collision with root package name */
        private int[] f5433l;

        /* renamed from: m  reason: collision with root package name */
        private String f5434m;

        d(d dVar, u0.a aVar) {
            super();
            AbstractC0076f bVar;
            this.f5422a = new Matrix();
            this.f5423b = new ArrayList();
            this.f5424c = 0.0f;
            this.f5425d = 0.0f;
            this.f5426e = 0.0f;
            this.f5427f = 1.0f;
            this.f5428g = 1.0f;
            this.f5429h = 0.0f;
            this.f5430i = 0.0f;
            Matrix matrix = new Matrix();
            this.f5431j = matrix;
            this.f5434m = null;
            this.f5424c = dVar.f5424c;
            this.f5425d = dVar.f5425d;
            this.f5426e = dVar.f5426e;
            this.f5427f = dVar.f5427f;
            this.f5428g = dVar.f5428g;
            this.f5429h = dVar.f5429h;
            this.f5430i = dVar.f5430i;
            this.f5433l = dVar.f5433l;
            String str = dVar.f5434m;
            this.f5434m = str;
            this.f5432k = dVar.f5432k;
            if (str != null) {
                aVar.put(str, this);
            }
            matrix.set(dVar.f5431j);
            ArrayList arrayList = dVar.f5423b;
            for (int i10 = 0; i10 < arrayList.size(); i10++) {
                Object obj = arrayList.get(i10);
                if (obj instanceof d) {
                    this.f5423b.add(new d((d) obj, aVar));
                } else {
                    if (obj instanceof c) {
                        bVar = new c((c) obj);
                    } else if (obj instanceof b) {
                        bVar = new b((b) obj);
                    } else {
                        throw new IllegalStateException("Unknown object in the tree!");
                    }
                    this.f5423b.add(bVar);
                    Object obj2 = bVar.f5436b;
                    if (obj2 != null) {
                        aVar.put(obj2, bVar);
                    }
                }
            }
        }

        private void d() {
            this.f5431j.reset();
            this.f5431j.postTranslate(-this.f5425d, -this.f5426e);
            this.f5431j.postScale(this.f5427f, this.f5428g);
            this.f5431j.postRotate(this.f5424c, 0.0f, 0.0f);
            this.f5431j.postTranslate(this.f5429h + this.f5425d, this.f5430i + this.f5426e);
        }

        private void e(TypedArray typedArray, XmlPullParser xmlPullParser) {
            this.f5433l = null;
            this.f5424c = m.f(typedArray, xmlPullParser, ViewProps.ROTATION, 5, this.f5424c);
            this.f5425d = typedArray.getFloat(1, this.f5425d);
            this.f5426e = typedArray.getFloat(2, this.f5426e);
            this.f5427f = m.f(typedArray, xmlPullParser, ViewProps.SCALE_X, 3, this.f5427f);
            this.f5428g = m.f(typedArray, xmlPullParser, ViewProps.SCALE_Y, 4, this.f5428g);
            this.f5429h = m.f(typedArray, xmlPullParser, ViewProps.TRANSLATE_X, 6, this.f5429h);
            this.f5430i = m.f(typedArray, xmlPullParser, ViewProps.TRANSLATE_Y, 7, this.f5430i);
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5434m = string;
            }
            d();
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean a() {
            for (int i10 = 0; i10 < this.f5423b.size(); i10++) {
                if (((e) this.f5423b.get(i10)).a()) {
                    return true;
                }
            }
            return false;
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean b(int[] iArr) {
            boolean z10 = false;
            for (int i10 = 0; i10 < this.f5423b.size(); i10++) {
                z10 |= ((e) this.f5423b.get(i10)).b(iArr);
            }
            return z10;
        }

        public void c(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5372b);
            e(i10, xmlPullParser);
            i10.recycle();
        }

        public String getGroupName() {
            return this.f5434m;
        }

        public Matrix getLocalMatrix() {
            return this.f5431j;
        }

        public float getPivotX() {
            return this.f5425d;
        }

        public float getPivotY() {
            return this.f5426e;
        }

        public float getRotation() {
            return this.f5424c;
        }

        public float getScaleX() {
            return this.f5427f;
        }

        public float getScaleY() {
            return this.f5428g;
        }

        public float getTranslateX() {
            return this.f5429h;
        }

        public float getTranslateY() {
            return this.f5430i;
        }

        public void setPivotX(float f10) {
            if (f10 != this.f5425d) {
                this.f5425d = f10;
                d();
            }
        }

        public void setPivotY(float f10) {
            if (f10 != this.f5426e) {
                this.f5426e = f10;
                d();
            }
        }

        public void setRotation(float f10) {
            if (f10 != this.f5424c) {
                this.f5424c = f10;
                d();
            }
        }

        public void setScaleX(float f10) {
            if (f10 != this.f5427f) {
                this.f5427f = f10;
                d();
            }
        }

        public void setScaleY(float f10) {
            if (f10 != this.f5428g) {
                this.f5428g = f10;
                d();
            }
        }

        public void setTranslateX(float f10) {
            if (f10 != this.f5429h) {
                this.f5429h = f10;
                d();
            }
        }

        public void setTranslateY(float f10) {
            if (f10 != this.f5430i) {
                this.f5430i = f10;
                d();
            }
        }

        d() {
            super();
            this.f5422a = new Matrix();
            this.f5423b = new ArrayList();
            this.f5424c = 0.0f;
            this.f5425d = 0.0f;
            this.f5426e = 0.0f;
            this.f5427f = 1.0f;
            this.f5428g = 1.0f;
            this.f5429h = 0.0f;
            this.f5430i = 0.0f;
            this.f5431j = new Matrix();
            this.f5434m = null;
        }
    }
}
