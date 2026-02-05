package com.discord.chat.bridge.media;

import dt.m;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \"2\u00020\u0001:\u0002!\"B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007B+\b\u0010\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u0006\u0010\u000bJ\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u0012\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0017\u001a\u00020\u0018HÖ\u0001J%\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u00002\u0006\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u001fH\u0001¢\u0006\u0002\b R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000f¨\u0006#"}, d2 = {"Lcom/discord/chat/bridge/media/ContentScanMetadata;", "", "version", "", "flags", "", "<init>", "(IJ)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IIJLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getVersion", "()I", "getFlags", "()J", "component1", "component2", "copy", "equals", "", "other", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ContentScanMetadata {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final long flags;
    private final int version;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/media/ContentScanMetadata$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/media/ContentScanMetadata;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ContentScanMetadata$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ ContentScanMetadata(int i10, int i11, long j10, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, ContentScanMetadata$$serializer.INSTANCE.getDescriptor());
        }
        this.version = i11;
        this.flags = j10;
    }

    public static /* synthetic */ ContentScanMetadata copy$default(ContentScanMetadata contentScanMetadata, int i10, long j10, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = contentScanMetadata.version;
        }
        if ((i11 & 2) != 0) {
            j10 = contentScanMetadata.flags;
        }
        return contentScanMetadata.copy(i10, j10);
    }

    public static final /* synthetic */ void write$Self$chat_release(ContentScanMetadata contentScanMetadata, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.v(serialDescriptor, 0, contentScanMetadata.version);
        compositeEncoder.E(serialDescriptor, 1, contentScanMetadata.flags);
    }

    public final int component1() {
        return this.version;
    }

    public final long component2() {
        return this.flags;
    }

    @NotNull
    public final ContentScanMetadata copy(int i10, long j10) {
        return new ContentScanMetadata(i10, j10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ContentScanMetadata) {
            ContentScanMetadata contentScanMetadata = (ContentScanMetadata) obj;
            return this.version == contentScanMetadata.version && this.flags == contentScanMetadata.flags;
        }
        return false;
    }

    public final long getFlags() {
        return this.flags;
    }

    public final int getVersion() {
        return this.version;
    }

    public int hashCode() {
        return (Integer.hashCode(this.version) * 31) + Long.hashCode(this.flags);
    }

    @NotNull
    public String toString() {
        int i10 = this.version;
        long j10 = this.flags;
        return "ContentScanMetadata(version=" + i10 + ", flags=" + j10 + ")";
    }

    public ContentScanMetadata(int i10, long j10) {
        this.version = i10;
        this.flags = j10;
    }
}
