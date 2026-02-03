package gf;

import android.net.Uri;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class p1 {

    /* renamed from: a  reason: collision with root package name */
    private static final Uri f26185a;

    /* renamed from: b  reason: collision with root package name */
    private static final Uri f26186b;

    /* renamed from: c  reason: collision with root package name */
    public static final /* synthetic */ int f26187c = 0;

    static {
        Uri parse = Uri.parse("https://plus.google.com/");
        f26185a = parse;
        f26186b = parse.buildUpon().appendPath("circles").appendPath("find").build();
    }
}
