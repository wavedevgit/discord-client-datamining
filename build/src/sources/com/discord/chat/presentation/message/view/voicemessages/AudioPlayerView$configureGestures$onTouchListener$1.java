package com.discord.chat.presentation.message.view.voicemessages;

import android.view.View;
import android.widget.LinearLayout;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.Job;
@Metadata(d1 = {"\u00005\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000*\u0001\u0000\b\n\u0018\u00002\u00020\u0001J\u0018\u0010\u0010\u001a\u00020\u00032\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u0014H\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u001e\u0010\u0005\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0003@BX\u0082\u000e¢\u0006\b\n\u0000\"\u0004\b\u0006\u0010\u0007R\u000e\u0010\b\u001a\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\nX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\nX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\f\u001a\u0004\u0018\u00010\rX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0015"}, d2 = {"com/discord/chat/presentation/message/view/voicemessages/AudioPlayerView$configureGestures$onTouchListener$1", "Landroid/view/View$OnTouchListener;", "isLongPress", "", "value", "isScrubbing", "setScrubbing", "(Z)V", "hasMoved", "initialX", "", "initialY", "longPressJob", "Lkotlinx/coroutines/Job;", "longPressRunnable", "Ljava/lang/Runnable;", "onTouch", "view", "Landroid/view/View;", "event", "Landroid/view/MotionEvent;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nAudioPlayerView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AudioPlayerView.kt\ncom/discord/chat/presentation/message/view/voicemessages/AudioPlayerView$configureGestures$onTouchListener$1\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,740:1\n255#2:741\n*S KotlinDebug\n*F\n+ 1 AudioPlayerView.kt\ncom/discord/chat/presentation/message/view/voicemessages/AudioPlayerView$configureGestures$onTouchListener$1\n*L\n226#1:741\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AudioPlayerView$configureGestures$onTouchListener$1 implements View.OnTouchListener {
    private boolean hasMoved;
    private float initialX;
    private float initialY;
    private boolean isLongPress;
    private boolean isScrubbing;
    private Job longPressJob;
    private final Runnable longPressRunnable;
    final /* synthetic */ AudioPlayerView this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public AudioPlayerView$configureGestures$onTouchListener$1(final AudioPlayerView audioPlayerView) {
        this.this$0 = audioPlayerView;
        this.longPressRunnable = new Runnable() { // from class: com.discord.chat.presentation.message.view.voicemessages.r
            @Override // java.lang.Runnable
            public final void run() {
                AudioPlayerView$configureGestures$onTouchListener$1.longPressRunnable$lambda$0(AudioPlayerView$configureGestures$onTouchListener$1.this, audioPlayerView);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void longPressRunnable$lambda$0(AudioPlayerView$configureGestures$onTouchListener$1 audioPlayerView$configureGestures$onTouchListener$1, AudioPlayerView audioPlayerView) {
        View.OnLongClickListener onLongClickListener;
        if (!audioPlayerView$configureGestures$onTouchListener$1.hasMoved) {
            audioPlayerView$configureGestures$onTouchListener$1.isLongPress = true;
            onLongClickListener = audioPlayerView.onLongPress;
            if (onLongClickListener != null) {
                onLongClickListener.onLongClick(audioPlayerView.getBinding().audioProgressView);
            }
        }
    }

    private final void setScrubbing(boolean z10) {
        if (this.isScrubbing != z10) {
            this.isScrubbing = z10;
            LinearLayout audioDetailsView = this.this$0.getBinding().audioDetailsView;
            Intrinsics.checkNotNullExpressionValue(audioDetailsView, "audioDetailsView");
            if (audioDetailsView.getVisibility() == 0) {
                this.this$0.getBinding().audioProgressBar.setScrubbing$chat_release(z10);
            }
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:8:0x0054, code lost:
        if (r2 != 3) goto L8;
     */
    @Override // android.view.View.OnTouchListener
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean onTouch(android.view.View r13, android.view.MotionEvent r14) {
        /*
            Method dump skipped, instructions count: 315
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.view.voicemessages.AudioPlayerView$configureGestures$onTouchListener$1.onTouch(android.view.View, android.view.MotionEvent):boolean");
    }
}
