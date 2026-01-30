package com.discord.react_gesture_handler.nested_touch;

import android.annotation.SuppressLint;
import android.content.Context;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import androidx.core.view.h0;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0004\b\u0000\u0018\u0000 \u00102\u00020\u0001:\u0001\u0010B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0018\u0010\u000e\u001a\u00020\u00052\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u000f\u001a\u00020\fH\u0017R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\n\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r0\u000bX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0011"}, d2 = {"Lcom/discord/react_gesture_handler/nested_touch/NestedScrollOnTouchListener;", "Landroid/view/View$OnTouchListener;", "view", "Landroid/view/View;", "viewManagesAccessibility", "", "<init>", "(Landroid/view/View;Z)V", "viewTouchTracker", "Lcom/discord/react_gesture_handler/nested_touch/NestedScrollOnTouchTracker;", "onSupplementalMotionEventReceived", "Lkotlin/Function1;", "Landroid/view/MotionEvent;", "", "onTouch", "event", "Companion", "react_gesture_handler_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NestedScrollOnTouchListener implements View.OnTouchListener {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static Function2<? super View, ? super Function1<? super MotionEvent, Unit>, Unit> onAddNativeEventListener;
    private static Function2<? super View, ? super Function1<? super MotionEvent, Unit>, Unit> onRemoveNativeEventListener;
    @NotNull
    private Function1<? super MotionEvent, Unit> onSupplementalMotionEventReceived;
    @NotNull
    private final NestedScrollOnTouchTracker viewTouchTracker;

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\n\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003RB\u0010\t\u001a\"\u0012\u0004\u0012\u00020\u0005\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\b0\u0006\u0012\u0004\u0012\u00020\b\u0018\u00010\u00048\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b\t\u0010\n\u001a\u0004\b\u000b\u0010\f\"\u0004\b\r\u0010\u000eRB\u0010\u000f\u001a\"\u0012\u0004\u0012\u00020\u0005\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\b0\u0006\u0012\u0004\u0012\u00020\b\u0018\u00010\u00048\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b\u000f\u0010\n\u001a\u0004\b\u0010\u0010\f\"\u0004\b\u0011\u0010\u000e¨\u0006\u0012"}, d2 = {"Lcom/discord/react_gesture_handler/nested_touch/NestedScrollOnTouchListener$Companion;", "", "<init>", "()V", "Lkotlin/Function2;", "Landroid/view/View;", "Lkotlin/Function1;", "Landroid/view/MotionEvent;", "", "onAddNativeEventListener", "Lkotlin/jvm/functions/Function2;", "getOnAddNativeEventListener", "()Lkotlin/jvm/functions/Function2;", "setOnAddNativeEventListener", "(Lkotlin/jvm/functions/Function2;)V", "onRemoveNativeEventListener", "getOnRemoveNativeEventListener", "setOnRemoveNativeEventListener", "react_gesture_handler_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Function2<View, Function1<? super MotionEvent, Unit>, Unit> getOnAddNativeEventListener() {
            return NestedScrollOnTouchListener.onAddNativeEventListener;
        }

        public final Function2<View, Function1<? super MotionEvent, Unit>, Unit> getOnRemoveNativeEventListener() {
            return NestedScrollOnTouchListener.onRemoveNativeEventListener;
        }

        public final void setOnAddNativeEventListener(Function2<? super View, ? super Function1<? super MotionEvent, Unit>, Unit> function2) {
            NestedScrollOnTouchListener.onAddNativeEventListener = function2;
        }

        public final void setOnRemoveNativeEventListener(Function2<? super View, ? super Function1<? super MotionEvent, Unit>, Unit> function2) {
            NestedScrollOnTouchListener.onRemoveNativeEventListener = function2;
        }

        private Companion() {
        }
    }

    public NestedScrollOnTouchListener(@NotNull final View view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (!z10) {
            h0.n0(view, new androidx.core.view.a() { // from class: com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchListener.1
                @Override // androidx.core.view.a
                public boolean performAccessibilityAction(View host, int i10, Bundle bundle) {
                    View.OnLongClickListener nestedLongClickListener;
                    Intrinsics.checkNotNullParameter(host, "host");
                    if (i10 != 16) {
                        if (i10 == 32 && (nestedLongClickListener = NestedScrollOnTouchUtilsKt.getNestedLongClickListener(view)) != null) {
                            nestedLongClickListener.onLongClick(view);
                        }
                    } else {
                        View.OnClickListener nestedClickListener = NestedScrollOnTouchUtilsKt.getNestedClickListener(view);
                        if (nestedClickListener != null) {
                            nestedClickListener.onClick(view);
                        }
                    }
                    return super.performAccessibilityAction(host, i10, bundle);
                }
            });
        }
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        this.viewTouchTracker = new NestedScrollOnTouchTracker(context, NestedScrollOnTouchUtilsKt.getNestedClickListener(view), NestedScrollOnTouchUtilsKt.getNestedLongClickListener(view), NestedScrollOnTouchUtilsKt.getNestedDoubleClickListener(view), new Function1() { // from class: com.discord.react_gesture_handler.nested_touch.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit viewTouchTracker$lambda$0;
                viewTouchTracker$lambda$0 = NestedScrollOnTouchListener.viewTouchTracker$lambda$0(NestedScrollOnTouchListener.this, (View) obj);
                return viewTouchTracker$lambda$0;
            }
        }, new Function1() { // from class: com.discord.react_gesture_handler.nested_touch.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit viewTouchTracker$lambda$1;
                viewTouchTracker$lambda$1 = NestedScrollOnTouchListener.viewTouchTracker$lambda$1(NestedScrollOnTouchListener.this, (View) obj);
                return viewTouchTracker$lambda$1;
            }
        });
        this.onSupplementalMotionEventReceived = new Function1() { // from class: com.discord.react_gesture_handler.nested_touch.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit onSupplementalMotionEventReceived$lambda$2;
                onSupplementalMotionEventReceived$lambda$2 = NestedScrollOnTouchListener.onSupplementalMotionEventReceived$lambda$2(NestedScrollOnTouchListener.this, view, (MotionEvent) obj);
                return onSupplementalMotionEventReceived$lambda$2;
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onSupplementalMotionEventReceived$lambda$2(NestedScrollOnTouchListener nestedScrollOnTouchListener, View view, MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        nestedScrollOnTouchListener.viewTouchTracker.handleTouch$react_gesture_handler_release(view, event, true);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit viewTouchTracker$lambda$0(NestedScrollOnTouchListener nestedScrollOnTouchListener, View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        Function2<? super View, ? super Function1<? super MotionEvent, Unit>, Unit> function2 = onAddNativeEventListener;
        if (function2 != null) {
            function2.invoke(view, nestedScrollOnTouchListener.onSupplementalMotionEventReceived);
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit viewTouchTracker$lambda$1(NestedScrollOnTouchListener nestedScrollOnTouchListener, View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        Function2<? super View, ? super Function1<? super MotionEvent, Unit>, Unit> function2 = onRemoveNativeEventListener;
        if (function2 != null) {
            function2.invoke(view, nestedScrollOnTouchListener.onSupplementalMotionEventReceived);
        }
        return Unit.f33298a;
    }

    @Override // android.view.View.OnTouchListener
    @SuppressLint({"ClickableViewAccessibility"})
    public boolean onTouch(@NotNull View view, @NotNull MotionEvent event) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(event, "event");
        return this.viewTouchTracker.handleTouch$react_gesture_handler_release(view, event, false);
    }
}
