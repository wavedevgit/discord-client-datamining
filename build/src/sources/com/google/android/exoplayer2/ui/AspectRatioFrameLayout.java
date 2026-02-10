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
    private final c f13252d;

    /* renamed from: e  reason: collision with root package name */
    private float f13253e;

    /* renamed from: i  reason: collision with root package name */
    private int f13254i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private float f13255d;

        /* renamed from: e  reason: collision with root package name */
        private float f13256e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f13257i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f13258o;

        private c() {
        }

        public void a(float f10, float f11, boolean z10) {
            this.f13255d = f10;
            this.f13256e = f11;
            this.f13257i = z10;
            if (!this.f13258o) {
                this.f13258o = true;
                AspectRatioFrameLayout.this.post(this);
            }
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f13258o = false;
            AspectRatioFrameLayout.a(AspectRatioFrameLayout.this);
        }
    }

    public AspectRatioFrameLayout(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f13254i = 0;
        if (attributeSet != null) {
            TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(attributeSet, n.f35888a, 0, 0);
            try {
                this.f13254i = obtainStyledAttributes.getInt(n.f35889b, 0);
            } finally {
                obtainStyledAttributes.recycle();
            }
        }
        this.f13252d = new c();
    }

    static /* synthetic */ b a(AspectRatioFrameLayout aspectRatioFrameLayout) {
        aspectRatioFrameLayout.getClass();
        return null;
    }

    public int getResizeMode() {
        return this.f13254i;
    }

    @Override // android.widget.FrameLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        float f10;
        float f11;
        super.onMeasure(i10, i11);
        if (this.f13253e <= 0.0f) {
            return;
        }
        int measuredWidth = getMeasuredWidth();
        int measuredHeight = getMeasuredHeight();
        float f12 = measuredWidth;
        float f13 = measuredHeight;
        float f14 = f12 / f13;
        float f15 = (this.f13253e / f14) - 1.0f;
        if (Math.abs(f15) <= 0.01f) {
            this.f13252d.a(this.f13253e, f14, false);
            return;
        }
        int i12 = this.f13254i;
        if (i12 != 0) {
            if (i12 != 1) {
                if (i12 != 2) {
                    if (i12 == 4) {
                        if (f15 > 0.0f) {
                            f10 = this.f13253e;
                        } else {
                            f11 = this.f13253e;
                        }
                    }
                } else {
                    f10 = this.f13253e;
                }
                measuredWidth = (int) (f13 * f10);
            } else {
                f11 = this.f13253e;
            }
            measuredHeight = (int) (f12 / f11);
        } else if (f15 > 0.0f) {
            f11 = this.f13253e;
            measuredHeight = (int) (f12 / f11);
        } else {
            f10 = this.f13253e;
            measuredWidth = (int) (f13 * f10);
        }
        this.f13252d.a(this.f13253e, f14, true);
        super.onMeasure(View.MeasureSpec.makeMeasureSpec(measuredWidth, 1073741824), View.MeasureSpec.makeMeasureSpec(measuredHeight, 1073741824));
    }

    public void setAspectRatio(float f10) {
        if (this.f13253e != f10) {
            this.f13253e = f10;
            requestLayout();
        }
    }

    public void setAspectRatioListener(b bVar) {
    }

    public void setResizeMode(int i10) {
        if (this.f13254i != i10) {
            this.f13254i = i10;
            requestLayout();
        }
    }
}
