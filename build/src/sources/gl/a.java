package gl;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {
    void onCancelled(String str, List list);

    void onCompleted(String str, List list);

    void onError(String str, Throwable th2, List list);

    void onProgress(String str, float f10);

    void onStarted(String str);
}
