package com.android.billingclient.api;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f9041a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f9042b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f9043a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f9044b;

        private a() {
        }

        public c a() {
            if (this.f9043a) {
                return new c(true, this.f9044b);
            }
            throw new IllegalArgumentException("Pending purchases for one-time products must be supported.");
        }

        public a b() {
            this.f9043a = true;
            return this;
        }
    }

    private c(boolean z10, boolean z11) {
        this.f9041a = z10;
        this.f9042b = z11;
    }

    public static a c() {
        return new a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean a() {
        return this.f9041a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean b() {
        return this.f9042b;
    }
}
