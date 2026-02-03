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
    private final C0073c f5354e;

    /* renamed from: i  reason: collision with root package name */
    private final Context f5355i;

    /* renamed from: o  reason: collision with root package name */
    private ArgbEvaluator f5356o;

    /* renamed from: p  reason: collision with root package name */
    d f5357p;

    /* renamed from: q  reason: collision with root package name */
    private Animator.AnimatorListener f5358q;

    /* renamed from: r  reason: collision with root package name */
    ArrayList f5359r;

    /* renamed from: s  reason: collision with root package name */
    final Drawable.Callback f5360s;

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
            ArrayList arrayList = new ArrayList(c.this.f5359r);
            int size = arrayList.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((androidx.vectordrawable.graphics.drawable.b) arrayList.get(i10)).b(c.this);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            ArrayList arrayList = new ArrayList(c.this.f5359r);
            int size = arrayList.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((androidx.vectordrawable.graphics.drawable.b) arrayList.get(i10)).c(c.this);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: androidx.vectordrawable.graphics.drawable.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0073c extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        int f5363a;

        /* renamed from: b  reason: collision with root package name */
        f f5364b;

        /* renamed from: c  reason: collision with root package name */
        AnimatorSet f5365c;

        /* renamed from: d  reason: collision with root package name */
        ArrayList f5366d;

        /* renamed from: e  reason: collision with root package name */
        u0.a f5367e;

        C0073c(Context context, C0073c c0073c, Drawable.Callback callback, Resources resources) {
            if (c0073c != null) {
                this.f5363a = c0073c.f5363a;
                f fVar = c0073c.f5364b;
                if (fVar != null) {
                    Drawable.ConstantState constantState = fVar.getConstantState();
                    if (resources != null) {
                        this.f5364b = (f) constantState.newDrawable(resources);
                    } else {
                        this.f5364b = (f) constantState.newDrawable();
                    }
                    f fVar2 = (f) this.f5364b.mutate();
                    this.f5364b = fVar2;
                    fVar2.setCallback(callback);
                    this.f5364b.setBounds(c0073c.f5364b.getBounds());
                    this.f5364b.g(false);
                }
                ArrayList arrayList = c0073c.f5366d;
                if (arrayList != null) {
                    int size = arrayList.size();
                    this.f5366d = new ArrayList(size);
                    this.f5367e = new u0.a(size);
                    for (int i10 = 0; i10 < size; i10++) {
                        Animator animator = (Animator) c0073c.f5366d.get(i10);
                        Animator clone = animator.clone();
                        String str = (String) c0073c.f5367e.get(animator);
                        clone.setTarget(this.f5364b.c(str));
                        this.f5366d.add(clone);
                        this.f5367e.put(clone, str);
                    }
                    a();
                }
            }
        }

        public void a() {
            if (this.f5365c == null) {
                this.f5365c = new AnimatorSet();
            }
            this.f5365c.playTogether(this.f5366d);
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5363a;
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
        f10.setCallback(cVar.f5360s);
        cVar.f5357p = new d(f10.getConstantState());
        cVar.f5369d = f10;
        return cVar;
    }

    private static void c(AnimatedVectorDrawable animatedVectorDrawable, androidx.vectordrawable.graphics.drawable.b bVar) {
        e.b(animatedVectorDrawable, bVar.a());
    }

    private void d() {
        Animator.AnimatorListener animatorListener = this.f5358q;
        if (animatorListener != null) {
            this.f5354e.f5365c.removeListener(animatorListener);
            this.f5358q = null;
        }
    }

    private void e(String str, Animator animator) {
        animator.setTarget(this.f5354e.f5364b.c(str));
        C0073c c0073c = this.f5354e;
        if (c0073c.f5366d == null) {
            c0073c.f5366d = new ArrayList();
            this.f5354e.f5367e = new u0.a();
        }
        this.f5354e.f5366d.add(animator);
        this.f5354e.f5367e.put(animator, str);
    }

    private static boolean g(AnimatedVectorDrawable animatedVectorDrawable, androidx.vectordrawable.graphics.drawable.b bVar) {
        return e.c(animatedVectorDrawable, bVar.a());
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    public void applyTheme(Resources.Theme theme) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            s1.a.a(drawable, theme);
        }
    }

    public void b(androidx.vectordrawable.graphics.drawable.b bVar) {
        if (bVar != null) {
            Drawable drawable = this.f5369d;
            if (drawable != null) {
                c((AnimatedVectorDrawable) drawable, bVar);
                return;
            }
            if (this.f5359r == null) {
                this.f5359r = new ArrayList();
            }
            if (this.f5359r.contains(bVar)) {
                return;
            }
            this.f5359r.add(bVar);
            if (this.f5358q == null) {
                this.f5358q = new b();
            }
            this.f5354e.f5365c.addListener(this.f5358q);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean canApplyTheme() {
        Drawable drawable = this.f5369d;
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
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            drawable.draw(canvas);
            return;
        }
        this.f5354e.f5364b.draw(canvas);
        if (this.f5354e.f5365c.isStarted()) {
            invalidateSelf();
        }
    }

    public boolean f(androidx.vectordrawable.graphics.drawable.b bVar) {
        if (bVar == null) {
            return false;
        }
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            g((AnimatedVectorDrawable) drawable, bVar);
        }
        ArrayList arrayList = this.f5359r;
        if (arrayList == null) {
            return false;
        }
        boolean remove = arrayList.remove(bVar);
        if (this.f5359r.size() == 0) {
            d();
        }
        return remove;
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return s1.a.d(drawable);
        }
        return this.f5354e.f5364b.getAlpha();
    }

    @Override // android.graphics.drawable.Drawable
    public int getChangingConfigurations() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return drawable.getChangingConfigurations();
        }
        return super.getChangingConfigurations() | this.f5354e.f5363a;
    }

    @Override // android.graphics.drawable.Drawable
    public ColorFilter getColorFilter() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return s1.a.e(drawable);
        }
        return this.f5354e.f5364b.getColorFilter();
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        if (this.f5369d != null) {
            return new d(this.f5369d.getConstantState());
        }
        return null;
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
        return this.f5354e.f5364b.getIntrinsicHeight();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return drawable.getIntrinsicWidth();
        }
        return this.f5354e.f5364b.getIntrinsicWidth();
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
        return this.f5354e.f5364b.getOpacity();
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
        Drawable drawable = this.f5369d;
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
                    TypedArray i10 = m.i(resources, theme, attributeSet, androidx.vectordrawable.graphics.drawable.a.f5344e);
                    int resourceId = i10.getResourceId(0, 0);
                    if (resourceId != 0) {
                        f b10 = f.b(resources, resourceId, theme);
                        b2.b.d(b10, "Failed to load drawable");
                        b10.g(false);
                        b10.setCallback(this.f5360s);
                        f fVar = this.f5354e.f5364b;
                        if (fVar != null) {
                            fVar.setCallback(null);
                        }
                        this.f5354e.f5364b = b10;
                    }
                    i10.recycle();
                } else if ("target".equals(name)) {
                    TypedArray obtainAttributes = resources.obtainAttributes(attributeSet, androidx.vectordrawable.graphics.drawable.a.f5345f);
                    String string = obtainAttributes.getString(0);
                    int resourceId2 = obtainAttributes.getResourceId(1, 0);
                    if (resourceId2 != 0) {
                        Context context = this.f5355i;
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
        this.f5354e.a();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isAutoMirrored() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return s1.a.h(drawable);
        }
        return this.f5354e.f5364b.isAutoMirrored();
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return ((AnimatedVectorDrawable) drawable).isRunning();
        }
        return this.f5354e.f5365c.isRunning();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return drawable.isStateful();
        }
        return this.f5354e.f5364b.isStateful();
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
        }
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            drawable.setBounds(rect);
        } else {
            this.f5354e.f5364b.setBounds(rect);
        }
    }

    @Override // androidx.vectordrawable.graphics.drawable.e, android.graphics.drawable.Drawable
    protected boolean onLevelChange(int i10) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return drawable.setLevel(i10);
        }
        return this.f5354e.f5364b.setLevel(i10);
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return drawable.setState(iArr);
        }
        return this.f5354e.f5364b.setState(iArr);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            drawable.setAlpha(i10);
        } else {
            this.f5354e.f5364b.setAlpha(i10);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAutoMirrored(boolean z10) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            s1.a.j(drawable, z10);
        } else {
            this.f5354e.f5364b.setAutoMirrored(z10);
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
            this.f5354e.f5364b.setTint(i10);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            s1.a.o(drawable, colorStateList);
        } else {
            this.f5354e.f5364b.setTintList(colorStateList);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            s1.a.p(drawable, mode);
        } else {
            this.f5354e.f5364b.setTintMode(mode);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            return drawable.setVisible(z10, z11);
        }
        this.f5354e.f5364b.setVisible(z10, z11);
        return super.setVisible(z10, z11);
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            ((AnimatedVectorDrawable) drawable).start();
        } else if (this.f5354e.f5365c.isStarted()) {
        } else {
            this.f5354e.f5365c.start();
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            ((AnimatedVectorDrawable) drawable).stop();
        } else {
            this.f5354e.f5365c.end();
        }
    }

    private c(Context context) {
        this(context, null, null);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        Drawable drawable = this.f5369d;
        if (drawable != null) {
            drawable.setColorFilter(colorFilter);
        } else {
            this.f5354e.f5364b.setColorFilter(colorFilter);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class d extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        private final Drawable.ConstantState f5368a;

        d(Drawable.ConstantState constantState) {
            this.f5368a = constantState;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public boolean canApplyTheme() {
            return this.f5368a.canApplyTheme();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return this.f5368a.getChangingConfigurations();
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            c cVar = new c();
            Drawable newDrawable = this.f5368a.newDrawable();
            cVar.f5369d = newDrawable;
            newDrawable.setCallback(cVar.f5360s);
            return cVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources) {
            c cVar = new c();
            Drawable newDrawable = this.f5368a.newDrawable(resources);
            cVar.f5369d = newDrawable;
            newDrawable.setCallback(cVar.f5360s);
            return cVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable(Resources resources, Resources.Theme theme) {
            c cVar = new c();
            Drawable newDrawable = this.f5368a.newDrawable(resources, theme);
            cVar.f5369d = newDrawable;
            newDrawable.setCallback(cVar.f5360s);
            return cVar;
        }
    }

    private c(Context context, C0073c c0073c, Resources resources) {
        this.f5356o = null;
        this.f5358q = null;
        this.f5359r = null;
        a aVar = new a();
        this.f5360s = aVar;
        this.f5355i = context;
        if (c0073c != null) {
            this.f5354e = c0073c;
        } else {
            this.f5354e = new C0073c(context, null, aVar, resources);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void inflate(Resources resources, XmlPullParser xmlPullParser, AttributeSet attributeSet) {
        inflate(resources, xmlPullParser, attributeSet, null);
    }
}
