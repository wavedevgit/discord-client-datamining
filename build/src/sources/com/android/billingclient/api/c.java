package com.android.billingclient.api;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f7638a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f7639b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f7640a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f7641b;

        private a() {
        }

        public c a() {
            if (this.f7640a) {
                return new c(true, this.f7641b);
            }
            throw new IllegalArgumentException("Pending purchases for one-time products must be supported.");
        }

        public a b() {
            this.f7640a = true;
            return this;
        }
    }

    private c(boolean z10, boolean z11) {
        this.f7638a = z10;
        this.f7639b = z11;
    }

    public static a c() {
        return new a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean a() {
        return this.f7638a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean b() {
        return this.f7639b;
    }
}
