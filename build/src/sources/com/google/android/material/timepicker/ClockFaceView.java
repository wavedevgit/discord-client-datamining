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
import com.google.android.material.timepicker.ClockHandView;
import java.util.Arrays;
import yg.h;
import yg.j;
import yg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class ClockFaceView extends d implements ClockHandView.b {
    private String[] A;
    private float B;
    private final ColorStateList C;

    /* renamed from: o  reason: collision with root package name */
    private final ClockHandView f16592o;

    /* renamed from: p  reason: collision with root package name */
    private final Rect f16593p;

    /* renamed from: q  reason: collision with root package name */
    private final RectF f16594q;

    /* renamed from: r  reason: collision with root package name */
    private final Rect f16595r;

    /* renamed from: s  reason: collision with root package name */
    private final SparseArray f16596s;

    /* renamed from: t  reason: collision with root package name */
    private final androidx.core.view.a f16597t;

    /* renamed from: u  reason: collision with root package name */
    private final int[] f16598u;

    /* renamed from: v  reason: collision with root package name */
    private final float[] f16599v;

    /* renamed from: w  reason: collision with root package name */
    private final int f16600w;

    /* renamed from: x  reason: collision with root package name */
    private final int f16601x;

    /* renamed from: y  reason: collision with root package name */
    private final int f16602y;

    /* renamed from: z  reason: collision with root package name */
    private final int f16603z;

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
            ClockFaceView.this.l(((ClockFaceView.this.getHeight() / 2) - ClockFaceView.this.f16592o.i()) - ClockFaceView.this.f16600w);
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
            int intValue = ((Integer) view.getTag(yg.f.f54454r)).intValue();
            if (intValue > 0) {
                accessibilityNodeInfoCompat.d1((View) ClockFaceView.this.f16596s.get(intValue - 1));
            }
            accessibilityNodeInfoCompat.z0(AccessibilityNodeInfoCompat.g.b(0, 1, intValue, 1, false, view.isSelected()));
            accessibilityNodeInfoCompat.x0(true);
            accessibilityNodeInfoCompat.b(AccessibilityNodeInfoCompat.a.f3303i);
        }

        @Override // androidx.core.view.a
        public boolean performAccessibilityAction(View view, int i10, Bundle bundle) {
            if (i10 == 16) {
                long uptimeMillis = SystemClock.uptimeMillis();
                view.getHitRect(ClockFaceView.this.f16593p);
                float centerX = ClockFaceView.this.f16593p.centerX();
                float centerY = ClockFaceView.this.f16593p.centerY();
                ClockFaceView.this.f16592o.onTouchEvent(MotionEvent.obtain(uptimeMillis, uptimeMillis, 0, centerX, centerY, 0));
                ClockFaceView.this.f16592o.onTouchEvent(MotionEvent.obtain(uptimeMillis, uptimeMillis, 1, centerX, centerY, 0));
                return true;
            }
            return super.performAccessibilityAction(view, i10, bundle);
        }
    }

    public ClockFaceView(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, yg.b.B);
    }

    private void t() {
        boolean z10;
        RectF e10 = this.f16592o.e();
        TextView v10 = v(e10);
        for (int i10 = 0; i10 < this.f16596s.size(); i10++) {
            TextView textView = (TextView) this.f16596s.get(i10);
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
        textView.getHitRect(this.f16593p);
        this.f16594q.set(this.f16593p);
        textView.getLineBounds(0, this.f16595r);
        RectF rectF2 = this.f16594q;
        Rect rect = this.f16595r;
        rectF2.inset(rect.left, rect.top);
        if (!RectF.intersects(rectF, this.f16594q)) {
            return null;
        }
        return new RadialGradient(rectF.centerX() - this.f16594q.left, rectF.centerY() - this.f16594q.top, rectF.width() * 0.5f, this.f16598u, this.f16599v, Shader.TileMode.CLAMP);
    }

    private TextView v(RectF rectF) {
        float f10 = Float.MAX_VALUE;
        TextView textView = null;
        for (int i10 = 0; i10 < this.f16596s.size(); i10++) {
            TextView textView2 = (TextView) this.f16596s.get(i10);
            if (textView2 != null) {
                textView2.getHitRect(this.f16593p);
                this.f16594q.set(this.f16593p);
                this.f16594q.union(rectF);
                float width = this.f16594q.width() * this.f16594q.height();
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
        int size = this.f16596s.size();
        boolean z10 = false;
        for (int i11 = 0; i11 < Math.max(this.A.length, size); i11++) {
            TextView textView = (TextView) this.f16596s.get(i11);
            if (i11 >= this.A.length) {
                removeView(textView);
                this.f16596s.remove(i11);
            } else {
                if (textView == null) {
                    textView = (TextView) from.inflate(h.f54474g, (ViewGroup) this, false);
                    this.f16596s.put(i11, textView);
                    addView(textView);
                }
                textView.setText(this.A[i11]);
                textView.setTag(yg.f.f54454r, Integer.valueOf(i11));
                int i12 = (i11 / 12) + 1;
                textView.setTag(yg.f.f54449m, Integer.valueOf(i12));
                if (i12 > 1) {
                    z10 = true;
                }
                h0.n0(textView, this.f16597t);
                textView.setTextColor(this.C);
                if (i10 != 0) {
                    textView.setContentDescription(getResources().getString(i10, this.A[i11]));
                }
            }
        }
        this.f16592o.p(z10);
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
            this.f16592o.l(k());
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.material.timepicker.d
    public void n() {
        super.n();
        for (int i10 = 0; i10 < this.f16596s.size(); i10++) {
            ((TextView) this.f16596s.get(i10)).setVisibility(0);
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
        int w10 = (int) (this.f16603z / w(this.f16601x / displayMetrics.heightPixels, this.f16602y / displayMetrics.widthPixels, 1.0f));
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
        this.f16593p = new Rect();
        this.f16594q = new RectF();
        this.f16595r = new Rect();
        this.f16596s = new SparseArray();
        this.f16599v = new float[]{0.0f, 0.9f, 1.0f};
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, k.f54707r1, i10, j.f54539z);
        Resources resources = getResources();
        ColorStateList a10 = lh.c.a(context, obtainStyledAttributes, k.f54725t1);
        this.C = a10;
        LayoutInflater.from(context).inflate(h.f54475h, (ViewGroup) this, true);
        ClockHandView clockHandView = (ClockHandView) findViewById(yg.f.f54448l);
        this.f16592o = clockHandView;
        this.f16600w = resources.getDimensionPixelSize(yg.d.f54419t);
        int colorForState = a10.getColorForState(new int[]{16842913}, a10.getDefaultColor());
        this.f16598u = new int[]{colorForState, colorForState, a10.getDefaultColor()};
        clockHandView.b(this);
        int defaultColor = g.a.a(context, yg.c.f54387f).getDefaultColor();
        ColorStateList a11 = lh.c.a(context, obtainStyledAttributes, k.f54716s1);
        setBackgroundColor(a11 != null ? a11.getDefaultColor() : defaultColor);
        getViewTreeObserver().addOnPreDrawListener(new a());
        setFocusable(true);
        obtainStyledAttributes.recycle();
        this.f16597t = new b();
        String[] strArr = new String[12];
        Arrays.fill(strArr, "");
        x(strArr, 0);
        this.f16601x = resources.getDimensionPixelSize(yg.d.I);
        this.f16602y = resources.getDimensionPixelSize(yg.d.J);
        this.f16603z = resources.getDimensionPixelSize(yg.d.f54421v);
    }
}
