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
    private final Context f21487a;

    /* renamed from: b  reason: collision with root package name */
    private final String f21488b;

    /* renamed from: c  reason: collision with root package name */
    private final ef.a f21489c;

    /* renamed from: d  reason: collision with root package name */
    private final a.d f21490d;

    /* renamed from: e  reason: collision with root package name */
    private final ff.b f21491e;

    /* renamed from: f  reason: collision with root package name */
    private final Looper f21492f;

    /* renamed from: g  reason: collision with root package name */
    private final int f21493g;

    /* renamed from: h  reason: collision with root package name */
    private final e f21494h;

    /* renamed from: i  reason: collision with root package name */
    private final ff.o f21495i;

    /* renamed from: j  reason: collision with root package name */
    protected final ff.e f21496j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: c  reason: collision with root package name */
        public static final a f21497c = new C0281a().a();

        /* renamed from: a  reason: collision with root package name */
        public final ff.o f21498a;

        /* renamed from: b  reason: collision with root package name */
        public final Looper f21499b;

        /* renamed from: ef.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static class C0281a {

            /* renamed from: a  reason: collision with root package name */
            private ff.o f21500a;

            /* renamed from: b  reason: collision with root package name */
            private Looper f21501b;

            public a a() {
                if (this.f21500a == null) {
                    this.f21500a = new ff.a();
                }
                if (this.f21501b == null) {
                    this.f21501b = Looper.getMainLooper();
                }
                return new a(this.f21500a, this.f21501b);
            }

            public C0281a b(Looper looper) {
                q.m(looper, "Looper must not be null.");
                this.f21501b = looper;
                return this;
            }

            public C0281a c(ff.o oVar) {
                q.m(oVar, "StatusExceptionMapper must not be null.");
                this.f21500a = oVar;
                return this;
            }
        }

        private a(ff.o oVar, Account account, Looper looper) {
            this.f21498a = oVar;
            this.f21499b = looper;
        }
    }

    public d(Activity activity, ef.a aVar, a.d dVar, a aVar2) {
        this(activity, activity, aVar, dVar, aVar2);
    }

    private final com.google.android.gms.common.api.internal.a A(int i10, com.google.android.gms.common.api.internal.a aVar) {
        aVar.zak();
        this.f21496j.A(this, i10, aVar);
        return aVar;
    }

    private final Task B(int i10, ff.q qVar) {
        wg.k kVar = new wg.k();
        this.f21496j.B(this, i10, qVar, kVar, this.f21495i);
        return kVar.a();
    }

    public e m() {
        return this.f21494h;
    }

    protected d.a n() {
        d.a aVar = new d.a();
        aVar.d(null);
        aVar.c(Collections.EMPTY_SET);
        aVar.e(this.f21487a.getClass().getName());
        aVar.b(this.f21487a.getPackageName());
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
        return this.f21491e;
    }

    public Context u() {
        return this.f21487a;
    }

    protected String v() {
        return this.f21488b;
    }

    public Looper w() {
        return this.f21492f;
    }

    public final int x() {
        return this.f21493g;
    }

    public final a.f y(Looper looper, e0 e0Var) {
        a.f a10 = ((a.AbstractC0279a) q.l(this.f21489c.a())).a(this.f21487a, looper, n().a(), this.f21490d, e0Var, e0Var);
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
        this.f21487a = context2;
        if (Build.VERSION.SDK_INT >= 30) {
            s10 = context.getAttributionTag();
        } else {
            s10 = s(context);
        }
        this.f21488b = s10;
        this.f21489c = aVar;
        this.f21490d = dVar;
        this.f21492f = aVar2.f21499b;
        ff.b a10 = ff.b.a(aVar, dVar, s10);
        this.f21491e = a10;
        this.f21494h = new j0(this);
        ff.e u10 = ff.e.u(context2);
        this.f21496j = u10;
        this.f21493g = u10.l();
        this.f21495i = aVar2.f21498a;
        if (activity != null && !(activity instanceof GoogleApiActivity) && Looper.myLooper() == Looper.getMainLooper()) {
            w.u(activity, u10, a10);
        }
        u10.F(this);
    }

    public d(Context context, ef.a aVar, a.d dVar, a aVar2) {
        this(context, null, aVar, dVar, aVar2);
    }
}
