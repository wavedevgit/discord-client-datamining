package com.google.android.exoplayer2.ui;

import android.animation.ValueAnimator;
import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Point;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewParent;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityNodeInfo;
import androidx.recyclerview.widget.RecyclerView;
import com.google.android.exoplayer2.ui.DefaultTimeBar;
import com.google.android.exoplayer2.ui.j;
import java.util.Collections;
import java.util.Formatter;
import java.util.Iterator;
import java.util.Locale;
import java.util.concurrent.CopyOnWriteArraySet;
import ke.n;
import kotlin.jvm.internal.LongCompanionObject;
import ne.w0;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DefaultTimeBar extends View implements j {
    private final int A;
    private final int B;
    private final int C;
    private final int D;
    private final int E;
    private final StringBuilder F;
    private final Formatter G;
    private final Runnable H;
    private final CopyOnWriteArraySet I;
    private final Point J;
    private final float K;
    private int L;
    private long M;
    private int N;
    private Rect O;
    private ValueAnimator P;
    private float Q;
    private boolean R;
    private boolean S;
    private long T;
    private long U;
    private long V;
    private long W;

    /* renamed from: a0  reason: collision with root package name */
    private int f13806a0;

    /* renamed from: b0  reason: collision with root package name */
    private long[] f13807b0;

    /* renamed from: c0  reason: collision with root package name */
    private boolean[] f13808c0;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f13809d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f13810e;

    /* renamed from: i  reason: collision with root package name */
    private final Rect f13811i;

    /* renamed from: o  reason: collision with root package name */
    private final Rect f13812o;

    /* renamed from: p  reason: collision with root package name */
    private final Paint f13813p;

    /* renamed from: q  reason: collision with root package name */
    private final Paint f13814q;

    /* renamed from: r  reason: collision with root package name */
    private final Paint f13815r;

    /* renamed from: s  reason: collision with root package name */
    private final Paint f13816s;

    /* renamed from: t  reason: collision with root package name */
    private final Paint f13817t;

    /* renamed from: u  reason: collision with root package name */
    private final Paint f13818u;

    /* renamed from: v  reason: collision with root package name */
    private final Drawable f13819v;

    /* renamed from: w  reason: collision with root package name */
    private final int f13820w;

    /* renamed from: x  reason: collision with root package name */
    private final int f13821x;

    /* renamed from: y  reason: collision with root package name */
    private final int f13822y;

    /* renamed from: z  reason: collision with root package name */
    private final int f13823z;

    public DefaultTimeBar(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    public static /* synthetic */ void c(DefaultTimeBar defaultTimeBar, ValueAnimator valueAnimator) {
        defaultTimeBar.getClass();
        defaultTimeBar.Q = ((Float) valueAnimator.getAnimatedValue()).floatValue();
        defaultTimeBar.invalidate(defaultTimeBar.f13809d);
    }

    private static int e(float f10, int i10) {
        return (int) ((i10 * f10) + 0.5f);
    }

    private void f(Canvas canvas) {
        int i10;
        if (this.U <= 0) {
            return;
        }
        Rect rect = this.f13812o;
        int q10 = w0.q(rect.right, rect.left, this.f13810e.right);
        int centerY = this.f13812o.centerY();
        Drawable drawable = this.f13819v;
        if (drawable == null) {
            if (!this.S && !isFocused()) {
                if (isEnabled()) {
                    i10 = this.A;
                } else {
                    i10 = this.B;
                }
            } else {
                i10 = this.C;
            }
            canvas.drawCircle(q10, centerY, (int) ((i10 * this.Q) / 2.0f), this.f13818u);
            return;
        }
        int intrinsicWidth = ((int) (drawable.getIntrinsicWidth() * this.Q)) / 2;
        int intrinsicHeight = ((int) (this.f13819v.getIntrinsicHeight() * this.Q)) / 2;
        this.f13819v.setBounds(q10 - intrinsicWidth, centerY - intrinsicHeight, q10 + intrinsicWidth, centerY + intrinsicHeight);
        this.f13819v.draw(canvas);
    }

    private void g(Canvas canvas) {
        Paint paint;
        int height = this.f13810e.height();
        int centerY = this.f13810e.centerY() - (height / 2);
        int i10 = height + centerY;
        if (this.U <= 0) {
            Rect rect = this.f13810e;
            canvas.drawRect(rect.left, centerY, rect.right, i10, this.f13815r);
            return;
        }
        Rect rect2 = this.f13811i;
        int i11 = rect2.left;
        int i12 = rect2.right;
        int max = Math.max(Math.max(this.f13810e.left, i12), this.f13812o.right);
        int i13 = this.f13810e.right;
        if (max < i13) {
            canvas.drawRect(max, centerY, i13, i10, this.f13815r);
        }
        int max2 = Math.max(i11, this.f13812o.right);
        if (i12 > max2) {
            canvas.drawRect(max2, centerY, i12, i10, this.f13814q);
        }
        if (this.f13812o.width() > 0) {
            Rect rect3 = this.f13812o;
            canvas.drawRect(rect3.left, centerY, rect3.right, i10, this.f13813p);
        }
        if (this.f13806a0 != 0) {
            long[] jArr = (long[]) ne.a.e(this.f13807b0);
            boolean[] zArr = (boolean[]) ne.a.e(this.f13808c0);
            int i14 = this.f13823z / 2;
            for (int i15 = 0; i15 < this.f13806a0; i15++) {
                long r10 = w0.r(jArr[i15], 0L, this.U);
                Rect rect4 = this.f13810e;
                int min = rect4.left + Math.min(rect4.width() - this.f13823z, Math.max(0, ((int) ((this.f13810e.width() * r10) / this.U)) - i14));
                if (zArr[i15]) {
                    paint = this.f13817t;
                } else {
                    paint = this.f13816s;
                }
                canvas.drawRect(min, centerY, min + this.f13823z, i10, paint);
            }
        }
    }

    private long getPositionIncrement() {
        long j10 = this.M;
        if (j10 == -9223372036854775807L) {
            long j11 = this.U;
            if (j11 == -9223372036854775807L) {
                return 0L;
            }
            return j11 / this.L;
        }
        return j10;
    }

    private String getProgressText() {
        return w0.l0(this.F, this.G, this.V);
    }

    private long getScrubberPosition() {
        if (this.f13810e.width() > 0 && this.U != -9223372036854775807L) {
            return (this.f13812o.width() * this.U) / this.f13810e.width();
        }
        return 0L;
    }

    private boolean h(float f10, float f11) {
        return this.f13809d.contains((int) f10, (int) f11);
    }

    private void i(float f10) {
        Rect rect = this.f13812o;
        Rect rect2 = this.f13810e;
        rect.right = w0.q((int) f10, rect2.left, rect2.right);
    }

    private static int j(float f10, int i10) {
        return (int) (i10 / f10);
    }

    private Point k(MotionEvent motionEvent) {
        this.J.set((int) motionEvent.getX(), (int) motionEvent.getY());
        return this.J;
    }

    private boolean l(long j10) {
        long j11;
        long j12 = this.U;
        if (j12 <= 0) {
            return false;
        }
        if (this.S) {
            j11 = this.T;
        } else {
            j11 = this.V;
        }
        long j13 = j11;
        long r10 = w0.r(j13 + j10, 0L, j12);
        if (r10 == j13) {
            return false;
        }
        if (!this.S) {
            p(r10);
        } else {
            t(r10);
        }
        r();
        return true;
    }

    private boolean m(Drawable drawable) {
        if (w0.f40158a >= 23 && n(drawable, getLayoutDirection())) {
            return true;
        }
        return false;
    }

    private static boolean n(Drawable drawable, int i10) {
        if (w0.f40158a >= 23 && drawable.setLayoutDirection(i10)) {
            return true;
        }
        return false;
    }

    private void o(int i10, int i11) {
        Rect rect = this.O;
        if (rect != null && rect.width() == i10 && this.O.height() == i11) {
            return;
        }
        Rect rect2 = new Rect(0, 0, i10, i11);
        this.O = rect2;
        setSystemGestureExclusionRects(Collections.singletonList(rect2));
    }

    private void p(long j10) {
        this.T = j10;
        this.S = true;
        setPressed(true);
        ViewParent parent = getParent();
        if (parent != null) {
            parent.requestDisallowInterceptTouchEvent(true);
        }
        Iterator it = this.I.iterator();
        while (it.hasNext()) {
            ((j.a) it.next()).u(this, j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void q(boolean z10) {
        removeCallbacks(this.H);
        this.S = false;
        setPressed(false);
        ViewParent parent = getParent();
        if (parent != null) {
            parent.requestDisallowInterceptTouchEvent(false);
        }
        invalidate();
        Iterator it = this.I.iterator();
        while (it.hasNext()) {
            ((j.a) it.next()).t(this, this.T, z10);
        }
    }

    private void r() {
        long j10;
        this.f13811i.set(this.f13810e);
        this.f13812o.set(this.f13810e);
        if (this.S) {
            j10 = this.T;
        } else {
            j10 = this.V;
        }
        if (this.U > 0) {
            Rect rect = this.f13811i;
            Rect rect2 = this.f13810e;
            rect.right = Math.min(rect2.left + ((int) ((this.f13810e.width() * this.W) / this.U)), rect2.right);
            int width = (int) ((this.f13810e.width() * j10) / this.U);
            Rect rect3 = this.f13812o;
            Rect rect4 = this.f13810e;
            rect3.right = Math.min(rect4.left + width, rect4.right);
        } else {
            Rect rect5 = this.f13811i;
            int i10 = this.f13810e.left;
            rect5.right = i10;
            this.f13812o.right = i10;
        }
        invalidate(this.f13809d);
    }

    private void s() {
        Drawable drawable = this.f13819v;
        if (drawable != null && drawable.isStateful() && this.f13819v.setState(getDrawableState())) {
            invalidate();
        }
    }

    private void t(long j10) {
        if (this.T != j10) {
            this.T = j10;
            Iterator it = this.I.iterator();
            while (it.hasNext()) {
                ((j.a) it.next()).g(this, j10);
            }
        }
    }

    @Override // com.google.android.exoplayer2.ui.j
    public void a(j.a aVar) {
        ne.a.e(aVar);
        this.I.add(aVar);
    }

    @Override // com.google.android.exoplayer2.ui.j
    public void b(long[] jArr, boolean[] zArr, int i10) {
        boolean z10;
        if (i10 != 0 && (jArr == null || zArr == null)) {
            z10 = false;
        } else {
            z10 = true;
        }
        ne.a.a(z10);
        this.f13806a0 = i10;
        this.f13807b0 = jArr;
        this.f13808c0 = zArr;
        r();
    }

    @Override // android.view.View
    protected void drawableStateChanged() {
        super.drawableStateChanged();
        s();
    }

    @Override // com.google.android.exoplayer2.ui.j
    public long getPreferredUpdateDelay() {
        int j10 = j(this.K, this.f13810e.width());
        if (j10 != 0) {
            long j11 = this.U;
            if (j11 != 0 && j11 != -9223372036854775807L) {
                return j11 / j10;
            }
            return LongCompanionObject.MAX_VALUE;
        }
        return LongCompanionObject.MAX_VALUE;
    }

    @Override // android.view.View
    public void jumpDrawablesToCurrentState() {
        super.jumpDrawablesToCurrentState();
        Drawable drawable = this.f13819v;
        if (drawable != null) {
            drawable.jumpToCurrentState();
        }
    }

    @Override // android.view.View
    public void onDraw(Canvas canvas) {
        canvas.save();
        g(canvas);
        f(canvas);
        canvas.restore();
    }

    @Override // android.view.View
    protected void onFocusChanged(boolean z10, int i10, Rect rect) {
        super.onFocusChanged(z10, i10, rect);
        if (this.S && !z10) {
            q(false);
        }
    }

    @Override // android.view.View
    public void onInitializeAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
        super.onInitializeAccessibilityEvent(accessibilityEvent);
        if (accessibilityEvent.getEventType() == 4) {
            accessibilityEvent.getText().add(getProgressText());
        }
        accessibilityEvent.setClassName("android.widget.SeekBar");
    }

    @Override // android.view.View
    public void onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo accessibilityNodeInfo) {
        super.onInitializeAccessibilityNodeInfo(accessibilityNodeInfo);
        accessibilityNodeInfo.setClassName("android.widget.SeekBar");
        accessibilityNodeInfo.setContentDescription(getProgressText());
        if (this.U <= 0) {
            return;
        }
        if (w0.f40158a >= 21) {
            accessibilityNodeInfo.addAction(AccessibilityNodeInfo.AccessibilityAction.ACTION_SCROLL_FORWARD);
            accessibilityNodeInfo.addAction(AccessibilityNodeInfo.AccessibilityAction.ACTION_SCROLL_BACKWARD);
            return;
        }
        accessibilityNodeInfo.addAction(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
        accessibilityNodeInfo.addAction(8192);
    }

    /* JADX WARN: Removed duplicated region for block: B:11:0x001a  */
    @Override // android.view.View, android.view.KeyEvent.Callback
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean onKeyDown(int r5, android.view.KeyEvent r6) {
        /*
            r4 = this;
            boolean r0 = r4.isEnabled()
            if (r0 == 0) goto L30
            long r0 = r4.getPositionIncrement()
            r2 = 66
            r3 = 1
            if (r5 == r2) goto L27
            switch(r5) {
                case 21: goto L13;
                case 22: goto L14;
                case 23: goto L27;
                default: goto L12;
            }
        L12:
            goto L30
        L13:
            long r0 = -r0
        L14:
            boolean r0 = r4.l(r0)
            if (r0 == 0) goto L30
            java.lang.Runnable r5 = r4.H
            r4.removeCallbacks(r5)
            java.lang.Runnable r5 = r4.H
            r0 = 1000(0x3e8, double:4.94E-321)
            r4.postDelayed(r5, r0)
            return r3
        L27:
            boolean r0 = r4.S
            if (r0 == 0) goto L30
            r5 = 0
            r4.q(r5)
            return r3
        L30:
            boolean r5 = super.onKeyDown(r5, r6)
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.ui.DefaultTimeBar.onKeyDown(int, android.view.KeyEvent):boolean");
    }

    @Override // android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        int i14;
        int i15;
        int i16;
        int i17 = i12 - i10;
        int i18 = i13 - i11;
        int paddingLeft = getPaddingLeft();
        int paddingRight = i17 - getPaddingRight();
        if (this.R) {
            i14 = 0;
        } else {
            i14 = this.D;
        }
        if (this.f13822y == 1) {
            i15 = (i18 - getPaddingBottom()) - this.f13821x;
            int i19 = this.f13820w;
            i16 = ((i18 - getPaddingBottom()) - i19) - Math.max(i14 - (i19 / 2), 0);
        } else {
            i15 = (i18 - this.f13821x) / 2;
            i16 = (i18 - this.f13820w) / 2;
        }
        this.f13809d.set(paddingLeft, i15, paddingRight, this.f13821x + i15);
        Rect rect = this.f13810e;
        Rect rect2 = this.f13809d;
        rect.set(rect2.left + i14, i16, rect2.right - i14, this.f13820w + i16);
        if (w0.f40158a >= 29) {
            o(i17, i18);
        }
        r();
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        int mode = View.MeasureSpec.getMode(i11);
        int size = View.MeasureSpec.getSize(i11);
        if (mode == 0) {
            size = this.f13821x;
        } else if (mode != 1073741824) {
            size = Math.min(this.f13821x, size);
        }
        setMeasuredDimension(View.MeasureSpec.getSize(i10), size);
        s();
    }

    @Override // android.view.View
    public void onRtlPropertiesChanged(int i10) {
        Drawable drawable = this.f13819v;
        if (drawable != null && n(drawable, i10)) {
            invalidate();
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:13:0x0025, code lost:
        if (r3 != 3) goto L32;
     */
    @Override // android.view.View
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean onTouchEvent(android.view.MotionEvent r8) {
        /*
            r7 = this;
            boolean r0 = r7.isEnabled()
            r1 = 0
            if (r0 == 0) goto L76
            long r2 = r7.U
            r4 = 0
            int r0 = (r2 > r4 ? 1 : (r2 == r4 ? 0 : -1))
            if (r0 > 0) goto L10
            goto L76
        L10:
            android.graphics.Point r0 = r7.k(r8)
            int r2 = r0.x
            int r0 = r0.y
            int r3 = r8.getAction()
            r4 = 1
            if (r3 == 0) goto L5d
            r5 = 3
            if (r3 == r4) goto L4e
            r6 = 2
            if (r3 == r6) goto L28
            if (r3 == r5) goto L4e
            goto L76
        L28:
            boolean r8 = r7.S
            if (r8 == 0) goto L76
            int r8 = r7.E
            if (r0 >= r8) goto L3a
            int r8 = r7.N
            int r2 = r2 - r8
            int r2 = r2 / r5
            int r8 = r8 + r2
            float r8 = (float) r8
            r7.i(r8)
            goto L40
        L3a:
            r7.N = r2
            float r8 = (float) r2
            r7.i(r8)
        L40:
            long r0 = r7.getScrubberPosition()
            r7.t(r0)
            r7.r()
            r7.invalidate()
            return r4
        L4e:
            boolean r0 = r7.S
            if (r0 == 0) goto L76
            int r8 = r8.getAction()
            if (r8 != r5) goto L59
            r1 = r4
        L59:
            r7.q(r1)
            return r4
        L5d:
            float r8 = (float) r2
            float r0 = (float) r0
            boolean r0 = r7.h(r8, r0)
            if (r0 == 0) goto L76
            r7.i(r8)
            long r0 = r7.getScrubberPosition()
            r7.p(r0)
            r7.r()
            r7.invalidate()
            return r4
        L76:
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.ui.DefaultTimeBar.onTouchEvent(android.view.MotionEvent):boolean");
    }

    @Override // android.view.View
    public boolean performAccessibilityAction(int i10, Bundle bundle) {
        if (super.performAccessibilityAction(i10, bundle)) {
            return true;
        }
        if (this.U <= 0) {
            return false;
        }
        if (i10 == 8192) {
            if (l(-getPositionIncrement())) {
                q(false);
            }
        } else if (i10 != 4096) {
            return false;
        } else {
            if (l(getPositionIncrement())) {
                q(false);
            }
        }
        sendAccessibilityEvent(4);
        return true;
    }

    public void setAdMarkerColor(int i10) {
        this.f13816s.setColor(i10);
        invalidate(this.f13809d);
    }

    public void setBufferedColor(int i10) {
        this.f13814q.setColor(i10);
        invalidate(this.f13809d);
    }

    @Override // com.google.android.exoplayer2.ui.j
    public void setBufferedPosition(long j10) {
        if (this.W == j10) {
            return;
        }
        this.W = j10;
        r();
    }

    @Override // com.google.android.exoplayer2.ui.j
    public void setDuration(long j10) {
        if (this.U == j10) {
            return;
        }
        this.U = j10;
        if (this.S && j10 == -9223372036854775807L) {
            q(true);
        }
        r();
    }

    @Override // android.view.View, com.google.android.exoplayer2.ui.j
    public void setEnabled(boolean z10) {
        super.setEnabled(z10);
        if (this.S && !z10) {
            q(true);
        }
    }

    public void setKeyCountIncrement(int i10) {
        boolean z10;
        if (i10 > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        this.L = i10;
        this.M = -9223372036854775807L;
    }

    public void setKeyTimeIncrement(long j10) {
        boolean z10;
        if (j10 > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        this.L = -1;
        this.M = j10;
    }

    public void setPlayedAdMarkerColor(int i10) {
        this.f13817t.setColor(i10);
        invalidate(this.f13809d);
    }

    public void setPlayedColor(int i10) {
        this.f13813p.setColor(i10);
        invalidate(this.f13809d);
    }

    @Override // com.google.android.exoplayer2.ui.j
    public void setPosition(long j10) {
        if (this.V == j10) {
            return;
        }
        this.V = j10;
        setContentDescription(getProgressText());
        r();
    }

    public void setScrubberColor(int i10) {
        this.f13818u.setColor(i10);
        invalidate(this.f13809d);
    }

    public void setUnplayedColor(int i10) {
        this.f13815r.setColor(i10);
        invalidate(this.f13809d);
    }

    public DefaultTimeBar(Context context, AttributeSet attributeSet, int i10) {
        this(context, attributeSet, i10, attributeSet);
    }

    public DefaultTimeBar(Context context, AttributeSet attributeSet, int i10, AttributeSet attributeSet2) {
        this(context, attributeSet, i10, attributeSet2, 0);
    }

    public DefaultTimeBar(Context context, AttributeSet attributeSet, int i10, AttributeSet attributeSet2, int i11) {
        super(context, attributeSet, i10);
        this.f13809d = new Rect();
        this.f13810e = new Rect();
        this.f13811i = new Rect();
        this.f13812o = new Rect();
        Paint paint = new Paint();
        this.f13813p = paint;
        Paint paint2 = new Paint();
        this.f13814q = paint2;
        Paint paint3 = new Paint();
        this.f13815r = paint3;
        Paint paint4 = new Paint();
        this.f13816s = paint4;
        Paint paint5 = new Paint();
        this.f13817t = paint5;
        Paint paint6 = new Paint();
        this.f13818u = paint6;
        paint6.setAntiAlias(true);
        this.I = new CopyOnWriteArraySet();
        this.J = new Point();
        float f10 = context.getResources().getDisplayMetrics().density;
        this.K = f10;
        this.E = e(f10, -50);
        int e10 = e(f10, 4);
        int e11 = e(f10, 26);
        int e12 = e(f10, 4);
        int e13 = e(f10, 12);
        int e14 = e(f10, 0);
        int e15 = e(f10, 16);
        if (attributeSet2 != null) {
            TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(attributeSet2, n.f32919e, i10, i11);
            try {
                Drawable drawable = obtainStyledAttributes.getDrawable(n.f32930p);
                this.f13819v = drawable;
                if (drawable != null) {
                    m(drawable);
                    e11 = Math.max(drawable.getMinimumHeight(), e11);
                }
                this.f13820w = obtainStyledAttributes.getDimensionPixelSize(n.f32923i, e10);
                this.f13821x = obtainStyledAttributes.getDimensionPixelSize(n.f32932r, e11);
                this.f13822y = obtainStyledAttributes.getInt(n.f32922h, 0);
                this.f13823z = obtainStyledAttributes.getDimensionPixelSize(n.f32921g, e12);
                this.A = obtainStyledAttributes.getDimensionPixelSize(n.f32931q, e13);
                this.B = obtainStyledAttributes.getDimensionPixelSize(n.f32928n, e14);
                this.C = obtainStyledAttributes.getDimensionPixelSize(n.f32929o, e15);
                int i12 = obtainStyledAttributes.getInt(n.f32926l, -1);
                int i13 = obtainStyledAttributes.getInt(n.f32927m, -1);
                int i14 = obtainStyledAttributes.getInt(n.f32924j, -855638017);
                int i15 = obtainStyledAttributes.getInt(n.f32933s, 872415231);
                int i16 = obtainStyledAttributes.getInt(n.f32920f, -1291845888);
                int i17 = obtainStyledAttributes.getInt(n.f32925k, 872414976);
                paint.setColor(i12);
                paint6.setColor(i13);
                paint2.setColor(i14);
                paint3.setColor(i15);
                paint4.setColor(i16);
                paint5.setColor(i17);
                obtainStyledAttributes.recycle();
            } catch (Throwable th2) {
                obtainStyledAttributes.recycle();
                throw th2;
            }
        } else {
            this.f13820w = e10;
            this.f13821x = e11;
            this.f13822y = 0;
            this.f13823z = e12;
            this.A = e13;
            this.B = e14;
            this.C = e15;
            paint.setColor(-1);
            paint6.setColor(-1);
            paint2.setColor(-855638017);
            paint3.setColor(872415231);
            paint4.setColor(-1291845888);
            paint5.setColor(872414976);
            this.f13819v = null;
        }
        StringBuilder sb2 = new StringBuilder();
        this.F = sb2;
        this.G = new Formatter(sb2, Locale.getDefault());
        this.H = new Runnable() { // from class: ke.c
            @Override // java.lang.Runnable
            public final void run() {
                DefaultTimeBar.this.q(false);
            }
        };
        Drawable drawable2 = this.f13819v;
        if (drawable2 != null) {
            this.D = (drawable2.getMinimumWidth() + 1) / 2;
        } else {
            this.D = (Math.max(this.B, Math.max(this.A, this.C)) + 1) / 2;
        }
        this.Q = 1.0f;
        ValueAnimator valueAnimator = new ValueAnimator();
        this.P = valueAnimator;
        valueAnimator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: ke.d
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                DefaultTimeBar.c(DefaultTimeBar.this, valueAnimator2);
            }
        });
        this.U = -9223372036854775807L;
        this.M = -9223372036854775807L;
        this.L = 20;
        setFocusable(true);
        if (getImportantForAccessibility() == 0) {
            setImportantForAccessibility(1);
        }
    }
}
