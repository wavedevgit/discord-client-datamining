package c5;

import android.net.Uri;
import g5.m;
import k5.k;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements b {
    @Override // c5.b
    /* renamed from: b */
    public String a(Uri uri, m mVar) {
        if (Intrinsics.areEqual(uri.getScheme(), "android.resource")) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append(uri);
            sb2.append('-');
            sb2.append(k.k(mVar.g().getResources().getConfiguration()));
            return sb2.toString();
        }
        return uri.toString();
    }
}
