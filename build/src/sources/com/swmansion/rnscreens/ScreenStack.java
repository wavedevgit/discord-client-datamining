package com.swmansion.rnscreens;

import android.content.Context;
import android.graphics.Canvas;
import android.os.Build;
import android.view.View;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.stack.views.ChildrenDrawingOrderStrategy;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.TypeIntrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ScreenStack extends ScreenContainer {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String TAG = "ScreenStack";
    private ChildrenDrawingOrderStrategy childrenDrawingOrderStrategy;
    @NotNull
    private List<View> disappearingTransitioningChildren;
    @NotNull
    private final Set<ScreenStackFragmentWrapper> dismissedWrappers;
    @NotNull
    private final List<DrawingOp> drawingOpPool;
    @NotNull
    private List<DrawingOp> drawingOps;
    private boolean goingForward;
    private boolean removalTransitionStarted;
    @NotNull
    private final ArrayList<ScreenStackFragmentWrapper> stack;
    private ScreenStackFragmentWrapper topScreenWrapper;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean b(ScreenFragmentWrapper screenFragmentWrapper, Screen.StackAnimation stackAnimation) {
            if (stackAnimation == null) {
                stackAnimation = screenFragmentWrapper.h().getStackAnimation();
            }
            if ((Build.VERSION.SDK_INT >= 33 || stackAnimation == Screen.StackAnimation.f18175o || stackAnimation == Screen.StackAnimation.f18178r || stackAnimation == Screen.StackAnimation.f18179s || stackAnimation == Screen.StackAnimation.f18180t) && stackAnimation != Screen.StackAnimation.f18173e) {
                return true;
            }
            return false;
        }

        private Companion() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class DrawingOp {

        /* renamed from: a  reason: collision with root package name */
        private Canvas f18215a;

        /* renamed from: b  reason: collision with root package name */
        private View f18216b;

        /* renamed from: c  reason: collision with root package name */
        private long f18217c;

        public DrawingOp() {
        }

        public final void a() {
            ScreenStack.this.G(this);
            this.f18215a = null;
            this.f18216b = null;
            this.f18217c = 0L;
        }

        public final Canvas b() {
            return this.f18215a;
        }

        public final View c() {
            return this.f18216b;
        }

        public final long d() {
            return this.f18217c;
        }

        public final void e(Canvas canvas) {
            this.f18215a = canvas;
        }

        public final void f(View view) {
            this.f18216b = view;
        }

        public final void g(long j10) {
            this.f18217c = j10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f18219a;

        static {
            int[] iArr = new int[Screen.StackPresentation.values().length];
            try {
                iArr[Screen.StackPresentation.f18186o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            f18219a = iArr;
        }
    }

    public ScreenStack(Context context) {
        super(context);
        this.stack = new ArrayList<>();
        this.dismissedWrappers = new HashSet();
        this.drawingOpPool = new ArrayList();
        this.drawingOps = new ArrayList();
        this.disappearingTransitioningChildren = new ArrayList();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ScreenStackFragmentWrapper A(ScreenFragmentWrapper it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return (ScreenStackFragmentWrapper) it;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean B(ScreenStack screenStack, ScreenStackFragmentWrapper wrapper) {
        Intrinsics.checkNotNullParameter(wrapper, "wrapper");
        if (screenStack.screenWrappers.contains(wrapper) && !screenStack.dismissedWrappers.contains(wrapper)) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean C(Ref.ObjectRef objectRef, ScreenFragmentWrapper it) {
        Intrinsics.checkNotNullParameter(it, "it");
        if (it != objectRef.element) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean D(ScreenStack screenStack, ScreenFragmentWrapper it) {
        Intrinsics.checkNotNullParameter(it, "it");
        if (!CollectionsKt.d0(screenStack.dismissedWrappers, it) && it.h().getActivityState() != Screen.ActivityState.f18163d) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean E(ScreenFragmentWrapper it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return it.i();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean F(Ref.ObjectRef objectRef, ScreenStackFragmentWrapper it) {
        Intrinsics.checkNotNullParameter(it, "it");
        if (it != objectRef.element && it.i()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void G(DrawingOp drawingOp) {
        Canvas b10 = drawingOp.b();
        Intrinsics.checkNotNull(b10);
        super.drawChild(b10, drawingOp.c(), drawingOp.d());
    }

    private final void H(ScreenFragmentWrapper screenFragmentWrapper) {
        ScreenStackFragmentWrapper screenStackFragmentWrapper;
        if (this.screenWrappers.size() > 1 && screenFragmentWrapper != null && (screenStackFragmentWrapper = this.topScreenWrapper) != null && screenStackFragmentWrapper.i()) {
            ArrayList<ScreenFragmentWrapper> arrayList = this.screenWrappers;
            for (ScreenFragmentWrapper screenFragmentWrapper2 : CollectionsKt.S(CollectionsKt.T0(arrayList, kotlin.ranges.d.u(0, arrayList.size() - 1)))) {
                screenFragmentWrapper2.h().changeAccessibilityMode(4);
                if (Intrinsics.areEqual(screenFragmentWrapper2, screenFragmentWrapper)) {
                    break;
                }
            }
        }
        Screen topScreen = getTopScreen();
        if (topScreen != null) {
            topScreen.changeAccessibilityMode(0);
        }
    }

    private final void t() {
        int surfaceId = UIManagerHelper.getSurfaceId(this);
        Context context = getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) context, getId());
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(new ln.t(surfaceId, getId()));
        }
    }

    private final void u() {
        List<DrawingOp> list = this.drawingOps;
        this.drawingOps = new ArrayList();
        for (DrawingOp drawingOp : list) {
            drawingOp.a();
            this.drawingOpPool.add(drawingOp);
        }
    }

    private final DrawingOp v() {
        if (this.drawingOpPool.isEmpty()) {
            return new DrawingOp();
        }
        List<DrawingOp> list = this.drawingOpPool;
        return list.remove(CollectionsKt.n(list));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean w(Ref.ObjectRef objectRef, ScreenStack screenStack, ScreenFragmentWrapper it) {
        Intrinsics.checkNotNullParameter(it, "it");
        if ((it != objectRef.element && !CollectionsKt.d0(screenStack.dismissedWrappers, it)) || it.h().getActivityState() == Screen.ActivityState.f18163d) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean x(Ref.ObjectRef objectRef, ScreenFragmentWrapper it) {
        Intrinsics.checkNotNullParameter(it, "it");
        if (it != objectRef.element) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean y(ScreenFragmentWrapper it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return !it.a().isAdded();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void z(ScreenFragmentWrapper screenFragmentWrapper) {
        Screen h10;
        if (screenFragmentWrapper != null && (h10 = screenFragmentWrapper.h()) != null) {
            h10.bringToFront();
        }
    }

    public final void dismiss(@NotNull ScreenStackFragmentWrapper screenFragment) {
        Intrinsics.checkNotNullParameter(screenFragment, "screenFragment");
        this.dismissedWrappers.add(screenFragment);
        performUpdatesNow();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void dispatchDraw(@NotNull Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        super.dispatchDraw(canvas);
        ChildrenDrawingOrderStrategy childrenDrawingOrderStrategy = this.childrenDrawingOrderStrategy;
        if (childrenDrawingOrderStrategy != null) {
            childrenDrawingOrderStrategy.a(this.drawingOps);
        }
        u();
    }

    @Override // android.view.ViewGroup
    protected boolean drawChild(@NotNull Canvas canvas, @NotNull View child, long j10) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        Intrinsics.checkNotNullParameter(child, "child");
        List<DrawingOp> list = this.drawingOps;
        DrawingOp v10 = v();
        v10.e(canvas);
        v10.f(child);
        v10.g(j10);
        list.add(v10);
        return true;
    }

    @Override // android.view.ViewGroup
    public void endViewTransition(View view) {
        ChildrenDrawingOrderStrategy childrenDrawingOrderStrategy;
        Intrinsics.checkNotNullParameter(view, "view");
        super.endViewTransition(view);
        this.disappearingTransitioningChildren.remove(view);
        if (this.disappearingTransitioningChildren.isEmpty() && (childrenDrawingOrderStrategy = this.childrenDrawingOrderStrategy) != null) {
            childrenDrawingOrderStrategy.disable();
        }
        if (this.removalTransitionStarted) {
            this.removalTransitionStarted = false;
            t();
        }
    }

    @NotNull
    public final ArrayList<ScreenStackFragmentWrapper> getFragments() {
        return this.stack;
    }

    public final boolean getGoingForward() {
        return this.goingForward;
    }

    @NotNull
    public final Screen getRootScreen() {
        Object obj;
        Screen h10;
        Iterator<T> it = this.screenWrappers.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (!CollectionsKt.d0(this.dismissedWrappers, (ScreenFragmentWrapper) obj)) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        ScreenFragmentWrapper screenFragmentWrapper = (ScreenFragmentWrapper) obj;
        if (screenFragmentWrapper != null && (h10 = screenFragmentWrapper.h()) != null) {
            return h10;
        }
        throw new IllegalStateException("[RNScreens] Stack has no root screen set");
    }

    @Override // com.swmansion.rnscreens.ScreenContainer
    public Screen getTopScreen() {
        ScreenStackFragmentWrapper screenStackFragmentWrapper = this.topScreenWrapper;
        if (screenStackFragmentWrapper != null) {
            return screenStackFragmentWrapper.h();
        }
        return null;
    }

    @Override // com.swmansion.rnscreens.ScreenContainer
    public boolean hasScreen(ScreenFragmentWrapper screenFragmentWrapper) {
        if (super.hasScreen(screenFragmentWrapper) && !CollectionsKt.d0(this.dismissedWrappers, screenFragmentWrapper)) {
            return true;
        }
        return false;
    }

    @Override // com.swmansion.rnscreens.ScreenContainer
    protected void notifyContainerUpdate() {
        for (ScreenStackFragmentWrapper screenStackFragmentWrapper : this.stack) {
            screenStackFragmentWrapper.m();
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:5:0x003b, code lost:
        if (r3 == r0.element) goto L102;
     */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r4v1, types: [T, java.lang.Object] */
    @Override // com.swmansion.rnscreens.ScreenContainer
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void onUpdate() {
        /*
            Method dump skipped, instructions count: 570
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.swmansion.rnscreens.ScreenStack.onUpdate():void");
    }

    public final void onViewAppearTransitionEnd() {
        if (!this.removalTransitionStarted) {
            t();
        }
    }

    @Override // com.swmansion.rnscreens.ScreenContainer
    public void removeAllScreens() {
        this.dismissedWrappers.clear();
        super.removeAllScreens();
    }

    @Override // com.swmansion.rnscreens.ScreenContainer
    public void removeScreenAt(int i10) {
        TypeIntrinsics.asMutableCollection(this.dismissedWrappers).remove(getScreenFragmentWrapperAt(i10));
        super.removeScreenAt(i10);
    }

    public final void setGoingForward(boolean z10) {
        this.goingForward = z10;
    }

    @Override // android.view.ViewGroup
    public void startViewTransition(@NotNull View view) {
        ChildrenDrawingOrderStrategy childrenDrawingOrderStrategy;
        Intrinsics.checkNotNullParameter(view, "view");
        if (view instanceof on.d) {
            super.startViewTransition(view);
            if (((on.d) view).getFragment$react_native_screens_release().isRemoving()) {
                this.disappearingTransitioningChildren.add(view);
            }
            if (!this.disappearingTransitioningChildren.isEmpty() && (childrenDrawingOrderStrategy = this.childrenDrawingOrderStrategy) != null) {
                childrenDrawingOrderStrategy.enable();
            }
            this.removalTransitionStarted = true;
            return;
        }
        Class<?> cls = view.getClass();
        throw new IllegalStateException(("[RNScreens] Unexpected type of ScreenStack direct subview " + cls).toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.swmansion.rnscreens.ScreenContainer
    @NotNull
    public ScreenStackFragmentWrapper adapt(@NotNull Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        if (a.f18219a[screen.getStackPresentation().ordinal()] == 1) {
            return new n0(screen);
        }
        return new n0(screen);
    }
}
