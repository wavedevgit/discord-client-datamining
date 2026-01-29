package yf;

import android.content.Context;
import android.os.Looper;
import ef.a;
import ff.k;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    private static final a.g f54323a;

    /* renamed from: b  reason: collision with root package name */
    private static final a f54324b;

    /* renamed from: c  reason: collision with root package name */
    private static final ef.a f54325c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends a.AbstractC0290a {
        a() {
        }

        @Override // ef.a.AbstractC0290a
        /* renamed from: c */
        public d b(Context context, Looper looper, gf.d commonSettings, a.d.C0291a apiOptions, ff.d connectedListener, k connectionFailedListener) {
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
        f54323a = gVar;
        a aVar = new a();
        f54324b = aVar;
        f54325c = new ef.a("IdentityCredentials.API", aVar, gVar);
    }
}
