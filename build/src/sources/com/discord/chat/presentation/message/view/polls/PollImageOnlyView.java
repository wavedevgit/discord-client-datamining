package com.discord.chat.presentation.message.view.polls;

import android.content.Context;
import android.content.res.ColorStateList;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.helper.widget.Flow;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.polls.PollAnswer;
import com.discord.chat.databinding.PollImageOnlyAnswerViewBinding;
import com.discord.chat.presentation.message.messagepart.polls.PollAnswerAccessory;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.image.fresco.SetOptionalImageUrlKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.misc.utilities.view.ViewClippingUtilsKt;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.facebook.drawee.view.SimpleDraweeView;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function6;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u00002\u00020\u00012\u00020\u0002:\u0002\u000f\u0010B'\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\b\u0002\u0010\u0007\u001a\u00020\b¢\u0006\u0004\b\t\u0010\nR\u0014\u0010\u000b\u001a\u00020\fX\u0094\u0004¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000e¨\u0006\u0011"}, d2 = {"Lcom/discord/chat/presentation/message/view/polls/PollImageOnlyView;", "Lcom/discord/chat/presentation/message/view/polls/BasePollWithRecyclerView;", "Lcom/discord/chat/presentation/message/view/polls/PollPresenter;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "myAdapter", "Lcom/discord/chat/presentation/message/view/polls/PollImageOnlyView$ImageOnlyAnswerAdapter;", "getMyAdapter", "()Lcom/discord/chat/presentation/message/view/polls/PollImageOnlyView$ImageOnlyAnswerAdapter;", "ImageOnlyAnswerAdapter", "ImageOnlyAnswerHolder", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PollImageOnlyView extends BasePollWithRecyclerView implements PollPresenter {
    @NotNull
    private final ImageOnlyAnswerAdapter myAdapter;

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u0007¢\u0006\u0004\b\u0003\u0010\u0004J\u0018\u0010\u0005\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0016¨\u0006\n"}, d2 = {"Lcom/discord/chat/presentation/message/view/polls/PollImageOnlyView$ImageOnlyAnswerAdapter;", "Lcom/discord/chat/presentation/message/view/polls/PollAnswerAdapter;", "Lcom/discord/chat/presentation/message/view/polls/PollImageOnlyView$ImageOnlyAnswerHolder;", "<init>", "()V", "onCreateViewHolder", "parent", "Landroid/view/ViewGroup;", "viewType", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class ImageOnlyAnswerAdapter extends PollAnswerAdapter<ImageOnlyAnswerHolder> {
        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        @NotNull
        public ImageOnlyAnswerHolder onCreateViewHolder(@NotNull ViewGroup parent, int i10) {
            Intrinsics.checkNotNullParameter(parent, "parent");
            PollImageOnlyAnswerViewBinding inflate = PollImageOnlyAnswerViewBinding.inflate(LayoutInflater.from(parent.getContext()), parent, false);
            Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
            return new ImageOnlyAnswerHolder(inflate);
        }
    }

    @Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0010\b\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005JW\u0010\u0010\u001a\u00020\t2\u0006\u0010\u0007\u001a\u00020\u00062\f\u0010\n\u001a\b\u0012\u0004\u0012\u00020\t0\b20\u0010\u000f\u001a,\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\t0\u000bH\u0016¢\u0006\u0004\b\u0010\u0010\u0011¨\u0006\u0012"}, d2 = {"Lcom/discord/chat/presentation/message/view/polls/PollImageOnlyView$ImageOnlyAnswerHolder;", "Lcom/discord/chat/presentation/message/view/polls/PollAnswerViewHolder;", "Lcom/discord/chat/databinding/PollImageOnlyAnswerViewBinding;", "binding", "<init>", "(Lcom/discord/chat/databinding/PollImageOnlyAnswerViewBinding;)V", "Lcom/discord/chat/presentation/message/messagepart/polls/PollAnswerAccessory;", "accessory", "Lkotlin/Function0;", "", "onTapAnswer", "Lkotlin/Function6;", "", "", "Lcom/discord/chat/reactevents/ViewResizeMode;", "onLongPressImage", "bind", "(Lcom/discord/chat/presentation/message/messagepart/polls/PollAnswerAccessory;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function6;)V", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nPollImageOnlyView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 PollImageOnlyView.kt\ncom/discord/chat/presentation/message/view/polls/PollImageOnlyView$ImageOnlyAnswerHolder\n+ 2 View.kt\nandroidx/core/view/ViewKt\n+ 3 ViewGroup.kt\nandroidx/core/view/ViewGroupKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,152:1\n327#2,2:153\n329#2,2:157\n257#2,2:159\n257#2,2:162\n257#2,2:164\n257#2,2:166\n257#2,2:168\n190#3,2:155\n1#4:161\n*S KotlinDebug\n*F\n+ 1 PollImageOnlyView.kt\ncom/discord/chat/presentation/message/view/polls/PollImageOnlyView$ImageOnlyAnswerHolder\n*L\n101#1:153,2\n101#1:157,2\n113#1:159,2\n134#1:162,2\n141#1:164,2\n146#1:166,2\n147#1:168,2\n102#1:155,2\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class ImageOnlyAnswerHolder extends PollAnswerViewHolder<PollImageOnlyAnswerViewBinding> {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public ImageOnlyAnswerHolder(@NotNull PollImageOnlyAnswerViewBinding binding) {
            super(binding);
            Intrinsics.checkNotNullParameter(binding, "binding");
            SimpleDraweeView avatar = binding.avatar;
            Intrinsics.checkNotNullExpressionValue(avatar, "avatar");
            ViewClippingUtilsKt.clipToCircle(avatar);
            ConstraintLayout root = binding.getRoot();
            Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
            ViewClippingUtilsKt.clipToRoundedRectangle(root, SizeUtilsKt.getDpToPx(12));
            PollMediaView image = binding.image;
            Intrinsics.checkNotNullExpressionValue(image, "image");
            ViewClippingUtilsKt.clipToRoundedRectangle(image, SizeUtilsKt.getDpToPx(12));
            TextView votePercentage = binding.votePercentage;
            Intrinsics.checkNotNullExpressionValue(votePercentage, "votePercentage");
            DiscordFont discordFont = DiscordFont.PrimarySemibold;
            DiscordFontUtilsKt.setDiscordFont(votePercentage, discordFont);
            TextView voteCounts = binding.voteCounts;
            Intrinsics.checkNotNullExpressionValue(voteCounts, "voteCounts");
            DiscordFontUtilsKt.setDiscordFont(voteCounts, discordFont);
        }

        @Override // com.discord.chat.presentation.message.view.polls.PollAnswerViewHolder
        public void bind(@NotNull PollAnswerAccessory accessory, @NotNull Function0<Unit> onTapAnswer, @NotNull Function6 onLongPressImage) {
            boolean z10;
            int i10;
            String str;
            Intrinsics.checkNotNullParameter(accessory, "accessory");
            Intrinsics.checkNotNullParameter(onTapAnswer, "onTapAnswer");
            Intrinsics.checkNotNullParameter(onLongPressImage, "onLongPressImage");
            PollAnswer answer = accessory.getAnswer();
            int borderWidthPx = accessory.getStyleSet().getBorderWidthPx();
            ConstraintLayout root = getBinding().getRoot();
            Intrinsics.checkNotNull(root);
            ViewBackgroundUtilsKt.setBackgroundRectangle(root, accessory.getAnswerBackgroundColor(), SizeUtilsKt.getDpToPx(12), Integer.valueOf(accessory.getBorderColor()), borderWidthPx);
            PollMediaView pollMediaView = getBinding().image;
            pollMediaView.setContentDescription(answer.getPollMedia().getText());
            pollMediaView.setAlpha(accessory.getStyleSet().getOpacity());
            Intrinsics.checkNotNull(pollMediaView);
            ViewGroup.LayoutParams layoutParams = pollMediaView.getLayoutParams();
            if (layoutParams != null) {
                ConstraintLayout.LayoutParams layoutParams2 = (ConstraintLayout.LayoutParams) layoutParams;
                layoutParams2.setMargins(borderWidthPx, borderWidthPx, borderWidthPx, borderWidthPx);
                pollMediaView.setLayoutParams(layoutParams2);
                pollMediaView.setMedia(accessory, onTapAnswer, onLongPressImage);
                boolean didSelfVote = answer.getDidSelfVote();
                Flow flow = getBinding().infoBar;
                Intrinsics.checkNotNull(flow);
                if (!didSelfVote && !accessory.getCanShowVoteCounts()) {
                    z10 = false;
                } else {
                    z10 = true;
                }
                if (z10) {
                    i10 = 0;
                } else {
                    i10 = 8;
                }
                flow.setVisibility(i10);
                flow.setBackgroundTintList(ColorStateList.valueOf(accessory.getAnswerFillColor()));
                flow.setPaddingBottom(SizeUtilsKt.getDpToPx(4) - borderWidthPx);
                SimpleDraweeView simpleDraweeView = getBinding().avatar;
                Intrinsics.checkNotNull(simpleDraweeView);
                String myAvatarUrl = accessory.getMyAvatarUrl();
                String str2 = null;
                if (didSelfVote) {
                    str = myAvatarUrl;
                } else {
                    str = null;
                }
                SetOptionalImageUrlKt.setOptionalImageUrl$default(simpleDraweeView, str, null, null, null, 14, null);
                SimpleDraweeView simpleDraweeView2 = getBinding().selectedIcon;
                Intrinsics.checkNotNull(simpleDraweeView2);
                String selectedIcon = accessory.getResources().getSelectedIcon();
                if (Intrinsics.areEqual(answer.isSelected(), Boolean.TRUE)) {
                    str2 = selectedIcon;
                }
                ReactAssetUtilsKt.setOptionalReactImageUrl(simpleDraweeView2, str2);
                if (accessory.getCanShowVoteCounts()) {
                    TextView textView = getBinding().votePercentage;
                    Intrinsics.checkNotNull(textView);
                    textView.setVisibility(0);
                    textView.setText(answer.getVotesPercentage() + "%");
                    textView.setTextColor(accessory.getLabelColor());
                    TextView textView2 = getBinding().voteCounts;
                    Intrinsics.checkNotNull(textView2);
                    textView2.setVisibility(0);
                    textView2.setText(answer.getVotes());
                    textView2.setTextColor(accessory.getLabelColor());
                    Intrinsics.checkNotNull(textView2);
                    return;
                }
                TextView votePercentage = getBinding().votePercentage;
                Intrinsics.checkNotNullExpressionValue(votePercentage, "votePercentage");
                votePercentage.setVisibility(8);
                TextView voteCounts = getBinding().voteCounts;
                Intrinsics.checkNotNullExpressionValue(voteCounts, "voteCounts");
                voteCounts.setVisibility(8);
                return;
            }
            throw new NullPointerException("null cannot be cast to non-null type androidx.constraintlayout.widget.ConstraintLayout.LayoutParams");
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public PollImageOnlyView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public PollImageOnlyView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.discord.chat.presentation.message.view.polls.BasePollWithRecyclerView
    @NotNull
    public ImageOnlyAnswerAdapter getMyAdapter() {
        return this.myAdapter;
    }

    public /* synthetic */ PollImageOnlyView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public PollImageOnlyView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        this.myAdapter = new ImageOnlyAnswerAdapter();
        RecyclerView recyclerView = getBinding().answers;
        recyclerView.addItemDecoration(new GridGapItemDecoration(2, SizeUtilsKt.getDpToPx(8)));
        recyclerView.setLayoutManager(new GridLayoutManager(context, 2));
        recyclerView.setAdapter(getMyAdapter());
    }
}
