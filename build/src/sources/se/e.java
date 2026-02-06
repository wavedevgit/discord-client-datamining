package se;

import android.net.Uri;
import android.util.LogPrinter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: b  reason: collision with root package name */
    private static final Uri f49939b;

    /* renamed from: a  reason: collision with root package name */
    private final LogPrinter f49940a = new LogPrinter(4, "GA/LogCatTransport");

    static {
        Uri.Builder builder = new Uri.Builder();
        builder.scheme("uri");
        builder.authority("local");
        f49939b = builder.build();
    }
}
