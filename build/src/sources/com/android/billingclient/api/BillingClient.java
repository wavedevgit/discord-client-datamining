package com.android.billingclient.api;

import a6.r0;
import android.app.Activity;
import android.content.Context;
import com.android.billingclient.api.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class BillingClient {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private volatile c f8913a;

        /* renamed from: b  reason: collision with root package name */
        private final Context f8914b;

        /* renamed from: c  reason: collision with root package name */
        private volatile a6.k f8915c;

        /* renamed from: d  reason: collision with root package name */
        private volatile boolean f8916d;

        /* renamed from: e  reason: collision with root package name */
        private volatile boolean f8917e;

        /* synthetic */ a(Context context, r0 r0Var) {
            this.f8914b = context;
        }

        public BillingClient a() {
            if (this.f8914b != null) {
                if (this.f8915c == null) {
                    if (!this.f8916d && !this.f8917e) {
                        throw new IllegalArgumentException("Please provide a valid listener for purchases updates.");
                    }
                    return new b(null, this.f8914b, null, null);
                } else if (this.f8913a != null && this.f8913a.a()) {
                    if (this.f8915c != null) {
                        return new b(null, this.f8913a, this.f8914b, this.f8915c, null, null, null);
                    }
                    return new b(null, this.f8913a, this.f8914b, null, null, null);
                } else {
                    throw new IllegalArgumentException("Pending purchases for one-time products must be supported.");
                }
            }
            throw new IllegalArgumentException("Please provide a valid Context.");
        }

        public a b() {
            c.a c10 = c.c();
            c10.b();
            c(c10.a());
            return this;
        }

        public a c(c cVar) {
            this.f8913a = cVar;
            return this;
        }

        public a d(a6.k kVar) {
            this.f8915c = kVar;
            return this;
        }
    }

    public static a h(Context context) {
        return new a(context, null);
    }

    public abstract void a(a6.a aVar, a6.b bVar);

    public abstract void b(a6.e eVar, a6.f fVar);

    public abstract void c();

    public abstract void d(a6.g gVar, a6.d dVar);

    public abstract BillingResult e(String str);

    public abstract boolean f();

    public abstract BillingResult g(Activity activity, BillingFlowParams billingFlowParams);

    public abstract void i(QueryProductDetailsParams queryProductDetailsParams, a6.h hVar);

    public abstract void j(a6.l lVar, a6.i iVar);

    public abstract void k(a6.m mVar, a6.j jVar);

    public abstract void l(a6.c cVar);
}
