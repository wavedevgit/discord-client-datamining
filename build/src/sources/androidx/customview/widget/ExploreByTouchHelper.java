package androidx.customview.widget;

import android.graphics.Rect;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewParent;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityManager;
import androidx.annotation.NonNull;
import androidx.collection.SparseArrayCompat;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.accessibility.AccessibilityNodeProviderCompat;
import androidx.core.view.h0;
import androidx.customview.widget.FocusStrategy;
import androidx.recyclerview.widget.RecyclerView;
import c2.q;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
import java.util.List;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class ExploreByTouchHelper extends androidx.core.view.a {
    private static final String DEFAULT_CLASS_NAME = "android.view.View";
    public static final int HOST_ID = -1;
    public static final int INVALID_ID = Integer.MIN_VALUE;
    private static final Rect INVALID_PARENT_BOUNDS = new Rect(Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MIN_VALUE, Integer.MIN_VALUE);
    private static final FocusStrategy.BoundsAdapter NODE_ADAPTER = new a();
    private static final FocusStrategy.CollectionAdapter SPARSE_VALUES_ADAPTER = new b();
    private final View mHost;
    private final AccessibilityManager mManager;
    private MyNodeProvider mNodeProvider;
    private final Rect mTempScreenRect = new Rect();
    private final Rect mTempParentRect = new Rect();
    private final Rect mTempVisibleRect = new Rect();
    private final int[] mTempGlobalRect = new int[2];
    int mAccessibilityFocusedVirtualViewId = Integer.MIN_VALUE;
    int mKeyboardFocusedVirtualViewId = Integer.MIN_VALUE;
    private int mHoveredVirtualViewId = Integer.MIN_VALUE;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class MyNodeProvider extends AccessibilityNodeProviderCompat {
        MyNodeProvider() {
        }

        @Override // androidx.core.view.accessibility.AccessibilityNodeProviderCompat
        public AccessibilityNodeInfoCompat b(int i10) {
            return AccessibilityNodeInfoCompat.l0(ExploreByTouchHelper.this.obtainAccessibilityNodeInfo(i10));
        }

        @Override // androidx.core.view.accessibility.AccessibilityNodeProviderCompat
        public AccessibilityNodeInfoCompat d(int i10) {
            int i11;
            if (i10 == 2) {
                i11 = ExploreByTouchHelper.this.mAccessibilityFocusedVirtualViewId;
            } else {
                i11 = ExploreByTouchHelper.this.mKeyboardFocusedVirtualViewId;
            }
            if (i11 == Integer.MIN_VALUE) {
                return null;
            }
            return b(i11);
        }

        @Override // androidx.core.view.accessibility.AccessibilityNodeProviderCompat
        public boolean f(int i10, int i11, Bundle bundle) {
            return ExploreByTouchHelper.this.performAction(i10, i11, bundle);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements FocusStrategy.BoundsAdapter {
        a() {
        }

        @Override // androidx.customview.widget.FocusStrategy.BoundsAdapter
        /* renamed from: b */
        public void a(AccessibilityNodeInfoCompat accessibilityNodeInfoCompat, Rect rect) {
            accessibilityNodeInfoCompat.m(rect);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements FocusStrategy.CollectionAdapter {
        b() {
        }

        @Override // androidx.customview.widget.FocusStrategy.CollectionAdapter
        /* renamed from: c */
        public AccessibilityNodeInfoCompat a(SparseArrayCompat sparseArrayCompat, int i10) {
            return (AccessibilityNodeInfoCompat) sparseArrayCompat.m(i10);
        }

        @Override // androidx.customview.widget.FocusStrategy.CollectionAdapter
        /* renamed from: d */
        public int b(SparseArrayCompat sparseArrayCompat) {
            return sparseArrayCompat.l();
        }
    }

    public ExploreByTouchHelper(View view) {
        if (view != null) {
            this.mHost = view;
            this.mManager = (AccessibilityManager) view.getContext().getSystemService("accessibility");
            view.setFocusable(true);
            if (h0.x(view) == 0) {
                h0.x0(view, 1);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("View may not be null");
    }

    private boolean c(int i10) {
        if (this.mAccessibilityFocusedVirtualViewId == i10) {
            this.mAccessibilityFocusedVirtualViewId = Integer.MIN_VALUE;
            this.mHost.invalidate();
            sendEventForVirtualView(i10, 65536);
            return true;
        }
        return false;
    }

    private boolean d() {
        int i10 = this.mKeyboardFocusedVirtualViewId;
        if (i10 != Integer.MIN_VALUE && onPerformActionForVirtualView(i10, 16, null)) {
            return true;
        }
        return false;
    }

    private AccessibilityEvent e(int i10, int i11) {
        if (i10 != -1) {
            return f(i10, i11);
        }
        return g(i11);
    }

    private AccessibilityEvent f(int i10, int i11) {
        AccessibilityEvent obtain = AccessibilityEvent.obtain(i11);
        AccessibilityNodeInfoCompat obtainAccessibilityNodeInfo = obtainAccessibilityNodeInfo(i10);
        obtain.getText().add(obtainAccessibilityNodeInfo.J());
        obtain.setContentDescription(obtainAccessibilityNodeInfo.w());
        obtain.setScrollable(obtainAccessibilityNodeInfo.e0());
        obtain.setPassword(obtainAccessibilityNodeInfo.c0());
        obtain.setEnabled(obtainAccessibilityNodeInfo.V());
        obtain.setChecked(obtainAccessibilityNodeInfo.S());
        onPopulateEventForVirtualView(i10, obtain);
        if (obtain.getText().isEmpty() && obtain.getContentDescription() == null) {
            throw new RuntimeException("Callbacks must add text or a content description in populateEventForVirtualViewId()");
        }
        obtain.setClassName(obtainAccessibilityNodeInfo.s());
        q.c(obtain, this.mHost, i10);
        obtain.setPackageName(this.mHost.getContext().getPackageName());
        return obtain;
    }

    private AccessibilityEvent g(int i10) {
        AccessibilityEvent obtain = AccessibilityEvent.obtain(i10);
        this.mHost.onInitializeAccessibilityEvent(obtain);
        return obtain;
    }

    private AccessibilityNodeInfoCompat h(int i10) {
        boolean z10;
        AccessibilityNodeInfoCompat j02 = AccessibilityNodeInfoCompat.j0();
        j02.C0(true);
        j02.E0(true);
        j02.w0(DEFAULT_CLASS_NAME);
        Rect rect = INVALID_PARENT_BOUNDS;
        j02.s0(rect);
        j02.t0(rect);
        j02.Q0(this.mHost);
        onPopulateNodeForVirtualView(i10, j02);
        if (j02.J() == null && j02.w() == null) {
            throw new RuntimeException("Callbacks must add text or a content description in populateNodeForVirtualViewId()");
        }
        j02.m(this.mTempParentRect);
        if (!this.mTempParentRect.equals(rect)) {
            int k10 = j02.k();
            if ((k10 & 64) == 0) {
                if ((k10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
                    j02.O0(this.mHost.getContext().getPackageName());
                    j02.Z0(this.mHost, i10);
                    if (this.mAccessibilityFocusedVirtualViewId == i10) {
                        j02.q0(true);
                        j02.a(IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    } else {
                        j02.q0(false);
                        j02.a(64);
                    }
                    if (this.mKeyboardFocusedVirtualViewId == i10) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (z10) {
                        j02.a(2);
                    } else if (j02.X()) {
                        j02.a(1);
                    }
                    j02.F0(z10);
                    this.mHost.getLocationOnScreen(this.mTempGlobalRect);
                    j02.n(this.mTempScreenRect);
                    if (this.mTempScreenRect.equals(rect)) {
                        j02.m(this.mTempScreenRect);
                        if (j02.f3341b != -1) {
                            AccessibilityNodeInfoCompat j03 = AccessibilityNodeInfoCompat.j0();
                            for (int i11 = j02.f3341b; i11 != -1; i11 = j03.f3341b) {
                                j03.R0(this.mHost, -1);
                                j03.s0(INVALID_PARENT_BOUNDS);
                                onPopulateNodeForVirtualView(i11, j03);
                                j03.m(this.mTempParentRect);
                                Rect rect2 = this.mTempScreenRect;
                                Rect rect3 = this.mTempParentRect;
                                rect2.offset(rect3.left, rect3.top);
                            }
                            j03.n0();
                        }
                        this.mTempScreenRect.offset(this.mTempGlobalRect[0] - this.mHost.getScrollX(), this.mTempGlobalRect[1] - this.mHost.getScrollY());
                    }
                    if (this.mHost.getLocalVisibleRect(this.mTempVisibleRect)) {
                        this.mTempVisibleRect.offset(this.mTempGlobalRect[0] - this.mHost.getScrollX(), this.mTempGlobalRect[1] - this.mHost.getScrollY());
                        if (this.mTempScreenRect.intersect(this.mTempVisibleRect)) {
                            j02.t0(this.mTempScreenRect);
                            if (m(this.mTempScreenRect)) {
                                j02.f1(true);
                            }
                        }
                    }
                    return j02;
                }
                throw new RuntimeException("Callbacks must not add ACTION_CLEAR_ACCESSIBILITY_FOCUS in populateNodeForVirtualViewId()");
            }
            throw new RuntimeException("Callbacks must not add ACTION_ACCESSIBILITY_FOCUS in populateNodeForVirtualViewId()");
        }
        throw new RuntimeException("Callbacks must set parent bounds in populateNodeForVirtualViewId()");
    }

    private AccessibilityNodeInfoCompat i() {
        AccessibilityNodeInfoCompat k02 = AccessibilityNodeInfoCompat.k0(this.mHost);
        h0.a0(this.mHost, k02);
        ArrayList arrayList = new ArrayList();
        getVisibleVirtualViews(arrayList);
        if (k02.r() > 0 && arrayList.size() > 0) {
            throw new RuntimeException("Views cannot have both real and virtual children");
        }
        int size = arrayList.size();
        for (int i10 = 0; i10 < size; i10++) {
            k02.d(this.mHost, ((Integer) arrayList.get(i10)).intValue());
        }
        return k02;
    }

    private SparseArrayCompat j() {
        ArrayList arrayList = new ArrayList();
        getVisibleVirtualViews(arrayList);
        SparseArrayCompat sparseArrayCompat = new SparseArrayCompat();
        for (int i10 = 0; i10 < arrayList.size(); i10++) {
            sparseArrayCompat.k(((Integer) arrayList.get(i10)).intValue(), h(((Integer) arrayList.get(i10)).intValue()));
        }
        return sparseArrayCompat;
    }

    private void k(int i10, Rect rect) {
        obtainAccessibilityNodeInfo(i10).m(rect);
    }

    private static Rect l(View view, int i10, Rect rect) {
        int width = view.getWidth();
        int height = view.getHeight();
        if (i10 != 17) {
            if (i10 != 33) {
                if (i10 != 66) {
                    if (i10 == 130) {
                        rect.set(0, -1, width, -1);
                        return rect;
                    }
                    throw new IllegalArgumentException("direction must be one of {FOCUS_UP, FOCUS_DOWN, FOCUS_LEFT, FOCUS_RIGHT}.");
                }
                rect.set(-1, 0, -1, height);
                return rect;
            }
            rect.set(0, height, width, height);
            return rect;
        }
        rect.set(width, 0, width, height);
        return rect;
    }

    private boolean m(Rect rect) {
        if (rect == null || rect.isEmpty() || this.mHost.getWindowVisibility() != 0) {
            return false;
        }
        ViewParent parent = this.mHost.getParent();
        while (parent instanceof View) {
            View view = (View) parent;
            if (view.getAlpha() <= 0.0f || view.getVisibility() != 0) {
                return false;
            }
            parent = view.getParent();
        }
        if (parent == null) {
            return false;
        }
        return true;
    }

    private static int n(int i10) {
        if (i10 != 19) {
            if (i10 != 21) {
                return i10 != 22 ? 130 : 66;
            }
            return 17;
        }
        return 33;
    }

    private boolean o(int i10, Rect rect) {
        AccessibilityNodeInfoCompat accessibilityNodeInfoCompat;
        AccessibilityNodeInfoCompat accessibilityNodeInfoCompat2;
        SparseArrayCompat j10 = j();
        int i11 = this.mKeyboardFocusedVirtualViewId;
        int i12 = Integer.MIN_VALUE;
        if (i11 == Integer.MIN_VALUE) {
            accessibilityNodeInfoCompat = null;
        } else {
            accessibilityNodeInfoCompat = (AccessibilityNodeInfoCompat) j10.e(i11);
        }
        AccessibilityNodeInfoCompat accessibilityNodeInfoCompat3 = accessibilityNodeInfoCompat;
        boolean z10 = true;
        if (i10 != 1 && i10 != 2) {
            if (i10 != 17 && i10 != 33 && i10 != 66 && i10 != 130) {
                throw new IllegalArgumentException("direction must be one of {FOCUS_FORWARD, FOCUS_BACKWARD, FOCUS_UP, FOCUS_DOWN, FOCUS_LEFT, FOCUS_RIGHT}.");
            }
            Rect rect2 = new Rect();
            int i13 = this.mKeyboardFocusedVirtualViewId;
            if (i13 != Integer.MIN_VALUE) {
                k(i13, rect2);
            } else if (rect != null) {
                rect2.set(rect);
            } else {
                l(this.mHost, i10, rect2);
            }
            accessibilityNodeInfoCompat2 = (AccessibilityNodeInfoCompat) FocusStrategy.c(j10, SPARSE_VALUES_ADAPTER, NODE_ADAPTER, accessibilityNodeInfoCompat3, rect2, i10);
        } else {
            if (h0.z(this.mHost) != 1) {
                z10 = false;
            }
            accessibilityNodeInfoCompat2 = (AccessibilityNodeInfoCompat) FocusStrategy.d(j10, SPARSE_VALUES_ADAPTER, NODE_ADAPTER, accessibilityNodeInfoCompat3, i10, z10, false);
        }
        if (accessibilityNodeInfoCompat2 != null) {
            i12 = j10.j(j10.i(accessibilityNodeInfoCompat2));
        }
        return requestKeyboardFocusForVirtualView(i12);
    }

    private boolean p(int i10, int i11, Bundle bundle) {
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 64) {
                    if (i11 != 128) {
                        return onPerformActionForVirtualView(i10, i11, bundle);
                    }
                    return c(i10);
                }
                return r(i10);
            }
            return clearKeyboardFocusForVirtualView(i10);
        }
        return requestKeyboardFocusForVirtualView(i10);
    }

    private boolean q(int i10, Bundle bundle) {
        return h0.c0(this.mHost, i10, bundle);
    }

    private boolean r(int i10) {
        int i11;
        if (!this.mManager.isEnabled() || !this.mManager.isTouchExplorationEnabled() || (i11 = this.mAccessibilityFocusedVirtualViewId) == i10) {
            return false;
        }
        if (i11 != Integer.MIN_VALUE) {
            c(i11);
        }
        this.mAccessibilityFocusedVirtualViewId = i10;
        this.mHost.invalidate();
        sendEventForVirtualView(i10, PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS);
        return true;
    }

    private void s(int i10) {
        int i11 = this.mHoveredVirtualViewId;
        if (i11 == i10) {
            return;
        }
        this.mHoveredVirtualViewId = i10;
        sendEventForVirtualView(i10, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sendEventForVirtualView(i11, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
    }

    public final boolean clearKeyboardFocusForVirtualView(int i10) {
        if (this.mKeyboardFocusedVirtualViewId != i10) {
            return false;
        }
        this.mKeyboardFocusedVirtualViewId = Integer.MIN_VALUE;
        onVirtualViewKeyboardFocusChanged(i10, false);
        sendEventForVirtualView(i10, 8);
        return true;
    }

    public final boolean dispatchHoverEvent(@NonNull MotionEvent motionEvent) {
        if (this.mManager.isEnabled() && this.mManager.isTouchExplorationEnabled()) {
            int action = motionEvent.getAction();
            if (action != 7 && action != 9) {
                if (action != 10 || this.mHoveredVirtualViewId == Integer.MIN_VALUE) {
                    return false;
                }
                s(Integer.MIN_VALUE);
                return true;
            }
            int virtualViewAt = getVirtualViewAt(motionEvent.getX(), motionEvent.getY());
            s(virtualViewAt);
            if (virtualViewAt != Integer.MIN_VALUE) {
                return true;
            }
        }
        return false;
    }

    public final boolean dispatchKeyEvent(@NonNull KeyEvent keyEvent) {
        int i10 = 0;
        if (keyEvent.getAction() != 1) {
            int keyCode = keyEvent.getKeyCode();
            if (keyCode != 61) {
                if (keyCode != 66) {
                    switch (keyCode) {
                        case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        case 20:
                        case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                        case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                            if (keyEvent.hasNoModifiers()) {
                                int n10 = n(keyCode);
                                int repeatCount = keyEvent.getRepeatCount() + 1;
                                boolean z10 = false;
                                while (i10 < repeatCount && o(n10, null)) {
                                    i10++;
                                    z10 = true;
                                }
                                return z10;
                            }
                            break;
                    }
                }
                if (keyEvent.hasNoModifiers() && keyEvent.getRepeatCount() == 0) {
                    d();
                    return true;
                }
            } else if (keyEvent.hasNoModifiers()) {
                return o(2, null);
            } else {
                if (keyEvent.hasModifiers(1)) {
                    return o(1, null);
                }
            }
        }
        return false;
    }

    public final int getAccessibilityFocusedVirtualViewId() {
        return this.mAccessibilityFocusedVirtualViewId;
    }

    @Override // androidx.core.view.a
    public AccessibilityNodeProviderCompat getAccessibilityNodeProvider(View view) {
        if (this.mNodeProvider == null) {
            this.mNodeProvider = new MyNodeProvider();
        }
        return this.mNodeProvider;
    }

    @Deprecated
    public int getFocusedVirtualView() {
        return getAccessibilityFocusedVirtualViewId();
    }

    public final int getKeyboardFocusedVirtualViewId() {
        return this.mKeyboardFocusedVirtualViewId;
    }

    protected abstract int getVirtualViewAt(float f10, float f11);

    protected abstract void getVisibleVirtualViews(List list);

    public final void invalidateRoot() {
        invalidateVirtualView(-1, 1);
    }

    public final void invalidateVirtualView(int i10) {
        invalidateVirtualView(i10, 0);
    }

    @NonNull
    AccessibilityNodeInfoCompat obtainAccessibilityNodeInfo(int i10) {
        if (i10 == -1) {
            return i();
        }
        return h(i10);
    }

    public final void onFocusChanged(boolean z10, int i10, Rect rect) {
        int i11 = this.mKeyboardFocusedVirtualViewId;
        if (i11 != Integer.MIN_VALUE) {
            clearKeyboardFocusForVirtualView(i11);
        }
        if (z10) {
            o(i10, rect);
        }
    }

    @Override // androidx.core.view.a
    public void onInitializeAccessibilityEvent(View view, AccessibilityEvent accessibilityEvent) {
        super.onInitializeAccessibilityEvent(view, accessibilityEvent);
        onPopulateEventForHost(accessibilityEvent);
    }

    @Override // androidx.core.view.a
    public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
        onPopulateNodeForHost(accessibilityNodeInfoCompat);
    }

    protected abstract boolean onPerformActionForVirtualView(int i10, int i11, Bundle bundle);

    protected void onPopulateEventForHost(@NonNull AccessibilityEvent accessibilityEvent) {
    }

    protected void onPopulateEventForVirtualView(int i10, @NonNull AccessibilityEvent accessibilityEvent) {
    }

    protected void onPopulateNodeForHost(@NonNull AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
    }

    protected abstract void onPopulateNodeForVirtualView(int i10, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat);

    protected void onVirtualViewKeyboardFocusChanged(int i10, boolean z10) {
    }

    boolean performAction(int i10, int i11, Bundle bundle) {
        if (i10 != -1) {
            return p(i10, i11, bundle);
        }
        return q(i11, bundle);
    }

    public final boolean requestKeyboardFocusForVirtualView(int i10) {
        int i11;
        if ((!this.mHost.isFocused() && !this.mHost.requestFocus()) || (i11 = this.mKeyboardFocusedVirtualViewId) == i10) {
            return false;
        }
        if (i11 != Integer.MIN_VALUE) {
            clearKeyboardFocusForVirtualView(i11);
        }
        if (i10 == Integer.MIN_VALUE) {
            return false;
        }
        this.mKeyboardFocusedVirtualViewId = i10;
        onVirtualViewKeyboardFocusChanged(i10, true);
        sendEventForVirtualView(i10, 8);
        return true;
    }

    public final boolean sendEventForVirtualView(int i10, int i11) {
        ViewParent parent;
        if (i10 == Integer.MIN_VALUE || !this.mManager.isEnabled() || (parent = this.mHost.getParent()) == null) {
            return false;
        }
        return parent.requestSendAccessibilityEvent(this.mHost, e(i10, i11));
    }

    public final void invalidateVirtualView(int i10, int i11) {
        ViewParent parent;
        if (i10 == Integer.MIN_VALUE || !this.mManager.isEnabled() || (parent = this.mHost.getParent()) == null) {
            return;
        }
        AccessibilityEvent e10 = e(i10, RecyclerView.ItemAnimator.FLAG_MOVED);
        c2.b.b(e10, i11);
        parent.requestSendAccessibilityEvent(this.mHost, e10);
    }
}
