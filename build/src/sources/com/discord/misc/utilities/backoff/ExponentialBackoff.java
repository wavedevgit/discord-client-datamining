package com.discord.misc.utilities.backoff;

import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import js.i;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\u0018\u00002\u00020\u0001B-\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0005\u0012\b\b\u0002\u0010\u0007\u001a\u00020\b¢\u0006\u0004\b\t\u0010\nJ)\u0010\u000f\u001a\u00020\u00102\u001c\u0010\u0011\u001a\u0018\b\u0001\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00100\u0013\u0012\u0006\u0012\u0004\u0018\u00010\u00010\u0012¢\u0006\u0002\u0010\u0014J\u0006\u0010\u0015\u001a\u00020\u0010J\u0006\u0010\u0016\u001a\u00020\u0010J\b\u0010\u0017\u001a\u00020\u0010H\u0002J\b\u0010\u0018\u001a\u00020\u0010H\u0002JV\u0010\u0019\u001a\u0002H\u001a\"\u0004\b\u0000\u0010\u001a2\u001c\u0010\u001b\u001a\u0018\b\u0001\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u001a0\u0013\u0012\u0006\u0012\u0004\u0018\u00010\u00010\u00122\"\u0010\u001c\u001a\u001e\b\u0001\u0012\u0004\u0012\u0002H\u001a\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u001e0\u0013\u0012\u0006\u0012\u0004\u0018\u00010\u00010\u001dH\u0086@¢\u0006\u0002\u0010\u001fR\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\bX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\r\u001a\u0004\u0018\u00010\u000eX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006 "}, d2 = {"Lcom/discord/misc/utilities/backoff/ExponentialBackoff;", "", "scope", "Lkotlinx/coroutines/CoroutineScope;", "initialDelay", "", "maxDelay", "maxAttempts", "", "<init>", "(Lkotlinx/coroutines/CoroutineScope;JJI)V", "currentDelay", "currentAttempt", "job", "Lkotlinx/coroutines/Job;", "fail", "", "action", "Lkotlin/Function1;", "Lkotlin/coroutines/Continuation;", "(Lkotlin/jvm/functions/Function1;)V", "succeed", "cancel", "reset", "cancelCurrentJob", "performBackoff", "T", "networkRequest", "shouldRetry", "Lkotlin/Function2;", "", "(Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function2;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "misc_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ExponentialBackoff {
    private int currentAttempt;
    private long currentDelay;
    private final long initialDelay;
    private Job job;
    private final int maxAttempts;
    private final long maxDelay;
    @NotNull
    private final CoroutineScope scope;

    public ExponentialBackoff(@NotNull CoroutineScope scope, long j10, long j11, int i10) {
        Intrinsics.checkNotNullParameter(scope, "scope");
        this.scope = scope;
        this.initialDelay = j10;
        this.maxDelay = j11;
        this.maxAttempts = i10;
        this.currentAttempt = 1;
    }

    private final void cancelCurrentJob() {
        Job job = this.job;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
    }

    private final void reset() {
        cancelCurrentJob();
        this.currentDelay = 0L;
        this.currentAttempt = 1;
    }

    public final void cancel() {
        reset();
    }

    public final void fail(@NotNull Function1<? super Continuation<? super Unit>, ? extends Object> action) {
        long j10;
        Job d10;
        Intrinsics.checkNotNullParameter(action, "action");
        cancelCurrentJob();
        if (this.currentAttempt <= this.maxAttempts) {
            long j11 = this.currentDelay;
            if (j11 == 0) {
                j10 = d.e(this.initialDelay, 1L);
            } else {
                j10 = j11 * 2;
            }
            this.currentDelay = d.j(j10, this.maxDelay);
            this.currentAttempt++;
            d10 = i.d(this.scope, null, null, new ExponentialBackoff$fail$1(this, action, null), 3, null);
            this.job = d10;
            return;
        }
        throw new MaxAttemptsExceededException(null, 1, null);
    }

    /* JADX WARN: Code restructure failed: missing block: B:22:0x0079, code lost:
        if (r15 == r1) goto L33;
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x008a, code lost:
        if (r15 == r1) goto L33;
     */
    /* JADX WARN: Code restructure failed: missing block: B:41:0x00d1, code lost:
        if (r15 != r1) goto L13;
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0026  */
    /* JADX WARN: Removed duplicated region for block: B:21:0x006c  */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:41:0x00d1 -> B:15:0x0039). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final <T> java.lang.Object performBackoff(@org.jetbrains.annotations.NotNull kotlin.jvm.functions.Function1<? super kotlin.coroutines.Continuation<? super T>, ? extends java.lang.Object> r13, @org.jetbrains.annotations.NotNull kotlin.jvm.functions.Function2<? super T, ? super kotlin.coroutines.Continuation<? super java.lang.Boolean>, ? extends java.lang.Object> r14, @org.jetbrains.annotations.NotNull kotlin.coroutines.Continuation<? super T> r15) {
        /*
            Method dump skipped, instructions count: 219
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.misc.utilities.backoff.ExponentialBackoff.performBackoff(kotlin.jvm.functions.Function1, kotlin.jvm.functions.Function2, kotlin.coroutines.Continuation):java.lang.Object");
    }

    public final void succeed() {
        reset();
    }

    public /* synthetic */ ExponentialBackoff(CoroutineScope coroutineScope, long j10, long j11, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(coroutineScope, (i11 & 2) != 0 ? 1000L : j10, (i11 & 4) != 0 ? LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES : j11, (i11 & 8) != 0 ? 10 : i10);
    }
}
