package androidx.drawerlayout.widget;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Parcel;
import android.os.Parcelable;
import android.os.SystemClock;
import android.util.AttributeSet;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.WindowInsets;
import android.view.accessibility.AccessibilityEvent;
import androidx.annotation.NonNull;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.accessibility.AccessibilityViewCommand;
import androidx.core.view.h0;
import androidx.core.view.j;
import androidx.customview.widget.ViewDragHelper;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class DrawerLayout extends ViewGroup {
    private static final String ACCESSIBILITY_CLASS_NAME = "androidx.drawerlayout.widget.DrawerLayout";
    private static final boolean ALLOW_EDGE_LOCK = false;
    static final boolean CAN_HIDE_DESCENDANTS;
    private static final boolean CHILDREN_DISALLOW_INTERCEPT = true;
    private static final int DEFAULT_SCRIM_COLOR = -1728053248;
    public static final int LOCK_MODE_LOCKED_CLOSED = 1;
    public static final int LOCK_MODE_LOCKED_OPEN = 2;
    public static final int LOCK_MODE_UNDEFINED = 3;
    public static final int LOCK_MODE_UNLOCKED = 0;
    private static final int MIN_DRAWER_MARGIN = 64;
    private static final int MIN_FLING_VELOCITY = 400;
    private static final int PEEK_DELAY = 160;
    private static final boolean SET_DRAWER_SHADOW_FROM_ELEVATION;
    public static final int STATE_DRAGGING = 1;
    public static final int STATE_IDLE = 0;
    public static final int STATE_SETTLING = 2;
    private static final String TAG = "DrawerLayout";
    private static final float TOUCH_SLOP_SENSITIVITY = 1.0f;
    private static boolean sEdgeSizeUsingSystemGestureInsets;
    private final AccessibilityViewCommand mActionDismiss;
    private final ChildAccessibilityDelegate mChildAccessibilityDelegate;
    private Rect mChildHitRect;
    private Matrix mChildInvertedMatrix;
    private boolean mChildrenCanceledTouch;
    private boolean mDrawStatusBarBackground;
    private float mDrawerElevation;
    private int mDrawerState;
    private boolean mFirstLayout;
    private boolean mInLayout;
    private float mInitialMotionX;
    private float mInitialMotionY;
    private Object mLastInsets;
    private final ViewDragCallback mLeftCallback;
    private final ViewDragHelper mLeftDragger;
    private DrawerListener mListener;
    private List<DrawerListener> mListeners;
    private int mLockModeEnd;
    private int mLockModeLeft;
    private int mLockModeRight;
    private int mLockModeStart;
    private int mMinDrawerMargin;
    private final ArrayList<View> mNonDrawerViews;
    private final ViewDragCallback mRightCallback;
    private final ViewDragHelper mRightDragger;
    private int mScrimColor;
    private float mScrimOpacity;
    private Paint mScrimPaint;
    private Drawable mShadowEnd;
    private Drawable mShadowLeft;
    private Drawable mShadowLeftResolved;
    private Drawable mShadowRight;
    private Drawable mShadowRightResolved;
    private Drawable mShadowStart;
    private Drawable mStatusBarBackground;
    private CharSequence mTitleLeft;
    private CharSequence mTitleRight;
    private static final int[] THEME_ATTRS = {16843828};
    static final int[] LAYOUT_ATTRS = {16842931};

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class ChildAccessibilityDelegate extends androidx.core.view.a {
        ChildAccessibilityDelegate() {
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
            if (!DrawerLayout.includeChildForAccessibility(view)) {
                accessibilityNodeInfoCompat.Q0(null);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface DrawerListener {
        void onDrawerClosed(View view);

        void onDrawerOpened(View view);

        void onDrawerSlide(View view, float f10);

        void onDrawerStateChanged(int i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class ViewDragCallback extends ViewDragHelper.c {

        /* renamed from: a  reason: collision with root package name */
        private final int f3867a;

        /* renamed from: b  reason: collision with root package name */
        private ViewDragHelper f3868b;

        /* renamed from: c  reason: collision with root package name */
        private final Runnable f3869c = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Runnable {
            a() {
            }

            @Override // java.lang.Runnable
            public void run() {
                ViewDragCallback.this.o();
            }
        }

        ViewDragCallback(int i10) {
            this.f3867a = i10;
        }

        private void n() {
            int i10 = 3;
            if (this.f3867a == 3) {
                i10 = 5;
            }
            View findDrawerWithGravity = DrawerLayout.this.findDrawerWithGravity(i10);
            if (findDrawerWithGravity != null) {
                DrawerLayout.this.closeDrawer(findDrawerWithGravity);
            }
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public int a(View view, int i10, int i11) {
            if (DrawerLayout.this.checkDrawerViewAbsoluteGravity(view, 3)) {
                return Math.max(-view.getWidth(), Math.min(i10, 0));
            }
            int width = DrawerLayout.this.getWidth();
            return Math.max(width - view.getWidth(), Math.min(i10, width));
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public int b(View view, int i10, int i11) {
            return view.getTop();
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public int d(View view) {
            if (DrawerLayout.this.isDrawerView(view)) {
                return view.getWidth();
            }
            return 0;
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void f(int i10, int i11) {
            View findDrawerWithGravity;
            if ((i10 & 1) == 1) {
                findDrawerWithGravity = DrawerLayout.this.findDrawerWithGravity(3);
            } else {
                findDrawerWithGravity = DrawerLayout.this.findDrawerWithGravity(5);
            }
            if (findDrawerWithGravity != null && DrawerLayout.this.getDrawerLockMode(findDrawerWithGravity) == 0) {
                this.f3868b.b(findDrawerWithGravity, i11);
            }
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public boolean g(int i10) {
            return false;
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void h(int i10, int i11) {
            DrawerLayout.this.postDelayed(this.f3869c, 160L);
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void i(View view, int i10) {
            ((d) view.getLayoutParams()).f3878c = false;
            n();
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void j(int i10) {
            DrawerLayout.this.updateDrawerState(i10, this.f3868b.v());
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void k(View view, int i10, int i11, int i12, int i13) {
            float width;
            int i14;
            int width2 = view.getWidth();
            if (DrawerLayout.this.checkDrawerViewAbsoluteGravity(view, 3)) {
                width = i10 + width2;
            } else {
                width = DrawerLayout.this.getWidth() - i10;
            }
            float f10 = width / width2;
            DrawerLayout.this.setDrawerViewOffset(view, f10);
            if (f10 == 0.0f) {
                i14 = 4;
            } else {
                i14 = 0;
            }
            view.setVisibility(i14);
            DrawerLayout.this.invalidate();
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void l(View view, float f10, float f11) {
            int i10;
            float drawerViewOffset = DrawerLayout.this.getDrawerViewOffset(view);
            int width = view.getWidth();
            if (DrawerLayout.this.checkDrawerViewAbsoluteGravity(view, 3)) {
                int i11 = (f10 > 0.0f ? 1 : (f10 == 0.0f ? 0 : -1));
                if (i11 <= 0 && (i11 != 0 || drawerViewOffset <= 0.5f)) {
                    i10 = -width;
                } else {
                    i10 = 0;
                }
            } else {
                int width2 = DrawerLayout.this.getWidth();
                if (f10 < 0.0f || (f10 == 0.0f && drawerViewOffset > 0.5f)) {
                    width2 -= width;
                }
                i10 = width2;
            }
            this.f3868b.O(i10, view.getTop());
            DrawerLayout.this.invalidate();
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public boolean m(View view, int i10) {
            if (DrawerLayout.this.isDrawerView(view) && DrawerLayout.this.checkDrawerViewAbsoluteGravity(view, this.f3867a) && DrawerLayout.this.getDrawerLockMode(view) == 0) {
                return true;
            }
            return false;
        }

        void o() {
            boolean z10;
            View findDrawerWithGravity;
            int width;
            int x10 = this.f3868b.x();
            int i10 = 0;
            if (this.f3867a == 3) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                findDrawerWithGravity = DrawerLayout.this.findDrawerWithGravity(3);
                if (findDrawerWithGravity != null) {
                    i10 = -findDrawerWithGravity.getWidth();
                }
                width = i10 + x10;
            } else {
                findDrawerWithGravity = DrawerLayout.this.findDrawerWithGravity(5);
                width = DrawerLayout.this.getWidth() - x10;
            }
            if (findDrawerWithGravity != null) {
                if (((z10 && findDrawerWithGravity.getLeft() < width) || (!z10 && findDrawerWithGravity.getLeft() > width)) && DrawerLayout.this.getDrawerLockMode(findDrawerWithGravity) == 0) {
                    this.f3868b.Q(findDrawerWithGravity, width, findDrawerWithGravity.getTop());
                    ((d) findDrawerWithGravity.getLayoutParams()).f3878c = true;
                    DrawerLayout.this.invalidate();
                    n();
                    DrawerLayout.this.cancelChildViewTouch();
                }
            }
        }

        public void p() {
            DrawerLayout.this.removeCallbacks(this.f3869c);
        }

        public void q(ViewDragHelper viewDragHelper) {
            this.f3868b = viewDragHelper;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements AccessibilityViewCommand {
        a() {
        }

        @Override // androidx.core.view.accessibility.AccessibilityViewCommand
        public boolean a(View view, AccessibilityViewCommand.a aVar) {
            if (DrawerLayout.this.isDrawerOpen(view) && DrawerLayout.this.getDrawerLockMode(view) != 2) {
                DrawerLayout.this.closeDrawer(view);
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements View.OnApplyWindowInsetsListener {
        b() {
        }

        @Override // android.view.View.OnApplyWindowInsetsListener
        public WindowInsets onApplyWindowInsets(View view, WindowInsets windowInsets) {
            boolean z10;
            DrawerLayout drawerLayout = (DrawerLayout) view;
            if (windowInsets.getSystemWindowInsetTop() > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            drawerLayout.setChildInsets(windowInsets, z10);
            return windowInsets.consumeSystemWindowInsets();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c extends androidx.core.view.a {

        /* renamed from: a  reason: collision with root package name */
        private final Rect f3874a = new Rect();

        c() {
        }

        private void c(AccessibilityNodeInfoCompat accessibilityNodeInfoCompat, ViewGroup viewGroup) {
            int childCount = viewGroup.getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                View childAt = viewGroup.getChildAt(i10);
                if (DrawerLayout.includeChildForAccessibility(childAt)) {
                    accessibilityNodeInfoCompat.c(childAt);
                }
            }
        }

        private void d(AccessibilityNodeInfoCompat accessibilityNodeInfoCompat, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat2) {
            Rect rect = this.f3874a;
            accessibilityNodeInfoCompat2.n(rect);
            accessibilityNodeInfoCompat.t0(rect);
            accessibilityNodeInfoCompat.f1(accessibilityNodeInfoCompat2.i0());
            accessibilityNodeInfoCompat.O0(accessibilityNodeInfoCompat2.E());
            accessibilityNodeInfoCompat.w0(accessibilityNodeInfoCompat2.s());
            accessibilityNodeInfoCompat.A0(accessibilityNodeInfoCompat2.w());
            accessibilityNodeInfoCompat.C0(accessibilityNodeInfoCompat2.V());
            accessibilityNodeInfoCompat.F0(accessibilityNodeInfoCompat2.Y());
            accessibilityNodeInfoCompat.q0(accessibilityNodeInfoCompat2.Q());
            accessibilityNodeInfoCompat.W0(accessibilityNodeInfoCompat2.f0());
            accessibilityNodeInfoCompat.a(accessibilityNodeInfoCompat2.k());
        }

        @Override // androidx.core.view.a
        public boolean dispatchPopulateAccessibilityEvent(View view, AccessibilityEvent accessibilityEvent) {
            if (accessibilityEvent.getEventType() == 32) {
                List<CharSequence> text = accessibilityEvent.getText();
                View findVisibleDrawer = DrawerLayout.this.findVisibleDrawer();
                if (findVisibleDrawer != null) {
                    CharSequence drawerTitle = DrawerLayout.this.getDrawerTitle(DrawerLayout.this.getDrawerViewAbsoluteGravity(findVisibleDrawer));
                    if (drawerTitle != null) {
                        text.add(drawerTitle);
                        return true;
                    }
                    return true;
                }
                return true;
            }
            return super.dispatchPopulateAccessibilityEvent(view, accessibilityEvent);
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityEvent(View view, AccessibilityEvent accessibilityEvent) {
            super.onInitializeAccessibilityEvent(view, accessibilityEvent);
            accessibilityEvent.setClassName(DrawerLayout.ACCESSIBILITY_CLASS_NAME);
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            if (DrawerLayout.CAN_HIDE_DESCENDANTS) {
                super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
            } else {
                AccessibilityNodeInfoCompat l02 = AccessibilityNodeInfoCompat.l0(accessibilityNodeInfoCompat);
                super.onInitializeAccessibilityNodeInfo(view, l02);
                accessibilityNodeInfoCompat.Y0(view);
                ViewParent F = h0.F(view);
                if (F instanceof View) {
                    accessibilityNodeInfoCompat.Q0((View) F);
                }
                d(accessibilityNodeInfoCompat, l02);
                l02.n0();
                c(accessibilityNodeInfoCompat, (ViewGroup) view);
            }
            accessibilityNodeInfoCompat.w0(DrawerLayout.ACCESSIBILITY_CLASS_NAME);
            accessibilityNodeInfoCompat.E0(false);
            accessibilityNodeInfoCompat.F0(false);
            accessibilityNodeInfoCompat.o0(AccessibilityNodeInfoCompat.a.f3312e);
            accessibilityNodeInfoCompat.o0(AccessibilityNodeInfoCompat.a.f3313f);
        }

        @Override // androidx.core.view.a
        public boolean onRequestSendAccessibilityEvent(ViewGroup viewGroup, View view, AccessibilityEvent accessibilityEvent) {
            if (!DrawerLayout.CAN_HIDE_DESCENDANTS && !DrawerLayout.includeChildForAccessibility(view)) {
                return false;
            }
            return super.onRequestSendAccessibilityEvent(viewGroup, view, accessibilityEvent);
        }
    }

    static {
        int i10 = Build.VERSION.SDK_INT;
        boolean z10 = true;
        CAN_HIDE_DESCENDANTS = true;
        SET_DRAWER_SHADOW_FROM_ELEVATION = true;
        if (i10 < 29) {
            z10 = false;
        }
        sEdgeSizeUsingSystemGestureInsets = z10;
    }

    public DrawerLayout(Context context) {
        this(context, null);
    }

    private boolean a(MotionEvent motionEvent, View view) {
        if (!view.getMatrix().isIdentity()) {
            MotionEvent b10 = b(motionEvent, view);
            boolean dispatchGenericMotionEvent = view.dispatchGenericMotionEvent(b10);
            b10.recycle();
            return dispatchGenericMotionEvent;
        }
        float scrollX = getScrollX() - view.getLeft();
        float scrollY = getScrollY() - view.getTop();
        motionEvent.offsetLocation(scrollX, scrollY);
        boolean dispatchGenericMotionEvent2 = view.dispatchGenericMotionEvent(motionEvent);
        motionEvent.offsetLocation(-scrollX, -scrollY);
        return dispatchGenericMotionEvent2;
    }

    private MotionEvent b(MotionEvent motionEvent, View view) {
        MotionEvent obtain = MotionEvent.obtain(motionEvent);
        obtain.offsetLocation(getScrollX() - view.getLeft(), getScrollY() - view.getTop());
        Matrix matrix = view.getMatrix();
        if (!matrix.isIdentity()) {
            if (this.mChildInvertedMatrix == null) {
                this.mChildInvertedMatrix = new Matrix();
            }
            matrix.invert(this.mChildInvertedMatrix);
            obtain.transform(this.mChildInvertedMatrix);
        }
        return obtain;
    }

    private static boolean c(View view) {
        Drawable background = view.getBackground();
        if (background == null || background.getOpacity() != -1) {
            return false;
        }
        return true;
    }

    private boolean d() {
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            if (((d) getChildAt(i10).getLayoutParams()).f3878c) {
                return true;
            }
        }
        return false;
    }

    private boolean e() {
        if (findVisibleDrawer() != null) {
            return true;
        }
        return false;
    }

    private boolean f(float f10, float f11, View view) {
        if (this.mChildHitRect == null) {
            this.mChildHitRect = new Rect();
        }
        view.getHitRect(this.mChildHitRect);
        return this.mChildHitRect.contains((int) f10, (int) f11);
    }

    private void g(Drawable drawable, int i10) {
        if (drawable != null && s1.a.h(drawable)) {
            s1.a.m(drawable, i10);
        }
    }

    static String gravityToString(int i10) {
        if ((i10 & 3) == 3) {
            return "LEFT";
        }
        if ((i10 & 5) == 5) {
            return "RIGHT";
        }
        return Integer.toHexString(i10);
    }

    private Drawable h() {
        int z10 = h0.z(this);
        if (z10 == 0) {
            Drawable drawable = this.mShadowStart;
            if (drawable != null) {
                g(drawable, z10);
                return this.mShadowStart;
            }
        } else {
            Drawable drawable2 = this.mShadowEnd;
            if (drawable2 != null) {
                g(drawable2, z10);
                return this.mShadowEnd;
            }
        }
        return this.mShadowLeft;
    }

    private Drawable i() {
        int z10 = h0.z(this);
        if (z10 == 0) {
            Drawable drawable = this.mShadowEnd;
            if (drawable != null) {
                g(drawable, z10);
                return this.mShadowEnd;
            }
        } else {
            Drawable drawable2 = this.mShadowStart;
            if (drawable2 != null) {
                g(drawable2, z10);
                return this.mShadowStart;
            }
        }
        return this.mShadowRight;
    }

    static boolean includeChildForAccessibility(View view) {
        if (h0.x(view) != 4 && h0.x(view) != 2) {
            return true;
        }
        return false;
    }

    private void j() {
        if (SET_DRAWER_SHADOW_FROM_ELEVATION) {
            return;
        }
        this.mShadowLeftResolved = h();
        this.mShadowRightResolved = i();
    }

    private void k(View view) {
        AccessibilityNodeInfoCompat.a aVar = AccessibilityNodeInfoCompat.a.f3332y;
        h0.h0(view, aVar.b());
        if (isDrawerOpen(view) && getDrawerLockMode(view) != 2) {
            h0.j0(view, aVar, null, this.mActionDismiss);
        }
    }

    private void l(View view, boolean z10) {
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = getChildAt(i10);
            if ((!z10 && !isDrawerView(childAt)) || (z10 && childAt == view)) {
                h0.x0(childAt, 1);
            } else {
                h0.x0(childAt, 4);
            }
        }
    }

    public void addDrawerListener(@NonNull DrawerListener drawerListener) {
        if (drawerListener == null) {
            return;
        }
        if (this.mListeners == null) {
            this.mListeners = new ArrayList();
        }
        this.mListeners.add(drawerListener);
    }

    @Override // android.view.ViewGroup, android.view.View
    public void addFocusables(ArrayList<View> arrayList, int i10, int i11) {
        if (getDescendantFocusability() == 393216) {
            return;
        }
        int childCount = getChildCount();
        boolean z10 = false;
        for (int i12 = 0; i12 < childCount; i12++) {
            View childAt = getChildAt(i12);
            if (isDrawerView(childAt)) {
                if (isDrawerOpen(childAt)) {
                    childAt.addFocusables(arrayList, i10, i11);
                    z10 = true;
                }
            } else {
                this.mNonDrawerViews.add(childAt);
            }
        }
        if (!z10) {
            int size = this.mNonDrawerViews.size();
            for (int i13 = 0; i13 < size; i13++) {
                View view = this.mNonDrawerViews.get(i13);
                if (view.getVisibility() == 0) {
                    view.addFocusables(arrayList, i10, i11);
                }
            }
        }
        this.mNonDrawerViews.clear();
    }

    @Override // android.view.ViewGroup
    public void addView(View view, int i10, ViewGroup.LayoutParams layoutParams) {
        super.addView(view, i10, layoutParams);
        if (findOpenDrawer() == null && !isDrawerView(view)) {
            h0.x0(view, 1);
        } else {
            h0.x0(view, 4);
        }
        if (!CAN_HIDE_DESCENDANTS) {
            h0.n0(view, this.mChildAccessibilityDelegate);
        }
    }

    void cancelChildViewTouch() {
        if (!this.mChildrenCanceledTouch) {
            long uptimeMillis = SystemClock.uptimeMillis();
            MotionEvent obtain = MotionEvent.obtain(uptimeMillis, uptimeMillis, 3, 0.0f, 0.0f, 0);
            int childCount = getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                getChildAt(i10).dispatchTouchEvent(obtain);
            }
            obtain.recycle();
            this.mChildrenCanceledTouch = true;
        }
    }

    boolean checkDrawerViewAbsoluteGravity(View view, int i10) {
        if ((getDrawerViewAbsoluteGravity(view) & i10) == i10) {
            return true;
        }
        return false;
    }

    @Override // android.view.ViewGroup
    protected boolean checkLayoutParams(ViewGroup.LayoutParams layoutParams) {
        if ((layoutParams instanceof d) && super.checkLayoutParams(layoutParams)) {
            return true;
        }
        return false;
    }

    public void close() {
        closeDrawer(8388611);
    }

    public void closeDrawer(@NonNull View view) {
        closeDrawer(view, true);
    }

    public void closeDrawers() {
        closeDrawers(false);
    }

    @Override // android.view.View
    public void computeScroll() {
        int childCount = getChildCount();
        float f10 = 0.0f;
        for (int i10 = 0; i10 < childCount; i10++) {
            f10 = Math.max(f10, ((d) getChildAt(i10).getLayoutParams()).f3877b);
        }
        this.mScrimOpacity = f10;
        boolean m10 = this.mLeftDragger.m(true);
        boolean m11 = this.mRightDragger.m(true);
        if (!m10 && !m11) {
            return;
        }
        h0.e0(this);
    }

    @Override // android.view.View
    public boolean dispatchGenericMotionEvent(MotionEvent motionEvent) {
        if ((motionEvent.getSource() & 2) != 0 && motionEvent.getAction() != 10 && this.mScrimOpacity > 0.0f) {
            int childCount = getChildCount();
            if (childCount != 0) {
                float x10 = motionEvent.getX();
                float y10 = motionEvent.getY();
                for (int i10 = childCount - 1; i10 >= 0; i10--) {
                    View childAt = getChildAt(i10);
                    if (f(x10, y10, childAt) && !isContentView(childAt) && a(motionEvent, childAt)) {
                        return true;
                    }
                }
                return false;
            }
            return false;
        }
        return super.dispatchGenericMotionEvent(motionEvent);
    }

    void dispatchOnDrawerClosed(View view) {
        View rootView;
        d dVar = (d) view.getLayoutParams();
        if ((dVar.f3879d & 1) == 1) {
            dVar.f3879d = 0;
            List<DrawerListener> list = this.mListeners;
            if (list != null) {
                for (int size = list.size() - 1; size >= 0; size--) {
                    this.mListeners.get(size).onDrawerClosed(view);
                }
            }
            l(view, false);
            k(view);
            if (hasWindowFocus() && (rootView = getRootView()) != null) {
                rootView.sendAccessibilityEvent(32);
            }
        }
    }

    void dispatchOnDrawerOpened(View view) {
        d dVar = (d) view.getLayoutParams();
        if ((dVar.f3879d & 1) == 0) {
            dVar.f3879d = 1;
            List<DrawerListener> list = this.mListeners;
            if (list != null) {
                for (int size = list.size() - 1; size >= 0; size--) {
                    this.mListeners.get(size).onDrawerOpened(view);
                }
            }
            l(view, true);
            k(view);
            if (hasWindowFocus()) {
                sendAccessibilityEvent(32);
            }
        }
    }

    void dispatchOnDrawerSlide(View view, float f10) {
        List<DrawerListener> list = this.mListeners;
        if (list != null) {
            for (int size = list.size() - 1; size >= 0; size--) {
                this.mListeners.get(size).onDrawerSlide(view, f10);
            }
        }
    }

    @Override // android.view.ViewGroup
    protected boolean drawChild(Canvas canvas, View view, long j10) {
        int i10;
        int height = getHeight();
        boolean isContentView = isContentView(view);
        int width = getWidth();
        int save = canvas.save();
        int i11 = 0;
        if (isContentView) {
            int childCount = getChildCount();
            int i12 = 0;
            for (int i13 = 0; i13 < childCount; i13++) {
                View childAt = getChildAt(i13);
                if (childAt != view && childAt.getVisibility() == 0 && c(childAt) && isDrawerView(childAt) && childAt.getHeight() >= height) {
                    if (checkDrawerViewAbsoluteGravity(childAt, 3)) {
                        int right = childAt.getRight();
                        if (right > i12) {
                            i12 = right;
                        }
                    } else {
                        int left = childAt.getLeft();
                        if (left < width) {
                            width = left;
                        }
                    }
                }
            }
            canvas.clipRect(i12, 0, width, getHeight());
            i11 = i12;
        }
        boolean drawChild = super.drawChild(canvas, view, j10);
        canvas.restoreToCount(save);
        float f10 = this.mScrimOpacity;
        if (f10 > 0.0f && isContentView) {
            this.mScrimPaint.setColor((this.mScrimColor & 16777215) | (((int) ((((-16777216) & i10) >>> 24) * f10)) << 24));
            canvas.drawRect(i11, 0.0f, width, getHeight(), this.mScrimPaint);
            return drawChild;
        } else if (this.mShadowLeftResolved != null && checkDrawerViewAbsoluteGravity(view, 3)) {
            int intrinsicWidth = this.mShadowLeftResolved.getIntrinsicWidth();
            int right2 = view.getRight();
            float max = Math.max(0.0f, Math.min(right2 / this.mLeftDragger.x(), 1.0f));
            this.mShadowLeftResolved.setBounds(right2, view.getTop(), intrinsicWidth + right2, view.getBottom());
            this.mShadowLeftResolved.setAlpha((int) (max * 255.0f));
            this.mShadowLeftResolved.draw(canvas);
            return drawChild;
        } else {
            if (this.mShadowRightResolved != null && checkDrawerViewAbsoluteGravity(view, 5)) {
                int intrinsicWidth2 = this.mShadowRightResolved.getIntrinsicWidth();
                int left2 = view.getLeft();
                float max2 = Math.max(0.0f, Math.min((getWidth() - left2) / this.mRightDragger.x(), 1.0f));
                this.mShadowRightResolved.setBounds(left2 - intrinsicWidth2, view.getTop(), left2, view.getBottom());
                this.mShadowRightResolved.setAlpha((int) (max2 * 255.0f));
                this.mShadowRightResolved.draw(canvas);
            }
            return drawChild;
        }
    }

    View findDrawerWithGravity(int i10) {
        int b10 = j.b(i10, h0.z(this)) & 7;
        int childCount = getChildCount();
        for (int i11 = 0; i11 < childCount; i11++) {
            View childAt = getChildAt(i11);
            if ((getDrawerViewAbsoluteGravity(childAt) & 7) == b10) {
                return childAt;
            }
        }
        return null;
    }

    View findOpenDrawer() {
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = getChildAt(i10);
            if ((((d) childAt.getLayoutParams()).f3879d & 1) == 1) {
                return childAt;
            }
        }
        return null;
    }

    View findVisibleDrawer() {
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = getChildAt(i10);
            if (isDrawerView(childAt) && isDrawerVisible(childAt)) {
                return childAt;
            }
        }
        return null;
    }

    @Override // android.view.ViewGroup
    protected ViewGroup.LayoutParams generateDefaultLayoutParams() {
        return new d(-1, -1);
    }

    @Override // android.view.ViewGroup
    protected ViewGroup.LayoutParams generateLayoutParams(ViewGroup.LayoutParams layoutParams) {
        if (layoutParams instanceof d) {
            return new d((d) layoutParams);
        }
        if (layoutParams instanceof ViewGroup.MarginLayoutParams) {
            return new d((ViewGroup.MarginLayoutParams) layoutParams);
        }
        return new d(layoutParams);
    }

    public float getDrawerElevation() {
        if (SET_DRAWER_SHADOW_FROM_ELEVATION) {
            return this.mDrawerElevation;
        }
        return 0.0f;
    }

    public int getDrawerLockMode(int i10) {
        int z10 = h0.z(this);
        if (i10 == 3) {
            int i11 = this.mLockModeLeft;
            if (i11 != 3) {
                return i11;
            }
            int i12 = z10 == 0 ? this.mLockModeStart : this.mLockModeEnd;
            if (i12 != 3) {
                return i12;
            }
            return 0;
        } else if (i10 == 5) {
            int i13 = this.mLockModeRight;
            if (i13 != 3) {
                return i13;
            }
            int i14 = z10 == 0 ? this.mLockModeEnd : this.mLockModeStart;
            if (i14 != 3) {
                return i14;
            }
            return 0;
        } else if (i10 == 8388611) {
            int i15 = this.mLockModeStart;
            if (i15 != 3) {
                return i15;
            }
            int i16 = z10 == 0 ? this.mLockModeLeft : this.mLockModeRight;
            if (i16 != 3) {
                return i16;
            }
            return 0;
        } else if (i10 != 8388613) {
            return 0;
        } else {
            int i17 = this.mLockModeEnd;
            if (i17 != 3) {
                return i17;
            }
            int i18 = z10 == 0 ? this.mLockModeRight : this.mLockModeLeft;
            if (i18 != 3) {
                return i18;
            }
            return 0;
        }
    }

    public CharSequence getDrawerTitle(int i10) {
        int b10 = j.b(i10, h0.z(this));
        if (b10 == 3) {
            return this.mTitleLeft;
        }
        if (b10 == 5) {
            return this.mTitleRight;
        }
        return null;
    }

    int getDrawerViewAbsoluteGravity(View view) {
        return j.b(((d) view.getLayoutParams()).f3876a, h0.z(this));
    }

    float getDrawerViewOffset(View view) {
        return ((d) view.getLayoutParams()).f3877b;
    }

    public Drawable getStatusBarBackgroundDrawable() {
        return this.mStatusBarBackground;
    }

    boolean isContentView(View view) {
        if (((d) view.getLayoutParams()).f3876a == 0) {
            return true;
        }
        return false;
    }

    public boolean isDrawerOpen(@NonNull View view) {
        if (isDrawerView(view)) {
            return (((d) view.getLayoutParams()).f3879d & 1) == 1;
        }
        throw new IllegalArgumentException("View " + view + " is not a drawer");
    }

    boolean isDrawerView(View view) {
        int b10 = j.b(((d) view.getLayoutParams()).f3876a, h0.z(view));
        if ((b10 & 3) != 0 || (b10 & 5) != 0) {
            return true;
        }
        return false;
    }

    public boolean isDrawerVisible(@NonNull View view) {
        if (isDrawerView(view)) {
            return ((d) view.getLayoutParams()).f3877b > 0.0f;
        }
        throw new IllegalArgumentException("View " + view + " is not a drawer");
    }

    public boolean isOpen() {
        return isDrawerOpen(8388611);
    }

    void moveDrawerToOffset(View view, float f10) {
        float drawerViewOffset = getDrawerViewOffset(view);
        float width = view.getWidth();
        int i10 = ((int) (width * f10)) - ((int) (drawerViewOffset * width));
        if (!checkDrawerViewAbsoluteGravity(view, 3)) {
            i10 = -i10;
        }
        view.offsetLeftAndRight(i10);
        setDrawerViewOffset(view, f10);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        this.mFirstLayout = true;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.mFirstLayout = true;
    }

    @Override // android.view.View
    public void onDraw(Canvas canvas) {
        int i10;
        super.onDraw(canvas);
        if (this.mDrawStatusBarBackground && this.mStatusBarBackground != null) {
            Object obj = this.mLastInsets;
            if (obj != null) {
                i10 = ((WindowInsets) obj).getSystemWindowInsetTop();
            } else {
                i10 = 0;
            }
            if (i10 > 0) {
                this.mStatusBarBackground.setBounds(0, 0, getWidth(), i10);
                this.mStatusBarBackground.draw(canvas);
            }
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:7:0x001b, code lost:
        if (r0 != 3) goto L7;
     */
    @Override // android.view.ViewGroup
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean onInterceptTouchEvent(android.view.MotionEvent r7) {
        /*
            r6 = this;
            int r0 = r7.getActionMasked()
            androidx.customview.widget.ViewDragHelper r1 = r6.mLeftDragger
            boolean r1 = r1.P(r7)
            androidx.customview.widget.ViewDragHelper r2 = r6.mRightDragger
            boolean r2 = r2.P(r7)
            r1 = r1 | r2
            r2 = 1
            r3 = 0
            if (r0 == 0) goto L38
            if (r0 == r2) goto L31
            r7 = 2
            r4 = 3
            if (r0 == r7) goto L1e
            if (r0 == r4) goto L31
            goto L36
        L1e:
            androidx.customview.widget.ViewDragHelper r7 = r6.mLeftDragger
            boolean r7 = r7.d(r4)
            if (r7 == 0) goto L36
            androidx.drawerlayout.widget.DrawerLayout$ViewDragCallback r7 = r6.mLeftCallback
            r7.p()
            androidx.drawerlayout.widget.DrawerLayout$ViewDragCallback r7 = r6.mRightCallback
            r7.p()
            goto L36
        L31:
            r6.closeDrawers(r2)
            r6.mChildrenCanceledTouch = r3
        L36:
            r7 = r3
            goto L60
        L38:
            float r0 = r7.getX()
            float r7 = r7.getY()
            r6.mInitialMotionX = r0
            r6.mInitialMotionY = r7
            float r4 = r6.mScrimOpacity
            r5 = 0
            int r4 = (r4 > r5 ? 1 : (r4 == r5 ? 0 : -1))
            if (r4 <= 0) goto L5d
            androidx.customview.widget.ViewDragHelper r4 = r6.mLeftDragger
            int r0 = (int) r0
            int r7 = (int) r7
            android.view.View r7 = r4.t(r0, r7)
            if (r7 == 0) goto L5d
            boolean r7 = r6.isContentView(r7)
            if (r7 == 0) goto L5d
            r7 = r2
            goto L5e
        L5d:
            r7 = r3
        L5e:
            r6.mChildrenCanceledTouch = r3
        L60:
            if (r1 != 0) goto L70
            if (r7 != 0) goto L70
            boolean r7 = r6.d()
            if (r7 != 0) goto L70
            boolean r7 = r6.mChildrenCanceledTouch
            if (r7 == 0) goto L6f
            goto L70
        L6f:
            return r3
        L70:
            return r2
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.drawerlayout.widget.DrawerLayout.onInterceptTouchEvent(android.view.MotionEvent):boolean");
    }

    @Override // android.view.View, android.view.KeyEvent.Callback
    public boolean onKeyDown(int i10, KeyEvent keyEvent) {
        if (i10 == 4 && e()) {
            keyEvent.startTracking();
            return true;
        }
        return super.onKeyDown(i10, keyEvent);
    }

    @Override // android.view.View, android.view.KeyEvent.Callback
    public boolean onKeyUp(int i10, KeyEvent keyEvent) {
        if (i10 == 4) {
            View findVisibleDrawer = findVisibleDrawer();
            if (findVisibleDrawer != null && getDrawerLockMode(findVisibleDrawer) == 0) {
                closeDrawers();
            }
            if (findVisibleDrawer != null) {
                return true;
            }
            return false;
        }
        return super.onKeyUp(i10, keyEvent);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        WindowInsets rootWindowInsets;
        int i14;
        float f10;
        int i15;
        boolean z11;
        int i16;
        boolean z12 = true;
        this.mInLayout = true;
        int i17 = i12 - i10;
        int childCount = getChildCount();
        int i18 = 0;
        while (i18 < childCount) {
            View childAt = getChildAt(i18);
            if (childAt.getVisibility() != 8) {
                d dVar = (d) childAt.getLayoutParams();
                if (isContentView(childAt)) {
                    int i19 = ((ViewGroup.MarginLayoutParams) dVar).leftMargin;
                    childAt.layout(i19, ((ViewGroup.MarginLayoutParams) dVar).topMargin, childAt.getMeasuredWidth() + i19, ((ViewGroup.MarginLayoutParams) dVar).topMargin + childAt.getMeasuredHeight());
                } else {
                    int measuredWidth = childAt.getMeasuredWidth();
                    int measuredHeight = childAt.getMeasuredHeight();
                    if (checkDrawerViewAbsoluteGravity(childAt, 3)) {
                        float f11 = measuredWidth;
                        i15 = (-measuredWidth) + ((int) (dVar.f3877b * f11));
                        f10 = (measuredWidth + i15) / f11;
                    } else {
                        float f12 = measuredWidth;
                        f10 = (i17 - i14) / f12;
                        i15 = i17 - ((int) (dVar.f3877b * f12));
                    }
                    if (f10 != dVar.f3877b) {
                        z11 = z12;
                    } else {
                        z11 = false;
                    }
                    int i20 = dVar.f3876a & 112;
                    if (i20 != 16) {
                        if (i20 != 80) {
                            int i21 = ((ViewGroup.MarginLayoutParams) dVar).topMargin;
                            childAt.layout(i15, i21, measuredWidth + i15, measuredHeight + i21);
                        } else {
                            int i22 = i13 - i11;
                            childAt.layout(i15, (i22 - ((ViewGroup.MarginLayoutParams) dVar).bottomMargin) - childAt.getMeasuredHeight(), measuredWidth + i15, i22 - ((ViewGroup.MarginLayoutParams) dVar).bottomMargin);
                        }
                    } else {
                        int i23 = i13 - i11;
                        int i24 = (i23 - measuredHeight) / 2;
                        int i25 = ((ViewGroup.MarginLayoutParams) dVar).topMargin;
                        if (i24 < i25) {
                            i24 = i25;
                        } else {
                            int i26 = i24 + measuredHeight;
                            int i27 = ((ViewGroup.MarginLayoutParams) dVar).bottomMargin;
                            if (i26 > i23 - i27) {
                                i24 = (i23 - i27) - measuredHeight;
                            }
                        }
                        childAt.layout(i15, i24, measuredWidth + i15, measuredHeight + i24);
                    }
                    if (z11) {
                        setDrawerViewOffset(childAt, f10);
                    }
                    if (dVar.f3877b > 0.0f) {
                        i16 = 0;
                    } else {
                        i16 = 4;
                    }
                    if (childAt.getVisibility() != i16) {
                        childAt.setVisibility(i16);
                    }
                }
            }
            i18++;
            z12 = true;
        }
        if (sEdgeSizeUsingSystemGestureInsets && (rootWindowInsets = getRootWindowInsets()) != null) {
            Insets m10 = WindowInsetsCompat.C(rootWindowInsets).m();
            ViewDragHelper viewDragHelper = this.mLeftDragger;
            viewDragHelper.L(Math.max(viewDragHelper.w(), m10.f3163a));
            ViewDragHelper viewDragHelper2 = this.mRightDragger;
            viewDragHelper2.L(Math.max(viewDragHelper2.w(), m10.f3165c));
        }
        this.mInLayout = false;
        this.mFirstLayout = false;
    }

    @Override // android.view.View
    @SuppressLint({"WrongConstant"})
    protected void onMeasure(int i10, int i11) {
        boolean z10;
        int drawerViewAbsoluteGravity;
        boolean z11;
        int mode = View.MeasureSpec.getMode(i10);
        int mode2 = View.MeasureSpec.getMode(i11);
        int size = View.MeasureSpec.getSize(i10);
        int size2 = View.MeasureSpec.getSize(i11);
        if (mode != 1073741824 || mode2 != 1073741824) {
            if (isInEditMode()) {
                if (mode == 0) {
                    size = 300;
                }
                if (mode2 == 0) {
                    size2 = 300;
                }
            } else {
                throw new IllegalArgumentException("DrawerLayout must be measured with MeasureSpec.EXACTLY.");
            }
        }
        setMeasuredDimension(size, size2);
        if (this.mLastInsets != null && h0.w(this)) {
            z10 = true;
        } else {
            z10 = false;
        }
        int z12 = h0.z(this);
        int childCount = getChildCount();
        boolean z13 = false;
        boolean z14 = false;
        for (int i12 = 0; i12 < childCount; i12++) {
            View childAt = getChildAt(i12);
            if (childAt.getVisibility() != 8) {
                d dVar = (d) childAt.getLayoutParams();
                if (z10) {
                    int b10 = j.b(dVar.f3876a, z12);
                    if (h0.w(childAt)) {
                        WindowInsets windowInsets = (WindowInsets) this.mLastInsets;
                        if (b10 == 3) {
                            windowInsets = windowInsets.replaceSystemWindowInsets(windowInsets.getSystemWindowInsetLeft(), windowInsets.getSystemWindowInsetTop(), 0, windowInsets.getSystemWindowInsetBottom());
                        } else if (b10 == 5) {
                            windowInsets = windowInsets.replaceSystemWindowInsets(0, windowInsets.getSystemWindowInsetTop(), windowInsets.getSystemWindowInsetRight(), windowInsets.getSystemWindowInsetBottom());
                        }
                        childAt.dispatchApplyWindowInsets(windowInsets);
                    } else {
                        WindowInsets windowInsets2 = (WindowInsets) this.mLastInsets;
                        if (b10 == 3) {
                            windowInsets2 = windowInsets2.replaceSystemWindowInsets(windowInsets2.getSystemWindowInsetLeft(), windowInsets2.getSystemWindowInsetTop(), 0, windowInsets2.getSystemWindowInsetBottom());
                        } else if (b10 == 5) {
                            windowInsets2 = windowInsets2.replaceSystemWindowInsets(0, windowInsets2.getSystemWindowInsetTop(), windowInsets2.getSystemWindowInsetRight(), windowInsets2.getSystemWindowInsetBottom());
                        }
                        ((ViewGroup.MarginLayoutParams) dVar).leftMargin = windowInsets2.getSystemWindowInsetLeft();
                        ((ViewGroup.MarginLayoutParams) dVar).topMargin = windowInsets2.getSystemWindowInsetTop();
                        ((ViewGroup.MarginLayoutParams) dVar).rightMargin = windowInsets2.getSystemWindowInsetRight();
                        ((ViewGroup.MarginLayoutParams) dVar).bottomMargin = windowInsets2.getSystemWindowInsetBottom();
                    }
                }
                if (isContentView(childAt)) {
                    childAt.measure(View.MeasureSpec.makeMeasureSpec((size - ((ViewGroup.MarginLayoutParams) dVar).leftMargin) - ((ViewGroup.MarginLayoutParams) dVar).rightMargin, 1073741824), View.MeasureSpec.makeMeasureSpec((size2 - ((ViewGroup.MarginLayoutParams) dVar).topMargin) - ((ViewGroup.MarginLayoutParams) dVar).bottomMargin, 1073741824));
                } else if (isDrawerView(childAt)) {
                    if (SET_DRAWER_SHADOW_FROM_ELEVATION) {
                        float u10 = h0.u(childAt);
                        float f10 = this.mDrawerElevation;
                        if (u10 != f10) {
                            h0.v0(childAt, f10);
                        }
                    }
                    if ((getDrawerViewAbsoluteGravity(childAt) & 7) == 3) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    if ((z11 && z13) || (!z11 && z14)) {
                        throw new IllegalStateException("Child drawer has absolute gravity " + gravityToString(drawerViewAbsoluteGravity) + " but this " + TAG + " already has a drawer view along that edge");
                    }
                    if (z11) {
                        z13 = true;
                    } else {
                        z14 = true;
                    }
                    childAt.measure(ViewGroup.getChildMeasureSpec(i10, this.mMinDrawerMargin + ((ViewGroup.MarginLayoutParams) dVar).leftMargin + ((ViewGroup.MarginLayoutParams) dVar).rightMargin, ((ViewGroup.MarginLayoutParams) dVar).width), ViewGroup.getChildMeasureSpec(i11, ((ViewGroup.MarginLayoutParams) dVar).topMargin + ((ViewGroup.MarginLayoutParams) dVar).bottomMargin, ((ViewGroup.MarginLayoutParams) dVar).height));
                } else {
                    throw new IllegalStateException("Child " + childAt + " at index " + i12 + " does not have a valid layout_gravity - must be Gravity.LEFT, Gravity.RIGHT or Gravity.NO_GRAVITY");
                }
            }
        }
    }

    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable parcelable) {
        View findDrawerWithGravity;
        if (!(parcelable instanceof e)) {
            super.onRestoreInstanceState(parcelable);
            return;
        }
        e eVar = (e) parcelable;
        super.onRestoreInstanceState(eVar.a());
        int i10 = eVar.f3880i;
        if (i10 != 0 && (findDrawerWithGravity = findDrawerWithGravity(i10)) != null) {
            openDrawer(findDrawerWithGravity);
        }
        int i11 = eVar.f3881o;
        if (i11 != 3) {
            setDrawerLockMode(i11, 3);
        }
        int i12 = eVar.f3882p;
        if (i12 != 3) {
            setDrawerLockMode(i12, 5);
        }
        int i13 = eVar.f3883q;
        if (i13 != 3) {
            setDrawerLockMode(i13, 8388611);
        }
        int i14 = eVar.f3884r;
        if (i14 != 3) {
            setDrawerLockMode(i14, 8388613);
        }
    }

    @Override // android.view.View
    public void onRtlPropertiesChanged(int i10) {
        j();
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        boolean z10;
        e eVar = new e(super.onSaveInstanceState());
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            d dVar = (d) getChildAt(i10).getLayoutParams();
            int i11 = dVar.f3879d;
            boolean z11 = true;
            if (i11 == 1) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (i11 != 2) {
                z11 = false;
            }
            if (z10 || z11) {
                eVar.f3880i = dVar.f3876a;
                break;
            }
        }
        eVar.f3881o = this.mLockModeLeft;
        eVar.f3882p = this.mLockModeRight;
        eVar.f3883q = this.mLockModeStart;
        eVar.f3884r = this.mLockModeEnd;
        return eVar;
    }

    /* JADX WARN: Code restructure failed: missing block: B:18:0x0058, code lost:
        if (getDrawerLockMode(r7) != 2) goto L19;
     */
    @Override // android.view.View
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean onTouchEvent(android.view.MotionEvent r7) {
        /*
            r6 = this;
            androidx.customview.widget.ViewDragHelper r0 = r6.mLeftDragger
            r0.F(r7)
            androidx.customview.widget.ViewDragHelper r0 = r6.mRightDragger
            r0.F(r7)
            int r0 = r7.getAction()
            r0 = r0 & 255(0xff, float:3.57E-43)
            r1 = 0
            r2 = 1
            if (r0 == 0) goto L5f
            if (r0 == r2) goto L20
            r7 = 3
            if (r0 == r7) goto L1a
            goto L6d
        L1a:
            r6.closeDrawers(r2)
            r6.mChildrenCanceledTouch = r1
            goto L6d
        L20:
            float r0 = r7.getX()
            float r7 = r7.getY()
            androidx.customview.widget.ViewDragHelper r3 = r6.mLeftDragger
            int r4 = (int) r0
            int r5 = (int) r7
            android.view.View r3 = r3.t(r4, r5)
            if (r3 == 0) goto L5a
            boolean r3 = r6.isContentView(r3)
            if (r3 == 0) goto L5a
            float r3 = r6.mInitialMotionX
            float r0 = r0 - r3
            float r3 = r6.mInitialMotionY
            float r7 = r7 - r3
            androidx.customview.widget.ViewDragHelper r3 = r6.mLeftDragger
            int r3 = r3.z()
            float r0 = r0 * r0
            float r7 = r7 * r7
            float r0 = r0 + r7
            int r3 = r3 * r3
            float r7 = (float) r3
            int r7 = (r0 > r7 ? 1 : (r0 == r7 ? 0 : -1))
            if (r7 >= 0) goto L5a
            android.view.View r7 = r6.findOpenDrawer()
            if (r7 == 0) goto L5a
            int r7 = r6.getDrawerLockMode(r7)
            r0 = 2
            if (r7 != r0) goto L5b
        L5a:
            r1 = r2
        L5b:
            r6.closeDrawers(r1)
            goto L6d
        L5f:
            float r0 = r7.getX()
            float r7 = r7.getY()
            r6.mInitialMotionX = r0
            r6.mInitialMotionY = r7
            r6.mChildrenCanceledTouch = r1
        L6d:
            return r2
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.drawerlayout.widget.DrawerLayout.onTouchEvent(android.view.MotionEvent):boolean");
    }

    public void open() {
        openDrawer(8388611);
    }

    public void openDrawer(@NonNull View view) {
        openDrawer(view, true);
    }

    public void removeDrawerListener(@NonNull DrawerListener drawerListener) {
        List<DrawerListener> list;
        if (drawerListener == null || (list = this.mListeners) == null) {
            return;
        }
        list.remove(drawerListener);
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void requestDisallowInterceptTouchEvent(boolean z10) {
        super.requestDisallowInterceptTouchEvent(z10);
        if (z10) {
            closeDrawers(true);
        }
    }

    @Override // android.view.View, android.view.ViewParent
    public void requestLayout() {
        if (!this.mInLayout) {
            super.requestLayout();
        }
    }

    public void setChildInsets(Object obj, boolean z10) {
        boolean z11;
        this.mLastInsets = obj;
        this.mDrawStatusBarBackground = z10;
        if (!z10 && getBackground() == null) {
            z11 = true;
        } else {
            z11 = false;
        }
        setWillNotDraw(z11);
        requestLayout();
    }

    public void setDrawerElevation(float f10) {
        this.mDrawerElevation = f10;
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            View childAt = getChildAt(i10);
            if (isDrawerView(childAt)) {
                h0.v0(childAt, this.mDrawerElevation);
            }
        }
    }

    @Deprecated
    public void setDrawerListener(DrawerListener drawerListener) {
        DrawerListener drawerListener2 = this.mListener;
        if (drawerListener2 != null) {
            removeDrawerListener(drawerListener2);
        }
        if (drawerListener != null) {
            addDrawerListener(drawerListener);
        }
        this.mListener = drawerListener;
    }

    public void setDrawerLockMode(int i10) {
        setDrawerLockMode(i10, 3);
        setDrawerLockMode(i10, 5);
    }

    public void setDrawerShadow(Drawable drawable, int i10) {
        if (SET_DRAWER_SHADOW_FROM_ELEVATION) {
            return;
        }
        if ((i10 & 8388611) == 8388611) {
            this.mShadowStart = drawable;
        } else if ((i10 & 8388613) == 8388613) {
            this.mShadowEnd = drawable;
        } else if ((i10 & 3) == 3) {
            this.mShadowLeft = drawable;
        } else if ((i10 & 5) != 5) {
            return;
        } else {
            this.mShadowRight = drawable;
        }
        j();
        invalidate();
    }

    public void setDrawerTitle(int i10, CharSequence charSequence) {
        int b10 = j.b(i10, h0.z(this));
        if (b10 == 3) {
            this.mTitleLeft = charSequence;
        } else if (b10 == 5) {
            this.mTitleRight = charSequence;
        }
    }

    void setDrawerViewOffset(View view, float f10) {
        d dVar = (d) view.getLayoutParams();
        if (f10 == dVar.f3877b) {
            return;
        }
        dVar.f3877b = f10;
        dispatchOnDrawerSlide(view, f10);
    }

    public void setScrimColor(int i10) {
        this.mScrimColor = i10;
        invalidate();
    }

    public void setStatusBarBackground(Drawable drawable) {
        this.mStatusBarBackground = drawable;
        invalidate();
    }

    public void setStatusBarBackgroundColor(int i10) {
        this.mStatusBarBackground = new ColorDrawable(i10);
        invalidate();
    }

    void updateDrawerState(int i10, View view) {
        int i11;
        int A = this.mLeftDragger.A();
        int A2 = this.mRightDragger.A();
        if (A != 1 && A2 != 1) {
            i11 = 2;
            if (A != 2 && A2 != 2) {
                i11 = 0;
            }
        } else {
            i11 = 1;
        }
        if (view != null && i10 == 0) {
            float f10 = ((d) view.getLayoutParams()).f3877b;
            if (f10 == 0.0f) {
                dispatchOnDrawerClosed(view);
            } else if (f10 == 1.0f) {
                dispatchOnDrawerOpened(view);
            }
        }
        if (i11 != this.mDrawerState) {
            this.mDrawerState = i11;
            List<DrawerListener> list = this.mListeners;
            if (list != null) {
                for (int size = list.size() - 1; size >= 0; size--) {
                    this.mListeners.get(size).onDrawerStateChanged(i11);
                }
            }
        }
    }

    public DrawerLayout(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, a3.a.f374a);
    }

    public void closeDrawer(@NonNull View view, boolean z10) {
        if (isDrawerView(view)) {
            d dVar = (d) view.getLayoutParams();
            if (this.mFirstLayout) {
                dVar.f3877b = 0.0f;
                dVar.f3879d = 0;
            } else if (z10) {
                dVar.f3879d |= 4;
                if (checkDrawerViewAbsoluteGravity(view, 3)) {
                    this.mLeftDragger.Q(view, -view.getWidth(), view.getTop());
                } else {
                    this.mRightDragger.Q(view, getWidth(), view.getTop());
                }
            } else {
                moveDrawerToOffset(view, 0.0f);
                updateDrawerState(0, view);
                view.setVisibility(4);
            }
            invalidate();
            return;
        }
        throw new IllegalArgumentException("View " + view + " is not a sliding drawer");
    }

    void closeDrawers(boolean z10) {
        boolean Q;
        int childCount = getChildCount();
        boolean z11 = false;
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = getChildAt(i10);
            d dVar = (d) childAt.getLayoutParams();
            if (isDrawerView(childAt) && (!z10 || dVar.f3878c)) {
                int width = childAt.getWidth();
                if (checkDrawerViewAbsoluteGravity(childAt, 3)) {
                    Q = this.mLeftDragger.Q(childAt, -width, childAt.getTop());
                } else {
                    Q = this.mRightDragger.Q(childAt, getWidth(), childAt.getTop());
                }
                z11 |= Q;
                dVar.f3878c = false;
            }
        }
        this.mLeftCallback.p();
        this.mRightCallback.p();
        if (z11) {
            invalidate();
        }
    }

    public void openDrawer(@NonNull View view, boolean z10) {
        if (isDrawerView(view)) {
            d dVar = (d) view.getLayoutParams();
            if (this.mFirstLayout) {
                dVar.f3877b = 1.0f;
                dVar.f3879d = 1;
                l(view, true);
                k(view);
            } else if (z10) {
                dVar.f3879d |= 2;
                if (checkDrawerViewAbsoluteGravity(view, 3)) {
                    this.mLeftDragger.Q(view, 0, view.getTop());
                } else {
                    this.mRightDragger.Q(view, getWidth() - view.getWidth(), view.getTop());
                }
            } else {
                moveDrawerToOffset(view, 1.0f);
                updateDrawerState(0, view);
                view.setVisibility(0);
            }
            invalidate();
            return;
        }
        throw new IllegalArgumentException("View " + view + " is not a sliding drawer");
    }

    public DrawerLayout(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.mChildAccessibilityDelegate = new ChildAccessibilityDelegate();
        this.mScrimColor = DEFAULT_SCRIM_COLOR;
        this.mScrimPaint = new Paint();
        this.mFirstLayout = true;
        this.mLockModeLeft = 3;
        this.mLockModeRight = 3;
        this.mLockModeStart = 3;
        this.mLockModeEnd = 3;
        this.mShadowStart = null;
        this.mShadowEnd = null;
        this.mShadowLeft = null;
        this.mShadowRight = null;
        this.mActionDismiss = new a();
        setDescendantFocusability(262144);
        float f10 = getResources().getDisplayMetrics().density;
        this.mMinDrawerMargin = (int) ((64.0f * f10) + 0.5f);
        float f11 = f10 * 400.0f;
        ViewDragCallback viewDragCallback = new ViewDragCallback(3);
        this.mLeftCallback = viewDragCallback;
        ViewDragCallback viewDragCallback2 = new ViewDragCallback(5);
        this.mRightCallback = viewDragCallback2;
        ViewDragHelper n10 = ViewDragHelper.n(this, 1.0f, viewDragCallback);
        this.mLeftDragger = n10;
        n10.M(1);
        n10.N(f11);
        viewDragCallback.q(n10);
        ViewDragHelper n11 = ViewDragHelper.n(this, 1.0f, viewDragCallback2);
        this.mRightDragger = n11;
        n11.M(2);
        n11.N(f11);
        viewDragCallback2.q(n11);
        setFocusableInTouchMode(true);
        h0.x0(this, 1);
        h0.n0(this, new c());
        setMotionEventSplittingEnabled(false);
        if (h0.w(this)) {
            setOnApplyWindowInsetsListener(new b());
            setSystemUiVisibility(1280);
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(THEME_ATTRS);
            try {
                this.mStatusBarBackground = obtainStyledAttributes.getDrawable(0);
            } finally {
                obtainStyledAttributes.recycle();
            }
        }
        TypedArray obtainStyledAttributes2 = context.obtainStyledAttributes(attributeSet, a3.c.f377b, i10, 0);
        try {
            if (obtainStyledAttributes2.hasValue(a3.c.f378c)) {
                this.mDrawerElevation = obtainStyledAttributes2.getDimension(a3.c.f378c, 0.0f);
            } else {
                this.mDrawerElevation = getResources().getDimension(a3.b.f375a);
            }
            obtainStyledAttributes2.recycle();
            this.mNonDrawerViews = new ArrayList<>();
        } catch (Throwable th2) {
            obtainStyledAttributes2.recycle();
            throw th2;
        }
    }

    public void setDrawerLockMode(int i10, int i11) {
        View findDrawerWithGravity;
        int b10 = j.b(i11, h0.z(this));
        if (i11 == 3) {
            this.mLockModeLeft = i10;
        } else if (i11 == 5) {
            this.mLockModeRight = i10;
        } else if (i11 == 8388611) {
            this.mLockModeStart = i10;
        } else if (i11 == 8388613) {
            this.mLockModeEnd = i10;
        }
        if (i10 != 0) {
            (b10 == 3 ? this.mLeftDragger : this.mRightDragger).a();
        }
        if (i10 != 1) {
            if (i10 == 2 && (findDrawerWithGravity = findDrawerWithGravity(b10)) != null) {
                openDrawer(findDrawerWithGravity);
                return;
            }
            return;
        }
        View findDrawerWithGravity2 = findDrawerWithGravity(b10);
        if (findDrawerWithGravity2 != null) {
            closeDrawer(findDrawerWithGravity2);
        }
    }

    public void setStatusBarBackground(int i10) {
        this.mStatusBarBackground = i10 != 0 ? androidx.core.content.a.e(getContext(), i10) : null;
        invalidate();
    }

    public boolean isDrawerVisible(int i10) {
        View findDrawerWithGravity = findDrawerWithGravity(i10);
        if (findDrawerWithGravity != null) {
            return isDrawerVisible(findDrawerWithGravity);
        }
        return false;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends ViewGroup.MarginLayoutParams {

        /* renamed from: a  reason: collision with root package name */
        public int f3876a;

        /* renamed from: b  reason: collision with root package name */
        float f3877b;

        /* renamed from: c  reason: collision with root package name */
        boolean f3878c;

        /* renamed from: d  reason: collision with root package name */
        int f3879d;

        public d(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
            this.f3876a = 0;
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, DrawerLayout.LAYOUT_ATTRS);
            this.f3876a = obtainStyledAttributes.getInt(0, 0);
            obtainStyledAttributes.recycle();
        }

        public d(int i10, int i11) {
            super(i10, i11);
            this.f3876a = 0;
        }

        public d(d dVar) {
            super((ViewGroup.MarginLayoutParams) dVar);
            this.f3876a = 0;
            this.f3876a = dVar.f3876a;
        }

        public d(ViewGroup.LayoutParams layoutParams) {
            super(layoutParams);
            this.f3876a = 0;
        }

        public d(ViewGroup.MarginLayoutParams marginLayoutParams) {
            super(marginLayoutParams);
            this.f3876a = 0;
        }
    }

    public boolean isDrawerOpen(int i10) {
        View findDrawerWithGravity = findDrawerWithGravity(i10);
        if (findDrawerWithGravity != null) {
            return isDrawerOpen(findDrawerWithGravity);
        }
        return false;
    }

    @Override // android.view.ViewGroup
    public ViewGroup.LayoutParams generateLayoutParams(AttributeSet attributeSet) {
        return new d(getContext(), attributeSet);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e extends u2.a {
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: i  reason: collision with root package name */
        int f3880i;

        /* renamed from: o  reason: collision with root package name */
        int f3881o;

        /* renamed from: p  reason: collision with root package name */
        int f3882p;

        /* renamed from: q  reason: collision with root package name */
        int f3883q;

        /* renamed from: r  reason: collision with root package name */
        int f3884r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Parcelable.ClassLoaderCreator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public e createFromParcel(Parcel parcel) {
                return new e(parcel, null);
            }

            @Override // android.os.Parcelable.ClassLoaderCreator
            /* renamed from: b */
            public e createFromParcel(Parcel parcel, ClassLoader classLoader) {
                return new e(parcel, classLoader);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: c */
            public e[] newArray(int i10) {
                return new e[i10];
            }
        }

        public e(Parcel parcel, ClassLoader classLoader) {
            super(parcel, classLoader);
            this.f3880i = 0;
            this.f3880i = parcel.readInt();
            this.f3881o = parcel.readInt();
            this.f3882p = parcel.readInt();
            this.f3883q = parcel.readInt();
            this.f3884r = parcel.readInt();
        }

        @Override // u2.a, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            super.writeToParcel(parcel, i10);
            parcel.writeInt(this.f3880i);
            parcel.writeInt(this.f3881o);
            parcel.writeInt(this.f3882p);
            parcel.writeInt(this.f3883q);
            parcel.writeInt(this.f3884r);
        }

        public e(Parcelable parcelable) {
            super(parcelable);
            this.f3880i = 0;
        }
    }

    public void setDrawerShadow(int i10, int i11) {
        setDrawerShadow(androidx.core.content.a.e(getContext(), i10), i11);
    }

    public int getDrawerLockMode(@NonNull View view) {
        if (isDrawerView(view)) {
            return getDrawerLockMode(((d) view.getLayoutParams()).f3876a);
        }
        throw new IllegalArgumentException("View " + view + " is not a drawer");
    }

    public void setDrawerLockMode(int i10, @NonNull View view) {
        if (isDrawerView(view)) {
            setDrawerLockMode(i10, ((d) view.getLayoutParams()).f3876a);
            return;
        }
        throw new IllegalArgumentException("View " + view + " is not a drawer with appropriate layout_gravity");
    }

    public void closeDrawer(int i10) {
        closeDrawer(i10, true);
    }

    public void closeDrawer(int i10, boolean z10) {
        View findDrawerWithGravity = findDrawerWithGravity(i10);
        if (findDrawerWithGravity != null) {
            closeDrawer(findDrawerWithGravity, z10);
            return;
        }
        throw new IllegalArgumentException("No drawer view found with gravity " + gravityToString(i10));
    }

    public void openDrawer(int i10) {
        openDrawer(i10, true);
    }

    public void openDrawer(int i10, boolean z10) {
        View findDrawerWithGravity = findDrawerWithGravity(i10);
        if (findDrawerWithGravity != null) {
            openDrawer(findDrawerWithGravity, z10);
            return;
        }
        throw new IllegalArgumentException("No drawer view found with gravity " + gravityToString(i10));
    }
}
