package com.discord.chat.bridge.sticker;

import at.p0;
import at.v1;
import com.discord.chat.bridge.sticker.StickerFormatType;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.m;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u001e\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 ?2\u00020\u0001:\u0002>?BW\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\u0006\u0010\t\u001a\u00020\u0007\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000b\u0012\u0006\u0010\r\u001a\u00020\u000b\u0012\u0006\u0010\u000e\u001a\u00020\u0007¢\u0006\u0004\b\u000f\u0010\u0010Bq\b\u0010\u0012\u0006\u0010\u0011\u001a\u00020\u000b\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u000b\u0012\u0006\u0010\r\u001a\u00020\u000b\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013¢\u0006\u0004\b\u000f\u0010\u0014J\t\u0010&\u001a\u00020\u0003HÆ\u0003J\t\u0010'\u001a\u00020\u0005HÆ\u0003J\t\u0010(\u001a\u00020\u0007HÆ\u0003J\t\u0010)\u001a\u00020\u0007HÆ\u0003J\t\u0010*\u001a\u00020\u0007HÆ\u0003J\u0010\u0010+\u001a\u0004\u0018\u00010\u000bHÆ\u0003¢\u0006\u0002\u0010 J\u0010\u0010,\u001a\u0004\u0018\u00010\u000bHÆ\u0003¢\u0006\u0002\u0010 J\t\u0010-\u001a\u00020\u000bHÆ\u0003J\t\u0010.\u001a\u00020\u0007HÆ\u0003Jl\u0010/\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\u00072\b\b\u0002\u0010\t\u001a\u00020\u00072\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000b2\b\b\u0002\u0010\r\u001a\u00020\u000b2\b\b\u0002\u0010\u000e\u001a\u00020\u0007HÆ\u0001¢\u0006\u0002\u00100J\u0013\u00101\u001a\u0002022\b\u00103\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u00104\u001a\u00020\u000bHÖ\u0001J\t\u00105\u001a\u00020\u0007HÖ\u0001J%\u00106\u001a\u0002072\u0006\u00108\u001a\u00020\u00002\u0006\u00109\u001a\u00020:2\u0006\u0010;\u001a\u00020<H\u0001¢\u0006\u0002\b=R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0004\u001a\u00020\u00058\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u0017\u0010\u0018\u001a\u0004\b\u0019\u0010\u001aR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0011\u0010\b\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001cR\u0011\u0010\t\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001cR\u0015\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\n\n\u0002\u0010!\u001a\u0004\b\u001f\u0010 R\u0015\u0010\f\u001a\u0004\u0018\u00010\u000b¢\u0006\n\n\u0002\u0010!\u001a\u0004\b\"\u0010 R\u0011\u0010\r\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b#\u0010$R\u0011\u0010\u000e\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b%\u0010\u001c¨\u0006@"}, d2 = {"Lcom/discord/chat/bridge/sticker/Sticker;", "", StackTraceHelper.ID_KEY, "", "formatType", "Lcom/discord/chat/bridge/sticker/StickerFormatType;", StackTraceHelper.NAME_KEY, "", "asset", "url", "width", "", "height", "renderMode", ViewProps.ACCESSIBILITY_LABEL, "<init>", "(JLcom/discord/chat/bridge/sticker/StickerFormatType;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;ILjava/lang/String;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IJLcom/discord/chat/bridge/sticker/StickerFormatType;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;ILjava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getId", "()J", "getFormatType$annotations", "()V", "getFormatType", "()Lcom/discord/chat/bridge/sticker/StickerFormatType;", "getName", "()Ljava/lang/String;", "getAsset", "getUrl", "getWidth", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getHeight", "getRenderMode", "()I", "getAccessibilityLabel", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "copy", "(JLcom/discord/chat/bridge/sticker/StickerFormatType;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;ILjava/lang/String;)Lcom/discord/chat/bridge/sticker/Sticker;", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Sticker {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String accessibilityLabel;
    @NotNull
    private final String asset;
    @NotNull
    private final StickerFormatType formatType;
    private final Integer height;

    /* renamed from: id  reason: collision with root package name */
    private final long f9682id;
    @NotNull
    private final String name;
    private final int renderMode;
    @NotNull
    private final String url;
    private final Integer width;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/sticker/Sticker$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/sticker/Sticker;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return Sticker$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ Sticker(int i10, long j10, StickerFormatType stickerFormatType, String str, String str2, String str3, Integer num, Integer num2, int i11, String str4, SerializationConstructorMarker serializationConstructorMarker) {
        if (415 != (i10 & 415)) {
            v1.b(i10, 415, Sticker$$serializer.INSTANCE.getDescriptor());
        }
        this.f9682id = j10;
        this.formatType = stickerFormatType;
        this.name = str;
        this.asset = str2;
        this.url = str3;
        if ((i10 & 32) == 0) {
            this.width = null;
        } else {
            this.width = num;
        }
        if ((i10 & 64) == 0) {
            this.height = null;
        } else {
            this.height = num2;
        }
        this.renderMode = i11;
        this.accessibilityLabel = str4;
    }

    public static /* synthetic */ Sticker copy$default(Sticker sticker, long j10, StickerFormatType stickerFormatType, String str, String str2, String str3, Integer num, Integer num2, int i10, String str4, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            j10 = sticker.f9682id;
        }
        long j11 = j10;
        if ((i11 & 2) != 0) {
            stickerFormatType = sticker.formatType;
        }
        StickerFormatType stickerFormatType2 = stickerFormatType;
        if ((i11 & 4) != 0) {
            str = sticker.name;
        }
        return sticker.copy(j11, stickerFormatType2, str, (i11 & 8) != 0 ? sticker.asset : str2, (i11 & 16) != 0 ? sticker.url : str3, (i11 & 32) != 0 ? sticker.width : num, (i11 & 64) != 0 ? sticker.height : num2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? sticker.renderMode : i10, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? sticker.accessibilityLabel : str4);
    }

    public static /* synthetic */ void getFormatType$annotations() {
    }

    public static final /* synthetic */ void write$Self$chat_release(Sticker sticker, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.E(serialDescriptor, 0, sticker.f9682id);
        compositeEncoder.j(serialDescriptor, 1, StickerFormatType.StickerFormatTypeSerializer.INSTANCE, sticker.formatType);
        compositeEncoder.y(serialDescriptor, 2, sticker.name);
        compositeEncoder.y(serialDescriptor, 3, sticker.asset);
        compositeEncoder.y(serialDescriptor, 4, sticker.url);
        if (compositeEncoder.A(serialDescriptor, 5) || sticker.width != null) {
            compositeEncoder.z(serialDescriptor, 5, p0.f6864a, sticker.width);
        }
        if (compositeEncoder.A(serialDescriptor, 6) || sticker.height != null) {
            compositeEncoder.z(serialDescriptor, 6, p0.f6864a, sticker.height);
        }
        compositeEncoder.w(serialDescriptor, 7, sticker.renderMode);
        compositeEncoder.y(serialDescriptor, 8, sticker.accessibilityLabel);
    }

    public final long component1() {
        return this.f9682id;
    }

    @NotNull
    public final StickerFormatType component2() {
        return this.formatType;
    }

    @NotNull
    public final String component3() {
        return this.name;
    }

    @NotNull
    public final String component4() {
        return this.asset;
    }

    @NotNull
    public final String component5() {
        return this.url;
    }

    public final Integer component6() {
        return this.width;
    }

    public final Integer component7() {
        return this.height;
    }

    public final int component8() {
        return this.renderMode;
    }

    @NotNull
    public final String component9() {
        return this.accessibilityLabel;
    }

    @NotNull
    public final Sticker copy(long j10, @NotNull StickerFormatType formatType, @NotNull String name, @NotNull String asset, @NotNull String url, Integer num, Integer num2, int i10, @NotNull String accessibilityLabel) {
        Intrinsics.checkNotNullParameter(formatType, "formatType");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(asset, "asset");
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(accessibilityLabel, "accessibilityLabel");
        return new Sticker(j10, formatType, name, asset, url, num, num2, i10, accessibilityLabel);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Sticker) {
            Sticker sticker = (Sticker) obj;
            return this.f9682id == sticker.f9682id && this.formatType == sticker.formatType && Intrinsics.areEqual(this.name, sticker.name) && Intrinsics.areEqual(this.asset, sticker.asset) && Intrinsics.areEqual(this.url, sticker.url) && Intrinsics.areEqual(this.width, sticker.width) && Intrinsics.areEqual(this.height, sticker.height) && this.renderMode == sticker.renderMode && Intrinsics.areEqual(this.accessibilityLabel, sticker.accessibilityLabel);
        }
        return false;
    }

    @NotNull
    public final String getAccessibilityLabel() {
        return this.accessibilityLabel;
    }

    @NotNull
    public final String getAsset() {
        return this.asset;
    }

    @NotNull
    public final StickerFormatType getFormatType() {
        return this.formatType;
    }

    public final Integer getHeight() {
        return this.height;
    }

    public final long getId() {
        return this.f9682id;
    }

    @NotNull
    public final String getName() {
        return this.name;
    }

    public final int getRenderMode() {
        return this.renderMode;
    }

    @NotNull
    public final String getUrl() {
        return this.url;
    }

    public final Integer getWidth() {
        return this.width;
    }

    public int hashCode() {
        int hashCode = ((((((((Long.hashCode(this.f9682id) * 31) + this.formatType.hashCode()) * 31) + this.name.hashCode()) * 31) + this.asset.hashCode()) * 31) + this.url.hashCode()) * 31;
        Integer num = this.width;
        int hashCode2 = (hashCode + (num == null ? 0 : num.hashCode())) * 31;
        Integer num2 = this.height;
        return ((((hashCode2 + (num2 != null ? num2.hashCode() : 0)) * 31) + Integer.hashCode(this.renderMode)) * 31) + this.accessibilityLabel.hashCode();
    }

    @NotNull
    public String toString() {
        long j10 = this.f9682id;
        StickerFormatType stickerFormatType = this.formatType;
        String str = this.name;
        String str2 = this.asset;
        String str3 = this.url;
        Integer num = this.width;
        Integer num2 = this.height;
        int i10 = this.renderMode;
        String str4 = this.accessibilityLabel;
        return "Sticker(id=" + j10 + ", formatType=" + stickerFormatType + ", name=" + str + ", asset=" + str2 + ", url=" + str3 + ", width=" + num + ", height=" + num2 + ", renderMode=" + i10 + ", accessibilityLabel=" + str4 + ")";
    }

    public Sticker(long j10, @NotNull StickerFormatType formatType, @NotNull String name, @NotNull String asset, @NotNull String url, Integer num, Integer num2, int i10, @NotNull String accessibilityLabel) {
        Intrinsics.checkNotNullParameter(formatType, "formatType");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(asset, "asset");
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(accessibilityLabel, "accessibilityLabel");
        this.f9682id = j10;
        this.formatType = formatType;
        this.name = name;
        this.asset = asset;
        this.url = url;
        this.width = num;
        this.height = num2;
        this.renderMode = i10;
        this.accessibilityLabel = accessibilityLabel;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ Sticker(long r2, com.discord.chat.bridge.sticker.StickerFormatType r4, java.lang.String r5, java.lang.String r6, java.lang.String r7, java.lang.Integer r8, java.lang.Integer r9, int r10, java.lang.String r11, int r12, kotlin.jvm.internal.DefaultConstructorMarker r13) {
        /*
            r1 = this;
            r13 = r12 & 32
            r0 = 0
            if (r13 == 0) goto L6
            r8 = r0
        L6:
            r12 = r12 & 64
            if (r12 == 0) goto L15
            r12 = r11
            r11 = r10
            r10 = r0
        Ld:
            r9 = r8
            r8 = r7
            r7 = r6
            r6 = r5
            r5 = r4
            r3 = r2
            r2 = r1
            goto L19
        L15:
            r12 = r11
            r11 = r10
            r10 = r9
            goto Ld
        L19:
            r2.<init>(r3, r5, r6, r7, r8, r9, r10, r11, r12)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.bridge.sticker.Sticker.<init>(long, com.discord.chat.bridge.sticker.StickerFormatType, java.lang.String, java.lang.String, java.lang.String, java.lang.Integer, java.lang.Integer, int, java.lang.String, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
