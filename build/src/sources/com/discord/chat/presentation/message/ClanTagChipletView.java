package com.discord.chat.presentation.message;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.databinding.ClanTagChipletViewBinding;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.image.fresco.SetOptionalImageUrlKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewClippingUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.facebook.drawee.view.SimpleDraweeView;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0004\u0018\u0000 \u00172\u00020\u0001:\u0001\u0017B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J;\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\b\u0010\u000e\u001a\u0004\u0018\u00010\r2\u0006\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u00122\b\b\u0002\u0010\u0013\u001a\u00020\u0014¢\u0006\u0004\b\u0015\u0010\u0016R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0018"}, d2 = {"Lcom/discord/chat/presentation/message/ClanTagChipletView;", "Landroid/widget/FrameLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "binding", "Lcom/discord/chat/databinding/ClanTagChipletViewBinding;", "configure", "", "tagContent", "", "badgeUrl", "guildId", "Lcom/discord/primitives/GuildId;", "eventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "scale", "", "configure-D0ylKIU", "(Ljava/lang/String;Ljava/lang/String;JLcom/discord/chat/presentation/events/ChatEventHandler;F)V", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nClanTagChipletView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ClanTagChipletView.kt\ncom/discord/chat/presentation/message/ClanTagChipletView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,71:1\n257#2,2:72\n257#2,2:74\n*S KotlinDebug\n*F\n+ 1 ClanTagChipletView.kt\ncom/discord/chat/presentation/message/ClanTagChipletView\n*L\n48#1:72,2\n50#1:74,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ClanTagChipletView extends FrameLayout {
    private static final float BASE_BADGE_SIZE = 12.0f;
    private static final float BASE_HEIGHT = 18.0f;
    private static final float BASE_PADDING_HORIZONTAL = 4.0f;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final ClanTagChipletViewBinding binding;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\b"}, d2 = {"Lcom/discord/chat/presentation/message/ClanTagChipletView$Companion;", "", "<init>", "()V", "BASE_HEIGHT", "", "BASE_PADDING_HORIZONTAL", "BASE_BADGE_SIZE", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ClanTagChipletView(@NotNull Context context, @NotNull AttributeSet attrs) {
        super(context, attrs);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(attrs, "attrs");
        ClanTagChipletViewBinding inflate = ClanTagChipletViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        inflate.container.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundModStrong());
        LinearLayout container = inflate.container;
        Intrinsics.checkNotNullExpressionValue(container, "container");
        ViewClippingUtilsKt.clipToRoundedRectangle(container, SizeUtilsKt.getDpToPx(4));
        TextView tag = inflate.tag;
        Intrinsics.checkNotNullExpressionValue(tag, "tag");
        SetTextSizeSpKt.setTextSizeSp(tag, BASE_BADGE_SIZE);
        inflate.tag.setTextColor(ThemeManagerKt.getTheme().getTextDefault());
        TextView tag2 = inflate.tag;
        Intrinsics.checkNotNullExpressionValue(tag2, "tag");
        DiscordFontUtilsKt.setDiscordFont(tag2, DiscordFont.PrimarySemibold);
    }

    /* renamed from: configure-D0ylKIU$default  reason: not valid java name */
    public static /* synthetic */ void m503configureD0ylKIU$default(ClanTagChipletView clanTagChipletView, String str, String str2, long j10, ChatEventHandler chatEventHandler, float f10, int i10, Object obj) {
        if ((i10 & 16) != 0) {
            f10 = 1.0f;
        }
        clanTagChipletView.m504configureD0ylKIU(str, str2, j10, chatEventHandler, f10);
    }

    /* renamed from: configure-D0ylKIU  reason: not valid java name */
    public final void m504configureD0ylKIU(@NotNull String tagContent, String str, final long j10, final ChatEventHandler chatEventHandler, float f10) {
        Intrinsics.checkNotNullParameter(tagContent, "tagContent");
        this.binding.container.getLayoutParams().height = SizeUtilsKt.getDpToPx(BASE_HEIGHT * f10);
        int dpToPx = SizeUtilsKt.getDpToPx(4.0f * f10);
        this.binding.container.setPadding(dpToPx, 0, dpToPx, 0);
        if (str != null) {
            SimpleDraweeView badge = this.binding.badge;
            Intrinsics.checkNotNullExpressionValue(badge, "badge");
            SetOptionalImageUrlKt.setOptionalImageUrl$default(badge, str, null, null, null, 14, null);
            ViewGroup.LayoutParams layoutParams = this.binding.badge.getLayoutParams();
            float f11 = f10 * BASE_BADGE_SIZE;
            layoutParams.width = SizeUtilsKt.getDpToPx(f11);
            layoutParams.height = SizeUtilsKt.getDpToPx(f11);
            SimpleDraweeView badge2 = this.binding.badge;
            Intrinsics.checkNotNullExpressionValue(badge2, "badge");
            badge2.setVisibility(0);
        } else {
            SimpleDraweeView badge3 = this.binding.badge;
            Intrinsics.checkNotNullExpressionValue(badge3, "badge");
            badge3.setVisibility(8);
        }
        this.binding.tag.setText(tagContent);
        TextView tag = this.binding.tag;
        Intrinsics.checkNotNullExpressionValue(tag, "tag");
        SetTextSizeSpKt.setTextSizeSp(tag, f10 * BASE_BADGE_SIZE);
        if (chatEventHandler != null) {
            LinearLayout linearLayout = this.binding.container;
            Intrinsics.checkNotNull(linearLayout);
            NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(linearLayout, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.a
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    ChatEventHandler.this.mo455onTapClanTagChipletg3bFfsM(j10);
                }
            }, 1, null);
        }
    }
}
