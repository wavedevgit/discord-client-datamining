package yb;

import yb.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class k {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a {
        public abstract k a();

        public abstract a b(yb.a aVar);

        public abstract a c(b bVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum b {
        UNKNOWN(0),
        ANDROID_FIREBASE(23);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f54213d;

        b(int i10) {
            this.f54213d = i10;
        }
    }

    public static a a() {
        return new e.b();
    }

    public abstract yb.a b();

    public abstract b c();
}
