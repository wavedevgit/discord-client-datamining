package com.discord.crash_reporting;

import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\bÆ\u0002\u0018\u00002\u00020\u0001:\u0005\u0006\u0007\b\t\nB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0006\u0010\u0004\u001a\u00020\u0005¨\u0006\u000b"}, d2 = {"Lcom/discord/crash_reporting/TelemetryRingTypes;", "", "<init>", "()V", "defaultBudget", "Lcom/discord/crash_reporting/TelemetryRingTypes$Budget;", "BudgetType", "Budget", "Channel", "LogEntry", "Snapshot", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TelemetryRingTypes {
    @NotNull
    public static final TelemetryRingTypes INSTANCE = new TelemetryRingTypes();

    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\f\u001a\u00020\u0003HÆ\u0003J\t\u0010\r\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u000e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0012\u001a\u00020\u0013HÖ\u0001J\t\u0010\u0014\u001a\u00020\u0015HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u0016"}, d2 = {"Lcom/discord/crash_reporting/TelemetryRingTypes$Budget;", "", "type", "Lcom/discord/crash_reporting/TelemetryRingTypes$BudgetType;", "limit", "", "<init>", "(Lcom/discord/crash_reporting/TelemetryRingTypes$BudgetType;J)V", "getType", "()Lcom/discord/crash_reporting/TelemetryRingTypes$BudgetType;", "getLimit", "()J", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Budget {
        private final long limit;
        @NotNull
        private final BudgetType type;

        public Budget(@NotNull BudgetType type, long j10) {
            Intrinsics.checkNotNullParameter(type, "type");
            this.type = type;
            this.limit = j10;
        }

        public static /* synthetic */ Budget copy$default(Budget budget, BudgetType budgetType, long j10, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                budgetType = budget.type;
            }
            if ((i10 & 2) != 0) {
                j10 = budget.limit;
            }
            return budget.copy(budgetType, j10);
        }

        @NotNull
        public final BudgetType component1() {
            return this.type;
        }

        public final long component2() {
            return this.limit;
        }

        @NotNull
        public final Budget copy(@NotNull BudgetType type, long j10) {
            Intrinsics.checkNotNullParameter(type, "type");
            return new Budget(type, j10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Budget) {
                Budget budget = (Budget) obj;
                return this.type == budget.type && this.limit == budget.limit;
            }
            return false;
        }

        public final long getLimit() {
            return this.limit;
        }

        @NotNull
        public final BudgetType getType() {
            return this.type;
        }

        public int hashCode() {
            return (this.type.hashCode() * 31) + Long.hashCode(this.limit);
        }

        @NotNull
        public String toString() {
            BudgetType budgetType = this.type;
            long j10 = this.limit;
            return "Budget(type=" + budgetType + ", limit=" + j10 + ")";
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0005\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0006"}, d2 = {"Lcom/discord/crash_reporting/TelemetryRingTypes$BudgetType;", "", "<init>", "(Ljava/lang/String;I)V", "BYTES", "ROWS", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BudgetType {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ BudgetType[] $VALUES;
        public static final BudgetType BYTES = new BudgetType("BYTES", 0);
        public static final BudgetType ROWS = new BudgetType("ROWS", 1);

        private static final /* synthetic */ BudgetType[] $values() {
            return new BudgetType[]{BYTES, ROWS};
        }

        static {
            BudgetType[] $values = $values();
            $VALUES = $values;
            $ENTRIES = pr.a.a($values);
        }

        private BudgetType(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static BudgetType valueOf(String str) {
            return (BudgetType) Enum.valueOf(BudgetType.class, str);
        }

        public static BudgetType[] values() {
            return (BudgetType[]) $VALUES.clone();
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\b\n\u0002\b\b\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\u0011\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\n¨\u0006\u000b"}, d2 = {"Lcom/discord/crash_reporting/TelemetryRingTypes$Channel;", "", "bit", "", "<init>", "(Ljava/lang/String;II)V", "getBit", "()I", "SENTRY", "NORMAL", "ZOOMED", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Channel {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ Channel[] $VALUES;
        private final int bit;
        public static final Channel SENTRY = new Channel("SENTRY", 0, 1);
        public static final Channel NORMAL = new Channel("NORMAL", 1, 2);
        public static final Channel ZOOMED = new Channel("ZOOMED", 2, 4);

        private static final /* synthetic */ Channel[] $values() {
            return new Channel[]{SENTRY, NORMAL, ZOOMED};
        }

        static {
            Channel[] $values = $values();
            $VALUES = $values;
            $ENTRIES = pr.a.a($values);
        }

        private Channel(String str, int i10, int i11) {
            this.bit = i11;
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static Channel valueOf(String str) {
            return (Channel) Enum.valueOf(Channel.class, str);
        }

        public static Channel[] values() {
            return (Channel[]) $VALUES.clone();
        }

        public final int getBit() {
            return this.bit;
        }
    }

    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0011\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B-\u0012\f\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\b\u001a\u00020\t¢\u0006\u0004\b\n\u0010\u000bJ\u000f\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0006HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0006HÆ\u0003J\t\u0010\u0016\u001a\u00020\tHÆ\u0003J7\u0010\u0017\u001a\u00020\u00002\u000e\b\u0002\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\u00062\b\b\u0002\u0010\b\u001a\u00020\tHÆ\u0001J\u0013\u0010\u0018\u001a\u00020\t2\b\u0010\u0019\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001a\u001a\u00020\u001bHÖ\u0001J\t\u0010\u001c\u001a\u00020\u001dHÖ\u0001R\u0017\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0007\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012¨\u0006\u001e"}, d2 = {"Lcom/discord/crash_reporting/TelemetryRingTypes$Snapshot;", "", "entries", "", "Lcom/discord/crash_reporting/TelemetryRingTypes$LogEntry;", "nextBeforeOffset", "", "maxReturnedEndOffset", "hasMore", "", "<init>", "(Ljava/util/List;JJZ)V", "getEntries", "()Ljava/util/List;", "getNextBeforeOffset", "()J", "getMaxReturnedEndOffset", "getHasMore", "()Z", "component1", "component2", "component3", "component4", "copy", "equals", "other", "hashCode", "", "toString", "", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Snapshot {
        @NotNull
        private final List<LogEntry> entries;
        private final boolean hasMore;
        private final long maxReturnedEndOffset;
        private final long nextBeforeOffset;

        public Snapshot(@NotNull List<LogEntry> entries, long j10, long j11, boolean z10) {
            Intrinsics.checkNotNullParameter(entries, "entries");
            this.entries = entries;
            this.nextBeforeOffset = j10;
            this.maxReturnedEndOffset = j11;
            this.hasMore = z10;
        }

        public static /* synthetic */ Snapshot copy$default(Snapshot snapshot, List list, long j10, long j11, boolean z10, int i10, Object obj) {
            List<LogEntry> list2 = list;
            if ((i10 & 1) != 0) {
                list2 = snapshot.entries;
            }
            if ((i10 & 2) != 0) {
                j10 = snapshot.nextBeforeOffset;
            }
            if ((i10 & 4) != 0) {
                j11 = snapshot.maxReturnedEndOffset;
            }
            if ((i10 & 8) != 0) {
                z10 = snapshot.hasMore;
            }
            boolean z11 = z10;
            return snapshot.copy(list2, j10, j11, z11);
        }

        @NotNull
        public final List<LogEntry> component1() {
            return this.entries;
        }

        public final long component2() {
            return this.nextBeforeOffset;
        }

        public final long component3() {
            return this.maxReturnedEndOffset;
        }

        public final boolean component4() {
            return this.hasMore;
        }

        @NotNull
        public final Snapshot copy(@NotNull List<LogEntry> entries, long j10, long j11, boolean z10) {
            Intrinsics.checkNotNullParameter(entries, "entries");
            return new Snapshot(entries, j10, j11, z10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Snapshot) {
                Snapshot snapshot = (Snapshot) obj;
                return Intrinsics.areEqual(this.entries, snapshot.entries) && this.nextBeforeOffset == snapshot.nextBeforeOffset && this.maxReturnedEndOffset == snapshot.maxReturnedEndOffset && this.hasMore == snapshot.hasMore;
            }
            return false;
        }

        @NotNull
        public final List<LogEntry> getEntries() {
            return this.entries;
        }

        public final boolean getHasMore() {
            return this.hasMore;
        }

        public final long getMaxReturnedEndOffset() {
            return this.maxReturnedEndOffset;
        }

        public final long getNextBeforeOffset() {
            return this.nextBeforeOffset;
        }

        public int hashCode() {
            return (((((this.entries.hashCode() * 31) + Long.hashCode(this.nextBeforeOffset)) * 31) + Long.hashCode(this.maxReturnedEndOffset)) * 31) + Boolean.hashCode(this.hasMore);
        }

        @NotNull
        public String toString() {
            List<LogEntry> list = this.entries;
            long j10 = this.nextBeforeOffset;
            long j11 = this.maxReturnedEndOffset;
            boolean z10 = this.hasMore;
            return "Snapshot(entries=" + list + ", nextBeforeOffset=" + j10 + ", maxReturnedEndOffset=" + j11 + ", hasMore=" + z10 + ")";
        }
    }

    private TelemetryRingTypes() {
    }

    @NotNull
    public final Budget defaultBudget() {
        return new Budget(BudgetType.ROWS, 10000L);
    }

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0010$\n\u0000\n\u0002\u0010\b\n\u0002\b\u0012\n\u0002\u0010\u000b\n\u0002\b\u0004\b\u0086\b\u0018\u00002\u00020\u0001BG\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\u0018\b\u0002\u0010\u0007\u001a\u0012\u0012\u0004\u0012\u00020\u0003\u0012\u0006\u0012\u0004\u0018\u00010\u0001\u0018\u00010\b\u0012\b\b\u0002\u0010\t\u001a\u00020\n¢\u0006\u0004\b\u000b\u0010\fJ\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0017\u001a\u00020\u0005HÆ\u0003J\u000b\u0010\u0018\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0019\u0010\u0019\u001a\u0012\u0012\u0004\u0012\u00020\u0003\u0012\u0006\u0012\u0004\u0018\u00010\u0001\u0018\u00010\bHÆ\u0003J\t\u0010\u001a\u001a\u00020\nHÆ\u0003JM\u0010\u001b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00032\u0018\b\u0002\u0010\u0007\u001a\u0012\u0012\u0004\u0012\u00020\u0003\u0012\u0006\u0012\u0004\u0018\u00010\u0001\u0018\u00010\b2\b\b\u0002\u0010\t\u001a\u00020\nHÆ\u0001J\u0013\u0010\u001c\u001a\u00020\u001d2\b\u0010\u001e\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001f\u001a\u00020\nHÖ\u0001J\t\u0010 \u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000eR!\u0010\u0007\u001a\u0012\u0012\u0004\u0012\u00020\u0003\u0012\u0006\u0012\u0004\u0018\u00010\u0001\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015¨\u0006!"}, d2 = {"Lcom/discord/crash_reporting/TelemetryRingTypes$LogEntry;", "", "key", "", "timestampMs", "", "message", "data", "", "channelMask", "", "<init>", "(Ljava/lang/String;JLjava/lang/String;Ljava/util/Map;I)V", "getKey", "()Ljava/lang/String;", "getTimestampMs", "()J", "getMessage", "getData", "()Ljava/util/Map;", "getChannelMask", "()I", "component1", "component2", "component3", "component4", "component5", "copy", "equals", "", "other", "hashCode", "toString", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class LogEntry {
        private final int channelMask;
        private final Map<String, Object> data;
        @NotNull
        private final String key;
        private final String message;
        private final long timestampMs;

        public LogEntry(@NotNull String key, long j10, String str, Map<String, ? extends Object> map, int i10) {
            Intrinsics.checkNotNullParameter(key, "key");
            this.key = key;
            this.timestampMs = j10;
            this.message = str;
            this.data = map;
            this.channelMask = i10;
        }

        public static /* synthetic */ LogEntry copy$default(LogEntry logEntry, String str, long j10, String str2, Map map, int i10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                str = logEntry.key;
            }
            if ((i11 & 2) != 0) {
                j10 = logEntry.timestampMs;
            }
            if ((i11 & 4) != 0) {
                str2 = logEntry.message;
            }
            Map<String, Object> map2 = map;
            if ((i11 & 8) != 0) {
                map2 = logEntry.data;
            }
            if ((i11 & 16) != 0) {
                i10 = logEntry.channelMask;
            }
            int i12 = i10;
            String str3 = str2;
            return logEntry.copy(str, j10, str3, map2, i12);
        }

        @NotNull
        public final String component1() {
            return this.key;
        }

        public final long component2() {
            return this.timestampMs;
        }

        public final String component3() {
            return this.message;
        }

        public final Map<String, Object> component4() {
            return this.data;
        }

        public final int component5() {
            return this.channelMask;
        }

        @NotNull
        public final LogEntry copy(@NotNull String key, long j10, String str, Map<String, ? extends Object> map, int i10) {
            Intrinsics.checkNotNullParameter(key, "key");
            return new LogEntry(key, j10, str, map, i10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof LogEntry) {
                LogEntry logEntry = (LogEntry) obj;
                return Intrinsics.areEqual(this.key, logEntry.key) && this.timestampMs == logEntry.timestampMs && Intrinsics.areEqual(this.message, logEntry.message) && Intrinsics.areEqual(this.data, logEntry.data) && this.channelMask == logEntry.channelMask;
            }
            return false;
        }

        public final int getChannelMask() {
            return this.channelMask;
        }

        public final Map<String, Object> getData() {
            return this.data;
        }

        @NotNull
        public final String getKey() {
            return this.key;
        }

        public final String getMessage() {
            return this.message;
        }

        public final long getTimestampMs() {
            return this.timestampMs;
        }

        public int hashCode() {
            int hashCode = ((this.key.hashCode() * 31) + Long.hashCode(this.timestampMs)) * 31;
            String str = this.message;
            int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
            Map<String, Object> map = this.data;
            return ((hashCode2 + (map != null ? map.hashCode() : 0)) * 31) + Integer.hashCode(this.channelMask);
        }

        @NotNull
        public String toString() {
            String str = this.key;
            long j10 = this.timestampMs;
            String str2 = this.message;
            Map<String, Object> map = this.data;
            int i10 = this.channelMask;
            return "LogEntry(key=" + str + ", timestampMs=" + j10 + ", message=" + str2 + ", data=" + map + ", channelMask=" + i10 + ")";
        }

        public /* synthetic */ LogEntry(String str, long j10, String str2, Map map, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, j10, (i11 & 4) != 0 ? null : str2, (i11 & 8) != 0 ? null : map, (i11 & 16) != 0 ? 0 : i10);
        }
    }
}
