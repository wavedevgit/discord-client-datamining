package fn;

import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final Map f23163a;

    /* renamed from: b  reason: collision with root package name */
    private final String f23164b;

    /* renamed from: c  reason: collision with root package name */
    private final String f23165c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f23166d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f23167e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        POSITIVE,
        NEGATIVE,
        NEUTRAL
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            private final a f23172a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(a button) {
                super(null);
                Intrinsics.checkNotNullParameter(button, "button");
                this.f23172a = button;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof a) && this.f23172a == ((a) obj).f23172a) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f23172a.hashCode();
            }

            public String toString() {
                return "ButtonClicked(button=" + this.f23172a + ')';
            }
        }

        /* renamed from: fn.e$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0317b extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0317b f23173a = new C0317b();

            private C0317b() {
                super(null);
            }
        }

        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    public e(Map buttons, String message, String title, boolean z10, Function1 onEvent) {
        Intrinsics.checkNotNullParameter(buttons, "buttons");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(onEvent, "onEvent");
        this.f23163a = buttons;
        this.f23164b = message;
        this.f23165c = title;
        this.f23166d = z10;
        this.f23167e = onEvent;
    }

    public final Map a() {
        return this.f23163a;
    }

    public final boolean b() {
        return this.f23166d;
    }

    public final String c() {
        return this.f23164b;
    }

    public final Function1 d() {
        return this.f23167e;
    }

    public final String e() {
        return this.f23165c;
    }

    public boolean equals(Object obj) {
        Class<?> cls;
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            cls = null;
        } else {
            cls = obj.getClass();
        }
        if (!Intrinsics.areEqual(e.class, cls)) {
            return false;
        }
        if (obj != null) {
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f23163a, eVar.f23163a) && Intrinsics.areEqual(this.f23164b, eVar.f23164b) && Intrinsics.areEqual(this.f23165c, eVar.f23165c) && this.f23166d == eVar.f23166d) {
                return true;
            }
            return false;
        }
        throw new NullPointerException("null cannot be cast to non-null type com.squareup.workflow1.ui.modal.AlertScreen");
    }

    public int hashCode() {
        return (((((this.f23163a.hashCode() * 31) + this.f23164b.hashCode()) * 31) + this.f23165c.hashCode()) * 31) + Boolean.hashCode(this.f23166d);
    }

    public String toString() {
        return "AlertScreen(buttons=" + this.f23163a + ", message=" + this.f23164b + ", title=" + this.f23165c + ", cancelable=" + this.f23166d + ", onEvent=" + this.f23167e + ')';
    }

    public /* synthetic */ e(Map map, String str, String str2, boolean z10, Function1 function1, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? o0.i() : map, (i10 & 2) != 0 ? "" : str, (i10 & 4) != 0 ? "" : str2, (i10 & 8) != 0 ? true : z10, function1);
    }
}
