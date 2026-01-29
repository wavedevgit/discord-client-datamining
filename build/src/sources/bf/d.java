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
    public static final b f7510k = new b(null);

    /* renamed from: l  reason: collision with root package name */
    private static final a.g f7511l;

    /* renamed from: m  reason: collision with root package name */
    private static final a f7512m;

    /* renamed from: n  reason: collision with root package name */
    private static final ef.a f7513n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends a.AbstractC0290a {
        a() {
        }

        @Override // ef.a.AbstractC0290a
        /* renamed from: c */
        public e b(Context context, Looper looper, gf.d commonSettings, a.d.C0291a apiOptions, ff.d connectedListener, k connectionFailedListener) {
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
    public static final class c extends a.AbstractBinderC0113a {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ wg.k f7514c;

        c(wg.k kVar) {
            this.f7514c = kVar;
        }

        @Override // bf.a
        public void W(Status status, af.c response) {
            Intrinsics.checkNotNullParameter(status, "status");
            Intrinsics.checkNotNullParameter(response, "response");
            r.a(status, response, this.f7514c);
        }
    }

    static {
        a.g gVar = new a.g();
        f7511l = gVar;
        a aVar = new a();
        f7512m = aVar;
        f7513n = new ef.a("RestoreCredential.API", aVar, gVar);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(Context context) {
        super(context, f7513n, a.d.f22762c, d.a.f22774c);
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
        Task p10 = p(q.a().d(eg.b.f22795k).b(new m() { // from class: bf.c
            @Override // ff.m
            public final void accept(Object obj, Object obj2) {
                d.D(af.a.this, (e) obj, (wg.k) obj2);
            }
        }).e(1695).a());
        Intrinsics.checkNotNullExpressionValue(p10, "doRead(...)");
        return p10;
    }
}
