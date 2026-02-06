package com.discord.react_gesture_handler.nested_touch;

import android.view.View;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker$handleTouch$3", f = "NestedScrollOnTouchTracker.kt", l = {117, 123}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NestedScrollOnTouchTracker$handleTouch$3 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ View $view;
    int label;
    final /* synthetic */ NestedScrollOnTouchTracker this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public NestedScrollOnTouchTracker$handleTouch$3(NestedScrollOnTouchTracker nestedScrollOnTouchTracker, View view, Continuation<? super NestedScrollOnTouchTracker$handleTouch$3> continuation) {
        super(2, continuation);
        this.this$0 = nestedScrollOnTouchTracker;
        this.$view = view;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new NestedScrollOnTouchTracker$handleTouch$3(this.this$0, this.$view, continuation);
    }

    /* JADX WARN: Code restructure failed: missing block: B:11:0x002f, code lost:
        if (os.i0.a(r4, r8) == r0) goto L26;
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x004e, code lost:
        if (os.i0.a(r4 - r9.getDOUBLE_CLICK_MIN_TIME(), r8) == r0) goto L26;
     */
    /* JADX WARN: Code restructure failed: missing block: B:15:0x0050, code lost:
        return r0;
     */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r9) {
        /*
            r8 = this;
            java.lang.Object r0 = wr.b.f()
            int r1 = r8.label
            r2 = 2
            r3 = 1
            if (r1 == 0) goto L1e
            if (r1 == r3) goto L1a
            if (r1 != r2) goto L12
            kotlin.c.b(r9)
            goto L51
        L12:
            java.lang.IllegalStateException r9 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r9.<init>(r0)
            throw r9
        L1a:
            kotlin.c.b(r9)
            goto L32
        L1e:
            kotlin.c.b(r9)
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker$Companion r9 = com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker.access$getCompanion$p()
            long r4 = r9.getDOUBLE_CLICK_MIN_TIME()
            r8.label = r3
            java.lang.Object r9 = os.i0.a(r4, r8)
            if (r9 != r0) goto L32
            goto L50
        L32:
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker r9 = r8.this$0
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker.access$setConsideringDoubleClick$p(r9, r3)
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker$Companion r9 = com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker.access$getCompanion$p()
            long r4 = r9.getDOUBLE_CLICK_TIME()
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker$Companion r9 = com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker.access$getCompanion$p()
            long r6 = r9.getDOUBLE_CLICK_MIN_TIME()
            long r4 = r4 - r6
            r8.label = r2
            java.lang.Object r9 = os.i0.a(r4, r8)
            if (r9 != r0) goto L51
        L50:
            return r0
        L51:
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker r9 = r8.this$0
            r0 = 0
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker.access$setConsideringDoubleClick$p(r9, r0)
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker r9 = r8.this$0
            boolean r9 = com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker.access$getActiveClick$p(r9)
            if (r9 != 0) goto L95
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker r9 = r8.this$0
            com.discord.react_gesture_handler.nested_touch.NestedClickableSpan r9 = com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker.access$getSpanBeingTouched$p(r9)
            if (r9 == 0) goto L75
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker r9 = r8.this$0
            com.discord.react_gesture_handler.nested_touch.NestedClickableSpan r9 = com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker.access$getSpanBeingTouched$p(r9)
            if (r9 == 0) goto L8d
            android.view.View r0 = r8.$view
            r9.onClick(r0)
            goto L8d
        L75:
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker r9 = r8.this$0
            android.view.View$OnClickListener r9 = com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker.access$getOnClickListener$p(r9)
            if (r9 == 0) goto L8d
            android.view.View r9 = r8.$view
            r9.setPressed(r3)
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker r9 = r8.this$0
            android.view.View$OnClickListener r9 = com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker.access$getOnClickListener$p(r9)
            android.view.View r0 = r8.$view
            r9.onClick(r0)
        L8d:
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker r9 = r8.this$0
            android.view.View r0 = r8.$view
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker.access$cleanUp(r9, r0)
            goto L9a
        L95:
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker r9 = r8.this$0
            com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker.access$cleanupDoubleClickJob(r9)
        L9a:
            kotlin.Unit r9 = kotlin.Unit.f32008a
            return r9
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchTracker$handleTouch$3.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((NestedScrollOnTouchTracker$handleTouch$3) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
    }
}
