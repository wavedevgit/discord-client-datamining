package com.shopify.reactnative.flash_list;

import android.content.Context;
import android.graphics.Canvas;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.widget.HorizontalScrollView;
import android.widget.ScrollView;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.views.view.ReactViewGroup;
import java.util.Comparator;
import kotlin.collections.i;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends ReactViewGroup {

    /* renamed from: d  reason: collision with root package name */
    private final com.shopify.reactnative.flash_list.a f17459d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f17460e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f17461i;

    /* renamed from: o  reason: collision with root package name */
    private double f17462o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Comparator {
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return or.a.d(Integer.valueOf(((d) obj).getIndex()), Integer.valueOf(((d) obj2).getIndex()));
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f17459d = new com.shopify.reactnative.flash_list.a();
        this.f17462o = 1.0d;
    }

    private final void c() {
        Context context = getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) context, getId());
        if (eventDispatcherForReactTag != null) {
            Context context2 = getContext();
            Intrinsics.checkNotNull(context2, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
            eventDispatcherForReactTag.dispatchEvent(new c(UIManagerHelper.getSurfaceId((ReactContext) context2), getId(), this.f17459d.d() / this.f17462o, this.f17459d.c() / this.f17462o));
        }
    }

    private final void d() {
        View view;
        View parentScrollView = getParentScrollView();
        if (!this.f17461i && parentScrollView != null) {
            if (this.f17459d.e()) {
                if (getRight() > parentScrollView.getWidth()) {
                    return;
                }
            } else if (getBottom() > parentScrollView.getHeight()) {
                return;
            }
            ViewParent parent = getParent();
            if (parent instanceof View) {
                view = (View) parent;
            } else {
                view = null;
            }
            View footer = getFooter();
            int footerDiff = getFooterDiff();
            if (footerDiff != 0 && footer != null && view != null) {
                if (this.f17459d.e()) {
                    footer.offsetLeftAndRight(footerDiff);
                    setRight(getRight() + footerDiff);
                    view.setRight(view.getRight() + footerDiff);
                    return;
                }
                footer.offsetTopAndBottom(footerDiff);
                setBottom(getBottom() + footerDiff);
                view.setBottom(view.getBottom() + footerDiff);
            }
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    private final void e() {
        int top;
        if (getChildCount() > 1 && !this.f17461i) {
            int childCount = getChildCount();
            d[] dVarArr = new d[childCount];
            for (int i10 = 0; i10 < childCount; i10++) {
                View childAt = getChildAt(i10);
                if (childAt instanceof d) {
                    dVarArr[i10] = childAt;
                } else {
                    throw new IllegalStateException("CellRendererComponent outer view should always be CellContainer. Learn more here: https://shopify.github.io/flash-list/docs/usage#cellrenderercomponent.");
                }
            }
            if (childCount > 1) {
                i.F(dVarArr, new a());
            }
            com.shopify.reactnative.flash_list.a aVar = this.f17459d;
            if (aVar.e()) {
                top = getLeft();
            } else {
                top = getTop();
            }
            aVar.j(top);
            this.f17459d.a(dVarArr);
        }
    }

    private final View getFooter() {
        ViewGroup viewGroup;
        ViewParent parent = getParent();
        if (parent instanceof ViewGroup) {
            viewGroup = (ViewGroup) parent;
        } else {
            viewGroup = null;
        }
        if (viewGroup != null) {
            int childCount = viewGroup.getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                View childAt = viewGroup.getChildAt(i10);
                if ((childAt instanceof d) && ((d) childAt).getIndex() == -1) {
                    return childAt;
                }
            }
        }
        return null;
    }

    private final int getFooterDiff() {
        int bottom;
        int bottom2;
        int top;
        if (getChildCount() == 0) {
            this.f17459d.i(0);
        } else if (getChildCount() == 1) {
            View childAt = getChildAt(0);
            com.shopify.reactnative.flash_list.a aVar = this.f17459d;
            if (aVar.e()) {
                bottom = childAt.getRight();
            } else {
                bottom = childAt.getBottom();
            }
            aVar.i(bottom);
        }
        if (this.f17459d.e()) {
            bottom2 = getRight();
            top = getLeft();
        } else {
            bottom2 = getBottom();
            top = getTop();
        }
        return this.f17459d.f() - (bottom2 - top);
    }

    private final View getParentScrollView() {
        for (ViewParent parent = getParent(); parent != null; parent = parent.getParent()) {
            if ((parent instanceof ScrollView) || (parent instanceof HorizontalScrollView)) {
                return (View) parent;
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void dispatchDraw(Canvas canvas) {
        int height;
        int scrollY;
        int top;
        int bottom;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        e();
        d();
        super.dispatchDraw(canvas);
        View parentScrollView = getParentScrollView();
        if (this.f17460e && parentScrollView != null) {
            if (this.f17459d.e()) {
                height = parentScrollView.getWidth();
            } else {
                height = parentScrollView.getHeight();
            }
            if (this.f17459d.e()) {
                scrollY = parentScrollView.getScrollX();
            } else {
                scrollY = parentScrollView.getScrollY();
            }
            if (this.f17459d.e()) {
                top = getLeft();
            } else {
                top = getTop();
            }
            if (this.f17459d.e()) {
                bottom = getRight();
            } else {
                bottom = getBottom();
            }
            this.f17459d.b(scrollY, Math.max(top - scrollY, 0), Math.max((height + scrollY) - bottom, 0));
            c();
        }
    }

    @NotNull
    public final com.shopify.reactnative.flash_list.a getAlShadow() {
        return this.f17459d;
    }

    public final boolean getDisableAutoLayout() {
        return this.f17461i;
    }

    public final boolean getEnableInstrumentation() {
        return this.f17460e;
    }

    public final double getPixelDensity() {
        return this.f17462o;
    }

    public final void setDisableAutoLayout(boolean z10) {
        this.f17461i = z10;
    }

    public final void setEnableInstrumentation(boolean z10) {
        this.f17460e = z10;
    }

    public final void setPixelDensity(double d10) {
        this.f17462o = d10;
    }
}
