package te;

import android.net.Uri;
import android.util.LogPrinter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: b  reason: collision with root package name */
    private static final Uri f50828b;

    /* renamed from: a  reason: collision with root package name */
    private final LogPrinter f50829a = new LogPrinter(4, "GA/LogCatTransport");

    static {
        Uri.Builder builder = new Uri.Builder();
        builder.scheme("uri");
        builder.authority("local");
        f50828b = builder.build();
    }
}
