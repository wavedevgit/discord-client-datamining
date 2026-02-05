package bt;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements g {

        /* renamed from: a  reason: collision with root package name */
        private final Object f7224a;

        public a(Object conflicting) {
            Intrinsics.checkNotNullParameter(conflicting, "conflicting");
            this.f7224a = conflicting;
        }

        @Override // bt.g
        public String a() {
            return "attempted to overwrite the existing value '" + this.f7224a + '\'';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final b f7225a = new b();

        private b() {
        }

        @Override // bt.g
        public String a() {
            return "expected an Int value";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements g {

        /* renamed from: a  reason: collision with root package name */
        private final int f7226a;

        public c(int i10) {
            this.f7226a = i10;
        }

        @Override // bt.g
        public String a() {
            return "expected at least " + this.f7226a + " digits";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements g {

        /* renamed from: a  reason: collision with root package name */
        private final int f7227a;

        public d(int i10) {
            this.f7227a = i10;
        }

        @Override // bt.g
        public String a() {
            return "expected at most " + this.f7227a + " digits";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e implements g {

        /* renamed from: a  reason: collision with root package name */
        private final String f7228a;

        public e(String expected) {
            Intrinsics.checkNotNullParameter(expected, "expected");
            this.f7228a = expected;
        }

        @Override // bt.g
        public String a() {
            return "expected '" + this.f7228a + '\'';
        }
    }

    String a();
}
