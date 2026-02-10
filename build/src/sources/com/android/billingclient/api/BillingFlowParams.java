package com.android.billingclient.api;

import android.text.TextUtils;
import com.android.billingclient.api.ProductDetails;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class BillingFlowParams {

    /* renamed from: a  reason: collision with root package name */
    private boolean f8519a;

    /* renamed from: b  reason: collision with root package name */
    private String f8520b;

    /* renamed from: c  reason: collision with root package name */
    private String f8521c;

    /* renamed from: d  reason: collision with root package name */
    private c f8522d;

    /* renamed from: e  reason: collision with root package name */
    private com.google.android.gms.internal.play_billing.j f8523e;

    /* renamed from: f  reason: collision with root package name */
    private ArrayList f8524f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f8525g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private String f8526a;

        /* renamed from: b  reason: collision with root package name */
        private String f8527b;

        /* renamed from: c  reason: collision with root package name */
        private List f8528c;

        /* renamed from: d  reason: collision with root package name */
        private ArrayList f8529d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f8530e;

        /* renamed from: f  reason: collision with root package name */
        private c.a f8531f;

        /* synthetic */ a(b6.s sVar) {
            c.a a10 = c.a();
            c.a.e(a10);
            this.f8531f = a10;
        }

        public BillingFlowParams a() {
            boolean z10;
            boolean z11;
            ArrayList arrayList;
            com.google.android.gms.internal.play_billing.j l10;
            ArrayList arrayList2 = this.f8529d;
            boolean z12 = true;
            if (arrayList2 != null && !arrayList2.isEmpty()) {
                z10 = true;
            } else {
                z10 = false;
            }
            List list = this.f8528c;
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
                if (!this.f8529d.contains(null)) {
                    if (this.f8529d.size() > 1) {
                        android.support.v4.media.session.b.a(this.f8529d.get(0));
                        throw null;
                    }
                } else {
                    throw new IllegalArgumentException("SKU cannot be null.");
                }
            } else {
                b bVar = (b) this.f8528c.get(0);
                for (int i10 = 0; i10 < this.f8528c.size(); i10++) {
                    b bVar2 = (b) this.f8528c.get(i10);
                    if (bVar2 != null) {
                        if (i10 != 0 && !bVar2.b().e().equals(bVar.b().e()) && !bVar2.b().e().equals("play_pass_subs")) {
                            throw new IllegalArgumentException("All products should have same ProductType.");
                        }
                    } else {
                        throw new IllegalArgumentException("ProductDetailsParams cannot be null.");
                    }
                }
                String h10 = bVar.b().h();
                for (b bVar3 : this.f8528c) {
                    if (!bVar.b().e().equals("play_pass_subs") && !bVar3.b().e().equals("play_pass_subs") && !h10.equals(bVar3.b().h())) {
                        throw new IllegalArgumentException("All products must have the same package name.");
                    }
                }
            }
            BillingFlowParams billingFlowParams = new BillingFlowParams(null);
            if (!z10) {
                billingFlowParams.f8519a = (!z11 || ((b) this.f8528c.get(0)).b().h().isEmpty()) ? false : false;
                billingFlowParams.f8520b = this.f8526a;
                billingFlowParams.f8521c = this.f8527b;
                billingFlowParams.f8522d = this.f8531f.a();
                ArrayList arrayList3 = this.f8529d;
                if (arrayList3 != null) {
                    arrayList = new ArrayList(arrayList3);
                } else {
                    arrayList = new ArrayList();
                }
                billingFlowParams.f8524f = arrayList;
                billingFlowParams.f8525g = this.f8530e;
                List list2 = this.f8528c;
                if (list2 != null) {
                    l10 = com.google.android.gms.internal.play_billing.j.k(list2);
                } else {
                    l10 = com.google.android.gms.internal.play_billing.j.l();
                }
                billingFlowParams.f8523e = l10;
                return billingFlowParams;
            }
            android.support.v4.media.session.b.a(this.f8529d.get(0));
            throw null;
        }

        public a b(boolean z10) {
            this.f8530e = z10;
            return this;
        }

        public a c(String str) {
            this.f8526a = str;
            return this;
        }

        public a d(String str) {
            this.f8527b = str;
            return this;
        }

        public a e(List list) {
            this.f8528c = new ArrayList(list);
            return this;
        }

        public a f(c cVar) {
            this.f8531f = c.c(cVar);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final ProductDetails f8532a;

        /* renamed from: b  reason: collision with root package name */
        private final String f8533b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private ProductDetails f8534a;

            /* renamed from: b  reason: collision with root package name */
            private String f8535b;

            /* synthetic */ a(b6.t tVar) {
            }

            public b a() {
                com.google.android.gms.internal.play_billing.b.c(this.f8534a, "ProductDetails is required for constructing ProductDetailsParams.");
                if (this.f8534a.f() != null) {
                    com.google.android.gms.internal.play_billing.b.c(this.f8535b, "offerToken is required for constructing ProductDetailsParams for subscriptions.");
                }
                return new b(this, null);
            }

            public a b(String str) {
                if (!TextUtils.isEmpty(str)) {
                    this.f8535b = str;
                    return this;
                }
                throw new IllegalArgumentException("offerToken can not be empty");
            }

            public a c(ProductDetails productDetails) {
                this.f8534a = productDetails;
                if (productDetails.c() != null) {
                    productDetails.c().getClass();
                    ProductDetails.b c10 = productDetails.c();
                    if (c10.d() != null) {
                        this.f8535b = c10.d();
                    }
                }
                return this;
            }
        }

        /* synthetic */ b(a aVar, b6.u uVar) {
            this.f8532a = aVar.f8534a;
            this.f8533b = aVar.f8535b;
        }

        public static a a() {
            return new a(null);
        }

        public final ProductDetails b() {
            return this.f8532a;
        }

        public final String c() {
            return this.f8533b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private String f8536a;

        /* renamed from: b  reason: collision with root package name */
        private String f8537b;

        /* renamed from: c  reason: collision with root package name */
        private int f8538c = 0;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private String f8539a;

            /* renamed from: b  reason: collision with root package name */
            private String f8540b;

            /* renamed from: c  reason: collision with root package name */
            private boolean f8541c;

            /* renamed from: d  reason: collision with root package name */
            private int f8542d = 0;

            /* synthetic */ a(b6.v vVar) {
            }

            static /* synthetic */ a e(a aVar) {
                aVar.f8541c = true;
                return aVar;
            }

            public c a() {
                boolean z10 = true;
                if (TextUtils.isEmpty(this.f8539a) && TextUtils.isEmpty(null)) {
                    z10 = false;
                }
                boolean isEmpty = TextUtils.isEmpty(this.f8540b);
                if (z10 && !isEmpty) {
                    throw new IllegalArgumentException("Please provide Old SKU purchase information(token/id) or original external transaction id, not both.");
                }
                if (!this.f8541c && !z10 && isEmpty) {
                    throw new IllegalArgumentException("Old SKU purchase information(token/id) or original external transaction id must be provided.");
                }
                c cVar = new c(null);
                cVar.f8536a = this.f8539a;
                cVar.f8538c = this.f8542d;
                cVar.f8537b = this.f8540b;
                return cVar;
            }

            public a b(String str) {
                this.f8539a = str;
                return this;
            }

            public a c(String str) {
                this.f8540b = str;
                return this;
            }

            public a d(int i10) {
                this.f8542d = i10;
                return this;
            }

            public final a f(String str) {
                this.f8539a = str;
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
            a10.f(cVar.f8536a);
            a10.d(cVar.f8538c);
            a10.c(cVar.f8537b);
            return a10;
        }

        final int b() {
            return this.f8538c;
        }

        final String d() {
            return this.f8536a;
        }

        final String e() {
            return this.f8537b;
        }
    }

    /* synthetic */ BillingFlowParams(b6.y yVar) {
    }

    public static a a() {
        return new a(null);
    }

    public final int b() {
        return this.f8522d.b();
    }

    public final String c() {
        return this.f8520b;
    }

    public final String d() {
        return this.f8521c;
    }

    public final String e() {
        return this.f8522d.d();
    }

    public final String f() {
        return this.f8522d.e();
    }

    public final ArrayList g() {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(this.f8524f);
        return arrayList;
    }

    public final List h() {
        return this.f8523e;
    }

    public final boolean p() {
        return this.f8525g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean q() {
        if (this.f8520b == null && this.f8521c == null && this.f8522d.e() == null && this.f8522d.b() == 0 && !this.f8519a && !this.f8525g) {
            return false;
        }
        return true;
    }
}
