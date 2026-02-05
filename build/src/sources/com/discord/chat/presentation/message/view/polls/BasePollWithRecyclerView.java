package com.discord.chat.presentation.message.view.polls;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.core.view.h0;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.databinding.PollRecyclerViewBinding;
import com.discord.chat.presentation.message.messagepart.PollMessageAccessory;
import com.discord.chat.presentation.message.view.polls.a11y.PollAnswersRecyclerAccessibilityDelegate;
import com.discord.chat.reactevents.ViewResizeMode;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.primitives.ChannelId;
import com.discord.primitives.MessageId;
import com.discord.recycler_view.animator.NoMoveItemAnimator;
import com.discord.theme.ThemeManagerKt;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function6;
import kotlin.jvm.functions.Function8;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000Z\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0004\b&\u0018\u00002\u00020\u00012\u00020\u0002B'\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0002\u0010\b\u001a\u00020\u0007¢\u0006\u0004\b\t\u0010\nJ\u0095\u0001\u0010\u0017\u001a\u00020\u00112\u0006\u0010\f\u001a\u00020\u000b2\u001e\u0010\u0012\u001a\u001a\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u000f\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00110\r2\u001e\u0010\u0013\u001a\u001a\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u000f\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u00110\r2<\u0010\u0016\u001a8\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u000f\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\u00110\u0014H\u0017¢\u0006\u0004\b\u0017\u0010\u0018R \u0010\u001a\u001a\u00020\u00198\u0004X\u0084\u0004¢\u0006\u0012\n\u0004\b\u001a\u0010\u001b\u0012\u0004\b\u001e\u0010\u001f\u001a\u0004\b\u001c\u0010\u001dR\u0018\u0010#\u001a\u0006\u0012\u0002\b\u00030 8$X¤\u0004¢\u0006\u0006\u001a\u0004\b!\u0010\"¨\u0006$"}, d2 = {"Lcom/discord/chat/presentation/message/view/polls/BasePollWithRecyclerView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "Lcom/discord/chat/presentation/message/view/polls/PollPresenter;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "", "defStyleAttr", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "Lcom/discord/chat/presentation/message/messagepart/PollMessageAccessory;", "accessory", "Lkotlin/Function3;", "Lcom/discord/primitives/ChannelId;", "Lcom/discord/primitives/MessageId;", "", "", "onTapAnswer", "onTapPollAction", "Lkotlin/Function8;", "Lcom/discord/chat/reactevents/ViewResizeMode;", "onLongPressImage", "bind", "(Lcom/discord/chat/presentation/message/messagepart/PollMessageAccessory;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function8;)V", "Lcom/discord/chat/databinding/PollRecyclerViewBinding;", "binding", "Lcom/discord/chat/databinding/PollRecyclerViewBinding;", "getBinding", "()Lcom/discord/chat/databinding/PollRecyclerViewBinding;", "getBinding$annotations", "()V", "Lcom/discord/chat/presentation/message/view/polls/PollAnswerAdapter;", "getMyAdapter", "()Lcom/discord/chat/presentation/message/view/polls/PollAnswerAdapter;", "myAdapter", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nBasePollWithRecyclerView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BasePollWithRecyclerView.kt\ncom/discord/chat/presentation/message/view/polls/BasePollWithRecyclerView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,167:1\n176#2,2:168\n257#2,2:170\n*S KotlinDebug\n*F\n+ 1 BasePollWithRecyclerView.kt\ncom/discord/chat/presentation/message/view/polls/BasePollWithRecyclerView\n*L\n49#1:168,2\n133#1:170,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class BasePollWithRecyclerView extends ConstraintLayout implements PollPresenter {
    @NotNull
    private final PollRecyclerViewBinding binding;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public BasePollWithRecyclerView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit bind$lambda$3(Function3 function3, PollMessageAccessory pollMessageAccessory, String answerId) {
        Intrinsics.checkNotNullParameter(answerId, "answerId");
        function3.invoke(ChannelId.m1059boximpl(pollMessageAccessory.m632getChannelIdo4g7jtM()), MessageId.m1085boximpl(pollMessageAccessory.mo538getMessageId3Eiw7ao()), answerId);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit bind$lambda$4(Function8 function8, PollMessageAccessory pollMessageAccessory, String attachmentId, int i10, int i11, int i12, int i13, ViewResizeMode viewResizeMode) {
        Intrinsics.checkNotNullParameter(attachmentId, "attachmentId");
        Intrinsics.checkNotNullParameter(viewResizeMode, "viewResizeMode");
        function8.invoke(ChannelId.m1059boximpl(pollMessageAccessory.m632getChannelIdo4g7jtM()), MessageId.m1085boximpl(pollMessageAccessory.mo538getMessageId3Eiw7ao()), attachmentId, Integer.valueOf((int) SizeUtilsKt.getPxToDp(i10)), Integer.valueOf((int) SizeUtilsKt.getPxToDp(i11)), Integer.valueOf((int) SizeUtilsKt.getPxToDp(i12)), Integer.valueOf((int) SizeUtilsKt.getPxToDp(i13)), viewResizeMode);
        return Unit.f31988a;
    }

    protected static /* synthetic */ void getBinding$annotations() {
    }

    @Override // com.discord.chat.presentation.message.view.polls.PollPresenter
    public void bind(@NotNull final PollMessageAccessory accessory, @NotNull final Function3 onTapAnswer, @NotNull Function3 onTapPollAction, @NotNull final Function8 onLongPressImage) {
        boolean z10;
        int i10;
        boolean z11;
        boolean z12;
        Intrinsics.checkNotNullParameter(accessory, "accessory");
        Intrinsics.checkNotNullParameter(onTapAnswer, "onTapAnswer");
        Intrinsics.checkNotNullParameter(onTapPollAction, "onTapPollAction");
        Intrinsics.checkNotNullParameter(onLongPressImage, "onLongPressImage");
        getMyAdapter().setData(accessory.getAnswers(), new Function1() { // from class: com.discord.chat.presentation.message.view.polls.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit bind$lambda$3;
                bind$lambda$3 = BasePollWithRecyclerView.bind$lambda$3(Function3.this, accessory, (String) obj);
                return bind$lambda$3;
            }
        }, new Function6() { // from class: com.discord.chat.presentation.message.view.polls.b
            @Override // kotlin.jvm.functions.Function6
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4, Object obj5, Object obj6) {
                Unit bind$lambda$4;
                bind$lambda$4 = BasePollWithRecyclerView.bind$lambda$4(Function8.this, accessory, (String) obj, ((Integer) obj2).intValue(), ((Integer) obj3).intValue(), ((Integer) obj4).intValue(), ((Integer) obj5).intValue(), (ViewResizeMode) obj6);
                return bind$lambda$4;
            }
        });
        View root = this.binding.getRoot();
        Intrinsics.checkNotNull(root);
        ViewBackgroundUtilsKt.setBackgroundRectangle(root, accessory.getFillColor(), SizeUtilsKt.getDpToPx(16), Integer.valueOf(accessory.getBorderColor()), accessory.getBorderWidthPx());
        RecyclerView recyclerView = this.binding.answers;
        boolean z13 = true;
        recyclerView.setFocusableInTouchMode(!accessory.getData().getCanSelectMultipleAnswers());
        h0.A0(recyclerView, 4);
        recyclerView.setImportantForAccessibility(1);
        h0.n0(recyclerView, new PollAnswersRecyclerAccessibilityDelegate(accessory));
        boolean hasAccessibilityFocus = this.binding.primaryAction.hasAccessibilityFocus();
        boolean hasAccessibilityFocus2 = this.binding.secondaryActionButton.hasAccessibilityFocus();
        boolean hasAccessibilityFocus3 = this.binding.tertiaryActionButton.hasAccessibilityFocus();
        this.binding.questionText.setText(accessory.getData().getQuestion().getText());
        TextView textView = this.binding.promptText;
        Intrinsics.checkNotNull(textView);
        if (accessory.getData().getPromptLabel() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        textView.setVisibility(i10);
        textView.setText(accessory.getData().getPromptLabel());
        this.binding.primaryAction.m711bindurJ__Hs(accessory.getData().getPrimaryAction(), accessory.m632getChannelIdo4g7jtM(), accessory.mo538getMessageId3Eiw7ao(), onTapPollAction);
        this.binding.secondaryActionButton.m711bindurJ__Hs(accessory.getData().getSecondaryAction(), accessory.m632getChannelIdo4g7jtM(), accessory.mo538getMessageId3Eiw7ao(), onTapPollAction);
        this.binding.tertiaryActionButton.m711bindurJ__Hs(accessory.getData().getTertiaryAction(), accessory.m632getChannelIdo4g7jtM(), accessory.mo538getMessageId3Eiw7ao(), onTapPollAction);
        if (hasAccessibilityFocus && !this.binding.primaryAction.hasAccessibilityFocus()) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (hasAccessibilityFocus2 && !this.binding.secondaryActionButton.hasAccessibilityFocus()) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (!hasAccessibilityFocus3 || this.binding.tertiaryActionButton.hasAccessibilityFocus()) {
            z13 = false;
        }
        if ((z11 || z12 || z13) && !this.binding.answers.isAccessibilityFocused()) {
            this.binding.answers.sendAccessibilityEvent(8);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @NotNull
    public final PollRecyclerViewBinding getBinding() {
        return this.binding;
    }

    @NotNull
    protected abstract PollAnswerAdapter<?> getMyAdapter();

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public BasePollWithRecyclerView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ BasePollWithRecyclerView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public BasePollWithRecyclerView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        PollRecyclerViewBinding inflate = PollRecyclerViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        RecyclerView recyclerView = inflate.answers;
        NoMoveItemAnimator noMoveItemAnimator = new NoMoveItemAnimator() { // from class: com.discord.chat.presentation.message.view.polls.BasePollWithRecyclerView.1
            @Override // androidx.recyclerview.widget.DefaultItemAnimator, androidx.recyclerview.widget.RecyclerView.ItemAnimator
            public void endAnimation(RecyclerView.ViewHolder item) {
                Intrinsics.checkNotNullParameter(item, "item");
                super.endAnimation(item);
                View itemView = item.itemView;
                Intrinsics.checkNotNullExpressionValue(itemView, "itemView");
                MaybeAnimateElevationToKt.maybeEndAnimation(itemView);
            }
        };
        noMoveItemAnimator.setSupportsChangeAnimations(false);
        recyclerView.setItemAnimator(noMoveItemAnimator);
        View root = inflate.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        int dpToPx = SizeUtilsKt.getDpToPx(16);
        root.setPadding(dpToPx, dpToPx, dpToPx, dpToPx);
        TextView textView = inflate.questionText;
        textView.setTextColor(ThemeManagerKt.getTheme().getMobileTextHeadingPrimary());
        Intrinsics.checkNotNull(textView);
        DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimarySemibold);
        TextView textView2 = inflate.promptText;
        textView2.setTextColor(ThemeManagerKt.getTheme().getTextSubtle());
        Intrinsics.checkNotNull(textView2);
        DiscordFontUtilsKt.setDiscordFont(textView2, DiscordFont.PrimaryNormal);
        setClipChildren(false);
        setClipToPadding(false);
    }
}
