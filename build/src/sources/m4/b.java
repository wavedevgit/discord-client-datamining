package m4;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends b {

        /* renamed from: a  reason: collision with root package name */
        public static final a f36754a = new a();

        private a() {
            super(null);
        }
    }

    /* renamed from: m4.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0529b extends b {

        /* renamed from: a  reason: collision with root package name */
        private final int f36755a;

        public C0529b(int i10) {
            super(null);
            this.f36755a = i10;
        }

        public final int a() {
            return this.f36755a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0529b) && this.f36755a == ((C0529b) obj).f36755a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f36755a);
        }

        public String toString() {
            return "ConstraintsNotMet(reason=" + this.f36755a + ')';
        }
    }

    public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private b() {
    }
}
