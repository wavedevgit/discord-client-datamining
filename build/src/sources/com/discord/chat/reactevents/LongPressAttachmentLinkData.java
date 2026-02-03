package com.discord.chat.reactevents;

import at.m;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import dt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import lr.v;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 #2\u00020\u0001:\u0002\"#B\u001f\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0005\u0010\u0006B/\b\u0010\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u0005\u0010\u000bJ\b\u0010\u000f\u001a\u00020\u0010H\u0016J\u000b\u0010\u0011\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0012\u001a\u0004\u0018\u00010\u0003HÆ\u0003J!\u0010\u0013\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u0014\u001a\u00020\u00152\b\u0010\u0016\u001a\u0004\u0018\u00010\u0017HÖ\u0003J\t\u0010\u0018\u001a\u00020\bHÖ\u0001J\t\u0010\u0019\u001a\u00020\u0003HÖ\u0001J%\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00002\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020 H\u0001¢\u0006\u0002\b!R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\r¨\u0006$"}, d2 = {"Lcom/discord/chat/reactevents/LongPressAttachmentLinkData;", "Lcom/discord/reactevents/ReactEvent;", "attachmentUrl", "", "attachmentName", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getAttachmentUrl", "()Ljava/lang/String;", "getAttachmentName", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class LongPressAttachmentLinkData implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String attachmentName;
    private final String attachmentUrl;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/LongPressAttachmentLinkData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/LongPressAttachmentLinkData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return LongPressAttachmentLinkData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public LongPressAttachmentLinkData() {
        this((String) null, (String) null, 3, (DefaultConstructorMarker) null);
    }

    public static /* synthetic */ LongPressAttachmentLinkData copy$default(LongPressAttachmentLinkData longPressAttachmentLinkData, String str, String str2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = longPressAttachmentLinkData.attachmentUrl;
        }
        if ((i10 & 2) != 0) {
            str2 = longPressAttachmentLinkData.attachmentName;
        }
        return longPressAttachmentLinkData.copy(str, str2);
    }

    public static final /* synthetic */ void write$Self$chat_release(LongPressAttachmentLinkData longPressAttachmentLinkData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        if (compositeEncoder.z(serialDescriptor, 0) || longPressAttachmentLinkData.attachmentUrl != null) {
            compositeEncoder.s(serialDescriptor, 0, n2.f20978a, longPressAttachmentLinkData.attachmentUrl);
        }
        if (compositeEncoder.z(serialDescriptor, 1) || longPressAttachmentLinkData.attachmentName != null) {
            compositeEncoder.s(serialDescriptor, 1, n2.f20978a, longPressAttachmentLinkData.attachmentName);
        }
    }

    public final String component1() {
        return this.attachmentUrl;
    }

    public final String component2() {
        return this.attachmentName;
    }

    @NotNull
    public final LongPressAttachmentLinkData copy(String str, String str2) {
        return new LongPressAttachmentLinkData(str, str2);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof LongPressAttachmentLinkData) {
            LongPressAttachmentLinkData longPressAttachmentLinkData = (LongPressAttachmentLinkData) obj;
            return Intrinsics.areEqual(this.attachmentUrl, longPressAttachmentLinkData.attachmentUrl) && Intrinsics.areEqual(this.attachmentName, longPressAttachmentLinkData.attachmentName);
        }
        return false;
    }

    public final String getAttachmentName() {
        return this.attachmentName;
    }

    public final String getAttachmentUrl() {
        return this.attachmentUrl;
    }

    public int hashCode() {
        String str = this.attachmentUrl;
        int hashCode = (str == null ? 0 : str.hashCode()) * 31;
        String str2 = this.attachmentName;
        return hashCode + (str2 != null ? str2.hashCode() : 0);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return NativeMapExtensionsKt.nativeMapOf(v.a("data", NativeMapExtensionsKt.nativeMapOf(v.a("attachmentUrl", this.attachmentUrl), v.a("attachmentName", this.attachmentName))));
    }

    @NotNull
    public String toString() {
        String str = this.attachmentUrl;
        String str2 = this.attachmentName;
        return "LongPressAttachmentLinkData(attachmentUrl=" + str + ", attachmentName=" + str2 + ")";
    }

    public /* synthetic */ LongPressAttachmentLinkData(int i10, String str, String str2, SerializationConstructorMarker serializationConstructorMarker) {
        if ((i10 & 1) == 0) {
            this.attachmentUrl = null;
        } else {
            this.attachmentUrl = str;
        }
        if ((i10 & 2) == 0) {
            this.attachmentName = null;
        } else {
            this.attachmentName = str2;
        }
    }

    public LongPressAttachmentLinkData(String str, String str2) {
        this.attachmentUrl = str;
        this.attachmentName = str2;
    }

    public /* synthetic */ LongPressAttachmentLinkData(String str, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2);
    }
}
