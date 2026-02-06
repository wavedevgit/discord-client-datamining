package tl;

import android.media.MediaMuxer;
import java.io.FileDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract /* synthetic */ class b {
    public static /* synthetic */ MediaMuxer a(FileDescriptor fileDescriptor, int i10) {
        return new MediaMuxer(fileDescriptor, i10);
    }
}
