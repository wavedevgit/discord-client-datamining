package ef;

import android.accounts.Account;
import android.app.Activity;
import android.content.Context;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import com.google.android.gms.common.api.GoogleApiActivity;
import com.google.android.gms.tasks.Task;
import ef.a;
import ff.e0;
import ff.j0;
import ff.u0;
import ff.w;
import gf.d;
import gf.q;
import java.util.Collections;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private final Context f22764a;

    /* renamed from: b  reason: collision with root package name */
    private final String f22765b;

    /* renamed from: c  reason: collision with root package name */
    private final ef.a f22766c;

    /* renamed from: d  reason: collision with root package name */
    private final a.d f22767d;

    /* renamed from: e  reason: collision with root package name */
    private final ff.b f22768e;

    /* renamed from: f  reason: collision with root package name */
    private final Looper f22769f;

    /* renamed from: g  reason: collision with root package name */
    private final int f22770g;

    /* renamed from: h  reason: collision with root package name */
    private final e f22771h;

    /* renamed from: i  reason: collision with root package name */
    private final ff.o f22772i;

    /* renamed from: j  reason: collision with root package name */
    protected final ff.e f22773j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: c  reason: collision with root package name */
        public static final a f22774c = new C0292a().a();

        /* renamed from: a  reason: collision with root package name */
        public final ff.o f22775a;

        /* renamed from: b  reason: collision with root package name */
        public final Looper f22776b;

        /* renamed from: ef.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static class C0292a {

            /* renamed from: a  reason: collision with root package name */
            private ff.o f22777a;

            /* renamed from: b  reason: collision with root package name */
            private Looper f22778b;

            public a a() {
                if (this.f22777a == null) {
                    this.f22777a = new ff.a();
                }
                if (this.f22778b == null) {
                    this.f22778b = Looper.getMainLooper();
                }
                return new a(this.f22777a, this.f22778b);
            }

            public C0292a b(Looper looper) {
                q.m(looper, "Looper must not be null.");
                this.f22778b = looper;
                return this;
            }

            public C0292a c(ff.o oVar) {
                q.m(oVar, "StatusExceptionMapper must not be null.");
                this.f22777a = oVar;
                return this;
            }
        }

        private a(ff.o oVar, Account account, Looper looper) {
            this.f22775a = oVar;
            this.f22776b = looper;
        }
    }

    public d(Activity activity, ef.a aVar, a.d dVar, a aVar2) {
        this(activity, activity, aVar, dVar, aVar2);
    }

    private final com.google.android.gms.common.api.internal.a A(int i10, com.google.android.gms.common.api.internal.a aVar) {
        aVar.zak();
        this.f22773j.A(this, i10, aVar);
        return aVar;
    }

    private final Task B(int i10, ff.q qVar) {
        wg.k kVar = new wg.k();
        this.f22773j.B(this, i10, qVar, kVar, this.f22772i);
        return kVar.a();
    }

    public e m() {
        return this.f22771h;
    }

    protected d.a n() {
        d.a aVar = new d.a();
        aVar.d(null);
        aVar.c(Collections.EMPTY_SET);
        aVar.e(this.f22764a.getClass().getName());
        aVar.b(this.f22764a.getPackageName());
        return aVar;
    }

    public Task o(ff.q qVar) {
        return B(2, qVar);
    }

    public Task p(ff.q qVar) {
        return B(0, qVar);
    }

    public com.google.android.gms.common.api.internal.a q(com.google.android.gms.common.api.internal.a aVar) {
        A(1, aVar);
        return aVar;
    }

    public Task r(ff.q qVar) {
        return B(1, qVar);
    }

    protected String s(Context context) {
        return null;
    }

    public final ff.b t() {
        return this.f22768e;
    }

    public Context u() {
        return this.f22764a;
    }

    protected String v() {
        return this.f22765b;
    }

    public Looper w() {
        return this.f22769f;
    }

    public final int x() {
        return this.f22770g;
    }

    public final a.f y(Looper looper, e0 e0Var) {
        a.f a10 = ((a.AbstractC0290a) q.l(this.f22766c.a())).a(this.f22764a, looper, n().a(), this.f22767d, e0Var, e0Var);
        String v10 = v();
        if (v10 != null && (a10 instanceof gf.c)) {
            ((gf.c) a10).O(v10);
        }
        if (v10 != null && (a10 instanceof ff.j)) {
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
    public d(android.app.Activity r2, ef.a r3, ef.a.d r4, ff.o r5) {
        /*
            r1 = this;
            ef.d$a$a r0 = new ef.d$a$a
            r0.<init>()
            r0.c(r5)
            android.os.Looper r5 = r2.getMainLooper()
            r0.b(r5)
            ef.d$a r5 = r0.a()
            r1.<init>(r2, r3, r4, r5)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ef.d.<init>(android.app.Activity, ef.a, ef.a$d, ff.o):void");
    }

    private d(Context context, Activity activity, ef.a aVar, a.d dVar, a aVar2) {
        String s10;
        q.m(context, "Null context is not permitted.");
        q.m(aVar, "Api must not be null.");
        q.m(aVar2, "Settings must not be null; use Settings.DEFAULT_SETTINGS instead.");
        Context context2 = (Context) q.m(context.getApplicationContext(), "The provided context did not have an application context.");
        this.f22764a = context2;
        if (Build.VERSION.SDK_INT >= 30) {
            s10 = context.getAttributionTag();
        } else {
            s10 = s(context);
        }
        this.f22765b = s10;
        this.f22766c = aVar;
        this.f22767d = dVar;
        this.f22769f = aVar2.f22776b;
        ff.b a10 = ff.b.a(aVar, dVar, s10);
        this.f22768e = a10;
        this.f22771h = new j0(this);
        ff.e u10 = ff.e.u(context2);
        this.f22773j = u10;
        this.f22770g = u10.l();
        this.f22772i = aVar2.f22775a;
        if (activity != null && !(activity instanceof GoogleApiActivity) && Looper.myLooper() == Looper.getMainLooper()) {
            w.u(activity, u10, a10);
        }
        u10.F(this);
    }

    public d(Context context, ef.a aVar, a.d dVar, a aVar2) {
        this(context, null, aVar, dVar, aVar2);
    }
}
