package com.discord.chat.bridge.contentnode;

import com.facebook.react.modules.dialog.AlertFragment;
import com.facebook.react.uimanager.ViewProps;
import dt.v1;
import dt.z0;
import java.util.List;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@at.m
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010 \n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 *2\u00020\u0001:\u0002)*B1\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005\u0012\u0012\u0010\u0006\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00010\u00070\u0007¢\u0006\u0004\b\b\u0010\tBC\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0014\u0010\u0006\u001a\u0010\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00010\u0007\u0018\u00010\u0007\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\b\u0010\u000eJ\u0010\u0010\u0016\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\u0010J\t\u0010\u0017\u001a\u00020\u0005HÆ\u0003J\u0015\u0010\u0018\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00010\u00070\u0007HÆ\u0003J:\u0010\u0019\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\u0014\b\u0002\u0010\u0006\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00010\u00070\u0007HÆ\u0001¢\u0006\u0002\u0010\u001aJ\u0013\u0010\u001b\u001a\u00020\u00052\b\u0010\u001c\u001a\u0004\u0018\u00010\u001dHÖ\u0003J\t\u0010\u001e\u001a\u00020\u000bHÖ\u0001J\t\u0010\u001f\u001a\u00020 HÖ\u0001J%\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020\u00002\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020'H\u0001¢\u0006\u0002\b(R\u0015\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\u0011\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u001d\u0010\u0006\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00010\u00070\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015¨\u0006+"}, d2 = {"Lcom/discord/chat/bridge/contentnode/BulletListContentNode;", "Lcom/discord/chat/bridge/contentnode/ContentNode;", ViewProps.START, "", "ordered", "", AlertFragment.ARG_ITEMS, "", "<init>", "(Ljava/lang/Long;ZLjava/util/List;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/Long;ZLjava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getStart", "()Ljava/lang/Long;", "Ljava/lang/Long;", "getOrdered", "()Z", "getItems", "()Ljava/util/List;", "component1", "component2", "component3", "copy", "(Ljava/lang/Long;ZLjava/util/List;)Lcom/discord/chat/bridge/contentnode/BulletListContentNode;", "equals", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BulletListContentNode extends ContentNode {
    @NotNull
    private final List<List<ContentNode>> items;
    private final boolean ordered;
    private final Long start;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, lr.l.b(lr.o.f37120e, new Function0() { // from class: com.discord.chat.bridge.contentnode.c
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = BulletListContentNode._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    })};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/BulletListContentNode$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/BulletListContentNode;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return BulletListContentNode$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ BulletListContentNode(int i10, Long l10, boolean z10, List list, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (4 != (i10 & 4)) {
            v1.b(i10, 4, BulletListContentNode$$serializer.INSTANCE.getDescriptor());
        }
        if ((i10 & 1) == 0) {
            this.start = null;
        } else {
            this.start = l10;
        }
        if ((i10 & 2) == 0) {
            this.ordered = false;
        } else {
            this.ordered = z10;
        }
        this.items = list;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new dt.f(new dt.f(ContentNodeSerializer.INSTANCE));
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ BulletListContentNode copy$default(BulletListContentNode bulletListContentNode, Long l10, boolean z10, List list, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            l10 = bulletListContentNode.start;
        }
        if ((i10 & 2) != 0) {
            z10 = bulletListContentNode.ordered;
        }
        if ((i10 & 4) != 0) {
            list = bulletListContentNode.items;
        }
        return bulletListContentNode.copy(l10, z10, list);
    }

    public static final /* synthetic */ void write$Self$chat_release(BulletListContentNode bulletListContentNode, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        if (compositeEncoder.z(serialDescriptor, 0) || bulletListContentNode.start != null) {
            compositeEncoder.s(serialDescriptor, 0, z0.f21052a, bulletListContentNode.start);
        }
        if (compositeEncoder.z(serialDescriptor, 1) || bulletListContentNode.ordered) {
            compositeEncoder.x(serialDescriptor, 1, bulletListContentNode.ordered);
        }
        compositeEncoder.D(serialDescriptor, 2, (at.o) lazyArr[2].getValue(), bulletListContentNode.items);
    }

    public final Long component1() {
        return this.start;
    }

    public final boolean component2() {
        return this.ordered;
    }

    @NotNull
    public final List<List<ContentNode>> component3() {
        return this.items;
    }

    @NotNull
    public final BulletListContentNode copy(Long l10, boolean z10, @NotNull List<? extends List<? extends ContentNode>> items) {
        Intrinsics.checkNotNullParameter(items, "items");
        return new BulletListContentNode(l10, z10, items);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof BulletListContentNode) {
            BulletListContentNode bulletListContentNode = (BulletListContentNode) obj;
            return Intrinsics.areEqual(this.start, bulletListContentNode.start) && this.ordered == bulletListContentNode.ordered && Intrinsics.areEqual(this.items, bulletListContentNode.items);
        }
        return false;
    }

    @NotNull
    public final List<List<ContentNode>> getItems() {
        return this.items;
    }

    public final boolean getOrdered() {
        return this.ordered;
    }

    public final Long getStart() {
        return this.start;
    }

    public int hashCode() {
        Long l10 = this.start;
        return ((((l10 == null ? 0 : l10.hashCode()) * 31) + Boolean.hashCode(this.ordered)) * 31) + this.items.hashCode();
    }

    @NotNull
    public String toString() {
        Long l10 = this.start;
        boolean z10 = this.ordered;
        List<List<ContentNode>> list = this.items;
        return "BulletListContentNode(start=" + l10 + ", ordered=" + z10 + ", items=" + list + ")";
    }

    public /* synthetic */ BulletListContentNode(Long l10, boolean z10, List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : l10, (i10 & 2) != 0 ? false : z10, list);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public BulletListContentNode(Long l10, boolean z10, @NotNull List<? extends List<? extends ContentNode>> items) {
        super(null);
        Intrinsics.checkNotNullParameter(items, "items");
        this.start = l10;
        this.ordered = z10;
        this.items = items;
    }
}
