package ff;

import android.accounts.Account;
import android.app.Activity;
import android.content.Context;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import com.google.android.gms.common.api.GoogleApiActivity;
import com.google.android.gms.tasks.Task;
import ff.a;
import gf.e0;
import gf.j0;
import gf.u0;
import gf.w;
import hf.d;
import hf.q;
import java.util.Collections;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private final Context f23725a;

    /* renamed from: b  reason: collision with root package name */
    private final String f23726b;

    /* renamed from: c  reason: collision with root package name */
    private final ff.a f23727c;

    /* renamed from: d  reason: collision with root package name */
    private final a.d f23728d;

    /* renamed from: e  reason: collision with root package name */
    private final gf.b f23729e;

    /* renamed from: f  reason: collision with root package name */
    private final Looper f23730f;

    /* renamed from: g  reason: collision with root package name */
    private final int f23731g;

    /* renamed from: h  reason: collision with root package name */
    private final e f23732h;

    /* renamed from: i  reason: collision with root package name */
    private final gf.o f23733i;

    /* renamed from: j  reason: collision with root package name */
    protected final gf.e f23734j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: c  reason: collision with root package name */
        public static final a f23735c = new C0318a().a();

        /* renamed from: a  reason: collision with root package name */
        public final gf.o f23736a;

        /* renamed from: b  reason: collision with root package name */
        public final Looper f23737b;

        /* renamed from: ff.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static class C0318a {

            /* renamed from: a  reason: collision with root package name */
            private gf.o f23738a;

            /* renamed from: b  reason: collision with root package name */
            private Looper f23739b;

            public a a() {
                if (this.f23738a == null) {
                    this.f23738a = new gf.a();
                }
                if (this.f23739b == null) {
                    this.f23739b = Looper.getMainLooper();
                }
                return new a(this.f23738a, this.f23739b);
            }

            public C0318a b(Looper looper) {
                q.m(looper, "Looper must not be null.");
                this.f23739b = looper;
                return this;
            }

            public C0318a c(gf.o oVar) {
                q.m(oVar, "StatusExceptionMapper must not be null.");
                this.f23738a = oVar;
                return this;
            }
        }

        private a(gf.o oVar, Account account, Looper looper) {
            this.f23736a = oVar;
            this.f23737b = looper;
        }
    }

    public d(Activity activity, ff.a aVar, a.d dVar, a aVar2) {
        this(activity, activity, aVar, dVar, aVar2);
    }

    private final com.google.android.gms.common.api.internal.a A(int i10, com.google.android.gms.common.api.internal.a aVar) {
        aVar.zak();
        this.f23734j.A(this, i10, aVar);
        return aVar;
    }

    private final Task B(int i10, gf.q qVar) {
        zg.k kVar = new zg.k();
        this.f23734j.B(this, i10, qVar, kVar, this.f23733i);
        return kVar.a();
    }

    public e m() {
        return this.f23732h;
    }

    protected d.a n() {
        d.a aVar = new d.a();
        aVar.d(null);
        aVar.c(Collections.EMPTY_SET);
        aVar.e(this.f23725a.getClass().getName());
        aVar.b(this.f23725a.getPackageName());
        return aVar;
    }

    public Task o(gf.q qVar) {
        return B(2, qVar);
    }

    public Task p(gf.q qVar) {
        return B(0, qVar);
    }

    public com.google.android.gms.common.api.internal.a q(com.google.android.gms.common.api.internal.a aVar) {
        A(1, aVar);
        return aVar;
    }

    public Task r(gf.q qVar) {
        return B(1, qVar);
    }

    protected String s(Context context) {
        return null;
    }

    public final gf.b t() {
        return this.f23729e;
    }

    public Context u() {
        return this.f23725a;
    }

    protected String v() {
        return this.f23726b;
    }

    public Looper w() {
        return this.f23730f;
    }

    public final int x() {
        return this.f23731g;
    }

    public final a.f y(Looper looper, e0 e0Var) {
        a.f a10 = ((a.AbstractC0316a) q.l(this.f23727c.a())).a(this.f23725a, looper, n().a(), this.f23728d, e0Var, e0Var);
        String v10 = v();
        if (v10 != null && (a10 instanceof hf.c)) {
            ((hf.c) a10).O(v10);
        }
        if (v10 != null && (a10 instanceof gf.j)) {
            android.support.v4.media.session.b.a(a10);
            throw null;
        }
        return a10;
    }

    public final u0 z(Context context, Handler handler) {
        return new u0(context, handler, n().a());
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public d(android.app.Activity r2, ff.a r3, ff.a.d r4, gf.o r5) {
        /*
            r1 = this;
            ff.d$a$a r0 = new ff.d$a$a
            r0.<init>()
            r0.c(r5)
            android.os.Looper r5 = r2.getMainLooper()
            r0.b(r5)
            ff.d$a r5 = r0.a()
            r1.<init>(r2, r3, r4, r5)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ff.d.<init>(android.app.Activity, ff.a, ff.a$d, gf.o):void");
    }

    private d(Context context, Activity activity, ff.a aVar, a.d dVar, a aVar2) {
        String s10;
        q.m(context, "Null context is not permitted.");
        q.m(aVar, "Api must not be null.");
        q.m(aVar2, "Settings must not be null; use Settings.DEFAULT_SETTINGS instead.");
        Context context2 = (Context) q.m(context.getApplicationContext(), "The provided context did not have an application context.");
        this.f23725a = context2;
        if (Build.VERSION.SDK_INT >= 30) {
            s10 = context.getAttributionTag();
        } else {
            s10 = s(context);
        }
        this.f23726b = s10;
        this.f23727c = aVar;
        this.f23728d = dVar;
        this.f23730f = aVar2.f23737b;
        gf.b a10 = gf.b.a(aVar, dVar, s10);
        this.f23729e = a10;
        this.f23732h = new j0(this);
        gf.e u10 = gf.e.u(context2);
        this.f23734j = u10;
        this.f23731g = u10.l();
        this.f23733i = aVar2.f23736a;
        if (activity != null && !(activity instanceof GoogleApiActivity) && Looper.myLooper() == Looper.getMainLooper()) {
            w.u(activity, u10, a10);
        }
        u10.F(this);
    }

    public d(Context context, ff.a aVar, a.d dVar, a aVar2) {
        this(context, null, aVar, dVar, aVar2);
    }
}
