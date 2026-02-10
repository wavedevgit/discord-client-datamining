package com.android.billingclient.api;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f8062a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f8063b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f8064a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f8065b;

        private a() {
        }

        public c a() {
            if (this.f8064a) {
                return new c(true, this.f8065b);
            }
            throw new IllegalArgumentException("Pending purchases for one-time products must be supported.");
        }

        public a b() {
            this.f8064a = true;
            return this;
        }
    }

    private c(boolean z10, boolean z11) {
        this.f8062a = z10;
        this.f8063b = z11;
    }

    public static a c() {
        return new a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean a() {
        return this.f8062a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean b() {
        return this.f8063b;
    }
}
