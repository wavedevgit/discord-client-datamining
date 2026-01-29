package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.overlapping_circles.OverlappingCirclesView;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageFrameFeedHeaderBinding implements ViewBinding {
    @NonNull
    public final SimpleDraweeView feedChannelIcon;
    @NonNull
    public final TextView feedChannelText;
    @NonNull
    public final TextView feedReplyCount;
    @NonNull
    public final SimpleDraweeView feedReplyIcon;
    @NonNull
    public final OverlappingCirclesView feedReplyParticipants;
    @NonNull
    private final View rootView;

    private MessageFrameFeedHeaderBinding(@NonNull View view, @NonNull SimpleDraweeView simpleDraweeView, @NonNull TextView textView, @NonNull TextView textView2, @NonNull SimpleDraweeView simpleDraweeView2, @NonNull OverlappingCirclesView overlappingCirclesView) {
        this.rootView = view;
        this.feedChannelIcon = simpleDraweeView;
        this.feedChannelText = textView;
        this.feedReplyCount = textView2;
        this.feedReplyIcon = simpleDraweeView2;
        this.feedReplyParticipants = overlappingCirclesView;
    }

    @NonNull
    public static MessageFrameFeedHeaderBinding bind(@NonNull View view) {
        int i10 = R.id.feed_channel_icon;
        SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
        if (simpleDraweeView != null) {
            i10 = R.id.feed_channel_text;
            TextView textView = (TextView) a.a(view, i10);
            if (textView != null) {
                i10 = R.id.feed_reply_count;
                TextView textView2 = (TextView) a.a(view, i10);
                if (textView2 != null) {
                    i10 = R.id.feed_reply_icon;
                    SimpleDraweeView simpleDraweeView2 = (SimpleDraweeView) a.a(view, i10);
                    if (simpleDraweeView2 != null) {
                        i10 = R.id.feed_reply_participants;
                        OverlappingCirclesView overlappingCirclesView = (OverlappingCirclesView) a.a(view, i10);
                        if (overlappingCirclesView != null) {
                            return new MessageFrameFeedHeaderBinding(view, simpleDraweeView, textView, textView2, simpleDraweeView2, overlappingCirclesView);
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static MessageFrameFeedHeaderBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.message_frame_feed_header, viewGroup);
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
