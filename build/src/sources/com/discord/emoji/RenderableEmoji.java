package com.discord.emoji;

import com.discord.icons.IconUrlUtils;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.Set;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b6\u0018\u0000 \u000e2\u00020\u0001:\u0004\u000b\f\r\u000eB\t\b\u0004¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH&J\b\u0010\n\u001a\u00020\u0005H&\u0082\u0001\u0003\u000f\u0010\u0011¨\u0006\u0012"}, d2 = {"Lcom/discord/emoji/RenderableEmoji;", "", "<init>", "()V", "getUrl", "", "allowAnimation", "", "sizePx", "", "getContentDescription", "Unicode", "CustomWithEmojiId", "CustomWithUrl", "Companion", "Lcom/discord/emoji/RenderableEmoji$CustomWithEmojiId;", "Lcom/discord/emoji/RenderableEmoji$CustomWithUrl;", "Lcom/discord/emoji/RenderableEmoji$Unicode;", "emoji_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class RenderableEmoji {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Set<String> exceptions = x0.i("™", "©", "®");

    @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\"\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u0006J\u001e\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u0006J\u0016\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00062\u0006\u0010\u0010\u001a\u00020\u0006R\u0014\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0014"}, d2 = {"Lcom/discord/emoji/RenderableEmoji$Companion;", "", "<init>", "()V", "exceptions", "", "", "unicode", "Lcom/discord/emoji/RenderableEmoji$Unicode;", "surrogates", "customWithEmojiId", "Lcom/discord/emoji/RenderableEmoji$CustomWithEmojiId;", StackTraceHelper.ID_KEY, "", "isAnimated", "", "alt", "customWithUrl", "Lcom/discord/emoji/RenderableEmoji$CustomWithUrl;", "url", "emoji_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final CustomWithEmojiId customWithEmojiId(long j10, boolean z10, @NotNull String alt) {
            Intrinsics.checkNotNullParameter(alt, "alt");
            return new CustomWithEmojiId(j10, z10, alt);
        }

        @NotNull
        public final CustomWithUrl customWithUrl(@NotNull String url, @NotNull String alt) {
            Intrinsics.checkNotNullParameter(url, "url");
            Intrinsics.checkNotNullParameter(alt, "alt");
            return new CustomWithUrl(url, alt);
        }

        @NotNull
        public final Unicode unicode(@NotNull String surrogates) {
            Intrinsics.checkNotNullParameter(surrogates, "surrogates");
            return new Unicode(Surrogates.m865constructorimpl(surrogates), null);
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\n\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\u0018\u0010\u000f\u001a\u00020\u00072\u0006\u0010\u0010\u001a\u00020\u00052\u0006\u0010\u0011\u001a\u00020\u0012H\u0016J\b\u0010\u0013\u001a\u00020\u0007H\u0016J\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0007HÆ\u0003J'\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00052\b\u0010\u0019\u001a\u0004\u0018\u00010\u001aHÖ\u0003J\t\u0010\u001b\u001a\u00020\u0012HÖ\u0001J\t\u0010\u001c\u001a\u00020\u0007HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0004\u0010\fR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000e¨\u0006\u001d"}, d2 = {"Lcom/discord/emoji/RenderableEmoji$CustomWithEmojiId;", "Lcom/discord/emoji/RenderableEmoji;", "emojiId", "", "isAnimated", "", "alt", "", "<init>", "(JZLjava/lang/String;)V", "getEmojiId", "()J", "()Z", "getAlt", "()Ljava/lang/String;", "getUrl", "allowAnimation", "sizePx", "", "getContentDescription", "component1", "component2", "component3", "copy", "equals", "other", "", "hashCode", "toString", "emoji_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class CustomWithEmojiId extends RenderableEmoji {
        @NotNull
        private final String alt;
        private final long emojiId;
        private final boolean isAnimated;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public CustomWithEmojiId(long j10, boolean z10, @NotNull String alt) {
            super(null);
            Intrinsics.checkNotNullParameter(alt, "alt");
            this.emojiId = j10;
            this.isAnimated = z10;
            this.alt = alt;
        }

        public static /* synthetic */ CustomWithEmojiId copy$default(CustomWithEmojiId customWithEmojiId, long j10, boolean z10, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                j10 = customWithEmojiId.emojiId;
            }
            if ((i10 & 2) != 0) {
                z10 = customWithEmojiId.isAnimated;
            }
            if ((i10 & 4) != 0) {
                str = customWithEmojiId.alt;
            }
            return customWithEmojiId.copy(j10, z10, str);
        }

        public final long component1() {
            return this.emojiId;
        }

        public final boolean component2() {
            return this.isAnimated;
        }

        @NotNull
        public final String component3() {
            return this.alt;
        }

        @NotNull
        public final CustomWithEmojiId copy(long j10, boolean z10, @NotNull String alt) {
            Intrinsics.checkNotNullParameter(alt, "alt");
            return new CustomWithEmojiId(j10, z10, alt);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof CustomWithEmojiId) {
                CustomWithEmojiId customWithEmojiId = (CustomWithEmojiId) obj;
                return this.emojiId == customWithEmojiId.emojiId && this.isAnimated == customWithEmojiId.isAnimated && Intrinsics.areEqual(this.alt, customWithEmojiId.alt);
            }
            return false;
        }

        @NotNull
        public final String getAlt() {
            return this.alt;
        }

        @Override // com.discord.emoji.RenderableEmoji
        @NotNull
        public String getContentDescription() {
            return this.alt;
        }

        public final long getEmojiId() {
            return this.emojiId;
        }

        @Override // com.discord.emoji.RenderableEmoji
        @NotNull
        public String getUrl(boolean z10, int i10) {
            boolean z11;
            IconUrlUtils iconUrlUtils = IconUrlUtils.INSTANCE;
            long j10 = this.emojiId;
            if (z10 && this.isAnimated) {
                z11 = true;
            } else {
                z11 = false;
            }
            return iconUrlUtils.getCustomEmojiUrl(j10, z11, Integer.valueOf(i10));
        }

        public int hashCode() {
            return (((Long.hashCode(this.emojiId) * 31) + Boolean.hashCode(this.isAnimated)) * 31) + this.alt.hashCode();
        }

        public final boolean isAnimated() {
            return this.isAnimated;
        }

        @NotNull
        public String toString() {
            long j10 = this.emojiId;
            boolean z10 = this.isAnimated;
            String str = this.alt;
            return "CustomWithEmojiId(emojiId=" + j10 + ", isAnimated=" + z10 + ", alt=" + str + ")";
        }
    }

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u0018\u0010\u0007\u001a\u00020\u00032\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rH\u0016J\b\u0010\u000e\u001a\u00020\u0003H\u0016J\t\u0010\u000f\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\u001d\u0010\u0011\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0012\u001a\u00020\u000b2\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014HÖ\u0003J\t\u0010\u0015\u001a\u00020\rHÖ\u0001J\t\u0010\u0016\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u0017"}, d2 = {"Lcom/discord/emoji/RenderableEmoji$CustomWithUrl;", "Lcom/discord/emoji/RenderableEmoji;", "url", "", "alt", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "getUrl", "()Ljava/lang/String;", "getAlt", "allowAnimation", "", "sizePx", "", "getContentDescription", "component1", "component2", "copy", "equals", "other", "", "hashCode", "toString", "emoji_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class CustomWithUrl extends RenderableEmoji {
        @NotNull
        private final String alt;
        @NotNull
        private final String url;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public CustomWithUrl(@NotNull String url, @NotNull String alt) {
            super(null);
            Intrinsics.checkNotNullParameter(url, "url");
            Intrinsics.checkNotNullParameter(alt, "alt");
            this.url = url;
            this.alt = alt;
        }

        public static /* synthetic */ CustomWithUrl copy$default(CustomWithUrl customWithUrl, String str, String str2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = customWithUrl.url;
            }
            if ((i10 & 2) != 0) {
                str2 = customWithUrl.alt;
            }
            return customWithUrl.copy(str, str2);
        }

        @NotNull
        public final String component1() {
            return this.url;
        }

        @NotNull
        public final String component2() {
            return this.alt;
        }

        @NotNull
        public final CustomWithUrl copy(@NotNull String url, @NotNull String alt) {
            Intrinsics.checkNotNullParameter(url, "url");
            Intrinsics.checkNotNullParameter(alt, "alt");
            return new CustomWithUrl(url, alt);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof CustomWithUrl) {
                CustomWithUrl customWithUrl = (CustomWithUrl) obj;
                return Intrinsics.areEqual(this.url, customWithUrl.url) && Intrinsics.areEqual(this.alt, customWithUrl.alt);
            }
            return false;
        }

        @NotNull
        public final String getAlt() {
            return this.alt;
        }

        @Override // com.discord.emoji.RenderableEmoji
        @NotNull
        public String getContentDescription() {
            return this.alt;
        }

        @NotNull
        public final String getUrl() {
            return this.url;
        }

        public int hashCode() {
            return (this.url.hashCode() * 31) + this.alt.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.url;
            String str2 = this.alt;
            return "CustomWithUrl(url=" + str + ", alt=" + str2 + ")";
        }

        @Override // com.discord.emoji.RenderableEmoji
        @NotNull
        public String getUrl(boolean z10, int i10) {
            return this.url;
        }
    }

    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\b\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0018\u0010\f\u001a\u00020\n2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u0010H\u0016J\b\u0010\u0011\u001a\u00020\nH\u0016J\u0010\u0010\u0012\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0013\u0010\u0007J\u001a\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001¢\u0006\u0004\b\u0015\u0010\u0016J\u0013\u0010\u0017\u001a\u00020\u000e2\b\u0010\u0018\u001a\u0004\u0018\u00010\u0019HÖ\u0003J\t\u0010\u001a\u001a\u00020\u0010HÖ\u0001J\t\u0010\u001b\u001a\u00020\nHÖ\u0001R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\b\u001a\u0004\b\u0006\u0010\u0007R\u0013\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\u0007¨\u0006\u001c"}, d2 = {"Lcom/discord/emoji/RenderableEmoji$Unicode;", "Lcom/discord/emoji/RenderableEmoji;", "surrogates", "Lcom/discord/emoji/Surrogates;", "<init>", "(Ljava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getSurrogates-Mny0UXI", "()Ljava/lang/String;", "Ljava/lang/String;", "exception", "", "getException", "getUrl", "allowAnimation", "", "sizePx", "", "getContentDescription", "component1", "component1-Mny0UXI", "copy", "copy-hLBmEAo", "(Ljava/lang/String;)Lcom/discord/emoji/RenderableEmoji$Unicode;", "equals", "other", "", "hashCode", "toString", "emoji_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nRenderableEmoji.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RenderableEmoji.kt\ncom/discord/emoji/RenderableEmoji$Unicode\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,151:1\n1#2:152\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Unicode extends RenderableEmoji {
        private final String exception;
        @NotNull
        private final String surrogates;

        public /* synthetic */ Unicode(String str, DefaultConstructorMarker defaultConstructorMarker) {
            this(str);
        }

        /* renamed from: copy-hLBmEAo$default  reason: not valid java name */
        public static /* synthetic */ Unicode m860copyhLBmEAo$default(Unicode unicode, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = unicode.surrogates;
            }
            return unicode.m862copyhLBmEAo(str);
        }

        @NotNull
        /* renamed from: component1-Mny0UXI  reason: not valid java name */
        public final String m861component1Mny0UXI() {
            return this.surrogates;
        }

        @NotNull
        /* renamed from: copy-hLBmEAo  reason: not valid java name */
        public final Unicode m862copyhLBmEAo(@NotNull String surrogates) {
            Intrinsics.checkNotNullParameter(surrogates, "surrogates");
            return new Unicode(surrogates, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof Unicode) && Surrogates.m867equalsimpl0(this.surrogates, ((Unicode) obj).surrogates);
        }

        @Override // com.discord.emoji.RenderableEmoji
        @NotNull
        public String getContentDescription() {
            return this.surrogates;
        }

        public final String getException() {
            return this.exception;
        }

        @NotNull
        /* renamed from: getSurrogates-Mny0UXI  reason: not valid java name */
        public final String m863getSurrogatesMny0UXI() {
            return this.surrogates;
        }

        @Override // com.discord.emoji.RenderableEmoji
        @NotNull
        public String getUrl(boolean z10, int i10) {
            return Surrogates.m869toAssetUrlimpl(this.surrogates);
        }

        public int hashCode() {
            return Surrogates.m868hashCodeimpl(this.surrogates);
        }

        @NotNull
        public String toString() {
            String m871toStringimpl = Surrogates.m871toStringimpl(this.surrogates);
            return "Unicode(surrogates=" + m871toStringimpl + ")";
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        private Unicode(String surrogates) {
            super(null);
            Intrinsics.checkNotNullParameter(surrogates, "surrogates");
            this.surrogates = surrogates;
            String m872withoutDiversityimpl = Surrogates.m872withoutDiversityimpl(surrogates);
            this.exception = RenderableEmoji.exceptions.contains(m872withoutDiversityimpl) ? m872withoutDiversityimpl : null;
        }
    }

    public /* synthetic */ RenderableEmoji(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    @NotNull
    public abstract String getContentDescription();

    @NotNull
    public abstract String getUrl(boolean z10, int i10);

    private RenderableEmoji() {
    }
}
