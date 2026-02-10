package com.google.android.material.timepicker;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.RadialGradient;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Shader;
import android.os.Bundle;
import android.os.SystemClock;
import android.util.AttributeSet;
import android.util.DisplayMetrics;
import android.util.SparseArray;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewTreeObserver;
import android.view.accessibility.AccessibilityNodeInfo;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.h0;
import bh.h;
import bh.j;
import bh.k;
import com.google.android.material.timepicker.ClockHandView;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class ClockFaceView extends d implements ClockHandView.b {
    private String[] A;
    private float B;
    private final ColorStateList C;

    /* renamed from: o  reason: collision with root package name */
    private final ClockHandView f15703o;

    /* renamed from: p  reason: collision with root package name */
    private final Rect f15704p;

    /* renamed from: q  reason: collision with root package name */
    private final RectF f15705q;

    /* renamed from: r  reason: collision with root package name */
    private final Rect f15706r;

    /* renamed from: s  reason: collision with root package name */
    private final SparseArray f15707s;

    /* renamed from: t  reason: collision with root package name */
    private final androidx.core.view.a f15708t;

    /* renamed from: u  reason: collision with root package name */
    private final int[] f15709u;

    /* renamed from: v  reason: collision with root package name */
    private final float[] f15710v;

    /* renamed from: w  reason: collision with root package name */
    private final int f15711w;

    /* renamed from: x  reason: collision with root package name */
    private final int f15712x;

    /* renamed from: y  reason: collision with root package name */
    private final int f15713y;

    /* renamed from: z  reason: collision with root package name */
    private final int f15714z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements ViewTreeObserver.OnPreDrawListener {
        a() {
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            if (!ClockFaceView.this.isShown()) {
                return true;
            }
            ClockFaceView.this.getViewTreeObserver().removeOnPreDrawListener(this);
            ClockFaceView.this.l(((ClockFaceView.this.getHeight() / 2) - ClockFaceView.this.f15703o.i()) - ClockFaceView.this.f15711w);
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b extends androidx.core.view.a {
        b() {
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
            int intValue = ((Integer) view.getTag(bh.f.f6725r)).intValue();
            if (intValue > 0) {
                accessibilityNodeInfoCompat.d1((View) ClockFaceView.this.f15707s.get(intValue - 1));
            }
            accessibilityNodeInfoCompat.z0(AccessibilityNodeInfoCompat.g.b(0, 1, intValue, 1, false, view.isSelected()));
            accessibilityNodeInfoCompat.x0(true);
            accessibilityNodeInfoCompat.b(AccessibilityNodeInfoCompat.a.f3454i);
        }

        @Override // androidx.core.view.a
        public boolean performAccessibilityAction(View view, int i10, Bundle bundle) {
            if (i10 == 16) {
                long uptimeMillis = SystemClock.uptimeMillis();
                view.getHitRect(ClockFaceView.this.f15704p);
                float centerX = ClockFaceView.this.f15704p.centerX();
                float centerY = ClockFaceView.this.f15704p.centerY();
                ClockFaceView.this.f15703o.onTouchEvent(MotionEvent.obtain(uptimeMillis, uptimeMillis, 0, centerX, centerY, 0));
                ClockFaceView.this.f15703o.onTouchEvent(MotionEvent.obtain(uptimeMillis, uptimeMillis, 1, centerX, centerY, 0));
                return true;
            }
            return super.performAccessibilityAction(view, i10, bundle);
        }
    }

    public ClockFaceView(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, bh.b.B);
    }

    private void t() {
        boolean z10;
        RectF e10 = this.f15703o.e();
        TextView v10 = v(e10);
        for (int i10 = 0; i10 < this.f15707s.size(); i10++) {
            TextView textView = (TextView) this.f15707s.get(i10);
            if (textView != null) {
                if (textView == v10) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                textView.setSelected(z10);
                textView.getPaint().setShader(u(e10, textView));
                textView.invalidate();
            }
        }
    }

    private RadialGradient u(RectF rectF, TextView textView) {
        textView.getHitRect(this.f15704p);
        this.f15705q.set(this.f15704p);
        textView.getLineBounds(0, this.f15706r);
        RectF rectF2 = this.f15705q;
        Rect rect = this.f15706r;
        rectF2.inset(rect.left, rect.top);
        if (!RectF.intersects(rectF, this.f15705q)) {
            return null;
        }
        return new RadialGradient(rectF.centerX() - this.f15705q.left, rectF.centerY() - this.f15705q.top, rectF.width() * 0.5f, this.f15709u, this.f15710v, Shader.TileMode.CLAMP);
    }

    private TextView v(RectF rectF) {
        float f10 = Float.MAX_VALUE;
        TextView textView = null;
        for (int i10 = 0; i10 < this.f15707s.size(); i10++) {
            TextView textView2 = (TextView) this.f15707s.get(i10);
            if (textView2 != null) {
                textView2.getHitRect(this.f15704p);
                this.f15705q.set(this.f15704p);
                this.f15705q.union(rectF);
                float width = this.f15705q.width() * this.f15705q.height();
                if (width < f10) {
                    textView = textView2;
                    f10 = width;
                }
            }
        }
        return textView;
    }

    private static float w(float f10, float f11, float f12) {
        return Math.max(Math.max(f10, f11), f12);
    }

    private void y(int i10) {
        LayoutInflater from = LayoutInflater.from(getContext());
        int size = this.f15707s.size();
        boolean z10 = false;
        for (int i11 = 0; i11 < Math.max(this.A.length, size); i11++) {
            TextView textView = (TextView) this.f15707s.get(i11);
            if (i11 >= this.A.length) {
                removeView(textView);
                this.f15707s.remove(i11);
            } else {
                if (textView == null) {
                    textView = (TextView) from.inflate(h.f6745g, (ViewGroup) this, false);
                    this.f15707s.put(i11, textView);
                    addView(textView);
                }
                textView.setText(this.A[i11]);
                textView.setTag(bh.f.f6725r, Integer.valueOf(i11));
                int i12 = (i11 / 12) + 1;
                textView.setTag(bh.f.f6720m, Integer.valueOf(i12));
                if (i12 > 1) {
                    z10 = true;
                }
                h0.n0(textView, this.f15708t);
                textView.setTextColor(this.C);
                if (i10 != 0) {
                    textView.setContentDescription(getResources().getString(i10, this.A[i11]));
                }
            }
        }
        this.f15703o.p(z10);
    }

    @Override // com.google.android.material.timepicker.ClockHandView.b
    public void a(float f10, boolean z10) {
        if (Math.abs(this.B - f10) > 0.001f) {
            this.B = f10;
            t();
        }
    }

    @Override // com.google.android.material.timepicker.d
    public void l(int i10) {
        if (i10 != k()) {
            super.l(i10);
            this.f15703o.l(k());
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.material.timepicker.d
    public void n() {
        super.n();
        for (int i10 = 0; i10 < this.f15707s.size(); i10++) {
            ((TextView) this.f15707s.get(i10)).setVisibility(0);
        }
    }

    @Override // android.view.View
    public void onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo accessibilityNodeInfo) {
        super.onInitializeAccessibilityNodeInfo(accessibilityNodeInfo);
        AccessibilityNodeInfoCompat.h1(accessibilityNodeInfo).y0(AccessibilityNodeInfoCompat.f.b(1, this.A.length, false, 1));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.constraintlayout.widget.ConstraintLayout, android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        t();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.constraintlayout.widget.ConstraintLayout, android.view.View
    public void onMeasure(int i10, int i11) {
        DisplayMetrics displayMetrics = getResources().getDisplayMetrics();
        int w10 = (int) (this.f15714z / w(this.f15712x / displayMetrics.heightPixels, this.f15713y / displayMetrics.widthPixels, 1.0f));
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(w10, 1073741824);
        setMeasuredDimension(w10, w10);
        super.onMeasure(makeMeasureSpec, makeMeasureSpec);
    }

    public void x(String[] strArr, int i10) {
        this.A = strArr;
        y(i10);
    }

    public ClockFaceView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f15704p = new Rect();
        this.f15705q = new RectF();
        this.f15706r = new Rect();
        this.f15707s = new SparseArray();
        this.f15710v = new float[]{0.0f, 0.9f, 1.0f};
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, k.f6978r1, i10, j.f6810z);
        Resources resources = getResources();
        ColorStateList a10 = oh.c.a(context, obtainStyledAttributes, k.f6996t1);
        this.C = a10;
        LayoutInflater.from(context).inflate(h.f6746h, (ViewGroup) this, true);
        ClockHandView clockHandView = (ClockHandView) findViewById(bh.f.f6719l);
        this.f15703o = clockHandView;
        this.f15711w = resources.getDimensionPixelSize(bh.d.f6690t);
        int colorForState = a10.getColorForState(new int[]{16842913}, a10.getDefaultColor());
        this.f15709u = new int[]{colorForState, colorForState, a10.getDefaultColor()};
        clockHandView.b(this);
        int defaultColor = g.a.a(context, bh.c.f6658f).getDefaultColor();
        ColorStateList a11 = oh.c.a(context, obtainStyledAttributes, k.f6987s1);
        setBackgroundColor(a11 != null ? a11.getDefaultColor() : defaultColor);
        getViewTreeObserver().addOnPreDrawListener(new a());
        setFocusable(true);
        obtainStyledAttributes.recycle();
        this.f15708t = new b();
        String[] strArr = new String[12];
        Arrays.fill(strArr, "");
        x(strArr, 0);
        this.f15712x = resources.getDimensionPixelSize(bh.d.I);
        this.f15713y = resources.getDimensionPixelSize(bh.d.J);
        this.f15714z = resources.getDimensionPixelSize(bh.d.f6692v);
    }
}
