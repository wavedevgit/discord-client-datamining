package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import androidx.annotation.NonNull;
import androidx.cardview.widget.CardView;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SurveyActionViewBinding implements ViewBinding {
    @NonNull
    public final SimpleDraweeSpanTextView chatListAdapterItemTextFeedback;
    @NonNull
    public final SimpleDraweeView chatListFeedbackIcon;
    @NonNull
    private final View rootView;
    @NonNull
    public final LinearLayout surveyBackground;
    @NonNull
    public final CardView surveyCard;

    private SurveyActionViewBinding(@NonNull View view, @NonNull SimpleDraweeSpanTextView simpleDraweeSpanTextView, @NonNull SimpleDraweeView simpleDraweeView, @NonNull LinearLayout linearLayout, @NonNull CardView cardView) {
        this.rootView = view;
        this.chatListAdapterItemTextFeedback = simpleDraweeSpanTextView;
        this.chatListFeedbackIcon = simpleDraweeView;
        this.surveyBackground = linearLayout;
        this.surveyCard = cardView;
    }

    @NonNull
    public static SurveyActionViewBinding bind(@NonNull View view) {
        int i10 = R.id.chat_list_adapter_item_text_feedback;
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = (SimpleDraweeSpanTextView) a.a(view, i10);
        if (simpleDraweeSpanTextView != null) {
            i10 = R.id.chat_list_feedback_icon;
            SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
            if (simpleDraweeView != null) {
                i10 = R.id.survey_background;
                LinearLayout linearLayout = (LinearLayout) a.a(view, i10);
                if (linearLayout != null) {
                    i10 = R.id.survey_card;
                    CardView cardView = (CardView) a.a(view, i10);
                    if (cardView != null) {
                        return new SurveyActionViewBinding(view, simpleDraweeSpanTextView, simpleDraweeView, linearLayout, cardView);
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static SurveyActionViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.survey_action_view, viewGroup);
            return bind(viewGroup);
        }
        throw new NullPointerException("parent");
    }

    @Override // androidx.viewbinding.ViewBinding
    @NonNull
    public View getRoot() {
        return this.rootView;
    }
}
