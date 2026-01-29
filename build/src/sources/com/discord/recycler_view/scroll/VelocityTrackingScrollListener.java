package com.discord.recycler_view.scroll;

import androidx.recyclerview.widget.RecyclerView;
import java.util.LinkedList;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0007\n\u0002\u0010\u0002\n\u0002\b\u0005\n\u0002\u0010\t\n\u0002\b\u0013\n\u0002\u0018\u0002\n\u0002\b\u0007\b\u0016\u0018\u0000 *2\u00020\u0001:\u0001*B=\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\b\b\u0002\u0010\u0005\u001a\u00020\u0004\u0012\b\b\u0002\u0010\u0007\u001a\u00020\u0006\u0012\u0018\u0010\u000b\u001a\u0014\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\n0\b¢\u0006\u0004\b\f\u0010\rJ/\u0010\u0012\u001a\u00020\n2\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u000e\u001a\u00020\t2\u0006\u0010\u000f\u001a\u00020\t2\u0006\u0010\u0011\u001a\u00020\u0010H\u0002¢\u0006\u0004\b\u0012\u0010\u0013J\u0017\u0010\u0015\u001a\u00020\n2\u0006\u0010\u0014\u001a\u00020\tH\u0002¢\u0006\u0004\b\u0015\u0010\u0016J\u001f\u0010\u0018\u001a\u00020\n2\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u0017\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0018\u0010\u0019J'\u0010\u001c\u001a\u00020\n2\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u001a\u001a\u00020\u00062\u0006\u0010\u001b\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u001c\u0010\u001dR\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0007\u0010\u001eR&\u0010\u000b\u001a\u0014\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\n0\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u000b\u0010\u001fR\u0016\u0010 \u001a\u00020\u00048\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b \u0010!R\u0016\u0010\"\u001a\u00020\u00108\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\"\u0010#R\u001a\u0010%\u001a\b\u0012\u0004\u0012\u00020\t0$8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010&R\u0014\u0010)\u001a\u00020\t8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b'\u0010(¨\u0006+"}, d2 = {"Lcom/discord/recycler_view/scroll/VelocityTrackingScrollListener;", "Landroidx/recyclerview/widget/RecyclerView$OnScrollListener;", "Landroidx/recyclerview/widget/RecyclerView;", "recyclerView", "", "recyclerViewIncludesFlings", "", "scrollVelocitySampleSize", "Lkotlin/Function2;", "", "", "scrollVelocityChanged", "<init>", "(Landroidx/recyclerview/widget/RecyclerView;ZILkotlin/jvm/functions/Function2;)V", "velocityX", "velocityY", "", "timeNow", "onVelocityChanged", "(Landroidx/recyclerview/widget/RecyclerView;FFJ)V", "speed", "addSpeedToQueue", "(F)V", "newState", "onScrollStateChanged", "(Landroidx/recyclerview/widget/RecyclerView;I)V", "dx", "dy", "onScrolled", "(Landroidx/recyclerview/widget/RecyclerView;II)V", "I", "Lkotlin/jvm/functions/Function2;", "scrollingStopped", "Z", "scrollTimeSnapshot", "J", "Ljava/util/LinkedList;", "scrollSpeedQueue", "Ljava/util/LinkedList;", "getScrollSpeed", "()F", "scrollSpeed", "Companion", "recycler_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class VelocityTrackingScrollListener extends RecyclerView.OnScrollListener {
    @NotNull
    public static final Companion Companion = new Companion(null);
    public static final int DEFAULT_SAMPLE_SIZE = 10;
    @NotNull
    private final LinkedList<Float> scrollSpeedQueue;
    private long scrollTimeSnapshot;
    @NotNull
    private final Function2<RecyclerView, Float, Unit> scrollVelocityChanged;
    private final int scrollVelocitySampleSize;
    private boolean scrollingStopped;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/recycler_view/scroll/VelocityTrackingScrollListener$Companion;", "", "<init>", "()V", "DEFAULT_SAMPLE_SIZE", "", "recycler_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public /* synthetic */ VelocityTrackingScrollListener(RecyclerView recyclerView, boolean z10, int i10, Function2 function2, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(recyclerView, (i11 & 2) != 0 ? true : z10, (i11 & 4) != 0 ? 10 : i10, function2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void addSpeedToQueue(float f10) {
        if (this.scrollSpeedQueue.size() >= this.scrollVelocitySampleSize) {
            this.scrollSpeedQueue.removeFirst();
        }
        this.scrollSpeedQueue.addLast(Float.valueOf(f10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final float getScrollSpeed() {
        if (!this.scrollSpeedQueue.isEmpty()) {
            return CollectionsKt.Z0(this.scrollSpeedQueue) / this.scrollSpeedQueue.size();
        }
        return 0.0f;
    }

    private final void onVelocityChanged(RecyclerView recyclerView, float f10, float f11, long j10) {
        addSpeedToQueue(f11);
        this.scrollTimeSnapshot = j10;
        this.scrollVelocityChanged.invoke(recyclerView, Float.valueOf(getScrollSpeed()));
    }

    @Override // androidx.recyclerview.widget.RecyclerView.OnScrollListener
    public void onScrollStateChanged(@NotNull RecyclerView recyclerView, int i10) {
        Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
        super.onScrollStateChanged(recyclerView, i10);
        if (i10 == 0) {
            this.scrollingStopped = true;
            this.scrollSpeedQueue.clear();
            this.scrollVelocityChanged.invoke(recyclerView, Float.valueOf(getScrollSpeed()));
            this.scrollTimeSnapshot = -1L;
            return;
        }
        this.scrollingStopped = false;
        if (this.scrollTimeSnapshot == -1) {
            this.scrollTimeSnapshot = System.currentTimeMillis();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.OnScrollListener
    public void onScrolled(@NotNull RecyclerView recyclerView, int i10, int i11) {
        Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
        super.onScrolled(recyclerView, i10, i11);
        if (i11 != 0 && !this.scrollingStopped) {
            long currentTimeMillis = System.currentTimeMillis();
            long j10 = currentTimeMillis - this.scrollTimeSnapshot;
            if (j10 > 0) {
                addSpeedToQueue((i11 / ((float) j10)) * 1000);
            }
            this.scrollTimeSnapshot = currentTimeMillis;
            this.scrollVelocityChanged.invoke(recyclerView, Float.valueOf(getScrollSpeed()));
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    public VelocityTrackingScrollListener(@NotNull final RecyclerView recyclerView, boolean z10, int i10, @NotNull Function2<? super RecyclerView, ? super Float, Unit> scrollVelocityChanged) {
        Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
        Intrinsics.checkNotNullParameter(scrollVelocityChanged, "scrollVelocityChanged");
        this.scrollVelocitySampleSize = i10;
        this.scrollVelocityChanged = scrollVelocityChanged;
        this.scrollingStopped = true;
        this.scrollTimeSnapshot = -1L;
        this.scrollSpeedQueue = new LinkedList<>();
        if (z10) {
            recyclerView.setOnFlingListener(new RecyclerView.OnFlingListener() { // from class: com.discord.recycler_view.scroll.VelocityTrackingScrollListener.1
                @Override // androidx.recyclerview.widget.RecyclerView.OnFlingListener
                public boolean onFling(int i11, int i12) {
                    VelocityTrackingScrollListener.this.addSpeedToQueue(i12);
                    VelocityTrackingScrollListener.this.scrollTimeSnapshot = System.currentTimeMillis();
                    VelocityTrackingScrollListener.this.scrollVelocityChanged.invoke(recyclerView, Float.valueOf(VelocityTrackingScrollListener.this.getScrollSpeed()));
                    return false;
                }
            });
        }
    }
}
