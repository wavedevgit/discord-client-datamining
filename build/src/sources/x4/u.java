package x4;

import android.content.Context;
import java.io.Closeable;
import java.io.File;
import kotlin.jvm.functions.Function0;
import okio.BufferedSource;
import ou.c0;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class u {
    /* JADX INFO: Access modifiers changed from: private */
    public static final File c(Context context) {
        return k5.k.m(context);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final File d(Context context) {
        return k5.k.m(context);
    }

    public static final r e(BufferedSource bufferedSource, final Context context) {
        return new w(bufferedSource, new Function0() { // from class: x4.t
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                File c10;
                c10 = u.c(context);
                return c10;
            }
        }, null);
    }

    public static final r f(BufferedSource bufferedSource, final Context context, r.a aVar) {
        return new w(bufferedSource, new Function0() { // from class: x4.s
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                File d10;
                d10 = u.d(context);
                return d10;
            }
        }, aVar);
    }

    public static final r g(c0 c0Var, ou.h hVar, String str, Closeable closeable) {
        return new q(c0Var, hVar, str, closeable, null);
    }

    public static /* synthetic */ r h(c0 c0Var, ou.h hVar, String str, Closeable closeable, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            hVar = ou.h.f44516b;
        }
        if ((i10 & 4) != 0) {
            str = null;
        }
        if ((i10 & 8) != 0) {
            closeable = null;
        }
        return g(c0Var, hVar, str, closeable);
    }
}
