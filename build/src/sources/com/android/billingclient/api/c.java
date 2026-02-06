package com.android.billingclient.api;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f7922a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f7923b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f7924a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f7925b;

        private a() {
        }

        public c a() {
            if (this.f7924a) {
                return new c(true, this.f7925b);
            }
            throw new IllegalArgumentException("Pending purchases for one-time products must be supported.");
        }

        public a b() {
            this.f7924a = true;
            return this;
        }
    }

    private c(boolean z10, boolean z11) {
        this.f7922a = z10;
        this.f7923b = z11;
    }

    public static a c() {
        return new a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean a() {
        return this.f7922a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean b() {
        return this.f7923b;
    }
}
