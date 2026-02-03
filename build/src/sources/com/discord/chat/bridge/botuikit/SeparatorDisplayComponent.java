package com.discord.chat.bridge.botuikit;

import bt.v1;
import com.discord.chat.bridge.botuikit.SeparatorSpacingSize;
import com.facebook.react.devsupport.StackTraceHelper;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@ys.m
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0010\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 +2\u00020\u0001:\u0002*+B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t¢\u0006\u0004\b\n\u0010\u000bB?\b\u0010\u0012\u0006\u0010\f\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\n\u0010\u000fJ\t\u0010\u0018\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0019\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001a\u001a\u00020\u0007HÆ\u0003J\t\u0010\u001b\u001a\u00020\tHÆ\u0003J1\u0010\u001c\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\tHÆ\u0001J\u0013\u0010\u001d\u001a\u00020\u00072\b\u0010\u001e\u001a\u0004\u0018\u00010\u001fHÖ\u0003J\t\u0010 \u001a\u00020\u0003HÖ\u0001J\t\u0010!\u001a\u00020\u0005HÖ\u0001J%\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020\u00002\u0006\u0010%\u001a\u00020&2\u0006\u0010'\u001a\u00020(H\u0001¢\u0006\u0002\b)R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017¨\u0006,"}, d2 = {"Lcom/discord/chat/bridge/botuikit/SeparatorDisplayComponent;", "Lcom/discord/chat/bridge/botuikit/Component;", "type", "", StackTraceHelper.ID_KEY, "", "divider", "", "spacing", "Lcom/discord/chat/bridge/botuikit/SeparatorSpacingSize;", "<init>", "(ILjava/lang/String;ZLcom/discord/chat/bridge/botuikit/SeparatorSpacingSize;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILjava/lang/String;ZLcom/discord/chat/bridge/botuikit/SeparatorSpacingSize;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getType", "()I", "getId", "()Ljava/lang/String;", "getDivider", "()Z", "getSpacing", "()Lcom/discord/chat/bridge/botuikit/SeparatorSpacingSize;", "component1", "component2", "component3", "component4", "copy", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SeparatorDisplayComponent extends Component {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final boolean divider;
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f9284id;
    @NotNull
    private final SeparatorSpacingSize spacing;
    private final int type;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/SeparatorDisplayComponent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/SeparatorDisplayComponent;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return SeparatorDisplayComponent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ SeparatorDisplayComponent(int i10, int i11, String str, boolean z10, SeparatorSpacingSize separatorSpacingSize, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, SeparatorDisplayComponent$$serializer.INSTANCE.getDescriptor());
        }
        this.type = i11;
        this.f9284id = str;
        this.divider = z10;
        this.spacing = separatorSpacingSize;
    }

    public static /* synthetic */ SeparatorDisplayComponent copy$default(SeparatorDisplayComponent separatorDisplayComponent, int i10, String str, boolean z10, SeparatorSpacingSize separatorSpacingSize, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = separatorDisplayComponent.type;
        }
        if ((i11 & 2) != 0) {
            str = separatorDisplayComponent.f9284id;
        }
        if ((i11 & 4) != 0) {
            z10 = separatorDisplayComponent.divider;
        }
        if ((i11 & 8) != 0) {
            separatorSpacingSize = separatorDisplayComponent.spacing;
        }
        return separatorDisplayComponent.copy(i10, str, z10, separatorSpacingSize);
    }

    public static final /* synthetic */ void write$Self$chat_release(SeparatorDisplayComponent separatorDisplayComponent, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.v(serialDescriptor, 0, separatorDisplayComponent.getType());
        compositeEncoder.x(serialDescriptor, 1, separatorDisplayComponent.getId());
        compositeEncoder.w(serialDescriptor, 2, separatorDisplayComponent.divider);
        compositeEncoder.m(serialDescriptor, 3, SeparatorSpacingSize.Serializer.INSTANCE, separatorDisplayComponent.spacing);
    }

    public final int component1() {
        return this.type;
    }

    @NotNull
    public final String component2() {
        return this.f9284id;
    }

    public final boolean component3() {
        return this.divider;
    }

    @NotNull
    public final SeparatorSpacingSize component4() {
        return this.spacing;
    }

    @NotNull
    public final SeparatorDisplayComponent copy(int i10, @NotNull String id2, boolean z10, @NotNull SeparatorSpacingSize spacing) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(spacing, "spacing");
        return new SeparatorDisplayComponent(i10, id2, z10, spacing);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof SeparatorDisplayComponent) {
            SeparatorDisplayComponent separatorDisplayComponent = (SeparatorDisplayComponent) obj;
            return this.type == separatorDisplayComponent.type && Intrinsics.areEqual(this.f9284id, separatorDisplayComponent.f9284id) && this.divider == separatorDisplayComponent.divider && this.spacing == separatorDisplayComponent.spacing;
        }
        return false;
    }

    public final boolean getDivider() {
        return this.divider;
    }

    @Override // com.discord.chat.bridge.botuikit.Component
    @NotNull
    public String getId() {
        return this.f9284id;
    }

    @NotNull
    public final SeparatorSpacingSize getSpacing() {
        return this.spacing;
    }

    @Override // com.discord.chat.bridge.botuikit.Component
    public int getType() {
        return this.type;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.type) * 31) + this.f9284id.hashCode()) * 31) + Boolean.hashCode(this.divider)) * 31) + this.spacing.hashCode();
    }

    @NotNull
    public String toString() {
        int i10 = this.type;
        String str = this.f9284id;
        boolean z10 = this.divider;
        SeparatorSpacingSize separatorSpacingSize = this.spacing;
        return "SeparatorDisplayComponent(type=" + i10 + ", id=" + str + ", divider=" + z10 + ", spacing=" + separatorSpacingSize + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SeparatorDisplayComponent(int i10, @NotNull String id2, boolean z10, @NotNull SeparatorSpacingSize spacing) {
        super(null);
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(spacing, "spacing");
        this.type = i10;
        this.f9284id = id2;
        this.divider = z10;
        this.spacing = spacing;
    }
}
