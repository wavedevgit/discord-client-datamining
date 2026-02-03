package com.discord.chat.bridge.botuikit;

import bt.n2;
import bt.v1;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.List;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@ys.m
@Metadata(d1 = {"\u0000^\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b*\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 S2\u00020\u0001:\u0002RSB\u009b\u0001\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\u0006\u0010\t\u001a\u00020\u0005\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\b\u0012\u0006\u0010\f\u001a\u00020\u0005\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\b\u0012\u0006\u0010\u000e\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\b\u0012\f\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u00120\u0011\u0012\f\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00140\u0011\u0012\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\b¢\u0006\u0004\b\u0016\u0010\u0017B³\u0001\b\u0010\u0012\u0006\u0010\u0018\u001a\u00020\u0019\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\r\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\b\u0012\u000e\u0010\u0010\u001a\n\u0012\u0004\u0012\u00020\u0012\u0018\u00010\u0011\u0012\u000e\u0010\u0013\u001a\n\u0012\u0004\u0012\u00020\u0014\u0018\u00010\u0011\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\u001b¢\u0006\u0004\b\u0016\u0010\u001cJ\u0010\u00103\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b4\u0010\u001eJ\t\u00105\u001a\u00020\u0005HÆ\u0003J\t\u00106\u001a\u00020\u0005HÆ\u0003J\u000b\u00107\u001a\u0004\u0018\u00010\bHÆ\u0003J\t\u00108\u001a\u00020\u0005HÆ\u0003J\u000b\u00109\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000b\u0010:\u001a\u0004\u0018\u00010\bHÆ\u0003J\t\u0010;\u001a\u00020\u0005HÆ\u0003J\u000b\u0010<\u001a\u0004\u0018\u00010\bHÆ\u0003J\t\u0010=\u001a\u00020\u0005HÆ\u0003J\u000b\u0010>\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000f\u0010?\u001a\b\u0012\u0004\u0012\u00020\u00120\u0011HÆ\u0003J\u000f\u0010@\u001a\b\u0012\u0004\u0012\u00020\u00140\u0011HÆ\u0003J\u000b\u0010A\u001a\u0004\u0018\u00010\bHÆ\u0003J´\u0001\u0010B\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b2\b\b\u0002\u0010\t\u001a\u00020\u00052\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\b2\b\b\u0002\u0010\f\u001a\u00020\u00052\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\b2\b\b\u0002\u0010\u000e\u001a\u00020\u00052\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\b2\u000e\b\u0002\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u00120\u00112\u000e\b\u0002\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00140\u00112\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\bHÆ\u0001¢\u0006\u0004\bC\u0010DJ\u0013\u0010E\u001a\u00020F2\b\u0010G\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010H\u001a\u00020\u0019HÖ\u0001J\t\u0010I\u001a\u00020\u0005HÖ\u0001J%\u0010J\u001a\u00020K2\u0006\u0010L\u001a\u00020\u00002\u0006\u0010M\u001a\u00020N2\u0006\u0010O\u001a\u00020PH\u0001¢\u0006\u0002\bQR\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u001f\u001a\u0004\b\u001d\u0010\u001eR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b \u0010!R\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010!R\u0013\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b#\u0010$R\u0011\u0010\t\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b%\u0010!R\u0013\u0010\n\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b&\u0010!R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b'\u0010$R\u0011\u0010\f\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b(\u0010!R\u0013\u0010\r\u001a\u0004\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b)\u0010$R\u0011\u0010\u000e\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b*\u0010!R\u0013\u0010\u000f\u001a\u0004\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b+\u0010$R\u0017\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u00120\u0011¢\u0006\b\n\u0000\u001a\u0004\b,\u0010-R\u0017\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00140\u0011¢\u0006\b\n\u0000\u001a\u0004\b.\u0010-R\u0013\u0010\u0015\u001a\u0004\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b/\u0010$R\u0013\u00100\u001a\u0004\u0018\u00010\u00128F¢\u0006\u0006\u001a\u0004\b1\u00102¨\u0006T"}, d2 = {"Lcom/discord/chat/bridge/botuikit/ContentInventoryEntry;", "", "authorId", "Lcom/discord/primitives/UserId;", "contentId", "", "imageUrl", "imageClickable", "Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;", "avatarUrl", "platformIconUrl", "platformClickable", "userActionDescription", "userClickable", "title", "titleClickable", "subtitles", "", "Lcom/discord/chat/bridge/botuikit/Subtitle;", "gradientColors", "Lcom/discord/chat/bridge/botuikit/GradientColor;", "clickable", "<init>", "(JLjava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;Ljava/util/List;Ljava/util/List;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/primitives/UserId;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;Ljava/util/List;Ljava/util/List;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getAuthorId-re6GcUE", "()J", "J", "getContentId", "()Ljava/lang/String;", "getImageUrl", "getImageClickable", "()Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;", "getAvatarUrl", "getPlatformIconUrl", "getPlatformClickable", "getUserActionDescription", "getUserClickable", "getTitle", "getTitleClickable", "getSubtitles", "()Ljava/util/List;", "getGradientColors", "getClickable", "subtitle", "getSubtitle", "()Lcom/discord/chat/bridge/botuikit/Subtitle;", "component1", "component1-re6GcUE", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "copy", "copy-ruD_DlQ", "(JLjava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;Ljava/util/List;Ljava/util/List;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;)Lcom/discord/chat/bridge/botuikit/ContentInventoryEntry;", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ContentInventoryEntry {
    @NotNull
    private static final Lazy[] $childSerializers;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final long authorId;
    @NotNull
    private final String avatarUrl;
    private final ContentInventoryEntryClickable clickable;
    @NotNull
    private final String contentId;
    @NotNull
    private final List<GradientColor> gradientColors;
    private final ContentInventoryEntryClickable imageClickable;
    @NotNull
    private final String imageUrl;
    private final ContentInventoryEntryClickable platformClickable;
    private final String platformIconUrl;
    @NotNull
    private final List<Subtitle> subtitles;
    @NotNull
    private final String title;
    private final ContentInventoryEntryClickable titleClickable;
    @NotNull
    private final String userActionDescription;
    private final ContentInventoryEntryClickable userClickable;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/ContentInventoryEntry$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/ContentInventoryEntry;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ContentInventoryEntry$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    static {
        jr.o oVar = jr.o.f32182e;
        $childSerializers = new Lazy[]{null, null, null, null, null, null, null, null, null, null, null, jr.l.a(oVar, new Function0() { // from class: com.discord.chat.bridge.botuikit.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_;
                _childSerializers$_anonymous_ = ContentInventoryEntry._childSerializers$_anonymous_();
                return _childSerializers$_anonymous_;
            }
        }), jr.l.a(oVar, new Function0() { // from class: com.discord.chat.bridge.botuikit.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$0;
                _childSerializers$_anonymous_$0 = ContentInventoryEntry._childSerializers$_anonymous_$0();
                return _childSerializers$_anonymous_$0;
            }
        }), null};
    }

    public /* synthetic */ ContentInventoryEntry(int i10, UserId userId, String str, String str2, ContentInventoryEntryClickable contentInventoryEntryClickable, String str3, String str4, ContentInventoryEntryClickable contentInventoryEntryClickable2, String str5, ContentInventoryEntryClickable contentInventoryEntryClickable3, String str6, ContentInventoryEntryClickable contentInventoryEntryClickable4, List list, List list2, ContentInventoryEntryClickable contentInventoryEntryClickable5, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, userId, str, str2, contentInventoryEntryClickable, str3, str4, contentInventoryEntryClickable2, str5, contentInventoryEntryClickable3, str6, contentInventoryEntryClickable4, list, list2, contentInventoryEntryClickable5, serializationConstructorMarker);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new bt.f(Subtitle$$serializer.INSTANCE);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$0() {
        return new bt.f(GradientColor$$serializer.INSTANCE);
    }

    public static final /* synthetic */ void write$Self$chat_release(ContentInventoryEntry contentInventoryEntry, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.m(serialDescriptor, 0, UserId$$serializer.INSTANCE, UserId.m1138boximpl(contentInventoryEntry.authorId));
        compositeEncoder.x(serialDescriptor, 1, contentInventoryEntry.contentId);
        compositeEncoder.x(serialDescriptor, 2, contentInventoryEntry.imageUrl);
        if (compositeEncoder.y(serialDescriptor, 3) || contentInventoryEntry.imageClickable != null) {
            compositeEncoder.B(serialDescriptor, 3, ContentInventoryEntryClickable$$serializer.INSTANCE, contentInventoryEntry.imageClickable);
        }
        compositeEncoder.x(serialDescriptor, 4, contentInventoryEntry.avatarUrl);
        if (compositeEncoder.y(serialDescriptor, 5) || contentInventoryEntry.platformIconUrl != null) {
            compositeEncoder.B(serialDescriptor, 5, n2.f7662a, contentInventoryEntry.platformIconUrl);
        }
        if (compositeEncoder.y(serialDescriptor, 6) || contentInventoryEntry.platformClickable != null) {
            compositeEncoder.B(serialDescriptor, 6, ContentInventoryEntryClickable$$serializer.INSTANCE, contentInventoryEntry.platformClickable);
        }
        compositeEncoder.x(serialDescriptor, 7, contentInventoryEntry.userActionDescription);
        if (compositeEncoder.y(serialDescriptor, 8) || contentInventoryEntry.userClickable != null) {
            compositeEncoder.B(serialDescriptor, 8, ContentInventoryEntryClickable$$serializer.INSTANCE, contentInventoryEntry.userClickable);
        }
        compositeEncoder.x(serialDescriptor, 9, contentInventoryEntry.title);
        if (compositeEncoder.y(serialDescriptor, 10) || contentInventoryEntry.titleClickable != null) {
            compositeEncoder.B(serialDescriptor, 10, ContentInventoryEntryClickable$$serializer.INSTANCE, contentInventoryEntry.titleClickable);
        }
        compositeEncoder.m(serialDescriptor, 11, (ys.o) lazyArr[11].getValue(), contentInventoryEntry.subtitles);
        compositeEncoder.m(serialDescriptor, 12, (ys.o) lazyArr[12].getValue(), contentInventoryEntry.gradientColors);
        if (compositeEncoder.y(serialDescriptor, 13) || contentInventoryEntry.clickable != null) {
            compositeEncoder.B(serialDescriptor, 13, ContentInventoryEntryClickable$$serializer.INSTANCE, contentInventoryEntry.clickable);
        }
    }

    /* renamed from: component1-re6GcUE  reason: not valid java name */
    public final long m269component1re6GcUE() {
        return this.authorId;
    }

    @NotNull
    public final String component10() {
        return this.title;
    }

    public final ContentInventoryEntryClickable component11() {
        return this.titleClickable;
    }

    @NotNull
    public final List<Subtitle> component12() {
        return this.subtitles;
    }

    @NotNull
    public final List<GradientColor> component13() {
        return this.gradientColors;
    }

    public final ContentInventoryEntryClickable component14() {
        return this.clickable;
    }

    @NotNull
    public final String component2() {
        return this.contentId;
    }

    @NotNull
    public final String component3() {
        return this.imageUrl;
    }

    public final ContentInventoryEntryClickable component4() {
        return this.imageClickable;
    }

    @NotNull
    public final String component5() {
        return this.avatarUrl;
    }

    public final String component6() {
        return this.platformIconUrl;
    }

    public final ContentInventoryEntryClickable component7() {
        return this.platformClickable;
    }

    @NotNull
    public final String component8() {
        return this.userActionDescription;
    }

    public final ContentInventoryEntryClickable component9() {
        return this.userClickable;
    }

    @NotNull
    /* renamed from: copy-ruD_DlQ  reason: not valid java name */
    public final ContentInventoryEntry m270copyruD_DlQ(long j10, @NotNull String contentId, @NotNull String imageUrl, ContentInventoryEntryClickable contentInventoryEntryClickable, @NotNull String avatarUrl, String str, ContentInventoryEntryClickable contentInventoryEntryClickable2, @NotNull String userActionDescription, ContentInventoryEntryClickable contentInventoryEntryClickable3, @NotNull String title, ContentInventoryEntryClickable contentInventoryEntryClickable4, @NotNull List<Subtitle> subtitles, @NotNull List<GradientColor> gradientColors, ContentInventoryEntryClickable contentInventoryEntryClickable5) {
        Intrinsics.checkNotNullParameter(contentId, "contentId");
        Intrinsics.checkNotNullParameter(imageUrl, "imageUrl");
        Intrinsics.checkNotNullParameter(avatarUrl, "avatarUrl");
        Intrinsics.checkNotNullParameter(userActionDescription, "userActionDescription");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(subtitles, "subtitles");
        Intrinsics.checkNotNullParameter(gradientColors, "gradientColors");
        return new ContentInventoryEntry(j10, contentId, imageUrl, contentInventoryEntryClickable, avatarUrl, str, contentInventoryEntryClickable2, userActionDescription, contentInventoryEntryClickable3, title, contentInventoryEntryClickable4, subtitles, gradientColors, contentInventoryEntryClickable5, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ContentInventoryEntry) {
            ContentInventoryEntry contentInventoryEntry = (ContentInventoryEntry) obj;
            return UserId.m1142equalsimpl0(this.authorId, contentInventoryEntry.authorId) && Intrinsics.areEqual(this.contentId, contentInventoryEntry.contentId) && Intrinsics.areEqual(this.imageUrl, contentInventoryEntry.imageUrl) && Intrinsics.areEqual(this.imageClickable, contentInventoryEntry.imageClickable) && Intrinsics.areEqual(this.avatarUrl, contentInventoryEntry.avatarUrl) && Intrinsics.areEqual(this.platformIconUrl, contentInventoryEntry.platformIconUrl) && Intrinsics.areEqual(this.platformClickable, contentInventoryEntry.platformClickable) && Intrinsics.areEqual(this.userActionDescription, contentInventoryEntry.userActionDescription) && Intrinsics.areEqual(this.userClickable, contentInventoryEntry.userClickable) && Intrinsics.areEqual(this.title, contentInventoryEntry.title) && Intrinsics.areEqual(this.titleClickable, contentInventoryEntry.titleClickable) && Intrinsics.areEqual(this.subtitles, contentInventoryEntry.subtitles) && Intrinsics.areEqual(this.gradientColors, contentInventoryEntry.gradientColors) && Intrinsics.areEqual(this.clickable, contentInventoryEntry.clickable);
        }
        return false;
    }

    /* renamed from: getAuthorId-re6GcUE  reason: not valid java name */
    public final long m271getAuthorIdre6GcUE() {
        return this.authorId;
    }

    @NotNull
    public final String getAvatarUrl() {
        return this.avatarUrl;
    }

    public final ContentInventoryEntryClickable getClickable() {
        return this.clickable;
    }

    @NotNull
    public final String getContentId() {
        return this.contentId;
    }

    @NotNull
    public final List<GradientColor> getGradientColors() {
        return this.gradientColors;
    }

    public final ContentInventoryEntryClickable getImageClickable() {
        return this.imageClickable;
    }

    @NotNull
    public final String getImageUrl() {
        return this.imageUrl;
    }

    public final ContentInventoryEntryClickable getPlatformClickable() {
        return this.platformClickable;
    }

    public final String getPlatformIconUrl() {
        return this.platformIconUrl;
    }

    public final Subtitle getSubtitle() {
        return (Subtitle) CollectionsKt.q0(this.subtitles, 0);
    }

    @NotNull
    public final List<Subtitle> getSubtitles() {
        return this.subtitles;
    }

    @NotNull
    public final String getTitle() {
        return this.title;
    }

    public final ContentInventoryEntryClickable getTitleClickable() {
        return this.titleClickable;
    }

    @NotNull
    public final String getUserActionDescription() {
        return this.userActionDescription;
    }

    public final ContentInventoryEntryClickable getUserClickable() {
        return this.userClickable;
    }

    public int hashCode() {
        int m1143hashCodeimpl = ((((UserId.m1143hashCodeimpl(this.authorId) * 31) + this.contentId.hashCode()) * 31) + this.imageUrl.hashCode()) * 31;
        ContentInventoryEntryClickable contentInventoryEntryClickable = this.imageClickable;
        int hashCode = (((m1143hashCodeimpl + (contentInventoryEntryClickable == null ? 0 : contentInventoryEntryClickable.hashCode())) * 31) + this.avatarUrl.hashCode()) * 31;
        String str = this.platformIconUrl;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        ContentInventoryEntryClickable contentInventoryEntryClickable2 = this.platformClickable;
        int hashCode3 = (((hashCode2 + (contentInventoryEntryClickable2 == null ? 0 : contentInventoryEntryClickable2.hashCode())) * 31) + this.userActionDescription.hashCode()) * 31;
        ContentInventoryEntryClickable contentInventoryEntryClickable3 = this.userClickable;
        int hashCode4 = (((hashCode3 + (contentInventoryEntryClickable3 == null ? 0 : contentInventoryEntryClickable3.hashCode())) * 31) + this.title.hashCode()) * 31;
        ContentInventoryEntryClickable contentInventoryEntryClickable4 = this.titleClickable;
        int hashCode5 = (((((hashCode4 + (contentInventoryEntryClickable4 == null ? 0 : contentInventoryEntryClickable4.hashCode())) * 31) + this.subtitles.hashCode()) * 31) + this.gradientColors.hashCode()) * 31;
        ContentInventoryEntryClickable contentInventoryEntryClickable5 = this.clickable;
        return hashCode5 + (contentInventoryEntryClickable5 != null ? contentInventoryEntryClickable5.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String m1145toStringimpl = UserId.m1145toStringimpl(this.authorId);
        String str = this.contentId;
        String str2 = this.imageUrl;
        ContentInventoryEntryClickable contentInventoryEntryClickable = this.imageClickable;
        String str3 = this.avatarUrl;
        String str4 = this.platformIconUrl;
        ContentInventoryEntryClickable contentInventoryEntryClickable2 = this.platformClickable;
        String str5 = this.userActionDescription;
        ContentInventoryEntryClickable contentInventoryEntryClickable3 = this.userClickable;
        String str6 = this.title;
        ContentInventoryEntryClickable contentInventoryEntryClickable4 = this.titleClickable;
        List<Subtitle> list = this.subtitles;
        List<GradientColor> list2 = this.gradientColors;
        ContentInventoryEntryClickable contentInventoryEntryClickable5 = this.clickable;
        return "ContentInventoryEntry(authorId=" + m1145toStringimpl + ", contentId=" + str + ", imageUrl=" + str2 + ", imageClickable=" + contentInventoryEntryClickable + ", avatarUrl=" + str3 + ", platformIconUrl=" + str4 + ", platformClickable=" + contentInventoryEntryClickable2 + ", userActionDescription=" + str5 + ", userClickable=" + contentInventoryEntryClickable3 + ", title=" + str6 + ", titleClickable=" + contentInventoryEntryClickable4 + ", subtitles=" + list + ", gradientColors=" + list2 + ", clickable=" + contentInventoryEntryClickable5 + ")";
    }

    public /* synthetic */ ContentInventoryEntry(long j10, String str, String str2, ContentInventoryEntryClickable contentInventoryEntryClickable, String str3, String str4, ContentInventoryEntryClickable contentInventoryEntryClickable2, String str5, ContentInventoryEntryClickable contentInventoryEntryClickable3, String str6, ContentInventoryEntryClickable contentInventoryEntryClickable4, List list, List list2, ContentInventoryEntryClickable contentInventoryEntryClickable5, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, str, str2, contentInventoryEntryClickable, str3, str4, contentInventoryEntryClickable2, str5, contentInventoryEntryClickable3, str6, contentInventoryEntryClickable4, list, list2, contentInventoryEntryClickable5);
    }

    private /* synthetic */ ContentInventoryEntry(int i10, UserId userId, String str, String str2, ContentInventoryEntryClickable contentInventoryEntryClickable, String str3, String str4, ContentInventoryEntryClickable contentInventoryEntryClickable2, String str5, ContentInventoryEntryClickable contentInventoryEntryClickable3, String str6, ContentInventoryEntryClickable contentInventoryEntryClickable4, List list, List list2, ContentInventoryEntryClickable contentInventoryEntryClickable5, SerializationConstructorMarker serializationConstructorMarker) {
        if (6807 != (i10 & 6807)) {
            v1.b(i10, 6807, ContentInventoryEntry$$serializer.INSTANCE.getDescriptor());
        }
        this.authorId = userId.m1147unboximpl();
        this.contentId = str;
        this.imageUrl = str2;
        if ((i10 & 8) == 0) {
            this.imageClickable = null;
        } else {
            this.imageClickable = contentInventoryEntryClickable;
        }
        this.avatarUrl = str3;
        if ((i10 & 32) == 0) {
            this.platformIconUrl = null;
        } else {
            this.platformIconUrl = str4;
        }
        if ((i10 & 64) == 0) {
            this.platformClickable = null;
        } else {
            this.platformClickable = contentInventoryEntryClickable2;
        }
        this.userActionDescription = str5;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.userClickable = null;
        } else {
            this.userClickable = contentInventoryEntryClickable3;
        }
        this.title = str6;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            this.titleClickable = null;
        } else {
            this.titleClickable = contentInventoryEntryClickable4;
        }
        this.subtitles = list;
        this.gradientColors = list2;
        if ((i10 & 8192) == 0) {
            this.clickable = null;
        } else {
            this.clickable = contentInventoryEntryClickable5;
        }
    }

    private ContentInventoryEntry(long j10, String contentId, String imageUrl, ContentInventoryEntryClickable contentInventoryEntryClickable, String avatarUrl, String str, ContentInventoryEntryClickable contentInventoryEntryClickable2, String userActionDescription, ContentInventoryEntryClickable contentInventoryEntryClickable3, String title, ContentInventoryEntryClickable contentInventoryEntryClickable4, List<Subtitle> subtitles, List<GradientColor> gradientColors, ContentInventoryEntryClickable contentInventoryEntryClickable5) {
        Intrinsics.checkNotNullParameter(contentId, "contentId");
        Intrinsics.checkNotNullParameter(imageUrl, "imageUrl");
        Intrinsics.checkNotNullParameter(avatarUrl, "avatarUrl");
        Intrinsics.checkNotNullParameter(userActionDescription, "userActionDescription");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(subtitles, "subtitles");
        Intrinsics.checkNotNullParameter(gradientColors, "gradientColors");
        this.authorId = j10;
        this.contentId = contentId;
        this.imageUrl = imageUrl;
        this.imageClickable = contentInventoryEntryClickable;
        this.avatarUrl = avatarUrl;
        this.platformIconUrl = str;
        this.platformClickable = contentInventoryEntryClickable2;
        this.userActionDescription = userActionDescription;
        this.userClickable = contentInventoryEntryClickable3;
        this.title = title;
        this.titleClickable = contentInventoryEntryClickable4;
        this.subtitles = subtitles;
        this.gradientColors = gradientColors;
        this.clickable = contentInventoryEntryClickable5;
    }

    public /* synthetic */ ContentInventoryEntry(long j10, String str, String str2, ContentInventoryEntryClickable contentInventoryEntryClickable, String str3, String str4, ContentInventoryEntryClickable contentInventoryEntryClickable2, String str5, ContentInventoryEntryClickable contentInventoryEntryClickable3, String str6, ContentInventoryEntryClickable contentInventoryEntryClickable4, List list, List list2, ContentInventoryEntryClickable contentInventoryEntryClickable5, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, str, str2, (i10 & 8) != 0 ? null : contentInventoryEntryClickable, str3, (i10 & 32) != 0 ? null : str4, (i10 & 64) != 0 ? null : contentInventoryEntryClickable2, str5, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : contentInventoryEntryClickable3, str6, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : contentInventoryEntryClickable4, list, list2, (i10 & 8192) != 0 ? null : contentInventoryEntryClickable5, null);
    }
}
