package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.chat.presentation.message.view.polls.PollCheckboxView;
import com.discord.chat.presentation.message.view.polls.PollMediaView;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PollTextAndImageAnswerViewBinding implements ViewBinding {
    @NonNull
    public final PollCheckboxView checkbox;
    @NonNull
    public final PollMediaView image;
    @NonNull
    public final SimpleDraweeSpanTextView label;
    @NonNull
    public final View percentageBarBackground;
    @NonNull
    public final FrameLayout percentageBarContainer;
    @NonNull
    private final ConstraintLayout rootView;
    @NonNull
    public final TextView voteCounts;
    @NonNull
    public final TextView votePercentage;

    private PollTextAndImageAnswerViewBinding(@NonNull ConstraintLayout constraintLayout, @NonNull PollCheckboxView pollCheckboxView, @NonNull PollMediaView pollMediaView, @NonNull SimpleDraweeSpanTextView simpleDraweeSpanTextView, @NonNull View view, @NonNull FrameLayout frameLayout, @NonNull TextView textView, @NonNull TextView textView2) {
        this.rootView = constraintLayout;
        this.checkbox = pollCheckboxView;
        this.image = pollMediaView;
        this.label = simpleDraweeSpanTextView;
        this.percentageBarBackground = view;
        this.percentageBarContainer = frameLayout;
        this.voteCounts = textView;
        this.votePercentage = textView2;
    }

    @NonNull
    public static PollTextAndImageAnswerViewBinding bind(@NonNull View view) {
        View a10;
        int i10 = R.id.checkbox;
        PollCheckboxView pollCheckboxView = (PollCheckboxView) a.a(view, i10);
        if (pollCheckboxView != null) {
            i10 = R.id.image;
            PollMediaView pollMediaView = (PollMediaView) a.a(view, i10);
            if (pollMediaView != null) {
                i10 = R.id.label;
                SimpleDraweeSpanTextView simpleDraweeSpanTextView = (SimpleDraweeSpanTextView) a.a(view, i10);
                if (simpleDraweeSpanTextView != null && (a10 = a.a(view, (i10 = R.id.percentage_bar_background))) != null) {
                    i10 = R.id.percentage_bar_container;
                    FrameLayout frameLayout = (FrameLayout) a.a(view, i10);
                    if (frameLayout != null) {
                        i10 = R.id.vote_counts;
                        TextView textView = (TextView) a.a(view, i10);
                        if (textView != null) {
                            i10 = R.id.vote_percentage;
                            TextView textView2 = (TextView) a.a(view, i10);
                            if (textView2 != null) {
                                return new PollTextAndImageAnswerViewBinding((ConstraintLayout) view, pollCheckboxView, pollMediaView, simpleDraweeSpanTextView, a10, frameLayout, textView, textView2);
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static PollTextAndImageAnswerViewBinding inflate(@NonNull LayoutInflater layoutInflater) {
        return inflate(layoutInflater, null, false);
    }

    @NonNull
    public static PollTextAndImageAnswerViewBinding inflate(@NonNull LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(R.layout.poll_text_and_image_answer_view, viewGroup, false);
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
