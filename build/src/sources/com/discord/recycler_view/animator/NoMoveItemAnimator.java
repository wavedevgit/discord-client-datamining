package com.discord.recycler_view.animator;

import androidx.recyclerview.widget.DefaultItemAnimator;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.recycler_view.animator.NoMoveItemAnimator;
import com.discord.recycler_view.scroll.DebouncedFlow;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0010\b\u0016\u0018\u00002\u00020\u0001B+\u0012\u0010\b\u0002\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\u0010\b\u0002\u0010\u0005\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0006\u0010\u0007J2\u0010\u0011\u001a\u00020\t2\b\u0010\u0012\u001a\u0004\u0018\u00010\u00132\u0006\u0010\u0014\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\r2\u0006\u0010\u0016\u001a\u00020\r2\u0006\u0010\u0017\u001a\u00020\rH\u0016J\u0012\u0010\u0018\u001a\u00020\t2\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013H\u0016J\u0012\u0010\u0019\u001a\u00020\t2\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013H\u0016J<\u0010\u001a\u001a\u00020\t2\b\u0010\u001b\u001a\u0004\u0018\u00010\u00132\b\u0010\u001c\u001a\u0004\u0018\u00010\u00132\u0006\u0010\u001d\u001a\u00020\r2\u0006\u0010\u001e\u001a\u00020\r2\u0006\u0010\u001f\u001a\u00020\r2\u0006\u0010 \u001a\u00020\rH\u0016J\u0010\u0010!\u001a\u00020\u00042\u0006\u0010\"\u001a\u00020\u0013H\u0016R\u0016\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0016\u0010\u0005\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u00040\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u001e\u0010\u000e\u001a\u00020\r2\u0006\u0010\f\u001a\u00020\r@BX\u0082\u000e¢\u0006\b\n\u0000\"\u0004\b\u000f\u0010\u0010¨\u0006#"}, d2 = {"Lcom/discord/recycler_view/animator/NoMoveItemAnimator;", "Landroidx/recyclerview/widget/DefaultItemAnimator;", "onAnimationsStarted", "Lkotlin/Function0;", "", "onAnimationsFinished", "<init>", "(Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;)V", "onAnimationFinishedEventPending", "", "onAnimationsFinishedEvents", "Lcom/discord/recycler_view/scroll/DebouncedFlow;", "value", "", "activeAnimations", "setActiveAnimations", "(I)V", "animateMove", "holder", "Landroidx/recyclerview/widget/RecyclerView$ViewHolder;", "fromX", "fromY", "toX", "toY", "animateAdd", "animateRemove", "animateChange", "oldHolder", "newHolder", "fromLeft", "fromTop", "toLeft", "toTop", "onAnimationFinished", "viewHolder", "recycler_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNoMoveItemAnimator.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NoMoveItemAnimator.kt\ncom/discord/recycler_view/animator/NoMoveItemAnimator\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,76:1\n1#2:77\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class NoMoveItemAnimator extends DefaultItemAnimator {
    private int activeAnimations;
    private boolean onAnimationFinishedEventPending;
    private final Function0<Unit> onAnimationsFinished;
    @NotNull
    private final DebouncedFlow<Unit> onAnimationsFinishedEvents;
    private final Function0<Unit> onAnimationsStarted;

    public NoMoveItemAnimator() {
        this(null, null, 3, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onAnimationsFinishedEvents$lambda$0(NoMoveItemAnimator noMoveItemAnimator, Unit it) {
        Intrinsics.checkNotNullParameter(it, "it");
        Function0<Unit> function0 = noMoveItemAnimator.onAnimationsFinished;
        if (function0 != null) {
            function0.invoke();
        }
        noMoveItemAnimator.onAnimationFinishedEventPending = false;
        return Unit.f31988a;
    }

    private final void setActiveAnimations(int i10) {
        if (i10 == 1 && this.activeAnimations == 0 && !this.onAnimationFinishedEventPending) {
            this.onAnimationFinishedEventPending = true;
            Function0<Unit> function0 = this.onAnimationsStarted;
            if (function0 != null) {
                function0.invoke();
            }
        }
        if (i10 == 0 && this.activeAnimations == 1) {
            this.onAnimationsFinishedEvents.tryEmit(Unit.f31988a);
        }
        this.activeAnimations = i10;
    }

    @Override // androidx.recyclerview.widget.DefaultItemAnimator, androidx.recyclerview.widget.q
    public boolean animateAdd(RecyclerView.ViewHolder viewHolder) {
        setActiveAnimations(this.activeAnimations + 1);
        return super.animateAdd(viewHolder);
    }

    @Override // androidx.recyclerview.widget.DefaultItemAnimator, androidx.recyclerview.widget.q
    public boolean animateChange(RecyclerView.ViewHolder viewHolder, RecyclerView.ViewHolder viewHolder2, int i10, int i11, int i12, int i13) {
        setActiveAnimations(this.activeAnimations + 1);
        return super.animateChange(viewHolder, viewHolder2, i10, i11, i12, i13);
    }

    @Override // androidx.recyclerview.widget.DefaultItemAnimator, androidx.recyclerview.widget.q
    public boolean animateMove(RecyclerView.ViewHolder viewHolder, int i10, int i11, int i12, int i13) {
        dispatchMoveFinished(viewHolder);
        Unit unit = Unit.f31988a;
        return false;
    }

    @Override // androidx.recyclerview.widget.DefaultItemAnimator, androidx.recyclerview.widget.q
    public boolean animateRemove(RecyclerView.ViewHolder viewHolder) {
        setActiveAnimations(this.activeAnimations + 1);
        return super.animateRemove(viewHolder);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.ItemAnimator
    public void onAnimationFinished(@NotNull RecyclerView.ViewHolder viewHolder) {
        Intrinsics.checkNotNullParameter(viewHolder, "viewHolder");
        super.onAnimationFinished(viewHolder);
        setActiveAnimations(this.activeAnimations - 1);
    }

    public /* synthetic */ NoMoveItemAnimator(Function0 function0, Function0 function02, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : function0, (i10 & 2) != 0 ? null : function02);
    }

    public NoMoveItemAnimator(Function0<Unit> function0, Function0<Unit> function02) {
        this.onAnimationsStarted = function0;
        this.onAnimationsFinished = function02;
        this.onAnimationsFinishedEvents = new DebouncedFlow<>(250L, new Function1() { // from class: y7.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit onAnimationsFinishedEvents$lambda$0;
                onAnimationsFinishedEvents$lambda$0 = NoMoveItemAnimator.onAnimationsFinishedEvents$lambda$0(NoMoveItemAnimator.this, (Unit) obj);
                return onAnimationsFinishedEvents$lambda$0;
            }
        }, false);
    }
}
