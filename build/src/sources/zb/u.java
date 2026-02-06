package zb;

import android.content.Context;
import java.io.Closeable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class u implements Closeable {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        a a(Context context);

        u build();
    }

    abstract hc.d a();

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a().close();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract t g();
}
