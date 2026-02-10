package et;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements g {

        /* renamed from: a  reason: collision with root package name */
        private final Object f22088a;

        public a(Object conflicting) {
            Intrinsics.checkNotNullParameter(conflicting, "conflicting");
            this.f22088a = conflicting;
        }

        @Override // et.g
        public String a() {
            return "attempted to overwrite the existing value '" + this.f22088a + '\'';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final b f22089a = new b();

        private b() {
        }

        @Override // et.g
        public String a() {
            return "expected an Int value";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements g {

        /* renamed from: a  reason: collision with root package name */
        private final int f22090a;

        public c(int i10) {
            this.f22090a = i10;
        }

        @Override // et.g
        public String a() {
            return "expected at least " + this.f22090a + " digits";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements g {

        /* renamed from: a  reason: collision with root package name */
        private final int f22091a;

        public d(int i10) {
            this.f22091a = i10;
        }

        @Override // et.g
        public String a() {
            return "expected at most " + this.f22091a + " digits";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e implements g {

        /* renamed from: a  reason: collision with root package name */
        private final String f22092a;

        public e(String expected) {
            Intrinsics.checkNotNullParameter(expected, "expected");
            this.f22092a = expected;
        }

        @Override // et.g
        public String a() {
            return "expected '" + this.f22092a + '\'';
        }
    }

    String a();
}
