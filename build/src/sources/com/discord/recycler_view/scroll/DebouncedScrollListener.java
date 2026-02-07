package com.discord.recycler_view.scroll;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.recycler_view.scroll.DebouncedScrollListener;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000b\n\u0002\b\u0015\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0016\u0018\u00002\u00020\u0001:\u0001*Bg\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012 \u0010\b\u001a\u001c\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0007\u0018\u00010\u0004\u0012\u001c\b\u0002\u0010\n\u001a\u0016\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0007\u0018\u00010\t\u0012\u0016\b\u0002\u0010\r\u001a\u0010\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u0007\u0018\u00010\u000b¢\u0006\u0004\b\u000e\u0010\u000fJ\u0017\u0010\u0011\u001a\u00020\u00072\u0006\u0010\u0010\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\u0011\u0010\u0012J\u001f\u0010\n\u001a\u00020\u00072\u0006\u0010\u0013\u001a\u00020\u00052\u0006\u0010\u0010\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\n\u0010\u0014J'\u0010\b\u001a\u00020\u00072\u0006\u0010\u0013\u001a\u00020\u00052\u0006\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\b\u0010\u0017J\r\u0010\u0018\u001a\u00020\u0002¢\u0006\u0004\b\u0018\u0010\u0019J\u0017\u0010\u001a\u001a\u00020\u00072\u0006\u0010\u0003\u001a\u00020\u0002H\u0007¢\u0006\u0004\b\u001a\u0010\u001bJ\u000f\u0010\u001c\u001a\u00020\u0007H\u0007¢\u0006\u0004\b\u001c\u0010\u001dR\u0016\u0010\u0003\u001a\u00020\u00028\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0003\u0010\u001eR.\u0010\b\u001a\u001c\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0007\u0018\u00010\u00048\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\b\u0010\u001fR(\u0010\n\u001a\u0016\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0007\u0018\u00010\t8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\n\u0010 R\"\u0010\r\u001a\u0010\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u0007\u0018\u00010\u000b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\r\u0010!R\u0016\u0010#\u001a\u00020\"8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\b#\u0010$R\u0016\u0010%\u001a\u00020\f8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b%\u0010&R\u001c\u0010(\u001a\b\u0012\u0004\u0012\u00020\"0'8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b(\u0010)¨\u0006+"}, d2 = {"Lcom/discord/recycler_view/scroll/DebouncedScrollListener;", "Landroidx/recyclerview/widget/RecyclerView$OnScrollListener;", "", "timeoutMillis", "Lkotlin/Function3;", "Landroidx/recyclerview/widget/RecyclerView;", "", "", "onScrolled", "Lkotlin/Function2;", "onScrollStateChanged", "Lkotlin/Function1;", "", "onDragStateChanged", "<init>", "(JLkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function1;)V", "newState", "checkDragState", "(I)V", "recyclerView", "(Landroidx/recyclerview/widget/RecyclerView;I)V", "dx", "dy", "(Landroidx/recyclerview/widget/RecyclerView;II)V", "getTimeoutMillis", "()J", "setTimeoutMillis", "(J)V", "cancel", "()V", "J", "Lkotlin/jvm/functions/Function3;", "Lkotlin/jvm/functions/Function2;", "Lkotlin/jvm/functions/Function1;", "Lcom/discord/recycler_view/scroll/DebouncedScrollListener$ScrollEvent;", "lastScrollEvent", "Lcom/discord/recycler_view/scroll/DebouncedScrollListener$ScrollEvent;", "isDragging", "Z", "Lcom/discord/recycler_view/scroll/DebouncedFlow;", "scrollEvents", "Lcom/discord/recycler_view/scroll/DebouncedFlow;", "ScrollEvent", "recycler_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DebouncedScrollListener extends RecyclerView.OnScrollListener {
    private boolean isDragging;
    private ScrollEvent lastScrollEvent;
    private final Function1<Boolean, Unit> onDragStateChanged;
    private final Function2<RecyclerView, Integer, Unit> onScrollStateChanged;
    private final Function3 onScrolled;
    @NotNull
    private DebouncedFlow<ScrollEvent> scrollEvents;
    private long timeoutMillis;

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0012\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0082\b\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0007\u0010\bJ\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0005HÆ\u0003J'\u0010\u0016\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0017\u001a\u00020\u00182\b\u0010\u0019\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001a\u001a\u00020\u0005HÖ\u0001J\t\u0010\u001b\u001a\u00020\u001cHÖ\u0001R\u001a\u0010\u0002\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\t\u0010\n\"\u0004\b\u000b\u0010\fR\u001a\u0010\u0004\u001a\u00020\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\r\u0010\u000e\"\u0004\b\u000f\u0010\u0010R\u001a\u0010\u0006\u001a\u00020\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0011\u0010\u000e\"\u0004\b\u0012\u0010\u0010¨\u0006\u001d"}, d2 = {"Lcom/discord/recycler_view/scroll/DebouncedScrollListener$ScrollEvent;", "", "recyclerView", "Landroidx/recyclerview/widget/RecyclerView;", "dx", "", "dy", "<init>", "(Landroidx/recyclerview/widget/RecyclerView;II)V", "getRecyclerView", "()Landroidx/recyclerview/widget/RecyclerView;", "setRecyclerView", "(Landroidx/recyclerview/widget/RecyclerView;)V", "getDx", "()I", "setDx", "(I)V", "getDy", "setDy", "component1", "component2", "component3", "copy", "equals", "", "other", "hashCode", "toString", "", "recycler_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class ScrollEvent {
        private int dx;
        private int dy;
        @NotNull
        private RecyclerView recyclerView;

        public ScrollEvent(@NotNull RecyclerView recyclerView, int i10, int i11) {
            Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
            this.recyclerView = recyclerView;
            this.dx = i10;
            this.dy = i11;
        }

        public static /* synthetic */ ScrollEvent copy$default(ScrollEvent scrollEvent, RecyclerView recyclerView, int i10, int i11, int i12, Object obj) {
            if ((i12 & 1) != 0) {
                recyclerView = scrollEvent.recyclerView;
            }
            if ((i12 & 2) != 0) {
                i10 = scrollEvent.dx;
            }
            if ((i12 & 4) != 0) {
                i11 = scrollEvent.dy;
            }
            return scrollEvent.copy(recyclerView, i10, i11);
        }

        @NotNull
        public final RecyclerView component1() {
            return this.recyclerView;
        }

        public final int component2() {
            return this.dx;
        }

        public final int component3() {
            return this.dy;
        }

        @NotNull
        public final ScrollEvent copy(@NotNull RecyclerView recyclerView, int i10, int i11) {
            Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
            return new ScrollEvent(recyclerView, i10, i11);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof ScrollEvent) {
                ScrollEvent scrollEvent = (ScrollEvent) obj;
                return Intrinsics.areEqual(this.recyclerView, scrollEvent.recyclerView) && this.dx == scrollEvent.dx && this.dy == scrollEvent.dy;
            }
            return false;
        }

        public final int getDx() {
            return this.dx;
        }

        public final int getDy() {
            return this.dy;
        }

        @NotNull
        public final RecyclerView getRecyclerView() {
            return this.recyclerView;
        }

        public int hashCode() {
            return (((this.recyclerView.hashCode() * 31) + Integer.hashCode(this.dx)) * 31) + Integer.hashCode(this.dy);
        }

        public final void setDx(int i10) {
            this.dx = i10;
        }

        public final void setDy(int i10) {
            this.dy = i10;
        }

        public final void setRecyclerView(@NotNull RecyclerView recyclerView) {
            Intrinsics.checkNotNullParameter(recyclerView, "<set-?>");
            this.recyclerView = recyclerView;
        }

        @NotNull
        public String toString() {
            RecyclerView recyclerView = this.recyclerView;
            int i10 = this.dx;
            int i11 = this.dy;
            return "ScrollEvent(recyclerView=" + recyclerView + ", dx=" + i10 + ", dy=" + i11 + ")";
        }
    }

    public /* synthetic */ DebouncedScrollListener(long j10, Function3 function3, Function2 function2, Function1 function1, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, function3, (i10 & 4) != 0 ? null : function2, (i10 & 8) != 0 ? null : function1);
    }

    private final void checkDragState(int i10) {
        if (i10 != 1) {
            if (i10 == 2 && this.isDragging) {
                this.isDragging = false;
                Function1<Boolean, Unit> function1 = this.onDragStateChanged;
                if (function1 != null) {
                    function1.invoke(Boolean.FALSE);
                }
            }
        } else if (!this.isDragging) {
            this.isDragging = true;
            Function1<Boolean, Unit> function12 = this.onDragStateChanged;
            if (function12 != null) {
                function12.invoke(Boolean.TRUE);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit scrollEvents$lambda$0(DebouncedScrollListener debouncedScrollListener, ScrollEvent scrollEvent) {
        Intrinsics.checkNotNullParameter(scrollEvent, "<destruct>");
        RecyclerView component1 = scrollEvent.component1();
        int component2 = scrollEvent.component2();
        int component3 = scrollEvent.component3();
        Function3 function3 = debouncedScrollListener.onScrolled;
        if (function3 != null) {
            function3.invoke(component1, Integer.valueOf(component2), Integer.valueOf(component3));
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setTimeoutMillis$lambda$1(DebouncedScrollListener debouncedScrollListener, ScrollEvent scrollEvent) {
        Intrinsics.checkNotNullParameter(scrollEvent, "<destruct>");
        RecyclerView component1 = scrollEvent.component1();
        int component2 = scrollEvent.component2();
        int component3 = scrollEvent.component3();
        Function3 function3 = debouncedScrollListener.onScrolled;
        if (function3 != null) {
            function3.invoke(component1, Integer.valueOf(component2), Integer.valueOf(component3));
        }
        return Unit.f32056a;
    }

    public final void cancel() {
        this.scrollEvents.cancel();
    }

    public final long getTimeoutMillis() {
        return this.timeoutMillis;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.OnScrollListener
    public void onScrollStateChanged(@NotNull RecyclerView recyclerView, int i10) {
        Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
        super.onScrollStateChanged(recyclerView, i10);
        Function2<RecyclerView, Integer, Unit> function2 = this.onScrollStateChanged;
        if (function2 != null) {
            function2.invoke(recyclerView, Integer.valueOf(i10));
        }
        checkDragState(i10);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.OnScrollListener
    public void onScrolled(@NotNull RecyclerView recyclerView, int i10, int i11) {
        Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
        super.onScrolled(recyclerView, i10, i11);
        ScrollEvent scrollEvent = this.lastScrollEvent;
        ScrollEvent scrollEvent2 = null;
        if (scrollEvent == null) {
            this.lastScrollEvent = new ScrollEvent(recyclerView, i10, i11);
        } else {
            if (scrollEvent == null) {
                Intrinsics.throwUninitializedPropertyAccessException("lastScrollEvent");
                scrollEvent = null;
            }
            scrollEvent.setRecyclerView(recyclerView);
            ScrollEvent scrollEvent3 = this.lastScrollEvent;
            if (scrollEvent3 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("lastScrollEvent");
                scrollEvent3 = null;
            }
            scrollEvent3.setDx(i10);
            ScrollEvent scrollEvent4 = this.lastScrollEvent;
            if (scrollEvent4 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("lastScrollEvent");
                scrollEvent4 = null;
            }
            scrollEvent4.setDy(i11);
        }
        DebouncedFlow<ScrollEvent> debouncedFlow = this.scrollEvents;
        ScrollEvent scrollEvent5 = this.lastScrollEvent;
        if (scrollEvent5 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("lastScrollEvent");
        } else {
            scrollEvent2 = scrollEvent5;
        }
        debouncedFlow.tryEmit(scrollEvent2);
    }

    public final void setTimeoutMillis(long j10) {
        this.timeoutMillis = j10;
        this.scrollEvents.cancel();
        this.scrollEvents = new DebouncedFlow<>(j10, new Function1() { // from class: com.discord.recycler_view.scroll.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit timeoutMillis$lambda$1;
                timeoutMillis$lambda$1 = DebouncedScrollListener.setTimeoutMillis$lambda$1(DebouncedScrollListener.this, (DebouncedScrollListener.ScrollEvent) obj);
                return timeoutMillis$lambda$1;
            }
        }, false, 4, null);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public DebouncedScrollListener(long j10, Function3 function3, Function2<? super RecyclerView, ? super Integer, Unit> function2, Function1<? super Boolean, Unit> function1) {
        this.timeoutMillis = j10;
        this.onScrolled = function3;
        this.onScrollStateChanged = function2;
        this.onDragStateChanged = function1;
        this.scrollEvents = new DebouncedFlow<>(j10, new Function1() { // from class: com.discord.recycler_view.scroll.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit scrollEvents$lambda$0;
                scrollEvents$lambda$0 = DebouncedScrollListener.scrollEvents$lambda$0(DebouncedScrollListener.this, (DebouncedScrollListener.ScrollEvent) obj);
                return scrollEvents$lambda$0;
            }
        }, false, 4, null);
    }
}
