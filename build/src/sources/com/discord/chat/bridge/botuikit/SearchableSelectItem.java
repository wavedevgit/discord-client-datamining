package com.discord.chat.bridge.botuikit;

import com.discord.chat.bridge.botuikit.SelectOptionType;
import jt.n2;
import jt.p0;
import jt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@ft.m
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0015\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 42\u00020\u0001:\u000234BC\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\f\u0010\rBW\b\u0010\u0012\u0006\u0010\u000e\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010¢\u0006\u0004\b\f\u0010\u0011J\t\u0010\u001d\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001e\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001f\u001a\u00020\u0006HÆ\u0003J\u000b\u0010 \u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0010\u0010!\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\u0010\u0019J\u000b\u0010\"\u001a\u0004\u0018\u00010\u000bHÆ\u0003JP\u0010#\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000bHÆ\u0001¢\u0006\u0002\u0010$J\u0013\u0010%\u001a\u00020&2\b\u0010'\u001a\u0004\u0018\u00010(HÖ\u0003J\t\u0010)\u001a\u00020\tHÖ\u0001J\t\u0010*\u001a\u00020\u0003HÖ\u0001J%\u0010+\u001a\u00020,2\u0006\u0010-\u001a\u00020\u00002\u0006\u0010.\u001a\u00020/2\u0006\u00100\u001a\u000201H\u0001¢\u0006\u0002\b2R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0004\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0013R\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0013R\u0015\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\n\n\u0002\u0010\u001a\u001a\u0004\b\u0018\u0010\u0019R\u0013\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001c¨\u00065"}, d2 = {"Lcom/discord/chat/bridge/botuikit/SearchableSelectItem;", "Lcom/discord/chat/bridge/botuikit/SelectItem;", "label", "", "value", "type", "Lcom/discord/chat/bridge/botuikit/SelectOptionType;", "iconSrc", "iconColor", "", "iconEmoji", "Lcom/discord/chat/bridge/botuikit/ComponentEmoji;", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/SelectOptionType;Ljava/lang/String;Ljava/lang/Integer;Lcom/discord/chat/bridge/botuikit/ComponentEmoji;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/SelectOptionType;Ljava/lang/String;Ljava/lang/Integer;Lcom/discord/chat/bridge/botuikit/ComponentEmoji;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getLabel", "()Ljava/lang/String;", "getValue", "getType", "()Lcom/discord/chat/bridge/botuikit/SelectOptionType;", "getIconSrc", "getIconColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getIconEmoji", "()Lcom/discord/chat/bridge/botuikit/ComponentEmoji;", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "(Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/SelectOptionType;Ljava/lang/String;Ljava/lang/Integer;Lcom/discord/chat/bridge/botuikit/ComponentEmoji;)Lcom/discord/chat/bridge/botuikit/SearchableSelectItem;", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SearchableSelectItem extends SelectItem {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final Integer iconColor;
    private final ComponentEmoji iconEmoji;
    private final String iconSrc;
    @NotNull
    private final String label;
    @NotNull
    private final SelectOptionType type;
    @NotNull
    private final String value;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/SearchableSelectItem$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/SearchableSelectItem;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return SearchableSelectItem$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ SearchableSelectItem(int i10, String str, String str2, SelectOptionType selectOptionType, String str3, Integer num, ComponentEmoji componentEmoji, SerializationConstructorMarker serializationConstructorMarker) {
        super(i10, serializationConstructorMarker);
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, SearchableSelectItem$$serializer.INSTANCE.getDescriptor());
        }
        this.label = str;
        this.value = str2;
        this.type = selectOptionType;
        if ((i10 & 8) == 0) {
            this.iconSrc = null;
        } else {
            this.iconSrc = str3;
        }
        if ((i10 & 16) == 0) {
            this.iconColor = null;
        } else {
            this.iconColor = num;
        }
        if ((i10 & 32) == 0) {
            this.iconEmoji = null;
        } else {
            this.iconEmoji = componentEmoji;
        }
    }

    public static /* synthetic */ SearchableSelectItem copy$default(SearchableSelectItem searchableSelectItem, String str, String str2, SelectOptionType selectOptionType, String str3, Integer num, ComponentEmoji componentEmoji, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = searchableSelectItem.label;
        }
        if ((i10 & 2) != 0) {
            str2 = searchableSelectItem.value;
        }
        if ((i10 & 4) != 0) {
            selectOptionType = searchableSelectItem.type;
        }
        if ((i10 & 8) != 0) {
            str3 = searchableSelectItem.iconSrc;
        }
        if ((i10 & 16) != 0) {
            num = searchableSelectItem.iconColor;
        }
        if ((i10 & 32) != 0) {
            componentEmoji = searchableSelectItem.iconEmoji;
        }
        Integer num2 = num;
        ComponentEmoji componentEmoji2 = componentEmoji;
        return searchableSelectItem.copy(str, str2, selectOptionType, str3, num2, componentEmoji2);
    }

    public static final /* synthetic */ void write$Self$chat_release(SearchableSelectItem searchableSelectItem, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        SelectItem.write$Self(searchableSelectItem, compositeEncoder, serialDescriptor);
        compositeEncoder.z(serialDescriptor, 0, searchableSelectItem.getLabel());
        compositeEncoder.z(serialDescriptor, 1, searchableSelectItem.getValue());
        compositeEncoder.s(serialDescriptor, 2, SelectOptionType.Serializer.INSTANCE, searchableSelectItem.type);
        if (compositeEncoder.A(serialDescriptor, 3) || searchableSelectItem.iconSrc != null) {
            compositeEncoder.l(serialDescriptor, 3, n2.f31089a, searchableSelectItem.iconSrc);
        }
        if (compositeEncoder.A(serialDescriptor, 4) || searchableSelectItem.iconColor != null) {
            compositeEncoder.l(serialDescriptor, 4, p0.f31105a, searchableSelectItem.iconColor);
        }
        if (compositeEncoder.A(serialDescriptor, 5) || searchableSelectItem.iconEmoji != null) {
            compositeEncoder.l(serialDescriptor, 5, ComponentEmoji$$serializer.INSTANCE, searchableSelectItem.iconEmoji);
        }
    }

    @NotNull
    public final String component1() {
        return this.label;
    }

    @NotNull
    public final String component2() {
        return this.value;
    }

    @NotNull
    public final SelectOptionType component3() {
        return this.type;
    }

    public final String component4() {
        return this.iconSrc;
    }

    public final Integer component5() {
        return this.iconColor;
    }

    public final ComponentEmoji component6() {
        return this.iconEmoji;
    }

    @NotNull
    public final SearchableSelectItem copy(@NotNull String label, @NotNull String value, @NotNull SelectOptionType type, String str, Integer num, ComponentEmoji componentEmoji) {
        Intrinsics.checkNotNullParameter(label, "label");
        Intrinsics.checkNotNullParameter(value, "value");
        Intrinsics.checkNotNullParameter(type, "type");
        return new SearchableSelectItem(label, value, type, str, num, componentEmoji);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof SearchableSelectItem) {
            SearchableSelectItem searchableSelectItem = (SearchableSelectItem) obj;
            return Intrinsics.areEqual(this.label, searchableSelectItem.label) && Intrinsics.areEqual(this.value, searchableSelectItem.value) && this.type == searchableSelectItem.type && Intrinsics.areEqual(this.iconSrc, searchableSelectItem.iconSrc) && Intrinsics.areEqual(this.iconColor, searchableSelectItem.iconColor) && Intrinsics.areEqual(this.iconEmoji, searchableSelectItem.iconEmoji);
        }
        return false;
    }

    public final Integer getIconColor() {
        return this.iconColor;
    }

    public final ComponentEmoji getIconEmoji() {
        return this.iconEmoji;
    }

    public final String getIconSrc() {
        return this.iconSrc;
    }

    @Override // com.discord.chat.bridge.botuikit.SelectItem
    @NotNull
    public String getLabel() {
        return this.label;
    }

    @NotNull
    public final SelectOptionType getType() {
        return this.type;
    }

    @Override // com.discord.chat.bridge.botuikit.SelectItem
    @NotNull
    public String getValue() {
        return this.value;
    }

    public int hashCode() {
        int hashCode = ((((this.label.hashCode() * 31) + this.value.hashCode()) * 31) + this.type.hashCode()) * 31;
        String str = this.iconSrc;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        Integer num = this.iconColor;
        int hashCode3 = (hashCode2 + (num == null ? 0 : num.hashCode())) * 31;
        ComponentEmoji componentEmoji = this.iconEmoji;
        return hashCode3 + (componentEmoji != null ? componentEmoji.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String str = this.label;
        String str2 = this.value;
        SelectOptionType selectOptionType = this.type;
        String str3 = this.iconSrc;
        Integer num = this.iconColor;
        ComponentEmoji componentEmoji = this.iconEmoji;
        return "SearchableSelectItem(label=" + str + ", value=" + str2 + ", type=" + selectOptionType + ", iconSrc=" + str3 + ", iconColor=" + num + ", iconEmoji=" + componentEmoji + ")";
    }

    public /* synthetic */ SearchableSelectItem(String str, String str2, SelectOptionType selectOptionType, String str3, Integer num, ComponentEmoji componentEmoji, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, selectOptionType, (i10 & 8) != 0 ? null : str3, (i10 & 16) != 0 ? null : num, (i10 & 32) != 0 ? null : componentEmoji);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SearchableSelectItem(@NotNull String label, @NotNull String value, @NotNull SelectOptionType type, String str, Integer num, ComponentEmoji componentEmoji) {
        super(null);
        Intrinsics.checkNotNullParameter(label, "label");
        Intrinsics.checkNotNullParameter(value, "value");
        Intrinsics.checkNotNullParameter(type, "type");
        this.label = label;
        this.value = value;
        this.type = type;
        this.iconSrc = str;
        this.iconColor = num;
        this.iconEmoji = componentEmoji;
    }
}
