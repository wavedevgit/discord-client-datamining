package com.discord.crash_reporting.system_logs;

import android.app.ActivityManager;
import android.app.ApplicationExitInfo;
import android.content.Context;
import android.os.Build;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import or.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010$\n\u0002\u0010\b\n\u0002\u0010\u000e\n\u0002\b\u0002\bÀ\u0002\u0018\u00002\u00020\u0001:\u0001\fB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0006\u0010\u0006\u001a\u00020\u0007R\u001a\u0010\b\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000b0\tX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\r"}, d2 = {"Lcom/discord/crash_reporting/system_logs/HistoricalProcessExitReason;", "", "<init>", "()V", "lastReason", "Lcom/discord/crash_reporting/system_logs/HistoricalProcessExitReason$Reason;", "context", "Landroid/content/Context;", "exitReasonLookup", "", "", "", "Reason", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class HistoricalProcessExitReason {
    @NotNull
    public static final HistoricalProcessExitReason INSTANCE = new HistoricalProcessExitReason();
    @NotNull
    private static final Map<Integer, String> exitReasonLookup;

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B\u0019\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\t\u0010\n\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u000b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u001f\u0010\f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\r\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0010\u001a\u00020\u0011HÖ\u0001J\t\u0010\u0012\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u0013"}, d2 = {"Lcom/discord/crash_reporting/system_logs/HistoricalProcessExitReason$Reason;", "", "reason", "", "description", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "getReason", "()Ljava/lang/String;", "getDescription", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Reason {
        private final String description;
        @NotNull
        private final String reason;

        public Reason(@NotNull String reason, String str) {
            Intrinsics.checkNotNullParameter(reason, "reason");
            this.reason = reason;
            this.description = str;
        }

        public static /* synthetic */ Reason copy$default(Reason reason, String str, String str2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = reason.reason;
            }
            if ((i10 & 2) != 0) {
                str2 = reason.description;
            }
            return reason.copy(str, str2);
        }

        @NotNull
        public final String component1() {
            return this.reason;
        }

        public final String component2() {
            return this.description;
        }

        @NotNull
        public final Reason copy(@NotNull String reason, String str) {
            Intrinsics.checkNotNullParameter(reason, "reason");
            return new Reason(reason, str);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Reason) {
                Reason reason = (Reason) obj;
                return Intrinsics.areEqual(this.reason, reason.reason) && Intrinsics.areEqual(this.description, reason.description);
            }
            return false;
        }

        public final String getDescription() {
            return this.description;
        }

        @NotNull
        public final String getReason() {
            return this.reason;
        }

        public int hashCode() {
            int hashCode = this.reason.hashCode() * 31;
            String str = this.description;
            return hashCode + (str == null ? 0 : str.hashCode());
        }

        @NotNull
        public String toString() {
            String str = this.reason;
            String str2 = this.description;
            return "Reason(reason=" + str + ", description=" + str2 + ")";
        }
    }

    static {
        Map<Integer, String> m10;
        if (Build.VERSION.SDK_INT < 30) {
            m10 = o0.i();
        } else {
            m10 = o0.m(v.a(6, "ANR"), v.a(4, "CRASH"), v.a(5, "CRASH_NATIVE"), v.a(12, "DEPENDENCY_DIED"), v.a(9, "EXCESSIVE_RESOURCE_USAGE"), v.a(1, "EXIT_SELF"), v.a(7, "INITIALIZATION_FAILURE"), v.a(3, "LOW_MEMORY"), v.a(13, "OTHER"), v.a(8, "PERMISSION_CHANGE"), v.a(2, "SIGNALED"), v.a(0, "UNKNOWN"), v.a(10, "USER_REQUESTED"), v.a(11, "USER_STOPPED"));
        }
        exitReasonLookup = m10;
    }

    private HistoricalProcessExitReason() {
    }

    public final Reason lastReason(@NotNull Context context) {
        ActivityManager activityManager;
        Intrinsics.checkNotNullParameter(context, "context");
        if (Build.VERSION.SDK_INT < 30) {
            return null;
        }
        Object systemService = context.getSystemService("activity");
        if (systemService instanceof ActivityManager) {
            activityManager = (ActivityManager) systemService;
        } else {
            activityManager = null;
        }
        if (activityManager == null) {
            return null;
        }
        List<ApplicationExitInfo> historicalProcessExitReasons = activityManager.getHistoricalProcessExitReasons(null, 0, 1);
        Intrinsics.checkNotNullExpressionValue(historicalProcessExitReasons, "getHistoricalProcessExitReasons(...)");
        ApplicationExitInfo a10 = q4.e.a(CollectionsKt.firstOrNull(historicalProcessExitReasons));
        if (a10 == null) {
            return null;
        }
        String str = exitReasonLookup.get(Integer.valueOf(a10.getReason()));
        if (str == null) {
            str = "Unknown " + a10.getReason();
        }
        return new Reason(str, a10.getDescription());
    }
}
