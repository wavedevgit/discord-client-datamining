package androidx.swiperefreshlayout.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.AttributeSet;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.ViewGroup;
import android.view.animation.Animation;
import android.view.animation.DecelerateInterpolator;
import android.view.animation.Transformation;
import android.widget.ListView;
import androidx.annotation.NonNull;
import androidx.core.view.NestedScrollingChildHelper;
import androidx.core.view.NestedScrollingParentHelper;
import androidx.core.view.h0;
import androidx.core.view.s;
import androidx.core.view.t;
import androidx.core.view.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class SwipeRefreshLayout extends ViewGroup implements u, t, s {
    private static final int ALPHA_ANIMATION_DURATION = 300;
    private static final int ANIMATE_TO_START_DURATION = 200;
    private static final int ANIMATE_TO_TRIGGER_DURATION = 200;
    static final int CIRCLE_DIAMETER = 40;
    static final int CIRCLE_DIAMETER_LARGE = 56;
    private static final float DECELERATE_INTERPOLATION_FACTOR = 2.0f;
    public static final int DEFAULT = 1;
    private static final int DEFAULT_CIRCLE_TARGET = 64;
    public static final int DEFAULT_SLINGSHOT_DISTANCE = -1;
    private static final float DRAG_RATE = 0.5f;
    private static final int INVALID_POINTER = -1;
    public static final int LARGE = 0;
    private static final int[] LAYOUT_ATTRS = {16842766};
    private static final String LOG_TAG = "SwipeRefreshLayout";
    private static final int MAX_ALPHA = 255;
    private static final float MAX_PROGRESS_ANGLE = 0.8f;
    private static final int SCALE_DOWN_DURATION = 150;
    private static final int STARTING_PROGRESS_ALPHA = 76;
    private int mActivePointerId;
    private Animation mAlphaMaxAnimation;
    private Animation mAlphaStartAnimation;
    private final Animation mAnimateToCorrectPosition;
    private final Animation mAnimateToStartPosition;
    private OnChildScrollUpCallback mChildScrollUpCallback;
    private int mCircleDiameter;
    CircleImageView mCircleView;
    private int mCircleViewIndex;
    int mCurrentTargetOffsetTop;
    int mCustomSlingshotDistance;
    private final DecelerateInterpolator mDecelerateInterpolator;
    private boolean mEnableLegacyRequestDisallowInterceptTouch;
    protected int mFrom;
    private float mInitialDownY;
    private float mInitialMotionY;
    private boolean mIsBeingDragged;
    OnRefreshListener mListener;
    private int mMediumAnimationDuration;
    private boolean mNestedScrollInProgress;
    private final NestedScrollingChildHelper mNestedScrollingChildHelper;
    private final NestedScrollingParentHelper mNestedScrollingParentHelper;
    private final int[] mNestedScrollingV2ConsumedCompat;
    boolean mNotify;
    protected int mOriginalOffsetTop;
    private final int[] mParentOffsetInWindow;
    private final int[] mParentScrollConsumed;
    CircularProgressDrawable mProgress;
    private Animation.AnimationListener mRefreshListener;
    boolean mRefreshing;
    private boolean mReturningToStart;
    boolean mScale;
    private Animation mScaleAnimation;
    private Animation mScaleDownAnimation;
    private Animation mScaleDownToStartAnimation;
    int mSpinnerOffsetEnd;
    float mStartingScale;
    private View mTarget;
    private float mTotalDragDistance;
    private float mTotalUnconsumed;
    private int mTouchSlop;
    boolean mUsingCustomStart;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface OnChildScrollUpCallback {
        boolean a(SwipeRefreshLayout swipeRefreshLayout, View view);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface OnRefreshListener {
        void a();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Animation.AnimationListener {
        a() {
        }

        @Override // android.view.animation.Animation.AnimationListener
        public void onAnimationEnd(Animation animation) {
            OnRefreshListener onRefreshListener;
            SwipeRefreshLayout swipeRefreshLayout = SwipeRefreshLayout.this;
            if (swipeRefreshLayout.mRefreshing) {
                swipeRefreshLayout.mProgress.setAlpha(255);
                SwipeRefreshLayout.this.mProgress.start();
                SwipeRefreshLayout swipeRefreshLayout2 = SwipeRefreshLayout.this;
                if (swipeRefreshLayout2.mNotify && (onRefreshListener = swipeRefreshLayout2.mListener) != null) {
                    onRefreshListener.a();
                }
                SwipeRefreshLayout swipeRefreshLayout3 = SwipeRefreshLayout.this;
                swipeRefreshLayout3.mCurrentTargetOffsetTop = swipeRefreshLayout3.mCircleView.getTop();
                return;
            }
            swipeRefreshLayout.reset();
        }

        @Override // android.view.animation.Animation.AnimationListener
        public void onAnimationRepeat(Animation animation) {
        }

        @Override // android.view.animation.Animation.AnimationListener
        public void onAnimationStart(Animation animation) {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b extends Animation {
        b() {
        }

        @Override // android.view.animation.Animation
        public void applyTransformation(float f10, Transformation transformation) {
            SwipeRefreshLayout.this.setAnimationProgress(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class c extends Animation {
        c() {
        }

        @Override // android.view.animation.Animation
        public void applyTransformation(float f10, Transformation transformation) {
            SwipeRefreshLayout.this.setAnimationProgress(1.0f - f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends Animation {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f5240d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f5241e;

        d(int i10, int i11) {
            this.f5240d = i10;
            this.f5241e = i11;
        }

        @Override // android.view.animation.Animation
        public void applyTransformation(float f10, Transformation transformation) {
            CircularProgressDrawable circularProgressDrawable = SwipeRefreshLayout.this.mProgress;
            int i10 = this.f5240d;
            circularProgressDrawable.setAlpha((int) (i10 + ((this.f5241e - i10) * f10)));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class e implements Animation.AnimationListener {
        e() {
        }

        @Override // android.view.animation.Animation.AnimationListener
        public void onAnimationEnd(Animation animation) {
            SwipeRefreshLayout swipeRefreshLayout = SwipeRefreshLayout.this;
            if (!swipeRefreshLayout.mScale) {
                swipeRefreshLayout.startScaleDownAnimation(null);
            }
        }

        @Override // android.view.animation.Animation.AnimationListener
        public void onAnimationRepeat(Animation animation) {
        }

        @Override // android.view.animation.Animation.AnimationListener
        public void onAnimationStart(Animation animation) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class f extends Animation {
        f() {
        }

        @Override // android.view.animation.Animation
        public void applyTransformation(float f10, Transformation transformation) {
            int i10;
            SwipeRefreshLayout swipeRefreshLayout = SwipeRefreshLayout.this;
            if (!swipeRefreshLayout.mUsingCustomStart) {
                i10 = swipeRefreshLayout.mSpinnerOffsetEnd - Math.abs(swipeRefreshLayout.mOriginalOffsetTop);
            } else {
                i10 = swipeRefreshLayout.mSpinnerOffsetEnd;
            }
            SwipeRefreshLayout swipeRefreshLayout2 = SwipeRefreshLayout.this;
            int i11 = swipeRefreshLayout2.mFrom;
            SwipeRefreshLayout.this.setTargetOffsetTopAndBottom((i11 + ((int) ((i10 - i11) * f10))) - swipeRefreshLayout2.mCircleView.getTop());
            SwipeRefreshLayout.this.mProgress.e(1.0f - f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class g extends Animation {
        g() {
        }

        @Override // android.view.animation.Animation
        public void applyTransformation(float f10, Transformation transformation) {
            SwipeRefreshLayout.this.moveToStart(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class h extends Animation {
        h() {
        }

        @Override // android.view.animation.Animation
        public void applyTransformation(float f10, Transformation transformation) {
            SwipeRefreshLayout swipeRefreshLayout = SwipeRefreshLayout.this;
            float f11 = swipeRefreshLayout.mStartingScale;
            swipeRefreshLayout.setAnimationProgress(f11 + ((-f11) * f10));
            SwipeRefreshLayout.this.moveToStart(f10);
        }
    }

    public SwipeRefreshLayout(Context context) {
        this(context, null);
    }

    private void a(int i10, Animation.AnimationListener animationListener) {
        this.mFrom = i10;
        this.mAnimateToCorrectPosition.reset();
        this.mAnimateToCorrectPosition.setDuration(200L);
        this.mAnimateToCorrectPosition.setInterpolator(this.mDecelerateInterpolator);
        if (animationListener != null) {
            this.mCircleView.b(animationListener);
        }
        this.mCircleView.clearAnimation();
        this.mCircleView.startAnimation(this.mAnimateToCorrectPosition);
    }

    private void b(int i10, Animation.AnimationListener animationListener) {
        if (this.mScale) {
            n(i10, animationListener);
            return;
        }
        this.mFrom = i10;
        this.mAnimateToStartPosition.reset();
        this.mAnimateToStartPosition.setDuration(200L);
        this.mAnimateToStartPosition.setInterpolator(this.mDecelerateInterpolator);
        if (animationListener != null) {
            this.mCircleView.b(animationListener);
        }
        this.mCircleView.clearAnimation();
        this.mCircleView.startAnimation(this.mAnimateToStartPosition);
    }

    private void c() {
        this.mCircleView = new CircleImageView(getContext());
        CircularProgressDrawable circularProgressDrawable = new CircularProgressDrawable(getContext());
        this.mProgress = circularProgressDrawable;
        circularProgressDrawable.l(1);
        this.mCircleView.setImageDrawable(this.mProgress);
        this.mCircleView.setVisibility(8);
        addView(this.mCircleView);
    }

    private void d() {
        if (this.mTarget == null) {
            for (int i10 = 0; i10 < getChildCount(); i10++) {
                View childAt = getChildAt(i10);
                if (!childAt.equals(this.mCircleView)) {
                    this.mTarget = childAt;
                    return;
                }
            }
        }
    }

    private void e(float f10) {
        e eVar;
        if (f10 > this.mTotalDragDistance) {
            i(true, true);
            return;
        }
        this.mRefreshing = false;
        this.mProgress.j(0.0f, 0.0f);
        if (!this.mScale) {
            eVar = new e();
        } else {
            eVar = null;
        }
        b(this.mCurrentTargetOffsetTop, eVar);
        this.mProgress.d(false);
    }

    private boolean f(Animation animation) {
        if (animation != null && animation.hasStarted() && !animation.hasEnded()) {
            return true;
        }
        return false;
    }

    private void g(float f10) {
        this.mProgress.d(true);
        float min = Math.min(1.0f, Math.abs(f10 / this.mTotalDragDistance));
        float max = (((float) Math.max(min - 0.4d, 0.0d)) * 5.0f) / 3.0f;
        float abs = Math.abs(f10) - this.mTotalDragDistance;
        int i10 = this.mCustomSlingshotDistance;
        if (i10 <= 0) {
            if (this.mUsingCustomStart) {
                i10 = this.mSpinnerOffsetEnd - this.mOriginalOffsetTop;
            } else {
                i10 = this.mSpinnerOffsetEnd;
            }
        }
        float f11 = i10;
        double max2 = Math.max(0.0f, Math.min(abs, f11 * DECELERATE_INTERPOLATION_FACTOR) / f11) / 4.0f;
        float pow = ((float) (max2 - Math.pow(max2, 2.0d))) * DECELERATE_INTERPOLATION_FACTOR;
        int i11 = this.mOriginalOffsetTop + ((int) ((f11 * min) + (f11 * pow * DECELERATE_INTERPOLATION_FACTOR)));
        if (this.mCircleView.getVisibility() != 0) {
            this.mCircleView.setVisibility(0);
        }
        if (!this.mScale) {
            this.mCircleView.setScaleX(1.0f);
            this.mCircleView.setScaleY(1.0f);
        }
        if (this.mScale) {
            setAnimationProgress(Math.min(1.0f, f10 / this.mTotalDragDistance));
        }
        if (f10 < this.mTotalDragDistance) {
            if (this.mProgress.getAlpha() > STARTING_PROGRESS_ALPHA && !f(this.mAlphaStartAnimation)) {
                m();
            }
        } else if (this.mProgress.getAlpha() < 255 && !f(this.mAlphaMaxAnimation)) {
            l();
        }
        this.mProgress.j(0.0f, Math.min((float) MAX_PROGRESS_ANGLE, max * MAX_PROGRESS_ANGLE));
        this.mProgress.e(Math.min(1.0f, max));
        this.mProgress.g((((max * 0.4f) - 0.25f) + (pow * DECELERATE_INTERPOLATION_FACTOR)) * DRAG_RATE);
        setTargetOffsetTopAndBottom(i11 - this.mCurrentTargetOffsetTop);
    }

    private void h(MotionEvent motionEvent) {
        int i10;
        int actionIndex = motionEvent.getActionIndex();
        if (motionEvent.getPointerId(actionIndex) == this.mActivePointerId) {
            if (actionIndex == 0) {
                i10 = 1;
            } else {
                i10 = 0;
            }
            this.mActivePointerId = motionEvent.getPointerId(i10);
        }
    }

    private void i(boolean z10, boolean z11) {
        if (this.mRefreshing != z10) {
            this.mNotify = z11;
            d();
            this.mRefreshing = z10;
            if (z10) {
                a(this.mCurrentTargetOffsetTop, this.mRefreshListener);
            } else {
                startScaleDownAnimation(this.mRefreshListener);
            }
        }
    }

    private Animation j(int i10, int i11) {
        d dVar = new d(i10, i11);
        dVar.setDuration(300L);
        this.mCircleView.b(null);
        this.mCircleView.clearAnimation();
        this.mCircleView.startAnimation(dVar);
        return dVar;
    }

    private void k(float f10) {
        float f11 = this.mInitialDownY;
        int i10 = this.mTouchSlop;
        if (f10 - f11 > i10 && !this.mIsBeingDragged) {
            this.mInitialMotionY = f11 + i10;
            this.mIsBeingDragged = true;
            this.mProgress.setAlpha(STARTING_PROGRESS_ALPHA);
        }
    }

    private void l() {
        this.mAlphaMaxAnimation = j(this.mProgress.getAlpha(), 255);
    }

    private void m() {
        this.mAlphaStartAnimation = j(this.mProgress.getAlpha(), STARTING_PROGRESS_ALPHA);
    }

    private void n(int i10, Animation.AnimationListener animationListener) {
        this.mFrom = i10;
        this.mStartingScale = this.mCircleView.getScaleX();
        h hVar = new h();
        this.mScaleDownToStartAnimation = hVar;
        hVar.setDuration(150L);
        if (animationListener != null) {
            this.mCircleView.b(animationListener);
        }
        this.mCircleView.clearAnimation();
        this.mCircleView.startAnimation(this.mScaleDownToStartAnimation);
    }

    private void o(Animation.AnimationListener animationListener) {
        this.mCircleView.setVisibility(0);
        this.mProgress.setAlpha(255);
        b bVar = new b();
        this.mScaleAnimation = bVar;
        bVar.setDuration(this.mMediumAnimationDuration);
        if (animationListener != null) {
            this.mCircleView.b(animationListener);
        }
        this.mCircleView.clearAnimation();
        this.mCircleView.startAnimation(this.mScaleAnimation);
    }

    private void setColorViewAlpha(int i10) {
        this.mCircleView.getBackground().setAlpha(i10);
        this.mProgress.setAlpha(i10);
    }

    public boolean canChildScrollUp() {
        OnChildScrollUpCallback onChildScrollUpCallback = this.mChildScrollUpCallback;
        if (onChildScrollUpCallback != null) {
            return onChildScrollUpCallback.a(this, this.mTarget);
        }
        View view = this.mTarget;
        if (view instanceof ListView) {
            return androidx.core.widget.h.a((ListView) view, -1);
        }
        return view.canScrollVertically(-1);
    }

    @Override // android.view.View
    public boolean dispatchNestedFling(float f10, float f11, boolean z10) {
        return this.mNestedScrollingChildHelper.a(f10, f11, z10);
    }

    @Override // android.view.View
    public boolean dispatchNestedPreFling(float f10, float f11) {
        return this.mNestedScrollingChildHelper.b(f10, f11);
    }

    public boolean dispatchNestedPreScroll(int i10, int i11, int[] iArr, int[] iArr2, int i12) {
        return i12 == 0 && dispatchNestedPreScroll(i10, i11, iArr, iArr2);
    }

    public void dispatchNestedScroll(int i10, int i11, int i12, int i13, int[] iArr, int i14, @NonNull int[] iArr2) {
        if (i14 == 0) {
            this.mNestedScrollingChildHelper.e(i10, i11, i12, i13, iArr, i14, iArr2);
        }
    }

    @Override // android.view.ViewGroup
    protected int getChildDrawingOrder(int i10, int i11) {
        int i12 = this.mCircleViewIndex;
        if (i12 >= 0) {
            if (i11 == i10 - 1) {
                return i12;
            }
            if (i11 >= i12) {
                return i11 + 1;
            }
            return i11;
        }
        return i11;
    }

    @Override // android.view.ViewGroup
    public int getNestedScrollAxes() {
        return this.mNestedScrollingParentHelper.a();
    }

    public int getProgressCircleDiameter() {
        return this.mCircleDiameter;
    }

    public int getProgressViewEndOffset() {
        return this.mSpinnerOffsetEnd;
    }

    public int getProgressViewStartOffset() {
        return this.mOriginalOffsetTop;
    }

    public boolean hasNestedScrollingParent(int i10) {
        return i10 == 0 && hasNestedScrollingParent();
    }

    @Override // android.view.View
    public boolean isNestedScrollingEnabled() {
        return this.mNestedScrollingChildHelper.m();
    }

    public boolean isRefreshing() {
        return this.mRefreshing;
    }

    void moveToStart(float f10) {
        int i10 = this.mFrom;
        setTargetOffsetTopAndBottom((i10 + ((int) ((this.mOriginalOffsetTop - i10) * f10))) - this.mCircleView.getTop());
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        reset();
    }

    @Override // android.view.ViewGroup
    public boolean onInterceptTouchEvent(MotionEvent motionEvent) {
        d();
        int actionMasked = motionEvent.getActionMasked();
        if (this.mReturningToStart && actionMasked == 0) {
            this.mReturningToStart = false;
        }
        if (!isEnabled() || this.mReturningToStart || canChildScrollUp() || this.mRefreshing || this.mNestedScrollInProgress) {
            return false;
        }
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 3) {
                        if (actionMasked == 6) {
                            h(motionEvent);
                        }
                    }
                } else {
                    int i10 = this.mActivePointerId;
                    if (i10 == -1) {
                        Log.e(LOG_TAG, "Got ACTION_MOVE event but don't have an active pointer id.");
                        return false;
                    }
                    int findPointerIndex = motionEvent.findPointerIndex(i10);
                    if (findPointerIndex < 0) {
                        return false;
                    }
                    k(motionEvent.getY(findPointerIndex));
                }
            }
            this.mIsBeingDragged = false;
            this.mActivePointerId = -1;
        } else {
            setTargetOffsetTopAndBottom(this.mOriginalOffsetTop - this.mCircleView.getTop());
            int pointerId = motionEvent.getPointerId(0);
            this.mActivePointerId = pointerId;
            this.mIsBeingDragged = false;
            int findPointerIndex2 = motionEvent.findPointerIndex(pointerId);
            if (findPointerIndex2 < 0) {
                return false;
            }
            this.mInitialDownY = motionEvent.getY(findPointerIndex2);
        }
        return this.mIsBeingDragged;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        int measuredWidth = getMeasuredWidth();
        int measuredHeight = getMeasuredHeight();
        if (getChildCount() != 0) {
            if (this.mTarget == null) {
                d();
            }
            View view = this.mTarget;
            if (view == null) {
                return;
            }
            int paddingLeft = getPaddingLeft();
            int paddingTop = getPaddingTop();
            view.layout(paddingLeft, paddingTop, ((measuredWidth - getPaddingLeft()) - getPaddingRight()) + paddingLeft, ((measuredHeight - getPaddingTop()) - getPaddingBottom()) + paddingTop);
            int measuredWidth2 = this.mCircleView.getMeasuredWidth();
            int measuredHeight2 = this.mCircleView.getMeasuredHeight();
            int i14 = measuredWidth / 2;
            int i15 = measuredWidth2 / 2;
            int i16 = this.mCurrentTargetOffsetTop;
            this.mCircleView.layout(i14 - i15, i16, i14 + i15, measuredHeight2 + i16);
        }
    }

    @Override // android.view.View
    public void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        if (this.mTarget == null) {
            d();
        }
        View view = this.mTarget;
        if (view != null) {
            view.measure(View.MeasureSpec.makeMeasureSpec((getMeasuredWidth() - getPaddingLeft()) - getPaddingRight(), 1073741824), View.MeasureSpec.makeMeasureSpec((getMeasuredHeight() - getPaddingTop()) - getPaddingBottom(), 1073741824));
            this.mCircleView.measure(View.MeasureSpec.makeMeasureSpec(this.mCircleDiameter, 1073741824), View.MeasureSpec.makeMeasureSpec(this.mCircleDiameter, 1073741824));
            this.mCircleViewIndex = -1;
            for (int i12 = 0; i12 < getChildCount(); i12++) {
                if (getChildAt(i12) == this.mCircleView) {
                    this.mCircleViewIndex = i12;
                    return;
                }
            }
        }
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public boolean onNestedFling(View view, float f10, float f11, boolean z10) {
        return dispatchNestedFling(f10, f11, z10);
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public boolean onNestedPreFling(View view, float f10, float f11) {
        return dispatchNestedPreFling(f10, f11);
    }

    @Override // androidx.core.view.t
    public void onNestedPreScroll(View view, int i10, int i11, int[] iArr, int i12) {
        if (i12 == 0) {
            onNestedPreScroll(view, i10, i11, iArr);
        }
    }

    @Override // androidx.core.view.u
    public void onNestedScroll(@NonNull View view, int i10, int i11, int i12, int i13, int i14, @NonNull int[] iArr) {
        if (i14 != 0) {
            return;
        }
        int i15 = iArr[1];
        dispatchNestedScroll(i10, i11, i12, i13, this.mParentOffsetInWindow, i14, iArr);
        int i16 = i13 - (iArr[1] - i15);
        int i17 = i16 == 0 ? i13 + this.mParentOffsetInWindow[1] : i16;
        if (i17 >= 0 || canChildScrollUp()) {
            return;
        }
        float abs = this.mTotalUnconsumed + Math.abs(i17);
        this.mTotalUnconsumed = abs;
        g(abs);
        iArr[1] = iArr[1] + i16;
    }

    @Override // androidx.core.view.t
    public void onNestedScrollAccepted(View view, View view2, int i10, int i11) {
        if (i11 == 0) {
            onNestedScrollAccepted(view, view2, i10);
        }
    }

    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable parcelable) {
        i iVar = (i) parcelable;
        super.onRestoreInstanceState(iVar.getSuperState());
        setRefreshing(iVar.f5247d);
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        return new i(super.onSaveInstanceState(), this.mRefreshing);
    }

    @Override // androidx.core.view.t
    public boolean onStartNestedScroll(View view, View view2, int i10, int i11) {
        if (i11 == 0) {
            return onStartNestedScroll(view, view2, i10);
        }
        return false;
    }

    @Override // androidx.core.view.t
    public void onStopNestedScroll(View view, int i10) {
        if (i10 == 0) {
            onStopNestedScroll(view);
        }
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        int actionMasked = motionEvent.getActionMasked();
        if (this.mReturningToStart && actionMasked == 0) {
            this.mReturningToStart = false;
        }
        if (!isEnabled() || this.mReturningToStart || canChildScrollUp() || this.mRefreshing || this.mNestedScrollInProgress) {
            return false;
        }
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked == 3) {
                        return false;
                    }
                    if (actionMasked != 5) {
                        if (actionMasked == 6) {
                            h(motionEvent);
                        }
                    } else {
                        int actionIndex = motionEvent.getActionIndex();
                        if (actionIndex < 0) {
                            Log.e(LOG_TAG, "Got ACTION_POINTER_DOWN event but have an invalid action index.");
                            return false;
                        }
                        this.mActivePointerId = motionEvent.getPointerId(actionIndex);
                    }
                } else {
                    int findPointerIndex = motionEvent.findPointerIndex(this.mActivePointerId);
                    if (findPointerIndex < 0) {
                        Log.e(LOG_TAG, "Got ACTION_MOVE event but have an invalid active pointer id.");
                        return false;
                    }
                    float y10 = motionEvent.getY(findPointerIndex);
                    k(y10);
                    if (this.mIsBeingDragged) {
                        float f10 = (y10 - this.mInitialMotionY) * DRAG_RATE;
                        if (f10 <= 0.0f) {
                            return false;
                        }
                        getParent().requestDisallowInterceptTouchEvent(true);
                        g(f10);
                    }
                }
            } else {
                int findPointerIndex2 = motionEvent.findPointerIndex(this.mActivePointerId);
                if (findPointerIndex2 < 0) {
                    Log.e(LOG_TAG, "Got ACTION_UP event but don't have an active pointer id.");
                    return false;
                }
                if (this.mIsBeingDragged) {
                    float y11 = (motionEvent.getY(findPointerIndex2) - this.mInitialMotionY) * DRAG_RATE;
                    this.mIsBeingDragged = false;
                    e(y11);
                }
                this.mActivePointerId = -1;
                return false;
            }
        } else {
            this.mActivePointerId = motionEvent.getPointerId(0);
            this.mIsBeingDragged = false;
        }
        return true;
    }

    void reset() {
        this.mCircleView.clearAnimation();
        this.mProgress.stop();
        this.mCircleView.setVisibility(8);
        setColorViewAlpha(255);
        if (this.mScale) {
            setAnimationProgress(0.0f);
        } else {
            setTargetOffsetTopAndBottom(this.mOriginalOffsetTop - this.mCurrentTargetOffsetTop);
        }
        this.mCurrentTargetOffsetTop = this.mCircleView.getTop();
    }

    void setAnimationProgress(float f10) {
        this.mCircleView.setScaleX(f10);
        this.mCircleView.setScaleY(f10);
    }

    @Deprecated
    public void setColorScheme(int... iArr) {
        setColorSchemeResources(iArr);
    }

    public void setColorSchemeColors(int... iArr) {
        d();
        this.mProgress.f(iArr);
    }

    public void setColorSchemeResources(int... iArr) {
        Context context = getContext();
        int[] iArr2 = new int[iArr.length];
        for (int i10 = 0; i10 < iArr.length; i10++) {
            iArr2[i10] = androidx.core.content.a.c(context, iArr[i10]);
        }
        setColorSchemeColors(iArr2);
    }

    public void setDistanceToTriggerSync(int i10) {
        this.mTotalDragDistance = i10;
    }

    @Override // android.view.View
    public void setEnabled(boolean z10) {
        super.setEnabled(z10);
        if (!z10) {
            reset();
        }
    }

    @Deprecated
    public void setLegacyRequestDisallowInterceptTouchEventEnabled(boolean z10) {
        this.mEnableLegacyRequestDisallowInterceptTouch = z10;
    }

    @Override // android.view.View
    public void setNestedScrollingEnabled(boolean z10) {
        this.mNestedScrollingChildHelper.n(z10);
    }

    public void setOnChildScrollUpCallback(OnChildScrollUpCallback onChildScrollUpCallback) {
        this.mChildScrollUpCallback = onChildScrollUpCallback;
    }

    public void setOnRefreshListener(OnRefreshListener onRefreshListener) {
        this.mListener = onRefreshListener;
    }

    @Deprecated
    public void setProgressBackgroundColor(int i10) {
        setProgressBackgroundColorSchemeResource(i10);
    }

    public void setProgressBackgroundColorSchemeColor(int i10) {
        this.mCircleView.setBackgroundColor(i10);
    }

    public void setProgressBackgroundColorSchemeResource(int i10) {
        setProgressBackgroundColorSchemeColor(androidx.core.content.a.c(getContext(), i10));
    }

    public void setProgressViewEndTarget(boolean z10, int i10) {
        this.mSpinnerOffsetEnd = i10;
        this.mScale = z10;
        this.mCircleView.invalidate();
    }

    public void setProgressViewOffset(boolean z10, int i10, int i11) {
        this.mScale = z10;
        this.mOriginalOffsetTop = i10;
        this.mSpinnerOffsetEnd = i11;
        this.mUsingCustomStart = true;
        reset();
        this.mRefreshing = false;
    }

    public void setRefreshing(boolean z10) {
        int i10;
        if (z10 && this.mRefreshing != z10) {
            this.mRefreshing = z10;
            if (!this.mUsingCustomStart) {
                i10 = this.mSpinnerOffsetEnd + this.mOriginalOffsetTop;
            } else {
                i10 = this.mSpinnerOffsetEnd;
            }
            setTargetOffsetTopAndBottom(i10 - this.mCurrentTargetOffsetTop);
            this.mNotify = false;
            o(this.mRefreshListener);
            return;
        }
        i(z10, false);
    }

    public void setSize(int i10) {
        if (i10 != 0 && i10 != 1) {
            return;
        }
        DisplayMetrics displayMetrics = getResources().getDisplayMetrics();
        if (i10 == 0) {
            this.mCircleDiameter = (int) (displayMetrics.density * 56.0f);
        } else {
            this.mCircleDiameter = (int) (displayMetrics.density * 40.0f);
        }
        this.mCircleView.setImageDrawable(null);
        this.mProgress.l(i10);
        this.mCircleView.setImageDrawable(this.mProgress);
    }

    public void setSlingshotDistance(int i10) {
        this.mCustomSlingshotDistance = i10;
    }

    void setTargetOffsetTopAndBottom(int i10) {
        this.mCircleView.bringToFront();
        h0.Y(this.mCircleView, i10);
        this.mCurrentTargetOffsetTop = this.mCircleView.getTop();
    }

    public boolean startNestedScroll(int i10, int i11) {
        return i11 == 0 && startNestedScroll(i10);
    }

    void startScaleDownAnimation(Animation.AnimationListener animationListener) {
        c cVar = new c();
        this.mScaleDownAnimation = cVar;
        cVar.setDuration(150L);
        this.mCircleView.b(animationListener);
        this.mCircleView.clearAnimation();
        this.mCircleView.startAnimation(this.mScaleDownAnimation);
    }

    public void stopNestedScroll(int i10) {
        if (i10 == 0) {
            stopNestedScroll();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class i extends View.BaseSavedState {
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        final boolean f5247d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Parcelable.Creator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public i createFromParcel(Parcel parcel) {
                return new i(parcel);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public i[] newArray(int i10) {
                return new i[i10];
            }
        }

        i(Parcelable parcelable, boolean z10) {
            super(parcelable);
            this.f5247d = z10;
        }

        @Override // android.view.View.BaseSavedState, android.view.AbsSavedState, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            super.writeToParcel(parcel, i10);
            parcel.writeByte(this.f5247d ? (byte) 1 : (byte) 0);
        }

        i(Parcel parcel) {
            super(parcel);
            this.f5247d = parcel.readByte() != 0;
        }
    }

    public SwipeRefreshLayout(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.mRefreshing = false;
        this.mTotalDragDistance = -1.0f;
        this.mParentScrollConsumed = new int[2];
        this.mParentOffsetInWindow = new int[2];
        this.mNestedScrollingV2ConsumedCompat = new int[2];
        this.mActivePointerId = -1;
        this.mCircleViewIndex = -1;
        this.mRefreshListener = new a();
        this.mAnimateToCorrectPosition = new f();
        this.mAnimateToStartPosition = new g();
        this.mTouchSlop = ViewConfiguration.get(context).getScaledTouchSlop();
        this.mMediumAnimationDuration = getResources().getInteger(17694721);
        setWillNotDraw(false);
        this.mDecelerateInterpolator = new DecelerateInterpolator(DECELERATE_INTERPOLATION_FACTOR);
        DisplayMetrics displayMetrics = getResources().getDisplayMetrics();
        this.mCircleDiameter = (int) (displayMetrics.density * 40.0f);
        c();
        setChildrenDrawingOrderEnabled(true);
        int i10 = (int) (displayMetrics.density * 64.0f);
        this.mSpinnerOffsetEnd = i10;
        this.mTotalDragDistance = i10;
        this.mNestedScrollingParentHelper = new NestedScrollingParentHelper(this);
        this.mNestedScrollingChildHelper = new NestedScrollingChildHelper(this);
        setNestedScrollingEnabled(true);
        int i11 = -this.mCircleDiameter;
        this.mCurrentTargetOffsetTop = i11;
        this.mOriginalOffsetTop = i11;
        moveToStart(1.0f);
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, LAYOUT_ATTRS);
        setEnabled(obtainStyledAttributes.getBoolean(0, true));
        obtainStyledAttributes.recycle();
    }

    @Override // android.view.View
    public boolean dispatchNestedPreScroll(int i10, int i11, int[] iArr, int[] iArr2) {
        return this.mNestedScrollingChildHelper.c(i10, i11, iArr, iArr2);
    }

    public boolean dispatchNestedScroll(int i10, int i11, int i12, int i13, int[] iArr, int i14) {
        return i14 == 0 && this.mNestedScrollingChildHelper.g(i10, i11, i12, i13, iArr, i14);
    }

    @Override // android.view.View
    public boolean hasNestedScrollingParent() {
        return this.mNestedScrollingChildHelper.k();
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void onNestedPreScroll(View view, int i10, int i11, int[] iArr) {
        if (i11 > 0) {
            float f10 = this.mTotalUnconsumed;
            if (f10 > 0.0f) {
                float f11 = i11;
                if (f11 > f10) {
                    iArr[1] = (int) f10;
                    this.mTotalUnconsumed = 0.0f;
                } else {
                    this.mTotalUnconsumed = f10 - f11;
                    iArr[1] = i11;
                }
                g(this.mTotalUnconsumed);
            }
        }
        if (this.mUsingCustomStart && i11 > 0 && this.mTotalUnconsumed == 0.0f && Math.abs(i11 - iArr[1]) > 0) {
            this.mCircleView.setVisibility(8);
        }
        int[] iArr2 = this.mParentScrollConsumed;
        if (dispatchNestedPreScroll(i10 - iArr[0], i11 - iArr[1], iArr2, null)) {
            iArr[0] = iArr[0] + iArr2[0];
            iArr[1] = iArr[1] + iArr2[1];
        }
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void onNestedScrollAccepted(View view, View view2, int i10) {
        this.mNestedScrollingParentHelper.b(view, view2, i10);
        startNestedScroll(i10 & 2);
        this.mTotalUnconsumed = 0.0f;
        this.mNestedScrollInProgress = true;
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public boolean onStartNestedScroll(View view, View view2, int i10) {
        return (!isEnabled() || this.mReturningToStart || this.mRefreshing || (i10 & 2) == 0) ? false : true;
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void onStopNestedScroll(View view) {
        this.mNestedScrollingParentHelper.d(view);
        this.mNestedScrollInProgress = false;
        float f10 = this.mTotalUnconsumed;
        if (f10 > 0.0f) {
            e(f10);
            this.mTotalUnconsumed = 0.0f;
        }
        stopNestedScroll();
    }

    @Override // android.view.View
    public boolean startNestedScroll(int i10) {
        return this.mNestedScrollingChildHelper.p(i10);
    }

    @Override // android.view.View
    public void stopNestedScroll() {
        this.mNestedScrollingChildHelper.r();
    }

    @Override // android.view.View
    public boolean dispatchNestedScroll(int i10, int i11, int i12, int i13, int[] iArr) {
        return this.mNestedScrollingChildHelper.f(i10, i11, i12, i13, iArr);
    }

    @Override // androidx.core.view.t
    public void onNestedScroll(View view, int i10, int i11, int i12, int i13, int i14) {
        onNestedScroll(view, i10, i11, i12, i13, i14, this.mNestedScrollingV2ConsumedCompat);
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void onNestedScroll(View view, int i10, int i11, int i12, int i13) {
        onNestedScroll(view, i10, i11, i12, i13, 0, this.mNestedScrollingV2ConsumedCompat);
    }
}
