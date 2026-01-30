package vs;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements g {

        /* renamed from: a  reason: collision with root package name */
        private final Object f51917a;

        public a(Object conflicting) {
            Intrinsics.checkNotNullParameter(conflicting, "conflicting");
            this.f51917a = conflicting;
        }

        @Override // vs.g
        public String a() {
            return "attempted to overwrite the existing value '" + this.f51917a + '\'';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final b f51918a = new b();

        private b() {
        }

        @Override // vs.g
        public String a() {
            return "expected an Int value";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements g {

        /* renamed from: a  reason: collision with root package name */
        private final int f51919a;

        public c(int i10) {
            this.f51919a = i10;
        }

        @Override // vs.g
        public String a() {
            return "expected at least " + this.f51919a + " digits";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements g {

        /* renamed from: a  reason: collision with root package name */
        private final int f51920a;

        public d(int i10) {
            this.f51920a = i10;
        }

        @Override // vs.g
        public String a() {
            return "expected at most " + this.f51920a + " digits";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e implements g {

        /* renamed from: a  reason: collision with root package name */
        private final String f51921a;

        public e(String expected) {
            Intrinsics.checkNotNullParameter(expected, "expected");
            this.f51921a = expected;
        }

        @Override // vs.g
        public String a() {
            return "expected '" + this.f51921a + '\'';
        }
    }

    String a();
}
