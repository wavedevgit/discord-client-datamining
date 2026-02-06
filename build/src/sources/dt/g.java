package dt;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements g {

        /* renamed from: a  reason: collision with root package name */
        private final Object f21140a;

        public a(Object conflicting) {
            Intrinsics.checkNotNullParameter(conflicting, "conflicting");
            this.f21140a = conflicting;
        }

        @Override // dt.g
        public String a() {
            return "attempted to overwrite the existing value '" + this.f21140a + '\'';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final b f21141a = new b();

        private b() {
        }

        @Override // dt.g
        public String a() {
            return "expected an Int value";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements g {

        /* renamed from: a  reason: collision with root package name */
        private final int f21142a;

        public c(int i10) {
            this.f21142a = i10;
        }

        @Override // dt.g
        public String a() {
            return "expected at least " + this.f21142a + " digits";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements g {

        /* renamed from: a  reason: collision with root package name */
        private final int f21143a;

        public d(int i10) {
            this.f21143a = i10;
        }

        @Override // dt.g
        public String a() {
            return "expected at most " + this.f21143a + " digits";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e implements g {

        /* renamed from: a  reason: collision with root package name */
        private final String f21144a;

        public e(String expected) {
            Intrinsics.checkNotNullParameter(expected, "expected");
            this.f21144a = expected;
        }

        @Override // dt.g
        public String a() {
            return "expected '" + this.f21144a + '\'';
        }
    }

    String a();
}
