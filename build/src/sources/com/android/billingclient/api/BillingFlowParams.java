package com.android.billingclient.api;

import android.text.TextUtils;
import com.android.billingclient.api.ProductDetails;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class BillingFlowParams {

    /* renamed from: a  reason: collision with root package name */
    private boolean f8921a;

    /* renamed from: b  reason: collision with root package name */
    private String f8922b;

    /* renamed from: c  reason: collision with root package name */
    private String f8923c;

    /* renamed from: d  reason: collision with root package name */
    private c f8924d;

    /* renamed from: e  reason: collision with root package name */
    private com.google.android.gms.internal.play_billing.j f8925e;

    /* renamed from: f  reason: collision with root package name */
    private ArrayList f8926f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f8927g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private String f8928a;

        /* renamed from: b  reason: collision with root package name */
        private String f8929b;

        /* renamed from: c  reason: collision with root package name */
        private List f8930c;

        /* renamed from: d  reason: collision with root package name */
        private ArrayList f8931d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f8932e;

        /* renamed from: f  reason: collision with root package name */
        private c.a f8933f;

        /* synthetic */ a(a6.s sVar) {
            c.a a10 = c.a();
            c.a.e(a10);
            this.f8933f = a10;
        }

        public BillingFlowParams a() {
            boolean z10;
            boolean z11;
            ArrayList arrayList;
            com.google.android.gms.internal.play_billing.j k10;
            ArrayList arrayList2 = this.f8931d;
            boolean z12 = true;
            if (arrayList2 != null && !arrayList2.isEmpty()) {
                z10 = true;
            } else {
                z10 = false;
            }
            List list = this.f8930c;
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
                if (!this.f8931d.contains(null)) {
                    if (this.f8931d.size() > 1) {
                        android.support.v4.media.session.b.a(this.f8931d.get(0));
                        throw null;
                    }
                } else {
                    throw new IllegalArgumentException("SKU cannot be null.");
                }
            } else {
                b bVar = (b) this.f8930c.get(0);
                for (int i10 = 0; i10 < this.f8930c.size(); i10++) {
                    b bVar2 = (b) this.f8930c.get(i10);
                    if (bVar2 != null) {
                        if (i10 != 0 && !bVar2.b().e().equals(bVar.b().e()) && !bVar2.b().e().equals("play_pass_subs")) {
                            throw new IllegalArgumentException("All products should have same ProductType.");
                        }
                    } else {
                        throw new IllegalArgumentException("ProductDetailsParams cannot be null.");
                    }
                }
                String h10 = bVar.b().h();
                for (b bVar3 : this.f8930c) {
                    if (!bVar.b().e().equals("play_pass_subs") && !bVar3.b().e().equals("play_pass_subs") && !h10.equals(bVar3.b().h())) {
                        throw new IllegalArgumentException("All products must have the same package name.");
                    }
                }
            }
            BillingFlowParams billingFlowParams = new BillingFlowParams(null);
            if (!z10) {
                billingFlowParams.f8921a = (!z11 || ((b) this.f8930c.get(0)).b().h().isEmpty()) ? false : false;
                billingFlowParams.f8922b = this.f8928a;
                billingFlowParams.f8923c = this.f8929b;
                billingFlowParams.f8924d = this.f8933f.a();
                ArrayList arrayList3 = this.f8931d;
                if (arrayList3 != null) {
                    arrayList = new ArrayList(arrayList3);
                } else {
                    arrayList = new ArrayList();
                }
                billingFlowParams.f8926f = arrayList;
                billingFlowParams.f8927g = this.f8932e;
                List list2 = this.f8930c;
                if (list2 != null) {
                    k10 = com.google.android.gms.internal.play_billing.j.j(list2);
                } else {
                    k10 = com.google.android.gms.internal.play_billing.j.k();
                }
                billingFlowParams.f8925e = k10;
                return billingFlowParams;
            }
            android.support.v4.media.session.b.a(this.f8931d.get(0));
            throw null;
        }

        public a b(boolean z10) {
            this.f8932e = z10;
            return this;
        }

        public a c(String str) {
            this.f8928a = str;
            return this;
        }

        public a d(String str) {
            this.f8929b = str;
            return this;
        }

        public a e(List list) {
            this.f8930c = new ArrayList(list);
            return this;
        }

        public a f(c cVar) {
            this.f8933f = c.c(cVar);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final ProductDetails f8934a;

        /* renamed from: b  reason: collision with root package name */
        private final String f8935b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private ProductDetails f8936a;

            /* renamed from: b  reason: collision with root package name */
            private String f8937b;

            /* synthetic */ a(a6.t tVar) {
            }

            public b a() {
                com.google.android.gms.internal.play_billing.b.c(this.f8936a, "ProductDetails is required for constructing ProductDetailsParams.");
                if (this.f8936a.f() != null) {
                    com.google.android.gms.internal.play_billing.b.c(this.f8937b, "offerToken is required for constructing ProductDetailsParams for subscriptions.");
                }
                return new b(this, null);
            }

            public a b(String str) {
                if (!TextUtils.isEmpty(str)) {
                    this.f8937b = str;
                    return this;
                }
                throw new IllegalArgumentException("offerToken can not be empty");
            }

            public a c(ProductDetails productDetails) {
                this.f8936a = productDetails;
                if (productDetails.c() != null) {
                    productDetails.c().getClass();
                    ProductDetails.b c10 = productDetails.c();
                    if (c10.d() != null) {
                        this.f8937b = c10.d();
                    }
                }
                return this;
            }
        }

        /* synthetic */ b(a aVar, a6.u uVar) {
            this.f8934a = aVar.f8936a;
            this.f8935b = aVar.f8937b;
        }

        public static a a() {
            return new a(null);
        }

        public final ProductDetails b() {
            return this.f8934a;
        }

        public final String c() {
            return this.f8935b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private String f8938a;

        /* renamed from: b  reason: collision with root package name */
        private String f8939b;

        /* renamed from: c  reason: collision with root package name */
        private int f8940c = 0;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private String f8941a;

            /* renamed from: b  reason: collision with root package name */
            private String f8942b;

            /* renamed from: c  reason: collision with root package name */
            private boolean f8943c;

            /* renamed from: d  reason: collision with root package name */
            private int f8944d = 0;

            /* synthetic */ a(a6.v vVar) {
            }

            static /* synthetic */ a e(a aVar) {
                aVar.f8943c = true;
                return aVar;
            }

            public c a() {
                boolean z10 = true;
                if (TextUtils.isEmpty(this.f8941a) && TextUtils.isEmpty(null)) {
                    z10 = false;
                }
                boolean isEmpty = TextUtils.isEmpty(this.f8942b);
                if (z10 && !isEmpty) {
                    throw new IllegalArgumentException("Please provide Old SKU purchase information(token/id) or original external transaction id, not both.");
                }
                if (!this.f8943c && !z10 && isEmpty) {
                    throw new IllegalArgumentException("Old SKU purchase information(token/id) or original external transaction id must be provided.");
                }
                c cVar = new c(null);
                cVar.f8938a = this.f8941a;
                cVar.f8940c = this.f8944d;
                cVar.f8939b = this.f8942b;
                return cVar;
            }

            public a b(String str) {
                this.f8941a = str;
                return this;
            }

            public a c(String str) {
                this.f8942b = str;
                return this;
            }

            public a d(int i10) {
                this.f8944d = i10;
                return this;
            }

            public final a f(String str) {
                this.f8941a = str;
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
            a10.f(cVar.f8938a);
            a10.d(cVar.f8940c);
            a10.c(cVar.f8939b);
            return a10;
        }

        final int b() {
            return this.f8940c;
        }

        final String d() {
            return this.f8938a;
        }

        final String e() {
            return this.f8939b;
        }
    }

    /* synthetic */ BillingFlowParams(a6.y yVar) {
    }

    public static a a() {
        return new a(null);
    }

    public final int b() {
        return this.f8924d.b();
    }

    public final String c() {
        return this.f8922b;
    }

    public final String d() {
        return this.f8923c;
    }

    public final String e() {
        return this.f8924d.d();
    }

    public final String f() {
        return this.f8924d.e();
    }

    public final ArrayList g() {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(this.f8926f);
        return arrayList;
    }

    public final List h() {
        return this.f8925e;
    }

    public final boolean p() {
        return this.f8927g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean q() {
        if (this.f8922b == null && this.f8923c == null && this.f8924d.e() == null && this.f8924d.b() == 0 && !this.f8921a && !this.f8927g) {
            return false;
        }
        return true;
    }
}
