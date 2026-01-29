package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.chat.presentation.message.view.polls.PollActionButton;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PollRecyclerViewBinding implements ViewBinding {
    @NonNull
    public final RecyclerView answers;
    @NonNull
    public final PollActionButton primaryAction;
    @NonNull
    public final TextView promptText;
    @NonNull
    public final TextView questionText;
    @NonNull
    private final View rootView;
    @NonNull
    public final PollActionButton secondaryActionButton;
    @NonNull
    public final PollActionButton tertiaryActionButton;

    private PollRecyclerViewBinding(@NonNull View view, @NonNull RecyclerView recyclerView, @NonNull PollActionButton pollActionButton, @NonNull TextView textView, @NonNull TextView textView2, @NonNull PollActionButton pollActionButton2, @NonNull PollActionButton pollActionButton3) {
        this.rootView = view;
        this.answers = recyclerView;
        this.primaryAction = pollActionButton;
        this.promptText = textView;
        this.questionText = textView2;
        this.secondaryActionButton = pollActionButton2;
        this.tertiaryActionButton = pollActionButton3;
    }

    @NonNull
    public static PollRecyclerViewBinding bind(@NonNull View view) {
        int i10 = R.id.answers;
        RecyclerView recyclerView = (RecyclerView) a.a(view, i10);
        if (recyclerView != null) {
            i10 = R.id.primary_action;
            PollActionButton pollActionButton = (PollActionButton) a.a(view, i10);
            if (pollActionButton != null) {
                i10 = R.id.prompt_text;
                TextView textView = (TextView) a.a(view, i10);
                if (textView != null) {
                    i10 = R.id.question_text;
                    TextView textView2 = (TextView) a.a(view, i10);
                    if (textView2 != null) {
                        i10 = R.id.secondary_action_button;
                        PollActionButton pollActionButton2 = (PollActionButton) a.a(view, i10);
                        if (pollActionButton2 != null) {
                            i10 = R.id.tertiary_action_button;
                            PollActionButton pollActionButton3 = (PollActionButton) a.a(view, i10);
                            if (pollActionButton3 != null) {
                                return new PollRecyclerViewBinding(view, recyclerView, pollActionButton, textView, textView2, pollActionButton2, pollActionButton3);
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static PollRecyclerViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.poll_recycler_view, viewGroup);
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
