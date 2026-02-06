package com.discord.mobile_voice_overlay;

import android.animation.Animator;
import android.animation.AnimatorInflater;
import android.content.Context;
import android.graphics.Rect;
import android.os.Bundle;
import android.os.Handler;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import com.discord.misc.utilities.threading.ThreadUtilsKt;
import com.discord.mobile_voice_overlay.utils.OverlayViewProvider;
import com.discord.mobile_voice_overlay.utils.WindowUtils;
import com.discord.mobile_voice_overlay.views.OverlayBubbleWrap;
import com.discord.mobile_voice_overlay.views.OverlayDialog;
import com.discord.mobile_voice_overlay.views.OverlayMenuBubbleDialog;
import com.discord.mobile_voice_overlay.views.OverlayTrashWrap;
import com.discord.mobile_voice_overlay.views.OverlayVoiceBubble;
import com.discord.mobile_voice_overlay.views.OverlayVoiceSelectorBubbleDialog;
import com.discord.primitives.ChannelId;
import com.discord.react.headless_tasks.api.HeadlessTasks;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.bridge.CatalystInstance;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableNativeArray;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000d\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\b\b\u0000\u0018\u0000 +2\u00020\u0001:\u0001+B1\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005\u0012\u0012\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\u00060\b¢\u0006\u0004\b\n\u0010\u000bJ\u0015\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\u0017H\u0001¢\u0006\u0002\b\u0018J\r\u0010\u0019\u001a\u00020\u0006H\u0001¢\u0006\u0002\b\u001aJ\b\u0010\u001b\u001a\u00020\u001cH\u0002J\u0015\u0010\u001d\u001a\u00020\u00062\u0006\u0010\u001e\u001a\u00020\u001fH\u0001¢\u0006\u0002\b J\b\u0010!\u001a\u00020\u0006H\u0002J\u0010\u0010\"\u001a\u00020\u00062\u0006\u0010#\u001a\u00020$H\u0002J\b\u0010%\u001a\u00020\u0006H\u0002J\u0010\u0010&\u001a\u00020\u00062\u0006\u0010'\u001a\u00020\tH\u0002J\b\u0010(\u001a\u00020\u0006H\u0002J\u001c\u0010)\u001a\u00020\u00062\u0006\u0010*\u001a\u00020\t2\n\b\u0002\u0010'\u001a\u0004\u0018\u00010\tH\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\u00060\bX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000e0\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00100\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00120\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00140\rX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006,"}, d2 = {"Lcom/discord/mobile_voice_overlay/MobileVoiceOverlay;", "", "context", "Lcom/facebook/react/bridge/ReactApplicationContext;", "emitOnLayoutTrashed", "Lkotlin/Function0;", "", "emitOnChannelQueryUpdate", "Lkotlin/Function1;", "", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;)V", "voiceBubbleProvider", "Lcom/discord/mobile_voice_overlay/utils/OverlayViewProvider;", "Lcom/discord/mobile_voice_overlay/views/OverlayVoiceBubble;", "trashWrapProvider", "Lcom/discord/mobile_voice_overlay/views/OverlayTrashWrap;", "menuDialogProvider", "Lcom/discord/mobile_voice_overlay/views/OverlayMenuBubbleDialog;", "selectorDialogProvider", "Lcom/discord/mobile_voice_overlay/views/OverlayVoiceSelectorBubbleDialog;", "showOverlay", "assets", "Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayAssets;", "showOverlay$mobile_voice_overlay_release", "hideOverlay", "hideOverlay$mobile_voice_overlay_release", "isOverlayShowing", "", "setData", "data", "Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayData;", "setData$mobile_voice_overlay_release", "onTrashVoiceBubble", "floatBubbleToHorizontalEdge", "bubble", "Lcom/discord/mobile_voice_overlay/views/OverlayBubbleWrap;", "closeMenuDialog", "emitOnChannelQueryUpdateEvent", "query", "emitOnLayoutTrashedEvent", "invokeJs", "methodName", "Companion", "mobile_voice_overlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMobileVoiceOverlay.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MobileVoiceOverlay.kt\ncom/discord/mobile_voice_overlay/MobileVoiceOverlay\n+ 2 ThreadUtils.kt\ncom/discord/misc/utilities/threading/ThreadUtilsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 4 View.kt\nandroidx/core/view/ViewKt\n+ 5 Animator.kt\nandroidx/core/animation/AnimatorKt\n*L\n1#1,242:1\n17#2,5:243\n17#2,5:248\n17#2,5:253\n1#3:258\n339#4,28:259\n29#5:287\n85#5,18:288\n*S KotlinDebug\n*F\n+ 1 MobileVoiceOverlay.kt\ncom/discord/mobile_voice_overlay/MobileVoiceOverlay\n*L\n134#1:243,5\n148#1:248,5\n159#1:253,5\n45#1:259,28\n172#1:287\n172#1:288,18\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MobileVoiceOverlay {
    @NotNull
    private static final String ANCHOR_TAG = "Active Voice Bubble";
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String JS_INTERFACE_NAME = "MobileVoiceOverlayManager";
    @NotNull
    private final ReactApplicationContext context;
    @NotNull
    private final Function1<String, Unit> emitOnChannelQueryUpdate;
    @NotNull
    private final Function0<Unit> emitOnLayoutTrashed;
    @NotNull
    private final OverlayViewProvider<OverlayMenuBubbleDialog> menuDialogProvider;
    @NotNull
    private final OverlayViewProvider<OverlayVoiceSelectorBubbleDialog> selectorDialogProvider;
    @NotNull
    private final OverlayViewProvider<OverlayTrashWrap> trashWrapProvider;
    @NotNull
    private final OverlayViewProvider<OverlayVoiceBubble> voiceBubbleProvider;

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J \u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\u00052\b\b\u0002\u0010\f\u001a\u00020\rR\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u000e"}, d2 = {"Lcom/discord/mobile_voice_overlay/MobileVoiceOverlay$Companion;", "", "<init>", "()V", "ANCHOR_TAG", "", "JS_INTERFACE_NAME", "startHeadlessTask", "", "context", "Landroid/content/Context;", "taskName", "taskParams", "Landroid/os/Bundle;", "mobile_voice_overlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ void startHeadlessTask$default(Companion companion, Context context, String str, Bundle bundle, int i10, Object obj) {
            if ((i10 & 4) != 0) {
                bundle = Bundle.EMPTY;
            }
            companion.startHeadlessTask(context, str, bundle);
        }

        public final void startHeadlessTask(@NotNull Context context, @NotNull String taskName, @NotNull Bundle taskParams) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(taskName, "taskName");
            Intrinsics.checkNotNullParameter(taskParams, "taskParams");
            HeadlessTasks.Companion.startHeadlessTask$default(HeadlessTasks.Companion, context, taskName, 0L, false, taskParams, false, 12, null);
        }

        private Companion() {
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    public MobileVoiceOverlay(@NotNull ReactApplicationContext context, @NotNull Function0<Unit> emitOnLayoutTrashed, @NotNull Function1<? super String, Unit> emitOnChannelQueryUpdate) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(emitOnLayoutTrashed, "emitOnLayoutTrashed");
        Intrinsics.checkNotNullParameter(emitOnChannelQueryUpdate, "emitOnChannelQueryUpdate");
        this.context = context;
        this.emitOnLayoutTrashed = emitOnLayoutTrashed;
        this.emitOnChannelQueryUpdate = emitOnChannelQueryUpdate;
        this.voiceBubbleProvider = new OverlayViewProvider<>(new Function1() { // from class: com.discord.mobile_voice_overlay.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                OverlayVoiceBubble voiceBubbleProvider$lambda$9;
                voiceBubbleProvider$lambda$9 = MobileVoiceOverlay.voiceBubbleProvider$lambda$9(MobileVoiceOverlay.this, (OverlayViewProvider) obj);
                return voiceBubbleProvider$lambda$9;
            }
        });
        this.trashWrapProvider = new OverlayViewProvider<>(new Function1() { // from class: com.discord.mobile_voice_overlay.f
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                OverlayTrashWrap trashWrapProvider$lambda$10;
                trashWrapProvider$lambda$10 = MobileVoiceOverlay.trashWrapProvider$lambda$10(MobileVoiceOverlay.this, (OverlayViewProvider) obj);
                return trashWrapProvider$lambda$10;
            }
        });
        this.menuDialogProvider = new OverlayViewProvider<>(new Function1() { // from class: com.discord.mobile_voice_overlay.g
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                OverlayMenuBubbleDialog menuDialogProvider$lambda$14;
                menuDialogProvider$lambda$14 = MobileVoiceOverlay.menuDialogProvider$lambda$14(MobileVoiceOverlay.this, (OverlayViewProvider) obj);
                return menuDialogProvider$lambda$14;
            }
        });
        this.selectorDialogProvider = new OverlayViewProvider<>(new Function1() { // from class: com.discord.mobile_voice_overlay.h
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                OverlayVoiceSelectorBubbleDialog selectorDialogProvider$lambda$19;
                selectorDialogProvider$lambda$19 = MobileVoiceOverlay.selectorDialogProvider$lambda$19(MobileVoiceOverlay.this, (OverlayViewProvider) obj);
                return selectorDialogProvider$lambda$19;
            }
        });
    }

    private final void closeMenuDialog() {
        this.menuDialogProvider.removeViewFromOverlay();
    }

    private final void emitOnChannelQueryUpdateEvent(String str) {
        this.emitOnChannelQueryUpdate.invoke(str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void emitOnLayoutTrashedEvent() {
        this.emitOnLayoutTrashed.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void floatBubbleToHorizontalEdge(OverlayBubbleWrap overlayBubbleWrap) {
        if (overlayBubbleWrap.getCenterX() > WindowUtils.INSTANCE.getScreenSize(this.context).centerX()) {
            OverlayBubbleWrap.animateToCoordinate$default(overlayBubbleWrap, Integer.MAX_VALUE, (int) overlayBubbleWrap.getY(), null, 4, null);
        } else {
            OverlayBubbleWrap.animateToCoordinate$default(overlayBubbleWrap, Integer.MIN_VALUE, (int) overlayBubbleWrap.getY(), null, 4, null);
        }
    }

    private final void invokeJs(String str, String str2) {
        WritableNativeArray writableNativeArray = new WritableNativeArray();
        if (str2 != null) {
            writableNativeArray.pushString(str2);
        }
        CatalystInstance catalystInstance = this.context.getCatalystInstance();
        if (catalystInstance != null) {
            if (catalystInstance.isDestroyed()) {
                catalystInstance = null;
            }
            if (catalystInstance != null) {
                catalystInstance.callFunction(JS_INTERFACE_NAME, str, writableNativeArray);
            }
        }
    }

    static /* synthetic */ void invokeJs$default(MobileVoiceOverlay mobileVoiceOverlay, String str, String str2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = null;
        }
        mobileVoiceOverlay.invokeJs(str, str2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean isOverlayShowing() {
        if (this.trashWrapProvider.isInOverlay() && this.voiceBubbleProvider.isInOverlay()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final OverlayMenuBubbleDialog menuDialogProvider$lambda$14(final MobileVoiceOverlay mobileVoiceOverlay, OverlayViewProvider it) {
        Intrinsics.checkNotNullParameter(it, "it");
        OverlayMenuBubbleDialog overlayMenuBubbleDialog = new OverlayMenuBubbleDialog(mobileVoiceOverlay.context);
        overlayMenuBubbleDialog.getInsetMargins().top = overlayMenuBubbleDialog.getResources().getDimensionPixelOffset(R.dimen.vertical_safe_margin);
        overlayMenuBubbleDialog.setOnDialogClosed(new Function1() { // from class: com.discord.mobile_voice_overlay.i
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit menuDialogProvider$lambda$14$lambda$13$lambda$11;
                menuDialogProvider$lambda$14$lambda$13$lambda$11 = MobileVoiceOverlay.menuDialogProvider$lambda$14$lambda$13$lambda$11(MobileVoiceOverlay.this, (OverlayDialog) obj);
                return menuDialogProvider$lambda$14$lambda$13$lambda$11;
            }
        });
        overlayMenuBubbleDialog.setOnShowSelectorDialog(new Function0() { // from class: com.discord.mobile_voice_overlay.j
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit menuDialogProvider$lambda$14$lambda$13$lambda$12;
                menuDialogProvider$lambda$14$lambda$13$lambda$12 = MobileVoiceOverlay.menuDialogProvider$lambda$14$lambda$13$lambda$12(MobileVoiceOverlay.this);
                return menuDialogProvider$lambda$14$lambda$13$lambda$12;
            }
        });
        return overlayMenuBubbleDialog;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit menuDialogProvider$lambda$14$lambda$13$lambda$11(MobileVoiceOverlay mobileVoiceOverlay, OverlayDialog it) {
        Intrinsics.checkNotNullParameter(it, "it");
        mobileVoiceOverlay.closeMenuDialog();
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit menuDialogProvider$lambda$14$lambda$13$lambda$12(MobileVoiceOverlay mobileVoiceOverlay) {
        mobileVoiceOverlay.selectorDialogProvider.showViewOnOverlay();
        return Unit.f32008a;
    }

    private final void onTrashVoiceBubble() {
        this.voiceBubbleProvider.withView(new Function1() { // from class: com.discord.mobile_voice_overlay.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit onTrashVoiceBubble$lambda$26;
                onTrashVoiceBubble$lambda$26 = MobileVoiceOverlay.onTrashVoiceBubble$lambda$26(MobileVoiceOverlay.this, (OverlayVoiceBubble) obj);
                return onTrashVoiceBubble$lambda$26;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onTrashVoiceBubble$lambda$26(final MobileVoiceOverlay mobileVoiceOverlay, OverlayVoiceBubble voiceBubble) {
        Intrinsics.checkNotNullParameter(voiceBubble, "voiceBubble");
        voiceBubble.moveToAnchorPoint();
        Animator loadAnimator = AnimatorInflater.loadAnimator(voiceBubble.getContext(), R.animator.fade_out);
        loadAnimator.setTarget(voiceBubble);
        Intrinsics.checkNotNull(loadAnimator);
        loadAnimator.addListener(new Animator.AnimatorListener() { // from class: com.discord.mobile_voice_overlay.MobileVoiceOverlay$onTrashVoiceBubble$lambda$26$lambda$25$$inlined$doOnEnd$1
            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationCancel(Animator animator) {
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationEnd(Animator animator) {
                if (ThreadUtilsKt.isOnMainThread()) {
                    MobileVoiceOverlay.this.emitOnLayoutTrashedEvent();
                    return;
                }
                Handler uiHandler = ThreadUtilsKt.getUiHandler();
                final MobileVoiceOverlay mobileVoiceOverlay2 = MobileVoiceOverlay.this;
                uiHandler.post(new Runnable() { // from class: com.discord.mobile_voice_overlay.MobileVoiceOverlay$onTrashVoiceBubble$lambda$26$lambda$25$lambda$24$$inlined$postOrRunOnMainThread$1
                    @Override // java.lang.Runnable
                    public final void run() {
                        MobileVoiceOverlay.this.emitOnLayoutTrashedEvent();
                    }
                });
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationRepeat(Animator animator) {
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationStart(Animator animator) {
            }
        });
        loadAnimator.start();
        OverlayBubbleWrap.animateToCoordinate$default(voiceBubble, (int) voiceBubble.getX(), ((int) voiceBubble.getY()) + (voiceBubble.getHeight() / 2), null, 4, null);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final OverlayVoiceSelectorBubbleDialog selectorDialogProvider$lambda$19(final MobileVoiceOverlay mobileVoiceOverlay, final OverlayViewProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        final OverlayVoiceSelectorBubbleDialog overlayVoiceSelectorBubbleDialog = new OverlayVoiceSelectorBubbleDialog(mobileVoiceOverlay.context);
        overlayVoiceSelectorBubbleDialog.setOnDialogClosed(new Function1() { // from class: com.discord.mobile_voice_overlay.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit selectorDialogProvider$lambda$19$lambda$18$lambda$15;
                selectorDialogProvider$lambda$19$lambda$18$lambda$15 = MobileVoiceOverlay.selectorDialogProvider$lambda$19$lambda$18$lambda$15(OverlayViewProvider.this, (OverlayDialog) obj);
                return selectorDialogProvider$lambda$19$lambda$18$lambda$15;
            }
        });
        overlayVoiceSelectorBubbleDialog.setOnTextChanged(new Function1() { // from class: com.discord.mobile_voice_overlay.p
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit selectorDialogProvider$lambda$19$lambda$18$lambda$16;
                selectorDialogProvider$lambda$19$lambda$18$lambda$16 = MobileVoiceOverlay.selectorDialogProvider$lambda$19$lambda$18$lambda$16(MobileVoiceOverlay.this, (String) obj);
                return selectorDialogProvider$lambda$19$lambda$18$lambda$16;
            }
        });
        overlayVoiceSelectorBubbleDialog.setOnChannelSelected(new Function1() { // from class: com.discord.mobile_voice_overlay.q
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit selectorDialogProvider$lambda$19$lambda$18$lambda$17;
                selectorDialogProvider$lambda$19$lambda$18$lambda$17 = MobileVoiceOverlay.selectorDialogProvider$lambda$19$lambda$18$lambda$17(OverlayVoiceSelectorBubbleDialog.this, (ChannelId) obj);
                return selectorDialogProvider$lambda$19$lambda$18$lambda$17;
            }
        });
        return overlayVoiceSelectorBubbleDialog;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit selectorDialogProvider$lambda$19$lambda$18$lambda$15(OverlayViewProvider overlayViewProvider, OverlayDialog it) {
        Intrinsics.checkNotNullParameter(it, "it");
        overlayViewProvider.removeViewFromOverlay();
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit selectorDialogProvider$lambda$19$lambda$18$lambda$16(MobileVoiceOverlay mobileVoiceOverlay, String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        mobileVoiceOverlay.emitOnChannelQueryUpdateEvent(text);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit selectorDialogProvider$lambda$19$lambda$18$lambda$17(OverlayVoiceSelectorBubbleDialog overlayVoiceSelectorBubbleDialog, ChannelId channelId) {
        Companion companion = Companion;
        Context context = overlayVoiceSelectorBubbleDialog.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        companion.startHeadlessTask(context, "SelectChannel", w1.c.a(qr.v.a("channelId", String.valueOf(channelId.m1066unboximpl())), qr.v.a("connectToVoice", Boolean.TRUE)));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final OverlayTrashWrap trashWrapProvider$lambda$10(MobileVoiceOverlay mobileVoiceOverlay, OverlayViewProvider it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new OverlayTrashWrap(mobileVoiceOverlay.context);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final OverlayVoiceBubble voiceBubbleProvider$lambda$9(final MobileVoiceOverlay mobileVoiceOverlay, OverlayViewProvider it) {
        Intrinsics.checkNotNullParameter(it, "it");
        int dimensionPixelOffset = mobileVoiceOverlay.context.getResources().getDimensionPixelOffset(R.dimen.overlay_safe_margin);
        final OverlayVoiceBubble overlayVoiceBubble = new OverlayVoiceBubble(mobileVoiceOverlay.context);
        int i10 = -dimensionPixelOffset;
        overlayVoiceBubble.getInsetMargins().set(i10, dimensionPixelOffset, i10, dimensionPixelOffset);
        overlayVoiceBubble.setOnClickListener(new View.OnClickListener() { // from class: com.discord.mobile_voice_overlay.l
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                MobileVoiceOverlay.voiceBubbleProvider$lambda$9$lambda$4(OverlayVoiceBubble.this, mobileVoiceOverlay, view);
            }
        });
        overlayVoiceBubble.setTouchDispatchSideEffectHandler$mobile_voice_overlay_release(new Function1() { // from class: com.discord.mobile_voice_overlay.m
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit voiceBubbleProvider$lambda$9$lambda$6;
                voiceBubbleProvider$lambda$9$lambda$6 = MobileVoiceOverlay.voiceBubbleProvider$lambda$9$lambda$6(MobileVoiceOverlay.this, overlayVoiceBubble, (MotionEvent) obj);
                return voiceBubbleProvider$lambda$9$lambda$6;
            }
        });
        overlayVoiceBubble.setOnMovingStateChanged(new Function1() { // from class: com.discord.mobile_voice_overlay.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit voiceBubbleProvider$lambda$9$lambda$8;
                voiceBubbleProvider$lambda$9$lambda$8 = MobileVoiceOverlay.voiceBubbleProvider$lambda$9$lambda$8(MobileVoiceOverlay.this, overlayVoiceBubble, ((Boolean) obj).booleanValue());
                return voiceBubbleProvider$lambda$9$lambda$8;
            }
        });
        return overlayVoiceBubble;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void voiceBubbleProvider$lambda$9$lambda$4(final OverlayVoiceBubble overlayVoiceBubble, MobileVoiceOverlay mobileVoiceOverlay, View view) {
        ViewGroup.MarginLayoutParams marginLayoutParams;
        int i10;
        ViewGroup.MarginLayoutParams marginLayoutParams2;
        int i11;
        ViewGroup.MarginLayoutParams marginLayoutParams3;
        int i12;
        int i13;
        SimpleDraweeView imageView$mobile_voice_overlay_release = overlayVoiceBubble.getImageView$mobile_voice_overlay_release();
        Intrinsics.checkNotNull(imageView$mobile_voice_overlay_release, "null cannot be cast to non-null type android.view.View");
        ViewGroup.LayoutParams layoutParams = imageView$mobile_voice_overlay_release.getLayoutParams();
        ViewGroup.MarginLayoutParams marginLayoutParams4 = null;
        if (layoutParams instanceof ViewGroup.MarginLayoutParams) {
            marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
        } else {
            marginLayoutParams = null;
        }
        if (marginLayoutParams != null) {
            i10 = marginLayoutParams.leftMargin;
        } else {
            i10 = 0;
        }
        ViewGroup.LayoutParams layoutParams2 = imageView$mobile_voice_overlay_release.getLayoutParams();
        if (layoutParams2 instanceof ViewGroup.MarginLayoutParams) {
            marginLayoutParams2 = (ViewGroup.MarginLayoutParams) layoutParams2;
        } else {
            marginLayoutParams2 = null;
        }
        if (marginLayoutParams2 != null) {
            i11 = marginLayoutParams2.topMargin;
        } else {
            i11 = 0;
        }
        ViewGroup.LayoutParams layoutParams3 = imageView$mobile_voice_overlay_release.getLayoutParams();
        if (layoutParams3 instanceof ViewGroup.MarginLayoutParams) {
            marginLayoutParams3 = (ViewGroup.MarginLayoutParams) layoutParams3;
        } else {
            marginLayoutParams3 = null;
        }
        if (marginLayoutParams3 != null) {
            i12 = marginLayoutParams3.rightMargin;
        } else {
            i12 = 0;
        }
        ViewGroup.LayoutParams layoutParams4 = imageView$mobile_voice_overlay_release.getLayoutParams();
        if (layoutParams4 instanceof ViewGroup.MarginLayoutParams) {
            marginLayoutParams4 = (ViewGroup.MarginLayoutParams) layoutParams4;
        }
        if (marginLayoutParams4 != null) {
            i13 = marginLayoutParams4.bottomMargin;
        } else {
            i13 = 0;
        }
        final Rect rect = new Rect(i10, i11, i12, i13);
        mobileVoiceOverlay.menuDialogProvider.withView(new Function1() { // from class: com.discord.mobile_voice_overlay.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit voiceBubbleProvider$lambda$9$lambda$4$lambda$3;
                voiceBubbleProvider$lambda$9$lambda$4$lambda$3 = MobileVoiceOverlay.voiceBubbleProvider$lambda$9$lambda$4$lambda$3(OverlayVoiceBubble.this, rect, (OverlayMenuBubbleDialog) obj);
                return voiceBubbleProvider$lambda$9$lambda$4$lambda$3;
            }
        });
        overlayVoiceBubble.setBubbleTouchable(false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit voiceBubbleProvider$lambda$9$lambda$4$lambda$3(final OverlayVoiceBubble overlayVoiceBubble, Rect rect, OverlayMenuBubbleDialog menuDialog) {
        Intrinsics.checkNotNullParameter(menuDialog, "menuDialog");
        ViewGroup.LayoutParams layoutParams = menuDialog.getLinkedAnchorView().getLayoutParams();
        layoutParams.width = (overlayVoiceBubble.getWidth() - rect.left) - rect.right;
        layoutParams.height = overlayVoiceBubble.getHeight();
        menuDialog.getLinkedAnchorView().requestLayout();
        menuDialog.getLinkedAnchorView().setTag(ANCHOR_TAG);
        menuDialog.addOnAttachStateChangeListener(new View.OnAttachStateChangeListener() { // from class: com.discord.mobile_voice_overlay.MobileVoiceOverlay$voiceBubbleProvider$1$1$1$2
            @Override // android.view.View.OnAttachStateChangeListener
            public void onViewAttachedToWindow(final View v10) {
                Intrinsics.checkNotNullParameter(v10, "v");
                final OverlayVoiceBubble overlayVoiceBubble2 = OverlayVoiceBubble.this;
                if (v10.isLaidOut() && !v10.isLayoutRequested()) {
                    View findViewWithTag = v10.findViewWithTag("Active Voice Bubble");
                    Intrinsics.checkNotNullExpressionValue(findViewWithTag, "findViewWithTag(...)");
                    overlayVoiceBubble2.anchorOn(findViewWithTag);
                    return;
                }
                v10.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: com.discord.mobile_voice_overlay.MobileVoiceOverlay$voiceBubbleProvider$1$1$1$2$onViewAttachedToWindow$$inlined$doOnLayout$1
                    @Override // android.view.View.OnLayoutChangeListener
                    public void onLayoutChange(View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                        view.removeOnLayoutChangeListener(this);
                        View findViewWithTag2 = v10.findViewWithTag("Active Voice Bubble");
                        Intrinsics.checkNotNullExpressionValue(findViewWithTag2, "findViewWithTag(...)");
                        overlayVoiceBubble2.anchorOn(findViewWithTag2);
                    }
                });
            }

            @Override // android.view.View.OnAttachStateChangeListener
            public void onViewDetachedFromWindow(View v10) {
                Intrinsics.checkNotNullParameter(v10, "v");
                if (OverlayVoiceBubble.this.isAttachedToWindow()) {
                    OverlayVoiceBubble.this.setBubbleTouchable(true);
                    OverlayVoiceBubble.this.anchorOff(true);
                }
            }
        });
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit voiceBubbleProvider$lambda$9$lambda$6(final MobileVoiceOverlay mobileVoiceOverlay, final OverlayVoiceBubble overlayVoiceBubble, final MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        mobileVoiceOverlay.trashWrapProvider.withView(new Function1() { // from class: com.discord.mobile_voice_overlay.k
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit voiceBubbleProvider$lambda$9$lambda$6$lambda$5;
                voiceBubbleProvider$lambda$9$lambda$6$lambda$5 = MobileVoiceOverlay.voiceBubbleProvider$lambda$9$lambda$6$lambda$5(OverlayVoiceBubble.this, event, mobileVoiceOverlay, (OverlayTrashWrap) obj);
                return voiceBubbleProvider$lambda$9$lambda$6$lambda$5;
            }
        });
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit voiceBubbleProvider$lambda$9$lambda$6$lambda$5(OverlayVoiceBubble overlayVoiceBubble, MotionEvent motionEvent, MobileVoiceOverlay mobileVoiceOverlay, OverlayTrashWrap trashWrap) {
        Intrinsics.checkNotNullParameter(trashWrap, "trashWrap");
        if (trashWrap.processMotionEvent(overlayVoiceBubble, motionEvent)) {
            mobileVoiceOverlay.onTrashVoiceBubble();
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit voiceBubbleProvider$lambda$9$lambda$8(final MobileVoiceOverlay mobileVoiceOverlay, final OverlayVoiceBubble overlayVoiceBubble, final boolean z10) {
        mobileVoiceOverlay.trashWrapProvider.withView(new Function1() { // from class: com.discord.mobile_voice_overlay.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit voiceBubbleProvider$lambda$9$lambda$8$lambda$7;
                voiceBubbleProvider$lambda$9$lambda$8$lambda$7 = MobileVoiceOverlay.voiceBubbleProvider$lambda$9$lambda$8$lambda$7(z10, mobileVoiceOverlay, overlayVoiceBubble, (OverlayTrashWrap) obj);
                return voiceBubbleProvider$lambda$9$lambda$8$lambda$7;
            }
        });
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit voiceBubbleProvider$lambda$9$lambda$8$lambda$7(boolean z10, MobileVoiceOverlay mobileVoiceOverlay, OverlayVoiceBubble overlayVoiceBubble, OverlayTrashWrap trashWrap) {
        Intrinsics.checkNotNullParameter(trashWrap, "trashWrap");
        if (z10) {
            trashWrap.show();
        } else {
            trashWrap.hide();
            mobileVoiceOverlay.floatBubbleToHorizontalEdge(overlayVoiceBubble);
        }
        return Unit.f32008a;
    }

    public final void hideOverlay$mobile_voice_overlay_release() {
        if (ThreadUtilsKt.isOnMainThread()) {
            this.selectorDialogProvider.removeViewFromOverlay();
            this.menuDialogProvider.removeViewFromOverlay();
            this.voiceBubbleProvider.removeViewFromOverlay();
            this.trashWrapProvider.removeViewFromOverlay();
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    public final void setData$mobile_voice_overlay_release(@NotNull MobileVoiceOverlayData data) {
        Intrinsics.checkNotNullParameter(data, "data");
        if (ThreadUtilsKt.isOnMainThread()) {
            this.voiceBubbleProvider.setData(data);
            this.menuDialogProvider.setData(data);
            this.selectorDialogProvider.setData(data);
            this.trashWrapProvider.setData(data);
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    public final void showOverlay$mobile_voice_overlay_release(@NotNull MobileVoiceOverlayAssets assets) {
        Intrinsics.checkNotNullParameter(assets, "assets");
        if (ThreadUtilsKt.isOnMainThread()) {
            this.selectorDialogProvider.setAssets(assets);
            this.menuDialogProvider.setAssets(assets);
            this.voiceBubbleProvider.setAssets(assets);
            this.trashWrapProvider.setAssets(assets);
            if (!isOverlayShowing()) {
                this.voiceBubbleProvider.withView(new Function1<OverlayVoiceBubble, Unit>() { // from class: com.discord.mobile_voice_overlay.MobileVoiceOverlay$showOverlay$1$1
                    @Override // kotlin.jvm.functions.Function1
                    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                        invoke((OverlayVoiceBubble) obj);
                        return Unit.f32008a;
                    }

                    public final void invoke(OverlayVoiceBubble it) {
                        Intrinsics.checkNotNullParameter(it, "it");
                        MobileVoiceOverlay.this.floatBubbleToHorizontalEdge(it);
                    }
                });
                return;
            }
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }
}
