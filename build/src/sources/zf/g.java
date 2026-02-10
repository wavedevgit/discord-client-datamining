package zf;

import android.content.Context;
import android.os.Looper;
import ff.a;
import gf.k;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    private static final a.g f56421a;

    /* renamed from: b  reason: collision with root package name */
    private static final a f56422b;

    /* renamed from: c  reason: collision with root package name */
    private static final ff.a f56423c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends a.AbstractC0316a {
        a() {
        }

        @Override // ff.a.AbstractC0316a
        /* renamed from: c */
        public d b(Context context, Looper looper, hf.d commonSettings, a.d.C0317a apiOptions, gf.d connectedListener, k connectionFailedListener) {
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
        f56421a = gVar;
        a aVar = new a();
        f56422b = aVar;
        f56423c = new ff.a("IdentityCredentials.API", aVar, gVar);
    }
}
