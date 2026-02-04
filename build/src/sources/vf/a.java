package vf;

import android.app.Activity;
import com.google.android.gms.fido.fido2.api.common.PublicKeyCredentialRequestOptions;
import com.google.android.gms.internal.fido.t5;
import com.google.android.gms.internal.fido.u5;
import com.google.android.gms.internal.fido.x5;
import com.google.android.gms.tasks.Task;
import ef.a;
import ff.m;
import ff.q;
import wf.r;
import wg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends ef.d {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f51587k;

    /* renamed from: l  reason: collision with root package name */
    private static final ef.a f51588l;

    static {
        a.g gVar = new a.g();
        f51587k = gVar;
        f51588l = new ef.a("Fido.FIDO2_API", new t5(), gVar);
    }

    public a(Activity activity) {
        super(activity, f51588l, a.d.f21485c, new ff.a());
    }

    public Task C(final r rVar) {
        return p(q.a().b(new m() { // from class: vf.b
            @Override // ff.m
            public final void accept(Object obj, Object obj2) {
                ((x5) ((u5) obj).C()).h(new d(a.this, (k) obj2), rVar);
            }
        }).e(5407).a());
    }

    public Task D(final PublicKeyCredentialRequestOptions publicKeyCredentialRequestOptions) {
        return p(q.a().b(new m() { // from class: vf.c
            @Override // ff.m
            public final void accept(Object obj, Object obj2) {
                ((x5) ((u5) obj).C()).S0(new e(a.this, (k) obj2), publicKeyCredentialRequestOptions);
            }
        }).e(5408).a());
    }
}
