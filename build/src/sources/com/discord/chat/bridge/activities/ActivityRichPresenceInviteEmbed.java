package com.discord.chat.bridge.activities;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.activity_invites.RGBAColorModel;
import com.discord.activity_invites.RGBAColorModel$$serializer;
import com.discord.chat.bridge.activities.ActivityRichPresenceInviteEmbed;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.bridge.structurabletext.StructurableTextSerializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ft.b;
import ft.m;
import java.util.List;
import jt.f;
import jt.h;
import jt.n2;
import jt.p0;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
import qr.l;
import qr.o;
@m
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b9\b\u0087\b\u0018\u0000 \\2\u00020\u0001:\u0002]\\Bñ\u0001\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0004\u0012\u0010\b\u0002\u0010\n\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0010\u0012\u0010\b\u0002\u0010\u0012\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0004\u0012\u0010\b\u0002\u0010\u0014\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\u0018¢\u0006\u0004\b\u001a\u0010\u001bBá\u0001\b\u0010\u0012\u0006\u0010\u001c\u001a\u00020\u0010\u0012\b\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0002\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0004\u0012\u000e\u0010\n\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0002\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u0002\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0002\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0010\u0012\u000e\u0010\u0012\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\b\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0004\u0012\u000e\u0010\u0014\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\b\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\u0018\u0012\b\u0010\u001e\u001a\u0004\u0018\u00010\u001d¢\u0006\u0004\b\u001a\u0010\u001fJ'\u0010(\u001a\u00020%2\u0006\u0010 \u001a\u00020\u00002\u0006\u0010\"\u001a\u00020!2\u0006\u0010$\u001a\u00020#H\u0001¢\u0006\u0004\b&\u0010'J\u0012\u0010)\u001a\u0004\u0018\u00010\u0002HÆ\u0003¢\u0006\u0004\b)\u0010*J\u0012\u0010+\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0004\b+\u0010,J\u0012\u0010-\u001a\u0004\u0018\u00010\u0002HÆ\u0003¢\u0006\u0004\b-\u0010*J\u0012\u0010.\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0004\b.\u0010,J\u0018\u0010/\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\bHÆ\u0003¢\u0006\u0004\b/\u00100J\u0012\u00101\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0004\b1\u0010,J\u0012\u00102\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0004\b2\u0010,J\u0012\u00103\u001a\u0004\u0018\u00010\u0002HÆ\u0003¢\u0006\u0004\b3\u0010*J\u0012\u00104\u001a\u0004\u0018\u00010\u0002HÆ\u0003¢\u0006\u0004\b4\u0010*J\u0012\u00105\u001a\u0004\u0018\u00010\u0002HÆ\u0003¢\u0006\u0004\b5\u0010*J\u0012\u00106\u001a\u0004\u0018\u00010\u0010HÆ\u0003¢\u0006\u0004\b6\u00107J\u0018\u00108\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\bHÆ\u0003¢\u0006\u0004\b8\u00100J\u0012\u00109\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0004\b9\u0010,J\u0018\u0010:\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\bHÆ\u0003¢\u0006\u0004\b:\u00100J\u0012\u0010;\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0004\b;\u0010,J\u0012\u0010<\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0004\b<\u0010,J\u0012\u0010=\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0004\b=\u0010,J\u0012\u0010>\u001a\u0004\u0018\u00010\u0018HÆ\u0003¢\u0006\u0004\b>\u0010?Jú\u0001\u0010@\u001a\u00020\u00002\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u00022\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00022\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00042\u0010\b\u0002\u0010\n\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u00022\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u00022\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u00022\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u00102\u0010\b\u0002\u0010\u0012\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\b2\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u00042\u0010\b\u0002\u0010\u0014\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\b2\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\u0018HÆ\u0001¢\u0006\u0004\b@\u0010AJ\u0010\u0010B\u001a\u00020\u0004HÖ\u0001¢\u0006\u0004\bB\u0010,J\u0010\u0010C\u001a\u00020\u0010HÖ\u0001¢\u0006\u0004\bC\u0010DJ\u001a\u0010F\u001a\u00020\u00022\b\u0010E\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\bF\u0010GR\u0019\u0010\u0003\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u0003\u0010H\u001a\u0004\bI\u0010*R\u0019\u0010\u0005\u001a\u0004\u0018\u00010\u00048\u0006¢\u0006\f\n\u0004\b\u0005\u0010J\u001a\u0004\bK\u0010,R\u0019\u0010\u0006\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u0006\u0010H\u001a\u0004\bL\u0010*R\u0019\u0010\u0007\u001a\u0004\u0018\u00010\u00048\u0006¢\u0006\f\n\u0004\b\u0007\u0010J\u001a\u0004\bM\u0010,R\u001f\u0010\n\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b8\u0006¢\u0006\f\n\u0004\b\n\u0010N\u001a\u0004\bO\u00100R\u0019\u0010\u000b\u001a\u0004\u0018\u00010\u00048\u0006¢\u0006\f\n\u0004\b\u000b\u0010J\u001a\u0004\bP\u0010,R\u0019\u0010\f\u001a\u0004\u0018\u00010\u00048\u0006¢\u0006\f\n\u0004\b\f\u0010J\u001a\u0004\bQ\u0010,R\u0019\u0010\r\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\r\u0010H\u001a\u0004\b\r\u0010*R\u0019\u0010\u000e\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u000e\u0010H\u001a\u0004\b\u000e\u0010*R\u0019\u0010\u000f\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u000f\u0010H\u001a\u0004\b\u000f\u0010*R\u0019\u0010\u0011\u001a\u0004\u0018\u00010\u00108\u0006¢\u0006\f\n\u0004\b\u0011\u0010R\u001a\u0004\bS\u00107R\u001f\u0010\u0012\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\b8\u0006¢\u0006\f\n\u0004\b\u0012\u0010N\u001a\u0004\bT\u00100R\u0019\u0010\u0013\u001a\u0004\u0018\u00010\u00048\u0006¢\u0006\f\n\u0004\b\u0013\u0010J\u001a\u0004\bU\u0010,R\u001f\u0010\u0014\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\b8\u0006¢\u0006\f\n\u0004\b\u0014\u0010N\u001a\u0004\bV\u00100R\u0019\u0010\u0015\u001a\u0004\u0018\u00010\u00048\u0006¢\u0006\f\n\u0004\b\u0015\u0010J\u001a\u0004\bW\u0010,R\u0019\u0010\u0016\u001a\u0004\u0018\u00010\u00048\u0006¢\u0006\f\n\u0004\b\u0016\u0010J\u001a\u0004\bX\u0010,R\u0019\u0010\u0017\u001a\u0004\u0018\u00010\u00048\u0006¢\u0006\f\n\u0004\b\u0017\u0010J\u001a\u0004\bY\u0010,R\u0019\u0010\u0019\u001a\u0004\u0018\u00010\u00188\u0006¢\u0006\f\n\u0004\b\u0019\u0010Z\u001a\u0004\b[\u0010?¨\u0006^"}, d2 = {"Lcom/discord/chat/bridge/activities/ActivityRichPresenceInviteEmbed;", "", "", "ctaButtonEnabled", "", "ctaButtonText", "ctaButtonIsLoading", "footerLabel", "", "Lcom/discord/activity_invites/RGBAColorModel;", "gradientColors", "headerText", "iconSrc", "isActive", "isPlatformSupported", "isSpotifyParty", "", "maxPartySize", "partyMemberAvatarURIs", "partySizeText", "platformIconKeys", "coverImageUrl", "subtitle", "title", "Lcom/discord/chat/bridge/structurabletext/StructurableText;", "hiddenEmbedMessageContent", "<init>", "(Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/util/List;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/util/List;Ljava/lang/String;Ljava/util/List;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/structurabletext/StructurableText;)V", "seen0", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "serializationConstructorMarker", "(ILjava/lang/Boolean;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/util/List;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/util/List;Ljava/lang/String;Ljava/util/List;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/structurabletext/StructurableText;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "self", "Lkotlinx/serialization/encoding/CompositeEncoder;", "output", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "serialDesc", "", "write$Self$chat_release", "(Lcom/discord/chat/bridge/activities/ActivityRichPresenceInviteEmbed;Lkotlinx/serialization/encoding/CompositeEncoder;Lkotlinx/serialization/descriptors/SerialDescriptor;)V", "write$Self", "component1", "()Ljava/lang/Boolean;", "component2", "()Ljava/lang/String;", "component3", "component4", "component5", "()Ljava/util/List;", "component6", "component7", "component8", "component9", "component10", "component11", "()Ljava/lang/Integer;", "component12", "component13", "component14", "component15", "component16", "component17", "component18", "()Lcom/discord/chat/bridge/structurabletext/StructurableText;", "copy", "(Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/util/List;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/util/List;Ljava/lang/String;Ljava/util/List;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/structurabletext/StructurableText;)Lcom/discord/chat/bridge/activities/ActivityRichPresenceInviteEmbed;", "toString", "hashCode", "()I", "other", "equals", "(Ljava/lang/Object;)Z", "Ljava/lang/Boolean;", "getCtaButtonEnabled", "Ljava/lang/String;", "getCtaButtonText", "getCtaButtonIsLoading", "getFooterLabel", "Ljava/util/List;", "getGradientColors", "getHeaderText", "getIconSrc", "Ljava/lang/Integer;", "getMaxPartySize", "getPartyMemberAvatarURIs", "getPartySizeText", "getPlatformIconKeys", "getCoverImageUrl", "getSubtitle", "getTitle", "Lcom/discord/chat/bridge/structurabletext/StructurableText;", "getHiddenEmbedMessageContent", "Companion", "$serializer", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ActivityRichPresenceInviteEmbed {
    @NotNull
    private static final Lazy[] $childSerializers;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String coverImageUrl;
    private final Boolean ctaButtonEnabled;
    private final Boolean ctaButtonIsLoading;
    private final String ctaButtonText;
    private final String footerLabel;
    private final List<RGBAColorModel> gradientColors;
    private final String headerText;
    private final StructurableText hiddenEmbedMessageContent;
    private final String iconSrc;
    private final Boolean isActive;
    private final Boolean isPlatformSupported;
    private final Boolean isSpotifyParty;
    private final Integer maxPartySize;
    private final List<String> partyMemberAvatarURIs;
    private final String partySizeText;
    private final List<String> platformIconKeys;
    private final String subtitle;
    private final String title;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/activities/ActivityRichPresenceInviteEmbed$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/activities/ActivityRichPresenceInviteEmbed;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ActivityRichPresenceInviteEmbed$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    static {
        o oVar = o.f48044e;
        $childSerializers = new Lazy[]{null, null, null, null, l.b(oVar, new Function0() { // from class: k6.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_;
                _childSerializers$_anonymous_ = ActivityRichPresenceInviteEmbed._childSerializers$_anonymous_();
                return _childSerializers$_anonymous_;
            }
        }), null, null, null, null, null, null, l.b(oVar, new Function0() { // from class: k6.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$0;
                _childSerializers$_anonymous_$0 = ActivityRichPresenceInviteEmbed._childSerializers$_anonymous_$0();
                return _childSerializers$_anonymous_$0;
            }
        }), null, l.b(oVar, new Function0() { // from class: k6.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$1;
                _childSerializers$_anonymous_$1 = ActivityRichPresenceInviteEmbed._childSerializers$_anonymous_$1();
                return _childSerializers$_anonymous_$1;
            }
        }), null, null, null, null};
    }

    public ActivityRichPresenceInviteEmbed() {
        this((Boolean) null, (String) null, (Boolean) null, (String) null, (List) null, (String) null, (String) null, (Boolean) null, (Boolean) null, (Boolean) null, (Integer) null, (List) null, (String) null, (List) null, (String) null, (String) null, (String) null, (StructurableText) null, 262143, (DefaultConstructorMarker) null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new f(new b(Reflection.getOrCreateKotlinClass(RGBAColorModel.class), RGBAColorModel$$serializer.INSTANCE, new KSerializer[0]));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$0() {
        return new f(n2.f31041a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$1() {
        return new f(n2.f31041a);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ ActivityRichPresenceInviteEmbed copy$default(ActivityRichPresenceInviteEmbed activityRichPresenceInviteEmbed, Boolean bool, String str, Boolean bool2, String str2, List list, String str3, String str4, Boolean bool3, Boolean bool4, Boolean bool5, Integer num, List list2, String str5, List list3, String str6, String str7, String str8, StructurableText structurableText, int i10, Object obj) {
        StructurableText structurableText2;
        String str9;
        Boolean bool6 = (i10 & 1) != 0 ? activityRichPresenceInviteEmbed.ctaButtonEnabled : bool;
        String str10 = (i10 & 2) != 0 ? activityRichPresenceInviteEmbed.ctaButtonText : str;
        Boolean bool7 = (i10 & 4) != 0 ? activityRichPresenceInviteEmbed.ctaButtonIsLoading : bool2;
        String str11 = (i10 & 8) != 0 ? activityRichPresenceInviteEmbed.footerLabel : str2;
        List<RGBAColorModel> list4 = (i10 & 16) != 0 ? activityRichPresenceInviteEmbed.gradientColors : list;
        String str12 = (i10 & 32) != 0 ? activityRichPresenceInviteEmbed.headerText : str3;
        String str13 = (i10 & 64) != 0 ? activityRichPresenceInviteEmbed.iconSrc : str4;
        Boolean bool8 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? activityRichPresenceInviteEmbed.isActive : bool3;
        Boolean bool9 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? activityRichPresenceInviteEmbed.isPlatformSupported : bool4;
        Boolean bool10 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? activityRichPresenceInviteEmbed.isSpotifyParty : bool5;
        Integer num2 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? activityRichPresenceInviteEmbed.maxPartySize : num;
        List<String> list5 = (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? activityRichPresenceInviteEmbed.partyMemberAvatarURIs : list2;
        String str14 = (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? activityRichPresenceInviteEmbed.partySizeText : str5;
        List<String> list6 = (i10 & 8192) != 0 ? activityRichPresenceInviteEmbed.platformIconKeys : list3;
        Boolean bool11 = bool6;
        String str15 = (i10 & 16384) != 0 ? activityRichPresenceInviteEmbed.coverImageUrl : str6;
        String str16 = (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? activityRichPresenceInviteEmbed.subtitle : str7;
        String str17 = (i10 & 65536) != 0 ? activityRichPresenceInviteEmbed.title : str8;
        if ((i10 & 131072) != 0) {
            str9 = str17;
            structurableText2 = activityRichPresenceInviteEmbed.hiddenEmbedMessageContent;
        } else {
            structurableText2 = structurableText;
            str9 = str17;
        }
        return activityRichPresenceInviteEmbed.copy(bool11, str10, bool7, str11, list4, str12, str13, bool8, bool9, bool10, num2, list5, str14, list6, str15, str16, str9, structurableText2);
    }

    public static final /* synthetic */ void write$Self$chat_release(ActivityRichPresenceInviteEmbed activityRichPresenceInviteEmbed, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        if (compositeEncoder.A(serialDescriptor, 0) || !Intrinsics.areEqual(activityRichPresenceInviteEmbed.ctaButtonEnabled, Boolean.FALSE)) {
            compositeEncoder.l(serialDescriptor, 0, h.f31005a, activityRichPresenceInviteEmbed.ctaButtonEnabled);
        }
        if (compositeEncoder.A(serialDescriptor, 1) || activityRichPresenceInviteEmbed.ctaButtonText != null) {
            compositeEncoder.l(serialDescriptor, 1, n2.f31041a, activityRichPresenceInviteEmbed.ctaButtonText);
        }
        if (compositeEncoder.A(serialDescriptor, 2) || !Intrinsics.areEqual(activityRichPresenceInviteEmbed.ctaButtonIsLoading, Boolean.FALSE)) {
            compositeEncoder.l(serialDescriptor, 2, h.f31005a, activityRichPresenceInviteEmbed.ctaButtonIsLoading);
        }
        if (compositeEncoder.A(serialDescriptor, 3) || activityRichPresenceInviteEmbed.footerLabel != null) {
            compositeEncoder.l(serialDescriptor, 3, n2.f31041a, activityRichPresenceInviteEmbed.footerLabel);
        }
        if (compositeEncoder.A(serialDescriptor, 4) || activityRichPresenceInviteEmbed.gradientColors != null) {
            compositeEncoder.l(serialDescriptor, 4, (ft.o) lazyArr[4].getValue(), activityRichPresenceInviteEmbed.gradientColors);
        }
        if (compositeEncoder.A(serialDescriptor, 5) || activityRichPresenceInviteEmbed.headerText != null) {
            compositeEncoder.l(serialDescriptor, 5, n2.f31041a, activityRichPresenceInviteEmbed.headerText);
        }
        if (compositeEncoder.A(serialDescriptor, 6) || activityRichPresenceInviteEmbed.iconSrc != null) {
            compositeEncoder.l(serialDescriptor, 6, n2.f31041a, activityRichPresenceInviteEmbed.iconSrc);
        }
        if (compositeEncoder.A(serialDescriptor, 7) || activityRichPresenceInviteEmbed.isActive != null) {
            compositeEncoder.l(serialDescriptor, 7, h.f31005a, activityRichPresenceInviteEmbed.isActive);
        }
        if (compositeEncoder.A(serialDescriptor, 8) || !Intrinsics.areEqual(activityRichPresenceInviteEmbed.isPlatformSupported, Boolean.FALSE)) {
            compositeEncoder.l(serialDescriptor, 8, h.f31005a, activityRichPresenceInviteEmbed.isPlatformSupported);
        }
        if (compositeEncoder.A(serialDescriptor, 9) || !Intrinsics.areEqual(activityRichPresenceInviteEmbed.isSpotifyParty, Boolean.FALSE)) {
            compositeEncoder.l(serialDescriptor, 9, h.f31005a, activityRichPresenceInviteEmbed.isSpotifyParty);
        }
        if (compositeEncoder.A(serialDescriptor, 10) || activityRichPresenceInviteEmbed.maxPartySize != null) {
            compositeEncoder.l(serialDescriptor, 10, p0.f31057a, activityRichPresenceInviteEmbed.maxPartySize);
        }
        if (compositeEncoder.A(serialDescriptor, 11) || activityRichPresenceInviteEmbed.partyMemberAvatarURIs != null) {
            compositeEncoder.l(serialDescriptor, 11, (ft.o) lazyArr[11].getValue(), activityRichPresenceInviteEmbed.partyMemberAvatarURIs);
        }
        if (compositeEncoder.A(serialDescriptor, 12) || activityRichPresenceInviteEmbed.partySizeText != null) {
            compositeEncoder.l(serialDescriptor, 12, n2.f31041a, activityRichPresenceInviteEmbed.partySizeText);
        }
        if (compositeEncoder.A(serialDescriptor, 13) || activityRichPresenceInviteEmbed.platformIconKeys != null) {
            compositeEncoder.l(serialDescriptor, 13, (ft.o) lazyArr[13].getValue(), activityRichPresenceInviteEmbed.platformIconKeys);
        }
        if (compositeEncoder.A(serialDescriptor, 14) || activityRichPresenceInviteEmbed.coverImageUrl != null) {
            compositeEncoder.l(serialDescriptor, 14, n2.f31041a, activityRichPresenceInviteEmbed.coverImageUrl);
        }
        if (compositeEncoder.A(serialDescriptor, 15) || activityRichPresenceInviteEmbed.subtitle != null) {
            compositeEncoder.l(serialDescriptor, 15, n2.f31041a, activityRichPresenceInviteEmbed.subtitle);
        }
        if (compositeEncoder.A(serialDescriptor, 16) || activityRichPresenceInviteEmbed.title != null) {
            compositeEncoder.l(serialDescriptor, 16, n2.f31041a, activityRichPresenceInviteEmbed.title);
        }
        if (compositeEncoder.A(serialDescriptor, 17) || activityRichPresenceInviteEmbed.hiddenEmbedMessageContent != null) {
            compositeEncoder.l(serialDescriptor, 17, StructurableTextSerializer.INSTANCE, activityRichPresenceInviteEmbed.hiddenEmbedMessageContent);
        }
    }

    public final Boolean component1() {
        return this.ctaButtonEnabled;
    }

    public final Boolean component10() {
        return this.isSpotifyParty;
    }

    public final Integer component11() {
        return this.maxPartySize;
    }

    public final List<String> component12() {
        return this.partyMemberAvatarURIs;
    }

    public final String component13() {
        return this.partySizeText;
    }

    public final List<String> component14() {
        return this.platformIconKeys;
    }

    public final String component15() {
        return this.coverImageUrl;
    }

    public final String component16() {
        return this.subtitle;
    }

    public final String component17() {
        return this.title;
    }

    public final StructurableText component18() {
        return this.hiddenEmbedMessageContent;
    }

    public final String component2() {
        return this.ctaButtonText;
    }

    public final Boolean component3() {
        return this.ctaButtonIsLoading;
    }

    public final String component4() {
        return this.footerLabel;
    }

    public final List<RGBAColorModel> component5() {
        return this.gradientColors;
    }

    public final String component6() {
        return this.headerText;
    }

    public final String component7() {
        return this.iconSrc;
    }

    public final Boolean component8() {
        return this.isActive;
    }

    public final Boolean component9() {
        return this.isPlatformSupported;
    }

    @NotNull
    public final ActivityRichPresenceInviteEmbed copy(Boolean bool, String str, Boolean bool2, String str2, List<RGBAColorModel> list, String str3, String str4, Boolean bool3, Boolean bool4, Boolean bool5, Integer num, List<String> list2, String str5, List<String> list3, String str6, String str7, String str8, StructurableText structurableText) {
        return new ActivityRichPresenceInviteEmbed(bool, str, bool2, str2, list, str3, str4, bool3, bool4, bool5, num, list2, str5, list3, str6, str7, str8, structurableText);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ActivityRichPresenceInviteEmbed) {
            ActivityRichPresenceInviteEmbed activityRichPresenceInviteEmbed = (ActivityRichPresenceInviteEmbed) obj;
            return Intrinsics.areEqual(this.ctaButtonEnabled, activityRichPresenceInviteEmbed.ctaButtonEnabled) && Intrinsics.areEqual(this.ctaButtonText, activityRichPresenceInviteEmbed.ctaButtonText) && Intrinsics.areEqual(this.ctaButtonIsLoading, activityRichPresenceInviteEmbed.ctaButtonIsLoading) && Intrinsics.areEqual(this.footerLabel, activityRichPresenceInviteEmbed.footerLabel) && Intrinsics.areEqual(this.gradientColors, activityRichPresenceInviteEmbed.gradientColors) && Intrinsics.areEqual(this.headerText, activityRichPresenceInviteEmbed.headerText) && Intrinsics.areEqual(this.iconSrc, activityRichPresenceInviteEmbed.iconSrc) && Intrinsics.areEqual(this.isActive, activityRichPresenceInviteEmbed.isActive) && Intrinsics.areEqual(this.isPlatformSupported, activityRichPresenceInviteEmbed.isPlatformSupported) && Intrinsics.areEqual(this.isSpotifyParty, activityRichPresenceInviteEmbed.isSpotifyParty) && Intrinsics.areEqual(this.maxPartySize, activityRichPresenceInviteEmbed.maxPartySize) && Intrinsics.areEqual(this.partyMemberAvatarURIs, activityRichPresenceInviteEmbed.partyMemberAvatarURIs) && Intrinsics.areEqual(this.partySizeText, activityRichPresenceInviteEmbed.partySizeText) && Intrinsics.areEqual(this.platformIconKeys, activityRichPresenceInviteEmbed.platformIconKeys) && Intrinsics.areEqual(this.coverImageUrl, activityRichPresenceInviteEmbed.coverImageUrl) && Intrinsics.areEqual(this.subtitle, activityRichPresenceInviteEmbed.subtitle) && Intrinsics.areEqual(this.title, activityRichPresenceInviteEmbed.title) && Intrinsics.areEqual(this.hiddenEmbedMessageContent, activityRichPresenceInviteEmbed.hiddenEmbedMessageContent);
        }
        return false;
    }

    public final String getCoverImageUrl() {
        return this.coverImageUrl;
    }

    public final Boolean getCtaButtonEnabled() {
        return this.ctaButtonEnabled;
    }

    public final Boolean getCtaButtonIsLoading() {
        return this.ctaButtonIsLoading;
    }

    public final String getCtaButtonText() {
        return this.ctaButtonText;
    }

    public final String getFooterLabel() {
        return this.footerLabel;
    }

    public final List<RGBAColorModel> getGradientColors() {
        return this.gradientColors;
    }

    public final String getHeaderText() {
        return this.headerText;
    }

    public final StructurableText getHiddenEmbedMessageContent() {
        return this.hiddenEmbedMessageContent;
    }

    public final String getIconSrc() {
        return this.iconSrc;
    }

    public final Integer getMaxPartySize() {
        return this.maxPartySize;
    }

    public final List<String> getPartyMemberAvatarURIs() {
        return this.partyMemberAvatarURIs;
    }

    public final String getPartySizeText() {
        return this.partySizeText;
    }

    public final List<String> getPlatformIconKeys() {
        return this.platformIconKeys;
    }

    public final String getSubtitle() {
        return this.subtitle;
    }

    public final String getTitle() {
        return this.title;
    }

    public int hashCode() {
        Boolean bool = this.ctaButtonEnabled;
        int hashCode = (bool == null ? 0 : bool.hashCode()) * 31;
        String str = this.ctaButtonText;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        Boolean bool2 = this.ctaButtonIsLoading;
        int hashCode3 = (hashCode2 + (bool2 == null ? 0 : bool2.hashCode())) * 31;
        String str2 = this.footerLabel;
        int hashCode4 = (hashCode3 + (str2 == null ? 0 : str2.hashCode())) * 31;
        List<RGBAColorModel> list = this.gradientColors;
        int hashCode5 = (hashCode4 + (list == null ? 0 : list.hashCode())) * 31;
        String str3 = this.headerText;
        int hashCode6 = (hashCode5 + (str3 == null ? 0 : str3.hashCode())) * 31;
        String str4 = this.iconSrc;
        int hashCode7 = (hashCode6 + (str4 == null ? 0 : str4.hashCode())) * 31;
        Boolean bool3 = this.isActive;
        int hashCode8 = (hashCode7 + (bool3 == null ? 0 : bool3.hashCode())) * 31;
        Boolean bool4 = this.isPlatformSupported;
        int hashCode9 = (hashCode8 + (bool4 == null ? 0 : bool4.hashCode())) * 31;
        Boolean bool5 = this.isSpotifyParty;
        int hashCode10 = (hashCode9 + (bool5 == null ? 0 : bool5.hashCode())) * 31;
        Integer num = this.maxPartySize;
        int hashCode11 = (hashCode10 + (num == null ? 0 : num.hashCode())) * 31;
        List<String> list2 = this.partyMemberAvatarURIs;
        int hashCode12 = (hashCode11 + (list2 == null ? 0 : list2.hashCode())) * 31;
        String str5 = this.partySizeText;
        int hashCode13 = (hashCode12 + (str5 == null ? 0 : str5.hashCode())) * 31;
        List<String> list3 = this.platformIconKeys;
        int hashCode14 = (hashCode13 + (list3 == null ? 0 : list3.hashCode())) * 31;
        String str6 = this.coverImageUrl;
        int hashCode15 = (hashCode14 + (str6 == null ? 0 : str6.hashCode())) * 31;
        String str7 = this.subtitle;
        int hashCode16 = (hashCode15 + (str7 == null ? 0 : str7.hashCode())) * 31;
        String str8 = this.title;
        int hashCode17 = (hashCode16 + (str8 == null ? 0 : str8.hashCode())) * 31;
        StructurableText structurableText = this.hiddenEmbedMessageContent;
        return hashCode17 + (structurableText != null ? structurableText.hashCode() : 0);
    }

    public final Boolean isActive() {
        return this.isActive;
    }

    public final Boolean isPlatformSupported() {
        return this.isPlatformSupported;
    }

    public final Boolean isSpotifyParty() {
        return this.isSpotifyParty;
    }

    @NotNull
    public String toString() {
        Boolean bool = this.ctaButtonEnabled;
        String str = this.ctaButtonText;
        Boolean bool2 = this.ctaButtonIsLoading;
        String str2 = this.footerLabel;
        List<RGBAColorModel> list = this.gradientColors;
        String str3 = this.headerText;
        String str4 = this.iconSrc;
        Boolean bool3 = this.isActive;
        Boolean bool4 = this.isPlatformSupported;
        Boolean bool5 = this.isSpotifyParty;
        Integer num = this.maxPartySize;
        List<String> list2 = this.partyMemberAvatarURIs;
        String str5 = this.partySizeText;
        List<String> list3 = this.platformIconKeys;
        String str6 = this.coverImageUrl;
        String str7 = this.subtitle;
        String str8 = this.title;
        StructurableText structurableText = this.hiddenEmbedMessageContent;
        return "ActivityRichPresenceInviteEmbed(ctaButtonEnabled=" + bool + ", ctaButtonText=" + str + ", ctaButtonIsLoading=" + bool2 + ", footerLabel=" + str2 + ", gradientColors=" + list + ", headerText=" + str3 + ", iconSrc=" + str4 + ", isActive=" + bool3 + ", isPlatformSupported=" + bool4 + ", isSpotifyParty=" + bool5 + ", maxPartySize=" + num + ", partyMemberAvatarURIs=" + list2 + ", partySizeText=" + str5 + ", platformIconKeys=" + list3 + ", coverImageUrl=" + str6 + ", subtitle=" + str7 + ", title=" + str8 + ", hiddenEmbedMessageContent=" + structurableText + ")";
    }

    public /* synthetic */ ActivityRichPresenceInviteEmbed(int i10, Boolean bool, String str, Boolean bool2, String str2, List list, String str3, String str4, Boolean bool3, Boolean bool4, Boolean bool5, Integer num, List list2, String str5, List list3, String str6, String str7, String str8, StructurableText structurableText, SerializationConstructorMarker serializationConstructorMarker) {
        this.ctaButtonEnabled = (i10 & 1) == 0 ? Boolean.FALSE : bool;
        if ((i10 & 2) == 0) {
            this.ctaButtonText = null;
        } else {
            this.ctaButtonText = str;
        }
        if ((i10 & 4) == 0) {
            this.ctaButtonIsLoading = Boolean.FALSE;
        } else {
            this.ctaButtonIsLoading = bool2;
        }
        if ((i10 & 8) == 0) {
            this.footerLabel = null;
        } else {
            this.footerLabel = str2;
        }
        if ((i10 & 16) == 0) {
            this.gradientColors = null;
        } else {
            this.gradientColors = list;
        }
        if ((i10 & 32) == 0) {
            this.headerText = null;
        } else {
            this.headerText = str3;
        }
        if ((i10 & 64) == 0) {
            this.iconSrc = null;
        } else {
            this.iconSrc = str4;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.isActive = null;
        } else {
            this.isActive = bool3;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.isPlatformSupported = Boolean.FALSE;
        } else {
            this.isPlatformSupported = bool4;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.isSpotifyParty = Boolean.FALSE;
        } else {
            this.isSpotifyParty = bool5;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            this.maxPartySize = null;
        } else {
            this.maxPartySize = num;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
            this.partyMemberAvatarURIs = null;
        } else {
            this.partyMemberAvatarURIs = list2;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0) {
            this.partySizeText = null;
        } else {
            this.partySizeText = str5;
        }
        if ((i10 & 8192) == 0) {
            this.platformIconKeys = null;
        } else {
            this.platformIconKeys = list3;
        }
        if ((i10 & 16384) == 0) {
            this.coverImageUrl = null;
        } else {
            this.coverImageUrl = str6;
        }
        if ((32768 & i10) == 0) {
            this.subtitle = null;
        } else {
            this.subtitle = str7;
        }
        if ((65536 & i10) == 0) {
            this.title = null;
        } else {
            this.title = str8;
        }
        if ((i10 & 131072) == 0) {
            this.hiddenEmbedMessageContent = null;
        } else {
            this.hiddenEmbedMessageContent = structurableText;
        }
    }

    public ActivityRichPresenceInviteEmbed(Boolean bool, String str, Boolean bool2, String str2, List<RGBAColorModel> list, String str3, String str4, Boolean bool3, Boolean bool4, Boolean bool5, Integer num, List<String> list2, String str5, List<String> list3, String str6, String str7, String str8, StructurableText structurableText) {
        this.ctaButtonEnabled = bool;
        this.ctaButtonText = str;
        this.ctaButtonIsLoading = bool2;
        this.footerLabel = str2;
        this.gradientColors = list;
        this.headerText = str3;
        this.iconSrc = str4;
        this.isActive = bool3;
        this.isPlatformSupported = bool4;
        this.isSpotifyParty = bool5;
        this.maxPartySize = num;
        this.partyMemberAvatarURIs = list2;
        this.partySizeText = str5;
        this.platformIconKeys = list3;
        this.coverImageUrl = str6;
        this.subtitle = str7;
        this.title = str8;
        this.hiddenEmbedMessageContent = structurableText;
    }

    public /* synthetic */ ActivityRichPresenceInviteEmbed(Boolean bool, String str, Boolean bool2, String str2, List list, String str3, String str4, Boolean bool3, Boolean bool4, Boolean bool5, Integer num, List list2, String str5, List list3, String str6, String str7, String str8, StructurableText structurableText, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? Boolean.FALSE : bool, (i10 & 2) != 0 ? null : str, (i10 & 4) != 0 ? Boolean.FALSE : bool2, (i10 & 8) != 0 ? null : str2, (i10 & 16) != 0 ? null : list, (i10 & 32) != 0 ? null : str3, (i10 & 64) != 0 ? null : str4, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : bool3, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? Boolean.FALSE : bool4, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? Boolean.FALSE : bool5, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : num, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : list2, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : str5, (i10 & 8192) != 0 ? null : list3, (i10 & 16384) != 0 ? null : str6, (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? null : str7, (i10 & 65536) != 0 ? null : str8, (i10 & 131072) != 0 ? null : structurableText);
    }
}
