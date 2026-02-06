package androidx.fragment.app;

import android.animation.Animator;
import android.animation.AnimatorInflater;
import android.animation.AnimatorSet;
import android.content.Context;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.Animation;
import android.view.animation.AnimationSet;
import android.view.animation.AnimationUtils;
import android.view.animation.Transformation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class t {
    private static int a(Fragment fragment, boolean z10, boolean z11) {
        if (z11) {
            if (z10) {
                return fragment.getPopEnterAnim();
            }
            return fragment.getPopExitAnim();
        } else if (z10) {
            return fragment.getEnterAnim();
        } else {
            return fragment.getExitAnim();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a b(Context context, Fragment fragment, boolean z10, boolean z11) {
        int nextTransition = fragment.getNextTransition();
        int a10 = a(fragment, z10, z11);
        fragment.setAnimations(0, 0, 0, 0);
        ViewGroup viewGroup = fragment.mContainer;
        if (viewGroup != null && viewGroup.getTag(f3.b.f22475c) != null) {
            fragment.mContainer.setTag(f3.b.f22475c, null);
        }
        ViewGroup viewGroup2 = fragment.mContainer;
        if (viewGroup2 != null && viewGroup2.getLayoutTransition() != null) {
            return null;
        }
        Animation onCreateAnimation = fragment.onCreateAnimation(nextTransition, z10, a10);
        if (onCreateAnimation != null) {
            return new a(onCreateAnimation);
        }
        Animator onCreateAnimator = fragment.onCreateAnimator(nextTransition, z10, a10);
        if (onCreateAnimator != null) {
            return new a(onCreateAnimator);
        }
        if (a10 == 0 && nextTransition != 0) {
            a10 = d(context, nextTransition, z10);
        }
        if (a10 != 0) {
            boolean equals = "anim".equals(context.getResources().getResourceTypeName(a10));
            if (equals) {
                try {
                    Animation loadAnimation = AnimationUtils.loadAnimation(context, a10);
                    if (loadAnimation != null) {
                        return new a(loadAnimation);
                    }
                } catch (Resources.NotFoundException e10) {
                    throw e10;
                } catch (RuntimeException unused) {
                }
            }
            try {
                Animator loadAnimator = AnimatorInflater.loadAnimator(context, a10);
                if (loadAnimator != null) {
                    return new a(loadAnimator);
                }
            } catch (RuntimeException e11) {
                if (!equals) {
                    Animation loadAnimation2 = AnimationUtils.loadAnimation(context, a10);
                    if (loadAnimation2 != null) {
                        return new a(loadAnimation2);
                    }
                } else {
                    throw e11;
                }
            }
        }
        return null;
    }

    private static int c(Context context, int i10) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(16973825, new int[]{i10});
        int resourceId = obtainStyledAttributes.getResourceId(0, -1);
        obtainStyledAttributes.recycle();
        return resourceId;
    }

    private static int d(Context context, int i10, boolean z10) {
        if (i10 != 4097) {
            if (i10 != 8194) {
                if (i10 != 8197) {
                    if (i10 != 4099) {
                        if (i10 != 4100) {
                            return -1;
                        }
                        if (z10) {
                            return c(context, 16842936);
                        }
                        return c(context, 16842937);
                    } else if (z10) {
                        return f3.a.f22469c;
                    } else {
                        return f3.a.f22470d;
                    }
                } else if (z10) {
                    return c(context, 16842938);
                } else {
                    return c(context, 16842939);
                }
            } else if (z10) {
                return f3.a.f22467a;
            } else {
                return f3.a.f22468b;
            }
        } else if (z10) {
            return f3.a.f22471e;
        } else {
            return f3.a.f22472f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {

        /* renamed from: a  reason: collision with root package name */
        public final Animation f4793a;

        /* renamed from: b  reason: collision with root package name */
        public final AnimatorSet f4794b;

        a(Animation animation) {
            this.f4793a = animation;
            this.f4794b = null;
            if (animation == null) {
                throw new IllegalStateException("Animation cannot be null");
            }
        }

        a(Animator animator) {
            this.f4793a = null;
            AnimatorSet animatorSet = new AnimatorSet();
            this.f4794b = animatorSet;
            animatorSet.play(animator);
            if (animator == null) {
                throw new IllegalStateException("Animator cannot be null");
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b extends AnimationSet implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final ViewGroup f4795d;

        /* renamed from: e  reason: collision with root package name */
        private final View f4796e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f4797i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f4798o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f4799p;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(Animation animation, ViewGroup viewGroup, View view) {
            super(false);
            this.f4799p = true;
            this.f4795d = viewGroup;
            this.f4796e = view;
            addAnimation(animation);
            viewGroup.post(this);
        }

        @Override // android.view.animation.AnimationSet, android.view.animation.Animation
        public boolean getTransformation(long j10, Transformation transformation) {
            this.f4799p = true;
            if (this.f4797i) {
                return !this.f4798o;
            }
            if (!super.getTransformation(j10, transformation)) {
                this.f4797i = true;
                androidx.core.view.y.a(this.f4795d, this);
            }
            return true;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (!this.f4797i && this.f4799p) {
                this.f4799p = false;
                this.f4795d.post(this);
                return;
            }
            this.f4795d.endViewTransition(this.f4796e);
            this.f4798o = true;
        }

        @Override // android.view.animation.Animation
        public boolean getTransformation(long j10, Transformation transformation, float f10) {
            this.f4799p = true;
            if (this.f4797i) {
                return !this.f4798o;
            }
            if (!super.getTransformation(j10, transformation, f10)) {
                this.f4797i = true;
                androidx.core.view.y.a(this.f4795d, this);
            }
            return true;
        }
    }
}
