package com.facebook.react.views.scroll;

import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityEvent;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import com.facebook.react.R;
import com.facebook.react.bridge.AssertionException;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ReactAccessibilityDelegate;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000e\n\u0002\b\u0003\b\u0000\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u001f\u0010\t\u001a\u00020\b2\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\t\u0010\nJ\u001f\u0010\r\u001a\u00020\b2\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\f\u001a\u00020\u000bH\u0002¢\u0006\u0004\b\r\u0010\u000eJ\u001f\u0010\u0010\u001a\u00020\b2\u0006\u0010\u000f\u001a\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0010\u0010\nJ\u001f\u0010\u0011\u001a\u00020\b2\u0006\u0010\u000f\u001a\u00020\u00042\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0004\b\u0011\u0010\u000eR\u0014\u0010\u0013\u001a\u00020\u00128\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0013\u0010\u0014¨\u0006\u0015"}, d2 = {"Lcom/facebook/react/views/scroll/ReactScrollViewAccessibilityDelegate;", "Landroidx/core/view/a;", "<init>", "()V", "Landroid/view/View;", "view", "Landroid/view/accessibility/AccessibilityEvent;", "event", "", "onInitializeAccessibilityEventInternal", "(Landroid/view/View;Landroid/view/accessibility/AccessibilityEvent;)V", "Landroidx/core/view/accessibility/AccessibilityNodeInfoCompat;", "info", "onInitializeAccessibilityNodeInfoInternal", "(Landroid/view/View;Landroidx/core/view/accessibility/AccessibilityNodeInfoCompat;)V", "host", "onInitializeAccessibilityEvent", "onInitializeAccessibilityNodeInfo", "", "TAG", "Ljava/lang/String;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactScrollViewAccessibilityDelegate extends androidx.core.view.a {
    @NotNull
    private final String TAG;

    public ReactScrollViewAccessibilityDelegate() {
        String simpleName = ReactScrollViewAccessibilityDelegate.class.getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
        this.TAG = simpleName;
    }

    private final void onInitializeAccessibilityEventInternal(View view, AccessibilityEvent accessibilityEvent) {
        ReadableMap readableMap;
        ViewGroup viewGroup;
        View view2;
        ViewGroup viewGroup2;
        Object tag = view.getTag(R.id.accessibility_collection);
        Integer num = null;
        if (tag instanceof ReadableMap) {
            readableMap = (ReadableMap) tag;
        } else {
            readableMap = null;
        }
        if (readableMap != null) {
            accessibilityEvent.setItemCount(readableMap.getInt("itemCount"));
            if (view instanceof ViewGroup) {
                viewGroup = (ViewGroup) view;
            } else {
                viewGroup = null;
            }
            if (viewGroup != null) {
                view2 = viewGroup.getChildAt(0);
            } else {
                view2 = null;
            }
            if (view2 instanceof ViewGroup) {
                viewGroup2 = (ViewGroup) view2;
            } else {
                viewGroup2 = null;
            }
            if (viewGroup2 != null) {
                int childCount = viewGroup2.getChildCount();
                Integer num2 = null;
                for (int i10 = 0; i10 < childCount; i10++) {
                    View childAt = viewGroup2.getChildAt(i10);
                    if (view instanceof ReactAccessibleScrollView) {
                        Intrinsics.checkNotNull(childAt);
                        boolean isPartiallyScrolledInView = ((ReactAccessibleScrollView) view).isPartiallyScrolledInView(childAt);
                        Object tag2 = childAt.getTag(R.id.accessibility_collection_item);
                        Intrinsics.checkNotNull(tag2, "null cannot be cast to non-null type com.facebook.react.bridge.ReadableMap");
                        ReadableMap readableMap2 = (ReadableMap) tag2;
                        if (childAt instanceof ViewGroup) {
                            ((ViewGroup) childAt).getChildCount();
                            if (isPartiallyScrolledInView) {
                                if (num == null) {
                                    num = Integer.valueOf(readableMap2.getInt("itemIndex"));
                                }
                                num2 = Integer.valueOf(readableMap2.getInt("itemIndex"));
                            }
                            if (num != null && num2 != null) {
                                accessibilityEvent.setFromIndex(num.intValue());
                                accessibilityEvent.setToIndex(num2.intValue());
                            }
                        } else {
                            return;
                        }
                    } else {
                        return;
                    }
                }
            }
        }
    }

    private final void onInitializeAccessibilityNodeInfoInternal(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        ReadableMap readableMap;
        ReactAccessibilityDelegate.AccessibilityRole fromViewTag = ReactAccessibilityDelegate.AccessibilityRole.fromViewTag(view);
        if (fromViewTag != null) {
            ReactAccessibilityDelegate.setRole(accessibilityNodeInfoCompat, fromViewTag, view.getContext());
        }
        Object tag = view.getTag(R.id.accessibility_collection);
        if (tag instanceof ReadableMap) {
            readableMap = (ReadableMap) tag;
        } else {
            readableMap = null;
        }
        if (readableMap != null) {
            accessibilityNodeInfoCompat.y0(AccessibilityNodeInfoCompat.f.a(readableMap.getInt("rowCount"), readableMap.getInt("columnCount"), readableMap.getBoolean("hierarchical")));
        }
        if (view instanceof ReactAccessibleScrollView) {
            accessibilityNodeInfoCompat.V0(((ReactAccessibleScrollView) view).getScrollEnabled());
        }
    }

    @Override // androidx.core.view.a
    public void onInitializeAccessibilityEvent(@NotNull View host, @NotNull AccessibilityEvent event) {
        Intrinsics.checkNotNullParameter(host, "host");
        Intrinsics.checkNotNullParameter(event, "event");
        super.onInitializeAccessibilityEvent(host, event);
        if (host instanceof ReactAccessibleScrollView) {
            onInitializeAccessibilityEventInternal(host, event);
            return;
        }
        String str = this.TAG;
        String simpleName = host.getClass().getSimpleName();
        ReactSoftExceptionLogger.logSoftException(str, new AssertionException("ReactScrollViewAccessibilityDelegate should only be used with ReactAccessibleScrollView, not with class: " + simpleName));
    }

    @Override // androidx.core.view.a
    public void onInitializeAccessibilityNodeInfo(@NotNull View host, @NotNull AccessibilityNodeInfoCompat info) {
        Intrinsics.checkNotNullParameter(host, "host");
        Intrinsics.checkNotNullParameter(info, "info");
        super.onInitializeAccessibilityNodeInfo(host, info);
        if (host instanceof ReactAccessibleScrollView) {
            onInitializeAccessibilityNodeInfoInternal(host, info);
            return;
        }
        String str = this.TAG;
        String simpleName = host.getClass().getSimpleName();
        ReactSoftExceptionLogger.logSoftException(str, new AssertionException("ReactScrollViewAccessibilityDelegate should only be used with ReactAccessibleScrollView, not with class: " + simpleName));
    }
}
