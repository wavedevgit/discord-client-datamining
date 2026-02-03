package androidx.lifecycle;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class Lifecycle {

    /* renamed from: a  reason: collision with root package name */
    private b f4404a = new b(null);

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class State {

        /* renamed from: d  reason: collision with root package name */
        public static final State f4405d = new State("DESTROYED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final State f4406e = new State("INITIALIZED", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final State f4407i = new State("CREATED", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final State f4408o = new State("STARTED", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final State f4409p = new State("RESUMED", 4);

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ State[] f4410q;

        /* renamed from: r  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f4411r;

        static {
            State[] a10 = a();
            f4410q = a10;
            f4411r = sr.a.a(a10);
        }

        private State(String str, int i10) {
        }

        private static final /* synthetic */ State[] a() {
            return new State[]{f4405d, f4406e, f4407i, f4408o, f4409p};
        }

        public static State valueOf(String str) {
            return (State) Enum.valueOf(State.class, str);
        }

        public static State[] values() {
            return (State[]) f4410q.clone();
        }

        public final boolean d(State state) {
            Intrinsics.checkNotNullParameter(state, "state");
            if (compareTo(state) >= 0) {
                return true;
            }
            return false;
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ a[] $VALUES;
        @NotNull
        public static final C0055a Companion;
        public static final a ON_CREATE = new a("ON_CREATE", 0);
        public static final a ON_START = new a("ON_START", 1);
        public static final a ON_RESUME = new a("ON_RESUME", 2);
        public static final a ON_PAUSE = new a("ON_PAUSE", 3);
        public static final a ON_STOP = new a("ON_STOP", 4);
        public static final a ON_DESTROY = new a("ON_DESTROY", 5);
        public static final a ON_ANY = new a("ON_ANY", 6);

        /* renamed from: androidx.lifecycle.Lifecycle$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0055a {

            /* renamed from: androidx.lifecycle.Lifecycle$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public /* synthetic */ class C0056a {

                /* renamed from: a  reason: collision with root package name */
                public static final /* synthetic */ int[] f4412a;

                static {
                    int[] iArr = new int[State.values().length];
                    try {
                        iArr[State.f4407i.ordinal()] = 1;
                    } catch (NoSuchFieldError unused) {
                    }
                    try {
                        iArr[State.f4408o.ordinal()] = 2;
                    } catch (NoSuchFieldError unused2) {
                    }
                    try {
                        iArr[State.f4409p.ordinal()] = 3;
                    } catch (NoSuchFieldError unused3) {
                    }
                    try {
                        iArr[State.f4405d.ordinal()] = 4;
                    } catch (NoSuchFieldError unused4) {
                    }
                    try {
                        iArr[State.f4406e.ordinal()] = 5;
                    } catch (NoSuchFieldError unused5) {
                    }
                    f4412a = iArr;
                }
            }

            public /* synthetic */ C0055a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final a a(State state) {
                Intrinsics.checkNotNullParameter(state, "state");
                int i10 = C0056a.f4412a[state.ordinal()];
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            return null;
                        }
                        return a.ON_PAUSE;
                    }
                    return a.ON_STOP;
                }
                return a.ON_DESTROY;
            }

            public final a b(State state) {
                Intrinsics.checkNotNullParameter(state, "state");
                int i10 = C0056a.f4412a[state.ordinal()];
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 5) {
                            return null;
                        }
                        return a.ON_CREATE;
                    }
                    return a.ON_RESUME;
                }
                return a.ON_START;
            }

            public final a c(State state) {
                Intrinsics.checkNotNullParameter(state, "state");
                int i10 = C0056a.f4412a[state.ordinal()];
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            return null;
                        }
                        return a.ON_RESUME;
                    }
                    return a.ON_START;
                }
                return a.ON_CREATE;
            }

            private C0055a() {
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public /* synthetic */ class b {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f4413a;

            static {
                int[] iArr = new int[a.values().length];
                try {
                    iArr[a.ON_CREATE.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[a.ON_STOP.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[a.ON_START.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                try {
                    iArr[a.ON_PAUSE.ordinal()] = 4;
                } catch (NoSuchFieldError unused4) {
                }
                try {
                    iArr[a.ON_RESUME.ordinal()] = 5;
                } catch (NoSuchFieldError unused5) {
                }
                try {
                    iArr[a.ON_DESTROY.ordinal()] = 6;
                } catch (NoSuchFieldError unused6) {
                }
                try {
                    iArr[a.ON_ANY.ordinal()] = 7;
                } catch (NoSuchFieldError unused7) {
                }
                f4413a = iArr;
            }
        }

        static {
            a[] a10 = a();
            $VALUES = a10;
            $ENTRIES = sr.a.a(a10);
            Companion = new C0055a(null);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{ON_CREATE, ON_START, ON_RESUME, ON_PAUSE, ON_STOP, ON_DESTROY, ON_ANY};
        }

        public static final a d(State state) {
            return Companion.a(state);
        }

        public static final a f(State state) {
            return Companion.c(state);
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) $VALUES.clone();
        }

        public final State e() {
            switch (b.f4413a[ordinal()]) {
                case 1:
                case 2:
                    return State.f4407i;
                case 3:
                case 4:
                    return State.f4408o;
                case 5:
                    return State.f4409p;
                case 6:
                    return State.f4405d;
                case 7:
                    throw new IllegalArgumentException(this + " has no target state");
                default:
                    throw new lr.p();
            }
        }
    }

    public abstract void a(o oVar);

    public abstract State b();

    public final b c() {
        return this.f4404a;
    }

    public abstract void d(o oVar);
}
