package uv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: uv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0706a {

        /* renamed from: a  reason: collision with root package name */
        public long f51840a;

        /* renamed from: b  reason: collision with root package name */
        public EnumC0707a f51841b;

        /* renamed from: c  reason: collision with root package name */
        public int f51842c = -1;

        /* renamed from: d  reason: collision with root package name */
        public b f51843d = b.CRONET_SOURCE_UNSPECIFIED;

        /* renamed from: e  reason: collision with root package name */
        public Boolean f51844e;

        /* renamed from: f  reason: collision with root package name */
        public c f51845f;

        /* renamed from: g  reason: collision with root package name */
        public c f51846g;

        /* renamed from: h  reason: collision with root package name */
        public int f51847h;

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
        private final int f51858a;

        /* renamed from: b  reason: collision with root package name */
        private final int f51859b;

        /* renamed from: c  reason: collision with root package name */
        private final int f51860c;

        /* renamed from: d  reason: collision with root package name */
        private final int f51861d;

        public c(String str) {
            String[] split = str.split("\\.");
            this.f51858a = Integer.parseInt(split[0]);
            this.f51859b = Integer.parseInt(split[1]);
            this.f51860c = Integer.parseInt(split[2]);
            this.f51861d = Integer.parseInt(split[3]);
        }

        public int a() {
            return this.f51860c;
        }

        public int b() {
            return this.f51858a;
        }

        public int c() {
            return this.f51859b;
        }

        public int d() {
            return this.f51861d;
        }

        public String toString() {
            int i10 = this.f51858a;
            int i11 = this.f51859b;
            int i12 = this.f51860c;
            int i13 = this.f51861d;
            return i10 + "." + i11 + "." + i12 + "." + i13;
        }
    }

    public abstract void a(C0706a c0706a);
}
