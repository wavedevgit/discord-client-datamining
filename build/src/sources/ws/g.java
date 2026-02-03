package ws;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements g {

        /* renamed from: a  reason: collision with root package name */
        private final Object f52993a;

        public a(Object conflicting) {
            Intrinsics.checkNotNullParameter(conflicting, "conflicting");
            this.f52993a = conflicting;
        }

        @Override // ws.g
        public String a() {
            return "attempted to overwrite the existing value '" + this.f52993a + '\'';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final b f52994a = new b();

        private b() {
        }

        @Override // ws.g
        public String a() {
            return "expected an Int value";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements g {

        /* renamed from: a  reason: collision with root package name */
        private final int f52995a;

        public c(int i10) {
            this.f52995a = i10;
        }

        @Override // ws.g
        public String a() {
            return "expected at least " + this.f52995a + " digits";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements g {

        /* renamed from: a  reason: collision with root package name */
        private final int f52996a;

        public d(int i10) {
            this.f52996a = i10;
        }

        @Override // ws.g
        public String a() {
            return "expected at most " + this.f52996a + " digits";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e implements g {

        /* renamed from: a  reason: collision with root package name */
        private final String f52997a;

        public e(String expected) {
            Intrinsics.checkNotNullParameter(expected, "expected");
            this.f52997a = expected;
        }

        @Override // ws.g
        public String a() {
            return "expected '" + this.f52997a + '\'';
        }
    }

    String a();
}
