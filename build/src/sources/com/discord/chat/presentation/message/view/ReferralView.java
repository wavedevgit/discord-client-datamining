package com.discord.chat.presentation.message.view;

import android.animation.LayoutTransition;
import android.content.Context;
import android.graphics.Paint;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.text.TextPaint;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.TextView;
import androidx.cardview.widget.CardView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.R;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.referral.ReferralEmbed;
import com.discord.chat.bridge.structurabletext.AnnotatedStructurableText;
import com.discord.chat.databinding.ReferralViewBinding;
import com.discord.chat.presentation.message.messagepart.ReferralMessageAccessory;
import com.discord.chat.presentation.textutils.TextUtilsKt;
import com.discord.core.DCDButton;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.drawable.GetDrawableCompatKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.primitives.MessageId;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import com.facebook.drawee.view.SimpleDraweeView;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000d\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u0000 &2\u00020\u0001:\u0001&B\u001d\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u000f\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\t\u0010\nJ\u0017\u0010\u000e\u001a\u00020\r2\u0006\u0010\f\u001a\u00020\u000bH\u0002¢\u0006\u0004\b\u000e\u0010\u000fJE\u0010\u0019\u001a\u00020\b2\u0006\u0010\u0011\u001a\u00020\u00102\u0014\u0010\u0014\u001a\u0010\u0012\u0006\u0012\u0004\u0018\u00010\u0013\u0012\u0004\u0012\u00020\b0\u00122\u0018\u0010\u0018\u001a\u0014\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u0017\u0012\u0004\u0012\u00020\b0\u0015¢\u0006\u0004\b\u0019\u0010\u001aR\u0017\u0010\u001c\u001a\u00020\u001b8\u0006¢\u0006\f\n\u0004\b\u001c\u0010\u001d\u001a\u0004\b\u001e\u0010\u001fR\u0018\u0010!\u001a\u0004\u0018\u00010 8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b!\u0010\"R\u0014\u0010$\u001a\u00020#8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b$\u0010%¨\u0006'"}, d2 = {"Lcom/discord/chat/presentation/message/view/ReferralView;", "Landroidx/cardview/widget/CardView;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "initTextStyling", "()V", "", "accessoryId", "", "didResolve", "(J)Z", "Lcom/discord/chat/presentation/message/messagepart/ReferralMessageAccessory;", "accessory", "Lkotlin/Function1;", "", "onTapAccept", "Lkotlin/Function2;", "Lcom/discord/primitives/MessageId;", "Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "onTapLink", "bind", "(Lcom/discord/chat/presentation/message/messagepart/ReferralMessageAccessory;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function2;)V", "Lcom/discord/chat/databinding/ReferralViewBinding;", "binding", "Lcom/discord/chat/databinding/ReferralViewBinding;", "getBinding", "()Lcom/discord/chat/databinding/ReferralViewBinding;", "Lcom/discord/chat/presentation/message/view/ReferralView$Companion$State;", "lastState", "Lcom/discord/chat/presentation/message/view/ReferralView$Companion$State;", "Landroid/animation/LayoutTransition;", "resolvedTransition", "Landroid/animation/LayoutTransition;", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nReferralView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReferralView.kt\ncom/discord/chat/presentation/message/view/ReferralView\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,216:1\n1#2:217\n257#3,2:218\n257#3,2:220\n257#3,2:222\n257#3,2:224\n257#3,2:226\n257#3,2:228\n257#3,2:230\n257#3,2:232\n*S KotlinDebug\n*F\n+ 1 ReferralView.kt\ncom/discord/chat/presentation/message/view/ReferralView\n*L\n107#1:218,2\n117#1:220,2\n144#1:222,2\n155#1:224,2\n177#1:226,2\n180#1:228,2\n189#1:230,2\n192#1:232,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ReferralView extends CardView {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final ReferralViewBinding binding;
    private Companion.State lastState;
    @NotNull
    private final LayoutTransition resolvedTransition;

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\u00020\u0001:\u0001\u0004B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0005"}, d2 = {"Lcom/discord/chat/presentation/message/view/ReferralView$Companion;", "", "<init>", "()V", "State", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {

        /* JADX INFO: Access modifiers changed from: private */
        @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\t\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\br\u0018\u00002\u00020\u0001:\u0002\u0006\u0007R\u0012\u0010\u0002\u001a\u00020\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0004\u0010\u0005\u0082\u0001\u0002\b\t¨\u0006\n"}, d2 = {"Lcom/discord/chat/presentation/message/view/ReferralView$Companion$State;", "", "accessoryId", "", "getAccessoryId", "()J", "Resolving", "Resolved", "Lcom/discord/chat/presentation/message/view/ReferralView$Companion$State$Resolved;", "Lcom/discord/chat/presentation/message/view/ReferralView$Companion$State$Resolving;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public interface State {

            @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\t\u0010\b\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\t\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\rHÖ\u0003J\t\u0010\u000e\u001a\u00020\u000fHÖ\u0001J\t\u0010\u0010\u001a\u00020\u0011HÖ\u0001R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0012"}, d2 = {"Lcom/discord/chat/presentation/message/view/ReferralView$Companion$State$Resolved;", "Lcom/discord/chat/presentation/message/view/ReferralView$Companion$State;", "accessoryId", "", "<init>", "(J)V", "getAccessoryId", "()J", "component1", "copy", "equals", "", "other", "", "hashCode", "", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class Resolved implements State {
                private final long accessoryId;

                public Resolved(long j10) {
                    this.accessoryId = j10;
                }

                public static /* synthetic */ Resolved copy$default(Resolved resolved, long j10, int i10, Object obj) {
                    if ((i10 & 1) != 0) {
                        j10 = resolved.accessoryId;
                    }
                    return resolved.copy(j10);
                }

                public final long component1() {
                    return this.accessoryId;
                }

                @NotNull
                public final Resolved copy(long j10) {
                    return new Resolved(j10);
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    return (obj instanceof Resolved) && this.accessoryId == ((Resolved) obj).accessoryId;
                }

                @Override // com.discord.chat.presentation.message.view.ReferralView.Companion.State
                public long getAccessoryId() {
                    return this.accessoryId;
                }

                public int hashCode() {
                    return Long.hashCode(this.accessoryId);
                }

                @NotNull
                public String toString() {
                    long j10 = this.accessoryId;
                    return "Resolved(accessoryId=" + j10 + ")";
                }
            }

            @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\t\u0010\b\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\t\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\rHÖ\u0003J\t\u0010\u000e\u001a\u00020\u000fHÖ\u0001J\t\u0010\u0010\u001a\u00020\u0011HÖ\u0001R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0012"}, d2 = {"Lcom/discord/chat/presentation/message/view/ReferralView$Companion$State$Resolving;", "Lcom/discord/chat/presentation/message/view/ReferralView$Companion$State;", "accessoryId", "", "<init>", "(J)V", "getAccessoryId", "()J", "component1", "copy", "equals", "", "other", "", "hashCode", "", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class Resolving implements State {
                private final long accessoryId;

                public Resolving(long j10) {
                    this.accessoryId = j10;
                }

                public static /* synthetic */ Resolving copy$default(Resolving resolving, long j10, int i10, Object obj) {
                    if ((i10 & 1) != 0) {
                        j10 = resolving.accessoryId;
                    }
                    return resolving.copy(j10);
                }

                public final long component1() {
                    return this.accessoryId;
                }

                @NotNull
                public final Resolving copy(long j10) {
                    return new Resolving(j10);
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    return (obj instanceof Resolving) && this.accessoryId == ((Resolving) obj).accessoryId;
                }

                @Override // com.discord.chat.presentation.message.view.ReferralView.Companion.State
                public long getAccessoryId() {
                    return this.accessoryId;
                }

                public int hashCode() {
                    return Long.hashCode(this.accessoryId);
                }

                @NotNull
                public String toString() {
                    long j10 = this.accessoryId;
                    return "Resolving(accessoryId=" + j10 + ")";
                }
            }

            long getAccessoryId();
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ReferralView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit bind$lambda$13$lambda$11(Function2 function2, ReferralMessageAccessory referralMessageAccessory, LinkContentNode node) {
        Intrinsics.checkNotNullParameter(node, "node");
        function2.invoke(MessageId.m1084boximpl(referralMessageAccessory.mo536getMessageId3Eiw7ao()), node);
        return Unit.f33282a;
    }

    private final boolean didResolve(long j10) {
        Companion.State.Resolving resolving;
        Companion.State state = this.lastState;
        if (state instanceof Companion.State.Resolving) {
            resolving = (Companion.State.Resolving) state;
        } else {
            resolving = null;
        }
        if (resolving == null || resolving.getAccessoryId() != j10) {
            return false;
        }
        return true;
    }

    private final void initTextStyling() {
        TextView textView = this.binding.imageCopy;
        Intrinsics.checkNotNull(textView);
        SetTextSizeSpKt.setTextSizeSp(textView, 14.0f);
        DiscordFont discordFont = DiscordFont.PrimarySemibold;
        DiscordFontUtilsKt.setDiscordFont(textView, discordFont);
        TextView textView2 = this.binding.title;
        Intrinsics.checkNotNull(textView2);
        SetTextSizeSpKt.setTextSizeSp(textView2, 16.0f);
        DiscordFont discordFont2 = DiscordFont.PrimaryMedium;
        DiscordFontUtilsKt.setDiscordFont(textView2, discordFont2);
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = this.binding.subtitle;
        Intrinsics.checkNotNull(simpleDraweeSpanTextView);
        SetTextSizeSpKt.setTextSizeSp(simpleDraweeSpanTextView, 12.0f);
        TextView textView3 = this.binding.trialInfo;
        Intrinsics.checkNotNull(textView3);
        SetTextSizeSpKt.setTextSizeSp(textView3, 12.0f);
        DCDButton dCDButton = this.binding.acceptButton;
        dCDButton.setTextSizeSp(14.0f);
        dCDButton.setDiscordFont(discordFont);
        TextView textView4 = this.binding.footer;
        Intrinsics.checkNotNull(textView4);
        SetTextSizeSpKt.setTextSizeSp(textView4, 12.0f);
        DiscordFontUtilsKt.setDiscordFont(textView4, discordFont2);
    }

    public final void bind(@NotNull final ReferralMessageAccessory accessory, @NotNull final Function1<? super String, Unit> onTapAccept, @NotNull final Function2<? super MessageId, ? super LinkContentNode, Unit> onTapLink) {
        int i10;
        int i11;
        int i12;
        int i13;
        GradientDrawable gradientDrawable;
        boolean z10;
        float f10;
        Intrinsics.checkNotNullParameter(accessory, "accessory");
        Intrinsics.checkNotNullParameter(onTapAccept, "onTapAccept");
        Intrinsics.checkNotNullParameter(onTapLink, "onTapLink");
        setCardBackgroundColor(accessory.getReferral().getBackgroundColor());
        ConstraintLayout content = this.binding.content;
        Intrinsics.checkNotNullExpressionValue(content, "content");
        boolean z11 = true;
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(content, false, null, 1, null);
        ReferralEmbed referral = accessory.getReferral();
        if (referral instanceof ReferralEmbed.Resolving) {
            this.lastState = new Companion.State.Resolving(accessory.getItemId().longValue());
        } else if (referral instanceof ReferralEmbed.Resolved) {
            boolean didResolve = didResolve(accessory.getItemId().longValue());
            ConstraintLayout constraintLayout = this.binding.content;
            LayoutTransition layoutTransition = this.resolvedTransition;
            if (!didResolve) {
                layoutTransition = null;
            }
            constraintLayout.setLayoutTransition(layoutTransition);
            SimpleDraweeView nitroLogoBanner = this.binding.nitroLogoBanner;
            Intrinsics.checkNotNullExpressionValue(nitroLogoBanner, "nitroLogoBanner");
            ReferralEmbed.Resolved resolved = (ReferralEmbed.Resolved) referral;
            ReactAssetUtilsKt.setOptionalReactImageUrl(nitroLogoBanner, resolved.getHeaderLogoUrl());
            TextView textView = this.binding.imageCopy;
            textView.setText(resolved.getHeaderText());
            textView.setTextColor(resolved.getHeaderColor());
            Intrinsics.checkNotNull(textView);
            CharSequence text = textView.getText();
            Intrinsics.checkNotNullExpressionValue(text, "getText(...)");
            if (!StringsKt.k0(text)) {
                i10 = 0;
            } else {
                i10 = 8;
            }
            textView.setVisibility(i10);
            SimpleDraweeView nitroTicket = this.binding.nitroTicket;
            Intrinsics.checkNotNullExpressionValue(nitroTicket, "nitroTicket");
            ReactAssetUtilsKt.setOptionalReactImageUrl(nitroTicket, resolved.getThumbnailUrl());
            TextView textView2 = this.binding.title;
            textView2.setText(resolved.getTitleText());
            Integer titleColor = resolved.getTitleColor();
            if (titleColor != null) {
                textView2.setTextColor(titleColor.intValue());
            }
            Intrinsics.checkNotNull(textView2);
            CharSequence text2 = textView2.getText();
            Intrinsics.checkNotNullExpressionValue(text2, "getText(...)");
            if (!StringsKt.k0(text2)) {
                i11 = 0;
            } else {
                i11 = 8;
            }
            textView2.setVisibility(i11);
            SimpleDraweeSpanTextView simpleDraweeSpanTextView = this.binding.subtitle;
            String bodyText = resolved.getBodyText();
            if (bodyText != null && !StringsKt.k0(bodyText)) {
                simpleDraweeSpanTextView.setText(resolved.getBodyText());
            } else if (resolved.getStructuredBodyText() != null) {
                AnnotatedStructurableText structuredBodyText = resolved.getStructuredBodyText();
                Context context = simpleDraweeSpanTextView.getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                String mo536getMessageId3Eiw7ao = accessory.mo536getMessageId3Eiw7ao();
                Paint.FontMetrics fontMetrics = simpleDraweeSpanTextView.getPaint().getFontMetrics();
                Intrinsics.checkNotNullExpressionValue(fontMetrics, "getFontMetrics(...)");
                float baselineHeightPx = TextUtilsKt.getBaselineHeightPx(fontMetrics);
                TextPaint paint = simpleDraweeSpanTextView.getPaint();
                Intrinsics.checkNotNullExpressionValue(paint, "getPaint(...)");
                simpleDraweeSpanTextView.setDraweeSpanStringBuilder(TextUtilsKt.toSpannable$default(structuredBodyText, context, mo536getMessageId3Eiw7ao, false, true, false, false, paint, new Function1() { // from class: com.discord.chat.presentation.message.view.y2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit bind$lambda$13$lambda$11;
                        bind$lambda$13$lambda$11 = ReferralView.bind$lambda$13$lambda$11(Function2.this, accessory, (LinkContentNode) obj);
                        return bind$lambda$13$lambda$11;
                    }
                }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, false, null, baselineHeightPx, null, false, 117440256, null));
                Intrinsics.checkNotNull(simpleDraweeSpanTextView);
                NestedScrollOnTouchUtilsKt.enableNestedSpanClickListener(simpleDraweeSpanTextView, true);
            }
            Integer bodyTextColor = resolved.getBodyTextColor();
            if (bodyTextColor != null) {
                simpleDraweeSpanTextView.setTextColor(bodyTextColor.intValue());
            }
            Intrinsics.checkNotNull(simpleDraweeSpanTextView);
            String bodyText2 = resolved.getBodyText();
            if ((bodyText2 == null || StringsKt.k0(bodyText2)) && resolved.getStructuredBodyText() == null) {
                z11 = false;
            }
            if (z11) {
                i12 = 0;
            } else {
                i12 = 8;
            }
            simpleDraweeSpanTextView.setVisibility(i12);
            TextView textView3 = this.binding.trialInfo;
            textView3.setText(resolved.getSubText());
            Intrinsics.checkNotNull(textView3);
            SetTextSizeSpKt.setTextSizeSp(textView3, 12.0f);
            Integer subTextColor = resolved.getSubTextColor();
            if (subTextColor != null) {
                textView3.setTextColor(subTextColor.intValue());
            }
            CharSequence text3 = textView3.getText();
            Intrinsics.checkNotNullExpressionValue(text3, "getText(...)");
            if (!StringsKt.k0(text3)) {
                i13 = 0;
            } else {
                i13 = 8;
            }
            textView3.setVisibility(i13);
            String acceptLabelText = resolved.getAcceptLabelText();
            if (acceptLabelText != null && !StringsKt.k0(acceptLabelText)) {
                DCDButton dCDButton = this.binding.acceptButton;
                String acceptLabelIconUrl = resolved.getAcceptLabelIconUrl();
                if (acceptLabelIconUrl != null) {
                    dCDButton.setIcon(acceptLabelIconUrl, SizeUtilsKt.getDpToPx(20));
                }
                dCDButton.setText(resolved.getAcceptLabelText());
                dCDButton.setTextColor(resolved.getAcceptLabelColor());
                dCDButton.setOnClickButtonListener(new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.z2
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        Function1.this.invoke(null);
                    }
                });
                Context context2 = dCDButton.getContext();
                Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                Drawable drawableCompat = GetDrawableCompatKt.getDrawableCompat(context2, R.drawable.premium_tier2_gradient);
                if (drawableCompat instanceof GradientDrawable) {
                    gradientDrawable = (GradientDrawable) drawableCompat;
                } else {
                    gradientDrawable = null;
                }
                if (gradientDrawable != null) {
                    gradientDrawable.mutate();
                    gradientDrawable.setCornerRadius(SizeUtilsKt.getDpToPx(20));
                    dCDButton.setDrawableBackground(gradientDrawable);
                }
                Boolean canBeAccepted = resolved.getCanBeAccepted();
                if (canBeAccepted != null) {
                    z10 = canBeAccepted.booleanValue();
                } else {
                    z10 = false;
                }
                dCDButton.setEnabled(z10);
                if (z10) {
                    f10 = 1.0f;
                } else {
                    f10 = 0.5f;
                }
                dCDButton.setAlpha(f10);
                Intrinsics.checkNotNull(dCDButton);
                dCDButton.setVisibility(0);
                Intrinsics.checkNotNull(dCDButton);
            } else {
                DCDButton acceptButton = this.binding.acceptButton;
                Intrinsics.checkNotNullExpressionValue(acceptButton, "acceptButton");
                acceptButton.setVisibility(8);
            }
            String footerText = resolved.getFooterText();
            if (footerText != null && !StringsKt.k0(footerText)) {
                TextView textView4 = this.binding.footer;
                textView4.setText(resolved.getFooterText());
                if (resolved.getFooterTextColor() != null) {
                    textView4.setTextColor(resolved.getFooterTextColor().intValue());
                }
                Intrinsics.checkNotNull(textView4);
                textView4.setVisibility(0);
                Intrinsics.checkNotNull(textView4);
            } else {
                TextView footer = this.binding.footer;
                Intrinsics.checkNotNullExpressionValue(footer, "footer");
                footer.setVisibility(8);
            }
            this.lastState = new Companion.State.Resolved(accessory.getItemId().longValue());
        } else {
            throw new ir.p();
        }
    }

    @NotNull
    public final ReferralViewBinding getBinding() {
        return this.binding;
    }

    public /* synthetic */ ReferralView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReferralView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        ReferralViewBinding inflate = ReferralViewBinding.inflate(LayoutInflater.from(context), this, true);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        LayoutTransition layoutTransition = new LayoutTransition();
        layoutTransition.disableTransitionType(0);
        layoutTransition.disableTransitionType(1);
        this.resolvedTransition = layoutTransition;
        setUseCompatPadding(true);
        setClickable(true);
        setRadius(SizeUtilsKt.getDpToPx(4));
        setCardElevation(SizeUtilsKt.getDpToPx(1));
        initTextStyling();
    }
}
