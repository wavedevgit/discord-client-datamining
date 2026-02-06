package kv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: kv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0473a {

        /* renamed from: a  reason: collision with root package name */
        public long f35539a;

        /* renamed from: b  reason: collision with root package name */
        public EnumC0474a f35540b;

        /* renamed from: c  reason: collision with root package name */
        public int f35541c = -1;

        /* renamed from: d  reason: collision with root package name */
        public b f35542d = b.CRONET_SOURCE_UNSPECIFIED;

        /* renamed from: e  reason: collision with root package name */
        public Boolean f35543e;

        /* renamed from: f  reason: collision with root package name */
        public c f35544f;

        /* renamed from: g  reason: collision with root package name */
        public c f35545g;

        /* renamed from: h  reason: collision with root package name */
        public int f35546h;

        /* renamed from: kv.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum EnumC0474a {
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
        private final int f35557a;

        /* renamed from: b  reason: collision with root package name */
        private final int f35558b;

        /* renamed from: c  reason: collision with root package name */
        private final int f35559c;

        /* renamed from: d  reason: collision with root package name */
        private final int f35560d;

        public c(String str) {
            String[] split = str.split("\\.");
            this.f35557a = Integer.parseInt(split[0]);
            this.f35558b = Integer.parseInt(split[1]);
            this.f35559c = Integer.parseInt(split[2]);
            this.f35560d = Integer.parseInt(split[3]);
        }

        public int a() {
            return this.f35559c;
        }

        public int b() {
            return this.f35557a;
        }

        public int c() {
            return this.f35558b;
        }

        public int d() {
            return this.f35560d;
        }

        public String toString() {
            int i10 = this.f35557a;
            int i11 = this.f35558b;
            int i12 = this.f35559c;
            int i13 = this.f35560d;
            return i10 + "." + i11 + "." + i12 + "." + i13;
        }
    }

    public abstract void a(C0473a c0473a);
}
