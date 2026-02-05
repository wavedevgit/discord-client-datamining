package com.discord.chat.presentation.message.view.polls;

import android.annotation.SuppressLint;
import android.view.View;
import androidx.core.view.h0;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.e;
import com.discord.chat.presentation.message.messagepart.polls.PollAnswerAccessory;
import com.discord.chat.presentation.message.view.polls.PollAnswerViewHolder;
import com.discord.chat.presentation.message.view.polls.a11y.PollsAnswerAccessibilityDelegate;
import com.discord.chat.reactevents.ViewResizeMode;
import com.discord.recycler_view.utils.ItemDiffer;
import com.facebook.react.modules.dialog.AlertFragment;
import com.facebook.react.uimanager.ViewProps;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function6;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0012\b&\u0018\u0000*\f\b\u0000\u0010\u0002*\u0006\u0012\u0002\b\u00030\u00012\b\u0012\u0004\u0012\u00028\u00000\u0003B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J\u000f\u0010\u0007\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0007\u0010\bJ\u0017\u0010\u000b\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u000b\u0010\fJ\u001f\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\r\u001a\u00028\u00002\u0006\u0010\t\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u000f\u0010\u0010Jc\u0010\u001a\u001a\u00020\u000e2\f\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00120\u00112\u0012\u0010\u0016\u001a\u000e\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\u000e0\u001420\u0010\u0019\u001a,\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00020\u000e0\u0017H\u0007¢\u0006\u0004\b\u001a\u0010\u001bR\u001c\u0010\u001c\u001a\b\u0012\u0004\u0012\u00020\u00120\u00118\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010\u001dR.\u0010\u0016\u001a\u000e\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\u000e0\u00148\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b\u0016\u0010\u001e\u001a\u0004\b\u001f\u0010 \"\u0004\b!\u0010\"R@\u0010\u0019\u001a,\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00020\u000e0\u00178\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0019\u0010#R$\u0010$\u001a\u0004\u0018\u00010\u00158\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b$\u0010%\u001a\u0004\b&\u0010'\"\u0004\b(\u0010)¨\u0006*"}, d2 = {"Lcom/discord/chat/presentation/message/view/polls/PollAnswerAdapter;", "Lcom/discord/chat/presentation/message/view/polls/PollAnswerViewHolder;", "THolder", "Landroidx/recyclerview/widget/RecyclerView$Adapter;", "<init>", "()V", "", "getItemCount", "()I", ViewProps.POSITION, "", "getItemId", "(I)J", "holder", "", "onBindViewHolder", "(Lcom/discord/chat/presentation/message/view/polls/PollAnswerViewHolder;I)V", "", "Lcom/discord/chat/presentation/message/messagepart/polls/PollAnswerAccessory;", "answers", "Lkotlin/Function1;", "", "onTapAnswer", "Lkotlin/Function6;", "Lcom/discord/chat/reactevents/ViewResizeMode;", "onLongPressImage", "setData", "(Ljava/util/List;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function6;)V", AlertFragment.ARG_ITEMS, "Ljava/util/List;", "Lkotlin/jvm/functions/Function1;", "getOnTapAnswer", "()Lkotlin/jvm/functions/Function1;", "setOnTapAnswer", "(Lkotlin/jvm/functions/Function1;)V", "Lkotlin/jvm/functions/Function6;", "myAvatarUrl", "Ljava/lang/String;", "getMyAvatarUrl", "()Ljava/lang/String;", "setMyAvatarUrl", "(Ljava/lang/String;)V", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class PollAnswerAdapter<THolder extends PollAnswerViewHolder<?>> extends RecyclerView.Adapter {
    private String myAvatarUrl;
    @NotNull
    private List<PollAnswerAccessory> items = CollectionsKt.l();
    @NotNull
    private Function1<? super String, Unit> onTapAnswer = new Function1() { // from class: com.discord.chat.presentation.message.view.polls.i
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit onTapAnswer$lambda$0;
            onTapAnswer$lambda$0 = PollAnswerAdapter.onTapAnswer$lambda$0((String) obj);
            return onTapAnswer$lambda$0;
        }
    };
    @NotNull
    private Function6 onLongPressImage = new Function6() { // from class: com.discord.chat.presentation.message.view.polls.j
        @Override // kotlin.jvm.functions.Function6
        public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4, Object obj5, Object obj6) {
            Unit onLongPressImage$lambda$1;
            onLongPressImage$lambda$1 = PollAnswerAdapter.onLongPressImage$lambda$1((String) obj, ((Integer) obj2).intValue(), ((Integer) obj3).intValue(), ((Integer) obj4).intValue(), ((Integer) obj5).intValue(), (ViewResizeMode) obj6);
            return onLongPressImage$lambda$1;
        }
    };

    public PollAnswerAdapter() {
        setHasStableIds(true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void onBindViewHolder$lambda$3$lambda$2(PollAnswerAdapter pollAnswerAdapter, PollAnswerAccessory pollAnswerAccessory, View view) {
        pollAnswerAdapter.onTapAnswer.invoke(pollAnswerAccessory.getAnswer().getAnswerId());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$4(PollAnswerAdapter pollAnswerAdapter, PollAnswerAccessory pollAnswerAccessory) {
        pollAnswerAdapter.onTapAnswer.invoke(pollAnswerAccessory.getAnswer().getAnswerId());
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onLongPressImage$lambda$1(String str, int i10, int i11, int i12, int i13, ViewResizeMode viewResizeMode) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        Intrinsics.checkNotNullParameter(viewResizeMode, "<unused var>");
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onTapAnswer$lambda$0(String str) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        return Unit.f31988a;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.items.size();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public long getItemId(int i10) {
        return this.items.get(i10).getItemId().longValue();
    }

    public final String getMyAvatarUrl() {
        return this.myAvatarUrl;
    }

    @NotNull
    public final Function1<String, Unit> getOnTapAnswer() {
        return this.onTapAnswer;
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public /* bridge */ /* synthetic */ void onBindViewHolder(RecyclerView.ViewHolder viewHolder, int i10) {
        onBindViewHolder((PollAnswerAdapter<THolder>) ((PollAnswerViewHolder) viewHolder), i10);
    }

    @SuppressLint({"NotifyDataSetChanged"})
    public final void setData(@NotNull List<PollAnswerAccessory> answers, @NotNull Function1<? super String, Unit> onTapAnswer, @NotNull Function6 onLongPressImage) {
        Intrinsics.checkNotNullParameter(answers, "answers");
        Intrinsics.checkNotNullParameter(onTapAnswer, "onTapAnswer");
        Intrinsics.checkNotNullParameter(onLongPressImage, "onLongPressImage");
        List<PollAnswerAccessory> list = this.items;
        this.items = answers;
        this.onTapAnswer = onTapAnswer;
        this.onLongPressImage = onLongPressImage;
        e.C0068e c10 = androidx.recyclerview.widget.e.c(new ItemDiffer(list, answers), false);
        Intrinsics.checkNotNullExpressionValue(c10, "calculateDiff(...)");
        c10.c(this);
    }

    public final void setMyAvatarUrl(String str) {
        this.myAvatarUrl = str;
    }

    public final void setOnTapAnswer(@NotNull Function1<? super String, Unit> function1) {
        Intrinsics.checkNotNullParameter(function1, "<set-?>");
        this.onTapAnswer = function1;
    }

    public void onBindViewHolder(@NotNull THolder holder, int i10) {
        Intrinsics.checkNotNullParameter(holder, "holder");
        final PollAnswerAccessory pollAnswerAccessory = this.items.get(i10);
        View root = holder.getBinding().getRoot();
        root.setEnabled(pollAnswerAccessory.getCanTapAnswers());
        root.setOnClickListener(new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.polls.g
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                PollAnswerAdapter.onBindViewHolder$lambda$3$lambda$2(PollAnswerAdapter.this, pollAnswerAccessory, view);
            }
        });
        root.setImportantForAccessibility(1);
        h0.n0(root, new PollsAnswerAccessibilityDelegate(pollAnswerAccessory));
        holder.bind(pollAnswerAccessory, new Function0() { // from class: com.discord.chat.presentation.message.view.polls.h
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit onBindViewHolder$lambda$4;
                onBindViewHolder$lambda$4 = PollAnswerAdapter.onBindViewHolder$lambda$4(PollAnswerAdapter.this, pollAnswerAccessory);
                return onBindViewHolder$lambda$4;
            }
        }, this.onLongPressImage);
    }
}
