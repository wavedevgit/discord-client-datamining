package com.android.billingclient.api;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f8639a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f8640b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f8641a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f8642b;

        private a() {
        }

        public c a() {
            if (this.f8641a) {
                return new c(true, this.f8642b);
            }
            throw new IllegalArgumentException("Pending purchases for one-time products must be supported.");
        }

        public a b() {
            this.f8641a = true;
            return this;
        }
    }

    private c(boolean z10, boolean z11) {
        this.f8639a = z10;
        this.f8640b = z11;
    }

    public static a c() {
        return new a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean a() {
        return this.f8639a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean b() {
        return this.f8640b;
    }
}
