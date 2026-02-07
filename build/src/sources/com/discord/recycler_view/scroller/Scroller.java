package com.discord.recycler_view.scroller;

import android.view.View;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.recycler_view.utils.LayoutManagerUtilsKt;
import com.discord.recycler_view.utils.RecyclerViewExtensionsKt;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import qr.p;
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\u0018\u00002\u00020\u0001:\u0001\u001cB\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005JN\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00132\u000e\b\u0002\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\r0\u00152\u000e\b\u0002\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\r0\u00152\u000e\b\u0002\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\r0\u0015J\u0006\u0010\u0018\u001a\u00020\rJJ\u0010\u0019\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u00112\f\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\r0\u00152\f\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\r0\u00152\f\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\r0\u00152\u0006\u0010\u001a\u001a\u00020\u000fH\u0002J\u0018\u0010\u001b\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u0011H\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0006\u001a\u00020\u00078BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\b\u0010\tR\u0010\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u001d"}, d2 = {"Lcom/discord/recycler_view/scroller/Scroller;", "", "recyclerView", "Landroidx/recyclerview/widget/RecyclerView;", "<init>", "(Landroidx/recyclerview/widget/RecyclerView;)V", "layoutManager", "Landroidx/recyclerview/widget/LinearLayoutManager;", "getLayoutManager", "()Landroidx/recyclerview/widget/LinearLayoutManager;", "currentSearch", "Ljava/lang/Runnable;", "scrollToPosition", "", ViewProps.POSITION, "", "targetAlignment", "Lcom/discord/recycler_view/scroller/Scroller$TargetAlignment;", "animate", "", "onStart", "Lkotlin/Function0;", "onComplete", "onScrollProgress", "cancel", "search", "iteration", "doScrollToPosition", "TargetAlignment", "recycler_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class Scroller {
    private Runnable currentSearch;
    @NotNull
    private final RecyclerView recyclerView;

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b6\u0018\u00002\u00020\u0001:\u0003\u0004\u0005\u0006B\t\b\u0004¢\u0006\u0004\b\u0002\u0010\u0003\u0082\u0001\u0003\u0007\b\t¨\u0006\n"}, d2 = {"Lcom/discord/recycler_view/scroller/Scroller$TargetAlignment;", "", "<init>", "()V", "Anywhere", "Center", "Top", "Lcom/discord/recycler_view/scroller/Scroller$TargetAlignment$Anywhere;", "Lcom/discord/recycler_view/scroller/Scroller$TargetAlignment$Center;", "Lcom/discord/recycler_view/scroller/Scroller$TargetAlignment$Top;", "recycler_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class TargetAlignment {

        @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\bÆ\n\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0013\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÖ\u0003J\t\u0010\b\u001a\u00020\tHÖ\u0001J\t\u0010\n\u001a\u00020\u000bHÖ\u0001¨\u0006\f"}, d2 = {"Lcom/discord/recycler_view/scroller/Scroller$TargetAlignment$Anywhere;", "Lcom/discord/recycler_view/scroller/Scroller$TargetAlignment;", "<init>", "()V", "equals", "", "other", "", "hashCode", "", "toString", "", "recycler_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Anywhere extends TargetAlignment {
            @NotNull
            public static final Anywhere INSTANCE = new Anywhere();

            private Anywhere() {
                super(null);
            }

            public boolean equals(Object obj) {
                return this == obj || (obj instanceof Anywhere);
            }

            public int hashCode() {
                return 425096303;
            }

            @NotNull
            public String toString() {
                return "Anywhere";
            }
        }

        @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\bÆ\n\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0013\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÖ\u0003J\t\u0010\b\u001a\u00020\tHÖ\u0001J\t\u0010\n\u001a\u00020\u000bHÖ\u0001¨\u0006\f"}, d2 = {"Lcom/discord/recycler_view/scroller/Scroller$TargetAlignment$Center;", "Lcom/discord/recycler_view/scroller/Scroller$TargetAlignment;", "<init>", "()V", "equals", "", "other", "", "hashCode", "", "toString", "", "recycler_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Center extends TargetAlignment {
            @NotNull
            public static final Center INSTANCE = new Center();

            private Center() {
                super(null);
            }

            public boolean equals(Object obj) {
                return this == obj || (obj instanceof Center);
            }

            public int hashCode() {
                return 232298313;
            }

            @NotNull
            public String toString() {
                return "Center";
            }
        }

        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u0011\u0012\b\b\u0001\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\t\u0010\b\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\t\u001a\u00020\u00002\b\b\u0003\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\rHÖ\u0003J\t\u0010\u000e\u001a\u00020\u0003HÖ\u0001J\t\u0010\u000f\u001a\u00020\u0010HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0011"}, d2 = {"Lcom/discord/recycler_view/scroller/Scroller$TargetAlignment$Top;", "Lcom/discord/recycler_view/scroller/Scroller$TargetAlignment;", "offsetPx", "", "<init>", "(I)V", "getOffsetPx", "()I", "component1", "copy", "equals", "", "other", "", "hashCode", "toString", "", "recycler_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Top extends TargetAlignment {
            private final int offsetPx;

            public Top(int i10) {
                super(null);
                this.offsetPx = i10;
            }

            public static /* synthetic */ Top copy$default(Top top, int i10, int i11, Object obj) {
                if ((i11 & 1) != 0) {
                    i10 = top.offsetPx;
                }
                return top.copy(i10);
            }

            public final int component1() {
                return this.offsetPx;
            }

            @NotNull
            public final Top copy(int i10) {
                return new Top(i10);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                return (obj instanceof Top) && this.offsetPx == ((Top) obj).offsetPx;
            }

            public final int getOffsetPx() {
                return this.offsetPx;
            }

            public int hashCode() {
                return Integer.hashCode(this.offsetPx);
            }

            @NotNull
            public String toString() {
                int i10 = this.offsetPx;
                return "Top(offsetPx=" + i10 + ")";
            }
        }

        public /* synthetic */ TargetAlignment(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private TargetAlignment() {
        }
    }

    public Scroller(@NotNull RecyclerView recyclerView) {
        Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
        this.recyclerView = recyclerView;
        recyclerView.addOnAttachStateChangeListener(new View.OnAttachStateChangeListener() { // from class: com.discord.recycler_view.scroller.Scroller.1
            {
                Scroller.this = this;
            }

            @Override // android.view.View.OnAttachStateChangeListener
            public void onViewAttachedToWindow(View v10) {
                Intrinsics.checkNotNullParameter(v10, "v");
            }

            @Override // android.view.View.OnAttachStateChangeListener
            public void onViewDetachedFromWindow(View v10) {
                Intrinsics.checkNotNullParameter(v10, "v");
                Scroller.this.cancel();
            }
        });
    }

    private final void doScrollToPosition(int i10, TargetAlignment targetAlignment) {
        if (targetAlignment instanceof TargetAlignment.Anywhere) {
            this.recyclerView.scrollToPosition(i10);
        } else if (targetAlignment instanceof TargetAlignment.Center) {
            RecyclerViewExtensionsKt.scrollToCenter(this.recyclerView, i10);
        } else if (targetAlignment instanceof TargetAlignment.Top) {
            RecyclerViewExtensionsKt.scrollToTop(this.recyclerView, i10, ((TargetAlignment.Top) targetAlignment).getOffsetPx());
        } else {
            throw new p();
        }
    }

    private final LinearLayoutManager getLayoutManager() {
        RecyclerView.LayoutManager layoutManager = this.recyclerView.getLayoutManager();
        Intrinsics.checkNotNull(layoutManager, "null cannot be cast to non-null type androidx.recyclerview.widget.LinearLayoutManager");
        return (LinearLayoutManager) layoutManager;
    }

    public static /* synthetic */ void scrollToPosition$default(Scroller scroller, int i10, TargetAlignment targetAlignment, boolean z10, Function0 function0, Function0 function02, Function0 function03, int i11, Object obj) {
        Function0 function04 = function0;
        if ((i11 & 8) != 0) {
            function04 = new Function0() { // from class: com.discord.recycler_view.scroller.c
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit unit;
                    unit = Unit.f32056a;
                    return unit;
                }
            };
        }
        Function0 function05 = function04;
        Function0 function06 = function02;
        if ((i11 & 16) != 0) {
            function06 = new Function0() { // from class: com.discord.recycler_view.scroller.d
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit unit;
                    unit = Unit.f32056a;
                    return unit;
                }
            };
        }
        Function0 function07 = function06;
        Function0 function08 = function03;
        if ((i11 & 32) != 0) {
            function08 = new Function0() { // from class: com.discord.recycler_view.scroller.e
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit unit;
                    unit = Unit.f32056a;
                    return unit;
                }
            };
        }
        scroller.scrollToPosition(i10, targetAlignment, z10, function05, function07, function08);
    }

    public static final Unit scrollToPosition$lambda$3(Function0 function0, Function0 function02) {
        function0.invoke();
        function02.invoke();
        return Unit.f32056a;
    }

    private final void search(final int i10, final TargetAlignment targetAlignment, final Function0<Unit> function0, final Function0<Unit> function02, final Function0<Unit> function03, final int i11) {
        boolean z10;
        LinearLayoutManager layoutManager = getLayoutManager();
        if (i11 < 30) {
            z10 = true;
        } else {
            z10 = false;
        }
        Boolean isPositionVisible = LayoutManagerUtilsKt.isPositionVisible(layoutManager, i10, z10);
        if (isPositionVisible != null && !isPositionVisible.booleanValue()) {
            doScrollToPosition(i10, targetAlignment);
            function03.invoke();
            Runnable runnable = new Runnable() { // from class: com.discord.recycler_view.scroller.a
                @Override // java.lang.Runnable
                public final void run() {
                    Scroller.search$lambda$4(Scroller.this, i10, targetAlignment, function0, function02, function03, i11);
                }
            };
            this.currentSearch = runnable;
            this.recyclerView.post(runnable);
        } else if (!(targetAlignment instanceof TargetAlignment.Center) && !(targetAlignment instanceof TargetAlignment.Top)) {
            function02.invoke();
        } else {
            doScrollToPosition(i10, targetAlignment);
            function03.invoke();
            function02.invoke();
        }
    }

    public static final void search$lambda$4(Scroller scroller, int i10, TargetAlignment targetAlignment, Function0 function0, Function0 function02, Function0 function03, int i11) {
        scroller.search(i10, targetAlignment, function0, function02, function03, i11 + 1);
    }

    public final void cancel() {
        Runnable runnable = this.currentSearch;
        if (runnable != null) {
            this.recyclerView.removeCallbacks(runnable);
            this.currentSearch = null;
        }
    }

    public final void scrollToPosition(int i10, @NotNull TargetAlignment targetAlignment, boolean z10, @NotNull Function0<Unit> onStart, @NotNull final Function0<Unit> onComplete, @NotNull final Function0<Unit> onScrollProgress) {
        Intrinsics.checkNotNullParameter(targetAlignment, "targetAlignment");
        Intrinsics.checkNotNullParameter(onStart, "onStart");
        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
        Intrinsics.checkNotNullParameter(onScrollProgress, "onScrollProgress");
        cancel();
        onStart.invoke();
        if (z10) {
            RecyclerViewExtensionsKt.scrollToPositionAnimated(this.recyclerView, i10, targetAlignment, new Function0() { // from class: com.discord.recycler_view.scroller.b
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit scrollToPosition$lambda$3;
                    scrollToPosition$lambda$3 = Scroller.scrollToPosition$lambda$3(Function0.this, onComplete);
                    return scrollToPosition$lambda$3;
                }
            });
        } else {
            search(i10, targetAlignment, onStart, onComplete, onScrollProgress, 0);
        }
    }
}
