package lv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: lv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0522a {

        /* renamed from: a  reason: collision with root package name */
        public long f36666a;

        /* renamed from: b  reason: collision with root package name */
        public EnumC0523a f36667b;

        /* renamed from: c  reason: collision with root package name */
        public int f36668c = -1;

        /* renamed from: d  reason: collision with root package name */
        public b f36669d = b.CRONET_SOURCE_UNSPECIFIED;

        /* renamed from: e  reason: collision with root package name */
        public Boolean f36670e;

        /* renamed from: f  reason: collision with root package name */
        public c f36671f;

        /* renamed from: g  reason: collision with root package name */
        public c f36672g;

        /* renamed from: h  reason: collision with root package name */
        public int f36673h;

        /* renamed from: lv.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum EnumC0523a {
            API,
            IMPL
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum b {
        CRONET_SOURCE_UNSPECIFIED,
        CRONET_SOURCE_STATICALLY_LINKED,
        CRONET_SOURCE_PLAY_SERVICES,
        CRONET_SOURCE_FALLBACK,
        CRONET_SOURCE_PLATFORM,
        CRONET_SOURCE_FAKE
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final int f36684a;

        /* renamed from: b  reason: collision with root package name */
        private final int f36685b;

        /* renamed from: c  reason: collision with root package name */
        private final int f36686c;

        /* renamed from: d  reason: collision with root package name */
        private final int f36687d;

        public c(String str) {
            String[] split = str.split("\\.");
            this.f36684a = Integer.parseInt(split[0]);
            this.f36685b = Integer.parseInt(split[1]);
            this.f36686c = Integer.parseInt(split[2]);
            this.f36687d = Integer.parseInt(split[3]);
        }

        public int a() {
            return this.f36686c;
        }

        public int b() {
            return this.f36684a;
        }

        public int c() {
            return this.f36685b;
        }

        public int d() {
            return this.f36687d;
        }

        public String toString() {
            int i10 = this.f36684a;
            int i11 = this.f36685b;
            int i12 = this.f36686c;
            int i13 = this.f36687d;
            return i10 + "." + i11 + "." + i12 + "." + i13;
        }
    }

    public abstract void a(C0522a c0522a);
}
