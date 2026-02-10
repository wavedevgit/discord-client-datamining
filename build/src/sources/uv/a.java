package uv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: uv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0706a {

        /* renamed from: a  reason: collision with root package name */
        public long f51271a;

        /* renamed from: b  reason: collision with root package name */
        public EnumC0707a f51272b;

        /* renamed from: c  reason: collision with root package name */
        public int f51273c = -1;

        /* renamed from: d  reason: collision with root package name */
        public b f51274d = b.CRONET_SOURCE_UNSPECIFIED;

        /* renamed from: e  reason: collision with root package name */
        public Boolean f51275e;

        /* renamed from: f  reason: collision with root package name */
        public c f51276f;

        /* renamed from: g  reason: collision with root package name */
        public c f51277g;

        /* renamed from: h  reason: collision with root package name */
        public int f51278h;

        /* renamed from: uv.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum EnumC0707a {
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
        private final int f51289a;

        /* renamed from: b  reason: collision with root package name */
        private final int f51290b;

        /* renamed from: c  reason: collision with root package name */
        private final int f51291c;

        /* renamed from: d  reason: collision with root package name */
        private final int f51292d;

        public c(String str) {
            String[] split = str.split("\\.");
            this.f51289a = Integer.parseInt(split[0]);
            this.f51290b = Integer.parseInt(split[1]);
            this.f51291c = Integer.parseInt(split[2]);
            this.f51292d = Integer.parseInt(split[3]);
        }

        public int a() {
            return this.f51291c;
        }

        public int b() {
            return this.f51289a;
        }

        public int c() {
            return this.f51290b;
        }

        public int d() {
            return this.f51292d;
        }

        public String toString() {
            int i10 = this.f51289a;
            int i11 = this.f51290b;
            int i12 = this.f51291c;
            int i13 = this.f51292d;
            return i10 + "." + i11 + "." + i12 + "." + i13;
        }
    }

    public abstract void a(C0706a c0706a);
}
