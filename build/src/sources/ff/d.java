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
    private final Context f22600a;

    /* renamed from: b  reason: collision with root package name */
    private final String f22601b;

    /* renamed from: c  reason: collision with root package name */
    private final ff.a f22602c;

    /* renamed from: d  reason: collision with root package name */
    private final a.d f22603d;

    /* renamed from: e  reason: collision with root package name */
    private final gf.b f22604e;

    /* renamed from: f  reason: collision with root package name */
    private final Looper f22605f;

    /* renamed from: g  reason: collision with root package name */
    private final int f22606g;

    /* renamed from: h  reason: collision with root package name */
    private final e f22607h;

    /* renamed from: i  reason: collision with root package name */
    private final gf.o f22608i;

    /* renamed from: j  reason: collision with root package name */
    protected final gf.e f22609j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: c  reason: collision with root package name */
        public static final a f22610c = new C0333a().a();

        /* renamed from: a  reason: collision with root package name */
        public final gf.o f22611a;

        /* renamed from: b  reason: collision with root package name */
        public final Looper f22612b;

        /* renamed from: ff.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static class C0333a {

            /* renamed from: a  reason: collision with root package name */
            private gf.o f22613a;

            /* renamed from: b  reason: collision with root package name */
            private Looper f22614b;

            public a a() {
                if (this.f22613a == null) {
                    this.f22613a = new gf.a();
                }
                if (this.f22614b == null) {
                    this.f22614b = Looper.getMainLooper();
                }
                return new a(this.f22613a, this.f22614b);
            }

            public C0333a b(Looper looper) {
                q.m(looper, "Looper must not be null.");
                this.f22614b = looper;
                return this;
            }

            public C0333a c(gf.o oVar) {
                q.m(oVar, "StatusExceptionMapper must not be null.");
                this.f22613a = oVar;
                return this;
            }
        }

        private a(gf.o oVar, Account account, Looper looper) {
            this.f22611a = oVar;
            this.f22612b = looper;
        }
    }

    public d(Activity activity, ff.a aVar, a.d dVar, a aVar2) {
        this(activity, activity, aVar, dVar, aVar2);
    }

    private final com.google.android.gms.common.api.internal.a A(int i10, com.google.android.gms.common.api.internal.a aVar) {
        aVar.zak();
        this.f22609j.A(this, i10, aVar);
        return aVar;
    }

    private final Task B(int i10, gf.q qVar) {
        zg.k kVar = new zg.k();
        this.f22609j.B(this, i10, qVar, kVar, this.f22608i);
        return kVar.a();
    }

    public e m() {
        return this.f22607h;
    }

    protected d.a n() {
        d.a aVar = new d.a();
        aVar.d(null);
        aVar.c(Collections.EMPTY_SET);
        aVar.e(this.f22600a.getClass().getName());
        aVar.b(this.f22600a.getPackageName());
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
        return this.f22604e;
    }

    public Context u() {
        return this.f22600a;
    }

    protected String v() {
        return this.f22601b;
    }

    public Looper w() {
        return this.f22605f;
    }

    public final int x() {
        return this.f22606g;
    }

    public final a.f y(Looper looper, e0 e0Var) {
        a.f a10 = ((a.AbstractC0331a) q.l(this.f22602c.a())).a(this.f22600a, looper, n().a(), this.f22603d, e0Var, e0Var);
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
        this.f22600a = context2;
        if (Build.VERSION.SDK_INT >= 30) {
            s10 = context.getAttributionTag();
        } else {
            s10 = s(context);
        }
        this.f22601b = s10;
        this.f22602c = aVar;
        this.f22603d = dVar;
        this.f22605f = aVar2.f22612b;
        gf.b a10 = gf.b.a(aVar, dVar, s10);
        this.f22604e = a10;
        this.f22607h = new j0(this);
        gf.e u10 = gf.e.u(context2);
        this.f22609j = u10;
        this.f22606g = u10.l();
        this.f22608i = aVar2.f22611a;
        if (activity != null && !(activity instanceof GoogleApiActivity) && Looper.myLooper() == Looper.getMainLooper()) {
            w.u(activity, u10, a10);
        }
        u10.F(this);
    }

    public d(Context context, ff.a aVar, a.d dVar, a aVar2) {
        this(context, null, aVar, dVar, aVar2);
    }
}
