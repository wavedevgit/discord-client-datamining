package com.discord.misc.utilities.queue;

import com.facebook.react.modules.appstate.AppStateModule;
import java.util.LinkedHashSet;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\u0018\u0000*\u0004\b\u0000\u0010\u00012\u00020\u0002B\u0011\u0012\b\b\u0002\u0010\u0003\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006J/\u0010\f\u001a\u00020\u00042\u0006\u0010\r\u001a\u00028\u00002\u0006\u0010\u000e\u001a\u00020\u00042\u0012\u0010\u000f\u001a\u000e\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00020\u00110\u0010¢\u0006\u0002\u0010\u0012R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082\u0004¢\u0006\u0002\n\u0000R\u001e\u0010\u0007\u001a\u0012\u0012\u0004\u0012\u00028\u00000\bj\b\u0012\u0004\u0012\u00028\u0000`\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u0012\u0010\n\u001a\u0004\u0018\u00018\u0000X\u0082\u000e¢\u0006\u0004\n\u0002\u0010\u000b¨\u0006\u0013"}, d2 = {"Lcom/discord/misc/utilities/queue/WorkerQueue;", "T", "", "popFromEnd", "", "<init>", "(Z)V", "nextWorkers", "Ljava/util/LinkedHashSet;", "Lkotlin/collections/LinkedHashSet;", "currWorker", "Ljava/lang/Object;", "updateWorker", "worker", AppStateModule.APP_STATE_ACTIVE, "onWorkerActive", "Lkotlin/Function1;", "", "(Ljava/lang/Object;ZLkotlin/jvm/functions/Function1;)Z", "misc_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class WorkerQueue<T> {
    private T currWorker;
    @NotNull
    private final LinkedHashSet<T> nextWorkers;
    private final boolean popFromEnd;

    public WorkerQueue() {
        this(false, 1, null);
    }

    public final boolean updateWorker(T t10, boolean z10, @NotNull Function1<? super T, Unit> onWorkerActive) {
        T t11;
        Intrinsics.checkNotNullParameter(onWorkerActive, "onWorkerActive");
        if (z10) {
            T t12 = this.currWorker;
            if (t12 != null && !Intrinsics.areEqual(t12, t10)) {
                this.nextWorkers.add(t10);
            } else {
                this.currWorker = t10;
            }
        } else if (Intrinsics.areEqual(this.currWorker, t10)) {
            if (this.popFromEnd) {
                t11 = (T) CollectionsKt.A0(this.nextWorkers);
            } else {
                t11 = (T) CollectionsKt.p0(this.nextWorkers);
            }
            this.currWorker = t11;
            if (t11 != null) {
                onWorkerActive.invoke(t11);
                this.nextWorkers.remove(t11);
            }
        } else {
            this.nextWorkers.remove(t10);
        }
        return Intrinsics.areEqual(this.currWorker, t10);
    }

    public WorkerQueue(boolean z10) {
        this.popFromEnd = z10;
        this.nextWorkers = new LinkedHashSet<>();
    }

    public /* synthetic */ WorkerQueue(boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? true : z10);
    }
}
