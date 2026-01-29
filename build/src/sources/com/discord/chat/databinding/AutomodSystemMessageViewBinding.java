package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.constraintlayout.helper.widget.Flow;
import androidx.constraintlayout.widget.Barrier;
import androidx.constraintlayout.widget.Guideline;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.chat.presentation.message.MessageAccessoriesView;
import com.discord.chat.presentation.message.MessageTagView;
import com.discord.chat.presentation.message.MessageViewReplyPreview;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AutomodSystemMessageViewBinding implements ViewBinding {
    @NonNull
    public final MessageAccessoriesView accessoriesView;
    @NonNull
    public final SimpleDraweeView authorAvatar;
    @NonNull
    public final TextView authorName;
    @NonNull
    public final TextView automodMessageChannel;
    @NonNull
    public final TextView automodMessageContextHeader;
    @NonNull
    public final SimpleDraweeView guildCommunicationDisabledIcon;
    @NonNull
    public final Flow headerSection;
    @NonNull
    public final Guideline messageEndGuideline;
    @NonNull
    public final Barrier messageHeaderBarrier;
    @NonNull
    public final View messageHeaderDivider;
    @NonNull
    public final TextView messageHeaderSubtitle;
    @NonNull
    public final TextView messageHeaderTitle;
    @NonNull
    public final MessageTagView messageTagView;
    @NonNull
    public final MessageViewReplyPreview replyPreview;
    @NonNull
    private final View rootView;
    @NonNull
    public final TextView timestamp;

    private AutomodSystemMessageViewBinding(@NonNull View view, @NonNull MessageAccessoriesView messageAccessoriesView, @NonNull SimpleDraweeView simpleDraweeView, @NonNull TextView textView, @NonNull TextView textView2, @NonNull TextView textView3, @NonNull SimpleDraweeView simpleDraweeView2, @NonNull Flow flow, @NonNull Guideline guideline, @NonNull Barrier barrier, @NonNull View view2, @NonNull TextView textView4, @NonNull TextView textView5, @NonNull MessageTagView messageTagView, @NonNull MessageViewReplyPreview messageViewReplyPreview, @NonNull TextView textView6) {
        this.rootView = view;
        this.accessoriesView = messageAccessoriesView;
        this.authorAvatar = simpleDraweeView;
        this.authorName = textView;
        this.automodMessageChannel = textView2;
        this.automodMessageContextHeader = textView3;
        this.guildCommunicationDisabledIcon = simpleDraweeView2;
        this.headerSection = flow;
        this.messageEndGuideline = guideline;
        this.messageHeaderBarrier = barrier;
        this.messageHeaderDivider = view2;
        this.messageHeaderSubtitle = textView4;
        this.messageHeaderTitle = textView5;
        this.messageTagView = messageTagView;
        this.replyPreview = messageViewReplyPreview;
        this.timestamp = textView6;
    }

    @NonNull
    public static AutomodSystemMessageViewBinding bind(@NonNull View view) {
        View a10;
        int i10 = R.id.accessories_view;
        MessageAccessoriesView messageAccessoriesView = (MessageAccessoriesView) a.a(view, i10);
        if (messageAccessoriesView != null) {
            i10 = R.id.author_avatar;
            SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
            if (simpleDraweeView != null) {
                i10 = R.id.author_name;
                TextView textView = (TextView) a.a(view, i10);
                if (textView != null) {
                    i10 = R.id.automod_message_channel;
                    TextView textView2 = (TextView) a.a(view, i10);
                    if (textView2 != null) {
                        i10 = R.id.automod_message_context_header;
                        TextView textView3 = (TextView) a.a(view, i10);
                        if (textView3 != null) {
                            i10 = R.id.guild_communication_disabled_icon;
                            SimpleDraweeView simpleDraweeView2 = (SimpleDraweeView) a.a(view, i10);
                            if (simpleDraweeView2 != null) {
                                i10 = R.id.header_section;
                                Flow flow = (Flow) a.a(view, i10);
                                if (flow != null) {
                                    i10 = R.id.message_end_guideline;
                                    Guideline guideline = (Guideline) a.a(view, i10);
                                    if (guideline != null) {
                                        i10 = R.id.message_header_barrier;
                                        Barrier barrier = (Barrier) a.a(view, i10);
                                        if (barrier != null && (a10 = a.a(view, (i10 = R.id.message_header_divider))) != null) {
                                            i10 = R.id.message_header_subtitle;
                                            TextView textView4 = (TextView) a.a(view, i10);
                                            if (textView4 != null) {
                                                i10 = R.id.message_header_title;
                                                TextView textView5 = (TextView) a.a(view, i10);
                                                if (textView5 != null) {
                                                    i10 = R.id.message_tag_view;
                                                    MessageTagView messageTagView = (MessageTagView) a.a(view, i10);
                                                    if (messageTagView != null) {
                                                        i10 = R.id.reply_preview;
                                                        MessageViewReplyPreview messageViewReplyPreview = (MessageViewReplyPreview) a.a(view, i10);
                                                        if (messageViewReplyPreview != null) {
                                                            i10 = R.id.timestamp;
                                                            TextView textView6 = (TextView) a.a(view, i10);
                                                            if (textView6 != null) {
                                                                return new AutomodSystemMessageViewBinding(view, messageAccessoriesView, simpleDraweeView, textView, textView2, textView3, simpleDraweeView2, flow, guideline, barrier, a10, textView4, textView5, messageTagView, messageViewReplyPreview, textView6);
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
    public static AutomodSystemMessageViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.automod_system_message_view, viewGroup);
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
