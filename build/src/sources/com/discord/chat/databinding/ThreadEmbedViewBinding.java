package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.chat.presentation.message.ClanTagChipletView;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ThreadEmbedViewBinding implements ViewBinding {
    @NonNull
    private final View rootView;
    @NonNull
    public final ClanTagChipletView tagChiplet;
    @NonNull
    public final SimpleDraweeView threadEmbedIcon;
    @NonNull
    public final TextView threadEmbedMessagesCount;
    @NonNull
    public final SimpleDraweeView threadEmbedMostRecentMessageAvatar;
    @NonNull
    public final SimpleDraweeSpanTextView threadEmbedMostRecentMessageContent;
    @NonNull
    public final LinearLayout threadEmbedMostRecentMessageHeader;
    @NonNull
    public final TextView threadEmbedMostRecentMessageName;
    @NonNull
    public final TextView threadEmbedName;

    private ThreadEmbedViewBinding(@NonNull View view, @NonNull ClanTagChipletView clanTagChipletView, @NonNull SimpleDraweeView simpleDraweeView, @NonNull TextView textView, @NonNull SimpleDraweeView simpleDraweeView2, @NonNull SimpleDraweeSpanTextView simpleDraweeSpanTextView, @NonNull LinearLayout linearLayout, @NonNull TextView textView2, @NonNull TextView textView3) {
        this.rootView = view;
        this.tagChiplet = clanTagChipletView;
        this.threadEmbedIcon = simpleDraweeView;
        this.threadEmbedMessagesCount = textView;
        this.threadEmbedMostRecentMessageAvatar = simpleDraweeView2;
        this.threadEmbedMostRecentMessageContent = simpleDraweeSpanTextView;
        this.threadEmbedMostRecentMessageHeader = linearLayout;
        this.threadEmbedMostRecentMessageName = textView2;
        this.threadEmbedName = textView3;
    }

    @NonNull
    public static ThreadEmbedViewBinding bind(@NonNull View view) {
        int i10 = R.id.tag_chiplet;
        ClanTagChipletView clanTagChipletView = (ClanTagChipletView) a.a(view, i10);
        if (clanTagChipletView != null) {
            i10 = R.id.thread_embed_icon;
            SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
            if (simpleDraweeView != null) {
                i10 = R.id.thread_embed_messages_count;
                TextView textView = (TextView) a.a(view, i10);
                if (textView != null) {
                    i10 = R.id.thread_embed_most_recent_message_avatar;
                    SimpleDraweeView simpleDraweeView2 = (SimpleDraweeView) a.a(view, i10);
                    if (simpleDraweeView2 != null) {
                        i10 = R.id.thread_embed_most_recent_message_content;
                        SimpleDraweeSpanTextView simpleDraweeSpanTextView = (SimpleDraweeSpanTextView) a.a(view, i10);
                        if (simpleDraweeSpanTextView != null) {
                            i10 = R.id.thread_embed_most_recent_message_header;
                            LinearLayout linearLayout = (LinearLayout) a.a(view, i10);
                            if (linearLayout != null) {
                                i10 = R.id.thread_embed_most_recent_message_name;
                                TextView textView2 = (TextView) a.a(view, i10);
                                if (textView2 != null) {
                                    i10 = R.id.thread_embed_name;
                                    TextView textView3 = (TextView) a.a(view, i10);
                                    if (textView3 != null) {
                                        return new ThreadEmbedViewBinding(view, clanTagChipletView, simpleDraweeView, textView, simpleDraweeView2, simpleDraweeSpanTextView, linearLayout, textView2, textView3);
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
    public static ThreadEmbedViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.thread_embed_view, viewGroup);
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
