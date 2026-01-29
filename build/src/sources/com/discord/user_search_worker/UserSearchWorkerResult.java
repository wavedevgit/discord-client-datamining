package com.discord.user_search_worker;

import com.discord.notifications.renderer.NotificationRenderer;
import com.facebook.react.devsupport.StackTraceHelper;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0002\b\u000e\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0080\b\u0018\u00002\u00020\u0001B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0012\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0013\u001a\u00020\u0007HÆ\u0003J1\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001J\u0013\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0018\u001a\u00020\u0019HÖ\u0001J\t\u0010\u001a\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\u000bR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000bR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000f¨\u0006\u001b"}, d2 = {"Lcom/discord/user_search_worker/UserSearchWorkerResult;", "", StackTraceHelper.ID_KEY, "", NotificationRenderer.USERNAME, "comparator", "score", "", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;D)V", "getId", "()Ljava/lang/String;", "getUsername", "getComparator", "getScore", "()D", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "", "toString", "user_search_worker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class UserSearchWorkerResult {
    @NotNull
    private final String comparator;
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f10849id;
    private final double score;
    @NotNull
    private final String username;

    public UserSearchWorkerResult(@NotNull String id2, @NotNull String username, @NotNull String comparator, double d10) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(username, "username");
        Intrinsics.checkNotNullParameter(comparator, "comparator");
        this.f10849id = id2;
        this.username = username;
        this.comparator = comparator;
        this.score = d10;
    }

    public static /* synthetic */ UserSearchWorkerResult copy$default(UserSearchWorkerResult userSearchWorkerResult, String str, String str2, String str3, double d10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = userSearchWorkerResult.f10849id;
        }
        if ((i10 & 2) != 0) {
            str2 = userSearchWorkerResult.username;
        }
        if ((i10 & 4) != 0) {
            str3 = userSearchWorkerResult.comparator;
        }
        if ((i10 & 8) != 0) {
            d10 = userSearchWorkerResult.score;
        }
        String str4 = str3;
        return userSearchWorkerResult.copy(str, str2, str4, d10);
    }

    @NotNull
    public final String component1() {
        return this.f10849id;
    }

    @NotNull
    public final String component2() {
        return this.username;
    }

    @NotNull
    public final String component3() {
        return this.comparator;
    }

    public final double component4() {
        return this.score;
    }

    @NotNull
    public final UserSearchWorkerResult copy(@NotNull String id2, @NotNull String username, @NotNull String comparator, double d10) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(username, "username");
        Intrinsics.checkNotNullParameter(comparator, "comparator");
        return new UserSearchWorkerResult(id2, username, comparator, d10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof UserSearchWorkerResult) {
            UserSearchWorkerResult userSearchWorkerResult = (UserSearchWorkerResult) obj;
            return Intrinsics.areEqual(this.f10849id, userSearchWorkerResult.f10849id) && Intrinsics.areEqual(this.username, userSearchWorkerResult.username) && Intrinsics.areEqual(this.comparator, userSearchWorkerResult.comparator) && Double.compare(this.score, userSearchWorkerResult.score) == 0;
        }
        return false;
    }

    @NotNull
    public final String getComparator() {
        return this.comparator;
    }

    @NotNull
    public final String getId() {
        return this.f10849id;
    }

    public final double getScore() {
        return this.score;
    }

    @NotNull
    public final String getUsername() {
        return this.username;
    }

    public int hashCode() {
        return (((((this.f10849id.hashCode() * 31) + this.username.hashCode()) * 31) + this.comparator.hashCode()) * 31) + Double.hashCode(this.score);
    }

    @NotNull
    public String toString() {
        String str = this.f10849id;
        String str2 = this.username;
        String str3 = this.comparator;
        double d10 = this.score;
        return "UserSearchWorkerResult(id=" + str + ", username=" + str2 + ", comparator=" + str3 + ", score=" + d10 + ")";
    }
}
