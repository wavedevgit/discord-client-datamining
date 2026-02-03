package com.android.billingclient.api;

import android.text.TextUtils;
import com.android.billingclient.api.ProductDetails;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class BillingFlowParams {

    /* renamed from: a  reason: collision with root package name */
    private boolean f8550a;

    /* renamed from: b  reason: collision with root package name */
    private String f8551b;

    /* renamed from: c  reason: collision with root package name */
    private String f8552c;

    /* renamed from: d  reason: collision with root package name */
    private c f8553d;

    /* renamed from: e  reason: collision with root package name */
    private com.google.android.gms.internal.play_billing.j f8554e;

    /* renamed from: f  reason: collision with root package name */
    private ArrayList f8555f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f8556g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private String f8557a;

        /* renamed from: b  reason: collision with root package name */
        private String f8558b;

        /* renamed from: c  reason: collision with root package name */
        private List f8559c;

        /* renamed from: d  reason: collision with root package name */
        private ArrayList f8560d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f8561e;

        /* renamed from: f  reason: collision with root package name */
        private c.a f8562f;

        /* synthetic */ a(a6.s sVar) {
            c.a a10 = c.a();
            c.a.e(a10);
            this.f8562f = a10;
        }

        public BillingFlowParams a() {
            boolean z10;
            boolean z11;
            ArrayList arrayList;
            com.google.android.gms.internal.play_billing.j k10;
            ArrayList arrayList2 = this.f8560d;
            boolean z12 = true;
            if (arrayList2 != null && !arrayList2.isEmpty()) {
                z10 = true;
            } else {
                z10 = false;
            }
            List list = this.f8559c;
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
                if (!this.f8560d.contains(null)) {
                    if (this.f8560d.size() > 1) {
                        android.support.v4.media.session.b.a(this.f8560d.get(0));
                        throw null;
                    }
                } else {
                    throw new IllegalArgumentException("SKU cannot be null.");
                }
            } else {
                b bVar = (b) this.f8559c.get(0);
                for (int i10 = 0; i10 < this.f8559c.size(); i10++) {
                    b bVar2 = (b) this.f8559c.get(i10);
                    if (bVar2 != null) {
                        if (i10 != 0 && !bVar2.b().e().equals(bVar.b().e()) && !bVar2.b().e().equals("play_pass_subs")) {
                            throw new IllegalArgumentException("All products should have same ProductType.");
                        }
                    } else {
                        throw new IllegalArgumentException("ProductDetailsParams cannot be null.");
                    }
                }
                String h10 = bVar.b().h();
                for (b bVar3 : this.f8559c) {
                    if (!bVar.b().e().equals("play_pass_subs") && !bVar3.b().e().equals("play_pass_subs") && !h10.equals(bVar3.b().h())) {
                        throw new IllegalArgumentException("All products must have the same package name.");
                    }
                }
            }
            BillingFlowParams billingFlowParams = new BillingFlowParams(null);
            if (!z10) {
                billingFlowParams.f8550a = (!z11 || ((b) this.f8559c.get(0)).b().h().isEmpty()) ? false : false;
                billingFlowParams.f8551b = this.f8557a;
                billingFlowParams.f8552c = this.f8558b;
                billingFlowParams.f8553d = this.f8562f.a();
                ArrayList arrayList3 = this.f8560d;
                if (arrayList3 != null) {
                    arrayList = new ArrayList(arrayList3);
                } else {
                    arrayList = new ArrayList();
                }
                billingFlowParams.f8555f = arrayList;
                billingFlowParams.f8556g = this.f8561e;
                List list2 = this.f8559c;
                if (list2 != null) {
                    k10 = com.google.android.gms.internal.play_billing.j.j(list2);
                } else {
                    k10 = com.google.android.gms.internal.play_billing.j.k();
                }
                billingFlowParams.f8554e = k10;
                return billingFlowParams;
            }
            android.support.v4.media.session.b.a(this.f8560d.get(0));
            throw null;
        }

        public a b(boolean z10) {
            this.f8561e = z10;
            return this;
        }

        public a c(String str) {
            this.f8557a = str;
            return this;
        }

        public a d(String str) {
            this.f8558b = str;
            return this;
        }

        public a e(List list) {
            this.f8559c = new ArrayList(list);
            return this;
        }

        public a f(c cVar) {
            this.f8562f = c.c(cVar);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final ProductDetails f8563a;

        /* renamed from: b  reason: collision with root package name */
        private final String f8564b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private ProductDetails f8565a;

            /* renamed from: b  reason: collision with root package name */
            private String f8566b;

            /* synthetic */ a(a6.t tVar) {
            }

            public b a() {
                com.google.android.gms.internal.play_billing.b.c(this.f8565a, "ProductDetails is required for constructing ProductDetailsParams.");
                if (this.f8565a.f() != null) {
                    com.google.android.gms.internal.play_billing.b.c(this.f8566b, "offerToken is required for constructing ProductDetailsParams for subscriptions.");
                }
                return new b(this, null);
            }

            public a b(String str) {
                if (!TextUtils.isEmpty(str)) {
                    this.f8566b = str;
                    return this;
                }
                throw new IllegalArgumentException("offerToken can not be empty");
            }

            public a c(ProductDetails productDetails) {
                this.f8565a = productDetails;
                if (productDetails.c() != null) {
                    productDetails.c().getClass();
                    ProductDetails.b c10 = productDetails.c();
                    if (c10.d() != null) {
                        this.f8566b = c10.d();
                    }
                }
                return this;
            }
        }

        /* synthetic */ b(a aVar, a6.u uVar) {
            this.f8563a = aVar.f8565a;
            this.f8564b = aVar.f8566b;
        }

        public static a a() {
            return new a(null);
        }

        public final ProductDetails b() {
            return this.f8563a;
        }

        public final String c() {
            return this.f8564b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private String f8567a;

        /* renamed from: b  reason: collision with root package name */
        private String f8568b;

        /* renamed from: c  reason: collision with root package name */
        private int f8569c = 0;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private String f8570a;

            /* renamed from: b  reason: collision with root package name */
            private String f8571b;

            /* renamed from: c  reason: collision with root package name */
            private boolean f8572c;

            /* renamed from: d  reason: collision with root package name */
            private int f8573d = 0;

            /* synthetic */ a(a6.v vVar) {
            }

            static /* synthetic */ a e(a aVar) {
                aVar.f8572c = true;
                return aVar;
            }

            public c a() {
                boolean z10 = true;
                if (TextUtils.isEmpty(this.f8570a) && TextUtils.isEmpty(null)) {
                    z10 = false;
                }
                boolean isEmpty = TextUtils.isEmpty(this.f8571b);
                if (z10 && !isEmpty) {
                    throw new IllegalArgumentException("Please provide Old SKU purchase information(token/id) or original external transaction id, not both.");
                }
                if (!this.f8572c && !z10 && isEmpty) {
                    throw new IllegalArgumentException("Old SKU purchase information(token/id) or original external transaction id must be provided.");
                }
                c cVar = new c(null);
                cVar.f8567a = this.f8570a;
                cVar.f8569c = this.f8573d;
                cVar.f8568b = this.f8571b;
                return cVar;
            }

            public a b(String str) {
                this.f8570a = str;
                return this;
            }

            public a c(String str) {
                this.f8571b = str;
                return this;
            }

            public a d(int i10) {
                this.f8573d = i10;
                return this;
            }

            public final a f(String str) {
                this.f8570a = str;
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
            a10.f(cVar.f8567a);
            a10.d(cVar.f8569c);
            a10.c(cVar.f8568b);
            return a10;
        }

        final int b() {
            return this.f8569c;
        }

        final String d() {
            return this.f8567a;
        }

        final String e() {
            return this.f8568b;
        }
    }

    /* synthetic */ BillingFlowParams(a6.y yVar) {
    }

    public static a a() {
        return new a(null);
    }

    public final int b() {
        return this.f8553d.b();
    }

    public final String c() {
        return this.f8551b;
    }

    public final String d() {
        return this.f8552c;
    }

    public final String e() {
        return this.f8553d.d();
    }

    public final String f() {
        return this.f8553d.e();
    }

    public final ArrayList g() {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(this.f8555f);
        return arrayList;
    }

    public final List h() {
        return this.f8554e;
    }

    public final boolean p() {
        return this.f8556g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean q() {
        if (this.f8551b == null && this.f8552c == null && this.f8553d.e() == null && this.f8553d.b() == 0 && !this.f8550a && !this.f8556g) {
            return false;
        }
        return true;
    }
}
