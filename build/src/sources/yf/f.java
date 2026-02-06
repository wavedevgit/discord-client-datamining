package yf;

import com.google.android.gms.common.api.Status;
import com.google.android.gms.identitycredentials.GetCredentialRequest;
import com.google.android.gms.tasks.Task;
import ff.m;
import ff.q;
import ff.r;
import kotlin.jvm.internal.Intrinsics;
import yg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends ef.d implements xf.e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends c {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ k f55308c;

        a(k kVar) {
            this.f55308c = kVar;
        }

        @Override // yf.a
        public void i(Status status, xf.g gVar) {
            Intrinsics.checkNotNullParameter(status, "status");
            r.a(status, gVar, this.f55308c);
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
            ef.a r0 = yf.g.a()
            ef.a$d$a r1 = ef.a.d.f21490c
            ef.d$a r2 = ef.d.a.f21502c
            r3.<init>(r4, r0, r1, r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: yf.f.<init>(android.content.Context):void");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void D(GetCredentialRequest request, d dVar, k kVar) {
        Intrinsics.checkNotNullParameter(request, "$request");
        ((b) dVar.C()).A0(new a(kVar), request);
    }

    @Override // xf.e
    public Task h(final GetCredentialRequest request) {
        Intrinsics.checkNotNullParameter(request, "request");
        Task p10 = p(q.a().d(kg.d.f31653a).b(new m() { // from class: yf.e
            @Override // ff.m
            public final void accept(Object obj, Object obj2) {
                f.D(GetCredentialRequest.this, (d) obj, (k) obj2);
            }
        }).e(32701).a());
        Intrinsics.checkNotNullExpressionValue(p10, "doRead(...)");
        return p10;
    }
}
