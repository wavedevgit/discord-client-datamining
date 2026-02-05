package com.discord.mobile_voice_overlay.views;

import android.animation.Animator;
import android.animation.AnimatorInflater;
import android.animation.AnimatorSet;
import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;
import com.discord.SetTextSizeSpKt;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.activity.ActivityUtilities;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.mobile_voice_overlay.MobileVoiceOverlay;
import com.discord.mobile_voice_overlay.MobileVoiceOverlayAssets;
import com.discord.mobile_voice_overlay.MobileVoiceOverlayData;
import com.discord.mobile_voice_overlay.MobileVoiceOverlayDataUser;
import com.discord.mobile_voice_overlay.R;
import com.discord.mobile_voice_overlay.databinding.OverlayMenuBubbleBinding;
import com.discord.react_activities.ReactActivity;
import com.discord.theme.ThemeManagerKt;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000`\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u0011\b\u0016\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005B\u001b\b\u0016\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\u0004\u0010\bB#\b\u0016\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\t\u001a\u00020\n¢\u0006\u0004\b\u0004\u0010\u000bJ\u0012\u0010 \u001a\u00020\u00122\b\u0010!\u001a\u0004\u0018\u00010\"H\u0014J\b\u0010#\u001a\u00020\u0012H\u0014J\b\u0010$\u001a\u00020%H\u0016J\u0010\u0010&\u001a\u00020\u00122\u0006\u0010'\u001a\u00020(H\u0016J\u0010\u0010)\u001a\u00020\u00122\u0006\u0010*\u001a\u00020+H\u0016R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u00120\u0011X\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00120\u0011X\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00120\u0011X\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00120\u0011X\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00120\u0011X\u0082\u000e¢\u0006\u0002\n\u0000R \u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00120\u0011X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0018\u0010\u0019\"\u0004\b\u001a\u0010\u001bR\u0011\u0010\u001c\u001a\u00020\u001d8F¢\u0006\u0006\u001a\u0004\b\u001e\u0010\u001f¨\u0006,"}, d2 = {"Lcom/discord/mobile_voice_overlay/views/OverlayMenuBubbleDialog;", "Lcom/discord/mobile_voice_overlay/views/OverlayDialog;", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "attrs", "Landroid/util/AttributeSet;", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "attributeSetId", "", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "binding", "Lcom/discord/mobile_voice_overlay/databinding/OverlayMenuBubbleBinding;", "adapter", "Lcom/discord/mobile_voice_overlay/views/VoiceUserAdapter;", "onGetInvitePressed", "Lkotlin/Function0;", "", "onSwitchChannelsPressed", "onOpenDiscordPressed", "onMutePressed", "onDisconnectPressed", "onShowSelectorDialog", "getOnShowSelectorDialog", "()Lkotlin/jvm/functions/Function0;", "setOnShowSelectorDialog", "(Lkotlin/jvm/functions/Function0;)V", "linkedAnchorView", "Landroid/view/View;", "getLinkedAnchorView", "()Landroid/view/View;", "onConfigurationChanged", "newConfig", "Landroid/content/res/Configuration;", "onAttachedToWindow", "getClosingAnimator", "Landroid/animation/Animator;", "setData", "data", "Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayData;", "setAssets", "assets", "Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayAssets;", "mobile_voice_overlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nOverlayMenuBubbleDialog.kt\nKotlin\n*S Kotlin\n*F\n+ 1 OverlayMenuBubbleDialog.kt\ncom/discord/mobile_voice_overlay/views/OverlayMenuBubbleDialog\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,227:1\n1#2:228\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class OverlayMenuBubbleDialog extends OverlayDialog {
    @NotNull
    private final VoiceUserAdapter adapter;
    @NotNull
    private final OverlayMenuBubbleBinding binding;
    @NotNull
    private Function0<Unit> onDisconnectPressed;
    @NotNull
    private Function0<Unit> onGetInvitePressed;
    @NotNull
    private Function0<Unit> onMutePressed;
    @NotNull
    private Function0<Unit> onOpenDiscordPressed;
    @NotNull
    private Function0<Unit> onShowSelectorDialog;
    @NotNull
    private Function0<Unit> onSwitchChannelsPressed;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public OverlayMenuBubbleDialog(@NotNull Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        OverlayMenuBubbleBinding inflate = OverlayMenuBubbleBinding.inflate(LayoutInflater.from(getContext()), this, true);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.adapter = new VoiceUserAdapter();
        this.onGetInvitePressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        this.onSwitchChannelsPressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        this.onOpenDiscordPressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.m
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        this.onMutePressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        this.onDisconnectPressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.o
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        this.onShowSelectorDialog = new Function0() { // from class: com.discord.mobile_voice_overlay.views.p
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        inflate.overlayMenu.getBinding().overlayInviteLink.setOnClickListener(new View.OnClickListener() { // from class: com.discord.mobile_voice_overlay.views.q
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                OverlayMenuBubbleDialog._init_$lambda$6(OverlayMenuBubbleDialog.this, view);
            }
        });
        inflate.overlayMenu.getBinding().overlaySwitchChannels.setOnClickListener(new View.OnClickListener() { // from class: com.discord.mobile_voice_overlay.views.r
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                OverlayMenuBubbleDialog._init_$lambda$7(OverlayMenuBubbleDialog.this, view);
            }
        });
        inflate.overlayMenu.getBinding().overlayOpenApp.setOnClickListener(new View.OnClickListener() { // from class: com.discord.mobile_voice_overlay.views.s
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                OverlayMenuBubbleDialog._init_$lambda$8(OverlayMenuBubbleDialog.this, view);
            }
        });
        inflate.overlayMenu.getBinding().muteToggle.setOnClickListener(new View.OnClickListener() { // from class: com.discord.mobile_voice_overlay.views.e
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                OverlayMenuBubbleDialog._init_$lambda$9(OverlayMenuBubbleDialog.this, view);
            }
        });
        inflate.overlayMenu.getBinding().disconnectBtn.setOnClickListener(new View.OnClickListener() { // from class: com.discord.mobile_voice_overlay.views.k
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                OverlayMenuBubbleDialog._init_$lambda$10(OverlayMenuBubbleDialog.this, view);
            }
        });
        setClipChildren(false);
        TextView textView = inflate.overlayMembersOverflowText;
        Intrinsics.checkNotNull(textView);
        DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimaryExtraBold);
        SetTextSizeSpKt.setTextSizeSp(textView, 20.0f);
        TextView textView2 = inflate.overlayMembersOverflowText;
        textView2.setTextColor(ThemeManagerKt.getTheme().getMobileTextHeadingPrimary());
        Intrinsics.checkNotNull(textView2);
        ViewBackgroundUtilsKt.setBackgroundOval$default(textView2, ThemeManagerKt.getTheme().getBackgroundBaseLowest(), 0, 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void _init_$lambda$10(OverlayMenuBubbleDialog overlayMenuBubbleDialog, View view) {
        overlayMenuBubbleDialog.onDisconnectPressed.invoke();
        overlayMenuBubbleDialog.closeDialog();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void _init_$lambda$6(OverlayMenuBubbleDialog overlayMenuBubbleDialog, View view) {
        overlayMenuBubbleDialog.onGetInvitePressed.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void _init_$lambda$7(OverlayMenuBubbleDialog overlayMenuBubbleDialog, View view) {
        overlayMenuBubbleDialog.onSwitchChannelsPressed.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void _init_$lambda$8(OverlayMenuBubbleDialog overlayMenuBubbleDialog, View view) {
        overlayMenuBubbleDialog.onOpenDiscordPressed.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void _init_$lambda$9(OverlayMenuBubbleDialog overlayMenuBubbleDialog, View view) {
        overlayMenuBubbleDialog.onMutePressed.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setData$lambda$21(OverlayMenuBubbleDialog overlayMenuBubbleDialog, MobileVoiceOverlayData mobileVoiceOverlayData) {
        MobileVoiceOverlay.Companion companion = MobileVoiceOverlay.Companion;
        Context context = overlayMenuBubbleDialog.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        companion.startHeadlessTask(context, "GenerateInvite", w1.c.a(or.v.a("channelId", String.valueOf(mobileVoiceOverlayData.m962getChannelIdo4g7jtM()))));
        MobileVoiceOverlayAssets overlayAssets = overlayMenuBubbleDialog.getOverlayAssets();
        if (overlayAssets != null) {
            Toast.makeText(overlayMenuBubbleDialog.getContext(), overlayAssets.getInviteLinkCopied(), 0).show();
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setData$lambda$22(OverlayMenuBubbleDialog overlayMenuBubbleDialog) {
        overlayMenuBubbleDialog.getOnDialogClosed().invoke(overlayMenuBubbleDialog);
        overlayMenuBubbleDialog.onShowSelectorDialog.invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setData$lambda$24(OverlayMenuBubbleDialog overlayMenuBubbleDialog, MobileVoiceOverlayData mobileVoiceOverlayData) {
        ActivityUtilities activityUtilities = ActivityUtilities.INSTANCE;
        Context context = overlayMenuBubbleDialog.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Intent intent = new Intent("android.intent.action.VIEW", null, overlayMenuBubbleDialog.getContext(), ReactActivity.Registry.getMainActivity());
        intent.addCategory("android.intent.category.HOME");
        intent.addFlags(268435456);
        Unit unit = Unit.f31988a;
        ActivityUtilities.startActivityAsync$default(activityUtilities, context, intent, null, 4, null);
        MobileVoiceOverlay.Companion companion = MobileVoiceOverlay.Companion;
        Context context2 = overlayMenuBubbleDialog.getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        companion.startHeadlessTask(context2, "SelectChannel", w1.c.a(or.v.a("channelId", String.valueOf(mobileVoiceOverlayData.m962getChannelIdo4g7jtM()))));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setData$lambda$25(OverlayMenuBubbleDialog overlayMenuBubbleDialog) {
        MobileVoiceOverlay.Companion companion = MobileVoiceOverlay.Companion;
        Context context = overlayMenuBubbleDialog.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        MobileVoiceOverlay.Companion.startHeadlessTask$default(companion, context, "ToggleSelfMute", null, 4, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setData$lambda$26(OverlayMenuBubbleDialog overlayMenuBubbleDialog, MobileVoiceOverlayData mobileVoiceOverlayData) {
        MobileVoiceOverlay.Companion companion = MobileVoiceOverlay.Companion;
        Context context = overlayMenuBubbleDialog.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        companion.startHeadlessTask(context, "Disconnect", w1.c.a(or.v.a("channelId", String.valueOf(mobileVoiceOverlayData.m962getChannelIdo4g7jtM()))));
        return Unit.f31988a;
    }

    @Override // com.discord.mobile_voice_overlay.views.OverlayDialog
    @NotNull
    public Animator getClosingAnimator() {
        AnimatorSet animatorSet = new AnimatorSet();
        animatorSet.setStartDelay(getResources().getInteger(17694720));
        Animator loadAnimator = AnimatorInflater.loadAnimator(this.binding.overlayMenu.getContext(), R.animator.overlay_slide_down_fade_out);
        loadAnimator.setTarget(this.binding.overlayMenu);
        Unit unit = Unit.f31988a;
        Animator loadAnimator2 = AnimatorInflater.loadAnimator(getContext(), R.animator.overlay_slide_up_fade_out);
        loadAnimator2.setTarget(this.binding.overlayHeader);
        animatorSet.playTogether(loadAnimator, loadAnimator2);
        return animatorSet;
    }

    @NotNull
    public final View getLinkedAnchorView() {
        View overlayLinkedAnchorView = this.binding.overlayLinkedAnchorView;
        Intrinsics.checkNotNullExpressionValue(overlayLinkedAnchorView, "overlayLinkedAnchorView");
        return overlayLinkedAnchorView;
    }

    @NotNull
    public final Function0<Unit> getOnShowSelectorDialog() {
        return this.onShowSelectorDialog;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        this.binding.overlayMenu.setAlpha(0.0f);
        this.binding.overlayHeader.setAlpha(0.0f);
        AnimatorSet animatorSet = new AnimatorSet();
        Animator loadAnimator = AnimatorInflater.loadAnimator(this.binding.overlayMenu.getContext(), R.animator.overlay_slide_up_fade_in);
        loadAnimator.setTarget(this.binding.overlayMenu);
        Unit unit = Unit.f31988a;
        Animator loadAnimator2 = AnimatorInflater.loadAnimator(getContext(), R.animator.overlay_slide_down_fade_in);
        loadAnimator2.setTarget(this.binding.overlayHeader);
        animatorSet.playTogether(loadAnimator, loadAnimator2);
        animatorSet.setStartDelay(getResources().getInteger(17694720));
        animatorSet.start();
        this.binding.overlayMembersRecycler.setAdapter(this.adapter);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.discord.mobile_voice_overlay.views.OverlayDialog, com.discord.mobile_voice_overlay.views.OverlayBubbleWrap, android.view.View
    public void onConfigurationChanged(Configuration configuration) {
        super.onConfigurationChanged(configuration);
        getOnDialogClosed().invoke(this);
    }

    @Override // com.discord.mobile_voice_overlay.views.OverlayView
    public void setAssets(@NotNull MobileVoiceOverlayAssets assets) {
        Intrinsics.checkNotNullParameter(assets, "assets");
        super.setAssets(assets);
        this.binding.overlayMenu.setAssets(assets);
    }

    @Override // com.discord.mobile_voice_overlay.views.OverlayView
    public void setData(@NotNull final MobileVoiceOverlayData data) {
        List<MobileVoiceOverlayDataUser> T0;
        int i10;
        String str;
        Intrinsics.checkNotNullParameter(data, "data");
        List<MobileVoiceOverlayDataUser> users = data.getUsers();
        if (users.size() < 2) {
            T0 = CollectionsKt.l();
        } else {
            T0 = CollectionsKt.T0(users, kotlin.ranges.d.u(1, users.size()));
        }
        this.adapter.setData(T0);
        TextView textView = this.binding.overlayMembersOverflowText;
        if (data.getExtraUsers() == 0) {
            i10 = 8;
        } else {
            i10 = 0;
        }
        textView.setVisibility(i10);
        if (data.getExtraUsers() == 0) {
            str = null;
        } else {
            str = "+" + data.getExtraUsers();
        }
        textView.setText(str);
        this.binding.overlayMenu.setData(data);
        this.onGetInvitePressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit data$lambda$21;
                data$lambda$21 = OverlayMenuBubbleDialog.setData$lambda$21(OverlayMenuBubbleDialog.this, data);
                return data$lambda$21;
            }
        };
        this.onSwitchChannelsPressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit data$lambda$22;
                data$lambda$22 = OverlayMenuBubbleDialog.setData$lambda$22(OverlayMenuBubbleDialog.this);
                return data$lambda$22;
            }
        };
        this.onOpenDiscordPressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.h
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit data$lambda$24;
                data$lambda$24 = OverlayMenuBubbleDialog.setData$lambda$24(OverlayMenuBubbleDialog.this, data);
                return data$lambda$24;
            }
        };
        this.onMutePressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.i
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit data$lambda$25;
                data$lambda$25 = OverlayMenuBubbleDialog.setData$lambda$25(OverlayMenuBubbleDialog.this);
                return data$lambda$25;
            }
        };
        this.onDisconnectPressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.j
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit data$lambda$26;
                data$lambda$26 = OverlayMenuBubbleDialog.setData$lambda$26(OverlayMenuBubbleDialog.this, data);
                return data$lambda$26;
            }
        };
    }

    public final void setOnShowSelectorDialog(@NotNull Function0<Unit> function0) {
        Intrinsics.checkNotNullParameter(function0, "<set-?>");
        this.onShowSelectorDialog = function0;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public OverlayMenuBubbleDialog(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        OverlayMenuBubbleBinding inflate = OverlayMenuBubbleBinding.inflate(LayoutInflater.from(getContext()), this, true);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.adapter = new VoiceUserAdapter();
        this.onGetInvitePressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        this.onSwitchChannelsPressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        this.onOpenDiscordPressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.m
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        this.onMutePressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        this.onDisconnectPressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.o
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        this.onShowSelectorDialog = new Function0() { // from class: com.discord.mobile_voice_overlay.views.p
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        inflate.overlayMenu.getBinding().overlayInviteLink.setOnClickListener(new View.OnClickListener() { // from class: com.discord.mobile_voice_overlay.views.q
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                OverlayMenuBubbleDialog._init_$lambda$6(OverlayMenuBubbleDialog.this, view);
            }
        });
        inflate.overlayMenu.getBinding().overlaySwitchChannels.setOnClickListener(new View.OnClickListener() { // from class: com.discord.mobile_voice_overlay.views.r
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                OverlayMenuBubbleDialog._init_$lambda$7(OverlayMenuBubbleDialog.this, view);
            }
        });
        inflate.overlayMenu.getBinding().overlayOpenApp.setOnClickListener(new View.OnClickListener() { // from class: com.discord.mobile_voice_overlay.views.s
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                OverlayMenuBubbleDialog._init_$lambda$8(OverlayMenuBubbleDialog.this, view);
            }
        });
        inflate.overlayMenu.getBinding().muteToggle.setOnClickListener(new View.OnClickListener() { // from class: com.discord.mobile_voice_overlay.views.e
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                OverlayMenuBubbleDialog._init_$lambda$9(OverlayMenuBubbleDialog.this, view);
            }
        });
        inflate.overlayMenu.getBinding().disconnectBtn.setOnClickListener(new View.OnClickListener() { // from class: com.discord.mobile_voice_overlay.views.k
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                OverlayMenuBubbleDialog._init_$lambda$10(OverlayMenuBubbleDialog.this, view);
            }
        });
        setClipChildren(false);
        TextView textView = inflate.overlayMembersOverflowText;
        Intrinsics.checkNotNull(textView);
        DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimaryExtraBold);
        SetTextSizeSpKt.setTextSizeSp(textView, 20.0f);
        TextView textView2 = inflate.overlayMembersOverflowText;
        textView2.setTextColor(ThemeManagerKt.getTheme().getMobileTextHeadingPrimary());
        Intrinsics.checkNotNull(textView2);
        ViewBackgroundUtilsKt.setBackgroundOval$default(textView2, ThemeManagerKt.getTheme().getBackgroundBaseLowest(), 0, 2, null);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public OverlayMenuBubbleDialog(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        OverlayMenuBubbleBinding inflate = OverlayMenuBubbleBinding.inflate(LayoutInflater.from(getContext()), this, true);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.adapter = new VoiceUserAdapter();
        this.onGetInvitePressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        this.onSwitchChannelsPressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        this.onOpenDiscordPressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.m
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        this.onMutePressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        this.onDisconnectPressed = new Function0() { // from class: com.discord.mobile_voice_overlay.views.o
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        this.onShowSelectorDialog = new Function0() { // from class: com.discord.mobile_voice_overlay.views.p
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f31988a;
                return unit;
            }
        };
        inflate.overlayMenu.getBinding().overlayInviteLink.setOnClickListener(new View.OnClickListener() { // from class: com.discord.mobile_voice_overlay.views.q
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                OverlayMenuBubbleDialog._init_$lambda$6(OverlayMenuBubbleDialog.this, view);
            }
        });
        inflate.overlayMenu.getBinding().overlaySwitchChannels.setOnClickListener(new View.OnClickListener() { // from class: com.discord.mobile_voice_overlay.views.r
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                OverlayMenuBubbleDialog._init_$lambda$7(OverlayMenuBubbleDialog.this, view);
            }
        });
        inflate.overlayMenu.getBinding().overlayOpenApp.setOnClickListener(new View.OnClickListener() { // from class: com.discord.mobile_voice_overlay.views.s
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                OverlayMenuBubbleDialog._init_$lambda$8(OverlayMenuBubbleDialog.this, view);
            }
        });
        inflate.overlayMenu.getBinding().muteToggle.setOnClickListener(new View.OnClickListener() { // from class: com.discord.mobile_voice_overlay.views.e
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                OverlayMenuBubbleDialog._init_$lambda$9(OverlayMenuBubbleDialog.this, view);
            }
        });
        inflate.overlayMenu.getBinding().disconnectBtn.setOnClickListener(new View.OnClickListener() { // from class: com.discord.mobile_voice_overlay.views.k
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                OverlayMenuBubbleDialog._init_$lambda$10(OverlayMenuBubbleDialog.this, view);
            }
        });
        setClipChildren(false);
        TextView textView = inflate.overlayMembersOverflowText;
        Intrinsics.checkNotNull(textView);
        DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimaryExtraBold);
        SetTextSizeSpKt.setTextSizeSp(textView, 20.0f);
        TextView textView2 = inflate.overlayMembersOverflowText;
        textView2.setTextColor(ThemeManagerKt.getTheme().getMobileTextHeadingPrimary());
        Intrinsics.checkNotNull(textView2);
        ViewBackgroundUtilsKt.setBackgroundOval$default(textView2, ThemeManagerKt.getTheme().getBackgroundBaseLowest(), 0, 2, null);
    }
}
