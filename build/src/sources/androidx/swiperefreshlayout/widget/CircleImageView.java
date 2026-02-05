package androidx.swiperefreshlayout.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.RadialGradient;
import android.graphics.Shader;
import android.graphics.drawable.ShapeDrawable;
import android.graphics.drawable.shapes.OvalShape;
import android.view.animation.Animation;
import android.widget.ImageView;
import androidx.core.view.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class CircleImageView extends ImageView {

    /* renamed from: d  reason: collision with root package name */
    private Animation.AnimationListener f5197d;

    /* renamed from: e  reason: collision with root package name */
    private int f5198e;

    /* renamed from: i  reason: collision with root package name */
    private int f5199i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends OvalShape {

        /* renamed from: d  reason: collision with root package name */
        private Paint f5200d = new Paint();

        /* renamed from: e  reason: collision with root package name */
        private int f5201e;

        /* renamed from: i  reason: collision with root package name */
        private CircleImageView f5202i;

        a(CircleImageView circleImageView, int i10) {
            this.f5202i = circleImageView;
            this.f5201e = i10;
            a((int) rect().width());
        }

        private void a(int i10) {
            float f10 = i10 / 2;
            this.f5200d.setShader(new RadialGradient(f10, f10, this.f5201e, new int[]{1023410176, 0}, (float[]) null, Shader.TileMode.CLAMP));
        }

        @Override // android.graphics.drawable.shapes.OvalShape, android.graphics.drawable.shapes.RectShape, android.graphics.drawable.shapes.Shape
        public void draw(Canvas canvas, Paint paint) {
            int width;
            float width2 = this.f5202i.getWidth() / 2;
            float height = this.f5202i.getHeight() / 2;
            canvas.drawCircle(width2, height, width2, this.f5200d);
            canvas.drawCircle(width2, height, width - this.f5201e, paint);
        }

        @Override // android.graphics.drawable.shapes.RectShape, android.graphics.drawable.shapes.Shape
        protected void onResize(float f10, float f11) {
            super.onResize(f10, f11);
            a((int) f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CircleImageView(Context context) {
        super(context);
        ShapeDrawable shapeDrawable;
        float f10 = getContext().getResources().getDisplayMetrics().density;
        int i10 = (int) (1.75f * f10);
        int i11 = (int) (0.0f * f10);
        this.f5198e = (int) (3.5f * f10);
        TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(b4.a.f6104f);
        this.f5199i = obtainStyledAttributes.getColor(b4.a.f6105g, -328966);
        obtainStyledAttributes.recycle();
        if (a()) {
            shapeDrawable = new ShapeDrawable(new OvalShape());
            h0.v0(this, f10 * 4.0f);
        } else {
            ShapeDrawable shapeDrawable2 = new ShapeDrawable(new a(this, this.f5198e));
            setLayerType(1, shapeDrawable2.getPaint());
            shapeDrawable2.getPaint().setShadowLayer(this.f5198e, i11, i10, 503316480);
            int i12 = this.f5198e;
            setPadding(i12, i12, i12, i12);
            shapeDrawable = shapeDrawable2;
        }
        shapeDrawable.getPaint().setColor(this.f5199i);
        h0.r0(this, shapeDrawable);
    }

    private boolean a() {
        return true;
    }

    public void b(Animation.AnimationListener animationListener) {
        this.f5197d = animationListener;
    }

    @Override // android.view.View
    public void onAnimationEnd() {
        super.onAnimationEnd();
        Animation.AnimationListener animationListener = this.f5197d;
        if (animationListener != null) {
            animationListener.onAnimationEnd(getAnimation());
        }
    }

    @Override // android.view.View
    public void onAnimationStart() {
        super.onAnimationStart();
        Animation.AnimationListener animationListener = this.f5197d;
        if (animationListener != null) {
            animationListener.onAnimationStart(getAnimation());
        }
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        if (!a()) {
            setMeasuredDimension(getMeasuredWidth() + (this.f5198e * 2), getMeasuredHeight() + (this.f5198e * 2));
        }
    }

    @Override // android.view.View
    public void setBackgroundColor(int i10) {
        if (getBackground() instanceof ShapeDrawable) {
            ((ShapeDrawable) getBackground()).getPaint().setColor(i10);
            this.f5199i = i10;
        }
    }
}
