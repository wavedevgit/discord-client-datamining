package com.discord.recycler_view.scroll;

import kotlin.Metadata;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0005R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\b"}, d2 = {"Lcom/discord/recycler_view/scroll/RecyclerViewScrollLimiter;", "", "<init>", "()V", "MAX_FLING_VELOCITY", "", "getClampedVelocity", "velocity", "recycler_view_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class RecyclerViewScrollLimiter {
    @NotNull
    public static final RecyclerViewScrollLimiter INSTANCE = new RecyclerViewScrollLimiter();
    public static final int MAX_FLING_VELOCITY = 12500;

    private RecyclerViewScrollLimiter() {
    }

    public final int getClampedVelocity(int i10) {
        if (i10 < 0) {
            return Math.max(i10, -12500);
        }
        return Math.min(i10, (int) MAX_FLING_VELOCITY);
    }
}
