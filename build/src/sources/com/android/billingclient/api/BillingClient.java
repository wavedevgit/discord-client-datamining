package com.android.billingclient.api;

import android.app.Activity;
import android.content.Context;
import b6.r0;
import com.android.billingclient.api.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class BillingClient {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private volatile c f8512a;

        /* renamed from: b  reason: collision with root package name */
        private final Context f8513b;

        /* renamed from: c  reason: collision with root package name */
        private volatile b6.k f8514c;

        /* renamed from: d  reason: collision with root package name */
        private volatile boolean f8515d;

        /* renamed from: e  reason: collision with root package name */
        private volatile boolean f8516e;

        /* synthetic */ a(Context context, r0 r0Var) {
            this.f8513b = context;
        }

        public BillingClient a() {
            if (this.f8513b != null) {
                if (this.f8514c == null) {
                    if (!this.f8515d && !this.f8516e) {
                        throw new IllegalArgumentException("Please provide a valid listener for purchases updates.");
                    }
                    return new b(null, this.f8513b, null, null);
                } else if (this.f8512a != null && this.f8512a.a()) {
                    if (this.f8514c != null) {
                        return new b(null, this.f8512a, this.f8513b, this.f8514c, null, null, null);
                    }
                    return new b(null, this.f8512a, this.f8513b, null, null, null);
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
            this.f8512a = cVar;
            return this;
        }

        public a d(b6.k kVar) {
            this.f8514c = kVar;
            return this;
        }
    }

    public static a h(Context context) {
        return new a(context, null);
    }

    public abstract void a(b6.a aVar, b6.b bVar);

    public abstract void b(b6.e eVar, b6.f fVar);

    public abstract void c();

    public abstract void d(b6.g gVar, b6.d dVar);

    public abstract BillingResult e(String str);

    public abstract boolean f();

    public abstract BillingResult g(Activity activity, BillingFlowParams billingFlowParams);

    public abstract void i(QueryProductDetailsParams queryProductDetailsParams, b6.h hVar);

    public abstract void j(b6.l lVar, b6.i iVar);

    public abstract void k(b6.m mVar, b6.j jVar);

    public abstract void l(b6.c cVar);
}
