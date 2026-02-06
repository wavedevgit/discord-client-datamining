package androidx.work;

import android.content.Context;
import androidx.work.a;
import java.util.Collections;
import java.util.List;
import k4.m;
import k4.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class WorkManagerInitializer implements a4.a {

    /* renamed from: a  reason: collision with root package name */
    private static final String f5902a = m.i("WrkMgrInitializer");

    @Override // a4.a
    /* renamed from: a */
    public y create(Context context) {
        m.e().a(f5902a, "Initializing WorkManager with default configuration.");
        y.f(context, new a.C0074a().a());
        return y.e(context);
    }

    @Override // a4.a
    public List dependencies() {
        return Collections.EMPTY_LIST;
    }
}
