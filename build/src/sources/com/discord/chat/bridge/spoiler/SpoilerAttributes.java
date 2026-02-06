package com.discord.chat.bridge.spoiler;

import android.content.Context;
import com.discord.chat.bridge.Message;
import com.discord.chat.bridge.attachment.Attachment;
import com.discord.chat.bridge.embed.Embed;
import com.discord.chat.bridge.postpreviewembed.PostPreviewEmbed;
import com.discord.chat.bridge.spoiler.SpoilerAttributes;
import com.discord.primitives.MessageId;
import com.discord.react_strings.I18nMessage;
import com.discord.react_strings.I18nUtilsKt;
import java.util.Locale;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0010\n\u0002\u0010\b\n\u0002\b\u0010\b\u0086\b\u0018\u0000 52\u00020\u0001:\u00015BI\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0012\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00060\u0004\u0012\u0012\u0010\b\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00060\u0004\u0012\u0006\u0010\n\u001a\u00020\t\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u000f\u0010\u000f\u001a\u00020\u000bH\u0002¢\u0006\u0004\b\u000f\u0010\u0010J5\u0010\u0016\u001a\u0004\u0018\u00010\u00152\u000e\b\u0002\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00120\u00112\u0014\b\u0002\u0010\u0014\u001a\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u00120\u0004¢\u0006\u0004\b\u0016\u0010\u0017J\u0010\u0010\u001a\u001a\u00020\u0002HÆ\u0003¢\u0006\u0004\b\u0018\u0010\u0019J\u001c\u0010\u001b\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00060\u0004HÆ\u0003¢\u0006\u0004\b\u001b\u0010\u001cJ\u001c\u0010\u001d\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00060\u0004HÆ\u0003¢\u0006\u0004\b\u001d\u0010\u001cJ\u0010\u0010\u001e\u001a\u00020\tHÆ\u0003¢\u0006\u0004\b\u001e\u0010\u001fJ\u0012\u0010 \u001a\u0004\u0018\u00010\u000bHÆ\u0003¢\u0006\u0004\b \u0010!J\\\u0010$\u001a\u00020\u00002\b\b\u0002\u0010\u0003\u001a\u00020\u00022\u0014\b\u0002\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00060\u00042\u0014\b\u0002\u0010\b\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00060\u00042\b\b\u0002\u0010\n\u001a\u00020\t2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000bHÆ\u0001¢\u0006\u0004\b\"\u0010#J\u0010\u0010%\u001a\u00020\u0006HÖ\u0001¢\u0006\u0004\b%\u0010\u0019J\u0010\u0010'\u001a\u00020&HÖ\u0001¢\u0006\u0004\b'\u0010(J\u001a\u0010*\u001a\u00020\u000b2\b\u0010)\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b*\u0010+R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0003\u0010,\u001a\u0004\b-\u0010\u0019R#\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00060\u00048\u0006¢\u0006\f\n\u0004\b\u0007\u0010.\u001a\u0004\b/\u0010\u001cR#\u0010\b\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00060\u00048\u0006¢\u0006\f\n\u0004\b\b\u0010.\u001a\u0004\b0\u0010\u001cR\u0017\u0010\n\u001a\u00020\t8\u0006¢\u0006\f\n\u0004\b\n\u00101\u001a\u0004\b2\u0010\u001fR\u0019\u0010\f\u001a\u0004\u0018\u00010\u000b8\u0006¢\u0006\f\n\u0004\b\f\u00103\u001a\u0004\b4\u0010!¨\u00066"}, d2 = {"Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;", "", "Lcom/discord/chat/bridge/spoiler/SpoilerIdentifier;", "identifier", "Lkotlin/Function1;", "Landroid/content/Context;", "", "label", "description", "Lcom/discord/chat/bridge/spoiler/SpoilerType;", "type", "", "verifyAge", "<init>", "(Ljava/lang/String;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lcom/discord/chat/bridge/spoiler/SpoilerType;Ljava/lang/Boolean;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "hasSpoilerConfig", "()Z", "Lkotlin/Function0;", "", "onTapSpoiler", "onTapObscureToggle", "Lcom/discord/chat/bridge/spoiler/SpoilerConfig;", "configure", "(Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;)Lcom/discord/chat/bridge/spoiler/SpoilerConfig;", "component1-Bq9X6Gg", "()Ljava/lang/String;", "component1", "component2", "()Lkotlin/jvm/functions/Function1;", "component3", "component4", "()Lcom/discord/chat/bridge/spoiler/SpoilerType;", "component5", "()Ljava/lang/Boolean;", "copy-5Uv3usY", "(Ljava/lang/String;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lcom/discord/chat/bridge/spoiler/SpoilerType;Ljava/lang/Boolean;)Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;", "copy", "toString", "", "hashCode", "()I", "other", "equals", "(Ljava/lang/Object;)Z", "Ljava/lang/String;", "getIdentifier-Bq9X6Gg", "Lkotlin/jvm/functions/Function1;", "getLabel", "getDescription", "Lcom/discord/chat/bridge/spoiler/SpoilerType;", "getType", "Ljava/lang/Boolean;", "getVerifyAge", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSpoilerManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SpoilerManager.kt\ncom/discord/chat/bridge/spoiler/SpoilerAttributes\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,162:1\n1#2:163\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SpoilerAttributes {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final Function1<Context, String> description;
    @NotNull
    private final String identifier;
    @NotNull
    private final Function1<Context, String> label;
    @NotNull
    private final SpoilerType type;
    private final Boolean verifyAge;

    @Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J/\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0002\u0010\u000eJ/\u0010\u000f\u001a\u0004\u0018\u00010\u00052\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0002\u0010\u0012J/\u0010\u0013\u001a\u0004\u0018\u00010\u00052\u0006\u0010\u0006\u001a\u00020\u00142\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0002\u0010\u0015J7\u0010\u0016\u001a\u0004\u0018\u00010\u00052\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u001a2\u0006\u0010\u001c\u001a\u00020\u001a2\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0002\u0010\u001dJ1\u0010\u001e\u001a\u0004\u0018\u00010\u00052\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001f\u001a\u00020\u001a2\b\u0010\f\u001a\u0004\u0018\u00010\rH\u0002¢\u0006\u0002\u0010 ¨\u0006!"}, d2 = {"Lcom/discord/chat/bridge/spoiler/SpoilerAttributes$Companion;", "", "<init>", "()V", "forEmbed", "Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;", "embed", "Lcom/discord/chat/bridge/embed/Embed;", "message", "Lcom/discord/chat/bridge/Message;", "index", "", "verifyAge", "", "(Lcom/discord/chat/bridge/embed/Embed;Lcom/discord/chat/bridge/Message;ILjava/lang/Boolean;)Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;", "forAttachment", "attachment", "Lcom/discord/chat/bridge/attachment/Attachment;", "(Lcom/discord/chat/bridge/attachment/Attachment;Lcom/discord/chat/bridge/Message;ILjava/lang/Boolean;)Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;", "forMediaPostPreviewEmbed", "Lcom/discord/chat/bridge/postpreviewembed/PostPreviewEmbed;", "(Lcom/discord/chat/bridge/postpreviewembed/PostPreviewEmbed;Lcom/discord/chat/bridge/Message;ILjava/lang/Boolean;)Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;", "forGenericMedia", "spoilerableData", "Lcom/discord/chat/bridge/spoiler/SpoilerableData;", "containerId", "", "itemType", "itemKey", "(Lcom/discord/chat/bridge/spoiler/SpoilerableData;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;)Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;", "forItem", "key", "(Lcom/discord/chat/bridge/spoiler/SpoilerableData;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;)Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final SpoilerAttributes forItem(SpoilerableData spoilerableData, String str, String str2, Boolean bool) {
            final String obscureOrNull = spoilerableData.getObscureOrNull();
            if (obscureOrNull != null) {
                return new SpoilerAttributes(SpoilerIdentifier.m413constructorimpl("obscure:containerId(" + str + "):" + str2), new Function1() { // from class: com.discord.chat.bridge.spoiler.c
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        String forItem$lambda$2$lambda$0;
                        forItem$lambda$2$lambda$0 = SpoilerAttributes.Companion.forItem$lambda$2$lambda$0(obscureOrNull, (Context) obj);
                        return forItem$lambda$2$lambda$0;
                    }
                }, new Function1() { // from class: com.discord.chat.bridge.spoiler.d
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        String forItem$lambda$2$lambda$1;
                        forItem$lambda$2$lambda$1 = SpoilerAttributes.Companion.forItem$lambda$2$lambda$1(obscureOrNull, (Context) obj);
                        return forItem$lambda$2$lambda$1;
                    }
                }, SpoilerType.OBSCURE, bool, null);
            }
            final String spoilerOrNull = spoilerableData.getSpoilerOrNull();
            if (spoilerOrNull != null) {
                return new SpoilerAttributes(SpoilerIdentifier.m413constructorimpl("spoiler:containerId(" + str + "):" + str2), new Function1() { // from class: com.discord.chat.bridge.spoiler.e
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        String forItem$lambda$5$lambda$3;
                        forItem$lambda$5$lambda$3 = SpoilerAttributes.Companion.forItem$lambda$5$lambda$3((Context) obj);
                        return forItem$lambda$5$lambda$3;
                    }
                }, new Function1() { // from class: com.discord.chat.bridge.spoiler.f
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        String forItem$lambda$5$lambda$4;
                        forItem$lambda$5$lambda$4 = SpoilerAttributes.Companion.forItem$lambda$5$lambda$4(spoilerOrNull, (Context) obj);
                        return forItem$lambda$5$lambda$4;
                    }
                }, SpoilerType.SPOILER, bool, null);
            }
            return null;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final String forItem$lambda$2$lambda$0(String str, Context it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return str;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final String forItem$lambda$2$lambda$1(String str, Context it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return str;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final String forItem$lambda$5$lambda$3(Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            String upperCase = I18nUtilsKt.i18nFormat$default(context, I18nMessage.SPOILER, null, 2, null).toString().toUpperCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(upperCase, "toUpperCase(...)");
            return upperCase;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final String forItem$lambda$5$lambda$4(String str, Context it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return str;
        }

        public final SpoilerAttributes forAttachment(@NotNull Attachment attachment, @NotNull Message message, int i10, Boolean bool) {
            Intrinsics.checkNotNullParameter(attachment, "attachment");
            Intrinsics.checkNotNullParameter(message, "message");
            return forItem(attachment, "messageId(" + MessageId.m1090toStringimpl(message.m237getId3Eiw7ao()) + ")", attachment.type().getIndexLabel() + "(" + i10 + ")", bool);
        }

        public final SpoilerAttributes forEmbed(@NotNull Embed embed, @NotNull Message message, int i10, Boolean bool) {
            Intrinsics.checkNotNullParameter(embed, "embed");
            Intrinsics.checkNotNullParameter(message, "message");
            return forItem(embed, "messageId(" + MessageId.m1090toStringimpl(message.m237getId3Eiw7ao()) + ")", "embedIndex(" + i10 + ")", bool);
        }

        public final SpoilerAttributes forGenericMedia(@NotNull SpoilerableData spoilerableData, @NotNull String containerId, @NotNull String itemType, @NotNull String itemKey, Boolean bool) {
            Intrinsics.checkNotNullParameter(spoilerableData, "spoilerableData");
            Intrinsics.checkNotNullParameter(containerId, "containerId");
            Intrinsics.checkNotNullParameter(itemType, "itemType");
            Intrinsics.checkNotNullParameter(itemKey, "itemKey");
            return forItem(spoilerableData, containerId, itemType + "(" + itemKey + ")", bool);
        }

        public final SpoilerAttributes forMediaPostPreviewEmbed(@NotNull PostPreviewEmbed embed, @NotNull Message message, int i10, Boolean bool) {
            Intrinsics.checkNotNullParameter(embed, "embed");
            Intrinsics.checkNotNullParameter(message, "message");
            return forItem(embed, "messageId(" + MessageId.m1090toStringimpl(message.m237getId3Eiw7ao()) + ")", "mediaPostPreviewEmbed(" + i10 + ")", bool);
        }

        private Companion() {
        }
    }

    public /* synthetic */ SpoilerAttributes(String str, Function1 function1, Function1 function12, SpoilerType spoilerType, Boolean bool, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, function1, function12, spoilerType, bool);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ SpoilerConfig configure$default(SpoilerAttributes spoilerAttributes, Function0 function0, Function1 function1, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            function0 = new Function0() { // from class: com.discord.chat.bridge.spoiler.a
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit unit;
                    unit = Unit.f32008a;
                    return unit;
                }
            };
        }
        if ((i10 & 2) != 0) {
            function1 = new Function1() { // from class: com.discord.chat.bridge.spoiler.b
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit configure$lambda$1;
                    configure$lambda$1 = SpoilerAttributes.configure$lambda$1(((Boolean) obj2).booleanValue());
                    return configure$lambda$1;
                }
            };
        }
        return spoilerAttributes.configure(function0, function1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configure$lambda$1(boolean z10) {
        return Unit.f32008a;
    }

    /* renamed from: copy-5Uv3usY$default  reason: not valid java name */
    public static /* synthetic */ SpoilerAttributes m406copy5Uv3usY$default(SpoilerAttributes spoilerAttributes, String str, Function1 function1, Function1 function12, SpoilerType spoilerType, Boolean bool, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = spoilerAttributes.identifier;
        }
        Function1<Context, String> function13 = function1;
        if ((i10 & 2) != 0) {
            function13 = spoilerAttributes.label;
        }
        Function1<Context, String> function14 = function12;
        if ((i10 & 4) != 0) {
            function14 = spoilerAttributes.description;
        }
        if ((i10 & 8) != 0) {
            spoilerType = spoilerAttributes.type;
        }
        if ((i10 & 16) != 0) {
            bool = spoilerAttributes.verifyAge;
        }
        Boolean bool2 = bool;
        Function1 function15 = function14;
        return spoilerAttributes.m408copy5Uv3usY(str, function13, function15, spoilerType, bool2);
    }

    private final boolean hasSpoilerConfig() {
        if (!SpoilerManager.INSTANCE.m420isNotRevealedV2PEE7g(this.identifier) && this.type != SpoilerType.OBSCURE) {
            return false;
        }
        return true;
    }

    @NotNull
    /* renamed from: component1-Bq9X6Gg  reason: not valid java name */
    public final String m407component1Bq9X6Gg() {
        return this.identifier;
    }

    @NotNull
    public final Function1<Context, String> component2() {
        return this.label;
    }

    @NotNull
    public final Function1<Context, String> component3() {
        return this.description;
    }

    @NotNull
    public final SpoilerType component4() {
        return this.type;
    }

    public final Boolean component5() {
        return this.verifyAge;
    }

    public final SpoilerConfig configure(@NotNull final Function0<Unit> onTapSpoiler, @NotNull Function1<? super Boolean, Unit> onTapObscureToggle) {
        SpoilerAttributes spoilerAttributes;
        Intrinsics.checkNotNullParameter(onTapSpoiler, "onTapSpoiler");
        Intrinsics.checkNotNullParameter(onTapObscureToggle, "onTapObscureToggle");
        if (hasSpoilerConfig()) {
            spoilerAttributes = this;
        } else {
            spoilerAttributes = null;
        }
        if (spoilerAttributes == null) {
            return null;
        }
        return new SpoilerConfig(spoilerAttributes, onTapObscureToggle, new Function1<SpoilerIdentifier, Unit>() { // from class: com.discord.chat.bridge.spoiler.SpoilerAttributes$configure$4$1
            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                m410invokeV2PEE7g(((SpoilerIdentifier) obj).m418unboximpl());
                return Unit.f32008a;
            }

            /* renamed from: invoke-V2PEE7g  reason: not valid java name */
            public final void m410invokeV2PEE7g(String spoilerId) {
                Intrinsics.checkNotNullParameter(spoilerId, "spoilerId");
                SpoilerManager.INSTANCE.m423markRevealedV2PEE7g(spoilerId);
                onTapSpoiler.invoke();
            }
        }, new Function1<SpoilerIdentifier, Unit>() { // from class: com.discord.chat.bridge.spoiler.SpoilerAttributes$configure$4$2
            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                m411invokeV2PEE7g(((SpoilerIdentifier) obj).m418unboximpl());
                return Unit.f32008a;
            }

            /* renamed from: invoke-V2PEE7g  reason: not valid java name */
            public final void m411invokeV2PEE7g(String spoilerId) {
                Intrinsics.checkNotNullParameter(spoilerId, "spoilerId");
                SpoilerManager.INSTANCE.m422markHiddenV2PEE7g(spoilerId);
                onTapSpoiler.invoke();
            }
        });
    }

    @NotNull
    /* renamed from: copy-5Uv3usY  reason: not valid java name */
    public final SpoilerAttributes m408copy5Uv3usY(@NotNull String identifier, @NotNull Function1<? super Context, String> label, @NotNull Function1<? super Context, String> description, @NotNull SpoilerType type, Boolean bool) {
        Intrinsics.checkNotNullParameter(identifier, "identifier");
        Intrinsics.checkNotNullParameter(label, "label");
        Intrinsics.checkNotNullParameter(description, "description");
        Intrinsics.checkNotNullParameter(type, "type");
        return new SpoilerAttributes(identifier, label, description, type, bool, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof SpoilerAttributes) {
            SpoilerAttributes spoilerAttributes = (SpoilerAttributes) obj;
            return SpoilerIdentifier.m415equalsimpl0(this.identifier, spoilerAttributes.identifier) && Intrinsics.areEqual(this.label, spoilerAttributes.label) && Intrinsics.areEqual(this.description, spoilerAttributes.description) && this.type == spoilerAttributes.type && Intrinsics.areEqual(this.verifyAge, spoilerAttributes.verifyAge);
        }
        return false;
    }

    @NotNull
    public final Function1<Context, String> getDescription() {
        return this.description;
    }

    @NotNull
    /* renamed from: getIdentifier-Bq9X6Gg  reason: not valid java name */
    public final String m409getIdentifierBq9X6Gg() {
        return this.identifier;
    }

    @NotNull
    public final Function1<Context, String> getLabel() {
        return this.label;
    }

    @NotNull
    public final SpoilerType getType() {
        return this.type;
    }

    public final Boolean getVerifyAge() {
        return this.verifyAge;
    }

    public int hashCode() {
        int m416hashCodeimpl = ((((((SpoilerIdentifier.m416hashCodeimpl(this.identifier) * 31) + this.label.hashCode()) * 31) + this.description.hashCode()) * 31) + this.type.hashCode()) * 31;
        Boolean bool = this.verifyAge;
        return m416hashCodeimpl + (bool == null ? 0 : bool.hashCode());
    }

    @NotNull
    public String toString() {
        String m417toStringimpl = SpoilerIdentifier.m417toStringimpl(this.identifier);
        Function1<Context, String> function1 = this.label;
        Function1<Context, String> function12 = this.description;
        SpoilerType spoilerType = this.type;
        Boolean bool = this.verifyAge;
        return "SpoilerAttributes(identifier=" + m417toStringimpl + ", label=" + function1 + ", description=" + function12 + ", type=" + spoilerType + ", verifyAge=" + bool + ")";
    }

    /* JADX WARN: Multi-variable type inference failed */
    private SpoilerAttributes(String identifier, Function1<? super Context, String> label, Function1<? super Context, String> description, SpoilerType type, Boolean bool) {
        Intrinsics.checkNotNullParameter(identifier, "identifier");
        Intrinsics.checkNotNullParameter(label, "label");
        Intrinsics.checkNotNullParameter(description, "description");
        Intrinsics.checkNotNullParameter(type, "type");
        this.identifier = identifier;
        this.label = label;
        this.description = description;
        this.type = type;
        this.verifyAge = bool;
    }
}
