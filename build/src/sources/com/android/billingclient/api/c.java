package com.android.billingclient.api;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f8670a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f8671b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f8672a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f8673b;

        private a() {
        }

        public c a() {
            if (this.f8672a) {
                return new c(true, this.f8673b);
            }
            throw new IllegalArgumentException("Pending purchases for one-time products must be supported.");
        }

        public a b() {
            this.f8672a = true;
            return this;
        }
    }

    private c(boolean z10, boolean z11) {
        this.f8670a = z10;
        this.f8671b = z11;
    }

    public static a c() {
        return new a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean a() {
        return this.f8670a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean b() {
        return this.f8671b;
    }
}
