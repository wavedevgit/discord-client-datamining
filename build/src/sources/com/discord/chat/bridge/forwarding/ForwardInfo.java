package com.discord.chat.bridge.forwarding;

import bt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import ys.m;
@m
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \"2\u00020\u0001:\u0002!\"B\u001b\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007B-\b\u0010\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u0006\u0010\u000bJ\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u0011\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u001f\u0010\u0012\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001J\u0013\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0017\u001a\u00020\u0018HÖ\u0001J%\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u00002\u0006\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u001fH\u0001¢\u0006\u0002\b R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000f¨\u0006#"}, d2 = {"Lcom/discord/chat/bridge/forwarding/ForwardInfo;", "", "snapshotIndex", "", "footerInfo", "Lcom/discord/chat/bridge/forwarding/ForwardFooterInfo;", "<init>", "(ILcom/discord/chat/bridge/forwarding/ForwardFooterInfo;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILcom/discord/chat/bridge/forwarding/ForwardFooterInfo;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getSnapshotIndex", "()I", "getFooterInfo", "()Lcom/discord/chat/bridge/forwarding/ForwardFooterInfo;", "component1", "component2", "copy", "equals", "", "other", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ForwardInfo {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final ForwardFooterInfo footerInfo;
    private final int snapshotIndex;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/forwarding/ForwardInfo$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/forwarding/ForwardInfo;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ForwardInfo$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ ForwardInfo(int i10, int i11, ForwardFooterInfo forwardFooterInfo, SerializationConstructorMarker serializationConstructorMarker) {
        if (1 != (i10 & 1)) {
            v1.b(i10, 1, ForwardInfo$$serializer.INSTANCE.getDescriptor());
        }
        this.snapshotIndex = i11;
        if ((i10 & 2) == 0) {
            this.footerInfo = null;
        } else {
            this.footerInfo = forwardFooterInfo;
        }
    }

    public static /* synthetic */ ForwardInfo copy$default(ForwardInfo forwardInfo, int i10, ForwardFooterInfo forwardFooterInfo, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = forwardInfo.snapshotIndex;
        }
        if ((i11 & 2) != 0) {
            forwardFooterInfo = forwardInfo.footerInfo;
        }
        return forwardInfo.copy(i10, forwardFooterInfo);
    }

    public static final /* synthetic */ void write$Self$chat_release(ForwardInfo forwardInfo, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.v(serialDescriptor, 0, forwardInfo.snapshotIndex);
        if (compositeEncoder.y(serialDescriptor, 1) || forwardInfo.footerInfo != null) {
            compositeEncoder.B(serialDescriptor, 1, ForwardFooterInfo$$serializer.INSTANCE, forwardInfo.footerInfo);
        }
    }

    public final int component1() {
        return this.snapshotIndex;
    }

    public final ForwardFooterInfo component2() {
        return this.footerInfo;
    }

    @NotNull
    public final ForwardInfo copy(int i10, ForwardFooterInfo forwardFooterInfo) {
        return new ForwardInfo(i10, forwardFooterInfo);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ForwardInfo) {
            ForwardInfo forwardInfo = (ForwardInfo) obj;
            return this.snapshotIndex == forwardInfo.snapshotIndex && Intrinsics.areEqual(this.footerInfo, forwardInfo.footerInfo);
        }
        return false;
    }

    public final ForwardFooterInfo getFooterInfo() {
        return this.footerInfo;
    }

    public final int getSnapshotIndex() {
        return this.snapshotIndex;
    }

    public int hashCode() {
        int hashCode = Integer.hashCode(this.snapshotIndex) * 31;
        ForwardFooterInfo forwardFooterInfo = this.footerInfo;
        return hashCode + (forwardFooterInfo == null ? 0 : forwardFooterInfo.hashCode());
    }

    @NotNull
    public String toString() {
        int i10 = this.snapshotIndex;
        ForwardFooterInfo forwardFooterInfo = this.footerInfo;
        return "ForwardInfo(snapshotIndex=" + i10 + ", footerInfo=" + forwardFooterInfo + ")";
    }

    public ForwardInfo(int i10, ForwardFooterInfo forwardFooterInfo) {
        this.snapshotIndex = i10;
        this.footerInfo = forwardFooterInfo;
    }

    public /* synthetic */ ForwardInfo(int i10, ForwardFooterInfo forwardFooterInfo, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, (i11 & 2) != 0 ? null : forwardFooterInfo);
    }
}
