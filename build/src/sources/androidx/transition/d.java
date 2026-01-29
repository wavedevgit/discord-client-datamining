package androidx.transition;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ObjectAnimator;
import android.animation.TypeEvaluator;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.util.Property;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import androidx.transition.Transition;
import androidx.transition.b0;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d extends Transition {

    /* renamed from: b0  reason: collision with root package name */
    private static final String[] f5217b0 = {"android:changeImageTransform:matrix", "android:changeImageTransform:bounds"};

    /* renamed from: c0  reason: collision with root package name */
    private static final TypeEvaluator f5218c0 = new a();

    /* renamed from: d0  reason: collision with root package name */
    private static final Property f5219d0 = new b(Matrix.class, "animatedTransform");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements TypeEvaluator {
        a() {
        }

        @Override // android.animation.TypeEvaluator
        /* renamed from: a */
        public Matrix evaluate(float f10, Matrix matrix, Matrix matrix2) {
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends Property {
        b(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Matrix get(ImageView imageView) {
            return null;
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(ImageView imageView, Matrix matrix) {
            h.a(imageView, matrix);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class c {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f5220a;

        static {
            int[] iArr = new int[ImageView.ScaleType.values().length];
            f5220a = iArr;
            try {
                iArr[ImageView.ScaleType.FIT_XY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f5220a[ImageView.ScaleType.CENTER_CROP.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* renamed from: androidx.transition.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class C0069d extends AnimatorListenerAdapter implements Transition.h {

        /* renamed from: a  reason: collision with root package name */
        private final ImageView f5221a;

        /* renamed from: b  reason: collision with root package name */
        private final Matrix f5222b;

        /* renamed from: c  reason: collision with root package name */
        private final Matrix f5223c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f5224d = true;

        C0069d(ImageView imageView, Matrix matrix, Matrix matrix2) {
            this.f5221a = imageView;
            this.f5222b = matrix;
            this.f5223c = matrix2;
        }

        private void a() {
            Matrix matrix = (Matrix) this.f5221a.getTag(l.f5276d);
            if (matrix != null) {
                h.a(this.f5221a, matrix);
                this.f5221a.setTag(l.f5276d, null);
            }
        }

        private void b(Matrix matrix) {
            this.f5221a.setTag(l.f5276d, matrix);
            h.a(this.f5221a, this.f5223c);
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator, boolean z10) {
            this.f5224d = z10;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorPauseListener
        public void onAnimationPause(Animator animator) {
            b((Matrix) ((ObjectAnimator) animator).getAnimatedValue());
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorPauseListener
        public void onAnimationResume(Animator animator) {
            a();
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator, boolean z10) {
            this.f5224d = false;
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionCancel(Transition transition) {
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionEnd(Transition transition) {
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionPause(Transition transition) {
            if (this.f5224d) {
                b(this.f5222b);
            }
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionResume(Transition transition) {
            a();
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionStart(Transition transition) {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            this.f5224d = false;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            this.f5224d = false;
        }
    }

    private void t0(c0 c0Var, boolean z10) {
        Matrix matrix;
        View view = c0Var.f5215b;
        if ((view instanceof ImageView) && view.getVisibility() == 0) {
            ImageView imageView = (ImageView) view;
            if (imageView.getDrawable() != null) {
                Map map = c0Var.f5214a;
                map.put("android:changeImageTransform:bounds", new Rect(view.getLeft(), view.getTop(), view.getRight(), view.getBottom()));
                if (z10) {
                    matrix = (Matrix) imageView.getTag(l.f5276d);
                } else {
                    matrix = null;
                }
                if (matrix == null) {
                    matrix = v0(imageView);
                }
                map.put("android:changeImageTransform:matrix", matrix);
            }
        }
    }

    private static Matrix u0(ImageView imageView) {
        Drawable drawable = imageView.getDrawable();
        int intrinsicWidth = drawable.getIntrinsicWidth();
        float width = imageView.getWidth();
        float f10 = intrinsicWidth;
        int intrinsicHeight = drawable.getIntrinsicHeight();
        float height = imageView.getHeight();
        float f11 = intrinsicHeight;
        float max = Math.max(width / f10, height / f11);
        int round = Math.round((width - (f10 * max)) / 2.0f);
        int round2 = Math.round((height - (f11 * max)) / 2.0f);
        Matrix matrix = new Matrix();
        matrix.postScale(max, max);
        matrix.postTranslate(round, round2);
        return matrix;
    }

    private static Matrix v0(ImageView imageView) {
        Drawable drawable = imageView.getDrawable();
        if (drawable.getIntrinsicWidth() > 0 && drawable.getIntrinsicHeight() > 0) {
            int i10 = c.f5220a[imageView.getScaleType().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    return new Matrix(imageView.getImageMatrix());
                }
                return u0(imageView);
            }
            return y0(imageView);
        }
        return new Matrix(imageView.getImageMatrix());
    }

    private ObjectAnimator w0(ImageView imageView, Matrix matrix, Matrix matrix2) {
        return ObjectAnimator.ofObject(imageView, f5219d0, new b0.b(), matrix, matrix2);
    }

    private ObjectAnimator x0(ImageView imageView) {
        Property property = f5219d0;
        TypeEvaluator typeEvaluator = f5218c0;
        Matrix matrix = i.f5266a;
        return ObjectAnimator.ofObject(imageView, property, typeEvaluator, matrix, matrix);
    }

    private static Matrix y0(ImageView imageView) {
        Drawable drawable = imageView.getDrawable();
        Matrix matrix = new Matrix();
        matrix.postScale(imageView.getWidth() / drawable.getIntrinsicWidth(), imageView.getHeight() / drawable.getIntrinsicHeight());
        return matrix;
    }

    @Override // androidx.transition.Transition
    public String[] N() {
        return f5217b0;
    }

    @Override // androidx.transition.Transition
    public boolean Q() {
        return true;
    }

    @Override // androidx.transition.Transition
    public void i(c0 c0Var) {
        t0(c0Var, false);
    }

    @Override // androidx.transition.Transition
    public void l(c0 c0Var) {
        t0(c0Var, true);
    }

    @Override // androidx.transition.Transition
    public Animator q(ViewGroup viewGroup, c0 c0Var, c0 c0Var2) {
        boolean z10;
        if (c0Var == null || c0Var2 == null) {
            return null;
        }
        Rect rect = (Rect) c0Var.f5214a.get("android:changeImageTransform:bounds");
        Rect rect2 = (Rect) c0Var2.f5214a.get("android:changeImageTransform:bounds");
        if (rect == null || rect2 == null) {
            return null;
        }
        Matrix matrix = (Matrix) c0Var.f5214a.get("android:changeImageTransform:matrix");
        Matrix matrix2 = (Matrix) c0Var2.f5214a.get("android:changeImageTransform:matrix");
        if ((matrix == null && matrix2 == null) || (matrix != null && matrix.equals(matrix2))) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (rect.equals(rect2) && z10) {
            return null;
        }
        ImageView imageView = (ImageView) c0Var2.f5215b;
        Drawable drawable = imageView.getDrawable();
        int intrinsicWidth = drawable.getIntrinsicWidth();
        int intrinsicHeight = drawable.getIntrinsicHeight();
        if (intrinsicWidth > 0 && intrinsicHeight > 0) {
            if (matrix == null) {
                matrix = i.f5266a;
            }
            if (matrix2 == null) {
                matrix2 = i.f5266a;
            }
            f5219d0.set(imageView, matrix);
            ObjectAnimator w02 = w0(imageView, matrix, matrix2);
            C0069d c0069d = new C0069d(imageView, matrix, matrix2);
            w02.addListener(c0069d);
            w02.addPauseListener(c0069d);
            c(c0069d);
            return w02;
        }
        return x0(imageView);
    }
}
