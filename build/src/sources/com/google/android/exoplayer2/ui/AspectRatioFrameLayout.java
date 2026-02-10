package com.google.android.exoplayer2.ui;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import android.view.View;
import android.widget.FrameLayout;
import le.n;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AspectRatioFrameLayout extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private final c f13829d;

    /* renamed from: e  reason: collision with root package name */
    private float f13830e;

    /* renamed from: i  reason: collision with root package name */
    private int f13831i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private float f13832d;

        /* renamed from: e  reason: collision with root package name */
        private float f13833e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f13834i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f13835o;

        private c() {
        }

        public void a(float f10, float f11, boolean z10) {
            this.f13832d = f10;
            this.f13833e = f11;
            this.f13834i = z10;
            if (!this.f13835o) {
                this.f13835o = true;
                AspectRatioFrameLayout.this.post(this);
            }
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f13835o = false;
            AspectRatioFrameLayout.a(AspectRatioFrameLayout.this);
        }
    }

    public AspectRatioFrameLayout(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f13831i = 0;
        if (attributeSet != null) {
            TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(attributeSet, n.f35785a, 0, 0);
            try {
                this.f13831i = obtainStyledAttributes.getInt(n.f35786b, 0);
            } finally {
                obtainStyledAttributes.recycle();
            }
        }
        this.f13829d = new c();
    }

    static /* synthetic */ b a(AspectRatioFrameLayout aspectRatioFrameLayout) {
        aspectRatioFrameLayout.getClass();
        return null;
    }

    public int getResizeMode() {
        return this.f13831i;
    }

    @Override // android.widget.FrameLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        float f10;
        float f11;
        super.onMeasure(i10, i11);
        if (this.f13830e <= 0.0f) {
            return;
        }
        int measuredWidth = getMeasuredWidth();
        int measuredHeight = getMeasuredHeight();
        float f12 = measuredWidth;
        float f13 = measuredHeight;
        float f14 = f12 / f13;
        float f15 = (this.f13830e / f14) - 1.0f;
        if (Math.abs(f15) <= 0.01f) {
            this.f13829d.a(this.f13830e, f14, false);
            return;
        }
        int i12 = this.f13831i;
        if (i12 != 0) {
            if (i12 != 1) {
                if (i12 != 2) {
                    if (i12 == 4) {
                        if (f15 > 0.0f) {
                            f10 = this.f13830e;
                        } else {
                            f11 = this.f13830e;
                        }
                    }
                } else {
                    f10 = this.f13830e;
                }
                measuredWidth = (int) (f13 * f10);
            } else {
                f11 = this.f13830e;
            }
            measuredHeight = (int) (f12 / f11);
        } else if (f15 > 0.0f) {
            f11 = this.f13830e;
            measuredHeight = (int) (f12 / f11);
        } else {
            f10 = this.f13830e;
            measuredWidth = (int) (f13 * f10);
        }
        this.f13829d.a(this.f13830e, f14, true);
        super.onMeasure(View.MeasureSpec.makeMeasureSpec(measuredWidth, 1073741824), View.MeasureSpec.makeMeasureSpec(measuredHeight, 1073741824));
    }

    public void setAspectRatio(float f10) {
        if (this.f13830e != f10) {
            this.f13830e = f10;
            requestLayout();
        }
    }

    public void setAspectRatioListener(b bVar) {
    }

    public void setResizeMode(int i10) {
        if (this.f13831i != i10) {
            this.f13831i = i10;
            requestLayout();
        }
    }
}
