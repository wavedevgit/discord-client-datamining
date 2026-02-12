package com.discord.recycler_view.scroll;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.recycler_view.scroll.DebouncedVelocityTrackingScrollListener;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0007\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0010\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\u00020\u0001:\u0001&BE\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\b\b\u0002\u0010\u0005\u001a\u00020\u0004\u0012\b\b\u0002\u0010\u0007\u001a\u00020\u0006\u0012\u0018\u0010\u000b\u001a\u0014\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\n0\b\u0012\u0006\u0010\r\u001a\u00020\f¢\u0006\u0004\b\u000e\u0010\u000fJ\u001f\u0010\u0011\u001a\u00020\n2\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u0010\u001a\u00020\tH\u0002¢\u0006\u0004\b\u0011\u0010\u0012J\u000f\u0010\u0013\u001a\u00020\nH\u0007¢\u0006\u0004\b\u0013\u0010\u0014J\u001f\u0010\u0016\u001a\u00020\n2\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u0015\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0016\u0010\u0017J'\u0010\u001a\u001a\u00020\n2\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u0018\u001a\u00020\u00062\u0006\u0010\u0019\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u001a\u0010\u001bR&\u0010\u000b\u001a\u0014\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\n0\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u000b\u0010\u001cR\u0016\u0010\u001e\u001a\u00020\u001d8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\b\u001e\u0010\u001fR\u001a\u0010!\u001a\b\u0012\u0004\u0012\u00020\u001d0 8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\"R\u0014\u0010$\u001a\u00020#8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b$\u0010%¨\u0006'"}, d2 = {"Lcom/discord/recycler_view/scroll/DebouncedVelocityTrackingScrollListener;", "Landroidx/recyclerview/widget/RecyclerView$OnScrollListener;", "Landroidx/recyclerview/widget/RecyclerView;", "recyclerView", "", "recyclerViewIncludesFlings", "", "scrollVelocitySampleSize", "Lkotlin/Function2;", "", "", "scrollVelocityChanged", "", "timeoutMillis", "<init>", "(Landroidx/recyclerview/widget/RecyclerView;ZILkotlin/jvm/functions/Function2;J)V", "velocity", "onScrollVelocityChanged", "(Landroidx/recyclerview/widget/RecyclerView;F)V", "cancel", "()V", "newState", "onScrollStateChanged", "(Landroidx/recyclerview/widget/RecyclerView;I)V", "dx", "dy", "onScrolled", "(Landroidx/recyclerview/widget/RecyclerView;II)V", "Lkotlin/jvm/functions/Function2;", "Lcom/discord/recycler_view/scroll/DebouncedVelocityTrackingScrollListener$VelocityEvent;", "lastVelocityEvent", "Lcom/discord/recycler_view/scroll/DebouncedVelocityTrackingScrollListener$VelocityEvent;", "Lcom/discord/recycler_view/scroll/DebouncedFlow;", "velocityEvents", "Lcom/discord/recycler_view/scroll/DebouncedFlow;", "Lcom/discord/recycler_view/scroll/VelocityTrackingScrollListener;", "velocityTracker", "Lcom/discord/recycler_view/scroll/VelocityTrackingScrollListener;", "VelocityEvent", "recycler_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DebouncedVelocityTrackingScrollListener extends RecyclerView.OnScrollListener {
    private VelocityEvent lastVelocityEvent;
    @NotNull
    private final Function2<RecyclerView, Float, Unit> scrollVelocityChanged;
    @NotNull
    private final DebouncedFlow<VelocityEvent> velocityEvents;
    @NotNull
    private final VelocityTrackingScrollListener velocityTracker;

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u000e\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0082\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u0012\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0017HÖ\u0001J\t\u0010\u0018\u001a\u00020\u0019HÖ\u0001R\u001a\u0010\u0002\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\b\u0010\t\"\u0004\b\n\u0010\u000bR\u001a\u0010\u0004\u001a\u00020\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\f\u0010\r\"\u0004\b\u000e\u0010\u000f¨\u0006\u001a"}, d2 = {"Lcom/discord/recycler_view/scroll/DebouncedVelocityTrackingScrollListener$VelocityEvent;", "", "recyclerView", "Landroidx/recyclerview/widget/RecyclerView;", "velocity", "", "<init>", "(Landroidx/recyclerview/widget/RecyclerView;F)V", "getRecyclerView", "()Landroidx/recyclerview/widget/RecyclerView;", "setRecyclerView", "(Landroidx/recyclerview/widget/RecyclerView;)V", "getVelocity", "()F", "setVelocity", "(F)V", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "", "recycler_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class VelocityEvent {
        @NotNull
        private RecyclerView recyclerView;
        private float velocity;

        public VelocityEvent(@NotNull RecyclerView recyclerView, float f10) {
            Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
            this.recyclerView = recyclerView;
            this.velocity = f10;
        }

        public static /* synthetic */ VelocityEvent copy$default(VelocityEvent velocityEvent, RecyclerView recyclerView, float f10, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                recyclerView = velocityEvent.recyclerView;
            }
            if ((i10 & 2) != 0) {
                f10 = velocityEvent.velocity;
            }
            return velocityEvent.copy(recyclerView, f10);
        }

        @NotNull
        public final RecyclerView component1() {
            return this.recyclerView;
        }

        public final float component2() {
            return this.velocity;
        }

        @NotNull
        public final VelocityEvent copy(@NotNull RecyclerView recyclerView, float f10) {
            Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
            return new VelocityEvent(recyclerView, f10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof VelocityEvent) {
                VelocityEvent velocityEvent = (VelocityEvent) obj;
                return Intrinsics.areEqual(this.recyclerView, velocityEvent.recyclerView) && Float.compare(this.velocity, velocityEvent.velocity) == 0;
            }
            return false;
        }

        @NotNull
        public final RecyclerView getRecyclerView() {
            return this.recyclerView;
        }

        public final float getVelocity() {
            return this.velocity;
        }

        public int hashCode() {
            return (this.recyclerView.hashCode() * 31) + Float.hashCode(this.velocity);
        }

        public final void setRecyclerView(@NotNull RecyclerView recyclerView) {
            Intrinsics.checkNotNullParameter(recyclerView, "<set-?>");
            this.recyclerView = recyclerView;
        }

        public final void setVelocity(float f10) {
            this.velocity = f10;
        }

        @NotNull
        public String toString() {
            RecyclerView recyclerView = this.recyclerView;
            float f10 = this.velocity;
            return "VelocityEvent(recyclerView=" + recyclerView + ", velocity=" + f10 + ")";
        }
    }

    public /* synthetic */ DebouncedVelocityTrackingScrollListener(RecyclerView recyclerView, boolean z10, int i10, Function2 function2, long j10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(recyclerView, (i11 & 2) != 0 ? true : z10, (i11 & 4) != 0 ? 10 : i10, function2, j10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void onScrollVelocityChanged(RecyclerView recyclerView, float f10) {
        VelocityEvent velocityEvent = this.lastVelocityEvent;
        VelocityEvent velocityEvent2 = null;
        if (velocityEvent == null) {
            this.lastVelocityEvent = new VelocityEvent(recyclerView, f10);
        } else {
            if (velocityEvent == null) {
                Intrinsics.throwUninitializedPropertyAccessException("lastVelocityEvent");
                velocityEvent = null;
            }
            velocityEvent.setRecyclerView(recyclerView);
            VelocityEvent velocityEvent3 = this.lastVelocityEvent;
            if (velocityEvent3 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("lastVelocityEvent");
                velocityEvent3 = null;
            }
            velocityEvent3.setVelocity(f10);
        }
        DebouncedFlow<VelocityEvent> debouncedFlow = this.velocityEvents;
        VelocityEvent velocityEvent4 = this.lastVelocityEvent;
        if (velocityEvent4 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("lastVelocityEvent");
        } else {
            velocityEvent2 = velocityEvent4;
        }
        debouncedFlow.tryEmit(velocityEvent2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit velocityEvents$lambda$0(DebouncedVelocityTrackingScrollListener debouncedVelocityTrackingScrollListener, VelocityEvent velocityEvent) {
        Intrinsics.checkNotNullParameter(velocityEvent, "<destruct>");
        debouncedVelocityTrackingScrollListener.scrollVelocityChanged.invoke(velocityEvent.component1(), Float.valueOf(velocityEvent.component2()));
        return Unit.f31988a;
    }

    public final void cancel() {
        this.velocityEvents.cancel();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.OnScrollListener
    public void onScrollStateChanged(@NotNull RecyclerView recyclerView, int i10) {
        Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
        super.onScrollStateChanged(recyclerView, i10);
        this.velocityTracker.onScrollStateChanged(recyclerView, i10);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.OnScrollListener
    public void onScrolled(@NotNull RecyclerView recyclerView, int i10, int i11) {
        Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
        super.onScrolled(recyclerView, i10, i11);
        this.velocityTracker.onScrolled(recyclerView, i10, i11);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public DebouncedVelocityTrackingScrollListener(@NotNull RecyclerView recyclerView, boolean z10, int i10, @NotNull Function2<? super RecyclerView, ? super Float, Unit> scrollVelocityChanged, long j10) {
        Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
        Intrinsics.checkNotNullParameter(scrollVelocityChanged, "scrollVelocityChanged");
        this.scrollVelocityChanged = scrollVelocityChanged;
        this.velocityEvents = new DebouncedFlow<>(j10, new Function1() { // from class: com.discord.recycler_view.scroll.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit velocityEvents$lambda$0;
                velocityEvents$lambda$0 = DebouncedVelocityTrackingScrollListener.velocityEvents$lambda$0(DebouncedVelocityTrackingScrollListener.this, (DebouncedVelocityTrackingScrollListener.VelocityEvent) obj);
                return velocityEvents$lambda$0;
            }
        }, false, 4, null);
        this.velocityTracker = new VelocityTrackingScrollListener(recyclerView, z10, i10, new DebouncedVelocityTrackingScrollListener$velocityTracker$1(this));
    }
}
