package gf;

import android.net.Uri;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class p1 {

    /* renamed from: a  reason: collision with root package name */
    private static final Uri f26972a;

    /* renamed from: b  reason: collision with root package name */
    private static final Uri f26973b;

    /* renamed from: c  reason: collision with root package name */
    public static final /* synthetic */ int f26974c = 0;

    static {
        Uri parse = Uri.parse("https://plus.google.com/");
        f26972a = parse;
        f26973b = parse.buildUpon().appendPath("circles").appendPath("find").build();
    }
}
