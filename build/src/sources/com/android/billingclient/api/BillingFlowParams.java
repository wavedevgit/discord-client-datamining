package com.android.billingclient.api;

import android.text.TextUtils;
import com.android.billingclient.api.ProductDetails;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class BillingFlowParams {

    /* renamed from: a  reason: collision with root package name */
    private boolean f7942a;

    /* renamed from: b  reason: collision with root package name */
    private String f7943b;

    /* renamed from: c  reason: collision with root package name */
    private String f7944c;

    /* renamed from: d  reason: collision with root package name */
    private c f7945d;

    /* renamed from: e  reason: collision with root package name */
    private com.google.android.gms.internal.play_billing.j f7946e;

    /* renamed from: f  reason: collision with root package name */
    private ArrayList f7947f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f7948g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private String f7949a;

        /* renamed from: b  reason: collision with root package name */
        private String f7950b;

        /* renamed from: c  reason: collision with root package name */
        private List f7951c;

        /* renamed from: d  reason: collision with root package name */
        private ArrayList f7952d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f7953e;

        /* renamed from: f  reason: collision with root package name */
        private c.a f7954f;

        /* synthetic */ a(b6.s sVar) {
            c.a a10 = c.a();
            c.a.e(a10);
            this.f7954f = a10;
        }

        public BillingFlowParams a() {
            boolean z10;
            boolean z11;
            ArrayList arrayList;
            com.google.android.gms.internal.play_billing.j l10;
            ArrayList arrayList2 = this.f7952d;
            boolean z12 = true;
            if (arrayList2 != null && !arrayList2.isEmpty()) {
                z10 = true;
            } else {
                z10 = false;
            }
            List list = this.f7951c;
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
                if (!this.f7952d.contains(null)) {
                    if (this.f7952d.size() > 1) {
                        android.support.v4.media.session.b.a(this.f7952d.get(0));
                        throw null;
                    }
                } else {
                    throw new IllegalArgumentException("SKU cannot be null.");
                }
            } else {
                b bVar = (b) this.f7951c.get(0);
                for (int i10 = 0; i10 < this.f7951c.size(); i10++) {
                    b bVar2 = (b) this.f7951c.get(i10);
                    if (bVar2 != null) {
                        if (i10 != 0 && !bVar2.b().e().equals(bVar.b().e()) && !bVar2.b().e().equals("play_pass_subs")) {
                            throw new IllegalArgumentException("All products should have same ProductType.");
                        }
                    } else {
                        throw new IllegalArgumentException("ProductDetailsParams cannot be null.");
                    }
                }
                String h10 = bVar.b().h();
                for (b bVar3 : this.f7951c) {
                    if (!bVar.b().e().equals("play_pass_subs") && !bVar3.b().e().equals("play_pass_subs") && !h10.equals(bVar3.b().h())) {
                        throw new IllegalArgumentException("All products must have the same package name.");
                    }
                }
            }
            BillingFlowParams billingFlowParams = new BillingFlowParams(null);
            if (!z10) {
                billingFlowParams.f7942a = (!z11 || ((b) this.f7951c.get(0)).b().h().isEmpty()) ? false : false;
                billingFlowParams.f7943b = this.f7949a;
                billingFlowParams.f7944c = this.f7950b;
                billingFlowParams.f7945d = this.f7954f.a();
                ArrayList arrayList3 = this.f7952d;
                if (arrayList3 != null) {
                    arrayList = new ArrayList(arrayList3);
                } else {
                    arrayList = new ArrayList();
                }
                billingFlowParams.f7947f = arrayList;
                billingFlowParams.f7948g = this.f7953e;
                List list2 = this.f7951c;
                if (list2 != null) {
                    l10 = com.google.android.gms.internal.play_billing.j.j(list2);
                } else {
                    l10 = com.google.android.gms.internal.play_billing.j.l();
                }
                billingFlowParams.f7946e = l10;
                return billingFlowParams;
            }
            android.support.v4.media.session.b.a(this.f7952d.get(0));
            throw null;
        }

        public a b(boolean z10) {
            this.f7953e = z10;
            return this;
        }

        public a c(String str) {
            this.f7949a = str;
            return this;
        }

        public a d(String str) {
            this.f7950b = str;
            return this;
        }

        public a e(List list) {
            this.f7951c = new ArrayList(list);
            return this;
        }

        public a f(c cVar) {
            this.f7954f = c.c(cVar);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final ProductDetails f7955a;

        /* renamed from: b  reason: collision with root package name */
        private final String f7956b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private ProductDetails f7957a;

            /* renamed from: b  reason: collision with root package name */
            private String f7958b;

            /* synthetic */ a(b6.t tVar) {
            }

            public b a() {
                com.google.android.gms.internal.play_billing.b.c(this.f7957a, "ProductDetails is required for constructing ProductDetailsParams.");
                if (this.f7957a.f() != null) {
                    com.google.android.gms.internal.play_billing.b.c(this.f7958b, "offerToken is required for constructing ProductDetailsParams for subscriptions.");
                }
                return new b(this, null);
            }

            public a b(String str) {
                if (!TextUtils.isEmpty(str)) {
                    this.f7958b = str;
                    return this;
                }
                throw new IllegalArgumentException("offerToken can not be empty");
            }

            public a c(ProductDetails productDetails) {
                this.f7957a = productDetails;
                if (productDetails.c() != null) {
                    productDetails.c().getClass();
                    ProductDetails.b c10 = productDetails.c();
                    if (c10.d() != null) {
                        this.f7958b = c10.d();
                    }
                }
                return this;
            }
        }

        /* synthetic */ b(a aVar, b6.u uVar) {
            this.f7955a = aVar.f7957a;
            this.f7956b = aVar.f7958b;
        }

        public static a a() {
            return new a(null);
        }

        public final ProductDetails b() {
            return this.f7955a;
        }

        public final String c() {
            return this.f7956b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private String f7959a;

        /* renamed from: b  reason: collision with root package name */
        private String f7960b;

        /* renamed from: c  reason: collision with root package name */
        private int f7961c = 0;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private String f7962a;

            /* renamed from: b  reason: collision with root package name */
            private String f7963b;

            /* renamed from: c  reason: collision with root package name */
            private boolean f7964c;

            /* renamed from: d  reason: collision with root package name */
            private int f7965d = 0;

            /* synthetic */ a(b6.v vVar) {
            }

            static /* synthetic */ a e(a aVar) {
                aVar.f7964c = true;
                return aVar;
            }

            public c a() {
                boolean z10 = true;
                if (TextUtils.isEmpty(this.f7962a) && TextUtils.isEmpty(null)) {
                    z10 = false;
                }
                boolean isEmpty = TextUtils.isEmpty(this.f7963b);
                if (z10 && !isEmpty) {
                    throw new IllegalArgumentException("Please provide Old SKU purchase information(token/id) or original external transaction id, not both.");
                }
                if (!this.f7964c && !z10 && isEmpty) {
                    throw new IllegalArgumentException("Old SKU purchase information(token/id) or original external transaction id must be provided.");
                }
                c cVar = new c(null);
                cVar.f7959a = this.f7962a;
                cVar.f7961c = this.f7965d;
                cVar.f7960b = this.f7963b;
                return cVar;
            }

            public a b(String str) {
                this.f7962a = str;
                return this;
            }

            public a c(String str) {
                this.f7963b = str;
                return this;
            }

            public a d(int i10) {
                this.f7965d = i10;
                return this;
            }

            public final a f(String str) {
                this.f7962a = str;
                return this;
            }
        }

        /* synthetic */ c(b6.w wVar) {
        }

        public static a a() {
            return new a(null);
        }

        static /* bridge */ /* synthetic */ a c(c cVar) {
            a a10 = a();
            a10.f(cVar.f7959a);
            a10.d(cVar.f7961c);
            a10.c(cVar.f7960b);
            return a10;
        }

        final int b() {
            return this.f7961c;
        }

        final String d() {
            return this.f7959a;
        }

        final String e() {
            return this.f7960b;
        }
    }

    /* synthetic */ BillingFlowParams(b6.y yVar) {
    }

    public static a a() {
        return new a(null);
    }

    public final int b() {
        return this.f7945d.b();
    }

    public final String c() {
        return this.f7943b;
    }

    public final String d() {
        return this.f7944c;
    }

    public final String e() {
        return this.f7945d.d();
    }

    public final String f() {
        return this.f7945d.e();
    }

    public final ArrayList g() {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(this.f7947f);
        return arrayList;
    }

    public final List h() {
        return this.f7946e;
    }

    public final boolean p() {
        return this.f7948g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean q() {
        if (this.f7943b == null && this.f7944c == null && this.f7945d.e() == null && this.f7945d.b() == 0 && !this.f7942a && !this.f7948g) {
            return false;
        }
        return true;
    }
}
