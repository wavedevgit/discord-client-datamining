package com.discord.chat.presentation.message.view.botuikit.components;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Color;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.chat.R;
import com.discord.chat.bridge.botuikit.CheckpointApplication;
import com.discord.chat.bridge.botuikit.CheckpointCardComponent;
import com.discord.chat.bridge.botuikit.CheckpointDataV2025;
import com.discord.chat.bridge.botuikit.CheckpointEmoji;
import com.discord.chat.bridge.botuikit.CheckpointGuild;
import com.discord.chat.databinding.MessageComponentCheckpointCardViewBinding;
import com.discord.chat.presentation.message.view.botuikit.ComponentContext;
import com.discord.chat.presentation.message.view.botuikit.ComponentProvider;
import com.discord.chat.presentation.message.view.botuikit.ComponentView;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.icons.IconUrlUtils;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.primitives.ApplicationId;
import com.discord.primitives.GuildId;
import com.discord.react_strings.I18nMessage;
import com.discord.react_strings.I18nUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Locale;
import java.util.Map;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KClass;
import or.o;
import or.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u008c\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\b\u000b\n\u0002\u0010\u0011\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u0000 >2\u00020\u00012\b\u0012\u0004\u0012\u00020\u00030\u0002:\u0001>B'\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\b\u0002\u0010\b\u001a\u00020\t¢\u0006\u0004\b\n\u0010\u000bJ\u000e\u0010\"\u001a\b\u0012\u0004\u0012\u00020\u00030#H\u0016J \u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020\u00032\u0006\u0010'\u001a\u00020(2\u0006\u0010)\u001a\u00020*H\u0016J\u0018\u0010+\u001a\u00020%2\u0006\u0010,\u001a\u00020-2\u0006\u0010.\u001a\u00020\tH\u0003J\u0018\u0010/\u001a\u00020%2\u0006\u0010)\u001a\u00020*2\u0006\u0010,\u001a\u00020-H\u0003J\u0012\u00100\u001a\u00020%2\b\u00101\u001a\u0004\u0018\u000102H\u0002J\u0012\u00103\u001a\u00020%2\b\u00104\u001a\u0004\u0018\u000105H\u0002J\u0012\u00106\u001a\u00020%2\b\u00107\u001a\u0004\u0018\u000108H\u0002J\u0018\u00109\u001a\u00020%2\u0006\u0010:\u001a\u00020;2\u0006\u0010<\u001a\u00020=H\u0002R\u001a\u0010\f\u001a\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\t0\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u0011\u0010\u0010\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\u0013\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0012R\u0011\u0010\u0015\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0012R\u0011\u0010\u0017\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0012R\u0018\u0010\u0019\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\t0\u001aX\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u001bR\u001b\u0010\u001c\u001a\u00020\u001d8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b \u0010!\u001a\u0004\b\u001e\u0010\u001f¨\u0006?"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/components/CheckpointCardComponentView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentView;", "Lcom/discord/chat/bridge/botuikit/CheckpointCardComponent;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "cardColorMap", "", "", "cardDefaultColor", "secondaryColor", "getSecondaryColor", "()I", "black", "getBlack", "transparent", "getTransparent", "barUnfilledColor", "getBarUnfilledColor", "barIds", "", "[Ljava/lang/Integer;", "binding", "Lcom/discord/chat/databinding/MessageComponentCheckpointCardViewBinding;", "getBinding", "()Lcom/discord/chat/databinding/MessageComponentCheckpointCardViewBinding;", "binding$delegate", "Lkotlin/Lazy;", "getComponentType", "Lkotlin/reflect/KClass;", "configure", "", "component", "componentProvider", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", "componentContext", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentContext;", "configurePowerBar", "checkpointData", "Lcom/discord/chat/bridge/botuikit/CheckpointDataV2025;", "cardColor", "configureFooter", "configureEmoji", "topEmoji", "Lcom/discord/chat/bridge/botuikit/CheckpointEmoji;", "configureApplication", "topGame", "Lcom/discord/chat/bridge/botuikit/CheckpointApplication;", "configureGuild", "topGuild", "Lcom/discord/chat/bridge/botuikit/CheckpointGuild;", "adjustImageLayout", "isImageVisible", "", "view", "Lcom/facebook/drawee/view/SimpleDraweeView;", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nCheckpointCardComponentView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CheckpointCardComponentView.kt\ncom/discord/chat/presentation/message/view/botuikit/components/CheckpointCardComponentView\n+ 2 Color.kt\nandroidx/core/graphics/ColorKt\n+ 3 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,355:1\n404#2:356\n404#2:357\n404#2:358\n404#2:359\n404#2:360\n404#2:361\n404#2:362\n404#2:363\n404#2:364\n404#2:365\n404#2:366\n404#2:367\n404#2:368\n404#2:369\n404#2:370\n404#2:371\n404#2:372\n13472#3,2:373\n*S KotlinDebug\n*F\n+ 1 CheckpointCardComponentView.kt\ncom/discord/chat/presentation/message/view/botuikit/components/CheckpointCardComponentView\n*L\n47#1:356\n48#1:357\n49#1:358\n50#1:359\n51#1:360\n52#1:361\n53#1:362\n54#1:363\n55#1:364\n56#1:365\n59#1:366\n60#1:367\n61#1:368\n62#1:369\n227#1:370\n269#1:371\n302#1:372\n70#1:373,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CheckpointCardComponentView extends ConstraintLayout implements ComponentView<CheckpointCardComponent> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final Integer[] barIds;
    private final int barUnfilledColor;
    @NotNull
    private final Lazy binding$delegate;
    private final int black;
    @NotNull
    private final Map<String, Integer> cardColorMap;
    private final int cardDefaultColor;
    private final int secondaryColor;
    private final int transparent;

    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0016\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t¨\u0006\n"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/components/CheckpointCardComponentView$Companion;", "", "<init>", "()V", "inflateComponent", "Lcom/discord/chat/presentation/message/view/botuikit/components/CheckpointCardComponentView;", "context", "Landroid/content/Context;", "root", "Landroid/view/ViewGroup;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final CheckpointCardComponentView inflateComponent(@NotNull Context context, @NotNull ViewGroup root) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(root, "root");
            CheckpointCardComponentView root2 = MessageComponentCheckpointCardViewBinding.inflate(LayoutInflater.from(context), root, false).getRoot();
            Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
            return root2;
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public CheckpointCardComponentView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void adjustImageLayout(boolean z10, SimpleDraweeView simpleDraweeView) {
        if (z10) {
            int i10 = this.black;
            ViewBackgroundUtilsKt.setBackgroundRectangle(simpleDraweeView, i10, 0, Integer.valueOf(i10), SizeUtilsKt.getDpToPx(2));
            simpleDraweeView.getLayoutParams().width = SizeUtilsKt.getDpToPx(14);
            simpleDraweeView.getLayoutParams().height = SizeUtilsKt.getDpToPx(14);
            return;
        }
        int i11 = this.transparent;
        ViewBackgroundUtilsKt.setBackgroundRectangle(simpleDraweeView, i11, 0, Integer.valueOf(i11), 0);
        simpleDraweeView.getLayoutParams().width = SizeUtilsKt.getDpToPx(16);
        simpleDraweeView.getLayoutParams().height = SizeUtilsKt.getDpToPx(16);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MessageComponentCheckpointCardViewBinding binding_delegate$lambda$6(CheckpointCardComponentView checkpointCardComponentView, Context context) {
        MessageComponentCheckpointCardViewBinding bind = MessageComponentCheckpointCardViewBinding.bind(checkpointCardComponentView);
        TextView[] textViewArr = {bind.messageCount, bind.voiceMinutes, bind.emojiCount, bind.emojiName, bind.applicationName, bind.guildName};
        for (int i10 = 0; i10 < 6; i10++) {
            TextView textView = textViewArr[i10];
            Intrinsics.checkNotNull(textView);
            DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimaryMedium);
        }
        TextView title = bind.title;
        Intrinsics.checkNotNullExpressionValue(title, "title");
        DiscordFontUtilsKt.setDiscordFont(title, DiscordFont.DisplayExtraBold);
        TextView cta = bind.cta;
        Intrinsics.checkNotNullExpressionValue(cta, "cta");
        DiscordFontUtilsKt.setDiscordFont(cta, DiscordFont.PrimaryBold);
        TextView powerLevelNumber = bind.powerLevelNumber;
        Intrinsics.checkNotNullExpressionValue(powerLevelNumber, "powerLevelNumber");
        DiscordFontUtilsKt.setDiscordFont(powerLevelNumber, DiscordFont.CodeBold);
        ImageView imageView = new ImageView(context);
        imageView.setId(View.generateViewId());
        checkpointCardComponentView.barIds[0] = Integer.valueOf(imageView.getId());
        imageView.setImageResource(R.drawable.checkpoint_power_start);
        ConstraintLayout.LayoutParams layoutParams = new ConstraintLayout.LayoutParams(SizeUtilsKt.getDpToPx(4), SizeUtilsKt.getDpToPx(6));
        layoutParams.setMarginStart(SizeUtilsKt.getDpToPx(2));
        imageView.setLayoutParams(layoutParams);
        ImageView imageView2 = new ImageView(context);
        imageView2.setId(View.generateViewId());
        checkpointCardComponentView.barIds[9] = Integer.valueOf(imageView2.getId());
        imageView2.setImageResource(R.drawable.checkpoint_power_end);
        ConstraintLayout.LayoutParams layoutParams2 = new ConstraintLayout.LayoutParams(SizeUtilsKt.getDpToPx(4), SizeUtilsKt.getDpToPx(6));
        layoutParams2.setMarginStart(SizeUtilsKt.getDpToPx(2));
        imageView2.setLayoutParams(layoutParams2);
        LinearLayout linearLayout = bind.powerBar;
        linearLayout.addView(imageView);
        for (int i11 = 1; i11 < 9; i11++) {
            ImageView imageView3 = new ImageView(context);
            imageView3.setId(View.generateViewId());
            checkpointCardComponentView.barIds[i11] = Integer.valueOf(imageView3.getId());
            imageView3.setImageResource(R.drawable.checkpoint_power_mid);
            ConstraintLayout.LayoutParams layoutParams3 = new ConstraintLayout.LayoutParams(SizeUtilsKt.getDpToPx(4), SizeUtilsKt.getDpToPx(6));
            layoutParams3.setMarginStart(SizeUtilsKt.getDpToPx(2));
            imageView3.setLayoutParams(layoutParams3);
            linearLayout.addView(imageView3);
        }
        linearLayout.addView(imageView2);
        return bind;
    }

    private final void configureApplication(CheckpointApplication checkpointApplication) {
        CharSequence i18nFormat$default;
        ApplicationId applicationId;
        boolean z10;
        TextView textView = getBinding().applicationName;
        String str = null;
        if (checkpointApplication == null || (i18nFormat$default = checkpointApplication.getApplicationName()) == null) {
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            i18nFormat$default = I18nUtilsKt.i18nFormat$default(context, I18nMessage.NO_GAMES, null, 2, null);
        }
        textView.setText(i18nFormat$default);
        if (checkpointApplication != null) {
            applicationId = ApplicationId.m1046boximpl(checkpointApplication.m258getApplicationIdVavddsQ());
        } else {
            applicationId = null;
        }
        if (applicationId != null && checkpointApplication.getApplicationImageId() != null) {
            str = IconUrlUtils.m913getApplicationIconweIltyw$default(IconUrlUtils.INSTANCE, ApplicationId.m1046boximpl(checkpointApplication.m258getApplicationIdVavddsQ()), checkpointApplication.getApplicationImageId(), 0, 4, null);
        }
        if (str != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        SimpleDraweeView simpleDraweeView = getBinding().applicationImage;
        if (z10) {
            simpleDraweeView.setImageURI(str);
            simpleDraweeView.clearColorFilter();
        } else {
            simpleDraweeView.setImageResource(R.drawable.ic_unknown_game_icon_16dp);
            Intrinsics.checkNotNull(simpleDraweeView);
            ColorUtilsKt.setTintColor(simpleDraweeView, Integer.valueOf(this.black));
        }
        Intrinsics.checkNotNull(simpleDraweeView);
        adjustImageLayout(z10, simpleDraweeView);
        FrameLayout frameLayout = getBinding().applicationStroke;
        if (checkpointApplication != null && z10) {
            frameLayout.setBackgroundColor(this.black);
            frameLayout.setPadding(SizeUtilsKt.getDpToPx(1), SizeUtilsKt.getDpToPx(1), 0, 0);
            return;
        }
        frameLayout.setBackgroundColor(Color.parseColor("#00000000"));
        frameLayout.setPadding(0, 0, 0, 0);
    }

    private final void configureEmoji(CheckpointEmoji checkpointEmoji) {
        String str;
        String str2;
        CharSequence i18nFormat$default;
        Long l10;
        String str3;
        String str4;
        boolean z10;
        int i10;
        boolean z11;
        int i11;
        TextView textView = getBinding().emojiName;
        String str5 = null;
        if (checkpointEmoji != null) {
            str = checkpointEmoji.getEmojiSurrogateName();
        } else {
            str = null;
        }
        if (str != null) {
            i18nFormat$default = checkpointEmoji.getEmojiSurrogateName();
        } else {
            if (checkpointEmoji != null) {
                str2 = checkpointEmoji.getEmojiName();
            } else {
                str2 = null;
            }
            if (str2 != null) {
                i18nFormat$default = ":" + checkpointEmoji.getEmojiName() + ":";
            } else {
                Context context = getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                i18nFormat$default = I18nUtilsKt.i18nFormat$default(context, I18nMessage.NO_EMOJI_TITLE, null, 2, null);
            }
        }
        textView.setText(i18nFormat$default);
        if (checkpointEmoji != null) {
            l10 = checkpointEmoji.getEmojiId();
        } else {
            l10 = null;
        }
        if (l10 != null) {
            str3 = IconUrlUtils.getCustomEmojiUrl$default(IconUrlUtils.INSTANCE, checkpointEmoji.getEmojiId().longValue(), false, null, 4, null);
        } else {
            str3 = null;
        }
        if (checkpointEmoji != null) {
            str4 = checkpointEmoji.getEmojiSurrogateName();
        } else {
            str4 = null;
        }
        if (str4 != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        SimpleDraweeView simpleDraweeView = getBinding().emojiImage;
        int i12 = 8;
        if (z10) {
            i10 = 8;
        } else {
            i10 = 0;
        }
        simpleDraweeView.setVisibility(i10);
        if (str3 != null) {
            simpleDraweeView.setImageURI(str3);
            simpleDraweeView.clearColorFilter();
        } else if (!z10) {
            simpleDraweeView.setImageResource(R.drawable.ic_unknown_game_icon_16dp);
            Intrinsics.checkNotNull(simpleDraweeView);
            ColorUtilsKt.setTintColor(simpleDraweeView, Integer.valueOf(this.black));
        }
        if (str3 != null) {
            z11 = true;
        } else {
            z11 = false;
        }
        Intrinsics.checkNotNull(simpleDraweeView);
        adjustImageLayout(z11, simpleDraweeView);
        FrameLayout frameLayout = getBinding().emojiStroke;
        if (z10) {
            i11 = 8;
        } else {
            i11 = 0;
        }
        frameLayout.setVisibility(i11);
        if (checkpointEmoji != null && (str3 != null || z10)) {
            if (str3 != null && !z10) {
                frameLayout.setBackgroundColor(this.black);
                frameLayout.setPadding(SizeUtilsKt.getDpToPx(1), SizeUtilsKt.getDpToPx(1), 0, 0);
            }
        } else {
            frameLayout.setBackgroundColor(Color.parseColor("#00000000"));
            frameLayout.setPadding(0, 0, 0, 0);
        }
        TextView textView2 = getBinding().unicodeEmojiImage;
        if (z10) {
            i12 = 0;
        }
        textView2.setVisibility(i12);
        if (checkpointEmoji != null) {
            str5 = checkpointEmoji.getEmojiName();
        }
        textView2.setText(str5);
        Intrinsics.checkNotNull(textView2);
        int i13 = this.black;
        ViewBackgroundUtilsKt.setBackgroundRectangle(textView2, i13, 0, Integer.valueOf(i13), SizeUtilsKt.getDpToPx(2));
    }

    @SuppressLint({"SetTextI18n"})
    private final void configureFooter(ComponentContext componentContext, CheckpointDataV2025 checkpointDataV2025) {
        int i10;
        ConstraintLayout constraintLayout = getBinding().footer;
        Intrinsics.checkNotNull(constraintLayout);
        ViewBackgroundUtilsKt.setBackgroundRectangle$default(constraintLayout, this.secondaryColor, 0.0f, 0.0f, 0.0f, 0.0f, null, 0, 126, null);
        CheckpointCardComponentViewKt.applyClickable(constraintLayout, componentContext, checkpointDataV2025, checkpointDataV2025.getClickable());
        TextView textView = getBinding().cta;
        if (checkpointDataV2025.getClickable() != null) {
            i10 = 0;
        } else {
            i10 = 4;
        }
        textView.setVisibility(i10);
        Context context = textView.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        String upperCase = I18nUtilsKt.i18nFormat$default(context, I18nMessage.START, null, 2, null).toString().toUpperCase(Locale.ROOT);
        Intrinsics.checkNotNullExpressionValue(upperCase, "toUpperCase(...)");
        textView.setText(upperCase);
        getBinding().title.setText("CHECKPOINT");
    }

    private final void configureGuild(CheckpointGuild checkpointGuild) {
        CharSequence i18nFormat$default;
        GuildId guildId;
        String str;
        boolean z10;
        TextView textView = getBinding().guildName;
        GuildId guildId2 = null;
        if (checkpointGuild == null || (i18nFormat$default = checkpointGuild.getGuildName()) == null) {
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            i18nFormat$default = I18nUtilsKt.i18nFormat$default(context, I18nMessage.NO_GUILDS, null, 2, null);
        }
        textView.setText(i18nFormat$default);
        if (checkpointGuild != null) {
            guildId = GuildId.m1072boximpl(checkpointGuild.m266getGuildIdfYKD8eg());
        } else {
            guildId = null;
        }
        if (guildId != null && checkpointGuild.getGuildIcon() != null) {
            str = IconUrlUtils.m915getForGuild14CJxO4$default(IconUrlUtils.INSTANCE, GuildId.m1072boximpl(checkpointGuild.m266getGuildIdfYKD8eg()), checkpointGuild.getGuildIcon(), null, false, null, 28, null);
        } else {
            str = null;
        }
        if (str != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        SimpleDraweeView simpleDraweeView = getBinding().guildImage;
        if (z10) {
            simpleDraweeView.setImageURI(str);
            simpleDraweeView.clearColorFilter();
        } else {
            if (checkpointGuild != null) {
                guildId2 = GuildId.m1072boximpl(checkpointGuild.m266getGuildIdfYKD8eg());
            }
            if (guildId2 != null) {
                simpleDraweeView.setImageResource(R.drawable.ic_guild_icon_16dp);
                Intrinsics.checkNotNull(simpleDraweeView);
                ColorUtilsKt.setTintColor(simpleDraweeView, Integer.valueOf(this.black));
            } else {
                simpleDraweeView.setImageResource(R.drawable.ic_unknown_game_icon_16dp);
                Intrinsics.checkNotNull(simpleDraweeView);
                ColorUtilsKt.setTintColor(simpleDraweeView, Integer.valueOf(this.black));
            }
        }
        Intrinsics.checkNotNull(simpleDraweeView);
        adjustImageLayout(z10, simpleDraweeView);
        FrameLayout frameLayout = getBinding().guildStroke;
        if (checkpointGuild == null) {
            frameLayout.setBackgroundColor(Color.parseColor("#00000000"));
            frameLayout.setPadding(0, 0, 0, 0);
            return;
        }
        frameLayout.setBackgroundColor(this.black);
        frameLayout.setPadding(SizeUtilsKt.getDpToPx(1), SizeUtilsKt.getDpToPx(1), 0, 0);
    }

    @SuppressLint({"SetTextI18n"})
    private final void configurePowerBar(CheckpointDataV2025 checkpointDataV2025, int i10) {
        ImageView imageView;
        int i11;
        getBinding().powerContainer.setBackgroundTintList(ColorStateList.valueOf(i10));
        getBinding().powerLevelLvl.setText("LVL ");
        getBinding().powerLevelNumber.setText(checkpointDataV2025.getPowerLevel());
        for (int i12 = 0; i12 < 10; i12++) {
            Integer num = this.barIds[i12];
            if (num != null && (imageView = (ImageView) findViewById(num.intValue())) != null) {
                if (i12 >= checkpointDataV2025.getPowerLevelUnits()) {
                    i11 = this.barUnfilledColor;
                } else {
                    i11 = this.black;
                }
                ColorUtilsKt.setTintColor(imageView, Integer.valueOf(i11));
            }
        }
    }

    private final MessageComponentCheckpointCardViewBinding getBinding() {
        return (MessageComponentCheckpointCardViewBinding) this.binding$delegate.getValue();
    }

    public final int getBarUnfilledColor() {
        return this.barUnfilledColor;
    }

    public final int getBlack() {
        return this.black;
    }

    @Override // com.discord.chat.presentation.message.view.botuikit.ComponentView
    @NotNull
    public KClass getComponentType() {
        return Reflection.getOrCreateKotlinClass(CheckpointCardComponent.class);
    }

    public final int getSecondaryColor() {
        return this.secondaryColor;
    }

    public final int getTransparent() {
        return this.transparent;
    }

    @Override // com.discord.chat.presentation.message.view.botuikit.ComponentView
    public void onRecycle(@NotNull ComponentProvider componentProvider) {
        ComponentView.DefaultImpls.onRecycle(this, componentProvider);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public CheckpointCardComponentView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    @Override // com.discord.chat.presentation.message.view.botuikit.ComponentView
    public void configure(@NotNull CheckpointCardComponent component, @NotNull ComponentProvider componentProvider, @NotNull ComponentContext componentContext) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(componentProvider, "componentProvider");
        Intrinsics.checkNotNullParameter(componentContext, "componentContext");
        CheckpointDataV2025 checkpointData = component.getCheckpointData();
        Integer num = this.cardColorMap.get(checkpointData.getCardId());
        int intValue = num != null ? num.intValue() : this.cardDefaultColor;
        CheckpointEmoji topEmoji = checkpointData.getTopEmoji();
        CheckpointApplication topGame = checkpointData.getTopGame();
        CheckpointGuild topGuild = checkpointData.getTopGuild();
        CheckpointCardComponentView root = getBinding().getRoot();
        root.setVisibility(0);
        Intrinsics.checkNotNull(root);
        ViewBackgroundUtilsKt.setBackgroundRectangle$default(root, intValue, 0.0f, 0.0f, 0.0f, 0.0f, null, 0, 126, null);
        configurePowerBar(checkpointData, intValue);
        configureFooter(componentContext, checkpointData);
        getBinding().image.setBackgroundResource(R.drawable.checkpoint_card_bg);
        getBinding().image.getBackground().setAlpha(IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        getBinding().imageResource.setImageURI(checkpointData.getCardAssetUrl());
        getBinding().messageCount.setText(checkpointData.getMessagesString());
        getBinding().voiceMinutes.setText(checkpointData.getVoiceString());
        getBinding().emojiCount.setText(checkpointData.getReactionString());
        configureEmoji(topEmoji);
        configureGuild(topGuild);
        configureApplication(topGame);
    }

    public /* synthetic */ CheckpointCardComponentView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public CheckpointCardComponentView(@NotNull final Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        this.cardColorMap = o0.m(v.a("0", Integer.valueOf(Color.parseColor("#35ED7E"))), v.a("1", Integer.valueOf(Color.parseColor("#5EFDE2"))), v.a("2", Integer.valueOf(Color.parseColor("#8EB6FB"))), v.a("3", Integer.valueOf(Color.parseColor("#CA9EF9"))), v.a("4", Integer.valueOf(Color.parseColor("#F262D5"))), v.a("5", Integer.valueOf(Color.parseColor("#F75990"))), v.a("6", Integer.valueOf(Color.parseColor("#FF9138"))), v.a("7", Integer.valueOf(Color.parseColor("#FFE047"))), v.a("8", Integer.valueOf(Color.parseColor("#D9B777"))), v.a("9", Integer.valueOf(Color.parseColor("#EEEEEE"))));
        this.cardDefaultColor = ThemeManagerKt.getTheme().getTextBrand();
        this.secondaryColor = Color.parseColor("#10000000");
        this.black = Color.parseColor("#000000");
        this.transparent = Color.parseColor("#00000000");
        this.barUnfilledColor = Color.parseColor("#60000000");
        this.barIds = new Integer[10];
        this.binding$delegate = or.l.b(o.f44233i, new Function0() { // from class: com.discord.chat.presentation.message.view.botuikit.components.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MessageComponentCheckpointCardViewBinding binding_delegate$lambda$6;
                binding_delegate$lambda$6 = CheckpointCardComponentView.binding_delegate$lambda$6(CheckpointCardComponentView.this, context);
                return binding_delegate$lambda$6;
            }
        });
    }
}
