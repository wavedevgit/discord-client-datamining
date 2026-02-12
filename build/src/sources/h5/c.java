package h5;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends c {

        /* renamed from: a  reason: collision with root package name */
        public final int f26186a;

        public a(int i10) {
            super(null);
            this.f26186a = i10;
            if (i10 > 0) {
                return;
            }
            throw new IllegalArgumentException("px must be > 0.");
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && this.f26186a == ((a) obj).f26186a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f26186a;
        }

        public String toString() {
            return String.valueOf(this.f26186a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends c {

        /* renamed from: a  reason: collision with root package name */
        public static final b f26187a = new b();

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
