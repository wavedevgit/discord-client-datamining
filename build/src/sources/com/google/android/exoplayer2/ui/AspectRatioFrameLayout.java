package com.google.android.exoplayer2.ui;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import android.view.View;
import android.widget.FrameLayout;
import ke.n;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AspectRatioFrameLayout extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private final c f12766d;

    /* renamed from: e  reason: collision with root package name */
    private float f12767e;

    /* renamed from: i  reason: collision with root package name */
    private int f12768i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private float f12769d;

        /* renamed from: e  reason: collision with root package name */
        private float f12770e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f12771i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f12772o;

        private c() {
        }

        public void a(float f10, float f11, boolean z10) {
            this.f12769d = f10;
            this.f12770e = f11;
            this.f12771i = z10;
            if (!this.f12772o) {
                this.f12772o = true;
                AspectRatioFrameLayout.this.post(this);
            }
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f12772o = false;
            AspectRatioFrameLayout.a(AspectRatioFrameLayout.this);
        }
    }

    public AspectRatioFrameLayout(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f12768i = 0;
        if (attributeSet != null) {
            TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(attributeSet, n.f32313a, 0, 0);
            try {
                this.f12768i = obtainStyledAttributes.getInt(n.f32314b, 0);
            } finally {
                obtainStyledAttributes.recycle();
            }
        }
        this.f12766d = new c();
    }

    static /* synthetic */ b a(AspectRatioFrameLayout aspectRatioFrameLayout) {
        aspectRatioFrameLayout.getClass();
        return null;
    }

    public int getResizeMode() {
        return this.f12768i;
    }

    @Override // android.widget.FrameLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        float f10;
        float f11;
        super.onMeasure(i10, i11);
        if (this.f12767e <= 0.0f) {
            return;
        }
        int measuredWidth = getMeasuredWidth();
        int measuredHeight = getMeasuredHeight();
        float f12 = measuredWidth;
        float f13 = measuredHeight;
        float f14 = f12 / f13;
        float f15 = (this.f12767e / f14) - 1.0f;
        if (Math.abs(f15) <= 0.01f) {
            this.f12766d.a(this.f12767e, f14, false);
            return;
        }
        int i12 = this.f12768i;
        if (i12 != 0) {
            if (i12 != 1) {
                if (i12 != 2) {
                    if (i12 == 4) {
                        if (f15 > 0.0f) {
                            f10 = this.f12767e;
                        } else {
                            f11 = this.f12767e;
                        }
                    }
                } else {
                    f10 = this.f12767e;
                }
                measuredWidth = (int) (f13 * f10);
            } else {
                f11 = this.f12767e;
            }
            measuredHeight = (int) (f12 / f11);
        } else if (f15 > 0.0f) {
            f11 = this.f12767e;
            measuredHeight = (int) (f12 / f11);
        } else {
            f10 = this.f12767e;
            measuredWidth = (int) (f13 * f10);
        }
        this.f12766d.a(this.f12767e, f14, true);
        super.onMeasure(View.MeasureSpec.makeMeasureSpec(measuredWidth, 1073741824), View.MeasureSpec.makeMeasureSpec(measuredHeight, 1073741824));
    }

    public void setAspectRatio(float f10) {
        if (this.f12767e != f10) {
            this.f12767e = f10;
            requestLayout();
        }
    }

    public void setAspectRatioListener(b bVar) {
    }

    public void setResizeMode(int i10) {
        if (this.f12768i != i10) {
            this.f12768i = i10;
            requestLayout();
        }
    }
}
