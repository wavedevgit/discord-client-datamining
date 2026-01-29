package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.chat.presentation.message.view.botuikit.components.CheckpointCardComponentView;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageComponentCheckpointCardViewBinding implements ViewBinding {
    @NonNull
    public final SimpleDraweeView applicationImage;
    @NonNull
    public final TextView applicationName;
    @NonNull
    public final FrameLayout applicationStroke;
    @NonNull
    public final LinearLayout checkpoint;
    @NonNull
    public final TextView cta;
    @NonNull
    public final TextView emojiCount;
    @NonNull
    public final SimpleDraweeView emojiImage;
    @NonNull
    public final TextView emojiName;
    @NonNull
    public final FrameLayout emojiStroke;
    @NonNull
    public final ConstraintLayout footer;
    @NonNull
    public final SimpleDraweeView guildImage;
    @NonNull
    public final TextView guildName;
    @NonNull
    public final FrameLayout guildStroke;
    @NonNull
    public final LinearLayout image;
    @NonNull
    public final SimpleDraweeView imageResource;
    @NonNull
    public final ImageView logo;
    @NonNull
    public final TextView messageCount;
    @NonNull
    public final LinearLayout powerBar;
    @NonNull
    public final LinearLayout powerContainer;
    @NonNull
    public final TextView powerLevelLvl;
    @NonNull
    public final TextView powerLevelNumber;
    @NonNull
    private final CheckpointCardComponentView rootView;
    @NonNull
    public final LinearLayout stats;
    @NonNull
    public final TextView title;
    @NonNull
    public final TextView unicodeEmojiImage;
    @NonNull
    public final TextView voiceMinutes;

    private MessageComponentCheckpointCardViewBinding(@NonNull CheckpointCardComponentView checkpointCardComponentView, @NonNull SimpleDraweeView simpleDraweeView, @NonNull TextView textView, @NonNull FrameLayout frameLayout, @NonNull LinearLayout linearLayout, @NonNull TextView textView2, @NonNull TextView textView3, @NonNull SimpleDraweeView simpleDraweeView2, @NonNull TextView textView4, @NonNull FrameLayout frameLayout2, @NonNull ConstraintLayout constraintLayout, @NonNull SimpleDraweeView simpleDraweeView3, @NonNull TextView textView5, @NonNull FrameLayout frameLayout3, @NonNull LinearLayout linearLayout2, @NonNull SimpleDraweeView simpleDraweeView4, @NonNull ImageView imageView, @NonNull TextView textView6, @NonNull LinearLayout linearLayout3, @NonNull LinearLayout linearLayout4, @NonNull TextView textView7, @NonNull TextView textView8, @NonNull LinearLayout linearLayout5, @NonNull TextView textView9, @NonNull TextView textView10, @NonNull TextView textView11) {
        this.rootView = checkpointCardComponentView;
        this.applicationImage = simpleDraweeView;
        this.applicationName = textView;
        this.applicationStroke = frameLayout;
        this.checkpoint = linearLayout;
        this.cta = textView2;
        this.emojiCount = textView3;
        this.emojiImage = simpleDraweeView2;
        this.emojiName = textView4;
        this.emojiStroke = frameLayout2;
        this.footer = constraintLayout;
        this.guildImage = simpleDraweeView3;
        this.guildName = textView5;
        this.guildStroke = frameLayout3;
        this.image = linearLayout2;
        this.imageResource = simpleDraweeView4;
        this.logo = imageView;
        this.messageCount = textView6;
        this.powerBar = linearLayout3;
        this.powerContainer = linearLayout4;
        this.powerLevelLvl = textView7;
        this.powerLevelNumber = textView8;
        this.stats = linearLayout5;
        this.title = textView9;
        this.unicodeEmojiImage = textView10;
        this.voiceMinutes = textView11;
    }

    @NonNull
    public static MessageComponentCheckpointCardViewBinding bind(@NonNull View view) {
        int i10 = R.id.application_image;
        SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
        if (simpleDraweeView != null) {
            i10 = R.id.application_name;
            TextView textView = (TextView) a.a(view, i10);
            if (textView != null) {
                i10 = R.id.application_stroke;
                FrameLayout frameLayout = (FrameLayout) a.a(view, i10);
                if (frameLayout != null) {
                    i10 = R.id.checkpoint;
                    LinearLayout linearLayout = (LinearLayout) a.a(view, i10);
                    if (linearLayout != null) {
                        i10 = R.id.cta;
                        TextView textView2 = (TextView) a.a(view, i10);
                        if (textView2 != null) {
                            i10 = R.id.emoji_count;
                            TextView textView3 = (TextView) a.a(view, i10);
                            if (textView3 != null) {
                                i10 = R.id.emoji_image;
                                SimpleDraweeView simpleDraweeView2 = (SimpleDraweeView) a.a(view, i10);
                                if (simpleDraweeView2 != null) {
                                    i10 = R.id.emoji_name;
                                    TextView textView4 = (TextView) a.a(view, i10);
                                    if (textView4 != null) {
                                        i10 = R.id.emoji_stroke;
                                        FrameLayout frameLayout2 = (FrameLayout) a.a(view, i10);
                                        if (frameLayout2 != null) {
                                            i10 = R.id.footer;
                                            ConstraintLayout constraintLayout = (ConstraintLayout) a.a(view, i10);
                                            if (constraintLayout != null) {
                                                i10 = R.id.guild_image;
                                                SimpleDraweeView simpleDraweeView3 = (SimpleDraweeView) a.a(view, i10);
                                                if (simpleDraweeView3 != null) {
                                                    i10 = R.id.guild_name;
                                                    TextView textView5 = (TextView) a.a(view, i10);
                                                    if (textView5 != null) {
                                                        i10 = R.id.guild_stroke;
                                                        FrameLayout frameLayout3 = (FrameLayout) a.a(view, i10);
                                                        if (frameLayout3 != null) {
                                                            i10 = R.id.image;
                                                            LinearLayout linearLayout2 = (LinearLayout) a.a(view, i10);
                                                            if (linearLayout2 != null) {
                                                                i10 = R.id.image_resource;
                                                                SimpleDraweeView simpleDraweeView4 = (SimpleDraweeView) a.a(view, i10);
                                                                if (simpleDraweeView4 != null) {
                                                                    i10 = R.id.logo;
                                                                    ImageView imageView = (ImageView) a.a(view, i10);
                                                                    if (imageView != null) {
                                                                        i10 = R.id.message_count;
                                                                        TextView textView6 = (TextView) a.a(view, i10);
                                                                        if (textView6 != null) {
                                                                            i10 = R.id.power_bar;
                                                                            LinearLayout linearLayout3 = (LinearLayout) a.a(view, i10);
                                                                            if (linearLayout3 != null) {
                                                                                i10 = R.id.power_container;
                                                                                LinearLayout linearLayout4 = (LinearLayout) a.a(view, i10);
                                                                                if (linearLayout4 != null) {
                                                                                    i10 = R.id.power_level_lvl;
                                                                                    TextView textView7 = (TextView) a.a(view, i10);
                                                                                    if (textView7 != null) {
                                                                                        i10 = R.id.power_level_number;
                                                                                        TextView textView8 = (TextView) a.a(view, i10);
                                                                                        if (textView8 != null) {
                                                                                            i10 = R.id.stats;
                                                                                            LinearLayout linearLayout5 = (LinearLayout) a.a(view, i10);
                                                                                            if (linearLayout5 != null) {
                                                                                                i10 = R.id.title;
                                                                                                TextView textView9 = (TextView) a.a(view, i10);
                                                                                                if (textView9 != null) {
                                                                                                    i10 = R.id.unicode_emoji_image;
                                                                                                    TextView textView10 = (TextView) a.a(view, i10);
                                                                                                    if (textView10 != null) {
                                                                                                        i10 = R.id.voice_minutes;
                                                                                                        TextView textView11 = (TextView) a.a(view, i10);
                                                                                                        if (textView11 != null) {
                                                                                                            return new MessageComponentCheckpointCardViewBinding((CheckpointCardComponentView) view, simpleDraweeView, textView, frameLayout, linearLayout, textView2, textView3, simpleDraweeView2, textView4, frameLayout2, constraintLayout, simpleDraweeView3, textView5, frameLayout3, linearLayout2, simpleDraweeView4, imageView, textView6, linearLayout3, linearLayout4, textView7, textView8, linearLayout5, textView9, textView10, textView11);
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
    public static MessageComponentCheckpointCardViewBinding inflate(@NonNull LayoutInflater layoutInflater) {
        return inflate(layoutInflater, null, false);
    }

    @NonNull
    public static MessageComponentCheckpointCardViewBinding inflate(@NonNull LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(R.layout.message_component_checkpoint_card_view, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    @NonNull
    public CheckpointCardComponentView getRoot() {
        return this.rootView;
    }
}
