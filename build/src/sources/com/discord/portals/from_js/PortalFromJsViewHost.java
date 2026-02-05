package com.discord.portals.from_js;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityEvent;
import com.discord.crash_reporting.CrashReporting;
import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.discord.portals.utils.StacktraceUtilsKt;
import com.facebook.react.views.view.ReactViewGroup;
import java.util.ArrayList;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.TypeIntrinsics;
import kotlin.text.StringsKt;
import or.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0011\b\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\"\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\n2\u0006\u0010\u0011\u001a\u00020\u00122\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014H\u0016J \u0010\u0015\u001a\u00020\u000f2\u0016\u0010\u0016\u001a\u0012\u0012\u0004\u0012\u00020\n0\fj\b\u0012\u0004\u0012\u00020\n`\rH\u0016J\u0012\u0010\u0017\u001a\u00020\u00182\b\u0010\u0019\u001a\u0004\u0018\u00010\u001aH\u0016J\b\u0010\u001b\u001a\u00020\u0012H\u0016J\u0010\u0010\u001c\u001a\u00020\n2\u0006\u0010\u0011\u001a\u00020\u0012H\u0016J\b\u0010\u001d\u001a\u00020\u000fH\u0016J\u0010\u0010\u001e\u001a\u00020\u000f2\u0006\u0010\u0011\u001a\u00020\u0012H\u0016J\u0012\u0010\u001f\u001a\u00020\u000f2\b\u0010 \u001a\u0004\u0018\u00010\nH\u0016J\u000e\u0010!\u001a\u00020\u000f2\u0006\u0010\u0006\u001a\u00020\u0007J\u0006\u0010\"\u001a\u00020\u000fJ\u0006\u0010#\u001a\u00020\u000fJ\u0010\u0010$\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\nH\u0002J\u000f\u0010%\u001a\u0004\u0018\u00010\u000fH\u0002¢\u0006\u0002\u0010&J\u0018\u0010'\u001a\u00020\u000f2\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u0010\u001a\u00020\nH\u0002J\u0010\u0010(\u001a\u00020\u000f2\u0006\u0010\u0006\u001a\u00020\u0007H\u0002J\b\u0010)\u001a\u00020\u0018H\u0002J\b\u0010*\u001a\u00020\u000fH\u0002R\u0010\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\b\u001a\u0004\u0018\u00010\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\t\u001a\u0004\u0018\u00010\nX\u0082\u000e¢\u0006\u0002\n\u0000R\u001e\u0010\u000b\u001a\u0012\u0012\u0004\u0012\u00020\n0\fj\b\u0012\u0004\u0012\u00020\n`\rX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006+"}, d2 = {"Lcom/discord/portals/from_js/PortalFromJsViewHost;", "Lcom/facebook/react/views/view/ReactViewGroup;", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "portalId", "", "portalIdPrev", "childView", "Landroid/view/View;", "otherViews", "Ljava/util/ArrayList;", "Lkotlin/collections/ArrayList;", "addView", "", "child", "index", "", "params", "Landroid/view/ViewGroup$LayoutParams;", "addChildrenForAccessibility", "outChildren", "dispatchPopulateAccessibilityEvent", "", "event", "Landroid/view/accessibility/AccessibilityEvent;", "getChildCount", "getChildAt", "removeAllViews", "removeViewAt", "removeView", "view", "setPortalId", "onAfterUpdateTransaction", "onDropViewInstance", "addChildView", "removeChildView", "()Lkotlin/Unit;", "childViewAdded", "childViewRemoved", "childViewValid", "replaceChildViewWithNextAvailableChild", "portals_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class PortalFromJsViewHost extends ReactViewGroup {
    private View childView;
    @NotNull
    private ArrayList<View> otherViews;
    private String portalId;
    private String portalIdPrev;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public PortalFromJsViewHost(@NotNull Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.otherViews = new ArrayList<>();
    }

    private final void addChildView(View view) {
        this.childView = view;
        String str = this.portalId;
        Intrinsics.checkNotNull(str);
        childViewAdded(str, view);
    }

    private final void childViewAdded(String str, View view) {
        PortalFromJsContextManager.INSTANCE.portalDidMount$portals_release(str, view);
    }

    private final void childViewRemoved(String str) {
        PortalFromJsContextManager.INSTANCE.portalDidUnmount$portals_release(str);
    }

    private final boolean childViewValid() {
        View view = this.childView;
        if (view == null || !view.isAttachedToWindow() || view.getLayoutParams() == null) {
            return false;
        }
        return true;
    }

    private final Unit removeChildView() {
        if (this.childView == null) {
            return null;
        }
        String str = this.portalId;
        Intrinsics.checkNotNull(str);
        childViewRemoved(str);
        this.childView = null;
        return Unit.f31988a;
    }

    private final void replaceChildViewWithNextAvailableChild() {
        if (this.childView != null) {
            String str = this.portalId;
            if (str == null) {
                return;
            }
            childViewRemoved(str);
        }
        addChildView((View) CollectionsKt.o0(this.otherViews));
        this.otherViews.remove(0);
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void addChildrenForAccessibility(@NotNull ArrayList<View> outChildren) {
        Intrinsics.checkNotNullParameter(outChildren, "outChildren");
    }

    @Override // android.view.ViewGroup
    public void addView(@NotNull View child, int i10, ViewGroup.LayoutParams layoutParams) {
        String str;
        Intrinsics.checkNotNullParameter(child, "child");
        String str2 = this.portalIdPrev;
        String str3 = "";
        if (str2 == null) {
            str2 = "";
        }
        String str4 = this.portalId;
        if (str4 != null) {
            str3 = str4;
        }
        if (i10 != 0) {
            CrashReporting crashReporting = CrashReporting.INSTANCE;
            String str5 = "Non-zero index child added " + i10;
            Pair a10 = v.a("portalId", str3);
            Pair a11 = v.a("prevPortalId", str2);
            Pair a12 = v.a("child", child.toString());
            Pair a13 = v.a("index", String.valueOf(i10));
            if (this.childView == null) {
                str = "true";
            } else {
                str = "false";
            }
            CrashReporting.addBreadcrumb$default(crashReporting, str5, o0.m(a10, a11, a12, a13, v.a("childViewIsNull", str), v.a("stacktrace", StacktraceUtilsKt.getCurrentStacktraceString())), "portal", null, false, 24, null);
            this.otherViews.add(child);
            return;
        }
        if (Intrinsics.areEqual(this.childView, child)) {
            CrashReporting.addBreadcrumb$default(CrashReporting.INSTANCE, "Same child added again", o0.m(v.a("portalId", str3), v.a("prevPortalId", str2), v.a("child", child.toString()), v.a("index", String.valueOf(i10)), v.a("stacktrace", StacktraceUtilsKt.getCurrentStacktraceString())), "portal", null, false, 24, null);
        } else if (this.childView != null && !childViewValid()) {
            removeChildView();
            CrashReporting.addBreadcrumb$default(CrashReporting.INSTANCE, "childView not valid before addView " + str3, o0.m(v.a("portalId", str3), v.a("prevPortalId", str2), v.a("child", child.toString()), v.a("index", String.valueOf(i10)), v.a("stacktrace", StacktraceUtilsKt.getCurrentStacktraceString())), "portal", null, false, 24, null);
        }
        if (this.childView != null) {
            CrashReporting.addBreadcrumb$default(CrashReporting.INSTANCE, "Attempting to add different child when one already exists", o0.m(v.a("portalId", str3), v.a("prevPortalId", str2), v.a("existing", String.valueOf(this.childView)), v.a("new", child.toString()), v.a("index", String.valueOf(i10)), v.a("stacktrace", StacktraceUtilsKt.getCurrentStacktraceString())), "portal_error", null, false, 24, null);
        }
        if (this.childView == null) {
            addChildView(child);
            return;
        }
        throw new IllegalArgumentException(("Adding more than one child unsupported: " + this.portalId + ", previous: " + str2).toString());
    }

    @Override // android.view.View
    public boolean dispatchPopulateAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
        return false;
    }

    @Override // android.view.ViewGroup
    @NotNull
    public View getChildAt(int i10) {
        String str;
        View view;
        String str2 = "";
        if (i10 == 0 && this.childView == null) {
            str = "Requesting portaled view when it's null.";
        } else if (i10 < getChildCount()) {
            str = "";
        } else {
            str = "Requesting invalid index.";
        }
        String str3 = "false";
        if (!StringsKt.k0(str)) {
            CrashReporting crashReporting = CrashReporting.INSTANCE;
            Pair a10 = v.a("index", String.valueOf(i10));
            String str4 = this.portalId;
            if (str4 == null) {
                str4 = "";
            }
            Pair a11 = v.a("portalId", str4);
            String str5 = this.portalIdPrev;
            if (str5 != null) {
                str2 = str5;
            }
            Pair a12 = v.a("prevPortalId", str2);
            if (this.childView == null) {
                str3 = "true";
            }
            CrashReporting.addBreadcrumb$default(crashReporting, "About to crash from getChildAt", o0.m(a10, a11, a12, v.a("childViewIsNull", str3)), "portal", null, false, 24, null);
            throw new IllegalArgumentException(str);
        }
        if (i10 > 0) {
            CrashReporting crashReporting2 = CrashReporting.INSTANCE;
            Pair a13 = v.a("index", String.valueOf(i10));
            String str6 = this.portalId;
            if (str6 == null) {
                str6 = "";
            }
            Pair a14 = v.a("portalId", str6);
            String str7 = this.portalIdPrev;
            if (str7 != null) {
                str2 = str7;
            }
            Pair a15 = v.a("prevPortalId", str2);
            if (this.childView == null) {
                str3 = "true";
            }
            CrashReporting.addBreadcrumb$default(crashReporting2, "getChildAt of non-zero index", o0.m(a13, a14, a15, v.a("childViewIsNull", str3), v.a("stacktrace", StacktraceUtilsKt.getCurrentStacktraceString())), "portal", null, false, 24, null);
        }
        if (i10 == 0) {
            view = this.childView;
        } else {
            view = this.otherViews.get(i10 - 1);
        }
        Intrinsics.checkNotNull(view);
        return view;
    }

    @Override // android.view.ViewGroup
    public int getChildCount() {
        int i10;
        if (this.childView != null) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        return i10 + this.otherViews.size();
    }

    public final void onAfterUpdateTransaction() {
        String str = this.portalIdPrev;
        if (str != null) {
            childViewRemoved(str);
            View view = this.childView;
            if (view != null) {
                String str2 = this.portalId;
                Intrinsics.checkNotNull(str2);
                childViewAdded(str2, view);
            }
            this.portalIdPrev = null;
        }
    }

    public final void onDropViewInstance() {
        String str = this.portalIdPrev;
        if (str != null) {
            Intrinsics.checkNotNull(str);
            childViewRemoved(str);
        } else {
            String str2 = this.portalId;
            if (str2 != null) {
                Intrinsics.checkNotNull(str2);
                childViewRemoved(str2);
            }
        }
        this.childView = null;
        this.otherViews.clear();
        this.portalIdPrev = null;
        this.portalId = null;
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup
    public void removeAllViews() {
        this.otherViews.clear();
        removeChildView();
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.ViewManager
    public void removeView(View view) {
        if (Intrinsics.areEqual(view, this.childView)) {
            removeChildView();
        } else {
            TypeIntrinsics.asMutableCollection(this.otherViews).remove(view);
        }
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup
    public void removeViewAt(int i10) {
        String str = "";
        if (i10 > 0) {
            CrashReporting crashReporting = CrashReporting.INSTANCE;
            Pair a10 = v.a("index", String.valueOf(i10));
            String str2 = this.portalId;
            if (str2 == null) {
                str2 = "";
            }
            Pair a11 = v.a("portalId", str2);
            String str3 = this.portalIdPrev;
            if (str3 != null) {
                str = str3;
            }
            CrashReporting.addBreadcrumb$default(crashReporting, "removeViewAt of non-zero index", o0.m(a10, a11, v.a("prevPortalId", str)), null, null, false, 28, null);
            this.otherViews.remove(i10 - 1);
        } else if (i10 == 0 && !this.otherViews.isEmpty()) {
            CrashReporting crashReporting2 = CrashReporting.INSTANCE;
            String str4 = this.portalId;
            if (str4 == null) {
                str4 = "";
            }
            Pair a12 = v.a("portalId", str4);
            String str5 = this.portalIdPrev;
            if (str5 != null) {
                str = str5;
            }
            Pair a13 = v.a("prevPortalId", str);
            View view = this.childView;
            CrashReporting.addBreadcrumb$default(crashReporting2, "removeViewAt of index 0 even though children with index > 0 exist. Switching to next available child (index 1).", o0.m(a12, a13, v.a("childView", (view == null || (r1 = view.toString()) == null) ? "null" : "null"), v.a("otherViewsSize", String.valueOf(this.otherViews.size())), v.a("stacktrace", StacktraceUtilsKt.getCurrentStacktraceString())), "portal_error", null, false, 24, null);
            if (!LogThrottleSingleton.INSTANCE.shouldThrottle("PortalFromJsViewHost.removeViewAt", LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE)) {
                crashReporting2.captureMessage("PortalFromJsViewHost", "removeViewAt of index 0 even though children with index > 0 exist. Switching to next available child (index 1).", CrashReporting.ErrorLevel.WARNING);
            }
            replaceChildViewWithNextAvailableChild();
        } else {
            removeChildView();
        }
    }

    public final void setPortalId(@NotNull String portalId) {
        Intrinsics.checkNotNullParameter(portalId, "portalId");
        String str = this.portalId;
        if (str == null) {
            this.portalId = portalId;
        } else if (!Intrinsics.areEqual(str, portalId)) {
            this.portalIdPrev = this.portalId;
            this.portalId = portalId;
        }
    }
}
