package vs;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements g {

        /* renamed from: a  reason: collision with root package name */
        private final Object f51901a;

        public a(Object conflicting) {
            Intrinsics.checkNotNullParameter(conflicting, "conflicting");
            this.f51901a = conflicting;
        }

        @Override // vs.g
        public String a() {
            return "attempted to overwrite the existing value '" + this.f51901a + '\'';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final b f51902a = new b();

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
        private final int f51903a;

        public c(int i10) {
            this.f51903a = i10;
        }

        @Override // vs.g
        public String a() {
            return "expected at least " + this.f51903a + " digits";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements g {

        /* renamed from: a  reason: collision with root package name */
        private final int f51904a;

        public d(int i10) {
            this.f51904a = i10;
        }

        @Override // vs.g
        public String a() {
            return "expected at most " + this.f51904a + " digits";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e implements g {

        /* renamed from: a  reason: collision with root package name */
        private final String f51905a;

        public e(String expected) {
            Intrinsics.checkNotNullParameter(expected, "expected");
            this.f51905a = expected;
        }

        @Override // vs.g
        public String a() {
            return "expected '" + this.f51905a + '\'';
        }
    }

    String a();
}
