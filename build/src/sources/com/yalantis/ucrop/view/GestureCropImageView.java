package com.yalantis.ucrop.view;

import android.content.Context;
import android.util.AttributeSet;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.ScaleGestureDetector;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import rq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class GestureCropImageView extends com.yalantis.ucrop.view.a {
    private ScaleGestureDetector M;
    private h N;
    private GestureDetector O;
    private float P;
    private float Q;
    private boolean R;
    private boolean S;
    private boolean T;
    private int U;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends GestureDetector.SimpleOnGestureListener {
        private b() {
        }

        @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnDoubleTapListener
        public boolean onDoubleTap(MotionEvent motionEvent) {
            GestureCropImageView gestureCropImageView = GestureCropImageView.this;
            gestureCropImageView.B(gestureCropImageView.getDoubleTapTargetScale(), motionEvent.getX(), motionEvent.getY(), 200L);
            return super.onDoubleTap(motionEvent);
        }

        @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnGestureListener
        public boolean onScroll(MotionEvent motionEvent, MotionEvent motionEvent2, float f10, float f11) {
            GestureCropImageView.this.m(-f10, -f11);
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends h.b {
        private c() {
        }

        @Override // rq.h.a
        public boolean a(h hVar) {
            GestureCropImageView.this.k(hVar.c(), GestureCropImageView.this.P, GestureCropImageView.this.Q);
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d extends ScaleGestureDetector.SimpleOnScaleGestureListener {
        private d() {
        }

        @Override // android.view.ScaleGestureDetector.SimpleOnScaleGestureListener, android.view.ScaleGestureDetector.OnScaleGestureListener
        public boolean onScale(ScaleGestureDetector scaleGestureDetector) {
            GestureCropImageView.this.l(scaleGestureDetector.getScaleFactor(), GestureCropImageView.this.P, GestureCropImageView.this.Q);
            return true;
        }
    }

    public GestureCropImageView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private void I() {
        this.O = new GestureDetector(getContext(), new b(), null, true);
        this.M = new ScaleGestureDetector(getContext(), new d());
        this.N = new h(new c());
    }

    public int getDoubleTapScaleSteps() {
        return this.U;
    }

    protected float getDoubleTapTargetScale() {
        return getCurrentScale() * ((float) Math.pow(getMaxScale() / getMinScale(), 1.0f / this.U));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.yalantis.ucrop.view.b
    public void i() {
        super.i();
        I();
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        if ((motionEvent.getAction() & SetSpanOperation.SPAN_MAX_PRIORITY) == 0) {
            t();
        }
        if (motionEvent.getPointerCount() > 1) {
            this.P = (motionEvent.getX(0) + motionEvent.getX(1)) / 2.0f;
            this.Q = (motionEvent.getY(0) + motionEvent.getY(1)) / 2.0f;
        }
        if (this.T) {
            this.O.onTouchEvent(motionEvent);
        }
        if (this.S) {
            this.M.onTouchEvent(motionEvent);
        }
        if (this.R) {
            this.N.d(motionEvent);
        }
        if ((motionEvent.getAction() & SetSpanOperation.SPAN_MAX_PRIORITY) == 1) {
            z();
        }
        return true;
    }

    public void setDoubleTapScaleSteps(int i10) {
        this.U = i10;
    }

    public void setGestureEnabled(boolean z10) {
        this.T = z10;
    }

    public void setRotateEnabled(boolean z10) {
        this.R = z10;
    }

    public void setScaleEnabled(boolean z10) {
        this.S = z10;
    }

    public GestureCropImageView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.R = true;
        this.S = true;
        this.T = true;
        this.U = 5;
    }
}
