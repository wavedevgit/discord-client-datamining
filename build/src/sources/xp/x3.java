package xp;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class x3 {

    /* renamed from: a  reason: collision with root package name */
    public static final d f53775a = new d(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends x3 {

        /* renamed from: b  reason: collision with root package name */
        public static final a f53776b = new a();

        private a() {
            super(null);
        }

        public boolean equals(Object obj) {
            if (this == obj || (obj instanceof a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return 423652819;
        }

        public String toString() {
            return "AnyLetter";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends x3 {

        /* renamed from: b  reason: collision with root package name */
        public static final b f53777b = new b();

        private b() {
            super(null);
        }

        public boolean equals(Object obj) {
            if (this == obj || (obj instanceof b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return 495461622;
        }

        public String toString() {
            return "AnyNumber";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends x3 {

        /* renamed from: b  reason: collision with root package name */
        public static final c f53778b = new c();

        private c() {
            super(null);
        }

        public boolean equals(Object obj) {
            if (this == obj || (obj instanceof c)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return 1398807295;
        }

        public String toString() {
            return "AnyNumberOrLetter";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {
        public /* synthetic */ d(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final x3 a(char c10) {
            if (c10 != '#') {
                if (c10 != '*') {
                    if (c10 != '@') {
                        return new e(c10);
                    }
                    return a.f53776b;
                }
                return c.f53778b;
            }
            return b.f53777b;
        }

        private d() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends x3 {

        /* renamed from: b  reason: collision with root package name */
        private final char f53779b;

        public e(char c10) {
            super(null);
            this.f53779b = c10;
        }

        public final char b() {
            return this.f53779b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof e) && this.f53779b == ((e) obj).f53779b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Character.hashCode(this.f53779b);
        }

        public String toString() {
            char c10 = this.f53779b;
            return "Literal(char=" + c10 + ")";
        }
    }

    public /* synthetic */ x3(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public final boolean a(char c10) {
        if (this instanceof b) {
            return Character.isDigit(c10);
        }
        if (this instanceof a) {
            return Character.isLetter(c10);
        }
        if (this instanceof c) {
            if (Character.isDigit(c10) || Character.isLetter(c10)) {
                return true;
            }
            return false;
        } else if (this instanceof e) {
            if (c10 == ((e) this).b()) {
                return true;
            }
            return false;
        } else {
            throw new ir.p();
        }
    }

    private x3() {
    }
}
