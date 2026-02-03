package ys;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements g {

        /* renamed from: a  reason: collision with root package name */
        private final Object f55282a;

        public a(Object conflicting) {
            Intrinsics.checkNotNullParameter(conflicting, "conflicting");
            this.f55282a = conflicting;
        }

        @Override // ys.g
        public String a() {
            return "attempted to overwrite the existing value '" + this.f55282a + '\'';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final b f55283a = new b();

        private b() {
        }

        @Override // ys.g
        public String a() {
            return "expected an Int value";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements g {

        /* renamed from: a  reason: collision with root package name */
        private final int f55284a;

        public c(int i10) {
            this.f55284a = i10;
        }

        @Override // ys.g
        public String a() {
            return "expected at least " + this.f55284a + " digits";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements g {

        /* renamed from: a  reason: collision with root package name */
        private final int f55285a;

        public d(int i10) {
            this.f55285a = i10;
        }

        @Override // ys.g
        public String a() {
            return "expected at most " + this.f55285a + " digits";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e implements g {

        /* renamed from: a  reason: collision with root package name */
        private final String f55286a;

        public e(String expected) {
            Intrinsics.checkNotNullParameter(expected, "expected");
            this.f55286a = expected;
        }

        @Override // ys.g
        public String a() {
            return "expected '" + this.f55286a + '\'';
        }
    }

    String a();
}
