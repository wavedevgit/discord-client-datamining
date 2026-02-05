package com.discord.chat.bridge.botuikit;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.media.UnfurledMediaItem;
import com.discord.chat.bridge.spoiler.SpoilerableData;
import com.discord.misc.utilities.ids.IdUtilsKt;
import com.facebook.react.uimanager.ViewProps;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000Z\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u000f\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0019\n\u0002\u0010\u0006\n\u0002\b\u0016\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 Z2\u00020\u0001:\u0002YZB\u0097\u0001\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\u000b\u001a\u00020\t\u0012\u0006\u0010\f\u001a\u00020\t\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\u000e\u001a\u00020\t\u0012\u0006\u0010\u000f\u001a\u00020\t\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\t\u0012\u0006\u0010\u0011\u001a\u00020\t\u0012\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\u0013\u001a\u00020\u0007\u0012\u0006\u0010\u0014\u001a\u00020\u0007\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\u0016\u0010\u0017BÃ\u0001\b\u0010\u0012\u0006\u0010\u0018\u001a\u00020\u0019\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\u000b\u001a\u00020\t\u0012\u0006\u0010\f\u001a\u00020\t\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\u000e\u001a\u00020\t\u0012\u0006\u0010\u000f\u001a\u00020\t\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\t\u0012\u0006\u0010\u0011\u001a\u00020\t\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\u001b\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\u001c\u001a\u0004\u0018\u00010\u001d¢\u0006\u0004\b\u0016\u0010\u001eJ\t\u0010:\u001a\u00020\u0003HÆ\u0003J\t\u0010;\u001a\u00020\u0005HÆ\u0003J\u000b\u0010<\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\t\u0010=\u001a\u00020\tHÆ\u0003J\u000b\u0010>\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\t\u0010?\u001a\u00020\tHÆ\u0003J\t\u0010@\u001a\u00020\tHÆ\u0003J\u000b\u0010A\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\t\u0010B\u001a\u00020\tHÆ\u0003J\t\u0010C\u001a\u00020\tHÆ\u0003J\u0010\u0010D\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\u0010+J\t\u0010E\u001a\u00020\tHÆ\u0003J\u000b\u0010F\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\t\u0010G\u001a\u00020\u0007HÆ\u0003J\t\u0010H\u001a\u00020\u0007HÆ\u0003J\u000b\u0010I\u001a\u0004\u0018\u00010\u0007HÆ\u0003Jº\u0001\u0010J\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\b\u001a\u00020\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\u000b\u001a\u00020\t2\b\b\u0002\u0010\f\u001a\u00020\t2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\u000e\u001a\u00020\t2\b\b\u0002\u0010\u000f\u001a\u00020\t2\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\t2\b\b\u0002\u0010\u0011\u001a\u00020\t2\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\u0013\u001a\u00020\u00072\b\b\u0002\u0010\u0014\u001a\u00020\u00072\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0007HÆ\u0001¢\u0006\u0002\u0010KJ\u0013\u0010L\u001a\u00020\t2\b\u0010M\u001a\u0004\u0018\u00010NHÖ\u0003J\t\u0010O\u001a\u00020\u0019HÖ\u0001J\t\u0010P\u001a\u00020\u0007HÖ\u0001J%\u0010Q\u001a\u00020R2\u0006\u0010S\u001a\u00020\u00002\u0006\u0010T\u001a\u00020U2\u0006\u0010V\u001a\u00020WH\u0001¢\u0006\u0002\bXR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010 R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\"R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b#\u0010$R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010%R\u0013\u0010\n\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b&\u0010$R\u0011\u0010\u000b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010%R\u0011\u0010\f\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010%R\u0013\u0010\r\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b'\u0010$R\u0011\u0010\u000e\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b(\u0010%R\u0011\u0010\u000f\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b)\u0010%R\u0015\u0010\u0010\u001a\u0004\u0018\u00010\t¢\u0006\n\n\u0002\u0010,\u001a\u0004\b*\u0010+R\u0011\u0010\u0011\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b-\u0010%R\u0013\u0010\u0012\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b.\u0010$R\u0011\u0010\u0013\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b/\u0010$R\u0011\u0010\u0014\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b0\u0010$R\u001e\u0010\u0015\u001a\u0004\u0018\u00010\u00078\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b1\u00102\u001a\u0004\b3\u0010$R\u0016\u0010\u001a\u001a\u0004\u0018\u00010\u0007X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b4\u0010$R\u0016\u0010\u001b\u001a\u0004\u0018\u00010\u0007X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b5\u0010$R\u0013\u00106\u001a\u0004\u0018\u0001078F¢\u0006\u0006\u001a\u0004\b8\u00109¨\u0006["}, d2 = {"Lcom/discord/chat/bridge/botuikit/MediaGalleryItem;", "Lcom/discord/chat/bridge/spoiler/SpoilerableData;", "media", "Lcom/discord/chat/bridge/media/UnfurledMediaItem;", "mediaType", "Lcom/discord/chat/bridge/botuikit/MediaGalleryItemType;", "videoPreviewUrl", "", "isSpoiler", "", "spoilerDescription", "isObscure", "isObscureAwaitingScan", "obscureDescription", "obscureHideControls", "obscureIsOpaque", "verifyAge", "showDescription", "description", "descriptionHint", ViewProps.ACCESSIBILITY_ROLE, "portalIdString", "<init>", "(Lcom/discord/chat/bridge/media/UnfurledMediaItem;Lcom/discord/chat/bridge/botuikit/MediaGalleryItemType;Ljava/lang/String;ZLjava/lang/String;ZZLjava/lang/String;ZZLjava/lang/Boolean;ZLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "spoilerOrNull", "obscureOrNull", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/chat/bridge/media/UnfurledMediaItem;Lcom/discord/chat/bridge/botuikit/MediaGalleryItemType;Ljava/lang/String;ZLjava/lang/String;ZZLjava/lang/String;ZZLjava/lang/Boolean;ZLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getMedia", "()Lcom/discord/chat/bridge/media/UnfurledMediaItem;", "getMediaType", "()Lcom/discord/chat/bridge/botuikit/MediaGalleryItemType;", "getVideoPreviewUrl", "()Ljava/lang/String;", "()Z", "getSpoilerDescription", "getObscureDescription", "getObscureHideControls", "getObscureIsOpaque", "getVerifyAge", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getShowDescription", "getDescription", "getDescriptionHint", "getAccessibilityRole", "getPortalIdString$annotations", "()V", "getPortalIdString", "getSpoilerOrNull", "getObscureOrNull", "portalId", "", "getPortalId", "()Ljava/lang/Double;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "copy", "(Lcom/discord/chat/bridge/media/UnfurledMediaItem;Lcom/discord/chat/bridge/botuikit/MediaGalleryItemType;Ljava/lang/String;ZLjava/lang/String;ZZLjava/lang/String;ZZLjava/lang/Boolean;ZLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/discord/chat/bridge/botuikit/MediaGalleryItem;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@dt.m
@SourceDebugExtension({"SMAP\nMediaGalleryDisplayComponent.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaGalleryDisplayComponent.kt\ncom/discord/chat/bridge/botuikit/MediaGalleryItem\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,58:1\n1#2:59\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MediaGalleryItem implements SpoilerableData {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String accessibilityRole;
    private final String description;
    @NotNull
    private final String descriptionHint;
    private final boolean isObscure;
    private final boolean isObscureAwaitingScan;
    private final boolean isSpoiler;
    @NotNull
    private final UnfurledMediaItem media;
    @NotNull
    private final MediaGalleryItemType mediaType;
    private final String obscureDescription;
    private final boolean obscureHideControls;
    private final boolean obscureIsOpaque;
    private final String obscureOrNull;
    private final String portalIdString;
    private final boolean showDescription;
    private final String spoilerDescription;
    private final String spoilerOrNull;
    private final Boolean verifyAge;
    private final String videoPreviewUrl;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/MediaGalleryItem$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/MediaGalleryItem;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return MediaGalleryItem$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ MediaGalleryItem(int i10, UnfurledMediaItem unfurledMediaItem, MediaGalleryItemType mediaGalleryItemType, String str, boolean z10, String str2, boolean z11, boolean z12, String str3, boolean z13, boolean z14, Boolean bool, boolean z15, String str4, String str5, String str6, String str7, String str8, String str9, SerializationConstructorMarker serializationConstructorMarker) {
        if (61435 != (i10 & 61435)) {
            v1.b(i10, 61435, MediaGalleryItem$$serializer.INSTANCE.getDescriptor());
        }
        this.media = unfurledMediaItem;
        this.mediaType = mediaGalleryItemType;
        if ((i10 & 4) == 0) {
            this.videoPreviewUrl = null;
        } else {
            this.videoPreviewUrl = str;
        }
        this.isSpoiler = z10;
        this.spoilerDescription = str2;
        this.isObscure = z11;
        this.isObscureAwaitingScan = z12;
        this.obscureDescription = str3;
        this.obscureHideControls = z13;
        this.obscureIsOpaque = z14;
        this.verifyAge = bool;
        this.showDescription = z15;
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0) {
            this.description = null;
        } else {
            this.description = str4;
        }
        this.descriptionHint = str5;
        this.accessibilityRole = str6;
        this.portalIdString = str7;
        boolean z16 = true;
        if ((65536 & i10) == 0) {
            this.spoilerOrNull = str2 == null || StringsKt.k0(str2) ? null : str2;
        } else {
            this.spoilerOrNull = str8;
        }
        if ((i10 & 131072) != 0) {
            this.obscureOrNull = str9;
            return;
        }
        if (str3 != null && !StringsKt.k0(str3)) {
            z16 = false;
        }
        this.obscureOrNull = z16 ? null : str3;
    }

    public static /* synthetic */ void getPortalIdString$annotations() {
    }

    /* JADX WARN: Code restructure failed: missing block: B:28:0x00ac, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r4, r6) == false) goto L36;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final /* synthetic */ void write$Self$chat_release(com.discord.chat.bridge.botuikit.MediaGalleryItem r8, kotlinx.serialization.encoding.CompositeEncoder r9, kotlinx.serialization.descriptors.SerialDescriptor r10) {
        /*
            Method dump skipped, instructions count: 222
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.bridge.botuikit.MediaGalleryItem.write$Self$chat_release(com.discord.chat.bridge.botuikit.MediaGalleryItem, kotlinx.serialization.encoding.CompositeEncoder, kotlinx.serialization.descriptors.SerialDescriptor):void");
    }

    @NotNull
    public final UnfurledMediaItem component1() {
        return this.media;
    }

    public final boolean component10() {
        return this.obscureIsOpaque;
    }

    public final Boolean component11() {
        return this.verifyAge;
    }

    public final boolean component12() {
        return this.showDescription;
    }

    public final String component13() {
        return this.description;
    }

    @NotNull
    public final String component14() {
        return this.descriptionHint;
    }

    @NotNull
    public final String component15() {
        return this.accessibilityRole;
    }

    public final String component16() {
        return this.portalIdString;
    }

    @NotNull
    public final MediaGalleryItemType component2() {
        return this.mediaType;
    }

    public final String component3() {
        return this.videoPreviewUrl;
    }

    public final boolean component4() {
        return this.isSpoiler;
    }

    public final String component5() {
        return this.spoilerDescription;
    }

    public final boolean component6() {
        return this.isObscure;
    }

    public final boolean component7() {
        return this.isObscureAwaitingScan;
    }

    public final String component8() {
        return this.obscureDescription;
    }

    public final boolean component9() {
        return this.obscureHideControls;
    }

    @NotNull
    public final MediaGalleryItem copy(@NotNull UnfurledMediaItem media, @NotNull MediaGalleryItemType mediaType, String str, boolean z10, String str2, boolean z11, boolean z12, String str3, boolean z13, boolean z14, Boolean bool, boolean z15, String str4, @NotNull String descriptionHint, @NotNull String accessibilityRole, String str5) {
        Intrinsics.checkNotNullParameter(media, "media");
        Intrinsics.checkNotNullParameter(mediaType, "mediaType");
        Intrinsics.checkNotNullParameter(descriptionHint, "descriptionHint");
        Intrinsics.checkNotNullParameter(accessibilityRole, "accessibilityRole");
        return new MediaGalleryItem(media, mediaType, str, z10, str2, z11, z12, str3, z13, z14, bool, z15, str4, descriptionHint, accessibilityRole, str5);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MediaGalleryItem) {
            MediaGalleryItem mediaGalleryItem = (MediaGalleryItem) obj;
            return Intrinsics.areEqual(this.media, mediaGalleryItem.media) && this.mediaType == mediaGalleryItem.mediaType && Intrinsics.areEqual(this.videoPreviewUrl, mediaGalleryItem.videoPreviewUrl) && this.isSpoiler == mediaGalleryItem.isSpoiler && Intrinsics.areEqual(this.spoilerDescription, mediaGalleryItem.spoilerDescription) && this.isObscure == mediaGalleryItem.isObscure && this.isObscureAwaitingScan == mediaGalleryItem.isObscureAwaitingScan && Intrinsics.areEqual(this.obscureDescription, mediaGalleryItem.obscureDescription) && this.obscureHideControls == mediaGalleryItem.obscureHideControls && this.obscureIsOpaque == mediaGalleryItem.obscureIsOpaque && Intrinsics.areEqual(this.verifyAge, mediaGalleryItem.verifyAge) && this.showDescription == mediaGalleryItem.showDescription && Intrinsics.areEqual(this.description, mediaGalleryItem.description) && Intrinsics.areEqual(this.descriptionHint, mediaGalleryItem.descriptionHint) && Intrinsics.areEqual(this.accessibilityRole, mediaGalleryItem.accessibilityRole) && Intrinsics.areEqual(this.portalIdString, mediaGalleryItem.portalIdString);
        }
        return false;
    }

    @NotNull
    public final String getAccessibilityRole() {
        return this.accessibilityRole;
    }

    public final String getDescription() {
        return this.description;
    }

    @NotNull
    public final String getDescriptionHint() {
        return this.descriptionHint;
    }

    @NotNull
    public final UnfurledMediaItem getMedia() {
        return this.media;
    }

    @NotNull
    public final MediaGalleryItemType getMediaType() {
        return this.mediaType;
    }

    public final String getObscureDescription() {
        return this.obscureDescription;
    }

    public final boolean getObscureHideControls() {
        return this.obscureHideControls;
    }

    public final boolean getObscureIsOpaque() {
        return this.obscureIsOpaque;
    }

    @Override // com.discord.chat.bridge.spoiler.SpoilerableData
    public String getObscureOrNull() {
        return this.obscureOrNull;
    }

    public final Double getPortalId() {
        String str = this.portalIdString;
        if (str != null) {
            return Double.valueOf(IdUtilsKt.convertToId(str));
        }
        return null;
    }

    public final String getPortalIdString() {
        return this.portalIdString;
    }

    public final boolean getShowDescription() {
        return this.showDescription;
    }

    public final String getSpoilerDescription() {
        return this.spoilerDescription;
    }

    @Override // com.discord.chat.bridge.spoiler.SpoilerableData
    public String getSpoilerOrNull() {
        return this.spoilerOrNull;
    }

    public final Boolean getVerifyAge() {
        return this.verifyAge;
    }

    public final String getVideoPreviewUrl() {
        return this.videoPreviewUrl;
    }

    public int hashCode() {
        int hashCode = ((this.media.hashCode() * 31) + this.mediaType.hashCode()) * 31;
        String str = this.videoPreviewUrl;
        int hashCode2 = (((hashCode + (str == null ? 0 : str.hashCode())) * 31) + Boolean.hashCode(this.isSpoiler)) * 31;
        String str2 = this.spoilerDescription;
        int hashCode3 = (((((hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31) + Boolean.hashCode(this.isObscure)) * 31) + Boolean.hashCode(this.isObscureAwaitingScan)) * 31;
        String str3 = this.obscureDescription;
        int hashCode4 = (((((hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31) + Boolean.hashCode(this.obscureHideControls)) * 31) + Boolean.hashCode(this.obscureIsOpaque)) * 31;
        Boolean bool = this.verifyAge;
        int hashCode5 = (((hashCode4 + (bool == null ? 0 : bool.hashCode())) * 31) + Boolean.hashCode(this.showDescription)) * 31;
        String str4 = this.description;
        int hashCode6 = (((((hashCode5 + (str4 == null ? 0 : str4.hashCode())) * 31) + this.descriptionHint.hashCode()) * 31) + this.accessibilityRole.hashCode()) * 31;
        String str5 = this.portalIdString;
        return hashCode6 + (str5 != null ? str5.hashCode() : 0);
    }

    public final boolean isObscure() {
        return this.isObscure;
    }

    public final boolean isObscureAwaitingScan() {
        return this.isObscureAwaitingScan;
    }

    public final boolean isSpoiler() {
        return this.isSpoiler;
    }

    @NotNull
    public String toString() {
        UnfurledMediaItem unfurledMediaItem = this.media;
        MediaGalleryItemType mediaGalleryItemType = this.mediaType;
        String str = this.videoPreviewUrl;
        boolean z10 = this.isSpoiler;
        String str2 = this.spoilerDescription;
        boolean z11 = this.isObscure;
        boolean z12 = this.isObscureAwaitingScan;
        String str3 = this.obscureDescription;
        boolean z13 = this.obscureHideControls;
        boolean z14 = this.obscureIsOpaque;
        Boolean bool = this.verifyAge;
        boolean z15 = this.showDescription;
        String str4 = this.description;
        String str5 = this.descriptionHint;
        String str6 = this.accessibilityRole;
        String str7 = this.portalIdString;
        return "MediaGalleryItem(media=" + unfurledMediaItem + ", mediaType=" + mediaGalleryItemType + ", videoPreviewUrl=" + str + ", isSpoiler=" + z10 + ", spoilerDescription=" + str2 + ", isObscure=" + z11 + ", isObscureAwaitingScan=" + z12 + ", obscureDescription=" + str3 + ", obscureHideControls=" + z13 + ", obscureIsOpaque=" + z14 + ", verifyAge=" + bool + ", showDescription=" + z15 + ", description=" + str4 + ", descriptionHint=" + str5 + ", accessibilityRole=" + str6 + ", portalIdString=" + str7 + ")";
    }

    public MediaGalleryItem(@NotNull UnfurledMediaItem media, @NotNull MediaGalleryItemType mediaType, String str, boolean z10, String str2, boolean z11, boolean z12, String str3, boolean z13, boolean z14, Boolean bool, boolean z15, String str4, @NotNull String descriptionHint, @NotNull String accessibilityRole, String str5) {
        Intrinsics.checkNotNullParameter(media, "media");
        Intrinsics.checkNotNullParameter(mediaType, "mediaType");
        Intrinsics.checkNotNullParameter(descriptionHint, "descriptionHint");
        Intrinsics.checkNotNullParameter(accessibilityRole, "accessibilityRole");
        this.media = media;
        this.mediaType = mediaType;
        this.videoPreviewUrl = str;
        this.isSpoiler = z10;
        this.spoilerDescription = str2;
        this.isObscure = z11;
        this.isObscureAwaitingScan = z12;
        this.obscureDescription = str3;
        this.obscureHideControls = z13;
        this.obscureIsOpaque = z14;
        this.verifyAge = bool;
        this.showDescription = z15;
        this.description = str4;
        this.descriptionHint = descriptionHint;
        this.accessibilityRole = accessibilityRole;
        this.portalIdString = str5;
        boolean z16 = true;
        this.spoilerOrNull = str2 == null || StringsKt.k0(str2) ? null : str2;
        if (str3 != null && !StringsKt.k0(str3)) {
            z16 = false;
        }
        this.obscureOrNull = z16 ? null : str3;
    }

    public /* synthetic */ MediaGalleryItem(UnfurledMediaItem unfurledMediaItem, MediaGalleryItemType mediaGalleryItemType, String str, boolean z10, String str2, boolean z11, boolean z12, String str3, boolean z13, boolean z14, Boolean bool, boolean z15, String str4, String str5, String str6, String str7, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(unfurledMediaItem, mediaGalleryItemType, (i10 & 4) != 0 ? null : str, z10, str2, z11, z12, str3, z13, z14, bool, z15, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : str4, str5, str6, str7);
    }
}
