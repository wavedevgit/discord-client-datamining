package com.discord.chat.presentation.message.view.voicemessages;

import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import kotlin.Metadata;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0010\b\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\f\u001a\u00020\u0003HÆ\u0003J\t\u0010\r\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u000e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0012\u001a\u00020\u0005HÖ\u0001J\t\u0010\u0013\u001a\u00020\u0014HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u0015"}, d2 = {"Lcom/discord/chat/presentation/message/view/voicemessages/AudioProgressEvent;", "", ReactProgressBarViewManager.PROP_PROGRESS, "", "eventAction", "", "<init>", "(FI)V", "getProgress", "()F", "getEventAction", "()I", "component1", "component2", "copy", "equals", "", "other", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AudioProgressEvent {
    private final int eventAction;
    private final float progress;

    public AudioProgressEvent(float f10, int i10) {
        this.progress = f10;
        this.eventAction = i10;
    }

    public static /* synthetic */ AudioProgressEvent copy$default(AudioProgressEvent audioProgressEvent, float f10, int i10, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            f10 = audioProgressEvent.progress;
        }
        if ((i11 & 2) != 0) {
            i10 = audioProgressEvent.eventAction;
        }
        return audioProgressEvent.copy(f10, i10);
    }

    public final float component1() {
        return this.progress;
    }

    public final int component2() {
        return this.eventAction;
    }

    @NotNull
    public final AudioProgressEvent copy(float f10, int i10) {
        return new AudioProgressEvent(f10, i10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof AudioProgressEvent) {
            AudioProgressEvent audioProgressEvent = (AudioProgressEvent) obj;
            return Float.compare(this.progress, audioProgressEvent.progress) == 0 && this.eventAction == audioProgressEvent.eventAction;
        }
        return false;
    }

    public final int getEventAction() {
        return this.eventAction;
    }

    public final float getProgress() {
        return this.progress;
    }

    public int hashCode() {
        return (Float.hashCode(this.progress) * 31) + Integer.hashCode(this.eventAction);
    }

    @NotNull
    public String toString() {
        float f10 = this.progress;
        int i10 = this.eventAction;
        return "AudioProgressEvent(progress=" + f10 + ", eventAction=" + i10 + ")";
    }
}
