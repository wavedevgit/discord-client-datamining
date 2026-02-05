package com.android.billingclient.api;

import android.text.TextUtils;
import com.android.billingclient.api.ProductDetails;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class BillingFlowParams {

    /* renamed from: a  reason: collision with root package name */
    private boolean f7903a;

    /* renamed from: b  reason: collision with root package name */
    private String f7904b;

    /* renamed from: c  reason: collision with root package name */
    private String f7905c;

    /* renamed from: d  reason: collision with root package name */
    private c f7906d;

    /* renamed from: e  reason: collision with root package name */
    private com.google.android.gms.internal.play_billing.j f7907e;

    /* renamed from: f  reason: collision with root package name */
    private ArrayList f7908f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f7909g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private String f7910a;

        /* renamed from: b  reason: collision with root package name */
        private String f7911b;

        /* renamed from: c  reason: collision with root package name */
        private List f7912c;

        /* renamed from: d  reason: collision with root package name */
        private ArrayList f7913d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f7914e;

        /* renamed from: f  reason: collision with root package name */
        private c.a f7915f;

        /* synthetic */ a(a6.s sVar) {
            c.a a10 = c.a();
            c.a.e(a10);
            this.f7915f = a10;
        }

        public BillingFlowParams a() {
            boolean z10;
            boolean z11;
            ArrayList arrayList;
            com.google.android.gms.internal.play_billing.j l10;
            ArrayList arrayList2 = this.f7913d;
            boolean z12 = true;
            if (arrayList2 != null && !arrayList2.isEmpty()) {
                z10 = true;
            } else {
                z10 = false;
            }
            List list = this.f7912c;
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
                if (!this.f7913d.contains(null)) {
                    if (this.f7913d.size() > 1) {
                        android.support.v4.media.session.b.a(this.f7913d.get(0));
                        throw null;
                    }
                } else {
                    throw new IllegalArgumentException("SKU cannot be null.");
                }
            } else {
                b bVar = (b) this.f7912c.get(0);
                for (int i10 = 0; i10 < this.f7912c.size(); i10++) {
                    b bVar2 = (b) this.f7912c.get(i10);
                    if (bVar2 != null) {
                        if (i10 != 0 && !bVar2.b().e().equals(bVar.b().e()) && !bVar2.b().e().equals("play_pass_subs")) {
                            throw new IllegalArgumentException("All products should have same ProductType.");
                        }
                    } else {
                        throw new IllegalArgumentException("ProductDetailsParams cannot be null.");
                    }
                }
                String h10 = bVar.b().h();
                for (b bVar3 : this.f7912c) {
                    if (!bVar.b().e().equals("play_pass_subs") && !bVar3.b().e().equals("play_pass_subs") && !h10.equals(bVar3.b().h())) {
                        throw new IllegalArgumentException("All products must have the same package name.");
                    }
                }
            }
            BillingFlowParams billingFlowParams = new BillingFlowParams(null);
            if (!z10) {
                billingFlowParams.f7903a = (!z11 || ((b) this.f7912c.get(0)).b().h().isEmpty()) ? false : false;
                billingFlowParams.f7904b = this.f7910a;
                billingFlowParams.f7905c = this.f7911b;
                billingFlowParams.f7906d = this.f7915f.a();
                ArrayList arrayList3 = this.f7913d;
                if (arrayList3 != null) {
                    arrayList = new ArrayList(arrayList3);
                } else {
                    arrayList = new ArrayList();
                }
                billingFlowParams.f7908f = arrayList;
                billingFlowParams.f7909g = this.f7914e;
                List list2 = this.f7912c;
                if (list2 != null) {
                    l10 = com.google.android.gms.internal.play_billing.j.j(list2);
                } else {
                    l10 = com.google.android.gms.internal.play_billing.j.l();
                }
                billingFlowParams.f7907e = l10;
                return billingFlowParams;
            }
            android.support.v4.media.session.b.a(this.f7913d.get(0));
            throw null;
        }

        public a b(boolean z10) {
            this.f7914e = z10;
            return this;
        }

        public a c(String str) {
            this.f7910a = str;
            return this;
        }

        public a d(String str) {
            this.f7911b = str;
            return this;
        }

        public a e(List list) {
            this.f7912c = new ArrayList(list);
            return this;
        }

        public a f(c cVar) {
            this.f7915f = c.c(cVar);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final ProductDetails f7916a;

        /* renamed from: b  reason: collision with root package name */
        private final String f7917b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private ProductDetails f7918a;

            /* renamed from: b  reason: collision with root package name */
            private String f7919b;

            /* synthetic */ a(a6.t tVar) {
            }

            public b a() {
                com.google.android.gms.internal.play_billing.b.c(this.f7918a, "ProductDetails is required for constructing ProductDetailsParams.");
                if (this.f7918a.f() != null) {
                    com.google.android.gms.internal.play_billing.b.c(this.f7919b, "offerToken is required for constructing ProductDetailsParams for subscriptions.");
                }
                return new b(this, null);
            }

            public a b(String str) {
                if (!TextUtils.isEmpty(str)) {
                    this.f7919b = str;
                    return this;
                }
                throw new IllegalArgumentException("offerToken can not be empty");
            }

            public a c(ProductDetails productDetails) {
                this.f7918a = productDetails;
                if (productDetails.c() != null) {
                    productDetails.c().getClass();
                    ProductDetails.b c10 = productDetails.c();
                    if (c10.d() != null) {
                        this.f7919b = c10.d();
                    }
                }
                return this;
            }
        }

        /* synthetic */ b(a aVar, a6.u uVar) {
            this.f7916a = aVar.f7918a;
            this.f7917b = aVar.f7919b;
        }

        public static a a() {
            return new a(null);
        }

        public final ProductDetails b() {
            return this.f7916a;
        }

        public final String c() {
            return this.f7917b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private String f7920a;

        /* renamed from: b  reason: collision with root package name */
        private String f7921b;

        /* renamed from: c  reason: collision with root package name */
        private int f7922c = 0;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private String f7923a;

            /* renamed from: b  reason: collision with root package name */
            private String f7924b;

            /* renamed from: c  reason: collision with root package name */
            private boolean f7925c;

            /* renamed from: d  reason: collision with root package name */
            private int f7926d = 0;

            /* synthetic */ a(a6.v vVar) {
            }

            static /* synthetic */ a e(a aVar) {
                aVar.f7925c = true;
                return aVar;
            }

            public c a() {
                boolean z10 = true;
                if (TextUtils.isEmpty(this.f7923a) && TextUtils.isEmpty(null)) {
                    z10 = false;
                }
                boolean isEmpty = TextUtils.isEmpty(this.f7924b);
                if (z10 && !isEmpty) {
                    throw new IllegalArgumentException("Please provide Old SKU purchase information(token/id) or original external transaction id, not both.");
                }
                if (!this.f7925c && !z10 && isEmpty) {
                    throw new IllegalArgumentException("Old SKU purchase information(token/id) or original external transaction id must be provided.");
                }
                c cVar = new c(null);
                cVar.f7920a = this.f7923a;
                cVar.f7922c = this.f7926d;
                cVar.f7921b = this.f7924b;
                return cVar;
            }

            public a b(String str) {
                this.f7923a = str;
                return this;
            }

            public a c(String str) {
                this.f7924b = str;
                return this;
            }

            public a d(int i10) {
                this.f7926d = i10;
                return this;
            }

            public final a f(String str) {
                this.f7923a = str;
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
            a10.f(cVar.f7920a);
            a10.d(cVar.f7922c);
            a10.c(cVar.f7921b);
            return a10;
        }

        final int b() {
            return this.f7922c;
        }

        final String d() {
            return this.f7920a;
        }

        final String e() {
            return this.f7921b;
        }
    }

    /* synthetic */ BillingFlowParams(a6.y yVar) {
    }

    public static a a() {
        return new a(null);
    }

    public final int b() {
        return this.f7906d.b();
    }

    public final String c() {
        return this.f7904b;
    }

    public final String d() {
        return this.f7905c;
    }

    public final String e() {
        return this.f7906d.d();
    }

    public final String f() {
        return this.f7906d.e();
    }

    public final ArrayList g() {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(this.f7908f);
        return arrayList;
    }

    public final List h() {
        return this.f7907e;
    }

    public final boolean p() {
        return this.f7909g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean q() {
        if (this.f7904b == null && this.f7905c == null && this.f7906d.e() == null && this.f7906d.b() == 0 && !this.f7903a && !this.f7909g) {
            return false;
        }
        return true;
    }
}
