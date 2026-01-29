package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.bridge.codedlinks.AppMessageActionImpl;
import com.discord.chat.bridge.codedlinks.AppMessageEmbedImpl;
import com.discord.chat.databinding.AppMessageEmbedViewBinding;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.media.MediaContainingViewResizer;
import com.discord.chat.presentation.message.messagepart.MessageMargins;
import com.discord.core.DCDButton;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.overlapping_circles.OverlappingCirclesView;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.theme.R;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.view.SimpleDraweeView;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\u00020\u0001B'\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ&\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u0007J#\u0010\u001c\u001a\u0004\u0018\u00010\u00072\u0012\u0010\u001d\u001a\u000e\u0012\u0004\u0012\u00020\u001f\u0012\u0004\u0012\u00020\u00070\u001eH\u0002¢\u0006\u0002\u0010 J\u000e\u0010!\u001a\u00020\u00142\u0006\u0010\n\u001a\u00020\"J\u0016\u0010#\u001a\u00020\u00142\u0006\u0010\n\u001a\u00020\"2\u0006\u0010\u0017\u001a\u00020\u0018J \u0010$\u001a\u00020\u00142\u0006\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010%\u001a\u00020\u001fH\u0002R\u001a\u0010\n\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\f\u0010\r\"\u0004\b\u000e\u0010\u000fR\u0010\u0010\u0010\u001a\u0004\u0018\u00010\u0011X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006&"}, d2 = {"Lcom/discord/chat/presentation/message/view/AppMessageEmbedView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "view", "Lcom/discord/chat/databinding/AppMessageEmbedViewBinding;", "getView", "()Lcom/discord/chat/databinding/AppMessageEmbedViewBinding;", "setView", "(Lcom/discord/chat/databinding/AppMessageEmbedViewBinding;)V", "gradientDrawable", "Landroid/graphics/drawable/GradientDrawable;", "textColor", "initView", "", "margins", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "data", "Lcom/discord/chat/bridge/codedlinks/AppMessageEmbedImpl;", "eventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "constrainedWidth", "rgbToColorInt", "map", "", "", "(Ljava/util/Map;)Ljava/lang/Integer;", "setDefaultBackground", "Landroid/view/View;", "setBackgroundGradient", "handleTap", "actionId", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nAppMessageEmbedView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AppMessageEmbedView.kt\ncom/discord/chat/presentation/message/view/AppMessageEmbedView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,291:1\n257#2,2:292\n257#2,2:294\n257#2,2:296\n257#2,2:298\n257#2,2:300\n257#2,2:302\n257#2,2:304\n257#2,2:306\n257#2,2:308\n257#2,2:310\n257#2,2:312\n257#2,2:314\n257#2,2:316\n257#2,2:318\n257#2,2:323\n257#2,2:325\n1878#3,3:320\n*S KotlinDebug\n*F\n+ 1 AppMessageEmbedView.kt\ncom/discord/chat/presentation/message/view/AppMessageEmbedView\n*L\n91#1:292,2\n92#1:294,2\n102#1:296,2\n105#1:298,2\n108#1:300,2\n109#1:302,2\n113#1:304,2\n129#1:306,2\n136#1:308,2\n143#1:310,2\n150#1:312,2\n151#1:314,2\n155#1:316,2\n160#1:318,2\n222#1:323,2\n224#1:325,2\n176#1:320,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AppMessageEmbedView extends ConstraintLayout {
    private GradientDrawable gradientDrawable;
    private final int textColor;
    @NotNull
    private AppMessageEmbedViewBinding view;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public AppMessageEmbedView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void handleTap(ChatEventHandler chatEventHandler, AppMessageEmbedImpl appMessageEmbedImpl, String str) {
        String messageId = appMessageEmbedImpl.getMessageId();
        String appId = appMessageEmbedImpl.getAppId();
        String embedUrl = appMessageEmbedImpl.getEmbedUrl();
        if (embedUrl == null) {
            embedUrl = "";
        }
        chatEventHandler.onTapAppMessageEmbed(messageId, str, appId, embedUrl);
    }

    private final Integer rgbToColorInt(Map<String, Integer> map) {
        Integer num = map.get("r");
        Integer num2 = map.get("g");
        Integer num3 = map.get("b");
        if (num == null || num2 == null || num3 == null) {
            return null;
        }
        if (num.intValue() == 0 && num2.intValue() == 0 && num3.intValue() == 0) {
            return null;
        }
        return Integer.valueOf(Color.rgb(num.intValue(), num2.intValue(), num3.intValue()));
    }

    @NotNull
    public final AppMessageEmbedViewBinding getView() {
        return this.view;
    }

    public final void initView(@NotNull MessageMargins margins, @NotNull final AppMessageEmbedImpl data, @NotNull final ChatEventHandler eventHandler, int i10) {
        boolean z10;
        int i11;
        boolean z11;
        int i12;
        boolean z12;
        int i13;
        boolean z13;
        int i14;
        boolean z14;
        boolean z15;
        int l10;
        float f10;
        double d10;
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        AppMessageEmbedViewBinding appMessageEmbedViewBinding = this.view;
        TextView textView = appMessageEmbedViewBinding.title;
        textView.setTextColor(this.textColor);
        Intrinsics.checkNotNull(textView);
        SetTextSizeSpKt.setTextSizeSp(textView, 12.0f);
        DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimaryExtraBold);
        TextView textView2 = appMessageEmbedViewBinding.header;
        textView2.setTextColor(this.textColor);
        Intrinsics.checkNotNull(textView2);
        SetTextSizeSpKt.setTextSizeSp(textView2, 16.0f);
        DiscordFontUtilsKt.setDiscordFont(textView2, DiscordFont.PrimarySemibold);
        TextView textView3 = appMessageEmbedViewBinding.info;
        textView3.setTextColor(this.textColor);
        Intrinsics.checkNotNull(textView3);
        SetTextSizeSpKt.setTextSizeSp(textView3, 12.0f);
        DiscordFontUtilsKt.setDiscordFont(textView3, DiscordFont.PrimaryMedium);
        TextView textView4 = appMessageEmbedViewBinding.tagline;
        textView4.setTextColor(this.textColor);
        Intrinsics.checkNotNull(textView4);
        SetTextSizeSpKt.setTextSizeSp(textView4, 12.0f);
        DiscordFont discordFont = DiscordFont.PrimaryNormal;
        DiscordFontUtilsKt.setDiscordFont(textView4, discordFont);
        DCDButton dCDButton = appMessageEmbedViewBinding.linkIcon;
        Context context = dCDButton.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        dCDButton.setBackgroundColor(ColorUtilsKt.getColorCompat(context, R.color.transparent));
        ReactAsset reactAsset = ReactAsset.Link;
        Context context2 = dCDButton.getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        dCDButton.setIcon(reactAsset.getUri(context2), SizeUtilsKt.getDpToPx(16));
        dCDButton.setTextColor(Integer.valueOf(this.textColor));
        DCDButton dCDButton2 = appMessageEmbedViewBinding.linkIconTitle;
        Context context3 = dCDButton2.getContext();
        Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
        dCDButton2.setBackgroundColor(ColorUtilsKt.getColorCompat(context3, R.color.transparent));
        Context context4 = dCDButton2.getContext();
        Intrinsics.checkNotNullExpressionValue(context4, "getContext(...)");
        dCDButton2.setIcon(reactAsset.getUri(context4), SizeUtilsKt.getDpToPx(16));
        dCDButton2.setTextColor(Integer.valueOf(this.textColor));
        SimpleDraweeView simpleDraweeView = appMessageEmbedViewBinding.playerIcon;
        Intrinsics.checkNotNull(simpleDraweeView);
        ReactAssetUtilsKt.setReactAsset(simpleDraweeView, ReactAsset.Members);
        ColorUtilsKt.setTintColor(simpleDraweeView, Integer.valueOf(this.textColor));
        OverlappingCirclesView participants = appMessageEmbedViewBinding.participants;
        Intrinsics.checkNotNullExpressionValue(participants, "participants");
        int i15 = 8;
        participants.setVisibility(8);
        TextView participantsText = appMessageEmbedViewBinding.participantsText;
        Intrinsics.checkNotNullExpressionValue(participantsText, "participantsText");
        participantsText.setVisibility(8);
        TextView textView5 = appMessageEmbedViewBinding.participantsText;
        textView5.setTextColor(this.textColor);
        Intrinsics.checkNotNull(textView5);
        SetTextSizeSpKt.setTextSizeSp(textView5, 12.0f);
        DiscordFontUtilsKt.setDiscordFont(textView5, discordFont);
        this.view.header.setText(data.getHeader());
        TextView header = this.view.header;
        Intrinsics.checkNotNullExpressionValue(header, "header");
        int i16 = 1;
        boolean z16 = 0;
        if (data.getHeader() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            i11 = 0;
        } else {
            i11 = 8;
        }
        header.setVisibility(i11);
        this.view.info.setText(data.getInfo());
        TextView info = this.view.info;
        Intrinsics.checkNotNullExpressionValue(info, "info");
        if (data.getInfo() != null) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z11) {
            i12 = 0;
        } else {
            i12 = 8;
        }
        info.setVisibility(i12);
        this.view.tagline.setText(data.getTagline());
        TextView tagline = this.view.tagline;
        Intrinsics.checkNotNullExpressionValue(tagline, "tagline");
        if (data.getTagline() != null) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (z12) {
            i13 = 0;
        } else {
            i13 = 8;
        }
        tagline.setVisibility(i13);
        SimpleDraweeView playerIcon = this.view.playerIcon;
        Intrinsics.checkNotNullExpressionValue(playerIcon, "playerIcon");
        if (data.getTagline() != null) {
            z13 = true;
        } else {
            z13 = false;
        }
        if (z13) {
            i14 = 0;
        } else {
            i14 = 8;
        }
        playerIcon.setVisibility(i14);
        if (data.getStaticBannerSrc() != null) {
            SimpleDraweeView banner = this.view.banner;
            Intrinsics.checkNotNullExpressionValue(banner, "banner");
            banner.setVisibility(0);
            this.view.banner.setImageURI(data.getStaticBannerSrc());
            int width = MessageMargins.Companion.getWidth(margins, i10, false);
            if (Intrinsics.areEqual(data.getBannerRatio(), "activity")) {
                d10 = 1.7777777777777777d;
            } else {
                d10 = 2.8333333333333335d;
            }
            double d11 = width / d10;
            MediaContainingViewResizer mediaContainingViewResizer = MediaContainingViewResizer.INSTANCE;
            SimpleDraweeView banner2 = this.view.banner;
            Intrinsics.checkNotNullExpressionValue(banner2, "banner");
            int i17 = (int) d11;
            mediaContainingViewResizer.resizeLayoutParams(banner2, width, i17, width, i17, MediaContainingViewResizer.ResizeMode.Fill);
        } else {
            SimpleDraweeView banner3 = this.view.banner;
            Intrinsics.checkNotNullExpressionValue(banner3, "banner");
            banner3.setVisibility(8);
        }
        if (data.getTitle() != null) {
            TextView textView6 = this.view.title;
            String upperCase = data.getTitle().toUpperCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(upperCase, "toUpperCase(...)");
            textView6.setText(upperCase);
        } else {
            TextView title = this.view.title;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            title.setVisibility(8);
        }
        if (data.getIconSrc() != null) {
            this.view.appIcon.setImageURI(data.getIconSrc());
        } else {
            SimpleDraweeView appIcon = this.view.appIcon;
            Intrinsics.checkNotNullExpressionValue(appIcon, "appIcon");
            appIcon.setVisibility(8);
        }
        setBackgroundGradient(this, data);
        DCDButton linkIcon = this.view.linkIcon;
        Intrinsics.checkNotNullExpressionValue(linkIcon, "linkIcon");
        linkIcon.setVisibility(8);
        DCDButton linkIconTitle = this.view.linkIconTitle;
        Intrinsics.checkNotNullExpressionValue(linkIconTitle, "linkIconTitle");
        linkIconTitle.setVisibility(8);
        if (data.getEmbedUrl() != null) {
            if (data.getTitle() != null) {
                DCDButton linkIconTitle2 = this.view.linkIconTitle;
                Intrinsics.checkNotNullExpressionValue(linkIconTitle2, "linkIconTitle");
                linkIconTitle2.setVisibility(0);
                this.view.linkIconTitle.setOnClickButtonListener(new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.p
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        AppMessageEmbedView.this.handleTap(eventHandler, data, "link_copied");
                    }
                });
            } else {
                DCDButton linkIcon2 = this.view.linkIcon;
                Intrinsics.checkNotNullExpressionValue(linkIcon2, "linkIcon");
                linkIcon2.setVisibility(0);
                this.view.linkIcon.setOnClickButtonListener(new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.q
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        AppMessageEmbedView.this.handleTap(eventHandler, data, "link_copied");
                    }
                });
            }
        }
        List<AppMessageActionImpl> actions = data.getActions();
        if (actions != null && !actions.isEmpty()) {
            this.view.actionsContainer.removeAllViews();
            float size = 1.0f / data.getActions().size();
            int i18 = 0;
            for (Object obj : CollectionsKt.O0(data.getActions())) {
                int i19 = i18 + 1;
                if (i18 < 0) {
                    CollectionsKt.v();
                }
                AppMessageActionImpl appMessageActionImpl = (AppMessageActionImpl) obj;
                if (i18 == data.getActions().size() - i16) {
                    z14 = i16;
                } else {
                    z14 = z16;
                }
                String label = appMessageActionImpl.getLabel();
                final String id2 = appMessageActionImpl.getId();
                Boolean disabled = appMessageActionImpl.getDisabled();
                if (disabled != null) {
                    z15 = disabled.booleanValue();
                } else {
                    z15 = z16;
                }
                Context context5 = getContext();
                Intrinsics.checkNotNullExpressionValue(context5, "getContext(...)");
                int i20 = i15;
                int colorCompat = ColorUtilsKt.getColorCompat(context5, R.color.white_500);
                Context context6 = getContext();
                Intrinsics.checkNotNullExpressionValue(context6, "getContext(...)");
                int colorCompat2 = ColorUtilsKt.getColorCompat(context6, R.color.black_500);
                if (z14 != 0) {
                    l10 = colorCompat;
                } else {
                    l10 = r1.c.l(colorCompat, 30);
                }
                if (z14 != 0) {
                    colorCompat = colorCompat2;
                }
                int i21 = colorCompat;
                LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(0, -2);
                layoutParams.weight = size;
                if (i18 > 0) {
                    layoutParams.setMarginStart(SizeUtilsKt.getDpToPx(i20));
                }
                Context context7 = getContext();
                Intrinsics.checkNotNullExpressionValue(context7, "getContext(...)");
                float f11 = size;
                DCDButton dCDButton3 = new DCDButton(context7, null, 2, null);
                if (z15) {
                    f10 = 0.5f;
                } else {
                    f10 = 1.0f;
                }
                dCDButton3.setAlpha(f10);
                dCDButton3.setText(label);
                dCDButton3.setBackgroundColor(l10);
                dCDButton3.setTextColor(Integer.valueOf(i21));
                dCDButton3.setTextSizeSp(14.0f);
                dCDButton3.setDiscordFont(DiscordFont.PrimaryMedium);
                dCDButton3.setCornerRadius(SizeUtilsKt.getDpToPx(i20));
                dCDButton3.setLayoutParams(layoutParams);
                dCDButton3.setOnClickButtonListener(new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.r
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        AppMessageEmbedView.this.handleTap(eventHandler, data, id2);
                    }
                });
                this.view.actionsContainer.addView(dCDButton3);
                i18 = i19;
                i15 = i20;
                size = f11;
                i16 = 1;
                z16 = 0;
            }
            LinearLayout actionsContainer = this.view.actionsContainer;
            Intrinsics.checkNotNullExpressionValue(actionsContainer, "actionsContainer");
            actionsContainer.setVisibility(0);
            return;
        }
        LinearLayout actionsContainer2 = this.view.actionsContainer;
        Intrinsics.checkNotNullExpressionValue(actionsContainer2, "actionsContainer");
        actionsContainer2.setVisibility(8);
    }

    public final void setBackgroundGradient(@NotNull View view, @NotNull AppMessageEmbedImpl data) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(data, "data");
        if (data.getGradientColors() != null && data.getGradientColors().size() == 2) {
            Integer rgbToColorInt = rgbToColorInt(data.getGradientColors().get(0));
            Integer rgbToColorInt2 = rgbToColorInt(data.getGradientColors().get(1));
            if (rgbToColorInt != null && rgbToColorInt2 != null && rgbToColorInt.intValue() != 0 && rgbToColorInt2.intValue() != 0) {
                if (this.gradientDrawable == null) {
                    GradientDrawable gradientDrawable = new GradientDrawable();
                    gradientDrawable.setCornerRadius(SizeUtilsKt.getDpToPx(12));
                    gradientDrawable.setOrientation(GradientDrawable.Orientation.BL_TR);
                    this.gradientDrawable = gradientDrawable;
                }
                GradientDrawable gradientDrawable2 = this.gradientDrawable;
                if (gradientDrawable2 != null) {
                    gradientDrawable2.setColors(new int[]{rgbToColorInt.intValue(), rgbToColorInt2.intValue()});
                }
                view.setBackground(this.gradientDrawable);
            }
        }
    }

    public final void setDefaultBackground(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        ViewBackgroundUtilsKt.setBackgroundRectangle$default(view, ColorUtilsKt.getColorCompat(context, ThemeManagerKt.getTheme().getColorRes(R.color.primary_130, R.color.primary_630)), SizeUtilsKt.getDpToPx(12), null, 0, 12, null);
    }

    public final void setView(@NotNull AppMessageEmbedViewBinding appMessageEmbedViewBinding) {
        Intrinsics.checkNotNullParameter(appMessageEmbedViewBinding, "<set-?>");
        this.view = appMessageEmbedViewBinding;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public AppMessageEmbedView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ AppMessageEmbedView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AppMessageEmbedView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        AppMessageEmbedViewBinding inflate = AppMessageEmbedViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.view = inflate;
        this.textColor = ColorUtilsKt.getColorCompat(context, R.color.primary_230);
        setDefaultBackground(this);
    }
}
