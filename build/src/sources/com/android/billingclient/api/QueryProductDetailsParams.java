package com.android.billingclient.api;

import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class QueryProductDetailsParams {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.gms.internal.play_billing.j f7886a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private com.google.android.gms.internal.play_billing.j f7887a;

        /* synthetic */ a(a6.j0 j0Var) {
        }

        public QueryProductDetailsParams a() {
            return new QueryProductDetailsParams(this, null);
        }

        public a b(List list) {
            if (list != null && !list.isEmpty()) {
                HashSet hashSet = new HashSet();
                Iterator it = list.iterator();
                while (it.hasNext()) {
                    b bVar = (b) it.next();
                    if (!"play_pass_subs".equals(bVar.c())) {
                        hashSet.add(bVar.c());
                    }
                }
                if (hashSet.size() <= 1) {
                    this.f7887a = com.google.android.gms.internal.play_billing.j.j(list);
                    return this;
                }
                throw new IllegalArgumentException("All products should be of the same product type.");
            }
            throw new IllegalArgumentException("Product list cannot be empty.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f7888a;

        /* renamed from: b  reason: collision with root package name */
        private final String f7889b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private String f7890a;

            /* renamed from: b  reason: collision with root package name */
            private String f7891b;

            /* synthetic */ a(a6.k0 k0Var) {
            }

            public b a() {
                if (!"first_party".equals(this.f7891b)) {
                    if (this.f7890a != null) {
                        if (this.f7891b != null) {
                            return new b(this, null);
                        }
                        throw new IllegalArgumentException("Product type must be provided.");
                    }
                    throw new IllegalArgumentException("Product id must be provided.");
                }
                throw new IllegalArgumentException("Serialized doc id must be provided for first party products.");
            }

            public a b(String str) {
                this.f7890a = str;
                return this;
            }

            public a c(String str) {
                this.f7891b = str;
                return this;
            }
        }

        /* synthetic */ b(a aVar, a6.l0 l0Var) {
            this.f7888a = aVar.f7890a;
            this.f7889b = aVar.f7891b;
        }

        public static a a() {
            return new a(null);
        }

        public final String b() {
            return this.f7888a;
        }

        public final String c() {
            return this.f7889b;
        }
    }

    /* synthetic */ QueryProductDetailsParams(a aVar, a6.m0 m0Var) {
        this.f7886a = aVar.f7887a;
    }

    public static a a() {
        return new a(null);
    }

    public final com.google.android.gms.internal.play_billing.j b() {
        return this.f7886a;
    }

    public final String c() {
        return ((b) this.f7886a.get(0)).c();
    }
}
