package com.facebook.react.jstasks;

import com.facebook.react.bridge.WritableMap;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000e\u0018\u00002\u00020\u0001B9\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007\u0012\b\b\u0002\u0010\b\u001a\u00020\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\f\u0010\rB\u0011\b\u0016\u0012\u0006\u0010\u000e\u001a\u00020\u0000¢\u0006\u0004\b\f\u0010\u000fR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\u0016R\u0013\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018¨\u0006\u0019"}, d2 = {"Lcom/facebook/react/jstasks/HeadlessJsTaskConfig;", "", "taskKey", "", "data", "Lcom/facebook/react/bridge/WritableMap;", "timeout", "", "isAllowedInForeground", "", "retryPolicy", "Lcom/facebook/react/jstasks/HeadlessJsTaskRetryPolicy;", "<init>", "(Ljava/lang/String;Lcom/facebook/react/bridge/WritableMap;JZLcom/facebook/react/jstasks/HeadlessJsTaskRetryPolicy;)V", "source", "(Lcom/facebook/react/jstasks/HeadlessJsTaskConfig;)V", "getTaskKey", "()Ljava/lang/String;", "getData", "()Lcom/facebook/react/bridge/WritableMap;", "getTimeout", "()J", "()Z", "getRetryPolicy", "()Lcom/facebook/react/jstasks/HeadlessJsTaskRetryPolicy;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class HeadlessJsTaskConfig {
    @NotNull
    private final WritableMap data;
    private final boolean isAllowedInForeground;
    private final HeadlessJsTaskRetryPolicy retryPolicy;
    @NotNull
    private final String taskKey;
    private final long timeout;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public HeadlessJsTaskConfig(@NotNull String taskKey, @NotNull WritableMap data) {
        this(taskKey, data, 0L, false, null, 28, null);
        Intrinsics.checkNotNullParameter(taskKey, "taskKey");
        Intrinsics.checkNotNullParameter(data, "data");
    }

    @NotNull
    public final WritableMap getData() {
        return this.data;
    }

    public final HeadlessJsTaskRetryPolicy getRetryPolicy() {
        return this.retryPolicy;
    }

    @NotNull
    public final String getTaskKey() {
        return this.taskKey;
    }

    public final long getTimeout() {
        return this.timeout;
    }

    public final boolean isAllowedInForeground() {
        return this.isAllowedInForeground;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public HeadlessJsTaskConfig(@NotNull String taskKey, @NotNull WritableMap data, long j10) {
        this(taskKey, data, j10, false, null, 24, null);
        Intrinsics.checkNotNullParameter(taskKey, "taskKey");
        Intrinsics.checkNotNullParameter(data, "data");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public HeadlessJsTaskConfig(@NotNull String taskKey, @NotNull WritableMap data, long j10, boolean z10) {
        this(taskKey, data, j10, z10, null, 16, null);
        Intrinsics.checkNotNullParameter(taskKey, "taskKey");
        Intrinsics.checkNotNullParameter(data, "data");
    }

    public HeadlessJsTaskConfig(@NotNull String taskKey, @NotNull WritableMap data, long j10, boolean z10, HeadlessJsTaskRetryPolicy headlessJsTaskRetryPolicy) {
        Intrinsics.checkNotNullParameter(taskKey, "taskKey");
        Intrinsics.checkNotNullParameter(data, "data");
        this.taskKey = taskKey;
        this.data = data;
        this.timeout = j10;
        this.isAllowedInForeground = z10;
        this.retryPolicy = headlessJsTaskRetryPolicy;
    }

    public /* synthetic */ HeadlessJsTaskConfig(String str, WritableMap writableMap, long j10, boolean z10, HeadlessJsTaskRetryPolicy headlessJsTaskRetryPolicy, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, writableMap, (i10 & 4) != 0 ? 0L : j10, (i10 & 8) != 0 ? false : z10, (i10 & 16) != 0 ? NoRetryPolicy.INSTANCE : headlessJsTaskRetryPolicy);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public HeadlessJsTaskConfig(@org.jetbrains.annotations.NotNull com.facebook.react.jstasks.HeadlessJsTaskConfig r9) {
        /*
            r8 = this;
            java.lang.String r0 = "source"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r9, r0)
            java.lang.String r2 = r9.taskKey
            com.facebook.react.bridge.WritableMap r0 = r9.data
            com.facebook.react.bridge.WritableMap r3 = r0.copy()
            long r4 = r9.timeout
            boolean r6 = r9.isAllowedInForeground
            com.facebook.react.jstasks.HeadlessJsTaskRetryPolicy r9 = r9.retryPolicy
            if (r9 == 0) goto L1c
            com.facebook.react.jstasks.HeadlessJsTaskRetryPolicy r9 = r9.copy()
        L19:
            r1 = r8
            r7 = r9
            goto L1e
        L1c:
            r9 = 0
            goto L19
        L1e:
            r1.<init>(r2, r3, r4, r6, r7)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.jstasks.HeadlessJsTaskConfig.<init>(com.facebook.react.jstasks.HeadlessJsTaskConfig):void");
    }
}
