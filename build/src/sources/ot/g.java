package ot;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements g {

        /* renamed from: a  reason: collision with root package name */
        private final Object f41198a;

        public a(Object conflicting) {
            Intrinsics.checkNotNullParameter(conflicting, "conflicting");
            this.f41198a = conflicting;
        }

        @Override // ot.g
        public String a() {
            return "attempted to overwrite the existing value '" + this.f41198a + '\'';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final b f41199a = new b();

        private b() {
        }

        @Override // ot.g
        public String a() {
            return "expected an Int value";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements g {

        /* renamed from: a  reason: collision with root package name */
        private final int f41200a;

        public c(int i10) {
            this.f41200a = i10;
        }

        @Override // ot.g
        public String a() {
            return "expected at least " + this.f41200a + " digits";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d implements g {

        /* renamed from: a  reason: collision with root package name */
        private final int f41201a;

        public d(int i10) {
            this.f41201a = i10;
        }

        @Override // ot.g
        public String a() {
            return "expected at most " + this.f41201a + " digits";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e implements g {

        /* renamed from: a  reason: collision with root package name */
        private final String f41202a;

        public e(String expected) {
            Intrinsics.checkNotNullParameter(expected, "expected");
            this.f41202a = expected;
        }

        @Override // ot.g
        public String a() {
            return "expected '" + this.f41202a + '\'';
        }
    }

    String a();
}
