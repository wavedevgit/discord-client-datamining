package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Space;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.constraintlayout.helper.widget.Flow;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.chat.presentation.message.view.polls.PollMediaView;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PollImageOnlyAnswerViewBinding implements ViewBinding {
    @NonNull
    public final SimpleDraweeView avatar;
    @NonNull
    public final Space avatarPlaceholder;
    @NonNull
    public final PollMediaView image;
    @NonNull
    public final Flow infoBar;
    @NonNull
    private final ConstraintLayout rootView;
    @NonNull
    public final SimpleDraweeView selectedIcon;
    @NonNull
    public final TextView voteCounts;
    @NonNull
    public final TextView votePercentage;

    private PollImageOnlyAnswerViewBinding(@NonNull ConstraintLayout constraintLayout, @NonNull SimpleDraweeView simpleDraweeView, @NonNull Space space, @NonNull PollMediaView pollMediaView, @NonNull Flow flow, @NonNull SimpleDraweeView simpleDraweeView2, @NonNull TextView textView, @NonNull TextView textView2) {
        this.rootView = constraintLayout;
        this.avatar = simpleDraweeView;
        this.avatarPlaceholder = space;
        this.image = pollMediaView;
        this.infoBar = flow;
        this.selectedIcon = simpleDraweeView2;
        this.voteCounts = textView;
        this.votePercentage = textView2;
    }

    @NonNull
    public static PollImageOnlyAnswerViewBinding bind(@NonNull View view) {
        int i10 = R.id.avatar;
        SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
        if (simpleDraweeView != null) {
            i10 = R.id.avatar_placeholder;
            Space space = (Space) a.a(view, i10);
            if (space != null) {
                i10 = R.id.image;
                PollMediaView pollMediaView = (PollMediaView) a.a(view, i10);
                if (pollMediaView != null) {
                    i10 = R.id.info_bar;
                    Flow flow = (Flow) a.a(view, i10);
                    if (flow != null) {
                        i10 = R.id.selected_icon;
                        SimpleDraweeView simpleDraweeView2 = (SimpleDraweeView) a.a(view, i10);
                        if (simpleDraweeView2 != null) {
                            i10 = R.id.vote_counts;
                            TextView textView = (TextView) a.a(view, i10);
                            if (textView != null) {
                                i10 = R.id.vote_percentage;
                                TextView textView2 = (TextView) a.a(view, i10);
                                if (textView2 != null) {
                                    return new PollImageOnlyAnswerViewBinding((ConstraintLayout) view, simpleDraweeView, space, pollMediaView, flow, simpleDraweeView2, textView, textView2);
                                }
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static PollImageOnlyAnswerViewBinding inflate(@NonNull LayoutInflater layoutInflater) {
        return inflate(layoutInflater, null, false);
    }

    @NonNull
    public static PollImageOnlyAnswerViewBinding inflate(@NonNull LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(R.layout.poll_image_only_answer_view, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    @NonNull
    public ConstraintLayout getRoot() {
        return this.rootView;
    }
}
