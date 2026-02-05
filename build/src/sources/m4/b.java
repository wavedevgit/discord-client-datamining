package m4;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends b {

        /* renamed from: a  reason: collision with root package name */
        public static final a f37265a = new a();

        private a() {
            super(null);
        }
    }

    /* renamed from: m4.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0493b extends b {

        /* renamed from: a  reason: collision with root package name */
        private final int f37266a;

        public C0493b(int i10) {
            super(null);
            this.f37266a = i10;
        }

        public final int a() {
            return this.f37266a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0493b) && this.f37266a == ((C0493b) obj).f37266a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f37266a);
        }

        public String toString() {
            return "ConstraintsNotMet(reason=" + this.f37266a + ')';
        }
    }

    public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private b() {
    }
}
