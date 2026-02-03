package com.android.billingclient.api;

import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class QueryProductDetailsParams {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.gms.internal.play_billing.j f7602a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private com.google.android.gms.internal.play_billing.j f7603a;

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
                    this.f7603a = com.google.android.gms.internal.play_billing.j.j(list);
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
        private final String f7604a;

        /* renamed from: b  reason: collision with root package name */
        private final String f7605b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private String f7606a;

            /* renamed from: b  reason: collision with root package name */
            private String f7607b;

            /* synthetic */ a(a6.k0 k0Var) {
            }

            public b a() {
                if (!"first_party".equals(this.f7607b)) {
                    if (this.f7606a != null) {
                        if (this.f7607b != null) {
                            return new b(this, null);
                        }
                        throw new IllegalArgumentException("Product type must be provided.");
                    }
                    throw new IllegalArgumentException("Product id must be provided.");
                }
                throw new IllegalArgumentException("Serialized doc id must be provided for first party products.");
            }

            public a b(String str) {
                this.f7606a = str;
                return this;
            }

            public a c(String str) {
                this.f7607b = str;
                return this;
            }
        }

        /* synthetic */ b(a aVar, a6.l0 l0Var) {
            this.f7604a = aVar.f7606a;
            this.f7605b = aVar.f7607b;
        }

        public static a a() {
            return new a(null);
        }

        public final String b() {
            return this.f7604a;
        }

        public final String c() {
            return this.f7605b;
        }
    }

    /* synthetic */ QueryProductDetailsParams(a aVar, a6.m0 m0Var) {
        this.f7602a = aVar.f7603a;
    }

    public static a a() {
        return new a(null);
    }

    public final com.google.android.gms.internal.play_billing.j b() {
        return this.f7602a;
    }

    public final String c() {
        return ((b) this.f7602a.get(0)).c();
    }
}
