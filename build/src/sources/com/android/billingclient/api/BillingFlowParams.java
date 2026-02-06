package com.android.billingclient.api;

import android.text.TextUtils;
import com.android.billingclient.api.ProductDetails;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class BillingFlowParams {

    /* renamed from: a  reason: collision with root package name */
    private boolean f7802a;

    /* renamed from: b  reason: collision with root package name */
    private String f7803b;

    /* renamed from: c  reason: collision with root package name */
    private String f7804c;

    /* renamed from: d  reason: collision with root package name */
    private c f7805d;

    /* renamed from: e  reason: collision with root package name */
    private com.google.android.gms.internal.play_billing.j f7806e;

    /* renamed from: f  reason: collision with root package name */
    private ArrayList f7807f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f7808g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private String f7809a;

        /* renamed from: b  reason: collision with root package name */
        private String f7810b;

        /* renamed from: c  reason: collision with root package name */
        private List f7811c;

        /* renamed from: d  reason: collision with root package name */
        private ArrayList f7812d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f7813e;

        /* renamed from: f  reason: collision with root package name */
        private c.a f7814f;

        /* synthetic */ a(a6.s sVar) {
            c.a a10 = c.a();
            c.a.e(a10);
            this.f7814f = a10;
        }

        public BillingFlowParams a() {
            boolean z10;
            boolean z11;
            ArrayList arrayList;
            com.google.android.gms.internal.play_billing.j l10;
            ArrayList arrayList2 = this.f7812d;
            boolean z12 = true;
            if (arrayList2 != null && !arrayList2.isEmpty()) {
                z10 = true;
            } else {
                z10 = false;
            }
            List list = this.f7811c;
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
                if (!this.f7812d.contains(null)) {
                    if (this.f7812d.size() > 1) {
                        android.support.v4.media.session.b.a(this.f7812d.get(0));
                        throw null;
                    }
                } else {
                    throw new IllegalArgumentException("SKU cannot be null.");
                }
            } else {
                b bVar = (b) this.f7811c.get(0);
                for (int i10 = 0; i10 < this.f7811c.size(); i10++) {
                    b bVar2 = (b) this.f7811c.get(i10);
                    if (bVar2 != null) {
                        if (i10 != 0 && !bVar2.b().e().equals(bVar.b().e()) && !bVar2.b().e().equals("play_pass_subs")) {
                            throw new IllegalArgumentException("All products should have same ProductType.");
                        }
                    } else {
                        throw new IllegalArgumentException("ProductDetailsParams cannot be null.");
                    }
                }
                String h10 = bVar.b().h();
                for (b bVar3 : this.f7811c) {
                    if (!bVar.b().e().equals("play_pass_subs") && !bVar3.b().e().equals("play_pass_subs") && !h10.equals(bVar3.b().h())) {
                        throw new IllegalArgumentException("All products must have the same package name.");
                    }
                }
            }
            BillingFlowParams billingFlowParams = new BillingFlowParams(null);
            if (!z10) {
                billingFlowParams.f7802a = (!z11 || ((b) this.f7811c.get(0)).b().h().isEmpty()) ? false : false;
                billingFlowParams.f7803b = this.f7809a;
                billingFlowParams.f7804c = this.f7810b;
                billingFlowParams.f7805d = this.f7814f.a();
                ArrayList arrayList3 = this.f7812d;
                if (arrayList3 != null) {
                    arrayList = new ArrayList(arrayList3);
                } else {
                    arrayList = new ArrayList();
                }
                billingFlowParams.f7807f = arrayList;
                billingFlowParams.f7808g = this.f7813e;
                List list2 = this.f7811c;
                if (list2 != null) {
                    l10 = com.google.android.gms.internal.play_billing.j.j(list2);
                } else {
                    l10 = com.google.android.gms.internal.play_billing.j.l();
                }
                billingFlowParams.f7806e = l10;
                return billingFlowParams;
            }
            android.support.v4.media.session.b.a(this.f7812d.get(0));
            throw null;
        }

        public a b(boolean z10) {
            this.f7813e = z10;
            return this;
        }

        public a c(String str) {
            this.f7809a = str;
            return this;
        }

        public a d(String str) {
            this.f7810b = str;
            return this;
        }

        public a e(List list) {
            this.f7811c = new ArrayList(list);
            return this;
        }

        public a f(c cVar) {
            this.f7814f = c.c(cVar);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final ProductDetails f7815a;

        /* renamed from: b  reason: collision with root package name */
        private final String f7816b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private ProductDetails f7817a;

            /* renamed from: b  reason: collision with root package name */
            private String f7818b;

            /* synthetic */ a(a6.t tVar) {
            }

            public b a() {
                com.google.android.gms.internal.play_billing.b.c(this.f7817a, "ProductDetails is required for constructing ProductDetailsParams.");
                if (this.f7817a.f() != null) {
                    com.google.android.gms.internal.play_billing.b.c(this.f7818b, "offerToken is required for constructing ProductDetailsParams for subscriptions.");
                }
                return new b(this, null);
            }

            public a b(String str) {
                if (!TextUtils.isEmpty(str)) {
                    this.f7818b = str;
                    return this;
                }
                throw new IllegalArgumentException("offerToken can not be empty");
            }

            public a c(ProductDetails productDetails) {
                this.f7817a = productDetails;
                if (productDetails.c() != null) {
                    productDetails.c().getClass();
                    ProductDetails.b c10 = productDetails.c();
                    if (c10.d() != null) {
                        this.f7818b = c10.d();
                    }
                }
                return this;
            }
        }

        /* synthetic */ b(a aVar, a6.u uVar) {
            this.f7815a = aVar.f7817a;
            this.f7816b = aVar.f7818b;
        }

        public static a a() {
            return new a(null);
        }

        public final ProductDetails b() {
            return this.f7815a;
        }

        public final String c() {
            return this.f7816b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private String f7819a;

        /* renamed from: b  reason: collision with root package name */
        private String f7820b;

        /* renamed from: c  reason: collision with root package name */
        private int f7821c = 0;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private String f7822a;

            /* renamed from: b  reason: collision with root package name */
            private String f7823b;

            /* renamed from: c  reason: collision with root package name */
            private boolean f7824c;

            /* renamed from: d  reason: collision with root package name */
            private int f7825d = 0;

            /* synthetic */ a(a6.v vVar) {
            }

            static /* synthetic */ a e(a aVar) {
                aVar.f7824c = true;
                return aVar;
            }

            public c a() {
                boolean z10 = true;
                if (TextUtils.isEmpty(this.f7822a) && TextUtils.isEmpty(null)) {
                    z10 = false;
                }
                boolean isEmpty = TextUtils.isEmpty(this.f7823b);
                if (z10 && !isEmpty) {
                    throw new IllegalArgumentException("Please provide Old SKU purchase information(token/id) or original external transaction id, not both.");
                }
                if (!this.f7824c && !z10 && isEmpty) {
                    throw new IllegalArgumentException("Old SKU purchase information(token/id) or original external transaction id must be provided.");
                }
                c cVar = new c(null);
                cVar.f7819a = this.f7822a;
                cVar.f7821c = this.f7825d;
                cVar.f7820b = this.f7823b;
                return cVar;
            }

            public a b(String str) {
                this.f7822a = str;
                return this;
            }

            public a c(String str) {
                this.f7823b = str;
                return this;
            }

            public a d(int i10) {
                this.f7825d = i10;
                return this;
            }

            public final a f(String str) {
                this.f7822a = str;
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
            a10.f(cVar.f7819a);
            a10.d(cVar.f7821c);
            a10.c(cVar.f7820b);
            return a10;
        }

        final int b() {
            return this.f7821c;
        }

        final String d() {
            return this.f7819a;
        }

        final String e() {
            return this.f7820b;
        }
    }

    /* synthetic */ BillingFlowParams(a6.y yVar) {
    }

    public static a a() {
        return new a(null);
    }

    public final int b() {
        return this.f7805d.b();
    }

    public final String c() {
        return this.f7803b;
    }

    public final String d() {
        return this.f7804c;
    }

    public final String e() {
        return this.f7805d.d();
    }

    public final String f() {
        return this.f7805d.e();
    }

    public final ArrayList g() {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(this.f7807f);
        return arrayList;
    }

    public final List h() {
        return this.f7806e;
    }

    public final boolean p() {
        return this.f7808g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean q() {
        if (this.f7803b == null && this.f7804c == null && this.f7805d.e() == null && this.f7805d.b() == 0 && !this.f7802a && !this.f7808g) {
            return false;
        }
        return true;
    }
}
