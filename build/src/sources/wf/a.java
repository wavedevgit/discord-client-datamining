package wf;

import android.app.Activity;
import com.google.android.gms.fido.fido2.api.common.PublicKeyCredentialRequestOptions;
import com.google.android.gms.internal.fido.t5;
import com.google.android.gms.internal.fido.u5;
import com.google.android.gms.internal.fido.x5;
import com.google.android.gms.tasks.Task;
import ff.a;
import gf.m;
import gf.q;
import xf.r;
import zg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends ff.d {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f52745k;

    /* renamed from: l  reason: collision with root package name */
    private static final ff.a f52746l;

    static {
        a.g gVar = new a.g();
        f52745k = gVar;
        f52746l = new ff.a("Fido.FIDO2_API", new t5(), gVar);
    }

    public a(Activity activity) {
        super(activity, f52746l, a.d.f23723g, new gf.a());
    }

    public Task C(final r rVar) {
        return p(q.a().b(new m() { // from class: wf.b
            @Override // gf.m
            public final void accept(Object obj, Object obj2) {
                ((x5) ((u5) obj).C()).i(new d(a.this, (k) obj2), rVar);
            }
        }).e(5407).a());
    }

    public Task D(final PublicKeyCredentialRequestOptions publicKeyCredentialRequestOptions) {
        return p(q.a().b(new m() { // from class: wf.c
            @Override // gf.m
            public final void accept(Object obj, Object obj2) {
                ((x5) ((u5) obj).C()).W0(new e(a.this, (k) obj2), publicKeyCredentialRequestOptions);
            }
        }).e(5408).a());
    }
}
