package zf;

import com.google.android.gms.common.api.Status;
import com.google.android.gms.identitycredentials.GetCredentialRequest;
import com.google.android.gms.tasks.Task;
import gf.m;
import gf.q;
import gf.r;
import kotlin.jvm.internal.Intrinsics;
import zg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends ff.d implements yf.e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends c {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ k f56421c;

        a(k kVar) {
            this.f56421c = kVar;
        }

        @Override // zf.a
        public void F(Status status, yf.g gVar) {
            Intrinsics.checkNotNullParameter(status, "status");
            r.a(status, gVar, this.f56421c);
        }
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public f(android.content.Context r4) {
        /*
            r3 = this;
            java.lang.String r0 = "context"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            ff.a r0 = zf.g.a()
            ff.a$d$a r1 = ff.a.d.f23724g
            ff.d$a r2 = ff.d.a.f23736c
            r3.<init>(r4, r0, r1, r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: zf.f.<init>(android.content.Context):void");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void D(GetCredentialRequest request, d dVar, k kVar) {
        Intrinsics.checkNotNullParameter(request, "$request");
        ((b) dVar.C()).L0(new a(kVar), request);
    }

    @Override // yf.e
    public Task h(final GetCredentialRequest request) {
        Intrinsics.checkNotNullParameter(request, "request");
        Task p10 = p(q.a().d(lg.d.f35819a).b(new m() { // from class: zf.e
            @Override // gf.m
            public final void accept(Object obj, Object obj2) {
                f.D(GetCredentialRequest.this, (d) obj, (k) obj2);
            }
        }).e(32701).a());
        Intrinsics.checkNotNullExpressionValue(p10, "doRead(...)");
        return p10;
    }
}
