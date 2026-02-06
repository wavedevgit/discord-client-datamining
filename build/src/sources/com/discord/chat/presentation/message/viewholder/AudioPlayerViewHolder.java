package com.discord.chat.presentation.message.viewholder;

import android.content.Context;
import android.view.View;
import com.discord.chat.bridge.attachment.Attachment;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.message.messagepart.AudioAttachmentMessageAccessory;
import com.discord.chat.presentation.message.view.UploadItemProps;
import com.discord.chat.presentation.message.view.voicemessages.AudioPlayerManager;
import com.discord.chat.presentation.message.view.voicemessages.AudioPlayerUtilsKt;
import com.discord.chat.presentation.message.view.voicemessages.AudioPlayerView;
import com.discord.media_player.MediaPlayer;
import com.discord.media_player.MediaPlayerManagerModule;
import com.discord.media_player.MediaSource;
import com.discord.primitives.UserId;
import com.facebook.react.uimanager.ThemedReactContext;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u001f\u0010\u000b\u001a\u00020\n2\u0006\u0010\u0007\u001a\u00020\u00062\u0006\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\u000b\u0010\fJ\r\u0010\r\u001a\u00020\n¢\u0006\u0004\b\r\u0010\u000eJ;\u0010\u0015\u001a\u00020\n2\u0006\u0010\u0007\u001a\u00020\u00062\u0006\u0010\u0010\u001a\u00020\u000f2\u001c\u0010\u0014\u001a\u0018\u0012\u0004\u0012\u00020\u0012\u0012\u0006\u0012\u0004\u0018\u00010\u0013\u0012\u0004\u0012\u00020\n\u0018\u00010\u0011¢\u0006\u0004\b\u0015\u0010\u0016R\u0014\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0003\u0010\u0017R\u0016\u0010\u0019\u001a\u0004\u0018\u00010\u00188\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0019\u0010\u001aR\u0016\u0010\u001c\u001a\u00020\u001b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010\u001d¨\u0006\u001e"}, d2 = {"Lcom/discord/chat/presentation/message/viewholder/AudioPlayerViewHolder;", "Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;", "Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerView;", "view", "<init>", "(Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerView;)V", "Lcom/discord/chat/presentation/message/messagepart/AudioAttachmentMessageAccessory;", "accessory", "Lcom/discord/media_player/MediaSource;", "mediaSource", "", "configureVisibilityObservers", "(Lcom/discord/chat/presentation/message/messagepart/AudioAttachmentMessageAccessory;Lcom/discord/media_player/MediaSource;)V", "onViewRecycled", "()V", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "eventHandler", "Lkotlin/Function2;", "", "", "onLongClicked", "bind", "(Lcom/discord/chat/presentation/message/messagepart/AudioAttachmentMessageAccessory;Lcom/discord/chat/presentation/events/ChatEventHandler;Lkotlin/jvm/functions/Function2;)V", "Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerView;", "Lcom/discord/media_player/MediaPlayerManagerModule;", "mediaPlayerManagerModule", "Lcom/discord/media_player/MediaPlayerManagerModule;", "Landroid/view/View$OnAttachStateChangeListener;", "onAttachStateChangeListener", "Landroid/view/View$OnAttachStateChangeListener;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nAudioPlayerViewHolder.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AudioPlayerViewHolder.kt\ncom/discord/chat/presentation/message/viewholder/AudioPlayerViewHolder\n+ 2 CastUtils.kt\ncom/discord/misc/utilities/kotlin/CastUtilsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,139:1\n8#2:140\n1#3:141\n*S KotlinDebug\n*F\n+ 1 AudioPlayerViewHolder.kt\ncom/discord/chat/presentation/message/viewholder/AudioPlayerViewHolder\n*L\n19#1:140\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AudioPlayerViewHolder extends MessagePartViewHolder {
    private final MediaPlayerManagerModule mediaPlayerManagerModule;
    @NotNull
    private View.OnAttachStateChangeListener onAttachStateChangeListener;
    @NotNull
    private final AudioPlayerView view;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AudioPlayerViewHolder(@NotNull AudioPlayerView view) {
        super(view, null);
        Intrinsics.checkNotNullParameter(view, "view");
        this.view = view;
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        ThemedReactContext themedReactContext = (ThemedReactContext) (context instanceof ThemedReactContext ? context : null);
        this.mediaPlayerManagerModule = themedReactContext != null ? (MediaPlayerManagerModule) themedReactContext.getNativeModule(MediaPlayerManagerModule.class) : null;
        this.onAttachStateChangeListener = new View.OnAttachStateChangeListener() { // from class: com.discord.chat.presentation.message.viewholder.AudioPlayerViewHolder$onAttachStateChangeListener$1
            @Override // android.view.View.OnAttachStateChangeListener
            public void onViewAttachedToWindow(View view2) {
                Intrinsics.checkNotNullParameter(view2, "view");
            }

            @Override // android.view.View.OnAttachStateChangeListener
            public void onViewDetachedFromWindow(View view2) {
                Intrinsics.checkNotNullParameter(view2, "view");
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean bind$lambda$4$lambda$3$lambda$2(Function2 function2, AudioAttachmentMessageAccessory audioAttachmentMessageAccessory, View view) {
        if (function2 != null) {
            String id2 = audioAttachmentMessageAccessory.getAttachment().getId();
            if (id2 == null) {
                id2 = "";
            }
            function2.invoke(id2, Integer.valueOf(audioAttachmentMessageAccessory.getAttachmentIndex()));
            return true;
        }
        return true;
    }

    private final void configureVisibilityObservers(final AudioAttachmentMessageAccessory audioAttachmentMessageAccessory, final MediaSource mediaSource) {
        this.onAttachStateChangeListener.onViewDetachedFromWindow(this.view);
        this.view.removeOnAttachStateChangeListener(this.onAttachStateChangeListener);
        View.OnAttachStateChangeListener onAttachStateChangeListener = new View.OnAttachStateChangeListener() { // from class: com.discord.chat.presentation.message.viewholder.AudioPlayerViewHolder$configureVisibilityObservers$1
            @Override // android.view.View.OnAttachStateChangeListener
            public void onViewAttachedToWindow(View view) {
                MediaPlayerManagerModule mediaPlayerManagerModule;
                Intrinsics.checkNotNullParameter(view, "view");
                mediaPlayerManagerModule = AudioPlayerViewHolder.this.mediaPlayerManagerModule;
                if (mediaPlayerManagerModule != null) {
                    mediaPlayerManagerModule.m943onMediaPlayerViewWillAppearLJLSWy8(audioAttachmentMessageAccessory.m549getChannelIdo4g7jtM(), mediaSource);
                }
            }

            @Override // android.view.View.OnAttachStateChangeListener
            public void onViewDetachedFromWindow(View view) {
                MediaPlayerManagerModule mediaPlayerManagerModule;
                Intrinsics.checkNotNullParameter(view, "view");
                mediaPlayerManagerModule = AudioPlayerViewHolder.this.mediaPlayerManagerModule;
                if (mediaPlayerManagerModule != null) {
                    mediaPlayerManagerModule.m942onMediaPlayerViewDetachedLJLSWy8(audioAttachmentMessageAccessory.m549getChannelIdo4g7jtM(), mediaSource);
                }
            }
        };
        this.onAttachStateChangeListener = onAttachStateChangeListener;
        this.view.addOnAttachStateChangeListener(onAttachStateChangeListener);
        this.onAttachStateChangeListener.onViewAttachedToWindow(this.view);
    }

    public final void bind(@NotNull final AudioAttachmentMessageAccessory accessory, @NotNull final ChatEventHandler eventHandler, final Function2<? super String, ? super Integer, Unit> function2) {
        Intrinsics.checkNotNullParameter(accessory, "accessory");
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        final AudioPlayerManager.AudioSource audioSource = AudioPlayerUtilsKt.toAudioSource(accessory);
        configureVisibilityObservers(accessory, AudioPlayerUtilsKt.toMediaSource$default(audioSource, null, 1, null));
        final Attachment attachment = accessory.getAttachment();
        UploadItemProps uploadItemProps = accessory.getUploadItemProps(new AudioPlayerViewHolder$bind$1$uploadItemProps$1(eventHandler));
        AudioPlayerView audioPlayerView = this.view;
        audioPlayerView.setSourceUrl(accessory);
        byte[] waveformByteArray = attachment.getWaveformByteArray();
        if (waveformByteArray != null) {
            audioPlayerView.setSampleData(waveformByteArray);
        } else {
            audioPlayerView.setAudioFileDetails(accessory.getAttachment());
        }
        Float durationSecs = attachment.getDurationSecs();
        if (durationSecs != null) {
            audioPlayerView.setDurationMs(durationSecs.floatValue() * 1000);
        } else {
            audioPlayerView.setUnknownDuration();
        }
        audioPlayerView.setUploadProgress(uploadItemProps);
        audioPlayerView.setOnLongPress(new View.OnLongClickListener() { // from class: com.discord.chat.presentation.message.viewholder.c
            @Override // android.view.View.OnLongClickListener
            public final boolean onLongClick(View view) {
                boolean bind$lambda$4$lambda$3$lambda$2;
                bind$lambda$4$lambda$3$lambda$2 = AudioPlayerViewHolder.bind$lambda$4$lambda$3$lambda$2(Function2.this, accessory, view);
                return bind$lambda$4$lambda$3$lambda$2;
            }
        });
        audioPlayerView.shouldAnimate(attachment.isAnimated());
        audioPlayerView.setContainerBackgroundColor(accessory.getColor());
        audioPlayerView.setListener(new AudioPlayerView.Listener() { // from class: com.discord.chat.presentation.message.viewholder.AudioPlayerViewHolder$bind$1$1$4
            @Override // com.discord.chat.presentation.message.view.voicemessages.AudioPlayerView.Listener
            public void mediaAttachmentPlaybackEnded(float f10, float f11) {
                long j10;
                float f12;
                Float durationSecs2 = Attachment.this.getDurationSecs();
                if (durationSecs2 != null) {
                    f12 = durationSecs2.floatValue();
                } else {
                    MediaPlayer player = AudioPlayerManager.INSTANCE.getPlayer(audioSource);
                    if (player != null) {
                        j10 = player.durationMs();
                    } else {
                        j10 = 0;
                    }
                    f12 = ((float) j10) * 1000.0f;
                }
                float f13 = f12;
                ChatEventHandler chatEventHandler = eventHandler;
                String mo536getMessageId3Eiw7ao = accessory.mo536getMessageId3Eiw7ao();
                UserId m548getAuthorIdwUX8bhU = accessory.m548getAuthorIdwUX8bhU();
                if (m548getAuthorIdwUX8bhU != null) {
                    long m1144unboximpl = m548getAuthorIdwUX8bhU.m1144unboximpl();
                    boolean isVoiceMessage = accessory.isVoiceMessage();
                    String id2 = accessory.getAttachment().getId();
                    if (id2 == null) {
                        id2 = "";
                    }
                    chatEventHandler.mo432mediaAttachmentPlaybackEndedO97gnAM(mo536getMessageId3Eiw7ao, f13, f10, m1144unboximpl, f11, isVoiceMessage, id2);
                }
            }

            @Override // com.discord.chat.presentation.message.view.voicemessages.AudioPlayerView.Listener
            public void mediaAttachmentPlaybackStarted(float f10) {
                long j10;
                float f11;
                Float durationSecs2 = Attachment.this.getDurationSecs();
                if (durationSecs2 != null) {
                    f11 = durationSecs2.floatValue();
                } else {
                    MediaPlayer player = AudioPlayerManager.INSTANCE.getPlayer(audioSource);
                    if (player != null) {
                        j10 = player.durationMs();
                    } else {
                        j10 = 0;
                    }
                    f11 = ((float) j10) * 1000.0f;
                }
                float f12 = f11;
                ChatEventHandler chatEventHandler = eventHandler;
                String mo536getMessageId3Eiw7ao = accessory.mo536getMessageId3Eiw7ao();
                UserId m548getAuthorIdwUX8bhU = accessory.m548getAuthorIdwUX8bhU();
                if (m548getAuthorIdwUX8bhU != null) {
                    long m1144unboximpl = m548getAuthorIdwUX8bhU.m1144unboximpl();
                    boolean isVoiceMessage = accessory.isVoiceMessage();
                    String id2 = accessory.getAttachment().getId();
                    if (id2 == null) {
                        id2 = "";
                    }
                    chatEventHandler.mo433mediaAttachmentPlaybackStartedjd4C3YQ(mo536getMessageId3Eiw7ao, f12, f10, m1144unboximpl, isVoiceMessage, id2);
                }
            }

            @Override // com.discord.chat.presentation.message.view.voicemessages.AudioPlayerView.Listener
            public void voiceMessagePlaybackFailed(String str) {
                if (!accessory.isVoiceMessage()) {
                    return;
                }
                eventHandler.mo487voiceMessagePlaybackFailedntcYbpo(accessory.mo536getMessageId3Eiw7ao(), str);
            }
        });
    }

    public final void onViewRecycled() {
        this.view.removeOnAttachStateChangeListener(this.onAttachStateChangeListener);
        this.onAttachStateChangeListener.onViewDetachedFromWindow(this.view);
    }
}
