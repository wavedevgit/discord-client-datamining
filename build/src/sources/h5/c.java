package h5;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends c {

        /* renamed from: a  reason: collision with root package name */
        public final int f25785a;

        public a(int i10) {
            super(null);
            this.f25785a = i10;
            if (i10 > 0) {
                return;
            }
            throw new IllegalArgumentException("px must be > 0.");
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && this.f25785a == ((a) obj).f25785a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f25785a;
        }

        public String toString() {
            return String.valueOf(this.f25785a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends c {

        /* renamed from: a  reason: collision with root package name */
        public static final b f25786a = new b();

        private b() {
            super(null);
        }

        public String toString() {
            return "Dimension.Undefined";
        }
    }

    public /* synthetic */ c(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private c() {
    }
}
