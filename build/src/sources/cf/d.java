package cf;

import android.content.Context;
import android.os.Looper;
import bf.f;
import cf.a;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.tasks.Task;
import ff.a;
import ff.d;
import gf.k;
import gf.m;
import gf.q;
import gf.r;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends ff.d implements f {

    /* renamed from: k  reason: collision with root package name */
    public static final b f8269k = new b(null);

    /* renamed from: l  reason: collision with root package name */
    private static final a.g f8270l;

    /* renamed from: m  reason: collision with root package name */
    private static final a f8271m;

    /* renamed from: n  reason: collision with root package name */
    private static final ff.a f8272n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends a.AbstractC0316a {
        a() {
        }

        @Override // ff.a.AbstractC0316a
        /* renamed from: c */
        public e b(Context context, Looper looper, hf.d commonSettings, a.d.C0317a apiOptions, gf.d connectedListener, k connectionFailedListener) {
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
    public static final class c extends a.AbstractBinderC0133a {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ zg.k f8273c;

        c(zg.k kVar) {
            this.f8273c = kVar;
        }

        @Override // cf.a
        public void t0(Status status, bf.c response) {
            Intrinsics.checkNotNullParameter(status, "status");
            Intrinsics.checkNotNullParameter(response, "response");
            r.a(status, response, this.f8273c);
        }
    }

    static {
        a.g gVar = new a.g();
        f8270l = gVar;
        a aVar = new a();
        f8271m = aVar;
        f8272n = new ff.a("RestoreCredential.API", aVar, gVar);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(Context context) {
        super(context, f8272n, a.d.f23724g, d.a.f23736c);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void D(bf.a request, e eVar, zg.k kVar) {
        Intrinsics.checkNotNullParameter(request, "$request");
        ((cf.b) eVar.C()).k0(request, new c(kVar));
    }

    @Override // bf.f
    public Task b(final bf.a request) {
        Intrinsics.checkNotNullParameter(request, "request");
        Task p10 = p(q.a().d(fg.b.f23757k).b(new m() { // from class: cf.c
            @Override // gf.m
            public final void accept(Object obj, Object obj2) {
                d.D(bf.a.this, (e) obj, (zg.k) obj2);
            }
        }).e(1695).a());
        Intrinsics.checkNotNullExpressionValue(p10, "doRead(...)");
        return p10;
    }
}
