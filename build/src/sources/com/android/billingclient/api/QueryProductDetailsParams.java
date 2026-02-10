package com.android.billingclient.api;

import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class QueryProductDetailsParams {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.gms.internal.play_billing.j f8026a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private com.google.android.gms.internal.play_billing.j f8027a;

        /* synthetic */ a(b6.j0 j0Var) {
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
                    this.f8027a = com.google.android.gms.internal.play_billing.j.j(list);
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
        private final String f8028a;

        /* renamed from: b  reason: collision with root package name */
        private final String f8029b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private String f8030a;

            /* renamed from: b  reason: collision with root package name */
            private String f8031b;

            /* synthetic */ a(b6.k0 k0Var) {
            }

            public b a() {
                if (!"first_party".equals(this.f8031b)) {
                    if (this.f8030a != null) {
                        if (this.f8031b != null) {
                            return new b(this, null);
                        }
                        throw new IllegalArgumentException("Product type must be provided.");
                    }
                    throw new IllegalArgumentException("Product id must be provided.");
                }
                throw new IllegalArgumentException("Serialized doc id must be provided for first party products.");
            }

            public a b(String str) {
                this.f8030a = str;
                return this;
            }

            public a c(String str) {
                this.f8031b = str;
                return this;
            }
        }

        /* synthetic */ b(a aVar, b6.l0 l0Var) {
            this.f8028a = aVar.f8030a;
            this.f8029b = aVar.f8031b;
        }

        public static a a() {
            return new a(null);
        }

        public final String b() {
            return this.f8028a;
        }

        public final String c() {
            return this.f8029b;
        }
    }

    /* synthetic */ QueryProductDetailsParams(a aVar, b6.m0 m0Var) {
        this.f8026a = aVar.f8027a;
    }

    public static a a() {
        return new a(null);
    }

    public final com.google.android.gms.internal.play_billing.j b() {
        return this.f8026a;
    }

    public final String c() {
        return ((b) this.f8026a.get(0)).c();
    }
}
