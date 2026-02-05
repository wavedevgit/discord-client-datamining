package androidx.transition;

import android.animation.Animator;
import android.animation.AnimatorSet;
import android.animation.TypeEvaluator;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Picture;
import android.graphics.RectF;
import android.os.Build;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class b0 {

    /* renamed from: a  reason: collision with root package name */
    private static final boolean f5330a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        static Bitmap a(Picture picture) {
            return Bitmap.createBitmap(picture);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b implements TypeEvaluator {

        /* renamed from: a  reason: collision with root package name */
        final float[] f5331a = new float[9];

        /* renamed from: b  reason: collision with root package name */
        final float[] f5332b = new float[9];

        /* renamed from: c  reason: collision with root package name */
        final Matrix f5333c = new Matrix();

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Matrix evaluate(float f10, Matrix matrix, Matrix matrix2) {
            matrix.getValues(this.f5331a);
            matrix2.getValues(this.f5332b);
            for (int i10 = 0; i10 < 9; i10++) {
                float[] fArr = this.f5332b;
                float f11 = fArr[i10];
                float f12 = this.f5331a[i10];
                fArr[i10] = f12 + ((f11 - f12) * f10);
            }
            this.f5333c.setValues(this.f5332b);
            return this.f5333c;
        }
    }

    static {
        boolean z10;
        if (Build.VERSION.SDK_INT >= 28) {
            z10 = true;
        } else {
            z10 = false;
        }
        f5330a = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static View a(ViewGroup viewGroup, View view, View view2) {
        Matrix matrix = new Matrix();
        matrix.setTranslate(-view2.getScrollX(), -view2.getScrollY());
        h0.g(view, matrix);
        h0.h(viewGroup, matrix);
        RectF rectF = new RectF(0.0f, 0.0f, view.getWidth(), view.getHeight());
        matrix.mapRect(rectF);
        int round = Math.round(rectF.left);
        int round2 = Math.round(rectF.top);
        int round3 = Math.round(rectF.right);
        int round4 = Math.round(rectF.bottom);
        ImageView imageView = new ImageView(view.getContext());
        imageView.setScaleType(ImageView.ScaleType.CENTER_CROP);
        Bitmap b10 = b(view, matrix, rectF, viewGroup);
        if (b10 != null) {
            imageView.setImageBitmap(b10);
        }
        imageView.measure(View.MeasureSpec.makeMeasureSpec(round3 - round, 1073741824), View.MeasureSpec.makeMeasureSpec(round4 - round2, 1073741824));
        imageView.layout(round, round2, round3, round4);
        return imageView;
    }

    private static Bitmap b(View view, Matrix matrix, RectF rectF, ViewGroup viewGroup) {
        boolean z10;
        int i10;
        ViewGroup viewGroup2;
        boolean isAttachedToWindow = view.isAttachedToWindow();
        if (viewGroup != null && viewGroup.isAttachedToWindow()) {
            z10 = true;
        } else {
            z10 = false;
        }
        Bitmap bitmap = null;
        if (!isAttachedToWindow) {
            if (!z10) {
                return null;
            }
            viewGroup2 = (ViewGroup) view.getParent();
            i10 = viewGroup2.indexOfChild(view);
            viewGroup.getOverlay().add(view);
        } else {
            i10 = 0;
            viewGroup2 = null;
        }
        int round = Math.round(rectF.width());
        int round2 = Math.round(rectF.height());
        if (round > 0 && round2 > 0) {
            float min = Math.min(1.0f, 1048576.0f / (round * round2));
            int round3 = Math.round(round * min);
            int round4 = Math.round(round2 * min);
            matrix.postTranslate(-rectF.left, -rectF.top);
            matrix.postScale(min, min);
            if (f5330a) {
                Picture picture = new Picture();
                Canvas beginRecording = picture.beginRecording(round3, round4);
                beginRecording.concat(matrix);
                view.draw(beginRecording);
                picture.endRecording();
                bitmap = a.a(picture);
            } else {
                bitmap = Bitmap.createBitmap(round3, round4, Bitmap.Config.ARGB_8888);
                Canvas canvas = new Canvas(bitmap);
                canvas.concat(matrix);
                view.draw(canvas);
            }
        }
        if (!isAttachedToWindow) {
            viewGroup.getOverlay().remove(view);
            viewGroup2.addView(view, i10);
        }
        return bitmap;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Animator c(Animator animator, Animator animator2) {
        if (animator == null) {
            return animator2;
        }
        if (animator2 == null) {
            return animator;
        }
        AnimatorSet animatorSet = new AnimatorSet();
        animatorSet.playTogether(animator, animator2);
        return animatorSet;
    }
}
