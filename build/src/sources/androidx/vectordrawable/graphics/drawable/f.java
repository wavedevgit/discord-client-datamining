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
    static final PorterDuff.Mode f5508u = PorterDuff.Mode.SRC_IN;

    /* renamed from: e  reason: collision with root package name */
    private h f5509e;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuffColorFilter f5510i;

    /* renamed from: o  reason: collision with root package name */
    private ColorFilter f5511o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f5512p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f5513q;

    /* renamed from: r  reason: collision with root package name */
    private final float[] f5514r;

    /* renamed from: s  reason: collision with root package name */
    private final Matrix f5515s;

    /* renamed from: t  reason: collision with root package name */
    private final Rect f5516t;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends AbstractC0075f {
        b() {
        }

        private void f(TypedArray typedArray, XmlPullParser xmlPullParser) {
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5543b = string;
            }
            String string2 = typedArray.getString(1);
            if (string2 != null) {
                this.f5542a = r1.e.d(string2);
            }
            this.f5544c = m.g(typedArray, xmlPullParser, "fillType", 2, 0);
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.AbstractC0075f
        public boolean c() {
            return true;
        }

        public void e(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            if (!m.h(xmlPullParser, "pathData")) {
                return;
            }
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5481d);
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
        int f5563a;

        /* renamed from: b  reason: collision with root package name */
        g f5564b;

        /* renamed from: c  reason: collision with root package name */
        ColorStateList f5565c;

        /* renamed from: d  reason: collision with root package name */
        PorterDuff.Mode f5566d;

        /* renamed from: e  reason: collision with root package name */
        boolean f5567e;

        /* renamed from: f  reason: collision with root package name */
        Bitmap f5568f;

        /* renamed from: g  reason: collision with root package name */
        ColorStateList f5569g;

        /* renamed from: h  reason: collision with root package name */
        PorterDuff.Mode f5570h;

        /* renamed from: i  reason: collision with root package name */
        int f5571i;

        /* renamed from: j  reason: collision with root package name */
        boolean f5572j;

        /* renamed from: k  reason: collision with root package name */
        boolean f5573k;

        /* renamed from: l  reason: collision with root package name */
        Paint f5574l;

        h(h hVar) {
            this.f5565c = null;
            this.f5566d = f.f5508u;
            if (hVar != null) {
                this.f5563a = hVar.f5563a;
                g gVar = new g(hVar.f5564b);
                this.f5564b = gVar;
                if (hVar.f5564b.f5551e != null) {
                    gVar.f5551e = new Paint(hVar.f5564b.f5551e);
                }
                if (hVar.f5564b.f5550d != null) {
                    this.f5564b.f5550d = new Paint(hVar.f5564b.f5550d);
                }
                this.f5565c = hVar.f5565c;
                this.f5566d = hVar.f5566d;
                this.f5567e = hVar.f5567e;
            }
        }

        public boolean a(int i10, int i11) {
            if (i10 == this.f5568f.getWidth() && i11 == this.f5568f.getHeight()) {
                return true;
            }
            return false;
        }

        public boolean b() {
            if (!this.f5573k && this.f5569g == this.f5565c && this.f5570h == this.f5566d && this.f5572j == this.f5567e && this.f5571i == this.f5564b.getRootAlpha()) {
                return true;
            }
            return false;
        }

        public void c(int i10, int i11) {
            if (this.f5568f != null && a(i10, i11)) {
                return;
            }
            this.f5568f = Bitmap.createBitmap(i10, i11, Bitmap.Config.ARGB_8888);
            this.f5573k = true;
        }

        public void d(Canvas canvas, ColorFilter colorFilter, Rect rect) {
            canvas.drawBitmap(this.f5568f, (Rect) null, rect, e(colorFilter));
        }

        public Paint e(ColorFilter colorFilter) {
            if (!f() && colorFilter == null) {
                return null;
            }
            if (this.f5574l == null) {
                Paint paint = new Paint();
                this.f5574l = paint;
                paint.setFilterBitmap(true);
            }
            this.f5574l.setAlpha(this.f5564b.getRootAlpha());
            this.f5574l.setColorFilter(colorFilter);
            return this.f5574l;
        }

        public boolean f() {
            if (this.f5564b.getRootAlpha() < 255) {
                return true;
            }
            return false;
        }

        public boolean g() {
            return this.f5564b.f();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5563a;
        }

        public boolean h(int[] iArr) {
            boolean g10 = this.f5564b.g(iArr);
            this.f5573k |= g10;
            return g10;
        }

        public void i() {
            this.f5569g = this.f5565c;
            this.f5570h = this.f5566d;
            this.f5571i = this.f5564b.getRootAlpha();
            this.f5572j = this.f5567e;
            this.f5573k = false;
        }

        public void j(int i10, int i11) {
            this.f5568f.eraseColor(0);
            this.f5564b.b(new Canvas(this.f5568f), i10, i11, null);
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
            this.f5565c = null;
            this.f5566d = f.f5508u;
            this.f5564b = new g();
        }
    }

    f() {
        this.f5513q = true;
        this.f5514r = new float[9];
        this.f5515s = new Matrix();
        this.f5516t = new Rect();
        this.f5509e = new h();
    }

    static int a(int i10, float f10) {
        return (i10 & 16777215) | (((int) (Color.alpha(i10) * f10)) << 24);
    }

    public static f b(Resources resources, int i10, Resources.Theme theme) {
        f fVar = new f();
        fVar.f5507d = j.f(resources, i10, theme);
        return fVar;
    }

    private void d(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        h hVar = this.f5509e;
        g gVar = hVar.f5564b;
        ArrayDeque arrayDeque = new ArrayDeque();
        arrayDeque.push(gVar.f5554h);
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
                        dVar.f5530b.add(cVar);
                        if (cVar.getPathName() != null) {
                            gVar.f5562p.put(cVar.getPathName(), cVar);
                        }
                        hVar.f5563a = cVar.f5545d | hVar.f5563a;
                        z10 = false;
                    } else if ("clip-path".equals(name)) {
                        b bVar = new b();
                        bVar.e(resources, attributeSet, theme, xmlPullParser);
                        dVar.f5530b.add(bVar);
                        if (bVar.getPathName() != null) {
                            gVar.f5562p.put(bVar.getPathName(), bVar);
                        }
                        hVar.f5563a = bVar.f5545d | hVar.f5563a;
                    } else if ("group".equals(name)) {
                        d dVar2 = new d();
                        dVar2.c(resources, attributeSet, theme, xmlPullParser);
                        dVar.f5530b.add(dVar2);
                        arrayDeque.push(dVar2);
                        if (dVar2.getGroupName() != null) {
                            gVar.f5562p.put(dVar2.getGroupName(), dVar2);
                        }
                        hVar.f5563a = dVar2.f5539k | hVar.f5563a;
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
        h hVar = this.f5509e;
        g gVar = hVar.f5564b;
        hVar.f5566d = f(m.g(typedArray, xmlPullParser, "tintMode", 6, -1), PorterDuff.Mode.SRC_IN);
        ColorStateList c10 = m.c(typedArray, xmlPullParser, theme, "tint", 1);
        if (c10 != null) {
            hVar.f5565c = c10;
        }
        hVar.f5567e = m.a(typedArray, xmlPullParser, "autoMirrored", 5, hVar.f5567e);
        gVar.f5557k = m.f(typedArray, xmlPullParser, "viewportWidth", 7, gVar.f5557k);
        float f10 = m.f(typedArray, xmlPullParser, "viewportHeight", 8, gVar.f5558l);
        gVar.f5558l = f10;
        if (gVar.f5557k > 0.0f) {
            if (f10 > 0.0f) {
                gVar.f5555i = typedArray.getDimension(3, gVar.f5555i);
                float dimension = typedArray.getDimension(2, gVar.f5556j);
                gVar.f5556j = dimension;
                if (gVar.f5555i > 0.0f) {
                    if (dimension > 0.0f) {
                        gVar.setAlpha(m.f(typedArray, xmlPullParser, "alpha", 4, gVar.getAlpha()));
                        String string = typedArray.getString(0);
                        if (string != null) {
                            gVar.f5560n = string;
                            gVar.f5562p.put(string, gVar);
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
        return this.f5509e.f5564b.f5562p.get(str);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean canApplyTheme() {
        Drawable drawable = this.f5507d;
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
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            drawable.draw(canvas);
            return;
        }
        copyBounds(this.f5516t);
        if (this.f5516t.width() > 0 && this.f5516t.height() > 0) {
            ColorFilter colorFilter = this.f5511o;
            if (colorFilter == null) {
                colorFilter = this.f5510i;
            }
            canvas.getMatrix(this.f5515s);
            this.f5515s.getValues(this.f5514r);
            float abs = Math.abs(this.f5514r[0]);
            float abs2 = Math.abs(this.f5514r[4]);
            float abs3 = Math.abs(this.f5514r[1]);
            float abs4 = Math.abs(this.f5514r[3]);
            if (abs3 != 0.0f || abs4 != 0.0f) {
                abs = 1.0f;
                abs2 = 1.0f;
            }
            int min = Math.min((int) RecyclerView.ItemAnimator.FLAG_MOVED, (int) (this.f5516t.width() * abs));
            int min2 = Math.min((int) RecyclerView.ItemAnimator.FLAG_MOVED, (int) (this.f5516t.height() * abs2));
            if (min > 0 && min2 > 0) {
                int save = canvas.save();
                Rect rect = this.f5516t;
                canvas.translate(rect.left, rect.top);
                if (e()) {
                    canvas.translate(this.f5516t.width(), 0.0f);
                    canvas.scale(-1.0f, 1.0f);
                }
                this.f5516t.offsetTo(0, 0);
                this.f5509e.c(min, min2);
                if (!this.f5513q) {
                    this.f5509e.j(min, min2);
                } else if (!this.f5509e.b()) {
                    this.f5509e.j(min, min2);
                    this.f5509e.i();
                }
                this.f5509e.d(canvas, colorFilter, this.f5516t);
                canvas.restoreToCount(save);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(boolean z10) {
        this.f5513q = z10;
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            return s1.a.d(drawable);
        }
        return this.f5509e.f5564b.getRootAlpha();
    }

    @Override // android.graphics.drawable.Drawable
    public int getChangingConfigurations() {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            return drawable.getChangingConfigurations();
        }
        return super.getChangingConfigurations() | this.f5509e.getChangingConfigurations();
    }

    @Override // android.graphics.drawable.Drawable
    public ColorFilter getColorFilter() {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            return s1.a.e(drawable);
        }
        return this.f5511o;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        if (this.f5507d != null) {
            return new i(this.f5507d.getConstantState());
        }
        this.f5509e.f5563a = getChangingConfigurations();
        return this.f5509e;
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ Drawable getCurrent() {
        return super.getCurrent();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            return drawable.getIntrinsicHeight();
        }
        return (int) this.f5509e.f5564b.f5556j;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            return drawable.getIntrinsicWidth();
        }
        return (int) this.f5509e.f5564b.f5555i;
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
        Drawable drawable = this.f5507d;
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
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            drawable.inflate(resources, xmlPullParser, attributeSet);
        } else {
            inflate(resources, xmlPullParser, attributeSet, null);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            drawable.invalidateSelf();
        } else {
            super.invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isAutoMirrored() {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            return s1.a.h(drawable);
        }
        return this.f5509e.f5567e;
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            return drawable.isStateful();
        }
        if (!super.isStateful()) {
            h hVar = this.f5509e;
            if (hVar != null) {
                if (!hVar.g()) {
                    ColorStateList colorStateList = this.f5509e.f5565c;
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
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            drawable.mutate();
            return this;
        }
        if (!this.f5512p && super.mutate() == this) {
            this.f5509e = new h(this.f5509e);
            this.f5512p = true;
        }
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            drawable.setBounds(rect);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        boolean z10;
        PorterDuff.Mode mode;
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            return drawable.setState(iArr);
        }
        h hVar = this.f5509e;
        ColorStateList colorStateList = hVar.f5565c;
        if (colorStateList != null && (mode = hVar.f5566d) != null) {
            this.f5510i = i(this.f5510i, colorStateList, mode);
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
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            drawable.scheduleSelf(runnable, j10);
        } else {
            super.scheduleSelf(runnable, j10);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            drawable.setAlpha(i10);
        } else if (this.f5509e.f5564b.getRootAlpha() != i10) {
            this.f5509e.f5564b.setRootAlpha(i10);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAutoMirrored(boolean z10) {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            s1.a.j(drawable, z10);
        } else {
            this.f5509e.f5567e = z10;
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
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            s1.a.n(drawable, i10);
        } else {
            setTintList(ColorStateList.valueOf(i10));
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            s1.a.o(drawable, colorStateList);
            return;
        }
        h hVar = this.f5509e;
        if (hVar.f5565c != colorStateList) {
            hVar.f5565c = colorStateList;
            this.f5510i = i(this.f5510i, colorStateList, hVar.f5566d);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            s1.a.p(drawable, mode);
            return;
        }
        h hVar = this.f5509e;
        if (hVar.f5566d != mode) {
            hVar.f5566d = mode;
            this.f5510i = i(this.f5510i, hVar.f5565c, mode);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            return drawable.setVisible(z10, z11);
        }
        return super.setVisible(z10, z11);
    }

    @Override // android.graphics.drawable.Drawable
    public void unscheduleSelf(Runnable runnable) {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            drawable.unscheduleSelf(runnable);
        } else {
            super.unscheduleSelf(runnable);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class i extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        private final Drawable.ConstantState f5575a;

        i(Drawable.ConstantState constantState) {
            this.f5575a = constantState;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public boolean canApplyTheme() {
            return this.f5575a.canApplyTheme();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5575a.getChangingConfigurations();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            f fVar = new f();
            fVar.f5507d = (VectorDrawable) this.f5575a.newDrawable();
            return fVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources) {
            f fVar = new f();
            fVar.f5507d = (VectorDrawable) this.f5575a.newDrawable(resources);
            return fVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources, Resources.Theme theme) {
            f fVar = new f();
            fVar.f5507d = (VectorDrawable) this.f5575a.newDrawable(resources, theme);
            return fVar;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            drawable.setColorFilter(colorFilter);
            return;
        }
        this.f5511o = colorFilter;
        invalidateSelf();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: androidx.vectordrawable.graphics.drawable.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class AbstractC0075f extends e {

        /* renamed from: a  reason: collision with root package name */
        protected e.b[] f5542a;

        /* renamed from: b  reason: collision with root package name */
        String f5543b;

        /* renamed from: c  reason: collision with root package name */
        int f5544c;

        /* renamed from: d  reason: collision with root package name */
        int f5545d;

        AbstractC0075f() {
            super();
            this.f5542a = null;
            this.f5544c = 0;
        }

        public boolean c() {
            return false;
        }

        public void d(Path path) {
            path.reset();
            e.b[] bVarArr = this.f5542a;
            if (bVarArr != null) {
                r1.e.j(bVarArr, path);
            }
        }

        public e.b[] getPathData() {
            return this.f5542a;
        }

        public String getPathName() {
            return this.f5543b;
        }

        public void setPathData(e.b[] bVarArr) {
            if (!r1.e.b(this.f5542a, bVarArr)) {
                this.f5542a = r1.e.f(bVarArr);
            } else {
                r1.e.k(this.f5542a, bVarArr);
            }
        }

        AbstractC0075f(AbstractC0075f abstractC0075f) {
            super();
            this.f5542a = null;
            this.f5544c = 0;
            this.f5543b = abstractC0075f.f5543b;
            this.f5545d = abstractC0075f.f5545d;
            this.f5542a = r1.e.f(abstractC0075f.f5542a);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void inflate(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        Drawable drawable = this.f5507d;
        if (drawable != null) {
            s1.a.g(drawable, resources, xmlPullParser, attributeSet, theme);
            return;
        }
        h hVar = this.f5509e;
        hVar.f5564b = new g();
        TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5478a);
        h(i10, xmlPullParser, theme);
        i10.recycle();
        hVar.f5563a = getChangingConfigurations();
        hVar.f5573k = true;
        d(resources, xmlPullParser, attributeSet, theme);
        this.f5510i = i(this.f5510i, hVar.f5565c, hVar.f5566d);
    }

    f(h hVar) {
        this.f5513q = true;
        this.f5514r = new float[9];
        this.f5515s = new Matrix();
        this.f5516t = new Rect();
        this.f5509e = hVar;
        this.f5510i = i(this.f5510i, hVar.f5565c, hVar.f5566d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends AbstractC0075f {

        /* renamed from: e  reason: collision with root package name */
        private int[] f5517e;

        /* renamed from: f  reason: collision with root package name */
        q1.d f5518f;

        /* renamed from: g  reason: collision with root package name */
        float f5519g;

        /* renamed from: h  reason: collision with root package name */
        q1.d f5520h;

        /* renamed from: i  reason: collision with root package name */
        float f5521i;

        /* renamed from: j  reason: collision with root package name */
        float f5522j;

        /* renamed from: k  reason: collision with root package name */
        float f5523k;

        /* renamed from: l  reason: collision with root package name */
        float f5524l;

        /* renamed from: m  reason: collision with root package name */
        float f5525m;

        /* renamed from: n  reason: collision with root package name */
        Paint.Cap f5526n;

        /* renamed from: o  reason: collision with root package name */
        Paint.Join f5527o;

        /* renamed from: p  reason: collision with root package name */
        float f5528p;

        c() {
            this.f5519g = 0.0f;
            this.f5521i = 1.0f;
            this.f5522j = 1.0f;
            this.f5523k = 0.0f;
            this.f5524l = 1.0f;
            this.f5525m = 0.0f;
            this.f5526n = Paint.Cap.BUTT;
            this.f5527o = Paint.Join.MITER;
            this.f5528p = 4.0f;
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
            this.f5517e = null;
            if (!m.h(xmlPullParser, "pathData")) {
                return;
            }
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5543b = string;
            }
            String string2 = typedArray.getString(2);
            if (string2 != null) {
                this.f5542a = r1.e.d(string2);
            }
            this.f5520h = m.e(typedArray, xmlPullParser, theme, "fillColor", 1, 0);
            this.f5522j = m.f(typedArray, xmlPullParser, "fillAlpha", 12, this.f5522j);
            this.f5526n = e(m.g(typedArray, xmlPullParser, "strokeLineCap", 8, -1), this.f5526n);
            this.f5527o = f(m.g(typedArray, xmlPullParser, "strokeLineJoin", 9, -1), this.f5527o);
            this.f5528p = m.f(typedArray, xmlPullParser, "strokeMiterLimit", 10, this.f5528p);
            this.f5518f = m.e(typedArray, xmlPullParser, theme, "strokeColor", 3, 0);
            this.f5521i = m.f(typedArray, xmlPullParser, "strokeAlpha", 11, this.f5521i);
            this.f5519g = m.f(typedArray, xmlPullParser, "strokeWidth", 4, this.f5519g);
            this.f5524l = m.f(typedArray, xmlPullParser, "trimPathEnd", 6, this.f5524l);
            this.f5525m = m.f(typedArray, xmlPullParser, "trimPathOffset", 7, this.f5525m);
            this.f5523k = m.f(typedArray, xmlPullParser, "trimPathStart", 5, this.f5523k);
            this.f5544c = m.g(typedArray, xmlPullParser, "fillType", 13, this.f5544c);
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean a() {
            if (!this.f5520h.i() && !this.f5518f.i()) {
                return false;
            }
            return true;
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean b(int[] iArr) {
            return this.f5518f.j(iArr) | this.f5520h.j(iArr);
        }

        public void g(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5480c);
            h(i10, xmlPullParser, theme);
            i10.recycle();
        }

        float getFillAlpha() {
            return this.f5522j;
        }

        int getFillColor() {
            return this.f5520h.e();
        }

        float getStrokeAlpha() {
            return this.f5521i;
        }

        int getStrokeColor() {
            return this.f5518f.e();
        }

        float getStrokeWidth() {
            return this.f5519g;
        }

        float getTrimPathEnd() {
            return this.f5524l;
        }

        float getTrimPathOffset() {
            return this.f5525m;
        }

        float getTrimPathStart() {
            return this.f5523k;
        }

        void setFillAlpha(float f10) {
            this.f5522j = f10;
        }

        void setFillColor(int i10) {
            this.f5520h.k(i10);
        }

        void setStrokeAlpha(float f10) {
            this.f5521i = f10;
        }

        void setStrokeColor(int i10) {
            this.f5518f.k(i10);
        }

        void setStrokeWidth(float f10) {
            this.f5519g = f10;
        }

        void setTrimPathEnd(float f10) {
            this.f5524l = f10;
        }

        void setTrimPathOffset(float f10) {
            this.f5525m = f10;
        }

        void setTrimPathStart(float f10) {
            this.f5523k = f10;
        }

        c(c cVar) {
            super(cVar);
            this.f5519g = 0.0f;
            this.f5521i = 1.0f;
            this.f5522j = 1.0f;
            this.f5523k = 0.0f;
            this.f5524l = 1.0f;
            this.f5525m = 0.0f;
            this.f5526n = Paint.Cap.BUTT;
            this.f5527o = Paint.Join.MITER;
            this.f5528p = 4.0f;
            this.f5517e = cVar.f5517e;
            this.f5518f = cVar.f5518f;
            this.f5519g = cVar.f5519g;
            this.f5521i = cVar.f5521i;
            this.f5520h = cVar.f5520h;
            this.f5544c = cVar.f5544c;
            this.f5522j = cVar.f5522j;
            this.f5523k = cVar.f5523k;
            this.f5524l = cVar.f5524l;
            this.f5525m = cVar.f5525m;
            this.f5526n = cVar.f5526n;
            this.f5527o = cVar.f5527o;
            this.f5528p = cVar.f5528p;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g {

        /* renamed from: q  reason: collision with root package name */
        private static final Matrix f5546q = new Matrix();

        /* renamed from: a  reason: collision with root package name */
        private final Path f5547a;

        /* renamed from: b  reason: collision with root package name */
        private final Path f5548b;

        /* renamed from: c  reason: collision with root package name */
        private final Matrix f5549c;

        /* renamed from: d  reason: collision with root package name */
        Paint f5550d;

        /* renamed from: e  reason: collision with root package name */
        Paint f5551e;

        /* renamed from: f  reason: collision with root package name */
        private PathMeasure f5552f;

        /* renamed from: g  reason: collision with root package name */
        private int f5553g;

        /* renamed from: h  reason: collision with root package name */
        final d f5554h;

        /* renamed from: i  reason: collision with root package name */
        float f5555i;

        /* renamed from: j  reason: collision with root package name */
        float f5556j;

        /* renamed from: k  reason: collision with root package name */
        float f5557k;

        /* renamed from: l  reason: collision with root package name */
        float f5558l;

        /* renamed from: m  reason: collision with root package name */
        int f5559m;

        /* renamed from: n  reason: collision with root package name */
        String f5560n;

        /* renamed from: o  reason: collision with root package name */
        Boolean f5561o;

        /* renamed from: p  reason: collision with root package name */
        final u0.a f5562p;

        g() {
            this.f5549c = new Matrix();
            this.f5555i = 0.0f;
            this.f5556j = 0.0f;
            this.f5557k = 0.0f;
            this.f5558l = 0.0f;
            this.f5559m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f5560n = null;
            this.f5561o = null;
            this.f5562p = new u0.a();
            this.f5554h = new d();
            this.f5547a = new Path();
            this.f5548b = new Path();
        }

        private static float a(float f10, float f11, float f12, float f13) {
            return (f10 * f13) - (f11 * f12);
        }

        private void c(d dVar, Matrix matrix, Canvas canvas, int i10, int i11, ColorFilter colorFilter) {
            d dVar2 = dVar;
            dVar2.f5529a.set(matrix);
            dVar2.f5529a.preConcat(dVar2.f5538j);
            canvas.save();
            int i12 = 0;
            while (i12 < dVar2.f5530b.size()) {
                e eVar = (e) dVar2.f5530b.get(i12);
                if (eVar instanceof d) {
                    c((d) eVar, dVar2.f5529a, canvas, i10, i11, colorFilter);
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
            float f10 = i10 / this.f5557k;
            float f11 = i11 / this.f5558l;
            float min = Math.min(f10, f11);
            Matrix matrix = dVar.f5529a;
            this.f5549c.set(matrix);
            this.f5549c.postScale(f10, f11);
            float e10 = e(matrix);
            if (e10 != 0.0f) {
                abstractC0075f.d(this.f5547a);
                Path path = this.f5547a;
                this.f5548b.reset();
                if (abstractC0075f.c()) {
                    Path path2 = this.f5548b;
                    if (abstractC0075f.f5544c == 0) {
                        fillType2 = Path.FillType.WINDING;
                    } else {
                        fillType2 = Path.FillType.EVEN_ODD;
                    }
                    path2.setFillType(fillType2);
                    this.f5548b.addPath(path, this.f5549c);
                    canvas.clipPath(this.f5548b);
                    return;
                }
                c cVar = (c) abstractC0075f;
                float f12 = cVar.f5523k;
                if (f12 != 0.0f || cVar.f5524l != 1.0f) {
                    float f13 = cVar.f5525m;
                    float f14 = (f12 + f13) % 1.0f;
                    float f15 = (cVar.f5524l + f13) % 1.0f;
                    if (this.f5552f == null) {
                        this.f5552f = new PathMeasure();
                    }
                    this.f5552f.setPath(this.f5547a, false);
                    float length = this.f5552f.getLength();
                    float f16 = f14 * length;
                    float f17 = f15 * length;
                    path.reset();
                    if (f16 > f17) {
                        this.f5552f.getSegment(f16, length, path, true);
                        this.f5552f.getSegment(0.0f, f17, path, true);
                    } else {
                        this.f5552f.getSegment(f16, f17, path, true);
                    }
                    path.rLineTo(0.0f, 0.0f);
                }
                this.f5548b.addPath(path, this.f5549c);
                if (cVar.f5520h.l()) {
                    q1.d dVar2 = cVar.f5520h;
                    if (this.f5551e == null) {
                        Paint paint = new Paint(1);
                        this.f5551e = paint;
                        paint.setStyle(Paint.Style.FILL);
                    }
                    Paint paint2 = this.f5551e;
                    if (dVar2.h()) {
                        Shader f18 = dVar2.f();
                        f18.setLocalMatrix(this.f5549c);
                        paint2.setShader(f18);
                        paint2.setAlpha(Math.round(cVar.f5522j * 255.0f));
                    } else {
                        paint2.setShader(null);
                        paint2.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        paint2.setColor(f.a(dVar2.e(), cVar.f5522j));
                    }
                    paint2.setColorFilter(colorFilter);
                    Path path3 = this.f5548b;
                    if (cVar.f5544c == 0) {
                        fillType = Path.FillType.WINDING;
                    } else {
                        fillType = Path.FillType.EVEN_ODD;
                    }
                    path3.setFillType(fillType);
                    canvas.drawPath(this.f5548b, paint2);
                }
                if (cVar.f5518f.l()) {
                    q1.d dVar3 = cVar.f5518f;
                    if (this.f5550d == null) {
                        Paint paint3 = new Paint(1);
                        this.f5550d = paint3;
                        paint3.setStyle(Paint.Style.STROKE);
                    }
                    Paint paint4 = this.f5550d;
                    Paint.Join join = cVar.f5527o;
                    if (join != null) {
                        paint4.setStrokeJoin(join);
                    }
                    Paint.Cap cap = cVar.f5526n;
                    if (cap != null) {
                        paint4.setStrokeCap(cap);
                    }
                    paint4.setStrokeMiter(cVar.f5528p);
                    if (dVar3.h()) {
                        Shader f19 = dVar3.f();
                        f19.setLocalMatrix(this.f5549c);
                        paint4.setShader(f19);
                        paint4.setAlpha(Math.round(cVar.f5521i * 255.0f));
                    } else {
                        paint4.setShader(null);
                        paint4.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        paint4.setColor(f.a(dVar3.e(), cVar.f5521i));
                    }
                    paint4.setColorFilter(colorFilter);
                    paint4.setStrokeWidth(cVar.f5519g * min * e10);
                    canvas.drawPath(this.f5548b, paint4);
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
            c(this.f5554h, f5546q, canvas, i10, i11, colorFilter);
        }

        public boolean f() {
            if (this.f5561o == null) {
                this.f5561o = Boolean.valueOf(this.f5554h.a());
            }
            return this.f5561o.booleanValue();
        }

        public boolean g(int[] iArr) {
            return this.f5554h.b(iArr);
        }

        public float getAlpha() {
            return getRootAlpha() / 255.0f;
        }

        public int getRootAlpha() {
            return this.f5559m;
        }

        public void setAlpha(float f10) {
            setRootAlpha((int) (f10 * 255.0f));
        }

        public void setRootAlpha(int i10) {
            this.f5559m = i10;
        }

        g(g gVar) {
            this.f5549c = new Matrix();
            this.f5555i = 0.0f;
            this.f5556j = 0.0f;
            this.f5557k = 0.0f;
            this.f5558l = 0.0f;
            this.f5559m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f5560n = null;
            this.f5561o = null;
            u0.a aVar = new u0.a();
            this.f5562p = aVar;
            this.f5554h = new d(gVar.f5554h, aVar);
            this.f5547a = new Path(gVar.f5547a);
            this.f5548b = new Path(gVar.f5548b);
            this.f5555i = gVar.f5555i;
            this.f5556j = gVar.f5556j;
            this.f5557k = gVar.f5557k;
            this.f5558l = gVar.f5558l;
            this.f5553g = gVar.f5553g;
            this.f5559m = gVar.f5559m;
            this.f5560n = gVar.f5560n;
            String str = gVar.f5560n;
            if (str != null) {
                aVar.put(str, this);
            }
            this.f5561o = gVar.f5561o;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends e {

        /* renamed from: a  reason: collision with root package name */
        final Matrix f5529a;

        /* renamed from: b  reason: collision with root package name */
        final ArrayList f5530b;

        /* renamed from: c  reason: collision with root package name */
        float f5531c;

        /* renamed from: d  reason: collision with root package name */
        private float f5532d;

        /* renamed from: e  reason: collision with root package name */
        private float f5533e;

        /* renamed from: f  reason: collision with root package name */
        private float f5534f;

        /* renamed from: g  reason: collision with root package name */
        private float f5535g;

        /* renamed from: h  reason: collision with root package name */
        private float f5536h;

        /* renamed from: i  reason: collision with root package name */
        private float f5537i;

        /* renamed from: j  reason: collision with root package name */
        final Matrix f5538j;

        /* renamed from: k  reason: collision with root package name */
        int f5539k;

        /* renamed from: l  reason: collision with root package name */
        private int[] f5540l;

        /* renamed from: m  reason: collision with root package name */
        private String f5541m;

        d(d dVar, u0.a aVar) {
            super();
            AbstractC0075f bVar;
            this.f5529a = new Matrix();
            this.f5530b = new ArrayList();
            this.f5531c = 0.0f;
            this.f5532d = 0.0f;
            this.f5533e = 0.0f;
            this.f5534f = 1.0f;
            this.f5535g = 1.0f;
            this.f5536h = 0.0f;
            this.f5537i = 0.0f;
            Matrix matrix = new Matrix();
            this.f5538j = matrix;
            this.f5541m = null;
            this.f5531c = dVar.f5531c;
            this.f5532d = dVar.f5532d;
            this.f5533e = dVar.f5533e;
            this.f5534f = dVar.f5534f;
            this.f5535g = dVar.f5535g;
            this.f5536h = dVar.f5536h;
            this.f5537i = dVar.f5537i;
            this.f5540l = dVar.f5540l;
            String str = dVar.f5541m;
            this.f5541m = str;
            this.f5539k = dVar.f5539k;
            if (str != null) {
                aVar.put(str, this);
            }
            matrix.set(dVar.f5538j);
            ArrayList arrayList = dVar.f5530b;
            for (int i10 = 0; i10 < arrayList.size(); i10++) {
                Object obj = arrayList.get(i10);
                if (obj instanceof d) {
                    this.f5530b.add(new d((d) obj, aVar));
                } else {
                    if (obj instanceof c) {
                        bVar = new c((c) obj);
                    } else if (obj instanceof b) {
                        bVar = new b((b) obj);
                    } else {
                        throw new IllegalStateException("Unknown object in the tree!");
                    }
                    this.f5530b.add(bVar);
                    Object obj2 = bVar.f5543b;
                    if (obj2 != null) {
                        aVar.put(obj2, bVar);
                    }
                }
            }
        }

        private void d() {
            this.f5538j.reset();
            this.f5538j.postTranslate(-this.f5532d, -this.f5533e);
            this.f5538j.postScale(this.f5534f, this.f5535g);
            this.f5538j.postRotate(this.f5531c, 0.0f, 0.0f);
            this.f5538j.postTranslate(this.f5536h + this.f5532d, this.f5537i + this.f5533e);
        }

        private void e(TypedArray typedArray, XmlPullParser xmlPullParser) {
            this.f5540l = null;
            this.f5531c = m.f(typedArray, xmlPullParser, ViewProps.ROTATION, 5, this.f5531c);
            this.f5532d = typedArray.getFloat(1, this.f5532d);
            this.f5533e = typedArray.getFloat(2, this.f5533e);
            this.f5534f = m.f(typedArray, xmlPullParser, ViewProps.SCALE_X, 3, this.f5534f);
            this.f5535g = m.f(typedArray, xmlPullParser, ViewProps.SCALE_Y, 4, this.f5535g);
            this.f5536h = m.f(typedArray, xmlPullParser, ViewProps.TRANSLATE_X, 6, this.f5536h);
            this.f5537i = m.f(typedArray, xmlPullParser, ViewProps.TRANSLATE_Y, 7, this.f5537i);
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5541m = string;
            }
            d();
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean a() {
            for (int i10 = 0; i10 < this.f5530b.size(); i10++) {
                if (((e) this.f5530b.get(i10)).a()) {
                    return true;
                }
            }
            return false;
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean b(int[] iArr) {
            boolean z10 = false;
            for (int i10 = 0; i10 < this.f5530b.size(); i10++) {
                z10 |= ((e) this.f5530b.get(i10)).b(iArr);
            }
            return z10;
        }

        public void c(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5479b);
            e(i10, xmlPullParser);
            i10.recycle();
        }

        public String getGroupName() {
            return this.f5541m;
        }

        public Matrix getLocalMatrix() {
            return this.f5538j;
        }

        public float getPivotX() {
            return this.f5532d;
        }

        public float getPivotY() {
            return this.f5533e;
        }

        public float getRotation() {
            return this.f5531c;
        }

        public float getScaleX() {
            return this.f5534f;
        }

        public float getScaleY() {
            return this.f5535g;
        }

        public float getTranslateX() {
            return this.f5536h;
        }

        public float getTranslateY() {
            return this.f5537i;
        }

        public void setPivotX(float f10) {
            if (f10 != this.f5532d) {
                this.f5532d = f10;
                d();
            }
        }

        public void setPivotY(float f10) {
            if (f10 != this.f5533e) {
                this.f5533e = f10;
                d();
            }
        }

        public void setRotation(float f10) {
            if (f10 != this.f5531c) {
                this.f5531c = f10;
                d();
            }
        }

        public void setScaleX(float f10) {
            if (f10 != this.f5534f) {
                this.f5534f = f10;
                d();
            }
        }

        public void setScaleY(float f10) {
            if (f10 != this.f5535g) {
                this.f5535g = f10;
                d();
            }
        }

        public void setTranslateX(float f10) {
            if (f10 != this.f5536h) {
                this.f5536h = f10;
                d();
            }
        }

        public void setTranslateY(float f10) {
            if (f10 != this.f5537i) {
                this.f5537i = f10;
                d();
            }
        }

        d() {
            super();
            this.f5529a = new Matrix();
            this.f5530b = new ArrayList();
            this.f5531c = 0.0f;
            this.f5532d = 0.0f;
            this.f5533e = 0.0f;
            this.f5534f = 1.0f;
            this.f5535g = 1.0f;
            this.f5536h = 0.0f;
            this.f5537i = 0.0f;
            this.f5538j = new Matrix();
            this.f5541m = null;
        }
    }
}
