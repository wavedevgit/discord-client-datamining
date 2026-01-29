package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.TextView;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.databinding.GuildViewBinding;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewClippingUtilsKt;
import com.discord.theme.R;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.view.SimpleDraweeView;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0007\u0018\u00002\u00020\u0001B'\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJE\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\r2\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\r2\n\b\u0001\u0010\u0013\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u00072\n\b\u0003\u0010\u0015\u001a\u0004\u0018\u00010\u0007¢\u0006\u0002\u0010\u0016R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\f\u001a\u0004\u0018\u00010\rX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u000e\u001a\u0004\u0018\u00010\rX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0017"}, d2 = {"Lcom/discord/chat/presentation/message/view/GuildView;", "Landroid/widget/FrameLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "binding", "Lcom/discord/chat/databinding/GuildViewBinding;", "boundIconUrl", "", "boundShortGuildName", "configure", "", "iconUrl", "shortGuildName", "thumbnailBackgroundColor", "borderRadiusDp", "thumbnailTextColor", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;)V", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nGuildView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 GuildView.kt\ncom/discord/chat/presentation/message/view/GuildView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,68:1\n257#2,2:69\n257#2,2:71\n257#2,2:73\n257#2,2:75\n*S KotlinDebug\n*F\n+ 1 GuildView.kt\ncom/discord/chat/presentation/message/view/GuildView\n*L\n49#1:69,2\n50#1:71,2\n58#1:73,2\n59#1:75,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GuildView extends FrameLayout {
    @NotNull
    private final GuildViewBinding binding;
    private String boundIconUrl;
    private String boundShortGuildName;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public GuildView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public static /* synthetic */ void configure$default(GuildView guildView, String str, String str2, Integer num, Integer num2, Integer num3, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = null;
        }
        if ((i10 & 8) != 0) {
            num2 = null;
        }
        if ((i10 & 16) != 0) {
            num3 = null;
        }
        guildView.configure(str, str2, num, num2, num3);
    }

    public final void configure(String str, String str2, Integer num, Integer num2, Integer num3) {
        int colorCompat;
        int i10;
        int i11;
        if (Intrinsics.areEqual(this.boundIconUrl, str) && Intrinsics.areEqual(this.boundShortGuildName, str2)) {
            return;
        }
        this.boundIconUrl = str;
        this.boundShortGuildName = str2;
        int i12 = 0;
        if (str != null && !StringsKt.k0(str)) {
            SimpleDraweeView guildAvatar = this.binding.guildAvatar;
            Intrinsics.checkNotNullExpressionValue(guildAvatar, "guildAvatar");
            guildAvatar.setVisibility(0);
            TextView guildText = this.binding.guildText;
            Intrinsics.checkNotNullExpressionValue(guildText, "guildText");
            guildText.setVisibility(8);
            this.binding.guildAvatar.setImageURI(str);
            if (num != null) {
                i12 = num.intValue();
            }
            setBackgroundColor(i12);
        } else {
            SimpleDraweeView guildAvatar2 = this.binding.guildAvatar;
            Intrinsics.checkNotNullExpressionValue(guildAvatar2, "guildAvatar");
            guildAvatar2.setVisibility(8);
            TextView guildText2 = this.binding.guildText;
            Intrinsics.checkNotNullExpressionValue(guildText2, "guildText");
            guildText2.setVisibility(0);
            this.binding.guildText.setText(str2);
            if (num != null) {
                colorCompat = num.intValue();
            } else {
                Context context = getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                colorCompat = ColorUtilsKt.getColorCompat(context, R.color.brand);
            }
            setBackgroundColor(colorCompat);
            TextView textView = this.binding.guildText;
            if (num3 != null) {
                i10 = num3.intValue();
            } else {
                i10 = -1;
            }
            textView.setTextColor(i10);
        }
        View root = this.binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        if (num2 != null) {
            i11 = num2.intValue();
        } else {
            i11 = 16;
        }
        ViewClippingUtilsKt.clipToRoundedRectangle(root, SizeUtilsKt.getDpToPx(i11));
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public GuildView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ GuildView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public GuildView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        GuildViewBinding inflate = GuildViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        View root = inflate.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        ViewClippingUtilsKt.clipToRoundedRectangle(root, SizeUtilsKt.getDpToPx(16));
        TextView textView = inflate.guildText;
        Intrinsics.checkNotNull(textView);
        SetTextSizeSpKt.setTextSizeSp(textView, 14.0f);
        DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimaryNormal);
    }
}
