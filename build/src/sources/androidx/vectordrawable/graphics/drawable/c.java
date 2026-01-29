package androidx.vectordrawable.graphics.drawable;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.animation.ArgbEvaluator;
import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.Region;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Animatable2;
import android.graphics.drawable.AnimatedVectorDrawable;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import java.util.ArrayList;
import org.xmlpull.v1.XmlPullParser;
import q1.j;
import q1.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends androidx.vectordrawable.graphics.drawable.e implements Animatable {

    /* renamed from: e  reason: collision with root package name */
    private final C0071c f5341e;

    /* renamed from: i  reason: collision with root package name */
    private final Context f5342i;

    /* renamed from: o  reason: collision with root package name */
    private ArgbEvaluator f5343o;

    /* renamed from: p  reason: collision with root package name */
    d f5344p;

    /* renamed from: q  reason: collision with root package name */
    private Animator.AnimatorListener f5345q;

    /* renamed from: r  reason: collision with root package name */
    ArrayList f5346r;

    /* renamed from: s  reason: collision with root package name */
    final Drawable.Callback f5347s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Drawable.Callback {
        a() {
        }

        @Override // android.graphics.drawable.Drawable.Callback
        public void invalidateDrawable(Drawable drawable) {
            c.this.invalidateSelf();
        }

        @Override // android.graphics.drawable.Drawable.Callback
        public void scheduleDrawable(Drawable drawable, Runnable runnable, long j10) {
            c.this.scheduleSelf(runnable, j10);
        }

        @Override // android.graphics.drawable.Drawable.Callback
        public void unscheduleDrawable(Drawable drawable, Runnable runnable) {
            c.this.unscheduleSelf(runnable);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends AnimatorListenerAdapter {
        b() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            ArrayList arrayList = new ArrayList(c.this.f5346r);
            int size = arrayList.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((androidx.vectordrawable.graphics.drawable.b) arrayList.get(i10)).b(c.this);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            ArrayList arrayList = new ArrayList(c.this.f5346r);
            int size = arrayList.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((androidx.vectordrawable.graphics.drawable.b) arrayList.get(i10)).c(c.this);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: androidx.vectordrawable.graphics.drawable.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0071c extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        int f5350a;

        /* renamed from: b  reason: collision with root package name */
        f f5351b;

        /* renamed from: c  reason: collision with root package name */
        AnimatorSet f5352c;

        /* renamed from: d  reason: collision with root package name */
        ArrayList f5353d;

        /* renamed from: e  reason: collision with root package name */
        u0.a f5354e;

        C0071c(Context context, C0071c c0071c, Drawable.Callback callback, Resources resources) {
            if (c0071c != null) {
                this.f5350a = c0071c.f5350a;
                f fVar = c0071c.f5351b;
                if (fVar != null) {
                    Drawable.ConstantState constantState = fVar.getConstantState();
                    if (resources != null) {
                        this.f5351b = (f) constantState.newDrawable(resources);
                    } else {
                        this.f5351b = (f) constantState.newDrawable();
                    }
                    f fVar2 = (f) this.f5351b.mutate();
                    this.f5351b = fVar2;
                    fVar2.setCallback(callback);
                    this.f5351b.setBounds(c0071c.f5351b.getBounds());
                    this.f5351b.g(false);
                }
                ArrayList arrayList = c0071c.f5353d;
                if (arrayList != null) {
                    int size = arrayList.size();
                    this.f5353d = new ArrayList(size);
                    this.f5354e = new u0.a(size);
                    for (int i10 = 0; i10 < size; i10++) {
                        Animator animator = (Animator) c0071c.f5353d.get(i10);
                        Animator clone = animator.clone();
                        String str = (String) c0071c.f5354e.get(animator);
                        clone.setTarget(this.f5351b.c(str));
                        this.f5353d.add(clone);
                        this.f5354e.put(clone, str);
                    }
                    a();
                }
            }
        }

        public void a() {
            if (this.f5352c == null) {
                this.f5352c = new AnimatorSet();
            }
            this.f5352c.playTogether(this.f5353d);
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5350a;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            throw new IllegalStateException("No constant state support for SDK < 24.");
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources) {
            throw new IllegalStateException("No constant state support for SDK < 24.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e {
        static void a(Object obj) {
            ((AnimatedVectorDrawable) obj).clearAnimationCallbacks();
        }

        static void b(Object obj, Object obj2) {
            ((AnimatedVectorDrawable) obj).registerAnimationCallback((Animatable2.AnimationCallback) obj2);
        }

        static boolean c(Object obj, Object obj2) {
            return ((AnimatedVectorDrawable) obj).unregisterAnimationCallback((Animatable2.AnimationCallback) obj2);
        }
    }

    c() {
        this(null, null, null);
    }

    public static c a(Context context, int i10) {
        c cVar = new c(context);
        Drawable f10 = j.f(context.getResources(), i10, context.getTheme());
        b2.b.d(cVar, "Failed to load drawable");
        f10.setCallback(cVar.f5347s);
        cVar.f5344p = new d(f10.getConstantState());
        cVar.f5356d = f10;
        return cVar;
    }

    private static void c(AnimatedVectorDrawable animatedVectorDrawable, androidx.vectordrawable.graphics.drawable.b bVar) {
        e.b(animatedVectorDrawable, bVar.a());
    }

    private void d() {
        Animator.AnimatorListener animatorListener = this.f5345q;
        if (animatorListener != null) {
            this.f5341e.f5352c.removeListener(animatorListener);
            this.f5345q = null;
        }
    }

    private void e(String str, Animator animator) {
        animator.setTarget(this.f5341e.f5351b.c(str));
        C0071c c0071c = this.f5341e;
        if (c0071c.f5353d == null) {
            c0071c.f5353d = new ArrayList();
            this.f5341e.f5354e = new u0.a();
        }
        this.f5341e.f5353d.add(animator);
        this.f5341e.f5354e.put(animator, str);
    }

    private static boolean g(AnimatedVectorDrawable animatedVectorDrawable, androidx.vectordrawable.graphics.drawable.b bVar) {
        return e.c(animatedVectorDrawable, bVar.a());
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public void applyTheme(Resources.Theme theme) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            s1.a.a(drawable, theme);
        }
    }

    public void b(androidx.vectordrawable.graphics.drawable.b bVar) {
        if (bVar != null) {
            Drawable drawable = this.f5356d;
            if (drawable != null) {
                c((AnimatedVectorDrawable) drawable, bVar);
                return;
            }
            if (this.f5346r == null) {
                this.f5346r = new ArrayList();
            }
            if (this.f5346r.contains(bVar)) {
                return;
            }
            this.f5346r.add(bVar);
            if (this.f5345q == null) {
                this.f5345q = new b();
            }
            this.f5341e.f5352c.addListener(this.f5345q);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean canApplyTheme() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return s1.a.b(drawable);
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
        this.f5341e.f5351b.draw(canvas);
        if (this.f5341e.f5352c.isStarted()) {
            invalidateSelf();
        }
    }

    public boolean f(androidx.vectordrawable.graphics.drawable.b bVar) {
        if (bVar == null) {
            return false;
        }
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            g((AnimatedVectorDrawable) drawable, bVar);
        }
        ArrayList arrayList = this.f5346r;
        if (arrayList == null) {
            return false;
        }
        boolean remove = arrayList.remove(bVar);
        if (this.f5346r.size() == 0) {
            d();
        }
        return remove;
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return s1.a.d(drawable);
        }
        return this.f5341e.f5351b.getAlpha();
    }

    @Override // android.graphics.drawable.Drawable
    public int getChangingConfigurations() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return drawable.getChangingConfigurations();
        }
        return super.getChangingConfigurations() | this.f5341e.f5350a;
    }

    @Override // android.graphics.drawable.Drawable
    public ColorFilter getColorFilter() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return s1.a.e(drawable);
        }
        return this.f5341e.f5351b.getColorFilter();
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        if (this.f5356d != null) {
            return new d(this.f5356d.getConstantState());
        }
        return null;
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
        return this.f5341e.f5351b.getIntrinsicHeight();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return drawable.getIntrinsicWidth();
        }
        return this.f5341e.f5351b.getIntrinsicWidth();
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
        return this.f5341e.f5351b.getOpacity();
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

    @Override // android.graphics.drawable.Drawable
    public void inflate(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet, Resources.Theme theme) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            s1.a.g(drawable, resources, xmlPullParser, attributeSet, theme);
            return;
        }
        int eventType = xmlPullParser.getEventType();
        int depth = xmlPullParser.getDepth() + 1;
        while (eventType != 1 && (xmlPullParser.getDepth() >= depth || eventType != 3)) {
            if (eventType == 2) {
                String name = xmlPullParser.getName();
                if ("animated-vector".equals(name)) {
                    TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5331e);
                    int resourceId = i10.getResourceId(0, 0);
                    if (resourceId != 0) {
                        f b10 = f.b(resources, resourceId, theme);
                        b2.b.d(b10, "Failed to load drawable");
                        b10.g(false);
                        b10.setCallback(this.f5347s);
                        f fVar = this.f5341e.f5351b;
                        if (fVar != null) {
                            fVar.setCallback(null);
                        }
                        this.f5341e.f5351b = b10;
                    }
                    i10.recycle();
                } else if ("target".equals(name)) {
                    TypedArray obtainAttributes = resources.obtainAttributes(attributeSet, androidx.vectordrawable.graphics.drawable.a.f5332f);
                    String string = obtainAttributes.getString(0);
                    int resourceId2 = obtainAttributes.getResourceId(1, 0);
                    if (resourceId2 != 0) {
                        Context context = this.f5342i;
                        if (context != null) {
                            e(string, androidx.vectordrawable.graphics.drawable.d.a(context, resourceId2));
                        } else {
                            obtainAttributes.recycle();
                            throw new IllegalStateException("Context can't be null when inflating animators");
                        }
                    }
                    obtainAttributes.recycle();
                } else {
                    continue;
                }
            }
            eventType = xmlPullParser.next();
        }
        this.f5341e.a();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isAutoMirrored() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return s1.a.h(drawable);
        }
        return this.f5341e.f5351b.isAutoMirrored();
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return ((AnimatedVectorDrawable) drawable).isRunning();
        }
        return this.f5341e.f5352c.isRunning();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return drawable.isStateful();
        }
        return this.f5341e.f5351b.isStateful();
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
        }
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            drawable.setBounds(rect);
        } else {
            this.f5341e.f5351b.setBounds(rect);
        }
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    protected boolean onLevelChange(int i10) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return drawable.setLevel(i10);
        }
        return this.f5341e.f5351b.setLevel(i10);
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return drawable.setState(iArr);
        }
        return this.f5341e.f5351b.setState(iArr);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            drawable.setAlpha(i10);
        } else {
            this.f5341e.f5351b.setAlpha(i10);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAutoMirrored(boolean z10) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            s1.a.j(drawable, z10);
        } else {
            this.f5341e.f5351b.setAutoMirrored(z10);
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
            this.f5341e.f5351b.setTint(i10);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            s1.a.o(drawable, colorStateList);
        } else {
            this.f5341e.f5351b.setTintList(colorStateList);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            s1.a.p(drawable, mode);
        } else {
            this.f5341e.f5351b.setTintMode(mode);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            return drawable.setVisible(z10, z11);
        }
        this.f5341e.f5351b.setVisible(z10, z11);
        return super.setVisible(z10, z11);
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            ((AnimatedVectorDrawable) drawable).start();
        } else if (this.f5341e.f5352c.isStarted()) {
        } else {
            this.f5341e.f5352c.start();
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            ((AnimatedVectorDrawable) drawable).stop();
        } else {
            this.f5341e.f5352c.end();
        }
    }

    private c(Context context) {
        this(context, null, null);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        Drawable drawable = this.f5356d;
        if (drawable != null) {
            drawable.setColorFilter(colorFilter);
        } else {
            this.f5341e.f5351b.setColorFilter(colorFilter);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class d extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        private final Drawable.ConstantState f5355a;

        d(Drawable.ConstantState constantState) {
            this.f5355a = constantState;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public boolean canApplyTheme() {
            return this.f5355a.canApplyTheme();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5355a.getChangingConfigurations();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            c cVar = new c();
            Drawable newDrawable = this.f5355a.newDrawable();
            cVar.f5356d = newDrawable;
            newDrawable.setCallback(cVar.f5347s);
            return cVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources) {
            c cVar = new c();
            Drawable newDrawable = this.f5355a.newDrawable(resources);
            cVar.f5356d = newDrawable;
            newDrawable.setCallback(cVar.f5347s);
            return cVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources, Resources.Theme theme) {
            c cVar = new c();
            Drawable newDrawable = this.f5355a.newDrawable(resources, theme);
            cVar.f5356d = newDrawable;
            newDrawable.setCallback(cVar.f5347s);
            return cVar;
        }
    }

    private c(Context context, C0071c c0071c, Resources resources) {
        this.f5343o = null;
        this.f5345q = null;
        this.f5346r = null;
        a aVar = new a();
        this.f5347s = aVar;
        this.f5342i = context;
        if (c0071c != null) {
            this.f5341e = c0071c;
        } else {
            this.f5341e = new C0071c(context, null, aVar, resources);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void inflate(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet) {
        inflate(resources, xmlPullParser, attributeSet, null);
    }
}
