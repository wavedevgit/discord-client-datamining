package com.android.billingclient.api;

import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class QueryProductDetailsParams {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.gms.internal.play_billing.j f9005a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private com.google.android.gms.internal.play_billing.j f9006a;

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
                    this.f9006a = com.google.android.gms.internal.play_billing.j.j(list);
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
        private final String f9007a;

        /* renamed from: b  reason: collision with root package name */
        private final String f9008b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private String f9009a;

            /* renamed from: b  reason: collision with root package name */
            private String f9010b;

            /* synthetic */ a(a6.k0 k0Var) {
            }

            public b a() {
                if (!"first_party".equals(this.f9010b)) {
                    if (this.f9009a != null) {
                        if (this.f9010b != null) {
                            return new b(this, null);
                        }
                        throw new IllegalArgumentException("Product type must be provided.");
                    }
                    throw new IllegalArgumentException("Product id must be provided.");
                }
                throw new IllegalArgumentException("Serialized doc id must be provided for first party products.");
            }

            public a b(String str) {
                this.f9009a = str;
                return this;
            }

            public a c(String str) {
                this.f9010b = str;
                return this;
            }
        }

        /* synthetic */ b(a aVar, a6.l0 l0Var) {
            this.f9007a = aVar.f9009a;
            this.f9008b = aVar.f9010b;
        }

        public static a a() {
            return new a(null);
        }

        public final String b() {
            return this.f9007a;
        }

        public final String c() {
            return this.f9008b;
        }
    }

    /* synthetic */ QueryProductDetailsParams(a aVar, a6.m0 m0Var) {
        this.f9005a = aVar.f9006a;
    }

    public static a a() {
        return new a(null);
    }

    public final com.google.android.gms.internal.play_billing.j b() {
        return this.f9005a;
    }

    public final String c() {
        return ((b) this.f9005a.get(0)).c();
    }
}
