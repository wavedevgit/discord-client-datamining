package d5;

import android.content.Context;
import android.net.Uri;
import g5.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements d {
    private final boolean b(int i10, Context context) {
        if (context.getResources().getResourceEntryName(i10) == null) {
            return false;
        }
        return true;
    }

    @Override // d5.d
    public /* bridge */ /* synthetic */ Object a(Object obj, m mVar) {
        return c(((Number) obj).intValue(), mVar);
    }

    public Uri c(int i10, m mVar) {
        if (!b(i10, mVar.g())) {
            return null;
        }
        return Uri.parse("android.resource://" + mVar.g().getPackageName() + '/' + i10);
    }
}
