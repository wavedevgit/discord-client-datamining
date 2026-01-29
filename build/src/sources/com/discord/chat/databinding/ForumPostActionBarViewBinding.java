package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Space;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.Barrier;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.core.DCDButton;
import com.discord.reactions.AddReactionView;
import com.discord.reactions.ShortcutsFlexbox;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ForumPostActionBarViewBinding implements ViewBinding {
    @NonNull
    public final AddReactionView addReaction;
    @NonNull
    public final DCDButton followButton;
    @NonNull
    public final Barrier footerBarrier;
    @NonNull
    public final View footerDivider;
    @NonNull
    public final Barrier headerBarrier;
    @NonNull
    public final View headerDivider;
    @NonNull
    public final DCDButton otherReactionsCount;
    @NonNull
    public final ShortcutsFlexbox reactionsView;
    @NonNull
    private final View rootView;
    @NonNull
    public final DCDButton shareButton;
    @NonNull
    public final DCDButton sharePromptCloseButton;
    @NonNull
    public final ConstraintLayout sharePromptContainer;
    @NonNull
    public final DCDButton sharePromptCopyLinkButton;
    @NonNull
    public final SimpleDraweeView sharePromptIcon;
    @NonNull
    public final SimpleDraweeSpanTextView sharePromptSubtitle;
    @NonNull
    public final TextView sharePromptTitle;
    @NonNull
    public final Space spacer;
    @NonNull
    public final Space startSpacer;

    private ForumPostActionBarViewBinding(@NonNull View view, @NonNull AddReactionView addReactionView, @NonNull DCDButton dCDButton, @NonNull Barrier barrier, @NonNull View view2, @NonNull Barrier barrier2, @NonNull View view3, @NonNull DCDButton dCDButton2, @NonNull ShortcutsFlexbox shortcutsFlexbox, @NonNull DCDButton dCDButton3, @NonNull DCDButton dCDButton4, @NonNull ConstraintLayout constraintLayout, @NonNull DCDButton dCDButton5, @NonNull SimpleDraweeView simpleDraweeView, @NonNull SimpleDraweeSpanTextView simpleDraweeSpanTextView, @NonNull TextView textView, @NonNull Space space, @NonNull Space space2) {
        this.rootView = view;
        this.addReaction = addReactionView;
        this.followButton = dCDButton;
        this.footerBarrier = barrier;
        this.footerDivider = view2;
        this.headerBarrier = barrier2;
        this.headerDivider = view3;
        this.otherReactionsCount = dCDButton2;
        this.reactionsView = shortcutsFlexbox;
        this.shareButton = dCDButton3;
        this.sharePromptCloseButton = dCDButton4;
        this.sharePromptContainer = constraintLayout;
        this.sharePromptCopyLinkButton = dCDButton5;
        this.sharePromptIcon = simpleDraweeView;
        this.sharePromptSubtitle = simpleDraweeSpanTextView;
        this.sharePromptTitle = textView;
        this.spacer = space;
        this.startSpacer = space2;
    }

    @NonNull
    public static ForumPostActionBarViewBinding bind(@NonNull View view) {
        View a10;
        View a11;
        int i10 = R.id.add_reaction;
        AddReactionView addReactionView = (AddReactionView) a.a(view, i10);
        if (addReactionView != null) {
            i10 = R.id.follow_button;
            DCDButton dCDButton = (DCDButton) a.a(view, i10);
            if (dCDButton != null) {
                i10 = R.id.footer_barrier;
                Barrier barrier = (Barrier) a.a(view, i10);
                if (barrier != null && (a10 = a.a(view, (i10 = R.id.footer_divider))) != null) {
                    i10 = R.id.header_barrier;
                    Barrier barrier2 = (Barrier) a.a(view, i10);
                    if (barrier2 != null && (a11 = a.a(view, (i10 = R.id.header_divider))) != null) {
                        i10 = R.id.other_reactions_count;
                        DCDButton dCDButton2 = (DCDButton) a.a(view, i10);
                        if (dCDButton2 != null) {
                            i10 = R.id.reactions_view;
                            ShortcutsFlexbox shortcutsFlexbox = (ShortcutsFlexbox) a.a(view, i10);
                            if (shortcutsFlexbox != null) {
                                i10 = R.id.share_button;
                                DCDButton dCDButton3 = (DCDButton) a.a(view, i10);
                                if (dCDButton3 != null) {
                                    i10 = R.id.share_prompt_close_button;
                                    DCDButton dCDButton4 = (DCDButton) a.a(view, i10);
                                    if (dCDButton4 != null) {
                                        i10 = R.id.share_prompt_container;
                                        ConstraintLayout constraintLayout = (ConstraintLayout) a.a(view, i10);
                                        if (constraintLayout != null) {
                                            i10 = R.id.share_prompt_copy_link_button;
                                            DCDButton dCDButton5 = (DCDButton) a.a(view, i10);
                                            if (dCDButton5 != null) {
                                                i10 = R.id.share_prompt_icon;
                                                SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
                                                if (simpleDraweeView != null) {
                                                    i10 = R.id.share_prompt_subtitle;
                                                    SimpleDraweeSpanTextView simpleDraweeSpanTextView = (SimpleDraweeSpanTextView) a.a(view, i10);
                                                    if (simpleDraweeSpanTextView != null) {
                                                        i10 = R.id.share_prompt_title;
                                                        TextView textView = (TextView) a.a(view, i10);
                                                        if (textView != null) {
                                                            i10 = R.id.spacer;
                                                            Space space = (Space) a.a(view, i10);
                                                            if (space != null) {
                                                                i10 = R.id.start_spacer;
                                                                Space space2 = (Space) a.a(view, i10);
                                                                if (space2 != null) {
                                                                    return new ForumPostActionBarViewBinding(view, addReactionView, dCDButton, barrier, a10, barrier2, a11, dCDButton2, shortcutsFlexbox, dCDButton3, dCDButton4, constraintLayout, dCDButton5, simpleDraweeView, simpleDraweeSpanTextView, textView, space, space2);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
    public static ForumPostActionBarViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.forum_post_action_bar_view, viewGroup);
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
