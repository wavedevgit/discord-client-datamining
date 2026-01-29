package com.discord.react_gesture_handler.nested_touch;

import android.annotation.SuppressLint;
import android.view.View;
import android.widget.TextView;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\u001a\u001e\u0010\u0004\u001a\u00020\u0005*\u00020\u00062\u0006\u0010\u0007\u001a\u00020\b2\b\u0010\t\u001a\u0004\u0018\u00010\nH\u0007\u001a \u0010\u000b\u001a\u00020\u0005*\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\u0010\f\u001a\u0004\u0018\u00010\nH\u0007\u001a \u0010\r\u001a\u00020\u0005*\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\u0010\u000e\u001a\u0004\u0018\u00010\u000fH\u0007\u001a\u0016\u0010\u0010\u001a\u00020\u0005*\u00020\u00112\b\b\u0002\u0010\u0007\u001a\u00020\bH\u0007\u001a\f\u0010\u0012\u001a\u00020\u0005*\u00020\u0006H\u0002\u001a\f\u0010\u0013\u001a\u00020\u000f*\u00020\u000fH\u0002\u001a\u000e\u0010\u0014\u001a\u0004\u0018\u00010\n*\u00020\u0006H\u0000\u001a\u000e\u0010\u0015\u001a\u0004\u0018\u00010\u000f*\u00020\u0006H\u0000\u001a\u000e\u0010\u0016\u001a\u0004\u0018\u00010\n*\u00020\u0006H\u0000\"\u000e\u0010\u0000\u001a\u00020\u0001X\u0082T¢\u0006\u0002\n\u0000\"\u000e\u0010\u0002\u001a\u00020\u0001X\u0082T¢\u0006\u0002\n\u0000\"\u000e\u0010\u0003\u001a\u00020\u0001X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0017"}, d2 = {"TAG_NESTED_CLICK_LISTENER", "", "TAG_NESTED_LONG_CLICK_LISTENER", "TAG_NESTED_DOUBLE_CLICK_LISTENER", "setOnDoubleClickListenerNested", "", "Landroid/view/View;", "viewManagesAccessibility", "", "onDoubleClickListener", "Landroid/view/View$OnClickListener;", "setOnClickListenerNested", "onClickListener", "setOnLongClickListenerNested", "onLongPress", "Landroid/view/View$OnLongClickListener;", "enableNestedSpanClickListener", "Landroid/widget/TextView;", "updateClickability", "updateWithOngoingGestureCancelling", "getNestedClickListener", "getNestedLongClickListener", "getNestedDoubleClickListener", "react_gesture_handler_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNestedScrollOnTouchUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NestedScrollOnTouchUtils.kt\ncom/discord/react_gesture_handler/nested_touch/NestedScrollOnTouchUtilsKt\n+ 2 ViewUtils.kt\ncom/discord/misc/utilities/view/ViewUtilsKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,89:1\n33#2,2:90\n21#2,19:92\n1869#3,2:111\n*S KotlinDebug\n*F\n+ 1 NestedScrollOnTouchUtils.kt\ncom/discord/react_gesture_handler/nested_touch/NestedScrollOnTouchUtilsKt\n*L\n74#1:90,2\n74#1:92,19\n74#1:111,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NestedScrollOnTouchUtilsKt {
    private static final int TAG_NESTED_CLICK_LISTENER = -111001;
    private static final int TAG_NESTED_DOUBLE_CLICK_LISTENER = -111003;
    private static final int TAG_NESTED_LONG_CLICK_LISTENER = -111002;

    @SuppressLint({"ClickableViewAccessibility"})
    public static final void enableNestedSpanClickListener(@NotNull TextView textView, boolean z10) {
        Intrinsics.checkNotNullParameter(textView, "<this>");
        textView.setOnTouchListener(new NestedScrollOnTouchListener(textView, z10));
    }

    public static /* synthetic */ void enableNestedSpanClickListener$default(TextView textView, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = false;
        }
        enableNestedSpanClickListener(textView, z10);
    }

    public static final View.OnClickListener getNestedClickListener(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        Object tag = view.getTag(TAG_NESTED_CLICK_LISTENER);
        if (tag instanceof View.OnClickListener) {
            return (View.OnClickListener) tag;
        }
        return null;
    }

    public static final View.OnClickListener getNestedDoubleClickListener(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        Object tag = view.getTag(TAG_NESTED_DOUBLE_CLICK_LISTENER);
        if (tag instanceof View.OnClickListener) {
            return (View.OnClickListener) tag;
        }
        return null;
    }

    public static final View.OnLongClickListener getNestedLongClickListener(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        Object tag = view.getTag(TAG_NESTED_LONG_CLICK_LISTENER);
        if (tag instanceof View.OnLongClickListener) {
            return (View.OnLongClickListener) tag;
        }
        return null;
    }

    public static final void setOnClickListenerNested(@NotNull View view, boolean z10, View.OnClickListener onClickListener) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        view.setTag(TAG_NESTED_CLICK_LISTENER, onClickListener);
        view.setOnTouchListener(new NestedScrollOnTouchListener(view, z10));
        updateClickability(view);
    }

    public static /* synthetic */ void setOnClickListenerNested$default(View view, boolean z10, View.OnClickListener onClickListener, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = false;
        }
        setOnClickListenerNested(view, z10, onClickListener);
    }

    public static final void setOnDoubleClickListenerNested(@NotNull View view, boolean z10, View.OnClickListener onClickListener) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        view.setTag(TAG_NESTED_DOUBLE_CLICK_LISTENER, onClickListener);
        view.setOnTouchListener(new NestedScrollOnTouchListener(view, z10));
        updateClickability(view);
    }

    public static final void setOnLongClickListenerNested(@NotNull View view, boolean z10, View.OnLongClickListener onLongClickListener) {
        View.OnLongClickListener onLongClickListener2;
        Intrinsics.checkNotNullParameter(view, "<this>");
        if (onLongClickListener != null) {
            onLongClickListener2 = updateWithOngoingGestureCancelling(onLongClickListener);
        } else {
            onLongClickListener2 = null;
        }
        view.setTag(TAG_NESTED_LONG_CLICK_LISTENER, onLongClickListener2);
        view.setOnTouchListener(new NestedScrollOnTouchListener(view, z10));
        updateClickability(view);
    }

    public static /* synthetic */ void setOnLongClickListenerNested$default(View view, boolean z10, View.OnLongClickListener onLongClickListener, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = false;
        }
        setOnLongClickListenerNested(view, z10, onLongClickListener);
    }

    private static final void updateClickability(View view) {
        boolean z10;
        if (view.getTag(TAG_NESTED_CLICK_LISTENER) == null && view.getTag(TAG_NESTED_LONG_CLICK_LISTENER) == null && view.getTag(TAG_NESTED_DOUBLE_CLICK_LISTENER) == null) {
            z10 = false;
        } else {
            z10 = true;
        }
        view.setClickable(z10);
        view.setFocusable(z10);
    }

    private static final View.OnLongClickListener updateWithOngoingGestureCancelling(final View.OnLongClickListener onLongClickListener) {
        return new View.OnLongClickListener() { // from class: com.discord.react_gesture_handler.nested_touch.d
            @Override // android.view.View.OnLongClickListener
            public final boolean onLongClick(View view) {
                boolean updateWithOngoingGestureCancelling$lambda$1;
                updateWithOngoingGestureCancelling$lambda$1 = NestedScrollOnTouchUtilsKt.updateWithOngoingGestureCancelling$lambda$1(onLongClickListener, view);
                return updateWithOngoingGestureCancelling$lambda$1;
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:19:0x0031  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x0042  */
    /* JADX WARN: Removed duplicated region for block: B:37:0x0063 A[LOOP:3: B:35:0x005d->B:37:0x0063, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:7:0x0017  */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:17:0x002e -> B:18:0x002f). Please submit an issue!!! */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:22:0x003f -> B:23:0x0040). Please submit an issue!!! */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:5:0x0014 -> B:6:0x0015). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final boolean updateWithOngoingGestureCancelling$lambda$1(android.view.View.OnLongClickListener r4, android.view.View r5) {
        /*
            kotlin.jvm.internal.Intrinsics.checkNotNull(r5)
            java.util.ArrayList r0 = new java.util.ArrayList
            r0.<init>()
            android.view.ViewParent r1 = r5.getParent()
            boolean r2 = r1 instanceof android.view.ViewGroup
            r3 = 0
            if (r2 == 0) goto L14
            android.view.ViewGroup r1 = (android.view.ViewGroup) r1
            goto L15
        L14:
            r1 = r3
        L15:
            if (r1 == 0) goto L2e
            boolean r2 = r1 instanceof androidx.recyclerview.widget.RecyclerView
            if (r2 != 0) goto L1d
            r2 = r3
            goto L1e
        L1d:
            r2 = r1
        L1e:
            androidx.recyclerview.widget.RecyclerView r2 = (androidx.recyclerview.widget.RecyclerView) r2
            if (r2 == 0) goto L23
            goto L2f
        L23:
            android.view.ViewParent r1 = r1.getParent()
            boolean r2 = r1 instanceof android.view.ViewGroup
            if (r2 == 0) goto L14
            android.view.ViewGroup r1 = (android.view.ViewGroup) r1
            goto L15
        L2e:
            r2 = r3
        L2f:
            if (r2 == 0) goto L59
            r0.add(r2)
            android.view.ViewParent r1 = r2.getParent()
            boolean r2 = r1 instanceof android.view.ViewGroup
            if (r2 == 0) goto L3f
            android.view.ViewGroup r1 = (android.view.ViewGroup) r1
            goto L40
        L3f:
            r1 = r3
        L40:
            if (r1 == 0) goto L2e
            boolean r2 = r1 instanceof androidx.recyclerview.widget.RecyclerView
            if (r2 != 0) goto L48
            r2 = r3
            goto L49
        L48:
            r2 = r1
        L49:
            androidx.recyclerview.widget.RecyclerView r2 = (androidx.recyclerview.widget.RecyclerView) r2
            if (r2 == 0) goto L4e
            goto L2f
        L4e:
            android.view.ViewParent r1 = r1.getParent()
            boolean r2 = r1 instanceof android.view.ViewGroup
            if (r2 == 0) goto L3f
            android.view.ViewGroup r1 = (android.view.ViewGroup) r1
            goto L40
        L59:
            java.util.Iterator r0 = r0.iterator()
        L5d:
            boolean r1 = r0.hasNext()
            if (r1 == 0) goto L6d
            java.lang.Object r1 = r0.next()
            androidx.recyclerview.widget.RecyclerView r1 = (androidx.recyclerview.widget.RecyclerView) r1
            com.discord.recycler_view.utils.RecyclerViewExtensionsKt.toggleSuppressLayout(r1)
            goto L5d
        L6d:
            boolean r4 = r4.onLongClick(r5)
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt.updateWithOngoingGestureCancelling$lambda$1(android.view.View$OnLongClickListener, android.view.View):boolean");
    }
}
