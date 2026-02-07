package yf;

import android.content.Context;
import android.os.Looper;
import ef.a;
import ff.k;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    private static final a.g f55357a;

    /* renamed from: b  reason: collision with root package name */
    private static final a f55358b;

    /* renamed from: c  reason: collision with root package name */
    private static final ef.a f55359c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends a.AbstractC0286a {
        a() {
        }

        @Override // ef.a.AbstractC0286a
        /* renamed from: c */
        public d b(Context context, Looper looper, gf.d commonSettings, a.d.C0287a apiOptions, ff.d connectedListener, k connectionFailedListener) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(looper, "looper");
            Intrinsics.checkNotNullParameter(commonSettings, "commonSettings");
            Intrinsics.checkNotNullParameter(apiOptions, "apiOptions");
            Intrinsics.checkNotNullParameter(connectedListener, "connectedListener");
            Intrinsics.checkNotNullParameter(connectionFailedListener, "connectionFailedListener");
            return new d(context, looper, commonSettings, connectedListener, connectionFailedListener);
        }
    }

    static {
        a.g gVar = new a.g();
        f55357a = gVar;
        a aVar = new a();
        f55358b = aVar;
        f55359c = new ef.a("IdentityCredentials.API", aVar, gVar);
    }
}
