package com.android.billingclient.api;

import android.text.TextUtils;
import com.android.billingclient.api.ProductDetails;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class BillingFlowParams {

    /* renamed from: a  reason: collision with root package name */
    private boolean f7518a;

    /* renamed from: b  reason: collision with root package name */
    private String f7519b;

    /* renamed from: c  reason: collision with root package name */
    private String f7520c;

    /* renamed from: d  reason: collision with root package name */
    private c f7521d;

    /* renamed from: e  reason: collision with root package name */
    private com.google.android.gms.internal.play_billing.j f7522e;

    /* renamed from: f  reason: collision with root package name */
    private ArrayList f7523f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f7524g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private String f7525a;

        /* renamed from: b  reason: collision with root package name */
        private String f7526b;

        /* renamed from: c  reason: collision with root package name */
        private List f7527c;

        /* renamed from: d  reason: collision with root package name */
        private ArrayList f7528d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f7529e;

        /* renamed from: f  reason: collision with root package name */
        private c.a f7530f;

        /* synthetic */ a(a6.s sVar) {
            c.a a10 = c.a();
            c.a.e(a10);
            this.f7530f = a10;
        }

        public BillingFlowParams a() {
            boolean z10;
            boolean z11;
            ArrayList arrayList;
            com.google.android.gms.internal.play_billing.j k10;
            ArrayList arrayList2 = this.f7528d;
            boolean z12 = true;
            if (arrayList2 != null && !arrayList2.isEmpty()) {
                z10 = true;
            } else {
                z10 = false;
            }
            List list = this.f7527c;
            if (list != null && !list.isEmpty()) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (!z10 && !z11) {
                throw new IllegalArgumentException("Details of the products must be provided.");
            }
            if (z10 && z11) {
                throw new IllegalArgumentException("Set SkuDetails or ProductDetailsParams, not both.");
            }
            if (z10) {
                if (!this.f7528d.contains(null)) {
                    if (this.f7528d.size() > 1) {
                        android.support.v4.media.session.b.a(this.f7528d.get(0));
                        throw null;
                    }
                } else {
                    throw new IllegalArgumentException("SKU cannot be null.");
                }
            } else {
                b bVar = (b) this.f7527c.get(0);
                for (int i10 = 0; i10 < this.f7527c.size(); i10++) {
                    b bVar2 = (b) this.f7527c.get(i10);
                    if (bVar2 != null) {
                        if (i10 != 0 && !bVar2.b().e().equals(bVar.b().e()) && !bVar2.b().e().equals("play_pass_subs")) {
                            throw new IllegalArgumentException("All products should have same ProductType.");
                        }
                    } else {
                        throw new IllegalArgumentException("ProductDetailsParams cannot be null.");
                    }
                }
                String h10 = bVar.b().h();
                for (b bVar3 : this.f7527c) {
                    if (!bVar.b().e().equals("play_pass_subs") && !bVar3.b().e().equals("play_pass_subs") && !h10.equals(bVar3.b().h())) {
                        throw new IllegalArgumentException("All products must have the same package name.");
                    }
                }
            }
            BillingFlowParams billingFlowParams = new BillingFlowParams(null);
            if (!z10) {
                billingFlowParams.f7518a = (!z11 || ((b) this.f7527c.get(0)).b().h().isEmpty()) ? false : false;
                billingFlowParams.f7519b = this.f7525a;
                billingFlowParams.f7520c = this.f7526b;
                billingFlowParams.f7521d = this.f7530f.a();
                ArrayList arrayList3 = this.f7528d;
                if (arrayList3 != null) {
                    arrayList = new ArrayList(arrayList3);
                } else {
                    arrayList = new ArrayList();
                }
                billingFlowParams.f7523f = arrayList;
                billingFlowParams.f7524g = this.f7529e;
                List list2 = this.f7527c;
                if (list2 != null) {
                    k10 = com.google.android.gms.internal.play_billing.j.j(list2);
                } else {
                    k10 = com.google.android.gms.internal.play_billing.j.k();
                }
                billingFlowParams.f7522e = k10;
                return billingFlowParams;
            }
            android.support.v4.media.session.b.a(this.f7528d.get(0));
            throw null;
        }

        public a b(boolean z10) {
            this.f7529e = z10;
            return this;
        }

        public a c(String str) {
            this.f7525a = str;
            return this;
        }

        public a d(String str) {
            this.f7526b = str;
            return this;
        }

        public a e(List list) {
            this.f7527c = new ArrayList(list);
            return this;
        }

        public a f(c cVar) {
            this.f7530f = c.c(cVar);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final ProductDetails f7531a;

        /* renamed from: b  reason: collision with root package name */
        private final String f7532b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private ProductDetails f7533a;

            /* renamed from: b  reason: collision with root package name */
            private String f7534b;

            /* synthetic */ a(a6.t tVar) {
            }

            public b a() {
                com.google.android.gms.internal.play_billing.b.c(this.f7533a, "ProductDetails is required for constructing ProductDetailsParams.");
                if (this.f7533a.f() != null) {
                    com.google.android.gms.internal.play_billing.b.c(this.f7534b, "offerToken is required for constructing ProductDetailsParams for subscriptions.");
                }
                return new b(this, null);
            }

            public a b(String str) {
                if (!TextUtils.isEmpty(str)) {
                    this.f7534b = str;
                    return this;
                }
                throw new IllegalArgumentException("offerToken can not be empty");
            }

            public a c(ProductDetails productDetails) {
                this.f7533a = productDetails;
                if (productDetails.c() != null) {
                    productDetails.c().getClass();
                    ProductDetails.b c10 = productDetails.c();
                    if (c10.d() != null) {
                        this.f7534b = c10.d();
                    }
                }
                return this;
            }
        }

        /* synthetic */ b(a aVar, a6.u uVar) {
            this.f7531a = aVar.f7533a;
            this.f7532b = aVar.f7534b;
        }

        public static a a() {
            return new a(null);
        }

        public final ProductDetails b() {
            return this.f7531a;
        }

        public final String c() {
            return this.f7532b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private String f7535a;

        /* renamed from: b  reason: collision with root package name */
        private String f7536b;

        /* renamed from: c  reason: collision with root package name */
        private int f7537c = 0;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private String f7538a;

            /* renamed from: b  reason: collision with root package name */
            private String f7539b;

            /* renamed from: c  reason: collision with root package name */
            private boolean f7540c;

            /* renamed from: d  reason: collision with root package name */
            private int f7541d = 0;

            /* synthetic */ a(a6.v vVar) {
            }

            static /* synthetic */ a e(a aVar) {
                aVar.f7540c = true;
                return aVar;
            }

            public c a() {
                boolean z10 = true;
                if (TextUtils.isEmpty(this.f7538a) && TextUtils.isEmpty(null)) {
                    z10 = false;
                }
                boolean isEmpty = TextUtils.isEmpty(this.f7539b);
                if (z10 && !isEmpty) {
                    throw new IllegalArgumentException("Please provide Old SKU purchase information(token/id) or original external transaction id, not both.");
                }
                if (!this.f7540c && !z10 && isEmpty) {
                    throw new IllegalArgumentException("Old SKU purchase information(token/id) or original external transaction id must be provided.");
                }
                c cVar = new c(null);
                cVar.f7535a = this.f7538a;
                cVar.f7537c = this.f7541d;
                cVar.f7536b = this.f7539b;
                return cVar;
            }

            public a b(String str) {
                this.f7538a = str;
                return this;
            }

            public a c(String str) {
                this.f7539b = str;
                return this;
            }

            public a d(int i10) {
                this.f7541d = i10;
                return this;
            }

            public final a f(String str) {
                this.f7538a = str;
                return this;
            }
        }

        /* synthetic */ c(a6.w wVar) {
        }

        public static a a() {
            return new a(null);
        }

        static /* bridge */ /* synthetic */ a c(c cVar) {
            a a10 = a();
            a10.f(cVar.f7535a);
            a10.d(cVar.f7537c);
            a10.c(cVar.f7536b);
            return a10;
        }

        final int b() {
            return this.f7537c;
        }

        final String d() {
            return this.f7535a;
        }

        final String e() {
            return this.f7536b;
        }
    }

    /* synthetic */ BillingFlowParams(a6.y yVar) {
    }

    public static a a() {
        return new a(null);
    }

    public final int b() {
        return this.f7521d.b();
    }

    public final String c() {
        return this.f7519b;
    }

    public final String d() {
        return this.f7520c;
    }

    public final String e() {
        return this.f7521d.d();
    }

    public final String f() {
        return this.f7521d.e();
    }

    public final ArrayList g() {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(this.f7523f);
        return arrayList;
    }

    public final List h() {
        return this.f7522e;
    }

    public final boolean p() {
        return this.f7524g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean q() {
        if (this.f7519b == null && this.f7520c == null && this.f7521d.e() == null && this.f7521d.b() == 0 && !this.f7518a && !this.f7524g) {
            return false;
        }
        return true;
    }
}
