package bf;

import af.f;
import android.content.Context;
import android.os.Looper;
import bf.a;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.tasks.Task;
import ef.a;
import ef.d;
import ff.k;
import ff.m;
import ff.q;
import ff.r;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends ef.d implements f {

    /* renamed from: k  reason: collision with root package name */
    public static final b f6561k = new b(null);

    /* renamed from: l  reason: collision with root package name */
    private static final a.g f6562l;

    /* renamed from: m  reason: collision with root package name */
    private static final a f6563m;

    /* renamed from: n  reason: collision with root package name */
    private static final ef.a f6564n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends a.AbstractC0301a {
        a() {
        }

        @Override // ef.a.AbstractC0301a
        /* renamed from: c */
        public e b(Context context, Looper looper, gf.d commonSettings, a.d.C0302a apiOptions, ff.d connectedListener, k connectionFailedListener) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(looper, "looper");
            Intrinsics.checkNotNullParameter(commonSettings, "commonSettings");
            Intrinsics.checkNotNullParameter(apiOptions, "apiOptions");
            Intrinsics.checkNotNullParameter(connectedListener, "connectedListener");
            Intrinsics.checkNotNullParameter(connectionFailedListener, "connectionFailedListener");
            return new e(context, looper, commonSettings, connectedListener, connectionFailedListener);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {
        private b() {
        }

        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends a.AbstractBinderC0112a {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ wg.k f6565c;

        c(wg.k kVar) {
            this.f6565c = kVar;
        }

        @Override // bf.a
        public void W(Status status, af.c response) {
            Intrinsics.checkNotNullParameter(status, "status");
            Intrinsics.checkNotNullParameter(response, "response");
            r.a(status, response, this.f6565c);
        }
    }

    static {
        a.g gVar = new a.g();
        f6562l = gVar;
        a aVar = new a();
        f6563m = aVar;
        f6564n = new ef.a("RestoreCredential.API", aVar, gVar);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(Context context) {
        super(context, f6564n, a.d.f22794c, d.a.f22806c);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void D(af.a request, e eVar, wg.k kVar) {
        Intrinsics.checkNotNullParameter(request, "$request");
        ((bf.b) eVar.C()).S(request, new c(kVar));
    }

    @Override // af.f
    public Task l(final af.a request) {
        Intrinsics.checkNotNullParameter(request, "request");
        Task p10 = p(q.a().d(eg.b.f22827k).b(new m() { // from class: bf.c
            @Override // ff.m
            public final void accept(Object obj, Object obj2) {
                d.D(af.a.this, (e) obj, (wg.k) obj2);
            }
        }).e(1695).a());
        Intrinsics.checkNotNullExpressionValue(p10, "doRead(...)");
        return p10;
    }
}
