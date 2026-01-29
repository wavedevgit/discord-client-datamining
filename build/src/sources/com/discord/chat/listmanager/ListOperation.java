package com.discord.chat.listmanager;

import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.IntRange;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b6\u0018\u00002\u00020\u0001:\u0006\u0004\u0005\u0006\u0007\b\tB\t\b\u0004¢\u0006\u0004\b\u0002\u0010\u0003\u0082\u0001\u0006\n\u000b\f\r\u000e\u000f¨\u0006\u0010"}, d2 = {"Lcom/discord/chat/listmanager/ListOperation;", "", "<init>", "()V", "Insert", "Remove", "Change", "InsertRange", "RemoveRange", "ChangeRange", "Lcom/discord/chat/listmanager/ListOperation$Change;", "Lcom/discord/chat/listmanager/ListOperation$ChangeRange;", "Lcom/discord/chat/listmanager/ListOperation$Insert;", "Lcom/discord/chat/listmanager/ListOperation$InsertRange;", "Lcom/discord/chat/listmanager/ListOperation$Remove;", "Lcom/discord/chat/listmanager/ListOperation$RemoveRange;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class ListOperation {

    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\t\u0010\b\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\t\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\rHÖ\u0003J\t\u0010\u000e\u001a\u00020\u0003HÖ\u0001J\t\u0010\u000f\u001a\u00020\u0010HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0011"}, d2 = {"Lcom/discord/chat/listmanager/ListOperation$Change;", "Lcom/discord/chat/listmanager/ListOperation;", "index", "", "<init>", "(I)V", "getIndex", "()I", "component1", "copy", "equals", "", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Change extends ListOperation {
        private final int index;

        public Change(int i10) {
            super(null);
            this.index = i10;
        }

        public static /* synthetic */ Change copy$default(Change change, int i10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                i10 = change.index;
            }
            return change.copy(i10);
        }

        public final int component1() {
            return this.index;
        }

        @NotNull
        public final Change copy(int i10) {
            return new Change(i10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof Change) && this.index == ((Change) obj).index;
        }

        public final int getIndex() {
            return this.index;
        }

        public int hashCode() {
            return Integer.hashCode(this.index);
        }

        @NotNull
        public String toString() {
            int i10 = this.index;
            return "Change(index=" + i10 + ")";
        }
    }

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\t\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\u0011\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0012\u001a\u00020\u00132\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015HÖ\u0003J\t\u0010\u0016\u001a\u00020\tHÖ\u0001J\t\u0010\u0017\u001a\u00020\u0018HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\f\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000bR\u0011\u0010\u000e\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000b¨\u0006\u0019"}, d2 = {"Lcom/discord/chat/listmanager/ListOperation$ChangeRange;", "Lcom/discord/chat/listmanager/ListOperation;", "range", "Lkotlin/ranges/IntRange;", "<init>", "(Lkotlin/ranges/IntRange;)V", "getRange", "()Lkotlin/ranges/IntRange;", "first", "", "getFirst", "()I", "last", "getLast", "count", "getCount", "component1", "copy", "equals", "", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class ChangeRange extends ListOperation {
        private final int count;
        private final int first;
        private final int last;
        @NotNull
        private final IntRange range;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public ChangeRange(@NotNull IntRange range) {
            super(null);
            Intrinsics.checkNotNullParameter(range, "range");
            this.range = range;
            this.first = range.d();
            this.last = range.e();
            this.count = (range.e() - range.d()) + 1;
        }

        public static /* synthetic */ ChangeRange copy$default(ChangeRange changeRange, IntRange intRange, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                intRange = changeRange.range;
            }
            return changeRange.copy(intRange);
        }

        @NotNull
        public final IntRange component1() {
            return this.range;
        }

        @NotNull
        public final ChangeRange copy(@NotNull IntRange range) {
            Intrinsics.checkNotNullParameter(range, "range");
            return new ChangeRange(range);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof ChangeRange) && Intrinsics.areEqual(this.range, ((ChangeRange) obj).range);
        }

        public final int getCount() {
            return this.count;
        }

        public final int getFirst() {
            return this.first;
        }

        public final int getLast() {
            return this.last;
        }

        @NotNull
        public final IntRange getRange() {
            return this.range;
        }

        public int hashCode() {
            return this.range.hashCode();
        }

        @NotNull
        public String toString() {
            IntRange intRange = this.range;
            return "ChangeRange(range=" + intRange + ")";
        }
    }

    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\t\u0010\b\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\t\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\rHÖ\u0003J\t\u0010\u000e\u001a\u00020\u0003HÖ\u0001J\t\u0010\u000f\u001a\u00020\u0010HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0011"}, d2 = {"Lcom/discord/chat/listmanager/ListOperation$Insert;", "Lcom/discord/chat/listmanager/ListOperation;", "index", "", "<init>", "(I)V", "getIndex", "()I", "component1", "copy", "equals", "", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Insert extends ListOperation {
        private final int index;

        public Insert(int i10) {
            super(null);
            this.index = i10;
        }

        public static /* synthetic */ Insert copy$default(Insert insert, int i10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                i10 = insert.index;
            }
            return insert.copy(i10);
        }

        public final int component1() {
            return this.index;
        }

        @NotNull
        public final Insert copy(int i10) {
            return new Insert(i10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof Insert) && this.index == ((Insert) obj).index;
        }

        public final int getIndex() {
            return this.index;
        }

        public int hashCode() {
            return Integer.hashCode(this.index);
        }

        @NotNull
        public String toString() {
            int i10 = this.index;
            return "Insert(index=" + i10 + ")";
        }
    }

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\t\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\u0011\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0012\u001a\u00020\u00132\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015HÖ\u0003J\t\u0010\u0016\u001a\u00020\tHÖ\u0001J\t\u0010\u0017\u001a\u00020\u0018HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\f\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000bR\u0011\u0010\u000e\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000b¨\u0006\u0019"}, d2 = {"Lcom/discord/chat/listmanager/ListOperation$InsertRange;", "Lcom/discord/chat/listmanager/ListOperation;", "range", "Lkotlin/ranges/IntRange;", "<init>", "(Lkotlin/ranges/IntRange;)V", "getRange", "()Lkotlin/ranges/IntRange;", "first", "", "getFirst", "()I", "last", "getLast", "count", "getCount", "component1", "copy", "equals", "", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class InsertRange extends ListOperation {
        private final int count;
        private final int first;
        private final int last;
        @NotNull
        private final IntRange range;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public InsertRange(@NotNull IntRange range) {
            super(null);
            Intrinsics.checkNotNullParameter(range, "range");
            this.range = range;
            this.first = range.d();
            this.last = range.e();
            this.count = (range.e() - range.d()) + 1;
        }

        public static /* synthetic */ InsertRange copy$default(InsertRange insertRange, IntRange intRange, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                intRange = insertRange.range;
            }
            return insertRange.copy(intRange);
        }

        @NotNull
        public final IntRange component1() {
            return this.range;
        }

        @NotNull
        public final InsertRange copy(@NotNull IntRange range) {
            Intrinsics.checkNotNullParameter(range, "range");
            return new InsertRange(range);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof InsertRange) && Intrinsics.areEqual(this.range, ((InsertRange) obj).range);
        }

        public final int getCount() {
            return this.count;
        }

        public final int getFirst() {
            return this.first;
        }

        public final int getLast() {
            return this.last;
        }

        @NotNull
        public final IntRange getRange() {
            return this.range;
        }

        public int hashCode() {
            return this.range.hashCode();
        }

        @NotNull
        public String toString() {
            IntRange intRange = this.range;
            return "InsertRange(range=" + intRange + ")";
        }
    }

    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\t\u0010\b\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\t\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\rHÖ\u0003J\t\u0010\u000e\u001a\u00020\u0003HÖ\u0001J\t\u0010\u000f\u001a\u00020\u0010HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0011"}, d2 = {"Lcom/discord/chat/listmanager/ListOperation$Remove;", "Lcom/discord/chat/listmanager/ListOperation;", "index", "", "<init>", "(I)V", "getIndex", "()I", "component1", "copy", "equals", "", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Remove extends ListOperation {
        private final int index;

        public Remove(int i10) {
            super(null);
            this.index = i10;
        }

        public static /* synthetic */ Remove copy$default(Remove remove, int i10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                i10 = remove.index;
            }
            return remove.copy(i10);
        }

        public final int component1() {
            return this.index;
        }

        @NotNull
        public final Remove copy(int i10) {
            return new Remove(i10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof Remove) && this.index == ((Remove) obj).index;
        }

        public final int getIndex() {
            return this.index;
        }

        public int hashCode() {
            return Integer.hashCode(this.index);
        }

        @NotNull
        public String toString() {
            int i10 = this.index;
            return "Remove(index=" + i10 + ")";
        }
    }

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\t\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\u0011\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0012\u001a\u00020\u00132\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015HÖ\u0003J\t\u0010\u0016\u001a\u00020\tHÖ\u0001J\t\u0010\u0017\u001a\u00020\u0018HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\f\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000bR\u0011\u0010\u000e\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000b¨\u0006\u0019"}, d2 = {"Lcom/discord/chat/listmanager/ListOperation$RemoveRange;", "Lcom/discord/chat/listmanager/ListOperation;", "range", "Lkotlin/ranges/IntRange;", "<init>", "(Lkotlin/ranges/IntRange;)V", "getRange", "()Lkotlin/ranges/IntRange;", "first", "", "getFirst", "()I", "last", "getLast", "count", "getCount", "component1", "copy", "equals", "", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class RemoveRange extends ListOperation {
        private final int count;
        private final int first;
        private final int last;
        @NotNull
        private final IntRange range;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public RemoveRange(@NotNull IntRange range) {
            super(null);
            Intrinsics.checkNotNullParameter(range, "range");
            this.range = range;
            this.first = range.d();
            this.last = range.e();
            this.count = (range.e() - range.d()) + 1;
        }

        public static /* synthetic */ RemoveRange copy$default(RemoveRange removeRange, IntRange intRange, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                intRange = removeRange.range;
            }
            return removeRange.copy(intRange);
        }

        @NotNull
        public final IntRange component1() {
            return this.range;
        }

        @NotNull
        public final RemoveRange copy(@NotNull IntRange range) {
            Intrinsics.checkNotNullParameter(range, "range");
            return new RemoveRange(range);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof RemoveRange) && Intrinsics.areEqual(this.range, ((RemoveRange) obj).range);
        }

        public final int getCount() {
            return this.count;
        }

        public final int getFirst() {
            return this.first;
        }

        public final int getLast() {
            return this.last;
        }

        @NotNull
        public final IntRange getRange() {
            return this.range;
        }

        public int hashCode() {
            return this.range.hashCode();
        }

        @NotNull
        public String toString() {
            IntRange intRange = this.range;
            return "RemoveRange(range=" + intRange + ")";
        }
    }

    public /* synthetic */ ListOperation(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private ListOperation() {
    }
}
