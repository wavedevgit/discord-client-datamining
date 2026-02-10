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
    static final PorterDuff.Mode f5518u = PorterDuff.Mode.SRC_IN;

    /* renamed from: e  reason: collision with root package name */
    private h f5519e;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuffColorFilter f5520i;

    /* renamed from: o  reason: collision with root package name */
    private ColorFilter f5521o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f5522p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f5523q;

    /* renamed from: r  reason: collision with root package name */
    private final float[] f5524r;

    /* renamed from: s  reason: collision with root package name */
    private final Matrix f5525s;

    /* renamed from: t  reason: collision with root package name */
    private final Rect f5526t;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends AbstractC0071f {
        b() {
        }

        private void f(TypedArray typedArray, XmlPullParser xmlPullParser) {
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5553b = string;
            }
            String string2 = typedArray.getString(1);
            if (string2 != null) {
                this.f5552a = r1.e.d(string2);
            }
            this.f5554c = m.g(typedArray, xmlPullParser, "fillType", 2, 0);
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.AbstractC0071f
        public boolean c() {
            return true;
        }

        public void e(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            if (!m.h(xmlPullParser, "pathData")) {
                return;
            }
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5491d);
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
        int f5573a;

        /* renamed from: b  reason: collision with root package name */
        g f5574b;

        /* renamed from: c  reason: collision with root package name */
        ColorStateList f5575c;

        /* renamed from: d  reason: collision with root package name */
        PorterDuff.Mode f5576d;

        /* renamed from: e  reason: collision with root package name */
        boolean f5577e;

        /* renamed from: f  reason: collision with root package name */
        Bitmap f5578f;

        /* renamed from: g  reason: collision with root package name */
        ColorStateList f5579g;

        /* renamed from: h  reason: collision with root package name */
        PorterDuff.Mode f5580h;

        /* renamed from: i  reason: collision with root package name */
        int f5581i;

        /* renamed from: j  reason: collision with root package name */
        boolean f5582j;

        /* renamed from: k  reason: collision with root package name */
        boolean f5583k;

        /* renamed from: l  reason: collision with root package name */
        Paint f5584l;

        h(h hVar) {
            this.f5575c = null;
            this.f5576d = f.f5518u;
            if (hVar != null) {
                this.f5573a = hVar.f5573a;
                g gVar = new g(hVar.f5574b);
                this.f5574b = gVar;
                if (hVar.f5574b.f5561e != null) {
                    gVar.f5561e = new Paint(hVar.f5574b.f5561e);
                }
                if (hVar.f5574b.f5560d != null) {
                    this.f5574b.f5560d = new Paint(hVar.f5574b.f5560d);
                }
                this.f5575c = hVar.f5575c;
                this.f5576d = hVar.f5576d;
                this.f5577e = hVar.f5577e;
            }
        }

        public boolean a(int i10, int i11) {
            if (i10 == this.f5578f.getWidth() && i11 == this.f5578f.getHeight()) {
                return true;
            }
            return false;
        }

        public boolean b() {
            if (!this.f5583k && this.f5579g == this.f5575c && this.f5580h == this.f5576d && this.f5582j == this.f5577e && this.f5581i == this.f5574b.getRootAlpha()) {
                return true;
            }
            return false;
        }

        public void c(int i10, int i11) {
            if (this.f5578f != null && a(i10, i11)) {
                return;
            }
            this.f5578f = Bitmap.createBitmap(i10, i11, Bitmap.Config.ARGB_8888);
            this.f5583k = true;
        }

        public void d(Canvas canvas, ColorFilter colorFilter, Rect rect) {
            canvas.drawBitmap(this.f5578f, (Rect) null, rect, e(colorFilter));
        }

        public Paint e(ColorFilter colorFilter) {
            if (!f() && colorFilter == null) {
                return null;
            }
            if (this.f5584l == null) {
                Paint paint = new Paint();
                this.f5584l = paint;
                paint.setFilterBitmap(true);
            }
            this.f5584l.setAlpha(this.f5574b.getRootAlpha());
            this.f5584l.setColorFilter(colorFilter);
            return this.f5584l;
        }

        public boolean f() {
            if (this.f5574b.getRootAlpha() < 255) {
                return true;
            }
            return false;
        }

        public boolean g() {
            return this.f5574b.f();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5573a;
        }

        public boolean h(int[] iArr) {
            boolean g10 = this.f5574b.g(iArr);
            this.f5583k |= g10;
            return g10;
        }

        public void i() {
            this.f5579g = this.f5575c;
            this.f5580h = this.f5576d;
            this.f5581i = this.f5574b.getRootAlpha();
            this.f5582j = this.f5577e;
            this.f5583k = false;
        }

        public void j(int i10, int i11) {
            this.f5578f.eraseColor(0);
            this.f5574b.b(new Canvas(this.f5578f), i10, i11, null);
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
            this.f5575c = null;
            this.f5576d = f.f5518u;
            this.f5574b = new g();
        }
    }

    f() {
        this.f5523q = true;
        this.f5524r = new float[9];
        this.f5525s = new Matrix();
        this.f5526t = new Rect();
        this.f5519e = new h();
    }

    static int a(int i10, float f10) {
        return (i10 & 16777215) | (((int) (Color.alpha(i10) * f10)) << 24);
    }

    public static f b(Resources resources, int i10, Resources.Theme theme) {
        f fVar = new f();
        fVar.f5517d = j.f(resources, i10, theme);
        return fVar;
    }

    private void d(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        h hVar = this.f5519e;
        g gVar = hVar.f5574b;
        ArrayDeque arrayDeque = new ArrayDeque();
        arrayDeque.push(gVar.f5564h);
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
                        dVar.f5540b.add(cVar);
                        if (cVar.getPathName() != null) {
                            gVar.f5572p.put(cVar.getPathName(), cVar);
                        }
                        hVar.f5573a = cVar.f5555d | hVar.f5573a;
                        z10 = false;
                    } else if ("clip-path".equals(name)) {
                        b bVar = new b();
                        bVar.e(resources, attributeSet, theme, xmlPullParser);
                        dVar.f5540b.add(bVar);
                        if (bVar.getPathName() != null) {
                            gVar.f5572p.put(bVar.getPathName(), bVar);
                        }
                        hVar.f5573a = bVar.f5555d | hVar.f5573a;
                    } else if ("group".equals(name)) {
                        d dVar2 = new d();
                        dVar2.c(resources, attributeSet, theme, xmlPullParser);
                        dVar.f5540b.add(dVar2);
                        arrayDeque.push(dVar2);
                        if (dVar2.getGroupName() != null) {
                            gVar.f5572p.put(dVar2.getGroupName(), dVar2);
                        }
                        hVar.f5573a = dVar2.f5549k | hVar.f5573a;
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
        h hVar = this.f5519e;
        g gVar = hVar.f5574b;
        hVar.f5576d = f(m.g(typedArray, xmlPullParser, "tintMode", 6, -1), PorterDuff.Mode.SRC_IN);
        ColorStateList c10 = m.c(typedArray, xmlPullParser, theme, "tint", 1);
        if (c10 != null) {
            hVar.f5575c = c10;
        }
        hVar.f5577e = m.a(typedArray, xmlPullParser, "autoMirrored", 5, hVar.f5577e);
        gVar.f5567k = m.f(typedArray, xmlPullParser, "viewportWidth", 7, gVar.f5567k);
        float f10 = m.f(typedArray, xmlPullParser, "viewportHeight", 8, gVar.f5568l);
        gVar.f5568l = f10;
        if (gVar.f5567k > 0.0f) {
            if (f10 > 0.0f) {
                gVar.f5565i = typedArray.getDimension(3, gVar.f5565i);
                float dimension = typedArray.getDimension(2, gVar.f5566j);
                gVar.f5566j = dimension;
                if (gVar.f5565i > 0.0f) {
                    if (dimension > 0.0f) {
                        gVar.setAlpha(m.f(typedArray, xmlPullParser, "alpha", 4, gVar.getAlpha()));
                        String string = typedArray.getString(0);
                        if (string != null) {
                            gVar.f5570n = string;
                            gVar.f5572p.put(string, gVar);
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
        return this.f5519e.f5574b.f5572p.get(str);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean canApplyTheme() {
        Drawable drawable = this.f5517d;
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
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            drawable.draw(canvas);
            return;
        }
        copyBounds(this.f5526t);
        if (this.f5526t.width() > 0 && this.f5526t.height() > 0) {
            ColorFilter colorFilter = this.f5521o;
            if (colorFilter == null) {
                colorFilter = this.f5520i;
            }
            canvas.getMatrix(this.f5525s);
            this.f5525s.getValues(this.f5524r);
            float abs = Math.abs(this.f5524r[0]);
            float abs2 = Math.abs(this.f5524r[4]);
            float abs3 = Math.abs(this.f5524r[1]);
            float abs4 = Math.abs(this.f5524r[3]);
            if (abs3 != 0.0f || abs4 != 0.0f) {
                abs = 1.0f;
                abs2 = 1.0f;
            }
            int min = Math.min((int) RecyclerView.ItemAnimator.FLAG_MOVED, (int) (this.f5526t.width() * abs));
            int min2 = Math.min((int) RecyclerView.ItemAnimator.FLAG_MOVED, (int) (this.f5526t.height() * abs2));
            if (min > 0 && min2 > 0) {
                int save = canvas.save();
                Rect rect = this.f5526t;
                canvas.translate(rect.left, rect.top);
                if (e()) {
                    canvas.translate(this.f5526t.width(), 0.0f);
                    canvas.scale(-1.0f, 1.0f);
                }
                this.f5526t.offsetTo(0, 0);
                this.f5519e.c(min, min2);
                if (!this.f5523q) {
                    this.f5519e.j(min, min2);
                } else if (!this.f5519e.b()) {
                    this.f5519e.j(min, min2);
                    this.f5519e.i();
                }
                this.f5519e.d(canvas, colorFilter, this.f5526t);
                canvas.restoreToCount(save);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(boolean z10) {
        this.f5523q = z10;
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            return s1.a.d(drawable);
        }
        return this.f5519e.f5574b.getRootAlpha();
    }

    @Override // android.graphics.drawable.Drawable
    public int getChangingConfigurations() {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            return drawable.getChangingConfigurations();
        }
        return super.getChangingConfigurations() | this.f5519e.getChangingConfigurations();
    }

    @Override // android.graphics.drawable.Drawable
    public ColorFilter getColorFilter() {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            return s1.a.e(drawable);
        }
        return this.f5521o;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        if (this.f5517d != null) {
            return new i(this.f5517d.getConstantState());
        }
        this.f5519e.f5573a = getChangingConfigurations();
        return this.f5519e;
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ Drawable getCurrent() {
        return super.getCurrent();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            return drawable.getIntrinsicHeight();
        }
        return (int) this.f5519e.f5574b.f5566j;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            return drawable.getIntrinsicWidth();
        }
        return (int) this.f5519e.f5574b.f5565i;
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
        Drawable drawable = this.f5517d;
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
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            drawable.inflate(resources, xmlPullParser, attributeSet);
        } else {
            inflate(resources, xmlPullParser, attributeSet, null);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            drawable.invalidateSelf();
        } else {
            super.invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isAutoMirrored() {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            return s1.a.h(drawable);
        }
        return this.f5519e.f5577e;
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            return drawable.isStateful();
        }
        if (!super.isStateful()) {
            h hVar = this.f5519e;
            if (hVar != null) {
                if (!hVar.g()) {
                    ColorStateList colorStateList = this.f5519e.f5575c;
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
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            drawable.mutate();
            return this;
        }
        if (!this.f5522p && super.mutate() == this) {
            this.f5519e = new h(this.f5519e);
            this.f5522p = true;
        }
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            drawable.setBounds(rect);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        boolean z10;
        PorterDuff.Mode mode;
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            return drawable.setState(iArr);
        }
        h hVar = this.f5519e;
        ColorStateList colorStateList = hVar.f5575c;
        if (colorStateList != null && (mode = hVar.f5576d) != null) {
            this.f5520i = i(this.f5520i, colorStateList, mode);
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
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            drawable.scheduleSelf(runnable, j10);
        } else {
            super.scheduleSelf(runnable, j10);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            drawable.setAlpha(i10);
        } else if (this.f5519e.f5574b.getRootAlpha() != i10) {
            this.f5519e.f5574b.setRootAlpha(i10);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAutoMirrored(boolean z10) {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            s1.a.j(drawable, z10);
        } else {
            this.f5519e.f5577e = z10;
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
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            s1.a.n(drawable, i10);
        } else {
            setTintList(ColorStateList.valueOf(i10));
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            s1.a.o(drawable, colorStateList);
            return;
        }
        h hVar = this.f5519e;
        if (hVar.f5575c != colorStateList) {
            hVar.f5575c = colorStateList;
            this.f5520i = i(this.f5520i, colorStateList, hVar.f5576d);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            s1.a.p(drawable, mode);
            return;
        }
        h hVar = this.f5519e;
        if (hVar.f5576d != mode) {
            hVar.f5576d = mode;
            this.f5520i = i(this.f5520i, hVar.f5575c, mode);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            return drawable.setVisible(z10, z11);
        }
        return super.setVisible(z10, z11);
    }

    @Override // android.graphics.drawable.Drawable
    public void unscheduleSelf(Runnable runnable) {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            drawable.unscheduleSelf(runnable);
        } else {
            super.unscheduleSelf(runnable);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class i extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        private final Drawable.ConstantState f5585a;

        i(Drawable.ConstantState constantState) {
            this.f5585a = constantState;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public boolean canApplyTheme() {
            return this.f5585a.canApplyTheme();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5585a.getChangingConfigurations();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            f fVar = new f();
            fVar.f5517d = (VectorDrawable) this.f5585a.newDrawable();
            return fVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources) {
            f fVar = new f();
            fVar.f5517d = (VectorDrawable) this.f5585a.newDrawable(resources);
            return fVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources, Resources.Theme theme) {
            f fVar = new f();
            fVar.f5517d = (VectorDrawable) this.f5585a.newDrawable(resources, theme);
            return fVar;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            drawable.setColorFilter(colorFilter);
            return;
        }
        this.f5521o = colorFilter;
        invalidateSelf();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: androidx.vectordrawable.graphics.drawable.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class AbstractC0071f extends e {

        /* renamed from: a  reason: collision with root package name */
        protected e.b[] f5552a;

        /* renamed from: b  reason: collision with root package name */
        String f5553b;

        /* renamed from: c  reason: collision with root package name */
        int f5554c;

        /* renamed from: d  reason: collision with root package name */
        int f5555d;

        AbstractC0071f() {
            super();
            this.f5552a = null;
            this.f5554c = 0;
        }

        public boolean c() {
            return false;
        }

        public void d(Path path) {
            path.reset();
            e.b[] bVarArr = this.f5552a;
            if (bVarArr != null) {
                r1.e.j(bVarArr, path);
            }
        }

        public e.b[] getPathData() {
            return this.f5552a;
        }

        public String getPathName() {
            return this.f5553b;
        }

        public void setPathData(e.b[] bVarArr) {
            if (!r1.e.b(this.f5552a, bVarArr)) {
                this.f5552a = r1.e.f(bVarArr);
            } else {
                r1.e.k(this.f5552a, bVarArr);
            }
        }

        AbstractC0071f(AbstractC0071f abstractC0071f) {
            super();
            this.f5552a = null;
            this.f5554c = 0;
            this.f5553b = abstractC0071f.f5553b;
            this.f5555d = abstractC0071f.f5555d;
            this.f5552a = r1.e.f(abstractC0071f.f5552a);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void inflate(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        Drawable drawable = this.f5517d;
        if (drawable != null) {
            s1.a.g(drawable, resources, xmlPullParser, attributeSet, theme);
            return;
        }
        h hVar = this.f5519e;
        hVar.f5574b = new g();
        TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5488a);
        h(i10, xmlPullParser, theme);
        i10.recycle();
        hVar.f5573a = getChangingConfigurations();
        hVar.f5583k = true;
        d(resources, xmlPullParser, attributeSet, theme);
        this.f5520i = i(this.f5520i, hVar.f5575c, hVar.f5576d);
    }

    f(h hVar) {
        this.f5523q = true;
        this.f5524r = new float[9];
        this.f5525s = new Matrix();
        this.f5526t = new Rect();
        this.f5519e = hVar;
        this.f5520i = i(this.f5520i, hVar.f5575c, hVar.f5576d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends AbstractC0071f {

        /* renamed from: e  reason: collision with root package name */
        private int[] f5527e;

        /* renamed from: f  reason: collision with root package name */
        q1.d f5528f;

        /* renamed from: g  reason: collision with root package name */
        float f5529g;

        /* renamed from: h  reason: collision with root package name */
        q1.d f5530h;

        /* renamed from: i  reason: collision with root package name */
        float f5531i;

        /* renamed from: j  reason: collision with root package name */
        float f5532j;

        /* renamed from: k  reason: collision with root package name */
        float f5533k;

        /* renamed from: l  reason: collision with root package name */
        float f5534l;

        /* renamed from: m  reason: collision with root package name */
        float f5535m;

        /* renamed from: n  reason: collision with root package name */
        Paint.Cap f5536n;

        /* renamed from: o  reason: collision with root package name */
        Paint.Join f5537o;

        /* renamed from: p  reason: collision with root package name */
        float f5538p;

        c() {
            this.f5529g = 0.0f;
            this.f5531i = 1.0f;
            this.f5532j = 1.0f;
            this.f5533k = 0.0f;
            this.f5534l = 1.0f;
            this.f5535m = 0.0f;
            this.f5536n = Paint.Cap.BUTT;
            this.f5537o = Paint.Join.MITER;
            this.f5538p = 4.0f;
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
            this.f5527e = null;
            if (!m.h(xmlPullParser, "pathData")) {
                return;
            }
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5553b = string;
            }
            String string2 = typedArray.getString(2);
            if (string2 != null) {
                this.f5552a = r1.e.d(string2);
            }
            this.f5530h = m.e(typedArray, xmlPullParser, theme, "fillColor", 1, 0);
            this.f5532j = m.f(typedArray, xmlPullParser, "fillAlpha", 12, this.f5532j);
            this.f5536n = e(m.g(typedArray, xmlPullParser, "strokeLineCap", 8, -1), this.f5536n);
            this.f5537o = f(m.g(typedArray, xmlPullParser, "strokeLineJoin", 9, -1), this.f5537o);
            this.f5538p = m.f(typedArray, xmlPullParser, "strokeMiterLimit", 10, this.f5538p);
            this.f5528f = m.e(typedArray, xmlPullParser, theme, "strokeColor", 3, 0);
            this.f5531i = m.f(typedArray, xmlPullParser, "strokeAlpha", 11, this.f5531i);
            this.f5529g = m.f(typedArray, xmlPullParser, "strokeWidth", 4, this.f5529g);
            this.f5534l = m.f(typedArray, xmlPullParser, "trimPathEnd", 6, this.f5534l);
            this.f5535m = m.f(typedArray, xmlPullParser, "trimPathOffset", 7, this.f5535m);
            this.f5533k = m.f(typedArray, xmlPullParser, "trimPathStart", 5, this.f5533k);
            this.f5554c = m.g(typedArray, xmlPullParser, "fillType", 13, this.f5554c);
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean a() {
            if (!this.f5530h.i() && !this.f5528f.i()) {
                return false;
            }
            return true;
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean b(int[] iArr) {
            return this.f5528f.j(iArr) | this.f5530h.j(iArr);
        }

        public void g(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5490c);
            h(i10, xmlPullParser, theme);
            i10.recycle();
        }

        float getFillAlpha() {
            return this.f5532j;
        }

        int getFillColor() {
            return this.f5530h.e();
        }

        float getStrokeAlpha() {
            return this.f5531i;
        }

        int getStrokeColor() {
            return this.f5528f.e();
        }

        float getStrokeWidth() {
            return this.f5529g;
        }

        float getTrimPathEnd() {
            return this.f5534l;
        }

        float getTrimPathOffset() {
            return this.f5535m;
        }

        float getTrimPathStart() {
            return this.f5533k;
        }

        void setFillAlpha(float f10) {
            this.f5532j = f10;
        }

        void setFillColor(int i10) {
            this.f5530h.k(i10);
        }

        void setStrokeAlpha(float f10) {
            this.f5531i = f10;
        }

        void setStrokeColor(int i10) {
            this.f5528f.k(i10);
        }

        void setStrokeWidth(float f10) {
            this.f5529g = f10;
        }

        void setTrimPathEnd(float f10) {
            this.f5534l = f10;
        }

        void setTrimPathOffset(float f10) {
            this.f5535m = f10;
        }

        void setTrimPathStart(float f10) {
            this.f5533k = f10;
        }

        c(c cVar) {
            super(cVar);
            this.f5529g = 0.0f;
            this.f5531i = 1.0f;
            this.f5532j = 1.0f;
            this.f5533k = 0.0f;
            this.f5534l = 1.0f;
            this.f5535m = 0.0f;
            this.f5536n = Paint.Cap.BUTT;
            this.f5537o = Paint.Join.MITER;
            this.f5538p = 4.0f;
            this.f5527e = cVar.f5527e;
            this.f5528f = cVar.f5528f;
            this.f5529g = cVar.f5529g;
            this.f5531i = cVar.f5531i;
            this.f5530h = cVar.f5530h;
            this.f5554c = cVar.f5554c;
            this.f5532j = cVar.f5532j;
            this.f5533k = cVar.f5533k;
            this.f5534l = cVar.f5534l;
            this.f5535m = cVar.f5535m;
            this.f5536n = cVar.f5536n;
            this.f5537o = cVar.f5537o;
            this.f5538p = cVar.f5538p;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g {

        /* renamed from: q  reason: collision with root package name */
        private static final Matrix f5556q = new Matrix();

        /* renamed from: a  reason: collision with root package name */
        private final Path f5557a;

        /* renamed from: b  reason: collision with root package name */
        private final Path f5558b;

        /* renamed from: c  reason: collision with root package name */
        private final Matrix f5559c;

        /* renamed from: d  reason: collision with root package name */
        Paint f5560d;

        /* renamed from: e  reason: collision with root package name */
        Paint f5561e;

        /* renamed from: f  reason: collision with root package name */
        private PathMeasure f5562f;

        /* renamed from: g  reason: collision with root package name */
        private int f5563g;

        /* renamed from: h  reason: collision with root package name */
        final d f5564h;

        /* renamed from: i  reason: collision with root package name */
        float f5565i;

        /* renamed from: j  reason: collision with root package name */
        float f5566j;

        /* renamed from: k  reason: collision with root package name */
        float f5567k;

        /* renamed from: l  reason: collision with root package name */
        float f5568l;

        /* renamed from: m  reason: collision with root package name */
        int f5569m;

        /* renamed from: n  reason: collision with root package name */
        String f5570n;

        /* renamed from: o  reason: collision with root package name */
        Boolean f5571o;

        /* renamed from: p  reason: collision with root package name */
        final u0.a f5572p;

        g() {
            this.f5559c = new Matrix();
            this.f5565i = 0.0f;
            this.f5566j = 0.0f;
            this.f5567k = 0.0f;
            this.f5568l = 0.0f;
            this.f5569m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f5570n = null;
            this.f5571o = null;
            this.f5572p = new u0.a();
            this.f5564h = new d();
            this.f5557a = new Path();
            this.f5558b = new Path();
        }

        private static float a(float f10, float f11, float f12, float f13) {
            return (f10 * f13) - (f11 * f12);
        }

        private void c(d dVar, Matrix matrix, Canvas canvas, int i10, int i11, ColorFilter colorFilter) {
            d dVar2 = dVar;
            dVar2.f5539a.set(matrix);
            dVar2.f5539a.preConcat(dVar2.f5548j);
            canvas.save();
            int i12 = 0;
            while (i12 < dVar2.f5540b.size()) {
                e eVar = (e) dVar2.f5540b.get(i12);
                if (eVar instanceof d) {
                    c((d) eVar, dVar2.f5539a, canvas, i10, i11, colorFilter);
                } else if (eVar instanceof AbstractC0071f) {
                    d(dVar2, (AbstractC0071f) eVar, canvas, i10, i11, colorFilter);
                }
                i12++;
                dVar2 = dVar;
            }
            canvas.restore();
        }

        private void d(d dVar, AbstractC0071f abstractC0071f, Canvas canvas, int i10, int i11, ColorFilter colorFilter) {
            Path.FillType fillType;
            Path.FillType fillType2;
            float f10 = i10 / this.f5567k;
            float f11 = i11 / this.f5568l;
            float min = Math.min(f10, f11);
            Matrix matrix = dVar.f5539a;
            this.f5559c.set(matrix);
            this.f5559c.postScale(f10, f11);
            float e10 = e(matrix);
            if (e10 != 0.0f) {
                abstractC0071f.d(this.f5557a);
                Path path = this.f5557a;
                this.f5558b.reset();
                if (abstractC0071f.c()) {
                    Path path2 = this.f5558b;
                    if (abstractC0071f.f5554c == 0) {
                        fillType2 = Path.FillType.WINDING;
                    } else {
                        fillType2 = Path.FillType.EVEN_ODD;
                    }
                    path2.setFillType(fillType2);
                    this.f5558b.addPath(path, this.f5559c);
                    canvas.clipPath(this.f5558b);
                    return;
                }
                c cVar = (c) abstractC0071f;
                float f12 = cVar.f5533k;
                if (f12 != 0.0f || cVar.f5534l != 1.0f) {
                    float f13 = cVar.f5535m;
                    float f14 = (f12 + f13) % 1.0f;
                    float f15 = (cVar.f5534l + f13) % 1.0f;
                    if (this.f5562f == null) {
                        this.f5562f = new PathMeasure();
                    }
                    this.f5562f.setPath(this.f5557a, false);
                    float length = this.f5562f.getLength();
                    float f16 = f14 * length;
                    float f17 = f15 * length;
                    path.reset();
                    if (f16 > f17) {
                        this.f5562f.getSegment(f16, length, path, true);
                        this.f5562f.getSegment(0.0f, f17, path, true);
                    } else {
                        this.f5562f.getSegment(f16, f17, path, true);
                    }
                    path.rLineTo(0.0f, 0.0f);
                }
                this.f5558b.addPath(path, this.f5559c);
                if (cVar.f5530h.l()) {
                    q1.d dVar2 = cVar.f5530h;
                    if (this.f5561e == null) {
                        Paint paint = new Paint(1);
                        this.f5561e = paint;
                        paint.setStyle(Paint.Style.FILL);
                    }
                    Paint paint2 = this.f5561e;
                    if (dVar2.h()) {
                        Shader f18 = dVar2.f();
                        f18.setLocalMatrix(this.f5559c);
                        paint2.setShader(f18);
                        paint2.setAlpha(Math.round(cVar.f5532j * 255.0f));
                    } else {
                        paint2.setShader(null);
                        paint2.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        paint2.setColor(f.a(dVar2.e(), cVar.f5532j));
                    }
                    paint2.setColorFilter(colorFilter);
                    Path path3 = this.f5558b;
                    if (cVar.f5554c == 0) {
                        fillType = Path.FillType.WINDING;
                    } else {
                        fillType = Path.FillType.EVEN_ODD;
                    }
                    path3.setFillType(fillType);
                    canvas.drawPath(this.f5558b, paint2);
                }
                if (cVar.f5528f.l()) {
                    q1.d dVar3 = cVar.f5528f;
                    if (this.f5560d == null) {
                        Paint paint3 = new Paint(1);
                        this.f5560d = paint3;
                        paint3.setStyle(Paint.Style.STROKE);
                    }
                    Paint paint4 = this.f5560d;
                    Paint.Join join = cVar.f5537o;
                    if (join != null) {
                        paint4.setStrokeJoin(join);
                    }
                    Paint.Cap cap = cVar.f5536n;
                    if (cap != null) {
                        paint4.setStrokeCap(cap);
                    }
                    paint4.setStrokeMiter(cVar.f5538p);
                    if (dVar3.h()) {
                        Shader f19 = dVar3.f();
                        f19.setLocalMatrix(this.f5559c);
                        paint4.setShader(f19);
                        paint4.setAlpha(Math.round(cVar.f5531i * 255.0f));
                    } else {
                        paint4.setShader(null);
                        paint4.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        paint4.setColor(f.a(dVar3.e(), cVar.f5531i));
                    }
                    paint4.setColorFilter(colorFilter);
                    paint4.setStrokeWidth(cVar.f5529g * min * e10);
                    canvas.drawPath(this.f5558b, paint4);
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
            c(this.f5564h, f5556q, canvas, i10, i11, colorFilter);
        }

        public boolean f() {
            if (this.f5571o == null) {
                this.f5571o = Boolean.valueOf(this.f5564h.a());
            }
            return this.f5571o.booleanValue();
        }

        public boolean g(int[] iArr) {
            return this.f5564h.b(iArr);
        }

        public float getAlpha() {
            return getRootAlpha() / 255.0f;
        }

        public int getRootAlpha() {
            return this.f5569m;
        }

        public void setAlpha(float f10) {
            setRootAlpha((int) (f10 * 255.0f));
        }

        public void setRootAlpha(int i10) {
            this.f5569m = i10;
        }

        g(g gVar) {
            this.f5559c = new Matrix();
            this.f5565i = 0.0f;
            this.f5566j = 0.0f;
            this.f5567k = 0.0f;
            this.f5568l = 0.0f;
            this.f5569m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f5570n = null;
            this.f5571o = null;
            u0.a aVar = new u0.a();
            this.f5572p = aVar;
            this.f5564h = new d(gVar.f5564h, aVar);
            this.f5557a = new Path(gVar.f5557a);
            this.f5558b = new Path(gVar.f5558b);
            this.f5565i = gVar.f5565i;
            this.f5566j = gVar.f5566j;
            this.f5567k = gVar.f5567k;
            this.f5568l = gVar.f5568l;
            this.f5563g = gVar.f5563g;
            this.f5569m = gVar.f5569m;
            this.f5570n = gVar.f5570n;
            String str = gVar.f5570n;
            if (str != null) {
                aVar.put(str, this);
            }
            this.f5571o = gVar.f5571o;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends e {

        /* renamed from: a  reason: collision with root package name */
        final Matrix f5539a;

        /* renamed from: b  reason: collision with root package name */
        final ArrayList f5540b;

        /* renamed from: c  reason: collision with root package name */
        float f5541c;

        /* renamed from: d  reason: collision with root package name */
        private float f5542d;

        /* renamed from: e  reason: collision with root package name */
        private float f5543e;

        /* renamed from: f  reason: collision with root package name */
        private float f5544f;

        /* renamed from: g  reason: collision with root package name */
        private float f5545g;

        /* renamed from: h  reason: collision with root package name */
        private float f5546h;

        /* renamed from: i  reason: collision with root package name */
        private float f5547i;

        /* renamed from: j  reason: collision with root package name */
        final Matrix f5548j;

        /* renamed from: k  reason: collision with root package name */
        int f5549k;

        /* renamed from: l  reason: collision with root package name */
        private int[] f5550l;

        /* renamed from: m  reason: collision with root package name */
        private String f5551m;

        d(d dVar, u0.a aVar) {
            super();
            AbstractC0071f bVar;
            this.f5539a = new Matrix();
            this.f5540b = new ArrayList();
            this.f5541c = 0.0f;
            this.f5542d = 0.0f;
            this.f5543e = 0.0f;
            this.f5544f = 1.0f;
            this.f5545g = 1.0f;
            this.f5546h = 0.0f;
            this.f5547i = 0.0f;
            Matrix matrix = new Matrix();
            this.f5548j = matrix;
            this.f5551m = null;
            this.f5541c = dVar.f5541c;
            this.f5542d = dVar.f5542d;
            this.f5543e = dVar.f5543e;
            this.f5544f = dVar.f5544f;
            this.f5545g = dVar.f5545g;
            this.f5546h = dVar.f5546h;
            this.f5547i = dVar.f5547i;
            this.f5550l = dVar.f5550l;
            String str = dVar.f5551m;
            this.f5551m = str;
            this.f5549k = dVar.f5549k;
            if (str != null) {
                aVar.put(str, this);
            }
            matrix.set(dVar.f5548j);
            ArrayList arrayList = dVar.f5540b;
            for (int i10 = 0; i10 < arrayList.size(); i10++) {
                Object obj = arrayList.get(i10);
                if (obj instanceof d) {
                    this.f5540b.add(new d((d) obj, aVar));
                } else {
                    if (obj instanceof c) {
                        bVar = new c((c) obj);
                    } else if (obj instanceof b) {
                        bVar = new b((b) obj);
                    } else {
                        throw new IllegalStateException("Unknown object in the tree!");
                    }
                    this.f5540b.add(bVar);
                    Object obj2 = bVar.f5553b;
                    if (obj2 != null) {
                        aVar.put(obj2, bVar);
                    }
                }
            }
        }

        private void d() {
            this.f5548j.reset();
            this.f5548j.postTranslate(-this.f5542d, -this.f5543e);
            this.f5548j.postScale(this.f5544f, this.f5545g);
            this.f5548j.postRotate(this.f5541c, 0.0f, 0.0f);
            this.f5548j.postTranslate(this.f5546h + this.f5542d, this.f5547i + this.f5543e);
        }

        private void e(TypedArray typedArray, XmlPullParser xmlPullParser) {
            this.f5550l = null;
            this.f5541c = m.f(typedArray, xmlPullParser, ViewProps.ROTATION, 5, this.f5541c);
            this.f5542d = typedArray.getFloat(1, this.f5542d);
            this.f5543e = typedArray.getFloat(2, this.f5543e);
            this.f5544f = m.f(typedArray, xmlPullParser, ViewProps.SCALE_X, 3, this.f5544f);
            this.f5545g = m.f(typedArray, xmlPullParser, ViewProps.SCALE_Y, 4, this.f5545g);
            this.f5546h = m.f(typedArray, xmlPullParser, ViewProps.TRANSLATE_X, 6, this.f5546h);
            this.f5547i = m.f(typedArray, xmlPullParser, ViewProps.TRANSLATE_Y, 7, this.f5547i);
            String string = typedArray.getString(0);
            if (string != null) {
                this.f5551m = string;
            }
            d();
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean a() {
            for (int i10 = 0; i10 < this.f5540b.size(); i10++) {
                if (((e) this.f5540b.get(i10)).a()) {
                    return true;
                }
            }
            return false;
        }

        @Override // androidx.vectordrawable.graphics.drawable.f.e
        public boolean b(int[] iArr) {
            boolean z10 = false;
            for (int i10 = 0; i10 < this.f5540b.size(); i10++) {
                z10 |= ((e) this.f5540b.get(i10)).b(iArr);
            }
            return z10;
        }

        public void c(Resources resources, AttributeSet attributeSet, Resources.Theme theme, XmlPullParser xmlPullParser) {
            TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5489b);
            e(i10, xmlPullParser);
            i10.recycle();
        }

        public String getGroupName() {
            return this.f5551m;
        }

        public Matrix getLocalMatrix() {
            return this.f5548j;
        }

        public float getPivotX() {
            return this.f5542d;
        }

        public float getPivotY() {
            return this.f5543e;
        }

        public float getRotation() {
            return this.f5541c;
        }

        public float getScaleX() {
            return this.f5544f;
        }

        public float getScaleY() {
            return this.f5545g;
        }

        public float getTranslateX() {
            return this.f5546h;
        }

        public float getTranslateY() {
            return this.f5547i;
        }

        public void setPivotX(float f10) {
            if (f10 != this.f5542d) {
                this.f5542d = f10;
                d();
            }
        }

        public void setPivotY(float f10) {
            if (f10 != this.f5543e) {
                this.f5543e = f10;
                d();
            }
        }

        public void setRotation(float f10) {
            if (f10 != this.f5541c) {
                this.f5541c = f10;
                d();
            }
        }

        public void setScaleX(float f10) {
            if (f10 != this.f5544f) {
                this.f5544f = f10;
                d();
            }
        }

        public void setScaleY(float f10) {
            if (f10 != this.f5545g) {
                this.f5545g = f10;
                d();
            }
        }

        public void setTranslateX(float f10) {
            if (f10 != this.f5546h) {
                this.f5546h = f10;
                d();
            }
        }

        public void setTranslateY(float f10) {
            if (f10 != this.f5547i) {
                this.f5547i = f10;
                d();
            }
        }

        d() {
            super();
            this.f5539a = new Matrix();
            this.f5540b = new ArrayList();
            this.f5541c = 0.0f;
            this.f5542d = 0.0f;
            this.f5543e = 0.0f;
            this.f5544f = 1.0f;
            this.f5545g = 1.0f;
            this.f5546h = 0.0f;
            this.f5547i = 0.0f;
            this.f5548j = new Matrix();
            this.f5551m = null;
        }
    }
}
