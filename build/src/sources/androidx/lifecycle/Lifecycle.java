package androidx.lifecycle;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class Lifecycle {

    /* renamed from: a  reason: collision with root package name */
    private b f4435a = new b(null);

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class State {

        /* renamed from: d  reason: collision with root package name */
        public static final State f4436d = new State("DESTROYED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final State f4437e = new State("INITIALIZED", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final State f4438i = new State("CREATED", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final State f4439o = new State("STARTED", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final State f4440p = new State("RESUMED", 4);

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ State[] f4441q;

        /* renamed from: r  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f4442r;

        static {
            State[] a10 = a();
            f4441q = a10;
            f4442r = qr.a.a(a10);
        }

        private State(String str, int i10) {
        }

        private static final /* synthetic */ State[] a() {
            return new State[]{f4436d, f4437e, f4438i, f4439o, f4440p};
        }

        public static State valueOf(String str) {
            return (State) Enum.valueOf(State.class, str);
        }

        public static State[] values() {
            return (State[]) f4441q.clone();
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
        public static final C0057a Companion;
        public static final a ON_CREATE = new a("ON_CREATE", 0);
        public static final a ON_START = new a("ON_START", 1);
        public static final a ON_RESUME = new a("ON_RESUME", 2);
        public static final a ON_PAUSE = new a("ON_PAUSE", 3);
        public static final a ON_STOP = new a("ON_STOP", 4);
        public static final a ON_DESTROY = new a("ON_DESTROY", 5);
        public static final a ON_ANY = new a("ON_ANY", 6);

        /* renamed from: androidx.lifecycle.Lifecycle$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0057a {

            /* renamed from: androidx.lifecycle.Lifecycle$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public /* synthetic */ class C0058a {

                /* renamed from: a  reason: collision with root package name */
                public static final /* synthetic */ int[] f4443a;

                static {
                    int[] iArr = new int[State.values().length];
                    try {
                        iArr[State.f4438i.ordinal()] = 1;
                    } catch (NoSuchFieldError unused) {
                    }
                    try {
                        iArr[State.f4439o.ordinal()] = 2;
                    } catch (NoSuchFieldError unused2) {
                    }
                    try {
                        iArr[State.f4440p.ordinal()] = 3;
                    } catch (NoSuchFieldError unused3) {
                    }
                    try {
                        iArr[State.f4436d.ordinal()] = 4;
                    } catch (NoSuchFieldError unused4) {
                    }
                    try {
                        iArr[State.f4437e.ordinal()] = 5;
                    } catch (NoSuchFieldError unused5) {
                    }
                    f4443a = iArr;
                }
            }

            public /* synthetic */ C0057a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final a a(State state) {
                Intrinsics.checkNotNullParameter(state, "state");
                int i10 = C0058a.f4443a[state.ordinal()];
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
                int i10 = C0058a.f4443a[state.ordinal()];
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
                int i10 = C0058a.f4443a[state.ordinal()];
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

            private C0057a() {
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public /* synthetic */ class b {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f4444a;

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
                f4444a = iArr;
            }
        }

        static {
            a[] a10 = a();
            $VALUES = a10;
            $ENTRIES = qr.a.a(a10);
            Companion = new C0057a(null);
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
            switch (b.f4444a[ordinal()]) {
                case 1:
                case 2:
                    return State.f4438i;
                case 3:
                case 4:
                    return State.f4439o;
                case 5:
                    return State.f4440p;
                case 6:
                    return State.f4436d;
                case 7:
                    throw new IllegalArgumentException(this + " has no target state");
                default:
                    throw new jr.p();
            }
        }
    }

    public abstract void a(o oVar);

    public abstract State b();

    public final b c() {
        return this.f4435a;
    }

    public abstract void d(o oVar);
}
