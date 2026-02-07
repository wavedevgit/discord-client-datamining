package com.discord.notifications.api;

import com.discord.notifications.api.NotificationMessage;
import ft.m;
import java.util.List;
import jt.f;
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
import kotlinx.serialization.json.JsonObject;
import kt.y;
import org.jetbrains.annotations.NotNull;
import qr.l;
import qr.o;
@m
@Metadata(d1 = {"\u0000b\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001f\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 A2\u00020\u0001:\u0002@AB_\u0012\u000e\b\u0002\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\u000e\b\u0002\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00060\u0003\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t\u0012\u000e\b\u0002\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u000b0\u0003\u0012\u000e\b\u0002\u0010\f\u001a\b\u0012\u0004\u0012\u00020\r0\u0003¢\u0006\u0004\b\u000e\u0010\u000fBo\b\u0010\u0012\u0006\u0010\u0010\u001a\u00020\u0011\u0012\u000e\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\u000e\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\u0006\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\u000e\u0010\n\u001a\n\u0012\u0004\u0012\u00020\u000b\u0018\u00010\u0003\u0012\u000e\u0010\f\u001a\n\u0012\u0004\u0012\u00020\r\u0018\u00010\u0003\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013¢\u0006\u0004\b\u000e\u0010\u0014J\u000f\u0010+\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\u000b\u0010,\u001a\u0004\u0018\u00010\u0006HÆ\u0003J\u000f\u0010-\u001a\b\u0012\u0004\u0012\u00020\u00060\u0003HÆ\u0003J\u000b\u0010.\u001a\u0004\u0018\u00010\tHÆ\u0003J\u000f\u0010/\u001a\b\u0012\u0004\u0012\u00020\u000b0\u0003HÆ\u0003J\u000f\u00100\u001a\b\u0012\u0004\u0012\u00020\r0\u0003HÆ\u0003Ja\u00101\u001a\u00020\u00002\u000e\b\u0002\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00062\u000e\b\u0002\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00060\u00032\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t2\u000e\b\u0002\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u000b0\u00032\u000e\b\u0002\u0010\f\u001a\b\u0012\u0004\u0012\u00020\r0\u0003HÆ\u0001J\u0013\u00102\u001a\u0002032\b\u00104\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u00105\u001a\u00020\u0011HÖ\u0001J\t\u00106\u001a\u000207HÖ\u0001J%\u00108\u001a\u0002092\u0006\u0010:\u001a\u00020\u00002\u0006\u0010;\u001a\u00020<2\u0006\u0010=\u001a\u00020>H\u0001¢\u0006\u0002\b?R\"\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u00038\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u0015\u0010\u0016\u001a\u0004\b\u0017\u0010\u0018R\u001e\u0010\u0005\u001a\u0004\u0018\u00010\u00068\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u0019\u0010\u0016\u001a\u0004\b\u001a\u0010\u001bR\"\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00060\u00038\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u001c\u0010\u0016\u001a\u0004\b\u001d\u0010\u0018R\u001e\u0010\b\u001a\u0004\u0018\u00010\t8\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u001e\u0010\u0016\u001a\u0004\b\u001f\u0010 R\"\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u000b0\u00038\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b!\u0010\u0016\u001a\u0004\b\"\u0010\u0018R\"\u0010\f\u001a\b\u0012\u0004\u0012\u00020\r0\u00038\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b#\u0010\u0016\u001a\u0004\b$\u0010\u0018R\u0013\u0010%\u001a\u0004\u0018\u00010\u00048F¢\u0006\u0006\u001a\u0004\b&\u0010'R\u0013\u0010(\u001a\u0004\u0018\u00010\u000b8F¢\u0006\u0006\u001a\u0004\b)\u0010*¨\u0006B"}, d2 = {"Lcom/discord/notifications/api/NotificationMessage;", "", "stickerItems", "", "Lcom/discord/notifications/api/Sticker;", "author", "Lkotlinx/serialization/json/JsonObject;", "mentions", "poll", "Lcom/discord/notifications/api/Poll;", "embeds", "Lcom/discord/notifications/api/Embed;", "components", "Lcom/discord/notifications/api/Component;", "<init>", "(Ljava/util/List;Lkotlinx/serialization/json/JsonObject;Ljava/util/List;Lcom/discord/notifications/api/Poll;Ljava/util/List;Ljava/util/List;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/util/List;Lkotlinx/serialization/json/JsonObject;Ljava/util/List;Lcom/discord/notifications/api/Poll;Ljava/util/List;Ljava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getStickerItems$annotations", "()V", "getStickerItems", "()Ljava/util/List;", "getAuthor$annotations", "getAuthor", "()Lkotlinx/serialization/json/JsonObject;", "getMentions$annotations", "getMentions", "getPoll$annotations", "getPoll", "()Lcom/discord/notifications/api/Poll;", "getEmbeds$annotations", "getEmbeds", "getComponents$annotations", "getComponents", "sticker", "getSticker", "()Lcom/discord/notifications/api/Sticker;", "embed", "getEmbed", "()Lcom/discord/notifications/api/Embed;", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "equals", "", "other", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$notification_api_release", "$serializer", "Companion", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NotificationMessage {
    @NotNull
    private static final Lazy[] $childSerializers;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final JsonObject author;
    @NotNull
    private final List<Component> components;
    @NotNull
    private final List<Embed> embeds;
    @NotNull
    private final List<JsonObject> mentions;
    private final Poll poll;
    @NotNull
    private final List<Sticker> stickerItems;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/notifications/api/NotificationMessage$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/notifications/api/NotificationMessage;", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return NotificationMessage$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    static {
        o oVar = o.f48092e;
        $childSerializers = new Lazy[]{l.b(oVar, new Function0() { // from class: p7.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_;
                _childSerializers$_anonymous_ = NotificationMessage._childSerializers$_anonymous_();
                return _childSerializers$_anonymous_;
            }
        }), null, l.b(oVar, new Function0() { // from class: p7.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$0;
                _childSerializers$_anonymous_$0 = NotificationMessage._childSerializers$_anonymous_$0();
                return _childSerializers$_anonymous_$0;
            }
        }), null, l.b(oVar, new Function0() { // from class: p7.h
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$1;
                _childSerializers$_anonymous_$1 = NotificationMessage._childSerializers$_anonymous_$1();
                return _childSerializers$_anonymous_$1;
            }
        }), l.b(oVar, new Function0() { // from class: p7.i
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$2;
                _childSerializers$_anonymous_$2 = NotificationMessage._childSerializers$_anonymous_$2();
                return _childSerializers$_anonymous_$2;
            }
        })};
    }

    public NotificationMessage() {
        this((List) null, (JsonObject) null, (List) null, (Poll) null, (List) null, (List) null, 63, (DefaultConstructorMarker) null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new f(Sticker$$serializer.INSTANCE);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$0() {
        return new f(y.f35577a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$1() {
        return new f(Embed$$serializer.INSTANCE);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$2() {
        return new f(Component$$serializer.INSTANCE);
    }

    public static /* synthetic */ NotificationMessage copy$default(NotificationMessage notificationMessage, List list, JsonObject jsonObject, List list2, Poll poll, List list3, List list4, int i10, Object obj) {
        List<Sticker> list5 = list;
        if ((i10 & 1) != 0) {
            list5 = notificationMessage.stickerItems;
        }
        if ((i10 & 2) != 0) {
            jsonObject = notificationMessage.author;
        }
        List<JsonObject> list6 = list2;
        if ((i10 & 4) != 0) {
            list6 = notificationMessage.mentions;
        }
        if ((i10 & 8) != 0) {
            poll = notificationMessage.poll;
        }
        List<Embed> list7 = list3;
        if ((i10 & 16) != 0) {
            list7 = notificationMessage.embeds;
        }
        List<Component> list8 = list4;
        if ((i10 & 32) != 0) {
            list8 = notificationMessage.components;
        }
        List list9 = list7;
        List list10 = list8;
        return notificationMessage.copy(list5, jsonObject, list6, poll, list9, list10);
    }

    public static /* synthetic */ void getAuthor$annotations() {
    }

    public static /* synthetic */ void getComponents$annotations() {
    }

    public static /* synthetic */ void getEmbeds$annotations() {
    }

    public static /* synthetic */ void getMentions$annotations() {
    }

    public static /* synthetic */ void getPoll$annotations() {
    }

    public static /* synthetic */ void getStickerItems$annotations() {
    }

    public static final /* synthetic */ void write$Self$notification_api_release(NotificationMessage notificationMessage, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        if (compositeEncoder.A(serialDescriptor, 0) || !Intrinsics.areEqual(notificationMessage.stickerItems, CollectionsKt.l())) {
            compositeEncoder.s(serialDescriptor, 0, (ft.o) lazyArr[0].getValue(), notificationMessage.stickerItems);
        }
        if (compositeEncoder.A(serialDescriptor, 1) || notificationMessage.author != null) {
            compositeEncoder.l(serialDescriptor, 1, y.f35577a, notificationMessage.author);
        }
        if (compositeEncoder.A(serialDescriptor, 2) || !Intrinsics.areEqual(notificationMessage.mentions, CollectionsKt.l())) {
            compositeEncoder.s(serialDescriptor, 2, (ft.o) lazyArr[2].getValue(), notificationMessage.mentions);
        }
        if (compositeEncoder.A(serialDescriptor, 3) || notificationMessage.poll != null) {
            compositeEncoder.l(serialDescriptor, 3, Poll$$serializer.INSTANCE, notificationMessage.poll);
        }
        if (compositeEncoder.A(serialDescriptor, 4) || !Intrinsics.areEqual(notificationMessage.embeds, CollectionsKt.l())) {
            compositeEncoder.s(serialDescriptor, 4, (ft.o) lazyArr[4].getValue(), notificationMessage.embeds);
        }
        if (compositeEncoder.A(serialDescriptor, 5) || !Intrinsics.areEqual(notificationMessage.components, CollectionsKt.l())) {
            compositeEncoder.s(serialDescriptor, 5, (ft.o) lazyArr[5].getValue(), notificationMessage.components);
        }
    }

    @NotNull
    public final List<Sticker> component1() {
        return this.stickerItems;
    }

    public final JsonObject component2() {
        return this.author;
    }

    @NotNull
    public final List<JsonObject> component3() {
        return this.mentions;
    }

    public final Poll component4() {
        return this.poll;
    }

    @NotNull
    public final List<Embed> component5() {
        return this.embeds;
    }

    @NotNull
    public final List<Component> component6() {
        return this.components;
    }

    @NotNull
    public final NotificationMessage copy(@NotNull List<Sticker> stickerItems, JsonObject jsonObject, @NotNull List<JsonObject> mentions, Poll poll, @NotNull List<Embed> embeds, @NotNull List<Component> components) {
        Intrinsics.checkNotNullParameter(stickerItems, "stickerItems");
        Intrinsics.checkNotNullParameter(mentions, "mentions");
        Intrinsics.checkNotNullParameter(embeds, "embeds");
        Intrinsics.checkNotNullParameter(components, "components");
        return new NotificationMessage(stickerItems, jsonObject, mentions, poll, embeds, components);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof NotificationMessage) {
            NotificationMessage notificationMessage = (NotificationMessage) obj;
            return Intrinsics.areEqual(this.stickerItems, notificationMessage.stickerItems) && Intrinsics.areEqual(this.author, notificationMessage.author) && Intrinsics.areEqual(this.mentions, notificationMessage.mentions) && Intrinsics.areEqual(this.poll, notificationMessage.poll) && Intrinsics.areEqual(this.embeds, notificationMessage.embeds) && Intrinsics.areEqual(this.components, notificationMessage.components);
        }
        return false;
    }

    public final JsonObject getAuthor() {
        return this.author;
    }

    @NotNull
    public final List<Component> getComponents() {
        return this.components;
    }

    public final Embed getEmbed() {
        return (Embed) CollectionsKt.firstOrNull(this.embeds);
    }

    @NotNull
    public final List<Embed> getEmbeds() {
        return this.embeds;
    }

    @NotNull
    public final List<JsonObject> getMentions() {
        return this.mentions;
    }

    public final Poll getPoll() {
        return this.poll;
    }

    public final Sticker getSticker() {
        return (Sticker) CollectionsKt.firstOrNull(this.stickerItems);
    }

    @NotNull
    public final List<Sticker> getStickerItems() {
        return this.stickerItems;
    }

    public int hashCode() {
        int hashCode = this.stickerItems.hashCode() * 31;
        JsonObject jsonObject = this.author;
        int hashCode2 = (((hashCode + (jsonObject == null ? 0 : jsonObject.hashCode())) * 31) + this.mentions.hashCode()) * 31;
        Poll poll = this.poll;
        return ((((hashCode2 + (poll != null ? poll.hashCode() : 0)) * 31) + this.embeds.hashCode()) * 31) + this.components.hashCode();
    }

    @NotNull
    public String toString() {
        List<Sticker> list = this.stickerItems;
        JsonObject jsonObject = this.author;
        List<JsonObject> list2 = this.mentions;
        Poll poll = this.poll;
        List<Embed> list3 = this.embeds;
        List<Component> list4 = this.components;
        return "NotificationMessage(stickerItems=" + list + ", author=" + jsonObject + ", mentions=" + list2 + ", poll=" + poll + ", embeds=" + list3 + ", components=" + list4 + ")";
    }

    public /* synthetic */ NotificationMessage(int i10, List list, JsonObject jsonObject, List list2, Poll poll, List list3, List list4, SerializationConstructorMarker serializationConstructorMarker) {
        this.stickerItems = (i10 & 1) == 0 ? CollectionsKt.l() : list;
        if ((i10 & 2) == 0) {
            this.author = null;
        } else {
            this.author = jsonObject;
        }
        if ((i10 & 4) == 0) {
            this.mentions = CollectionsKt.l();
        } else {
            this.mentions = list2;
        }
        if ((i10 & 8) == 0) {
            this.poll = null;
        } else {
            this.poll = poll;
        }
        if ((i10 & 16) == 0) {
            this.embeds = CollectionsKt.l();
        } else {
            this.embeds = list3;
        }
        if ((i10 & 32) == 0) {
            this.components = CollectionsKt.l();
        } else {
            this.components = list4;
        }
    }

    public NotificationMessage(@NotNull List<Sticker> stickerItems, JsonObject jsonObject, @NotNull List<JsonObject> mentions, Poll poll, @NotNull List<Embed> embeds, @NotNull List<Component> components) {
        Intrinsics.checkNotNullParameter(stickerItems, "stickerItems");
        Intrinsics.checkNotNullParameter(mentions, "mentions");
        Intrinsics.checkNotNullParameter(embeds, "embeds");
        Intrinsics.checkNotNullParameter(components, "components");
        this.stickerItems = stickerItems;
        this.author = jsonObject;
        this.mentions = mentions;
        this.poll = poll;
        this.embeds = embeds;
        this.components = components;
    }

    public /* synthetic */ NotificationMessage(List list, JsonObject jsonObject, List list2, Poll poll, List list3, List list4, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? CollectionsKt.l() : list, (i10 & 2) != 0 ? null : jsonObject, (i10 & 4) != 0 ? CollectionsKt.l() : list2, (i10 & 8) != 0 ? null : poll, (i10 & 16) != 0 ? CollectionsKt.l() : list3, (i10 & 32) != 0 ? CollectionsKt.l() : list4);
    }
}
