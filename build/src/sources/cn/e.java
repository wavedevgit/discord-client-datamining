package cn;

import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final Map f7349a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7350b;

    /* renamed from: c  reason: collision with root package name */
    private final String f7351c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f7352d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f7353e;

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
            private final a f7358a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(a button) {
                super(null);
                Intrinsics.checkNotNullParameter(button, "button");
                this.f7358a = button;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof a) && this.f7358a == ((a) obj).f7358a) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f7358a.hashCode();
            }

            public String toString() {
                return "ButtonClicked(button=" + this.f7358a + ')';
            }
        }

        /* renamed from: cn.e$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0124b extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0124b f7359a = new C0124b();

            private C0124b() {
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
        this.f7349a = buttons;
        this.f7350b = message;
        this.f7351c = title;
        this.f7352d = z10;
        this.f7353e = onEvent;
    }

    public final Map a() {
        return this.f7349a;
    }

    public final boolean b() {
        return this.f7352d;
    }

    public final String c() {
        return this.f7350b;
    }

    public final Function1 d() {
        return this.f7353e;
    }

    public final String e() {
        return this.f7351c;
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
            if (Intrinsics.areEqual(this.f7349a, eVar.f7349a) && Intrinsics.areEqual(this.f7350b, eVar.f7350b) && Intrinsics.areEqual(this.f7351c, eVar.f7351c) && this.f7352d == eVar.f7352d) {
                return true;
            }
            return false;
        }
        throw new NullPointerException("null cannot be cast to non-null type com.squareup.workflow1.ui.modal.AlertScreen");
    }

    public int hashCode() {
        return (((((this.f7349a.hashCode() * 31) + this.f7350b.hashCode()) * 31) + this.f7351c.hashCode()) * 31) + Boolean.hashCode(this.f7352d);
    }

    public String toString() {
        return "AlertScreen(buttons=" + this.f7349a + ", message=" + this.f7350b + ", title=" + this.f7351c + ", cancelable=" + this.f7352d + ", onEvent=" + this.f7353e + ')';
    }

    public /* synthetic */ e(Map map, String str, String str2, boolean z10, Function1 function1, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? o0.i() : map, (i10 & 2) != 0 ? "" : str, (i10 & 4) != 0 ? "" : str2, (i10 & 8) != 0 ? true : z10, function1);
    }
}
