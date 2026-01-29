package app.rive.core;

import androidx.annotation.Keep;
import kotlin.Metadata;
import org.jetbrains.annotations.NotNull;
@Keep
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\t\n\u0002\b\u0018\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0081\b\u0018\u00002\u00020\u0001B=\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\u0003¢\u0006\u0002\u0010\nJ\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0019\u001a\u00020\u0003HÆ\u0003JO\u0010\u001a\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u00032\b\b\u0002\u0010\u0007\u001a\u00020\u00032\b\b\u0002\u0010\b\u001a\u00020\u00032\b\b\u0002\u0010\t\u001a\u00020\u0003HÆ\u0001JA\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00032\u0006\u0010\u0005\u001a\u00020\u00032\u0006\u0010\u0006\u001a\u00020\u00032\u0006\u0010\u0007\u001a\u00020\u00032\u0006\u0010\b\u001a\u00020\u00032\u0006\u0010\t\u001a\u00020\u0003H\u0082 J\r\u0010\u001d\u001a\u00020\u001cH\u0000¢\u0006\u0002\b\u001eJ\u0013\u0010\u001f\u001a\u00020 2\b\u0010!\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\"\u001a\u00020#HÖ\u0001J\t\u0010$\u001a\u00020%HÖ\u0001R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0011\u0010\b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\fR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\fR\u0011\u0010\t\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\fR\u0011\u0010\u0007\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\fR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\fR\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\f¨\u0006&"}, d2 = {"Lapp/rive/core/Listeners;", "", "fileListener", "", "artboardListener", "stateMachineListener", "viewModelInstanceListener", "imageListener", "audioListener", "fontListener", "(JJJJJJJ)V", "getArtboardListener", "()J", "getAudioListener", "getFileListener", "getFontListener", "getImageListener", "getStateMachineListener", "getViewModelInstanceListener", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "copy", "cppDelete", "", "dispose", "dispose$kotlin_release", "equals", "", "other", "hashCode", "", "toString", "", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Listeners {
    public static final int $stable = 0;
    private final long artboardListener;
    private final long audioListener;
    private final long fileListener;
    private final long fontListener;
    private final long imageListener;
    private final long stateMachineListener;
    private final long viewModelInstanceListener;

    public Listeners(long j10, long j11, long j12, long j13, long j14, long j15, long j16) {
        this.fileListener = j10;
        this.artboardListener = j11;
        this.stateMachineListener = j12;
        this.viewModelInstanceListener = j13;
        this.imageListener = j14;
        this.audioListener = j15;
        this.fontListener = j16;
    }

    private final native void cppDelete(long j10, long j11, long j12, long j13, long j14, long j15, long j16);

    public final long component1() {
        return this.fileListener;
    }

    public final long component2() {
        return this.artboardListener;
    }

    public final long component3() {
        return this.stateMachineListener;
    }

    public final long component4() {
        return this.viewModelInstanceListener;
    }

    public final long component5() {
        return this.imageListener;
    }

    public final long component6() {
        return this.audioListener;
    }

    public final long component7() {
        return this.fontListener;
    }

    @NotNull
    public final Listeners copy(long j10, long j11, long j12, long j13, long j14, long j15, long j16) {
        return new Listeners(j10, j11, j12, j13, j14, j15, j16);
    }

    public final void dispose$kotlin_release() {
        cppDelete(this.fileListener, this.artboardListener, this.stateMachineListener, this.viewModelInstanceListener, this.imageListener, this.audioListener, this.fontListener);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Listeners) {
            Listeners listeners = (Listeners) obj;
            return this.fileListener == listeners.fileListener && this.artboardListener == listeners.artboardListener && this.stateMachineListener == listeners.stateMachineListener && this.viewModelInstanceListener == listeners.viewModelInstanceListener && this.imageListener == listeners.imageListener && this.audioListener == listeners.audioListener && this.fontListener == listeners.fontListener;
        }
        return false;
    }

    public final long getArtboardListener() {
        return this.artboardListener;
    }

    public final long getAudioListener() {
        return this.audioListener;
    }

    public final long getFileListener() {
        return this.fileListener;
    }

    public final long getFontListener() {
        return this.fontListener;
    }

    public final long getImageListener() {
        return this.imageListener;
    }

    public final long getStateMachineListener() {
        return this.stateMachineListener;
    }

    public final long getViewModelInstanceListener() {
        return this.viewModelInstanceListener;
    }

    public int hashCode() {
        return (((((((((((Long.hashCode(this.fileListener) * 31) + Long.hashCode(this.artboardListener)) * 31) + Long.hashCode(this.stateMachineListener)) * 31) + Long.hashCode(this.viewModelInstanceListener)) * 31) + Long.hashCode(this.imageListener)) * 31) + Long.hashCode(this.audioListener)) * 31) + Long.hashCode(this.fontListener);
    }

    @NotNull
    public String toString() {
        long j10 = this.fileListener;
        long j11 = this.artboardListener;
        long j12 = this.stateMachineListener;
        long j13 = this.viewModelInstanceListener;
        long j14 = this.imageListener;
        long j15 = this.audioListener;
        long j16 = this.fontListener;
        return "Listeners(fileListener=" + j10 + ", artboardListener=" + j11 + ", stateMachineListener=" + j12 + ", viewModelInstanceListener=" + j13 + ", imageListener=" + j14 + ", audioListener=" + j15 + ", fontListener=" + j16 + ")";
    }
}
