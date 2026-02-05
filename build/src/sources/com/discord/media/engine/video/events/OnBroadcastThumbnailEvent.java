package com.discord.media.engine.video.events;

import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import dt.m;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 \u001f2\u00020\u0001:\u0002\u001e\u001fB\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005B%\b\u0010\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\u0004\u0010\nJ\t\u0010\u000e\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\u000f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0010\u001a\u00020\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013HÖ\u0003J\t\u0010\u0014\u001a\u00020\u0007HÖ\u0001J\t\u0010\u0015\u001a\u00020\u0003HÖ\u0001J%\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u00002\u0006\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u001cH\u0001¢\u0006\u0002\b\u001dR\u001a\u0010\u0002\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000b\u0010\f\"\u0004\b\r\u0010\u0005¨\u0006 "}, d2 = {"Lcom/discord/media/engine/video/events/OnBroadcastThumbnailEvent;", "Lcom/discord/reactevents/ReactEvent;", "imgdata", "", "<init>", "(Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getImgdata", "()Ljava/lang/String;", "setImgdata", "component1", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$media_engine_release", "$serializer", "Companion", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class OnBroadcastThumbnailEvent implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private String imgdata;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/media/engine/video/events/OnBroadcastThumbnailEvent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/media/engine/video/events/OnBroadcastThumbnailEvent;", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return OnBroadcastThumbnailEvent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ OnBroadcastThumbnailEvent(int i10, String str, SerializationConstructorMarker serializationConstructorMarker) {
        if (1 != (i10 & 1)) {
            v1.b(i10, 1, OnBroadcastThumbnailEvent$$serializer.INSTANCE.getDescriptor());
        }
        this.imgdata = str;
    }

    public static /* synthetic */ OnBroadcastThumbnailEvent copy$default(OnBroadcastThumbnailEvent onBroadcastThumbnailEvent, String str, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = onBroadcastThumbnailEvent.imgdata;
        }
        return onBroadcastThumbnailEvent.copy(str);
    }

    @NotNull
    public final String component1() {
        return this.imgdata;
    }

    @NotNull
    public final OnBroadcastThumbnailEvent copy(@NotNull String imgdata) {
        Intrinsics.checkNotNullParameter(imgdata, "imgdata");
        return new OnBroadcastThumbnailEvent(imgdata);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof OnBroadcastThumbnailEvent) && Intrinsics.areEqual(this.imgdata, ((OnBroadcastThumbnailEvent) obj).imgdata);
    }

    @NotNull
    public final String getImgdata() {
        return this.imgdata;
    }

    public int hashCode() {
        return this.imgdata.hashCode();
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    public final void setImgdata(@NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "<set-?>");
        this.imgdata = str;
    }

    @NotNull
    public String toString() {
        String str = this.imgdata;
        return "OnBroadcastThumbnailEvent(imgdata=" + str + ")";
    }

    public OnBroadcastThumbnailEvent(@NotNull String imgdata) {
        Intrinsics.checkNotNullParameter(imgdata, "imgdata");
        this.imgdata = imgdata;
    }
}
