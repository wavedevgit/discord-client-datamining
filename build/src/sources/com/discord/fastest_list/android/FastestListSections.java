package com.discord.fastest_list.android;

import com.facebook.react.uimanager.ViewProps;
import java.util.Iterator;
import java.util.List;
import jr.p;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.m0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\f\b\u0000\u0018\u0000 '2\u00020\u0001:\u0005#$%&'B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0006\u0010\u000e\u001a\u00020\u0007J\u0006\u0010\u000f\u001a\u00020\fJ\u0006\u0010\u0010\u001a\u00020\fJ\u000e\u0010\u0011\u001a\u00020\f2\u0006\u0010\u0012\u001a\u00020\fJ\u0016\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0012\u001a\u00020\f2\u0006\u0010\u0015\u001a\u00020\u0016J\u000e\u0010\u0017\u001a\u00020\f2\u0006\u0010\u0018\u001a\u00020\fJ\u001f\u0010\u0017\u001a\u0004\u0018\u00010\f2\u0006\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u001c¢\u0006\u0004\b\u001d\u0010\u001eJ\u0006\u0010\u001f\u001a\u00020\fJ\u000e\u0010 \u001a\u00020\n2\u0006\u0010\u0012\u001a\u00020\fJ\u000e\u0010!\u001a\u00020\f2\u0006\u0010\u0012\u001a\u00020\fJ\u000e\u0010\"\u001a\u00020\u00162\u0006\u0010\u0002\u001a\u00020\u0003R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\fX\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\r\u001a\b\u0012\u0004\u0012\u00020\f0\tX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006("}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections;", "", "sectionsVersioned", "Lcom/discord/fastest_list/android/FastestListSections$Versioned;", "<init>", "(Lcom/discord/fastest_list/android/FastestListSections$Versioned;)V", "sectionsId", "", "sectionEntries", "", "Lcom/discord/fastest_list/android/FastestListSections$Entry;", "sectionsCumulativeSize", "", "sectionOffsetAtPosition", "getId", "getItemCumulativeSize", "getItemCount", "getItemViewType", ViewProps.POSITION, "getItemAtPosition", "Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionItem;", "atEnd", "", "getItemPosition", "offset", "section", "Lcom/discord/fastest_list/android/FastestListSections$Section;", "item", "Lcom/discord/fastest_list/android/FastestListSections$Item;", "getItemPosition-jEcWkE0", "(II)Ljava/lang/Integer;", "getItemSizeAverage", "getItem", "getItemOffset", "setSectionsVersioned", "Section", "Item", "Entry", "Versioned", "Companion", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nFastestListSections.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FastestListSections.kt\ncom/discord/fastest_list/android/FastestListSections\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,236:1\n1#2:237\n360#3,7:238\n*S KotlinDebug\n*F\n+ 1 FastestListSections.kt\ncom/discord/fastest_list/android/FastestListSections\n*L\n65#1:238,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FastestListSections {
    @NotNull
    public static final Companion Companion = new Companion(null);
    public static final int VIEW_TYPE_ITEM = 0;
    public static final int VIEW_TYPE_LIST_FOOTER = 4;
    public static final int VIEW_TYPE_LIST_HEADER = 3;
    public static final int VIEW_TYPE_SECTION_FOOTER = 2;
    public static final int VIEW_TYPE_SECTION_HEADER = 1;
    @NotNull
    private List<? extends Entry> sectionEntries;
    @NotNull
    private List<Integer> sectionOffsetAtPosition;
    private int sectionsCumulativeSize;
    @NotNull
    private String sectionsId;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0005\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\n"}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections$Companion;", "", "<init>", "()V", "VIEW_TYPE_ITEM", "", "VIEW_TYPE_SECTION_HEADER", "VIEW_TYPE_SECTION_FOOTER", "VIEW_TYPE_LIST_HEADER", "VIEW_TYPE_LIST_FOOTER", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b6\u0018\u00002\u00020\u0001:\u0005\u000f\u0010\u0011\u0012\u0013B\t\b\u0004¢\u0006\u0004\b\u0002\u0010\u0003R\u0012\u0010\u0004\u001a\u00020\u0005X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0006\u0010\u0007R\u0012\u0010\b\u001a\u00020\tX¦\u0004¢\u0006\u0006\u001a\u0004\b\n\u0010\u000bR\u0012\u0010\f\u001a\u00020\rX¦\u0004¢\u0006\u0006\u001a\u0004\b\u000e\u0010\u000b\u0082\u0001\u0005\u0014\u0015\u0016\u0017\u0018¨\u0006\u0019"}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections$Entry;", "", "<init>", "()V", "key", "", "getKey", "()Ljava/lang/String;", "size", "", "getSize", "()I", "section", "Lcom/discord/fastest_list/android/FastestListSections$Section;", "getSection-sZRFyWU", "ListHeader", "ListFooter", "SectionFooter", "SectionHeader", "SectionItem", "Lcom/discord/fastest_list/android/FastestListSections$Entry$ListFooter;", "Lcom/discord/fastest_list/android/FastestListSections$Entry$ListHeader;", "Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionFooter;", "Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionHeader;", "Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionItem;", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class Entry {

        @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0010\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0004\b\u0086\b\u0018\u0000 \u001d2\u00020\u0001:\u0001\u001dB\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0011\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u0012\u0010\rJ\t\u0010\u0013\u001a\u00020\u0007HÆ\u0003J.\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001¢\u0006\u0004\b\u0015\u0010\u0016J\u0013\u0010\u0017\u001a\u00020\u00182\b\u0010\u0019\u001a\u0004\u0018\u00010\u001aHÖ\u0003J\t\u0010\u001b\u001a\u00020\u0007HÖ\u0001J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0016\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010\u000e\u001a\u0004\b\f\u0010\rR\u0014\u0010\u0006\u001a\u00020\u0007X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\r¨\u0006\u001e"}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections$Entry$ListFooter;", "Lcom/discord/fastest_list/android/FastestListSections$Entry;", "key", "", "section", "Lcom/discord/fastest_list/android/FastestListSections$Section;", "size", "", "<init>", "(Ljava/lang/String;IILkotlin/jvm/internal/DefaultConstructorMarker;)V", "getKey", "()Ljava/lang/String;", "getSection-sZRFyWU", "()I", "I", "getSize", "component1", "component2", "component2-sZRFyWU", "component3", "copy", "copy-X8oRnOs", "(Ljava/lang/String;II)Lcom/discord/fastest_list/android/FastestListSections$Entry$ListFooter;", "equals", "", "other", "", "hashCode", "toString", "Companion", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class ListFooter extends Entry {
            @NotNull
            public static final Companion Companion = new Companion(null);
            @NotNull
            private final String key;
            private final int section;
            private final int size;

            @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0016\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0005¨\u0006\b"}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections$Entry$ListFooter$Companion;", "", "<init>", "()V", "createKey", "", "listId", "customKey", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            @SourceDebugExtension({"SMAP\nFastestListSections.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FastestListSections.kt\ncom/discord/fastest_list/android/FastestListSections$Entry$ListFooter$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,236:1\n1#2:237\n*E\n"})
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
            public static final class Companion {
                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                @NotNull
                public final String createKey(@NotNull String listId, @NotNull String customKey) {
                    Intrinsics.checkNotNullParameter(listId, "listId");
                    Intrinsics.checkNotNullParameter(customKey, "customKey");
                    if (StringsKt.k0(customKey)) {
                        customKey = "lf";
                    }
                    return listId + "-" + ((Object) customKey);
                }

                private Companion() {
                }
            }

            public /* synthetic */ ListFooter(String str, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, i10, i11);
            }

            /* renamed from: copy-X8oRnOs$default  reason: not valid java name */
            public static /* synthetic */ ListFooter m880copyX8oRnOs$default(ListFooter listFooter, String str, int i10, int i11, int i12, Object obj) {
                if ((i12 & 1) != 0) {
                    str = listFooter.key;
                }
                if ((i12 & 2) != 0) {
                    i10 = listFooter.section;
                }
                if ((i12 & 4) != 0) {
                    i11 = listFooter.size;
                }
                return listFooter.m882copyX8oRnOs(str, i10, i11);
            }

            @NotNull
            public final String component1() {
                return this.key;
            }

            /* renamed from: component2-sZRFyWU  reason: not valid java name */
            public final int m881component2sZRFyWU() {
                return this.section;
            }

            public final int component3() {
                return this.size;
            }

            @NotNull
            /* renamed from: copy-X8oRnOs  reason: not valid java name */
            public final ListFooter m882copyX8oRnOs(@NotNull String key, int i10, int i11) {
                Intrinsics.checkNotNullParameter(key, "key");
                return new ListFooter(key, i10, i11, null);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof ListFooter) {
                    ListFooter listFooter = (ListFooter) obj;
                    return Intrinsics.areEqual(this.key, listFooter.key) && Section.m907equalsimpl0(this.section, listFooter.section) && this.size == listFooter.size;
                }
                return false;
            }

            @Override // com.discord.fastest_list.android.FastestListSections.Entry
            @NotNull
            public String getKey() {
                return this.key;
            }

            @Override // com.discord.fastest_list.android.FastestListSections.Entry
            /* renamed from: getSection-sZRFyWU */
            public int mo879getSectionsZRFyWU() {
                return this.section;
            }

            @Override // com.discord.fastest_list.android.FastestListSections.Entry
            public int getSize() {
                return this.size;
            }

            public int hashCode() {
                return (((this.key.hashCode() * 31) + Section.m908hashCodeimpl(this.section)) * 31) + Integer.hashCode(this.size);
            }

            @NotNull
            public String toString() {
                String str = this.key;
                String m909toStringimpl = Section.m909toStringimpl(this.section);
                int i10 = this.size;
                return "ListFooter(key=" + str + ", section=" + m909toStringimpl + ", size=" + i10 + ")";
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            private ListFooter(String key, int i10, int i11) {
                super(null);
                Intrinsics.checkNotNullParameter(key, "key");
                this.key = key;
                this.section = i10;
                this.size = i11;
            }
        }

        @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0010\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0004\b\u0086\b\u0018\u0000 \u001d2\u00020\u0001:\u0001\u001dB\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0011\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u0012\u0010\rJ\t\u0010\u0013\u001a\u00020\u0007HÆ\u0003J.\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001¢\u0006\u0004\b\u0015\u0010\u0016J\u0013\u0010\u0017\u001a\u00020\u00182\b\u0010\u0019\u001a\u0004\u0018\u00010\u001aHÖ\u0003J\t\u0010\u001b\u001a\u00020\u0007HÖ\u0001J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0016\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010\u000e\u001a\u0004\b\f\u0010\rR\u0014\u0010\u0006\u001a\u00020\u0007X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\r¨\u0006\u001e"}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections$Entry$ListHeader;", "Lcom/discord/fastest_list/android/FastestListSections$Entry;", "key", "", "section", "Lcom/discord/fastest_list/android/FastestListSections$Section;", "size", "", "<init>", "(Ljava/lang/String;IILkotlin/jvm/internal/DefaultConstructorMarker;)V", "getKey", "()Ljava/lang/String;", "getSection-sZRFyWU", "()I", "I", "getSize", "component1", "component2", "component2-sZRFyWU", "component3", "copy", "copy-X8oRnOs", "(Ljava/lang/String;II)Lcom/discord/fastest_list/android/FastestListSections$Entry$ListHeader;", "equals", "", "other", "", "hashCode", "toString", "Companion", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class ListHeader extends Entry {
            @NotNull
            public static final Companion Companion = new Companion(null);
            @NotNull
            private final String key;
            private final int section;
            private final int size;

            @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0016\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0005¨\u0006\b"}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections$Entry$ListHeader$Companion;", "", "<init>", "()V", "createKey", "", "listId", "customKey", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            @SourceDebugExtension({"SMAP\nFastestListSections.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FastestListSections.kt\ncom/discord/fastest_list/android/FastestListSections$Entry$ListHeader$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,236:1\n1#2:237\n*E\n"})
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
            public static final class Companion {
                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                @NotNull
                public final String createKey(@NotNull String listId, @NotNull String customKey) {
                    Intrinsics.checkNotNullParameter(listId, "listId");
                    Intrinsics.checkNotNullParameter(customKey, "customKey");
                    if (StringsKt.k0(customKey)) {
                        customKey = "lh";
                    }
                    return listId + "-" + ((Object) customKey);
                }

                private Companion() {
                }
            }

            public /* synthetic */ ListHeader(String str, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, i10, i11);
            }

            /* renamed from: copy-X8oRnOs$default  reason: not valid java name */
            public static /* synthetic */ ListHeader m883copyX8oRnOs$default(ListHeader listHeader, String str, int i10, int i11, int i12, Object obj) {
                if ((i12 & 1) != 0) {
                    str = listHeader.key;
                }
                if ((i12 & 2) != 0) {
                    i10 = listHeader.section;
                }
                if ((i12 & 4) != 0) {
                    i11 = listHeader.size;
                }
                return listHeader.m885copyX8oRnOs(str, i10, i11);
            }

            @NotNull
            public final String component1() {
                return this.key;
            }

            /* renamed from: component2-sZRFyWU  reason: not valid java name */
            public final int m884component2sZRFyWU() {
                return this.section;
            }

            public final int component3() {
                return this.size;
            }

            @NotNull
            /* renamed from: copy-X8oRnOs  reason: not valid java name */
            public final ListHeader m885copyX8oRnOs(@NotNull String key, int i10, int i11) {
                Intrinsics.checkNotNullParameter(key, "key");
                return new ListHeader(key, i10, i11, null);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof ListHeader) {
                    ListHeader listHeader = (ListHeader) obj;
                    return Intrinsics.areEqual(this.key, listHeader.key) && Section.m907equalsimpl0(this.section, listHeader.section) && this.size == listHeader.size;
                }
                return false;
            }

            @Override // com.discord.fastest_list.android.FastestListSections.Entry
            @NotNull
            public String getKey() {
                return this.key;
            }

            @Override // com.discord.fastest_list.android.FastestListSections.Entry
            /* renamed from: getSection-sZRFyWU */
            public int mo879getSectionsZRFyWU() {
                return this.section;
            }

            @Override // com.discord.fastest_list.android.FastestListSections.Entry
            public int getSize() {
                return this.size;
            }

            public int hashCode() {
                return (((this.key.hashCode() * 31) + Section.m908hashCodeimpl(this.section)) * 31) + Integer.hashCode(this.size);
            }

            @NotNull
            public String toString() {
                String str = this.key;
                String m909toStringimpl = Section.m909toStringimpl(this.section);
                int i10 = this.size;
                return "ListHeader(key=" + str + ", section=" + m909toStringimpl + ", size=" + i10 + ")";
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            private ListHeader(String key, int i10, int i11) {
                super(null);
                Intrinsics.checkNotNullParameter(key, "key");
                this.key = key;
                this.section = i10;
                this.size = i11;
            }
        }

        @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0010\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0004\b\u0086\b\u0018\u0000 \u001d2\u00020\u0001:\u0001\u001dB\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0011\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u0012\u0010\rJ\t\u0010\u0013\u001a\u00020\u0007HÆ\u0003J.\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001¢\u0006\u0004\b\u0015\u0010\u0016J\u0013\u0010\u0017\u001a\u00020\u00182\b\u0010\u0019\u001a\u0004\u0018\u00010\u001aHÖ\u0003J\t\u0010\u001b\u001a\u00020\u0007HÖ\u0001J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0016\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010\u000e\u001a\u0004\b\f\u0010\rR\u0014\u0010\u0006\u001a\u00020\u0007X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\r¨\u0006\u001e"}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionFooter;", "Lcom/discord/fastest_list/android/FastestListSections$Entry;", "key", "", "section", "Lcom/discord/fastest_list/android/FastestListSections$Section;", "size", "", "<init>", "(Ljava/lang/String;IILkotlin/jvm/internal/DefaultConstructorMarker;)V", "getKey", "()Ljava/lang/String;", "getSection-sZRFyWU", "()I", "I", "getSize", "component1", "component2", "component2-sZRFyWU", "component3", "copy", "copy-X8oRnOs", "(Ljava/lang/String;II)Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionFooter;", "equals", "", "other", "", "hashCode", "toString", "Companion", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class SectionFooter extends Entry {
            @NotNull
            public static final Companion Companion = new Companion(null);
            @NotNull
            private final String key;
            private final int section;
            private final int size;

            @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J \u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\b2\b\u0010\t\u001a\u0004\u0018\u00010\u0005¨\u0006\n"}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionFooter$Companion;", "", "<init>", "()V", "createKey", "", "listId", "sectionIndex", "", "sectionFooterKey", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
            public static final class Companion {
                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                @NotNull
                public final String createKey(@NotNull String listId, int i10, String str) {
                    Intrinsics.checkNotNullParameter(listId, "listId");
                    if (str != null && !StringsKt.k0(str)) {
                        return listId + "-" + str;
                    }
                    return listId + "-sf" + i10;
                }

                private Companion() {
                }
            }

            public /* synthetic */ SectionFooter(String str, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, i10, i11);
            }

            /* renamed from: copy-X8oRnOs$default  reason: not valid java name */
            public static /* synthetic */ SectionFooter m886copyX8oRnOs$default(SectionFooter sectionFooter, String str, int i10, int i11, int i12, Object obj) {
                if ((i12 & 1) != 0) {
                    str = sectionFooter.key;
                }
                if ((i12 & 2) != 0) {
                    i10 = sectionFooter.section;
                }
                if ((i12 & 4) != 0) {
                    i11 = sectionFooter.size;
                }
                return sectionFooter.m888copyX8oRnOs(str, i10, i11);
            }

            @NotNull
            public final String component1() {
                return this.key;
            }

            /* renamed from: component2-sZRFyWU  reason: not valid java name */
            public final int m887component2sZRFyWU() {
                return this.section;
            }

            public final int component3() {
                return this.size;
            }

            @NotNull
            /* renamed from: copy-X8oRnOs  reason: not valid java name */
            public final SectionFooter m888copyX8oRnOs(@NotNull String key, int i10, int i11) {
                Intrinsics.checkNotNullParameter(key, "key");
                return new SectionFooter(key, i10, i11, null);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof SectionFooter) {
                    SectionFooter sectionFooter = (SectionFooter) obj;
                    return Intrinsics.areEqual(this.key, sectionFooter.key) && Section.m907equalsimpl0(this.section, sectionFooter.section) && this.size == sectionFooter.size;
                }
                return false;
            }

            @Override // com.discord.fastest_list.android.FastestListSections.Entry
            @NotNull
            public String getKey() {
                return this.key;
            }

            @Override // com.discord.fastest_list.android.FastestListSections.Entry
            /* renamed from: getSection-sZRFyWU */
            public int mo879getSectionsZRFyWU() {
                return this.section;
            }

            @Override // com.discord.fastest_list.android.FastestListSections.Entry
            public int getSize() {
                return this.size;
            }

            public int hashCode() {
                return (((this.key.hashCode() * 31) + Section.m908hashCodeimpl(this.section)) * 31) + Integer.hashCode(this.size);
            }

            @NotNull
            public String toString() {
                String str = this.key;
                String m909toStringimpl = Section.m909toStringimpl(this.section);
                int i10 = this.size;
                return "SectionFooter(key=" + str + ", section=" + m909toStringimpl + ", size=" + i10 + ")";
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            private SectionFooter(String key, int i10, int i11) {
                super(null);
                Intrinsics.checkNotNullParameter(key, "key");
                this.key = key;
                this.section = i10;
                this.size = i11;
            }
        }

        @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0010\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0004\b\u0086\b\u0018\u0000 \u001d2\u00020\u0001:\u0001\u001dB\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0011\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u0012\u0010\rJ\t\u0010\u0013\u001a\u00020\u0007HÆ\u0003J.\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001¢\u0006\u0004\b\u0015\u0010\u0016J\u0013\u0010\u0017\u001a\u00020\u00182\b\u0010\u0019\u001a\u0004\u0018\u00010\u001aHÖ\u0003J\t\u0010\u001b\u001a\u00020\u0007HÖ\u0001J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0016\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010\u000e\u001a\u0004\b\f\u0010\rR\u0014\u0010\u0006\u001a\u00020\u0007X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\r¨\u0006\u001e"}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionHeader;", "Lcom/discord/fastest_list/android/FastestListSections$Entry;", "key", "", "section", "Lcom/discord/fastest_list/android/FastestListSections$Section;", "size", "", "<init>", "(Ljava/lang/String;IILkotlin/jvm/internal/DefaultConstructorMarker;)V", "getKey", "()Ljava/lang/String;", "getSection-sZRFyWU", "()I", "I", "getSize", "component1", "component2", "component2-sZRFyWU", "component3", "copy", "copy-X8oRnOs", "(Ljava/lang/String;II)Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionHeader;", "equals", "", "other", "", "hashCode", "toString", "Companion", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class SectionHeader extends Entry {
            @NotNull
            public static final Companion Companion = new Companion(null);
            @NotNull
            private final String key;
            private final int section;
            private final int size;

            @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J \u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\b2\b\u0010\t\u001a\u0004\u0018\u00010\u0005¨\u0006\n"}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionHeader$Companion;", "", "<init>", "()V", "createKey", "", "listId", "sectionIndex", "", "sectionHeaderKey", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
            public static final class Companion {
                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                @NotNull
                public final String createKey(@NotNull String listId, int i10, String str) {
                    Intrinsics.checkNotNullParameter(listId, "listId");
                    if (str != null && !StringsKt.k0(str)) {
                        return listId + "-" + str;
                    }
                    return listId + "-sh" + i10;
                }

                private Companion() {
                }
            }

            public /* synthetic */ SectionHeader(String str, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, i10, i11);
            }

            /* renamed from: copy-X8oRnOs$default  reason: not valid java name */
            public static /* synthetic */ SectionHeader m889copyX8oRnOs$default(SectionHeader sectionHeader, String str, int i10, int i11, int i12, Object obj) {
                if ((i12 & 1) != 0) {
                    str = sectionHeader.key;
                }
                if ((i12 & 2) != 0) {
                    i10 = sectionHeader.section;
                }
                if ((i12 & 4) != 0) {
                    i11 = sectionHeader.size;
                }
                return sectionHeader.m891copyX8oRnOs(str, i10, i11);
            }

            @NotNull
            public final String component1() {
                return this.key;
            }

            /* renamed from: component2-sZRFyWU  reason: not valid java name */
            public final int m890component2sZRFyWU() {
                return this.section;
            }

            public final int component3() {
                return this.size;
            }

            @NotNull
            /* renamed from: copy-X8oRnOs  reason: not valid java name */
            public final SectionHeader m891copyX8oRnOs(@NotNull String key, int i10, int i11) {
                Intrinsics.checkNotNullParameter(key, "key");
                return new SectionHeader(key, i10, i11, null);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof SectionHeader) {
                    SectionHeader sectionHeader = (SectionHeader) obj;
                    return Intrinsics.areEqual(this.key, sectionHeader.key) && Section.m907equalsimpl0(this.section, sectionHeader.section) && this.size == sectionHeader.size;
                }
                return false;
            }

            @Override // com.discord.fastest_list.android.FastestListSections.Entry
            @NotNull
            public String getKey() {
                return this.key;
            }

            @Override // com.discord.fastest_list.android.FastestListSections.Entry
            /* renamed from: getSection-sZRFyWU */
            public int mo879getSectionsZRFyWU() {
                return this.section;
            }

            @Override // com.discord.fastest_list.android.FastestListSections.Entry
            public int getSize() {
                return this.size;
            }

            public int hashCode() {
                return (((this.key.hashCode() * 31) + Section.m908hashCodeimpl(this.section)) * 31) + Integer.hashCode(this.size);
            }

            @NotNull
            public String toString() {
                String str = this.key;
                String m909toStringimpl = Section.m909toStringimpl(this.section);
                int i10 = this.size;
                return "SectionHeader(key=" + str + ", section=" + m909toStringimpl + ", size=" + i10 + ")";
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            private SectionHeader(String key, int i10, int i11) {
                super(null);
                Intrinsics.checkNotNullParameter(key, "key");
                this.key = key;
                this.section = i10;
                this.size = i11;
            }
        }

        @Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u001a\n\u0002\u0010\u0000\n\u0002\b\u0004\b\u0086\b\u0018\u0000 )2\u00020\u0001:\u0001)BA\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007\u0012\b\b\u0002\u0010\b\u001a\u00020\t\u0012\b\b\u0002\u0010\n\u001a\u00020\u000b\u0012\b\b\u0002\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\r\u0010\u000eJ\t\u0010\u0019\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u001a\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u001b\u0010\u0012J\u0010\u0010\u001c\u001a\u00020\u0007HÆ\u0003¢\u0006\u0004\b\u001d\u0010\u0012J\t\u0010\u001e\u001a\u00020\tHÆ\u0003J\t\u0010\u001f\u001a\u00020\u000bHÆ\u0003J\t\u0010 \u001a\u00020\u000bHÆ\u0003JL\u0010!\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\t2\b\b\u0002\u0010\n\u001a\u00020\u000b2\b\b\u0002\u0010\f\u001a\u00020\u000bHÆ\u0001¢\u0006\u0004\b\"\u0010#J\u0013\u0010$\u001a\u00020\u000b2\b\u0010%\u001a\u0004\u0018\u00010&HÖ\u0003J\t\u0010'\u001a\u00020\tHÖ\u0001J\t\u0010(\u001a\u00020\u0003HÖ\u0001R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0016\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0011\u0010\u0012R\u0013\u0010\u0006\u001a\u00020\u0007¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0014\u0010\u0012R\u0014\u0010\b\u001a\u00020\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0012R\u0011\u0010\n\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0011\u0010\f\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0017¨\u0006*"}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionItem;", "Lcom/discord/fastest_list/android/FastestListSections$Entry;", "key", "", "section", "Lcom/discord/fastest_list/android/FastestListSections$Section;", "item", "Lcom/discord/fastest_list/android/FastestListSections$Item;", "size", "", "atFront", "", "atRear", "<init>", "(Ljava/lang/String;IIIZZLkotlin/jvm/internal/DefaultConstructorMarker;)V", "getKey", "()Ljava/lang/String;", "getSection-sZRFyWU", "()I", "I", "getItem-JXkbwXs", "getSize", "getAtFront", "()Z", "getAtRear", "component1", "component2", "component2-sZRFyWU", "component3", "component3-JXkbwXs", "component4", "component5", "component6", "copy", "copy-84MWo2c", "(Ljava/lang/String;IIIZZ)Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionItem;", "equals", "other", "", "hashCode", "toString", "Companion", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class SectionItem extends Entry {
            private final boolean atFront;
            private final boolean atRear;
            private final int item;
            @NotNull
            private final String key;
            private final int section;
            private final int size;
            @NotNull
            public static final Companion Companion = new Companion(null);
            @NotNull
            private static final SectionItem DEFAULT_AT_START = new SectionItem("", 0, Item.m898constructorimpl(0), 0, false, false, 58, null);
            @NotNull
            private static final SectionItem DEFAULT_AT_END = new SectionItem("", 0, Item.m898constructorimpl(-1), 0, false, false, 58, null);

            @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0007\u001a\u00020\u00052\u0006\u0010\b\u001a\u00020\tJ(\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u000bR\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0011"}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionItem$Companion;", "", "<init>", "()V", "DEFAULT_AT_START", "Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionItem;", "DEFAULT_AT_END", "getDefaultItem", "atEnd", "", "createKey", "", "listId", "sectionIndex", "", "sectionItemIndex", "sectionItemKey", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
            public static final class Companion {
                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                @NotNull
                public final String createKey(@NotNull String listId, int i10, int i11, String str) {
                    Intrinsics.checkNotNullParameter(listId, "listId");
                    if (str != null && !StringsKt.k0(str)) {
                        return listId + "-" + str;
                    }
                    return listId + "-s" + i10 + "-i" + i11;
                }

                @NotNull
                public final SectionItem getDefaultItem(boolean z10) {
                    return z10 ? SectionItem.DEFAULT_AT_END : SectionItem.DEFAULT_AT_START;
                }

                private Companion() {
                }
            }

            public /* synthetic */ SectionItem(String str, int i10, int i11, int i12, boolean z10, boolean z11, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, i10, i11, i12, z10, z11);
            }

            /* renamed from: copy-84MWo2c$default  reason: not valid java name */
            public static /* synthetic */ SectionItem m892copy84MWo2c$default(SectionItem sectionItem, String str, int i10, int i11, int i12, boolean z10, boolean z11, int i13, Object obj) {
                if ((i13 & 1) != 0) {
                    str = sectionItem.key;
                }
                if ((i13 & 2) != 0) {
                    i10 = sectionItem.section;
                }
                if ((i13 & 4) != 0) {
                    i11 = sectionItem.item;
                }
                if ((i13 & 8) != 0) {
                    i12 = sectionItem.size;
                }
                if ((i13 & 16) != 0) {
                    z10 = sectionItem.atFront;
                }
                if ((i13 & 32) != 0) {
                    z11 = sectionItem.atRear;
                }
                boolean z12 = z10;
                boolean z13 = z11;
                return sectionItem.m895copy84MWo2c(str, i10, i11, i12, z12, z13);
            }

            @NotNull
            public final String component1() {
                return this.key;
            }

            /* renamed from: component2-sZRFyWU  reason: not valid java name */
            public final int m893component2sZRFyWU() {
                return this.section;
            }

            /* renamed from: component3-JXkbwXs  reason: not valid java name */
            public final int m894component3JXkbwXs() {
                return this.item;
            }

            public final int component4() {
                return this.size;
            }

            public final boolean component5() {
                return this.atFront;
            }

            public final boolean component6() {
                return this.atRear;
            }

            @NotNull
            /* renamed from: copy-84MWo2c  reason: not valid java name */
            public final SectionItem m895copy84MWo2c(@NotNull String key, int i10, int i11, int i12, boolean z10, boolean z11) {
                Intrinsics.checkNotNullParameter(key, "key");
                return new SectionItem(key, i10, i11, i12, z10, z11, null);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof SectionItem) {
                    SectionItem sectionItem = (SectionItem) obj;
                    return Intrinsics.areEqual(this.key, sectionItem.key) && Section.m907equalsimpl0(this.section, sectionItem.section) && Item.m900equalsimpl0(this.item, sectionItem.item) && this.size == sectionItem.size && this.atFront == sectionItem.atFront && this.atRear == sectionItem.atRear;
                }
                return false;
            }

            public final boolean getAtFront() {
                return this.atFront;
            }

            public final boolean getAtRear() {
                return this.atRear;
            }

            /* renamed from: getItem-JXkbwXs  reason: not valid java name */
            public final int m896getItemJXkbwXs() {
                return this.item;
            }

            @Override // com.discord.fastest_list.android.FastestListSections.Entry
            @NotNull
            public String getKey() {
                return this.key;
            }

            @Override // com.discord.fastest_list.android.FastestListSections.Entry
            /* renamed from: getSection-sZRFyWU */
            public int mo879getSectionsZRFyWU() {
                return this.section;
            }

            @Override // com.discord.fastest_list.android.FastestListSections.Entry
            public int getSize() {
                return this.size;
            }

            public int hashCode() {
                return (((((((((this.key.hashCode() * 31) + Section.m908hashCodeimpl(this.section)) * 31) + Item.m901hashCodeimpl(this.item)) * 31) + Integer.hashCode(this.size)) * 31) + Boolean.hashCode(this.atFront)) * 31) + Boolean.hashCode(this.atRear);
            }

            @NotNull
            public String toString() {
                String str = this.key;
                String m909toStringimpl = Section.m909toStringimpl(this.section);
                String m902toStringimpl = Item.m902toStringimpl(this.item);
                int i10 = this.size;
                boolean z10 = this.atFront;
                boolean z11 = this.atRear;
                return "SectionItem(key=" + str + ", section=" + m909toStringimpl + ", item=" + m902toStringimpl + ", size=" + i10 + ", atFront=" + z10 + ", atRear=" + z11 + ")";
            }

            public /* synthetic */ SectionItem(String str, int i10, int i11, int i12, boolean z10, boolean z11, int i13, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, (i13 & 2) != 0 ? Section.m905constructorimpl(0) : i10, (i13 & 4) != 0 ? Item.m898constructorimpl(0) : i11, (i13 & 8) != 0 ? 0 : i12, (i13 & 16) != 0 ? false : z10, (i13 & 32) != 0 ? false : z11, null);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            private SectionItem(String key, int i10, int i11, int i12, boolean z10, boolean z11) {
                super(null);
                Intrinsics.checkNotNullParameter(key, "key");
                this.key = key;
                this.section = i10;
                this.item = i11;
                this.size = i12;
                this.atFront = z10;
                this.atRear = z11;
            }
        }

        public /* synthetic */ Entry(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public abstract String getKey();

        /* renamed from: getSection-sZRFyWU  reason: not valid java name */
        public abstract int mo879getSectionsZRFyWU();

        public abstract int getSize();

        private Entry() {
        }
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0010\u000e\n\u0002\b\u0003\b\u0087@\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u001a\u0010\b\u001a\u00020\t2\b\u0010\n\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u000b\u0010\fJ\u0010\u0010\r\u001a\u00020\u0003HÖ\u0001¢\u0006\u0004\b\u000e\u0010\u0005J\u0010\u0010\u000f\u001a\u00020\u0010HÖ\u0001¢\u0006\u0004\b\u0011\u0010\u0012R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007\u0088\u0001\u0002¨\u0006\u0013"}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections$Item;", "", "value", "", "constructor-impl", "(I)I", "getValue", "()I", "equals", "", "other", "equals-impl", "(ILjava/lang/Object;)Z", "hashCode", "hashCode-impl", "toString", "", "toString-impl", "(I)Ljava/lang/String;", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Item {
        private final int value;

        private /* synthetic */ Item(int i10) {
            this.value = i10;
        }

        /* renamed from: box-impl  reason: not valid java name */
        public static final /* synthetic */ Item m897boximpl(int i10) {
            return new Item(i10);
        }

        /* renamed from: constructor-impl  reason: not valid java name */
        public static int m898constructorimpl(int i10) {
            return i10;
        }

        /* renamed from: equals-impl  reason: not valid java name */
        public static boolean m899equalsimpl(int i10, Object obj) {
            return (obj instanceof Item) && i10 == ((Item) obj).m903unboximpl();
        }

        /* renamed from: equals-impl0  reason: not valid java name */
        public static final boolean m900equalsimpl0(int i10, int i11) {
            return i10 == i11;
        }

        /* renamed from: hashCode-impl  reason: not valid java name */
        public static int m901hashCodeimpl(int i10) {
            return Integer.hashCode(i10);
        }

        /* renamed from: toString-impl  reason: not valid java name */
        public static String m902toStringimpl(int i10) {
            return "Item(value=" + i10 + ")";
        }

        public boolean equals(Object obj) {
            return m899equalsimpl(this.value, obj);
        }

        public final int getValue() {
            return this.value;
        }

        public int hashCode() {
            return m901hashCodeimpl(this.value);
        }

        public String toString() {
            return m902toStringimpl(this.value);
        }

        /* renamed from: unbox-impl  reason: not valid java name */
        public final /* synthetic */ int m903unboximpl() {
            return this.value;
        }
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0010\u000e\n\u0002\b\u0003\b\u0087@\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u001a\u0010\b\u001a\u00020\t2\b\u0010\n\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u000b\u0010\fJ\u0010\u0010\r\u001a\u00020\u0003HÖ\u0001¢\u0006\u0004\b\u000e\u0010\u0005J\u0010\u0010\u000f\u001a\u00020\u0010HÖ\u0001¢\u0006\u0004\b\u0011\u0010\u0012R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007\u0088\u0001\u0002¨\u0006\u0013"}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections$Section;", "", "value", "", "constructor-impl", "(I)I", "getValue", "()I", "equals", "", "other", "equals-impl", "(ILjava/lang/Object;)Z", "hashCode", "hashCode-impl", "toString", "", "toString-impl", "(I)Ljava/lang/String;", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Section {
        private final int value;

        private /* synthetic */ Section(int i10) {
            this.value = i10;
        }

        /* renamed from: box-impl  reason: not valid java name */
        public static final /* synthetic */ Section m904boximpl(int i10) {
            return new Section(i10);
        }

        /* renamed from: constructor-impl  reason: not valid java name */
        public static int m905constructorimpl(int i10) {
            return i10;
        }

        /* renamed from: equals-impl  reason: not valid java name */
        public static boolean m906equalsimpl(int i10, Object obj) {
            return (obj instanceof Section) && i10 == ((Section) obj).m910unboximpl();
        }

        /* renamed from: equals-impl0  reason: not valid java name */
        public static final boolean m907equalsimpl0(int i10, int i11) {
            return i10 == i11;
        }

        /* renamed from: hashCode-impl  reason: not valid java name */
        public static int m908hashCodeimpl(int i10) {
            return Integer.hashCode(i10);
        }

        /* renamed from: toString-impl  reason: not valid java name */
        public static String m909toStringimpl(int i10) {
            return "Section(value=" + i10 + ")";
        }

        public boolean equals(Object obj) {
            return m906equalsimpl(this.value, obj);
        }

        public final int getValue() {
            return this.value;
        }

        public int hashCode() {
            return m908hashCodeimpl(this.value);
        }

        public String toString() {
            return m909toStringimpl(this.value);
        }

        /* renamed from: unbox-impl  reason: not valid java name */
        public final /* synthetic */ int m910unboximpl() {
            return this.value;
        }
    }

    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0010\n\u0002\u0010\u000b\n\u0002\b\u0005\b\u0086\b\u0018\u0000 \u001d2\u00020\u0001:\u0001\u001dB3\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\f\u0010\t\u001a\b\u0012\u0004\u0012\u00020\b0\u0005¢\u0006\u0004\b\n\u0010\u000bJ\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\u000f\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005HÆ\u0003J\t\u0010\u0015\u001a\u00020\bHÆ\u0003J\u000f\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\b0\u0005HÆ\u0003J=\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\u000e\b\u0002\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u00052\b\b\u0002\u0010\u0007\u001a\u00020\b2\u000e\b\u0002\u0010\t\u001a\b\u0012\u0004\u0012\u00020\b0\u0005HÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001b\u001a\u00020\bHÖ\u0001J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0017\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0017\u0010\t\u001a\b\u0012\u0004\u0012\u00020\b0\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u000f¨\u0006\u001e"}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections$Versioned;", "", "sectionsId", "", "sectionEntries", "", "Lcom/discord/fastest_list/android/FastestListSections$Entry;", "sectionsCumulativeSize", "", "sectionOffsetAtPosition", "<init>", "(Ljava/lang/String;Ljava/util/List;ILjava/util/List;)V", "getSectionsId", "()Ljava/lang/String;", "getSectionEntries", "()Ljava/util/List;", "getSectionsCumulativeSize", "()I", "getSectionOffsetAtPosition", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "toString", "Companion", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Versioned {
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        private final List<Entry> sectionEntries;
        @NotNull
        private final List<Integer> sectionOffsetAtPosition;
        private final int sectionsCumulativeSize;
        @NotNull
        private final String sectionsId;

        @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lcom/discord/fastest_list/android/FastestListSections$Versioned$Companion;", "", "<init>", "()V", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        /* JADX WARN: Multi-variable type inference failed */
        public Versioned(@NotNull String sectionsId, @NotNull List<? extends Entry> sectionEntries, int i10, @NotNull List<Integer> sectionOffsetAtPosition) {
            Intrinsics.checkNotNullParameter(sectionsId, "sectionsId");
            Intrinsics.checkNotNullParameter(sectionEntries, "sectionEntries");
            Intrinsics.checkNotNullParameter(sectionOffsetAtPosition, "sectionOffsetAtPosition");
            this.sectionsId = sectionsId;
            this.sectionEntries = sectionEntries;
            this.sectionsCumulativeSize = i10;
            this.sectionOffsetAtPosition = sectionOffsetAtPosition;
        }

        /* JADX WARN: Multi-variable type inference failed */
        public static /* synthetic */ Versioned copy$default(Versioned versioned, String str, List list, int i10, List list2, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                str = versioned.sectionsId;
            }
            if ((i11 & 2) != 0) {
                list = versioned.sectionEntries;
            }
            if ((i11 & 4) != 0) {
                i10 = versioned.sectionsCumulativeSize;
            }
            if ((i11 & 8) != 0) {
                list2 = versioned.sectionOffsetAtPosition;
            }
            return versioned.copy(str, list, i10, list2);
        }

        @NotNull
        public final String component1() {
            return this.sectionsId;
        }

        @NotNull
        public final List<Entry> component2() {
            return this.sectionEntries;
        }

        public final int component3() {
            return this.sectionsCumulativeSize;
        }

        @NotNull
        public final List<Integer> component4() {
            return this.sectionOffsetAtPosition;
        }

        @NotNull
        public final Versioned copy(@NotNull String sectionsId, @NotNull List<? extends Entry> sectionEntries, int i10, @NotNull List<Integer> sectionOffsetAtPosition) {
            Intrinsics.checkNotNullParameter(sectionsId, "sectionsId");
            Intrinsics.checkNotNullParameter(sectionEntries, "sectionEntries");
            Intrinsics.checkNotNullParameter(sectionOffsetAtPosition, "sectionOffsetAtPosition");
            return new Versioned(sectionsId, sectionEntries, i10, sectionOffsetAtPosition);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Versioned) {
                Versioned versioned = (Versioned) obj;
                return Intrinsics.areEqual(this.sectionsId, versioned.sectionsId) && Intrinsics.areEqual(this.sectionEntries, versioned.sectionEntries) && this.sectionsCumulativeSize == versioned.sectionsCumulativeSize && Intrinsics.areEqual(this.sectionOffsetAtPosition, versioned.sectionOffsetAtPosition);
            }
            return false;
        }

        @NotNull
        public final List<Entry> getSectionEntries() {
            return this.sectionEntries;
        }

        @NotNull
        public final List<Integer> getSectionOffsetAtPosition() {
            return this.sectionOffsetAtPosition;
        }

        public final int getSectionsCumulativeSize() {
            return this.sectionsCumulativeSize;
        }

        @NotNull
        public final String getSectionsId() {
            return this.sectionsId;
        }

        public int hashCode() {
            return (((((this.sectionsId.hashCode() * 31) + this.sectionEntries.hashCode()) * 31) + Integer.hashCode(this.sectionsCumulativeSize)) * 31) + this.sectionOffsetAtPosition.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.sectionsId;
            List<Entry> list = this.sectionEntries;
            int i10 = this.sectionsCumulativeSize;
            List<Integer> list2 = this.sectionOffsetAtPosition;
            return "Versioned(sectionsId=" + str + ", sectionEntries=" + list + ", sectionsCumulativeSize=" + i10 + ", sectionOffsetAtPosition=" + list2 + ")";
        }
    }

    public FastestListSections(@NotNull Versioned sectionsVersioned) {
        Intrinsics.checkNotNullParameter(sectionsVersioned, "sectionsVersioned");
        this.sectionsId = sectionsVersioned.getSectionsId();
        this.sectionEntries = sectionsVersioned.getSectionEntries();
        this.sectionsCumulativeSize = sectionsVersioned.getSectionsCumulativeSize();
        this.sectionOffsetAtPosition = sectionsVersioned.getSectionOffsetAtPosition();
    }

    @NotNull
    public final String getId() {
        return this.sectionsId;
    }

    @NotNull
    public final Entry getItem(int i10) {
        return this.sectionEntries.get(i10);
    }

    @NotNull
    public final Entry.SectionItem getItemAtPosition(int i10, boolean z10) {
        Entry.SectionItem sectionItem;
        Entry.SectionItem sectionItem2;
        Entry entry = this.sectionEntries.get(i10);
        Entry.SectionItem sectionItem3 = null;
        if (entry instanceof Entry.ListHeader) {
            Iterator it = CollectionsKt.m(this.sectionEntries).iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                }
                Entry entry2 = this.sectionEntries.get(((m0) it).nextInt());
                if (entry2 instanceof Entry.SectionItem) {
                    sectionItem2 = (Entry.SectionItem) entry2;
                    continue;
                } else {
                    sectionItem2 = null;
                    continue;
                }
                if (sectionItem2 != null) {
                    sectionItem3 = sectionItem2;
                    break;
                }
            }
            if (sectionItem3 == null) {
                return Entry.SectionItem.Companion.getDefaultItem(z10);
            }
            return sectionItem3;
        } else if (entry instanceof Entry.ListFooter) {
            Iterator it2 = kotlin.ranges.d.r(CollectionsKt.m(this.sectionEntries)).iterator();
            while (true) {
                if (!it2.hasNext()) {
                    break;
                }
                Entry entry3 = this.sectionEntries.get(((m0) it2).nextInt());
                if (entry3 instanceof Entry.SectionItem) {
                    sectionItem = (Entry.SectionItem) entry3;
                    continue;
                } else {
                    sectionItem = null;
                    continue;
                }
                if (sectionItem != null) {
                    sectionItem3 = sectionItem;
                    break;
                }
            }
            if (sectionItem3 == null) {
                return Entry.SectionItem.Companion.getDefaultItem(z10);
            }
            return sectionItem3;
        } else if (entry instanceof Entry.SectionHeader) {
            Entry entry4 = this.sectionEntries.get(i10 + 1);
            Intrinsics.checkNotNull(entry4, "null cannot be cast to non-null type com.discord.fastest_list.android.FastestListSections.Entry.SectionItem");
            return (Entry.SectionItem) entry4;
        } else if (entry instanceof Entry.SectionFooter) {
            Entry entry5 = this.sectionEntries.get(i10 - 1);
            Intrinsics.checkNotNull(entry5, "null cannot be cast to non-null type com.discord.fastest_list.android.FastestListSections.Entry.SectionItem");
            return (Entry.SectionItem) entry5;
        } else if (entry instanceof Entry.SectionItem) {
            return (Entry.SectionItem) entry;
        } else {
            throw new p();
        }
    }

    public final int getItemCount() {
        return this.sectionEntries.size();
    }

    public final int getItemCumulativeSize() {
        return this.sectionsCumulativeSize;
    }

    public final int getItemOffset(int i10) {
        if (i10 < 0) {
            return 0;
        }
        if (i10 < this.sectionOffsetAtPosition.size()) {
            return this.sectionOffsetAtPosition.get(i10).intValue();
        }
        if (this.sectionOffsetAtPosition.isEmpty()) {
            return 0;
        }
        return ((Number) CollectionsKt.z0(this.sectionOffsetAtPosition)).intValue();
    }

    public final int getItemPosition(int i10) {
        int size = this.sectionOffsetAtPosition.size();
        for (int i11 = 0; i11 < size; i11++) {
            if (i10 <= this.sectionOffsetAtPosition.get(i11).intValue()) {
                return i11;
            }
        }
        throw new IllegalStateException(("Invalid offset " + i10 + ", out of bounds of sections.").toString());
    }

    /* renamed from: getItemPosition-jEcWkE0  reason: not valid java name */
    public final Integer m878getItemPositionjEcWkE0(int i10, int i11) {
        Iterator<? extends Entry> it = this.sectionEntries.iterator();
        int i12 = 0;
        while (true) {
            if (it.hasNext()) {
                Entry next = it.next();
                if (next instanceof Entry.SectionItem) {
                    Entry.SectionItem sectionItem = (Entry.SectionItem) next;
                    if (Item.m900equalsimpl0(sectionItem.m896getItemJXkbwXs(), i11) && Section.m907equalsimpl0(sectionItem.mo879getSectionsZRFyWU(), i10)) {
                        break;
                    }
                }
                i12++;
            } else {
                i12 = -1;
                break;
            }
        }
        if (i12 == -1) {
            return null;
        }
        return Integer.valueOf(i12);
    }

    public final int getItemSizeAverage() {
        if (!this.sectionEntries.isEmpty()) {
            return this.sectionsCumulativeSize / this.sectionEntries.size();
        }
        return 0;
    }

    public final int getItemViewType(int i10) {
        Entry entry = this.sectionEntries.get(i10);
        if (entry instanceof Entry.SectionHeader) {
            return 1;
        }
        if (entry instanceof Entry.SectionFooter) {
            return 2;
        }
        if (entry instanceof Entry.SectionItem) {
            return 0;
        }
        if (entry instanceof Entry.ListFooter) {
            return 4;
        }
        if (entry instanceof Entry.ListHeader) {
            return 3;
        }
        throw new p();
    }

    public final boolean setSectionsVersioned(@NotNull Versioned sectionsVersioned) {
        Intrinsics.checkNotNullParameter(sectionsVersioned, "sectionsVersioned");
        if (!Intrinsics.areEqual(this.sectionsId, sectionsVersioned.getSectionsId())) {
            this.sectionsId = sectionsVersioned.getSectionsId();
            this.sectionEntries = sectionsVersioned.getSectionEntries();
            this.sectionsCumulativeSize = sectionsVersioned.getSectionsCumulativeSize();
            this.sectionOffsetAtPosition = sectionsVersioned.getSectionOffsetAtPosition();
            return true;
        }
        return false;
    }
}
